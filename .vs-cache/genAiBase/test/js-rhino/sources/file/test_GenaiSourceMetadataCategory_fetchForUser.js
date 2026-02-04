/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceMetadataCategory_fetchForUser.js';

describe(filename, function () {
  describe('#fetchForUser', function () {
    beforeAll(function () {
      this.ctx = TestApi.createContext(filename);

      // Projects
      [this.tutorialProject, this.defaultProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);

      // Users
      this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];

      // Category linked to the project
      this.category1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile.Metadata.Category', {
        label: 'categoryWithProject',
        projects: [this.tutorialProject],
      }).get('this');

      // Category not linked to a Project
      this.category2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile.Metadata.Category', {
        label: 'categoryWithoutProject',
      }).get('this');

      this.userSettings = TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
        user: this.adminUser,
        activeProject: this.tutorialProject,
      });

      this.fetchActionAsUser = function (user, actionName) {
        return TestRunner.asUser(
          user,
          Lambda.fromJsFunc(function (actionName) {
            return Genai.SourceFile.Metadata.Category[actionName]();
          }).partiallyCall([actionName])
        );
      };
    });

    afterAll(function () {
      TestApi.teardown(this.ctx);
      TestIdp.removeUser(this.adminUser);
    });

    describe('when the user has an active project', function () {
      beforeAll(function () {
        this.tagCategories = this.fetchActionAsUser(this.adminUser, 'fetchForUser');
      });

      it('returns tag categories for that project', function () {
        expect(this.tagCategories.objs.length).toEqual(1);
      });

      it('fetchCount returns the correct count', function () {
        this.tagCategoriesCount = this.fetchActionAsUser(this.adminUser, 'fetchCountForUser');
        expect(this.tagCategoriesCount).toEqual(1);
      });
    });

    describe('when the user does not have an active project', function () {
      beforeAll(function () {
        this.userSettings.withActiveProject(null).merge({ mergeInclude: 'activeProject' });
        this.tagCategories = this.fetchActionAsUser(this.adminUser, 'fetchForUser');
      });

      it('returns all the tag categories', function () {
        expect(this.tagCategories.objs.length).toEqual(2);
      });

      it('fetchCount returns the correct count', function () {
        this.tagCategoriesCount = this.fetchActionAsUser(this.adminUser, 'fetchCountForUser');
        expect(this.tagCategoriesCount).toEqual(2);
      });
    });
  });
});
