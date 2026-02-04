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
    filename = "test_projectAgnostic_automation_datasetPreparation"
    ctx = c3.TestApi.createContext(filename=filename)
    yield ctx
    c3.TestApi.teardown(context=ctx)


@pytest.fixture(scope="module")
def default_agnostic_dataset_preparation_job(ctx):
    spec = c3.ReliabilityOrchestrator.DatasetPreparationJobSpec.make(
        {
            "project": "reliabilityRisk",
            "assetFilter": c3.Filter.eq("1", 1),
            "spec": c3.ReliabilityMlDatasetPreparationSpec.make().withDefaults(),
        }
    ).withDefaults()

    job = c3.ReliabilityOrchestrator.DatasetPreparationJob.make({"jobSpecs": [spec]}).withDefaults().create()
    yield job
    job.remove()


@pytest.fixture(scope="module")
def custom_agnostic_dataset_preparation_job(ctx):
    spec = c3.ReliabilityOrchestrator.DatasetPreparationJobSpec.make(
        {
            "project": "reliabilityRisk",
            "assetFilter": c3.Filter.eq("1", 1),
            "spec": c3.ReliabilityMlDatasetPreparationSpec.make().withDefaults(),
        }
    ).withDefaults()

    job = (
        c3.ReliabilityOrchestrator.DatasetPreparationJob.make({"name": "Test Job Name", "jobSpecs": [spec]})
        .withDefaults()
        .create()
    )
    yield job
    job.remove()


def test_default_agnostic_dataset_preparation_job(default_agnostic_dataset_preparation_job):
    job = default_agnostic_dataset_preparation_job
    options = c3.ReliabilityOrchestrator.JobOptions(maxConcurrency=1)
    workflow = job.createWorkflow(options)
    pair_job_run = job.doStart(options, {})
    job_name = pair_job_run.snd.run.get().inputValues["tracking_job"].name
    job_name_uuid = job_name.split()[-1]

    assert job_name.startswith("Dataset Preparation Job") and _is_valid_uuid(value=job_name_uuid)
    assert len(workflow.get().vertices) == 6
    assert workflow.get().vertices[0].name == "dataset_preparation_job_run"
    assert workflow.get().vertices[0].inTypes["dataset_preparation_job_run"] is None
    assert workflow.get().vertices[0].outTypes["out"] is None
    assert workflow.get().vertices[1].name == "tracking_job"
    assert workflow.get().vertices[1].inTypes["tracking_job"] is None
    assert workflow.get().vertices[1].outTypes["out"] is None
    assert workflow.get().vertices[2].name == "ReliabilityMlDatasetPreparationJob_initializeBeforeWorkflow"
    assert workflow.get().vertices[2].inTypes["$start"].name == "Workflow.Signal"
    assert workflow.get().vertices[2].inTypes["this"].name == "ReliabilityMlDatasetPreparationJob"
    assert workflow.get().vertices[2].outTypes["$success"].name == "Workflow.Signal"
    assert workflow.get().vertices[2].outTypes["error"].name == "Error"
    assert workflow.get().vertices[2].outTypes["out"].name == "ReliabilityOrchestrator.DatasetPreparationJobRun"
    assert workflow.get().vertices[3].name == "Dataset Preparation Job Coordinator"
    assert workflow.get().vertices[3].inTypes["coord"].name == "ReliabilityOrchestrator.DatasetPreparationJobRun"
    assert workflow.get().vertices[3].inTypes["$start"].name == "Workflow.Signal"
    assert workflow.get().vertices[3].outTypes["$success"].name == "Workflow.Signal"
    assert workflow.get().vertices[3].outTypes["error"].name == "Error"
    assert workflow.get().vertices[3].outTypes["out"].name == "ReliabilityOrchestrator.DatasetPreparationJobRun"
    assert workflow.get().vertices[4].name == "ReliabilityMlDatasetPreparationJob_updateAfterWorkflow"
    assert workflow.get().vertices[4].inTypes["$start"].name == "Workflow.Signal"
    assert workflow.get().vertices[4].inTypes["this"].name == "ReliabilityMlDatasetPreparationJob"
    assert workflow.get().vertices[4].outTypes["$success"].name == "Workflow.Signal"
    assert workflow.get().vertices[4].outTypes["error"].name == "Error"
    assert workflow.get().vertices[5].name == "out"
    assert workflow.get().vertices[5].outTypes["out"] is None
    assert len(workflow.get().edges) == 5


def test_custom_agnostic_dataset_preparation_job(custom_agnostic_dataset_preparation_job):
    job = custom_agnostic_dataset_preparation_job
    options = c3.ReliabilityOrchestrator.JobOptions(maxConcurrency=1)
    job.createWorkflow(options)
    assert job.name == "Test Job Name"
