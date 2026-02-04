/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_allCanonicals.js';

BaseCanonicalTester.runCanonicalTests({
  name: filename,
  canonicalTypeSpecs: [
    {
      canonicalType: CanonicalExampleMultiLayer1,
      disabled: true,
    },
    {
      canonicalType: CanonicalExampleCass,
      targetTypeSpecs: [
        {
          targetType: TargetExampleTDP,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['parent.id', 'start'],
        },
      ],
    },
    {
      canonicalType: CanonicalExampleCassNoParent,
      targetTypeSpecs: [
        {
          targetType: TargetExampleTDP,
          fetchAllPartitionedData: true,
          comparisonKeyFields: ['parent.id', 'start'],
        },
      ],
    },
    {
      canonicalType: CanonicalExampleMultiLayer2,
      targetTypeSpecs: [
        {
          targetType: TargetExampleMultiLayer2,
          disabled: true,
        },
        {
          targetType: TargetExampleMultiLayer3,
          comparisonKeyFields: ['uniqueId'],
        },
      ],
    },
  ],
});
