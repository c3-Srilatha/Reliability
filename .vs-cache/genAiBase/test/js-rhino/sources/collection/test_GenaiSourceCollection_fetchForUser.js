/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceCollection_fetchForUser.js';

describe(filename, function () {
  describe('#fetchForUser', function () {
    beforeAll(function () {
      this.ctx = TestApi.createContext(filename);

      // Projects
      [this.tutorialProject, this.defaultProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);

      // Users
      this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];

      // SourceCollection linked to the project
      this.collection1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
        name: 'worldFacts',
        rootUrl: 'worldFacts',
        targetUrl: 'worldFacts',
        projects: [this.tutorialProject],
      }).get('this');

      // SourceCollection not linked to a Project
      this.collection1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
        description: 'test collection1',
        name: 'test collection1',
        rootUrl: 'root/url/1',
        targetUrl: 'target/url/1',
      }).get('this');

      this.userSettings = TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
        user: this.adminUser,
        activeProject: this.tutorialProject,
      });

      this.fetchActionAsUser = function (user, actionName) {
        return TestRunner.asUser(
          user,
          Lambda.fromJsFunc(function (actionName) {
            return Genai.SourceCollection[actionName]();
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
        this.sourceCollections = this.fetchActionAsUser(this.adminUser, 'fetchForUser');
      });

      it('returns the source collections for that project', function () {
        expect(this.sourceCollections.objs.length).toEqual(1);
      });

      it('fetchCount returns the correct count', function () {
        this.sourceCollectionsCount = this.fetchActionAsUser(this.adminUser, 'fetchCountForUser');
        expect(this.sourceCollectionsCount).toEqual(1);
      });
    });

    describe('when the user does not have an active project', function () {
      beforeAll(function () {
        this.userSettings.withActiveProject(null).merge({ mergeInclude: 'activeProject' });
        this.sourceCollections = this.fetchActionAsUser(this.adminUser, 'fetchForUser');
        this.sourceCollectionCount = Genai.SourceCollection.fetchCount();
      });

      it('returns all the source collections', function () {
        expect(this.sourceCollections.objs.length).toEqual(this.sourceCollectionCount);
      });

      it('fetchCount returns the correct count', function () {
        this.sourceCollectionsCount = this.fetchActionAsUser(this.adminUser, 'fetchCountForUser');
        expect(this.sourceCollectionsCount).toEqual(this.sourceCollectionCount);
      });
    });
  });
});
