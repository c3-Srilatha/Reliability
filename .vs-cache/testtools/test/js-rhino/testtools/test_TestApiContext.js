/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiContext', function () {
  var filename = 'test_TestApiContext';

  /*
   * Note: We usually don't use beforeEach/afterEach in apps tests because
   * creating a lot of data for each test would take a significant amount of time.
   * We use it here because:
   * 1. We are not creating a lot of data
   * 2. We are testing TestApi and want to have a clean state on each test
   */
  beforeEach(function () {
    this.ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
    TestApiObj.removeAll(null, true);
  });

  it('should have no tracked objects after being created', function () {
    // By default it contains one dummy object
    expect(this.ctx.numObjects()).toEqual(0);
  });

  it('should always have the same contextID for the same contexts', function () {
    expect(this.ctx.contextID()).toEqual(this.ctx.contextID());
    this.ctx2 = TestApi.createContext(filename + '_ctx2', this.ctx, [AnalyticsQueue]);
    expect(this.ctx.contextID()).not.toEqual(this.ctx2.contextID());
    this.ctx2.remove();
  });

  it('should always have the different uuid for the separate calls', function () {
    this.ctx2 = TestApi.createContext(filename + '_ctx2', this.ctx, [AnalyticsQueue]);
    expect(this.ctx.uuid()).not.toEqual(this.ctx2.uuid());
    expect(this.ctx.uuid()).not.toEqual(this.ctx.uuid());
    this.ctx2.remove();
  });

  it('should always have the different uniqueNames for the separate calls', function () {
    var name = 'somename';
    expect(this.ctx.uniqueName(name)).toContain(filename);
    expect(this.ctx.uniqueName(name)).toContain(name);
    expect(this.ctx.uniqueName(name)).not.toEqual(this.ctx.uniqueName(name));
  });

  it('should allow to add, find and remove objects from context', function () {
    var testId = 777;
    var testId2 = 123;
    var testId3 = 456;
    var testId4 = 789;
    expect(this.ctx.numObjects()).toEqual(0);

    // Two with typeRefs and one without

    TestApiObj.createBatch([
      { parent: this.ctx, objId: testId, typeRef: 'TSPerfTest' },
      {
        parent: this.ctx,
        objId: testId,
        typeRef: 'TSPerfTestResult',
      },
      {
        parent: this.ctx,
        objId: testId2,
        typeRef: 'TSPerfTestResult',
      },
      {
        parent: this.ctx,
        objId: testId3,
        typeRef: 'TSPerfTestResult',
      },
      {
        parent: this.ctx,
        objId: testId4,
        typeRef: 'TSPerfTestResult',
      },
    ]);
    expect(this.ctx.numObjects()).toEqual(5);

    expect(this.ctx.findObjectById(testId, 'TSPerfTestResult')).toBeDefined();
    expect(this.ctx.findObjectById(testId, 'TSPerfTestResult').typeRef).toEqual('TSPerfTestResult');
    expect(this.ctx.removeObjectById(testId, 'TSPerfTestResult')).toEqual(1);
    expect(this.ctx.removeObjectById(testId, 'TSPerfTestResult')).toEqual(0);
    expect(this.ctx.findObjectById(testId, 'TSPerfTestResult')).toBeNull();

    expect(this.ctx.findObjectById(testId, 'TSPerfTest')).toBeDefined();
    expect(this.ctx.findObjectById(testId, 'TSPerfTest').typeRef).toEqual('TSPerfTest');
    expect(this.ctx.removeObjectById(testId, 'TSPerfTest')).toEqual(1);
    expect(this.ctx.removeObjectById(testId, 'TSPerfTest')).toEqual(0);
    expect(this.ctx.findObjectById(testId, 'TSPerfTest')).toBeNull();
    expect(this.ctx.numObjects()).toEqual(3);

    expect(this.ctx.findObjectById(testId2, 'TSPerfTest')).toBeNull();
    expect(this.ctx.findObjectById(testId2, 'TSPerfTestResult')).toBeDefined();
    expect(this.ctx.removeObjectById(testId2, 'TSPerfTestResult')).toEqual(1);
    expect(this.ctx.removeObjectById(testId2, 'TSPerfTestResult')).toEqual(0);
    expect(this.ctx.findObjectById(testId2, 'TSPerfTestResult')).toBeNull();
    expect(this.ctx.numObjects()).toEqual(2);

    expect(this.ctx.removeObjectByParent(this.ctx.id, 'TSPerfTestResult')).toEqual(2);
    expect(this.ctx.removeObjectByParent(this.ctx.id, 'TSPerfTestResult')).toEqual(0);
    expect(this.ctx.findObjectById(testId3, 'TSPerfTestResult')).toBeNull();
    expect(this.ctx.numObjects()).toEqual(0);

    this.ctx.clear();
    expect(this.ctx.numObjects()).toEqual(0);
  });

  it('should allow to add teardown filters', function () {
    expect(this.ctx.getTeardownFilters().length).toEqual(0);
    this.ctx.addTeardownFilter(Filter.eq('name', 'mockFilter'), TestApiObj, 5);
    this.ctx.addTeardownFilter(Filter.eq('name', 'mockFilter2'), TestApiObj);
    expect(this.ctx.getTeardownFilters().length).toEqual(2);
    expect(this.ctx.getTeardownFilters()[0].limit).toEqual(5);
    expect(this.ctx.getTeardownFilters()[1].limit).toEqual(100);
    this.ctx.clear();
  });

  it('should allow to set RemoveLimit', function () {
    expect(this.ctx.getRemoveLimit()).toEqual(100);
    this.ctx.setRemoveLimit(200);
    expect(this.ctx.getRemoveLimit()).toEqual(200);
    this.ctx.setRemoveLimit(100);
  });

  it('should allow to set Debug flag', function () {
    expect(this.ctx.isDebugEnabled()).toBeFalsy();
    this.ctx.setDebug(true);
    expect(this.ctx.isDebugEnabled()).toBeTruthy();
    this.ctx.setDebug(false);
  });

  it('should allow to disable and enable queues', function () {
    // By default it contains AnalyticsQueue
    expect(this.ctx.getQueueBlacklist().length).toEqual(1);
    this.ctx.disableQueues([MapReduceQueue]);
    expect(this.ctx.getQueueBlacklist().length).toEqual(2);
    this.ctx.enableQueues([MapReduceQueue]);
    expect(this.ctx.getQueueBlacklist().length).toEqual(1);
  });

  it('should allow to set SetupOK flag', function () {
    expect(this.ctx.isSetupOK()).toBeTruthy();
    this.ctx.setSetupOK(false);
    expect(this.ctx.isSetupOK()).toBeFalsy();
    this.ctx.setSetupOK(true);
  });

  it('should return the parent context if it exists', function () {
    expect(this.ctx.getParent()).toBeNull();
    this.ctx2 = TestApi.createContext(filename + '_ctx2', this.ctx, [AnalyticsQueue]);
    expect(this.ctx2.getParent().id).toEqual(this.ctx.id);
    this.ctx2.remove();
  });

  describe('sub-context queues during tearing down', function () {
    it('only unpauses sub-context queues during teardown', function () {
      expect(AnalyticsQueue.isPaused()).toBeTruthy();
      expect(MapReduceQueue.isPaused()).toBeFalsy();

      this.ctx2 = TestApi.createContext(filename + '_ctx2', this.ctx, [AnalyticsQueue, MapReduceQueue]);
      expect(AnalyticsQueue.isPaused()).toBeTruthy();
      expect(MapReduceQueue.isPaused()).toBeTruthy();

      // Add something to the MapReduceQueue
      var perf = TestApi.upsertEntity(this.ctx2, 'TestApiContextMR');
      perf.start();

      // Ensure the AnalyticsQueue & MapReduceQueue are not checked during waitForSetup
      expect(this.ctx2.getQueueBlacklist().length).toEqual(2);

      // Should be fine bc the queue is paused
      TestApi.waitForSetup(this.ctx2);

      TestApi.teardown(this.ctx2);
      expect(AnalyticsQueue.isPaused()).toBeTruthy();
      expect(MapReduceQueue.isPaused()).toBeFalsy();
    });

    it('unpauses all queues during teardown without a sub-context', function () {
      // Add something more to MapReduceQueue
      var perf = TestApi.upsertEntity(this.ctx, 'TestApiContextMR');
      perf.start();

      // Should fail bc the MapReduceQueue is running but is invalid
      expect(function () {
        TestApi.waitForSetup(this.ctx, null, 1, 1);
      }).toThrow();

      // Clear MapReduceQueue so TestApiContextMR won't cause subsequent queue errors
      var tenantTagId = Tag.getTenantTagId({ id: C3.context().app });
      MapReduceQueue.clear({});

      // Ensure that the MapReduceQueue does get cleared
      var stats = MapReduceQueue.count();
      expect(stats.computingEntries + stats.computingActions + stats.failed + stats.pending + stats.initial).toBe(
        0,
        'MapReduceQueue was not cleared properly'
      );

      this.ctx.disableQueues([MapReduceQueue]);
      TestApi.teardown(this.ctx);
      expect(AnalyticsQueue.isPaused()).toBeFalsy();
      expect(MapReduceQueue.isPaused()).toBeFalsy();
    });
  });

  it('should allow to set FailOnQueueErrors flag', function () {
    expect(this.ctx.isFailOnQueueErrors()).toBeTruthy();
    this.ctx.setFailOnQueueErrors(false);
    expect(this.ctx.isFailOnQueueErrors()).toBeFalsy();
    this.ctx.setFailOnQueueErrors(true);
  });

  it('should allow to set WaitForTeardown flag', function () {
    expect(this.ctx.getWaitForTeardown()).toEqual(240);
    this.ctx.setWaitForTeardown(30);
    expect(this.ctx.getWaitForTeardown()).toEqual(30);
  });

  it('should be able to change locale and remember original locale for teardown', function () {
    TestApi.setLocale(this.ctx, 'en-US');
    expect(c3SetLocale()).toBe('en-US');
    TestApi.setLocale(this.ctx, 'it-IT');
    expect(this.ctx.get().localeChanged).toBeTruthy();
    expect(this.ctx.get().originalLocale).toBe('en-US');
    expect(c3SetLocale()).toBe('it-IT');
    TestApi.setLocale(this.ctx, 'fr-FR');
    expect(this.ctx.get().originalLocale).toBe('en-US');
    expect(c3SetLocale()).toBe('fr-FR');
  }).pend('PLAT-37755');

  it('resets locale after teardown', function () {
    TestApi.setLocale(this.ctx, 'en-US');
    expect(c3SetLocale()).toBe('en-US');
    expect(this.ctx.localeChanged).toBeFalsy();
  }).pend('PLAT-37755');

  it('should be able to sleep', function () {
    var sleepTimeInSeconds = 2;
    var sleepTimeInMillis = sleepTimeInSeconds * 1000;
    var timeDiffInMillis;

    var testSleep = function () {
      var start = DateTime.nowWithMillis().millis;
      TestApi.sleepServer(sleepTimeInSeconds);
      var end = DateTime.nowWithMillis().millis;
      return end - start - sleepTimeInMillis;
    };

    timeDiffInMillis = testSleep();

    // Retry once
    if (timeDiffInMillis > sleepTimeInMillis * 0.5) {
      timeDiffInMillis = testSleep();
    }

    /**
     * Time difference should be within 10% of the specified sleep interval,
     * but it should not be less than 0.  That would infer that the end time
     * was before the start time.
     */
    expect(timeDiffInMillis).not.toBeLessThan(0);
    expect(timeDiffInMillis).toBeLessThan(sleepTimeInMillis * 0.5);
  });

  xit('should dump the invalidation queue', function () {
    var row = [];
    var res = [];
    var queues = InvalidationQueue.countAll().map(function (q) {
      return C3.type(q.queue);
    });
    queues.each(function (queue) {
      try {
        var group = InvalidationQueueGroupSpec.make({
          targetTypeId: true,
          status: true,
          targetObjId: true,
          // priority: true,
        });
        var qs = queue.reportCount(group);
        qs.each(function () {
          row = [];
          row.push(queue.toString());
          res.push(row);
        });
      } catch (e) {
        // Platform bugs can cause countRaw to fail
        res.push(e.message);
      }
    });

    var info = TestApi.dumpInvalidationQueue();

    /**
     * The first line of the info from the Invalidation Queue will
     * be a header.  Following lines will be specific queue records
     * along with their counts.
     * queue,targetTenantTag,targetType,targetObjId,priority,status,count
     */
    expect(info).toMatch('queue,targetTenantTag,targetType,targetObjId,priority,status,count');
    expect(info.split('\n').length).toBeGreaterThan(res.length);
  });

  it('should dump the execution state', function () {
    var timeSpan = 120;
    var info = TestApi.dumpExecutionState(timeSpan);
    expect(info).toMatch('queue,targetTenantTag,targetType,targetObjId,priority,status,count');
    expect(info).toMatch('Currently running actions across cluster');

    // Confirm that, if actions are running, the recently logged actions are also shown
    var matches = info.match(/^id: .+\n/gm);
    if (matches) {
      _.each(matches, function (curMatch) {
        var rid = curMatch.match(/id: (.+)\n/)[1];
        expect(info).toMatch('logged for rid ' + rid);
      });
    }
  }).pend('PLAT-35622');

  afterEach(function () {
    TestApi.teardown(this.ctx);
    this.ctx.remove();
  });
});
