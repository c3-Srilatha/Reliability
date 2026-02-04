/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiProject_handlerTypeName';

const TUTORIAL_HANDLER_TYPE = 'Genai.Tutorial.REAEngine';
const DEFAULT_HANDLER_TYPE = 'Genai.UnstructuredQuery.Engine';
const QO_TYPE = 'Genai.Agent.QueryOrchestrator';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.DefaultConfig.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
    TestApi.setOpenAiApiKey();

    this.tutorialProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'tutorial_' + filename,
      projectType: 'tutorial',
      unstructuredQueryEngineConfigName: 'worldFacts',
      chunkerConfig: 'default',
    }).get();

    this.defaultVectorStore = Genai.Retriever.Dense.forName('alabamaBond-dense');
    this.defaultProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'default_' + filename,
      projectType: 'production',
      unstructuredQueryEngineConfigName: 'default',
      chunkerConfig: 'default',
      retriever: this.defaultVectorStore,
    }).get();

    this.validateEngine = function (handler, expectedEngineTypeName, multipleHandlers) {
      var expectedEngineType = C3.type(expectedEngineTypeName);
      expect(handler.type()).withContext('handler.type()').toEqual(expectedEngineType);
      expect(handler.isInitialized()).withContext(`${handler.type().name()}.isInitialized`).toBeTrue();
    };

    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').setConfigValue('toolkitName', 'GenaiProject_tests');
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.PyUtil.terminateAllEngines();
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').clearConfigAndSecretOverride(ConfigOverride.APP);

    /*
     * Clean up side effect of `defaultProject.retriever` being set but the `default` pipeline config's retriever not
     * being set, which causes the Project's retriever to be set on the Project's pipeline config during Project
     * initialization.
     */
    Genai.UnstructuredQuery.Engine.DefaultConfig.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  describe('initialize', function () {
    describe('for tutorial project', function () {
      beforeEach(function () {
        Genai.PyUtil.terminateAllEngines();
      });

      it('sets and persists an unset handlerTypeName', function () {
        // Default set on the type
        expect(this.tutorialProject.get('handlerTypeName').handlerTypeName).toBeUndefined();

        this.tutorialProject.initialize();
        expect(this.tutorialProject.get('handlerTypeName').handlerTypeName).toEqual(TUTORIAL_HANDLER_TYPE);
        this.validateEngine(this.tutorialProject.handler(), TUTORIAL_HANDLER_TYPE, true);
      });
    });

    describe('for non-tutorial projects', function () {
      beforeEach(function () {
        Genai.PyUtil.terminateAllEngines();
      });

      it('sets and persists an unset handlerTypeName', function () {
        expect(this.defaultProject.get('handlerTypeName').handlerTypeName).toBeUndefined();
        this.defaultProject.initialize();

        // Default set on the type
        expect(this.defaultProject.get('handlerTypeName').handlerTypeName).toEqual(DEFAULT_HANDLER_TYPE);
        this.validateEngine(this.defaultProject.handler(), 'Genai.UnstructuredQuery.Engine', true);
      });

      it('throws an error for an invalid handlerTypeName', function () {
        this.defaultProject
          .get('id')
          .withHandlerTypeName(TUTORIAL_HANDLER_TYPE)
          .merge({ mergeInclude: 'handlerTypeName' });
        expect(this.defaultProject.get('handlerTypeName').handlerTypeName).toEqual(TUTORIAL_HANDLER_TYPE);
        var project = this.defaultProject;
        expect(function () {
          project.initialize();
        }).toThrowError(/Non-tutorial project/);
      });

      it('allows QueryOrchestrator', function () {
        this.defaultProject = this.defaultProject
          .get('id')
          .withQueryOrchestratorConfigName('QueryOrchestrator_default')
          .withHandlerTypeName(QO_TYPE)
          .merge({ mergeInclude: 'handlerTypeName, queryOrchestratorConfigName', returnInclude: 'this' });
        expect(this.defaultProject.get('handlerTypeName').handlerTypeName).toEqual(QO_TYPE);
        this.defaultProject.initialize();
        expect(this.defaultProject.get('handlerTypeName').handlerTypeName).toEqual(QO_TYPE);
        this.validateEngine(this.defaultProject.handler(), QO_TYPE, true);
      });
    });
  });
});
