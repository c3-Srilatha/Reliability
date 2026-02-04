/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_fileUploadedSchemaEditFlow';

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
      this.expectedFirstRowValues = ['avgLikes', 'avgLikes', 'double'];
      this.fileName = 'AllDataTypes2QuoteDoubleQuote.csv';
      this.expectedTableDescription = 'The description for luke test';
      this.typeName = 'fileUploadedSchemaEditFlowTesting';
      SelfServiceDITestUtil.uploadFiles([this.fileName], this.typeName);
      this.client = LukeBrowser.init();
      this.presentationalTreeView = LukeTestPresentationalTreeView.make({ luke: this.client }, true);
      this.messageBanner = LukeTestUiSdlMessageContainer.make({ luke: this.client }, true);
      this.filesGrid = LukeTestFileUploadGrid.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-filedatagrid' },
        true
      );
      this.fileUploadTabPanel = LukeTestUiSdlTabPanel.make({ luke: this.client }, true);
      this.schemaTab = LukeTestSelfServiceDISchemaTab.make(
        {
          luke: this.client,
          tableColumnGrid: LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true),
          tableNameList: LukeTestUiSdlDefinitionList.make({ luke: this.client }, true),
          tableDescriptionForm: LukeTestUiSdlForm.make({ luke: this.client }, true),
          errorInlineNotification: LukeTestUiSdlInlineNotification.make({ luke: this.client }, true),
        },
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
    });

    it('tree node is rendered', function () {
      this.presentationalTreeView.treeNodeSelector('Canonical').assert('toExist');
    });

    describe('expands tree node', function () {
      beforeAll(function () {
        this.presentationalTreeView.expandTreeNode('Canonical');
      });

      it('tree node is rendered', function () {
        this.presentationalTreeView.treeNodeSelector('Canonical.' + this.typeName).assert('toExist');
      });
    });

    describe('clicks on luke test tree node and go to schema tab', function () {
      beforeAll(function () {
        this.presentationalTreeView.treeNodeClick('Canonical.' + this.typeName);
        this.fileUploadTabPanel.clickTab(
          Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.schema.title')
        );
        this.schemaTab.editSchema();
      });

      it('tree node is rendered', function () {
        this.presentationalTreeView.treeNodeSelector('Canonical.' + this.typeName).assert('toExist');
      });
    });

    describe('first row has the correct values', function () {
      it('show correct first row values', function () {
        this.schemaTab.tableColumnGrid.cellText(1, 1).assert('toEqual', this.expectedFirstRowValues[0]);
        this.schemaTab.tableColumnGrid.columnAlias(false, 1).assert('toEqual', this.expectedFirstRowValues[1]);
        this.schemaTab.tableColumnGrid.cellText(1, 3).assert('toEqual', this.expectedFirstRowValues[2]);
      });
    });
    describe('updating column alias', function () {
      describe('when the column alias is too short', function () {
        beforeAll(function () {
          this.shortAlias = 'v';
          this.schemaTab.tableColumnGrid.setColumnAlias(false, 1, this.shortAlias);
        });

        it('shows an error for the column alias', function () {
          this.schemaTab.tableColumnGrid
            .columnAliasError(false, 1)
            .assert(
              LukeAssertionMatcher.TO_EQUAL,
              Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.length.hintText')
            );
        });
      });

      describe('when the column alias is too long', function () {
        beforeAll(function () {
          this.longAlias = 'a'.repeat(31);
          this.schemaTab.tableColumnGrid.setColumnAlias(false, 1, this.longAlias);
        });

        it('shows an error for the column alias', function () {
          this.schemaTab.tableColumnGrid
            .columnAliasError(false, 1)
            .assert(
              LukeAssertionMatcher.TO_EQUAL,
              Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.length.hintText')
            );
        });
      });

      describe('when the column alias is valid', function () {
        beforeAll(function () {
          this.validAlias = 'testColumn';
          this.schemaTab.tableColumnGrid.setColumnAlias(false, 1, this.validAlias);
        });

        it('does not show an error for the column alias', function () {
          this.schemaTab.tableColumnGrid
            .search(
              this.schemaTab.tableColumnGrid.cellSelector(1, 1, this.schemaTab.tableColumnGrid.inputHintTextSelector)
            )
            .assertNot(LukeAssertionMatcher.TO_EXIST);
        });
      });

      describe('updating Description', function () {
        describe('when the description is too short', function () {
          beforeAll(function () {
            this.shortDescription = 'short';
            this.schemaTab.tableColumnGrid.setColumnDescription(false, 1, this.shortDescription);
          });

          it('shows an error for the description', function () {
            this.schemaTab.tableColumnGrid
              .columnDescriptionError(false, 1)
              .assert(
                LukeAssertionMatcher.TO_EQUAL,
                Translation.getTranslationForLocale('SelfServiceDI.AliasDescreiptionCell.length.hintText')
              );
          });
        });

        describe('when the description is too long', function () {
          beforeAll(function () {
            this.longDescription = 'a'.repeat(501);
            this.schemaTab.tableColumnGrid.setColumnDescription(false, 1, this.longDescription);
          });

          it('shows an error for the description', function () {
            this.schemaTab.tableColumnGrid
              .columnDescriptionError(false, 1)
              .assert(
                LukeAssertionMatcher.TO_EQUAL,
                Translation.getTranslationForLocale('SelfServiceDI.AliasDescreiptionCell.length.hintText')
              );
          });
        });

        describe('when the description is valid', function () {
          beforeAll(function () {
            this.validDescription = 'this is a valid description';
            this.schemaTab.tableColumnGrid.setColumnDescription(false, 1, this.validDescription);
          });

          it('does not show an error for the column description', function () {
            this.schemaTab.tableColumnGrid
              .search(
                this.schemaTab.tableColumnGrid.cellSelector(1, 4, this.schemaTab.tableColumnGrid.inputHintTextSelector)
              )
              .assertNot(LukeAssertionMatcher.TO_EXIST);
          });
        });
      });

      describe('updating table description', function () {
        beforeAll(function () {
          this.schemaTab.tableDescriptionForm.setTextAreaValue('doc', 'w'.repeat(501));
          wait5Seconds();
          this.schemaTab.saveSchemaChange();
        });

        afterAll(function () {
          this.schemaTab.tableDescriptionForm.setTextAreaValue('doc', this.expectedTableDescription);
        });

        it('form has the correct hintText', function () {
          this.schemaTab.tableDescriptionForm
            .search(this.schemaTab.tableDescriptionForm.formFieldHintEl)
            .text()
            .assert(
              'toEqual',
              Translation.getTranslationForLocale('SelfServiceDI.ExternalSourceDetailsForm.tableDescription.hintText')
            );
        });

        it('shows error banner', function () {
          this.schemaTab.errorInlineNotification.rendered();
        });

        it('error banner has the correct text', function () {
          this.schemaTab.errorInlineNotification
            .getTitleText()
            .assert('toEqual', Translation.getTranslationForLocale('SelfServiceDI.InvalidInlineNotification.title'));
        });
      });

      describe('saving all the changes', function () {
        beforeAll(function () {
          wait5Seconds();
          this.schemaTab.saveSchemaChange();
          this.successBannerTitle = 'Successfully updated the table schema for: ' + this.typeName;
        });

        it('goes to preview mode', function () {
          this.schemaTab.inPreviewMode(120);
        });

        // TODO PLAT-111163: determine if this test case can be stabilized
        xit('shows success banner', function () {
          this.messageBanner.bannerPrimaryTextAt(1).assert('toEqual', this.successBannerTitle);
          this.messageBanner.assertBannerTypeAt(1, UiSdlMessageBannerType.SUCCESS);
        });
      });
    });
  });
});
