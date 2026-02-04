/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiPrivilegedAction';

var bucketName = 'testBucket';
var s3BucketName = 'c3--test-genai-write';
var gcsRootUrl = C3.FileSystem.gcs().mountUrl('/') + bucketName;
var s3RootUrl = C3.FileSystem.s3().mountUrl('/') + bucketName;

describe(filename, function () {
  beforeAll(function () {
    TestApi.setAwsS3BucketCreds([s3BucketName]);
    this.ctx = TestApi.createContext(filename);
    this.mountName = 'testMount';
    this.gcsCredentials = GcpCredentials.make({
      accountEmail: 'test',
      secretKey: 'test',
      accountId: 'test',
      accessKey: 'test',
    });
    this.awsCredentials = AwsCredentials.make({
      region: 'test-region',
      accessKey: 'test-access-key',
      secretKey: 'test-secret-key',
    });

    this.adminUser = TestIdp.createTestUser(filename + '_adminUser', 'Password1', ['Genai.AdminUser']);
    this.basicUser = TestIdp.createTestUser(filename + '_basicUser', 'Password1', ['Genai.BasicUserTest']);
  });

  afterAll(function () {
    TestIdp.removeUser(this.adminUser);
    TestIdp.removeUser(this.basicUser);
    TestApi.teardown(this.ctx);
  });

  it('Genai.PrivilegedAction should have the correct fingerprint', function () {
    var fingerprint = Pkg.fileFingerprint('/genAiBase/src/privilegedActions/Genai.PrivilegedAction.js');
    expect(fingerprint)
      .withContext(
        'Genai.PrivilegedAction fingerprint does not match, please update PrivilegedAction.java and then this test with the new fingerprint'
      )
      .toEqual('735476abee092c1b95c81ff2dfab69c2');
  });

  describe('#setFileSystemMount', function () {
    [gcsRootUrl, s3RootUrl].forEach(function (rootUrl) {
      it(
        'should throw error for admin user when it tries to setMount on filesystem with rootUrl: ' +
          rootUrl +
          ' without privileged action',
        function () {
          TestRunner.asUser(
            this.adminUser,
            Lambda.fromJsFunc(function (rootUrl, mountName) {
              expect(function () {
                C3.FileSystem.fromUrlOrEncodedPath(rootUrl).setMount(mountName, rootUrl, ConfigOverride.APP);
              }).toThrowError(/is not authorized/);
            }).partiallyCall([rootUrl, this.mountName])
          );
        }
      );

      it(
        'should not throw error for admin user when it tries to setMount on filesystem with rootUrl: ' +
          rootUrl +
          ' with privileged action',
        function () {
          var mountsLengthBefore = C3.FileSystem.fromUrlOrEncodedPath(rootUrl).mounts().size;
          TestRunner.asUser(
            this.adminUser,
            Lambda.fromJsFunc(function (rootUrl, mountName) {
              expect(function () {
                Genai.PrivilegedAction.setFileSystemMount(rootUrl, mountName);
              }).not.toThrowError();
            }).partiallyCall([rootUrl, this.mountName])
          );
          var mountsLengthAfter = C3.FileSystem.fromUrlOrEncodedPath(rootUrl).mounts().size;
          expect(mountsLengthAfter).toEqual(mountsLengthBefore + 1);
        }
      ).pend('GEN-13376');
    });
  });

  describe('#setCredentialsForResource for gcp', function () {
    it('should throw error for admin user when it tries to set credentials on filesystem without privileged action', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (bucketName, credentials) {
          expect(function () {
            GcpResource.setCredentialsForResourceName(bucketName, credentials, ConfigOverride.APP);
          }).toThrowError();
        }).partiallyCall([bucketName, this.gcsCredentials])
      );
    });

    it('should not throw error for admin user when it tries to set credentials on filesystem without privileged action', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (rootUrl, bucketName, credentials) {
          expect(function () {
            Genai.PrivilegedAction.setCredentialsForResource(rootUrl, bucketName, credentials);
          }).not.toThrowError();
        }).partiallyCall([gcsRootUrl, bucketName, this.gcsCredentials])
      );
    });
  });

  describe('#setCredentialsForResource for s3', function () {
    it('should not throw error for admin user when it tries to set credentials on filesystem without privileged action', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (rootUrl, bucketName, credentials) {
          expect(function () {
            Genai.PrivilegedAction.setCredentialsForResource(rootUrl, bucketName, credentials);
          }).not.toThrowError();
        }).partiallyCall([s3RootUrl, bucketName, this.awsCredentials])
      );
    });
  });

  describe('#removeFileSystemMount', function () {
    [gcsRootUrl, s3RootUrl].forEach(function (rootUrl) {
      it(
        'should throw error for admin user when it tries to removeMount on filesystem with rootUrl: ' +
          rootUrl +
          ' without privileged action',
        function () {
          TestRunner.asUser(
            this.adminUser,
            Lambda.fromJsFunc(function (rootUrl, mountName) {
              expect(function () {
                C3.FileSystem.fromUrlOrEncodedPath(rootUrl).removeMount(mountName, ConfigOverride.APP);
              }).toThrowError();
            }).partiallyCall([rootUrl, this.mountName])
          );
        }
      );

      it(
        'should not throw error for admin user when it tries to removeMount on filesystem with rootUrl with privileged action: ' +
          rootUrl +
          ' without privileged action',
        function () {
          var mountsLengthBefore = C3.FileSystem.fromUrlOrEncodedPath(rootUrl).mounts().size;
          TestRunner.asUser(
            this.adminUser,
            Lambda.fromJsFunc(function (rootUrl, mountName) {
              expect(function () {
                Genai.PrivilegedAction.removeFileSystemMount(rootUrl, mountName);
              }).not.toThrowError();
            }).partiallyCall([rootUrl, this.mountName])
          );
          var mountsLengthAfter = C3.FileSystem.fromUrlOrEncodedPath(rootUrl).mounts().size;
          expect(mountsLengthAfter).toEqual(mountsLengthBefore - 1);
        }
      ).pend('GEN-13376');
    });
  });

  describe('#getDefaultCredentials for s3', function () {
    it('should throw error for admin user when it tries to get default credentials on filesystem', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (rootUrl) {
          expect(function () {
            C3.FileSystem.fromUrlOrEncodedPath(rootUrl).cloudProvider().defaultCredentials();
          }).toThrowError();
        }).partiallyCall([s3RootUrl])
      );
    });

    it('should not throw error for admin user when it tries to get default credentials on filesystem with privileged actions', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (rootUrl) {
          expect(function () {
            Genai.PrivilegedAction.getDefaultCredentials(rootUrl);
          }).not.toThrowError();
        }).partiallyCall([s3RootUrl])
      );
    });
  });

  describe('#getCloudResource for s3', function () {
    it('should throw error for admin user when it tries to get the cloud resource without privileged action', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (bucketName) {
          expect(function () {
            AwsS3Bucket.forResourceName(bucketName);
          }).toThrowError();
        }).partiallyCall([s3BucketName])
      );
    });

    it('should not throw error for admin user when it tries to get the cloud resource with privileged action', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (rootUrl, bucketName) {
          expect(function () {
            Genai.PrivilegedAction.getCloudResource(rootUrl, bucketName);
          }).not.toThrowError();
        }).partiallyCall([s3RootUrl, s3BucketName])
      );
    }).pend('GEN-13376');
  });

  describe('#getOpenAiConfigSecret', function () {
    it('should be able to get secret using privileged action', function () {
      TestApi.setOpenAiApiKey();
      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function () {
          expect(Genai.PrivilegedAction.getOpenAiConfigSecret(Genai.Llm.OpenAI.Config.inst()).apiKey).toBeDefined();
        }).partiallyCall([])
      );

      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function () {
          expect(function () {
            TestApi.testCallToSetupOpenAiCredentials();
          }).not.toThrowError();
        }).partiallyCall([])
      );
    });
  });

  describe('#getAwsBedrockConfigSecret', function () {
    it('should be able to get secret using privileged action', function () {
      TestApi.setAwsBedrockKeys();
      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function () {
          var awsKeys = Genai.PrivilegedAction.getAwsBedrockConfigSecret(Genai.Llm.AwsBedrock.Config.inst());
          expect(awsKeys.accessKeyId).toBeDefined();
          expect(awsKeys.secretAccessKey).toBeDefined();
        }).partiallyCall([])
      );
    });
  });

  describe('#getGcpPalmConfigSecret', function () {
    it('should be able to get secret using privileged action', function () {
      TestApi.setGcpKey();
      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function () {
          expect(
            Genai.PrivilegedAction.getGcpPalmConfigSecret(Genai.Llm.Gcp.Config.inst()).serviceAccountInfo
          ).toBeDefined();
        }).partiallyCall([])
      );
    });
  });
});
