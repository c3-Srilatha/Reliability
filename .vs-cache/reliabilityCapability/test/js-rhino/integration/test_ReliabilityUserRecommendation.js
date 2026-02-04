/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityUserRecommendation';
describe(filename, function () {
  beforeAll(function () {
    ReliabilityUserRecommendation.removeAll(null, true);
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();
    this.now = DateTime.nowWithMillis();

    this.asset = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {});
    this.sensor = TestApi.upsertEntity(this.ctx, 'Sensor', {});
    TestApi.upsertEntity(this.ctx, 'ReliabilityAssetSensorHierarchicalRelation', {
      from: this.asset.id,
      to: this.sensor.id,
      relationship: 'general',
    });
    TestApi.waitForSetup(this.ctx);

    this.assetAlert = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetTestAlert', {
      parent: this.asset,
      timestamp: this.now.plusDays(-1.5),
    });
    this.sensorAlert = TestApi.upsertEntity(this.ctx, 'SensorHealthAlert', {
      sensor: this.sensor,
      sensorAlertCategory: 'missing',
    });

    TestApi.spyOn(this.ctx, 'ReliabilityAsset', 'fetch')
      .returnValue({
        objs: [
          {
            id: 'asset1',
            name: 'Asset 1',
            meta: { created: this.now.plusDays(-13) },
          },
          {
            id: 'asset2',
            name: 'Asset 2',
            meta: { created: this.now.plusDays(-14) },
          },
          {
            id: 'asset3',
            name: 'Asset 3',
            currentModelRelations: [
              {
                id: 'relation3',
                from: 'asset3',
                to: 'UNLINKED_MODEL',
                meta: { updated: this.now },
              },
            ],
            meta: { created: this.now.plusDays(-14) },
          },
        ],
      })
      .register();
    ReliabilityUserRecommendationGenerator.generateTimeBasedRecommendations();
    ReliabilityUserRecommendationGenerator.generateUnresolvedAlertRecommendation({}, 2, 2);
    ReliabilityUserRecommendationGenerator.generateActivateModelRecommendation({}, 14, 2, 7);
  });

  afterAll(function () {
    ReliabilityUserRecommendation.removeAll(null, true);
    TestApi.teardown(this.ctx);
  });

  describe('NewAlert category', function () {
    beforeAll(function () {
      this.result = ReliabilityUserRecommendation.fetch({
        filter: Filter.eq('category.id', 'NewAlert').toString(),
        include: 'redirectUrl, assets',
      });
      this.recommendation = this.result.objs[0];
    });

    it('creates one recommendation', function () {
      expect(this.result.count).toEqual(1);
    });

    it('populates recommendation fields', function () {
      expect(this.recommendation.redirectUrl).toEqual('/reliability/all-alerts/alert-detail/' + this.assetAlert.id);
      expect(this.recommendation.at('assets.id')).toEqual([this.asset.id]);
    });
  });

  describe('NewSensorAlert category', function () {
    beforeAll(function () {
      this.result = ReliabilityUserRecommendation.fetch({
        filter: Filter.eq('category.id', 'NewSensorAlert'),
        include: 'redirectUrl, assets',
      });
      this.recommendation = this.result.objs[0];
    });

    it('creates one recommendation', function () {
      expect(this.result.count).toEqual(1);
    });

    it('populates recommendation fields', function () {
      expect(this.recommendation.redirectUrl).toEqual('/reliability/sensors/sensor-alerts/' + this.sensorAlert.id);
      expect(this.recommendation.at('assets.id')).toEqual([this.asset.id]);
    });
  });

  describe('ActivateMLModel category', function () {
    beforeAll(function () {
      this.result = ReliabilityUserRecommendation.fetch({
        filter: Filter.eq('category.id', 'ActivateMLModel'),
        include: 'redirectUrl, assets',
      });
      this.recommendation = this.result.objs[0];
    });

    it('creates one recommendation', function () {
      expect(this.result.count).toEqual(1);
    });

    it('populates recommendation fields', function () {
      expect(this.recommendation.redirectUrl).toEqual('/reliability/assets/asset1');
      expect(this.recommendation.at('assets.id')).toEqual(['asset1']);
    });
  });

  describe('UnresolvedAlert category', function () {
    beforeAll(function () {
      this.result = ReliabilityUserRecommendation.fetch({
        filter: Filter.eq('category.id', 'UnresolvedAlert'),
        include: 'redirectUrl, assets',
      });
      this.recommendation = this.result.objs[0];
    });

    it('creates one recommendation', function () {
      expect(this.result.count).toEqual(1);
    });

    it('populates recommendation fields', function () {
      expect(this.recommendation.redirectUrl).toEqual('/reliability/all-alerts/alert-detail/' + this.assetAlert.id);
      expect(this.recommendation.at('assets.id')).toEqual([this.asset.id]);
    });
  });

  describe('getTimeElapsedString', function () {
    it('returns correct string', function () {
      var result = ReliabilityUserRecommendation.getTimeElapsedString(this.now.plusDays(-2));
      expect(result).toEqual('2 days ago');
    });

    it('returns empty string when given a future date', function () {
      var result = ReliabilityUserRecommendation.getTimeElapsedString(this.now.plusDays(1));
      expect(result).toEqual('');
    });
  });

  describe('fetchForUserWithTimeElapsed', function () {
    it('returns modified description', function () {
      var result = ReliabilityUserRecommendation.fetchForUserWithTimeElapsed({
        include: 'description, category.name',
      });
      expect(result.objs[0].description).toContain('Just now');
    });

    it('returns no objects', function () {
      ReliabilityUserRecommendation.removeAll(null, true);
      var result = ReliabilityUserRecommendation.fetchForUserWithTimeElapsed();
      expect(result.count).toEqual(0);
    });
  });
});
