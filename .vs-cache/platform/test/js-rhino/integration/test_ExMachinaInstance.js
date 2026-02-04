/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ExMachinaInstance';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.exmiStartSpy = TestApi.spyOn(this.ctx, 'ExMachinaInstance', 'start').returnValue(null).register();
  });

  afterAll(function () {
    this.exmiStartSpy.unregister();

    TestApi.teardown(this.ctx);
  });

  describe('for when no unassigned sessions exist', function () {
    it('starts up 1x 32G session correctly', function () {
      const beforeCallCount = this.exmiStartSpy.callCount();

      const startedInstances = ExMachinaInstance.startUnassignedInstances({"32G": 1});

      expect(this.exmiStartSpy.callCount()).withContext('number of calls to start').toEqual(beforeCallCount + 1);
      expect(startedInstances.size).withContext('number of started instances').toEqual(1);
    });

    it('starts up 3x 32G sessions correctly', function () {
      const beforeCallCount = this.exmiStartSpy.callCount();

      const startedInstances = ExMachinaInstance.startUnassignedInstances({"32G": 3});

      expect(this.exmiStartSpy.callCount()).withContext('number of calls to start').toEqual(beforeCallCount + 3);
      expect(startedInstances.size).withContext('number of started instances').toEqual(3);
    });
  });

});
