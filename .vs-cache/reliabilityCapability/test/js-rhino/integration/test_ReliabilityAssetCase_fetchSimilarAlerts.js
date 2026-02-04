/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityAssetCase_fetchSimilarAlerts';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    this.asset = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      name: 'Reliability Asset',
    });
    this.alerts = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetAlert', [
      {
        parent: this.asset,
      },
      {
        parent: this.asset,
      },
      {
        parent: this.asset,
      },
    ]);
    this.case = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetCase', {
      name: 'Reliability Case',
    });
    this.relation = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetAlertToCaseRelation', {
      from: this.alerts[0],
      to: this.case,
    });
    this.similarities = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetAlertSimilaritySmall', [
      {
        baseAlert: this.alerts[0],
        comparableAlert: this.alerts[1],
        similarityScore: 0.9,
        displaySimilarity: 90,
      },
      {
        baseAlert: this.alerts[0],
        comparableAlert: this.alerts[2],
        similarityScore: 0.4,
        displaySimilarity: 40,
      },
      {
        baseAlert: this.alerts[1],
        comparableAlert: this.alerts[0],
        similarityScore: 0.8,
        displaySimilarity: 80,
      },
    ]);
  });

  afterAll(function () {
    ReliabilityAssetAlertSimilaritySmall.removeAll(
      {
        filter: Filter.intersects('baseAlert', this.alerts).or().intersects('comparableAlert', this.alerts),
      },
      true
    );
    TestApi.teardown(this.ctx);
  });

  describe('fetchSimilarAlerts', function () {
    beforeAll(function () {
      this.spyOnAlertTriagingConfiguration = TestApi.spyOn(
        this.ctx,
        'ReliabilityAlertTriagingConfiguration',
        'configValue'
      )
        .callFake(function (action, input) {
          if (input.get('path') === 'similarityTypeName') {
            return 'ReliabilityAssetAlertSimilaritySmall';
          } else if (input.get('path') === 'alertSimilarityFilterThreshold') {
            return 0.6;
          }
        })
        .register();
      this.case = ReliabilityAssetCase.forId(this.case);
    });

    afterAll(function () {
      this.spyOnAlertTriagingConfiguration.unregister();
    });

    describe('without a fetch spec', function () {
      it('returns one similar alerts', function () {
        var alerts = this.case.fetchSimilarAlerts();
        expect(alerts.count).toEqual(1);
      });
    });

    describe('with a fetch spec', function () {
      it('returns one similar alert', function () {
        var alerts = this.case.fetchSimilarAlerts({
          filter: Filter.eq('parent', this.asset),
          limit: 4,
        });
        expect(alerts.count).toEqual(1);
      });
    });
  });
});
