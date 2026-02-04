# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import re
import pytest


c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")

(
    ProjectionHandler,
    split_string_by_delimiter_not_in_between_left_and_right_expression,
) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/projection_handler.py",
    ["ProjectionHandler", "split_string_by_delimiter_not_in_between_left_and_right_expression"],
)


def test_empty_projections(graph_with_collection_fields):
    examples = [
        "   ",
        "",
        "\n",
        "\t",
        "\t\n \n\t",
    ]
    for projection_string in examples:
        projection = ProjectionHandler.from_string(projection_string, "Genai.Aircraft", graph_with_collection_fields)
        assert len(projection.components) == 0, f"Expected {projection_string=} to be empty."


def test_equals_and_not_equals_methods(graph_with_collection_fields):
    examples = [
        (" ", ""),
        ("", ""),
        ("\n", ""),
        ("\t", ""),
        (
            "riskScore, avg(min(riskScore)), exists(avg(min(riskScore)))",
            " exists(avg(min(riskScore))), riskScore, avg(min(riskScore))",
        ),
        (
            "max(riskScore ),  \t riskScore + components.riskScore",
            "max(riskScore), components.riskScore + riskScore",
        ),
        (
            "components.(id == 'X00_pressure'  ).alerts[0].id, \n riskScore > 3",
            "components.('X00_pressure' == id).alerts[0].id, 3 < riskScore",
        ),
        ("1, 2", "2, 1"),
        ("id", "id"),
        ("components", "components.id"),
        ("'2021-01-01'", "'2021-01-01 00:00:00'"),
    ]

    for projection_string1, projection_string2 in examples:
        projection = ProjectionHandler.from_string(projection_string1, "Genai.Aircraft", graph_with_collection_fields)
        assert (
            projection == projection_string2
        ) == True, f"Expected {projection_string1=} to be equal to {projection_string2=}."

    examples_not_equals = [
        ("1, 2", "3, 1"),
        ("'2021-01-01'", "'2021-01-01 00:00:00'"),
    ]

    for projection_string1, projection_string2 in examples_not_equals:
        projection = ProjectionHandler.from_string(
            projection_string1, "Genai.Aircraft", graph_with_collection_fields, infer_datetime_match_pattern=None
        )
        assert (
            projection == projection_string2
        ) == False, f"Expected {projection_string1=} to not be equal to {projection_string2=}."


def test_split_projections():
    examples = [
        ("(apple, orange), banana,", ["(apple, orange)", " banana"]),
        (
            "(apple, orange), banana, (grape, cherry), peach",
            ["(apple, orange)", " banana", " (grape, cherry)", " peach"],
        ),
        (
            "((apple, orange), (grape, cherry)), banana, peach",
            ["((apple, orange), (grape, cherry))", " banana", " peach"],
        ),
        ("intersects(id, ['X0', 'X1']), id", ["intersects(id, ['X0', 'X1'])", " id"]),
        ("intersects(id, ['X0', 'X1']), [id, riskScore]", ["intersects(id, ['X0', 'X1'])", " [id, riskScore]"]),
        (
            "intersects(id, {'X0':1, 'X1': 2}), [id, riskScore], {'X0':1, 'X1': 2}",
            ["intersects(id, {'X0':1, 'X1': 2})", " [id, riskScore]", " {'X0':1, 'X1': 2}"],
        ),
    ]

    for input_string, target_split_list in examples:
        split_list = split_string_by_delimiter_not_in_between_left_and_right_expression(input_string)
        assert (
            split_list == target_split_list
        ), f"Expected {split_list=} to be {target_split_list=} for {input_string=}."


def test_apply_order(graph_with_collection_fields):
    order_is_true = [
        "ascending(riskScore), descending((1 == 2))",
        "ascending(components[0].alerts.(('X00' == id)).id)",
        "id",
    ]

    order_is_false = [
        "riskScore, (1 == 2)",
        "components[0].alerts.(('X00' == id)).id",
        "id",
    ]

    examples = [
        # Apply weird space characters
        " \n\t ascending(riskScore), descending(1 == 2)  \n\t",
        "ascending(components[0].alerts.(id == 'X00'))  \n\t",
        "id",
    ]

    for example, with_order, without_order in zip(examples, order_is_true, order_is_false):
        projection = ProjectionHandler.from_string(example, "Genai.Aircraft", graph_with_collection_fields)

        projection_string = projection.projection_string(apply_order=True)
        assert (
            with_order == projection_string
        ), f"Expected {projection_string=} to be {with_order=} when apply_order is set to True."

        projection_string = projection.projection_string(apply_order=False)
        assert (
            without_order == projection_string
        ), f"Expected {projection_string=} to be {without_order=} when apply_order is set to False."


def test_standardize_count_id_to_count(graph_with_collection_fields):
    projection = ProjectionHandler.from_string(
        "count(id)", "Genai.Aircraft", graph_with_collection_fields, standardize_count_id_to_count=True
    )
    assert (
        projection == "count()"
    ), f"Expected 'count(id)' to be equivalent to 'count()' when standardize_count_id_to_count=True."

    projection = ProjectionHandler.from_string(
        "count(id)", "Genai.Aircraft", graph_with_collection_fields, standardize_count_id_to_count=False
    )
    assert (
        not projection == "count()"
    ), f"Expected 'count(id)' to not be equivalent to 'count()' when standardize_count_id_to_count=False."


def test_map_projection_to_id(graph_with_collection_fields):
    projection_map_to_id = ProjectionHandler.from_string(
        "components, components == components",
        "Genai.Aircraft",
        graph_with_collection_fields,
        map_references_to_id=True,
    )
    field = projection_map_to_id.all_items_in_expression["field"].pop()
    assert (
        field == "Genai.AircraftComponent.id"
    ), f"Expected {field=} to be 'Genai.AircraftComponent.id' when map_references_to_id=True."
    target_projection_string = "components.id, (components.id == components.id)"
    assert (
        str(projection_map_to_id) == target_projection_string
    ), f"Expected {projection_map_to_id=} to be {target_projection_string=} when map_references_to_id=True."

    projection_do_not_map_to_id = ProjectionHandler.from_string(
        "components, components == components",
        "Genai.Aircraft",
        graph_with_collection_fields,
        map_references_to_id=False,
    )
    field = projection_do_not_map_to_id.all_items_in_expression["field"].pop()
    assert (
        field == "Genai.Aircraft.components"
    ), f"Expected {field=} to be 'Genai.Aircraft.components' when map_references_to_id=False."
    target_projection_string = "components, (components == components)"
    assert (
        str(projection_do_not_map_to_id) == target_projection_string
    ), f"Expected {projection_do_not_map_to_id=} to be {target_projection_string=} when map_references_to_id=False."
