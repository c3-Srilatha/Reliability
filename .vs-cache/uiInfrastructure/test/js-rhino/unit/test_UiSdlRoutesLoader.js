/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlRoutesLoader', function () {
  describe('produceAll', function () {
    beforeAll(function () {
      this.result = UiSdlRoutesLoader.produceAll().files;
    });

    describe('creates ts files for', function () {
      describe('routes', function () {
        beforeAll(function () {
          this.routeResult = this.result['routes.ts'];
        });

        it('should have file with correct path', function () {
          expect(this.routeResult.file.url).toEqual('meta://uiInfrastructure/src/routes.ts');
        });

        it('should have the correct category', function () {
          expect(this.routeResult.category).toEqual(UiSdlMetadataFileCategory.CORE);
        });

        it('should have correct import', function () {
          expect(this.routeResult.file.readString()).toMatch("import { UiSdlRoute } from '@c3/types';");
        });

        it('should have correct export', function () {
          expect(this.routeResult.file.readString()).toMatch('export default routes;');
        });
      });
    });
  });

  describe('getRoutes', function () {
    beforeAll(function () {
      this.routes = UiSdlRoutesLoader.getRoutes();
    });

    it('should return targetModuleName', function () {
      expect(
        this.routes.findAny(function (route) {
          return route.targetModuleName == 'BundlerTestApp';
        }),
      ).toBeDefined();
    });

    it('should return targetPageName', function () {
      expect(
        this.routes.findAny(function (route) {
          return route.targetPageName == 'Dashboard';
        }),
      ).toBeDefined();
    });

    it('should return urlPath', function () {
      expect(
        this.routes.findAny(function (route) {
          return route.urlPath == '/bundler-test-app/dashboard';
        }),
      ).toBeDefined();
    });

    it('should return pageTitle', function () {
      expect(
        this.routes.findAny(function (route) {
          return route.pageTitle == 'Dashboard';
        }),
      ).toBeDefined();
    });
  });
});
