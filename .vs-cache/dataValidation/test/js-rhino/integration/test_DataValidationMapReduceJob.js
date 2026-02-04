/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_DataValidationMapReduceJob';

function validateResults(run) {
  var job = run.get('job').job;
  expect(job.status().errors.length).toEqual(0);
  expect(run.runStatus).toEqual(DataValidationRunStatus.COMPLETE);
  expect(run.results.length).toEqual(0);
  expect(run.persistedResults.length).toEqual(10);
  expect(run.persistedRulesetResults.length).toEqual(4);
  expect(run.rulesetResults.length).toEqual(0);
}

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    C3.pkg().upsertAllSeed();
    this.ruleset = DataValidationRuleset.forId('SmartBulbTypeChecks');
    this.rulesetInvalidPossibleOutputs = DataValidationRuleset.forId('SmartBulbTypeChecksInvalidPossibleOutputs');
    this.include =
      'results, persistedResults, runStatus, persistedRulesetResults, rulesetResults, validationStatus.category, job';
    this.validatedRuns = [];
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    DataValidationPersistedResult.removeAll({ filter: Filter.intersects('run', this.validatedRuns) }, true);
    DataValidationPersistedRulesetResult.removeAll({ filter: Filter.intersects('run', this.validatedRuns) }, true);
  });

  describe('test synchronous validation', function () {
    testDataValidationMapReduceJob(true);
  });

  describe('test asynchronous validation', function () {
    testDataValidationMapReduceJob(false);
  });

  function testDataValidationMapReduceJob(sync) {
    describe('get multiple validationStatus', function () {
      beforeAll(function () {
        this.spec = DataValidationExecutionSpec.make({
          batchSize: 5,
          persistProgress: true,
          doNotRun: false,
          sync: sync,
        });
      });

      it('should run a subject with validationStatus Complete', function () {
        var run = TestSmartBulb.forId('SMBLB1').runDataValidation(this.ruleset, null, this.spec);
        var job = DataValidationMapReduceJob.make(run.getMissing({ include: 'job' }).job);
        job.waitForCompletion();
        run = run.get(this.include);
        this.validatedRuns.push(run);
        expect(job.status().status).toEqual('completed');
        validateResults(run);
        expect(run.validationStatus.category).toEqual('Complete');
      });

      it('should run a subject with validationStatus Failed', function () {
        var run = TestSmartBulb.forId('SMBLB2').runDataValidation(this.ruleset, null, this.spec);
        var job = DataValidationMapReduceJob.make(run.getMissing({ include: 'job' }).job);
        job.waitForCompletion();
        run = run.get(this.include);
        this.validatedRuns.push(run);
        expect(job.status().status).toEqual('completed');
        validateResults(run);
        expect(run.validationStatus.category).toEqual('Failed');
      });

      it('should run a subject with validationStatus Warning', function () {
        var run = TestSmartBulb.forId('SMBLB3').runDataValidation(this.ruleset, null, this.spec);
        var job = DataValidationMapReduceJob.make(run.getMissing({ include: 'job' }).job);
        job.waitForCompletion();
        run = run.get(this.include);
        this.validatedRuns.push(run);
        expect(job.status().status).toEqual('completed');
        validateResults(run);
        expect(run.validationStatus.category).toEqual('Warning');
      });

      it('should skipped the validationResult', function () {
        var run = TestSmartBulb.forId('SMBLB6').runDataValidation(this.ruleset, null, this.spec);
        var job = DataValidationMapReduceJob.make(run.getMissing({ include: 'job' }).job);
        job.waitForCompletion();
        run = run.get(this.include);
        this.validatedRuns.push(run);
        expect(job.status().status).toEqual('completed');
        validateResults(run);
        var skippedResults = run.getResults('runStatus').filter((result) => {
          return result.runStatus === DataValidationRunStatus.SKIPPED;
        });
        expect(skippedResults.length).toEqual(8);
      });

      it('should run multiple subjects with differerent results', function () {
        var subjectId = ['SMBLB1', 'SMBLB2', 'SMBLB3'];
        this.argsKey = {
          ids: subjectId.map((id) => {
            return TestSmartBulb.forId(id);
          }),
        };

        var runs = this.ruleset.validate(this.argsKey, this.spec);
        var job = runs.first().get('job').job;
        job.waitForCompletion();
        expect(job.status().status).toEqual('completed');
        var status = job.status();
        expect(status.errors.length).toEqual(0);
        runs.each((run) => {
          run = run.get(this.include);
          this.validatedRuns.push(run);
          validateResults(run);
          expect(['Complete', 'Warning', 'Failed'].includes(run.validationStatus.category)).toBeTruthy();
        });
      });

      it('should run multiple subjects with differerent not posgress persisted results', function () {
        var specWithoutPersist = DataValidationExecutionSpec.make({
          batchSize: 5,
          persistProgress: false,
          doNotRun: false,
          sync: sync,
        });
        var subjectId = ['SMBLB1', 'SMBLB2', 'SMBLB3'];
        this.argsKey = {
          ids: subjectId.map((id) => {
            return TestSmartBulb.forId(id);
          }),
        };
        var runs = this.ruleset.validate(this.argsKey, specWithoutPersist);
        var job = runs.first().get('job').job;
        job.waitForCompletion();
        expect(job.status().status).toEqual('completed');
        var status = job.status();
        expect(status.errors.length).toEqual(0);
        runs.each((run) => {
          run = run.get(this.include);
          this.validatedRuns.push(run);
          expect(run.results.length).toEqual(10);
          expect(run.persistedResults.length).toEqual(0);
          expect(run.persistedRulesetResults.length).toEqual(0);
          expect(run.rulesetResults.length).toEqual(4);
          expect(['Complete', 'Warning', 'Failed'].includes(run.validationStatus.category)).toBeTruthy();
        });
      });
    });

    it('should run a subject with not persist results and Complete status', function () {
      var specWithoutPersist = DataValidationExecutionSpec.make({
        batchSize: 5,
        persistProgress: false,
        doNotRun: false,
        sync: sync,
      });

      var run = TestSmartBulb.forId('SMBLB1').runDataValidation(this.ruleset, null, specWithoutPersist);
      var job = DataValidationMapReduceJob.make(run.getMissing({ include: 'job' }).job);
      job.waitForCompletion();
      run = run.get(this.include);
      this.validatedRuns.push(run);
      expect(job.status().status).toEqual('completed');
      expect(job.status().errors.length).toEqual(0);
      expect(run.persistedResults.length).toEqual(0);
      expect(run.runStatus).toEqual(DataValidationRunStatus.COMPLETE);
      expect(run.results.length).toEqual(10);
      expect(run.persistedRulesetResults.length).toEqual(0);
      expect(run.rulesetResults.length).toEqual(4);
      expect(run.validationStatus.category).toEqual('Complete');
    });

    it('should return a run with an ERROR status. This is testing the invalid rule possibleOutputs.', function () {
      var specWithoutPersist = DataValidationExecutionSpec.make({
        batchSize: 5,
        persistProgress: false,
        doNotRun: false,
        sync: sync,
      });

      var runs = TestSmartBulb.forId('SMBLB1').runDataValidation(
        this.rulesetInvalidPossibleOutputs,
        null,
        specWithoutPersist
      );
      var job = runs.get('job').job;
      expect(() => {
        return job.waitForCompletion();
      }).toThrow();
      var include = this.include.concat(['jobError']);
      var run = runs.get(include);
      this.validatedRuns.push(run);
      expect(run.runStatus).toEqual(DataValidationRunStatus.ERROR);
      expect(run.jobError).not.toBeNull();
    });

    it('should return a run with an IN_PROGRESS status. This is testing the doNotMarkComplete field functionality', function () {
      var specWithoutPersist = DataValidationExecutionSpec.make({
        batchSize: 5,
        persistProgress: false,
        doNotRun: false,
        sync: sync,
        doNotMarkComplete: true,
      });

      var run = TestSmartBulb.forId('SMBLB1').runDataValidation(this.ruleset, null, specWithoutPersist);
      var job = DataValidationMapReduceJob.make(run.getMissing({ include: 'job' }).job);
      job.waitForCompletion();
      run = run.get(this.include);
      this.validatedRuns.push(run);
      expect(run.runStatus).toEqual(DataValidationRunStatus.IN_PROGRESS);
    });
  }
});
