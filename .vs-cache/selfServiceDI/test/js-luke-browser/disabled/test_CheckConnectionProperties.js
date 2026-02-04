/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_CheckConnectionProperties';

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
      this.client = LukeBrowser.init();
      SqlSourceSystem.removeAll();
      SqlSourceCollection.removeAll();
      this.pingStatusSelector =
        '.c3-metadata-id-selfservicedi-status .text-element.text-element-with-prepend-avatar.md';
      this.presentationalTreeView = LukeTestPresentationalTreeView.make({ luke: this.client }, true);
      this.multiStepComponentNextSelector = '.multi-step-component-footer .c3-button-primary';
      this.connectorForm = LukeTestSelfServiceDIConnectorForm.make({ luke: this.client }, true);
      this.externalSourcesSidePanel = LukeTestUiSdlSidePanel.make({ luke: this.client }, true);
      this.multiStepComponent = LukeTestMultiStepComponent.make({ luke: this.client }, true);
      this.editConnectorModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
      this.PreviewSqlTableDataGrid = LukeTestPreviewSqlTableDataGrid.make({ luke: this.client }, true);
      this.presentationalTreeNodeSelector = '.presentational-tree-node-container .c3-button-ellipsis-h';
      this.multiStepComponentCancelSelector = '.multi-step-component-cancel-button';
      this.bottomSheetCancelButton = LukeTestUiSdlButton.make(
        {
          luke: this.client,
          parentSelector: '.multi-step-component-secondary-button',
        },
        true
      );

      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          externalSourcesSidePanel: this.externalSourcesSidePanel,
          deleteModal: this.deleteModal,
          connectorForm: this.connectorForm,
          multiStepComponent: this.multiStepComponent,
          presentationalTreeView: this.presentationalTreeView,
        },
        true
      );

      /*
       * Disable the user because its causing issue right now
       *  this.basicUser = TestIdp.createTestUsersForGroup('SelfServiceDI.Role.User')[0];
       *  this.basicUserToken = SessionToken.generate(this.basicUser).signedToken;
       *  this.client.setCookie({
       *    name: 'c3auth',
       *    url: this.selfServiceDIPage.getUrl(),
       *    value: this.basicUserToken,
       *  });
       */

      this.selfServiceDIPage.openPage();
    });

    describe('homepage', function () {
      describe('Testing the selfServiceDI homePage', function () {
        describe('postgres', function () {
          beforeAll(function () {
            this.password = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIPostgres').secretValue('secretPassword');
            SelfServiceDITestUtil.setUpSourceSystemAndSourceCollection(
              'postgresTest',
              this.password,
              'postgres',
              false
            );
            this.treeNodeSelector = '.tree-node-content.c3-truncate[title="postgresTest"]';
          });
          it('is rendered', function () {
            this.selfServiceDIPage.rendered();
            wait3Seconds();
            wait3Seconds();
          });

          it('tree node is rendered', function () {
            this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });

            it('name is disabled', function () {
              this.client
                .search(
                  '.c3-form-group-disabled .c3-input-filled[aria-label="SelfServiceDI.DataConnectorForm.name.label.text"]'
                )
                .assert('toExist');
            });

            it('cancel button not exist', function () {
              this.bottomSheetCancelButton.notExists();
            });

            it('data connector form password input', function () {
              this.selfServiceDIPage.connectorForm.setInputValue('password', this.password);
              wait3Seconds();
            });
          });

          describe('click test connection button', function () {
            beforeAll(function () {
              this.bottomSheet.testConnectionButtonClick();
            });

            it('shows success', function () {
              wait3Seconds();
              this.editConnectorModal.search(this.pingStatusSelector).text().assert('toContain', 'Success');
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });
          });

          describe('cancel the edit process', function () {
            beforeAll(function () {
              this.multiStepComponent.cancel();
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });
          });

          describe('click on close modal', function () {
            beforeAll(function () {
              this.editConnectorModal.clickButton('close');
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });
        });

        describe('snowflake', function () {
          beforeAll(function () {
            SqlSourceSystem.removeAll();
            this.password =
              SelfServiceDIJdbcStoreConfig.forName('selfServiceDISnowflake').secretValue('secretPassword');
            SelfServiceDITestUtil.setUpSourceSystemAndSourceCollection(
              'snowflakeTest',
              this.password,
              'snowflake',
              false
            );
            this.treeNodeSelector = '.tree-node-content.c3-truncate[title="snowflakeTest"]';
            this.selfServiceDIPage.openPage();
          });

          it('is rendered', function () {
            this.selfServiceDIPage.rendered();
          });

          it('tree node is rendered', function () {
            this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });

            it('name is disabled', function () {
              this.client
                .search(
                  '.c3-form-group-disabled .c3-input-filled[aria-label="SelfServiceDI.DataConnectorForm.name.label.text"]'
                )
                .assert('toExist');
            });

            it('cancel button not exist', function () {
              this.bottomSheetCancelButton.notExists();
            });

            it('data connector form password input', function () {
              this.selfServiceDIPage.connectorForm.setInputValue('password', this.password);
              wait3Seconds();
            });
          });

          describe('click test connection button', function () {
            beforeAll(function () {
              this.bottomSheet.testConnectionButtonClick();
            });

            it('shows success', function () {
              wait3Seconds();
              this.editConnectorModal.search(this.pingStatusSelector).text().assert('toContain', 'Success');
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });
          });

          describe('cancel the edit process', function () {
            beforeAll(function () {
              this.multiStepComponent.cancel();
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });
          });

          describe('click on close modal', function () {
            beforeAll(function () {
              this.editConnectorModal.clickButton('close');
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });
        });

        describe('delta lake', function () {
          beforeAll(function () {
            SqlSourceSystem.removeAll();
            this.password =
              SelfServiceDIJdbcStoreConfig.forName('selfServiceDIDeltaLake').secretValue('secretPassword');
            SelfServiceDITestUtil.setUpSourceSystemAndSourceCollection(
              'deltaLakeTest',
              this.password,
              'deltaLake',
              false
            );
            this.treeNodeSelector = '.tree-node-content.c3-truncate[title="deltaLakeTest"]';
            this.selfServiceDIPage.openPage();
          });

          it('is rendered', function () {
            this.selfServiceDIPage.rendered();
          });

          it('tree node is rendered', function () {
            this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });

            it('name is disabled', function () {
              this.client
                .search(
                  '.c3-form-group-disabled .c3-input-filled[aria-label="SelfServiceDI.DataConnectorForm.name.label.text"]'
                )
                .assert('toExist');
            });

            it('cancel button not exist', function () {
              this.bottomSheetCancelButton.notExists();
            });

            it('data connector form password input', function () {
              this.selfServiceDIPage.connectorForm.setInputValue('password', this.password);
              wait3Seconds();
            });
          });

          describe('click test connection button', function () {
            beforeAll(function () {
              this.bottomSheet.testConnectionButtonClick();
            });

            it('shows success', function () {
              wait3Seconds();
              this.editConnectorModal.search(this.pingStatusSelector).text().assert('toContain', 'Success');
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });
          });

          describe('cancel the edit process', function () {
            beforeAll(function () {
              this.multiStepComponent.cancel();
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });
          });

          describe('click on close modal', function () {
            beforeAll(function () {
              this.editConnectorModal.clickButton('close');
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });
        });

        describe('bigquery', function () {
          beforeAll(function () {
            SqlSourceSystem.removeAll();
            this.clientSecret = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIBigQuery')
              .secretValue('secretPassword')
              .get('clientSecret');
            this.accessToken = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIBigQuery')
              .secretValue('secretPassword')
              .get('accessToken');
            this.refreshToken = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIBigQuery')
              .secretValue('secretPassword')
              .get('refreshToken');
            SelfServiceDITestUtil.setUpSourceSystemAndSourceCollection(
              'bigqueryTesting',
              { clientSecret: this.clientSecret, accessToken: this.accessToken, refreshToken: this.refreshToken },
              'bigQuery',
              false
            );
            this.treeNodeSelector = '.tree-node-content.c3-truncate[title="bigqueryTesting"]';
            this.selfServiceDIPage.openPage();
          });

          it('is rendered', function () {
            this.selfServiceDIPage.rendered();
          });

          it('tree node is rendered', function () {
            this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });

            it('name is disabled', function () {
              this.client
                .search(
                  '.c3-form-group-disabled .c3-input-filled[aria-label="SelfServiceDI.DataConnectorForm.name.label.text"]'
                )
                .assert('toExist');
            });

            it('cancel button not exist', function () {
              this.bottomSheetCancelButton.notExists();
            });

            it('data connector form password input', function () {
              this.selfServiceDIPage.connectorForm.setInputValue('clientSecret', this.clientSecret);
              wait3Seconds();
            });
          });

          describe('click test connection button', function () {
            beforeAll(function () {
              this.bottomSheet.testConnectionButtonClick();
            });

            it('shows success', function () {
              wait3Seconds();
              this.editConnectorModal.search(this.pingStatusSelector).text().assert('toContain', 'Success');
            });
          });

          describe('click next button', function () {
            beforeAll(function () {
              this.multiStepComponent.proceed();
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });
          });

          describe('cancel the edit process', function () {
            beforeAll(function () {
              this.multiStepComponent.cancel();
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });

          describe('click the second index (updating table selection) on the tree view', function () {
            beforeAll(function () {
              this.presentationalTreeView.treeNodeEllipsisClick(2);
            });

            it('modal is rendered', function () {
              this.editConnectorModal.rendered();
            });
          });

          describe('click on close modal', function () {
            beforeAll(function () {
              this.editConnectorModal.clickButton('close');
            });

            it('should close modal', function () {
              wait3Seconds();
              this.editConnectorModal.notExists();
            });

            it('tree node is rendered', function () {
              this.selfServiceDIPage.search(this.treeNodeSelector).assert('toExist');
            });
          });
        });
      });
    });
  });
});
