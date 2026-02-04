/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_PgVector_indexing_cosine';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    var downloadDir = Genai.PyUtil.downloadAndUnzip(
      'azure://genai/datasets/huggingface/models/models--mixedbread-ai--mxbai-embed-large-v1.zip',
      '/tmp/models/airgap/mxbai-embed-large-v1',
      '/tmp/models/airgap/mxbai-embed-large-v1'
    );

    Genai.App.AirGapConfig.inst().setConfigValues({
      pgVectorEmbedderPath:
        'file:///tmp/models/airgap/mxbai-embed-large-v1/snapshots/db9d1fe0f31addb4978201b2bf3e577f3f8900d2',
    });
    this.testConfig = TestApi.setupRetrieverTestSources(this.ctx, filename);
    this.sourceFiles = this.testConfig.sourceFiles;
    this.sourceCollections = this.testConfig.sourceCollections;
    this.testQueries = this.testConfig.testQueries;
    this.retrieverId = filename + '_pgVector' + Uuid.create();
    this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.PgVector', {
      name: this.retrieverId,
      sourcePassageType: Genai.Vector.SourcePassage.Cosine,
      vectorDistanceSpec: Expr.DistanceSpec.make({ metric: Expr.DistanceSpec.Metric.COSINE }),
    }).get();

    // Ensure that Genai.Vector.SourcePassage.Cosine instead of Genai.Vector.SourcePassage is used
    this.mergeBatchSpy = TestApi.spyOn(this.ctx, Genai.Vector.SourcePassage.Cosine.name(), 'mergeBatch')
      .callThrough()
      .register();
  });

  afterAll(function () {
    try {
      this.retriever.purgeIndex(true);
    } finally {
      Genai.Vector.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      TestApi.teardownRetrieverTestSources(this.ctx, this.testConfig);
      GenaiCore.Embedder.Engine.list().each((embedderEngine) => {
        embedderEngine.terminate();
      });
      Genai.App.AirGapConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
      GenaiCore.Embedder.Hf.forId(`mixedbread-ai/mxbai-embed-large-v1__${this.retriever.id}`)
        .withoutModelDirectory()
        .merge({ mergeInclude: 'modelDirectory' })
        .remove();
      Py.closeAllPy4jInterpreters();
      Genai.PyUtil.terminateAllEngines();
    }
  });

  it('indexes multiple passages', function () {
    // Set the log level to DEBUG to verify that that vectorDistanceString is using cosine
    LocalLogConfig.getConfig().setConfigValue('logFile', '/usr/local/share/c3/server/log/c3-server.log');
    C3.Logger.for('Genai.Retriever.PgVector').setLogLevel('DEBUG');
    var mergeBatchCallCountBefore = this.mergeBatchSpy.getActionMock().callCount();
    var objList = this.retriever.indexFiles([this.sourceFiles[0]], true);
    TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 360);

    // Wait for the PgVector index to update
    Thread.sleep(5000);
    TestApi.checkIndexResult(this.retriever, 9, objList, 1, 0, 1);
    TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);

    var mergeBatchCallCountAfter = this.mergeBatchSpy.getActionMock().callCount();
    expect(mergeBatchCallCountAfter - mergeBatchCallCountBefore)
      .withContext('Genai.Vector.SourcePassage mergeBatch call count')
      .toBeGreaterThan(1);

    var logs = LocalLogReader.read({ limit: -1 })
      .filter((line) => {
        return (
          line.includes('similaritySearch,vector_dist_str=') &&
          line.includes('DEBUG') &&
          line.includes(Expr.DistanceSpec.Metric.COSINE)
        );
      })
      .collect();
    expect(logs.length)
      .withContext('logs include DEBUG statement vector_dist_str=...' + Expr.DistanceSpec.Metric.COSINE)
      .toBeGreaterThan(0);
  });

  it('appends a single passage', function () {
    // Deliberately not calling waitForSetup immediately, so we can test the behavior while running
    var objList = this.retriever.indexFiles([this.sourceFiles[3]]);

    // Test that it gracefully handles searches while indexing is running
    var searchResults = this.retriever.similaritySearch(
      Genai.Retriever.SearchSpec.make({
        searchQuery: this.testQueries.finetuning.question,
        k: 5,
      })
    );
    expect(searchResults.length).withContext('result length while indexing is running').toEqual(5);

    TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);

    // Wait for the PgVector index to update
    Thread.sleep(5000);
    TestApi.checkIndexResult(this.retriever, 10, objList, 1, 0, 2);
    TestApi.testSearch(this.retriever, [this.testQueries.finetuning, this.testQueries.thor], [2, 1]);
  });
});
