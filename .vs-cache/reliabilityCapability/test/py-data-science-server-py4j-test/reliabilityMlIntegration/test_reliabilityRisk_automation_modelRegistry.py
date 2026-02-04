# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
import time


def _wait_for_completion(job_run, should_complete=True):
    timeout_in_minutes = 20
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


def test_register_and_load_models_workflow(asset_data_setup_ml_integration, trained_models_setup_ml_integration):
    asset = asset_data_setup_ml_integration[0]
    models = trained_models_setup_ml_integration
    # Deploy the models as CANDIDATE in order to run model registry
    model_deployment_spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment(
        assetFilter=c3.Filter.eq("id", asset.id),
        label=c3.MlModel.Route.Status.Label.CANDIDATE,
        models=models,
    ).withDefaults()
    model_deployment_job = model_deployment_spec.createWorkflow()
    model_deployment_job_run = model_deployment_job.start()
    _wait_for_completion(model_deployment_job_run)
    relations = list(
        c3.ReliabilityAssetToRiskModelRelation.fetch(
            {"filter": c3.Filter.intersects("to", [trained_models_setup_ml_integration]), "include": "this, route"}
        ).objs
    )
    routes = [i.route for i in relations]
    # Register the models
    register_models_spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.RegisterModels(
        models=trained_models_setup_ml_integration
    ).withDefaults()
    register_models_workflow = register_models_spec.createWorkflow()
    register_models_worfklow_run = register_models_workflow.start()
    _wait_for_completion(register_models_worfklow_run)
    output_file = register_models_worfklow_run.outputs()["ModelRegistryOutputFile"]
    source_entries = c3.ReliabilityModelRegistry.SourceEntry.fetch(
        {"filter": c3.Filter.intersects("model", trained_models_setup_ml_integration)}
    ).objs
    assert len(source_entries) == 2
    # Load the new models
    load_models_spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.LoadModels(files=[output_file]).withDefaults()
    load_models_workflow = load_models_spec.createWorkflow()
    load_models_workflow_run = load_models_workflow.start()
    _wait_for_completion(load_models_workflow_run)
    load_models_job = load_models_workflow_run.outputs()["ReliabilityRiskLoadModelsJobOuput"]
    target_entries = c3.ReliabilityModelRegistry.TargetEntry.fetch(
        {"filter": c3.Filter.eq("job", load_models_job)}
    ).objs
    assert len(target_entries) == 2
    for target_entry in target_entries:
        model = target_entry.model.get()
        assert model.isTrained()
        assert c3.ReliabilityUtils.isObjInDb(model.datasetPreparationRun)
        model_relations = c3.ReliabilityAssetToRiskModelRelation.fetch(
            {"filter": f"to.id == '{model.id}'", "include": "this, route"}
        ).objs
        assert len(model_relations) == 1
        assert relations[0].status.label == "CANDIDATE"
        relations.extend(list(model_relations))
        routes.extend([i.route for i in model_relations])
        assert target_entry.hasValidPredictions == True
    # Clean up
    c3.ReliabilityModelRegistry.SourceEntry.removeBatch(source_entries)
    c3.ReliabilityModelRegistry.TargetEntry.removeBatch(target_entries)
    c3.MlModel.Route.removeBatch(routes)
    c3.ReliabilityAssetToRiskModelRelation.removeBatch(relations)
