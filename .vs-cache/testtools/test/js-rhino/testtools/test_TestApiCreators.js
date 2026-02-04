/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiCreators', function () {
  var filename = 'test_TestApiCreators';
  var ctx;

  /*
   * Note: We usually don't use beforeEach/afterEach in apps tests because
   * creating a lot of data for each test would take a significant amount of time.
   * We use it here because:
   * 1. We are not creating a lot of data
   * 2. We are testing TestApi and want to have a clean state on each test
   */
  it('setup', function () {
    ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
  });

  it('should create an entity', function () {
    var MPrS = TestApi.createEntity(ctx, 'MetricProfilerSpec', {});
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPrS.id) }).count).toEqual(1);
    expect(ctx.findObjectById(MPrS.id, MetricProfilerSpec)).toBeDefined();
  });

  it('should create a batch of entities', function () {
    var MPrSIds = TestApi.createBatchEntity(ctx, 'MetricProfilerSpec', [
      {},
      {},
      {},
    ]);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MPrSIds.length).toEqual(3);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(3);
    expect(ctx.findObjectById(MPrSIds[0], MetricProfilerSpec)).toBeDefined();
    expect(ctx.findObjectById(MPrSIds[1], MetricProfilerSpec)).toBeDefined();
    expect(ctx.findObjectById(MPrSIds[2], MetricProfilerSpec)).toBeDefined();
  });

  it('should upsert an entity', function () {
    var MPrS = TestApi.upsertEntity(ctx, 'MetricProfilerSpec', {});
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPrS.id) }).count).toEqual(1);
    expect(ctx.findObjectById(MPrS.id, MetricProfilerSpec)).toBeDefined();

    MPrS = TestApi.upsertEntity(ctx, 'MetricProfilerSpec', MPrS);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPrS.id) }).count).toEqual(1);
    expect(ctx.findObjectById(MPrS.id, MetricProfilerSpec)).toBeDefined();
  });

  it('should upsert a batch of entities', function () {
    var MPrSIds = TestApi.upsertBatchEntity(ctx, 'MetricProfilerSpec', [
      {},
      {},
      {},
    ]);
    TestApi.waitForSetup(ctx, null, 1, 30);
    Logger.for('ales').warn('test');
    expect(MPrSIds.length).toEqual(3);
    var fr = MetricProfilerSpec.fetch({
      filter: Filter.intersects('id', MPrSIds),
    });
    expect(fr.count).toEqual(3);
    expect(ctx.findObjectById(MPrSIds[0], MetricProfilerSpec)).toBeDefined();
    expect(ctx.findObjectById(MPrSIds[1], MetricProfilerSpec)).toBeDefined();
    expect(ctx.findObjectById(MPrSIds[2], MetricProfilerSpec)).toBeDefined();

    MPrSIds = TestApi.upsertBatchEntity(ctx, 'MetricProfilerSpec', fr.objs);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MPrSIds.length).toEqual(3);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(3);
    expect(ctx.findObjectById(MPrSIds[0], MetricProfilerSpec)).toBeDefined();
    expect(ctx.findObjectById(MPrSIds[1], MetricProfilerSpec)).toBeDefined();
    expect(ctx.findObjectById(MPrSIds[2], MetricProfilerSpec)).toBeDefined();
  });

  it('should remove an entity', function () {
    var MPSIds = TestApi.createBatchEntity(ctx, 'MetricProfileSpec', [{}, {}]);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MPSIds.length).toEqual(2);
    expect(MetricProfileSpec.fetch({ filter: Filter.intersects('id', MPSIds) }).count).toEqual(2);

    TestApi.removeEntity(ctx, MPSIds[0]);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPSIds[0]) }).count).toEqual(0);
    expect(MetricProfileSpec.fetch({ filter: Filter.eq('id', MPSIds[1]) }).count).toEqual(1);
  });

  it('should remove a list of entities', function () {
    // `var emaIds = TestApi.createBatchEntity(ctx, 'ElectricMeterAsset', [{}, {}, {}, {}]);`
    var MPrSIds = TestApi.createBatchEntity(ctx, 'MetricProfilerSpec', [
      {},
      {},
      {},
      {},
    ]);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MPrSIds.length).toEqual(4);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(4);

    TestApi.removeEntities(ctx, C3.type('Array').ofStr(MPrSIds[0], MPrSIds[1], MPrSIds[2]));
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(1);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPrSIds[2]) }).count).toEqual(0);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPrSIds[3]) }).count).toEqual(1);
  });

  it('should remove entities by filter', function () {
    var MPrSIds = TestApi.createBatchEntity(ctx, 'MetricProfilerSpec', [
      {},
      {},
      {},
      {},
      {},
      {},
    ]);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MPrSIds.length).toEqual(6);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(6);

    var MPrSTypeRef = 'MetricProfilerSpec';
    TestApi.removeEntitiesByFilter(ctx, Filter.intersects('id', MPrSIds.slice(2)), MPrSTypeRef);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(2);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPrSIds[1]) }).count).toEqual(1);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPrSIds[2]) }).count).toEqual(0);
  });

  it('should remove entities by filter with limit', function () {
    var MPrSIds = TestApi.createBatchEntity(ctx, 'MetricProfilerSpec', [
      {},
      {},
      {},
      {},
      {},
      {},
    ]);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MPrSIds.length).toEqual(6);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(6);

    var MPrSTypeRef = MetricProfilerSpec;
    expect(function () {
      TestApi.removeEntitiesByFilter(ctx, Filter.intersects('id', MPrSIds.slice(2)), 'MetricProfilerSpec', 3);
    }).toThrow();
    TestApi.removeEntitiesByFilter(ctx, Filter.intersects('id', MPrSIds.slice(4)), 'MetricProfilerSpec', 3);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(4);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPrSIds[3]) }).count).toEqual(1);
    expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', MPrSIds[4]) }).count).toEqual(0);
  });

  it('should remove entities by type', function () {
    var MPrSIds = TestApi.createBatchEntity(ctx, 'MetricProfilerSpec', [
      {},
      {},
      {},
    ]);
    var MPSIds = TestApi.createBatchEntity(ctx, 'MetricProfileSpec', [{}, {}]);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MPrSIds.length).toEqual(3);
    expect(MPSIds.length).toEqual(2);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(3);
    expect(MetricProfileSpec.fetch({ filter: Filter.intersects('id', MPSIds) }).count).toEqual(2);

    var MPSTypeRef = 'MetricProfileSpec';
    TestApi.removeAllEntitiesOfType(ctx, MPSTypeRef);
    TestApi.waitForSetup(ctx, null, 1, 30);
    expect(MetricProfilerSpec.fetch({ filter: Filter.intersects('id', MPrSIds) })
      .count).toEqual(3);
    expect(MetricProfileSpec.fetch({ filter: Filter.intersects('id', MPSIds) }).count).toEqual(0);
  });

  it('should merge two objects', function () {
    var activationDate = DateTime.fromString('2014-10-20T00:00:00');
    var terminationDate = DateTime.fromString('2015-10-26T12:00:00Z');
    var MPrS = TestApi.createEntity(ctx, 'MetricProfilerSpec', {
      start: activationDate,
    });
    TestApi.waitForSetup(ctx, null, 1, 30);

    var fetchedMPrS = MetricProfilerSpec.fetch({
      filter: Filter.eq('id', MPrS.id),
    });
    expect(fetchedMPrS.count).toEqual(1);
    expect(fetchedMPrS.objs.first().start.toString()).toEqual(activationDate.toString());
    expect(fetchedMPrS.objs.first().end).toBeUndefined();

    TestApi.mergeEntity(ctx, MPrS.id, { end: terminationDate });
    TestApi.waitForSetup(ctx, null, 1, 30);

    fetchedMPrS = MetricProfilerSpec.fetch({
      filter: Filter.eq('id', MPrS.id),
    });
    expect(fetchedMPrS.count).toEqual(1);
    expect(fetchedMPrS.objs.first().start.toString()).toEqual(activationDate.toString());
    expect(fetchedMPrS.objs.first().end.toString()).toEqual(terminationDate.toString());
  });

  it('should merge a list of objects', function () {
    var initialObjs = [];
    var newObjs = [];
    for (var i = 0; i < 10; i++) {
      initialObjs.push({ start: '2014-10-20T0' + i + ':00:00Z' });
      newObjs.push({ end: '2015-10-26T0' + i + ':00:00Z' });
    }
    var MPrSIds = TestApi.createBatchEntity(ctx, 'MetricProfilerSpec', initialObjs);
    TestApi.waitForSetup(ctx, null, 1, 30);

    var fetchedMPrSs = MetricProfilerSpec.fetch({
      filter: Filter.intersects('id', MPrSIds),
    });
    expect(fetchedMPrSs.count).toEqual(10);
    fetchedMPrSs.objs.each(function (MPrS) {
      expect(JSON.stringify(initialObjs)).toContain(MPrS.start.toString());
      expect(MPrS.end).toBeUndefined();
    });

    TestApi.mergeBatchEntity(ctx, MPrSIds, newObjs);
    TestApi.waitForSetup(ctx, null, 1, 30);

    fetchedMPrSs = MetricProfilerSpec.fetch({
      filter: Filter.intersects('id', MPrSIds),
    });
    expect(fetchedMPrSs.count).toEqual(10);
    fetchedMPrSs.objs.each(function (MPrS) {
      expect(JSON.stringify(initialObjs)).toContain(MPrS.start.toString());
      expect(JSON.stringify(newObjs)).toContain(MPrS.end.toString());
    });
  });

  it('should throw an error if time is in milliseconds', function () {
    expect(function () {
      TestApi.waitForSetup(ctx, null, 1, 30);
    }).not.toThrow();

    expect(function () {
      TestApi.waitForSetup(ctx, null, 1, 30000);
    }).toThrow();

    expect(function () {
      TestApi.waitForSetup(ctx, null, 1000, 30);
    }).toThrow();

    expect(function () {
      TestApi.waitForSetup(ctx, null, 1000, 30000);
    }).toThrow();
  });

  it('teardown', function () {
    TestApi.teardown(ctx);
  });
});
