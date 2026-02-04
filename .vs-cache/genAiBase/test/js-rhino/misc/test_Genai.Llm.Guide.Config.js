/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Genai.Llm.Guide.Config.js';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.Llm.Guide.Config.clearConfigAndSecretOverride('APP');
  });

  describe('::setDefault', function () {
    it('validate configName set as default config for Genai.Llm.Guide', function () {
      var configName = 'default';
      Genai.Llm.Guide.Config.setDefault(configName);
      expect(Genai.Llm.Guide.DefaultConfig.getConfig().guideConfigName).toEqual(configName);
    });
  });
});
