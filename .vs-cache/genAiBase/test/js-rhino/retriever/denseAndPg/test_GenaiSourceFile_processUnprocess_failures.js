/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFile_processUnprocess_failures';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.testConfig = TestApi.setupTestRetriever(this.ctx, filename);
    this.sourceFiles = this.testConfig.sourceFiles;
    this.sourceFileIds = this.sourceFiles.map((sf) => {
      return sf.id;
    });
    this.retriever = this.testConfig.retriever;

    ActionQueue.clear();
  });

  afterAll(function () {
    ActionQueue.clear();
    TestApi.teardownTestRetriever(this.ctx, this.testConfig);
  });

  describe('#process chunking fails', function () {
    beforeAll(function () {
      this.chunkFilesBatchSpy = TestApi.spyOn(this.ctx, 'Genai.SourceFile.Chunker.Engine', 'chunkFilesBatch')
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            throw new Error('Chunking Error');
          })
        )
        .register();
      Genai.SourceFile.process(this.sourceFiles, this.retriever);
      try {
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 120);
      } catch (e) {
        null;
      }
    });

    afterAll(function () {
      this.chunkFilesBatchSpy.unregister();
      Genai.SourceFile.StatusHistory.removeAll(
        {
          filter: Filter.intersects('parent.id', this.sourceFileIds),
        },
        true
      );
    });

    it('sends files to `FAILED` state', function () {
      TestApi.checkSrcFileHistory(this.sourceFiles, [Genai.SourceFile.StatusEnum.FAILED]);
    });

    it('persists error message onto history', function () {
      expect(this.sourceFiles[0].get('status.errorMessage').status.errorMessage).toContain('Chunking Error');
    });
  });

  describe('#process indexing fails', function () {
    beforeAll(function () {
      this.chunkFilesBatchSpy = TestApi.spyOn(this.ctx, 'Genai.SourceFile.Chunker.Engine', 'chunkFilesBatch')
        .returnValue({
          passages: [],
          objList: {
            objs: this.sourceFiles.slice(0, 3),
            errors: [{ message: 'Chunking Error', targetType: 'Genai.SourceFile', targetId: this.sourceFiles[3].id }],
          },
        })
        .register();
      this.indexFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'indexFiles')
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            throw new Error('Indexing Error');
          })
        )
        .register();

      Genai.SourceFile.process(this.sourceFiles, this.retriever);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 120);
    });

    afterAll(function () {
      this.chunkFilesBatchSpy.unregister();
      this.indexFilesSpy.unregister();
      Genai.SourceFile.StatusHistory.removeAll(
        {
          filter: Filter.intersects('parent.id', this.sourceFileIds),
        },
        true
      );
      Genai.SourceFile.Chunker.Engine.terminate();
    });

    it('sends files to `FAILED` state', function () {
      TestApi.checkSrcFileHistory(this.sourceFiles.slice(0, 3), [Genai.SourceFile.StatusEnum.FAILED]);
    });

    it('persists error message onto history', function () {
      expect(this.sourceFiles[0].get('status.errorMessage').status.errorMessage).toContain('Indexing Error');
      expect(this.sourceFiles[1].get('status.errorMessage').status.errorMessage).toContain('Indexing Error');
    });

    it('persists correct number of histories', function () {
      expect(
        Genai.SourceFile.StatusHistory.fetchCount({
          filter: Filter.intersects('parent.id', this.sourceFileIds),
        })
      ).toEqual(3);
    });
  });

  describe('#unprocess unindexing fails', function () {
    beforeAll(function () {
      this.unindexFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'unindexFiles')
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            throw new Error('Unindexing Error');
          })
        )
        .register();
      this.objList = Genai.SourceFile.unprocess(this.sourceFiles, this.retriever);
      TestApi.waitForSetup(this.ctx);
    });

    afterAll(function () {
      this.unindexFilesSpy.unregister();
      Genai.SourceFile.StatusHistory.removeAll(
        {
          filter: Filter.intersects('parent.id', this.sourceFileIds),
        },
        true
      );
    });

    it('returns correct number of errors', function () {
      expect(this.objList.errors.length).toEqual(4);
      expect(this.objList.objs.length).toEqual(0);
    });

    it('populates correct error message', function () {
      expect(this.objList.errors[0].message).toContain('Unindexing Error');
      expect(this.objList.errors[0].message).toContain('Unindexing failed with');
    });

    it('sends files to `FAILED` state', function () {
      TestApi.checkSrcFileHistory(this.sourceFiles, [Genai.SourceFile.StatusEnum.FAILED]);
    });

    it('persists error message onto history', function () {
      expect(this.sourceFiles[0].get('status.errorMessage').status.errorMessage).toContain('Unindexing Error');
      expect(this.sourceFiles[1].get('status.errorMessage').status.errorMessage).toContain('Unindexing Error');
    });
  });
});
