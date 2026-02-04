/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlEnumsSourceCodeLoader', function () {
  describe('#produceAll', function () {
    beforeAll(function () {
      this.result = UiSdlEnumsSourceCodeLoader.produceAll(
        UiSdlEnumsSourceCodeLoader.make({
          rootPackage: C3.pkg(),
          enumsToGenerate: {
            BundlerTestAppEnumType: true,
            BundlerTestAppNumericEnumType: true,
            'BundlerTestAppGrid.Status': true,
          },
        }),
      ).files;
    });

    describe('generates TS source files of', function () {
      describe('string enum types', function () {
        beforeAll(function () {
          this.typeImpl = this.result.get('BundlerTestAppEnumType.ts').file.readString();
        });

        it('correctly for field without value', function () {
          expect(this.typeImpl).toContain('NO_VALUE = "NO_VALUE"');
        });

        it('correctly for field with value', function () {
          expect(this.typeImpl).toContain('WITH_VALUE = "withValue"');
        });
      });

      describe('numeric enum types', function () {
        beforeAll(function () {
          this.typeImpl = this.result.get('BundlerTestAppNumericEnumType.ts').file.readString();
        });

        it('correctly for field with numeric value', function () {
          expect(this.typeImpl).toContain('FIRST = 1');
        });
      });

      describe('enum types with dot notation in type name', function () {
        beforeAll(function () {
          this.typeImpl = this.result.get('BundlerTestAppGrid.Status.ts').file.readString();
        });

        it('correctly for default export value', function () {
          expect(this.typeImpl).toMatch(/enum Status[\s\S]*export default Status/);
        });
      });
    });
  });

  describe('#produceBatch', function () {
    beforeAll(function () {
      this.result = UiSdlEnumsSourceCodeLoader.produceBatch({
        BundlerTestAppEnumType: true,
        'BundlerTestAppGrid.Status': true,
      }).fileDetails;
    });

    it('generates correct file path for first file', function () {
      expect(this.result['BundlerTestAppEnumType.ts'].filePathInWorkingDir).toBe(
        'node_modules/@c3/ui/BundlerTestAppEnumType.ts',
      );
    });

    it('generates correct file path for second file', function () {
      expect(this.result['BundlerTestAppGrid.Status.ts'].filePathInWorkingDir).toBe(
        'node_modules/@c3/ui/BundlerTestAppGrid.Status.ts',
      );
    });

    it('generates correct file content', function () {
      expect(this.result['BundlerTestAppEnumType.ts'].fileContent).toContain('NO_VALUE');
    });
  });
});
