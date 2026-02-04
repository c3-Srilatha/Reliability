# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

Summary = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/tools/summary.py",
    ["Summary"],
)


# pylint: disable=redefined-outer-name, line-too-long
@pytest.fixture(scope="function")
def chat_example(ctx):
    c3.TestApi.createSeedDataForSummaryTest(ctx)
    originalQuery = c3.Genai.Query.Result.forId("summary_tutorial_parent_result")
    currentQuery = c3.Genai.Query.Result.forId("summary_tutorial_followup_result_2")

    yield originalQuery, currentQuery


@pytest.fixture(scope="function")
def summary():
    # Spec for gpt4 summary
    spec = c3.Genai.UnstructuredQuery.Engine.REA.SummaryConfig.forConfigKey("summary_config_gpt4")

    # Create a summary object
    summary = Summary(spec)

    yield summary


def test_chatmemory_summary(summary, chat_example):
    # get the seeded chat example
    originalQuery, currentQuery = chat_example

    result = summary.summarize(
        currentQuery, originalQuery, originalQuery.get("chatHistory.responseAiResult").chatHistory
    )

    # Summary should contain some expected keyword(s) based on conversation context
    # e.g. "The human asks what a type is, and the Assistant explains that a type is the definition of a potentially
    # complex object that the system understands, similar to a class in object-oriented programming languages, but not
    # tied to any particular programming language. Types are the primary interface for all platform services and the
    # primary way application logic is organized. Some types are defined by and built into the platform itself, while
    # others are defined by developers using the platform. Types may normally be inherited by other types and their
    # fields and methods modified. Additionally, a type becomes persistable if it is a {@link Persistable} type, which
    # is the base type for all types that support data persistence in either a relational or key/value data store."
    expected_outputs = ["The human", "Assistant", "type"]
    c3.TestApi.checkStringMatches(result.chatMemoryResult, expected_outputs, False)
