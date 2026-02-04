# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import re
import pytest


c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")


ProjectionComponent, separate_ordering_from_component = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/projection_component.py",
    ["ProjectionComponent", "separate_ordering_from_component"],
)


def test_separate_ascending_descending_from_component():
    examples = [
        ("ascending(riskScore)", ("ascending", "riskScore")),
        ("descending(riskScore)", ("descending", "riskScore")),
        ("riskScore", (None, "riskScore")),
        (
            "ascending(components(contains(id, 'X00') && intersects({'1': 1}))).alerts[0].riskScore)",
            ("ascending", "components(contains(id, 'X00') && intersects({'1': 1}))).alerts[0].riskScore"),
        ),
    ]

    for component_string, target in examples:
        separate_ordering = separate_ordering_from_component(component_string)
        assert separate_ordering == target, f"Expected {separate_ordering=} to be {target=} for {component_string=}."


def test_projection_component_equals(graph_with_collection_fields):
    examples_equals = [
        # Simple field with white spaces
        ("riskScore", " riskScore"),
        # Simple field with functions and spaces
        ("avg(max(riskScore))", "avg(max(riskScore ))"),
        # Fields with member expressions and projection filters
        (
            "components.(id == 'X00_pressure').alerts[0].id",
            "components.('X00_pressure' == id).alerts[0].id",
        ),
        # Fields with multiple projection filters and functions
        (
            "lowerCase(components.(id == 'X00_pressure' || id == 'X01_pressure').alerts.(details == 'temperature_alert').id)",
            "lowerCase(components.( id == 'X01_pressure' || 'X00_pressure' == id).alerts.(  details == 'temperature_alert' ).id)",
        ),
        # Fields with multiple projection filters and functions
        (
            "lowerCase(components.(id == 'X00_pressure').alerts.(contains(details,'temperature_alert')).id)",
            "lowerCase(  components.(id == 'X00_pressure').alerts.(contains(details,  'temperature_alert')).id)",
        ),
        # Simple filter
        ("riskScore > 3", "3< riskScore"),
        # # Simple filter with logical expressions
        (
            "riskScore > 3 && count(components) == 1",
            "3< riskScore && count(  components) == 1",
        ),
        # # Simple filter with logical expressions swiched order
        (
            "riskScore > 3 && count(components) == 1",
            "count( components) == 1 && 3< riskScore",
        ),
        # Filter with filters in fields and logical expressions
        (
            "components.code[0] != lowerCase(components.(0 > riskScore).alerts.(details == 'temperature_alert').id)",
            "lowerCase(components.(riskScore < 0 ).alerts.(details == 'temperature_alert').id) != components.code[0]",
        ),
        # datetime only
        ("'2021-01-01'", "'2021-01-01 00:00:00'"),
        # Datetime in filter
        (
            "components.alerts.triggeredTimestamp >= '2021-01-01'",
            "components.alerts.triggeredTimestamp >= '2021-01-01 00:00:00'",
        ),
    ]
    for string1, string2 in examples_equals:
        projection_component = ProjectionComponent.from_string(string1, "Genai.Aircraft", graph_with_collection_fields)
        assert (projection_component == string2) == True, f"Expected {string1=} to be equal to {string2=}"

    examples_not_equals = [
        # Simple field with white spaces
        ("riskScore", " id"),
        # Simple field with functions and spaces
        ("avg(max(riskScore))", "avg(min(riskScore ))"),
        # Fields with member expressions and projection filters
        (
            "components.(id == 'X01_pressure').alerts[0].id",
            "components.('X00_pressure' == id).alerts[1].id",
        ),
        # Fields with multiple projection filters and functions
        (
            "lowerCase(components.(id == 'X01pressure').alerts.(details == 'pressure_alert').id)",
            "lowerCase(components.('X00_pressure' == id).alerts.(  details == 'temperature_alert' ).id)",
        ),
        # Fields with multiple projection filters and functions
        (
            "lowerCase(components.(id == 'X00_pressure').alerts.(contains(details,'temperature_alert')).id)",
            "lowerCase(  components[0].alerts.(contains(details,  'temperature_alert')).id)",
        ),
        # Simple filter
        ("riskScore > 3", "3 > riskScore"),
        # # Simple filter with logical expressions
        (
            "riskScore > 3 && count(components) == 1",
            "3< riskScore || count(  components) == 1",
        ),
        # Filter with filters in fields and  logical expressions
        (
            "components.code[0] == lowerCase(components.(0 > riskScore).alerts.(details == 'temperature_alert').id)",
            "lowerCase(components.(riskScore < 0 ).alerts.(details == 'temperature_alert').id) != components.code[0]",
        ),
        # datetime only
        ("'2021-01-01'", "'2021-01-01 00:00:00'"),
        # Datetime in filter
        (
            "components.alerts.triggeredTimestamp >= '2021-01-01'",
            "components.alerts.triggeredTimestamp >= '2021-01-01 00:00:00'",
        ),
    ]
    for string1, string2 in examples_not_equals:
        projection_component = ProjectionComponent.from_string(
            string1, "Genai.Aircraft", graph_with_collection_fields, infer_datetime_match_pattern=None
        )
        assert (projection_component == string2) == False, f"Expected {string1=} to be not be equal to {string2=}"


def test_all_items_in_expression(graph_with_collection_fields):
    examples = [
        # Simple field
        ("riskScore", {"field": {"Genai.Aircraft.riskScore"}}),
        # field with one function
        (
            "avg(min(riskScore))",
            {"field": {"Genai.Aircraft.riskScore"}, "function": {"avg", "min"}},
        ),
        # field with multiple functions
        ("max(riskScore )", {"field": {"Genai.Aircraft.riskScore"}, "function": {"max"}}),
        # Non filter binary expression
        (
            " riskScore + components.riskScore",
            {
                "field": {"Genai.Aircraft.riskScore", "Genai.AircraftComponent.riskScore"},
                "binary_operator": {"+"},
            },
        ),
        # Call expression filter
        ("exists(avg(min(riskScore)))", {"filter": {"exists(avg(min(riskScore)))"}}),
        (
            "components.(id == 'X00_pressure').alerts[0].id",
            {"field": {"Genai.AircraftComponentAlert.id"}},
        ),
        # filter
        ("riskScore > 3", {"filter": {"(3 < riskScore)"}}),
        # literal
        ("1", {"literal": {"1"}}),
    ]

    for example, target_all_items_in_expression in examples:
        projection_component = ProjectionComponent.from_string(
            example, "Genai.Aircraft", graph_with_collection_fields, infer_datetime_match_pattern=None
        )

        assert dict(projection_component.all_items_in_expression) == target_all_items_in_expression
