# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

# Import Rewriter classes
QuestionRewriter, QuestionRewriterSpec = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/tools/question_rewriter.py",
    ["QuestionRewriter", "QuestionRewriterSpec"],
)


# pylint: disable=redefined-outer-name, line-too-long
@pytest.fixture
def question_rewriter():
    # Get default REA Pipeline Config
    config = c3.Genai.UnstructuredQuery.Engine.Config.inst().getConfig()

    # Get associated Question Rewriter Config
    question_rewriter_config = c3.Genai.UnstructuredQuery.Engine.REA.QuestionRewritingConfig.forConfigKey(
        config.questionRewritingConfigName
    ).getConfig()

    # set searchQueryFieldForHistory to ensure which searchQuery field is used
    question_rewriter_config.setConfigValue("searchQueryFieldForHistory", "baseQuery")

    # Get the QuestionRewriterSpec from the config
    question_rewriter_spec = QuestionRewriterSpec.get_from_config(question_rewriter_config.name)

    # Build Question Rewriter from spec
    question_rewriter = QuestionRewriter(question_rewriter_spec)

    yield question_rewriter

    # cleanup
    question_rewriter_config.clearConfigValue("searchQueryFieldForHistory")


@pytest.fixture
def chat_example():
    # Define seed data for Genai.Query.Result
    genai_result_json = [
        {
            "type": "Genai.Query.Result",
            "id": "QR_tutorial_parent_result",
            "searchQuery": {
                "rawQuery": "what is a type?",
                "baseQuery": "what is a c3 type?",
                "standaloneQuery": "what is a type?",
                "queryType": "query",
            },
            "answer": "According to [#1] and [#2], a type is the definition of a potentially complex object that the system understands, similar to a class in object-oriented programming languages, but not tied to any particular programming language. Types are the primary interface for all platform services and the primary way application logic is organized. Some types are defined by and built into the platform itself, while others are defined by developers using the platform. Types may normally be inherited by other types and their fields and methods modified.",
        },
        {
            "type": "Genai.Query.Result",
            "id": "QR_tutorial_followup_result_1",
            "searchQuery": {
                "rawQuery": "what would make a type persistable?",
                "baseQuery": "what would make a type persistable?",
                "standaloneQuery": "What criteria would make a type persistable?",
                "queryType": "chat",
            },
            "answer": "According to [#1], a type is persistable if it is a {@link Persistable} type, which is the base type for all types that support data persistence in either a relational or key/value data store.",
        },
        {
            "type": "Genai.Query.Result",
            "id": "QR_tutorial_followup_result_2",
            "searchQuery": {
                "rawQuery": "how do i fetch it?",
                "baseQuery": "how do i fetch it?",
                "standaloneQuery": "What is the process for fetching a type?",
                "queryType": "chat",
            },
            "answer": "To fetch a type, you need to specify which types to fetch from and mention explicitly the fields you want to fetch, as stated in [#1], [#2], [#3], and [#4].",
        },
    ]

    # Define seed data for Genai.Query.ChatMessage
    genai_chatmessage_json = [
        {
            "type": "Genai.Query.ChatMessage",
            "id": "QR_tutorial_chatmessage_1",
            "parentAiResult": {"id": "QR_tutorial_parent_result"},
            "message": "what would make a type persistable?",
            "sentTime": "2024-01-01",
            "user": {"id": "QR_tutorial_mock_user"},
            "responseAiResult": {"id": "QR_tutorial_followup_result_1"},
        },
        {
            "type": "Genai.Query.ChatMessage",
            "id": "QR_tutorial_chatmessage_2",
            "parentAiResult": {"id": "QR_tutorial_parent_result"},
            "message": "how do i fetch it?",
            "sentTime": "2024-01-02",
            "user": {"id": "QR_tutorial_mock_user"},
            "responseAiResult": {"id": "QR_tutorial_followup_result_2"},
        },
    ]

    # Upsert
    test_results = [c3.Genai.Query.Result.make(r).upsert().get() for r in genai_result_json]
    test_chatmessages = [c3.Genai.Query.ChatMessage.make(r).upsert().get() for r in genai_chatmessage_json]

    yield test_results, test_chatmessages

    # cleanup
    for r in test_results:
        r.remove()
    for c in test_chatmessages:
        c.remove()


def test_question_rewriter(question_rewriter, chat_example):
    import openai

    latest_question = "can you give me an example?"

    # get the seeded chat example
    test_results, test_chatmessages = chat_example

    # A parent chat represents the first question in a chat.
    parent_chat = test_results[0]

    # Setup the conversation history so far
    question_rewriter.setup_conversation_history(original_ai_result=parent_chat, chat_history=test_chatmessages)

    # generate the rewritten question
    try:
        rewriter_output = question_rewriter.rewrite(latest_question)
        rewritten_question = rewriter_output.rewritten_question
    except openai.AuthenticationError as ae:
        openAi_cfg = c3.Genai.Llm.OpenAI.Config.getConfig()
        api_key = c3.Genai.PrivilegedAction.getOpenAiConfigSecret(openAi_cfg).apiKey
        # only show part of the key, to avoid the full key showing in plaintext
        if api_key:
            api_key = api_key[:3] + "..." + api_key[-5:]
        raise RuntimeError(f"{openAi_cfg=},{api_key=},{ae=}") from ae

    # Validate that the rewriter output's question is as expected
    assert rewriter_output.question == latest_question, "QuestionRewriterOutput.question does not match latest_question"

    # Rewritten question should not be identical to the input question
    assert rewritten_question != latest_question, "Rewritten question is the same as the input question"

    # Rewritten question should contain some expected keyword(s) based on conversation context
    expected_outputs = ["type", "persistable", "fetch"]
    c3.TestApi.checkStringMatches(rewritten_question, expected_outputs, False)

    # Validate that the rewriter output's history is as expected
    test_results_qa_set = []
    for r in test_results:
        test_results_qa_set.append(r.searchQuery.baseQuery)
        test_results_qa_set.append(r.answer)

    for r_in, r_out in zip(test_results_qa_set, list(rewriter_output.history)):
        assert r_in in r_out, "QuestionRewriterOutput.history does not match input question/answer's"
