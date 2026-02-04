/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FaultySensorRiskModelSourceOfTruthRelation';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    C3.app().setLogLevel(null, Logger.Level.DEBUG, '5m');

    this.model1 = ReliabilityRiskMlModel.make('model1');
    this.model2 = ReliabilityRiskMlModel.make('model2');
    this.model3 = ReliabilityRiskMlModel.make('model3');
    this.model4 = ReliabilityRiskMlModel.make('model4');
    this.model5 = ReliabilityRiskMlModel.make('model5');
    this.aloneModel = ReliabilityRiskMlModel.make('aloneModel');

    this.relationIds = TestApi.upsertBatchEntity(this.ctx, 'FaultySensor.RiskModelSourceOfTruthRelation', [
      {
        child: this.model2,
        sourceOfTruth: this.model1,
        parent: this.model1,
      },
      {
        child: this.model3,
        sourceOfTruth: this.model1,
        parent: this.model2,
      },
      {
        child: this.model4,
        sourceOfTruth: this.model1,
        parent: this.model3,
      },
      {
        child: this.model5,
        sourceOfTruth: this.model2,
        parent: this.model4,
      },
    ]);

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  it('should return the correct source of truth for a single model', function () {
    var result = FaultySensor.RiskModelSourceOfTruthRelation.getSourceOfTruthForModelsBatch([this.model2]);
    expect(result.size).toEqual(1);
    expect(result.get(this.model2.id)).toEqual(this.model1);
  });

  it('should map to itself if there is no relation', function () {
    var result = FaultySensor.RiskModelSourceOfTruthRelation.getSourceOfTruthForModelsBatch([this.aloneModel]);
    expect(result.size).toEqual(1);
    expect(result.get(this.aloneModel.id)).toEqual(this.aloneModel);
  });

  it('should batch models with the same source of truth', function () {
    var result = FaultySensor.RiskModelSourceOfTruthRelation.getSourceOfTruthForModelsBatch([this.model2, this.model3]);
    expect(result.size).toEqual(2);
    expect(result.get(this.model2.id))
      .withContext('key: ' + this.model2.id)
      .toEqual(this.model1);
    expect(result.get(this.model3.id))
      .withContext('key: ' + this.model3.id)
      .toEqual(this.model1);
  });

  it('should support full batches', function () {
    var result = FaultySensor.RiskModelSourceOfTruthRelation.getSourceOfTruthForModelsBatch([
      this.model1,
      this.model2,
      this.model3,
      this.model4,
      this.model5,
      this.aloneModel,
    ]);
    expect(result.size).toEqual(6);
    expect(result.get(this.model1.id))
      .withContext('key: ' + this.model1.id)
      .toEqual(this.model1);
    expect(result.get(this.model2.id))
      .withContext('key: ' + this.model2.id)
      .toEqual(this.model1);
    expect(result.get(this.model3.id))
      .withContext('key: ' + this.model3.id)
      .toEqual(this.model1);
    expect(result.get(this.model4.id))
      .withContext('key: ' + this.model4.id)
      .toEqual(this.model1);
    expect(result.get(this.model5.id))
      .withContext('key: ' + this.model5.id)
      .toEqual(this.model2);
    expect(result.get(this.aloneModel.id))
      .withContext('key: ' + this.aloneModel.id)
      .toEqual(this.aloneModel);
  });

  it('should support an empty or null list of models', function () {
    var nullResult = FaultySensor.RiskModelSourceOfTruthRelation.getSourceOfTruthForModelsBatch(null);
    expect(nullResult.size).withContext('null').toEqual(0);

    var emptyResult = FaultySensor.RiskModelSourceOfTruthRelation.getSourceOfTruthForModelsBatch([]);
    expect(emptyResult.size).withContext('[]').toEqual(0);
  });

  it('should throw an error if passed null models', function () {
    expect(() => {
      FaultySensor.RiskModelSourceOfTruthRelation.getSourceOfTruthForModelsBatch([null]);
    }).toThrowError(/Invalid call to/);
  });

  describe('logging', function () {
    beforeAll(function () {
      this.loggingSpy = TestApi.spyOn(this.ctx, 'Logger', 'debug').returnValue(null).register();

      this.logSpyHistoryIncludesMessage = function (spy, substring) {
        var actionMock = spy.getActionMock();
        var history = actionMock.callHistory();
        return history?.containsAny(function (historyItem) {
          var logMessage = historyItem?.args?.get('format');
          return logMessage.includes(substring);
        });
      };

      TestApi.waitForSetup(this.ctx);
    });

    afterAll(function () {
      this.loggingSpy.unregister();
    });

    it('should log the correct results', function () {
      FaultySensor.RiskModelSourceOfTruthRelation.getSourceOfTruthForModelsBatch([this.model1, this.model2]);

      var model1PairStr = "('" + this.model1.id + "', '" + this.model1.id + "')";
      var model2PairStr = "('" + this.model2.id + "', '" + this.model1.id + "')";

      // The order of the models in the output is not guaranteed.
      var logSubstringsToCheck = [
        'getSourceOfTruthForModelsBatch input IDs: [',
        model1PairStr,
        model2PairStr,
        'getSourceOfTruthForModelsBatch result key value ID pairs:',
      ];

      var logSpyHistoryIncludesMessage = this.logSpyHistoryIncludesMessage;
      var logSpy = this.loggingSpy;
      logSubstringsToCheck.forEach(function (substring) {
        expect(logSpyHistoryIncludesMessage(logSpy, substring)).withContext(substring).toBe(true);
      });
    });
  });
});
