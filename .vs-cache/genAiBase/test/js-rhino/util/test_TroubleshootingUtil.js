/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_TroubleshootingUtil';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.PyUtil.terminateAllEngines();
    TestApi.setOpenAiApiKey();

    this.firstProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'firstProject',
      projectType: 'tutorial',
      queryOrchestratorConfigName: 'QueryOrchestrator_default',
      chunkerConfig: 'default',
      handlerTypeName: 'Genai.Agent.QueryOrchestrator',
    });

    this.secondProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'secondProject',
      projectType: 'tutorial',
      unstructuredQueryEngineConfigName: 'default',
      chunkerConfig: 'default',
      handlerTypeName: 'Genai.UnstructuredQuery.Engine',
    });

    this.totalProjectCount = Genai.Project.fetchCount();
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.PyUtil.terminateAllEngines();
  });

  it('dumps app state without throwing error', function () {
    Genai.TroubleshootUtil.dumpAppState();
  });

  it('maps the handlerConfig to the project correctly', function () {
    this.baseConfigs = Genai.TroubleshootUtil.baseConfigs();
    var projectConfigs = this.baseConfigs.projectConfigs;
    expect(projectConfigs.handlerConfig.length).toEqual(this.totalProjectCount);

    this.assertHandlerConfig = (projectConfigs, handlerConfigName) => {
      var handlerConfig = Js.toNativeObject(projectConfigs.handlerConfig).find(
        (handlerConfig) => handlerConfig.name === handlerConfigName
      );
      expect(handlerConfig).toBeTruthy();
    };

    this.assertHandlerConfig(projectConfigs, 'QueryOrchestrator_default');
    this.assertHandlerConfig(projectConfigs, 'default');
  });

  it('maps the chunkerConfig to the project correctly', function () {
    this.baseConfigs = Genai.TroubleshootUtil.baseConfigs();
    var projectConfigs = this.baseConfigs.projectConfigs;
    expect(projectConfigs.chunkerConfigs.length).toEqual(this.totalProjectCount);

    expect(projectConfigs.chunkerConfigs[0].name).toEqual('default');
    expect(projectConfigs.chunkerConfigs[1].name).toEqual('default');
  });

  it('exports app state without throwing error', function () {
    spyOn(C3, 'context').and.returnValue({ actionEngine: { name: 'js-client' } });
    spyOn(C3, 'app').and.returnValue({ id: 'testAppId' });

    globalThis.C3DL = function () {};

    var result = Genai.TroubleshootUtil.exportAppState();
    expect(result).toEqual(Genai.TroubleshootUtil.baseConfigs());
  });
});
