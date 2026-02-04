/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_DataValidationRuleset';

describe(filename, function () {
  var ruleSets = [
    'DataModelPopulation',
    'ModelTrainingAndInference',
    'ReliabilityRiskScoreAndContribution',
    'ReliabilityRiskAlertGeneration',
    'ReliabilityRiskRuleBasedFailureModes',
  ];

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();
    C3.pkg().upsertAllSeed();
    ReliabilityMLConfig.inst().setConfigValue('mlProjectTrainingIntervalMap', {
      reliabilityRisk: 'MINUTE',
      eliabilityRiskPsr: 'DAY',
    });
  });

  afterAll(function () {
    var runs = DataValidationRun.fetch({
      filter: Filter.intersects('rootRuleset', ruleSets),
    }).objs;
    DataValidationRun.removeAll({ filter: Filter.intersects('rootRuleset', ruleSets) }, true);
    DataValidationPersistedResult.removeAll({ filter: Filter.intersects('run', runs) }, true);
    TestApi.teardown(this.ctx);
  });

  it('should validate ReliabilityRiskRuleBasedFailureModes', function () {
    var run = DataValidationRuleset.forId('ReliabilityRiskRuleBasedFailureModes').validate();
    TestApi.waitForJob(this.ctx, run.get('job').job, 1, 60);
    run = run.get('runStatus, jobError');
    expect(run.runStatus).toEqual(DataValidationRunStatus.COMPLETE);
    expect(run.jobError).toBeUndefined();
  });

  it('should validate ReliabilityRiskAlertGeneration', function () {
    var run = DataValidationRuleset.forId('ReliabilityRiskAlertGeneration').validate();
    TestApi.waitForJob(this.ctx, run.get('job').job, 1, 60);
    run = run.get('runStatus, jobError');
    expect(run.runStatus).toEqual(DataValidationRunStatus.COMPLETE);
    expect(run.jobError).toBeUndefined();
  });

  it('should validate DataModelPopulation', function () {
    var run = DataValidationRuleset.forId('DataModelPopulation').validate();
    TestApi.waitForJob(this.ctx, run.get('job').job, 1, 60);
    run = run.get('runStatus, jobError');
    expect(run.runStatus).toEqual(DataValidationRunStatus.COMPLETE);
    expect(run.jobError).toBeUndefined();
  });

  it('should validate ModelTrainingAndInference', function () {
    var run = DataValidationRuleset.forId('ModelTrainingAndInference').validate();
    TestApi.waitForJob(this.ctx, run.get('job').job, 1, 60);
    run = run.get('runStatus, jobError');
    expect(run.runStatus).toEqual(DataValidationRunStatus.COMPLETE);
    expect(run.jobError).toBeUndefined();
  });

  it('should validate ReliabilityRiskScoreAndContribution', function () {
    var run = DataValidationRuleset.forId('ReliabilityRiskScoreAndContribution').validate();
    TestApi.waitForJob(this.ctx, run.get('job').job, 1, 60);
    run = run.get('runStatus, jobError');
    expect(run.runStatus).toEqual(DataValidationRunStatus.COMPLETE);
    expect(run.jobError).toBeUndefined();
  });
});
