# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
import pandas as pd
import numpy as np
import datetime
import time

pytestmark = pytest.mark.skip()


def _wait_for_completion(job_run, should_complete=True):
    timeout_in_minutes = 10
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


@pytest.mark.parametrize("create_sensor_relations", [True, False])
def test_sensor_association_spec(sensor_association_data_setup, create_sensor_relations):
    assets = sensor_association_data_setup
    feature_name = "S_11FC008_PERCENT_OPEN_Sensor"
    expected_sensor_name = "PERCENT_OPEN"
    external_sensor_filter = c3.Filter.make('contains(id, "External")')
    sensor_association_spec = c3.ReliabilityAssetSensorAssociationSpec(
        assets=assets,
        start=datetime.datetime(2022, 1, 1),
        end=datetime.datetime(2022, 5, 1),
        interval="HOUR",
        assetExpectedSensors=[c3.ExpectedSensor(id=expected_sensor_name).get()],
        externalSensorFilter=external_sensor_filter,
        extremeValueBounds=c3.Pair.ofDbl(0.0, 100.0),
        associationMethod=c3.ReliabilityAssetSensorAssociationMethod.PEARSON,
        useLag=False,
    ).withDefaults()
    sensor_selection_spec = c3.ReliabilityAssetSensorSelectionSpec(
        featureName=f"Feature_{feature_name}_HOUR", topN=3
    ).withDefaults()
    sensor_association_orchestrator_spec = c3.ReliabilityOrchestrator.SensorAssociation(
        spec=sensor_association_spec,
        createSensorRelations=create_sensor_relations,
        sensorSelectionSpec=sensor_selection_spec,
        removeRelations=True,
    ).withDefaults()
    workflow = sensor_association_orchestrator_spec.createWorkflow().get()
    vertices = workflow.vertices
    assert vertices[0].action.typeName == "ReliabilityOrchestrator.SensorAssociation"
    assert vertices[0].action.actionName == "createSensorAssociationJob"
    assert vertices[1].type().name() == "Workflow.Output"
    assert vertices[2].action.typeName == "ReliabilityOrchestrator.SensorAssociation"
    assert vertices[2].action.actionName == "startSensorAssociationWorkflow"
    assert vertices[3].type().name() == "Workflow.Batch"
    if create_sensor_relations:
        assert len(vertices) == 5
        assert vertices[4].type().name() == "Workflow.MapReduce"
    else:
        assert len(vertices) == 4
    run = workflow.start()
    _wait_for_completion(run)
    if create_sensor_relations:
        outputs = run.outputs()
        sensor_association_job = outputs["SensorAssociationJobOutput"].get()
        relations = c3.ReliabilityAssetSensorRelation.fetch(
            {"filter": c3.Filter.eq("sensorAssociationJob", sensor_association_job)}
        ).objs
        assert (
            c3.ReliabilityAssetSensorAssociationJob.forId(sensor_association_job).get("workflowRun.id").workflowRun.id
            == run.id
        )
        assert len(relations) == 6
        c3.ReliabilityAssetSensorRelation.removeBatch(relations)


@pytest.mark.parametrize("remove_relations", [True, False])
def test_create_sensor_relations_job(sensor_association_data_setup, remove_relations):
    assets = sensor_association_data_setup
    feature_name = "S_11FC008_PERCENT_OPEN_Sensor"
    expected_sensor_name = "PERCENT_OPEN"
    external_sensor_filter = c3.Filter.make('contains(id, "External")')
    sensor_association_spec = c3.ReliabilityAssetSensorAssociationSpec(
        assets=assets,
        start=datetime.datetime(2022, 1, 1),
        end=datetime.datetime(2022, 5, 1),
        interval="HOUR",
        assetExpectedSensors=[c3.ExpectedSensor(id=expected_sensor_name).get()],
        associationMethod=c3.ReliabilityAssetSensorAssociationMethod.PEARSON,
        externalSensorFilter=external_sensor_filter,
        extremeValueBounds=c3.Pair.ofDbl(0.0, 100.0),
        useLag=False,
    ).withDefaults()
    sensor_selection_spec_first = c3.ReliabilityAssetSensorSelectionSpec(
        featureName=f"Feature_{feature_name}_HOUR", topN=3
    ).withDefaults()
    sensor_association_orchestrator_spec_first = c3.ReliabilityOrchestrator.SensorAssociation(
        spec=sensor_association_spec,
        createSensorRelations=True,
        sensorSelectionSpec=sensor_selection_spec_first,
        removeRelations=remove_relations,
    ).withDefaults()
    workflow_first = sensor_association_orchestrator_spec_first.createWorkflow()
    run_first = workflow_first.start()
    _wait_for_completion(run_first)

    sensor_selection_spec_second = c3.ReliabilityAssetSensorSelectionSpec(
        featureName=f"Feature_{feature_name}_HOUR", topN=2
    ).withDefaults()
    sensor_association_orchestrator_spec_second = c3.ReliabilityOrchestrator.SensorAssociation(
        spec=sensor_association_spec,
        createSensorRelations=True,
        sensorSelectionSpec=sensor_selection_spec_second,
        removeRelations=remove_relations,
    ).withDefaults()
    workflow_second = sensor_association_orchestrator_spec_second.createWorkflow()
    run_second = workflow_second.start()
    _wait_for_completion(run_second)

    sensor_association_job_first = run_first.outputs()["SensorAssociationJobOutput"].get()
    sensor_association_job_second = run_second.outputs()["SensorAssociationJobOutput"].get()
    if remove_relations == True:
        relations = c3.ReliabilityAssetSensorRelation.fetch(
            {"filter": c3.Filter.exists("sensorAssociationJob"), "include": "sensorAssociationJob"}
        ).objs
        assert len(relations) == 4
        for relation in relations:
            assert relation.sensorAssociationJob.id == sensor_association_job_second.id
    else:
        relations = c3.ReliabilityAssetSensorRelation.fetch(
            {"filter": c3.Filter.exists("sensorAssociationJob"), "include": "sensorAssociationJob"}
        ).objs
        assert len(relations) == 6
        first_job_count = 0
        second_job_count = 0
        for relation in relations:
            if relation.sensorAssociationJob.id == sensor_association_job_first.id:
                first_job_count += 1
            if relation.sensorAssociationJob.id == sensor_association_job_second.id:
                second_job_count += 1
        assert first_job_count == 2
        assert second_job_count == 4
    c3.ReliabilityAssetSensorRelation.removeBatch(relations)
