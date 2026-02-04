/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ChatBot';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.PyUtil.terminateAllEngines();
    this.expectedErrorMsg = Translation.getTranslationForLocale('EnterpriseSearch.ErrorMessage.SystemOutage', 'en');
    this.unregisteredHandler = 'UnregisteredHandlerTest1';
    this.expectedHandlerErrorMsg =
      'Genai.ChatBot.Config.handlerTypeName ' + this.unregisteredHandler + ' cannot be resolved';
    this.defaultErrorMsg = Translation.getTranslationForLocale('EnterpriseSearch.ErrorMessage.Rephrase', 'en');
    this.translatableError = 'EnterpriseSearch.Translation.UnsupportedLanguage';
    this.translatedMessageFr = Translation.getTranslationForLocale(this.translatableError, 'fr');
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.ChatBot.Config.make().getConfig().clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  describe('Genai.ChatBot#getHandler', function () {
    describe('when Genai.ChatBot.Config uses Genai.UnstructuredQuery.Engine', function () {
      beforeEach(function () {
        Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', 'Genai.UnstructuredQuery.Engine');
      });

      it('returns the expected handler', function () {
        /*
         * Can be Genai.UnstructuredQueryEngine0, Genai.UnstructuredQueryEngine1, Genai.UnstructuredQueryEngine2,
         * Genai.UnstructuredQueryEngine3, or Genai.UnstructuredQueryEngine4
         * So we check it begins with "Genai.UnstructuredQuery.Engine"
         */
        expect(Genai.ChatBot.getHandler().type().name().indexOf('Genai.UnstructuredQuery.Engine')).toEqual(0);
      });
    });

    describe('when Genai.ChatBot.Config uses Genai.Agent.QueryOrchestrator', function () {
      beforeEach(function () {
        Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', 'Genai.Agent.QueryOrchestrator');
      });

      it('returns the expected handler', function () {
        expect(Genai.ChatBot.getHandler().type().name()).toEqual('Genai.Agent.QueryOrchestrator');
      });
    });

    describe('when Genai.ChatBot.Config uses an incorrect handler', function () {
      beforeAll(function () {
        Genai.Translator.Config.inst().setConfigValue('enabled', true, ConfigOverride.APP);
        Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', this.unregisteredHandler);
        Genai.PyUtil.terminateAllEngines();
      });

      // Set the handler back to the last used handlerTypeName
      afterAll(function () {
        Genai.Translator.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
        Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', 'Genai.Agent.QueryOrchestrator');
        Genai.PyUtil.terminateAllEngines();
      });

      it('returns the expected handler', function () {
        expect(function () {
          Genai.ChatBot.getHandler().type().name();
        }).toThrowError(/Genai.ChatBot.Config.handlerTypeName UnregisteredHandlerTest1 cannot be resolved/);
      });

      describe('with an error', function () {
        it('handles the error gracefully', function () {
          var initialResult = Genai.ChatBot.createInitialGenAiResult('What is an entity type?', Genai.Query.Type.QUERY);
          expect(initialResult).toBeDefined();
        });
      });
    });
  });

  describe('Genai.ChatBot#handleError', function () {
    describe('when an unknown error occurs', function () {
      it('returns the default error message', function () {
        var errorMessage = 'Some unknown error occurred';
        var result = Genai.ChatBot.handleError(errorMessage, 'en');
        expect(result).toEqual(this.defaultErrorMsg);
      });
    });

    describe('when the error message matches a known handlerTypeName error', function () {
      it('returns the same error message without modification', function () {
        var result = Genai.ChatBot.handleError(this.expectedHandlerErrorMsg, 'en');
        expect(result).toEqual(this.expectedHandlerErrorMsg);
      });
    });

    describe('when the error message is a known translatable error', function () {
      it('returns the translated error message', function () {
        var result = Genai.ChatBot.handleError(this.translatableError, 'fr');
        expect(result).toEqual(this.translatedMessageFr);
      });
    });

    describe('when the translation fails', function () {
      it('returns the default error message', function () {
        var errorMessage = 'Some unknown error occured';
        var result = Genai.ChatBot.handleError(errorMessage, 'en');
        expect(result).toEqual(this.defaultErrorMsg);
      });
    });
  });
});
