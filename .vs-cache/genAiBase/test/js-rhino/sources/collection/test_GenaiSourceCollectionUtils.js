/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceCollectionUtils';

describe(filename, function () {
  beforeAll(function () {
    this.collectionLogger = Logger.for('Genai.SourceCollection.Utils');
    this.collectionLogger.setLogLevel('DEBUG');
    this.ctx = TestApi.createContext(filename);
    this.readOnlyProject = TestApi.upsertReadOnlyProject(this.ctx);

    this.collectionRootSubpath = 'test_GenaiSourceCollectionUtils/' + Uuid.create() + '/testCollRoot';
    this.collectionRoot = FileSystem.makeFile(this.collectionRootSubpath);

    // Start with 0 source collections
    Genai.SourceCollection.removeAll({ filter: Filter.exists('id') }, true);

    // Create the SourceCollection
    this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      description: 'test collection',
      name: 'test collection',
      rootUrl: this.collectionRoot.url,
      targetUrl: filename + '/test',
    }).get('this');
    this.collectionFiles = TestApi.populateTxtSrcCollectionRoot(this.collection, 3);

    this.syncJobs = this.collection.sync({
      checkForRemovedOriginalFiles: true,
    });
    TestApi.waitForJob(this.ctx, this.syncJobs.fileSystemJob, 1, 600);
    TestApi.waitForJob(this.ctx, this.syncJobs.objBatchJob, 1, 60);
    Genai.SourceFile.transitionFilesToStatus(
      [this.collection.get('files').files.first()],
      Genai.SourceFile.StatusEnum.NEEDS_REMOVAL
    );
    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.cleanUpCollection(this.collection);
    TestApi.teardown(this.ctx);
  });

  describe('sync with 1 collection', function () {
    beforeAll(function () {
      this.processSpy = TestApi.spyOn(this.ctx, 'Genai.SourceFile', 'process').returnValue().register();
      this.processSpyCountBefore = this.processSpy.getActionMock().callCount();
      this.unprocessSpy = TestApi.spyOn(this.ctx, 'Genai.SourceFile', 'unprocess').returnValue().register();
      this.unprocessSpyCountBefore = this.processSpy.getActionMock().callCount();
      Genai.SourceCollection.Utils.sync({}, true);
      TestApi.waitForSetup(this.ctx);
    });

    afterAll(function () {
      this.processSpy.unregister();
      this.unprocessSpy.unregister();
    });

    it('calls Genai.SourceFile.process for source files that have status as NOT_INDEXED or NEEDS_REINDEXING', function () {
      expect(this.processSpy.getActionMock().callCount()).toEqual(this.processSpyCountBefore + 1);
    });

    it('calls Genai.SourceFile.unprocess for source files that have status as NEEDS_REMOVAL', function () {
      expect(this.unprocessSpy.getActionMock().callCount()).toEqual(this.unprocessSpyCountBefore + 1);
    });
  });

  describe('sync with collections with readonly projects', function () {
    beforeAll(function () {
      this.syncSpy = TestApi.spyOn(this.ctx, 'Genai.SourceCollection', 'sync').returnValue().register();
      this.syncSpyCountBefore = this.syncSpy.getActionMock().callCount();
      this.collectionRootSubpathReadOnly = 'test_GenaiSourceCollectionUtils/' + Uuid.create() + '/testCollRootReadOnly';
      this.collectionRootReadOnly = FileSystem.makeFile(this.collectionRootSubpathReadOnly);

      this.collectionWithReadOnlyProject = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
        description: 'test collection with read only project',
        name: 'test collection with read only project',
        rootUrl: this.collectionRootReadOnly.url,
        targetUrl: filename + '/test',
        projects: [this.readOnlyProject],
      }).get('this');
      Genai.SourceCollection.Utils.sync();
      TestApi.waitForSetup(this.ctx);
    });

    afterAll(function () {
      this.syncSpy.unregister();
    });

    it('calls Genai.SourceCollection.sync for all source collections except for ones with readonly project', function () {
      expect(this.syncSpy.getActionMock().callCount()).toEqual(this.syncSpyCountBefore + 1);
    });
  });

  describe('upload', function () {
    describe('without a collection', function () {
      it('throws an error', function () {
        expect(function () {
          Genai.SourceCollection.Utils.upload([{ files: ['/some/random/file/url.txt'] }]);
        }).toThrowError(/Please provide a collection or configure a default collection for uploaded files./);
      });
    });

    describe('with a valid collection', function () {
      beforeAll(function () {
        this.fakeFileUrl = 'some/random/file/url.txt';
        this.defaultCollection = Genai.SourceCollection.make({
          rootUrl: '/root',
          targetUrl: '/target',
        }).upsert();

        this.sourceFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
          id: 'sf1',
          name: 'sf1',
          originalFile: C3.File.fromString(this.fakeFileUrl),
        });

        Genai.SourceCollection.Utils.Config.inst().setConfigValue('defaultCollection', this.defaultCollection);

        this.uploadSpy = TestApi.spyOn(this.ctx, 'Genai.SourceCollection', 'upload')
          .returnValue([this.sourceFile])
          .register();
        Genai.SourceCollection.Utils.upload([{ collection: this.defaultCollection, files: [this.fakeFileUrl] }]);
        Genai.SourceCollection.Utils.upload([{ files: [this.fakeFileUrl] }], true);
      });

      afterAll(function () {
        this.uploadSpy.unregister();
        Genai.SourceCollection.Utils.Config.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
        this.defaultCollection.remove();
      });

      it('calls the upload function for the collection', function () {
        expect(this.uploadSpy.getActionMock().callCount()).toEqual(2);
      });

      it('transitions file to `CHUNKING` when second param is true', function () {
        TestApi.checkSrcFileHistory([this.sourceFile], [Genai.SourceFile.StatusEnum.CHUNKING]);
      });
    });
  });
});
