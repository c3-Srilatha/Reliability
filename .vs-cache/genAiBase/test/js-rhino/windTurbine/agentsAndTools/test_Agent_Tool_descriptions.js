/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Agent_Tool_descriptions';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.firstToolDescription = {
      toolName: 'First Tool Name',
      toolDescription: 'Description about the first tool.',
    };
    this.secondToolDescription = {
      toolName: 'Second Tool Name',
      toolDescription: 'Description about the second tool.',
    };
    this.thirdToolDescription = {
      toolName: 'Third Tool Name',
      toolDescription: 'Description about the third tool.',
    };

    var toolDescriptions = [this.firstToolDescription, this.secondToolDescription, this.thirdToolDescription];
    this.toolIds = ['TestTool1', 'TestTool2', 'TestTool3'];
    this.toolkitNames = ['TestToolkit1', 'TestToolkit2', 'TestToolkit3'];
    this.toolIds.forEach(function (toolId, idx) {
      Genai.Agent.Tool.forId(toolId).config().setConfigValues(toolDescriptions[idx]);
      toolDescriptions[idx].id = toolId;
    });
    this.toolDescriptions = toolDescriptions;

    this.checkToolDescription = function (description, expectedDescription) {
      expect(description.id).toEqual(expectedDescription.id);
      expect(description.name).toEqual(expectedDescription.toolName);
      expect(description.description).toEqual(expectedDescription.toolDescription);
    };

    this.checkAllDescriptions = function (descriptions, expectedDescriptions) {
      expect(descriptions.length).toEqual(expectedDescriptions.length);
      for (var i = 0; i < descriptions.length; i++) {
        var description = descriptions[i];
        var expectedDescription = expectedDescriptions[i];
        this.checkToolDescription(description, expectedDescription);
      }
    };
  });

  afterAll(function () {
    this.toolIds.forEach(function (toolId, idx) {
      Genai.Agent.Tool.forId(toolId).config().clearConfigAndSecretOverride(ConfigOverride.APP);
    });
    TestApi.teardown(this.ctx);
  });

  describe('JS implementations', function () {
    describe('Genai.Agent.Tool#descriptionForAgent returns correct description', function () {
      it('for first tool', function () {
        var toolDescription = Genai.Agent.Tool.forId(this.toolIds[0]).descriptionForAgent();
        this.checkToolDescription(toolDescription, this.toolDescriptions[0]);
      });

      it('for second tool', function () {
        var toolDescription = Genai.Agent.Tool.forId(this.toolIds[1]).descriptionForAgent();
        this.checkToolDescription(toolDescription, this.toolDescriptions[1]);
      });

      it('for third tool', function () {
        var toolDescription = Genai.Agent.Tool.forId(this.toolIds[2]).descriptionForAgent();
        this.checkToolDescription(toolDescription, this.toolDescriptions[2]);
      });
    });

    describe('Genai.Agent.Toolkit#descriptionForAgent returns correct description', function () {
      it('for first tool kit', function () {
        var resultDescriptions = Genai.Agent.Toolkit.forName(this.toolkitNames[0]).descriptionForAgent();
        this.checkAllDescriptions(resultDescriptions, [
          this.firstToolDescription,
          this.secondToolDescription,
          this.thirdToolDescription,
        ]);
      });

      it('for second tool kit', function () {
        var resultDescriptions = Genai.Agent.Toolkit.forName(this.toolkitNames[1]).descriptionForAgent();
        this.checkAllDescriptions(resultDescriptions, [this.secondToolDescription, this.thirdToolDescription]);
      });

      it('for third tool kit', function () {
        var resultDescriptions = Genai.Agent.Toolkit.forName(this.toolkitNames[2]).descriptionForAgent();
        this.checkAllDescriptions(resultDescriptions, [this.thirdToolDescription]);
      });
    });
  });

  describe('PY implementations', function () {
    beforeAll(function () {
      this.toolDescriptionPy = Lambda.fromPySrc('lambda x: x.descriptionForAgent()', 'py-server');

      this.toolkitDescriptionPy = Lambda.fromPySrc('lambda x: x.descriptionForAgent()', 'py-server');
    });

    describe('Genai.Agent.Tool#descriptionForAgent returns correct description', function () {
      it('for first tool', function () {
        var toolDescription = this.toolDescriptionPy.call(Genai.Agent.Tool.forId(this.toolIds[0]));
        this.checkToolDescription(toolDescription, this.toolDescriptions[0]);
      });

      it('for second tool', function () {
        var toolDescription = this.toolDescriptionPy.call(Genai.Agent.Tool.forId(this.toolIds[1]));
        this.checkToolDescription(toolDescription, this.toolDescriptions[1]);
      });

      it('for third tool', function () {
        var toolDescription = this.toolDescriptionPy.call(Genai.Agent.Tool.forId(this.toolIds[2]));
        this.checkToolDescription(toolDescription, this.toolDescriptions[2]);
      });
    });

    describe('Genai.Agent.Toolkit#descriptionForAgent returns correct description', function () {
      it('for first tool kit', function () {
        var resultDescriptions = this.toolkitDescriptionPy.call(Genai.Agent.Toolkit.forName(this.toolkitNames[0]));
        this.checkAllDescriptions(resultDescriptions, [
          this.firstToolDescription,
          this.secondToolDescription,
          this.thirdToolDescription,
        ]);
      });

      it('for second tool kit', function () {
        var resultDescriptions = this.toolkitDescriptionPy.call(Genai.Agent.Toolkit.forName(this.toolkitNames[1]));
        this.checkAllDescriptions(resultDescriptions, [this.secondToolDescription, this.thirdToolDescription]);
      });

      it('for third tool kit', function () {
        var resultDescriptions = this.toolkitDescriptionPy.call(Genai.Agent.Toolkit.forName(this.toolkitNames[2]));
        this.checkAllDescriptions(resultDescriptions, [this.thirdToolDescription]);
      });
    });
  });
});
