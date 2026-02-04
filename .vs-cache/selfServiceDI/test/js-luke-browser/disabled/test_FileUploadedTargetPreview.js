/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_FileUploadedTargetPreview';

/**
 * This test runs through the different scenarios of the Files tab in the
 * Select Files and Set Schema Step of the File Upload flow.
 */

function wait5Seconds() {
  this.client.runAsyncLambda(function () {
    return new Promise(function (resolve, reject) {
      /**
       * Force luke to slow down and wait.
       */
      setTimeout(resolve, 5000);
    });
  });
}

LukeBrowser.runJasmine(filename, function () {
  describe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      EntityRelationshipDiagramPackageConfig.forName('selfServiceDI').setConfigValue('exclude', false);
      this.fileName = 'AllDataTypes2QuoteDoubleQuote.csv';
      this.typeName = 'testForTargetPreviewFlow';
      SelfServiceDITestUtil.uploadFiles([this.fileName], this.typeName);
      this.client = LukeBrowser.init();
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
      this.toggle = LukeTestUiSdlForm.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-metacolumntoggle' },
        true
      );
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
      Pkg.removeTypes([this.typeName], true);
      this.client.closeWindow();
    });

    it('page is rendered', function () {
      this.selfServiceDIPage.rendered();
      wait5Seconds();
    });

    it('tree node is rendered', function () {
      this.presentationalTreeView.treeNodeSelector('Canonical').assert('toExist');
    });

    describe('expands presentational tree node', function () {
      beforeAll(function () {
        this.presentationalTreeView.expandTreeNode('Canonical');
      });

      it('testForTargetPreviewFlow tree node is rendered', function () {
        this.presentationalTreeView.treeNodeSelector('Canonical.' + this.typeName).assert('toExist');
      });
    });

    describe('clicks on testForTargetPreviewFlow tree node first row has the correct values', function () {
      beforeAll(function () {
        this.presentationalTreeView.treeNodeClick('Canonical.' + this.typeName);
      });

      it('for avgLikes', function () {
        this.targetPreviewGrid.cellText(1, 1).assert(LukeAssertionMatcher.TO_EQUAL, '1,200');
      });

      it('for followers', function () {
        this.targetPreviewGrid.cellText(1, 2).assert(LukeAssertionMatcher.TO_EQUAL, '1,500');
      });

      it('for lastUpdated', function () {
        this.targetPreviewGrid.cellText(1, 3).assert(LukeAssertionMatcher.TO_EQUAL, 'Mon');
      });

      it('for nameAlias', function () {
        this.targetPreviewGrid.cellText(1, 4).assert(LukeAssertionMatcher.TO_EQUAL, 'Da,ne');
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

    describe('clicks on toggle, first row has the correct values', function () {
      beforeAll(function () {
        this.toggle.search('input[aria-label="SelfServiceDI.showRowSource.label"]').click();
      });

      it('for fileName', function () {
        this.targetPreviewGrid.cellText(1, 1).assert(LukeAssertionMatcher.TO_EQUAL, this.fileName);
      });

      it('for avgLikes', function () {
        this.targetPreviewGrid.cellText(1, 2).assert(LukeAssertionMatcher.TO_EQUAL, '1,200');
      });

      it('for followers', function () {
        this.targetPreviewGrid.cellText(1, 3).assert(LukeAssertionMatcher.TO_EQUAL, '1,500');
      });

      it('for lastUpdated', function () {
        this.targetPreviewGrid.cellText(1, 4).assert(LukeAssertionMatcher.TO_EQUAL, 'Mon');
      });

      it('for nameAlias', function () {
        this.targetPreviewGrid.cellText(1, 5).assert(LukeAssertionMatcher.TO_EQUAL, 'Da,ne');
      });

      it('for premiumSubscriber', function () {
        this.targetPreviewGrid
          .cellText(1, 6)
          .transformToString()
          .then(function (client, text) {
            return text === 'false';
          })
          .assert(LukeAssertionMatcher.TO_EQUAL, true);
      });
    });
  });
});
