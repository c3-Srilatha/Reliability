/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFileMetadataTag';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      description: 'test collection',
      name: 'test collection',
      rootUrl: 'root/url',
      targetUrl: 'target/url',
    }).get('this');

    this.sourceFile1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      originalFile: C3.File.make('file1'),
      collection: this.collection,
      metadata: Genai.SourceFile.Metadata.make({ fileName: 'file1' }),
    }).get('this, metadata');

    this.sourceFile2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      originalFile: C3.File.make('file2'),
      collection: this.collection,
      metadata: Genai.SourceFile.Metadata.make({ fileName: 'file2' }),
    }).get('this, metadata');

    this.sourceFile3 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      originalFile: C3.File.make('file3'),
      collection: this.collection,
      metadata: Genai.SourceFile.Metadata.make({ fileName: 'file3' }),
    }).get('this, metadata');

    this.tagLabel1 = 'tag 1';
    this.tagLabel2 = 'tag 2';
    this.tagLabel3 = 'tag 3';
    this.tagLabel4 = 'tag 4';
    this.tagLabel5 = 'tag 5';
    this.tagLabel6 = 'tag 6';
    this.longTagLabel = 'this is a ' + 'very '.repeat(500) + 'long tag';
    this.categoryLabel1 = 'categoryTest1';
    this.categoryLabel2 = 'categoryTest2';
    this.tags = [
      this.tagLabel1,
      this.tagLabel2,
      this.tagLabel3,
      this.tagLabel4 + this.categoryLabel1,
      this.tagLabel5 + this.categoryLabel2,
    ];
    this.tags = this.tags.map((e) => {
      return Str.safeId(e);
    });
    this.manualPrefix = Genai.SourceFile.Metadata.TypeEnum.MANUAL + '';

    // Clean data
    TestApi.cleanPgVectorRetrieverForTestDataset('alabamaBond');
    TestApi.cleanPgVectorRetrieverForTestDataset('worldFacts');
    TestApi.cleanPgVectorRetrieverForTestDataset('c3DocumentationV6');
    TestApi.waitForSetup(this.ctx, null, 1, 60);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.SourceFile.Metadata.Tag.removeAll({ filter: Filter.intersects('id', this.tags) }, true);
    Genai.SourceFile.Metadata.Category.removeAll(
      { filter: Filter.intersects('label', [this.categoryLabel1, this.categoryLabel2]) },
      true
    );
  });

  describe('fromString', function () {
    it('reports an error when a tag is an empty string', function () {
      expect(function () {
        Genai.SourceFile.Metadata.Tag.fromString('');
      }).toThrowError(/Tag is not allowed/);
    });

    it('reports an error when a tag is null', function () {
      expect(function () {
        Genai.SourceFile.Metadata.Tag.fromString(null);
      }).toThrowError(/Tag is not allowed/);
    });

    it('reports an error when a tag is undefined', function () {
      expect(function () {
        Genai.SourceFile.Metadata.Tag.fromString();
      }).toThrow();
    });

    it('converts a string to a Tag', function () {
      var tag = Genai.SourceFile.Metadata.Tag.fromString(this.tagLabel1);
      expect(tag.id).toBeDefined();
      expect(tag.id).toEqual(this.manualPrefix + this.tagLabel1);
      expect(tag.label).toEqual(this.tagLabel1);
      expect(tag.metadataType).toEqual(Genai.SourceFile.Metadata.TypeEnum.MANUAL);
    });

    it('gracefully handles long tags', function () {
      var tag = Genai.SourceFile.Metadata.Tag.fromString(this.longTagLabel);
      expect(tag.id).toBeDefined();
      expect(tag.id).toEqual(Str.safeId(this.manualPrefix + this.longTagLabel));
      expect(tag.label).toEqual(this.longTagLabel);
    });

    it('converts a tag id with format "<type><value>" to a Tag', function () {
      var tag = Genai.SourceFile.Metadata.Tag.fromString(this.manualPrefix + this.tagLabel1);
      expect(tag.id).toBeDefined();
      expect(tag.id).toEqual(this.manualPrefix + this.tagLabel1);
      expect(tag.label).toEqual(this.tagLabel1);
      expect(tag.metadataType).toEqual(Genai.SourceFile.Metadata.TypeEnum.MANUAL);
    });

    it('converts a tag id with format "<type><category><value>" to a Tag', function () {
      var tag = Genai.SourceFile.Metadata.Tag.fromString(
        Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC + '' + this.categoryLabel1 + '' + this.tagLabel4
      );
      expect(tag.id).toBeDefined();
      expect(tag.id).toEqual(
        Str.safeId(Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC + '' + this.categoryLabel1 + '' + this.tagLabel4)
      );
      expect(tag.label).toEqual(this.tagLabel4);
      expect(tag.metadataType).toEqual(Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC);
    });
  });

  describe('fromSpec', function () {
    it('reports an error when a tag is an empty string', function () {
      expect(function () {
        Genai.SourceFile.Metadata.Tag.fromSpec({ label: '', category: 'category' });
      }).toThrowError(/Tag is not allowed/);
    });

    it('reports an error when a tag is null', function () {
      expect(function () {
        Genai.SourceFile.Metadata.Tag.fromSpec({ label: null, category: 'category' });
      }).toThrowError(/Tag is not allowed/);
    });

    it('reports an error when a tag is undefined', function () {
      expect(function () {
        Genai.SourceFile.Metadata.Tag.fromSpec({ category: 'category' });
      }).toThrow();
    });

    it('converts a spec to a Tag and create Category base in the Spec with MANUAL metadataType as default', function () {
      var tag = Genai.SourceFile.Metadata.Tag.fromSpec({
        label: this.tagLabel4,
        category: this.categoryLabel1,
      });
      tag.upsert();
      var category = Genai.SourceFile.Metadata.Category.fetch({
        filter: Filter.eq('label', this.categoryLabel1),
        include: 'label, metadataType, tags',
        limit: 1,
      }).objs.first();

      expect(tag.id).toEqual(
        Str.safeId(Genai.SourceFile.Metadata.TypeEnum.MANUAL + '' + this.categoryLabel1 + '' + this.tagLabel4)
      );
      expect(tag.label).toEqual(this.tagLabel4);
      expect(tag.category.id).toEqual(category.id);
      expect(tag.metadataType).toEqual(Genai.SourceFile.Metadata.TypeEnum.MANUAL);
      expect(category.metadataType).toEqual(Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC);
      expect(category.label).toEqual(this.categoryLabel1);
      expect(category.tags.length).toEqual(1);
      expect(category.tags[0].id).toEqual(tag.id);
    });

    it('converts a spec to a Tag and create Category base in the Spec with AUTOMATIC metadataType', function () {
      var tag = Genai.SourceFile.Metadata.Tag.fromSpec({
        label: this.tagLabel5,
        category: this.categoryLabel2,
        metadataType: Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC,
      });
      tag.upsert();
      var category = Genai.SourceFile.Metadata.Category.fetch({
        filter: Filter.eq('label', this.categoryLabel2),
        include: 'label, metadataType, tags',
        limit: 1,
      }).objs.first();

      expect(tag.id).toEqual(
        Str.safeId(Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC + '' + this.categoryLabel2 + '' + this.tagLabel5)
      );
      expect(tag.label).toEqual(this.tagLabel5);
      expect(tag.category.id).toEqual(category.id);
      expect(tag.metadataType).toEqual(Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC);
      expect(category.metadataType).toEqual(Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC);
      expect(category.label).toEqual(this.categoryLabel2);
      expect(category.tags.length).toEqual(1);
      expect(category.tags[0].id).toEqual(tag.id);
    });
  });

  describe('toString', function () {
    it('converts a tag to the label string', function () {
      expect(Genai.SourceFile.Metadata.Tag.fromString(this.tagLabel3).toString()).toEqual(this.tagLabel3);
    });

    describe('when the tag contains a category', function () {
      beforeAll(function () {
        this.tag = Genai.SourceFile.Metadata.Tag.fromSpec({
          label: this.tagLabel4,
          category: this.categoryLabel1,
        });
      });

      afterAll(function () {
        this.tag.remove();
      });

      it('generates the string in the format "<type><category><value>"', function () {
        expect(this.tag.toString()).toEqual(
          Genai.SourceFile.Metadata.TypeEnum.MANUAL + '' + this.categoryLabel1 + '' + this.tagLabel4
        );
      });
    });

    describe('when the tag does not contain a category', function () {
      beforeAll(function () {
        this.tag = Genai.SourceFile.Metadata.Tag.make({
          label: this.tagLabel1,
        }).upsert();
      });

      afterAll(function () {
        this.tag.remove();
      });

      it('generates the string in the format "<value>"', function () {
        expect(this.tag.toString()).toEqual(this.tagLabel1);
      });
    });
  });

  describe('addTag', function () {
    it('adds a new tag', function () {
      var tags = TestApi.addTagAndReturnTagList(this.sourceFile1, this.tagLabel1);
      TestApi.checkTags(tags, [this.manualPrefix + this.tagLabel1]);
    });

    it('adds a second tag to the first source', function () {
      var tags = TestApi.addTagAndReturnTagList(this.sourceFile1, this.tagLabel2);
      TestApi.checkTags(tags, [this.manualPrefix + this.tagLabel1, this.manualPrefix + this.tagLabel2]);
    });

    it('adds a tag to a different source', function () {
      var tags = TestApi.addTagAndReturnTagList(this.sourceFile2, this.tagLabel3);
      TestApi.checkTags(tags, [this.manualPrefix + this.tagLabel3]);
    });

    it('adds a tag that is present in another file', function () {
      var tags = TestApi.addTagAndReturnTagList(this.sourceFile1, this.tagLabel3);
      TestApi.checkTags(tags, [
        this.manualPrefix + this.tagLabel1,
        this.manualPrefix + this.tagLabel2,
        this.manualPrefix + this.tagLabel3,
      ]);
    });

    it('does not duplicate a tag already on the file', function () {
      var tags = TestApi.addTagAndReturnTagList(this.sourceFile1, this.tagLabel1);
      TestApi.checkTags(tags, [
        this.manualPrefix + this.tagLabel1,
        this.manualPrefix + this.tagLabel2,
        this.manualPrefix + this.tagLabel3,
      ]);
    });

    it('does not affect other source metadata', function () {
      expect(this.sourceFile1.get().metadata.fileName).toEqual('file1');
      expect(this.sourceFile2.get().metadata.fileName).toEqual('file2');
    });
  });

  describe('beforeRemove', function () {
    beforeAll(function () {
      TestApi.addTagAndReturnTagList(this.sourceFile3, this.tagLabel6);
    });

    it('remove the tags from all the files', function () {
      var tag = Genai.SourceFile.Metadata.Tag.fromString(this.tagLabel6);
      tag.remove();
      expect(Genai.SourceFile.fetchCount({ filter: Filter.intersects('metadata.tags', [this.tagLabel6]) })).toEqual(0);
    });
  });

  describe('removeTag', function () {
    it('removes tag from file if it exists and returns true', function () {
      var tags = TestApi.removeTagAndReturnTagList(this.sourceFile1, this.tagLabel1, true);
      TestApi.checkTags(tags, [this.manualPrefix + this.tagLabel2, this.manualPrefix + this.tagLabel3]);

      tags = TestApi.removeTagAndReturnTagList(this.sourceFile2, this.tagLabel3, true);
      TestApi.checkTags(tags, []);
    });

    it('cannot remove a tag and returns false', function () {
      var tags = TestApi.removeTagAndReturnTagList(this.sourceFile1, this.tagLabel1, false);
      TestApi.checkTags(tags, [this.manualPrefix + this.tagLabel2, this.manualPrefix + this.tagLabel3]);

      tags = TestApi.removeTagAndReturnTagList(this.sourceFile2, this.tagLabel3, false);
      TestApi.checkTags(tags, []);
    });

    it('does not affect other source metadata', function () {
      expect(this.sourceFile1.get().metadata.fileName).toEqual('file1');
      expect(this.sourceFile2.get().metadata.fileName).toEqual('file2');
    });
  });

  describe('verify call of previewCategories from Genai.SourceFile.Metadata.Tagging', function () {
    it('::previewCategories', function () {
      var documentSampleSize = Genai.SourceFile.Metadata.Tagging.Config.configValue('documentSampleSize');
      var sourceFiles = Genai.SourceFile.fetchForUser({
        filter: Filter.endsWith('metadata.fileType', Genai.SourceFileTypes.PDF),
        include: 'id',
        limit: documentSampleSize,
      }).objs;
      inst1 = Genai.SourceFile.Metadata.Tagging.identifyFilterCategories(sourceFiles);
      inst2 = Genai.SourceFile.Metadata.Tagging.previewCategories();
      expect(inst1.active).toEqual(true);
      expect(inst2.active).toEqual(true);
    });

    it('::previewCategories with spy action on Genai.SourceFile.Metadata.Tagging.identifyFilterCategories', function () {
      var documentSampleSize = Genai.SourceFile.Metadata.Tagging.Config.configValue('documentSampleSize');
      var sourceFiles = Genai.SourceFile.fetchForUser({
        filter: Filter.endsWith('metadata.fileType', Genai.SourceFileTypes.PDF),
        include: 'id',
        limit: documentSampleSize,
      }).objs;
      var identifyFilterCategoriesSpy = TestApi.spyOn(
        this.ctx,
        'Genai.SourceFile.Metadata.Tagging',
        'identifyFilterCategories'
      ).register();
      var originalIdentifyFilterCategoriesCallCount = identifyFilterCategoriesSpy.getActionMock().callCount();
      Genai.SourceFile.Metadata.Tagging.previewCategories();
      var newIdentifyFilterCategoriesCallCount = identifyFilterCategoriesSpy.getActionMock().callCount();
      expect(newIdentifyFilterCategoriesCallCount).toBe(originalIdentifyFilterCategoriesCallCount + 1);
      identifyFilterCategoriesSpy.unregister();
    });
  });

  describe('verify call of apply metadata tagging from Genai.SourceFile.Metadata.Tagging', function () {
    it('::applyMetadataTagging', function () {
      var scanResult = Genai.SourceFile.Metadata.Tagging.ScanResult.make({
        name: 'test name',
        active: false,
        id: 'test id',
      });

      var documentBatchSize = Genai.SourceFile.Metadata.Tagging.Config.inst().getConfig().documentBatchSize;
      var numSourceFiles = Genai.SourceFile.fetchCountForUser({
        filter: Filter.endsWith('metadata.fileType', Genai.SourceFileTypes.PDF),
      });
      var numBatches = Math.ceil(numSourceFiles / documentBatchSize);

      for (var i = 0; i < numBatches; i++) {
        var sourceFiles = Genai.SourceFile.fetchForUser({
          filter: Filter.endsWith('metadata.fileType', Genai.SourceFileTypes.PDF),
          include: 'id',
          limit: documentBatchSize,
          offset: i * documentBatchSize,
        }).objs;
        expect(function () {
          Genai.SourceFile.Metadata.Tagging.process(sourceFiles, scanResult);
        }).not.toThrowError();

        expect(sourceFiles.length).toEqual(5);
      }

      expect(function () {
        Genai.SourceFile.Metadata.Tagging.applyMetadataTagging(scanResult);
      }).not.toThrowError();
    });
  });
});

