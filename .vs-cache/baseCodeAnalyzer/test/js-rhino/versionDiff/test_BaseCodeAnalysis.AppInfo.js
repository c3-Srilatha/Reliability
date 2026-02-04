/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.AppInfo';

describe(testName, function () {
  beforeAll(function () {
    this.appInfo84Json = JSON.stringify({
      timestamp: DateTime.now().toString(),
      mode: BaseCodeAnalyzer.CollectAppInfoMode.CUSTOM,
      serverVersion: '8.4.11+3000',
      collectedPkgNames: ['baseCodeAnalyzer'],
      pkgDependencyInfos: {
        baseCodeAnalyzer: {
          version: '8.4.1-support.1+uuid',
          isDeclared: true,
          downstreamPkgDeps: [
            'docgen',
            'testtools',
            'sourceControl',
            'codeAnalyzerLlmEndpoint',
            'jarvis',
            'documentationCompiler',
            'baseCanonicalTester',
            'platform',
          ],
        },
      },
      typeInfos: {
        TestType: {
          typeMeta: {
            name: 'TestType',
            declaredMixinRefTypes: [{ name: 'Value' }],
            metadataPath: 'meta://baseCodeAnalyzer/src/TestType.c3typ',
            declaredFieldTypes: [
              {
                name: 'testField',
                valueType: { type: 'StringType' },
              },
            ],
            package: 'baseCodeAnalyzer',
          },
          metaDeps: {
            mixins: ['Value'],
          },
        },
      },
    });

    this.ctx = TestApi.createContext(testName);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::artifactIdFor', function () {
    beforeAll(function () {
      this.artifactId = BaseCodeAnalysis.AppInfo.artifactIdFor('baseCodeAnalyzer', '8.4.1-support.1+uuid');
    });

    it('returns the artifact ID with only the major.minor.patch version', function () {
      expect(this.artifactId).toBe('app-info__baseCodeAnalyzer__8_4_1');
    });
  });

  describe('::fromJsonString', function () {
    beforeAll(function () {
      this.appInfo = BaseCodeAnalysis.AppInfo.fromJsonString(this.appInfo84Json);
    });

    it('migrates 8.4 app info to the latest server version structure before instantiating', function () {
      var testTypeMeta = this.appInfo.typeInfos.get('TestType').typeMeta;
      expect(testTypeMeta.declaredPkgPath).toBe('/baseCodeAnalyzer/src/TestType.c3typ');
      expect(testTypeMeta.package).toBe('baseCodeAnalyzer');
    });
  });

  describe('::fromFile', function () {
    beforeAll(function () {
      this.appInfo84File = TmpFileSystem.createTmpFile({ ttl: 60 * 5 })
        .writeString(this.appInfo84Json)
        .zip({ deleteOriginal: true });
      this.appInfo = BaseCodeAnalysis.AppInfo.fromFile(this.appInfo84File);
    });

    it('migrates 8.4 app info to the latest server version structure before instantiating', function () {
      var testTypeMeta = this.appInfo.typeInfos.get('TestType').typeMeta;
      expect(testTypeMeta.declaredPkgPath).toBe('/baseCodeAnalyzer/src/TestType.c3typ');
      expect(testTypeMeta.package).toBe('baseCodeAnalyzer');
    });
  });

  describe('::toFile', function () {
    beforeAll(function () {
      this.typesToGenerate = ['ChangeEntityRenameFieldRemoveFieldDeclaredSchema'];
      this.appInfo = BaseCodeAnalysis.VersionDiff.TestHelper.constructResultsSpec({
        prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
        curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
      }).prevAppInfo;

      this.appInfoFile = this.appInfo.toFile();
    });

    it('creates a zipped file with the expected name', function () {
      expect(this.appInfoFile.fileName()).toMatch(/baseCodeAnalyzer__\d_\d_\d__p\d_\d_\d.*\.json\.zip/);
    });

    it('creates a zipped file with the expected content', function () {
      expect(BaseCodeAnalysis.AppInfo.fromFile(this.appInfoFile)).toEqual(this.appInfo);
    });
  });

  describe('::isPersistable', function () {
    beforeAll(function () {
      this.typesToGenerate = ['ChangeEntityRenameFieldRemoveFieldDeclaredSchema'];
      this.appInfo = BaseCodeAnalysis.VersionDiff.TestHelper.constructResultsSpec({
        prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
        curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
      }).prevAppInfo;

      this.typeInfo = this.appInfo.typeInfos.get(this.typesToGenerate[0]);
      this.fields = this.typeInfo.typeMeta.declaredFieldTypes;
    });

    it('returns true for persistable Types', function () {
      expect(this.appInfo.isPersistable(this.typeInfo)).toBeTrue();
    });

    it('returns true for persistable fields', function () {
      expect(this.appInfo.isPersistable(this.typeInfo, this.fields[0])).toBeTrue();
    });

    it('returns false for non-persistable fields', function () {
      expect(this.appInfo.isPersistable(this.typeInfo, this.fields[4])).toBeFalse();
      expect(this.appInfo.isPersistable(this.typeInfo, this.fields[5])).toBeFalse();
      expect(this.appInfo.isPersistable(this.typeInfo, this.fields[6])).toBeFalse();
    });
  });
});
