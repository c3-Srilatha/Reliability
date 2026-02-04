# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=line-too-long
from itertools import chain
import re
import pytest

separate_substrings_in_quotes, datetime_regex = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/eval_tool/data_retrieval_agent.py",
    ["separate_substrings_in_quotes", "datetime_regex"],
)

EvalSpecProcessor = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/eval_tool/data_retrieval_agent.py",
    ["EvalSpecProcessor"],
)


@pytest.fixture(scope="module", autouse=True)
def native_graph():
    previous_dmg_global = c3.getVar("StructuredDataQueryPy_DATA_MODEL_GRAPH_test")
    dmg = c3.TestApi.upsertReadinessDataModelGraph()
    native_graph = dmg.toNative()
    c3.setVar("StructuredDataQueryPy_DATA_MODEL_GRAPH_test", native_graph, True)
    yield native_graph
    dmg.remove()
    c3.setVar("StructuredDataQueryPy_DATA_MODEL_GRAPH_test", previous_dmg_global, True)


# Updated test cases to align with the expected outputs
TEST_CASES_SEPARATE_QUOTES = [
    {
        "description": "Basic Usage with Single and Double Quotes",
        "input": "He said, \"Hello, World!\" and then left. 'Goodbye!' was all he said.",
        "expected_inside": ['"Hello, World!"', "'Goodbye!'"],
        "expected_outside": ["He said, ", " and then left. ", " was all he said."],
    },
    {
        "description": "No Quotes",
        "input": "This string has no quotes.",
        "expected_inside": [],
        "expected_outside": ["This string has no quotes."],
    },
    {
        "description": "Only Quoted Parts",
        "input": '"All quoted", \'are\' "here".',
        "expected_inside": ['"All quoted"', "'are'", '"here"'],
        "expected_outside": [", ", " ", "."],
    },
    {
        "description": "Nested Quotes (Single Inside Double)",
        "input": 'She said, "It\'s a beautiful day."',
        "expected_inside": ['"It\'s a beautiful day."'],
        "expected_outside": ["She said, "],
    },
    {
        "description": "Nested Quotes (Double Inside Single)",
        "input": "She said, 'It\"s a beautiful day.'",
        "expected_inside": ["'It\"s a beautiful day.'"],
        "expected_outside": ["She said, "],
    },
    {
        "description": "Escaped Quotes",
        "input": "He said, \"Hello\" and then 'Goodbye'",
        "expected_inside": ['"Hello"', "'Goodbye'"],
        "expected_outside": ["He said, ", " and then "],
    },
    {
        "description": "Quotes at the Beginning and End",
        "input": '"Start and end with quotes"',
        "expected_inside": ['"Start and end with quotes"'],
        "expected_outside": [],
    },
    {
        "description": "Multiple Consecutive Quotes",
        "input": 'He said, "Hello" "World" and then left.',
        "expected_inside": ['"Hello"', '"World"'],
        "expected_outside": ["He said, ", " ", " and then left."],
    },
    {
        "description": "Empty String",
        "input": "",
        "expected_inside": [],
        "expected_outside": [],
    },
    {
        "description": "Only Quotes",
        "input": "\"\" ''",
        "expected_inside": ['""', "''"],
        "expected_outside": [" "],
    },
]


@pytest.mark.parametrize("test_case", TEST_CASES_SEPARATE_QUOTES)
def test_separate_substrings_in_quotes(test_case):
    for test_case in TEST_CASES_SEPARATE_QUOTES:
        inside, outside = separate_substrings_in_quotes(test_case["input"])
        assert (
            inside == test_case["expected_inside"]
        ), f"Inside quotes mismatch for '{test_case['description']}': {inside} != {test_case['expected_inside']}"
        assert (
            outside == test_case["expected_outside"]
        ), f"Outside quotes mismatch for '{test_case['description']}': {outside} != {test_case['expected_outside']}"


