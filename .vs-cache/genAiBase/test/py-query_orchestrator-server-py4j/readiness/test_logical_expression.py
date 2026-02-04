# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from pyjsparser import parse


LogicalExpressionComponent = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/__init__.py",
    ["LogicalExpressionComponent"],
)


####################################################################
# Tests
####################################################################


def test_logical_expression_component_str_method_for_binary_expression(data_model_graph):
    cases = [
        # Only literal
        (None, "1==1", "(1 == 1)"),
        (None, "1==2", "(1 == 2)"),
        (None, "true == false", "(false == true)"),
        (None, "true == false", "(false == true)"),
        # Boolean
        ("Genai.Aircraft", "isAssignedToPilot==true", "(isAssignedToPilot == true)"),
        ("Genai.Aircraft", "isAssignedToPilot  == false", "(false == isAssignedToPilot)"),
        # Numeric
        ("Genai.AircraftComponent", "riskScore == 0", "(0 == riskScore)"),
        ("Genai.AircraftComponent", "riskScore < 10", "(riskScore < 10)"),
        ("Genai.AircraftComponent", "max(riskScore)>=1.0", "(1 <= max(riskScore))"),
        ("Genai.AircraftComponent", "max(riskScore) <= 1.01", "(max(riskScore) <= 1.01)"),
        # String
        (
            "Genai.AircraftComponent",
            "max(lowerCase(aircraft.location.id)) == 'SFO' ",
            "('SFO' == max(lowerCase(aircraft.location.id)))",
        ),
        (
            "Genai.AircraftComponent",
            "max(lowerCase(aircraft.location.id)) != 'SFO' ",
            "('SFO' != max(lowerCase(aircraft.location.id)))",
        ),
        # datetime
        (
            "Genai.AircraftComponentAlert",
            "triggeredTimestamp <= '2021-01-01' ",
            "(triggeredTimestamp <= '2021-01-01 00:00:00')",
        ),
        (
            "Genai.AircraftComponentAlert",
            "triggeredTimestamp >= '2021' ",
            "('2021-01-01 00:00:00' <= triggeredTimestamp)",
        ),
        (
            "Genai.AircraftComponentAlert",
            "triggeredTimestamp > '2021' ",
            "('2021-01-01 00:00:00' < triggeredTimestamp)",
        ),
        (
            "Genai.AircraftComponentAlert",
            "max(triggeredTimestamp) < '2021' ",
            "(max(triggeredTimestamp) < '2021-01-01 00:00:00')",
        ),
        # Two projections
        (
            "Genai.AircraftComponent",
            "lowerCase(aircraft.location.id)!= aircraft.location.id ",
            "(aircraft.location.id != lowerCase(aircraft.location.id))",
        ),
        (
            "Genai.AircraftComponent",
            "aircraft.location.id== aircraft.location.state ",
            "(aircraft.location.id == aircraft.location.state)",
        ),
        # Literal with field
        ("Genai.Aircraft", "exists(lowerCase('SFO')) == location.id", "(exists(lowerCase('SFO')) == location.id)"),
        # Order array
        ("Genai.AircraftComponent", "[1,2,3]== [3,2,1] ", "([1, 2, 3] == [1, 2, 3])"),
        # Unary and update operators
        ("Genai.Aircraft", "id ++ < -0 ", "(id++ < -0)"),
    ]

    for src_type, filter_string, target in cases:
        parsed_script = parse(filter_string)
        body = parsed_script["body"][0]
        expression = body["expression"]

        logical_expression_component = LogicalExpressionComponent(
            expression, src_type, data_model_graph, infer_datetime_match_pattern="."
        )

        assert (
            str(logical_expression_component) == target
        ), f"Expected {str(logical_expression_component)=} to be {target=}."


