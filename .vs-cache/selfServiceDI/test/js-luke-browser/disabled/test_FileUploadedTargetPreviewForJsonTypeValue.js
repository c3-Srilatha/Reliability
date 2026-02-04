/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_FileUploadedTargetPreviewForJsonTypeValue';

LukeBrowser.runJasmine(filename, function () {
  // This test only contains the test cases for testing this functionality on the selfServiceDI landing page. The rest of the file-upload related test cases were migrated to test_ErdFileUploadedTargetPreviewForJsonTypeValue.js
  describe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.fileName = 'AllDataTypesJson.csv';
      this.name = 'FileUploadedTargetPreviewForJsonTypeValue';
      SelfServiceDITestUtil.uploadFiles([this.fileName], this.name);
      this.client = LukeBrowser.init();
      this.multiStepComponent = LukeTestMultiStepComponent.make({ luke: this.client }, true);
      this.informationCardList = LukeTestInformationCardList.make({ luke: this.client }, true);
      this.fileUpload = LukeTestUiSdlFileUpload.make({ luke: this.client }, true);
      this.tooltipText = '{ type: string, component: { name: { type: string, value: Dane, }, descriptionText: Dane } }';
      this.presentationalTreeView = LukeTestPresentationalTreeView.make({ luke: this.client }, true);
      this.filesGrid = LukeTestFileUploadGrid.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-filedatagrid' },
        true
      );
      this.targetPreviewGrid = LukeTestUiSdlDataGrid.make(
        {
          luke: this.client,
          parentSelector: '.c3-metadata-id-selfservicedi-externalsourcepreviewdatagrid',
        },
        true
      );
      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          multiStepComponent: this.multiStepComponent,
          informationCardList: this.informationCardList,
          fileUpload: this.fileUpload,
        },
        true
      );
      this.selfServiceDIPage.openPage();
      this.client.wait(3);
    });

    afterAll(function () {
      SelfServiceDITestUtil.cleanup();
      this.client.closeWindow();
    });

    it('page is rendered', function () {
      this.selfServiceDIPage.rendered();
    });

    describe('landing page', function () {
      it('tree node is rendered', function () {
        this.presentationalTreeView.treeNodeSelector('Canonical').assert('toExist');
      });

      describe('expands presentational tree node', function () {
        beforeAll(function () {
          this.presentationalTreeView.expandTreeNode('Canonical');
        });

        it('testForTargetPreviewFlow tree node is rendered', function () {
          this.presentationalTreeView.treeNodeSelector('Canonical.' + this.name).assert('toExist');
        });
      });

      describe('clicks on testForTargetPreviewFlow tree node first row has the correct values', function () {
        beforeAll(function () {
          this.presentationalTreeView.treeNodeClick('Canonical.' + this.name);
        });

        it('for avgLikes', function () {
          this.targetPreviewGrid.cellText(1, 1).assert(LukeAssertionMatcher.TO_EQUAL, '1,200');
        });

        it('for followers', function () {
          this.targetPreviewGrid.cellText(1, 2).assert(LukeAssertionMatcher.TO_EQUAL, '1,500');
        });

        it('for lastUpdated', function () {
          this.targetPreviewGrid
            .cellText(1, 3)
            .assert(LukeAssertionMatcher.TO_EQUAL, 'Mon Jun 10 2024 13:17:57 GMT-0700');
        });

        it('for nameAlias', function () {
          this.targetPreviewGrid.cellText(1, 4).assert(LukeAssertionMatcher.TO_EQUAL, this.tooltipText);
        });

        it('for premiumSubscriber', function () {
          this.targetPreviewGrid
            .cellText(1, 5)
            .transformToString()
            .then(function (client, text) {
              return text === 'false';
            })
            .assert(LukeAssertionMatcher.TO_EQUAL, true);
        });
      });

      describe('clicking truncated alias name', function () {
        beforeAll(function () {
          this.targetPreviewGrid.clickCellAction(1, 4, ['.tooltip-grid-cell-content.c3-truncate']);
        });

        it('should show the correct text', function () {
          this.client.search('.c3-tooltip').text().assert('toContain', this.tooltipText);
        });
      });
    });
  });
});
