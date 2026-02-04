/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_ReliabilityAssetCaseSchemaUpgrade';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    // Create Facility
    this.facilities = TestApi.upsertBatchEntity(this.ctx, 'Facility', [
      {
        name: 'Redwood City',
      },
      {
        name: 'San Antonio',
      },
    ]);

    // Create Assets
    this.assets = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAsset', [
      {
        name: 'RWC_Asset001',
      },
      {
        name: 'RWC_Asset002',
      },
      {
        name: 'SA_Asset001',
      },
      {
        name: 'SA_Asset002',
      },
    ]);

    // Create Asset to facility relations
    TestApi.upsertBatchEntity(this.ctx, 'FacilityReliabilityAssetHierarchicalRelation', [
      {
        from: this.facilities[0],
        to: this.assets[0],
        relationship: 'general',
      },
      {
        from: this.facilities[0],
        to: this.assets[1],
        relationship: 'general',
      },
      {
        from: this.facilities[1],
        to: this.assets[2],
        relationship: 'general',
      },
      {
        from: this.facilities[1],
        to: this.assets[3],
        relationship: 'general',
      },
    ]);

    // Create Alerts
    this.alerts = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetAlert', [
      {
        name: 'RWC_Alert001',
        parent: this.assets[0],
      },
      {
        name: 'SA_Alert001',
        parent: this.assets[2],
      },
    ]);

    /**
     * Create cases
     * Case001 -> has a facility already.
     * Case002 -> has allAssets having same facility.
     * Case003 -> has allAssets having different facility. (through alert relations)
     * Case004 -> has no assets or alerts.
     */

    this.cases = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetCase', [
      {
        name: 'Case001',
        facility: this.facilities[0],
      },
      {
        name: 'Case002',
      },
      {
        name: 'Case003',
      },
      {
        name: 'Case004',
      },
    ]);

    // Create relations between cases and assets
    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetCaseToAssetRelation', [
      {
        from: this.cases[1],
        to: this.assets[0],
      },
      {
        from: this.cases[1],
        to: this.assets[1],
      },
      {
        from: this.cases[2],
        to: this.assets[1],
      },
    ]);

    // Create relations between alerts and cases
    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetAlertToCaseRelation', [
      {
        from: this.alerts[0],
        to: this.cases[1],
      },
      {
        from: this.alerts[1],
        to: this.cases[2],
      },
    ]);

    // Refresh calc fields
    ReliabilityAsset.refreshCalcFields({ sync: true });
    ReliabilityAssetCase.refreshCalcFields({ sync: true });
    TestApi.waitForSetup(this.ctx);
  });

  describe('#migrateReliabilityAssetCase_1', function () {
    beforeAll(function () {
      this.schemaUpgradeFailureResponse = ReliabilityAssetCaseSchemaUpgrade.migrateReliabilityAssetCase_1();
      this.schemaUpgradeFailureMessage = this.schemaUpgradeFailureResponse.get('message');
      this.unresolvedCaseIds = this.schemaUpgradeFailureResponse.get('ids');
      this.migratedCases = ReliabilityAssetCase.fetch({ include: 'facility', filter: Filter.exists('facility') });

      // Migrate unresolved cases.
      this.unresolvedCases = ReliabilityAssetCase.fetch({
        filter: Filter.intersects('id', this.unresolvedCaseIds),
      }).objs;
      this.resolvedCases = this.unresolvedCases.map((cs) => {
        return cs.withField('facility', this.facilities[0]);
      });
      ReliabilityAssetCase.mergeBatch(this.resolvedCases);
      TestApi.waitForSetup(this.ctx);

      // Attempt migration again.
      this.schemaUpgradeSuccessResponse = ReliabilityAssetCaseSchemaUpgrade.migrateReliabilityAssetCase_1();
      this.schemaUpgradeObj = ReliabilityAssetCaseSchemaUpgrade.make({}, true);
    });

    it('successfully migrates resolvable cases', function () {
      expect(this.migratedCases.count).toEqual(2);
      expect(this.migratedCases.objs.pluck('id')).toEqual(jasmine.arrayContaining([this.cases[0], this.cases[1]]));
    });

    it('returns ambiguous case ids that could not be migrated', function () {
      expect(this.schemaUpgradeFailureMessage).toEqual(this.schemaUpgradeObj.FAILURE_MESSAGE);
      expect(this.unresolvedCaseIds.length).toEqual(2);
      expect(this.unresolvedCaseIds).toEqual(jasmine.arrayContaining([this.cases[2], this.cases[3]]));
    });

    it('returns success after ambiguous cases have been migrated manually', function () {
      expect(this.schemaUpgradeSuccessResponse.get('message')).toEqual(this.schemaUpgradeObj.SUCCESS_MESSAGE);
      expect(this.schemaUpgradeSuccessResponse.get('ids')).toBeNull();
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });
});
