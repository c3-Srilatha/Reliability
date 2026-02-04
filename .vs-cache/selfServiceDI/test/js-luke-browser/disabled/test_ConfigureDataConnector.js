/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ConfigureDataConnector';

LukeBrowser.runJasmine(filename, function (filename) {
  describe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.client = LukeBrowser.init();
      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          multiStepComponent: LukeTestMultiStepComponent.make({ luke: this.client }, true),
          selectDataConnectorStep: LukeTestSelectDataConnectorStep.make(
            {
              luke: this.client,
              errorInlineNotification: LukeTestUiSdlInlineNotification.make({ luke: this.client }, true),
              searchBar: LukeTestUiSdlForm.make(
                { luke: this.client, parentSelector: '.c3-metadata-id-selfservicedi-externalsourcessearchbar' },
                true
              ),
            },
            true
          ),
          presentationalTreeView: LukeTestPresentationalTreeView.make({ luke: this.client }, true),
        },
        true
      );
      this.selfServiceDIPage.openPage();
    });

    afterAll(function () {
      SelfServiceDITestUtil.cleanup();
      this.client.closeWindow();
    });

    SelfServiceDI.Ui.DataConnector.fetch().objs.forEach((connector) => {
      it(`selects the current connector for ${connector.name}`, function () {
        // Filter for kafka for now
        if (connector.name !== 'kafka') {
          return;
        }
        const connectorInstance = LukeTestSelfServiceDIConfigureDataConnectorStep.createConnector(connector);
        this.selfServiceDIPage.addDataSource();
        connectorInstance.selectCurrentConnector();
        connectorInstance.verifyDataConnectorCategory();
        connectorInstance.verifyCancellationLogic();
        connectorInstance.verifyBackLogic();
        connectorInstance.verifyForm();
        connectorInstance.verifyLandingPage();
      });
    });
  });
});
