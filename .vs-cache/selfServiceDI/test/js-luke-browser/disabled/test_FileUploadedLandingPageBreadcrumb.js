/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_FileUploadedLandingPageBreadcrumb';

LukeBrowser.runJasmine(filename, function () {
  describe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.fileName = 'AllDataTypes2QuoteDoubleQuote.csv';
      this.typeName = 'fileUploadedFlowTesting';
      SelfServiceDITestUtil.uploadFiles([this.fileName], this.typeName);
      this.client = LukeBrowser.init();
      this.presentationalTreeView = LukeTestPresentationalTreeView.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-targetpreviewtreeviewsidepanel' },
        true
      );
      this.breadcrumb = LukeTestStudioBreadcrumb.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-breadcrumbs' },
        true
      );
      this.presentationalTreeView = LukeTestPresentationalTreeView.make({ luke: this.client }, true);
      this.tableColumnGrid = LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true);
      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
        },
        true
      );
      this.selfServiceDIPage.openPage();
    });

    afterAll(function () {
      SelfServiceDITestUtil.cleanup();
      this.client.closeWindow();
    });

    it('page is rendered', function () {
      this.selfServiceDIPage.rendered();
    });

    it('tree node is rendered', function () {
      this.presentationalTreeView.treeNodeSelector('Canonical').assert('toExist');
    });

    describe('expands tree node', function () {
      beforeAll(function () {
        this.presentationalTreeView.expandTreeNode('Canonical');
      });

      it('tree node is rendered', function () {
        this.presentationalTreeView.treeNodeSelector('Canonical.fileUploadedFlowTesting').assert('toExist');
      });
    });

    describe('clicks on luke test tree node', function () {
      beforeAll(function () {
        this.presentationalTreeView.treeNodeClick('Canonical.fileUploadedFlowTesting');
      });

      it('has the correct grey text in breadcrumb', function () {
        this.breadcrumb
          .getGreyText(3)
          .assert('toEqual', Translation.getTranslationForLocale('SelfServiceDI.tablesFromFiles.label'));
      });

      it('has the correct text in breadcrumb', function () {
        this.breadcrumb.getText(3).assert('toEqual', this.typeName);
      });
    });

    describe('clicks on the grey text (Tables from Files)', function () {
      beforeAll(function () {
        this.breadcrumb.clickGreyText(3);
      });

      it('changes to Table from local files grid and has correct Table', function () {
        this.tableColumnGrid.cellText(1, 1).assert(LukeAssertionMatcher.TO_EQUAL, this.typeName);
      });
    });
  });
});
