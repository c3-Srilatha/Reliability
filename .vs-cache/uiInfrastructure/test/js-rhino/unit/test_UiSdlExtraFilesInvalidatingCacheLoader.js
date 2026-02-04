/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlExtraFilesInvalidatingCacheLoader', function () {
  describe('#produceAll', function () {
    beforeAll(function () {
      this.result = UiSdlExtraFilesInvalidatingCacheLoader.produceAll().files;
    });

    it('should not copy package.json', function () {
      expect(Pkg.file('meta://uiInfrastructure/test/ui/c3/src/package.json')).not.toEqual(null);
      expect(Pkg.file('meta://uiInfrastructure/test/ui/c3/src/extra/package.json')).not.toEqual(null);
      expect(this.result['package.json']).toEqual(null);
    });

    it('should not copy package-lock.json', function () {
      expect(Pkg.file('meta://uiInfrastructure/test/ui/c3/src/package-lock.json')).not.toEqual(null);
      expect(Pkg.file('meta://uiInfrastructure/test/ui/c3/src/extra/package-lock.json')).not.toEqual(null);
      expect(this.result['package-lock.json']).toEqual(null);
    });

    it('should include js-webpack_c3.json', function () {
      expect(this.result['js-webpack_c3.json']).not.toEqual(null);
    });

    it('should include cssLibrary', function () {
      expect(this.result['cssLibrary']).not.toEqual(null);
    });

    it('should include uiSdlReact', function () {
      expect(this.result['uiSdlReact']).not.toEqual(null);
    });

    it('should include configs.json', function () {
      expect(this.result['configs.json']).not.toEqual(null);
    });

    it('should not include files from customComponents or customInstances directories', function () {
      const files = Object.keys(this.result);
      const customFiles = files.filter((file) => file.includes('customComponents') || file.includes('customInstances'));
      expect(customFiles.length).toEqual(0);
    });

    it('should include files in ui/c3/src/**', function () {
      expect(this.result['TestCustomComponent.tsx']).not.toEqual(null);
    });

    it('should include ui/c3/config.js', function () {
      expect(this.result['ui/c3/config.js']).not.toEqual(null);
    });
  });
});
