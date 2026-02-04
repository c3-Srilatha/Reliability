/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FailureMode_cleanupRelatedEntities';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    TestApi.cleanFailedQueues(this.ctx);

    this.alert1 = this.ctx.uuid();
    this.alert2 = this.ctx.uuid();

    this.expectedSensors = TestApi.upsertBatchEntity(this.ctx, 'ExpectedSensor', [
      {
        id: 'expectedSensor1Id',
        name: 'expectedSensor1',
        unit: 'fake_unit',
      },
      {
        id: 'expectedSensor2Id',
        name: 'expectedSensor2',
        unit: 'fake_unit',
      },
    ]);

    this.failureModeLibrary = TestApi.upsertEntity(this.ctx, 'FailureModeLibrary', {
      id: 'FML-01-Test',
      name: 'Failure Mode Library 1',
    });

    this.failureModes = TestApi.upsertBatchEntity(this.ctx, 'FailureMode', [
      {
        id: 'FM-01-Test',
        name: 'Failure Mode 1',
        failureModeLibrary: 'FML-01-Test',
      },
      {
        id: 'FM-02-Test',
        name: 'Failure Mode 2',
        failureModeLibrary: 'FML-01-Test',
      },
    ]);

    this.failureModeLineItem = TestApi.upsertBatchEntity(this.ctx, 'FailureModeLineItem', [
      {
        name: 'FMLI-01-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.1,
        failureMode: this.failureModes[0],
        expectedSensor: this.expectedSensors[0],
      },
      {
        name: 'FMLI-02-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.5,
        failureMode: this.failureModes[1],
        expectedSensor: this.expectedSensors[1],
      },
      {
        name: 'FMLI-03-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.7,
        failureMode: this.failureModes[0],
        expectedSensor: this.expectedSensors[0],
      },
      {
        name: 'FMLI-04-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.6,
        failureMode: this.failureModes[1],
        expectedSensor: this.expectedSensors[1],
      },
    ]);

    this.failureModeRelation = TestApi.upsertBatchEntity(this.ctx, 'FailureModeRelation', [
      {
        to: this.failureModeLineItem[0],
      },
      {
        to: this.failureModeLineItem[1],
      },
    ]);

    this.failureModeRecommendation = TestApi.upsertBatchEntity(this.ctx, 'FailureModeRecommendation', [
      {
        id: 'failure_mode_1',
        recommendation: 'recommendationOne',
      },
      {
        id: 'failure_mode_2',
        recommendation: 'recommendationTwo',
      },
      {
        id: 'failure_mode_3',
        recommendation: 'recommendationThree',
        failureMode: this.failureModes[0],
      },
      {
        id: 'failure_mode_4',
        recommendation: 'recommendationFour',
        failureMode: this.failureModes[1],
      },
    ]);

    TestApi.waitForSetup(this.ctx, null, 1, 60);
  });

  describe('#cleanupRelatedEntities', function () {
    beforeAll(function () {
      this.flmlitms = this.failureModeLineItem;
      this.result = FailureMode.cleanupRelatedEntities([this.failureModes[0], this.failureModes[1]]);
    });

    describe('when #cleanupRelatedEntities removes', function () {
      it('the correct amount of failure modes line items', function () {
        expect(this.result).toEqual(this.flmlitms.length);
      });

      it('all of the recommended actions for the line items', function () {
        var rma1 = FailureModeRecommendation.fetchCount({
          filter: Filter.intersects('failureMode', this.failureModeLineItem[0]),
        });
        var rma2 = FailureModeRecommendation.fetchCount({
          filter: Filter.intersects('failureMode', this.failureModeLineItem[1]),
        });
        expect(rma1).toEqual(0);
        expect(rma2).toEqual(0);
      });

      it('all of the directly associated recommended actions for the FMs', function () {
        var rmafm1 = FailureModeRecommendation.fetchCount({
          filter: Filter.intersects('failureMode', this.failureModes[0]),
        });
        var rmafm2 = FailureModeRecommendation.fetchCount({
          filter: Filter.intersects('failureMode', this.failureModes[1]),
        });
        expect(rmafm1 + rmafm2).toEqual(0);
      });

      describe('removes the failure mode relations', function () {
        it('and ReliabilityAssetAlertFailureModeRelation', function () {
          var failureModeLineItems = [this.failureModeLineItem[0].id, this.failureModeLineItem[1].id];
          this.result = FailureModeLineItem.cleanupFailureModeRelations(failureModeLineItems);
          var relationFilter = Filter.intersects('to', failureModeLineItems);
          var failureModeRelationCount = FailureModeRelation.fetchCount({ filter: relationFilter });
          expect(failureModeRelationCount).toEqual(0);
        });
      });
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    FailureMode.removeAll({ filter: Filter.intersects('name', ['Failure Mode 1', 'Failure Mode 2']) }, true);
    FailureModeLineItem.removeAll(
      { filter: Filter.intersects('name', ['FMLI-01-Test', 'FMLI-02-Test', 'FMLI-03-Test', 'FMLI-04-Test']) },
      true
    );
    FailureModeRecommendation.removeAll(
      { filter: Filter.intersects('id', ['failure_mode_1', 'failure_mode_2', 'failure_mode_3', 'failure_mode_4']) },
      true
    );
    FailureModeLibrary.removeAll(
      {
        filter: Filter.intersects('name', 'FML-01-Test'),
      },
      true
    );
  });
});
