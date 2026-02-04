/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_ReliabilityDataValidationRuleUpdate';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    this.partiallyAppliedAction = PartiallyAppliedAction.make({
      typeName: 'ReliabilityAssetRules',
      actionName: ReliabilityDataValidationRuleUpdate.ASSET_TEMPLATE_ACTION_NAME,
    });

    this.dummyRule = TestApi.upsertEntity(this.ctx, 'DataValidationRule', {
      id: 'test_data_validation_rule_id',
      name: 'data validation rule to be removed',
      description: 'description for the data validation rule that would be removed',
      ruleset: 'dummy rule set for the data validation rule',
      action: this.partiallyAppliedAction,
    });

    TestApi.waitForSetup(this.ctx);
  });

  describe('#removeAssetTemplateRule_1', function () {
    beforeAll(function () {
      ReliabilityDataValidationRuleUpdate.removeAssetTemplateRule_1();
    });

    it('removes the dummy rule', function () {
      expect(this.dummyRule.get()).toBeNull();
    });

    it('can be re-run without error', function () {
      ReliabilityDataValidationRuleUpdate.removeAssetTemplateRule_1();
      expect(this.dummyRule.get()).toBeNull();
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });
});
