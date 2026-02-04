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
    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];
    this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];
    TestApi.setGcpKey();
    TestApi.setOpenAiApiKey();
    this.gcpConfig = Genai.Llm.Gcp.Config.inst();
    this.openAIConfig = Genai.Llm.OpenAI.Config.inst();
    this.mapBoxConfig = UiSdlMapbox.config();
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    TestIdp.removeTestUsers([this.basicUser, this.adminUser]);
  });

  describe('Genai.PrivilegedAction.getGcpPalmConfigSecret', function () {
    it('should not throw error for authorized user', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (config) {
          expect(Genai.PrivilegedAction.getGcpPalmConfigSecret(config)).withContext('adminUser').toBeDefined();
        }).partiallyCall([this.gcpConfig])
      );

      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function (config) {
          expect(Genai.PrivilegedAction.getGcpPalmConfigSecret(config)).withContext('basicUser').toBeDefined();
        }).partiallyCall([this.gcpConfig])
      );
    });
  });

  describe('Genai.PrivilegedAction.getOpenAiConfigSecret', function () {
    it('should not throw error for authorized user', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (config) {
          expect(Genai.PrivilegedAction.getOpenAiConfigSecret(config)).withContext('adminUser').toBeDefined();
        }).partiallyCall([this.openAIConfig])
      );

      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function (config) {
          expect(Genai.PrivilegedAction.getOpenAiConfigSecret(config)).withContext('basicUser').toBeDefined();
        }).partiallyCall([this.openAIConfig])
      );
    });
  });

  describe('permissions', function () {
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
            'Data.Persisted': ['create'],
          };
          var denied = {
            'Genai.Retriever.Dense': deniedRetrieverPermissions,
            'Genai.Retriever.Elser': deniedRetrieverPermissions,
            'Genai.Query.ResultCount': ['myQueryCount'],
          };

          TestApi.checkPermissions(allowed, denied);
          expect(function () {
            Genai.Retriever.Dense.make({ id: 'dense' }).indexFiles([Genai.SourceFile.make({ id: 'sourcefile' })]);
          }).toThrowError(/is not authorized to access/);
        })
      );
    });

    it('should allow restricted actions for admin users', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function () {
          var retrieverPermissions = ['similaritySearch', 'indexPassages', 'indexFiles', 'indexCollections'];
          var fetchPermissions = ['fetch', 'fetchCount'];
          var allowed = {
            FileApi: ['handle'],
            'Genai.Retriever.Dense': retrieverPermissions,
            'Genai.Retriever.Elser': retrieverPermissions,
            'Genai.Query.ResultCount': ['myQueryCount'],
            'Genai.SourceFile.Metadata.Tag': fetchPermissions,
            'Genai.SourceFile.Metadata.Category': fetchPermissions,
          };
          var denied = {};

          TestApi.checkPermissions(allowed, denied);
        })
      );
    });
  });

  describe('UiSdlMapboxConfig', function () {
    it('should not throw error for authorized user', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (config) {
          expect(function () {
            config.getSecret();
          })
            .withContext('adminUser getSecret')
            .not.toThrowError();
        }).partiallyCall([this.mapBoxConfig])
      );

      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function (config) {
          expect(function () {
            config.getSecret();
          })
            .withContext('basicUser getSecret')
            .not.toThrowError();
        }).partiallyCall([this.mapBoxConfig])
      );
    });
  });
});
