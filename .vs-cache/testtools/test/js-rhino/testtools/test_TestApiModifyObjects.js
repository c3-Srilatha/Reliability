/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiModifyObjects', function () {
  var filename = 'test_TestApiModifyObjects';
  var jan = DateTime.fromString('2014-01-01T12:00:00Z');
  var feb = DateTime.fromString('2014-02-01T12:00:00Z');

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
    this.tr = TestApi.upsertEntity(this.ctx, 'TSPerfTestResult', {});
    this.trObj = TSPerfTestResult.make(this.tr).get();
  })

  it('setup', function () {
    expect(this.ctx).toBeDefined();
    expect(this.tr).toBeDefined();
  });

  it('some fields are not populated by default', function () {
    expect(this.trObj.noOfDays).toBeUndefined();
    expect(this.trObj.normStartTime).toBeUndefined();
  });

  it('some fields can be added', function () {
    TestApi.addFields(this.ctx, this.trObj.id, {
      normStartTime: jan,
      noOfDays: 1,
    });
    this.trObj = TSPerfTestResult.make(this.trObj).get('this, normStartTime');
    expect(this.trObj.noOfDays).toEqual(1);
    expect(this.trObj.normStartTime.toString()).toEqual(jan.toString());
  });

  it('some fields can be updated', function () {
    TestApi.addFields(this.ctx, this.trObj.id, { normStartTime: feb });
    this.trObj = TSPerfTestResult.make(this.trObj).get();

    expect(this.trObj.noOfDays).toEqual(1);
    expect(this.trObj.normStartTime.toString()).toEqual(feb.toString());
  });

  it('teardown', function () {
    TestApi.teardown(this.ctx);
    expect(this.ctx.numObjects()).toEqual(0);
  });
});
