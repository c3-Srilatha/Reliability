# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

"""
Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
This material, including without limitation any software, is the confidential trade secret and proprietary
information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
This material may be covered by one or more patents or pending patent applications.
"""

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


def test_model_monitoring(trained_models_setup_ml_integration):
    import pandas as pd

    model = trained_models_setup_ml_integration[0].getMissing({"include": "this, trainInput"})
    time_delta = (pd.Timestamp.today() - model.trainInput.start).days
    monitoring_score_spec = c3.ReliabilityRiskMlModel.MonitoringScoreSpec.make(
        {"lookbackDaysStart": time_delta, "lookbackDaysEnd": time_delta - 2}
    )
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelMonitoring.make(
        {"modelFilter": c3.Filter.eq("id", model.id), "spec": monitoring_score_spec}
    ).withDefaults()
    workflow = spec.createWorkflow()
    assert workflow.name == "ReliabilityRisk_ModelMonitoring"
    run = spec.startModelMonitoringWorkflow()
    _wait_for_completion(run)
