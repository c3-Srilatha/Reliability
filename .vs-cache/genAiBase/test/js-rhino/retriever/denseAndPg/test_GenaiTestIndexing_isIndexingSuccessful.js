/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiTestIndexing_isIndexingSuccessful';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.indexFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'indexFiles')
      .returnValue(
        C3.type('ObjList<Genai.SourceFile>').make({
          objs: [],
          errors: [],
        })
      )
      .register();
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('setUp', function () {
    beforeAll(function () {
      Genai.Retriever.TestIndexing.setUp();
      TestApi.waitForSetup(this.ctx);
    });

    it('the source file is is created', function () {
      expect(Genai.SourceFile.fetch({ filter: Filter.eq('metadata.fileName', 'PythonSDK1.md') })).toBeDefined();
    });

    it('the source collection is created', function () {
      expect(Genai.SourceCollection.forId('idTest')).toBeDefined();
    });

    it('the vector store is created', function () {
      expect(Genai.Retriever.Dense.forId('idTestVectorStore')).toBeDefined();
    });
  });

  describe('cleanUp', function () {
    beforeAll(function () {
      Genai.Retriever.TestIndexing.cleanUp();
    });

    it('the source file is is removed', function () {
      expect(Genai.SourceFile.fetchCount({ filter: Filter.eq('metadata.fileName', 'PythonSDK1.md') })).toEqual(0);
    });

    it('the source collection is removed', function () {
      expect(Genai.SourceCollection.forId('idTest')).toBeNull();
    });

    it('the vector store is removed', function () {
      expect(Genai.Retriever.Dense.forId('idTestVectorStore')).toBeNull();
    });
  });

  describe('isIndexingSuccessful', function () {
    it('returns true', function () {
      expect(Genai.Retriever.TestIndexing.isIndexingSuccessful()).toEqual(true);
    });

    describe('when errors are reported', function () {
      beforeAll(function () {
        this.indexFilesSpy
          .returnValue(
            C3.type('ObjList<Genai.SourceFile>').make({
              objs: [],
              errors: [
                ObjError.make({
                  message: 'Indexing failed',
                }),
              ],
            })
          )
          .register();
      });

      it('returns false', function () {
        expect(Genai.Retriever.TestIndexing.isIndexingSuccessful()).toEqual(false);
      });
    });

    describe('when errors are thrown', function () {
      beforeAll(function () {
        this.indexFilesSpy
          .callFake(function (_action, _input) {
            throw new Error('Indexing error');
          })
          .register();
      });

      it('returns false', function () {
        expect(Genai.Retriever.TestIndexing.isIndexingSuccessful()).toEqual(false);
      });
    });
  });
});
