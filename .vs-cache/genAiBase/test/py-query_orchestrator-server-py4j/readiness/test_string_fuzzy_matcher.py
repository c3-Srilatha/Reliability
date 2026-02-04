# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from unittest.mock import patch
import pytest


TEST_FILE_NAME = "test_string_fuzzy_matcher.py"

FieldOnType = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/__init__.py",
    ["FieldOnType"],
)

# pylint: disable = redefined-outer-name


@pytest.fixture
def graph():
    graph = c3.TestApi.upsertReadinessDataModelGraph()
    yield graph
    graph.remove()


@pytest.fixture
def default_initialization_spec(graph):
    return {"dataModelGraph": graph}


def _fuzzy_matcher(spec):
    return c3.Genai.Agent.Tool.Util.StringFuzzyMatcher.initialize(spec)


@pytest.fixture
def fuzzy_matcher(default_initialization_spec):
    fuzzy_matcher = _fuzzy_matcher(default_initialization_spec)
    assert len(fuzzy_matcher.currentFields()) == 0, "fuzzy matcher should start empty"
    yield fuzzy_matcher
    fuzzy_matcher.terminate()


def check_dict_of_lists_equal(expected, actual):
    assert set(expected.keys()) == set(actual.keys()), f"{expected=}  {actual=}"
    for k, v in expected.items():
        sorted_v = sorted(v)
        sorted_actual = sorted(actual[k])
        assert sorted_v == sorted_actual, f"{sorted_v=}   {sorted_actual=} for key {k}"


def test_load_and_evict(fuzzy_matcher):
    expected = {}

    new_fields = {"Genai.Aircraft": ["location", "model"], "Genai.AircraftModel": ["id"]}
    expected.update(new_fields)
    fuzzy_matcher.loadFields(new_fields)
    check_dict_of_lists_equal(expected, dict(fuzzy_matcher.currentFields()))

    new_fields = {"Genai.AircraftComponent": ["id", "code", "aircraft"]}
    expected.update(new_fields)
    fuzzy_matcher.loadFieldsForType("Genai.AircraftComponent")
    check_dict_of_lists_equal(expected, dict(fuzzy_matcher.currentFields()))

    expected.pop("Genai.Aircraft")
    fuzzy_matcher.evictTypes(["Genai.Aircraft"])
    check_dict_of_lists_equal(expected, dict(fuzzy_matcher.currentFields()))

    fuzzy_matcher.clearCache()
    assert len(fuzzy_matcher.currentFields()) == 0, "fuzzy matcher should be cleared"


def test_initialize_with_same_params_should_not_recreate_native_matcher(fuzzy_matcher, default_initialization_spec):
    new_fields = {"Genai.Aircraft": ["location", "model"], "Genai.AircraftModel": ["id"]}
    fuzzy_matcher.loadFields(new_fields)
    check_dict_of_lists_equal(new_fields, dict(fuzzy_matcher.currentFields()))

    fuzzy_matcher.initialize(default_initialization_spec)
    check_dict_of_lists_equal(new_fields, dict(fuzzy_matcher.currentFields()))


def test_initialize_with_updated_graph_should_recreate_native_matcher(fuzzy_matcher, default_initialization_spec):
    new_fields = {"Genai.Aircraft": ["location", "model"], "Genai.AircraftModel": ["id"]}
    fuzzy_matcher.loadFields(new_fields)
    check_dict_of_lists_equal(new_fields, dict(fuzzy_matcher.currentFields()))

    new_graph = default_initialization_spec["dataModelGraph"].withFieldsToIgnore(["sensors"]).upsert().get()
    new_spec = {"dataModelGraph": new_graph}
    fuzzy_matcher.initialize(new_spec)
    assert len(fuzzy_matcher.currentFields()) == 0, "fuzzy matcher should start empty"


def test_initialize_ignore_non_force(default_initialization_spec):
    try:
        spec = default_initialization_spec.copy()
        spec["ignoreNonForceInitializations"] = True
        fuzzy_matcher = _fuzzy_matcher(spec)
        assert len(fuzzy_matcher.currentFields()) == 0, "fuzzy matcher should start empty"

        new_fields = {"Genai.Aircraft": ["location", "model"], "Genai.AircraftModel": ["id"]}
        fuzzy_matcher.loadFields({"Genai.Aircraft": ["location", "model"], "Genai.AircraftModel": ["id"]})
        check_dict_of_lists_equal(new_fields, dict(fuzzy_matcher.currentFields()))

        new_graph = spec["dataModelGraph"].withFieldsToIgnore(["sensors"]).upsert().get()
        new_spec = {"dataModelGraph": new_graph}
        fuzzy_matcher.initialize(new_spec)
        check_dict_of_lists_equal(new_fields, dict(fuzzy_matcher.currentFields()))

        fuzzy_matcher.initialize(new_spec, force=True)
        assert len(fuzzy_matcher.currentFields()) == 0, "fuzzy matcher should re-initialize with force=True"
    finally:
        fuzzy_matcher.terminate()


def test_recovery_from_stop(fuzzy_matcher):
    # defined in Genai.Agent.Tool.Util.StringFuzzyMatcher.py
    cached_spec_path = "file:///tmp/StringFuzzyMatcher/FuzzyMatcher/cached_initialization_spec.json"
    cached_spec_file = c3.FileSystem.fromUrlOrEncodedPath(cached_spec_path).makeFile(cached_spec_path)
    assert cached_spec_file.exists(), "cached spec file should exist"

    # correctness of results tested elsewhere
    initial_string = "contains(id, 'X0')"
    res = fuzzy_matcher.fuzzyMatchFilterString("Genai.Aircraft", initial_string)
    assert res != initial_string, f"{res=} should not be {initial_string=}"

    fuzzy_matcher.stop()
    res_2 = fuzzy_matcher.fuzzyMatchFilterString("Genai.Aircraft", initial_string)
    assert res_2 == res, f"{res_2=} should be the same as {res=} after automatic re-initialization"

    cached_spec_file.delete()
    assert not cached_spec_file.exists(), "cached spec file should be deleted"
    res_2 = fuzzy_matcher.fuzzyMatchFilterString("Genai.Aircraft", initial_string)
    assert (
        res_2 == res
    ), f"{res_2=} should be the same as {res=} because the cached spec is not needed if the engine is running"

    fuzzy_matcher.stop()
    with pytest.raises(Exception, match="StringFuzzyMatcher has not been initialized"):
        assert fuzzy_matcher.fuzzyMatchFilterString("Genai.Aircraft", initial_string) == 42
