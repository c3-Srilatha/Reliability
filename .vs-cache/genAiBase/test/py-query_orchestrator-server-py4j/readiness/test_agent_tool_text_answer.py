# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=line-too-long

import pytest


FILE_NAME = "test_agent_tool_text_answer.py"
logger = c3.Logger.for_(FILE_NAME.split(".", maxsplit=1)[0])


@pytest.fixture()
def in_progress_result():
    res = c3.Genai.Query.Result(searchQuery=c3.Genai.Query.fromString("foo?")).upsert().get()
    yield res
    res.remove()


@pytest.fixture()
def llm_config():
    yield c3.Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey("azureGpt4o")


def _tool_output(genai_result, output, spec=None):
    return c3.Genai.Agent.Tool.Output(output=output, inProgressResult=genai_result, structuredQuerySpec=spec)


def test_string_should_return_the_same_string(in_progress_result):
    tool_output = _tool_output(in_progress_result, "The weather is sunny")
    assert c3.Genai.Agent.Tool.TestTool1().textAnswer("Foo", tool_output) == "The weather is sunny"


def test_string_serializable_should_return_serialization(in_progress_result):
    tool_output = _tool_output(in_progress_result, 123.456)
    assert c3.Genai.Agent.Tool.TestTool1().textAnswer("Foo", tool_output) == str(123.456)


def test_text_answer_with_c3_data_output(in_progress_result):
    data = c3.Data.Persisted.make()
    tool_output = _tool_output(in_progress_result, data)
    expected_error = c3.Translation.getTranslationForLocale("EnterpriseSearch.Tool.DefaultTextAnswer", "en")
    assert c3.Genai.Agent.Tool.TestTool1().textAnswer("Foo", tool_output) == expected_error


def test_text_answer_with_str_failure(in_progress_result):
    # Create an object that raises an exception when str() is called
    class BadStringObject:
        """BadStringObject"""

        def __str__(self):
            raise ValueError("String conversion failed")

    bad_obj = BadStringObject()
    tool_output = _tool_output(in_progress_result, bad_obj)

    # This should raise a ValueError with the expected message
    with pytest.raises(ValueError, match="Unable to convert tool output to string"):
        c3.Genai.Agent.Tool.TestTool1().textAnswer("Foo", tool_output)


def test_text_answer_with_none_output(in_progress_result):
    tool_output = _tool_output(in_progress_result, None)
    expected_error = c3.Translation.getTranslationForLocale("EnterpriseSearch.ErrorMessage.UnableToAnswer", "en")
    assert c3.Genai.Agent.Tool.TestTool1().textAnswer("Foo", tool_output) == expected_error


def test_text_answer_with_complex_object(in_progress_result):
    # Test with a dictionary
    complex_obj = {"key": "value", "number": 42}
    tool_output = _tool_output(in_progress_result, complex_obj)
    result = c3.Genai.Agent.Tool.TestTool1().textAnswer("Foo", tool_output)

    # The result should be a string representation of the object
    # Since the exact format might differ, we'll verify it's a string and contains the key elements
    assert isinstance(result, str)
    assert "key" in result
    assert "value" in result
    assert "42" in result

    # Test with a list
    list_obj = [1, 2, 3, "test"]
    tool_output = _tool_output(in_progress_result, list_obj)
    result = c3.Genai.Agent.Tool.TestTool1().textAnswer("Foo", tool_output)

    # Verify the list result contains the expected elements
    assert isinstance(result, str)
    assert "1" in result
    assert "2" in result
    assert "3" in result
    assert "test" in result


def test_ensure_id_with_default_instance_config():
    tool_without_id = c3.Genai.Agent.Tool.TestTool1()

    # Test that ensureId raises an error when the config type is not DefaultInstance or Singleton
    with pytest.raises(
        RuntimeError,
        match="No tool id provided and config type for Genai.Agent.Tool.TestTool1 is not a DefaultInstance or Singleton",
    ):
        c3.Genai.Agent.Tool.ensureId(tool_without_id)


def test_ensure_id_with_existing_id():
    """Test ensureId function when tool already has an id"""
    tool = c3.Genai.Agent.Tool.TestTool1()
    tool = tool.withId("existing_id")

    result = c3.Genai.Agent.Tool.ensureId(tool)
    assert result.id == "existing_id"


def test_text_answer_from_data_integration(llm_config):
    """Test textAnswerFromData function integration (lines 42-56)"""
    tool = c3.Genai.Agent.Tool.TestTool1()
    input_text = "What is the weather?"
    output_data_str = "The weather is sunny and 75 degrees"
    prompt = "Based on the observation: {observation}, answer the question: {input}"

    result = tool.textAnswerFromData(input_text, output_data_str, prompt, llm_config)
    # If successful, verify the result is a string
    assert isinstance(result, str)
