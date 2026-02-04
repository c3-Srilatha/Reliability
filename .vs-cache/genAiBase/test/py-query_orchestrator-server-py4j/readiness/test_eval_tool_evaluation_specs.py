# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import ast
import json

import pytest

FILENAME = "test_genai_py_util"


c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")


EvalQueryToolEvaluationSpec, EvalQueryToolDiagnosticMetricsSpec = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/evaluation/preconfigured_specs/eval_tool_evaluation_specs.py",
    ["EvalQueryToolEvaluationSpec", "EvalQueryToolDiagnosticMetricsSpec"],
)
SpecEvaluator = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/evaluation/evaluate_spec.py",
    ["SpecEvaluator"],
)


def test_eval_tool_preconfigured_evaluation_spec_field_names(graph_with_collection_fields):
    spec = EvalQueryToolEvaluationSpec(graph_with_collection_fields)
    eval_evaluator = SpecEvaluator(spec)
    label = {
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "max(riskScore)",
            "group": "id",
            "limit": 1,
            "filter": "components[0].id == 'X03' && riskScore > 20",
            "order": "ascending(riskScore)",
        }
    }
    prediction = {
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "id, max(riskScore)",
            "group": "id, invalidField",
            "filter": "components[0].id == 'X00'",
            "order": "descending(riskScore)",
        }
    }
    eval_query_tool_metric_values = eval_evaluator.evaluate(prediction, label)
    target_scores = {
        "sourcetype_exact_match": 1,
        "filter_is_equivalent": 0,
        "filter_field_precision": 1.0,
        "filter_logical_expression_precision": 0.0,
        "filter_field_recall": 0.5,
        "filter_logical_expression_recall": 0.0,
        "projection_string_equivalence": 0,
        "projection_projection_component_precision": 0.5,
        "projection_traversal_field_precision": 0.5,
        "projection_projection_component_recall": 1.0,
        "projection_traversal_field_recall": 1.0,
        "group_string_equivalence": 0,
        "group_projection_component_precision": 0,
        "group_traversal_field_precision": 0,
        "group_projection_component_recall": 0,
        "group_traversal_field_recall": 0,
        "order_string_equivalence": 0,
        "order_projection_component_precision": 0.0,
        "order_traversal_field_precision": 1.0,
        "order_projection_component_recall": 0.0,
        "order_traversal_field_recall": 1.0,
        "aggregate_score": 0,
    }
    assert (
        eval_query_tool_metric_values == target_scores
    ), f"Expected {eval_query_tool_metric_values=} to be {target_scores=}."

    label = {
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "max(riskScore)",
            "group": "",
            "limit": -1,
            "filter": "20 < riskScore && 'X03' == components[0].id",
            "order": "ascending(riskScore)",
        }
    }
    prediction = {
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "max(riskScore)",
            "filter": "components[0].id == 'X03' && riskScore > 20",
            "order": "ascending(riskScore)",
        }
    }
    eval_query_tool_metric_values = eval_evaluator.evaluate(prediction, label)
    target_scores = {
        "sourcetype_exact_match": 1,
        "filter_is_equivalent": 1,
        "filter_field_precision": 1.0,
        "filter_logical_expression_precision": 1.0,
        "filter_field_recall": 1.0,
        "filter_logical_expression_recall": 1.0,
        "projection_string_equivalence": 1,
        "projection_projection_component_precision": 1.0,
        "projection_traversal_field_precision": 1.0,
        "projection_projection_component_recall": 1.0,
        "projection_traversal_field_recall": 1.0,
        "group_string_equivalence": 1,
        "group_projection_component_precision": 1,
        "group_traversal_field_precision": 1,
        "group_projection_component_recall": 1,
        "group_traversal_field_recall": 1,
        "order_string_equivalence": 1,
        "order_projection_component_precision": 1.0,
        "order_traversal_field_precision": 1.0,
        "order_projection_component_recall": 1.0,
        "order_traversal_field_recall": 1.0,
        "aggregate_score": 1,
    }
    assert (
        eval_query_tool_metric_values == target_scores
    ), f"Expected {eval_query_tool_metric_values=} to be {target_scores=}."


def test_diagnostic_spec(graph_with_collection_fields):
    spec = EvalQueryToolDiagnosticMetricsSpec(graph_with_collection_fields)
    eval_evaluator = SpecEvaluator(spec)
    label = {
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "max(riskScore)",
            "group": "id",
            "limit": "1",
            "filter": "components[0].id == 'X03' && riskScore > 20",
            "order": "ascending(riskScore)",
        }
    }

    prediction = {
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "id, invalidField",
            "group": "id",
            "filter": "components[0].id == 'X00'",
            "order": "descending(riskScore)",
        }
    }
    eval_query_tool_diagnostic_metric_values = eval_evaluator.evaluate(prediction, label)
    for key, val in eval_query_tool_diagnostic_metric_values.items():
        assert val[0] == 0, f"Expected {val=} to be 0."

    label = {
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "id, max(riskScore)",
            "group": "id",
            "limit": "1",
            "filter": "riskScore > 20",
            "order": "ascending(max(riskScore))",
        }
    }

    prediction = {
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "id",
            "group": "id",
            "filter": "id == 'X00'",
        }
    }
    eval_query_tool_diagnostic_metric_values = eval_evaluator.evaluate(prediction, label)
    for key, val in eval_query_tool_diagnostic_metric_values.items():
        assert val[0] == 1, f"Expected {val=} to be 1. For {key=}"

    # Test where we have only one spec
    prediction = {
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "unique(riskScore)",
        }
    }

    eval_query_tool_diagnostic_metric_values = eval_evaluator.evaluate(prediction)
    for key, val in eval_query_tool_diagnostic_metric_values.items():
        assert val[0] == 1, f"Expected {val=} to be 1. For {key=}."
