/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlTypesysLoader', function () {
  beforeAll(function () {
    this.result = UiSdlTypesysLoader.produceAll().files;
  });

  describe('creates ts files for', function () {
    describe('Filter', function () {
      beforeAll(function () {
        this.filterResult = this.result['types/Filter.ts'];
      });

      it('should have file with correct path', function () {
        expect(this.filterResult.file.url).toEqual('meta://uiInfrastructure/src/types/Filter.ts');
      });

      it('should have the correct category', function () {
        expect(this.filterResult.category).toEqual(UiSdlMetadataFileCategory.ALL);
      });
    });

    describe('Period', function () {
      beforeAll(function () {
        this.periodResult = this.result['types/Period.ts'];
      });

      it('should have file with correct path', function () {
        expect(this.periodResult.file.url).toEqual('meta://uiInfrastructure/src/types/Period.ts');
      });

      it('should have the correct category', function () {
        expect(this.periodResult.category).toEqual(UiSdlMetadataFileCategory.ALL);
      });
    });

    describe('IstanbulCoverageFileResult', function () {
      beforeAll(function () {
        this.codeCoverageResult = this.result['types/IstanbulCoverageFileResult.ts'];
      });

      it('should have file with correct path', function () {
        expect(this.codeCoverageResult.file.url).toEqual(
          'meta://uiInfrastructure/src/types/IstanbulCoverageFileResult.ts',
        );
      });

      it('should have the correct category', function () {
        expect(this.codeCoverageResult.category).toEqual(UiSdlMetadataFileCategory.ALL);
      });
    });

    describe('typesystem', function () {
      beforeAll(function () {
        this.typesystemResult = this.result['types/typesystem.ts'];
      });

      it('should have file with correct path', function () {
        expect(this.typesystemResult.file.url).toEqual('meta://uiInfrastructure/src/types/typesystem.ts');
      });

      it('should have the correct category', function () {
        expect(this.typesystemResult.category).toEqual(UiSdlMetadataFileCategory.ALL);
      });
    });

    describe('workerTypesystem', function () {
      beforeAll(function () {
        this.workerTypeSystemResult = this.result['types/workerTypesystem.ts'];
      });

      it('should have file with correct path', function () {
        expect(this.workerTypeSystemResult.file.url).toEqual(
          'meta://uiInfrastructure/src/types/workerTypesystem.ts.ts',
        );
      });

      it('should have the correct category', function () {
        expect(this.workerTypeSystemResult.category).toEqual(UiSdlMetadataFileCategory.ALL);
      });
    });
  });
});
