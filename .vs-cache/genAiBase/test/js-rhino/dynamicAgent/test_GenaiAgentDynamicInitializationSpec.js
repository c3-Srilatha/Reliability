/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiAgentDynamicInitializationSpec';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.config = Genai.Agent.Dynamic.Config.forConfigKey('DynamicAgent_default');
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('specFromConfig successfully converts config to spec', function () {
    beforeAll(function () {
      this.initializationSpec = Genai.Agent.Dynamic.InitializationSpec.specFromConfig(this.config);
    });

    Genai.Agent.Dynamic.ConfigParams.meta()
      .declaredFieldTypes.map((obj) => {
        return obj.name;
      })
      .each(function (fieldName) {
        it('all parameters convert as expected: ' + fieldName, function () {
          specValue = this.initializationSpec[fieldName];
          configValue = this.config[fieldName];
          expect(specValue).toEqual(configValue);
        });
      });
  });
});
