/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFile_checkVectorStore.js';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setOpenAiApiKey();
    this.ctx = TestApi.createContext(filename);

    var collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: filename,
      rootUrl: filename + '/collRoot',
      targetUrl: filename + '/test',
    }).get('this');
    this.collection = collection;
    var originalFile = C3.FileSystem.makeFile(filename);
    var files = C3.Array.ofIntInRange(0, 5).mapTo('Genai.SourceFile', function (i) {
      return Genai.SourceFile.make({ collection: collection, originalFile: originalFile, name: 'foo' + i });
    });
    this.fileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', files);
    this.files = Genai.SourceFile.fetchObjStream({
      limit: -1,
      filter: Filter.intersects('id', this.fileIds).and().startsWith('name', 'foo'),
    }).collect();
    expect(this.files.size).toEqual(5);

    // Users
    this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];

    // Projects
    [this.tutorialProject, this.defaultProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);

    // Project Settings
    this.defaultProjectSettings = TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
      id: 'default',
      defaultProject: this.defaultProject,
      tutorialProject: this.tutorialProject,
    }).get();

    this.getSettingsAsUser = function (user, doNotCreateDefault) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (user, doNotCreateDefault) {
          return Genai.App.UserSettings.forUser(user, doNotCreateDefault);
        }).partiallyCall([user, doNotCreateDefault])
      );
    };

    this.checkVectorStoreAsUser = function (user, files) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (files) {
          return Genai.SourceFile.checkVectorStore(files);
        }).partiallyCall([files])
      );
    };

    this.config = Genai.UnstructuredQuery.Engine.Config.inst().getConfig();

    Genai.PyUtil.terminateAllEngines();

    this.tutorialProject.initialize();
    this.defaultProject.initialize();
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.PyUtil.terminateAllEngines();
  });

  describe('::checkVectorStore', function () {
    describe('when there is an active project', function () {
      beforeAll(function () {
        this.userSettings = this.getSettingsAsUser(this.adminUser, false);
        this.vectorStore = this.checkVectorStoreAsUser(this.adminUser, this.files);
      });

      it("returns the vectorStore of the project after changing the user's project", function () {
        this.userSettings = Genai.App.UserSettings.forUser(this.adminUser)
          .withActiveProject(this.defaultProject)
          .merge({
            mergeInclude: 'activeProject',
          });

        /*
         * Because retriever may be any Genai.Retriever type, we cannot `get` specific
         * fields directly from the Genai.Project
         */
        var expectedName = this.defaultProject.get('retriever').retriever.get('name').name;
        expect(expectedName).toBeDefined();

        expect(this.checkVectorStoreAsUser(this.adminUser, this.files).name).toEqual(expectedName);
      });
    });

    describe('when there is not an active project', function () {
      beforeAll(function () {
        this.userSettings = Genai.App.UserSettings.forUser(this.adminUser).withActiveProject(null).merge({
          mergeInclude: 'activeProject',
        });
        this.previousVectorStore = this.config.vectorStore;
      });

      afterAll(function () {
        this.config.setConfigValue('vectorStore', this.previousVectorStore);
      });

      describe('with a Dense retriever', function () {
        beforeAll(function () {
          this.dummyDenseRetriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
            name: filename + 'dummyDenseRetriever',
            indexZipUrl: 'not-valid',
          }).get();
          this.config.setConfigValue('vectorStore', this.dummyDenseRetriever);
          this.vectorStore = this.checkVectorStoreAsUser(this.adminUser, this.files);
        });

        it('returns the retriever from the Genai.UnstructuredQuery.Engine.Config', function () {
          var expectedName = this.dummyDenseRetriever.name;
          expect(this.vectorStore.name).toEqual(expectedName);
        });
      });
    });

    describe('when no vector store is found', function () {
      beforeAll(function () {
        this.userSettings = Genai.App.UserSettings.forUser(this.adminUser).withActiveProject(null).merge({
          mergeInclude: 'activeProject',
        });
        this.previousVectorStore = this.config.vectorStore;
        this.config.setConfigValue('vectorStore', null);
      });

      afterAll(function () {
        this.config.setConfigValue('vectorStore', this.previousVectorStore);
      });

      it('throws', function () {
        var errorMessage;
        try {
          this.checkVectorStoreAsUser(this.adminUser, this.files);
        } catch (e) {
          errorMessage = e.message;
        }
        expect(errorMessage).toContain('No Genai.Retriever provided');
      });
    });
  });
});
