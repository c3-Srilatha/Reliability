/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_SelectExistingDataSources';

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
  xdescribe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      SqlSourceSystem.removeAll();
      SqlSourceCollection.removeAll();
      this.client = LukeBrowser.init();
      this.externalSourceSearchBarSelector =
        '.c3-metadata-id-selfservicedi-externalsourcessearchbar input.c3-form-field';
      this.bottomSheetSearchSelector = '.information-card-parent:nth-child(1) .information-card-subtitle:nth-child(2)';
      this.bottomSheetPostgresSelector =
        '.information-card-parent:nth-child(4) .information-card-subtitle:nth-child(2)';
      this.bottomSheetBigQuerySelector =
        '.information-card-parent:nth-child(3) .information-card-subtitle:nth-child(2)';
      this.bottomSheetSnowflakeSelector =
        '.information-card-parent:nth-child(1) .information-card-subtitle:nth-child(2)';
      this.bottomSheetDeltaLakeSelector =
        '.information-card-parent:nth-child(2) .information-card-subtitle:nth-child(2)';
      this.noResultsSelector = 'p.data-connector-categories-list-empty-state';
      this.pingStatusSelector =
        '.c3-metadata-id-selfservicedi-status .text-element.text-element-with-prepend-avatar.md';
      this.externalSourcesSidePanel = LukeTestUiSdlSidePanel.make({ luke: this.client }, true);
      this.previewSqlTableDataGrid = LukeTestPreviewSqlTableDataGrid.make({ luke: this.client }, true);
      this.treeNode = LukeTestPresentationalTreeView.make({ luke: this.client }, true);
      this.bottomSheet = LukeTestSelfServiceDIBottomSheet.make({ luke: this.client }, true);
      this.connectorForm = LukeTestSelfServiceDIConnectorForm.make({ luke: this.client }, true);
      this.multiStepComponent = LukeTestMultiStepComponent.make({ luke: this.client }, true);
      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          externalSourcesSidePanel: this.externalSourcesSidePanel,
          dataGrid: this.previewSqlTableDataGrid,
          bottomSheet: this.bottomSheet,
          connectorForm: this.connectorForm,
          previewSqlSourceDataContainer: this.previewSqlSourceDataContainer,
          multiStepComponent: this.multiStepComponent,
        },
        true
      );
      this.bottomSheetPostgresSelectedSelector = this.bottomSheet.buttonSheetSelectedConnectorSelector('Postgres');
      this.bottomSheetSnowflakeSelectedSelector = this.bottomSheet.buttonSheetSelectedConnectorSelector('Snowflake');
      this.bottomSheetBigQuerySelectedSelector = this.bottomSheet.buttonSheetSelectedConnectorSelector('Big Query');
      this.bottomSheetDeltaLakeSelectedSelector = this.bottomSheet.buttonSheetSelectedConnectorSelector('Delta Lake');

      // TODO PLAT-83664 enable user
      /*
       * This.basicUser = TestIdp.createTestUsersForGroup('SelfServiceDI.Role.User')[0];
       * this.basicUserToken = SessionToken.generate(this.basicUser).signedToken;
       * this.client.setCookie({
       *   name: 'c3auth',
       *   url: this.selfServiceDIPage.getUrl(),
       *   value: this.basicUserToken,
       * });
       */
    });

    afterAll(function () {
      this.client.closeWindow();
    });

    describe('select connector', function () {
      describe('for snowflake connector', function () {
        beforeAll(function () {
          SqlSourceSystem.removeAll();
          SqlSourceCollection.removeAll();
          this.name = 'snowflakeTest';
          this.password = SelfServiceDIJdbcStoreConfig.forName('selfServiceDISnowflake').secretValue('secretPassword');
          this.host = 'zh52579.snowflakecomputing.com';
          this.port = '-1';
          this.user = 'exmachinaqa';
          this.warehouse = 'COMPUTE_WH';
          this.database = 'EXMACHINA_DEMO';
          this.selfServiceDIPage.openPage();
        });

        it('home page is rendered', function () {
          this.selfServiceDIPage.rendered();
        });

        describe('in the bottom sheet', function () {
          beforeAll(function () {
            this.selfServiceDIPage.addDataSource();
          });

          it('search post', function () {
            this.selfServiceDIPage.search(this.externalSourceSearchBarSelector).setValue('post');
          });

          it('Postgres is rendered', function () {
            this.selfServiceDIPage.bottomSheet
              .search(this.bottomSheetSearchSelector)
              .text()
              .assert('toContain', Translation.getTranslationForLocale('SelfServiceDI.Ui.DataConnector.noProvider'));
          });

          it('search goog', function () {
            this.selfServiceDIPage.search(this.externalSourceSearchBarSelector).setValue('goog');
          });

          it('Big Query is rendered', function () {
            this.selfServiceDIPage.bottomSheet
              .search(this.bottomSheetSearchSelector)
              .text()
              .assert(
                'toContain',
                Translation.getTranslationForLocale('SelfServiceDI.Ui.DataConnector.providerLabel').replace(
                  '{provider}',
                  'Google'
                )
              );
          });

          it('search xyz', function () {
            this.selfServiceDIPage.search(this.externalSourceSearchBarSelector).setValue('xyz');
          });

          it('no data connector is rendered', function () {
            this.client.search(this.noResultsSelector).text().assert('toContain', 'No results.');
          });

          it('no data connector is rendered', function () {
            this.client.search(this.noResultsSelector).text().assert('toContain', 'Clear search');
          });

          it('clear search', function () {
            this.selfServiceDIPage.search(this.externalSourceSearchBarSelector).setValue('');
          });

          it('Postgres is rendered', function () {
            this.selfServiceDIPage.bottomSheet
              .search(this.bottomSheetPostgresSelector)
              .text()
              .assert('toContain', Translation.getTranslationForLocale('SelfServiceDI.Ui.DataConnector.noProvider'));
          });

          it('Big Query is rendered', function () {
            this.selfServiceDIPage.bottomSheet
              .search(this.bottomSheetBigQuerySelector)
              .text()
              .assert(
                'toContain',
                Translation.getTranslationForLocale('SelfServiceDI.Ui.DataConnector.providerLabel').replace(
                  '{provider}',
                  'Google'
                )
              );
          });

          it('Delta Lake is rendered', function () {
            this.selfServiceDIPage.bottomSheet
              .search(this.bottomSheetDeltaLakeSelector)
              .text()
              .assert(
                'toContain',
                Translation.getTranslationForLocale('SelfServiceDI.Ui.DataConnector.providerLabel').replace(
                  '{provider}',
                  'Databricks'
                )
              );
          });

          it('Snowflake is rendered', function () {
            this.selfServiceDIPage.bottomSheet
              .search(this.bottomSheetSnowflakeSelector)
              .text()
              .assert(
                'toContain',
                Translation.getTranslationForLocale('SelfServiceDI.Ui.DataConnector.providerLabel').replace(
                  '{provider}',
                  'Snowflake'
                )
              );
          });
          describe('choose snowflake and click next to proceed data connector form', function () {
            beforeAll(function () {
              this.selfServiceDIPage.bottomSheet.search(this.bottomSheetSnowflakeSelector).click();
              this.multiStepComponent.proceed();
            });

            describe('set value in data connector form', function () {
              it('data connector form name input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('name', this.name);
              });

              it('data connector form host input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('serverEndpoint', this.host);
              });

              it('data connector form port input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('port', this.port);
              });

              it('data connector form user input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('username', this.user);
              });

              it('data connector form password input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('password', this.password);
              });

              it('data connector form warehouse input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('warehouse', this.warehouse);
              });

              it('data connector form database input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('database', this.database);
                wait3Seconds();
              });
            });
          });

          describe('click test connection button', function () {
            beforeAll(function () {
              this.bottomSheet.testConnectionButtonClick();
            });

            it('shows success', function () {
              wait3Seconds();
              this.selfServiceDIPage.search(this.pingStatusSelector).text().assert('toContain', 'Success');
            });
          });

          describe('click back button', function () {
            beforeAll(function () {
              this.multiStepComponent.back();
            });

            it('Snowflake is selected', function () {
              this.bottomSheetSnowflakeSelectedSelector.assert('exists');
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            describe('check value in data connector form', function () {
              it('data connector form rendered', function () {
                this.selfServiceDIPage.connectorForm.rendered();
              });

              it('data connector form name input', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('name').assert('toEqual', this.name);
              });

              it('data connector form host input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('serverEndpoint').assert('toEqual', this.host);
              });

              it('data connector form port input exist', function () {
                this.selfServiceDIPage.connectorForm
                  .getInputValue('port')
                  .transformToInt()
                  .assert('toEqual', this.port);
              });

              it('data connector form user input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('username').assert('toEqual', this.user);
              });

              it('data connector form warehouse input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('warehouse').assert('toEqual', this.warehouse);
              });

              it('data connector form database input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('database').assert('toEqual', this.database);
              });

              it('data connector form password input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('password').assert('toEqual', this.password);
              });
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            describe('in the data preview ', function () {
              it('shows empty state on the preview grid', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer.search('.c3-sdl-empty-state').assert('toExist');
              });

              it('shows Preview and select data (optional)', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer
                  .search('.c3-card-title-subtitle-container')
                  .text()
                  .assert('toContain', 'Preview and select data (optional)');
                wait3Seconds();
              });

              it('search rel', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer.search('input.c3-form-field').setValue('rel');
                wait3Seconds();
              });

              it('shows EXMRELIABILITY in the tree node', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer
                  .treeNodeSelector('EXMRELIABILITY')
                  .text()
                  .assert('toContain', 'EXMRELIABILITY');
              });

              it('shows RELIABILITY', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer
                  .treeNodeSelector('RELIABILITY')
                  .text()
                  .assert('toContain', 'RELIABILITY');
                wait3Seconds();
                wait3Seconds();
              });
            });
          });

          describe('click RELIABILITY and checkbox', function () {
            beforeAll(function () {
              this.selfServiceDIPage.previewSqlSourceDataContainer.treeNodeSelector('RELIABILITY').click();
              this.treeNode.selectTreeNode();
            });

            describe('grid columns', function () {
              beforeAll(function () {
                this.columnNames = [
                  'TIMESTAMP',
                  'ACTIVEPOWER_RESAMPLE_MEAN',
                  'GENERATORROTATIONSPEED_RESAMPLE_MEAN',
                  'GEAROILTEMPERATURE_RESAMPLE_MEAN',
                ];
              });

              it('has the correct columns', function () {
                wait3Seconds();
                wait3Seconds();
                wait3Seconds();
                this.selfServiceDIPage.dataGrid.columnNames().assert('toEqual', this.columnNames);
              });
            });
          });
        });

        describe('click complete button and refresh the page', function () {
          beforeAll(function () {
            this.selfServiceDIPage.multiStepComponent.proceed();
          });

          // Need refresh the page once the table shows up

          it('refresh page', function () {
            wait3Seconds();
            wait3Seconds();
            wait3Seconds();
            this.selfServiceDIPage.openPage();
            wait3Seconds();
          });
        });

        describe('open the new page and cick to expand tree node', function () {
          beforeAll(function () {
            this.treeNode.treeNodeExpandClick();
          });

          it('the schema name exist in tree node', function () {
            this.treeNode.treeNodeTableNameSelector('PUBLIC.RELIABILITY').assert('toExist');
          });
        });
      });

      describe('for postgres connector', function () {
        beforeAll(function () {
          SqlSourceSystem.removeAll();
          SqlSourceCollection.removeAll();
          this.name = 'postgresTest';
          this.password = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIPostgres').secretValue('secretPassword');
          this.host = '34.127.26.237';
          this.port = '5432';
          this.user = 'postgres';
          this.datastore = 'postgres';
          this.database = 'qa';
          this.selfServiceDIPage.openPage();
        });

        it('home page is rendered', function () {
          this.selfServiceDIPage.rendered();
          wait3Seconds();
        });

        describe('in the bottom sheet', function () {
          describe('choose postgres and click next to proceed data connector form', function () {
            beforeAll(function () {
              this.selfServiceDIPage.addDataSource();
              this.selfServiceDIPage.bottomSheet.search(this.bottomSheetPostgresSelector).click();
              this.selfServiceDIPage.multiStepComponent.proceed();
            });

            describe('set value in data connector form', function () {
              it('data connector form name input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('name', this.name);
              });

              it('data connector form host input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('serverEndpoint', this.host);
              });

              it('data connector form port input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('port', this.port);
              });

              it('data connector form user input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('username', this.user);
              });

              it('data connector form password input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('password', this.password);
              });

              it('data connector form database input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('database', this.database);
                wait3Seconds();
              });
            });
          });

          describe('click test connection button', function () {
            beforeAll(function () {
              this.bottomSheet.testConnectionButtonClick();
            });

            it('shows success', function () {
              this.selfServiceDIPage.search(this.pingStatusSelector).text().assert('toContain', 'Success');
            });
          });

          describe('click back button', function () {
            beforeAll(function () {
              this.multiStepComponent.back();
            });

            it('Postgres is selected', function () {
              this.bottomSheetPostgresSelectedSelector.assert('exists');
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            describe('check value in data connector form', function () {
              it('data connector form rendered', function () {
                this.selfServiceDIPage.connectorForm.rendered();
              });

              it('data connector form name input', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('name').assert('toEqual', this.name);
              });

              it('data connector form host input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('serverEndpoint').assert('toEqual', this.host);
              });

              it('data connector form port input exist', function () {
                this.selfServiceDIPage.connectorForm
                  .getInputValue('port')
                  .transformToInt()
                  .assert('toEqual', this.port);
              });

              it('data connector form user input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('username').assert('toEqual', this.user);
              });

              it('data connector form database input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('database').assert('toEqual', this.database);
              });

              it('data connector form password input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('password').assert('toEqual', this.password);
              });
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            describe('in the data preview ', function () {
              it('shows empty state on the preview grid', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer.search('.c3-sdl-empty-state').assert('toExist');
              });

              it('shows Preview and select data (optional)', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer
                  .search('.c3-card-title-subtitle-container')
                  .text()
                  .assert('toContain', 'Preview and select data (optional)');
                wait3Seconds();
              });

              it('search vendors', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer.search('input.c3-form-field').setValue('vendors');
                wait3Seconds();
              });

              it('shows vendors', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer
                  .treeNodeSelector('vendors')
                  .text()
                  .assert('toContain', 'vendors');
                wait3Seconds();
                wait3Seconds();
              });
            });
          });

          describe('click vendors and checkbox', function () {
            beforeAll(function () {
              this.selfServiceDIPage.previewSqlSourceDataContainer.treeNodeSelector('vendors').click();
              this.treeNode.selectTreeNode();
            });

            describe('grid columns', function () {
              beforeAll(function () {
                this.columnNames = ['vendor_id', 'vendor_name'];
              });

              it('has the correct columns', function () {
                wait3Seconds();
                wait3Seconds();
                wait3Seconds();
                this.selfServiceDIPage.dataGrid.columnNames().assert('toEqual', this.columnNames);
              });
            });
          });
        });

        describe('click complete button and refresh the page', function () {
          beforeAll(function () {
            this.selfServiceDIPage.multiStepComponent.proceed();
          });

          // Need refresh the page once the table shows up
          it('refresh page', function () {
            wait3Seconds();
            wait3Seconds();
            wait3Seconds();
            this.selfServiceDIPage.openPage();
            wait3Seconds();
          });
        });

        describe('open the new page and cick to expand tree node', function () {
          beforeAll(function () {
            this.treeNode.treeNodeExpandClick();
          });

          it('the schema name exist in tree node', function () {
            this.treeNode.treeNodeTableNameSelector('public.vendors').assert('toExist');
          });
        });
      });

      describe('for delta lake connector', function () {
        beforeAll(function () {
          SqlSourceSystem.removeAll();
          SqlSourceCollection.removeAll();
          this.name = 'deltaLakeTest';
          this.password = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIDeltaLake').secretValue('secretPassword');
          this.host = 'adb-5323252185014996.16.azuredatabricks.net';
          this.port = '443';
          this.user = 'token';
          this.datastore = 'databricks';
          this.database = 'default';
          this.httpPath = 'sql/protocolv1/o/5323252185014996/0225-075242-935ntiae';
          this.selfServiceDIPage.openPage();
        });

        it('home page is rendered', function () {
          this.selfServiceDIPage.rendered();
          wait3Seconds();
        });

        describe('in the bottom sheet', function () {
          describe('choose delta lake and click next to proceed data connector form', function () {
            beforeAll(function () {
              this.selfServiceDIPage.addDataSource();
              this.selfServiceDIPage.bottomSheet.search(this.bottomSheetDeltaLakeSelector).click();
              this.selfServiceDIPage.multiStepComponent.proceed();
            });

            describe('set value in data connector form', function () {
              it('data connector form name input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('name', this.name);
              });

              it('data connector form host input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('serverEndpoint', this.host);
              });

              it('data connector form port input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('port', this.port);
              });

              it('data connector form user input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('username', this.user);
              });

              it('data connector form password input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('password', this.password);
              });

              it('data connector form httpPath input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('httpPath', this.httpPath);
              });

              it('data connector form database input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('database', this.database);
                wait3Seconds();
              });

              describe('click test connection button', function () {
                beforeAll(function () {
                  this.bottomSheet.testConnectionButtonClick();
                });

                it('shows success', function () {
                  this.selfServiceDIPage.search(this.pingStatusSelector).text().assert('toContain', 'Success');
                });
              });

              describe('click back button', function () {
                beforeAll(function () {
                  this.multiStepComponent.back();
                });

                it('delta lake is selected', function () {
                  this.bottomSheetDeltaLakeSelectedSelector.assert('exists');
                });
              });

              describe('click next button', function () {
                beforeAll(function () {
                  this.multiStepComponent.proceed();
                });

                it('data connector form rendered', function () {
                  this.selfServiceDIPage.connectorForm.rendered();
                });

                it('data connector form name input', function () {
                  this.selfServiceDIPage.connectorForm.getInputValue('name').assert('toEqual', this.name);
                });

                it('data connector form host input exist', function () {
                  this.selfServiceDIPage.connectorForm.getInputValue('serverEndpoint').assert('toEqual', this.host);
                });

                it('data connector form port input exist', function () {
                  this.selfServiceDIPage.connectorForm
                    .getInputValue('port')
                    .transformToInt()
                    .assert('toEqual', this.port);
                });

                it('data connector form user input exist', function () {
                  this.selfServiceDIPage.connectorForm.getInputValue('username').assert('toEqual', this.user);
                });

                it('data connector form database input exist', function () {
                  this.selfServiceDIPage.connectorForm.getInputValue('database').assert('toEqual', this.database);
                });

                it('data connector form password input exist', function () {
                  this.selfServiceDIPage.connectorForm.getInputValue('password').assert('toEqual', this.password);
                });

                it('data connector form httpPath input exist', function () {
                  this.selfServiceDIPage.connectorForm.getInputValue('httpPath').assert('toEqual', this.httpPath);
                });
              });
            });

            describe('click next button', function () {
              beforeAll(function () {
                this.multiStepComponent.proceed();
              });

              describe('in the data preview ', function () {
                it('shows empty state on the preview grid', function () {
                  this.selfServiceDIPage.previewSqlSourceDataContainer.search('.c3-sdl-empty-state').assert('toExist');
                });

                it('shows Preview and select data (optional)', function () {
                  this.selfServiceDIPage.previewSqlSourceDataContainer
                    .search('.c3-card-title-subtitle-container')
                    .text()
                    .assert('toContain', 'Preview and select data (optional)');
                  wait3Seconds();
                });

                it('search iris', function () {
                  this.selfServiceDIPage.previewSqlSourceDataContainer.search('input.c3-form-field').setValue('iris');
                  wait3Seconds();
                });

                it('shows iris', function () {
                  this.selfServiceDIPage.previewSqlSourceDataContainer
                    .treeNodeSelector('iris')
                    .text()
                    .assert('toContain', 'iris');
                  wait3Seconds();
                  wait3Seconds();
                });
              });
            });

            describe('click iris and checkbox', function () {
              beforeAll(function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer.treeNodeSelector('iris').click();
                this.treeNode.selectTreeNode();
              });

              describe('grid columns', function () {
                beforeAll(function () {
                  this.columnNames = [
                    'Id',
                    'SepalLengthCm',
                    'SepalWidthCm',
                    'PetalLengthCm',
                    'PetalWidthCm',
                    'Species',
                    'Encoded',
                  ];
                });

                it('has the correct columns', function () {
                  wait3Seconds();
                  wait3Seconds();
                  wait3Seconds();
                  this.selfServiceDIPage.dataGrid.columnNames().assert('toEqual', this.columnNames);
                });
              });
            });
          });
        });

        describe('click complete button and refresh the page', function () {
          beforeAll(function () {
            this.selfServiceDIPage.multiStepComponent.proceed();
          });

          // Need refresh the page once the table shows up
          it('refresh page', function () {
            wait3Seconds();
            wait3Seconds();
            wait3Seconds();
            this.selfServiceDIPage.openPage();
            wait3Seconds();
          });
        });

        describe('open the new page and cick to expand tree node', function () {
          beforeAll(function () {
            this.treeNode.treeNodeExpandClick();
          });

          it('the schema name exist in tree node', function () {
            this.treeNode.treeNodeTableNameSelector('default.iris').assert('toExist');
          });
        });
      });

      describe('for bigquery connector', function () {
        beforeAll(function () {
          SqlSourceSystem.removeAll();
          SqlSourceCollection.removeAll();
          this.name = 'bigqueryTesting';
          this.clientSecret = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIBigQuery')
            .secretValue('secretPassword')
            .get('clientSecret');
          this.clientId = '880418390324-ubcrs77531frsioip33pqlb2amchodrr.apps.googleusercontent.com';
          this.accessToken = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIBigQuery')
            .secretValue('secretPassword')
            .get('accessToken');
          this.refreshToken = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIBigQuery')
            .secretValue('secretPassword')
            .get('refreshToken');
          this.projectId = 'aml-demo-317700';
          this.selfServiceDIPage.openPage();
        });

        it('home page is rendered', function () {
          this.selfServiceDIPage.rendered();
          wait3Seconds();
        });

        describe('in the bottom sheet', function () {
          describe('choose bigquery and click next to proceed data connector form', function () {
            beforeAll(function () {
              this.selfServiceDIPage.addDataSource();
              this.selfServiceDIPage.bottomSheet.search(this.bottomSheetBigQuerySelector).click();
              this.selfServiceDIPage.multiStepComponent.proceed();
            });

            describe('set value in data connector form', function () {
              it('data connector form name input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('name', this.name);
              });

              it('data connector form clientId input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('clientId', this.clientId);
              });

              it('data connector form accessToken input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('accessToken', this.accessToken);
              });

              it('data connector form refreshToken input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('refreshToken', this.refreshToken);
              });

              it('data connector form projectId input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('projectId', this.projectId);
              });

              it('data connector form clientSecret input', function () {
                this.selfServiceDIPage.connectorForm.setInputValue('clientSecret', this.clientSecret);
                wait3Seconds();
              });
            });
          });

          describe('click test connection button', function () {
            beforeAll(function () {
              this.bottomSheet.testConnectionButtonClick();
            });

            it('shows success', function () {
              this.selfServiceDIPage.search(this.pingStatusSelector).text().assert('toContain', 'Success');
            });
          });

          describe('click back button', function () {
            beforeAll(function () {
              this.multiStepComponent.back();
            });

            it('BigQuery is selected', function () {
              this.bottomSheetBigQuerySelectedSelector.assert('exists');
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            describe('check value in data connector form', function () {
              it('data connector form rendered', function () {
                this.selfServiceDIPage.connectorForm.rendered();
              });

              it('data connector form name input', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('name').assert('toEqual', this.name);
              });

              it('data connector form clientSecret input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('clientSecret').assert('toEqual', this.clientSecret);
              });

              it('data connector form clientId input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('clientId').assert('toEqual', this.clientId);
              });

              it('data connector form accessToken input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('accessToken').assert('toEqual', this.accessToken);
              });

              it('data connector form refreshToken input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('refreshToken').assert('toEqual', this.refreshToken);
              });

              it('data connector form projectId input exist', function () {
                this.selfServiceDIPage.connectorForm.getInputValue('projectId').assert('toEqual', this.projectId);
              });
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            describe('in the data preview ', function () {
              it('shows empty state on the preview grid', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer.search('.c3-sdl-empty-state').assert('toExist');
              });

              it('shows Preview and select data (optional)', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer
                  .search('.c3-card-title-subtitle-container')
                  .text()
                  .assert('toContain', 'Preview and select data (optional)');
                wait3Seconds();
              });

              it('search TestTimestamps', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer
                  .search('input.c3-form-field')
                  .setValue('TestTimestamps');
                wait3Seconds();
              });

              it('shows TestTimestamps', function () {
                this.selfServiceDIPage.previewSqlSourceDataContainer
                  .treeNodeSelector('TestTimestamps')
                  .text()
                  .assert('toContain', 'TestTimestamps');
                wait3Seconds();
                wait3Seconds();
              });
            });
          });

          describe('click TestTimestamps and checkbox', function () {
            beforeAll(function () {
              this.selfServiceDIPage.previewSqlSourceDataContainer.treeNodeSelector('TestTimestamps').click();
              this.treeNode.selectTreeNode();
            });

            describe('grid columns', function () {
              beforeAll(function () {
                this.columnNames = [
                  'id',
                  'native_timestamp',
                  'iso_string',
                  'us_format_string',
                  'eu_format_string',
                  'unix_timestamp',
                  'with_timezone_string',
                ];
              });

              it('has the correct columns', function () {
                wait3Seconds();
                wait3Seconds();
                wait3Seconds();
                this.selfServiceDIPage.dataGrid.columnNames().assert('toEqual', this.columnNames);
              });
            });
          });
        });

        describe('click complete button and refresh the page', function () {
          beforeAll(function () {
            this.selfServiceDIPage.multiStepComponent.proceed();
          });

          // Need refresh the page once the table shows up
          it('refresh page', function () {
            wait3Seconds();
            wait3Seconds();
            wait3Seconds();
            this.selfServiceDIPage.openPage();
            wait3Seconds();
          });
        });

        describe('open the new page and cick to expand tree node', function () {
          beforeAll(function () {
            this.treeNode.treeNodeExpandClick();
          });

          it('the schema name exist in tree node', function () {
            this.treeNode.treeNodeTableNameSelector('c3shared.TestTimestamps').assert('toExist');
          });
        });
      });
    });
  });
});
