/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ExMachinaProject';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Setup context
    this.template = VadProjectTemplate.make(
      {
        id: 'customer-churn-risk',
        name: 'Customer Churn Risk',
        definition: { id: 'my graph' },
      },
      true
    );

    this.user = TestApi.createExMachinaTestUser(this.ctx, TestApiUserConfig.make({ username: 'test' }, true), [
      'ExMachina.Group.Editor',
    ]).user;
    this.userId = this.user.id;

    this.session = TestApi.upsertEntity(this.ctx, 'ExMachinaSession', {
      started: DateTime.now(),
      instance: 'test',
    });

    this.project = TestApi.createTestProject(this.ctx, { projectRootName: 'Project', asUserId: this.userId }).project;

    TestApi.spyOn(this.ctx, 'ExMachinaSession', 'api').returnValue(ExMachina.Api.make()).register();
  });

  describe('#run', function () {
    beforeAll(function () {
      this.runGraphSpy = TestApi.spyOn(this.ctx, 'ExMachina.Api', 'runGraph').returnValue().register();
      this.runActionsSpy = TestApi.spyOn(this.ctx, 'ExMachina.Api', 'runActions').returnValue().register();
    });

    afterAll(function () {
      this.runGraphSpy.unregister();
      this.runActionsSpy.unregister();
    });

    it('run the loaded project', function () {
      ExMachinaProject.make({ id: this.project.id }, true).run(this.session);

      expect(this.runGraphSpy.toHaveBeenCalledTimes(1)).toBe(true);
      expect(this.runActionsSpy.toHaveBeenCalledTimes(1)).toBe(true);
    });
  });

  describe('#runResult', function () {
    beforeAll(function () {
      this.getRunGraphResultSpy = TestApi.spyOn(this.ctx, 'ExMachina.Api', 'getRunGraphResult')
        .returnValue({
          analysis: [],
        })
        .register();
    });

    afterAll(function () {
      this.getRunGraphResultSpy.unregister();
    });

    it("gets the ExMachinaProject's execution result", function () {
      ExMachinaProject.make({ id: this.project.id }, true).runResult(this.session);

      expect(this.getRunGraphResultSpy.getActionMock().callCount()).toEqual(1);
    });
  });

  describe('updateProjectDefinition', function () {
    it('updates project definition', function () {
      const updateProjectDefinition = { type: { nodeId: '10', inputId: '5' } };

      const result = ExMachinaProject.updateProjectDefinition(this.project.id, updateProjectDefinition);

      expect(result.definition).toEqual(updateProjectDefinition);
    });
  });

  describe('#saveSettings', function () {
    it('update project description with input description', function () {
      const description = 'Test Description';
      const result = ExMachinaProject.make({ id: this.project.id }, true).saveSettings(
        ExMachinaProjectSettings.make(
          {
            description: description,
            showSettingsModal: false,
          },
          true
        )
      );

      expect(result.description).toEqual(description);
    });

    it('updates the user preferences for showing the description modal on project launch', function () {
      ExMachinaProject.make({ id: this.project.id }, true).saveSettings(
        ExMachinaProjectSettings.make(
          {
            description: 'Test Description',
            showSettingsModal: true,
          },
          true
        )
      );
      var projectUserPreference = ExMachinaProjectUserPreference.forId(User.myUser().id);
      expect(projectUserPreference.showSettingsModal).toBeTruthy();
    });
  });

  describe('#getSettings', function () {
    beforeAll(function () {
      this.description = 'Test Description';
      this.showSettingsModal = true;

      ExMachinaProject.make({ id: this.project.id }, true).saveSettings(
        ExMachinaProjectSettings.make(
          {
            description: this.description,
            showSettingsModal: this.showSettingsModal,
          },
          true
        )
      );

      this.settings = ExMachinaProject.make({ id: this.project.id }, true).getSettings();
    });

    it('correctly returns the project description', function () {
      expect(this.settings.description).toEqual(this.description);
    });

    it('correctly returns the user preference to show description modal', function () {
      expect(this.settings.showSettingsModal).toEqual(this.showSettingsModal);
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });
});
