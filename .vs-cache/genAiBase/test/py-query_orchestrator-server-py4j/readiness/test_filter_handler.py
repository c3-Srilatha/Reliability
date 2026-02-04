# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
from datetime import datetime


c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")

FilterHandler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/__init__.py",
    ["FilterHandler"],
)
translate_python_to_js_logical_operators = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/filter_handler.py",
    ["translate_python_to_js_logical_operators"],
)


####################################################################
# Tests
####################################################################


def test_translate_logical_operator():
    # First test case: Python to JavaScript
    target = "'this & that' || 'those | these' && var2 || var3"
    input_str = "'this & that' | 'those | these' & var2 | var3"
    output_str = translate_python_to_js_logical_operators(input_str, True)
    assert target == output_str, f"Expected {output_str} to be {target=} for py_to_js=True."

    # Second test case: JavaScript to Python
    target = "'this && that' | 'those || these' & var2 | var3"
    input_str = "'this && that' || 'those || these' && var2 || var3"
    output_str = translate_python_to_js_logical_operators(input_str, False)
    assert target == output_str, f"Expected {output_str} to be {target=} for py_to_js=False."

    # Third test case: Python to JavaScript with apostrophe in string
    target = "'Someone\\'s & that' || 'those | these' && var2 || var3"
    input_str = "'Someone\\'s & that' | 'those | these' & var2 | var3"
    output_str = translate_python_to_js_logical_operators(input_str, True)
    assert target == output_str, f"Expected {output_str} to be {target=} for py_to_js=True."

    # Fourth test case: JavaScript to Python with apostrophe in string
    target = "'Someones\\'s && that' | 'those || these' & var2 | var3"
    input_str = "'Someones\\'s && that' || 'those || these' && var2 || var3"
    output_str = translate_python_to_js_logical_operators(input_str, False)
    assert target == output_str, f"Expected {output_str} to be {target=} for py_to_js=False."


def test_filter_handler_equals_method(data_model_graph):
    cases = [
        # As True
        (None, "eq(2,1)", "1 == 2", True),  # CallExpression gets transformed to binary expression
        (None, "gt(2,1) || lt(1,2)", "1 < 2", True),  # Equivalent LogicalExpressionComponents get simplified
        (
            "Genai.AircraftComponent",
            "intersects(lowerCase(aircraft.id), ['X00','A23','SAE3'])",
            "intersects(lowerCase(aircraft.id), ['A23', 'SAE3', 'X00'])",
            True,
        ),  # CallExpression gets standardized
        (
            "Genai.AircraftComponent",
            "((id == 'X00') && (id == 'X02'))|| ((id =='X00') && (id == 'X03'))",
            "(id == 'X00') && ((id == 'X03') || (id == 'X02'))",
            True,
        ),  # Simplified nested condition
        (
            "Genai.AircraftComponent",
            "((id == 'X00') && (id == 'X02'))|| ((id =='X00') && (id == 'X03'))",
            "((id == 'X03') || (id == 'X02')) && (id == 'X00')",
            True,
        ),  # Simplified nested condition with reference swiched order
        (
            None,
            "",
            "",
            True,
        ),  # Empty string
        (
            "Genai.Aircraft",
            "(id ++ < -0 ) || (round(-10.2300))",
            " (round(-10.23)) || (id ++ < -0 )",
            True,
        ),  # Update expression
        (
            "Genai.Aircraft",
            "!contains(lowerCase(id), 'some') && contains(lowerCase(id), 'other')",
            "contains(lowerCase(id), 'other') && !contains(lowerCase(id), 'some')",
            True,
        ),  # Unary expression
        # As False
        (None, "eq(2,1)", "1 != 2", False),  # CallExpression gets transformed to binary expression
        (None, "gt(2,1) || gt(1,2)", "1 < 2", False),  # Equivalent LogicalExpressionComponents get simplified
        (
            "Genai.AircraftComponent",
            "intersects(lowerCase(aircraft.id), ['X00','A23','SAE3'])",
            "intersects(['X00','A23','SAE3'], lowerCase(aircraft.id))",
            False,
        ),  # CallExpression arguments dont get sorted
        (
            "Genai.AircraftComponent",
            "((id == 'X00') && (id == 'X02'))|| ((id =='X00') && (id == 'X03'))",
            "(id == 'X00') || ((id == 'X03') && (id == 'X02'))",
            False,
        ),  # Simplified nested condition
        (
            "Genai.AircraftComponent",
            "((id == 'X00') && (id == 'X02'))|| ((id =='X00') && (id == 'X03'))",
            "((id == 'X03') && (id == 'X02')) || (id == 'X00')",
            False,
        ),  # Simplified nested condition with reference swiched order
        (
            "Genai.Aircraft",
            "",
            "(id == 'X00')",
            False,
        ),  # Empty string
    ]

    for source_type, filter_string, other_filter_string, target in cases:
        filter_handler = FilterHandler(filter_string, source_type, data_model_graph, infer_datetime_match_pattern=".")
        is_same = filter_handler == other_filter_string

        assert (
            is_same == target
        ), f"Expected {is_same=} to be {target=} for {filter_string=} and {other_filter_string=}."


