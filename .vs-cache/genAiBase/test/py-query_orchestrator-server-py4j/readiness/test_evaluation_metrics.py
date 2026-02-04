# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")


(
    projection_string_equivalence,
    traversal_field_precision_recall,
    projection_component_precision_recall,
) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/evaluation/projection_metrics.py",
    ["projection_string_equivalence", "traversal_field_precision_recall", "projection_component_precision_recall"],
)


(
    all_paths_are_valid,
    spec_executes_without_failures,
    all_functions_in_spec_are_valid,
) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/evaluation/diagnostic_metrics.py",
    [
        "all_paths_are_valid",
        "spec_executes_without_failures",
        "all_functions_in_spec_are_valid",
    ],
)


@pytest.mark.parametrize(
    "field_key, enforce_order_equivalence, target",
    [
        ("projection", False, 1),
        ("group", False, 0),
        ("order", True, 0),
        ("filter", False, 1),
        ("having", False, 1),
    ],
)
def test_projection_string_equivalence(graph_with_collection_fields, field_key, enforce_order_equivalence, target):
    label = {
        "sourceType": "Genai.Aircraft",
        "projection": "id, min(riskScore), max(riskScore)",
        "group": "id, min(riskScore), max(riskScore)",
        "order": "descending(riskScore), ascending(riskScore)",
        "having": "count(id)> 3",
    }

    prediction = {
        "sourceType": "Genai.Aircraft",
        "projection": "min(riskScore), max(riskScore), id",
        "group": "min(riskScore), max(riskScore)",
        "order": "ascending(riskScore), descending(riskScore)",
        "filter": "",
        "having": "count()> 3",
    }

    metric = projection_string_equivalence(
        prediction, label, graph_with_collection_fields, field_key, enforce_order_equivalence=enforce_order_equivalence
    )
    assert metric == target, f"Expected {metric=} to be {target=}. For {field_key=}."


@pytest.mark.parametrize(
    "target_traversal_field_precision, target_traversal_field_recall, kwargs",
    [
        (
            0.5,
            1,
            {
                "prediction": {"sourceType": "Genai.Aircraft", "projection": "components.id, riskScore"},
                "label": {"sourceType": "Genai.Aircraft", "projection": "max(components.id)"},
            },
        ),
        (
            0,
            1,
            {
                "prediction": {"sourceType": "Genai.Aircraft", "group": "id"},
                "label": {"sourceType": "Genai.Aircraft"},
                "field_key": "group",
            },
        ),
    ],
)
def test_field_path_precision_recall(
    graph_with_collection_fields, target_traversal_field_precision, target_traversal_field_recall, kwargs
):
    predicted_traversal_field_precision = traversal_field_precision_recall(
        metric="precision", graph=graph_with_collection_fields, **kwargs
    )
    predicted_traversal_field_recall = traversal_field_precision_recall(
        metric="recall", graph=graph_with_collection_fields, **kwargs
    )
    assert (
        predicted_traversal_field_precision == target_traversal_field_precision
    ), f"Expected {predicted_traversal_field_precision=} to be the same as {target_traversal_field_precision=}, for {kwargs=}."
    assert (
        predicted_traversal_field_recall == target_traversal_field_recall
    ), f"Expected {predicted_traversal_field_recall=} to be the same as {target_traversal_field_recall=}, for {kwargs=}."


@pytest.mark.parametrize(
    "field_key, target_precision, target_recall",
    [
        ("projection", 0.5, 0.5),
        ("group", 1.0, 2 / 3),
        ("order", 1 / 3, 1 / 3),
    ],
)
def test_projection_component_precision_recall(
    graph_with_collection_fields, field_key, target_precision, target_recall
):
    label = {
        "sourceType": "Genai.Aircraft",
        "projection": "id, max(1 + 2, riskScore -1)",
        "group": "id, min(riskScore), max(riskScore)",
        "order": "descending(riskScore), ascending(id), ascending(components)",
    }

    prediction = {
        "sourceType": "Genai.Aircraft",
        "projection": "max(2 + 1, riskScore -1), max()",
        "group": "min(riskScore), max(riskScore)",
        "order": "descending(riskScore), descending(id), descending(components)",
        "filter": "",
    }

    predicted_component_precision = projection_component_precision_recall(
        prediction, label, graph_with_collection_fields, metric="precision", field_key=field_key
    )
    assert (
        predicted_component_precision == target_precision
    ), f"Expected {predicted_component_precision=} to be {target_precision=} for {field_key=}."

    predicted_component_recall = projection_component_precision_recall(
        prediction, label, graph_with_collection_fields, metric="recall", field_key=field_key
    )
    assert (
        predicted_component_recall == target_recall
    ), f"Expected {predicted_component_recall=} to be {target_recall=} for {field_key=}."


