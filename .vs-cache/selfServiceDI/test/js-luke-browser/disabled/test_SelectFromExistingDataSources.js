/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_SelectFromExistingDataSources';

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

// TODO PLAT-84648 create luke component
LukeBrowser.runJasmine(filename, function () {
  xdescribe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.client = LukeBrowser.init();
      SqlSourceSystem.removeAll();
      SqlSourceCollection.removeAll();

      this.bottomSheetSnowflakeSelectedSelector =
        '.information-card-parent.selected .information-card[aria-label="Snowflake"]';
      this.externalSourcesSidePanel = LukeTestUiSdlSidePanel.make({ luke: this.client }, true);
      this.previewSqlTableDataGrid = LukeTestPreviewSqlTableDataGrid.make({ luke: this.client }, true);
      this.bottomSheet = LukeTestSelfServiceDIBottomSheet.make({ luke: this.client }, true);
      this.connectorForm = LukeTestSelfServiceDIConnectorForm.make({ luke: this.client }, true);
      this.tabPanel = LukeTestSelfServiceDITabPanel.make({ luke: this.client }, true);
      this.externalSourceDetailsGrid = LukeTestExternalSourceDetailsGrid.make({ luke: this.client }, true);
      this.presentationalTreeView = LukeTestPresentationalTreeView;
      this.externalSourceDetailsCheckboxGrid = LukeTestExternalSourceDetailsCheckboxGrid.make(
        { luke: this.client },
        true
      );

      this.presentationalTreeNodeSelector =
        '.presentational-tree-node-container .tree-node-content.c3-truncate[title="snowflakeTest"]';
      this.treeNodeExpandButtonSelector = '.presentational-tree-node-container.is-node-selected .c3-button-icon';
      this.schema = '.tree-node-content.c3-truncate[title="PUBLIC.RELIABILITY"]';

      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          externalSourcesSidePanel: this.externalSourcesSidePanel,
          dataGrid: this.previewSqlTableDataGrid,
          bottomSheet: this.bottomSheet,
          connectorForm: this.connectorForm,
          previewSqlSourceDataContainer: this.previewSqlSourceDataContainer,
          tabPanel: this.tabPanel,
          externalSourceDetailsGrid: this.externalSourceDetailsGrid,
          externalSourceDetailsCheckboxGrid: this.externalSourceDetailsCheckboxGrid,
          presentationalTreeView: this.presentationalTreeView,
        },
        true
      );
      this.name = 'snowflakeTest';
      this.password = SelfServiceDIJdbcStoreConfig.forName('selfServiceDISnowflake').secretValue('secretPassword');
      SelfServiceDITestUtil.setUpSourceSystemAndSourceCollection(this.name, this.password, 'snowflake', true);

      /*
       * This.basicUser = TestIdp.createTestUsersForGroup('SelfServiceDI.Role.User')[0];
       * this.basicUserToken = SessionToken.generate(this.basicUser).signedToken;
       * this.client.setCookie({
       *   name: 'c3auth',
       *   url: this.selfServiceDIPage.getUrl(),
       *   value: this.basicUserToken,
       * });
       */

      this.selfServiceDIPage.openPage();
    });

    describe('homepage', function () {
      afterAll(function () {
        this.client.closeWindow();
      });

      describe('Updating table selection', function () {
        it('page is rendered', function () {
          this.selfServiceDIPage.rendered();
        });

        describe('click on tree node', function () {
          beforeAll(function () {
            this.presentationalTreeView.treeNodeTableNameSelector('snowflakeTest').click();
          });

          it('data connector form name input is snowflakeTest', function () {
            wait3Seconds();
            this.selfServiceDIPage.search('.value.description').text().assert('toContain', this.name);
          });

          it('is rendered', function () {
            this.presentationalTreeView.treeNodeExpandClick();
          });

          it('Snowflake exist', function () {
            this.selfServiceDIPage.search(this.schema).assert('exists');
          });

          it('is rendered', function () {
            this.selfServiceDIPage.search(this.schema).click();
          });
        });
      });
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
        this.selfServiceDIPage.dataGrid.columnNames().assert('toEqual', this.columnNames);
      });
    });

    describe('click details tab panel', function () {
      beforeAll(function () {
        this.columnKeys = [
          'SelfServiceDI.ExternalSourceSchemaPreviewGrid.columnName.label',
          'SelfServiceDI.ExternalSourceSchemaPreviewGrid.columnAlias.label',
          'SelfServiceDI.ExternalSourceSchemaPreviewGrid.dataType.label',
          'SelfServiceDI.ExternalSourceSchemaPreviewGrid.description.label',
        ];
        this.columnNames = this.columnKeys.map((columnName) => Translation.getTranslationForLocale(columnName));
        this.selfServiceDIPage.tabPanel.clickTab('Schema');
      });

      it('has the correct table name list', function () {
        wait3Seconds();
        this.selfServiceDIPage
          .search('.c3-metadata-id-selfservicedi-externalsourcetablenamelist .value.description')
          .text()
          .assert('toContain', 'PUBLIC.RELIABILITY');
      });

      it('has the correct columns', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.columnNames().assert('toEqual', this.columnNames);
      });

      it('has the correct columns', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid
          .cellText(1, 1)
          .assert('toContain', 'ACTIVEPOWER_RESAMPLE_MEAN');
      });

      it('has the correct columns', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid
          .cellText(2, 1)
          .assert('toContain', 'GEAROILTEMPERATURE_RESAMPLE_MEAN');
      });

      it('has the correct columns', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid
          .cellText(3, 1)
          .assert('toContain', 'GENERATORROTATIONSPEED_RESAMPLE_MEAN');
      });

      it('has the correct columns', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.cellText(4, 1).assert('toContain', 'TIMESTAMP');
      });

      it('search id in search bar ', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.searchInGrid('id');
      });

      it('has the correct row', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.numberOfRows().assert('toEqual', 1);
      });

      it('has the correct name id', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.cellText(1, 2).assert('toContain', 'id');
      });

      it('has the correct name string', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.cellText(1, 3).assert('toContain', 'datetime');
      });
    });

    describe('grid columns, click on tree node', function () {
      beforeAll(function () {
        this.selfServiceDIPage
          .search('.c3-metadata-id-selfservicedi-externalsourceschemaeditbutton .c3-button-primary')
          .click();
      });

      it('type test in table description', function () {
        wait3Seconds();
        this.selfServiceDIPage
          .search(
            '.c3-metadata-id-selfservicedi-externalsourceschemaeditform textarea.c3-form-field[aria-label="SelfServiceDI.tableDescription.label"]'
          )
          .setValue('test');
      });
    });

    describe('click cancel button and edit button', function () {
      beforeAll(function () {
        this.selfServiceDIPage
          .search('.c3-metadata-id-selfservicedi-externalsourceschemaeditcontainer .c3-button-secondary')
          .click();
        wait3Seconds();
        this.selfServiceDIPage
          .search('.c3-metadata-id-selfservicedi-externalsourceschemaeditbutton .c3-button-primary')
          .click();
      });

      it('test exist in table description', function () {
        this.selfServiceDIPage
          .search(
            '.c3-metadata-id-selfservicedi-externalsourceschemaeditform textarea.c3-form-field[aria-label="SelfServiceDI.tableDescription.label"]'
          )
          .getValue()
          .assert('toContain', 'test');
      });

      it('search id in search bar ', function () {
        this.selfServiceDIPage.externalSourceDetailsCheckboxGrid.searchInGrid('id');
        wait3Seconds();
      });

      it('input test in description', function () {
        this.selfServiceDIPage
          .search('input.c3-form-field[placeholder="Enter column description"]')
          .setValue('description');
        wait3Seconds();
      });
    });

    describe('click save button', function () {
      beforeAll(function () {
        this.selfServiceDIPage
          .search('.c3-metadata-id-selfservicedi-externalsourceschemaeditcontainer .c3-button-primary')
          .click();
      });

      it('has the correct row', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.numberOfRows().assert('toEqual', 1);
      });

      it('has the correct name id', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.cellText(1, 1).assert('toContain', 'TIMESTAMP');
      });

      it('has the correct name id', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.cellText(1, 2).assert('toContain', 'id');
      });

      it('has the correct name datetime', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.cellText(1, 3).assert('toContain', 'datetime');
      });

      it('has the correct name description', function () {
        this.selfServiceDIPage.externalSourceDetailsGrid.cellText(1, 4).assert('toContain', 'description');
      });
    });
  });
});
