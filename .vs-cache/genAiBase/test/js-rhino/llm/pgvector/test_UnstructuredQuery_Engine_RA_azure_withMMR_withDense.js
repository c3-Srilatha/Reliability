/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_RA_azure_withMMR_withDense';

// For some reason, this test often times out on pull request branches
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

describe(filename, function () {
  beforeAll(function () {
    Genai.PyUtil.terminateAllEngines();
    Genai.UnstructuredQuery.Engine.REA.RetrieverConfig.clearAllConfigAndSecretOverrides(ConfigOverride.APP, true);

    this.ctx = TestApi.createContext(filename);
    this.testConfig = TestApi.setupRetrieverTestSources(this.ctx, filename);
    this.sourceFiles = this.testConfig.sourceFiles;
    this.sourceCollections = this.testConfig.sourceCollections;

    this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
      name: filename,
      indexZipUrl: this.testConfig.baseLocation + '/retriever-dense.zip',

      // MMR will only be applied if the retriever is using Genai.Retriever.Dense.RetrieverType.C3_VECTOR_STORE
      denseRetrieverName: Genai.Retriever.Dense.RetrieverType.C3_VECTOR_STORE,
    }).get();

    this.retriever.indexPassages(this.sourceCollections[1].readPassages());
    TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 600);

    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setOpenAiApiKey'],
      suffix: '_gpt4o',
      retrieverOverride: this.retriever,
      doNotUseMocking: true,
    });
    Genai.UnstructuredQuery.Engine.Config.setConfigValue('chatWithFullHistory', false);
  });

  afterAll(function () {
    try {
      this.retriever.purgeIndex(true);
      this.retriever.terminateEngine();
    } finally {
      TestApi.teardownRetrieverTestSources(this.ctx, this.testConfig);
      Genai.UnstructuredQueryEngineTester.teardownTest(this.ctx, this.origConfigs);
      Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.UnstructuredQuery.Engine.REA.RetrieverConfig.clearAllConfigAndSecretOverrides(ConfigOverride.APP, true);
    }
  });

  describe('with MMR and setting relevanceToRedundancyRatio to 0', function () {
    it('gets diverse passages', function () {
      var retrievedDocs = TestApi.getRetrievedDocsFromMMRTest(0.0);

      // Verify that it has applied MMR and selected a different set of passages than with ratio=1.0
      expect(retrievedDocs[0].metadata.source).toEqual('test_Retriever_ColBERT_SourceFile1#3');
      expect(retrievedDocs[1].metadata.source).toEqual('test_Retriever_ColBERT_SourceFile2#40');
      expect(retrievedDocs[2].metadata.source).toEqual('test_Retriever_ColBERT_SourceFile2#37');
      expect(retrievedDocs[3].metadata.source).toEqual('test_Retriever_ColBERT_SourceFile2#13');
    });
  });

  describe('with MMR and setting relevanceToRedundancyRatio to 1', function () {
    it('gets passages ranked based on score', function () {
      retrievedDocs = TestApi.getRetrievedDocsFromMMRTest(1.0);

      // Verify that it returns the same set of passages as without MMR (solely based on score)
      expect(retrievedDocs[0].metadata.source).toEqual('test_Retriever_ColBERT_SourceFile1#3');
      expect(retrievedDocs[1].metadata.source).toEqual('test_Retriever_ColBERT_SourceFile2#1');
      expect(retrievedDocs[2].metadata.source).toEqual('test_Retriever_ColBERT_SourceFile1#0');
      expect(retrievedDocs[3].metadata.source).toEqual('test_Retriever_ColBERT_SourceFile2#38');
    });
  });
});
