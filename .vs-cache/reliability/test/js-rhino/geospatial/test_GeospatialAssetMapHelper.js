/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GeospatialAssetMapHelper';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);

    this.cmzlPacketHeader = {
      id: 'document',
      version: '1.0',
    };

    this.entityToFeatureMap = {
      ReliabilityAsset: {
        getSpec: 'convertSpecToAssetFetchSpec',
        transformToCZML: 'convertAssetToCZML',
      },
      ReliabilityMapAssetRelation: {
        getSpec: 'convertSpecToRelationFetchSpec',
        transformToCZML: 'convertAssetGeoRelationToCZML',
      },
    };

    this.facility = TestApi.upsertEntity(this.ctx, 'Facility', { id: 'Geospatial_RWC' });

    this.asset1 = ReliabilityAsset.make({
      name: 'Asset1',
      id: 'Asset1',
      assetClass: {
        name: 'Network Transformer',
        mapIcon: 'hard-drive',
      },
      geoLocation: {
        longitude: 1,
        latitude: -1,
      },
      numOpenCases: 1,
      numOpenAlerts: 1,
      assetImportanceLevel: {
        displayName: 'High',
      },
      assetLevel: 'Equipment',
      plannedMaintenance: [
        {
          id: 'plannedMaintenanceId',
          parent: {
            id: 'Asset1',
          },
        },
      ],
      pastMaintenance: [
        {
          id: 'plannedMaintenanceId',
          parent: {
            id: 'Asset1',
          },
        },
      ],
    });

    this.asset2 = ReliabilityAsset.make({
      name: 'Asset2',
      id: 'Asset2',
      assetClass: {
        name: 'Network Transformer',
        mapIcon: 'hard-drive',
      },
      geoLocation: {
        longitude: 1,
        latitude: -1,
      },
      numOpenCases: 1,
      numOpenAlerts: 1,
      assetImportanceLevel: {
        displayName: 'High',
      },
      assetLevel: 'Equipment',
      plannedMaintenance: [
        {
          id: 'plannedMaintenanceId',
          parent: {
            id: 'Asset2',
          },
        },
      ],
      pastMaintenance: [
        {
          id: 'plannedMaintenanceId',
          parent: {
            id: 'Asset2',
          },
        },
      ],
    });

    this.spec = {
      selectedFacilities: '["Geospatial_RWC"]',
      assetsFilter: 'upperCase(assignedProjects) == "RELIABILITYRISK"',
    };

    this.relation = ReliabilityMapAssetRelation.make({
      id: '003d90b8-f3b6-4b7f-a4e7-ed801fa6333f',
      from: this.asset1,
      to: this.asset2,
      points: [
        { longitude: 15, latitude: 25 },
        { longitude: 5, latitude: 15 },
      ],
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    this.asset1.remove();
    this.asset2.remove();
    this.relation.remove();
  });

  describe('#getEntityToFeatureMap', function () {
    it('Should return the expected feature map', function () {
      expect(GeospatialAssetMapHelper.getEntityToFeatureMap()).toEqual(this.entityToFeatureMap);
    });
  });

  describe('#getData without filter', function () {
    it('should return CMZL_PACKET_HEADER when no spec is present', function () {
      expect(GeospatialAssetMapHelper.getData()[0]).toEqual(this.cmzlPacketHeader);
    });
  });

  describe('#getData with filter', function () {
    it('should return collection of objects when spec is present', function () {
      expect(GeospatialAssetMapHelper.getData(this.spec)[1]).toBeDefined();
    });
  });

  describe('#convertSpecToAssetFetchSpec with spec filter', function () {
    beforeAll(function () {
      this.expectedAssetFetchSpec = {
        offset: 0,
        limit: -1,
        filter:
          'exists(geoLocation) && intersects(facility, ["Geospatial_RWC"]) && (upperCase(assignedProjects) == "RELIABILITYRISK")',
        include:
          'name, assetClass.mapIcon, assetClass.mapModel, assetClass.name, numOpenAlerts, numOpenCases, plannedMaintenance, pastMaintenance, numOpenCases, geoLocation, assetImportanceLevel.displayName',
      };
    });

    it('should return an asset fetch spec', function () {
      expect(GeospatialAssetMapHelper.convertSpecToAssetFetchSpec(this.spec)).toEqual(this.expectedAssetFetchSpec);
    });
  });

  describe('#convertSpecToAssetFetchSpec without spec filter', function () {
    beforeAll(function () {
      this.specWithoutFilter = { selectedFacilities: '["Geospatial_RWC"]' };
      this.expectedAssetFetchSpec = {
        offset: 0,
        limit: -1,
        filter: 'exists(geoLocation) && intersects(facility, ["Geospatial_RWC"])',
        include:
          'name, assetClass.mapIcon, assetClass.mapModel, assetClass.name, numOpenAlerts, numOpenCases, plannedMaintenance, pastMaintenance, numOpenCases, geoLocation, assetImportanceLevel.displayName',
      };
    });

    it('should return an asset fetch spec', function () {
      expect(GeospatialAssetMapHelper.convertSpecToAssetFetchSpec(this.specWithoutFilter)).toEqual(
        this.expectedAssetFetchSpec
      );
    });
  });

  describe('#convertAssetToCZML', function () {
    beforeAll(function () {
      this.expectedAssetToCZML = {
        id: 'Asset1',
        name: 'Asset1',
        position: {
          cartographicDegrees: [1, -1, 0.0],
        },
        properties: {
          featureType: 'marker',
          assetClass: 'Network Transformer',
          classIcon: 'hard-drive',
          openAlerts: 1,
          openCases: 1,
          assetImportanceLevel: 'High',
          plannedMaintenance: true,
          pastMaintenance: true,
        },
      };
    });

    it('should convert a ReliabilityAsset into a CZML object', function () {
      expect(GeospatialAssetMapHelper.convertAssetToCZML(this.asset1)).toEqual(this.expectedAssetToCZML);
    });
  });

  describe('#convertSpecToRelationFetchSpec', function () {
    beforeAll(function () {
      this.expectedRelationFetchSpec = {
        offset: 0,
        limit: -1,
        filter: 'intersects(facilities, ["Geospatial_RWC"])',
        include: 'from.geoLocation, to.geoLocation, points',
      };
    });

    it('should return an relation fetch spec', function () {
      expect(GeospatialAssetMapHelper.convertSpecToRelationFetchSpec(this.spec)).toEqual(
        this.expectedRelationFetchSpec
      );
    });
  });

  describe('#convertAssetGeoRelationToCZML', function () {
    beforeAll(function () {
      this.expectedAssetGeoRelationToCZML = {
        id: '003d90b8-f3b6-4b7f-a4e7-ed801fa6333f',
        polyline: {
          positions: {
            cartographicDegrees: [1, -1, 0.0, 15, 25, 0.0, 5, 15, 0.0, 1, -1, 0.0],
          },
        },
        properties: {
          featureType: 'relation',
          assetClass: 'Transmission Line',
          classIcon: 'horizontal-rule',
        },
      };
    });

    it('should convert a ReliabilityMapAssetRelation into a CZML object', function () {
      expect(GeospatialAssetMapHelper.convertAssetGeoRelationToCZML(this.relation)).toEqual(
        this.expectedAssetGeoRelationToCZML
      );
    });
  });
});
