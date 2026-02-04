/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Roles';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.basicUser = TestIdp.createTestUsersForGroup('GenAiSearch.Role.User')[0];
    this.documentAdminUser = TestIdp.createTestUsersForGroup('GenAiSearch.Role.DocumentAdmin')[0];
    this.adminUser = TestIdp.createTestUsersForGroup('GenAiSearch.Role.Admin')[0];
    this.searchOnlyUser = TestIdp.createTestUsersForGroup('GenAiSearch.Role.User.SearchOnly')[0];
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    TestIdp.removeTestUsers([this.basicUser, this.adminUser, this.documentAdminUser, this.searchOnlyUser]);
  });

  describe('permissions', function () {
    describe('GenAiSearch.Role.User', function () {
      it('should allow common actions for basic users', function () {
        TestRunner.asUser(
          this.basicUser,
          Lambda.fromJsFunc(function () {
            var retrieverPermissions = ['similaritySearch'];
            var deniedRetrieverPermissions = ['indexFiles', 'indexCollections'];
            var allowed = {
              FileApi: ['handle'],
              'Genai.Retriever.Dense': retrieverPermissions,
              'Genai.Retriever.Elser': retrieverPermissions,
              'Genai.Pendo.Config': ['configValue'],
              'Genai.ConfigUtil': ['uiPlannerSelectionOptions'],
              'Data.Persisted': ['inferredOutType'],
            };
            var denied = {
              'Genai.Retriever.Dense': deniedRetrieverPermissions,
              'Genai.Retriever.Elser': deniedRetrieverPermissions,
              'Genai.Query.ResultCount': ['myQueryCount'],
            };

            TestApi.checkPermissions(allowed, denied);
          })
        );
      });
    });

    describe('GenAiSearch.Role.DocumentAdmin', function () {
      it('should allow restricted actions for document admin users', function () {
        TestRunner.asUser(
          this.documentAdminUser,
          Lambda.fromJsFunc(function () {
            var allowed = {
              'Genai.SourceFile': [
                'addTags',
                'addManualTag',
                'updateManualTag',
                'removeManualTag',
                'addTagsByMap',
                'addTagsByCategoryMap',
                'process',
                'transitionFilesToStatus',
                'transitionRelevantFilesToChunking',
                'unprocess',
                'unprocessAndTransitionToDeleted',
              ],
              'Genai.SourceFile.Metadata.Category': ['upsert', 'fromSpec', 'remove', 'removeAll'],
              'Genai.SourceFile.Metadata.Tag': ['upsert', 'remove'],
              'Genai.SourceFile.Metadata.Tagging': ['previewCategories', 'applyMetadataTagging'],
            };
            var denied = {};

            TestApi.checkPermissions(allowed, denied);
          })
        );
      });
    });

    describe('GenAiSearch.Role.Admin', function () {
      it('should allow restricted actions for admin users', function () {
        TestRunner.asUser(
          this.adminUser,
          Lambda.fromJsFunc(function () {
            var retrieverPermissions = ['similaritySearch', 'indexPassages', 'indexFiles', 'indexCollections'];
            var allowed = {
              FileApi: ['handle'],
              'Genai.Retriever.Dense': retrieverPermissions,
              'Genai.Retriever.Elser': retrieverPermissions,
              'Genai.Pendo.Config': ['configValue'],
              'Genai.Query.ResultCount': ['myQueryCount'],
            };
            var denied = {};

            TestApi.checkPermissions(allowed, denied);
          })
        );
      });
    });

    describe('GenAiSearch.Role.User.SearchOnly', function () {
      it('should allow Data.Persisted inferredOutType for search only users to view tables', function () {
        TestRunner.asUser(
          this.searchOnlyUser,
          Lambda.fromJsFunc(function () {
            var allowed = {
              'Data.Persisted': ['inferredOutType'],
            };
            var denied = {};

            TestApi.checkPermissions(allowed, denied);
          })
        );
      });
    });
  });

  describe('visualization permissions', function () {
    beforeAll(function () {
      this.dynamicData = TestApi.upsertEntity(this.ctx, 'Genai.Agent.DynamicData', {
        persistedData: C3.Data.fromPySrc("ret = pd.DataFrame({'a': [1, 2, 3], 'b': [4, 5, 6]})").toPersisted(),
      });

      this.outputFromSearchAdmin = TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (dynamicData) {
          return dynamicData.getVisualizationDataFromDataFrame();
        }).partiallyCall([this.dynamicData])
      );

      this.outputFromSearchOnlyUser = TestRunner.asUser(
        this.searchOnlyUser,
        Lambda.fromJsFunc(function (dynamicData) {
          return dynamicData.getVisualizationDataFromDataFrame();
        }).partiallyCall([this.dynamicData])
      );

      this.expectedOutput = [
        {
          a: 1,
          b: 4,
        },
        {
          a: 2,
          b: 5,
        },
        {
          a: 3,
          b: 6,
        },
      ];
    });

    function validateVisualizationData(actualData, expectedData) {
      expect(actualData.length).toBe(expectedData.length);
      expectedData.forEach((expectedItem, index) => {
        expect(actualData[index]).toEqual(jasmine.objectContaining(expectedItem));
      });
    }

    it('should allow visualization for search admin', function () {
      validateVisualizationData(this.outputFromSearchAdmin.data.toJson(), this.expectedOutput);
    });

    it('should allow visualization for search only user', function () {
      validateVisualizationData(this.outputFromSearchOnlyUser.data.toJson(), this.expectedOutput);
    });
  });
});
