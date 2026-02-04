# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=line-too-long, unused-argument, redefined-outer-name
import pytest

c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")

find_unique_value = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/find_unique_value.py", ["find_unique_value"]
)

Guidance = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/guidance/guidance.py", ["Guidance"], globals()
)

FILE_NAME = "test_find_unique_value.py"
logger = c3.log()


QUESTIONS_LOGIT_BIAS = [
    {
        "query": "How many alerts does aircraft 'X00' have?",
        "src_type": "Genai.Aircraft",
        "target_type": "Genai.Aircraft",
        "field_name": "id",
        "field_value": "aircraft X00",
        "filter_path": "id",
    },
    {
        "query": "How many aircrafts are there in 'SFO'?",
        "src_type": "Genai.Aircraft",
        "target_type": "Genai.Aircraft",
        "field_name": "location",
        "field_value": "location SFO",
        "filter_path": "location",
    },
]

QUESTIONS_EXACT_MATCH = [
    {
        "query": "How many alerts does aircraft 'X00' have?",
        "src_type": "Genai.Aircraft",
        "target_type": "Genai.Aircraft",
        "field_name": "id",
        "field_value": "'X00'",
        "filter_path": "id",
    },
    {
        "query": "How many aircrafts are there in 'SFO'?",
        "src_type": "Genai.Aircraft",
        "target_type": "Genai.Aircraft",
        "field_name": "location",
        "field_value": "'SFO'",
        "filter_path": "location",
    },
]


@pytest.fixture(scope="function")
def guidance_with_logit_bias_flag(guide):
    import tiktoken

    # https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken
    tokenizer_type = "cl100k_base"
    TOKENIZER_GPT = tiktoken.get_encoding(tokenizer_type)

    def generate_text(prompt: str, tokenizer=None, logit_bias=None) -> str:
        """Generates text."""
        logit_bias = logit_bias or {}
        if len(logit_bias) > 0:
            pytest.LOGIT_BIAS_USED = True
        return guide.generate_text(prompt, None, logit_bias)

    def generate_next_token_with_logit_bias(prompt, logit_bias=None):
        """Generates next token taking into accout logit bias."""
        logit_bias = logit_bias or {}
        pytest.LOGIT_BIAS_USED = True
        return guide.generate_next_token_with_logit_bias(prompt, logit_bias)

    guidance = Guidance(
        generate_text=generate_text,
        generate_next_token_with_logit_bias=generate_next_token_with_logit_bias,
        tokenizer=TOKENIZER_GPT,
    )
    return guidance


####################################################################
# Tests
####################################################################
@pytest.mark.parametrize("question", QUESTIONS_LOGIT_BIAS)
@pytest.mark.parametrize("disable_logit_bias", [True, False])
def test_use_logit_bias(data_model_graph, guidance_with_logit_bias_flag, question, disable_logit_bias):
    """Test that logit bias is used/ not used without errors when set to True/False for find_unique_value function."""

    # pytest.LOGIT_BIAS_USED will be modified by generate_text and generate_next_token_with_logit_bias
    # within the logic for guidance_with_logit_bias_flag
    pytest.LOGIT_BIAS_USED = False
    unique_value, _, _ = find_unique_value(
        graph=data_model_graph,
        guidance=guidance_with_logit_bias_flag,
        disable_logit_bias=disable_logit_bias,  # Logit biases are only used for string and boolean values.
        enable_case_sensitivity=True,  # Add this so the predicted value is not lower cased.
        **question,
    )

    assert (
        pytest.LOGIT_BIAS_USED != disable_logit_bias
    ), f"""When running `find_unique_value`. LOGIT_BIAS_USED was {pytest.LOGIT_BIAS_USED} for question: '{question}' and disable_logit_bias was '{disable_logit_bias}'."""
    pytest.LOGIT_BIAS_USED = False

    assert (
        unique_value.strip(" '\"") in question["field_value"]
    ), f"""`unique_value` {unique_value} expected to be in '{question['field_value']}' """


def test_we_find_exact_match(data_model_graph, dummy_guidance):
    for question in QUESTIONS_EXACT_MATCH:
        for enable_case_sensitivity in [True, False]:
            unique_value, generated_outputs, _ = find_unique_value(
                graph=data_model_graph,
                guidance=dummy_guidance,  # Should not need to call guidance since we are checking that we get an exact match
                enable_case_sensitivity=enable_case_sensitivity,
                **question,
            )

            assert (
                question["field_value"] in unique_value
            ), f"""Expected predicted unique_value '{unique_value}' to be equal to target '{question['field_value']}', where {enable_case_sensitivity=} and query={question['query']}"""
            assert generated_outputs[
                "exact_match"
            ], f"""Expected exact_match to be True but we got {generated_outputs[ "exact_match"]}, where {enable_case_sensitivity=} and query={question['query']}"""


