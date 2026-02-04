/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlTypeDataSpecsSourceCodeLoader', function () {
  beforeAll(function () {
    this.result = UiSdlTypeDataSpecsSourceCodeLoader.produceAll().files;
    this.generateFileName = function (componentTypeName) {
      return 'typeDataSpecs/' + componentTypeName + 'DataSpecs.ts';
    };
  });

  describe('UiSdlComponent types', function () {
    describe('that are abstract', function () {
      it('should not be included', function () {
        expect(this.result[this.generateFileName('BundlerAbstractUiComponent')]).not.toBeDefined();
      });
    });

    describe('that are ReactComponent', function () {
      it('should not be included', function () {
        expect(this.result[this.generateFileName('BundlerTestAppChartReact')]).not.toBeDefined();
      });
    });

    describe('that do not have uiSdlDataSpec annotation', function () {
      it('should have almost empty file content', function () {
        expect(this.result[this.generateFileName('BundlerTestAppChart')].file.readString()).toContain(
          'export const dataSpecs = [];',
        );
      });
    });

    describe('that has uiSdlDataSpec annotation fields', function () {
      beforeAll(function () {
        this.localResult = this.result[this.generateFileName('BundlerTestAppFormGrid')];
        this.generatedFile = this.localResult.file;
        this.generatedFileContent = this.generatedFile.readString();
      });

      it('should be included', function () {
        expect(this.localResult).toBeDefined();
      });

      it('should have the correct path', function () {
        expect(this.generatedFile.url).toEqual(
          'meta://uiInfrastructure/src/dataSpecs/BundlerTestAppFormGridDataSpecs.ts',
        );
      });

      it('should have the correct category', function () {
        expect(this.localResult.category).toEqual(UiSdlMetadataFileCategory.TYPE_DATA_SPEC);
      });

      it('should have import statement for data spec type', function () {
        expect(this.generatedFileContent).toMatch(
          /^import \* as BundlerTestAppFormGridDataSpec from "@c3\/ui\/BundlerTestAppFormGridDataSpec";/m,
        );
      });

      it('should have object declaration with annotation properties', function () {
        expect(this.generatedFileContent).toContain(
          [
            'export const dataSpecs = [',
            '  {',
            '    dataSpecFieldName: "dataSpec",',
            '    dataSpecType: BundlerTestAppFormGridDataSpec,',
            '    dataDestinationFieldName: "dataCollection",',
            '  },',
            ']',
          ].join('\n'),
        );
      });
    });
  });
});