def test_spec_executes_without_failures():
    label = {"sourceType": "Genai.Aircraft", "projection": "id"}
    prediction = {"sourceType": "Genai.Aircraft", "projection": "riskScore"}
    flag, error_messages = spec_executes_without_failures(label, prediction)
    assert flag == 1, f"Expected {flag=} to be 1."
    assert error_messages == {
        "label": [],
        "prediction": [],
    }, f"Expected no error messages in {error_messages=}."

    label = {"sourceType": "Genai.Aircraft", "projection": "id"}
    prediction = {"sourceType": "Genai.Aircraft", "projection": "riskScore", "group": "id"}
    flag, error_messages = spec_executes_without_failures(label, prediction)
    assert flag == 0, f"Expected {flag=} to be 0."
    assert error_messages["label"] == [], f"Expected {error_messages['label']=} to be []."
    expected_error = "Can't group using an expression that isn't included in the projections"
    assert (
        expected_error in error_messages["prediction"][0]
    ), f"Expected {error_messages['prediction']=} to contain {expected_error=}."

    label = {  # Spec that fails with Can't order on a projection that isn't handled by the db engine", we dont want this to fail.
        "sourceType": "Genai.AircraftComponent",
        "projection": "aircraft.location, riskScore",
        "order": "aircraft.location",
    }
    flag, error_messages = spec_executes_without_failures(label)
    assert flag == 1, f"Expected {flag=} to be 1."
    assert error_messages == {
        "label": [],
        "prediction": [],
    }, f"Expected no error messages in {error_messages=}."


def test_all_functions_in_spec_are_valid(graph_with_collection_fields):
    flag, functions = all_functions_in_spec_are_valid(
        label={"sourceType": "Genai.Aircraft", "projection": "id, max(1 + 2, riskScore -1), components.id"},
        prediction={
            "sourceType": "Genai.Aircraft",
            "projection": "max(2 + 1, riskScore -1)",
        },
        graph=graph_with_collection_fields,
    )
    assert flag == 1, f"Expected {flag=} to be 1."
    target_functions = {"prediction": [], "label": []}
    assert functions == target_functions, f"Expected {functions=} to be {target_functions=}."

    flag, functions = all_functions_in_spec_are_valid(
        label={"sourceType": "Genai.Aircraft", "projection": "id, sham(1 + 2, riskScore -1), components.id"},
        prediction={
            "sourceType": "Genai.Aircraft",
            "projection": "mash(2 + 1, riskScore -1)",
        },
        graph=graph_with_collection_fields,
    )
    assert flag == 0, f"Expected {flag=} to be 0."
    target_functions = {"label": ["sham"], "prediction": ["mash"]}
    assert functions == target_functions, f"Expected {functions=} to be {target_functions=}."


def test_all_paths_are_valid(graph_with_collection_fields):
    label = {"sourceType": "Genai.Aircraft", "projection": "id"}
    prediction = {"sourceType": "Genai.Aircraft", "projection": "components.mash"}
    flag, error_messages = all_paths_are_valid(label=label, prediction=prediction, graph=graph_with_collection_fields)
    target_error_message = "Could not traverse the projection path since field_name='mash' was not found in target_type='Genai.AircraftComponent'"
    assert (
        target_error_message in error_messages["prediction"][0]
    ), f"Expected {error_messages['prediction']=} {target_error_message=}"

    assert [] == error_messages["label"], f"Expected {error_messages['label']=} to be '[]'"
