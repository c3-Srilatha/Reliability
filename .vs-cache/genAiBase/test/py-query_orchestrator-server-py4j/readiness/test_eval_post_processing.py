# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from time import time
import re
import pytest
import pandas as pd

# pylint: disable = redefined-outer-name, redefined-argument-from-local, unused-variable, unused-argument, line-too-long


EvalSpecProcessor = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/eval_tool/eval_spec_processor.py",
    ["EvalSpecProcessor"],
)
EvalMetricsSpecProcessor = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/eval_tool/eval_metrics_spec_processor.py",
    ["EvalMetricsSpecProcessor"],
)
SpecProcessor = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/eval_tool/spec_processor.py",
    ["SpecProcessor"],
)

from c3agents.plan_and_execute.formatting_and_parsing.formatting_utils import RE_EXTRACT_JSON_GREEDILY

TEST_FILE_NAME = "test_eval_post_processing.py"


@pytest.fixture(scope="module")
def data_model_graph_with_metrics():
    yield c3.Genai.StructuredData.DataModelGraph.forName("readiness_test_data_model_graph")


def test_remove_invalid_fields_in_projections(graph_with_collection_fields):
    spec = {
        "sourceType": "Genai.Aircraft",
        "projection": "max(riskScore), min(components.riskScore), invalid",
        "group": "model, sham",
        "order": "max(riskScore), mash",
    }
    target = {
        "sourceType": "Genai.Aircraft",
        "projection": "max(riskScore), min(components.riskScore)",
        "group": "model",
        "order": "max(riskScore)",
    }
    validated_spec = EvalSpecProcessor.remove_invalid_fields_in_projections(spec, graph_with_collection_fields)
    assert validated_spec == target, f"Expected {validated_spec=} to be {target=}."


EXAMPLES_MISSING_FIELDS_IN_PROJECTION = [
    (
        # Case where group and order ar both missing.
        {
            "sourceType": "Genai.Aircraft",
            "projection": "max(riskScore)",
            "group": "model",
            "order": "descending(components.('X00' == id).riskScore)",
        },
        {
            "projection": "max(riskScore), model.id, components.(('X00' == id)).riskScore",
            "group": "model.id",
            "order": "descending(components.(('X00' == id)).riskScore)",
            "sourceType": "Genai.Aircraft",
        },
    ),
    # Case where group is missing but order is not (ensure we dont add duplicates in projection).
    (
        {
            "sourceType": "Genai.Aircraft",
            "projection": "model, components.('X00' == id).riskScore, max(riskScore)",
            "group": "model, components.('X00' == id).cases.('X01' == id).caseAge",
            "order": "descending(components.('X00' == id).riskScore)",
        },
        {
            "projection": "model.id, components.(('X00' == id)).riskScore, max(riskScore), components.(('X00' == id)).cases.(('X01' == id)).caseAge",
            "group": "model.id, components.(('X00' == id)).cases.(('X01' == id)).caseAge",
            "order": "descending(components.(('X00' == id)).riskScore)",
            "sourceType": "Genai.Aircraft",
        },
    ),
    (
        # Case where group is already in projection. But in the order , the same field
        # with different aggregations and one is missing from projection but the other is not.
        {
            "sourceType": "Genai.Aircraft",
            "projection": "model, riskScore, max(riskScore)",
            "group": "model",
            "order": "descending(min(riskScore)), ascending(max(riskScore))",
        },
        {
            "projection": "model.id, riskScore, max(riskScore), min(riskScore)",
            "group": "model.id",
            "order": "descending(min(riskScore)), ascending(max(riskScore))",
            "sourceType": "Genai.Aircraft",
        },
    ),
]


@pytest.mark.parametrize("spec, target", EXAMPLES_MISSING_FIELDS_IN_PROJECTION)
def test_ensure_all_components_in_projection(graph_with_collection_fields, spec, target):
    validated_spec = EvalSpecProcessor.ensure_all_components_in_projection(spec, graph_with_collection_fields)
    assert validated_spec == target, f"Expected {validated_spec=} to be {target=}."


