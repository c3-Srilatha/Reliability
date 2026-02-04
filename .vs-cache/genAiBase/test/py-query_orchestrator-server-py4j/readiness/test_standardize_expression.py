# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from pyjsparser import parse
from collections import defaultdict
from datetime import datetime


standardize_literal, expression_is_filter, FILTER_CALL_EXPRESSIONS = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/standardize_expressions.py",
    ["standardize_literal", "expression_is_filter", "FILTER_CALL_EXPRESSIONS"],
)
standardize_expression = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/__init__.py",
    ["standardize_expression"],
)


####################################################################
# Tests
####################################################################
def test_standardize_literal():
    cases = [
        # Numeric
        (10, 10),
        (10.0, 10),
        (10.0546, 10.0546),
        # Boolean
        (True, "true"),
        (False, "false"),
        # Datetime
        ("2021-01-01 00:00:00", "2021-01-01 00:00:00"),
        ("2021/01/01", "2021-01-01 00:00:00"),
        ("2021-01", "2021-01-01 00:00:00"),
        ("2021", "2021-01-01 00:00:00"),
        ("April 14", f"{datetime.now().year}-04-14 00:00:00"),
        ("April", f"{datetime.now().year}-04-01 00:00:00"),
        # String
        ("A string", "A string"),
    ]

    for value, target in cases:
        case = {"type": "Literal", "value": value}
        converted = standardize_literal(case, infer_datetime_match_pattern=".")
        assert converted == target, f"Expected {converted=} to be {target=}."


def test_expression_is_filter():
    filter_cases = [
        "'string' {operator} id",
        "1 {operator} 2",
        "id {operator} 1",
    ]
    for case in filter_cases:
        for operator in {"==", "!=", "<", "<=", ">", ">="}:
            case = case.format(operator=operator)
            expression = parse(case)["body"][0]["expression"]
            is_filter = expression_is_filter(expression)
            assert is_filter is True, f"Expected {is_filter=} to be True for {case=}."

    for case in FILTER_CALL_EXPRESSIONS:
        case = f"{case}(any)"
        expression = parse(case)["body"][0]["expression"]
        is_filter = expression_is_filter(expression)
        assert is_filter is True, f"Expected {is_filter=} to be True for {case=}."

    non_filter_cases = [
        "id",
        "aircraft.riskScore",
        "1 == 2 ? 1: 2",
    ]
    for case in non_filter_cases:
        expression = parse(case)["body"][0]["expression"]
        is_filter = expression_is_filter(expression)
        assert is_filter is False, f"Expected {is_filter=} to be False for {case=}."


def test_standardize_expression_function(graph_with_collection_fields):
    all_cases = [
        # Math based binary expressions for fields and numeric
        (
            "riskScore + 1",
            "(1 + riskScore)",
            {"field": {"Genai.Aircraft.riskScore"}, "literal": {"1"}, "binary_operator": {"+"}},
        ),
        (
            "1 * riskScore ",
            "(1 * riskScore)",
            {"literal": {"1"}, "field": {"Genai.Aircraft.riskScore"}, "binary_operator": {"*"}},
        ),
        ("1+2", "(1 + 2)", {"literal": {"1", "2"}, "binary_operator": {"+"}}),
        ("2*1", "(1 * 2)", {"literal": {"1", "2"}, "binary_operator": {"*"}}),
        # Ternary operator
        (
            "1 == 2 ? 1: 2",
            "(1 == 2) ? 1 : 2",
            {
                "filter": {"(1 == 2)"},
                "literal": {"1", "2"},
                "conditional_expression": {"(1 == 2) ? 1 : 2"},
            },
        ),
        # call function filter
        ("contains(id, 'X00')", "contains(id, 'X00')", {"filter": {"contains(id, 'X00')"}}),
        # Call function non filter
        ("add(1, 2)", "add(1, 2)", {"literal": {"1", "2"}, "function": {"add"}}),
        # Filter binary expression
        ("1>2", "(2 < 1)", {"filter": {"(2 < 1)"}}),
        # Filter binary expression with call expression around it
        (
            "count(riskScore >= component.riskScore)",
            "count((component.riskScore <= riskScore))",
            {"filter": {"(component.riskScore <= riskScore)"}, "function": {"count"}},
        ),
    ]

    for (
        input_string,
        target_standardized_string,
        target_all_items_in_expression,
    ) in all_cases:
        expression = parse(input_string)["body"][0]["expression"]
        all_items_in_expression = defaultdict(set)
        standardized_string = standardize_expression(
            expression,
            "Genai.Aircraft",
            graph=graph_with_collection_fields,
            all_items_in_expression=all_items_in_expression,
            check_if_expression_is_filter=True,
        )
        assert (
            standardized_string == target_standardized_string
        ), f"Expected {standardized_string=} to be {target_standardized_string=} for {input_string=}."

        assert (
            all_items_in_expression == target_all_items_in_expression
        ), f"Expected {all_items_in_expression=} to be {target_all_items_in_expression=} for {input_string=}."
