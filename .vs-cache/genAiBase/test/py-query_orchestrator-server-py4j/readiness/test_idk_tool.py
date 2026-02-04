# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pandas as pd
import pytest


TEST_FILE_NAME = "test_idk_tool.py"


@pytest.fixture(scope="function")
def in_progress_result():
    query = "What is the meaning of life?"
    inProgressResult = (
        c3.Genai.Query.Result(
            id=f"{TEST_FILE_NAME}_{c3.Str.randomSuffix()}",
            searchQuery=c3.Genai.Query.fromString(
                query,
            ),
        )
        .upsert()
        .get()
    )
    yield inProgressResult

    inProgressResult.remove()


def test_idk_tool(in_progress_result):
    idk_tool = c3.Genai.Agent.Tool.Util.make({"id": "UtilTool_Idk"})
    input = "What is the meaning of life?"
    idk_tool_output = idk_tool.run(input, in_progress_result)
    assert idk_tool_output is not None
    assert (
        idk_tool_output.output == f"Successfully executed {idk_tool.id} with input: '{input}'"
    ), "IDK tool output is incorrect"
