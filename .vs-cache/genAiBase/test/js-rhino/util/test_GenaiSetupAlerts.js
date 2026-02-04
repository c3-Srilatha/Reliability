/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSetupAlerts.js';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('enableAlerting with params', function () {
    beforeAll(function () {
      Genai.Setup.enableAlerting(['testuser1@c3.ai', 'testuser2@c3.ai']);
      TestApi.sleep(this.ctx, 10);
    });

    it('sendAlertsEmail configuration is true', function () {
      expect(Genai.Mail.Config.inst().getConfig().sendAlertsEmail).toEqual(true);
    });

    it('genai-test-indexing cronjob is active', function () {
      var cronJob = CronJob.forId('genai-test-indexing');
      expect(cronJob.inactive).toEqual(false);
    });

    it('userAlertsEmailList has the test users added', function () {
      expect(Genai.Mail.Config.inst().getConfig().userAlertsEmailList).toEqual([
        'testuser1@c3.ai',
        'testuser2@c3.ai',
        'support@c3.ai',
      ]);
    });
  });

  describe('enableAlerting empty', function () {
    beforeAll(function () {
      Genai.Setup.enableAlerting();
      TestApi.sleep(this.ctx, 10);
    });

    afterAll(function () {
      Genai.Setup.disableAlerting();
    });

    it('sendAlertsEmail configuration is true', function () {
      expect(Genai.Mail.Config.inst().getConfig().sendAlertsEmail).toEqual(true);
    });

    it('genai-test-indexing cronjob is active', function () {
      var cronJob = CronJob.forId('genai-test-indexing');
      expect(cronJob.inactive).toEqual(false);
    });

    it('userAlertsEmailList has just support@c3.ai email', function () {
      expect(Genai.Mail.Config.inst().getConfig().userAlertsEmailList).toEqual(['support@c3.ai']);
    });
  });

  describe('disableAlerting', function () {
    beforeAll(function () {
      Genai.Setup.disableAlerting();
      TestApi.sleep(this.ctx, 10);
    });

    it('sendAlertsEmail configuration is false', function () {
      expect(Genai.Mail.Config.inst().getConfig().sendAlertsEmail).toEqual(false);
    });

    it('genai-test-indexing cronjob is inactive', function () {
      var cronJob = CronJob.forId('genai-test-indexing');
      expect(cronJob.inactive).toEqual(true);
    });

    it('userAlertsEmailList just has support@c3.ai', function () {
      expect(Genai.Mail.Config.inst().getConfig().userAlertsEmailList).toEqual(['support@c3.ai']);
    });
  });
});
