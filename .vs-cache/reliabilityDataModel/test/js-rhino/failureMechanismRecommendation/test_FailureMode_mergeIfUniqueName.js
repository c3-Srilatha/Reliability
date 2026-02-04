/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FailureMode_mergeIfUniqueName';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext('test_FailureMode_mergeIfUniqueName');

    this.failureMode = TestApi.upsertEntity(this.ctx, 'FailureMode', {
      id: 'FM-01-Test',
      name: 'Failure Mode 1',
      failureModeLibrary: 'FML-01-Test',
    });

    this.uniqueFailureMode = FailureMode.make({
      name: 'Unique Failure Mode 1',
      failureModeLibrary: 'FML-01-Test',
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    FailureMode.removeAll({ filter: Filter.eq('failureModeLibrary', 'FML-01-Test') }, true);
  });

  describe('when failureMode has duplicate name in their respective failureModeLibrary', function () {
    it('should throw an error', function () {
      var duplicateFailureMode = FailureMode.make({
        name: 'Failure Mode 1',
        failureModeLibrary: 'FML-01-Test',
      });

      expect(() => {
        duplicateFailureMode.mergeIfUniqueName({});
      }).toThrowError(/FailureMode entity with name "Failure Mode 1" already exists!/);
    });
  });

  describe('when failureMode has no duplicate name in their respective failureModeLibrary', function () {
    beforeAll(function () {
      this.result = FailureMode.fetch({
        filter: Filter.eq('name', 'Unique Failure Mode 1').objs,
      });
    });

    it('should merge successfully', function () {
      expect(this.result.count).toEqual(1);
    });
  });
});
