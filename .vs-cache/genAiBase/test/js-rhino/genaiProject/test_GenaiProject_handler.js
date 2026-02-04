/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiProject_handler';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.DefaultConfig.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
    TestApi.setOpenAiApiKey();

    this.numHandlers = 5;
    this.tutorialProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'tutorial_' + filename,
      projectType: 'tutorial',
      unstructuredQueryEngineConfigName: 'worldFacts',
      chunkerConfig: 'default',
      handlerTypeName: 'Genai.Tutorial.REAEngine',
    }).get('unstructuredQueryEngineConfigName');

    this.defaultVectorStore = Genai.Retriever.Dense.forName('alabamaBond-dense');
    this.defaultProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'default_' + filename,
      projectType: 'production',
      unstructuredQueryEngineConfigName: 'default',
      chunkerConfig: 'default',
      retriever: this.defaultVectorStore,
      handlerTypeName: 'Genai.UnstructuredQuery.Engine',
    }).get('unstructuredQueryEngineConfigName');

    this.secondProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'secondProject',
      projectType: 'production',
      unstructuredQueryEngineConfigName: 'alabamaBond',
      chunkerConfig: 'default',
      handlerTypeName: 'Genai.UnstructuredQuery.Engine',
    }).get('unstructuredQueryEngineConfigName');

    this.defaultProjects = [this.defaultProject, this.secondProject];

    this.validateEngine = function (idx, handler, project, expectedEngineType) {
      expect(handler.type())
        .withContext(idx + ': handler.type')
        .toEqual(expectedEngineType);
      expect(handler.isInitialized())
        .withContext(idx + ': isInitialized')
        .toBeTrue();
      expect(handler.activeConfig().name)
        .withContext(idx + ': activeConfig.name')
        .toEqual(project.unstructuredQueryEngineConfigName);
    };
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.DefaultConfig.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
  });

  describe('for tutorial project', function () {
    it('initializes the Tutorial engine', function () {
      for (var i = 0; i < this.numHandlers; i++) {
        var handler = this.tutorialProject.handler();

        this.validateEngine(i, handler, this.tutorialProject, Genai.Tutorial.REAEngine);
      }
    });
  });

  describe('for non-tutorial projects', function () {
    it('initializes the default engine with the correct pipeline config', function () {
      for (var i = 0; i < this.numHandlers; i++) {
        var currentProject = this.defaultProjects[i % 2];
        var handler = currentProject.handler();

        this.validateEngine(i, handler, currentProject, Genai.UnstructuredQuery.Engine);
      }
    });

    it('rebuilds a pipeline with low latency', function () {
      for (var i = 0; i < this.numHandlers; i++) {
        var currentProject = this.defaultProjects[i % 2];

        var start = new Date();
        var handler = currentProject.handler();
        var end = new Date();

        expect(end - start).toBeLessThan(1000);
        this.validateEngine(i, handler, currentProject, Genai.UnstructuredQuery.Engine);
      }
    });
  });
});
