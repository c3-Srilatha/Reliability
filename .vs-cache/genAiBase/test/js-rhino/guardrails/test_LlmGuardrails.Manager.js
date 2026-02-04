/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_LlmGuardrails.Manager';

// Allow time for HF model installation
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;

describe(filename, function () {
  TestApi.installHuggingfaceModels(['protectai/deberta-v3-base-prompt-injection-v2', 'unitary/unbiased-toxic-roberta']);

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  [
    {
      description: 'with no processors',
      inputProcessors: [],
      outputProcessors: [],
      input: {
        originalValue: 'Prompt should not be changed',
      },
      output: {
        originalValue: 'Response should not be changed',
      },
    },
    {
      description: 'with a validator that just echoes',
      inputProcessors: [Genai.LlmGuardrails.Processor.InputEchoProcessor.inst()],
      outputProcessors: [Genai.LlmGuardrails.Processor.OutputEchoProcessor.inst()],
      input: {
        originalValue: 'Prompt should not be changed',
      },
      output: {
        originalValue: 'Response should not be changed',
      },
    },
    {
      description: 'with a validator that raises an error',
      processors: [
        Genai.LlmGuardrails.Processor.TestProcessor.make({
          raiseProcessInputError: true,
          raiseProcessOutputError: true,
        }),
      ],
      inputProcessors: [
        Genai.LlmGuardrails.Processor.TestProcessor.make({
          raiseProcessInputError: true,
        }),
      ],
      outputProcessors: [
        Genai.LlmGuardrails.Processor.TestProcessor.make({
          raiseProcessInputError: true,
          raiseProcessOutputError: true,
        }),
      ],
      input: {
        originalValue: 'Prompt raises an error',
      },
      output: {
        originalValue: 'Response raises an error',
      },
    },
    {
      description: 'with a validator that modifies',
      inputProcessors: [Genai.LlmGuardrails.Processor.TestProcessor.inst()],
      outputProcessors: [Genai.LlmGuardrails.Processor.TestProcessor.inst()],
      input: {
        originalValue: 'Prompt should be {{token}}',
        updatedValue: 'Prompt should be updated by processInput',
      },
      output: {
        originalValue: 'Response should be {{token}}',
        updatedValue: 'Response should be updated by processOutput',
      },
    },
    {
      description: 'with a multiple processors',
      inputProcessors: [
        Genai.LlmGuardrails.Processor.InputEchoProcessor.inst(),
        Genai.LlmGuardrails.Processor.TestProcessor.inst(),
      ],
      outputProcessors: [
        Genai.LlmGuardrails.Processor.OutputEchoProcessor.inst(),
        Genai.LlmGuardrails.Processor.TestProcessor.inst(),
      ],
      input: {
        originalValue: 'Prompt should be {{token}}',
        updatedValue: 'Prompt should be updated by processInput',
      },
      output: {
        originalValue: 'Response should be {{token}}',
        updatedValue: 'Response should be updated by processOutput',
      },
    },
  ].forEach((testCase) => {
    describe(testCase.description, function () {
      beforeAll(function () {
        // For the purpose of the test, we're using the same processors for input and output
        Genai.LlmGuardrails.Manager.setConfigValue('inputProcessors', testCase.inputProcessors);
        Genai.LlmGuardrails.Manager.setConfigValue('outputProcessors', testCase.outputProcessors);
      });

      afterAll(function () {
        Genai.LlmGuardrails.Manager.clearConfigAndSecretOverride(ConfigOverride.APP);
      });

      describe('initialize', function () {
        it('succeeds without issue', function () {
          Genai.LlmGuardrails.Manager.initialize();
        });
      });

      ['processInput', 'processOutput'].forEach((fnName) => {
        describe(fnName, function () {
          it('produces the expected result', function () {
            var input = fnName === 'processInput' ? testCase.input : testCase.output;
            if (testCase.description.indexOf('raises an error') < 0) {
              var result = Genai.LlmGuardrails.Manager[fnName](input.originalValue);
              expect(result).toBeDefined();
              expect(String(result.originalValue)).toEqual(input.originalValue);

              // If the test case does not specify an updatedValue, the value should be unmodified
              expect(String(result.updatedValue)).toEqual(input.updatedValue || input.originalValue);
            } else {
              expect(function () {
                Genai.LlmGuardrails.Manager[fnName](input.originalValue);
                // eslint-disable-next-line security/detect-non-literal-regexp
              }).toThrowError(new RegExp(fnName + ' raises an error'));
            }
          });
        });
      });
    });
  });
});
