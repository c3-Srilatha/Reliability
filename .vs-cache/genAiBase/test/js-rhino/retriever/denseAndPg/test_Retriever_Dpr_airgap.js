/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_Dpr_airgap';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.testConfig = TestApi.setupRetrieverTestSources(this.ctx, filename);
    this.sourceFiles = this.testConfig.sourceFiles;

    this.initialAirGapConfig = Genai.App.AirGapConfig.inst().getConfig();
    Genai.App.AirGapConfig.inst().setConfigValue(
      'dprQuestionEncoderPath',
      'gcs://c3--datasets/genai/airgap/models/dpr-question_encoder-multiset-base.zip'
    );
    Genai.App.AirGapConfig.inst().setConfigValue(
      'dprContextEncoderPath',
      'gcs://c3--datasets/genai/airgap/models/dpr-ctx_encoder-multiset-base.zip'
    );

    this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
      name: filename,
      indexZipUrl: this.testConfig.baseLocation + '/retriever-dense.zip',
    }).get();

    this.retriever = this.retriever
      .get()
      .withFields({
        embedderSpec: {
          embedderType: GenaiCore.Embedder.Hf,
          embedderModelName: 'sentence-transformers/facebook-dpr-ctx_encoder-multiset-base',
        },
        denseRetrieverName: Genai.Retriever.Dense.RetrieverType.FAISS_FLAT_IP,
      })
      .merge({ mergeInclude: 'embedderSpec, denseRetrieverName', returnInclude: 'this' });
  });

  afterAll(function () {
    try {
      this.retriever.purgeIndex(true);
      this.retriever.terminateEngine();
    } finally {
      TestApi.teardownRetrieverTestSources(this.ctx, this.testConfig);
      Genai.PyUtil.terminateAllEngines();
      this.initialAirGapConfig.setConfig();
    }
  });

  describe('initializes', function () {
    it('DPR with models loaded from filesystem', function () {
      expect(this.retriever.initialize()).toEqual(0);
    });
  });

  describe('unindexPassages', function () {
    beforeAll(function () {
      this.retriever.purgeIndex(true);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue']);
      this.retriever.indexFiles([this.sourceFiles[0], this.sourceFiles[3]]);
      TestApi.waitForSetup(this.ctx, null, 1, 360);
    });

    it('starts with only the indexed files in INDEXED', function () {
      expect(this.sourceFiles[0].get('status.value').status.value)
        .withContext('sourceFiles[0] status')
        .toEqual(Genai.SourceFile.StatusEnum.INDEXED);
      expect(this.sourceFiles[3].get('status.value').status.value)
        .withContext('sourceFiles[3] status')
        .toEqual(Genai.SourceFile.StatusEnum.INDEXED);
    });

    it('removes the specified file and leaves the rest', function () {
      // Ensure the status timestamps do not overlap
      Thread.sleep(1000);
      var objList = this.retriever.unindexFiles([this.sourceFiles[3]]);
      TestApi.waitForSetup(this.ctx, null, 1, 180);
    });

    it('moves the unindexed files to NOT_INDEXED', function () {
      expect(this.sourceFiles[0].get('status.value').status.value)
        .withContext('sourceFiles[0] status')
        .toEqual(Genai.SourceFile.StatusEnum.INDEXED);
      expect(this.sourceFiles[3].get('status.value').status.value)
        .withContext('sourceFiles[3] status')
        .toEqual(Genai.SourceFile.StatusEnum.NOT_INDEXED);
    });
  });
});
