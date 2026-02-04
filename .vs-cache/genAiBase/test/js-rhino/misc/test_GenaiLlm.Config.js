/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiLlm.Config';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setOpenAiApiKey();
    TestApi.setAwsBedrockKeys();
  });

  describe('::getAuthFields', function () {
    it('return the all the auth fields', function () {
      var authFields = Genai.TestLlmConfig.getAuthFields();
      expect(Object.keys(authFields).length).toEqual(3);
      expect(authFields.get('field1').get('type')).toEqual('string');
      expect(authFields.get('field2').get('type')).toEqual('int');
      expect(authFields.get('field3').get('type')).toEqual('string');
    });

    it('return only the required auth fields', function () {
      var authFields = Genai.TestLlmConfig.getAuthFields(true);
      expect(Object.keys(authFields).length).toEqual(2);
      expect(authFields.get('field1').get('type')).toEqual('string');
      expect(authFields.get('field2').get('type')).toEqual('int');
    });
  });

  describe('::getAuthFieldsInfo', function () {
    beforeAll(function () {
      var spec = Genai.Llm.CredentialSpec.make({
        name: 'testConfig',
        provider: 'Genai.TestLlmConfig',
        authFields: {
          field1: { value: 'field1Value', secret: false },
          field2: { value: 5, secret: true },
          field3: { value: 'field3Value', secret: false },
        },
      });
      var spec2 = Genai.Llm.CredentialSpec.make({
        name: 'testConfig',
        provider: 'Genai.Llm.OpenAI.Config',
        authFields: {
          apiKey: { value: 'apiKeyValue', secret: true },
          apiBase: { value: 'apiBaseValue', secret: false },
          apiVersion: { value: 'apiVersionValue', secret: false },
        },
      });
      expect(function () {
        Genai.Llm.ExternalLlm.Config.setFromSpec(spec);
      }).toThrow();
      Genai.Llm.ExternalLlm.Config.setFromSpec(spec2);
    });

    it('get info of a config', function () {
      var authFields = Genai.Llm.OpenAI.Config.getAuthFieldsInfo('testConfig');
      expect(authFields.get('apiKey').get('value')).toEqual('apiKeyValue');
      expect(authFields.get('apiBase').get('value')).toEqual('apiBaseValue');
      expect(authFields.get('apiVersion').get('value')).toEqual('apiVersionValue');
    });

    it('get info of default config', function () {
      var authFields = Genai.Llm.OpenAI.Config.getAuthFieldsInfo('Genai.Llm.OpenAI.Config');
      expect(authFields.get('apiKey').get('value')).toBeDefined();
      expect(authFields.get('apiBase').get('value')).toBeDefined();
    });

    it('get error for unsupported type', function () {
      expect(function () {
        Genai.TestLlmConfig.getAuthFieldsInfo('testConfig');
      }).toThrow();
    });
  });

  describe('::fetch', function () {
    beforeAll(function () {
      var aws = Genai.Llm.AwsBedrock.Config.listConfigs().collect().length;
      var gcp = Genai.Llm.Gcp.Config.listConfigs().collect().length;
      var openai = Genai.Llm.OpenAI.Config.listConfigs().collect().length;
      this.totalConfigs = aws + gcp + openai;
    });

    it('return the expected result with hasMore false', function () {
      var spec = FetchSpec.make({
        order: 'name',
        offset: 0,
        limit: 1000,
      });
      var result = Genai.Llm.ExternalLlm.Config.fetch(spec);
      expect(result.count).toEqual(this.totalConfigs);
      expect(result.hasMore).toEqual(false);
      expect(result.spec).toEqual(spec);
      expect(result.objs[this.totalConfigs - 1].name).toBeGreaterThanOrEqual(result.objs[0].name);
    });

    it('return the expected result with hasMore true', function () {
      var spec = FetchSpec.make({
        order: 'descending(name)',
        offset: 0,
        limit: this.totalConfigs - 1,
      });
      var result = Genai.Llm.ExternalLlm.Config.fetch(spec);
      expect(result.count).toEqual(this.totalConfigs - 1);
      expect(result.hasMore).toEqual(true);
      expect(result.spec).toEqual(spec);
      expect(result.objs[0].name).toBeGreaterThanOrEqual(result.objs.last().name);
    });

    it('return the expected result without order', function () {
      var spec = FetchSpec.make({
        offset: 0,
        limit: 100,
      });
      var result = Genai.Llm.ExternalLlm.Config.fetch(spec);
      expect(result.count).toEqual(this.totalConfigs);
      expect(result.hasMore).toEqual(false);
      expect(result.spec).toEqual(spec);
      expect(result.objs[this.totalConfigs - 1].name).toBeGreaterThanOrEqual(result.objs[0].name);
    });
  });

  describe('::fetchCount', function () {
    it('return the expected count using a filter', function () {
      var spec = FetchSpec.make({
        filter: 'contains(lowerCase(string(name)), "testConfig")',
      });
      var count = Genai.Llm.ExternalLlm.Config.fetchCount(spec);
      expect(count).toEqual(1);
    });
  });

  describe('::setFromSpec', function () {
    beforeAll(function () {
      this.specUpdate = Genai.Llm.CredentialSpec.make({
        name: 'awsTestConfig',
        provider: Genai.Llm.CredentialProviderEnum.AWS_BEDROCK,
        authFields: {
          accessKeyId: { value: 'accessKeyIdValueUpdated', secret: true },
          secretAccessKey: { value: 'secretAccessKeyValueUpdated', secret: true },
          endpoint: { value: 'endpointValueUpdated', secret: false },
          region: { value: 'regionValueUpdated', secret: false },
        },
      });
    });

    afterAll(function () {
      Genai.Llm.ExternalLlm.Config.deleteConfig(Genai.Llm.CredentialProviderEnum.AWS_BEDROCK, 'awsTestConfig');
    });

    it('create a new aws config', function () {
      var spec = Genai.Llm.CredentialSpec.make({
        name: 'awsTestConfig',
        provider: Genai.Llm.CredentialProviderEnum.AWS_BEDROCK,
        authFields: {
          accessKeyId: { value: 'accessKeyIdValue', secret: true },
          secretAccessKey: { value: 'secretAccessKeyValue', secret: true },
          endpoint: { value: 'endpointValue', secret: false },
          region: { value: 'regionValue', secret: false },
        },
      });
      Genai.Llm.ExternalLlm.Config.setFromSpec(spec);
      var genaiCoreConfig = GenaiCore.Llm.Bedrock.Auth.forConfigKey(spec.name);
      expect(Genai.Llm.AwsBedrock.Config.forConfigKey(spec.name).configValue('region')).toEqual('regionValue');
      expect(Genai.Llm.AwsBedrock.Config.forConfigKey(spec.name).secretValue('accessKeyId')).toEqual(
        'accessKeyIdValue'
      );
      expect(genaiCoreConfig.awsAccessKeyId).toEqual('accessKeyIdValue');
      expect(genaiCoreConfig.awsRegion).toEqual('regionValue');
    });

    it('update an existing aws config', function () {
      Genai.Llm.ExternalLlm.Config.setFromSpec(this.specUpdate, true); // overwrite = true for update
      var genaiCoreConfig = GenaiCore.Llm.Bedrock.Auth.forConfigKey(this.specUpdate.name);
      expect(Genai.Llm.AwsBedrock.Config.forConfigKey(this.specUpdate.name).configValue('region')).toEqual(
        'regionValueUpdated'
      );
      expect(Genai.Llm.AwsBedrock.Config.forConfigKey(this.specUpdate.name).secretValue('accessKeyId')).toEqual(
        'accessKeyIdValueUpdated'
      );
      expect(genaiCoreConfig.awsAccessKeyId).toEqual('accessKeyIdValueUpdated');
      expect(genaiCoreConfig.awsRegion).toEqual('regionValueUpdated');
    });

    it('should throw an error when a config with the same name already exists', function () {
      expect(() => {
        Genai.Llm.ExternalLlm.Config.setFromSpec(this.specUpdate);
      }).toThrowError(/The name already exists/);
    });
  });

  describe('::deleteConfig', function () {
    beforeAll(function () {
      this.expectedTextList = [
        'This credential is currently in use by models',
        'A default configuration cannot be deleted.',
      ];
    });

    it('return an error if we try to delete the default config', function () {
      var result = Genai.Llm.ExternalLlm.Config.deleteConfig('Genai.Llm.OpenAI.Config', 'Genai.Llm.OpenAI.Config');
      expect(result.success).toEqual(false);
      expect(result.error).toEqual('A default configuration cannot be deleted.');
    });

    it('return an error if we try to delete a credential with model dependencies', function () {
      var credential = Genai.Llm.ExternalLlm.Config.fetch().objs.filter((e) => {
        return e.models.length > 0;
      })[0];
      var result = Genai.Llm.ExternalLlm.Config.deleteConfig(credential.providerType, credential.realName);
      expect(result.success).toEqual(false);
      TestApi.checkStringMatches(result.error, this.expectedTextList, false);
    });

    it('return an error if we try to delete a seed config', function () {
      var result = Genai.Llm.ExternalLlm.Config.deleteConfig('Genai.Llm.OpenAI.Config', 'batch');
      expect(result.success).toEqual(false);
      expect(result.error).toEqual('A seed configuration cannot be deleted.');
    });

    it('delete a config', function () {
      var result = Genai.Llm.ExternalLlm.Config.deleteConfig('Genai.Llm.OpenAI.Config', 'testConfig');
      expect(result.success).toEqual(true);
      expect(result.error).toEqual(null);
      expect(Genai.Llm.OpenAI.Config.forConfigKey('testConfig')).toBeNull();
    });
  });

  describe('::verifyCredential', function () {
    beforeAll(function () {
      this.awsAuth = Genai.Llm.AwsBedrock.Config.getConfig();
      this.awsSecrets = Genai.PrivilegedAction.getAwsBedrockConfigSecret(this.awsAuth);
      this.specAws = Genai.Llm.CredentialSpec.make({
        name: 'awsTestConfig',
        provider: Genai.Llm.CredentialProviderEnum.AWS_BEDROCK,
        authFields: {
          accessKeyId: { value: this.awsSecrets.accessKeyId, secret: true },
          secretAccessKey: { value: this.awsSecrets.secretAccessKey, secret: true },
          endpoint: { value: this.awsAuth.endpoint, secret: false },
          region: { value: this.awsAuth.region, secret: false },
        },
      });

      this.azureAuth = Genai.Llm.OpenAI.Config.getConfig();
      this.azureSecrets = Genai.PrivilegedAction.getOpenAiConfigSecret(this.azureAuth);
      this.specAzure = Genai.Llm.CredentialSpec.make({
        name: 'azureTestConfig',
        provider: Genai.Llm.CredentialProviderEnum.AZURE,
        authFields: {
          apiVersion: { value: this.azureAuth.apiVersion, secret: false },
          apiKey: { value: this.azureSecrets.apiKey, secret: true },
          apiBase: { value: this.azureAuth.apiBase, secret: false },
          apiType: { value: this.azureAuth.apiType, secret: false },
        },
      });

      this.gcpAuth = Genai.Llm.Gcp.Config.getConfig();
      this.gcpSecrets = Genai.PrivilegedAction.getGcpPalmConfigSecret(this.gcpAuth);
      this.specGcp = Genai.Llm.CredentialSpec.make({
        name: 'gcpTestConfig',
        provider: Genai.Llm.CredentialProviderEnum.VERTEX_AI,
        authFields: {
          project: { value: this.gcpAuth.project, secret: false },
          location: { value: this.gcpAuth.location, secret: false },
          serviceAccountInfo: { value: this.gcpSecrets.serviceAccountInfo, secret: true },
        },
      });

      this.specOther = Genai.Llm.CredentialSpec.make({
        name: 'otherTestConfig',
        provider: 'Genai.TestLlmConfig',
        authFields: {},
      });

      this.specWithoutAuthFields = Genai.Llm.CredentialSpec.make({
        name: 'noAuthFieldsConfig',
        provider: Genai.Llm.CredentialProviderEnum.AWS_BEDROCK,
        authFields: {},
      });
      Genai.PyUtil.terminateAllEngines();
    });

    function testCredential(spec, llmEngine) {
      // Verify that the engine is not already running
      var start1 = DateTime.now().millis;
      var result1 = Genai.Llm.verifyCredential(spec);
      var end1 = DateTime.now().millis;
      expect(result1).toEqual(true);

      // Verify that the engine is now running
      expect(llmEngine.isRunning()).toBeTrue();
      var start2 = DateTime.now().millis;
      var result2 = Genai.Llm.verifyCredential(spec);
      var end2 = DateTime.now().millis;

      // Verify that the engine is still running
      expect(llmEngine.isRunning()).toBeTrue();
      expect(result2).toEqual(true);
      expect(end2 - start2).toBeLessThanOrEqual(end1 - start1);
    }

    it('return true for a valid credential AWS', function () {
      testCredential(this.specAws, Genai.Llm.AwsBedrock);
    });

    it('return true for a valid credential Azure Open AI', function () {
      testCredential(this.specAzure, Genai.Llm.AzureOpenAI);
    });

    it('return true for a valid credential GCP', function () {
      testCredential(this.specGcp, Genai.Llm.Gcp);
    });

    it('return error for an invalid provider', function () {
      expect(function () {
        Genai.Llm.verifyCredential(this.specOther);
      }).toThrowError();
    });

    it('return error for a credential without auth fields', function () {
      expect(function () {
        Genai.Llm.verifyCredential(this.specWithoutAuthFields);
      }).toThrowError();
    });
  });

  describe('::verifyLlm', function () {
    beforeAll(function () {
      this.ModelConfigAzure = Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey('azureGpt4o');
      this.ModelConfigGcp = Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey('gemini_flash_2_0');
      this.ModelConfigAws = Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey('awsBedrock_claude_v3_5_sonnet');
    });

    it('return true for a valid Azure LLM', function () {
      var spec = Genai.ModelConfigSpec.make({
        name: 'testConfigAzure',
        credential: { provider: 'Gpt' },
        llmKwargs: this.ModelConfigAzure.llmKwargs,
      });

      var result = Genai.Llm.verifyLlm(spec);
      expect(result).toEqual(true);
    });

    it('return true for a valid Gcp LLM', function () {
      var spec = Genai.ModelConfigSpec.make({
        name: 'testConfigGcp',
        credential: { provider: 'Gemini' },
        llmKwargs: this.ModelConfigGcp.llmKwargs,
      });

      var result = Genai.Llm.verifyLlm(spec);
      expect(result).toEqual(true);
    });

    it('return true for a valid Aws LLM', function () {
      var spec = Genai.ModelConfigSpec.make({
        name: 'testConfigAws',
        credential: { provider: 'AwsBedrock' },
        llmKwargs: this.ModelConfigAws.llmKwargs,
      });

      var result = Genai.Llm.verifyLlm(spec);
      expect(result).toEqual(true);
    });

    it('return false for an invalid LLM', function () {
      var spec = Genai.ModelConfigSpec.make({
        name: 'testConfig',
        credential: { provider: 'Gpt' },
        llmKwargs: { model_name: 'invalid-model-name' },
      });

      var result = Genai.Llm.verifyLlm(spec);
      expect(result).toEqual(false);
    });
  });
});