def test_all_items_in_filter(data_model_graph):
    cases = [
        (
            "Genai.Aircraft",
            "(id == 'X00') || (lowerCase(id) == 'ny')",
            {
                "field": {"Genai.Aircraft.id"},
                "literal": {"'X00'", "'ny'"},
                "binary_operator": {"=="},
                "function": {"lowerCase"},
            },
        ),
        (None, "", {}),
    ]

    for source_type, filter_string, target in cases:
        filter_handler = FilterHandler(filter_string, source_type, data_model_graph)
        all_items_found = filter_handler.all_items_in_filter

        assert all_items_found == target, f"Expected {all_items_found=} to be {target=} for {filter_string=}."


def test_array_ordering(data_model_graph):
    cases = [
        (None, "[1,2,3]== [3,2,1] ", False, "([1, 2, 3] == [1, 2, 3])"),
        (None, "[1,2,3]== [3,2,1] ", True, "([1, 2, 3] == [3, 2, 1])"),
        ("Genai.AircraftComponent", "id== [3,2,1] ", False, "([1, 2, 3] == id)"),
        ("Genai.AircraftComponent", "id== [3,2,1] ", True, "([3, 2, 1] == id)"),
        ("Genai.AircraftComponent", " contains(id, ['XSDA','ASDA'])", False, "contains(id, ['ASDA', 'XSDA'])"),
        ("Genai.AircraftComponent", " contains(id, ['XSDA','ASDA'])", True, "contains(id, ['XSDA', 'ASDA'])"),
    ]

    for src_type, filter_string, keep_array_order, target in cases:
        filter_handler = FilterHandler(filter_string, src_type, data_model_graph, keep_array_order)
        assert str(filter_handler) == target, f"Expected {str(filter_handler)=} to be {target=}."


def test_filter_handler_with_filter_traversals_and_computed_member_expressions(graph_with_collection_fields):
    examples = [
        # Single filter with filter in traversal
        (
            "sensors.(contains(id, 'X00')).id == 'X00'",
            "'X00' == sensors.(contains(id, 'X00')).id",
        ),
        # Two filters with filter in traversal
        (
            "sensors.(contains(id, 'X00')).id == sensors.(id == 'X00_pressure').id",
            "sensors.('X00_pressure' == id).id == sensors.(contains(id, 'X00')).id",
        ),
        # Single filter with multiple filters in traversal and computed member expressions
        (
            "components[0].alerts.(id == 'X00_pressure').id[1] == 'X00'",
            "'X00' == components[0].alerts.('X00_pressure' == id).id[1]",
        ),
        # Multiple logical expressions
        (
            "sensors.(contains(id, 'X00')).id == 'X00' && components.(contains(id, 'X00')).riskScore > 1",
            "1 < components.(contains(id, 'X00')).riskScore && 'X00' == sensors.(contains(id, 'X00')).id",
        ),
    ]

    for input_filter_string, target_filter in examples:
        filter_handler = FilterHandler(input_filter_string, "Genai.Aircraft", graph_with_collection_fields)

        assert filter_handler == target_filter, f"Expected {filter_handler=} to be equal to {target_filter=}."


def test_all_items_in_filter_with_filter_traversals_and_computed_member_expressions(graph_with_collection_fields):
    examples = [
        (
            # Single filter with filter in traversal and no computed member expressions
            "sensors.(contains(id, 'X00')).id == 'X00'",
            [[]],
            [
                [
                    {
                        "path": "sensors",
                        "target_type": "Genai.Aircraft",
                        "field_name": "sensors",
                        "filter": "contains(id, 'X00')",
                    }
                ]
            ],
        ),
        (
            # Single filter with computed member expressions and filter in traversal
            "components[0].alerts.(id == 'X00_pressure').id[1] == 'X00'",
            [
                [
                    {
                        "suffix": "[0]",
                        "path": "components",
                        "target_type": "Genai.Aircraft",
                        "field_name": "components",
                    },
                    {
                        "suffix": "[1]",
                        "path": "components[0].alerts.(('X00_pressure' == id)).id",
                        "target_type": "Genai.AircraftComponentAlert",
                        "field_name": "id",
                    },
                ]
            ],
            [
                [
                    {
                        "path": "components[0].alerts",
                        "target_type": "Genai.AircraftComponent",
                        "field_name": "alerts",
                        "filter": "('X00_pressure' == id)",
                    }
                ]
            ],
        ),
    ]

    for (
        input_filter_string,
        target_member_expressions,
        target_filters_in_projection,
    ) in examples:
        filter_handler = FilterHandler(input_filter_string, "Genai.Aircraft", graph_with_collection_fields)
        member_expressions = [
            field.computed_member_expressions for field in filter_handler.all_items_in_filter["field"]
        ]
        projection_filters = [field.projection_filters for field in filter_handler.all_items_in_filter["field"]]
        assert (
            member_expressions == target_member_expressions
        ), f"Expected {member_expressions=} to be {target_member_expressions=}"
        assert (
            projection_filters == target_filters_in_projection
        ), f"Expected {projection_filters=} to be {target_filters_in_projection=}"


