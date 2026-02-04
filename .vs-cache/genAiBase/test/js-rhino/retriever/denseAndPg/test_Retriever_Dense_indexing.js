/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_Dense_indexing';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;

describe(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes();
  }

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.testConfig = TestApi.setupRetrieverTestSources(this.ctx, filename);
    this.sourceFiles = this.testConfig.sourceFiles;
    this.sourceCollections = this.testConfig.sourceCollections;

    this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
      name: filename,
      indexZipUrl: this.testConfig.baseLocation + '/retriever-dense.zip',
      denseRetrieverName: Genai.Retriever.Dense.RetrieverType.C3_VECTOR_STORE,

      // Test with multiple threads for the engine
      engineThreadPoolSpec: {
        minThreads: 2,
        initialThreads: 5,
        maxThreads: 5,
      },

      /*
       * We have passages
       *  sourceFiles[0] - 9, finetuning
       *  sourceFiles[1] - 28, Python SDK
       *  sourceFiles[2] - 53, Lightbulb
       *  sourceFiles[3] - 1, Thor
       * so indexingBatchSize=25 should invoke the batching logic for 3 batches,
       * with sourceFiles 0+1, 2, and 3
       */
      indexingBatchSize: 25,
    }).get();

    // Set the persistBatchSize to 5 (smaller than each batch) to execise the Vector batch merging logic
    Genai.Vector.Config.setConfigValue('persistBatchSize', 5);

    // Set the filterIdLimit small enough that we can test the looping logic
    Genai.Vector.Config.setConfigValue('filterIdLimit', 5);
    var embedderMap = {
      mxbai: 'Genai.Vector.Mxbai',
      e5: 'Genai.Vector.E5',
    };
    this.mergeBatchSpy = TestApi.spyOn(this.ctx, 'Genai.Vector.Mxbai', 'mergeBatch').callThrough().register();

    this.passagesForFileWithoutCollection = this.sourceFiles[3].readPassages();
    this.testQueries = {
      finetuning: {
        question: Genai.Query.fromString('How do I finetune a large language model?'),
        source: this.sourceFiles[0],
        passageContent: 'we can finetune large language models',
      },
      thor: {
        question: Genai.Query.fromString('What is Thursday?'),
        source: this.sourceFiles[3],
        passageContent: 'the day honoring Thor',
      },
      one: {
        question: Genai.Query.fromString('A'),
        source: this.sourceFiles[3],
        passage: 'A',
      },
    };
  });

  afterAll(function () {
    try {
      this.retriever.purgeIndex(true);
      this.retriever.terminateEngine();
      Genai.Vector.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      this.mergeBatchSpy.unregister();
    } finally {
      TestApi.teardownRetrieverTestSources(this.ctx, this.testConfig);

      // Genai.Retriever.Dense.terminateAllEngines is just here to ensure full code coverage
      Genai.Retriever.Dense.terminateAllEngines();
      Genai.PyUtil.terminateAllEngines();
    }
  });

  describe('indexPassages', function () {
    it('indexes multiple passages', function () {
      // Ensure that py-query_orchestrator runtime is installed before the waitForSetup call
      Genai.Retriever.Dense.forName(this.retriever.name).passageCount();

      var mergeBatchCallCountBefore = this.mergeBatchSpy.getActionMock().callCount();
      var objList = this.retriever.indexPassages(this.sourceCollections[0].readPassages());
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 600);
      TestApi.checkIndexResult(this.retriever, 9, objList, 9, 0, 1);
      TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);
      var mergeBatchCallCountAfter = this.mergeBatchSpy.getActionMock().callCount();
      expect(mergeBatchCallCountAfter - mergeBatchCallCountBefore)
        .withContext('mergeBatch call count')
        .toBeGreaterThan(1);

      expect(this.retriever.passageCount()).withContext('passageCount').toEqual(9);
      expect(this.retriever.isInitialized()).withContext('isInitialized').toBeTrue();
      expect(this.retriever.supportsIncrementalIndexing()).withContext('supportsIncrementalIndexing').toBeTrue();
    });

    it('creates an IndexAction', function () {
      var retriever = this.retriever.get('indexActions.asyncAction.this');
      expect(retriever.indexActions.length).toEqual(1);
      expect(retriever.indexActions[0].asyncAction.action).toEqual('indexPassagesFile');
    });

    it('has created the remote zip', function () {
      expect(C3.File.make(this.retriever.indexZipUrl).exists()).toBeTrue();
    });

    it('appends a single passage', function () {
      var objList = this.retriever.indexPassages(this.passagesForFileWithoutCollection);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);
      TestApi.checkIndexResult(this.retriever, 10, objList, 1, 0, 2);
      TestApi.testSearch(this.retriever, [this.testQueries.finetuning, this.testQueries.thor], [2, 1]);
    });

    it('reindexes the same single passage', function () {
      var objList = this.retriever.indexPassages(this.passagesForFileWithoutCollection);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);
      TestApi.checkIndexResult(this.retriever, 10, objList, 1, 0, 2);
      TestApi.testSearch(this.retriever, [this.testQueries.finetuning, this.testQueries.thor], [2, 1]);
    });

    it('clears everything and adds only a single-character passage', function () {
      var sourcePassage = Genai.SourcePassage.make({
        source: Genai.SourceFile.make({ id: this.sourceFiles[3].id }),
        intraSourceId: '1',
        contentStr: 'A',
      });
      var objList = this.retriever.indexPassages([sourcePassage], true);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);
      TestApi.checkSearchability(this.retriever, [this.testQueries.one]);
      TestApi.checkIndexResult(this.retriever, 1, objList, 1, 0, 1);
    });

    describe('with passages split into multiple batches', function () {
      beforeAll(function () {
        this.actionCountBefore = this.retriever.get('indexActions').indexActions.length;
        this.objList = this.retriever.indexFiles(this.sourceFiles, true);
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 360);
      });

      it('processes the first batch successfully', function () {
        TestApi.checkIndexResult(this.retriever, 37, this.objList, 4, 0, 2);
        TestApi.testSearch(this.retriever, [this.testQueries.finetuning, this.testQueries.thor], [2, 0]);
        expect(this.retriever.get('indexActions').indexActions.length)
          .withContext('indexAction count')
          .toEqual(this.actionCountBefore + 3);
      });

      it('processes the second batch successfully', function () {
        Genai.Retriever.IndexAction.processQueues();
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 360);
        TestApi.checkIndexResult(this.retriever, 90, this.objList, 4, 0, 3);
        TestApi.testSearch(this.retriever, [this.testQueries.finetuning, this.testQueries.thor], [2, 0]);
      });

      it('processes the third batch successfully', function () {
        Genai.Retriever.IndexAction.processQueues();
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 360);
        TestApi.checkIndexResult(this.retriever, 91, this.objList, 4, 0, 4);
        TestApi.testSearch(this.retriever, [this.testQueries.finetuning, this.testQueries.thor], [2, 1]);
      });
    });

    describe('with SourceFile metadata annotations', function () {
      beforeAll(function () {
        this.tag = this.sourceFiles[0].addTag(filename + '-tag');
        this.expectedMetadataStr =
          '{"fileName": "Finetuning-Tutorial.ipynb", "fileType": "ipynb", "tags": ["' + this.tag + '"]}';
        this.sourceCollections[0].setMetadataConfig({ embedMetadata: true });
        Genai.SourceCollection.Metadata.Config.clearCache();
        TestApi.waitForSetup(this.ctx);
      });

      afterAll(function () {
        this.sourceCollections[0].setMetadataConfig({ embedMetadata: false });
        Genai.SourceCollection.Metadata.Config.clearCache();
        TestApi.waitForSetup(this.ctx);
      });

      it('indexes the passages from the file with metadata', function () {
        // Must use indexFiles or indexCollections to trigger the annotation logic in Genai.Retriever.py
        var objList = this.retriever.indexFiles([this.sourceFiles[0]], true);
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);
        TestApi.checkIndexResult(this.retriever, 9, objList, 1, 0, 1);
        TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);
      });

      it('has indexedSourcePassages with metadata', function () {
        var indexedSourcePassages = this.retriever.indexedSourcePassages();
        expect(indexedSourcePassages.length).withContext('indexedSourcePassages.length').toEqual(9);
        expect(indexedSourcePassages[0].indexedContentStr)
          .withContext('indexedContentStr')
          .toContain(this.expectedMetadataStr);
      });

      it('returns passages with metadata in content from similaritySearch', function () {
        var res = this.retriever.similaritySearch(
          Genai.Retriever.SearchSpec.make({
            searchQuery: this.testQueries.finetuning.question,
            k: 2,
          })
        );
        var expectedMetadataStr = this.expectedMetadataStr;
        res.each(function (similarityResult, idx) {
          expect(similarityResult.page_content)
            .withContext('page_content,idx=' + idx)
            .toContain(expectedMetadataStr);
          expect(similarityResult.sourcePassage.indexedContentStr)
            .withContext('indexedContentStr,idx=' + idx)
            .toContain(expectedMetadataStr);
        });
      });

      it('includes metadata for returned source files', function () {
        var res = this.retriever.similaritySearch(
          Genai.Retriever.SearchSpec.make({
            searchQuery: this.testQueries.finetuning.question,
            includeFileMetadata: true,
            k: 2,
          })
        );

        res.each(function (similarityResult) {
          expect(similarityResult.sourcePassage.source.metadata.fileName).toEqual('Finetuning-Tutorial.ipynb');
          expect(similarityResult.sourcePassage.source.metadata.fileType).toEqual('ipynb');
        });
      });
    });

    if (TestApi.gpuDevice('py-query_orchestrator-server-py4j') !== '-1') {
      describe('using GPU on `singlenode` (with CUDA)', function () {
        beforeAll(function () {
          this.retriever = this.retriever
            .withField('device', TestApi.gpuDevice('py-query_orchestrator-server-py4j'))
            .merge({ mergeInclude: 'device', returnInclude: 'this' });

          this.actionCountBefore = this.retriever.get('indexActions').indexActions.length;

          // Genai.Retriever.setupGpu sets cuda to unavailable when device is -1
          this.retriever.terminateEngine();
          Genai.PyUtil.terminateAllEngines();
        });

        afterAll(function () {
          // Remove the IndexAction so the describe blocks below are consist with GPU and without
          this.retriever.get('indexActions[0]').indexActions[0].remove();
          this.retriever.withField('device', '-1').merge({ mergeInclude: 'device' });
          this.retriever.terminateEngine();
          Genai.PyUtil.terminateAllEngines();
        });

        it('indexes multiple passages quickly', function () {
          // Indexing on GPU for the 9 passages should be ~10s, vs ~18s on CPU
          var objList = this.retriever.indexPassages(this.sourceCollections[0].readPassages(), true);
          TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 30);
          TestApi.checkIndexResult(this.retriever, 9, objList, 9, 0, 1);
          TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);
        });

        it('creates an IndexAction', function () {
          var retriever = this.retriever.get('indexActions.asyncAction.this');
          expect(retriever.indexActions.length)
            .withContext('indexAction count')
            .toEqual(this.actionCountBefore + 1);
          expect(retriever.indexActions[0].asyncAction.action).toEqual('indexPassagesFile');
          var gpuAction = retriever.indexActions[0].asyncAction;
          var cpuAction = retriever.indexActions[retriever.indexActions.length - 1].asyncAction;
          var gpuTime = DateTime.deltaSeconds(gpuAction.meta.created, gpuAction.meta.updated);
          var cpuTime = DateTime.deltaSeconds(cpuAction.meta.created, cpuAction.meta.updated);
          expect(cpuTime)
            .withContext('GPU indexing should be substantially faster')
            .toBeGreaterThan(gpuTime + 5);
        });
      });
    }
  });

  describe('unindexPassages', function () {
    beforeAll(function () {
      this.retriever.purgeIndex(true);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue']);
      this.retriever.indexPassages(this.sourceFiles[0].readPassages().withAll(this.passagesForFileWithoutCollection));
      TestApi.waitForSetup(this.ctx, null, 1, 360);
    });

    it('starts with only the indexed files in INDEXED', function () {
      [
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
        Genai.SourceFile.StatusEnum.INDEXED,
      ].forEach((status, idx) => {
        expect(this.sourceFiles[idx].get('status').status.value)
          .withContext(`sourceFiles[${idx}] status`)
          .toEqual(status);
      });
    });

    it('removes the specified passages and leaves the rest', function () {
      // Ensure the status timestamps do not overlap
      Thread.sleep(1000);
      var objList = this.retriever.unindexPassages(this.passagesForFileWithoutCollection);
      TestApi.waitForSetup(this.ctx, null, 1, 180);
      TestApi.checkIndexResult(this.retriever, 9, objList, 1, 0, 1);
      TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);
    });

    it('moves the unindexed files to NOT_INDEXED', function () {
      // Only sourceFile[3] (Thor) should be modified by the unindexing
      [
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
      ].forEach((status, idx) => {
        expect(this.sourceFiles[idx].get('status').status.value)
          .withContext(`sourceFiles[${idx}] status`)
          .toEqual(status);
      });
    });
  });

  describe('initialize', function () {
    beforeAll(function () {
      // Clear out everything and reindex the sourceCollection
      this.retriever.indexPassages(this.sourceCollections[0].readPassages(), true);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 360);

      // Use only a single thread for the engine to ensure that initialize goes to the same thread each time
      this.retriever = this.retriever
        .withField('engineThreadPoolSpec', {
          minThreads: 1,
          initialThreads: 1,
          maxThreads: 1,
        })
        .withoutVersion()
        .merge({ mergeInclude: 'engineThreadPoolSpec', returnInclude: 'this' });

      // Purge from memory and local
      this.retriever.purgeIndex(false);
      this.retriever.terminateEngine();
    });

    it('reports 0 from passageCount when uninitialized', function () {
      expect(this.retriever.passageCount()).withContext('passageCount').toEqual(0);
    });

    it('loads all previously-indexed passages', function () {
      var count = this.retriever.initialize();
      expect(count).withContext('count').toEqual(9);
      TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);
    });

    it('just returns the count if already loaded', function () {
      var t0 = DateTime.nowWithMillis();
      var count = this.retriever.initialize();
      var t1 = DateTime.nowWithMillis();
      expect(DateTime.deltaMillis(t0, t1)).toBeLessThan(250);
      expect(count).withContext('count').toEqual(9);
      TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);
    });

    describe('after purging and removing the zip', function () {
      beforeAll(function () {
        // Purge from memory, local, and remote
        this.retriever.purgeIndex(true);
      });

      it('does nothing when there is no zip', function () {
        var t0 = DateTime.nowWithMillis();
        var count = this.retriever.initialize();
        var t1 = DateTime.nowWithMillis();
        expect(DateTime.deltaMillis(t0, t1)).toBeLessThan(500);
        expect(count).withContext('count').toEqual(0);
      });
    });
  });
});
