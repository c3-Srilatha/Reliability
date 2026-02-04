/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiFewShotExampleQueryResultPair';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.query = 'What is the turbine with the highest risk score?';
    this.project = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'windturbine',
      name: 'windturbine',
      projectType: Genai.Project.Type.PRODUCTION,
      readOnly: true,
      unstructuredQueryEngineConfigName: 'default',
      chunkerConfig: 'default',
      handlerTypeName: 'Genai.Agent.QueryOrchestrator',
      retriever: Genai.Retriever.Dense.forName('default-dense'),
    });
    this.result = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      id: filename + '_result',
      searchQuery: Genai.Query.fromString(this.query),
      answer: 'The turbine with the highest risk score is TURBINE-1.',
    });

    this.followUpResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      id: filename + '_followUpResult',
      searchQuery: Genai.Query.fromString('How might TURBINE-1 have failed?'),
      answer: 'TURBINE-1 might have failed due to a broken blade.',
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.FewShotExample.QueryResultPair.removeAll({ filter: Filter.eq('query', this.query) }, true);
    Genai.PyUtil.terminateAllEngines();
  });

  describe(':addFewShot', function () {
    beforeAll(function () {
      this.queryPairResult = Genai.FewShotExample.QueryResultPair.addFewShot(
        this.result,
        this.followUpResult,
        Genai.Project.forId('windturbine')
      );
      this.queryPairResult = this.queryPairResult.getMissing({ include: 'emb, query, result.id, followUpResult.id' });
    });

    it('adds a few-shot example', function () {
      expect(this.queryPairResult).not.toBeNull();
    });

    it('has the correct query', function () {
      expect(this.queryPairResult.query).toBe(this.query);
    });

    it('has the correct result', function () {
      expect(this.queryPairResult.result.id).toBe(this.result.id);
    });

    it('has the correct follow-up result', function () {
      expect(this.queryPairResult.followUpResult.id).toBe(this.followUpResult.id);
    });

    it('has an embedding', function () {
      expect(this.queryPairResult.emb).not.toBeNull();
    });

    describe('with a custom e5 embedding model', function () {
      beforeAll(function () {
        Genai.PyUtil.terminateAllEngines();
        var downloadDir = Genai.PyUtil.downloadAndUnzip(
          'gcs://c3--datasets/genai/airgap/models/e5.zip',
          '/tmp/models/airgap/e5',
          '/tmp/models/airgap/e5'
        );

        Genai.App.AirGapConfig.inst().setConfigValues({
          fewShotEmbedderPath: 'file:///tmp/models/airgap/e5/e5',
        });
        Genai.App.AirGapConfig.setConfigValue('fewShotEmbedderModelName', 'intfloat/e5-small');
        var queryPairResult = Genai.FewShotExample.QueryResultPair.addFewShot(this.result, this.followUpResult);
        var embStr = queryPairResult.getMissing({ include: 'emb' }).emb;
        this.emb = JSON.parse(embStr);
      });

      afterAll(function () {
        Genai.App.AirGapConfig.clearConfigAndSecretOverride('APP');
        GenaiCore.Embedder.Hf.forId('intfloat/e5-small')
          .withoutModelDirectory()
          .merge({ mergeInclude: 'modelDirectory' })
          .remove();
      });

      it('pads embedding with 0s', function () {
        expect(this.emb.length).toEqual(1024);

        var paddingStart = 384; // Custom e5 embeddings model has 384 dimensions

        var beforePadding = this.emb.slice(0, paddingStart);
        var afterPadding = this.emb.slice(paddingStart);

        beforePadding.forEach((val) => {
          expect(val).not.toBe(0);
        });

        afterPadding.forEach((val) => {
          expect(val).toBe(0);
        });
      });
    });
  });
});
