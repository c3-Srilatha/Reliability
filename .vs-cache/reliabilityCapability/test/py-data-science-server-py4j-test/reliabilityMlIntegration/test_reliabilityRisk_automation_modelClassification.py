# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
import time


def _wait_for_completion(job_run, should_complete=True):
    timeout_in_minutes = 5
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

    if should_complete:
        assert run_status.isCompleted() is True
    else:
        assert run_status.isFailed() is True


@pytest.mark.parametrize("use_custom_time_range", [True, False])
def test_model_classification_spec(trained_models_setup_ml_integration, dataset_preparation_run_setup_ml_integration, use_custom_time_range):
    from datetime import timedelta

    models = trained_models_setup_ml_integration
    if use_custom_time_range:
        dataset_preparation_run = dataset_preparation_run_setup_ml_integration[0].get()
        val_time_range = dataset_preparation_run.valFeatureTimeRanges["features"]
        custom_time_range = c3.TimeRange(start=val_time_range.start + timedelta(hours=9), end=val_time_range.end)
        spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelClassification.make(
            {"models": models, "comparisonPeriod": custom_time_range}
        ).withDefaults()
    else:
        spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelClassification.make(
            {"models": models}
        ).withDefaults()
    workflow = spec.createWorkflow()
    vertices = workflow.get().vertices
    assert len(vertices) == 2
    assert vertices[0].name == "ReliabilityRisk_ModelEvaluationJobRun"
    assert vertices[0].action.typeName == "ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelClassification"
    assert vertices[0].action.actionName == "startModelEvaluationJob"
    assert vertices[1].name == "ReliabilityRisk_ModelClassificationBatchJob"
    assert vertices[1].type().name() == "Workflow.Batch"
    run = workflow.start()
    _wait_for_completion(run)


@pytest.mark.xfail
def test_model_classification_spec_wrong_1():
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelClassification.make().withDefaults()
    _ = spec.createWorkflow()


@pytest.mark.xfail
def test_model_classification_spec_wrong_2():
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelClassification.make(
        {"modelFilter": "id==''"}
    ).withDefaults()
    _ = spec.createWorkflow()
