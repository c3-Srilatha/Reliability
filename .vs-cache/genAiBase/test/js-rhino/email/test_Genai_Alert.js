/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Genai_Alert.js';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('alert long running index action', function () {
    beforeAll(function () {
      this.sendEmailFromTemplateSpy = TestApi.spyOn(
        this.ctx,
        'Genai.Mail',
        'sendEmailFromTemplate'
      ).register();
      this.originalSendEmailFromTemplateCallCount = this.sendEmailFromTemplateSpy.getActionMock().callCount();
    });

    afterAll(function () {
      this.sendEmailFromTemplateSpy.unregister();
    });

    it('::alertLongRunningIndexAction', function () {
      var logString = 'testing long running index action';
      Genai.Alert.alertLongRunningIndexAction(logString);
      this.newSendEmailFromTemplateCallCount = this.sendEmailFromTemplateSpy.getActionMock().callCount();
      expect(this.newSendEmailFromTemplateCallCount).toBe(this.originalSendEmailFromTemplateCallCount + 1);
      expect(() => Genai.Alert.alertLongRunningIndexAction(logString)).not.toThrow();
    });
  });

  describe('alert failed index action', function () {
    beforeAll(function () {
      this.sendEmailFromTemplateSpy = TestApi.spyOn(
        this.ctx,
        'Genai.Mail',
        'sendEmailFromTemplate'
      ).register();
      this.originalSendEmailFromTemplateCallCount = this.sendEmailFromTemplateSpy.getActionMock().callCount();
    });

    afterAll(function () {
      this.sendEmailFromTemplateSpy.unregister();
    });

    it('::alertFailedIndexAction', function () {
      var logString = 'testing failed index action';
      Genai.Alert.alertFailedIndexAction(logString);
      this.newSendEmailFromTemplateCallCount = this.sendEmailFromTemplateSpy.getActionMock().callCount();
      expect(this.newSendEmailFromTemplateCallCount).toBe(this.originalSendEmailFromTemplateCallCount + 1);
      expect(() => Genai.Alert.alertFailedIndexAction(logString)).not.toThrow();
    });
  });

  describe('alert failed query action', function () {
    beforeAll(function () {
      this.sendEmailFromTemplateSpy = TestApi.spyOn(
        this.ctx,
        'Genai.Mail',
        'sendEmailFromTemplate'
      ).register();
      this.originalSendEmailFromTemplateCallCount = this.sendEmailFromTemplateSpy.getActionMock().callCount();
    });

    afterAll(function () {
      this.sendEmailFromTemplateSpy.unregister();
    });

    it('::alertFailedQuery', function () {
      var logString = {
        id: 'testId',
        name: 'testName',
        meta: {
          created: 'testCreated',
        },
        searchQuery: {
          baseQuery: 'testBaseQuery',
        },
      };
      var logError = {
        error: 'testError'
      };
      Genai.Alert.alertFailedQuery(logString, logError);
      this.newSendEmailFromTemplateCallCount = this.sendEmailFromTemplateSpy.getActionMock().callCount();
      expect(this.newSendEmailFromTemplateCallCount).toBe(this.originalSendEmailFromTemplateCallCount + 1);
      expect(() => Genai.Alert.alertFailedQuery(logString, logError)).not.toThrow();
    });
  });
});
