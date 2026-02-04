/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_failureHandling';

describe(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes(['py-query_orchestrator']);
  }

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.testConfig = TestApi.setupTestRetriever(this.ctx, filename);
    this.retriever = this.testConfig.retriever;
    this.sourceCollections = this.testConfig.sourceCollections;
    this.sourceFiles = this.testConfig.sourceFiles;

    // Ensure that no actual indexing is done by the test; simulate indexPassagesFile
    this.indexPassagesSpy = TestApi.indexPassagesSpy(this.ctx);
    this.initializeSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'initialize').returnValue(1).register();
    this.processQueuesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.IndexAction', 'processQueues');
    this.indexingErrorMessage = 'indexing error';
    this.throwIndexingError = function (throwError) {
      if (throwError) {
        this.processQueuesSpy
          .callFake(
            Lambda.fromJsFunc(function (_action, _input) {
              throw new Error('indexing error');
            })
          )
          .register();
      } else {
        this.processQueuesSpy.callThrough().register();
      }
    };
  });

  afterAll(function () {
    TestApi.teardownTestRetriever(this.ctx, this.testConfig);
  });

  describe('failing on the first file', function () {
    beforeAll(function () {
      this.throwIndexingError(true);
      this.objList = this.retriever.indexFiles([this.sourceFiles[0]]);
      TestApi.waitForSetup(this.ctx);
    });

    it('correct errors reported', function () {
      expect(this.objList.objs.length).toEqual(0);
      expect(this.objList.errors.length).toEqual(1);
      expect(this.objList.errors[0].message).toContain(this.indexingErrorMessage);
    });

    it('sends file to correct status', function () {
      TestApi.checkSrcFileHistory([this.sourceFiles[0]], [Genai.SourceFile.StatusEnum.FAILED]);
    });

    it('persists correct error message in `FAILED` status', function () {
      var sf = Genai.SourceFile.make(this.sourceFiles[0].id).get('status.errorMessage');
      expect(sf.status.errorMessage).toContain(this.indexingErrorMessage);
    });
  });

  describe('re-indexing the first file successfully', function () {
    beforeAll(function () {
      this.throwIndexingError(false);
      this.retriever.indexFiles([this.sourceFiles[0]]);
      TestApi.waitForSetup(this.ctx);
    });

    it('sets the file to INDEXED', function () {
      TestApi.checkSrcFileHistory([this.sourceFiles[0]], [Genai.SourceFile.StatusEnum.INDEXED]);
    });
  });

  describe('then failing on a second file', function () {
    beforeAll(function () {
      this.throwIndexingError(true);
      this.objList = this.retriever.indexFiles([this.sourceFiles[1]]);
      TestApi.waitForSetup(this.ctx);
    });

    it('reports errors', function () {
      expect(this.objList.objs.length).toEqual(0);
      expect(this.objList.errors.length).toEqual(1);
      expect(this.objList.errors[0].message).toContain(this.indexingErrorMessage);
    });

    it('leaves the first file in INDEXED', function () {
      TestApi.checkSrcFileHistory([this.sourceFiles[0]], [Genai.SourceFile.StatusEnum.INDEXED]);
    });

    it('sets the second file to FAILED', function () {
      TestApi.checkSrcFileHistory([this.sourceFiles[1]], [Genai.SourceFile.StatusEnum.FAILED]);
    });

    it('persists correct error message in `FAILED` status', function () {
      var sf = Genai.SourceFile.make(this.sourceFiles[1].id).get('status.errorMessage');
      expect(sf.status.errorMessage).toContain(this.indexingErrorMessage);
    });
  });

  describe('re-indexing both files successfully', function () {
    beforeAll(function () {
      // TODO GEN-11049 remove the need for this double indexing
      this.throwIndexingError(false);
      this.retriever.indexFiles([this.sourceFiles[0], this.sourceFiles[1]]);
      TestApi.waitForSetup(this.ctx);
      this.retriever.indexFiles([this.sourceFiles[0], this.sourceFiles[1]]);
      TestApi.waitForSetup(this.ctx);
    });

    it('puts both in INDEXED', function () {
      TestApi.checkSrcFileHistory([this.sourceFiles[0], this.sourceFiles[1]], [Genai.SourceFile.StatusEnum.INDEXED]);
    });
  });

  describe('failing on a third file', function () {
    beforeAll(function () {
      this.throwIndexingError(true);
      this.retriever.indexFiles([this.sourceFiles[2]]);
      TestApi.waitForSetup(this.ctx);
    });

    it('keeps the already-indexed files in `INDEXED` state', function () {
      TestApi.checkSrcFileHistory([this.sourceFiles[0], this.sourceFiles[1]], [Genai.SourceFile.StatusEnum.INDEXED]);
    });

    it('sets the new file to `FAILED`', function () {
      TestApi.checkSrcFileHistory([this.sourceFiles[2]], [Genai.SourceFile.StatusEnum.FAILED]);
    });
  });

  describe('indexCollections', function () {
    beforeAll(function () {
      this.throwIndexingError(true);
      this.retriever.indexCollections([this.sourceCollections[1]]);
      TestApi.waitForSetup(this.ctx);
    });

    it('leaves indexed files in `INDEXED` state', function () {
      TestApi.checkSrcFileHistory([this.sourceFiles[0], this.sourceFiles[1]], [Genai.SourceFile.StatusEnum.INDEXED]);
    }).pend('GEN-11049');

    it('sends failed files to `FAILED` state', function () {
      TestApi.checkSrcFileHistory([this.sourceFiles[2]], [Genai.SourceFile.StatusEnum.FAILED]);
    });

    describe('with files in NEEDS_REMOVAL', function () {
      beforeAll(function () {
        this.throwIndexingError(true);
        this.indexedSourceFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'indexedSourceFiles')
          .returnValue([this.sourceFiles[1], this.sourceFiles[2]])
          .register();
        Genai.SourceFile.transitionFilesToStatus(
          [this.sourceFiles[1], this.sourceFiles[2]],
          Genai.SourceFile.StatusEnum.NEEDS_REMOVAL
        );
        TestApi.waitForSetup(this.ctx);
        this.retriever.indexCollections([this.sourceCollections[1]]);
        TestApi.waitForSetup(this.ctx);
      });

      it('leaves failed files in `NEEDS_REMOVAL` state', function () {
        TestApi.checkSrcFileHistory(
          [this.sourceFiles[1], this.sourceFiles[2]],
          [Genai.SourceFile.StatusEnum.NEEDS_REMOVAL]
        );
      }).pend('GEN-11049');
    });
  });
});