EVALUATE_SPEC_SPEC1 = {  # Spec that fails with Can't order on a projection that isn't handled by the db engine".
    "sourceType": "Genai.AircraftComponent",
    "projection": "aircraft.location, riskScore",
    "order": "aircraft.location",
}

# The tool successfully evaluates the spec by adding `forceDbEngineEval` to the spec.
EXPECTED_USED_SPEC_1 = {**EVALUATE_SPEC_SPEC1, "forceDbEngineEval": True}

EVALUATE_SPEC_SPEC2 = {
    "sourceType": "Genai.Aircraft",
    "projection": "components.(riskSCore > 0), lowerCase(id)",
}

EXPECTED_USED_SPEC_2 = EVALUATE_SPEC_SPEC2

EXAMPLES_EVALUATE_SPEC = [
    (EVALUATE_SPEC_SPEC1, True, ["aircraft.location", "riskScore"], EXPECTED_USED_SPEC_1),
    (EVALUATE_SPEC_SPEC1, False, ["aircraft_location", "riskScore"], EXPECTED_USED_SPEC_1),
    (EVALUATE_SPEC_SPEC2, True, ["components.(riskSCore > 0)", "lowerCase(id)"], EXPECTED_USED_SPEC_2),
    (EVALUATE_SPEC_SPEC2, False, ["components__riskSCore_0", "lowerCase_id"], EXPECTED_USED_SPEC_2),
]


@pytest.mark.parametrize(
    "input_spec, rename_columns_to_projection_string, target_column_names, expected_used_spec", EXAMPLES_EVALUATE_SPEC
)
def test_evaluate_spec(input_spec, rename_columns_to_projection_string, target_column_names, expected_used_spec):
    for (
        input_spec,
        rename_columns_to_projection_string,
        target_column_names,
        expected_used_spec,
    ) in EXAMPLES_EVALUATE_SPEC:
        data, used_spec = EvalSpecProcessor.execute(
            input_spec,
            rename_columns_to_projection_string=rename_columns_to_projection_string,
        )

        assert len(data) > 0, f"Expected {len(data)=} to be larger than 0."
        assert isinstance(data, pd.DataFrame), f"Expected {type(data)=} to be {pd.DataFrame}."
        assert (
            list(data.columns) == target_column_names
        ), f"Expected {list(data.columns)=} to be {target_column_names=}."
        assert used_spec == expected_used_spec, f"Expected {used_spec=} to be {expected_used_spec=}."


spec_base = {
    "sourceType": "Genai.Aircraft",
    "projection": "min(components.riskScore)",
    "group": "model",
    "order": "max(riskScore)",
    "limit": 1,
}
spec_alias = spec_base.copy()
spec_alias["projection"] = "min(components.riskScore) as alias"

spec_contains = spec_base.copy()
spec_contains["filter"] = "id contains 'X'"

# Ensure we add all values in order and group to projection if missing.
target_base = {
    "projection": "min(components.riskScore), model.id, max(riskScore)",
    "group": "model.id",
    "order": "max(riskScore)",
    "limit": 1,
    "sourceType": "Genai.Aircraft",
}
target_contains = target_base.copy()
target_contains["filter"] = "contains(id, 'X')"


@pytest.mark.parametrize(
    "spec, target, rename_columns_to_projection_string, target_column_names",
    [
        (spec_base, target_base, True, ["min(components.riskScore)", "model.id", "max(riskScore)"]),
        (spec_base, target_base, False, ["min_components_riskScore", "model_id", "max_riskScore"]),
        (spec_alias, target_base, True, ["min(components.riskScore)", "model.id", "max(riskScore)"]),
        (spec_contains, target_contains, True, ["min(components.riskScore)", "model.id", "max(riskScore)"]),
    ],
)
def test_validate_and_execute(
    graph_with_collection_fields, spec, target, rename_columns_to_projection_string, target_column_names
):
    validated_spec, data = EvalSpecProcessor.validate_and_execute(
        spec=spec,
        graph=graph_with_collection_fields,
        rename_columns_to_projection_string=rename_columns_to_projection_string,
    )
    assert validated_spec == target, f"Expected {target=} to be {validated_spec=}."
    assert list(data.columns) == target_column_names, f"Expected {list(data.columns)=} to be {target_column_names=}."
    assert len(data) == 1, f"Expected {len(data)=} to be 1."
    assert isinstance(data, pd.DataFrame), f"Expected {type(data)=} to be {pd.DataFrame}."


