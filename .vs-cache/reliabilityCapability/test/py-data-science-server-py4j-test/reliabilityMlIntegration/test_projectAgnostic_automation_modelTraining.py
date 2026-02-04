# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.


def test_agnostic_model_training_job():
    job = c3.ReliabilityOrchestrator.TrainingJob.make().withDefaults()
    options = c3.ReliabilityOrchestrator.JobOptions(maxConcurrency=1)
    workflow = job.createWorkflow(options)
    assert job.name is None
    assert len(workflow.get().vertices) == 5
    assert workflow.get().vertices[0].name == "training_job_run"
    assert workflow.get().vertices[0].inTypes["training_job_run"] == None
    assert workflow.get().vertices[0].outTypes["out"] == None
    assert workflow.get().vertices[1].name == "model_config_run"
    assert workflow.get().vertices[1].inTypes["model_config_run"] == None
    assert workflow.get().vertices[1].outTypes["out"] == None
    assert workflow.get().vertices[2].name == "Training Job Coordinator"
    assert workflow.get().vertices[2].inTypes["coord"].name == "ReliabilityOrchestrator.TrainingJobRun"
    assert workflow.get().vertices[2].inTypes["$start"].name == "Workflow.Signal"
    assert workflow.get().vertices[2].outTypes["$success"].name == "Workflow.Signal"
    assert workflow.get().vertices[2].outTypes["error"].name == "Error"
    assert workflow.get().vertices[2].outTypes["out"].name == "ReliabilityOrchestrator.TrainingJobRun"
    assert workflow.get().vertices[3].name == "out"
    assert workflow.get().vertices[3].inTypes["in"] == None
    assert workflow.get().vertices[3].outTypes["out"] == None
    assert workflow.get().vertices[4].name == "ModelConfigRun_updateAfterWorkflow"
    assert workflow.get().vertices[4].inTypes["$start"].name == "Workflow.Signal"
    assert workflow.get().vertices[4].inTypes["this"].name == "ModelConfigRun"
    assert workflow.get().vertices[4].inTypes["jobType"].name == "string"
    assert workflow.get().vertices[4].outTypes["$success"].name == "Workflow.Signal"
    assert workflow.get().vertices[4].outTypes["error"].name == "Error"
    assert len(workflow.get().edges) == 4