describe(filename, function () {
  beforeAll(function () {
    TestApi.setOpenAiApiKey();
    this.ctx = TestApi.createContext(filename);

    // Users
    this.documentAdminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];

    // Projects
    [this.tutorialProject, this.defaultProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);
    this.defaultProjectSettings = TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
      id: 'default',
      defaultProject: this.defaultProject,
      tutorialProject: this.tutorialProject,
    }).get('defaultProject.id, tutorialProject.id');

    this.userSettings = TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
      user: this.documentAdminUser,
      activeProject: this.tutorialProject,
    });

    // Collections

    // SourceCollection linked to the project 1
    this.collection1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: 'worldFacts',
      rootUrl: 'worldFacts',
      targetUrl: 'worldFacts',
      projects: [this.tutorialProject],
    }).get('this');

    // SourceCollection linked to the project 2
    this.collection2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: 'defaultProjectCollection',
      rootUrl: 'defaultProjectCollection',
      targetUrl: 'defaultProjectCollection',
      projects: [this.defaultProject],
    }).get('this');

    // SourceCollection not linked to any Project
    this.collection3 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: 'collectionWithoutProject',
      rootUrl: 'collection/without/project',
      targetUrl: 'collection/without/project',
    }).get('this');

    // Source files
    this.sourceFile1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      name: 'sourceFile1',
      originalFile: C3.File.make('meta://genAiBase/test/resource/metadataTagging/metadataTaggingTest1.pdf'),
      metadata: {
        fileName: 'metadataTaggingTest1.pdf',
        fileType: 'pdf',
      },
      collection: this.collection1,
    });

    this.sourceFile2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      name: 'sourceFile2',
      originalFile: C3.File.make('meta://genAiBase/test/resource/metadataTagging/metadataTaggingTest2.pdf'),
      metadata: {
        fileName: 'metadataTaggingTest2.pdf',
        fileType: 'pdf',
      },
      collection: this.collection2,
    });

    this.sourceFile3 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      name: 'sourceFile3',
      originalFile: C3.File.make('meta://genAiBase/test/resource/metadataTagging/metadataTaggingTest3.pdf'),
      metadata: {
        fileName: 'metadataTaggingTest3.pdf',
        fileType: 'pdf',
      },
      collection: this.collection3,
    });

    this.mockScanResult = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile.Metadata.Tagging.ScanResult', {
      active: true,
      categories: {
        author: ['C3', 'AI'],
        location: ['RWC', 'GDL'],
      },
    });

    // Spies
    this.spyFetchForUser = TestApi.spyOn(this.ctx, 'Genai.SourceFile', 'fetchForUser').callThrough().register();

    this.spyIdentifyCategories = TestApi.spyOn(
      this.ctx,
      'Genai.SourceFile.Metadata.Tagging',
      'identifyFilterCategories'
    )
      .callThrough()
      .register();

    this.spyMetadataTaggingProcess = TestApi.spyOn(this.ctx, 'Genai.SourceFile.Metadata.Tagging', 'process')
      .callFake(
        Lambda.fromJsFunc(function (_action, _input) {
          return [];
        })
      )
      .register();

    // Helper functions
    this.removeActiveProjectForUser = function (user) {
      Genai.App.UserSettings.forUser(user).withActiveProject(null).merge({
        mergeInclude: 'activeProject',
      });
    };

    this.assertSourceFilesUsed = function (spy, expectedSourceFiles, nonExpectedSourceFiles) {
      var lastSpyCall = _.last(spy.getActionMock().callHistory());
      var sourceFileIdsUsed = _.map(lastSpyCall.args.files, 'id');

      expectedSourceFiles.forEach((sourceFile) => {
        expect(sourceFileIdsUsed)
          .withContext(sourceFile.id + ' should have been used')
          .toContain(sourceFile.id);
      });

      (nonExpectedSourceFiles || []).forEach((sourceFile) => {
        expect(sourceFileIdsUsed)
          .withContext(sourceFile.id + ' should not have been used')
          .not.toContain(sourceFile.id);
      });
    };
  });

  afterAll(function () {
    TestIdp.removeTestUsers([this.documentAdminUser]);
    TestApi.teardown(this.ctx);
    Genai.SourceFile.Metadata.Tagging.ScanResult.removeAll({ filter: 'active == true' }, true);
  });

  describe('previewCategories', function () {
    beforeAll(function () {
      this.previewCategoriesAsUser = function (user) {
        return TestRunner.asUser(
          user,
          Lambda.fromJsFunc(function () {
            return Genai.SourceFile.Metadata.Tagging.previewCategories();
          }).partiallyCall([])
        );
      };
    });

    describe('the sample size', function () {
      beforeAll(function () {
        this.originalConfigName = Genai.SourceFile.Metadata.Tagging.Config.inst().name;
        Genai.SourceFile.Metadata.Tagging.Config.setDefault('azureGpt4o');
      });

      afterAll(function () {
        Genai.SourceFile.Metadata.Tagging.Config.setDefault(this.originalConfigName);
      });

      describe('when #documentSampleSize is set', function () {
        beforeAll(function () {
          this.originalDocumentSampleSize = Genai.SourceFile.Metadata.Tagging.Config.getConfig().documentSampleSize;
          this.documentSampleSize = 5;
          Genai.SourceFile.Metadata.Tagging.Config.setConfigValue('documentSampleSize', this.documentSampleSize);
          this.previewCategoriesAsUser(this.documentAdminUser);
        });

        afterAll(function () {
          Genai.SourceFile.Metadata.Tagging.Config.setConfigValue(
            'documentSampleSize',
            this.originalDocumentSampleSize
          );
        });

        it('uses it to limit the source files fetched for sampling', function () {
          var fetchForUserCall = this.spyFetchForUser.getActionMock().callHistory()[0];
          expect(fetchForUserCall.args.spec.limit).toEqual(this.documentSampleSize);
        });
      });
    });

    describe('the project setups', function () {
      describe('when the user has an active project', function () {
        beforeAll(function () {
          this.previewCategoriesAsUser(this.documentAdminUser);
        });

        it('generates categories only for the source files of the active project', function () {
          this.assertSourceFilesUsed(
            this.spyIdentifyCategories,
            [this.sourceFile1],
            [this.sourceFile2, this.sourceFile3]
          );
        });
      });

      describe('if the active project changes', function () {
        beforeAll(function () {
          this.userSettings = Genai.App.UserSettings.forUser(this.documentAdminUser).setActiveProject(
            this.defaultProject
          );
          this.previewCategoriesAsUser(this.documentAdminUser);
        });

        it('identifies categories for the files that are part of the new active project', function () {
          this.assertSourceFilesUsed(
            this.spyIdentifyCategories,
            [this.sourceFile2],
            [this.sourceFile1, this.sourceFile3]
          );
        });
      });

      describe('when the user does not have an active project', function () {
        beforeAll(function () {
          this.removeActiveProjectForUser(this.documentAdminUser);
          this.previewCategoriesAsUser(this.documentAdminUser);
        });

        it('identifies categories for all the source files', function () {
          this.assertSourceFilesUsed(this.spyIdentifyCategories, [
            this.sourceFile1,
            this.sourceFile2,
            this.sourceFile3,
          ]);
        });
      });
    });
  });

  describe('applyMetadataTagging', function () {
    beforeAll(function () {
      this.applyMetadataTaggingAsUser = function (user, scanResult) {
        return TestRunner.asUser(
          user,
          Lambda.fromJsFunc(function (scanResult) {
            return Genai.SourceFile.Metadata.Tagging.applyMetadataTagging(scanResult);
          }).partiallyCall([scanResult])
        );
      };
    });

    describe('the project setups', function () {
      describe('when the user has an active project', function () {
        beforeAll(function () {
          this.userSettings = Genai.App.UserSettings.forUser(this.documentAdminUser).setActiveProject(
            this.tutorialProject
          );
          this.applyMetadataTaggingAsUser(this.documentAdminUser, this.mockScanResult);
        });

        it('performs metadata tagging to the files that are part of the active project, and does not use any other file', function () {
          this.assertSourceFilesUsed(
            this.spyMetadataTaggingProcess,
            [this.sourceFile1],
            [this.sourceFile2, this.sourceFile3]
          );
        });
      });

      describe('if the active project changes', function () {
        beforeAll(function () {
          this.userSettings = Genai.App.UserSettings.forUser(this.documentAdminUser).setActiveProject(
            this.defaultProject
          );
          this.applyMetadataTaggingAsUser(this.documentAdminUser, this.mockScanResult);
        });

        it('tags the files that are part of the new active project', function () {
          this.assertSourceFilesUsed(
            this.spyMetadataTaggingProcess,
            [this.sourceFile2],
            [this.sourceFile1, this.sourceFile3]
          );
        });
      });

      describe('when the user does not have an active project', function () {
        beforeAll(function () {
          this.removeActiveProjectForUser(this.documentAdminUser);
          this.applyMetadataTaggingAsUser(this.documentAdminUser, this.mockScanResult);
        });

        it('applies metadata tagging to all files', function () {
          this.assertSourceFilesUsed(this.spyMetadataTaggingProcess, [
            this.sourceFile1,
            this.sourceFile2,
            this.sourceFile3,
          ]);
        });
      });
    });

    describe('batched processing', function () {
      beforeAll(function () {
        this.originalMetadataConfig = Genai.SourceFile.Metadata.Tagging.Config.getConfig();
      });

      afterAll(function () {
        this.originalMetadataConfig.setConfig();
      });

      describe('when the number of source files exceeds the batch size', function () {
        beforeAll(function () {
          Genai.SourceFile.Metadata.Tagging.Config.setConfigValue('documentBatchSize', 1);

          this.callCountBefore = this.spyMetadataTaggingProcess.getActionMock().callCount();
          this.applyMetadataTaggingAsUser(this.documentAdminUser, this.mockScanResult);
          this.callCountAfter = this.spyMetadataTaggingProcess.getActionMock().callCount();
        });

        it('processes the files in batches', function () {
          expect(this.callCountAfter - this.callCountBefore).toBeGreaterThan(1);
        });
      });

      describe('when the number of source files does not exceed the batch size', function () {
        beforeAll(function () {
          Genai.SourceFile.Metadata.Tagging.Config.setConfigValue('documentBatchSize', 30);

          this.callCountBefore = this.spyMetadataTaggingProcess.getActionMock().callCount();
          this.applyMetadataTaggingAsUser(this.documentAdminUser, this.mockScanResult);
          this.callCountAfter = this.spyMetadataTaggingProcess.getActionMock().callCount();
        });

        it('processes all the files in a single batch', function () {
          expect(this.callCountAfter - this.callCountBefore).toEqual(1);
        });
      });
    });
  });
});
