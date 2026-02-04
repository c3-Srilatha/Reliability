/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_UploadAdditionalFile';

function wait3Seconds() {
  this.client.runAsyncLambda(function () {
    return new Promise(function (resolve, reject) {
      /**
       * Force luke to slow down and wait.
       */
      setTimeout(resolve, 3000);
    });
  });
}

LukeBrowser.runJasmine(filename, function () {
  describe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      EntityRelationshipDiagramPackageConfig.forName('selfServiceDI').setConfigValue('exclude', false);
      this.client = LukeBrowser.init();
      this.fileName1 = 'AllDataTypes.csv';
      this.fileName2 = 'AllDataTypes2.csv';
      this.fileUrls = SelfServiceDITestUtil.retrieveFileUrls([this.fileName2], C3.pkg().name());
      this.uploadFilesModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
      this.fileUpload = LukeTestUiSdlFileUpload.make({ parentSelector: '.c3-modal-body', luke: this.client }, true);
      this.fileUploadTabPanel = LukeTestUiSdlTabPanel.make({ luke: this.client }, true);
      this.multiStepComponent = LukeTestMultiStepComponent.make({ luke: this.client }, true);
      this.schemaTab = LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true);
      this.presentationalTreeView = LukeTestPresentationalTreeView.make({ luke: this.client }, true);
      this.name = 'testForUploadAdditionalFileFlow';
      this.originalFileHeaders = ['avgLikes', 'followers', 'lastUpdated', 'name0', 'premiumSubscriber'];
      this.originalDataTypes = ['double', 'double', 'string', 'string', 'boolean'];
      this.tableColumnGrid = LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true);
      this.toggle = LukeTestUiSdlForm.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-metacolumntoggle' },
        true
      );
      this.targetPreviewGridLandingPage = LukeTestUiSdlDataGrid.make(
        {
          luke: this.client,
          parentSelector: '.c3-metadata-id-selfservicedi-externalsourcepreviewdatagrid',
        },
        true
      );
      this.filesGrid = LukeTestFileUploadGrid.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-filedatagrid' },
        true
      );
      SelfServiceDITestUtil.uploadFiles([this.fileName1], this.name);
      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          uploadFilesModal: this.uploadFilesModal,
          presentationalTreeView: this.presentationalTreeView,
          multiStepComponent: this.multiStepComponent,
          fileUpload: this.fileUpload,
        },
        true
      );

      this.selfServiceDIPage.openPage();
    });

    afterAll(function () {
      SelfServiceDITestUtil.cleanup();
      Pkg.removeTypes([this.name], true);
      this.client.closeWindow();
    });

    describe('Add additional file', function () {
      it('page is rendered', function () {
        this.selfServiceDIPage.rendered();
      });

      it('tree node is rendered', function () {
        this.presentationalTreeView.treeNodeSelector('Canonical').assert('toExist');
      });

      describe('expands presentational tree node', function () {
        beforeAll(function () {
          this.presentationalTreeView.expandTreeNode('Canonical');
          wait3Seconds();
        });

        it('testForUploadAdditionalFileFolw tree node is rendered', function () {
          this.presentationalTreeView.treeNodeSelector('Canonical.' + this.name).assert('toExist');
        });
      });

      describe('click the first index upload additional file', function () {
        beforeAll(function () {
          this.presentationalTreeView.treeNodeActionClick('Canonical.' + this.name, 1);
        });

        it('opens a modal', function () {
          this.uploadFilesModal.rendered();
        });
      });

      describe('upload additional files', function () {
        beforeAll(function () {
          this.fileUpload.uploadFile(this.fileUrls[0]);
        });

        describe('first row', function () {
          beforeAll(function () {
            this.fileUploadTabPanel.clickTab(
              Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.files.title')
            );
          });

          it('has the correct file name', function () {
            this.filesGrid.fileName(1).assert(LukeAssertionMatcher.TO_EQUAL, this.fileName2);
          });

          it('has the correct status', function () {
            this.filesGrid
              .status(1)
              .assert(
                LukeAssertionMatcher.TO_EQUAL,
                Translation.getTranslationForLocale('SelfServiceDI.awaitingUpload.label')
              );
          });

          it('has the correct size', function () {
            this.filesGrid.size(1).assert(LukeAssertionMatcher.TO_MATCH, '109 Bytes');
          });

          it('has no warnings', function () {
            this.filesGrid.warnings(1).assert(LukeAssertionMatcher.TO_BE_FALSY);
          });
        });
      });

      describe('clicks on the save button', function () {
        beforeAll(function () {
          this.multiStepComponent.proceed();
        });

        it('show success banner', function () {
          this.client
            .search('.c3-sdl-message-container-view .c3-sdl-message-banner-content h1', true, 60)
            .text()
            .assert(
              'toContain',
              Translation.getTranslationForLocale(
                'SelfServiceDI.UploadAdditionalTable.AllComplete.SuccessBanner.primaryText'
              ).replace('{tableName}', this.name)
            );
        });
      });

      describe('clicks on testForUploadAdditionalFileFolw tree node and go to files tab, should show correct value', function () {
        beforeAll(function () {
          wait3Seconds();
          wait3Seconds();
          wait3Seconds();
          this.presentationalTreeView.treeNodeClick('Canonical.' + this.name);
          this.fileUploadTabPanel.clickTab(
            Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.files.title')
          );
          this.status = Translation.getTranslationForLocale('SelfServiceDI.integrated.label');
          this.tableColumnGrid.sortColumn('Size', 'descending');
          wait3Seconds();
        });

        it('for fileName', function () {
          this.tableColumnGrid.cellText(1, 2).assert(LukeAssertionMatcher.TO_EQUAL, this.fileName1);
          this.tableColumnGrid.cellText(2, 2).assert(LukeAssertionMatcher.TO_EQUAL, this.fileName2);
        });

        it('for status', function () {
          this.tableColumnGrid.cellText(1, 3).assert(LukeAssertionMatcher.TO_EQUAL, this.status);
          this.tableColumnGrid.cellText(2, 3).assert(LukeAssertionMatcher.TO_EQUAL, this.status);
        });

        it('for size', function () {
          this.tableColumnGrid.cellText(1, 4).assert(LukeAssertionMatcher.TO_EQUAL, '263 Bytes');
          this.tableColumnGrid.cellText(2, 4).assert(LukeAssertionMatcher.TO_EQUAL, '109 Bytes');
        });
      });

      describe('clicks on schema tab ', function () {
        beforeAll(function () {
          this.fileUploadTabPanel.clickTab(
            Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.schema.title')
          );
        });

        describe('first row has the correct values', function () {
          it('column headers match the column name values', function () {
            this.schemaTab.getTextForCellsInColumn(0).assert(LukeAssertionMatcher.TO_EQUAL, this.originalFileHeaders);
          });

          it('column aliases match the expected inferred aliases', function () {
            this.schemaTab.getTextForCellsInColumn(1).assert(LukeAssertionMatcher.TO_EQUAL, this.originalFileHeaders);
          });

          it('column dataTypes match the expected inferred dataTypes', function () {
            this.schemaTab.getTextForCellsInColumn(2).assert(LukeAssertionMatcher.TO_EQUAL, this.originalDataTypes);
          });
        });
      });
    });
  });
});
