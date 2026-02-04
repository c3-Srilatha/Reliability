/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlStylesLoader', function () {
  describe('produceAll', function () {
    beforeAll(function () {
      this.result = UiSdlStylesLoader.produceAll().files;
    });

    describe('creates ts files for', function () {
      describe('style files', function () {
        beforeAll(function () {
          this.styleResult = this.result['BundlerTestCss.scss'];
        });

        it('should have file with correct path', function () {
          expect(this.styleResult.file.url).toEqual('meta://uiInfrastructure/test/src/ui/styling/BundlerTestCss.scss');
        });

        it('should have the correct category', function () {
          expect(this.styleResult.category).toEqual(UiSdlMetadataFileCategory.TYPE);
        });

        describe('nested', function () {
          beforeAll(function () {
            this.styleResult = this.result['NestedBundlerTestCss.scss'];
          });

          it('should have file with correct path', function () {
            expect(this.styleResult.file.url).toEqual(
              'meta://uiInfrastructure/test/src/ui/styling/nestedFolder/NestedBundlerTestCss.scss',
            );
          });

          it('should have the correct category', function () {
            expect(this.styleResult.category).toEqual(UiSdlMetadataFileCategory.TYPE);
          });
        });
      });
    });
  });
});
