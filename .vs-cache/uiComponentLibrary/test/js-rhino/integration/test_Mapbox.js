/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Mapbox';

describe(filename, function () {
  beforeAll(function () {
    this.mapbox = UiSdlMapbox.inst();
    this.accessToken = 'myAccessToken';
    this.apiUrl = 'myApiUrl';
  });

  describe('::getAccessToken', function () {
    beforeAll(function () {
      this.mapbox.clearAccessToken(); // Make sure it's not present for this test.
    });

    it('should throw an error when access token is not set', function () {
      var self = this;
      expect(function () {
        self.mapbox.getAccessToken();
      }).toThrow();
    });
  });

  describe('::configWithAccessToken', function () {
    it('should throw an error when access token is not set', function () {
      var self = this;
      expect(function () {
        self.mapbox.configWithAccessToken();
      }).toThrow();
    });
  });

  describe('::setAccessToken', function () {
    beforeAll(function () {
      this.mapbox.setAccessToken(this.accessToken);
    });

    it('should get access token after access token is set', function () {
      expect(this.mapbox.getAccessToken()).toEqual(this.accessToken);
      expect(this.mapbox.configWithAccessToken().accessToken).toEqual(this.accessToken);
    });
  });

  describe('::clearAccessToken', function () {
    beforeAll(function () {
      this.mapbox.clearAccessToken();
    });

    it('should throw an error after access token is cleared', function () {
      var self = this;
      expect(function () {
        self.mapbox.getAccessToken();
      }).toThrow();
    });
  });

  describe('::setApiUrl', function () {
    beforeAll(function () {
      // Set the access token so that `configWithAccessToken` succeeds
      this.mapbox.setAccessToken(this.accessToken);
      this.mapbox.setApiUrl(this.apiUrl);
    });

    it('should get api url after api url is set', function () {
      expect(this.mapbox.getApiUrl()).toEqual(this.apiUrl);
      expect(this.mapbox.configWithAccessToken().url).toEqual(this.apiUrl);
    });
  });

  describe('::clearApiUrl', function () {
    beforeAll(function () {
      // Set the access token so that `configWithAccessToken` succeeds
      this.mapbox.setAccessToken(this.accessToken);
      this.mapbox.clearApiUrl();
    });

    it('should not get api url after api url is cleared', function () {
      expect(this.mapbox.getApiUrl()).not.toBeTruthy();
      expect(this.mapbox.configWithAccessToken().url).not.toBeTruthy();
    });
  });
});
