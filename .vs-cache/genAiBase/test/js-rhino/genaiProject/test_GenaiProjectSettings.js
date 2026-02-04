/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiProjectSettings';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.originalDefaultSettings = null;
    try {
      this.originalDefaultSettings = Genai.Project.Settings.getDefaultSettings();
      this.originalDefaultSettings.remove();
    } catch (e) {
      // Swallow error
    }

    // Projects
    [this.tutorialProject, this.defaultProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    if (this.originalDefaultSettings != null) {
      this.originalDefaultSettings.upsert();
    }
  });

  describe('::getDefaultSettings', function () {
    describe('when there are no default settings set', function () {
      it('throws an error', function () {
        expect(function () {
          Genai.Project.Settings.getDefaultSettings();
        }).toThrowError(/No default Genai.Project.Settings/);
      });
    });

    describe('when the default settings exist', function () {
      beforeAll(function () {
        this.defaultProjectSettings = TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
          id: 'default',
          defaultProject: this.defaultProject,
          tutorialProject: this.tutorialProject,
        }).get('defaultProject.id, tutorialProject.id');
      });

      afterAll(function () {
        this.defaultProjectSettings.remove();
      });

      it('they are returned', function () {
        var defaultProjectSettings = Genai.Project.Settings.getDefaultSettings();
        expect(defaultProjectSettings.id).toEqual(this.defaultProjectSettings.id);
        expect(defaultProjectSettings.defaultProject.id).toEqual(this.defaultProjectSettings.defaultProject.id);
        expect(defaultProjectSettings.tutorialProject.id).toEqual(this.defaultProjectSettings.tutorialProject.id);
      });
    });

    describe('when the default settings exist but without a tutorial project', function () {
      beforeAll(function () {
        this.defaultProjectSettings = TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
          id: 'default',
          defaultProject: this.defaultProject,
        }).get('defaultProject.id, tutorialProject.id');
      });

      afterAll(function () {
        this.defaultProjectSettings.remove();
      });

      it('they are returned', function () {
        var defaultProjectSettings = Genai.Project.Settings.getDefaultSettings();
        expect(defaultProjectSettings.id).toEqual(this.defaultProjectSettings.id);
        expect(defaultProjectSettings.defaultProject.id).toEqual(this.defaultProjectSettings.defaultProject.id);
        expect(defaultProjectSettings.tutorialProject).toBeUndefined();
      });
    });
  });
});