EXAMPLES_ENSURE_VALID_START_AND_END = [
    # Only one value but missing
    (
        {"start": None},
        {"start": "now() - period(2, 'YEAR')", "end": "now()"},
        True,
    ),
    # Only one value invalid
    (
        {"start": "invalid"},
        {"start": "now() - period(2, 'YEAR')", "end": "now()"},
        True,
    ),
    # Only one value valid
    ({"start": "now()"}, {"start": "now()", "end": "now()"}, True),
    # Both valid
    (
        {"start": "now()", "end": "now() + period(5, 'YEAR')"},
        {"start": "now()", "end": "now() + period(5, 'YEAR')"},
        True,
    ),
    # Both invalid
    (
        {"start": "now() - period(5, 'YEARS')", "end": "now() + period(5, 'YEARS')"},
        {"start": "now() - period(2, 'YEAR')", "end": "now()"},
        True,
    ),
    # Datetimes
    (
        {"start": "2020-01-01", "end": "2022-01-01"},
        {"start": "2020-01-01", "end": "2022-01-01"},
        False,
    ),
    # End before start in datetime strings
    (
        {"start": "2022-01-01", "end": "2020-01-01"},
        {"start": "now() - period(2, 'YEAR')", "end": "now()"},
        True,
    ),
    # End before start in expressions
    (
        {"start": "now()", "end": "now() - period(5, 'YEAR')"},
        {"start": "now() - period(2, 'YEAR')", "end": "now()"},
        True,
    ),
]


@pytest.mark.parametrize("example, target, is_expr", EXAMPLES_ENSURE_VALID_START_AND_END)
def test_eval_metrics_processor_ensure_valid_start_and_end(example, target, is_expr):
    output = EvalMetricsSpecProcessor.ensure_valid_start_and_end(example)
    for key in ["start", "end"]:
        if is_expr:
            target[key] = c3.Expr.eval(target[key]).toString()
        assert (
            abs((c3.DateTime.fromString(target[key]) - c3.DateTime.fromString(output[key])).seconds) < 15
        ), f"Expected {output[key]=} to be close to {target[key]=} for {example=}."


EXAMPLES_ENSURE_VALID_INTERVAL = [
    # has valid interval
    ({"start": None, "end": None, "interval": "FIVE_MINUTE"}, {}, "FIVE_MINUTE"),
    # has valid invalid interval
    ({"start": None, "end": None, "interval": "INVALID_INTERVAL"}, {}, "DAY"),
    # Empty start and end date
    ({"start": None, "end": None}, {}, "DAY"),
    # Empty start and end date with default as month
    ({"start": None, "end": None}, {"default_interval": "MONTH"}, "MONTH"),
    # Both valid
    (
        {"start": "2020-01-01", "end": "2021-01-01"},
        {},
        "DAY",
    ),
    # Both valid with different min periods
    (
        {"start": "2020-01-01", "end": "2021-01-01"},
        {"min_periods": 10},
        "MONTH",
    ),
]


@pytest.mark.parametrize("example, kwargs, target", EXAMPLES_ENSURE_VALID_INTERVAL)
def test_eval_metrics_processor_ensure_valid_interval(example, kwargs, target):
    output = EvalMetricsSpecProcessor.ensure_valid_interval(example, **kwargs)
    output_interval = output["interval"]
    assert output_interval == target, f"Expected {output_interval=} to be {target=} for {example=}."


