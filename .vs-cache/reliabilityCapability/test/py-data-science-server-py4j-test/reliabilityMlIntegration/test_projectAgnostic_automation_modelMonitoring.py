# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.


def test_agnostic_model_monitoring_job():
    job = c3.ReliabilityOrchestrator.ModelMonitoringJob.make().withDefaults()
    options = c3.ReliabilityOrchestrator.JobOptions(maxConcurrency=1)
    workflow = job.createWorkflow(options)
    assert job.name == "ReliabilityMl_ModelMonitoringJob"
    assert len(workflow.get().vertices) == 3
    assert workflow.get().vertices[0].name == "model_monitoring_job_run"
    assert workflow.get().vertices[0].inTypes["model_monitoring_job_run"] == None
    assert workflow.get().vertices[0].outTypes["out"] == None
    assert workflow.get().vertices[1].name == "Model Monitoring Job Coordinator"
    assert workflow.get().vertices[1].inTypes["coord"].name == "ReliabilityOrchestrator.ModelMonitoringJobRun"
    assert workflow.get().vertices[1].inTypes["$start"].name == "Workflow.Signal"
    assert workflow.get().vertices[1].outTypes["$success"].name == "Workflow.Signal"
    assert workflow.get().vertices[1].outTypes["error"].name == "Error"
    assert workflow.get().vertices[1].outTypes["out"].name == "ReliabilityOrchestrator.ModelMonitoringJobRun"
    assert workflow.get().vertices[2].name == "out"
    assert workflow.get().vertices[2].inTypes["in"] == None
    assert workflow.get().vertices[2].outTypes["out"] == None
    assert len(workflow.get().edges) == 2
