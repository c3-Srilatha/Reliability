/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlComponentTypesSourceCodeLoader', function () {
  describe('produceAll', function () {
    beforeAll(function () {
      this.result = UiSdlComponentTypesSourceCodeLoader.produceAll().files;
    });

    describe('TSX source files', function () {
      it('are included for each component type', function () {
        var self = this;
        [
          'BundlerTestAppChartReact.tsx',
          'BundlerTestAppGridReact.tsx',
          'BundlerTestAppTabPanelReact.tsx',
          'BundlerTestAppTitleWithChildrenLayoutReact.tsx',
        ].forEach(function (componentPath) {
          expect(self.result.get(componentPath)).toBeDefined('No code generated for ' + componentPath);
        });
      });
    });
  });
});
