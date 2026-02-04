# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
import time


def _wait_for_completion(job_run, should_complete=True):
    timeout_in_minutes = 15
    status_polls_per_min = 5
    for i in range(timeout_in_minutes * status_polls_per_min):
        run_status = job_run.status()
        if should_complete:
            if run_status.isCompleted():
                break
            if run_status.isFailing() or run_status.isFailed() or run_status.isCanceling() or run_status.isCanceled():
                raise AssertionError("Test did not complete successfully.")
        else:
            if run_status.isCompleted() or run_status.isFailed():
                break
            if run_status.isCanceling() or run_status.isCanceled():
                raise AssertionError("Test did not complete successfully.")
        time.sleep(int(60 / status_polls_per_min))


@pytest.mark.parametrize("invalid_field", ["asset_filter", "dataset_preparation_run_filter", "pipelines"])
def test_invalid_model_creation_job(dataset_preparation_run_setup_ml_integration, untrained_pipelines, invalid_field):
    pipeline_specs = [
        c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelTrainingPipeline(pipeline=pipeline)
        for pipeline in untrained_pipelines
    ]
    dummy_asset = c3.ReliabilityAsset(id="dummy_asset").create()
    if invalid_field == "asset_filter":
        batch_job = c3.ReliabilityOrchestrator.ReliabilityRisk.ModelCreationJob(
            options=c3.ReliabilityOrchestrator.ReliabilityRisk.ModelCreationJobOptions(
                pipelineSpecs=pipeline_specs, assetFilter=c3.Filter.eq("id", dummy_asset.id)
            )
        ).create()
    elif invalid_field == "dataset_preparation_run_filter":
        batch_job = c3.ReliabilityOrchestrator.ReliabilityRisk.ModelCreationJob(
            options=c3.ReliabilityOrchestrator.ReliabilityRisk.ModelCreationJobOptions(
                pipelineSpecs=pipeline_specs,
                datasetPreparationRunFilter=c3.Filter.eq("id", "dummy_dataset_preparation_run"),
            )
        ).create()
    else:
        dataset_preparation_runs = dataset_preparation_run_setup_ml_integration
        batch_job = c3.ReliabilityOrchestrator.ReliabilityRisk.ModelCreationJob(
            options=c3.ReliabilityOrchestrator.ReliabilityRisk.ModelCreationJobOptions(
                pipelineSpecs=[],
                datasetPreparationRunFilter=c3.Filter.intersects("id", [i.id for i in dataset_preparation_runs]),
            )
        ).create()
    job_run = batch_job.start()
    _wait_for_completion(batch_job, should_complete=False)
    error_msg = batch_job.status().errors[0].errorMsg
    assert "AssertionError" in error_msg
    dummy_asset.remove()
    c3.BatchQueue.clear()
