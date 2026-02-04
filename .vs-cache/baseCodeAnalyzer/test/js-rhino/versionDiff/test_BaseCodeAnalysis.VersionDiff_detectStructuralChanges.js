/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.VersionDiff_detectStructuralChanges';

function movePkg({ appInfo, typeName, fromPkgName, toPkgName }) {
  const typeInfo = appInfo.typeInfos.get(typeName);
  const newTypeInfo = typeInfo.withPkgName(toPkgName);
  return appInfo.withTypeInfos(appInfo.typeInfos.set(typeName, newTypeInfo));
}

describe(testName, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(testName);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('', function () {
    beforeAll(function () {
      void 0;
    });

    it('', function () {
      void 0;
    });
  });
});
