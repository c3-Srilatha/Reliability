# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
import tiktoken


# pylint: disable=redefined-outer-name, unused-argument
@pytest.fixture(scope="module", autouse=True)
def set_default_eval_tool_guide():
    org_model_config_name = c3.Genai.Llm.Guide.Config.inst().getConfig().modelConfigName
    c3.Genai.Llm.Guide.Config.inst().setConfigValue("modelConfigName", "default_openai_model_test")
    yield
    c3.Genai.Llm.Guide.Config.inst().setConfigValue("modelConfigName", org_model_config_name)


@pytest.fixture(scope="module", autouse=True)
def tokenizer(set_default_eval_tool_guide):
    model_config = c3.Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey(
        c3.Genai.Llm.Guide.Config.inst().getConfig().modelConfigName
    )
    model_name = model_config.llmKwargs.get("model_name")
    # tiktoken uses the OpenAI name for the model, not the Azure OpenAI name
    return tiktoken.encoding_for_model("gpt-3.5-turbo" if model_name == "gpt-35-turbo" else model_name)


def test_guide_default_allows_long_strings(tokenizer):
    guide = c3.Genai.Llm.Guide.defaultEvalToolGuide()
    res = guide.generate_text("please count from 1 to 100")
    token_count = len(tokenizer.encode(res))
    assert "42" in res
    assert token_count > 100
    assert token_count <= 256


def test_guide_generate_text_kwargs(tokenizer):
    guide = c3.Genai.Llm.Guide.defaultEvalToolGuide({"max_output_tokens": 5})
    res = guide.generate_text("please count from 1 to 100")
    token_count = len(tokenizer.encode(res))
    assert not res.endswith("100")
    assert token_count <= 5
