/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiChatBotConfig';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Users
    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];

    this.getIsUsingProjectsAsUser = function (user) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function () {
          return Genai.ChatBot.Config.isUsingProjects();
        }).partiallyCall([])
      );
    };

    this.originalChatBotConfig = Genai.ChatBot.Config.getConfig();
  });

  afterAll(function () {
    this.originalChatBotConfig.setConfig();
    TestIdp.removeUser(this.basicUser);
    TestApi.teardown(this.ctx);
  });

  describe('::isUsingProjects', function () {
    describe('when the handler type name is "Genai.Project.QueryRouter"', function () {
      beforeAll(function () {
        Genai.ChatBot.Config.setConfigValue('handlerTypeName', 'Genai.Project.QueryRouter');
      });

      it('returns true', function () {
        expect(this.getIsUsingProjectsAsUser(this.basicUser)).toBeTrue();
      });
    });

    describe('when the handler type name is not "Genai.Project.QueryRouter"', function () {
      beforeAll(function () {
        Genai.ChatBot.Config.setConfigValue('handlerTypeName', 'Genai.Agent.QueryOrchestrator');
      });

      it('returns false', function () {
        expect(this.getIsUsingProjectsAsUser(this.basicUser)).toBeFalse();
      });
    });
  });
});
