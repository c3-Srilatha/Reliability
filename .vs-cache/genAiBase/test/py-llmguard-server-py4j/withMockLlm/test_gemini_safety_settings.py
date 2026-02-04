# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


@pytest.fixture(scope="module", autouse=True)
def set_safety_settings():
    c3.Genai.Llm.Gcp.Config.inst().setConfigValue(
        "safetySettings",
        {
            "HARM_CATEGORY_HATE_SPEECH": "BLOCK_LOW_AND_ABOVE",
            "HARM_CATEGORY_HARASSMENT": "BLOCK_LOW_AND_ABOVE",
        },
    )
    yield
    c3.Genai.Llm.Gcp.Config.inst().clearConfigValue("safetySettings")


def test_config_get_safety_settings():
    safety_settings = c3.Genai.Llm.Gcp.Config.inst().getSafetySettings()
    assert safety_settings is not None
    assert len(safety_settings) == 2


def test_gemini_call_with_safety_settings():
    output = c3.Genai.ConfigUtil.queryEngineModelConfig("gemini_flash_2_0").generateText(
        {
            "prompt": "Count from 1 to 10",
        }
    )
    assert output is not None
    assert "1" in output or "one" in output
