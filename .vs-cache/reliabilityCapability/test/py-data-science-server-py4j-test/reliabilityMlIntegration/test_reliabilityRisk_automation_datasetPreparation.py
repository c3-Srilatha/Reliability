# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import uuid
import pytest


def _is_valid_uuid(value: str) -> bool:
    try:
        uuid.UUID(value)
        return True
    except ValueError:
        return False


@pytest.fixture(scope="module")
def ctx():
    filename = "test_reliabilityRisk_automation_datasetPreparation"
    ctx = c3.TestApi.createContext(filename=filename)
    yield ctx
    c3.TestApi.teardown(context=ctx)


@pytest.fixture(scope="module")
def default_dataset_preparation_spec(ctx):
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DatasetPreparation.make().withDefaults()
    yield spec


@pytest.fixture(scope="module")
def custom_dataset_preparation_spec(ctx):
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DatasetPreparation.make(
        {"spec": {"jobName": "Test Job Name"}}
    ).withDefaults()
    yield spec


def test_default_dataset_preparation_spec(default_dataset_preparation_spec):
    spec = default_dataset_preparation_spec
    workflow = spec.createWorkflow()
    workflow_vertices = workflow.get("vertices").vertices
    job_name = workflow_vertices[1].job.name
    job_name_uuid = job_name.split()[-1]

    assert spec.spec.interval == "QUARTER_HOUR"
    assert spec.spec.featurePreparationSpec.createDefaultFeatures is True
    assert spec.spec.featurePreparationSpec.featureCreationMethod == "EXPECTED_SENSOR"
    assert spec.spec.featurePreparationSpec.flatliningTimeSteps == 24
    assert spec.spec.maskPreparationSpec.preAssetEventsWindow == 288
    assert spec.spec.maskPreparationSpec.postAssetEventsWindow == 288
    assert spec.spec.trainValSplitSpec.percentage == 80
    assert spec.spec.trainValSplitSpec.doNotReverse is False
    assert workflow.name == "ReliabilityRisk_DatasetPreparation"
    assert job_name.startswith("Dataset Preparation Job") and _is_valid_uuid(value=job_name_uuid)
    assert len(workflow_vertices) == 3
    assert workflow_vertices[0].name == "InitializeJobSpec"
    assert workflow_vertices[0].action.actionName == "initializeJobSpec"
    assert workflow_vertices[1].name == "ReliabilityMlDatasetPreparationJob"
    assert workflow_vertices[2].name == "RefreshLatestDatasetPreparationRunCalcFields"
    assert workflow_vertices[2].options.calcFieldsToRefresh[0] == "latestDatasetPreparationRun"


def test_custom_dataset_preparation_spec(custom_dataset_preparation_spec):
    spec = custom_dataset_preparation_spec
    workflow = spec.createWorkflow()
    workflow_vertices = workflow.get("vertices").vertices
    job_name = workflow_vertices[1].job.name

    assert job_name == "Test Job Name"
