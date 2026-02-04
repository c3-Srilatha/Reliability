/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_UpdateTableSelection';

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
      this.name = 'postgresTest';
      SqlSourceSystem.removeAll();
      SqlSourceCollection.removeAll();
      this.previewSqlTableDataGrid = LukeTestPreviewSqlTableDataGrid.make({ luke: this.client }, true);
      this.externalSourcesSidePanel = LukeTestUiSdlSidePanel.make({ luke: this.client }, true);
      this.multiStepComponent = LukeTestMultiStepComponent.make({ luke: this.client }, true);
      this.tabPanel = LukeTestSelfServiceDITabPanel.make({ luke: this.client }, true);
      this.presentationalTreeView = LukeTestPresentationalTreeView.make({ luke: this.client }, true);
      this.previewSqlPresentationalTreeView = LukeTestPresentationalTreeView.make(
        { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-previewsqlsourcedatacontainer' },
        true
      );
      this.externalSourceDetailsCheckboxGrid = LukeTestExternalSourceDetailsCheckboxGrid.make(
        { luke: this.client },
        true
      );
      this.previewSqlSourceDataContainer = LukeTestSelfServiceDIPreviewSqlSourceDataContainer.make(
        { luke: this.client, presentationalTreeView: this.previewSqlPresentationalTreeView },
        true
      );
      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          externalSourcesSidePanel: this.externalSourcesSidePanel,
          dataGrid: this.previewSqlTableDataGrid,
          previewSqlSourceDataContainer: this.previewSqlSourceDataContainer,
          tabPanel: this.tabPanel,
          externalSourceDetailsCheckboxGrid: this.externalSourceDetailsCheckboxGrid,
          presentationalTreeView: this.presentationalTreeView,
        },
        true
      );
      this.password = SelfServiceDIJdbcStoreConfig.forName('selfServiceDIPostgres').secretValue('secretPassword');
      SelfServiceDITestUtil.setUpSourceSystemAndSourceCollection(this.name, this.password, 'postgres', true);
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

    describe('Testing updating table selection', function () {
      it('page is rendered', function () {
        this.selfServiceDIPage.rendered();
        wait3Seconds();
      });

      describe('click the first index Update table selections', function () {
        beforeAll(function () {
          this.presentationalTreeView.treeNodeActionClick(this.name, 1);
        });

        it('search vendors', function () {
          wait3Seconds();
          this.previewSqlSourceDataContainer.presentationalTreeView.filterTreeNode('vendors');
          wait3Seconds();
        });
      });

      describe('click vendors and uncheck the check box', function () {
        beforeAll(function () {
          this.previewSqlSourceDataContainer.presentationalTreeView.treeNodeSelector('public.vendors').click();
          wait3Seconds();
          wait3Seconds();
          this.previewSqlSourceDataContainer.presentationalTreeView.unselectTreeNode('public.vendors');
        });

        it('search aditest', function () {
          wait3Seconds();

          this.previewSqlSourceDataContainer.presentationalTreeView.filterTreeNode('airbase');
          wait3Seconds();
        });
      });

      describe('select airbase and check the checkbox and click finish', function () {
        beforeAll(function () {
          this.previewSqlSourceDataContainer.presentationalTreeView.treeNodeSelector('rso_demo.airbase').click();
          wait3Seconds();
          this.previewSqlSourceDataContainer.presentationalTreeView.selectTreeNode('rso_demo.airbase');
          wait3Seconds();
          this.multiStepComponent.proceed();
        });

        it('refresh page', function () {
          wait3Seconds();
          wait3Seconds();
          wait3Seconds();
          wait3Seconds();
          wait3Seconds();
          wait3Seconds();
          this.selfServiceDIPage.openPage();
        });
      });

      describe('open the new page and cick to expand tree node', function () {
        beforeAll(function () {
          this.presentationalTreeView.expandTreeNode(this.name);
        });

        it('the schema name exist in tree node', function () {
          this.presentationalTreeView.treeNodeSelector('postgresTest.PostgresTestRsoDemoAirbase').assert('toExist');
        });
      });
    });
  });
});
