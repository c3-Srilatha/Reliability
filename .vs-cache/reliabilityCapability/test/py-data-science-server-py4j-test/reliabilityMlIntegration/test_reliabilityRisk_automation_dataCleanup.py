# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

TYPE_NAMES_TO_CLEANUP = [
    "Facility",
    "FacilityHierarchicalRelation",
    "FacilityReliabilityAssetHierarchicalRelation",
    "ReliabilityAsset",
    "ReliabilityAssetHierarchicalRelation",
    "ReliabilityAssetSensorRelation",
    "Sensor",
    "PointPhysicalMeasurementSeries",
    "PointMeasurement",
    "ReliabilityAssetEvent",
    "SourceFile",
    "DataIntegStatus",
    "Feature",
    "Feature.Set",
    "ReliabilityMlDatasetPreparationRun",
    "MlModel",
    "MlModel.Route",
    "MlModel.Train.Job",
    "MlModel.Train.JobRun",
    "MlOperationRun",
    "MlModel.Train.Result",
    "MlSubject.OperationJob",
    "ReliabilityAssetToRiskModelRelation",
    "ReliabilityRiskScoreMlPredictionHeader",
    "ReliabilityRiskScoreMlPrediction",
    "ReliabilityRiskScoreMlContributionHeader",
    "ReliabilityRiskScoreMlContribution",
    "ReliabilityAssetAlert",
    "ReliabilityAssetAlertStateHistory",
    "ReliabilityAssetAlertFeedback",
    "ReliabilityAssetCase",
]


def test_data_cleanup_workflow():
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DataCleanup.make().withDefaults()
    workflow = spec.createWorkflow()
    assert workflow.name == "ReliabilityRisk_DataCleanup"
    assert (
        c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DataCleanup.defaultCleanupTypeNames() == TYPE_NAMES_TO_CLEANUP
    )
    assert spec.typeNamesToCleanup == TYPE_NAMES_TO_CLEANUP
    assert workflow.get().vertices[0].options.context.value == TYPE_NAMES_TO_CLEANUP


@pytest.mark.xfail
def test_data_cleanup_workflow_wrong():
    _ = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DataCleanup.make({"typeNamesToCleanup": []}).createWorkflow()
