# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


def test_synthetic_data_spec():
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.SyntheticData(
        syntheticDataGenerationJobFields=c3.ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields(
            templateExcel=c3.File(url="meta:/"+c3.pkg().paths("**/wind_turbine_test.xlsx").only()),
            intrafacilityReplicationFactor=1,
            interfacilityReplicationFactor=1,
            numberOfExternalSensorsPerAsset=0,
            chunkDuration=c3.Duration.fromString("30d"),
            folderPath="generatedCanonicalData/",
            batchSize=1,
        )
    )
    workflow = spec.createWorkflow()
    vertices = workflow.get().vertices
    assert workflow.name == "ReliabilityRisk_SyntheticDataGeneration"
    assert len(vertices) == 2
    assert vertices[0].type().name() == "Workflow.Batch"
    assert vertices[0].job.type().name() == "ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJob"
    assert vertices[1].type().name() == "Workflow.Batch"
    assert vertices[1].job.type().name() == "DynBatchJob"
