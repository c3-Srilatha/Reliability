/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiUserSettings';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Users
    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];

    // Projects
    [this.tutorialProject, this.defaultProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);

    // Project Settings
    this.defaultProjectSettings = TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
      id: 'default',
      defaultProject: this.defaultProject,
      tutorialProject: this.tutorialProject,
    });

    this.getSettingsAsUser = function (user, doNotCreateDefault) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (user, doNotCreateDefault) {
          return Genai.App.UserSettings.forUser(user, doNotCreateDefault);
        }).partiallyCall([user, doNotCreateDefault])
      );
    };

    this.setProjectAsUser = function (user, userSettings, project) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (userSettings, project) {
          return userSettings.setActiveProject(project);
        }).partiallyCall([userSettings, project])
      );
    };

    this.createSettingsWithProject = function (user, project) {
      return TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
        user: user,
        activeProject: project,
      });
    };
  });

  afterAll(function () {
    TestIdp.removeUser(this.basicUser);
    TestApi.teardown(this.ctx);
  });

  describe('::forUser', function () {
    describe('when a Genai.App.UserSettings instance exists for the user', function () {
      beforeAll(function () {
        this.initialUserSettings = TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
          user: this.basicUser,
          activeProject: this.defaultProject,
        }).get();

        this.userSettings = this.getSettingsAsUser(this.basicUser, false);
      });

      afterAll(function () {
        this.userSettings.remove();
      });

      it('returns the existing Genai.App.UserSettings instance for the user', function () {
        expect(this.userSettings.id).toEqual(this.initialUserSettings.id);
        expect(this.userSettings.activeProject.id).toEqual(this.initialUserSettings.activeProject.id);
      });
    });

    describe('when no Genai.App.UserSettings instance exists for the user', function () {
      describe('when #doNotCreateDefault is not passed or is set to "false"', function () {
        describe('when the default project settings contain a tutorial project', function () {
          beforeAll(function () {
            this.settingsCountBefore = Genai.App.UserSettings.fetchCount();
            this.userSettings = this.getSettingsAsUser(this.basicUser, false);
            this.settingsCountAfter = Genai.App.UserSettings.fetchCount();
          });

          afterAll(function () {
            this.userSettings.remove();
          });

          it('creates a new Genai.App.UserSettings instance for the user using the tutorial as #project', function () {
            expect(this.settingsCountAfter).toEqual(this.settingsCountBefore + 1);
            expect(this.userSettings.activeProject.id).toEqual(this.tutorialProject.id);
          });
        });

        describe('when the default project settings do not contain a tutorial project', function () {
          beforeAll(function () {
            // Overwriting the project settings with id 'default'
            this.customProjectSettings = TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
              id: 'default',
              defaultProject: this.defaultProject,
            });
            this.settingsCountBefore = Genai.App.UserSettings.fetchCount();
            this.userSettings = this.getSettingsAsUser(this.basicUser, false);
            this.settingsCountAfter = Genai.App.UserSettings.fetchCount();
          });

          afterAll(function () {
            this.userSettings.remove();
          });

          it('creates a new Genai.App.UserSettings instance for the user using the default as #project', function () {
            expect(this.settingsCountAfter).toEqual(this.settingsCountBefore + 1);
            expect(this.userSettings.activeProject.id).toEqual(this.defaultProject.id);
          });
        });
      });

      describe('when #doNotCreateDefault is set to "true"', function () {
        beforeAll(function () {
          Genai.App.UserSettings.removeAll({ filter: Filter.eq('user', this.basicUser) }, true);
        });

        it('throws an error if no Genai.App.UserSettings instance exists for the user', function () {
          var self = this;
          expect(function () {
            self.getSettingsAsUser(self.basicUser, true);
          }).toThrowError(/No Genai.App.UserSettings found for user/);
        });
      });
    });
  });

  describe('#isUsingTutorial', function () {
    beforeAll(function () {
      this.createSettingsWithProject = function (user, project) {
        return TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
          user: user,
          activeProject: project,
        });
      };
    });

    describe('when the user is using the tutorial project', function () {
      beforeAll(function () {
        this.userSettings = this.createSettingsWithProject(this.basicUser, this.tutorialProject);
      });

      afterAll(function () {
        this.userSettings.remove();
      });

      it('returns "true"', function () {
        expect(this.userSettings.isUsingTutorial()).toEqual(true);
      });
    });

    describe('when the user is not using the tutorial project', function () {
      beforeAll(function () {
        this.userSettings = this.createSettingsWithProject(this.basicUser, this.defaultProject);
      });

      afterAll(function () {
        this.userSettings.remove();
      });

      it('returns "false"', function () {
        expect(this.userSettings.isUsingTutorial()).toEqual(false);
      });
    });
  });

  describe('#setActiveProject', function () {
    beforeAll(function () {
      this.userSettings = this.createSettingsWithProject(this.basicUser, this.tutorialProject);
      this.updatedUserSettings = this.setProjectAsUser(this.basicUser, this.userSettings, this.defaultProject);
    });

    afterAll(function () {
      this.updatedUserSettings.remove();
    });

    it('replaces the #project in the user settings', function () {
      expect(this.updatedUserSettings.activeProject.id).toEqual(this.defaultProject.id);
    });
  });
});
