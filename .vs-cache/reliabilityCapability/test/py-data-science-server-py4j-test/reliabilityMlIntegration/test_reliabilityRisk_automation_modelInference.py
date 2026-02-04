# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


def test_model_inference_spec_sequential():
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference.make(
        {
            "mlOperationJobSpec": c3.MlSubject.OperationJobSpec.make(
                {
                    "subjectFilter": "exists(sensorRelations)",
                    "maxConcurrencyPerNode": 1,
                    "batchSize": 1,
                    "statusFilter": "label == 'CHAMPION'",
                    "project": c3.MlProject.forId("reliabilityRisk"),
                    "start": "2022-12-31",
                    "end": "2023-02-01",
                }
            ),
            "workflowType": "SEQUENTIAL",
        }
    ).withDefaults()
    workflow = spec.createWorkflow()
    vertices = workflow.get().vertices
    assert workflow.name == "ReliabilityRisk_ModelInference"
    assert len(vertices) == 6
    assert vertices[0].type().name() == "Workflow.Nested"
    assert vertices[1].type().name() == "Workflow.Nested"
    assert vertices[2].type().name() == "Workflow.Batch"
    assert vertices[2].job.type().name() == "RefreshNormalizationBatchJob"
    assert str(vertices[2].options.objTypeRef) == "ReliabilityRiskScoreMlPredictionHeader"
    assert vertices[3].type().name() == "Workflow.Batch"
    assert vertices[3].job.type().name() == "RefreshNormalizationBatchJob"
    assert str(vertices[3].options.objTypeRef) == "ReliabilityRiskScoreMlContributionHeader"
    assert vertices[4].type().name() == "Workflow.MapReduce"
    assert vertices[5].type().name() == "Workflow.Batch"
    assert vertices[5].job.type().name() == "RefreshCalcFieldsBatchJob"
    assert str(vertices[5].options.objTypeRef) == "ReliabilityAsset"
    assert list(vertices[5].options.calcFieldsToRefresh) == ["latestAlert", "numOpenAlerts", "numOpenDirectAlerts"]
    assert workflow.name == "ReliabilityRisk_ModelInference"
    assert "ReliabilityRisk_ModelInference" in workflow.id


def test_model_inference_spec_parallel_champion():
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference.make(
        {
            "mlOperationJobSpec": c3.MlSubject.OperationJobSpec.make(
                {
                    "subjectFilter": "exists(sensorRelations)",
                    "maxConcurrencyPerNode": 1,
                    "batchSize": 1,
                    "statusFilter": "label == 'CHAMPION'",
                    "project": c3.MlProject.forId("reliabilityRisk"),
                    "start": "2022-12-31",
                    "end": "2023-02-01",
                }
            )
        }
    ).withDefaults()
    workflow = spec.createWorkflow()
    vertices = workflow.get().vertices
    assert spec.workflowType == "PARALLEL"
    assert workflow.name == "ReliabilityRisk_ModelInference"
    assert len(vertices) == 1
    assert vertices[0].name == "ReliabilityRiskChampionModelInferenceJob"
    assert workflow.name == "ReliabilityRisk_ModelInference"
    assert "ReliabilityRisk_ModelInference" in workflow.id


def backfill_relations(asset_id, model_name, champion_start, champion_end):
    relation = c3.ReliabilityAssetToRiskModelRelation.fetch(
        {
            "filter": c3.Filter.eq("from.id", asset_id)
            .and_()
            .eq("to.name", model_name)
            .and_()
            .eq("status.label", "CANDIDATE"),
            "include": "route",
        }
    ).objs[0]
    route = relation.route
    route.updateStatus("CHAMPION")
    relation = c3.ReliabilityAssetToRiskModelRelation.fetch(
        {
            "filter": c3.Filter.eq("from.id", asset_id)
            .and_()
            .eq("to.name", model_name)
            .and_()
            .eq("status.label", "CHAMPION"),
            "include": "start, end, status",
        }
    ).objs[0]
    relation = relation.withFields(
        {
            "start": champion_start,
            "end": champion_end,
            "status": relation.status.withFields({"start": champion_start, "end": champion_end}),
        }
    ).merge({"returnInclude": "route"})
    route = relation.route
    route.updateStatus("RETIRED")
    relation = c3.ReliabilityAssetToRiskModelRelation.fetch(
        {
            "filter": c3.Filter.eq("from.id", asset_id)
            .and_()
            .eq("to.name", model_name)
            .and_()
            .eq("status.label", "RETIRED"),
            "include": "start, end, status",
        }
    ).objs[0]
    relation = relation.withFields(
        {"start": champion_end, "status": relation.status.withFields({"start": champion_end})}
    ).merge()


def wait_for_workflow_run(workflow_run, timeout_in_minutes, status_polls_per_min):
    import time

    run_status = workflow_run.status()
    for _ in range(timeout_in_minutes * status_polls_per_min):
        run_status = workflow_run.status()
        if run_status.isCompleted():
            break
        if run_status.isFailing() or run_status.isFailed() or run_status.isCanceling() or run_status.isCanceled():
            raise AssertionError("Test did not complete successfully.")
        time.sleep(int(60 / status_polls_per_min))
