/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_SchemaChangeFlow';

function wait2Seconds() {
  this.client.runAsyncLambda(function () {
    return new Promise(function (resolve, reject) {
      /**
       * Force luke to slow down and wait.
       */
      setTimeout(resolve, 2000);
    });
  });
}

LukeBrowser.runJasmine(filename, function () {
  xdescribe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      This.password = SelfServiceDIJdbcStoreConfig.forName('selfServiceDISnowflake').secretValue('secretPassword');
      this.name = 'SnowflakeTest';
      SelfServiceDITestUtil.setUpSourceSystemAndSourceCollection(this.name, this.password, 'snowflake', true);

      Pkg.upsertType(
        'external',
        `
        /**
         * The description for PUBLIC.RELIABILITY
         */
        @action(group='selfservicedi-user')
        entity type Reliability1 mixes External, NoSystemCols schema name 'PUBLIC.RELIABILITY' {

          @db(dataTypeOverride='datetime')
          id: string schema name 'TIMESTAMP'
          /**
           * The description for the power field
           */
          power:           double schema name 'ACTIVEPOWER_RESAMPLE_MEAN'
          rotationalSpeed: int schema name 'GENERATORROTATIONSPEED_RESAMPLE_MEAN'
          gearOiltemp:     double schema name 'GEAROILTEMPERATURE_RESAMPLE_MEAN'
        }`
      );

      this.columnDescription = 'The description for the power field';

      this.client = LukeBrowser.init();
      this.inlineNotificationList = LukeTestInlineNotificationList.make({ luke: this.client }, true);
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
      this.messageBanner = LukeTestUiSdlMessageContainer.make({ luke: this.client }, true);
      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make({ luke: this.client }, true);
      this.selfServiceDIPage.openPage();
    });

    afterAll(function () {
      SqlSourceSystem.removeAll();
      SqlSourceCollection.removeAll();
      this.client.closeWindow();
    });

    describe('Schema change inline notification', function () {
      beforeAll(function () {
        this.expectedTitleText = 'PUBLIC.RELIABILITY has updated schema';
        this.expectedLinkText = Translation.getTranslationForLocale(
          'SelfServiceDI.inlinNotification.schemaMismatchLink.label.text'
        );
      });
      it('shows up on the inline notification list', function () {
        this.inlineNotificationList.numOfNotifications().assert('toEqual', 1);
      });

      it('has the correct message', function () {
        this.inlineNotificationList.getTitleText(0).assert('toEqual', this.expectedTitleText);
      });

      it('has the correct link', function () {
        this.inlineNotificationList.getLinkText(0).assert('toEqual', this.expectedLinkText);
      });

      describe('clicking on the inline notification link', function () {
        beforeAll(function () {
          this.inlineNotificationList.clickLink(0);
        });

        it('takes us to the schema edit tab', function () {
          this.schemaTab.inEditMode();
        });
      });
    });

    describe('Schema Edit tab', function () {
      beforeAll(function () {
        this.expectedTableName = 'PUBLIC.RELIABILITY';
        this.expectedTableNameLabel = Translation.getTranslationForLocale(
          'SelfServiceDI.tableName.label'
        ).toUpperCase();
        this.expectedTableDescription = 'The description for PUBLIC.RELIABILITY';
        this.expectedColumnNames = [
          Translation.getTranslationForLocale('SelfServiceDI.ExternalSourceSchemaPreviewGrid.columnName.label'),
          Translation.getTranslationForLocale('SelfServiceDI.ExternalSourceSchemaPreviewGrid.columnAlias.label'),
          Translation.getTranslationForLocale('SelfServiceDI.ExternalSourceSchemaPreviewGrid.dataType.label'),
          Translation.getTranslationForLocale('SelfServiceDI.ExternalSourceSchemaPreviewGrid.description.label'),
        ];
        this.expectedFirstRowValues = [
          'ACTIVEPOWER_RESAMPLE_MEAN',
          'power',
          'double',
          'The description for the power field',
        ];
        this.expectedColumnMismatch = Translation.getTranslationForLocale(
          'SelfServiceDI.schemaMismatchColumn.dataTypeMismatch.text'
        );
      });

      it('shows correct table name', function () {
        this.schemaTab.tableNameList.getHeaders().assert('toEqual', [this.expectedTableNameLabel]);
        this.schemaTab.tableNameList.getDescriptions().assert('toEqual', [this.expectedTableName]);
      });

      it('shows correct table description', function () {
        this.schemaTab.tableDescriptionForm.getTextAreaValue('doc').assert('toEqual', this.expectedTableDescription);
      });

      describe('Table column edit grid', function () {
        it('shows correct columns (column name, column alias, etc)', function () {
          this.schemaTab.tableColumnGrid.columnNames().assert('toEqual', this.expectedColumnNames);
        });

        it('shows correct num of rows (table columns)', function () {
          this.schemaTab.tableColumnGrid.numberOfRows().assert('toEqual', 5);
        });

        it('show correct first row values', function () {
          this.schemaTab.tableColumnGrid.cellText(1, 2).assert('toEqual', this.expectedFirstRowValues[0]);
          this.schemaTab.tableColumnGrid.columnAlias(1).assert('toEqual', this.expectedFirstRowValues[1]);
          this.schemaTab.tableColumnGrid.cellText(1, 4).assert('toEqual', this.expectedFirstRowValues[2]);
          this.schemaTab.tableColumnGrid.columnDescription(1).assert('toEqual', this.expectedFirstRowValues[3]);
        });

        it('local columns are selected by default', function () {
          this.schemaTab.tableColumnGrid.rowSelected(1, true);
          this.schemaTab.tableColumnGrid.rowSelected(2, true);
        });

        it('remote only columns are not selected', function () {
          this.schemaTab.tableColumnGrid.rowSelected(2, false);
        });

        it('schema mismatch columns are highlighted', function () {
          this.schemaTab.tableColumnGrid.columnMismatchError(3, 2).assert('toEqual', this.expectedColumnMismatch);
        });
      });

      describe('Canceling schema edit', function () {
        beforeAll(function () {
          this.schemaTab.cancelSchemaChange();
        });

        it('goes to schema preview mode', function () {
          this.schemaTab.inPreviewMode(120);
        });

        it('error remains in the table column grid', function () {
          this.schemaTab.tableColumnGrid.columnMismatchError(3, 1).assert('toEqual', this.expectedColumnMismatch);
        });
      });

      describe('Saving schema', function () {
        beforeAll(function () {
          this.invalidFieldTitle = Translation.getTranslationForLocale('SelfServiceDI.InvalidInlineNotification.title');
          this.lessThanTwoCharactersError = Translation.getTranslationForLocale(
            'SelfServiceDI.AliasEditCell.length.hintText'
          );
          this.moreThan50CharactersError = Translation.getTranslationForLocale(
            'SelfServiceDI.AliasEditCell.length.hintText'
          );
          this.nonAlphaNumericError = Translation.getTranslationForLocale(
            'SelfServiceDI.AliasEditCell.alphanumeric.hintText'
          );
          this.duplicateError = 'A column with alias id already exists. Please change to a unique alias.';
          this.startWithNumberError = Translation.getTranslationForLocale(
            'SelfServiceDI.AliasEditCell.startWithNumber.hintText'
          );
          this.firstLetterUppercaseError = Translation.getTranslationForLocale(
            'SelfServiceDI.AliasEditCell.startWithUppercase.hintText'
          );
          this.moreThan500CharactersError = Translation.getTranslationForLocale(
            'SelfServiceDI.ExternalSourceDetailsForm.tableDescription.hintText'
          );

          this.descriptionLengthError = Translation.getTranslationForLocale(
            'SelfServiceDI.AliasDescreiptionCell.length.hintText'
          );

          this.schemaTab.editSchema();
        });

        it('correctly redirect to edit mode', function () {
          this.schemaTab.inEditMode();
        });

        describe('without deselecting column mismatch fields', function () {
          beforeAll(function () {
            this.schemaTab.saveSchemaChange();
          });

          it('shows error banner', function () {
            this.schemaTab.errorInlineNotification.rendered();
          });

          it('error banner has the correct text', function () {
            this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.invalidFieldTitle);
          });
        });

        describe('with invalid table description', function () {
          beforeAll(function () {
            this.schemaTab.tableDescriptionForm.setTextAreaValue('doc', 'w'.repeat(501));
            wait2Seconds();
            this.schemaTab.saveSchemaChange();
          });

          afterAll(function () {
            this.schemaTab.tableDescriptionForm.setTextAreaValue('doc', this.expectedTableDescription);
          });

          it('form has the correct hintText', function () {
            this.schemaTab.tableDescriptionForm
              .search(this.schemaTab.tableDescriptionForm.formFieldHintEl)
              .text()
              .assert('toEqual', this.moreThan500CharactersError);
          });

          it('shows error banner', function () {
            this.schemaTab.errorInlineNotification.rendered();
          });

          it('error banner has the correct text', function () {
            this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.invalidFieldTitle);
          });
        });

        describe('with invalid column alias', function () {
          beforeAll(function () {
            this.schemaTab.tableColumnGrid.clickCell(1, 1);
            this.schemaTab.tableColumnGrid.setColumnAlias(1, 'd');
          });

          afterAll(function () {
            this.schemaTab.tableColumnGrid.setColumnAlias(1, 'power');
          });

          describe('alias less than 2 characters', function () {
            it('row has correct column alias error', function () {
              this.schemaTab.tableColumnGrid.columnAliasError(1).assert('toEqual', this.lessThanTwoCharactersError);
            });

            it('shows error banner', function () {
              this.schemaTab.errorInlineNotification.rendered();
            });

            it('error banner has the correct text', function () {
              this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.invalidFieldTitle);
            });
          });

          describe('alias more than 50 characters', function () {
            beforeAll(function () {
              this.schemaTab.tableColumnGrid.setColumnAlias(1, 'w'.repeat(51));
            });

            it('row has correct column alias error', function () {
              this.schemaTab.tableColumnGrid.columnAliasError(1).assert('toEqual', this.moreThan50CharactersError);
            });

            it('shows error banner', function () {
              this.schemaTab.errorInlineNotification.rendered();
            });

            it('error banner has the correct text', function () {
              this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.invalidFieldTitle);
            });
          });

          describe('alias with non-aplhanumeric characters', function () {
            beforeAll(function () {
              this.schemaTab.tableColumnGrid.setColumnAlias(1, 'asdfwee ');
            });

            it('row has correct column alias error', function () {
              this.schemaTab.tableColumnGrid.columnAliasError(1).assert('toEqual', this.nonAlphaNumericError);
            });

            it('shows error banner', function () {
              this.schemaTab.errorInlineNotification.rendered();
            });

            it('error banner has the correct text', function () {
              this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.invalidFieldTitle);
            });
          });

          describe('alias starting with number', function () {
            beforeAll(function () {
              this.schemaTab.tableColumnGrid.setColumnAlias(1, '3sasfadsf');
            });

            it('row has correct column alias error', function () {
              this.schemaTab.tableColumnGrid.columnAliasError(1).assert('toEqual', this.startWithNumberError);
            });

            it('shows error banner', function () {
              this.schemaTab.errorInlineNotification.rendered();
            });

            it('error banner has the correct text', function () {
              this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.invalidFieldTitle);
            });
          });

          describe('alias starting with uppercase', function () {
            beforeAll(function () {
              this.schemaTab.tableColumnGrid.setColumnAlias(1, 'PascalCase');
            });

            it('row has correct column alias error', function () {
              this.schemaTab.tableColumnGrid.columnAliasError(1).assert('toEqual', this.startWithNumberError);
            });

            it('shows error banner', function () {
              this.schemaTab.errorInlineNotification.rendered();
            });

            it('error banner has the correct text', function () {
              this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.invalidFieldTitle);
            });
          });

          describe('with duplicate column alias', function () {
            beforeAll(function () {
              this.schemaTab.tableColumnGrid.setColumnAlias(1, 'id');
            });

            it('row has correct column alias error', function () {
              this.schemaTab.tableColumnGrid.columnAliasError(1).assert('toEqual', this.duplicateError);
            });

            it('shows error banner', function () {
              this.schemaTab.errorInlineNotification.rendered();
            });

            it('error banner has the correct text', function () {
              this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.invalidFieldTitle);
            });
          });
        });

        describe('with invalid column description', function () {
          beforeAll(function () {
            this.schemaTab.tableColumnGrid.setColumnDescription(1, 'w'.repeat(501));
            wait2Seconds();
            this.schemaTab.saveSchemaChange();
          });

          afterAll(function () {
            this.schemaTab.tableColumnGrid.setColumnDescription(1, this.columnDescription);
          });

          it('row input has the correct hintText', function () {
            this.schemaTab.tableColumnGrid.columnDescriptionError(1).assert('toEqual', this.descriptionLengthError);
          });

          it('shows error banner', function () {
            this.schemaTab.errorInlineNotification.rendered();
          });

          it('error banner has the correct text', function () {
            this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.invalidFieldTitle);
          });
        });

        describe('deselecting all columns', function () {
          beforeAll(function () {
            this.deselectAllTitle = Translation.getTranslationForLocale(
              'SelfServiceDI.schemaTabNoSelectedError.subtitle.label'
            );
            this.schemaTab.tableColumnGrid.selectAll();
            wait2Seconds();
            this.schemaTab.saveSchemaChange();
          });

          afterAll(function () {
            this.schemaTab.tableColumnGrid.selectAll();
          });

          it('shows error banner', function () {
            this.schemaTab.errorInlineNotification.rendered();
          });

          it('error banner has the correct text', function () {
            this.schemaTab.errorInlineNotification.getTitleText().assert('toEqual', this.deselectAllTitle);
          });
        });

        describe('deselecting column mismatch fields and all fields are valid', function () {
          beforeAll(function () {
            this.successBannerTitle = 'Successfully updated the table schema for: PUBLIC.RELIABILITY';
            this.schemaTab.tableColumnGrid.selectRow(3);
            wait2Seconds();
            this.schemaTab.saveSchemaChange();
          });

          it('shows success banner', function () {
            this.messageBanner.bannerPrimaryTextAt(1).assert('toEqual', this.successBannerTitle);
            this.messageBanner.assertBannerTypeAt(1, UiSdlMessageBannerType.SUCCESS);
          });

          it('goes to schema preview mode', function () {
            this.schemaTab.inPreviewMode(120);
          });

          it('errors inline notification list goes away', function () {
            this.inlineNotificationList.notExists();
          });
        });
      });
    });
  });
});
