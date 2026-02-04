/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_DeleteConnector.js';

function wait1Seconds() {
  this.client.runAsyncLambda(function () {
    return new Promise(function (resolve, reject) {
      /**
       * Force luke to slow down and wait.
       */
      setTimeout(resolve, 1000);
    });
  });
}

// In the dev mode, it will show the error banner, will modify in the future
LukeBrowser.runJasmine(filename, function () {
  xdescribe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.client = LukeBrowser.init();
      this.name = 'snowflakeTest';
      SqlSourceSystem.removeAll();
      SqlSourceCollection.removeAll();
      this.deleteDataSourceFormInputSelector =
        '.c3-metadata-id-selfservicedi-deletedataconnectorform input.c3-form-field';

      this.externalSourcesSidePanel = LukeTestUiSdlSidePanel.make({ luke: this.client }, true);
      this.deleteModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
      this.PreviewSqlTableDataGrid = LukeTestPreviewSqlTableDataGrid.make({ luke: this.client }, true);
      this.connectorForm = LukeTestSelfServiceDIConnectorForm.make({ luke: this.client }, true);
      this.presentationalTreeView = LukeTestPresentationalTreeView.make({ luke: this.client }, true);

      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          externalSourcesSidePanel: this.externalSourcesSidePanel,
          connectorForm: this.connectorForm,
          deleteModal: this.deleteModal,
          presentationalTreeView: this.presentationalTreeView,
        },
        true
      );
      this.password = SelfServiceDIJdbcStoreConfig.forName('selfServiceDISnowflake').secretValue('secretPassword');
      SelfServiceDITestUtil.setUpSourceSystemAndSourceCollection(this.name, this.password, 'snowflake', true);
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

    describe('Data connector deletion', function () {
      it('page is rendered', function () {
        this.selfServiceDIPage.rendered();
      });

      it('tree node is rendered', function () {
        this.presentationalTreeView.treeNodeSelector('snowflakeTest').assert('toExist');
      });

      describe('click the third index delete data connector', function () {
        beforeAll(function () {
          this.presentationalTreeView.treeNodeActionClick(this.name, 3);
        });

        it('opens a modal', function () {
          this.deleteModal.rendered();
        });

        it('show the modal correctly', function () {
          this.deleteModal
            .getHeaderText()
            .assert('toContain', Translation.getTranslationForLocale('SelfServiceDI.deleteDataConnector.label'));
        });

        it('show the modal correctly', function () {
          this.deleteModal
            .getContentText()
            .assert(
              'toContain',
              Translation.getTranslationForLocale(
                'SelfServiceDI.deleteDataSourceForm.dataConnector.description'
              ).replace('{dataSourceName}', this.name)
            );
        });
      });

      describe('click the cancel button on modal', function () {
        beforeAll(function () {
          this.deleteModal.clickButton('secondary');
        });

        it('tree node exist', function () {
          wait1Seconds();
          this.presentationalTreeView.treeNodeSelector('snowflakeTest').assert('toExist');
        });
      });

      describe('click the third index delete data connector and click x to close the modal', function () {
        beforeAll(function () {
          this.presentationalTreeView.treeNodeActionClick(this.name, 3);
          this.deleteModal.clickButton('close');
        });

        it('tree node exist', function () {
          wait1Seconds();
          this.presentationalTreeView.treeNodeSelector('snowflakeTest').assert('toExist');
        });
      });

      describe('click the third index delete data connector', function () {
        beforeAll(function () {
          this.presentationalTreeView.treeNodeActionClick(this.name, 3);
        });

        it('fill the name in the delete form', function () {
          wait1Seconds();
          this.client.search(this.deleteDataSourceFormInputSelector).setValue(this.name);
          wait1Seconds();
        });
      });

      describe('click on delete button on the modal', function () {
        beforeAll(function () {
          this.deleteModal.clickButton('danger');
        });

        it('show success banner', function () {
          this.client
            .search('.c3-sdl-message-container-view .c3-sdl-message-banner-content h1')
            .text()
            .assert(
              'toContain',
              Translation.getTranslationForLocale('SelfServiceDI.DeleteSourceSystem.success.message').replace(
                '{dataSourceName}',
                this.name
              )
            );
        });
      });
    });
  });
});
