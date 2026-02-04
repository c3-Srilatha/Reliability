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

const filename = 'test_FileUploadSchemaTab';

LukeBrowser.runJasmine(filename, function () {
  // TODO: PLAT-122681: migrate test for 2nd step in file upload flow: `configure file schema and preview`
  xdescribe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.fileUrls = SelfServiceDITestUtil.retrieveFileUrls(['SchemaTab.csv'], C3.pkg().name());
      this.originalFileHeaders = [
        'Age',
        'Em_barked',
        'Fare',
        'NAME',
        'Parch',
        'PassengerId',
        'Pclass',
        'Sex',
        'SibSp',
        'Survived',
        'Ticket',
        '___',
      ];
      this.originalAliases = [
        'age',
        'emBarked',
        'fare',
        'nameAlias',
        'parch',
        'passengerId',
        'pclass',
        'sex',
        'sibSp',
        'survived',
        'ticket',
        'field',
      ];
      this.originalDataTypes = [
        'Double',
        'String',
        'Double',
        'String',
        'Double',
        'Double',
        'Double',
        'String',
        'Double',
        'Boolean',
        'Double',
        'String',
      ];
      this.client = LukeBrowser.init();
      this.inlineNotification = LukeTestUiSdlInlineNotification.make({ luke: this.client }, true);
      this.fileUploadTabPanel = LukeTestUiSdlTabPanel.make({ luke: this.client }, true);
      this.fileUpload = LukeTestUiSdlFileUpload.make({ luke: this.client }, true);
      this.informationCardList = LukeTestInformationCardList.make({ luke: this.client }, true);
      this.multiStepComponent = LukeTestMultiStepComponent.make({ luke: this.client }, true);
      this.schemaTab = LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true);
      this.fileUploaderSpinner = LukeTestUiSdlSpinner.make(
        {
          luke: this.client,
          parentSelector: '.c3-metadata-id-selfservicedi-filebrowserspinner',
        },
        true
      );
      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          multiStepComponent: this.multiStepComponent,
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

    describe('schemaTab', function () {
      describe('checking first column', function () {
        beforeAll(function () {
          this.selfServiceDIPage.startFileUploadFlow(this.fileUrls);
          this.fileUploadTabPanel.clickTab(
            Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.schema.title')
          );
        });

        it('spinner is gone', function () {
          this.fileUploaderSpinner.spinnerNotExist();
        });

        it('enables column alias', function () {
          this.schemaTab.rowInputNotDisabled(1, 3).assert(LukeAssertionMatcher.TO_EXIST);
        });

        it('enables dataType dropdown', function () {
          this.schemaTab.rowInputNotDisabled(1, 4).assert(LukeAssertionMatcher.TO_EXIST);
        });

        it('enables description', function () {
          this.schemaTab.rowInputNotDisabled(1, 5).assert(LukeAssertionMatcher.TO_EXIST);
        });

        it('column headers match the column name values', function () {
          this.schemaTab.getTextForCellsInColumn(1).assert(LukeAssertionMatcher.TO_EQUAL, this.originalFileHeaders);
        });

        it('column aliases match the expected inferred aliases', function () {
          this.schemaTab.getColumnAliases(true).assert(LukeAssertionMatcher.TO_EQUAL, this.originalAliases);
        });

        it('column dataTypes match the expected inferred dataTypes', function () {
          this.schemaTab.getTextForCellsInColumn(3).assert(LukeAssertionMatcher.TO_EQUAL, this.originalDataTypes);
        });
      });

      describe('selecting columns', function () {
        describe('unchecking a column', function () {
          beforeAll(function () {
            this.schemaTab.selectRow(1);
          });

          it('disables column alias', function () {
            this.schemaTab.rowInputDisabled(1, 3).assert(LukeAssertionMatcher.TO_EXIST);
          });

          it('disables dataType dropdown', function () {
            this.schemaTab.rowInputDisabled(1, 4).assert(LukeAssertionMatcher.TO_EXIST);
          });

          it('disables description', function () {
            this.schemaTab.rowInputDisabled(1, 5).assert(LukeAssertionMatcher.TO_EXIST);
          });
        });
      });

      describe('updating column alias', function () {
        describe('when the column alias is too short', function () {
          beforeAll(function () {
            this.schemaTab.selectRow(1);
            this.shortAlias = 'v';
            this.schemaTab.setColumnAlias(true, 1, this.shortAlias);
          });

          it('shows an error for the column alias', function () {
            this.schemaTab
              .columnAliasError(true, 1)
              .assert(
                LukeAssertionMatcher.TO_EQUAL,
                Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.length.hintText')
              );
          });
        });

        describe('when the column alias is too long', function () {
          beforeAll(function () {
            this.longAlias = 'a'.repeat(31);
            this.schemaTab.setColumnAlias(true, 1, this.longAlias);
          });

          it('shows an error for the column alias', function () {
            this.schemaTab
              .columnAliasError(true, 1)
              .assert(
                LukeAssertionMatcher.TO_EQUAL,
                Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.length.hintText')
              );
          });
        });

        describe('when the column alias collides with an existing column', function () {
          beforeAll(function () {
            this.schemaTab.setColumnAlias(true, 1, this.originalAliases[2]);
          });

          it('shows an error for the column alias', function () {
            this.schemaTab
              .columnAliasError(true, 1)
              .assert(
                LukeAssertionMatcher.TO_EQUAL,
                Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.duplicate.hintText').replace(
                  '{alias}',
                  this.originalAliases[2]
                )
              );
          });
        });

        describe('when the column alias is valid', function () {
          beforeAll(function () {
            this.validAlias = 'validAlias';
            this.schemaTab.setColumnAlias(true, 1, this.validAlias);
          });

          it('does not show an error for the column alias', function () {
            this.schemaTab
              .search(this.schemaTab.cellSelector(1, 1, this.schemaTab.inputHintTextSelector))
              .assertNot(LukeAssertionMatcher.TO_EXIST);
          });
        });

        describe('renaming a column to id', function () {
          beforeAll(function () {
            this.idAlias = 'id';
            this.schemaTab.setColumnAlias(true, 5, this.idAlias);
          });

          it('converts the dataType to string and prevents the user from editing the dataType', function () {
            this.schemaTab.disabledDataType(4).assert(LukeAssertionMatcher.TO_EQUAL, 'String');
          });
        });
      });

      describe('updating Description', function () {
        describe('when the description is too short', function () {
          beforeAll(function () {
            this.shortDescription = 'short';
            this.schemaTab.setColumnDescription(true, 1, this.shortDescription);
          });

          it('shows an error for the description', function () {
            this.schemaTab
              .columnDescriptionError(true, 1)
              .assert(
                LukeAssertionMatcher.TO_EQUAL,
                Translation.getTranslationForLocale('SelfServiceDI.AliasDescreiptionCell.length.hintText')
              );
          });
        });

        describe('when the description is too long', function () {
          beforeAll(function () {
            this.longDescription = 'a'.repeat(501);
            this.schemaTab.setColumnDescription(true, 1, this.longDescription);
          });

          it('shows an error for the description', function () {
            this.schemaTab
              .columnDescriptionError(true, 1)
              .assert(
                LukeAssertionMatcher.TO_EQUAL,
                Translation.getTranslationForLocale('SelfServiceDI.AliasDescreiptionCell.length.hintText')
              );
          });
        });

        describe('when the description is valid', function () {
          beforeAll(function () {
            this.validDescription = 'this is a valid description';
            this.schemaTab.setColumnDescription(true, 1, this.validDescription);
          });

          it('does not show an error for the column description', function () {
            this.schemaTab
              .search(this.schemaTab.cellSelector(1, 5, this.schemaTab.inputHintTextSelector))
              .assertNot(LukeAssertionMatcher.TO_EXIST);
          });
        });
      });

      describe('updating dataType', function () {
        describe('for a field', function () {
          beforeAll(function () {
            this.dataType = 'DateTime';
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
            this.client.search(this.schemaTab.cellSelector(4, 4, this.schemaTab.dataTypeSelector)).scrollIntoView();
            wait3Seconds();
            this.schemaTab.setDataType(4, this.dataType);
          });

          it('shows an error for the dateTime', function () {
            this.schemaTab
              .columnDateTimeError(true, 4)
              .assert(
                LukeAssertionMatcher.TO_EQUAL,
                Translation.getTranslationForLocale('SelfServiceDI.InvalidTimeFormat.label')
              );
          });
        });

        describe('sets back to Double type', function () {
          beforeAll(function () {
            this.schemaTab.setDataType(4, 'Double');
          });

          it('does not show an error for the dateTime', function () {
            this.schemaTab
              .search(this.schemaTab.cellSelector(4, 4, this.schemaTab.inputHintTextSelector))
              .assertNot(LukeAssertionMatcher.TO_EXIST);
          });
        });
      });

      describe('search id in search bar ', function () {
        beforeAll(function () {
          this.schemaTab.searchInGrid('validAlias');
        });

        it('has the correct row', function () {
          this.schemaTab.numberOfRows().assert('toEqual', 1);
        });

        it('column headers match the column name values', function () {
          this.schemaTab.getTextForCellsInColumn(1).assert(LukeAssertionMatcher.TO_EQUAL, ['Age']);
        });

        it('column aliases match the expected inferred aliases', function () {
          this.schemaTab.getColumnAliases(true).assert(LukeAssertionMatcher.TO_EQUAL, ['validAlias']);
        });

        it('column dataTypes match the expected inferred dataTypes', function () {
          this.schemaTab.getTextForCellsInColumn(3).assert(LukeAssertionMatcher.TO_EQUAL, ['Double']);
        });
      });

      describe('uncheck the checkbox for all and click next', function () {
        beforeAll(function () {
          this.schemaTab.selectHeader();
          this.multiStepComponent.proceed();
        });

        it('shows an error notification', function () {
          this.inlineNotification
            .search('.c3-sdl-inline-notification-title')
            .text()
            .assert(
              'toContain',
              Translation.getTranslationForLocale('SelfServiceDI.schemaTabNoSelectedError.subtitle.label')
            );
        });
      });
    });
  });
});
