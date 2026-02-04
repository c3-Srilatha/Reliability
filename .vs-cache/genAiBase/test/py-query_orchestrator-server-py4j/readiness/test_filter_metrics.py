# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.


c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")

(
    filter_is_equivalent,
    filter_component_precision_recall,
) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/evaluation/filter_metrics.py",
    [
        "filter_is_equivalent",
        "filter_component_precision_recall",
    ],
)


def test_filter_is_equivalent(data_model_graph):
    prediction_with_array = {
        "sourceType": "Genai.Aircraft",
        "filter": "eq(1,2)|| intersects(id, ['X00', 'X01', 'X02'])",
    }
    label_with_array = {"sourceType": "Genai.Aircraft", "filter": "1==2|| intersects(id, ['X02', 'X01', 'X00'])"}

    prediction_false = {"sourceType": "Genai.Aircraft", "filter": "eq(1,2)"}
    label_false = {"sourceType": "Genai.Aircraft", "filter": "eq(2,3)"}

    examples = [
        (
            {
                "prediction": prediction_with_array,
                "label": label_with_array,
                "order_invariant_array": True,
                "graph": data_model_graph,
            },
            1,
        ),
        (
            {
                "prediction": prediction_with_array,
                "label": label_with_array,
                "order_invariant_array": False,
                "graph": data_model_graph,
            },
            0,
        ),
        (
            {
                "prediction": prediction_false,
                "label": label_false,
                "order_invariant_array": False,
                "graph": data_model_graph,
            },
            0,
        ),
    ]

    for kwargs, target in examples:
        score = filter_is_equivalent(**kwargs)
        assert score == target, f"Expceted {score=} to be the same as {target=}, for {kwargs=}."


def test_filter_field_and_logical_expression_precision_and_recall(data_model_graph):
    examples = [
        (
            {
                "prediction": {"sourceType": "Genai.Aircraft", "filter": "id == 'X00' && riskScore > 0.5"},
                "label": {"sourceType": "Genai.Aircraft", "filter": "id == 'X01'"},
                "graph": data_model_graph,
            },
            0.5,
            1,
            0,
            0,
        ),
        (
            {
                "prediction": {"sourceType": "Genai.Aircraft", "filter": "id == 'X00'"},
                "label": {"sourceType": "Genai.Aircraft"},
                "graph": data_model_graph,
            },
            0,
            1,
            0,
            1,
        ),
        (
            {
                "prediction": {"sourceType": "Genai.Aircraft"},
                "label": {"sourceType": "Genai.Aircraft", "filter": "id == 'X01'"},
                "graph": data_model_graph,
            },
            1,
            0,
            1,
            0,
        ),
    ]

    for (
        kwargs,
        target_field_precision,
        target_field_recall,
        target_logical_expression_precision,
        target_logical_expression_recall,
    ) in examples:
        predicted_field_precision = filter_component_precision_recall(
            default_filter="", level="field", metric="precision", **kwargs
        )
        predicted_field_recall = filter_component_precision_recall(
            default_filter="", level="field", metric="recall", **kwargs
        )
        predicted_logical_expression_precision = filter_component_precision_recall(
            default_filter="", level="logical_expression", metric="precision", **kwargs
        )
        predicted_logical_expression_recall = filter_component_precision_recall(
            default_filter="", level="logical_expression", metric="recall", **kwargs
        )

        assert (
            predicted_field_precision == target_field_precision
        ), f"Expected {predicted_field_precision=} to be the same as {target_field_precision=}, for {kwargs=}."
        assert (
            predicted_field_recall == target_field_recall
        ), f"Expected {predicted_field_recall=} to be the same as {target_field_recall=}, for {kwargs=}."
        assert (
            predicted_logical_expression_precision == target_logical_expression_precision
        ), f"Expected {predicted_logical_expression_precision=} to be the same as {target_logical_expression_precision=}, for {kwargs=}."
        assert (
            predicted_logical_expression_recall == target_logical_expression_recall
        ), f"Expected {predicted_logical_expression_recall=} to be the same as {target_logical_expression_recall=}, for {kwargs=}."