def test_logical_expression_component_equals_method_for_binary_expression(data_model_graph):
    cases = [
        # Literal
        (None, "1==1", "1 == 1", True),
        (None, "1==2", "2==1", True),
        (None, "true == false", "false == true", True),
        # Boolean
        ("Genai.Aircraft", "isAssignedToPilot==true", "true == isAssignedToPilot", True),
        # Numeric
        ("Genai.AircraftComponent", "riskScore == 0", "0 ==riskScore", True),
        ("Genai.AircraftComponent", "max(riskScore) >= 1.", "1.000 <= max(riskScore) ", True),
        # String
        (
            "Genai.AircraftComponent",
            "max(lowerCase(aircraft.location.id)) == 'SFO' ",
            "'SFO'==max(lowerCase(aircraft.location.id)) ",
            True,
        ),
        # Datetime
        (
            "Genai.AircraftComponentAlert",
            "triggeredTimestamp <= '2021-01-01' ",
            "triggeredTimestamp <= '2021'",
            True,
        ),
        (
            "Genai.AircraftComponentAlert",
            "max(triggeredTimestamp) > '2021' ",
            "'2021' <max(triggeredTimestamp) ",
            True,
        ),
        (
            "Genai.AircraftComponentAlert",
            "max(triggeredTimestamp) > '2021-01-01' ",
            "'2021/01/01' <max(triggeredTimestamp) ",
            True,
        ),
        # Different reference declaration
        (
            "Genai.AircraftComponent",
            "aircraft.location.id == aircraft.location.state ",
            "aircraft.location == aircraft.location.state",
            True,
        ),
        #
        (  # Binary expression which orders differently before and after standardization.
            "Genai.Aircraft",
            "status.id == 'FMC'",
            'status == "FMC"',
            True,
        ),
        # False
        (
            "Genai.AircraftComponentAlert",
            "max(triggeredTimestamp) >= '2021' ",
            "'2021' <max(triggeredTimestamp) ",
            False,
        ),
        (
            "Genai.AircraftComponent",
            "max(lowerCase(aircraft.location.id)) == 'SFO' ",
            "'sfo'==max(lowerCase(aircraft.location.id)) ",
            False,
        ),
        (None, "1==2", "1==1", False),
        # Two projections
        (
            "Genai.AircraftComponent",
            "lowerCase(aircraft.location.id)!= aircraft.location.id ",
            "aircraft.location.id != lowerCase(aircraft.location.id)",
            True,
        ),
        (
            "Genai.AircraftComponent",
            "aircraft.location.id == aircraft.location.state ",
            "aircraft.location.id == aircraft.location",
            False,
        ),
        # Literal with field
        ("Genai.Aircraft", "location.id == exists(lowerCase('SFO'))", "exists(lowerCase('SFO')) == location.id", True),
    ]
    for src_type, filter_string, other_filter_string, target in cases:
        parsed_script = parse(filter_string)
        body = parsed_script["body"][0]
        expression = body["expression"]
        logical_expression_component = LogicalExpressionComponent(
            expression, src_type, data_model_graph, infer_datetime_match_pattern="."
        )
        is_same = logical_expression_component == other_filter_string

        assert (
            is_same == target
        ), f"Expected {is_same=} to be {target=} for {filter_string=} and {other_filter_string=}."


def test_logical_expression_component_str_method_for_call_expressions(data_model_graph):
    cases = [
        (  # Deal with white spaces, nested functions, projections with path, single projection, static string, static numeric, statics with functions
            "Genai.AircraftComponent",
            "contains(max(lowerCase(aircraft.id) , aircraft), 'X00', true, false, lowerCase(  'X01'), 1.100, min(1.0))",
            "contains(max(lowerCase(aircraft.id), aircraft.id), 'X00', true, false, lowerCase('X01'), 1.1, min(1))",
        ),
        (  # Deals with lists and elements in list
            "Genai.Aircraft",
            "intersects(location.id, [ location.state, lowerCase(location.state), 'X00'])",
            "intersects(location.id, ['X00', location.state, lowerCase(location.state)])",
        ),
        (  # deals with dictionaries nested in list and dates
            "Genai.AircraftComponentAlert",
            "exists(max([{'2': 2, 'X1': 1, 0: 0, 'X2': 'X2'}, '2021-01-01', triggeredTimestamp]))",
            "exists(max(['2021-01-01 00:00:00', triggeredTimestamp, {'2': 2, 'X1': 1, 'X2': 'X2', 0: 0}]))",
        ),
        (  # deals with lists nested in dictionaries
            "Genai.Aircraft",
            "containsIgnoreCase(location.city, {3:3, 1:1, 0: [location.state, id]})",
            "containsIgnoreCase(location.city, {0: [id, location.state], 1: 1, 3: 3})",
        ),
        # Unary and update operators
        ("Genai.Aircraft", "ge(id ++ ,-0) ", "ge(id++, -0)"),
    ]

    for src_type, filter_string, target in cases:
        parsed_script = parse(filter_string)
        body = parsed_script["body"][0]
        expression = body["expression"]

        logical_expression_component = LogicalExpressionComponent(
            expression,
            src_type,
            data_model_graph,
        )

        assert (
            str(logical_expression_component) == target
        ), f"Expected {str(logical_expression_component)=} to be {target=}."


