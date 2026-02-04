/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiMail';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::replaceCommonToken', function () {
    describe('for APPLICATION_URL', function () {
      it('returns the application URL without a trailing slash', function () {
        var applicationUrl = C3.app().endpoint();
        expect(Genai.Mail.replaceCommonToken('{{APPLICATION_URL}}')).toEqual(
          applicationUrl.substr(0, applicationUrl.length - 1)
        );
      });
    });
  });

  describe('::sendEmailFromTemplate', function () {
    describe('when toEmails is empty', function () {
      describe('if the template has no dynamicTo', function () {
        beforeAll(function () {
          this.sentEmail = Genai.Mail.sendEmailFromTemplate({ id: 'test-email-with-content-string' }, []);
        });

        it('returns null', function () {
          expect(this.sentEmail).toBeNull();
        });
      });

      describe('if the template has a dynamicTo', function () {
        beforeAll(function () {
          this.mailSpy = TestApi.spyOn(this.ctx, 'Mail', 'send').register();
          this.mailSendCountBefore = this.mailSpy.getActionMock().callCount();
          this.replaceCommonTokenSpy = TestApi.spyOn(this.ctx, 'Genai.Mail', 'replaceCommonToken')
            .returnValue([filename + '@c3.ai'])
            .register();
        });

        afterAll(function () {
          this.mailSpy.unregister();
          this.replaceCommonTokenSpy.unregister();
        });

        it('sends the email', function () {
          Genai.Mail.sendEmailFromTemplate({ id: 'test-email-with-dynamic-to' }, []);
          expect(this.mailSpy.getActionMock().callCount()).toEqual(this.mailSendCountBefore + 1);
        });
      });
    });

    describe('when sending email fails', function () {
      describe('if SendGrid is enabled, but fails', function () {
        beforeAll(function () {
          this.sendGridApiSpy = TestApi.spyOn(this.ctx, 'SendGridApi', 'isUrlConfigured').returnValue(true).register();
          this.sendGridSpy = TestApi.spyOn(this.ctx, 'SendGrid', 'send')
            .callFake(function (_action, _input) {
              throw new Error('SendGrid error');
            })
            .register();
        });

        afterAll(function () {
          this.sendGridApiSpy.unregister();
          this.sendGridSpy.unregister();
        });

        describe('and Mail is successful', function () {
          beforeAll(function () {
            this.mailSpy = TestApi.spyOn(this.ctx, 'Mail', 'send')
              .callFake(function (_action, input) {
                return input.email;
              })
              .register();
          });

          afterAll(function () {
            this.mailSpy.unregister();
          });

          it('sends using Mail (Amazon SES)', function () {
            Genai.Mail.sendEmailFromTemplate({ id: 'test-email-with-content-string' }, [filename + '@c3.ai']);
            expect(this.mailSpy.getActionMock().callCount()).toEqual(1);
          });
        });

        describe('and Mail fails', function () {
          beforeAll(function () {
            this.mailSpy = TestApi.spyOn(this.ctx, 'Mail', 'send')
              .callFake(function (_action, _input) {
                throw new Error('Mail error');
              })
              .register();
          });

          afterAll(function () {
            this.mailSpy.unregister();
          });

          it('gracefully catches error', function () {
            expect(function () {
              Genai.Mail.sendEmailFromTemplate(
                {
                  id: 'test-email-with-content-string',
                },
                [filename + '@c3.ai']
              );
            }).not.toThrowError();
          });
        });
      });

      describe('if SendGrid is not enabled', function () {
        beforeAll(function () {
          this.sendGridApiSpy = TestApi.spyOn(this.ctx, 'SendGridApi', 'isUrlConfigured').returnValue(true).register();
        });

        afterAll(function () {
          this.sendGridApiSpy.unregister();
        });

        describe('and Mail fails', function () {
          beforeAll(function () {
            this.mailSpy = TestApi.spyOn(this.ctx, 'Mail', 'send')
              .callFake(function (_action, _input) {
                throw new Error('Mail error');
              })
              .register();
          });

          afterAll(function () {
            this.mailSpy.unregister();
          });

          it('gracefully catches error', function () {
            expect(function () {
              Genai.Mail.sendEmailFromTemplate(
                {
                  id: 'test-email-with-content-string',
                },
                []
              );
            }).not.toThrowError();
          });
        });
      });
    });

    describe('when SendGrid is not configured', function () {
      beforeAll(function () {
        this.sendGridSpy = TestApi.spyOn(this.ctx, 'SendGridApi', 'isUrlConfigured').returnValue(false).register();
        this.mailSpy = TestApi.spyOn(this.ctx, 'Mail', 'send').register();
      });

      afterAll(function () {
        this.sendGridSpy.unregister();
        this.mailSpy.unregister();
      });

      it('sends the email via the Mail type', function () {
        this.mailSendCountBefore = this.mailSpy.getActionMock().callCount();
        Genai.Mail.sendEmailFromTemplate({ id: 'test-email-with-content-string' }, ['test@c3.ai']);
        expect(this.mailSpy.getActionMock().callCount()).toEqual(this.mailSendCountBefore + 1);
      });
    });

    describe('when SendGrid is configured', function () {
      beforeAll(function () {
        this.sendGridSpy = TestApi.spyOn(this.ctx, 'SendGridApi', 'isUrlConfigured').returnValue(true).register();
        this.sendSpy = TestApi.spyOn(this.ctx, 'SendGrid', 'send')
          .callFake(function (_action, input) {
            return input.mail;
          })
          .register();
        this.mailSpy = TestApi.spyOn(this.ctx, 'Mail', 'send').register();
        this.mailSendCountBefore = this.mailSpy.getActionMock().callCount();
        var appEndpoint = C3.app().endpoint();
        this.appEndpointWithoutTrailingSlash = appEndpoint.substr(0, appEndpoint.length - 1);
      });

      afterAll(function () {
        this.sendGridSpy.unregister();
        this.sendSpy.unregister();
        this.mailSpy.unregister();
      });

      describe('for an email template with the content coming from a resource with a meta path', function () {
        beforeAll(function () {
          this.toEmails = ['to@c3.ai'];
          this.sendCountBefore = this.sendSpy.getActionMock().callCount();
          this.sentEmail = Genai.Mail.sendEmailFromTemplate(
            {
              id: 'test-email-with-content-from-resource',
            },
            this.toEmails
          );
        });

        it('sets the from', function () {
          expect(this.sentEmail.from).toEqual('noreply@c3.ai');
        });

        it('sets the to', function () {
          expect(this.sentEmail.to).toEqual(this.toEmails);
        });

        it('sets the subject', function () {
          expect(this.sentEmail.subject).toEqual('Test email with content from resource');
        });

        it('sets the content and replaces tokens', function () {
          expect(this.sentEmail.content).toContain('<title>Testing</title>');
          expect(this.sentEmail.content).toContain('<p>' + this.appEndpointWithoutTrailingSlash + '</p>');
        });

        it('sets the content type', function () {
          expect(this.sentEmail.content_type).toEqual('text/html');
        });

        it('calls SendGrid.send', function () {
          expect(this.sendSpy.getActionMock().callCount()).toBe(this.sendCountBefore + 1);
        });

        it('does not call Mail.send', function () {
          expect(this.mailSpy.getActionMock().callCount()).toBe(this.mailSendCountBefore);
        });
      });

      describe('for an email template with the content as a string', function () {
        beforeAll(function () {
          this.toEmails = ['to@c3.ai', 'to2@c3.ai'];
          this.sendCountBefore = this.sendSpy.getActionMock().callCount();
          this.sentEmail = Genai.Mail.sendEmailFromTemplate(
            {
              id: 'test-email-with-content-string',
            },
            this.toEmails
          );
        });

        it('sets the from', function () {
          expect(this.sentEmail.from).toEqual('from@c3.ai');
        });

        it('sets the to', function () {
          expect(this.sentEmail.to).toEqual(this.toEmails);
        });

        it('sets the subject', function () {
          expect(this.sentEmail.subject).toEqual('Test email with content string');
        });

        it('sets the content and replaces tokens', function () {
          expect(this.sentEmail.content).toContain('<title>Testing</title>');
          expect(this.sentEmail.content).toContain('<p>' + this.appEndpointWithoutTrailingSlash + '</p>');
        });

        it('sets the content type', function () {
          expect(this.sentEmail.content_type).toEqual('text/html');
        });

        it('calls SendGrid.send', function () {
          expect(this.sendSpy.getActionMock().callCount()).toBe(this.sendCountBefore + 1);
        });

        it('does not call Mail.send', function () {
          expect(this.mailSpy.getActionMock().callCount()).toBe(this.mailSendCountBefore);
        });
      });
    });
  });

  describe('::adminEmails', function () {
    beforeAll(function () {
      this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser', 1)[0];
      this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser', 1)[0];
    });

    afterAll(function () {
      User.removeAll({ filter: Filter.intersects('id', [this.basicUser.id, this.adminUser.id]) }, true);
    });

    it('should allow admin emails fetching for basic users', function () {
      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function () {
          var allowed = {
            'Genai.Mail.ExpressionEngineFunction': ['getUserEmailsForRoles'],
          };

          TestApi.checkPermissions(allowed, {});

          var adminEmails = Genai.Mail.inst().adminEmails;
          expect(adminEmails.length).toBeGreaterThan(0);
        })
      );
    });
  });
});
