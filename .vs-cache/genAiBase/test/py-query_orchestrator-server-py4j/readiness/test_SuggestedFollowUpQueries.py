# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=line-too-long,too-many-arguments,redefined-outer-name

import pytest

FILE_NAME = "test_SuggestedFollowUpQueries.py"

SuggestedFollowUpQueries = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/tools/follow_query_rewriter.py", ["SuggestedFollowUpQueries"]
)


@pytest.fixture(scope="module", autouse=True)
def set_translator():
    c3.Genai.Translator.Config.setConfigValue("translatorTypeName", c3.Genai.Translator.Llm)
    yield
    c3.Genai.Translator.Config.clearConfigAndSecretOverride(c3.ConfigOverride.APP)


@pytest.fixture(scope="module", autouse=True)
def projects():
    project = c3.Genai.Project.make({"id": FILE_NAME, "chunkerConfig": "default"}).upsert().get()
    other_project = c3.Genai.Project.make({"id": FILE_NAME + "Other", "chunkerConfig": "default"}).upsert().get()
    user_settings = c3.Genai.App.UserSettings.make({"user": c3.User.myUser()}).upsert().get()
    user_settings.setActiveProject(project)

    yield project, other_project

    project.remove()
    other_project.remove()
    user_settings.remove()


@pytest.fixture(scope="module", autouse=True)
def example_data_creation(ctx, projects):
    project, other_project = projects
    c3.TestApi.upsertBatchEntity(
        ctx,
        "Genai.Query.Result",
        [
            {
                "id": "ResultFollowTest1",
                "searchQuery": c3.Genai.Query.fromString("What is the size of Uranus?"),
                "answer": "With an equatorial diameter of 31,763 miles (51,118 kilometers), Uranus is four times wider than Earth",
            },
            {
                "id": "ResultFollowTest2",
                "searchQuery": c3.Genai.Query.fromString("What is the size of Jupiter?"),
                "answer": "Jupiter has a diameter of about 88,695 miles (142,800 kilometers) which is more than 11 times the diameter of Earth.",
            },
            {
                "id": "ResultFollowTest3",
                "searchQuery": c3.Genai.Query.fromString("What is the size of Mercury?"),
                "answer": "Mercury has a diameter of 3,032 miles (4,879 km) making it a little more than one third the size of Earth.",
            },
            {
                "id": "FollowUpResultFollowTest1",
                "searchQuery": c3.Genai.Query.fromString("What is its chemical composition?"),
                "answer": 'Structure. Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80% or more) of the planet\'s mass is made up of a hot dense fluid of "icy" materials – water, methane, and ammonia – above a small rocky core.',
            },
            {
                "id": "FollowUpResultFollowTest2",
                "searchQuery": c3.Genai.Query.fromString("How many moons does it have?"),
                "answer": "Jupiter has 95 moons that have been officially recognized by the International Astronomical Union.",
            },
            {
                "id": "FollowUpResultFollowTest3",
                "searchQuery": c3.Genai.Query.fromString("What is its temperature?"),
                "answer": "Temperatures on Mercury are extreme. During the day, temperatures on the surface can reach 800 degrees Fahrenheit (430 degrees Celsius).",
            },
            {
                "id": "QueryResultFollowMainQuery",
                "searchQuery": c3.Genai.Query.fromString("What is the size of the Earth?"),
                "answer": "The diameter of Earth through its center is 7,926 miles (12,756 km)",
            },
            {
                "id": "QueryResultFollowMainQueryWithTranslation",
                "searchQuery": c3.Genai.Query.fromString("What is the size of the Earth?")
                .withDetectedLanguage("es")
                .withNonTranslatedQuery("¿Cual es el tamaño de la tierra?"),
                "answer": "The diameter of Earth through its center is 7,926 miles (12,756 km)",
            },
            {
                "id": "ResultFollowOtherProjectTest",
                "searchQuery": c3.Genai.Query.fromString("How large is the Earth?"),
                "answer": "Its surface area is approximately 196.9 million square miles (510.1 million square kilometers), and its volume is around 260 billion cubic miles (1 trillion cubic kilometers).",
            },
            {
                "id": "FollowUpResultFollowOtherProjectTest",
                "searchQuery": c3.Genai.Query.fromString("How fast does the Earth rotate on its axis?"),
                "answer": "The Earth rotates at approximately 1,037 miles per hour (1,670 kilometers per hour) at the equator. This speed decreases as you move toward the poles.",
            },
        ],
    )

    query_result_pairs = [
        {
            "id": f"QueryResultFollowTest{i + 1}",
            "query": c3.Genai.Query.Result.forId(f"ResultFollowTest{i + 1}").searchQuery.standaloneQuery,
            "result": c3.Genai.Query.Result.forId(f"ResultFollowTest{i + 1}"),
            "followUpResult": c3.Genai.Query.Result.forId(f"FollowUpResultFollowTest{i + 1}"),
            "project": project,
        }
        for i in range(3)
    ]
    query_result_pairs.append(
        {
            "id": "QueryResultFollowOtherProjectTest",
            "query": c3.Genai.Query.Result.forId("ResultFollowOtherProjectTest").searchQuery.standaloneQuery,
            "result": c3.Genai.Query.Result.forId("ResultFollowOtherProjectTest"),
            "followUpResult": c3.Genai.Query.Result.forId("FollowUpResultFollowOtherProjectTest"),
            "project": other_project,
        }
    )
    c3.TestApi.upsertBatchEntity(ctx, "Genai.FewShotExample.QueryResultPair", query_result_pairs)