TEST_STRINGS_DATETIME_STRINGS_COMPARISON = [
    [
        # Should match
        (f"field {operator} '2021-10-15'", True, operator),
        (f'field {operator} "2021-10-15"', True, operator),
        (f"my_table.field_name {operator} '2021-10-15 13:45:30'", True, operator),
        (f"schema.table.field {operator} '15/10/2021 13:45'", True, operator),
        (f"field_name.subfield {operator} '2021-10-15T13:45:30Z'", True, operator),
        (f"my_table.field_name {operator} '2021-10-15 13:45:30' && field", True, operator),
        (f"my_table.field_name {operator} '2021-10-15 13:45:30' && field < '2020-01-012'", True, operator),
        (f'my_table.field_name {operator} "2021-10-15 13:45:30" && field < "2020-01-012"', True, operator),
        # Should not match
        (f"field {operator} 'some_string'", False, operator),
        (f"fieldName {operator} '20211-10-15'", False, operator),  # YEAR with 4 digits
        (f"fieldName {operator} '2021'", False, operator),  # Only year
        ("my_table.field_name < '2021-10-15 13:45:30' && field >= '2020-01-012'", False, operator),
        ("my_table.field_name < '2021-10-15 13:45:30'", False, operator),
        ("field >= '2020-01-012'", False, operator),
    ]
    for operator in ["==", "<=", ">"]
]
TEST_STRINGS_DATETIME_STRINGS_COMPARISON = list(chain.from_iterable(TEST_STRINGS_DATETIME_STRINGS_COMPARISON))


@pytest.mark.parametrize("test_str, should_match, operator", TEST_STRINGS_DATETIME_STRINGS_COMPARISON)
def test_re_datetime_comparisons(test_str, should_match, operator):
    regex = datetime_regex(operator)
    matches = re.search(regex, test_str) is not None
    assert matches == should_match, f"{test_str=} {should_match=}, {operator=}"


