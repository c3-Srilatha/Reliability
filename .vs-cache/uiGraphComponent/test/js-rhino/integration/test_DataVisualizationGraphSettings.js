/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_DataVisualizationGraphSettings';

// TODO MIG8-3437: re-enable this test
xdescribe(filename, function () {
  beforeAll(function () {
    this.settings = DataVisualizationGraphSettings.inst();
    this.graphCacheKey = 'global--123';
  });

  describe('::setGraphCacheKey', function () {
    beforeAll(function () {
      this.settings.setGraphCacheKey(this.graphCacheKey);
    });

    it('should get graph cache key after is it set', function () {
      expect(this.settings.getGraphCacheKey()).toEqual(this.graphCacheKey);
    });
  });

  describe('::clearGraphCacheKey', function () {
    beforeAll(function () {
      this.settings.clearGraphCacheKey();
    });

    it('should not get graph cache key after is it cleared', function () {
      expect(this.settings.getGraphCacheKey()).not.toBeTruthy();
    });
  });
});
