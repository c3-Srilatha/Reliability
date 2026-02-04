/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

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

const filename = 'test_fileUploadInferTimeStamp';

LukeBrowser.runJasmine(filename, function () {
  // TODO: PLAT-122681: migrate test for 2nd step in file upload flow: `configure file schema and preview`
  xdescribe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.firstFileName = 'IncludingTimeStampData.csv';
      this.fileUrls = SelfServiceDITestUtil.retrieveFileUrls([this.firstFileName], C3.pkg().name());
      this.originalFileHeaders = [
        'avgLikes',
        'followers',
        'lastUpdated',
        'name0',
        'premiumSubscriber',
        'time2',
        'time3',
        'time4',
        'time5',
        'time6',
        'time7',
        'time8',
        'time9',
      ];
      this.originalAliases = [
        'avgLikes',
        'followers',
        'lastUpdated',
        'name0',
        'premiumSubscriber',
        'time2',
        'time3',
        'time4',
        'time5',
        'time6',
        'time7',
        'time8',
        'time9',
      ];
      this.originalDataTypes = [
        'Double',
        'Double',
        'DateTime',
        'String',
        'Boolean',
        'DateTime',
        'DateTime',
        'DateTime',
        'DateTime',
        'DateTime',
        'DateTime',
        'DateTime',
        'DateTime',
      ];
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

    describe('uploading a file that contains timeStamp', function () {
      describe('schemaTab', function () {
        beforeAll(function () {
          this.selfServiceDIPage.startFileUploadFlow([this.fileUrls[0]]);
          this.fileUploadTabPanel.clickTab(Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'));
        });
        checkSchemaTab();
      });
    });

    describe('updating dataType to dateTime', function () {
      describe('for a field', function () {
        beforeAll(function () {
          this.dataType = 'DateTime';
          this.dateTimeType = 'DateTime\nInvalid time format';
          this.updatedDataTypes = [
            'Double',
            'Double',
            'DateTime',
            'String',
            this.dateTimeType,
            this.dataType,
            this.dataType,
            this.dataType,
            this.dataType,
            this.dataType,
            this.dataType,
            this.dataType,
            this.dataType,
          ];
          this.client.search(this.schemaTab.cellSelector(5, 4, this.schemaTab.dataTypeSelector)).scrollIntoView();
          wait3Seconds();
          this.schemaTab.setDataType(5, this.dataType);
        });

        it('sets the dataType correctly', function () {
          this.schemaTab.getTextForCellsInColumn(3).assert(LukeAssertionMatcher.TO_EQUAL, this.updatedDataTypes);
        });

        it('shows the correct dateTime', function () {
          this.schemaTab.columnDateTime(true, 3).assert(LukeAssertionMatcher.TO_EQUAL, 'HH:mm:ss');
        });
      });
    });

    describe('dateTime', function () {
      describe('when no dateTime format', function () {
        it('shows an error for the dateTime', function () {
          this.schemaTab
            .columnDateTimeError(true, 5)
            .assert(
              LukeAssertionMatcher.TO_EQUAL,
              Translation.getTranslationForLocale('SelfServiceDI.InvalidTimeFormat.label')
            );
        });
      });

      describe('when the dateTime is valid', function () {
        beforeAll(function () {
          this.validDateTime = 'HH:mm:ss';
          this.schemaTab.setColumnDateTime(true, 5, this.validDateTime);
        });

        it('does not show an error for the dateTime', function () {
          this.schemaTab
            .search(this.schemaTab.cellSelector(5, 4, this.schemaTab.inputHintTextSelector))
            .assertNot(LukeAssertionMatcher.TO_EXIST);
        });
      });
    });
  });
});
