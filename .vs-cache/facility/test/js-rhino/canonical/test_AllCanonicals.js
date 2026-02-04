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
      canonicalType: CanonicalFacility,
      targetTypeSpecs: [
        {
          targetType: AssetOwner,
        },
         {
          targetType: Location,
        },
        {
          targetType: Facility,
        },

      ],
    },
    {
      canonicalType: CanonicalMeasurement,
      targetTypeSpecs: [
        {
          targetType: Measurement,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['parent.id'],
        },
        {
          targetType: PointMeasurement,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['parent.id'],
        },
      ],
    },
    {
      canonicalType: CanonicalMeasurementSeries,
      targetTypeSpecs: [
        {
          targetType: PhysicalMeasurementSeries,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['unitConstraint.id'],
        },
        {
          targetType: PointPhysicalMeasurementSeries,
          fetchAllPartitionedData: true,
        },
      ],
    },
  ],
});
