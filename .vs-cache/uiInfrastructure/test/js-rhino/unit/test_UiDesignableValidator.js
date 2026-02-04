/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

/*
 *  The purpose of this test is to validate the logic in UiDesignableValidator
 * TODO: MIG8-3240 NEEDS REOPEN Investigate failing tests in UI infrastructure
 */
xdescribe('test_UiDesignableValidator', function () {
  beforeAll(function () {
    this.expectNoIssues = function (issues) {
      expect(issues.length).toEqual(0);
      expect(
        issues
          .map(function (issue) {
            return issue.message;
          })
          .join('\n'),
      ).toBe('');
    };
  });

  describe('when called on UiSdlComponent', function () {
    /**
     * TODO: UI-10864 Refactor TestApi.validateTranslations so it is more reusable
     * TestApi.validateTranslations('UiSdlComponent', [{ id: 'en' }]);
     */
    describe('raises a missing data spec issue', function () {
      beforeAll(function () {
        this.issues = UiDesignableValidator.validateDataSpecForType('UiSdlComponent');
      });

      it('a single issue', function () {
        expect(this.issues.length).toEqual(1);
      });

      it('with the correct message', function () {
        expect(this.issues[0].message).toEqual('UiSdlComponent is missing a data spec field. See Ann.UiSdlDataSpec.');
      });

      it('with the file url', function () {
        expect(this.issues[0].fileUrl).toEqual('meta://server/uiInfrastructure/src/UiSdlComponent.c3typ');
      });

      it('with the correct type name', function () {
        expect(this.issues[0].targetType).toEqual('UiSdlComponent');
      });
    });

    it('has no base type issues', function () {
      this.expectNoIssues(UiDesignableValidator.validateBaseType('UiSdlComponent'));
    });
  });

  describe('when called on a type that is not a UiSdlComponent', function () {
    describe('raises a missing data spec issue', function () {
      beforeAll(function () {
        this.issues = UiDesignableValidator.validateDataSpecForType('UiSdlComponentRef');
      });

      it('a single issue', function () {
        expect(this.issues.length).toEqual(1);
      });

      it('with the correct message', function () {
        expect(this.issues[0].message).toEqual(
          'UiSdlComponentRef is missing a data spec field. See Ann.UiSdlDataSpec.',
        );
      });

      it('with the file url', function () {
        expect(this.issues[0].fileUrl).toEqual('meta://server/uiInfrastructure/src/UiSdlComponentRef.c3typ');
      });

      it('with the correct type name', function () {
        expect(this.issues[0].targetType).toEqual('UiSdlComponentRef');
      });
    });

    describe('raises a base type issue', function () {
      beforeAll(function () {
        this.issues = UiDesignableValidator.validateBaseType('UiSdlComponentRef');
      });

      it('single issue', function () {
        expect(this.issues.length).toEqual(1);
      });

      it('with the correct message', function () {
        expect(this.issues[0].message).toEqual('UiSdlComponentRef must be a UiSdlComponent.');
      });

      it('with the file url', function () {
        expect(this.issues[0].fileUrl).toEqual('meta://server/uiInfrastructure/src/UiSdlComponentRef.c3typ');
      });

      it('with the correct type name', function () {
        expect(this.issues[0].targetType).toEqual('UiSdlComponentRef');
      });
    });
  });

  describe('when called on UiSdlTestType that is an UiDesignable type', function () {
    describe('raises unsupported public field type issues', function () {
      beforeAll(function () {
        this.issues = UiDesignableValidator.validatePublicUnsupportedValueTypes('UiSdlTestType');
      });

      it('with correct message', function () {
        expect(this.issues[0].message).toEqual(
          'Value type: json is not supported on non-private field: header found at: UiSdlTestType.header',
        );
        expect(this.issues[1].message).toEqual(
          'Value type: [string] is not supported on non-private field: value found at: UiSdlTestType.value',
        );
      });
    });

    it('has no data spec type issues', function () {
      this.expectNoIssues(UiDesignableValidator.validateDataSpecSettingTypes('UiSdlTestType'));
    });
  });
});
