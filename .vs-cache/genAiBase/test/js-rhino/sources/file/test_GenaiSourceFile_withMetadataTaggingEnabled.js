/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFile_withMetadataTaggingEnabled';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setOpenAiApiKey();
    Genai.PyUtil.terminateAllEngines();

    this.ctx = TestApi.createContext(filename);
    this.basicUser = TestIdp.createTestUser(filename + '_basicUser', 'basicUserP4ssw0rd', ['Genai.BasicUser']);
    this.dummyProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      chunkerConfig: 'default',
    });
    this.userSettings = TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
      user: this.basicUser,
      activeProject: this.dummyProject,
    });

    this.pkgFileUrls = [
      'meta://genAiBase/test/resource/metadataTagging/metadataTaggingTest1.pdf',
      'meta://genAiBase/test/resource/metadataTagging/metadataTaggingTest3.doc',
      'meta://genAiBase/test/resource/metadataTagging/metadataTaggingTest2.pdf',
      'meta://genAiBase/test/resource/chunker/wordDocChunker/Digital-transformation.docx',
    ];
    this.collectionRoot = C3.FileSystem.makeFile(filename + '/' + Uuid.create() + '/rootUrl');
    this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      rootUrl: this.collectionRoot.url,
      targetUrl: filename + '/' + Uuid.create() + '/targetUrl',
      projects: [this.dummyProject],
    });
    var initialSourceFileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', [
      {
        originalFile: Pkg.file(this.pkgFileUrls[0]),
        collection: this.collection,
      },
      {
        originalFile: Pkg.file(this.pkgFileUrls[1]),
        collection: this.collection,
      },
    ]);
    this.initialSourceFiles = Genai.SourceFile.fetch({
      filter: Filter.intersects('id', initialSourceFileIds),
    }).objs;

    this.adminUser = TestIdp.createTestUser(filename + '_adminUser', 'adminUserP4ssw0rd', ['Genai.AdminUser']);
    this.adminUserFile = TestRunner.asUser(
      this.adminUser,
      Lambda.fromJsFunc(function (testCase) {
        return Genai.SourceFile.make({
          name: testCase + '_adminUserSourceFile',
          id: testCase + '_adminUserSourceFile',
          originalFile: C3.File.make({ url: C3.FileSystem.makeFile(testCase).url + '/adminUser.pdf' }),
        }).upsert();
      }).partiallyCall([filename])
    );
    Genai.SourceFile.transitionFilesToStatus([this.adminUserFile], Genai.SourceFile.StatusEnum.INDEXED);

    this.txs1 = Genai.SourceFile.TextSplitter.Spec.make({
      textSplitter: 'SpacyTextSplitter',
      chunkSize: 500,
      chunkOverlap: 100,
      specType: Genai.SourceFile.TextSplitter.Spec,
    });
    this.txs2 = Genai.SourceFile.TextSplitter.Spec.make({
      textSplitter: 'TokenTextSplitter',
      chunkSize: 200,
      chunkOverlap: 50,
      specType: Genai.SourceFile.TextSplitter.Spec,
    });
    this.pyPdfChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
      chunker: Genai.SourceFile.Chunker.PyPdf,
      textSplitters: [this.txs1, this.txs2],
    });
    this.wordDocChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
      chunker: Genai.SourceFile.Chunker.WordDoc,
      textSplitters: [this.txs1, this.txs2],
    });
    this.fileExtMap = {
      '.pdf': this.pyPdfChunkerSpec,
      '.doc': this.wordDocChunkerSpec,
    };
    this.chunkingSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
      chunker: Genai.SourceFile.Chunker.Universal,
      textSplitters: [this.txs1, this.txs2],
      fileExtToChunkerSpecMap: this.fileExtMap,
    });

    // Set default chunkers to legacy chunkers
    var chunkerConfig = Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default');
    let fileExtToChunkerSpecMap = C3.Map.fromJson(chunkerConfig.fileExtToChunkerSpecMap);
    fileExtToChunkerSpecMap = fileExtToChunkerSpecMap.with(
      '.docx',
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
        chunker: Genai.SourceFile.Chunker.WordDoc,
      })
    );
    fileExtToChunkerSpecMap = fileExtToChunkerSpecMap.with(
      '.pptx',
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
        chunker: Genai.SourceFile.Chunker.PowerPoint,
      })
    );
    chunkerConfig.setConfigValue('fileExtToChunkerSpecMap', fileExtToChunkerSpecMap);

    this.indexFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.PgVector', 'indexFiles');
    this.indexFilesSpy
      .callFake(
        Lambda.fromJsFunc(function (_action, input) {
          Genai.SourceFile.transitionFilesToStatus(input.files, Genai.SourceFile.StatusEnum.INDEXING);
          dt = DateTime.nowWithMillis();
          while (dt.plusSeconds(2).isAfter(DateTime.nowWithMillis())) {
            Logger.log().debug('still spinning');
          }
          Genai.SourceFile.transitionFilesToStatus(input.files, Genai.SourceFile.StatusEnum.INDEXED);

          return ObjList.make({ objs: input.files, errors: [] });
        })
      )
      .register();
    this.unindexFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.PgVector', 'unindexFiles');
    this.unindexFilesSpy
      .callFake(
        Lambda.fromJsFunc(function (_action, input) {
          Genai.SourceFile.transitionFilesToStatus(input.files, Genai.SourceFile.StatusEnum.NOT_INDEXED);

          return ObjList.make({ objs: input.files, errors: [] });
        })
      )
      .register();

    Genai.UnstructuredQuery.Engine.Config.setConfigValue(
      'vectorStore',
      Genai.Retriever.forId('default-pg'),
      ConfigOverride.APP
    );
    Genai.SourceFile.Metadata.Tagging.Config.setConfigValue('disableMetadataTagging', false, ConfigOverride.APP);
    TestApi.waitForSetup(this.ctx, null, 1, 60);
  });

  afterAll(function () {
    try {
      TestApi.cleanUpCollection(this.collection);
    } finally {
      this.adminUserFile.remove();
      this.indexFilesSpy.unregister();
      this.unindexFilesSpy.unregister();
      Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default').clearConfigAndSecretOverride(
        ConfigOverride.APP
      );
      Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.SourceFile.Metadata.Tagging.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.SourceFile.Metadata.Tagging.ScanResult.removeAll({ filter: Filter.eq('active', true) }, true);
      Genai.SourceFile.Metadata.Tag.removeAll(
        { filter: Filter.eq('metadataType', Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC) },
        true
      );
      Genai.SourceFile.Metadata.Category.removeAll(
        { filter: Filter.eq('metadataType', Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC) },
        true
      );
      Genai.PyUtil.terminateAllEngines();
      TestApi.teardown(this.ctx);
      TestIdp.removeUser(this.adminUser);
      TestIdp.removeUser(this.basicUser);
    }
  });

  describe('with an initial collection', function () {
    beforeAll(function () {
      Genai.SourceFile.process(this.initialSourceFiles, null, this.chunkingSpec, null, this.basicUser.email);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 360);
      this.initialSourceFiles = Genai.SourceFile.fetch({
        filter: Filter.intersects('id', this.initialSourceFiles.pluck('id')),
        include: 'passagesFile.url, metadata.tags, status, statusHistory.this',
      }).objs;
      this.firstScanResult = Genai.SourceFile.Metadata.Tagging.ScanResult.fetch({
        filter: Filter.eq('active', true),
        limit: 1,
      }).first();
    });

    it('linked files are chunked', function () {
      this.initialSourceFiles.each((f) => {
        expect(f.passagesFile.url).toBeDefined();
      });
    });

    it('linked files are tagged', function () {
      var allTags = C3.Set.builderOfStr()
        .addAll(Genai.SourceFile.Metadata.Tag.fetch().objs.map((t) => t.id))
        .build()
        .collect();
      this.initialSourceFiles.each((f) => {
        var tags = f.metadata.tags;
        expect(tags.size).toBeGreaterThan(0);
        tags.each((t) => {
          expect(allTags.contains(t.id)).toBeTruthy();
        });
      });
    });

    it('linked files are indexed', function () {
      TestApi.checkSrcFileHistory(this.initialSourceFiles, [
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
      ]);
    });

    it('unlinked files are not processed', function () {
      var statusHistory = this.adminUserFile.get('statusHistory.value').statusHistory;
      expect(statusHistory.length).toEqual(1);
      expect(statusHistory[0].value).toEqual(Genai.SourceFile.StatusEnum.INDEXED);
    });
  });

  describe('a new file with skipPreindexedFilesForTagging', function () {
    beforeAll(function () {
      Genai.SourceFile.Metadata.Tagging.Config.setConfigValue(
        'skipPreindexedFilesForTagging',
        true,
        ConfigOverride.APP
      );
      this.newFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        originalFile: Pkg.file(this.pkgFileUrls[2]),
        collection: this.collection,
      });
      this.unindexingCallCountBefore = this.unindexFilesSpy.getActionMock().callCount();
      Genai.SourceFile.process([this.newFile], null, this.chunkingSpec);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 180);
      this.newFile = this.newFile.get('passagesFile.url, metadata.tags');
      this.initialSourceFiles = Genai.SourceFile.fetch({
        filter: Filter.intersects('id', this.initialSourceFiles.pluck('id')),
        include: 'metadata.tags.this',
      }).objs;
      this.initialFilesWithTagsCountMap = {};
      this.initialFilesWithTagsHashMap = {};
      this.initialSourceFiles.each((f) => {
        var tags = f.metadata.tags;
        this.initialFilesWithTagsCountMap[f.id] = tags.size;
        this.initialFilesWithTagsHashMap[f.id] = Hash.md5().hashString(
          tags
            .map((tag) => tag.label + tag.meta.updated)
            .sorted(true)
            .toString('')
        );
      });
    });

    afterAll(function () {
      Genai.SourceFile.Metadata.Tagging.Config.setConfigValue(
        'skipPreindexedFilesForTagging',
        false,
        ConfigOverride.APP
      );
    });

    it('is chunked', function () {
      expect(this.newFile.passagesFile.url).toBeDefined();
    });

    it('is tagged', function () {
      expect(this.newFile.metadata.tags.size).toBeGreaterThan(0);
    });

    it('is indexed', function () {
      TestApi.checkSrcFileHistory(
        [this.newFile],
        [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
        ]
      );
    });

    it('does not change the status of pre-indexed files', function () {
      expect(this.unindexFilesSpy.getActionMock().callCount()).toEqual(this.unindexingCallCountBefore);
      TestApi.checkSrcFileHistory(this.initialSourceFiles, [
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
      ]);
    });

    it('does not impact the tags of pre-indexed files', function () {
      this.initialSourceFiles.each((f) => {
        var numOfTags = f.metadata.tags.size;
        var tagsHash = Hash.md5().hashString(
          f.metadata.tags
            .map((tag) => tag.label + tag.meta.updated)
            .sorted(true)
            .toString('')
        );
        expect(this.initialFilesWithTagsCountMap[f.id]).toEqual(numOfTags);
        expect(this.initialFilesWithTagsHashMap[f.id]).toEqual(tagsHash);
      });
    });
  });

  describe('a new file with skipPreindexedFilesForTagging marked false', function () {
    beforeAll(function () {
      this.newFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        originalFile: Pkg.file(this.pkgFileUrls[2]),
        collection: this.collection,
      });
      this.unindexingCallCountBefore = this.unindexFilesSpy.getActionMock().callCount();
      Genai.SourceFile.process([this.newFile], null, this.chunkingSpec);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 180);
      this.newFile = this.newFile.get('passagesFile.url, metadata.tags');
    });

    it('is chunked', function () {
      expect(this.newFile.passagesFile.url).toBeDefined();
    });

    it('is tagged', function () {
      expect(this.newFile.metadata.tags.size).toBeGreaterThan(0);
    });

    it('is indexed', function () {
      TestApi.checkSrcFileHistory(
        [this.newFile],
        [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
        ]
      );
    });

    it('causes others to be re-indexed', function () {
      expect(this.unindexFilesSpy.getActionMock().callCount()).toEqual(this.unindexingCallCountBefore + 1);
      TestApi.checkSrcFileHistory(this.initialSourceFiles, [
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
      ]);
    });

    describe('with allowRetaggingWithoutReindexing', function () {
      beforeAll(function () {
        Genai.SourceFile.Metadata.Tagging.Config.setConfigValue(
          'allowRetaggingWithoutReindexing',
          true,
          ConfigOverride.APP
        );
        this.anotherFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
          originalFile: Pkg.file(this.pkgFileUrls[3]),
          collection: this.collection,
        });
        this.unindexingCallCountBefore = this.unindexFilesSpy.getActionMock().callCount();
        Genai.SourceFile.process([this.anotherFile], null, this.chunkingSpec);
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 180);
        this.anotherFile = this.anotherFile.get('passagesFile.url, metadata.tags');
      });

      afterAll(function () {
        Genai.SourceFile.Metadata.Tagging.Config.setConfigValue(
          'allowRetaggingWithoutReindexing',
          false,
          ConfigOverride.APP
        );
      });

      it('is chunked', function () {
        expect(this.anotherFile.passagesFile.url).toBeDefined();
      });

      it('is tagged', function () {
        expect(this.anotherFile.metadata.tags.size).toBeGreaterThan(0);
      });

      it('is indexed', function () {
        TestApi.checkSrcFileHistory(
          [this.anotherFile],
          [
            Genai.SourceFile.StatusEnum.INDEXED,
            Genai.SourceFile.StatusEnum.INDEXING,
            Genai.SourceFile.StatusEnum.CHUNKED,
            Genai.SourceFile.StatusEnum.CHUNKING,
          ]
        );
      });

      it('does not cause others to be re-indexed', function () {
        expect(this.unindexFilesSpy.getActionMock().callCount()).toEqual(this.unindexingCallCountBefore);
        TestApi.checkSrcFileHistory(this.initialSourceFiles, [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
        ]);
      });
    });
  });

  describe('#process with a given scan result', function () {
    beforeAll(function () {
      this.givenScanResult = Genai.SourceFile.Metadata.Tagging.ScanResult.make({
        categories: C3.Map.ofStrToAny('testFilterCategory', ['testTag']),
      }).merge();
      Genai.SourceFile.process(this.initialSourceFiles, null, this.chunkingSpec, this.givenScanResult);
      TestApi.waitForSetup(this.ctx, null, 1, 360);
    });

    afterAll(function () {
      this.givenScanResult.remove();
    });

    it('does not mark it as active', function () {
      var activeScanResults = Genai.SourceFile.Metadata.Tagging.ScanResult.fetch({
        filter: Filter.eq('active', true),
      }).objs;
      expect(activeScanResults.size).toEqual(1);
      expect(activeScanResults[0].id).not.toEqual(this.givenScanResult.id);
    });
  });
});
