# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

Buffer = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/tools/buffer.py",
    ["Buffer"],
)


# pylint: disable=redefined-outer-name, unused-argument
@pytest.fixture(scope="function")
def chat_example(ctx):
    c3.TestApi.createSeedDataForSummaryBufferTest(ctx)
    originalQuery = c3.Genai.Query.Result.forId("summary_buffer_tutorial_parent_result")
    currentQuery = c3.Genai.Query.Result.forId("summary_buffer_tutorial_followup_result_3")

    yield originalQuery, currentQuery


@pytest.fixture(scope="function")
def buffer():
    # Spec for buffer.
    spec = c3.Genai.UnstructuredQuery.Engine.REA.BufferConfig.forConfigKey("buffer_config")

    # Create a buffer object
    buffer = Buffer(spec)

    yield buffer


def test_chatmemory_buffer(buffer, chat_example):
    # get the seeded chat example
    originalQuery, currentQuery = chat_example

    result = buffer.generate_buffer(
        currentQuery,
        originalQuery,
        originalQuery.get("[{chatHistory:[id,{responseAiResult:[searchQuery,answer,chatMemory]}]},id]").chatHistory,
    )

    # Buffer should be equal to the concatenated of the k-th chat history
    assert "Q. what is the biggest planet of the solar system?\nA. Jupiter is the fifth" in result.chatMemoryResult
    assert "planet from the Sun, and the largest in the solar system – more than twice" in result.chatMemoryResult
    assert "as massive as the other planets combined.\nQ. what is the temperature of" in result.chatMemoryResult
    assert "Jupiter?\nA. Jupiter's average temperature is -166°F (-110°C) at the " in result.chatMemoryResult
    assert "point where the atmospheric pressure is equal to one bar on Earth.\n" in result.chatMemoryResult
