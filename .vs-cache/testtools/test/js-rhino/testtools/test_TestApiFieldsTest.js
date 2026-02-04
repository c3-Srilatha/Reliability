/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

// Tests for different type of objects  with different initial settings
describe('test_TestApiFieldsTest', function () {
  var filename = 'test_TestApiFieldsTest';
  var jan = DateTime.fromString('2016-01-01T12:00:00Z');
  var feb = DateTime.fromString('2016-02-01T12:00:00Z');
  var tr1;
  var tr2;
  var pds;
  var newpds;
  var tr3;
  var newTR1;
  var newTR2;
  var newTR3;
  var ctx;

  it('setup context', function () {
    MetricProfileSpec.removeAll(null, true);
    ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);

    // Create entity with several fields in config
    tr1 = TestApi.upsertEntity(ctx, 'TSPerfTestResult', {
      normStartTime: jan,
    });

    // Create entity with no initial fields
    tr2 = TestApi.upsertEntity(ctx, 'TSPerfTestResult', {});

    TestApi.waitForSetup(ctx, null, 1, 120);
  });

  it('Add one or more fields of different Type via objects', function () {
    // Add two fields into entity
    TestApi.addFields(ctx, tr1.id, { noOfDays: 2 });

    // Add single field into MeterAsset
    TestApi.addFields(ctx, tr2.id, { normStartTime: feb, noOfDays: 72 });

    // Need to wait for context setup berfore fetch it
    TestApi.waitForSetup(ctx, null, 1, 30);

    // ***Need to fetch the Object after modify it***
    newTR1 = TSPerfTestResult.make(tr1.id).get();
    newTR2 = TSPerfTestResult.make(tr2.id).get();

    expect(newTR1.noOfDays).toBe(2);
    expect(newTR2.normStartTime.toString()).toEqual(feb.toString());
    expect(newTR2.noOfDays).toBe(72);
  });

  it('Add one or multiple Fields of different Type via ids', function () {
    // Add two fields into entity
    TestApi.addFields(ctx, tr1.id, { noOfDays: 1 });

    // Add single field into MeterAsset
    TestApi.addFields(ctx, tr2.id, { normStartTime: feb, noOfDays: 2 });

    // Need to wait for context setup berfore fetch it
    TestApi.waitForSetup(ctx, null, 1, 30);

    // ***Need to fetch the Object after modify it***
    newTR1 = TSPerfTestResult.make(tr1.id).get();
    newTR2 = TSPerfTestResult.make(tr2.id).get();

    expect(newTR1.noOfDays).toBe(1);
    expect(newTR2.normStartTime.toString()).toEqual(feb.toString());
    expect(newTR2.noOfDays).toBe(2);
  });

  it('Remove single Fields', function () {
    // Remove single Fields ***Must in an array***
    TestApi.removeObjFields(ctx, newTR1.id, ['noOfDays']);
    TestApi.removeObjFields(ctx, newTR2.id, ['normStartTime']);

    // Need to wait for context setup berfore fetch it
    TestApi.waitForSetup(ctx, null, 1, 30);

    // ***Need to fetch the Object after modify it***
    newTR1 = TSPerfTestResult.make(tr1.id).get();
    newTR2 = TSPerfTestResult.make(tr2.id).get();

    expect(newTR1.noOfDays).toBeUndefined();
    expect(newTR2.normStartTime).toBeUndefined();
  });

  it('Test different Types', function () {
    var metricProfileSpecCount = MetricProfileSpec.fetchCount();

    // Test entity
    pds = TestApi.upsertEntity(ctx, 'MetricProfileSpec', {});

    // Test Type: Integer
    TestApi.addFields(ctx, pds.id, { iterations: 2 });

    // Test Type: String
    TestApi.addFields(ctx, pds.id, { interval: 'HOUR' });

    TestApi.waitForSetup(ctx, null, 1, 30);

    expect(MetricProfileSpec.fetch().count).toBe(metricProfileSpecCount + 1);

    newpds = MetricProfileSpec.make(pds.id).get();

    expect(newpds.iterations).toEqual(2);
    expect(newpds.interval).toEqual('HOUR');

    TestApi.removeObjFields(ctx, newpds.id, ['iterations']);
    TestApi.removeObjFields(ctx, newpds.id, ['interval']);

    TestApi.waitForSetup(ctx, null, 1, 30);

    newpds = MetricProfileSpec.make({ id: newpds.id }).get();

    expect(newpds.iterations).toBeUndefined();
    expect(newpds.interval).toBeUndefined();
  });

  xit('removeObjFields should not work for a String', function () {
    expect(function () {
      // TODO: MIG8-3165 Determine why this is not throwing an error
      TestApi.removeObjFields(ctx, tr1.id, 'normStartTime');
    }).toThrowError();
  }).pend('MIG8-3165');

  it('Remove multiple Fields in single Object', function () {
    tr3 = TestApi.upsertEntity(ctx, 'TSPerfTestResult', {
      normStartTime: jan,
      normEndTime: feb,
    });

    newTR3 = TSPerfTestResult.make(tr3.id).get();

    expect(newTR3.normStartTime.toString()).toEqual(jan.toString());
    expect(newTR3.normEndTime.toString()).toEqual(feb.toString());

    // Remove multiple Fields in one array
    TestApi.removeObjFields(ctx, newTR3.id, ['normStartTime', 'normEndTime']);

    TestApi.waitForSetup(ctx, null, 1, 30);

    newTR3 = TSPerfTestResult.make(tr3.id).get();

    expect(newTR3.normStartTime).toBeUndefined();
    expect(newTR3.normEndTime).toBeUndefined();
  });

  it('Add Field back', function () {
    TestApi.addFields(ctx, tr3.id, { normStartTime: jan });

    TestApi.waitForSetup(ctx, null, 1, 30);

    newTR3 = TSPerfTestResult.make(tr3.id).get();
    expect(newTR3.normStartTime.toString()).toEqual(jan.toString());
  });

  it('Should teardown all Testdata', function () {
    TestApi.teardown(ctx);
    expect(ctx.numObjects()).toEqual(0);
  });
});
