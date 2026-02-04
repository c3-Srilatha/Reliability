/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

// TODO: PLAT-39404 Re-enable this test
xdescribe('test_JobStatusTracker', function () {
  var filename = 'test_JobStatusTracker';

  beforeAll(function () {
    ActionQueue.clear();
    this.ctx = TestApi.createContext(filename);
    TestApi.upsertBatchEntity(this.ctx, 'TestApiEntityType', [
      { id: 'id1' },
      { id: 'id2' },
      { id: 'id3' },
    ]);

    var map = function () {
      TestApi.sleepImpl(5);
    };

    var testJob = JSMapReduceJob.make({
      targetType: C3.type('TestApiEntityType'),
      batchSize: 1,
      mapLambda: map.toString(),
    });

    this.testJob1 = testJob.upsert();
    this.testJob2 = testJob.upsert();
    this.testJob3 = testJob.upsert();

    // TODO: Might need ticket for no cnversion on function call. When not wrapped in array, jobs.each not exist
    this.testJobs = C3.type('Array').ofAny(this.testJob1, this.testJob2, this.testJob3);

    TestApi.waitForSetup(this.ctx, null, 1, 60);
  });

  describe('synchronously track jobs', function () {
    beforeAll(function () {
      this.tracker = JobStatusTracker.run(this.testJobs, {
        syncCheckInterval: 5,
      });
    });

    it('runs and gets reports', function () {
      expect(this.tracker.duration).toBeDefined();

      var finishedTracker = this.tracker.statusReport();
      expect(finishedTracker.reports).toBeDefined();
      expect(finishedTracker.reports.length).toEqual(3);
      expect(finishedTracker.reports[0].jobStatus).toBeDefined();
    });

    afterAll(function () {
      this.tracker.remove();
      JobStatusReport.removeAll(Filter.eq('tracker.id', this.tracker.id));
    });
  });

  describe('asynchronously track jobs', function () {
    beforeAll(function () {
      // Checks job status every 20 seconds during testing
      this.tracker = JobStatusTracker.run(this.testJobs, {
        async: true,
        asyncCronExpression: (string = '0/20 * * * * ?'),
      });
    });

    it('creates the status checking cron job', function () {
      var cronJob = CronJob.make({ id: this.tracker.id }).get();
      expect(cronJob).toBeDefined();
    });

    it('can upsert job status reports', function () {
      TestApi.waitForSetup(this.ctx, C3.type('Array').ofStr('MapReduceQueue'), 5, 120);
      expect(this.tracker.checkJobStatus(this.testJobs)).toBeFalsy();
      var finishedTracker = this.tracker.statusReport();
      expect(finishedTracker.reports).toBeDefined();
      expect(finishedTracker.reports.length).toEqual(3);
      expect(finishedTracker.reports[0].jobStatus).toBeDefined();

      // Cron job gets deleted after the jobs have finished
      var cronJob = CronJob.make({ id: this.tracker.id }).get();
      expect(cronJob).toBeNull();
    });

    afterAll(function () {
      /*
       * Remove CronJob in case `checkJobStatus` fails and it's not automatically removed. This can help avoid future
       * CronQueue errors because the tracker will no longer exist.
       */
      CronJob.make(this.tracker.id).remove();
      this.tracker.remove();
      JobStatusReport.removeAll(Filter.eq('tracker.id', this.tracker.id));
    });
  });

  afterAll(function () {
    if (this.tracker) {
      CronQueue.clear({
        targetAppCode: Tag.getTenantTagId({ id: C3.context().app }),
        targetTypeId: TypeId.idFromTypeName('JobStatusTracker'),
        targetObjIds: [this.tracker.id],
      });
    }
    JSMapReduceJob.removeBatch(this.testJobs);
    TestApi.teardown(this.ctx);
  });
}).pend('PLAT-39404');
