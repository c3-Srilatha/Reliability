# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from types import GeneratorType
import pytest
from PIL import Image as PIL_Image

LlmFactory = c3.Genai.PyUtil.importResourceFile("/genAiBase/resource/code/llm/llm_factory.py", ["LlmFactory"])

LLM_TEST_TUPLES = {
    "AWS-Haiku": (
        "AwsBedrockLlm",  # LLM class
        "qa_inference_config_aws_claude_v3_haiku",  # LLM config name
        "qa_inference_config_aws_claude_v3_haiku",  # Vision LLM config name
    ),
    "AWS-Sonnet": (
        "AwsBedrockLlm",  # LLM class
        "qa_inference_config_aws_claude_v3_5_sonnet",  # LLM config name
        "qa_inference_config_aws_claude_v3_5_sonnet",  # Vision LLM config name
    ),
    "Azure": (
        "GptLlm",
        "qa_inference_config_gpt4o",  # LLM config name
        "qa_inference_config_gpt4o",  # Vision LLM config name
    ),
    "GCP": (
        "GeminiLlm",
        "qa_inference_config_gemini_flash_2_0",
        "qa_inference_config_gemini_flash_2_0",
    ),
    # TODO GEN-11028 re-enable this test when OP-55185 is finally addressed
    # "GCP-Anthropic": (
    #     "GeminiLlm",
    #     "qa_inference_config_vertex_claude_3_haiku",
    #     "qa_inference_config_vertex_claude_3_haiku",
    # ),
}

PROMPT = "Count from 1 to 10"
IMAGE_PROMPT = "Come up with a title and description of this image."


def init_llm(config_name, stream_response):
    llm_spec = c3.Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey(config_name)
    llm_spec.llmKwargs["stream_response"] = stream_response
    llm = LlmFactory.create_from_dict(llm_spec.llmType, llm_spec.llmKwargs)
    llm.build()
    return llm


@pytest.mark.parametrize("vendor", list(LLM_TEST_TUPLES.keys()))
def test_llm_call(vendor):
    llm = init_llm(LLM_TEST_TUPLES.get(vendor)[1], stream_response=False)
    output = llm.process([PROMPT])
    assert output is not None
    assert output.responses[0] is not None
    assert isinstance(output.responses[0], str)
    assert "one" in output.responses[0].lower() or "1" in output.responses[0]


@pytest.mark.parametrize("vendor", list(LLM_TEST_TUPLES.keys()))
def test_llm_call_streaming(vendor):
    llm = init_llm(LLM_TEST_TUPLES.get(vendor)[1], stream_response=True)
    output = llm.process([PROMPT])
    assert output is not None
    assert output.responses[0] is not None
    # When coming from the recording, the response is a string, "Generator"
    assert isinstance(output.responses[0], GeneratorType) or output.responses[0] == "Generator"


# NOTE: Because MockLlm does not support recording GCP vision calls, GCP vision calls will fail with recordings
@pytest.mark.parametrize("vendor", list(LLM_TEST_TUPLES.keys()))
def test_llm_call_vision(vendor):
    if LLM_TEST_TUPLES.get(vendor)[2] is not None and c3.Genai.Llm.MockLlmConfig.inst().getConfig().mode != "playback":
        vision_llm = init_llm(LLM_TEST_TUPLES.get(vendor)[2], stream_response=False)
        output = vision_llm.process_images(images=[PIL_Image.new(mode="RGB", size=(10, 10))], prompt=IMAGE_PROMPT)
        assert output is not None
        assert len(output) == 1
        verbalization = output[0].lower()
        assert any(
            content in verbalization for content in ["black", "blank", "empty", "void", "gray", "blue"]
        ), verbalization
