/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UiSdlStyleImport';

describe(filename, function () {
  describe('#generateImport', function () {
    beforeAll(function () {
      this.defaultTheme = 'C3DefaultDark';
      this.defaultDensity = 'C3DefaultDenseDensity';
      this.themeId = UiSdlConfig.inst().style.theme?.id;
      this.densityId = UiSdlConfig.inst().style.density?.id;
      this.generateImports = (theme, density) => {
        return `import { ${theme}, ${density} } from '@c3/ui/themes';\n`;
      };
    });

    describe('with a UiSdlSite component', function () {
      beforeAll(function () {
        this.metadata = {
          type: 'UiSdlSite',
        };
      });

      describe('with UiSdlConfig theme and density set', function () {
        beforeAll(function () {
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.themeId, this.densityId));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.themeId, this.densityId]));
        });
      });

      describe('with UiSdlConfig theme only set', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.density', null);
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.density', this.densityId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.themeId, this.defaultDensity));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.themeId, this.defaultDensity]));
        });
      });

      describe('with UiSdlConfig density only set', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', null);
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', this.themeId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.defaultTheme, this.densityId));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.defaultTheme, this.densityId]));
        });
      });

      describe('with UiSdlConfig with neither theme or density set', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', null);
          UiSdlConfig.inst().setConfigValue('style.density', null);
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', this.themeId);
          UiSdlConfig.inst().setConfigValue('style.density', this.densityId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.defaultTheme, this.defaultDensity));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.defaultTheme, this.defaultDensity]));
        });
      });

      describe('with UiSdlConfig with theme and density set with dot separated names', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', 'SDL.DefaultLight');
          UiSdlConfig.inst().setConfigValue('style.density', 'SDL.DefaultDense');
          this.newMode = 'SDL_DefaultLight';
          this.newDensity = 'SDL_DefaultDense';
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', this.themeId);
          UiSdlConfig.inst().setConfigValue('style.density', this.densityId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.newMode, this.newDensity));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.newMode, this.newDensity]));
        });
      });
    });

    describe('with a connected UiSdlSite component', function () {
      beforeAll(function () {
        this.metadata = {
          type: 'UiSdlConnected<UiSdlSite>',
        };
      });

      describe('with UiSdlConfig theme and density set', function () {
        beforeAll(function () {
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.themeId, this.densityId));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.themeId, this.densityId]));
        });
      });

      describe('with UiSdlConfig theme only set', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.density', null);
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.density', this.densityId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.themeId, this.defaultDensity));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.themeId, this.defaultDensity]));
        });
      });

      describe('with UiSdlConfig density only set', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', null);
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', this.themeId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.defaultTheme, this.densityId));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.defaultTheme, this.densityId]));
        });
      });

      describe('with UiSdlConfig with neither theme or density set', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', null);
          UiSdlConfig.inst().setConfigValue('style.density', null);
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', this.themeId);
          UiSdlConfig.inst().setConfigValue('style.density', this.densityId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.defaultTheme, this.defaultDensity));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.defaultTheme, this.defaultDensity]));
        });
      });
    });

    describe('with any other component', function () {
      beforeAll(function () {
        this.metadata = {
          type: 'UiSdlDataGrid',
        };
        this.result = UiSdlStyleImport.generateImport(this.metadata);
      });

      describe('with UiSdlConfig theme and density set', function () {
        beforeAll(function () {
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.themeId, this.densityId));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.themeId, this.densityId]));
        });
      });

      describe('with UiSdlConfig theme only set', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.density', null);
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.density', this.densityId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.themeId, this.defaultDensity));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.themeId, this.defaultDensity]));
        });
      });

      describe('with UiSdlConfig density only set', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', null);
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', this.themeId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.defaultTheme, this.densityId));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.defaultTheme, this.densityId]));
        });
      });

      describe('with UiSdlConfig with neither theme or density set', function () {
        beforeAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', null);
          UiSdlConfig.inst().setConfigValue('style.density', null);
          this.result = UiSdlStyleImport.generateImport(this.metadata);
        });

        afterAll(function () {
          UiSdlConfig.inst().setConfigValue('style.theme', this.themeId);
          UiSdlConfig.inst().setConfigValue('style.density', this.densityId);
        });

        it('returns the correct import', function () {
          expect(this.result.imports).toEqual(this.generateImports(this.defaultTheme, this.defaultDensity));
        });

        it('returns the correct importNames', function () {
          expect(this.result.importNames).toEqual(jasmine.arrayContaining([this.defaultTheme, this.defaultDensity]));
        });
      });
    });
  });
});