def test_logical_expression_component_equals_method_for_call_expressions(data_model_graph):
    cases = [
        (  # Deal with white spaces, nested functions, projections with path, single projection, static string, static numeric, statics with functions
            "Genai.AircraftComponent",
            "contains(max(lowerCase(aircraft.id) , aircraft), 'X00', true,false,lowerCase(  'X01'), 1.100, min(1.0))",
            "contains(max(lowerCase(aircraft.id), aircraft), 'X00', true, false, lowerCase('X01'), 1.1, min(1))",
            True,
        ),
        (  # Deals with lists and elements in list
            "Genai.Aircraft",
            "intersects(location.id, [ location.state, lowerCase(location.state), 'X00'])",
            "intersects(location.id, ['X00', location.state, lowerCase(location.state)])",
            True,
        ),
        (  # deals with dictionaries nested in list and dates
            "Genai.AircraftComponentAlert",
            "exists(max([{'2':2, 'X1':1, 0:0, 'X2':'X2'}, '2021-01-01',triggeredTimestamp]))",
            "exists(max(['2021-01-01 00:00:00', triggeredTimestamp, {'2': 2, 'X1': 1, 'X2': 'X2', 0: 0}]))",
            True,
        ),
        (  # deals with lists nested in dictionaries
            "Genai.Aircraft",
            "containsIgnoreCase(location.city, {3:3, 1:1, 0: [location.state, id]})",
            "containsIgnoreCase(location.city, {0: [id, location.state], 1: 1, 3: 3})",
            True,
        ),
        (  # False: Arguments within functions should not move
            "Genai.Aircraft",
            "containsIgnoreCase(location.city, 'NY')",
            "containsIgnoreCase('NY', location.city)",
            False,
        ),
    ]

    for src_type, filter_string, other_filter_string, target in cases:
        parsed_script = parse(filter_string)
        body = parsed_script["body"][0]
        expression = body["expression"]
        logical_expression_component = LogicalExpressionComponent(
            expression,
            src_type,
            data_model_graph,
        )
        is_same = logical_expression_component == other_filter_string

        assert (
            is_same == target
        ), f"Expected {is_same=} to be {target=} for {filter_string=} and {other_filter_string=}."


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
        parsed_script = parse(filter_string)
        body = parsed_script["body"][0]
        expression = body["expression"]

        logical_expression_component = LogicalExpressionComponent(
            expression, src_type, data_model_graph, keep_array_order
        )

        assert (
            str(logical_expression_component) == target
        ), f"Expected {str(logical_expression_component)=} to be {target=}."


def test_all_items_in_expression_component(data_model_graph):
    cases = [
        (
            "Genai.Aircraft",
            "id == 'X00'",
            {"field": {"Genai.Aircraft.id"}, "literal": {"'X00'"}, "binary_operator": {"=="}},
        ),
        (
            "Genai.Aircraft",
            "intersects(lowerCase(location.id), [location.state, riskScore, 'some constant'])",
            {
                "literal": {"'some constant'"},
                "array": {"['some constant', location.state, riskScore]"},
                "function": {"intersects", "lowerCase"},
                "field": {"Genai.Airport.id", "Genai.Airport.state", "Genai.Aircraft.riskScore"},
            },
        ),
        ("Location", "1 ==1", {"binary_operator": {"=="}, "literal": {"1"}}),
    ]

    for source_type, filter_string, target in cases:
        parsed_script = parse(filter_string)
        body = parsed_script["body"][0]
        expression = body["expression"]

        logical_expression_component = LogicalExpressionComponent(expression, source_type, data_model_graph)
        all_fields_found = logical_expression_component.all_items_in_expression_component

        assert all_fields_found == target, f"Expected {all_fields_found=} to be {target=} for {filter_string=}."
