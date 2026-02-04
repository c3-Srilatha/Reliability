/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ScaledContributors';
describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();
    this.seriesName = 'riskScoreNormalized';
    this.ss = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'testSubsystem1',
      name: 'Rel Subsystem 1 Test',
    });

    this.model = ReliabilityTestData.createReliabilityRiskModels(
      Filter.eq('id', this.ss.id),
      MlModel.Route.Status.Label.CHAMPION
    )[this.ss.id];
    this.modelRelation = ReliabilityAssetToModelRelation.fetch({
      filter: Filter.eq('to', this.model.id).and().not().exists('end').toString(),
    }).objs[0];

    this.sensorId = 'testSensor1';
    this.sensor = TestApi.upsertEntity(this.ctx, 'Sensor', {
      id: this.sensorId,
      tag: this.sensorId,
    });

    TestApi.upsertEntity(this.ctx, 'ReliabilityAssetSensorRelation', {
      from: 'testSubsystem1',
      to: this.sensorId,
    });

    this.riskScoreContributionHeader = TestApi.upsertEntity(this.ctx, 'ReliabilityRiskScoreMlContributionHeader', {
      name: this.seriesName,
      parent: this.modelRelation.id,
    });

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityRiskScoreMlContribution', [
      {
        contribution: 2,
        parent: this.riskScoreContributionHeader.id,
        start: '2020-01-01',
      },
      {
        contribution: 3,
        parent: this.riskScoreContributionHeader.id,
        start: '2020-01-02',
      },
      {
        contribution: 2,
        parent: this.riskScoreContributionHeader.id,
        start: '2020-01-03',
      },
      {
        contribution: 6,
        parent: this.riskScoreContributionHeader.id,
        start: '2020-01-04',
      },
      {
        contribution: 6,
        parent: this.riskScoreContributionHeader.id,
        start: '2020-01-05',
      },
    ]);

    this.riskScorePredictionHeader = TestApi.upsertEntity(this.ctx, 'ReliabilityRiskScoreMlPredictionHeader', {
      name: this.seriesName,
      parent: this.modelRelation.id,
    });

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityRiskScoreMlPrediction', [
      {
        value: 2,
        parent: this.riskScorePredictionHeader.id,
        start: '2020-01-01',
      },
      {
        value: 3,
        parent: this.riskScorePredictionHeader.id,
        start: '2020-01-02',
      },
      {
        value: 2,
        parent: this.riskScorePredictionHeader.id,
        start: '2020-01-03',
      },
      {
        value: 6,
        parent: this.riskScorePredictionHeader.id,
        start: '2020-01-04',
      },
      {
        value: 6,
        parent: this.riskScorePredictionHeader.id,
        start: '2020-01-05',
      },
    ]);

    ReliabilityAssetToModelRelation.mergeAll({ start: '2019-01-01' });
    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    ReliabilityTestData.removeMdfConcepts();
    TestApi.teardown(this.ctx);
  });

  it('ScaledContributors match contribution series metric', function () {
    var ts = ReliabilityAsset.evalMetric({
      id: this.ss.id,
      expression: 'ScaledContributors',
      start: '2020-01-01',
      end: '2020-01-06',
      interval: 'DAY',
      bindings: {
        contributionSeriesName: this.seriesName,
      },
    });

    expect(ts.data()).toEqual([2.0, 3.0, 2.0, 6.0, 6.0]);
  });
});
