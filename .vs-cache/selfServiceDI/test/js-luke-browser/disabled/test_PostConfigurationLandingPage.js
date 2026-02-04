/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_PostConfigurationLandingPage';

LukeBrowser.runJasmine(filename, function (filename) {
  describe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.client = LukeBrowser.init();
      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
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
        if (connector.name !== 'googleCloud') {
          return;
        }
        const connectorInstance = LukeTestSelfServiceDIConfigureDataConnectorStep.createConnector(connector);
        connectorInstance.completeStep();

        const landingPageInstance = LukeTestPostConfigurationLandingPage.createInstance(
          connector,
          connectorInstance.luke
        );
        landingPageInstance.verifyTreeView();
        landingPageInstance.openLandingPage();
        landingPageInstance.verifyLandingPageDetails();
      });
    });
  });
});
