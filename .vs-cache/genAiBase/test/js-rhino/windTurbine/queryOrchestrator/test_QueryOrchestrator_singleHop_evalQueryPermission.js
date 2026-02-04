/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_singleHop_evalQueryPermission';
describe(filename, function () {
  beforeAll(function () {
    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];
    this.originalConfigValue = Genai.Agent.Tool.EvalQuery.Config.inst().getConfig().doNotInitialize;
  });

  afterAll(function () {
    Genai.Agent.Tool.EvalQuery.Config.inst().setConfigValue('doNotInitialize', this.originalConfigValue);
    TestIdp.removeUser(this.basicUser);
  });

  // TODO GEN-5735 Add test for tool.intialize in pytest as we return a native value
  it('has permission for basic user', function () {
    TestRunner.asUser(
      this.basicUser,
      Lambda.fromJsFunc(function () {
        expect(function () {
          Genai.Agent.Tool.EvalQuery.Config.inst().setConfigValue('doNotInitialize', true);
        }).not.toThrowError();
      })
    );
  });
});
