# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.


c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")

(
    field_collection_equivalence,
    field_precision_recall,
) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/evaluation/field_metrics.py",
    [
        "field_collection_equivalence",
        "field_precision_recall",
    ],
)


def test_field_collection_equivalence(data_model_graph):
    prediction_projection = "id, riskScore"
    label_projection = "id"
    example = {
        "prediction": {
            "sourceType": "Genai.Aircraft",
            "projection": prediction_projection,
            "order": prediction_projection,
        },
        "label": {"sourceType": "Genai.Aircraft", "projection": label_projection, "order": label_projection},
        "graph": data_model_graph,
    }

    for key in ["projection", "order"]:
        result_do_not_discard_additional_elements = field_collection_equivalence(
            do_not_discard_additional_elements=True, field_key=key, **example
        )
        target = 1
        assert (
            result_do_not_discard_additional_elements == target
        ), f"Expected {result_do_not_discard_additional_elements=} to be {target=} for {example=} where {key=}."

        result_collection_equivalence = field_collection_equivalence(
            do_not_discard_additional_elements=False, field_key=key, **example
        )
        target = 0
        assert (
            result_collection_equivalence == target
        ), f"Expected {result_collection_equivalence=} to be {target=} for {example=} {key=}."


def test_field_precission_recall(data_model_graph):
    examples = [
        (
            {
                "prediction": {"sourceType": "Genai.Aircraft", "projection": "id, riskScore"},
                "label": {"sourceType": "Genai.Aircraft", "projection": "max(id)"},
                "graph": data_model_graph,
            },
            0,
            0,
            0.5,
            1,
        ),
        (
            {
                "prediction": {"sourceType": "Genai.Aircraft", "group": "id"},
                "label": {"sourceType": "Genai.Aircraft"},
                "graph": data_model_graph,
                "field_key": "group",
            },
            0,
            1,
            0,
            1,
        ),
    ]

    for (
        kwargs,
        target_field_precision_with_operations,
        target_field_recall_with_operations,
        target_field_precision_without_operations,
        target_field_recall_without_operations,
    ) in examples:
        predicted_field_precision_with_operations = field_precision_recall(
            include_operations=True, metric="precision", **kwargs
        )
        predicted_field_recall_with_operations = field_precision_recall(
            include_operations=True, metric="recall", **kwargs
        )
        predicted_field_precision_without_operations = field_precision_recall(
            include_operations=False, metric="precision", **kwargs
        )
        predicted_field_recall_without_operations = field_precision_recall(
            include_operations=False, metric="recall", **kwargs
        )

        assert (
            predicted_field_precision_with_operations == target_field_precision_with_operations
        ), f"Expected {predicted_field_precision_with_operations=} to be the same as {target_field_precision_with_operations=}, for {kwargs=}."
        assert (
            predicted_field_recall_with_operations == target_field_recall_with_operations
        ), f"Expected {predicted_field_recall_with_operations=} to be the same as {target_field_recall_with_operations=}, for {kwargs=}."
        assert (
            predicted_field_precision_without_operations == target_field_precision_without_operations
        ), f"Expected {predicted_field_precision_without_operations=} to be the same as {target_field_precision_without_operations=}, for {kwargs=}."
        assert (
            predicted_field_recall_without_operations == target_field_recall_without_operations
        ), f"Expected {predicted_field_recall_without_operations=} to be the same as {target_field_recall_without_operations=}, for {kwargs=}."
