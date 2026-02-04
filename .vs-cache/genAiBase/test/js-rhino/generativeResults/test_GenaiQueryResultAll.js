/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQueryResultAll.js';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.persistedData = C3.Data.fromPySrc("ret = pd.DataFrame({'a': [1, 2, 3], 'b': [4, 5, 6]})").toPersisted();
    this.queryResultFromPythonAgentObj = Genai.Query.Result.Source.StructuredData.PythonAgent.make({
      name: 'test name',
      sourceCode: 'test source code',
      id: 'test id',
      displayName: 'test display name',
      serializedTrajectory: 'test serialized trajectory',
      persistedData: this.persistedData,
      structuredQuerySpec: Genai.StructuredQuery.Spec.make({
        sourceType: Genai.Aircraft,
        spec: EvalSpec.make({
          id: 'evalspec',
        }),
      }),
      structuredQuerySpecs: [
        Genai.StructuredQuery.Spec.make({
          sourceType: Genai.Aircraft,
          spec: EvalSpec.make({
            id: 'evalspec',
          }),
        }),
      ],
    });

    TestApi.upsertEntity(
      this.ctx,
      'Genai.Query.Result.Source.StructuredData.PythonAgent',
      this.queryResultFromPythonAgentObj
    );
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::beforeRemove', function () {
    it('validate beforeRemove being called in obj.remove()', function () {
      expect(C3.FileSystem.listFiles(this.queryResultFromPythonAgentObj.persistedData.metadata.baseDir).files.length).toBe(1);
      this.result = this.queryResultFromPythonAgentObj.remove();

      // Returns true if the obj existed and was deleted
      expect(this.result).toBe(true);
      expect(C3.FileSystem.listFiles(this.queryResultFromPythonAgentObj.persistedData.metadata.baseDir).files.length).toBe(0);
    });
  });
});
