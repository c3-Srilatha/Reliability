/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Genai.Mail.MailToTemplate.js';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.mailToTemplateResult = TestApi.upsertEntity(this.ctx, 'Genai.Mail.MailToTemplate', {
      name: 'John Doe',
      id: 'test id',
      to: 'Mary Smith',
      body: 'This is a test email body',
      subject: 'Test Email Subject',
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::generateMailToLink', function () {
    it('generate mail to link starting with mailto: ', function () {
      expect(Genai.Mail.MailToTemplate.generateMailToLink(this.mailToTemplateResult)).toEqual(
        'mailto:Mary Smith?subject=Test%20Email%20Subject&body=This%20is%20a%20test%20email%20body'
      );
    });
  });
});