def generate_spec(query_id):
    query = c3.Genai.Query.Result.forId(query_id)
    spec_name = "followup_queries_gpt4o"
    spec = c3.Genai.SuggestedFollowUpQueriesConfig.forConfigKey(spec_name)
    rewriter = SuggestedFollowUpQueries(spec)
    retriever = c3.Genai.Agent.Tool.Util.FewShotRetriever(templatePrompt=spec.rewriterPrompt)
    follow_query_spec = c3.Genai.Agent.Tool.Util.SuggestedFollowUpQueries.Spec.make(
        {
            "inProgressResult": query,
            "config": spec,
            "retriever": retriever,
            "rewriter": rewriter,
        }
    )
    return follow_query_spec


def test_genai_suggested_follow_up_queries():
    expected_outputs = ["temperature", "chemical", "moons"]
    unexpected_outputs = ["rotate", "rotation"]
    follow_query_spec = generate_spec("QueryResultFollowMainQuery")
    result = c3.Genai.Agent.Tool.Util.SuggestedFollowUpQueries.generateSuggestedQueries(follow_query_spec)
    assert len(result.suggestedFollowUpQueries) > 0
    assert "SuggestedFollowUpQueries" in result.engineLog
    c3.TestApi.checkStringMatches(result.suggestedFollowUpQueries.toString(), expected_outputs, False)
    assert all(term not in result.suggestedFollowUpQueries.toString() for term in unexpected_outputs)


def test_genai_suggested_follow_up_queries_with_translate():
    expected_outputs_with_translate = ["temperatura", "química", "lunas"]
    unexpected_outputs_with_translate = ["rotar", "rotación"]
    follow_query_spec_with_translate = generate_spec("QueryResultFollowMainQueryWithTranslation")
    result_with_translate = c3.Genai.Agent.Tool.Util.SuggestedFollowUpQueries.generateSuggestedQueries(
        follow_query_spec_with_translate
    )
    queries_with_translate = ""
    for query in result_with_translate.suggestedFollowUpQueries:
        queries_with_translate += query.nonTranslatedQuery
        assert query.detectedLanguage == "es"
    assert len(result_with_translate.suggestedFollowUpQueries) > 0
    assert "SuggestedFollowUpQueries" in result_with_translate.engineLog
    c3.TestApi.checkStringMatches(queries_with_translate, expected_outputs_with_translate, False)
    assert all(term not in queries_with_translate for term in unexpected_outputs_with_translate)
