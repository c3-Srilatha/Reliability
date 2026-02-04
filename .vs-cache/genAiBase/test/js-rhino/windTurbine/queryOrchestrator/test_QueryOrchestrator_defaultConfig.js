/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_QueryOrchestrator_defaultConfig';

describe(filename, function () {
  beforeAll(function () {
    this.defaultQoName = Genai.Agent.QueryOrchestrator.DefaultConfig.inst().getConfig().queryOrchestratorConfigName;
    expect(Str.isEmpty(this.defaultQoName)).toBeFalse();
    Genai.Agent.QueryOrchestrator.DefaultConfig.inst().setConfigValue(
      'queryOrchestratorConfigName',
      'QueryOrchestrator_default'
    );
  });

  afterAll(function () {
    Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  it('default config exists', function () {
    var cfg = Genai.Agent.QueryOrchestrator.DefaultConfig.inst().getConfig();
    expect(cfg).not.toBeNull();
    expect(cfg.queryOrchestratorConfigName).toEqual('QueryOrchestrator_default');
  });

  it('corresponding QO config exists', function () {
    var cfg = Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').getConfig();
    expect(cfg).not.toBeNull();
    expect(cfg).toBeDefined();
    cfg.validateObj();
  });
});