def test_case_sensitivity(data_model_graph, dummy_guidance):
    for question in QUESTIONS_EXACT_MATCH:
        for enable_case_sensitivity in [True, False]:
            unique_value, _, _ = find_unique_value(
                graph=data_model_graph,
                guidance=dummy_guidance,  # Should not need to call guidance since we should get an exact match
                enable_case_sensitivity=enable_case_sensitivity,
                **question,
            )

            assert (
                "lowerCase" in unique_value
            ) != enable_case_sensitivity, f"We expected lowerCase 'not' to be in {unique_value=}, where {enable_case_sensitivity=} and query={question['query']}"


def test_approximate_match_retrieved(data_model_graph, guide):
    question = {
        "query": "How many alerts does aircraft 'X-00' have?",
        "src_type": "Genai.Aircraft",
        "target_type": "Genai.Aircraft",
        "field_name": "id",
        "field_value": "X-00",
        "filter_path": "id",
    }
    for enable_case_sensitivity in [True, False]:
        unique_value, generated_outputs, _ = find_unique_value(
            graph=data_model_graph,
            guidance=guide,
            enable_case_sensitivity=enable_case_sensitivity,
            **question,
        )

        options = generated_outputs.get("Options", "")

        target = "X00"

        # Ensure the tool is retrieving the relevant options
        assert (
            "x00" in options.lower()
        ), f"Expected {target=} to be in {options=}, where {enable_case_sensitivity=} and query={question['query']}. {generated_outputs=}"

        # Ensure the tool formats the output (unique_value) correctly
        if enable_case_sensitivity:
            target = "'X00'"
        else:
            target = "lowerCase('x00')"

        assert (
            unique_value == target
        ), f"Expected returned {unique_value=} to be {target=}, where {enable_case_sensitivity=} and query={question['query']}. {generated_outputs=}"


def test_find_unique_value_returns_correct_datetime_quotations(data_model_graph, guide):
    kwargs = {
        "query": "",
        "src_type": "Genai.AircraftComponentCase",
        "target_type": "Genai.AircraftComponentCase",
        "field_name": "closedTimestamp",
        "filter_path": "closedTimestamp",
    }
    for field_value in ["2021-01-01 00:00:00", "'2021-01-01 00:00:00'", '"2021-01-01 00:00:00"']:
        unique_value, _, _ = find_unique_value(
            graph=data_model_graph,
            guidance=guide,
            field_value=field_value,
            **kwargs,
        )
        assert (
            unique_value == "'2021-01-01 00:00:00'"
        ), f"Expected `{unique_value=}` to be `'2021-01-01 00:00:00'` for {field_value=}."


def test_unique_value_passed_with_correct_format(data_model_graph, dummy_guidance):
    """
    Test that the field_value that is passed both to the LLM to
        i) choose from the valid options in database
        ii) Perform fuzzy matching
    is formatted correctly.
    """
    kwargs = {
        "query": "",
        "src_type": "Genai.AircraftComponent",
        "target_type": "Genai.Aircraft",
        "field_name": "location",
        "filter_path": "aircraft.location",
    }

    for enable_case_sensitivity in [True, False]:
        field_value = "New York"

        _, intermediate_results, _ = find_unique_value(
            graph=data_model_graph,
            guidance=dummy_guidance,  # Don't need to call the LLM, since we are checking only what gets sent to it
            field_value=field_value,
            enable_case_sensitivity=enable_case_sensitivity,
            **kwargs,
        )

        if not enable_case_sensitivity:
            field_value = field_value.lower()
        field_value = f"'{field_value}'"

        assert (
            intermediate_results["Filter value"] == field_value
        ), f"Expected {intermediate_results['Filter value']=} to be the same as {field_value=}."


def test_field_comparison(data_model_graph, dummy_guidance):
    """
    Test that when the field_value is a valid field, it returns the project of the field
    """
    kwargs = {
        "query": "Which aircrafts have the latest alert triggered timstamp that is ealier than the latest case created timstamp?",
        # Expected filter string: "latestAlert.triggeredTimestamp <= latestCase.createdTimestamp"
        "src_type": "Genai.Aircraft",
        "target_type": "Genai.AircraftComponentAlert",
        "field_name": "triggeredTimestamp",
        "filter_path": "latestAlert.createdTimestamp",
        "field_value": {
            "filter_field": "createdTimestamp",
            "filter_field_type": "datetime",
            "filter_target_type": "Genai.AircraftComponentCase",
        },
    }

    unique_value, intermediate_results, _ = find_unique_value(
        graph=data_model_graph,
        guidance=dummy_guidance,  # Don't need to call the LLM, since we are checking only what gets sent to it
        **kwargs,
    )

    assert unique_value == "latestCase.createdTimestamp", f"Expected {unique_value=} to be latestCase.createdTimestamp"
    assert (
        intermediate_results.get("field_value_is_valid_field") is True
    ), f"Expected {intermediate_results['field_value_is_valid_field']=} to be True"
