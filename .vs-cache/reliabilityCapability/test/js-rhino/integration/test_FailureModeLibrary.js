/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FailureModeLibrary';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

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

    FailureMode.removeAll(
      {
        filter: 'intersects(id, ["FM-01-Test", "FM-02-Test"]) || (failureModeLibrary.id == "FML-01-Test")',
      },
      true
    );

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
        failureMode: 'FM-01-Test',
        expectedSensor: this.expectedSensors[0],
      },
      {
        name: 'FMLI-02-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.5,
        failureMode: 'FM-01-Test',
        expectedSensor: this.expectedSensors[1],
      },
      {
        name: 'FMLI-03-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.7,
        failureMode: 'FM-01-Test',
        expectedSensor: this.expectedSensors[0],
      },
      {
        name: 'FMLI-04-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.6,
        failureMode: 'FM-02-Test',
        expectedSensor: this.expectedSensors[1],
      },
    ]);

    this.failureModeRecommendation = TestApi.upsertBatchEntity(this.ctx, 'FailureModeRecommendation', [
      {
        id: 'failure_mode_1',
        recommendation: 'recommendationOne',
        failureMode: this.failureModeLineItem[0],
      },
      {
        id: 'failure_mode_2',
        recommendation: 'recommendationTwo',
        failureMode: this.failureModeLineItem[1],
      },
    ]);
  });

  describe('#duplicateFailureModeLibrary', function () {
    beforeAll(function () {
      this.form = {
        name: 'Failure Mode Library Copy',
        failureModeLibrary: FailureModeLibrary.fetch({
          filter: Filter.eq('id', this.failureModeLibrary.id),
        }).objs.first(),
      };

      FailureModeLibrary.duplicateFailureModeLibrary(this.form);
      this.fmlCopy = FailureModeLibrary.fetch({
        filter: "name == 'Failure Mode Library Copy'",
        include:
          'this, {failureModes: [name, {failureModeLineItems: [name, exceptions, sensorThreshold, {failureRecommendation: [name, description]}]} ] }',
      }).objs[0];

      this.fmCopyZero = this.fmlCopy.failureModes[0];
      this.fmCopyOne = this.fmlCopy.failureModes[1];
    });

    describe('with valid parameters', function () {
      it('creates the correct amount of failure modes per library', function () {
        expect(this.fmlCopy.failureModes.length).toEqual(2);
      });

      it('creates the library with the correct name', function () {
        expect(this.fmlCopy.name).toEqual('Failure Mode Library Copy');
      });

      it('creates the correct amount of failure mode line items', function () {
        var numFailureModeLineItems =
          this.fmCopyZero.get('failureModeLineItems').failureModeLineItems.length +
          this.fmCopyOne.get('failureModeLineItems').failureModeLineItems.length;
        expect(numFailureModeLineItems).toEqual(4);
      });

      it('creates the correct amount of exceptions for a failure mode line item', function () {
        var fmliCopy = this.fmCopyOne.get('failureModeLineItems').failureModeLineItems[0];
        expect(fmliCopy.get('exceptions').exceptions).toEqual('Decreasing');
      });
    });

    describe('with invalid parameters', function () {
      beforeAll(function () {
        this.count = FailureModeLibrary.fetchCount();
        this.result = FailureModeLibrary.duplicateFailureModeLibrary(this.form);
        this.newCount = FailureModeLibrary.fetchCount();
      });

      it('returns null without creating an additional failure mode library', function () {
        expect(this.result).toBeNull();
        expect(this.count).toEqual(this.newCount);
      });
    });
  });

  describe('#createFailureModeLibrary', function () {
    beforeAll(function () {
      this.form = {
        name: 'Failure Mode Library Copy 2',
      };
      this.result = FailureModeLibrary.createFailureModeLibrary(this.form);
    });

    describe('with valid parameters', function () {
      it('returns a newly created ', function () {
        expect(this.result.type().toString()).toEqual('FailureModeLibrary');
        expect(this.result.name).toEqual(this.form.name);
      });
    });

    describe('with invalid parameters', function () {
      beforeAll(function () {
        this.count = FailureModeLibrary.fetchCount();
        this.result = FailureModeLibrary.createFailureModeLibrary(this.form);
        this.newCount = FailureModeLibrary.fetchCount();
      });

      it('returns null without creating any failure mode library', function () {
        expect(this.result).toBeNull();
        expect(this.count).toEqual(this.newCount);
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
      { filter: Filter.intersects('id', ['failure_mode_1', 'failure_mode_2']) },
      true
    );
    FailureModeLibrary.removeAll(
      {
        filter: Filter.intersects('name', ['Failure Mode Library Copy', 'Failure Mode Library Copy 2']),
      },
      true
    );
  });
});
