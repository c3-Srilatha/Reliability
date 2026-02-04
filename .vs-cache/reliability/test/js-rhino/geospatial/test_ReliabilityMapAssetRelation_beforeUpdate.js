/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMapAssetRelation_beforeUpdate';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, null, [CronQueue]);

    this.assetWithGeoLocation1 = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      geoLocation: { latitude: 37.7749, longitude: -122.4194 },
    });
    this.assetWithGeoLocation2 = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      geoLocation: { latitude: 37.1433, longitude: -122.3245 },
    });
    this.assetWithGeoLocation3 = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      geoLocation: { latitude: 38.1433, longitude: -123.3245 },
    });
    this.assetWithGeoLocation4 = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      geoLocation: { latitude: 39.1433, longitude: -124.3245 },
    });
    this.assetWithNoGeoLocation = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {});

    TestApi.waitForSetup(this.ctx);
  });

  describe('when creating', function () {
    describe('with valid geo locations', function () {
      beforeAll(function () {
        this.reliabilityMapAssetRelation = ReliabilityMapAssetRelation.make({
          from: this.assetWithGeoLocation1,
          to: this.assetWithGeoLocation2,
        }).upsert();
      });

      it('should return the objects', function () {
        expect(this.reliabilityMapAssetRelation.id).withContext('relation id').toBeDefined();
      });

      afterAll(function () {
        this.reliabilityMapAssetRelation.remove();
      });
    });

    describe('with invalid geo locations', function () {
      it('throws an error', function () {
        expect(function () {
          ReliabilityMapAssetRelation.make({
            from: this.assetWithGeoLocation1,
            to: this.assetWithNoGeoLocation,
          }).upsert();
        }).toThrow();
      });
    });
  });

  describe('when updating', function () {
    beforeAll(function () {
      this.assetRelation = TestApi.upsertEntity(this.ctx, 'ReliabilityMapAssetRelation', {
        from: this.assetWithGeoLocation1,
        to: this.assetWithGeoLocation3,
      });
    });

    describe('with valid geo locations', function () {
      beforeAll(function () {
        this.assetRelation = this.assetRelation.withFrom(this.assetWithGeoLocation4).merge();
      });

      it('should return the objects', function () {
        expect(this.assetRelation.id).withContext('relation id').toBeDefined();
      });
    });

    describe('with invalid geo locations', function () {
      it('throws an error', function () {
        expect(function () {
          this.assetRelation.withFrom(this.assetWithNoGeoLocation).merge();
        }).toThrow();
      });
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });
});
