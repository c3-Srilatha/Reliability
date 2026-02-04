/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_AllCanonicals.js';

BaseCanonicalTester.runCanonicalTests({
  name: filename,
  canonicalTypeSpecs: [
    {
      canonicalType: CanonicalWorkOrder,
      targetTypeSpecs: [
        {
          targetType: WorkOrder,
        },
      ],
    },
    {
      canonicalType: CanonicalPurchaseOrderLineReceipt,
      targetTypeSpecs: [
        {
          targetType: PurchaseOrderLineReceipt,
        },
      ],
    },
    {
      canonicalType: CanonicalInventoryMeasurement,
      targetTypeSpecs: [
        {
          targetType: InventoryMeasurement,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['parent.id', 'start'],
        },
      ],
    },
    {
      canonicalType: CanonicalFacilityCharacteristicValue,
      targetTypeSpecs: [
        {
          targetType: FacilityCharacteristicValue,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['parent.id', 'name'],
        },
      ],
    },
    {
      canonicalType: CanonicalPointMeasurement,
      targetTypeSpecs: [
        {
          targetType: PointMeasurement,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['parent.id', 'stringValue'],
        },
      ],
    },
    {
      canonicalType: CanonicalReliabilityAssetEvent,
      targetTypeSpecs: [
        {
          targetType: ReliabilityAssetEvent,
        },
      ],
    },
    {
      canonicalType: CanonicalInventorySeries,
      targetTypeSpecs: [
        {
          targetType: InventorySeries,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['itemFacility'],
        },
      ],
    },
    {
      canonicalType: CanonicalTagHierarchyDenormalized,
      targetTypeSpecs: [
        {
          targetType: Facility,
        },
        {
          targetType: FacilityReliabilityAssetHierarchicalRelation,
        },
        {
          targetType: ReliabilityAsset,
        },
        {
          targetType: ReliabilityAssetHierarchicalRelation,
        },
        {
          targetType: ReliabilityAssetSensorRelation,
        },
        {
          targetType: Sensor,
        },
      ],
    },
    {
      canonicalType: CanonicalPurchaseOrder,
      targetTypeSpecs: [
        {
          targetType: PurchaseOrder,
        },
      ],
    },
    {
      canonicalType: CanonicalReliabilityAssetCharacteristicValue,
      targetTypeSpecs: [
        {
          targetType: ReliabilityAssetCharacteristicValue,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['parent.id'],
        },
      ],
    },
    {
      canonicalType: CanonicalPurchaseOrderLine,
      targetTypeSpecs: [
        {
          targetType: PurchaseOrderLine,
        },
      ],
    },
    {
      canonicalType: CanonicalPurchaseOrder,
      targetTypeSpecs: [
        {
          targetType: PurchaseOrderLine,
        },
        {
          targetType: PurchaseOrder,
        },
      ],
    },
  ],
});
