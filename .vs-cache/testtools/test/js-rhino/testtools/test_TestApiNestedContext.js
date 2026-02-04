/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiNestedContext', function () {
  var filename = 'test_TestApiNestedContext';
  var ctx1;
  var ctx2;
  var ctx3;
  var ctx4;

  describe('setup', function () {
    it('setup context', function () {
      (ctx1 = TestApi.createContext(filename + '_setup_1', null, [
        AnalyticsQueue,
      ])),
      (ctx2 = TestApi.createContext(filename + '_setup_2', ctx1, [
        AnalyticsQueue,
      ])),
      (ctx3 = TestApi.createContext(filename + '_setup_3', ctx2, [
        AnalyticsQueue,
      ])),
      (ctx4 = TestApi.createContext(filename + '_setup_4', ctx2, [
        AnalyticsQueue,
      ]));
    });

    it('contexts start with isSetupOK()==true', function () {
      expect(ctx1.isSetupOK()).toBeTruthy();
      expect(ctx2.isSetupOK()).toBeTruthy();
      expect(ctx3.isSetupOK()).toBeTruthy();
      expect(ctx4.isSetupOK()).toBeTruthy();
    });

    it("contexts don't influence parent or sibling contexts", function () {
      ctx3.setSetupOK(false);
      expect(ctx1.isSetupOK()).toBeTruthy();
      expect(ctx2.isSetupOK()).toBeTruthy();
      expect(ctx3.isSetupOK()).toBeFalsy();
      expect(ctx4.isSetupOK()).toBeTruthy();
      ctx3.setSetupOK(true);
    });

    it('parent contexts influence children', function () {
      ctx2.setSetupOK(false);
      expect(ctx1.isSetupOK()).toBeTruthy();
      expect(ctx2.isSetupOK()).toBeFalsy();
      expect(ctx3.isSetupOK()).toBeFalsy();
      expect(ctx4.isSetupOK()).toBeFalsy();
      ctx2.setSetupOK(true);
    });

    it('setupOK is transitive', function () {
      ctx1.setSetupOK(false);
      expect(ctx1.isSetupOK()).toBeFalsy();
      expect(ctx2.isSetupOK()).toBeFalsy();
      expect(ctx3.isSetupOK()).toBeFalsy();
      expect(ctx4.isSetupOK()).toBeFalsy();
      ctx1.setSetupOK(true);
    });

    it('teardown', function () {
      TestApi.teardown(ctx1);
      TestApi.teardown(ctx2);
      TestApi.teardown(ctx3);
      TestApi.teardown(ctx4);
      expect(ctx1.isSetupOK()).toBeTruthy();
      expect(ctx2.isSetupOK()).toBeTruthy();
      expect(ctx3.isSetupOK()).toBeTruthy();
      expect(ctx4.isSetupOK()).toBeTruthy();
    });
  });

  describe('teardown', function () {
    ctx1 = TestApi.createContext(filename + '_teardown_1', null, [
      AnalyticsQueue,
    ]);
    ctx2 = TestApi.createContext(filename + '_teardown_2', ctx1, [
      AnalyticsQueue,
    ]);

    it('should remove metricprofilespec from the nested context if metricprofilerspec is defined in the parent context', function () {
      var mps = TestApi.upsertEntity(ctx1, 'MetricProfilerSpec', {});
      var numSpecs = 3;
      for (var i = 0; i < numSpecs; i++) {
        TestApi.upsertEntity(ctx2, 'MetricProfileSpec', {
          parent: mps,
        });
      }
      TestApi.waitForSetup(ctx1, null, 1, 30);
      TestApi.waitForSetup(ctx2, null, 1, 30);

      expect(ctx1.numObjects()).toEqual(1);
      expect(ctx2.numObjects()).toEqual(numSpecs);

      expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', mps.id) }).count).toEqual(1);
      expect(MetricProfileSpec.fetch({ filter: Filter.eq('parent.id', mps.id) })
        .count).toEqual(numSpecs);

      TestApi.teardown(ctx2);

      expect(ctx1.numObjects()).toEqual(1);
      expect(ctx2.numObjects()).toEqual(0);

      expect(MetricProfilerSpec.fetch({ filter: Filter.eq('id', mps.id) }).count).toEqual(1);
      expect(MetricProfileSpec.fetch({ filter: Filter.eq('parent.id', mps.id) })
        .count).toEqual(0);

      TestApi.teardown(ctx1);
    });
  });
});
