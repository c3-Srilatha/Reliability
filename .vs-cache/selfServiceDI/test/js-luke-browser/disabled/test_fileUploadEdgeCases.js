/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

// TODO: PLAT-110982 Re-enable all the remaining File Upload Luke Tests
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

const filename = 'test_fileUploadEdgeCases';

LukeBrowser.runJasmine(filename, function () {
  // TODO: PLAT-122173 Migrate test_fileUploadEdgeCases to erdTest
  xdescribe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      EntityRelationshipDiagramPackageConfig.forName('selfServiceDI').setConfigValue('exclude', false);
      this.fileName1 = 'SchemaTab.csv';
      this.fileName2 = 'AllDataTypesWithValidTime.csv';
      this.fileName3 = 'AllDataTypesColumnGreaterThan30.csv';
      this.fileUrls = SelfServiceDITestUtil.retrieveFileUrls(
        [this.fileName1, this.fileName2, this.fileName3],
        C3.pkg().name()
      );
      this.client = LukeBrowser.init();
      this.targetPreviewGrid = LukeTestUiSdlDataGrid.make(
        {
          luke: this.client,
          parentSelector: '.c3-metadata-id-selfservicedi-targetpreviewgrid',
        },
        true
      );
      this.presentationalTreeView = LukeTestPresentationalTreeView.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-targetpreviewtreeviewsidepanel' },
        true
      );
      this.filesGrid = LukeTestFileUploadGrid.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-filedatagrid' },
        true
      );
      this.createTableFromFilesForm = LukeTestCreateTableFromFilesForm.make({ luke: this.client }, true);
      this.inlineNotification = LukeTestUiSdlInlineNotification.make({ luke: this.client }, true);
      this.uploadFilesModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
      this.csvEditForm = LukeTestCsvEditForm.make({ luke: this.client }, true);
      this.fileUploadTabPanel = LukeTestUiSdlTabPanel.make({ luke: this.client }, true);
      this.fileUpload = LukeTestUiSdlFileUpload.make({ luke: this.client }, true);
      this.presentationalTreeView = LukeTestPresentationalTreeView.make({ luke: this.client }, true);
      this.informationCardList = LukeTestInformationCardList.make({ luke: this.client }, true);
      this.multiStepComponent = LukeTestMultiStepComponent.make({ luke: this.client }, true);
      this.tableColumnGrid = LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true);
      this.schemaTab = LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true);
      this.schemaTabLandingPage = LukeTestSelfServiceDISchemaTab.make(
        {
          luke: this.client,
          tableColumnGrid: LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true),
        },
        true
      );
      this.targetPreviewGridLandingPage = LukeTestUiSdlDataGrid.make(
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
    });

    afterAll(function () {
      SelfServiceDITestUtil.cleanup();
      this.client.closeWindow();
    });

    describe('Renaming column to “id” breaks file', function () {
      beforeAll(function () {
        this.selfServiceDIPage.openPage();
      });

      it('page is rendered', function () {
        this.selfServiceDIPage.rendered();
      });

      describe('updating column alias', function () {
        describe('renaming a column to id', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[0]]);
            this.fileUploadTabPanel.clickTab(
              Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.schema.title')
            );
            wait3Seconds();
            this.idAlias = 'id';
            this.schemaTab.setColumnAlias(true, 5, this.idAlias);
          });

          it('does not break the file', function () {
            this.schemaTab.disabledDataType(4).assert(LukeAssertionMatcher.TO_EQUAL, 'String');
          });
        });

        describe('when the column alias is not id', function () {
          beforeAll(function () {
            this.validAlias = 'validAlias';
            this.schemaTab.setColumnAlias(true, 5, this.validAlias);
          });

          describe('updating dataType', function () {
            describe('for a field', function () {
              beforeAll(function () {
                this.dataType = 'Decimal';
                this.updatedDataTypes = [
                  'Double',
                  'String',
                  'Double',
                  'String',
                  this.dataType,
                  'Double',
                  'Double',
                  'String',
                  'Double',
                  'Boolean',
                  'Double',
                  'String',
                ];
                this.client.search(this.schemaTab.cellSelector(5, 4, this.schemaTab.dataTypeSelector)).scrollIntoView();
                wait3Seconds();
                this.schemaTab.setDataType(5, this.dataType);
              });

              it('sets the dataType correctly and it is not disabled', function () {
                this.schemaTab.getTextForCellsInColumn(3).assert(LukeAssertionMatcher.TO_EQUAL, this.updatedDataTypes);
              });
            });
          });
        });
      });
    });

    describe('Browsed File sometimes disappears when adding a new data source immediately after starting uploading', function () {
      beforeAll(function () {
        this.selfServiceDIPage.openPage();
      });

      it('page is rendered', function () {
        this.selfServiceDIPage.rendered();
      });

      describe('updating single file', function () {
        describe('set the name to system reserved word', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[0]]);
            wait3Seconds();
            this.multiStepComponent.proceed();
            this.createTableFromFilesForm.setTableName('Persistable', 300);
          });

          it('does not let user set table name to system reserved word and shows system reserved word error', function () {
            this.createTableFromFilesForm.tableNameError(
              Translation.getTranslationForLocale('SelfServiceDI.tableInTypeSystemError.label'),
              300
            );
          });
        });

        describe('set the name to TestForFileUpload', function () {
          beforeAll(function () {
            this.createTableFromFilesForm.setTableName('TestForFileUpload', 300);
            this.createTableFromFilesForm.setDescription('Testing');
            wait3Seconds();
            this.multiStepComponent.proceed();
          });

          it('TestForFileUpload tree node is rendered', function () {
            this.presentationalTreeView.treeNodeSelector('Canonical.TestForFileUpload').assert('toExist');
          });
        });

        describe('updating another file', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[1]]);
          });

          it('does not show empty file name', function () {
            this.filesGrid.fileName(1).assert(LukeAssertionMatcher.TO_EQUAL, this.fileName2);
          });
        });
      });
    });

    describe('Front-end crashes when viewing target preview with datetime column', function () {
      beforeAll(function () {
        this.selfServiceDIPage.openPage();
      });

      it('page is rendered', function () {
        this.selfServiceDIPage.rendered();
      });

      describe('having correct dataType', function () {
        describe('for a field', function () {
          beforeAll(function () {
            this.dataType = 'DateTime';
            this.updatedDataTypes = ['Double', 'Double', 'DateTime', 'String', 'Boolean'];
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[1]]);
            this.fileUploadTabPanel.clickTab(
              Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.schema.title')
            );
          });

          it('sets the dataType correctly and it is not disabled', function () {
            this.schemaTab.getTextForCellsInColumn(3).assert(LukeAssertionMatcher.TO_EQUAL, this.updatedDataTypes);
          });
        });
      });

      describe('clicks on target preview', function () {
        describe('for a dateTime', function () {
          beforeAll(function () {
            this.fileUploadTabPanel.clickTab(
              Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.targetPreview.title')
            );
          });

          // Temp method is to transform cell text to {"type":"Boxed<datetime no tz with millis>","value":"2024-06-10T13:17:57.000"}
          it('does not show error occured and has the dateTime value correctly', function () {
            this.targetPreviewGrid
              .cellText(1, 3)
              .transform(function (value) {
                /*
                 * Because `assert` takes any as its second parameter, the TypeSystem coerces the string to a datetime.
                 * This transform ensures that the text result is converted to match
                 */
                return DateTime.fromString(value);
              })
              .assert(LukeAssertionMatcher.TO_EQUAL, '2024-06-10T13:17:57.000');
          });
        });
      });
    });

    describe('Ingesting file with column name containing more than 30 characters fails', function () {
      beforeAll(function () {
        this.selfServiceDIPage.openPage();
      });

      it('page is rendered', function () {
        this.selfServiceDIPage.rendered();
      });

      describe('uploads file ', function () {
        describe('clicks on schema tab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[2]]);
            this.fileUploadTabPanel.clickTab(
              Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.schema.title')
            );
            wait3Seconds();
          });

          it('does not have ingestion failing with errors and  the timestamp field does not conflict with system reserved word', function () {
            this.schemaTab
              .getColumnAliases(true)
              .assert(LukeAssertionMatcher.TO_EQUAL, [
                'avgLikes',
                'followersfollowersfollowersfol',
                'name0',
                'premiumSubscriber',
                'timestamp0',
              ]);
          });
        });
      });
    });

    describe('Modifying column description of CSV data source causes target preview to go blank', function () {
      beforeAll(function () {
        this.fileName = 'AllDataTypes2QuoteDoubleQuote.csv';
        SelfServiceDITestUtil.uploadFiles([this.fileName], 'fileUploadedFlowTesting');
        this.selfServiceDIPage.openPage();
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

      describe('clicks on luke test tree node, go to schema tab', function () {
        beforeAll(function () {
          this.presentationalTreeView.treeNodeClick('Canonical.fileUploadedFlowTesting');
          this.fileUploadTabPanel.clickTab(
            Translation.getTranslationForLocale('SelfServiceDI.SelectedSourceCollectionTabPanel.SchemaTab.title')
          );
        });

        it('shows preview mode', function () {
          this.schemaTabLandingPage.inPreviewMode(120);
        });
      });

      describe('goes to files tab and goes back to schema tab', function () {
        beforeAll(function () {
          this.fileUploadTabPanel.clickTab(
            Translation.getTranslationForLocale('SelfServiceDI.SelectedSourceCollectionTabPanel.PreviewTab.title')
          );
          this.fileUploadTabPanel.clickTab(
            Translation.getTranslationForLocale('SelfServiceDI.SelectedSourceCollectionTabPanel.SchemaTab.title')
          );
        });

        it('goes to preview mode', function () {
          this.schemaTabLandingPage.inPreviewMode(120);
        });
      });

      describe('adds the description', function () {
        beforeAll(function () {
          this.schemaTabLandingPage.editSchema();
          this.validDescription = 'this is a valid description';
          this.schemaTabLandingPage.tableColumnGrid.setColumnDescription(false, 1, this.validDescription);
          this.schemaTabLandingPage.saveSchemaChange();
        });

        it('goes to preview mode', function () {
          this.schemaTabLandingPage.inPreviewMode(120);
        });
      });

      describe('go to files tab and does not have blank', function () {
        beforeAll(function () {
          this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.preview.label.text'));
        });

        it('for avgLikes', function () {
          this.targetPreviewGridLandingPage.cellText(1, 1).assert(LukeAssertionMatcher.TO_EQUAL, '1,200');
        });

        it('for followers', function () {
          this.targetPreviewGridLandingPage.cellText(1, 2).assert(LukeAssertionMatcher.TO_EQUAL, '1,500');
        });

        it('for lastUpdated', function () {
          this.targetPreviewGridLandingPage.cellText(1, 3).assert(LukeAssertionMatcher.TO_EQUAL, 'Mon');
        });

        it('for nameAlias', function () {
          this.targetPreviewGridLandingPage.cellText(1, 4).assert(LukeAssertionMatcher.TO_EQUAL, 'Da,ne');
        });

        it('for premiumSubscriber', function () {
          this.targetPreviewGridLandingPage
            .cellText(1, 5)
            .transformToString()
            .then(function (client, text) {
              return text === 'false';
            })
            .assert(LukeAssertionMatcher.TO_EQUAL, true);
        });
      });
    });

    describe('File properties cannot be modified in edit mode', function () {
      describe('updating single file', function () {
        beforeAll(function () {
          this.fileUpload = LukeTestUiSdlFileUpload.make({ parentSelector: '.c3-modal-body', luke: this.client }, true);
          this.name = 'TestForEditModeCSVProperties';
          SelfServiceDITestUtil.uploadFiles([this.fileName1], this.name);
          this.selfServiceDIPage.openPage();
        });

        it('page is rendered', function () {
          this.selfServiceDIPage.rendered();
        });

        describe('expands presentational tree node', function () {
          beforeAll(function () {
            this.presentationalTreeView.expandTreeNode('Canonical');
          });

          it('TestForEditModeCSVProperties tree node is rendered', function () {
            this.presentationalTreeView.treeNodeSelector('Canonical.' + this.name).assert('toExist');
          });
        });

        describe('clicks the first index upload additional file', function () {
          beforeAll(function () {
            this.presentationalTreeView.treeNodeActionClick('Canonical.' + this.name, 1);
          });

          it('opens a modal', function () {
            this.uploadFilesModal.rendered();
          });
        });

        describe('uploads additional files', function () {
          beforeAll(function () {
            this.fileUpload.uploadFile(this.fileUrls[1]);
          });

          describe('clicks on File settings tab ', function () {
            beforeAll(function () {
              this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            });

            it('should have the correct description', function () {
              this.csvEditForm
                .search('.c3-sdl-form-subheader', true)
                .text()
                .assert(
                  LukeAssertionMatcher.TO_EQUAL,
                  Translation.getTranslationForLocale('SelfServiceDI.updateCsvPropertiesInEditMode.subtitle')
                );
            });
          });
        });
      });
    });
  });
});
