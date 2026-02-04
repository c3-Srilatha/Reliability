/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiAddExternalTeardownFilter', function () {
  var filename = 'test_TestApiAddExternalTeardownFilter';
  var ctx;
  var mprs1;
  var uid;
  var uuid;
  var uuid1;
  var uuid2;
  var uuid3;
  var uuid4;
  var uuid5;
  var uuid6;
  var MPrSs = [];
  var counter = 0;

  var createMPrS = function (id) {
    return MetricProfilerSpec.make({
      id: id + filename + 'MPrS' + ++counter,
    }).create();
  };

  var createMPS = function (id, mprs) {
    return MetricProfileSpec.make({
      id: id + filename + 'MPS' + counter,
      parent: mprs,
    }).create();
  };

  function getNum(t) {
    var projection = t.evaluate({ projection: 'count()' });
    var amount = projection.tuples[0].cells[0];
    return amount ? amount.number : 0;
  }
  var MPSnum = getNum(MetricProfileSpec);
  var MPrSnum = getNum(MetricProfilerSpec);

  var MPrSType = MetricProfilerSpec;
  var MPSType = MetricProfileSpec;

  it('setup context', function () {
    ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
  });

  it('Initial Setup', function () {
    expect(ctx).toBeDefined();
  });

  describe('removeEntitiesByFilter tests', function () {
    it('Test with different types and different kind of filters', function () {
      uuid = Uuid.create();
      mprs1 = createMPrS(uuid);
      createMPS(uuid, mprs1);

      // Check whether created sp, pms add measurement correctly
      expect(getNum(MetricProfileSpec)).toEqual(MPSnum + 1);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 1);

      // Remove MPrS and check
      TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uuid + filename + "')", MPrSType.name());
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);

      // Remove MPS and check another kind of filter
      TestApi.removeEntitiesByFilter(ctx, Filter.eq('parent.id', mprs1.id), MPSType.name());
      expect(getNum(MetricProfileSpec)).toEqual(MPSnum);
    });

    it('Same type with different filter', function () {
      uuid1 = Uuid.create();
      uuid2 = Uuid.create();
      uuid3 = Uuid.create();
      createMPrS(uuid1);
      createMPrS(uuid1);
      createMPrS(uuid2);
      createMPrS(uuid3);

      // Check created correctly
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 4);

      // Remove 2 start with a and check
      TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uuid1 + "')", MPrSType.name());
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 2);

      TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uuid2 + "')", MPrSType.name());
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 1);

      TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uuid3 + "')", MPrSType.name());
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 0);
    });

    it('Test for limit argument', function () {
      uuid4 = Uuid.create();

      // Create 200 MPrS and check
      for (var i = 1; i < 201; i++) {
        MPrSs.push(MetricProfilerSpec.make({ id: uuid4 + filename + 'MPrS' + ++counter }));
      }
      MetricProfilerSpec.createBatch(MPrSs);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 200);

      expect(function () {
        TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uuid4 + filename + "')", MPrSType.name());
      }).toThrow();

      TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uuid4 + filename + "')", MPrSType.name(), 250);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
    });

    it('Test for removeLimit()', function () {
      // For reset after test
      var original = ctx.getRemoveLimit();
      uuid5 = Uuid.create();
      MPrSs = [];

      // Create 200 sp and check
      for (var i = 1; i < 201; i++) {
        MPrSs.push(MetricProfilerSpec.make({ id: uuid5 + filename + 'MPrS' + ++counter }));
      }
      MetricProfilerSpec.createBatch(MPrSs);

      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 200);

      expect(function () {
        TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uuid5 + filename + "')", MPrSType.name());
      }).toThrow();
      ctx.setRemoveLimit(250);
      TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uuid5 + filename + "')", MPrSType.name());
      ctx.setRemoveLimit(original);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
    });

    it('Test for exceeding the limit in do loop', function () {
      uuid6 = Uuid.create();
      MPrSs = [];

      // Create 600 MPrS and check
      for (var i = 1; i < 601; i++) {
        MPrSs.push(MetricProfilerSpec.make({ id: uuid6 + filename + 'MPrS' + ++counter }));
      }
      MetricProfilerSpec.createBatch(MPrSs);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 600);
      var limit = 1000;
      TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uuid6 + filename + "')", MPrSType.name(), limit);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
    });

    it('Invalid filter should not work', function () {
      expect(function () {
        TestApi.removeEntitiesByFilter(ctx, "thisFunctionDoesNotExistAndI'mUsingItAsAFilterForFun()", MPrSType.name());
      }).toThrow();
    });

    it('Teardown check', function () {
      // Make sure tore down all stuff created in this test
      MPrSs = [];
      TestApi.teardown(ctx);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
      expect(getNum(MetricProfileSpec)).toEqual(MPSnum);
    });
  });

  describe('Apply filter to objects created without TestApi', function () {
    it('Setup', function () {
      uuid1 = Uuid.create();
      mprs1 = createMPrS(uuid1);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 1);
    });

    it('Add filter to teardown and Teardown', function () {
      TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'" + uuid1 + filename + "')", MPrSType.name());
      TestApi.teardown(ctx);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
    });
  });

  describe('Mix objects created using TestApi and objects created without TestApi', function () {
    it('Create Objects with Using TestApi', function () {
      counter++;
      TestApi.upsertEntity(ctx, 'MetricProfileSpec', { parent: mprs1 });
      expect(getNum(MetricProfileSpec)).toEqual(MPSnum + 1);
    });

    it('Add two different kinds of filters to teardown', function () {
      TestApi.addExternalTeardownFilter(ctx, Filter.eq('parent.id', mprs1.id), MPSType.name());
      TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'" + uuid1 + filename + "')", MPrSType.name());
      TestApi.teardown(ctx);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
      expect(getNum(MetricProfileSpec)).toEqual(MPSnum);
    });
  });

  describe('Over limit test', function () {
    it('Setup', function () {
      uuid3 = Uuid.create();
      for (var i = 1; i < 201; i++) {
        MPrSs.push(MetricProfilerSpec.make({ id: uuid3 + filename + 'MPrS' + ++counter }));
      }
      MetricProfilerSpec.createBatch(MPrSs);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 200);
    });

    it('Test limit argument works and does not affect other filters', function () {
      // Add a random filter on another type that has a higher limit
      TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'notrealfilterjustfortest')", MPSType.name(), 250);

      expect(function () {
        // Limit only added for MPS, therefore add default filter for MPrS should fail
        TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'" + uuid3 + filename + "')", MPrSType.name());
      }).toThrow();
    });

    it('Add limit using setRemoveLimit()', function () {
      // Make sure sp is still over default limit
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 200);
      expect(function () {
        TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'" + uuid3 + filename + "')", MPrSType.name());
      }).toThrow();

      // Make sure default limit goes back after this test
      var original = ctx.getRemoveLimit();
      ctx.setRemoveLimit(250);
      TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'" + uuid3 + filename + "')", MPrSType.name());
      TestApi.teardown(ctx);
      ctx.setRemoveLimit(original);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
    });
  });

  describe('Add limit should not affect previous filter', function () {
    it('Initially add default filter and Setup', function () {
      MPrSs = [];
      uuid4 = Uuid.create();
      TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'" + uuid4 + filename + "')", MPrSType.name());
      for (var i = 1; i < 201; i++) {
        MPrSs.push(MetricProfilerSpec.make({ id: uuid4 + filename + 'MPrS' + ++counter }));
      }
      MetricProfilerSpec.createBatch(MPrSs);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 200);
    });

    it("Previously added filter shouldn't block new filter", function () {
      TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'" + uuid4 + filename + "')", MPrSType.name(), 250);
      expect(function () {
        TestApi.teardown(ctx);
      }).toThrow();
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
      MetricProfilerSpec.removeAll(null, true)
    });
  });

  describe('Invalid Filter', function () {
    it('Invalid filter should not work', function () {
      expect(function () {
        TestApi.addExternalTeardownFilter(ctx, "thisFunctionDoesNotExistAndI'mUsingItAsAFilterForFun()", MPrSType.name());
      }).toThrow();
    });
  });

  describe("Limits for external filters doesn't influence on another", function () {
    it("external filter doesn't influence limit for removeEntitiesByfilter", function () {
      MPrSs = [];
      uid = Uuid.create();
      TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'" + uid + filename + "')", MPrSType.name(), 250);
      for (var i = 1; i < 201; i++) {
        MPrSs.push(MetricProfilerSpec.make({ id: uid + filename + 'MPrS' + i }));
      }
      MetricProfilerSpec.createBatch(MPrSs);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 200);
      expect(function () {
        TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uid + filename + "')", MPrSType.name());
      }).toThrow();
      TestApi.teardown(ctx);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
    });

    it("removeEntitiesByfilter doesn't influence limit for external filter", function () {
      MPrSs = [];
      uid = Uuid.create();
      TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uid + filename + "')", MPrSType.name(), 250);
      for (var i = 1; i < 201; i++) {
        MPrSs.push(MetricProfilerSpec.make({ id: uid + filename + 'MPrS' + i }));
      }
      MetricProfilerSpec.createBatch(MPrSs);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum + 200);
      expect(function () {
        TestApi.addExternalTeardownFilter(ctx, "startsWith(id,'" + uid + filename + "')", MPrSType.name());
      }).toThrow();
      TestApi.removeEntitiesByFilter(ctx, "startsWith(id,'" + uid + filename + "')", MPrSType.name(), 250);
      expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
    });
  });

  it('Final check', function () {
    TestApi.teardown(ctx);
    expect(getNum(MetricProfilerSpec)).toEqual(MPrSnum);
    expect(getNum(MetricProfileSpec)).toEqual(MPSnum);
    ctx = undefined;
  });
});
