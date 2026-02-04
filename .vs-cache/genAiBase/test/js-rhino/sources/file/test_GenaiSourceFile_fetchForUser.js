/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFile_fetchForUser.js';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Projects
    [this.tutorialProject, this.defaultProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);

    // Users
    this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];

    // SourceCollection linked to the project
    this.collection1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: 'test-worldFacts',
      rootUrl: 'test-worldFacts',
      targetUrl: 'test-worldFacts',
      projects: [this.tutorialProject],
    }).get('this');

    // SourceFile linked to a Project
    this.file1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      collection: this.collection1,
      originalFile: C3.File.make('test-file1'),
    }).get('this');

    // SourceCollection not linked to a Project
    this.collection2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      description: 'test collection1',
      name: 'test collection1',
      rootUrl: 'root/url/1',
      targetUrl: 'target/url/1',
    }).get('this');

    // SourceFile not linked to a Project
    this.file2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      collection: this.collection2,
      originalFile: C3.File.make('test-file1'),
    }).get('this');

    // SourceFile marked deleted
    this.file3 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      collection: this.collection2,
      originalFile: C3.File.make('test-file2'),
    }).get('this');
    Genai.SourceFile.transitionFilesToStatus([this.file3], Genai.SourceFile.StatusEnum.DELETED);

    this.userSettings = TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
      user: this.adminUser,
      activeProject: this.tutorialProject,
    });

    this.fetchActionAsUser = function (user, actionName) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (actionName) {
          return Genai.SourceFile[actionName]();
        }).partiallyCall([actionName])
      );
    };
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    TestIdp.removeUser(this.adminUser);
  });

  describe('#fetchForUser', function () {
    describe('when the user has an active project', function () {
      beforeAll(function () {
        this.sourceFiles = this.fetchActionAsUser(this.adminUser, 'fetchForUser');
      });

      it('returns the source files for that project', function () {
        expect(this.sourceFiles.objs.length).toEqual(1);
        expect(this.sourceFiles.objs[0].id).toEqual(this.file1.id);
      });

      it('fetchCount returns the correct count', function () {
        this.sourceFilesCount = this.fetchActionAsUser(this.adminUser, 'fetchCountForUser');
        expect(this.sourceFilesCount).toEqual(1);
      });

      it('fetchNonDeletedCountForUser returns the correct count', function () {
        this.sourceFilesCount = this.fetchActionAsUser(this.adminUser, 'fetchNonDeletedCountForUser');
        expect(this.sourceFilesCount).toEqual(this.sourceFiles.objs.length - 1);
      });
    });

    describe('when the user does not have an active project', function () {
      beforeAll(function () {
        this.userSettings = this.userSettings.withActiveProject(null).merge({ mergeInclude: 'activeProject' });
        this.sourceFiles = this.fetchActionAsUser(this.adminUser, 'fetchForUser');
      });

      it('returns all the source files', function () {
        expect(this.sourceFiles.objs.length).toBeGreaterThan(1);
      });

      it('fetchCount returns the correct count', function () {
        this.sourceFilesCount = this.fetchActionAsUser(this.adminUser, 'fetchCountForUser');
        expect(this.sourceFilesCount).toEqual(this.sourceFiles.objs.length);
      });
    });
  });

  describe('#fetchObjStreamForUser', function () {
    beforeAll(function () {
      this.userSettings = Genai.App.UserSettings.forId(this.userSettings.id)
        .withActiveProject(this.tutorialProject)
        .merge({ mergeInclude: 'activeProject' });
    });

    describe('when the user has an active project', function () {
      beforeAll(function () {
        this.sourceFilesStream = this.fetchActionAsUser(this.adminUser, 'fetchObjStreamForUser');
        this.sourceFiles = this.sourceFilesStream.collect();
      });

      it('returns the source files for that project', function () {
        expect(this.sourceFiles.length).toEqual(1);
        expect(this.sourceFiles[0].id).toEqual(this.file1.id);
      });
    });

    describe('when the user does not have an active project', function () {
      beforeAll(function () {
        this.userSettings = this.userSettings.withActiveProject(null).merge({ mergeInclude: 'activeProject' });
        this.sourceFilesStream = this.fetchActionAsUser(this.adminUser, 'fetchObjStreamForUser');
        this.sourceFiles = this.sourceFilesStream.collect();
      });

      it('returns all the source files', function () {
        expect(this.sourceFiles.length).toBeGreaterThan(1);
      });
    });
  });
});
