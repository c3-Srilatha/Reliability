/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_RA_azure_withMMR_withPgVector';

describe(filename, function () {
  beforeAll(function () {
    Genai.UnstructuredQuery.Engine.REA.RetrieverConfig.clearAllConfigAndSecretOverrides(ConfigOverride.APP, true);

    this.ctx = TestApi.createContext(filename);
    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setOpenAiApiKey'],
      suffix: '_gpt4o',
      usePgVectorRetriever: true,
      doNotUseMocking: true,
    });
  });

  afterAll(function () {
    Genai.UnstructuredQueryEngineTester.teardownTest(this.ctx, this.origConfigs);
    TestApi.cleanPgVectorRetrieverForTestDataset('c3DocumentationV6');
    Genai.UnstructuredQuery.Engine.REA.RetrieverConfig.clearAllConfigAndSecretOverrides(ConfigOverride.APP, true);
  });

  describe('with MMR and setting relevanceToRedundancyRatio to 0', function () {
    it('gets diverse passages', function () {
      var retrievedDocs = TestApi.getRetrievedDocsFromMMRTest(0.0);
      expect(retrievedDocs[0].rank).toEqual(1);
      expect(retrievedDocs[1].rank).toEqual(6);
      expect(retrievedDocs[2].rank).toEqual(7);
      expect(retrievedDocs[3].rank).toEqual(8);
    });
  });

  describe('with MMR and setting relevanceToRedundancyRatio to 1', function () {
    it('gets passages ranked based on score', function () {
      retrievedDocs = TestApi.getRetrievedDocsFromMMRTest(1.0);
      expect(retrievedDocs[0].rank).toEqual(1);
      expect(retrievedDocs[1].rank).toEqual(2);
      expect(retrievedDocs[2].rank).toEqual(3);
      expect(retrievedDocs[3].rank).toEqual(4);
    });
  });
});
