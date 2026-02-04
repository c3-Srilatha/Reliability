# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


TEST_FILE_NAME = "test_string_fuzzy_spec_matcher.py"


@pytest.fixture
def graph():
    graph = c3.TestApi.upsertReadinessDataModelGraph()
    yield graph
    graph.remove()


@pytest.fixture
def default_initialization_spec(graph):
    return {"dataModelGraph": graph, "techniqueKwargs": {"n_gram_similarity_threshold": {2: 0.5}}}


# TODO: GEN-5028 Move this test to test_string_fuzzy_matcher
# This test is in a separate file as having it in test_string_fuzzy_matcher results in Engine initialization issues
def test_fuzzy_match_spec(default_initialization_spec):
    fuzzy_matcher = c3.Genai.Agent.Tool.Util.StringFuzzyMatcher.initialize(default_initialization_spec)
    old_spec = c3.Genai.StructuredQuery.Spec.make(
        {
            "sourceType": "Genai.Aircraft",
            "spec": {
                "filter": "location.city == 'Sn Frncisco' || location.city == 'M@dryd'",
                "projection": "count()",
                "interval": "DAY",
                "timeZone": {"name": "NONE"},
            },
        }
    )
    fuzzy_matcher.initialize(default_initialization_spec)
    fuzzy_match_spec_output = fuzzy_matcher.fuzzyMatchSpec(structuredQuerySpec=old_spec)
    new_spec = fuzzy_match_spec_output.output.spec.toJson()
    # Madrid should not be replaced because it does not pass the threshold
    assert "San Francisco" in new_spec["filter"]
    assert "M@dryd" in new_spec["filter"]

    # Test retrieve most similar
    most_similar = fuzzy_matcher.retrieveMostSimilarValues("Genai.Aircraft", "id", input="X00", k=2)
    assert most_similar[0] == "X00"
    assert len(most_similar) == 2

    assert fuzzy_matcher.areGlobalsSet(), "Fuzzy matcher globals should be set."
    fuzzy_matcher.resetGlobals()
    assert not fuzzy_matcher.areGlobalsSet(), "Fuzzy matcher globals should be reset."
    fuzzy_matcher.stop()