EXAMPLES_ENSURE_VALID_FILTER_OR_ID = [
    # Has list of ids
    ({"ids": ["X00"]}, {"filter": "intersects(id, ['X00'])"}),
    # Has string of ids
    ({"ids": "X00"}, {"filter": "intersects(id, ['X00'])"}),
    # Has filter
    ({"filter": "id == 'X00'"}, {"filter": "id == 'X00'"}),
    # Has filter and id
    ({"ids": ["X01"], "filter": "id == 'X00'"}, {"filter": "intersects(id, ['X01'])"}),
    # Is empty
    ({}, {"filter": "true", "limit": 5}),
]


@pytest.mark.parametrize("example, target", EXAMPLES_ENSURE_VALID_FILTER_OR_ID)
def test_eval_metrics_processor_ensure_valid_filter_or_id(example, target):
    output = EvalMetricsSpecProcessor.ensure_valid_filter_or_ids(example)
    assert output == target, f"Expected {output=} to be {target=} for {example=}."


EXAMPLES_ENSURE_VALID_EXPRESSION = [
    # Valid expression
    (
        {"sourceType": "Genai.Aircraft", "expressions": ["PressureValue"]},
        {"sourceType": "Genai.Aircraft", "expressions": ["PressureValue"]},
    ),
    # Valid and invalid expression
    (
        {"sourceType": "Genai.Aircraft", "expressions": ["PressureValue", "InvalidMetric"]},
        {"sourceType": "Genai.Aircraft", "expressions": ["PressureValue"]},
    ),
    # Valid single expression as string
    (
        {"sourceType": "Genai.Aircraft", "expressions": "PressureValue"},
        {"sourceType": "Genai.Aircraft", "expressions": ["PressureValue"]},
    ),
    # Duplicate expression
    (
        {"sourceType": "Genai.Aircraft", "expressions": ["PressureValue", "PressureValue"]},
        {"sourceType": "Genai.Aircraft", "expressions": ["PressureValue"]},
    ),
    # Multiple expression
    (
        {
            "sourceType": "Genai.Aircraft",
            "expressions": ["PressureValue", "TemperatureValue"],
        },
        {"sourceType": "Genai.Aircraft", "expressions": ["PressureValue", "TemperatureValue"]},
    ),
]


@pytest.mark.parametrize("example, target", EXAMPLES_ENSURE_VALID_EXPRESSION)
def test_ensure_valid_metrics_in_spec(data_model_graph_with_metrics, example, target):
    output = EvalMetricsSpecProcessor.ensure_valid_metrics_in_expression(example, data_model_graph_with_metrics)
    assert output == target, f"Expected {output=} to be {target=} for {example=}."


EXAMPLES_ENSURE_VALIDATE_SPEC = [
    # Valid expression no filter, interval
    (
        {
            "sourceType": "Genai.Aircraft",
            "expressions": ["PressureValue"],
            "start": "2020-01-01",
            "end": "2025-01-01",
        },
        {
            "sourceType": "Genai.Aircraft",
            "expressions": ["PressureValue"],
            "start": "2020-01-01",
            "end": "2025-01-01",
            "interval": "MONTH",
            "filter": "true",
            "limit": 5,
        },
    ),
    # Valid and invalid expression, given interval
    (
        {
            "sourceType": "Genai.Aircraft",
            "expressions": ["PressureValue", "InvalidMetric"],
            "interval": "YEAR",
            "filter": "id == 'X00'",
            "start": "2020-01-01",
            "end": "2025-01-01",
        },
        {
            "sourceType": "Genai.Aircraft",
            "expressions": ["PressureValue"],
            "interval": "YEAR",
            "filter": "id == 'X00'",
            "start": "2020-01-01",
            "end": "2025-01-01",
        },
    ),
    # Valid multiple expressions, ids, no interval given
    (
        {
            "sourceType": "Genai.Aircraft",
            "expressions": ["PressureValue", "TemperatureValue"],
            "ids": ["X00", "X001"],
            "start": "2020-01-01",
            "end": "2025-01-01",
        },
        {
            "sourceType": "Genai.Aircraft",
            "expressions": ["PressureValue", "TemperatureValue"],
            "start": "2020-01-01",
            "end": "2025-01-01",
            "interval": "MONTH",
            "filter": "intersects(id, ['X00', 'X001'])",
        },
    ),
]


