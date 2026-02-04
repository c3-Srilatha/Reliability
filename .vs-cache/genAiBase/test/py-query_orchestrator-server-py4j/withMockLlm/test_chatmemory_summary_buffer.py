# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

SummaryBuffer = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/tools/summary_buffer.py",
    ["SummaryBuffer"],
)


# pylint: disable=redefined-outer-name, line-too-long
@pytest.fixture(scope="function")
def chat_example(ctx):
    c3.TestApi.createSeedDataForSummaryBufferTest(ctx)
    originalQuery = c3.Genai.Query.Result.forId("summary_buffer_tutorial_parent_result")
    currentQuery = c3.Genai.Query.Result.forId("summary_buffer_tutorial_followup_result_3")

    yield originalQuery, currentQuery


@pytest.fixture(scope="function")
def summary_buffer():
    # Spec for gpt4 summary
    spec = c3.Genai.UnstructuredQuery.Engine.REA.SummaryBufferConfig.forConfigKey("summary_buffer_config_gpt4o")

    # Create a summary-buffer object
    summary_buffer = SummaryBuffer(spec)

    yield summary_buffer


def test_chatmemory_summary_buffer(summary_buffer, chat_example):
    # get the seeded chat example
    originalQuery, currentQuery = chat_example

    result = summary_buffer.summarize(
        currentQuery,
        originalQuery,
        originalQuery.get("[{chatHistory:[id,{responseAiResult:[searchQuery,answer,chatMemory]}]},id]").chatHistory,
    )

    # Summary buffer should contain some expected keyword(s) based on conversation context
    # e.g. "Summary of earlier conversation:\nThe human asks about the number of planets in the Solar System,
    # and the Assistant responds that there are eight planets.\n\nLatest conversation:\nQ. what is the biggest
    # planet of the solar system?\nA. Jupiter is the fifth planet from the Sun, and the largest in the solar
    # system – more than twice as massive as the other planets combined.\nQ. what is the temperature of Jupiter?\n
    # A. Jupiter's average temperature is -166°F (-110°C) at the point where the atmospheric pressure is equal to
    # one bar on Earth.\n"
    expected_outputs = ["The human asks about the number of planets", "what is the biggest planet", "Jupiter"]
    c3.TestApi.checkStringMatches(result.chatMemoryResult, expected_outputs, False)
