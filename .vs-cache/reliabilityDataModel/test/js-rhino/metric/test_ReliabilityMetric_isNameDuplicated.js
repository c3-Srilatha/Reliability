/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric_isNameDuplicated';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.relMetricId1 = 'test-metric' + Uuid.create();
    this.relMetricId2 = 'test-metric' + Uuid.create();
    this.now = DateTime.now();

    this.facility = TestApi.upsertEntity(this.ctx, 'Facility', {});

    this.relMetric = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityMetric', [
      {
        id: this.relMetricId1,
        name: 'test metric',
        description: 'test metric description',
        expression: '1==1',
        expandedExpression: '1==1',
        facility: this.facility,
        lastUpdated: this.now,
      },
      {
        id: this.relMetricId2,
        name: 'test metric 2',
        description: 'test metric description',
        expression: '1==1',
        expandedExpression: '1==1',
        facility: this.facility,
        lastUpdated: this.now,
      },
    ]);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('when #isNameDuplicated function called', function () {
    it('returns true when the name is a duplicate and no id is passed', function () {
      var result = ReliabilityMetric.isNameDuplicated('test metric');
      expect(result).toBeTrue();
    });

    it('returns true when the name is a duplicate and a different id is passed', function () {
      var result = ReliabilityMetric.isNameDuplicated('test metric', this.relMetricId2);
      expect(result).toBeTrue();
    });

    it('returns false when the name is a duplicate, but the same id is passed', function () {
      var result = ReliabilityMetric.isNameDuplicated('test metric', this.relMetricId1);
      expect(result).toBeFalse();
    });

    it('returns false when the name is different', function () {
      var result = ReliabilityMetric.isNameDuplicated('different name');
      expect(result).toBeFalse();
    });

    it('returns false when the name is different and an id is passed', function () {
      var result = ReliabilityMetric.isNameDuplicated('different name', this.relMetricId1);
      expect(result).toBeFalse();
    });
  });
});
