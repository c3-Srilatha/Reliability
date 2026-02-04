/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_indexing';

describe(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes(['py-query_orchestrator']);
  }

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.testConfig = TestApi.setupTestRetriever(this.ctx, filename);
    this.sourceCollections = this.testConfig.sourceCollections;
    this.sourceFiles = this.testConfig.sourceFiles;
    this.retriever = this.testConfig.retriever;
    this.indexPassagesSpy = TestApi.indexPassagesSpy(this.ctx);
  });

  afterAll(function () {
    Genai.Retriever.IndexAction.fetch({
      filter: Filter.eq('retriever.id', this.retriever.id),
    }).objs.each((action) => {
      try {
        action.asyncActionSpec.args.get('passagesFile').delete();
      } catch (e) {
        C3.log().error(e);
      }
    });
    Genai.Retriever.IndexAction.removeAll(
      {
        filter: Filter.eq('retriever.id', this.retriever.id),
      },
      true
    );
    this.indexPassagesSpy.unregister();
    TestApi.teardownTestRetriever(this.ctx, this.testConfig);
  });

  describe('indexCollections', function () {
    afterAll(function () {
      Genai.SourceFile.StatusHistory.removeAll(
        {
          filter: Filter.intersects(
            'parent.id',
            this.sourceFiles.map((sf) => {
              return sf.id;
            })
          ),
        },
        true
      );
    });

    it('succeeds on the first call', function () {
      var beforeCount = this.indexPassagesSpy.getActionMock().callCount();
      var objList = this.retriever.indexCollections([this.sourceCollections[0]]);
      TestApi.waitForSetup(this.ctx);
      expect(objList.count()).withContext('objList.count()').toEqual(1);
      expect(objList.errors.length).withContext('objList.errors.length').toEqual(0);
      expect(this.indexPassagesSpy.getActionMock().callCount()).toEqual(beforeCount + 1);
    });

    it('has correct statuses for files in first collection', function () {
      TestApi.checkSrcFileHistory(
        [this.sourceFiles[0]],
        [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
      );
    });

    it('updates statuses on both on the second call', function () {
      var beforeCount = this.indexPassagesSpy.getActionMock().callCount();
      var objList = this.retriever.indexCollections(this.sourceCollections);
      TestApi.waitForSetup(this.ctx);
      expect(objList.count()).toEqual(2);
      expect(this.indexPassagesSpy.getActionMock().callCount()).toEqual(beforeCount + 1);

      TestApi.checkSrcFileHistory(
        [this.sourceFiles[0]],
        [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
        ]
      );
      TestApi.checkSrcFileHistory(
        [this.sourceFiles[1], this.sourceFiles[2]],
        [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
      );
    });

    describe('with purge=true', function () {
      beforeAll(function () {
        this.indexedSourceFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense.Engine', 'indexedSourceFiles')
          .returnValue(this.sourceFiles)
          .register();
      });

      afterAll(function () {
        this.indexedSourceFilesSpy.unregister();
      });

      it('recreates the indices when purge is true', function () {
        var indexBeforeCount = this.indexPassagesSpy.getActionMock().callCount();
        var indexedBeforeCount = this.indexedSourceFilesSpy.getActionMock().callCount();
        var objList = this.retriever.indexCollections([this.sourceCollections[0]], true);
        TestApi.waitForSetup(this.ctx);
        expect(objList.count()).withContext('objList.count').toEqual(1);
        expect(objList.errors.length).withContext('objList.errors.length').toEqual(0);
        expect(this.indexPassagesSpy.getActionMock().callCount())
          .withContext('indexPassagesSpy.callCount')
          .toEqual(indexBeforeCount + 1);
        expect(this.indexedSourceFilesSpy.getActionMock().callCount())
          .withContext('indexedSourceFilesSpy.callCount')
          .toEqual(indexedBeforeCount);
      });

      it('has correct statuses for files in first collection after second indexing', function () {
        TestApi.checkSrcFileHistory(
          [this.sourceFiles[0]],
          [
            Genai.SourceFile.StatusEnum.INDEXED,
            Genai.SourceFile.StatusEnum.INDEXING,
            Genai.SourceFile.StatusEnum.INDEXED,
            Genai.SourceFile.StatusEnum.INDEXING,
          ]
        );
      });

      it('correctly updates the second collection to be `NOT_INDEXED` after purge set to true on index', function () {
        TestApi.checkSrcFileHistory(
          [this.sourceFiles[1], this.sourceFiles[2]],
          [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
        );
      });
    });
  });

  describe('indexFiles', function () {
    afterAll(function () {
      Genai.SourceFile.StatusHistory.removeAll({ filter: Filter.eq('parent.id', 'fake') }, true);
    });

    it('succeeds in indexing a single file from a collection', function () {
      var beforeCount = this.indexPassagesSpy.getActionMock().callCount();
      var objList = this.retriever.indexFiles([this.sourceFiles[0], this.sourceFiles[1]], true);
      TestApi.waitForSetup(this.ctx);
      expect(objList.count()).toEqual(2);
      expect(this.indexPassagesSpy.getActionMock().callCount()).toEqual(beforeCount + 1);
    });

    it('those indexed files have the correct state history', function () {
      TestApi.checkSrcFileHistory(
        [this.sourceFiles[0], this.sourceFiles[1]],
        [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
      );
    });

    it('succeeds when reindexing the same SourceFile without purging but does not add anything new', function () {
      var beforeCount = this.indexPassagesSpy.getActionMock().callCount();
      var objList = this.retriever.indexFiles([this.sourceFiles[1]]);
      TestApi.waitForSetup(this.ctx);
      expect(objList.count()).toEqual(1);
      expect(this.indexPassagesSpy.getActionMock().callCount()).toEqual(beforeCount + 1);
    });

    it('that indexed file has correct updated state history', function () {
      TestApi.checkSrcFileHistory(
        [this.sourceFiles[1]],
        [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
        ]
      );
    });

    it('reports errors from readPassages', function () {
      var beforeCount = this.indexPassagesSpy.getActionMock().callCount();
      var objList = this.retriever.indexFiles([
        TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
          id: 'fake',
          originalFile: 'fake/file/file.txt',
        }).get(),
      ]);
      TestApi.waitForSetup(this.ctx);
      expect(objList.count()).toEqual(0);
      expect(objList.errors.length).toEqual(1);
      expect(this.indexPassagesSpy.getActionMock().callCount()).withContext('indexPassagesSpy').toEqual(beforeCount);
    });

    it('gives that erroneous file correct history with `FAILED` state', function () {
      TestApi.checkSrcFileHistory([Genai.SourceFile.make({ id: 'fake' })], [Genai.SourceFile.StatusEnum.FAILED]);
    });

    it('persists an error message on the `FAILED` state', function () {
      var sourceFile = Genai.SourceFile.forId('fake').get('statusHistory.errorMessage');
      expect(sourceFile.statusHistory[0].errorMessage).toContain('SourceFile fake has no passagesFile');
    });
  });

  describe('unindexFiles', function () {
    beforeAll(function () {
      // Both this.indexPassagesSpy and this.unindexPassagesSpy will be intercepting indexPassagesFile
      this.indexPassagesSpy.unregister();
      this.unindexPassagesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'indexPassagesFile');
      this.unindexPassagesSpy
        .callFake(function (_action, input) {
          var currIndexedFiles = Genai.SourceFile.fetch({
            filter: Filter.intersects('id', [
              'test_Retriever_ColBERT_SourceFile0',
              'test_Retriever_ColBERT_SourceFile1',
            ]),
          }).objs;
          var passages = Genai.SourceFile.fetch({ filter: Filter.eq('id', 'test_Retriever_ColBERT_SourceFile0') })
            .first()
            .readPassages();
          input.this.onIndexComplete(passages, currIndexedFiles, true, true);
        })
        .register();
      this.indexedSourceFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense.Engine', 'indexedSourceFiles')
        .returnValue([
          Genai.SourceFile.make('test_Retriever_ColBERT_SourceFile0'),
          Genai.SourceFile.make('test_Retriever_ColBERT_SourceFile1'),
        ])
        .register();
    });

    afterAll(function () {
      this.indexedSourceFilesSpy.unregister();
      this.unindexPassagesSpy.unregister();
    });

    it('starts with file in `INDEXED` state', function () {
      TestApi.checkSrcFileHistory(
        [this.sourceFiles[1]],
        [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
        ]
      );
    });

    it('removes all passages for a file', function () {
      var indexBeforeCount = this.indexPassagesSpy.getActionMock().callCount();
      var unindexBeforeCount = this.unindexPassagesSpy.getActionMock().callCount();
      var objList = this.retriever.unindexFiles([this.sourceFiles[1]]);
      TestApi.waitForSetup(this.ctx);
      expect(objList.count()).toEqual(1);
      expect(objList.errors.length).toEqual(0);
      expect(this.indexPassagesSpy.getActionMock().callCount())
        .withContext('indexPassagesSpy')
        .toEqual(indexBeforeCount + 1);
      expect(this.unindexPassagesSpy.getActionMock().callCount())
        .withContext('unindexPassagesSpy')
        .toEqual(unindexBeforeCount + 1);
    });

    it('has moved unindexed file to `NOT_INDEXED` state', function () {
      TestApi.checkSrcFileHistory(
        [this.sourceFiles[1]],
        [
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
        ]
      );
    });
  });

  describe('unindexCollections', function () {
    beforeAll(function () {
      // Both this.indexPassagesSpy and this.unindexPassagesSpy will be intercepting indexPassagesFile
      this.indexPassagesSpy.unregister();
      this.unindexPassagesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'indexPassagesFile');
      this.indexedSourceFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense.Engine', 'indexedSourceFiles')
        .returnValue([Genai.SourceFile.make('test_Retriever_ColBERT_SourceFile0')])
        .register();
    });

    afterAll(function () {
      this.indexedSourceFilesSpy.unregister();
      this.unindexPassagesSpy.unregister();
    });

    describe('when the passages have already been removed', function () {
      beforeAll(function () {
        this.unindexPassagesSpy
          .callFake(function (_action, input) {
            var currIndexedFiles = Genai.SourceFile.fetch({
              filter: Filter.intersects('id', ['test_Retriever_ColBERT_SourceFile0']),
            }).objs;
            var passages = Genai.SourceFile.fetch({ filter: Filter.eq('id', 'test_Retriever_ColBERT_SourceFile0') })
              .first()
              .readPassages();
            input.this.onIndexComplete(passages, currIndexedFiles, true, true);
          })
          .register();
      });

      it('succeeds and does nothing', function () {
        var indexBeforeCount = this.indexPassagesSpy.getActionMock().callCount();
        var unindexBeforeCount = this.unindexPassagesSpy.getActionMock().callCount();
        var objList = this.retriever.unindexCollections([this.sourceCollections[1]]);
        TestApi.waitForSetup(this.ctx);
        expect(objList.count()).toEqual(1);
        expect(objList.errors.length).toEqual(0);
        expect(this.indexPassagesSpy.getActionMock().callCount())
          .withContext('indexPassagesSpy')
          .toEqual(indexBeforeCount + 1);
        expect(this.unindexPassagesSpy.getActionMock().callCount())
          .withContext('unindexPassagesSpy')
          .toEqual(unindexBeforeCount + 1);
      });

      it('leaves the collection files in INDEXED state', function () {
        TestApi.checkSrcFileHistory(
          [this.sourceFiles[0]],
          [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
        );
      });
    });

    describe('when the passages are still indexed', function () {
      beforeAll(function () {
        this.unindexPassagesSpy
          .callFake(function (_action, input) {
            var currIndexedFiles = Genai.SourceFile.fetch({
              filter: Filter.intersects('id', ['test_Retriever_ColBERT_SourceFile0']),
            }).objs;
            var passages = [];
            input.this.onIndexComplete(passages, currIndexedFiles, true, true);
          })
          .register();
      });

      it('removes everything from a collection', function () {
        var indexBeforeCount = this.indexPassagesSpy.getActionMock().callCount();
        var unindexBeforeCount = this.unindexPassagesSpy.getActionMock().callCount();
        var objList = this.retriever.unindexCollections(this.sourceCollections);
        TestApi.waitForSetup(this.ctx);
        expect(objList.count()).toEqual(2);
        expect(objList.errors.length).toEqual(0);
        expect(this.indexPassagesSpy.getActionMock().callCount())
          .withContext('indexPassagesSpy')
          .toEqual(indexBeforeCount + 1);
        expect(this.unindexPassagesSpy.getActionMock().callCount())
          .withContext('unindexPassagesSpy')
          .toEqual(unindexBeforeCount + 1);
      });

      it('sends the collection files to the correct states', function () {
        TestApi.checkSrcFileHistory(
          [this.sourceFiles[0]],
          [
            Genai.SourceFile.StatusEnum.NOT_INDEXED,
            Genai.SourceFile.StatusEnum.INDEXED,
            Genai.SourceFile.StatusEnum.INDEXING,
          ]
        );

        TestApi.checkSrcFileHistory(
          [this.sourceFiles[1]],
          [
            Genai.SourceFile.StatusEnum.NOT_INDEXED,
            Genai.SourceFile.StatusEnum.INDEXED,
            Genai.SourceFile.StatusEnum.INDEXING,
            Genai.SourceFile.StatusEnum.INDEXED,
            Genai.SourceFile.StatusEnum.INDEXING,
          ]
        );
      });
    });
  });
});
