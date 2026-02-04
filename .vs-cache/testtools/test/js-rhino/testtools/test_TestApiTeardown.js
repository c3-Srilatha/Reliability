/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiTeardown as @testApp(mode=dev)', function () {
  var filename = 'test_TestApiTeardown';
  var mpsIdPrefix = filename + '_id_';
  var mpsIds = [];
  var ctx;
  var ids1 = [];
  var roleId = 'testApi_testRole';
  var sourceSystemId = 'testApi_testSourceSystem';

  it('non-testapi setup', function () {
    var mpsId = '';
    for (var i = 0; i < 5; i++) {
      mpsId = mpsIdPrefix + i;
      MetricProfileSpec.make({ id: mpsId }).create();
      mpsIds.push(mpsId);
    }
    ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
    ids1 = TestApi.upsertBatchEntity(ctx, 'MetricProfileSpec', [{}, {}, {}, {}, {}]);
    ids1.each(function (id) {
      TestApi.addFields(ctx, id, { interval: 'DAY' });
    });

    // Metadata that mixes Identified
    TestApi.createEntity(ctx, 'Role', {
      id: roleId,
      permissions: [
        Permission.fromString('allow:Person::updateNotificationSettings'),
        Permission.fromString('allow:Person::make'),
      ],
    });

    // Metadata that mixes Named
    TestApi.createEntity(ctx, 'SourceSystem', {
      name: sourceSystemId,
    });
  });

  it('creates what it said to create', function () {
    ids1.each(function (id) {
      expect(MetricProfileSpec.fetch({ filter: Filter.eq('id', id) }).count).toEqual(1);
    });
  });

  describe('teardown removes what TestApi created: ', function () {
    beforeAll(function () {
      TestApi.teardown(ctx);
    });

    it('Regular Types', function () {
      ids1.each(function (id) {
        expect(MetricProfileSpec.fetch({ filter: Filter.eq('id', id) }).count).toEqual(0);
      });
    });

    it('Identified Metadata Types', function () {
      expect(Role.fetch({ filter: Filter.eq('id', roleId) }).count).toEqual(0);
    });

    it('Named Metadata Types', function () {
      expect(SourceSystem.fetch({ filter: Filter.eq('name', sourceSystemId) }).count).toEqual(0);
    });
  });

  it('teardown does not remove manually created objects', function () {
    expect(
      MetricProfileSpec.fetch({
        filter: 'startsWith(id, "' + mpsIdPrefix + '")',
      }).count
    ).toEqual(5);
  });

  it('removeAll removes manually created objects', function () {
    MetricProfileSpec.removeAll({ filter: 'startsWith(id, "' + mpsIdPrefix + '")' }, true);
    expect(
      MetricProfileSpec.fetch({
        filter: 'startsWith(id, "' + mpsIdPrefix + '")',
      }).count
    ).toEqual(0);
  });
});
