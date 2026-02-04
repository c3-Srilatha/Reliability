/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FaultySensorImpactedBatchResult_logResult';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    C3.app().setLogLevel(null, Logger.Level.DEBUG, '5m');

    this.logSpy = TestApi.spyOn(this.ctx, 'Logger', 'info').returnValue(null).register();

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
    TestApi.teardown(this.ctx);
  });

  it('should log the result with a prefix message', function () {
    var inputObj = C3.type('FaultySensor.ImpactedBatchResult<Sensor>').make({
      impacted: [Sensor.make('sensor1'), Sensor.make('sensor2')],
      unverifiable: null,
      notImpacted: [],
    });

    inputObj.logResult('Test prefix');

    var substringsToCheck = [
      'Test prefix',
      'FaultySensor.ImpactedBatchResult<Sensor>',
      "impacted ids: ['sensor1', 'sensor2']",
      'unverifiable ids: []',
      'not impacted ids: []',
    ];

    var logSpyHistoryIncludesMessage = this.logSpyHistoryIncludesMessage;
    var logSpy = this.logSpy;
    substringsToCheck.forEach(function (substring) {
      expect(logSpyHistoryIncludesMessage(logSpy, substring)).withContext(substring).toBe(true);
    });
  });

  it('should log the result with no prefix message', function () {
    var inputObj = C3.type('FaultySensor.ImpactedBatchResult<ReliabilityAsset>').make({
      impacted: [ReliabilityAsset.make('reliabilityAsset1'), ReliabilityAsset.make('reliabilityAsset2')],
      unverifiable: null,
      notImpacted: [],
    });

    inputObj.logResult();

    var substringsToCheck = [
      'FaultySensor.ImpactedBatchResult<ReliabilityAsset>',
      "impacted ids: ['reliabilityAsset1', 'reliabilityAsset2']",
    ];

    var logSpyHistoryIncludesMessage = this.logSpyHistoryIncludesMessage;
    var logSpy = this.logSpy;
    substringsToCheck.forEach(function (substring) {
      expect(logSpyHistoryIncludesMessage(logSpy, substring)).withContext(substring).toBe(true);
    });
  });
});
