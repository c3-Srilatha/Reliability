# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = redefined-outer-name, line-too-long
import pytest

from c3agents.plan_and_execute.formatting_and_parsing.formatting_utils import parse_json_from_llm_output

SpecProcessor = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/eval_tool/spec_processor.py",
    ["SpecProcessor"],
)


parse_dict = """ Some free text here

```json

{
    "A key": [{"1": ["2"]}]
}

```
"""
parse_list = """ Some free text here

```json
[
    {
        "A key": [{"1": ["2"]}]
    }
]
```
"""

parse_with_newlines = """{
    "key": "val
here",
"some": 1,
"other": "keys\nhere"
}"""

parse_with_invalid_keys = """{'sourceType': "Person"}"""
parse_with_trailing_comma = """{"sourceType": "Person",}"""
parse_with_null_true_and_false = """{"None": null, "True": true, "False": false}"""

TEST_CASES_PARSE_LLM_SYNTHETIC_DATA = [
    (parse_dict, {"A key": [{"1": ["2"]}]}),
    (parse_list, [{"A key": [{"1": ["2"]}]}]),
    (parse_with_newlines, {"key": "val\nhere", "some": 1, "other": "keys\nhere"}),
    (parse_with_invalid_keys, {"sourceType": "Person"}),
    (parse_with_trailing_comma, {"sourceType": "Person"}),
    (parse_with_null_true_and_false, {"None": None, "True": True, "False": False}),
]


@pytest.mark.parametrize("test_case, target", TEST_CASES_PARSE_LLM_SYNTHETIC_DATA)
def test_parse_json_from_llm_output(test_case, target):
    output = parse_json_from_llm_output(test_case)
    assert output == target, f"Expected {output=} to be {target=}."


TEST_CASES_REMOVE_ALIAS = [
    (
        "'fieldName as alias', does, not, get, sum(removed)",
        "'fieldName as alias', does, not, get, sum(removed)",
    ),  # Single quotes around alias
    (
        '"fieldName as alias", does, not, get, sum(removed)',
        '"fieldName as alias", does, not, get, sum(removed)',
    ),  # Double quotes around alias
    (
        "fieldName as alias gets removed",
        "fieldName  gets removed",
    ),  # Alias gets removed
    (
        "Another example without the alias",
        "Another example without the alias",
    ),  # No alias present
    (
        "A complex case with 'nested as anything' and 'another as Word'",
        "A complex case with 'nested as anything' and 'another as Word'",
    ),  # Nested case where it does not get removed
    (
        "A complex case with nested as anything and 'another as Word'",
        "A complex case with nested  and 'another as Word'",
    ),  # Nested case where one gets removed
    (
        "A complex case with nested as anything and another as Word",
        "A complex case with nested  and another ",
    ),  # Nested case where one gets removed
    (
        'A complex case with "nested as anything" and "another as Word"',
        'A complex case with "nested as anything" and "another as Word"',
    ),  # Nested case with double quotes where it does not get removed
    (
        'A complex case with nested as anything and "another as Word"',
        'A complex case with nested  and "another as Word"',
    ),  # Nested case with double quotes where one gets removed
]


