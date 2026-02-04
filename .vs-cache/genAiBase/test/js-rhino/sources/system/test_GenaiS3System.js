/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiS3System';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setAwsS3BucketCreds(['c3--test-genai', 'c3--test-genai-write', 'c3--test-genai-create']);
    this.ctx = TestApi.createContext(filename);
    this.sourceSystems = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceSystem.S3', [
      {
        name: 'test aws 1',
        bucketName: '/test-bucket/aws1',
        mountName: '/test-mount/aws1',
      },
      {
        name: 'test aws 2',
        bucketName: '/test-bucket/aws2',
        mountName: '/test-mount/aws2',
      },
      {
        name: 'test aws 3',
        bucketName: '/test-bucket/aws3',
        mountName: '/test-mount/aws3',
      },
    ]);
    this.mountName = 'GENAI_TEST';
    this.bucketName = 'c3--test-genai';
    this.writeBucketName = 'c3--test-genai-write';
    this.rootUrl = Genai.SourceSystem.S3.getRootUrl(this.bucketName);
    this.listFiles = C3.FileSystem.s3().listFiles(this.rootUrl).files;
    this.supportedListFiles = Genai.Source.filterSourcesForFileTypes(this.listFiles);
    this.credentials = Genai.PrivilegedAction.getCloudResource(this.rootUrl, this.bucketName).credentials;
    this.adminUser = TestIdp.createTestUser(filename + '_adminUser', 'Password1', ['Genai.AdminUser']);
    this.spyOnSyncFiles = TestApi.spyOn(this.ctx, Genai.SourceCollection.Utils, 'sync').returnValue(null).register();
  });

  afterAll(function () {
    var collection = Genai.SourceCollection.fetch({
      include: 'this, files',
      filter: Filter.eq('rootUrl', this.rootUrl),
      limit: 1,
    }).first();
    Genai.SourceFile.removeAll({ filter: Filter.intersects('id', collection.files.pluck('id')) }, true);
    collection.remove();
    Genai.PrivilegedAction.setCredentialsForResource(this.rootUrl, this.bucketName, this.credentials);
    Genai.PrivilegedAction.clearAwsBucketCache();
    TestIdp.removeUser(this.adminUser);
    this.spyOnSyncFiles.unregister();
    TestApi.teardown(this.ctx);
  });

  describe('::doesNameExist', function () {
    it('should return false if given name does not exist on any instance', function () {
      expect(Genai.SourceSystem.S3.doesNameExist('uniqueAws')).toBeFalse();
    });

    it('should return true if given name exists on at least one instance', function () {
      expect(Genai.SourceSystem.S3.doesNameExist('test aws 1')).toBeTrue();
    });
  });

  describe('::createSourceSystem', function () {
    beforeAll(function () {
      this.s3Spec = Genai.SourceSystem.S3.CreateSpec.make({
        name: 'test-system',
        description: 'test system',
        mountName: this.mountName,
        bucketName: this.bucketName,
      });
    });

    describe('when there is NOT an active project for the user', function () {
      beforeAll(function () {
        this.collectionCountBefore = Genai.SourceCollection.fetchCount();
        this.spyOnSyncFilesCountBefore = this.spyOnSyncFiles.getActionMock().callCount();
        this.sourceSystem = Genai.SourceSystem.S3.createSourceSystem(this.s3Spec, [this.rootUrl]);
        this.collectionCountAfter = Genai.SourceCollection.fetchCount();
        this.collection = Genai.SourceCollection.fetch({
          include: 'this, fileCount, projects',
          filter: Filter.eq('rootUrl', this.rootUrl),
          limit: 1,
        }).first();
        this.collectionConfig = Genai.SourceCollection.Metadata.Config.forConfigKey(this.collection.id);
      });

      afterAll(function () {
        this.sourceSystem.remove();
        this.collection.remove();
      });

      it('creates the new source system and corresponding Genai.SourceCollection and Genai.SourceFile', function () {
        expect(this.collectionCountAfter)
          .withContext('collection count does not match')
          .toEqual(this.collectionCountBefore + 1);
        expect(this.spyOnSyncFiles.getActionMock().callCount())
          .withContext('sync files not called')
          .toEqual(this.spyOnSyncFilesCountBefore + 2);
        expect(this.collection.projects.length).toEqual(0);
        expect(this.collectionConfig.embedMetadata).toEqual(true);
      });
    });

    describe('when there is an active project for the user', function () {
      beforeAll(function () {
        [this.tutorialProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);

        this.userSettings = TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
          user: User.myUser(),
          activeProject: this.tutorialProject,
        });

        this.spyOnSyncFilesCountBefore = this.spyOnSyncFiles.getActionMock().callCount();

        this.sourceSystem = Genai.SourceSystem.S3.createSourceSystem(this.s3Spec, [this.rootUrl]);
      });

      afterAll(function () {
        this.sourceSystem.remove();
      });

      it('creates the new source system and corresponding Genai.SourceCollection', function () {
        var collection = Genai.SourceCollection.fetch({
          include: 'this, fileCount, projects.id',
          filter: Filter.eq('rootUrl', this.rootUrl),
          limit: 1,
        }).first();
        expect(collection.projects.pluck('id')).toContain(this.tutorialProject.id);
        expect(this.spyOnSyncFiles.getActionMock().callCount())
          .withContext('sync not called')
          .toEqual(this.spyOnSyncFilesCountBefore + 2);
      });
    });
  });

  describe('::dedupRootUrls', function () {
    beforeAll(function () {
      this.rootUrls = [
        'folder1/',
        'folder1/test1.txt',
        'folder1/test2.txt',
        'folder1/test3.txt',
        'folder1/test4.txt',
        'folder1/test5.txt',
        'folder3/',
        'folder3/folder31/',
        'folder3/folder31/',
        'folder3/folder31/folder311',
        'folder2/folder21/',
      ].map((path) => {
        return 's3://' + this.writeBucketName + '/' + path;
      });
    });

    it('returns the de-duplicated root urls to create source collections', function () {
      var dedupRootUrls = Genai.SourceSystem.S3.dedupRootUrls(this.rootUrls);
      expect(dedupRootUrls).toEqual(
        ['folder1/', 'folder2/folder21/', 'folder3/'].map((path) => {
          return 's3://' + this.writeBucketName + '/' + path;
        })
      );
    });
  });

  describe('::validateConnection', function () {
    beforeAll(function () {
      this.sourceSystem = TestApi.upsertEntity(this.ctx, 'Genai.SourceSystem.S3', {
        name: 'test validate credentials 1',
        bucketName: this.bucketName,
        mountName: 'GENAI_TEST',
      });
      this.sourceSystemWithCredsNotSet = TestApi.upsertEntity(this.ctx, 'Genai.SourceSystem.S3', {
        name: 'test validate credentials 2',
        bucketName: this.bucketName + '-1',
        mountName: 'GENAI_TEST',
      });
      this.s3Spec = Genai.SourceSystem.S3.CreateSpec.make({
        name: 'S3',
        bucketName: this.bucketName,
        region: this.credentials.region,
        accessKey: this.credentials.accessKey,
        secretKey: this.credentials.secretKey,
      });
      this.s3SpecWithoutKeys = Genai.SourceSystem.S3.CreateSpec.make({
        name: 'S3WithoutKeys',
        bucketName: this.bucketName + '-create',
        region: 'us-east-1',
      });
      this.s3SpecWithDuplicateName = this.s3Spec.withName('test validate credentials 1');
      this.s3SpecWithIncorrectBucketName = this.s3Spec.withBucketName('fakeBucket');
      this.s3SpecWithIncorrectRegion = this.s3Spec.withRegion('fakeRegion');
      this.s3SpecWithIncorrectAccessKey = this.s3Spec.withAccessKey('fakeAccessKey');
      this.s3SpecWithIncorrectSecretKey = this.s3Spec.withSecretKey('fakeSecretKey');
      var rootS3Bucket = Str.splitPath(C3.FileSystem.s3().rootUrl())[1];
      this.s3SpecWithSystemMountForBucket = this.s3Spec.withBucketName(rootS3Bucket);
      this.s3SpecWithFolderInSystemMountForBucket = this.s3Spec.withBucketName(
        rootS3Bucket + '/' + Str.splitPath(C3.FileSystem.s3().rootUrl())[2]
      );

      Genai.App.ReadOnlyConfig.inst().setConfigValue('isCopyCredentialsAllowed', true);
    });

    afterAll(function () {
      this.sourceSystem.remove();
      this.sourceSystemWithCredsNotSet.remove();

      Genai.App.ReadOnlyConfig.inst().setConfigValue('isCopyCredentialsAllowed', false);
    });

    it('should return an error when source system with correct credential is passed and it is NOT allowed to copy credentials', function () {
      Genai.App.ReadOnlyConfig.inst().setConfigValue('isCopyCredentialsAllowed', false);

      var validatedResult = Genai.SourceSystem.S3.validateConnection(this.s3SpecWithoutKeys, this.sourceSystem);
      expect(validatedResult.success).withContext('success').toBe(false);
      expect(validatedResult.error).withContext('error').toContain('Action not allowed');
      expect(validatedResult.mountName).withContext('mountName').toBeUndefined();
      expect(validatedResult.mountUrl).withContext('mountUrl').toBeUndefined();
    });

    it('should return successfully when source system with correct credential is passed and it is allowed to copy credentials', function () {
      Genai.App.ReadOnlyConfig.inst().setConfigValue('isCopyCredentialsAllowed', true);

      var validatedResult = Genai.SourceSystem.S3.validateConnection(this.s3SpecWithoutKeys, this.sourceSystem);
      expect(validatedResult.success).withContext('success').toBe(true);
      expect(validatedResult.error).withContext('error').toBeUndefined();
      expect(validatedResult.mountName).withContext('mountName').toContain(this.s3SpecWithoutKeys.bucketName);
      expect(validatedResult.mountUrl).withContext('mountUrl').toBeDefined();
    });

    it('should not throw an error when an admin user tries to validate the connection', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (spec) {
          expect(function () {
            Genai.SourceSystem.S3.validateConnection(spec);
          }).not.toThrowError();
        }).partiallyCall([this.s3Spec])
      );
    }).pend('GEN-12919');

    it('should return successfully with correct credentials', function () {
      var validatedResult = Genai.SourceSystem.S3.validateConnection(this.s3Spec);
      expect(validatedResult.success).toBe(true);
      expect(validatedResult.mountName).toContain(this.s3Spec.bucketName);
      expect(validatedResult.mountUrl).toBeDefined();
    });

    it('should fail with duplicate name', function () {
      var validatedResult = Genai.SourceSystem.S3.validateConnection(this.s3SpecWithDuplicateName);
      expect(validatedResult.success).toBe(false);
      expect(validatedResult.error).toContain('Name already exists on S3 connected source');
      expect(validatedResult.mountName).toBeUndefined();
      expect(validatedResult.mountUrl).toBeUndefined();
    });

    it('should fail with incorrect bucket name', function () {
      var validatedResult = Genai.SourceSystem.S3.validateConnection(this.s3SpecWithIncorrectBucketName);
      expect(validatedResult.success).toBe(false);
      expect(validatedResult.error).toContain('Incorrect bucket name: Please check the provided bucket name.');
      expect(validatedResult.mountName).toBeUndefined();
      expect(validatedResult.mountUrl).toBeUndefined();
    });

    it('should fail with incorrect region', function () {
      var validatedResult = Genai.SourceSystem.S3.validateConnection(this.s3SpecWithIncorrectRegion);
      expect(validatedResult.success).toBe(false);
      expect(validatedResult.error).toContain('Incorrect region: Please check the provided region.');
      expect(validatedResult.mountName).toBeUndefined();
      expect(validatedResult.mountUrl).toBeUndefined();
    }).pend('PLAT-114650, GEN-12290');

    it('should fail with incorrect access key', function () {
      var validatedResult = Genai.SourceSystem.S3.validateConnection(this.s3SpecWithIncorrectAccessKey);
      expect(validatedResult.success).toBe(false);
      expect(validatedResult.error).toContain('Incorrect access key: Please check the provided access key.');
      expect(validatedResult.mountName).toBeUndefined();
      expect(validatedResult.mountUrl).toBeUndefined();
    }).pend('PLAT-114650, GEN-12290');

    it('should fail with incorrect secret key', function () {
      var validatedResult = Genai.SourceSystem.S3.validateConnection(this.s3SpecWithIncorrectSecretKey);
      expect(validatedResult.success).toBe(false);
      expect(validatedResult.error).toContain('Incorrect secret key: Please check the provided secret key.');
      expect(validatedResult.mountName).toBeUndefined();
      expect(validatedResult.mountUrl).toBeUndefined();
    }).pend('PLAT-114650, GEN-12290');

    it('should return fail when source system has missing credentials', function () {
      var validatedResult = Genai.SourceSystem.S3.validateConnection(
        this.s3SpecWithoutKeys,
        this.sourceSystemWithCredsNotSet
      );
      expect(validatedResult.success).toBe(false);
      expect(validatedResult.error).toContain('Failed to copy credentials.');
      expect(validatedResult.mountName).toBeUndefined();
      expect(validatedResult.mountUrl).toBeUndefined();
    });

    describe('should fail when the provided bucketName is system-provided', function () {
      _.each(
        [
          { key: 'with', sourceSystem: this.sourceSystem },
          { key: 'without', sourceSystem: null },
        ],
        function (testObj) {
          _.each(['nested', 'non-nested'], function (innerBucketDesc) {
            it('and ' + innerBucketDesc + ', ' + testObj.key + ' copied source system', function () {
              var spec =
                innerBucketDesc === 'nested'
                  ? this.s3SpecWithFolderInSystemMountForBucket
                  : this.s3SpecWithSystemMountForBucket;
              var validatedResult = Genai.SourceSystem.S3.validateConnection(spec, testObj.sourceSystem);
              expect(validatedResult.success).toBe(false);
              expect(validatedResult.error).toContain('is system-provided and cannot be added as an external source');
              expect(validatedResult.mountName).toBeUndefined();
              expect(validatedResult.mountUrl).toBeUndefined();
            });
          });
        }
      );
    });
  });

  describe('::getNextMountName', function () {
    beforeAll(function () {
      this.mountNameToReuse = ('Genai.SourceSystem.S3-' + this.writeBucketName + '-' + Uuid.create()).toLowerCase();
      C3.FileSystem.s3().setMount(
        this.mountNameToReuse,
        Genai.SourceSystem.S3.getRootUrl(this.writeBucketName),
        ConfigOverride.APP
      );
    });

    afterAll(function () {
      C3.FileSystem.s3().removeMount(this.mountNameToReuse, ConfigOverride.APP);
    });

    it('should return a new mountName when no Genai.SourceSystem.S3 exists and no mount exists', function () {
      var bucketName = 'getNextMountNameTest';
      var mountName = ('Genai.SourceSystem.S3-' + bucketName + '-').toLowerCase();
      var s3SystemsBeforeCount = Genai.SourceSystem.S3.fetchCount({
        filter: Filter.intersects('mountName', mountName),
      });
      expect(s3SystemsBeforeCount).toEqual(0);
      var createdMountName = Genai.SourceSystem.S3.getNextMountName(bucketName);
      expect(createdMountName).toContain(mountName);
    });

    it('should reuse the mount if mount exists and no Genai.SourceSystem.S3 exists', function () {
      var s3SystemsBeforeCount = Genai.SourceSystem.S3.fetchCount({
        filter: Filter.eq('mountName', this.mountNameToReuse),
      });
      expect(s3SystemsBeforeCount).toEqual(0);
      var createdMountName = Genai.SourceSystem.S3.getNextMountName(this.writeBucketName);
      expect(createdMountName).toEqual(this.mountNameToReuse);
    });

    it('should return new mount if mount exists and Genai.SourceSystem.S3 exists with that mount', function () {
      this.sourceSystem = TestApi.upsertEntity(this.ctx, 'Genai.SourceSystem.S3', {
        name: 'test validate credentials',
        bucketName: this.writeBucketName,
        mountName: this.mountNameToReuse,
      });
      var mountName = Genai.SourceSystem.S3.getNextMountName(this.writeBucketName);
      expect(mountName).toContain(('Genai.SourceSystem.S3-' + this.writeBucketName + '-').toLowerCase());
      expect(mountName).not.toEqual(this.mountNameToReuse);
    });
  });
});
