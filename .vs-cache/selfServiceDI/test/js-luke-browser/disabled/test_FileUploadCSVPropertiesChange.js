/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

function wait5Seconds() {
  this.client.runAsyncLambda(function () {
    return new Promise(function (resolve, reject) {
      /**
       * Force luke to slow down and wait.
       */
      setTimeout(resolve, 10000);
    });
  });
}

function checkSchemaTab() {
  beforeAll(function () {
    this.fileUploadTabPanel.clickTab(
      Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.schema.title')
    );
  });

  it('column headers match the column name values', function () {
    this.schemaTab.getTextForCellsInColumn(1).assert(LukeAssertionMatcher.TO_EQUAL, this.originalFileHeaders);
  });

  it('column aliases match the expected inferred aliases', function () {
    this.schemaTab.getColumnAliases().assert(LukeAssertionMatcher.TO_EQUAL, this.originalAliases);
  });

  it('column dataTypes match the expected inferred dataTypes', function () {
    this.schemaTab.getTextForCellsInColumn(3).assert(LukeAssertionMatcher.TO_EQUAL, this.originalDataTypes);
  });
}

function checkTargetPreview() {
  beforeAll(function () {
    this.fileUploadTabPanel.clickTab(
      Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.targetPreview.title')
    );
    wait5Seconds();
  });

  describe('first row has the correct values', function () {
    it('for avgLikes', function () {
      this.targetPreviewGrid.cellText(1, 1).transformToInt().assert(LukeAssertionMatcher.TO_EQUAL, 1200);
    });

    it('for followers', function () {
      this.targetPreviewGrid.cellText(1, 2).transformToInt().assert(LukeAssertionMatcher.TO_EQUAL, 1500);
    });

    it('for lastUpdated', function () {
      this.targetPreviewGrid.cellText(1, 3).assert(LukeAssertionMatcher.TO_EQUAL, 'Mon');
    });

    it('for nameAlias', function () {
      this.targetPreviewGrid.cellText(1, 4).assert(LukeAssertionMatcher.TO_EQUAL, this.name);
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
}

const filename = 'test_FileUploadCSVPropertiesChange';

LukeBrowser.runJasmine(filename, function () {
  // TODO: PLAT-122178: migrate test_FileUploadCSVPropertiesChange.js to erdTest
  xdescribe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.firstFileName = 'AllDataTypes2Colon.csv';
      this.secondFileName = 'AllDataTypes2Semicolon.csv';
      this.thirdFileName = 'AllDataTypes2Whitespace.csv';
      this.forthFileName = 'AllDataTypes2Pipe.csv';
      this.fifthFileName = 'AllDataTypes2QuoteBackslash.csv';
      this.sixthFileName = 'AllDataTypes2QuoteDoubleQuote.csv';
      this.seventhFileName = 'AllDataTypes2QuoteQuote.csv';
      this.eighthFileName = 'AllDataTypes2EscapeCharBackslash.csv';
      this.ninethFileName = 'AllDataTypes2EscapeCharDoubleQuote.csv';
      this.tenthFileName = 'AllDataTypes2EscapeCharQuote.csv';
      this.fileUrls = SelfServiceDITestUtil.retrieveFileUrls(
        [
          this.firstFileName,
          this.secondFileName,
          this.thirdFileName,
          this.forthFileName,
          this.fifthFileName,
          this.sixthFileName,
          this.seventhFileName,
          this.eighthFileName,
          this.ninethFileName,
          this.tenthFileName,
        ],
        C3.pkg().name()
      );
      this.originalFileHeaders = ['avgLikes', 'followers', 'lastUpdated', 'name0', 'premiumSubscriber'];
      this.originalAliases = ['avgLikes', 'followers', 'lastUpdated', 'name0', 'premiumSubscriber'];
      this.originalDataTypes = ['Double', 'Double', 'String', 'String', 'Boolean'];
      this.client = LukeBrowser.init();
      this.inlineNotification = LukeTestUiSdlInlineNotification.make({ luke: this.client }, true);
      this.fileUpload = LukeTestUiSdlFileUpload.make({ luke: this.client }, true);
      this.informationCardList = LukeTestInformationCardList.make({ luke: this.client }, true);
      this.multiStepComponent = LukeTestMultiStepComponent.make({ luke: this.client }, true);
      this.schemaTab = LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true);
      this.fileUploadTabPanel = LukeTestFileUploadTabPanel.make({ luke: this.client }, true);
      this.targetPreviewGrid = LukeTestUiSdlDataGrid.make(
        {
          luke: this.client,
          parentSelector: '.c3-metadata-id-selfservicedi-targetpreviewgrid',
        },
        true
      );
      this.csvEditForm = LukeTestCsvEditForm.make({ luke: this.client }, true);
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
    });

    afterAll(function () {
      SelfServiceDITestUtil.cleanup();
      this.client.closeWindow();
    });

    it('page is rendered', function () {
      this.selfServiceDIPage.rendered();
    });

    describe('colon delimiter csv file', function () {
      describe('schemaTab', function () {
        beforeAll(function () {
          this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[0]]);
          this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
          this.csvEditForm.setDelimiter(
            Translation.getTranslationForLocale('SelfServiceDI.csvPropertiesDropdown.colon.label'),
            200
          );
          wait5Seconds();
        });
        checkSchemaTab();
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = 'Dane';
        });
        checkTargetPreview();
      });
    });

    describe('semicolon delimiter csv file', function () {
      describe('schemaTab', function () {
        describe('close the multiStepComponent', function () {
          beforeAll(function () {
            this.multiStepComponent.cancel();
          });

          it('should close multiStepComponent', function () {
            this.multiStepComponent.notExists();
          });
        });

        describe('checks schemaTab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[1]]);
            this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            this.csvEditForm.setDelimiter(
              Translation.getTranslationForLocale('SelfServiceDI.csvPropertiesDropdown.semicolon.label')
            );
            wait5Seconds();
          });
          checkSchemaTab();
        });
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = 'Dane';
        });
        checkTargetPreview();
      });
    });

    describe('whitespace delimiter csv file', function () {
      describe('schemaTab', function () {
        describe('close the multiStepComponent', function () {
          beforeAll(function () {
            this.multiStepComponent.cancel();
          });

          it('should close multiStepComponent', function () {
            this.multiStepComponent.notExists();
          });
        });

        describe('checks schemaTab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[2]]);
            this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            this.csvEditForm.setDelimiter(
              Translation.getTranslationForLocale('SelfServiceDI.csvPropertiesDropdown.whitespace.label')
            );
            wait5Seconds();
          });
          checkSchemaTab();
        });
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = 'Dane';
        });
        checkTargetPreview();
      });
    });

    describe('pipe delimiter csv file', function () {
      describe('schemaTab', function () {
        describe('close the multiStepComponent', function () {
          beforeAll(function () {
            this.multiStepComponent.cancel();
          });

          it('should close multiStepComponent', function () {
            this.multiStepComponent.notExists();
          });
        });

        describe('checks schemaTab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[3]]);
            this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            this.csvEditForm.setDelimiter(
              Translation.getTranslationForLocale('SelfServiceDI.csvPropertiesDropdown.pipe.label')
            );
            wait5Seconds();
          });
          checkSchemaTab();
        });
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = 'Dane';
        });
        checkTargetPreview();
      });
    });

    describe('quote backslash csv file', function () {
      describe('schemaTab', function () {
        describe('close the multiStepComponent', function () {
          beforeAll(function () {
            this.multiStepComponent.cancel();
          });

          it('should close multiStepComponent', function () {
            this.multiStepComponent.notExists();
          });
        });

        describe('checks schemaTab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[4]]);
            this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            this.csvEditForm.setQuote(
              Translation.getTranslationForLocale('SelfServiceDI.csvPropertiesDropdown.backslash.label')
            );
            wait5Seconds();
          });
          checkSchemaTab();
        });
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = 'Da,ne';
        });
        checkTargetPreview();
      });
    });

    describe('quote doubleQuote csv file', function () {
      describe('schemaTab', function () {
        describe('close the multiStepComponent', function () {
          beforeAll(function () {
            this.multiStepComponent.cancel();
          });

          it('should close multiStepComponent', function () {
            this.multiStepComponent.notExists();
          });
        });

        describe('checks schemaTab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[5]]);
            this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            this.csvEditForm.setQuote('" Double quote');
            wait5Seconds();
          });
          checkSchemaTab();
        });
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = 'Da,ne';
        });
        checkTargetPreview();
      });
    });

    describe('quote quote csv file', function () {
      describe('schemaTab', function () {
        describe('close the multiStepComponent', function () {
          beforeAll(function () {
            this.multiStepComponent.cancel();
          });

          it('should close multiStepComponent', function () {
            this.multiStepComponent.notExists();
          });
        });

        describe('checks schemaTab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[6]]);
            this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            this.csvEditForm.setQuote("' Quote");
            wait5Seconds();
          });
          checkSchemaTab();
        });
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = 'Da,ne';
        });
        checkTargetPreview();
      });
    });

    describe('escape char back slash csv file', function () {
      describe('schemaTab', function () {
        describe('close the multiStepComponent', function () {
          beforeAll(function () {
            this.multiStepComponent.cancel();
          });

          it('should close multiStepComponent', function () {
            this.multiStepComponent.notExists();
          });
        });

        describe('checks schemaTab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[7]]);
            this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            this.csvEditForm.setEscape(
              Translation.getTranslationForLocale('SelfServiceDI.csvPropertiesDropdown.backslash.label')
            );
            wait5Seconds();
          });
          checkSchemaTab();
        });
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = '"Da"ne';
        });
        checkTargetPreview();
      });
    });

    describe('escape char double quote csv file', function () {
      describe('schemaTab', function () {
        describe('close the multiStepComponent', function () {
          beforeAll(function () {
            this.multiStepComponent.cancel();
          });

          it('should close multiStepComponent', function () {
            this.multiStepComponent.notExists();
          });
        });

        describe('checks schemaTab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[8]]);
            this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            this.csvEditForm.setEscape('" Double quote');
            wait5Seconds();
          });
          checkSchemaTab();
        });
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = '"Da"ne';
        });
        checkTargetPreview();
      });
    });

    describe('escape char quote csv file', function () {
      describe('schemaTab', function () {
        describe('close the multiStepComponent', function () {
          beforeAll(function () {
            this.multiStepComponent.cancel();
          });

          it('should close multiStepComponent', function () {
            this.multiStepComponent.notExists();
          });
        });

        describe('checks schemaTab', function () {
          beforeAll(function () {
            this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[9]]);
            this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
            this.csvEditForm.setEscape("' Quote");
            wait5Seconds();
          });
          checkSchemaTab();
        });
      });

      describe('targetPreview', function () {
        beforeAll(function () {
          this.name = '"Da"ne';
        });
        checkTargetPreview();
      });
    });
  });
});
