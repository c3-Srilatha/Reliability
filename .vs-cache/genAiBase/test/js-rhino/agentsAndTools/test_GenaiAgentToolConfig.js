/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiAgentToolConfig';

describe(filename, function () {
  it('returns the correct child config fields', function () {
    const result = Genai.Agent.Tool.Config.childConfigFields();
    expect(result.get('textAnswerFromDataModelConfigName').name()).toEqual(
      'Genai.UnstructuredQuery.Engine.ModelConfig'
    );
  });

  it('returns the correct config fields', function () {
    const result = Genai.Agent.Tool.UnstructuredDataQuery.Config.childConfigFields();
    this.expectedResult = { configName: Genai.UnstructuredQuery.Engine.Config };
    expect(result).toEqual(this.expectedResult);
  });
});