TEST_CASES_CONTAINS = [
    ("name contains 'John Doe'", "contains(name, 'John Doe')"),  # Basic case
    ('age contains "25"', 'contains(age, "25")'),  # Double quotes
    (
        "address contains '123 Main St'",
        "contains(address, '123 Main St')",
    ),  # Single quotes with spaces
    (
        "'value' contains fieldname",
        "contains(fieldname, 'value')",
    ),  # String contains fieldname
    (
        "'John Doe' contains name",
        "contains(name, 'John Doe')",
    ),  # Single quotes with spaces
    ('"25" contains age', 'contains(age, "25")'),  # Double quotes with numbers
    (
        'fieldname contains "value"',
        'contains(fieldname, "value")',
    ),  # Fieldname contains string with double quotes
    (
        "anotherField contains 'another value'",
        "contains(anotherField, 'another value')",
    ),  # Fieldname contains string with single quotes
    (
        "'nested value' contains anotherField",
        "contains(anotherField, 'nested value')",
    ),  # String contains fieldname
    (
        'fieldname contains "nested value"',
        'contains(fieldname, "nested value")',
    ),  # Fieldname contains string with nested value
    (
        "field1 contains 'value1' and field2 contains 'value2'",
        "contains(field1, 'value1') and contains(field2, 'value2')",
    ),  # Multiple matches
    (
        "'value1' contains field1 and 'value2' contains field2",
        "contains(field1, 'value1') and contains(field2, 'value2')",
    ),  # Multiple matches with reversed order
    (
        'field1 contains "value1" and "value2" contains field2',
        'contains(field1, "value1") and contains(field2, "value2")',
    ),  # Mixed quotes and order
    (
        'lowerCase(field1) contains "value1" and "value2" contains field2',
        'contains(lowerCase(field1), "value1") and contains(field2, "value2")',
    ),  # Mixed quotes and order with functions
    (
        'field contains "value with spaces"',
        'contains(field, "value with spaces")',
    ),  # Value with spaces
    (' "string" contains fieldname', ' contains(fieldname, "string")'),  # Leading space
    (
        'fieldname contains "string with special chars!@#"',
        'contains(fieldname, "string with special chars!@#")',
    ),  # Special characters in value
    ## Same but with containsIgnoreCase
    (
        "name containsIgnoreCase 'John Doe'",
        "containsIgnoreCase(name, 'John Doe')",
    ),  # Basic case
    ('age containsIgnoreCase "25"', 'containsIgnoreCase(age, "25")'),  # Double quotes
    (
        "address containsIgnoreCase '123 Main St'",
        "containsIgnoreCase(address, '123 Main St')",
    ),  # Single quotes with spaces
    (
        "'value' containsIgnoreCase fieldname",
        "containsIgnoreCase(fieldname, 'value')",
    ),  # String containsIgnoreCase fieldname
    (
        "'John Doe' containsIgnoreCase name",
        "containsIgnoreCase(name, 'John Doe')",
    ),  # Single quotes with spaces
    (
        '"25" containsIgnoreCase age',
        'containsIgnoreCase(age, "25")',
    ),  # Double quotes with numbers
    (
        'fieldname containsIgnoreCase "value"',
        'containsIgnoreCase(fieldname, "value")',
    ),  # Fieldname containsIgnoreCase string with double quotes
    (
        "anotherField containsIgnoreCase 'another value'",
        "containsIgnoreCase(anotherField, 'another value')",
    ),  # Fieldname containsIgnoreCase string with single quotes
    (
        "'nested value' containsIgnoreCase anotherField",
        "containsIgnoreCase(anotherField, 'nested value')",
    ),  # String containsIgnoreCase fieldname
    (
        'fieldname containsIgnoreCase "nested value"',
        'containsIgnoreCase(fieldname, "nested value")',
    ),  # Fieldname containsIgnoreCase string with nested value
    (
        "field1 containsIgnoreCase 'value1' and field2 containsIgnoreCase 'value2'",
        "containsIgnoreCase(field1, 'value1') and containsIgnoreCase(field2, 'value2')",
    ),  # Multiple matches
    (
        "'value1' containsIgnoreCase field1 and 'value2' containsIgnoreCase field2",
        "containsIgnoreCase(field1, 'value1') and containsIgnoreCase(field2, 'value2')",
    ),  # Multiple matches with reversed order
    (
        'field1 containsIgnoreCase "value1" and "value2" containsIgnoreCase field2',
        'containsIgnoreCase(field1, "value1") and containsIgnoreCase(field2, "value2")',
    ),  # Mixed quotes and order
    (
        'lowerCase(field1) containsIgnoreCase "value1" and "value2" containsIgnoreCase field2',
        'containsIgnoreCase(lowerCase(field1), "value1") and containsIgnoreCase(field2, "value2")',
    ),  # Mixed quotes and order with functions
    (
        'field containsIgnoreCase "value with spaces"',
        'containsIgnoreCase(field, "value with spaces")',
    ),  # Value with spaces
    (
        ' "string" containsIgnoreCase fieldname',
        ' containsIgnoreCase(fieldname, "string")',
    ),  # Leading space
    (
        'fieldname containsIgnoreCase "string with special chars!@#"',
        'containsIgnoreCase(fieldname, "string with special chars!@#")',
    ),  # Special characters in value
]

TEST_CASES_SQL_LIKE_SYNTAX = TEST_CASES_REMOVE_ALIAS + TEST_CASES_CONTAINS


@pytest.mark.parametrize("input_text, target", TEST_CASES_SQL_LIKE_SYNTAX)
def test_replace_contains_statements(input_text, target):
    output = SpecProcessor.correct_sql_like_syntax_failure_modes(input_text)
    assert output == target, f"Expected {output=} to be {target=} for {input_text=}"