@pytest.mark.parametrize("example, target", EXAMPLES_ENSURE_VALIDATE_SPEC)
def test_validate_spec(data_model_graph_with_metrics, example, target):
    output = EvalMetricsSpecProcessor.validate(example, data_model_graph_with_metrics)
    assert output == target, f"Expected {output=} to be {target=} for {example=}."


def test_evaluate_spec_metrics():
    example = {
        "sourceType": "Genai.Aircraft",
        "expressions": ["PressureValue", "TemperatureValue"],
        "start": "2023-05-21",
        "end": "2023-07-01",
        "interval": "DAY",
        "filter": "intersects(id, ['X00', 'X01'])",
    }
    output = EvalMetricsSpecProcessor.execute(example)

    target_cols = ["subject", "timestamp", "PressureValue", "TemperatureValue"]
    assert list(output.columns) == target_cols, f"Expected {list(output.columns)=} to be {target_cols=}."

    target_subjects = ["X01", "X00"]
    assert set(output["subject"]) == set(
        target_subjects
    ), f"Expected {set(output['subject'])=} to be {set(target_subjects)=}."

    assert output.shape == (82, 4), f"Expected {output.shape=} to be (82, 4)"


def test_evaluate_and_validate_spec_metrics(data_model_graph_with_metrics):
    example = {
        "sourceType": "Genai.Aircraft",
        "expressions": ["PressureValue", "TemperatureValue", "Invalid"],  # With invalid expression
        "start": "2023-05-21",
        "end": "2023-07-01",
        "ids": ["X00", "X01"],  # With ids
        # Missing interval
    }
    output_spec, output_df = EvalMetricsSpecProcessor.validate_and_execute(
        example, data_model_graph_with_metrics, min_periods=1
    )

    target_cols = ["subject", "timestamp", "PressureValue", "TemperatureValue"]
    assert list(output_df.columns) == target_cols, f"Expected {list(output_df.columns)=} to be {target_cols=}."

    target_subjects = ["X01", "X00"]
    assert (
        list(output_df["subject"].unique()) == target_subjects
    ), f"Expected {list(output_df['subject'].unique())=} to be {target_subjects=}."

    assert output_df.shape == (4, 4), f"Expected {output_df.shape=} to be (4, 4)"

    target_spec = {
        "sourceType": "Genai.Aircraft",
        "expressions": ["PressureValue", "TemperatureValue"],
        "start": "2023-05-21",
        "end": "2023-07-01",
        "interval": "MONTH",
        "filter": "intersects(id, ['X00', 'X01'])",
    }
    assert output_spec == target_spec, f"Expected {output_spec=} to be {target_spec=}."


def test_evaluate_and_validate_spec_metrics_no_valid_expressions(data_model_graph_with_metrics):
    # Spec with no expressions or all invalid expressions should return none
    example = {
        "sourceType": "Genai.Aircraft",
        "expressions": ["Invalid"],  # With invalid expression
    }
    _, output_df = EvalMetricsSpecProcessor.validate_and_execute(example, data_model_graph_with_metrics)
    assert output_df is None, f"Expected {output_df=} to be None for {example=}."


def test_unsafe_run():
    unsafe_run = """{"print":print(1)}"""

    with pytest.raises(ValueError) as e:
        SpecProcessor.parse_llm_output(unsafe_run)


