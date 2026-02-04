/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UiSdlUserPreference';

describe(filename, function () {
  var filename = 'test_UiSdlUserPreference';
  var role = 'C3.UiSdlAccess';
  var result;
  describe('UiSdlUserPreference', function () {
    beforeAll(function () {
      // Get existing config to reset during teardown
      this.existingConfig = UiSdlUserPreference.getConfig();

      this.ctx = TestApi.createContext(filename);
      /**
       * Sets the config value as the user. This is necessary because
       * UiSdlUserPreference has `@config(minOverride='USER', maxOverride='USER')`
       */
      this.setUserConfig = function (config) {
        UiSdlUserPreference.setConfigValue('preferredLocale', config);
      };

      this.clearUserConfig = function () {
        UiSdlUserPreference.setConfigValue('preferredLocale', {});
      };
    });

    afterAll(function () {
      UiSdlUserPreference.setConfigValue('preferredLocale', {});
      TestApi.teardown(this.ctx);
    });

    afterEach(function () {
      this.clearUserConfig();
    });

    describe('#configValue', function () {
      describe('when preferredLocale is set', function () {
        var expectedLanguage = 'ru';
        var expectedPreferredLocale = { language: expectedLanguage };
        beforeEach(function () {
          this.setUserConfig(expectedPreferredLocale);
        });

        describe('when path is preferredLocale', function () {
          beforeEach(function () {
            result = UiSdlUserPreference.configValue('preferredLocale');
          });

          it('returns with preferredLocale populated', function () {
            expect(result).toEqual(expectedPreferredLocale);
          });

          it('returns with preferredLocale language populated', function () {
            expect(result.language).toEqual(expectedLanguage);
          });
        });
      });

      // TODO: uncomment out when PLAT-101343 is fixed
      xdescribe('when preferredLocale is set to an empty object', function () {
        beforeEach(function () {
          this.setUserConfig({});
        });

        describe('when path is preferredLocale', function () {
          var expectedPreferredLocale = {};
          beforeEach(function () {
            result = UiSdlUserPreference.configValue('preferredLocale');
          });

          it('returns the preferred locale as empty object', function () {
            expect(result).toEqual(expectedPreferredLocale);
          });
        });

        describe('when path is preferredLocale.language', function () {
          var expectedLanguage = null;
          beforeEach(function () {
            result = UiSdlUserPreference.configValue('preferredLocale.language');
          });

          it('returns language as null for empty preferredLocale', function () {
            expect(result).toEqual(expectedLanguage);
          });
        });
      });

      // TODO: uncomment out when PLAT-101343 is fixed
      xdescribe('when preferredLocale is not set', function () {
        var expectedPreferredLocale = {};
        beforeEach(function () {
          this.setUserConfig(expectedPreferredLocale);
        });

        describe('when path is preferredLocale', function () {
          beforeEach(function () {
            result = UiSdlUserPreference.configValue('preferredLocale');
          });

          it('returns the preferredLcale as null', function () {
            expect(result).toEqual(expectedPreferredLocale);
          });
        });

        describe('when path is preferredLocale.language', function () {
          var expectedLanguage = null;
          beforeEach(function () {
            result = UiSdlUserPreference.configValue('preferredLocale.language');
          });

          it('returns the language for the preferred locale as null', function () {
            expect(result).toEqual(expectedLanguage);
          });
        });
      });
    });

    describe('#inst', function () {
      beforeEach(function () {
        this.secondUserId = 'testuser@c3.ai';
        this.secondUser = TestIdp.createTestUser(this.secondUserId, 'Password1', ['C3.Group.UiSdlAccess']);
        this.preferredLocaleField = 'preferredLocale';
      });

      afterEach(function () {
        TestIdp.removeTestUsers([this.secondUser]);
        TestApi.teardown(this.ctx);
      });

      describe('as current user', function () {
        it('should return the instance of UiSdlUserPreference with name as current user', function () {
          UiSdlUserPreference.setConfigValue(this.preferredLocaleField, 'fr_XC');
          expect(UiSdlUserPreference.configValue(this.preferredLocaleField).id).toEqual('fr_XC');
        });
      });

      describe('as second user', function () {
        it('should set the user preference for second user', function () {
          // Set the current user's preferred locale
          UiSdlUserPreference.setConfigValue(this.preferredLocaleField, 'fr_XC');
          expect(UiSdlUserPreference.configValue(this.preferredLocaleField).id).toEqual('fr_XC');

          // Set the second user's preferred locale to something else
          TestRunner.asUser(
            User.forId(this.secondUserId),
            Lambda.fromJsFunc(function (preferredLocaleField) {
              UiSdlUserPreference.setConfigValue(preferredLocaleField, 'es_MX');
              expect(UiSdlUserPreference.configValue(preferredLocaleField).id).toEqual('es_MX');
            }).partiallyCall([this.preferredLocaleField]),
          );

          // Verify that the current user's current locale does not equal the second user's preferred locale
          expect(UiSdlUserPreference.configValue(this.preferredLocaleField).id).toEqual('fr_XC');
        });
      });
    });
  });
});