def test_infer_datetime_match_pattern(graph_with_collection_fields):
    filter_string = "latestAlert.triggeredTimestamp == 'April 3rd'"

    # Test case whre everyting matches
    filter_handler = FilterHandler(
        filter_string,
        "Genai.Aircraft",
        graph_with_collection_fields,
        infer_datetime_match_pattern=".",
    )
    assert filter_handler == f"latestAlert.triggeredTimestamp == '{datetime.now().year}-04-03 00:00:00'"

    # Test case where regex matches YYYY-MM-DD format
    filter_handler = FilterHandler(
        filter_string,
        "Genai.Aircraft",
        graph_with_collection_fields,
        infer_datetime_match_pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}",
    )
    assert filter_handler != f"latestAlert.triggeredTimestamp == '{datetime.now().year}-04-03 00:00:00'"

    # Test case where it is None
    filter_handler = FilterHandler(
        filter_string,
        "Genai.Aircraft",
        graph_with_collection_fields,
        infer_datetime_match_pattern=None,
    )

    assert filter_handler != f"latestAlert.triggeredTimestamp == '{datetime.now().year}-04-03 00:00:00'"


def test_filter_handler_display_unstandardized_filter_string(graph_with_collection_fields):
    filter_string = "1==1 && 1==1"

    filter_handler = FilterHandler(
        filter_string,
        "Genai.Aircraft",
        graph_with_collection_fields,
        infer_datetime_match_pattern=".",
        display_unstandardized_filter_string=True,
    )
    assert (
        str(filter_handler) == "1==1 && 1==1"
    ), f"Expected {str(filter_handler)=} to be '1==1 && 1==1'. When display_unstandardized_filter_string=True."

    filter_handler = FilterHandler(
        filter_string,
        "Genai.Aircraft",
        graph_with_collection_fields,
        infer_datetime_match_pattern=".",
        display_unstandardized_filter_string=False,
    )
    assert (
        str(filter_handler) == "(1 == 1)"
    ), f"Expected {str(filter_handler)=} to be '(1 == 1)' When display_unstandardized_filter_string=False."


def test_filter_handler_nested_binary_expressions(graph_with_collection_fields):
    filter_string = "((id == 'Turbine-1') || (id == 'Turbine-2')) && (triggeredTimestamp >= '2023-04-01' && triggeredTimestamp < '2023-06-01')"
    target = "(triggeredTimestamp < '2023-06-01 00:00:00') && ('2023-04-01 00:00:00' <= triggeredTimestamp) && (('Turbine-1' == id) || ('Turbine-2' == id))"
    filter_handler = FilterHandler(
        filter_string,
        "Genai.AircraftComponentAlert",
        graph_with_collection_fields,
    )
    assert filter_handler == target, f"Expected {str(filter_handler)=} to be equivalent to {target=}."

    target_not_equal = "'Turbine-1' == id || (triggeredTimestamp < '2023-06-01 00:00:00' && 'Turbine-2' == id && '2023-04-01 00:00:00' <= triggeredTimestamp)"
    filter_handler = FilterHandler(
        filter_string,
        "Genai.AircraftComponentAlert",
        graph_with_collection_fields,
    )
    assert not (
        filter_handler == target_not_equal
    ), f"Expected {str(filter_handler)=} to not be equivalent to {target_not_equal=}."


def test_filter_handler_with_logical_operators_in_literal_string(
    graph_with_collection_fields,
):
    target_str = "('a && b' == id) || (('a || b' == id) && ('a | b & Someone\\'s' == id))"
    filter_string = "(id == 'a && b') || (id == 'a || b') && (id == 'a | b & Someone\\'s')"
    output_filter = FilterHandler(filter_string, "Genai.Aircraft", graph_with_collection_fields)
    assert output_filter == target_str, f"Expected {output_filter=} to be {target_str=} for {filter_string=}"
