/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_Dense';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('beforeCreate', function () {
    it('fills a missing indexZipUrl', function () {
      var name = filename + '-without-zip';
      var indexZipUrl = C3.FileSystem.inst().makeFile('dense-retriever/' + name + '.zip').url;

      var objList = Genai.Retriever.Dense.beforeCreate([
        {
          name: name,
        },
      ]);
      expect(objList).toBeDefined();
      expect(objList.objs.length).toEqual(1);
      expect(objList.objs[0].indexZipUrl).toEqual(indexZipUrl);

      var retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: name,
      }).get('this');

      expect(retriever.indexZipUrl).toBeDefined();
      expect(retriever.indexZipUrl).toEqual(indexZipUrl);
    });

    it('uses the provided indexZipUrl', function () {
      var name = filename + '-with-zip';
      var indexZipUrl = C3.FileSystem.inst().makeFile('dense-retriever/' + name + '.zip').url;
      var retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: filename + '-with-zip',
        indexZipUrl: indexZipUrl,
      }).get('this');

      expect(retriever.indexZipUrl).toBeDefined();
      expect(retriever.indexZipUrl).toEqual(indexZipUrl);
    });
  });

  describe('vectorType', function () {
    it('throws an error for unsupported types', function () {
      var retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: filename,
        embedderSpec: {
          embedderType: GenaiCore.Embedder.Hf,
          embedderModelName: 'not-a-valid-model',
        },
      }).get('this');

      expect(function () {
        retriever.vectorType();
      }).toThrowError(/Unsupported embedder type/);
    });
  });
});
