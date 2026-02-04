# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


def test_data_integration_spec():
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DataIntegration.make(
        {"excelFilepath": "foo.xlsx"}
    ).withDefaults()
    assert spec.doNotLoadCanonicalData is False
    assert spec.doNotLoadExcelData is False
    assert spec.enableAsyncProcessing is False
    workflow = spec.createWorkflow()
    assert len(workflow.get().vertices) == 4
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DataIntegration.make(
        {"excelFilepath": "foo.xlsx", "enableAsyncProcessing": True}
    ).withDefaults()
    workflow = spec.createWorkflow()
    assert workflow.name == "ReliabilityRisk_DataIntegration"
    assert len(workflow.get().vertices) == 2
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DataIntegration.make(
        {"doNotLoadExcelData": True}
    ).withDefaults()
    workflow = spec.createWorkflow()
    assert len(workflow.get().vertices) == 3
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DataIntegration.make(
        {"doNotLoadCanonicalData": True, "excelFilepath": "foo.xlsx"}
    ).withDefaults()
    workflow = spec.createWorkflow()
    assert len(workflow.get().vertices) == 3


@pytest.mark.xfail
def test_data_integration_spec_wrong():
    _ = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DataIntegration.make().withDefaults().createWorkflow()


@pytest.mark.parametrize("upsert_async_processing_disabled", [True, False])
def test_set_async_processing_invalidation_config(upsert_async_processing_disabled):
    import time

    workflow = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.DataIntegration.createSetAsyncProcessingConfigWorkflow(
        name="foo", upsertAsyncProcessingDisabled=upsert_async_processing_disabled
    )
    run = workflow.start()
    while run.status().status != "completed":
        if run.status().status == "completed":
            break
        time.sleep(5)
    assert c3.InvalidationConfig.inst().configValue("upsertAsyncProcessingDisabled") == upsert_async_processing_disabled