# Test cases
TEST_CASES_RAISE_RELEVANT_ERROR = [
    (
        "Using count(*) in projection",
        {"sourceType": "Genai.Aircraft", "projection": "count(*)", "filter": ""},
        "The following invalid syntax issues were found:\nUsing 'count(*)' in projection is not valid syntax, use count() instead.\n\nUsing * in projection is not valid syntax, use the field names instead.",
    ),
    (
        "Using * in projection",
        {"sourceType": "Genai.Aircraft", "projection": "*", "filter": ""},
        "The following invalid syntax issues were found:\nUsing * in projection is not valid syntax, use the field names instead.",
    ),
    (
        "Using ASC or DESC in order",
        {"sourceType": "Genai.Aircraft", "projection": "id", "order": "id DESC"},
        "The following invalid syntax issues were found:\nUsing 'ASC' or 'DESC' in order, is not valid syntax. Use ascending(fieldName) or descending(fieldName) instead.",
    ),
    (
        "Renaming fields in projection",
        {"sourceType": "Genai.Aircraft", "projection": "id as new_id, sum(riskScore) as total", "filter": ""},
        "The following invalid syntax issues were found:\nYou tried to rename: 'id as new_id, sum(riskScore) as total'\nThis syntax is invalid, you cannot rename fields in the projection.Instead use the following expressions: 'id, sum(riskScore)' instead",
    ),
    (
        "Invalid SQL operator: select",
        {"sourceType": "Genai.Aircraft", "projection": "select id", "filter": ""},
        "The following invalid syntax issues were found:\nSelect is invalid syntax.",
    ),
    (
        "Invalid SQL operator: and",
        {"sourceType": "Genai.Aircraft", "projection": "testField", "filter": "id == 1 and riskScore == 2"},
        "The following invalid syntax issues were found:\nUsing 'AND' as a boolean condition is invalid syntax, use '&&' instead.",
    ),
    (
        "Invalid SQL operator: or",
        {"sourceType": "Genai.Aircraft", "projection": "testField", "having": "id == 1 or riskScore == 2"},
        "The following invalid syntax issues were found:\nUsing 'OR' as a boolean condition is invalid syntax, use '||' instead.",
    ),
    (
        "Invalid SQL operator: in",
        {"sourceType": "Genai.Aircraft", "projection": "testField", "filter": "id in (1,2,3)"},
        "The following invalid syntax issues were found:\nIN is invalid syntax. To check if an item is in a collection, use intersects(item, [collection, ...]).",
    ),
    (
        "Datetime equality in filter",
        {
            "sourceType": "Genai.Aircraft",
            "projection": "id",
            "filter": "components.alerts.triggeredTimestamp == '2020-01-01'",
        },
        """The following invalid syntax issues were found:
Datetime filtering must be in the form of "datetimeField >= '<datetime here>' && datetimeField < '<datetime here>'. You can not use equality.""",
    ),
    (
        "Datetime range with right side <=",
        {
            "sourceType": "Genai.Aircraft",
            "projection": "id",
            "filter": "components.alerts.triggeredTimestamp >= '2020-01-01' && components.alerts.triggeredTimestamp <= '2020-01-31'",
        },
        """The following invalid syntax issues were found:
Datetime filtering must be in the form of "datetimeField >= '<datetime here>'  && datetimeField < '<datetime here>'. You can not use right side <= since timestamps are to the second.""",
    ),
    (
        "Datetime range with left side >",
        {
            "sourceType": "Genai.Aircraft",
            "projection": "id",
            "filter": "components.alerts.triggeredTimestamp >= '2020-01-01' && components.alerts.triggeredTimestamp <= '2020-01-31'",
        },
        """The following invalid syntax issues were found:
Datetime filtering must be in the form of "datetimeField >= '<datetime here>'  && datetimeField < '<datetime here>'. You can not use right side <= since timestamps are to the second.""",
    ),
    (
        "Valid datetime",
        {
            "sourceType": "Genai.Aircraft",
            "projection": "id",
            "filter": "components.alerts.triggeredTimestamp >= '2020-01-01' && components.alerts.triggeredTimestamp < '2021-01-01",
        },
        "",
    ),
    (
        "Null or empty string comparisons in filter (NULL)",
        {"sourceType": "Genai.Aircraft", "projection": "id", "filter": "id == NULL"},
        "The following invalid syntax issues were found:\nYou are using == NULL to try to filter on missing values. Use 'exists(fieldName)' instead.",
    ),
    (
        "Null or empty string comparisons in filter (empty string)",
        {"sourceType": "Genai.Aircraft", "projection": "id", "filter": "id == ''"},
        "The following invalid syntax issues were found:\nYou are using == '' to try to filter on missing values. Use 'exists(fieldName)' instead.",
    ),
    (
        "Math operators in projection",
        {"sourceType": "Genai.Aircraft", "projection": "id + riskScore", "filter": ""},
        """The following invalid syntax issues were found:
You are using id + riskScore as a math operator within 'execute_retrieval_spec', this operation should be done through pandas or numpy operations.""",
    ),
    (
        "SQL invalid operators within quotes in filter",
        {"sourceType": "Genai.Aircraft", "projection": "id", "filter": "id == 'select * from table where field = and'"},
        "",
    ),
    (
        "SQL invalid operators within a filter with escaped characters in quotes",
        {"sourceType": "Genai.Aircraft", "projection": "id", "filter": 'id == "it\'s in quotes"'},
        "",
    ),
    (
        "Invalid SQL operator: select inside filter",
        {"sourceType": "Genai.Aircraft", "projection": "testField", "filter": "select id from table"},
        "The following invalid syntax issues were found:\nSelect is invalid syntax.",
    ),
    (
        "Invalid SQL operator: and inside filter",
        {"sourceType": "Genai.Aircraft", "projection": "testField", "filter": "id == 1 and riskScore == 2"},
        "The following invalid syntax issues were found:\nUsing 'AND' as a boolean condition is invalid syntax, use '&&' instead.",
    ),
    (
        "Invalid SQL operator: or inside filter",
        {"sourceType": "Genai.Aircraft", "projection": "testField", "filter": "id == 1 or riskScore == 2"},
        "The following invalid syntax issues were found:\nUsing 'OR' as a boolean condition is invalid syntax, use '||' instead.",
    ),
    (
        "Invalid SQL operator: in inside filter",
        {"sourceType": "Genai.Aircraft", "projection": "testField", "filter": "id in (1, 2, 3)"},
        "The following invalid syntax issues were found:\nIN is invalid syntax. To check if an item is in a collection, use intersects(item, [collection, ...]).",
    ),
    (
        "Invalid SQL operator: contains inside filter",
        {"sourceType": "Genai.Aircraft", "projection": "testField", "filter": "id contains 'value'"},
        "The following invalid syntax issues were found:\n'string contains substring' is invalid syntax. Use 'contains(string, substring)' instead.",
    ),
    (
        "Invalid SQL operator: containsIgnoreCase inside filter",
        {"sourceType": "Genai.Aircraft", "projection": "testField", "filter": "id containsIgnoreCase 'value'"},
        "The following invalid syntax issues were found:\n'string containsIgnoreCase substring' is invalid syntax. Use 'containsIgnoreCase(string, substring)' instead.",
    ),
    (
        "Invalid field in expression strings",
        {
            "sourceType": "Genai.Aircraft",
            "projection": "id, components.id.riskScores",
        },
        "The following invalid syntax issues were found:\nThe following expressions {'components.id.riskScores'} are invalid.They either do not exist in the data model or cannot be accessed through the current traversal path.",
    ),
    (
        "Order field not in projection",
        {"sourceType": "Genai.Aircraft", "projection": "id", "order": "ascending(riskScore)"},
        "The following invalid syntax issues were found:\nThe following fields {'riskScore'} appear in order but not in projection. These are required to exist in projection.",
    ),
    (
        "Group field not in projection",
        {"sourceType": "Genai.Aircraft", "projection": "id", "group": "riskScore"},
        "The following invalid syntax issues were found:\nThe following fields {'riskScore'} appear in group but not in projection. These are required to exist in projection.",
    ),
    (
        "Upper cased booleans",
        {"sourceType": "Genai.Aircraft", "projection": "field", "filter": "id == True || riskScore == FALSE"},
        "The following invalid syntax issues were found:\nInvalid expression used for boolean operator. Use lower cased 'true' or 'false' instead.",
    ),
    (
        "Correct booleans",
        {"sourceType": "Genai.Aircraft", "projection": "id", "filter": "id == true || riskScore == false"},
        "",
    ),
    (
        "Multiple syntax errors",
        {
            "sourceType": "Genai.Aircraft",
            "projection": "count(*), *",
            "filter": "id == NULL and riskScore",
            "order": "id desc",
        },
        """The following invalid syntax issues were found:
Using 'count(*)' in projection is not valid syntax, use count() instead.

Using * in projection is not valid syntax, use the field names instead.

Using 'ASC' or 'DESC' in order, is not valid syntax. Use ascending(fieldName) or descending(fieldName) instead.

Using 'AND' as a boolean condition is invalid syntax, use '&&' instead.

You are using == NULL to try to filter on missing values. Use 'exists(fieldName)' instead.""",
    ),
]


@pytest.mark.parametrize("description, inputs, expected_error", TEST_CASES_RAISE_RELEVANT_ERROR)
def test_raise_relevant_error(description, inputs, expected_error):
    error_message = c3.Genai.Agent.Tool.StructuredDataQueryPy(id="test").generateRelevantErrorMessage(**inputs)
    assert (
        error_message.strip() == expected_error.strip()
    ), f"{description}, {error_message.strip()=} and {expected_error.strip()=}."


def test_cast_type_to_string(native_graph):
    source_type = "Genai.AircraftComponent"

    df = c3.Genai.AircraftComponent.eval(projection="id, aircraft, riskScore", filter="contains(id,'X00')").to_pandas()
    assert df["aircraft"].iloc[0].toJson() == {"id": "X00"}, "Expected Type"

    df = EvalSpecProcessor.cast_type_instance_to_str(df, source_type, native_graph)
    assert df["aircraft"].iloc[0] == "X00", "Expected string"
    assert df["riskScore"].iloc[0] == 0.81, "Expected float"
