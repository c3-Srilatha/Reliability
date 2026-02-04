# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = line-too-long

import json
import pytest

SuggestedFollowUpQueries = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/tools/follow_query_rewriter.py", ["SuggestedFollowUpQueries"]
)

FILE_NAME = "test_follow_query_rewriter.py"


@pytest.fixture(scope="module", autouse=True)
def set_creds_seed_data():
    c3.TestApi.setOpenAiApiKey()
    c3.TestApi.setGcpKey()
    c3.TestApi.setAwsBedrockKeys()
    # Seed data for the test ensures that the test runs with the necessary configurations
    c3.Pkg.upsertAllSeed()


# pylint: disable=redefined-outer-name, line-too-long
def historical_queries_to_string(historical_queries):
    result = "["
    for historical_query in historical_queries:
        result += '["' + historical_query[0] + '" , "' + historical_query[1] + '"],'
    result += "]"
    return result


@pytest.fixture(scope="function", name="data_example")
def data_example_generator():
    historical_queries = [
        [
            "What is the earth's distance from sun?",
            "Earth's average distance to the Sun is about 93 million miles (150 million kilometers) from the Sun",
        ],
        [
            "What is the jupiter's distance from sun?",
            "From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun",
        ],
        [
            "What is the size of planet earth?",
            "Its diameter (the distance from one side to the other through Earth's center) is 7,926 miles (about 12,756 kilometers). Earth is slightly smaller when measured between the North and South Poles which gives a diameter of 7,907 miles (12,725 kilometers)",
        ],
        [
            "What is the average temperature of uranus?",
            "The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. It has a mean temperature of -320°F (-195°C)",
        ],
    ]
    most_recent_query = "what is the largest planet of solar system?"
    most_recent_response = "Jupiter is the largest planet in the solar system. It's about 11 times wider than Earth with an equatorial diameter of 88,846 miles (about 142,984 kilometers)"

    yield historical_queries_to_string(historical_queries), most_recent_query, most_recent_response


def validation(config_name, historical_queries, most_recent_query, most_recent_response):
    spec = c3.Genai.SuggestedFollowUpQueriesConfig.forConfigKey(config_name)
    rewriter = SuggestedFollowUpQueries(spec)

    promtp_template = spec.rewriterPrompt.get("this")

    # add the historical queries to the prompt template
    promtp_template = promtp_template.setParam("few_shot_examples", historical_queries)
    # generate the follow up queries dictionary similar to the next example:
    # {[]"What is the size of planet Jupiter?", "What is the average temperature of Jupiter?"]}
    result = rewriter.generate(promtp_template, most_recent_query, most_recent_response)
    assert "follow_up_queries" in result.keys()
    assert len(result.keys()) == 1
    result_string = json.dumps(result)

    expected_outputs = ["Jupiter", "temperature", "size"]
    c3.TestApi.checkStringMatches(result_string, expected_outputs, False)
    return True


def test_followup_rewriter_gpt4(data_example):
    historical_queries, most_recent_query, most_recent_response = data_example
    assert validation("followup_queries_gpt4", historical_queries, most_recent_query, most_recent_response)


def test_followup_rewriter_gpt4o(data_example):
    historical_queries, most_recent_query, most_recent_response = data_example
    assert validation("followup_queries_gpt4o", historical_queries, most_recent_query, most_recent_response)


def test_followup_rewriter_gemini_flash_2_0(data_example):
    historical_queries, most_recent_query, most_recent_response = data_example
    assert validation("followup_queries_gemini_flash_2_0", historical_queries, most_recent_query, most_recent_response)


def test_followup_rewriter_claude_v3_haiku(data_example):
    historical_queries, most_recent_query, most_recent_response = data_example
    assert validation(
        "followup_queries_aws_bedrock_claude_v3_haiku", historical_queries, most_recent_query, most_recent_response
    )
