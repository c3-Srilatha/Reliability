/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_ReliabilityMdfSchemaUpgrade';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();
    this.schemeUpgradeSpy = TestApi.spyOn(this.ctx, 'SchemaUpgrade', 'columnExists').returnValue(false).register();
    ReliabilityMdfSchemaUpgrade.migrateReliabilityMdf_1();
  });

  it('should call DbAdmin for MlModel and MlSubjectToModelRelation', function () {
    expect(this.schemeUpgradeSpy.toHaveBeenCalledTimes(2)).toEqual(true);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    this.schemeUpgradeSpy.unregister();
  });
});
