/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlThemeLoader', function () {
  describe('produceAll', function () {
    beforeAll(function () {
      this.result = UiSdlThemeLoader.produceAll().files;
    });

    describe('creates a single ts files for', function () {
      describe('themes', function () {
        beforeAll(function () {
          this.styleResult = this.result['themes.ts'];
        });

        it('should have file with correct path', function () {
          expect(this.styleResult.file.url).toEqual('meta://@c3/ui/themes.ts');
        });

        it('should have the correct category', function () {
          expect(this.styleResult.category).toEqual(UiSdlMetadataFileCategory.TYPE);
        });

        it('should have the C3DefaultDark', function () {
          expect(this.styleResult.file.readString().includes('export const C3DefaultDark')).toEqual(true);
        });

        it('should have the C3DefaultLight', function () {
          expect(this.styleResult.file.readString().includes('export const C3DefaultLight')).toEqual(true);
        });

        it('should have the C3DefaultDenseDensity', function () {
          expect(this.styleResult.file.readString().includes('export const C3DefaultDenseDensity')).toEqual(true);
        });

        it('should have the C3DefaultClassicDensity', function () {
          expect(this.styleResult.file.readString().includes('export const C3DefaultClassicDensity')).toEqual(true);
        });

        it('should have the SDL.DefaultLight', function () {
          expect(this.styleResult.file.readString().includes('export const SDL_DefaultLight')).toEqual(true);
        });
      });
    });
  });
});