EXAMPLES_PARSE_LLM_OUTPUT = [
    ### Eval spec cases
    # Simple cases with different string quotations
    (
        """{'sourceType': "Person", 'filter': "fullName == 'Ivan Robles' "}""",
        {"sourceType": "Person", "filter": "fullName == 'Ivan Robles' "},
    ),
    (
        """ {'filter': 'unique(fullName) == \"Pikachu\" '}""",
        {"filter": 'unique(fullName) == "Pikachu" '},
    ),
    (
        """ {'filter': "unique(fullName) == \'Charizard\' "}""",
        {"filter": "unique(fullName) == 'Charizard' "},
    ),
    # With new lines
    (
        """ {
        'sourceType': \t"Person"

        }
     """,
        {"sourceType": "Person"},
    ),
    # Nested brackets and irrelevant text
    (
        """Assistant: {'sourceType': 'Person', 'projection': "intersects(children, {'a':2})"}""",
        {"sourceType": "Person", "projection": "intersects(children, {'a':2})"},
    ),
    # String has comments
    (
        """Assistant: {'sourceType': 'Person', 'projection': "intersects(children, {'a':2})" # This is a comment\n}""",
        {"sourceType": "Person", "projection": "intersects(children, {'a':2})"},
    ),
    # Projection is a list
    (
        """Assistant: {'sourceType': 'Person', 'projection': ["id", "children"] }""",
        {"sourceType": "Person", "projection": "id,children"},
    ),
    # These strings sometimes take really long if regex is not correctly specified
    (
        " Assistant: {'sourceType': 'Incidents', 'projection': 'count(id), avg(lengthOfService), avg(hoursOnJobAtTimeOfIncident), avg(estimatedCostOfPropertyDamage), avg(injuryNature), avg(sifImmediateAction), avg(longTermCorrectiveAction), avg(workInstruction), avg(whyWorkInstructionNotUsed), avg(whyJsaNotUsed), avg(jsaForTask), avg(sifPotential), avg(safetyTeamInvolved), avg(wasSafetyTeamInvolved), avg(wasSubstanceAbuseScreenTaken), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg",
        None,
    ),
    (
        " Assistant: {'sourceType': 'Incidents', 'projection': 'count(id), avg(lengthOfService), avg(hoursOnJobAtTimeOfIncident), avg(estimatedCostOfPropertyDamage), avg(injuryNature), avg(sifImmediateAction), avg(longTermCorrectiveAction), avg(workInstruction), avg(whyWorkInstructionNotUsed), avg(whyJsaNotUsed), avg(jsaForTask), avg(sifPotential), avg(safetyTeamInvolved), avg(wasSafetyTeamInvolved), avg(wasSubstanceAbuseScreenTaken), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber)'}",
        {
            "sourceType": "Incidents",
            "projection": "count(id), avg(lengthOfService), avg(hoursOnJobAtTimeOfIncident), avg(estimatedCostOfPropertyDamage), avg(injuryNature), avg(sifImmediateAction), avg(longTermCorrectiveAction), avg(workInstruction), avg(whyWorkInstructionNotUsed), avg(whyJsaNotUsed), avg(jsaForTask), avg(sifPotential), avg(safetyTeamInvolved), avg(wasSafetyTeamInvolved), avg(wasSubstanceAbuseScreenTaken), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber), avg(mobileEquipmentNumber)",
        },
    ),
    ## Eval metrics spec cases
    # Parsing is just reading a dictionary, so all test cases above should apply to metrics as well.
    (
        """Assistant: {'sourceType': 'Genai.Aircraft', 'expressions': ['TemperatureValue'], "filter": "intersects(id, ['X00'])" , "limit": 1 # This is a comment\n}""",
        {
            "sourceType": "Genai.Aircraft",
            "expressions": ["TemperatureValue"],
            "filter": "intersects(id, ['X00'])",
            "limit": 1,
        },
    ),
]


@pytest.mark.parametrize("example, target", EXAMPLES_PARSE_LLM_OUTPUT)
def test_parse_llm_output(example, target):
    start = time()
    output = SpecProcessor.parse_llm_output(example)
    end = time()
    time_taken = end - start
    assert output == target, f"Expected {output=} to be {target=}"
    assert time_taken < 5, f"Expected {time_taken=} seconds to be less than 5 seconds."


@pytest.mark.parametrize("example, target", EXAMPLES_PARSE_LLM_OUTPUT)
def test_match_regex_speed(example, target):
    start = time()
    re.match(RE_EXTRACT_JSON_GREEDILY, example)
    end = time()
    time_taken = end - start
    assert time_taken < 0.1, f"Expected {time_taken=} seconds to be less than 5 seconds."
