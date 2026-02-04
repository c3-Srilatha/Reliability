/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Residual';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    this.ss = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'testSubsystem1',
      name: 'Rel Subsystem 1 Test',
    });

    this.model = ReliabilityTestData.createReliabilityRiskModels(
      Filter.eq('id', this.ss.id).toString(),
      MlModel.Route.Status.Label.CHAMPION
    )[this.ss.id];
    this.modelRelation = ReliabilityAssetToRiskModelRelation.fetch({
      filter: Filter.eq('to.id', this.model.id)
        .and()
        .eq('status.label', MlModel.Route.Status.Label.CHAMPION)
        .toString(),
    }).objs[0];

    this.sensorId = 'testSensor1';
    this.sensor = TestApi.upsertEntity(this.ctx, 'Sensor', {
      id: this.sensorId,
      tag: this.sensorId,
    });

    this.residualHeader = TestApi.upsertEntity(this.ctx, 'ReliabilityRiskScoreMlPredictionHeader', {
      name: MlProject.ReliabilityRisk.getResidualHeaderName(this.sensor, this.ss),
      parent: this.modelRelation,
    });

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityRiskScoreMlPrediction', [
      {
        value: -1,
        parent: this.residualHeader.id,
        start: '2020-01-01',
      },
      {
        value: -2,
        parent: this.residualHeader.id,
        start: '2020-01-02',
      },
      {
        value: -1,
        parent: this.residualHeader.id,
        start: '2020-01-03',
      },
      {
        value: -4,
        parent: this.residualHeader.id,
        start: '2020-01-04',
      },
      {
        value: 7,
        parent: this.residualHeader.id,
        start: '2020-01-05',
      },
    ]);

    ReliabilityAssetToModelRelation.mergeAll({ start: '2020-01-01' });

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    ReliabilityTestData.removeMdfConcepts();
    TestApi.teardown(this.ctx);
  });

  it('Residual', function () {
    var ts = ReliabilityAsset.evalMetric({
      id: this.ss.id,
      expression: 'Residual',
      start: '2020-01-01',
      end: '2020-01-06',
      interval: 'DAY',
      bindings: {
        residualSeriesName: MlProject.ReliabilityRisk.getResidualHeaderName(this.sensor, this.ss),
      },
    });

    expect(ts.data()).toEqual([-1, -2, -1, -4, 7]);
  });
});
