/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiCoreEmbedder_airgap';

// Allow time for runtime installation
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

describe(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes();
  }

  beforeAll(function () {
    TestApi.setOpenAiApiKey();

    this.ctx = TestApi.createContext(filename);
    Genai.PyUtil.terminateAllEngines();

    var downloadDir = Genai.PyUtil.downloadAndUnzip(
      'gcs://c3--datasets/genai/airgap/models/e5.zip',
      '/tmp/models/airgap/e5',
      '/tmp/models/airgap/e5'
    );

    this.embedderModelName = 'intfloat/e5-large-v2';
    this.unstructuredRetrieverId = filename + '_unstructured';
    this.unstructuredRetriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.PgVector', {
      id: this.unstructuredRetrieverId,
      embedderModelName: 'e5',
      embedderSpec: {
        embedderModelName: this.embedderModelName,
        embedderType: GenaiCore.Embedder.Hf,
      },
    });

    Genai.App.AirGapConfig.inst().setConfigValues({
      pgVectorEmbedderPath: 'file:///tmp/models/airgap/e5/e5',
      fewShotEmbedderPath: 'file:///tmp/models/airgap/e5/e5',
    });
  });

  afterAll(function () {
    Genai.App.AirGapConfig.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
    TestApi.teardown(this.ctx);
  });

  describe('unstructured retriever', function () {
    beforeAll(function () {
      this.unstructuredRetriever.initialize();
      this.embedderHfId = `${this.embedderModelName}__${this.unstructuredRetrieverId}`; // How PGVector names the embedder
    });

    afterAll(function () {
      GenaiCore.Embedder.Hf.forId(this.embedderHfId)
        .withoutModelDirectory()
        .merge({ mergeInclude: 'modelDirectory' })
        .remove();
    });

    it('successfully starts the embedder', function () {
      embedder = GenaiCore.Embedder.Engine.forName(this.embedderHfId);
      encodedText = embedder.encodeBatch(['hello']);
      expect(encodedText).toBeDefined();
      expect(encodedText.size).toBe(1);
      expect(encodedText[0].size).toBeGreaterThan(0);
    });
  });

  describe('fewshot retriever', function () {
    beforeAll(function () {
      this.embedder = Genai.Agent.Tool.Util.FewShotRetriever.getEmbedder();
    });

    afterAll(function () {
      GenaiCore.Embedder.Hf.forId(this.embedderModelName)
        .withoutModelDirectory()
        .merge({ mergeInclude: 'modelDirectory' })
        .remove();
    });

    it('successfully starts the embedder', function () {
      embedder = GenaiCore.Embedder.Engine.forName(this.embedderModelName);
      expect(embedder).toBeDefined();

      encodedText = embedder.encodeBatch(['world']);
      expect(encodedText).toBeDefined();
      expect(encodedText.size).toBe(1);
      expect(encodedText[0].size).toBeGreaterThan(0);
    });
  });
});
