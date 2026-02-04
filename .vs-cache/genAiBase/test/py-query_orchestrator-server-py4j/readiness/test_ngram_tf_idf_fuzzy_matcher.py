# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=line-too-long
import random
import string
import sys
from unittest.mock import patch
from sklearn.feature_extraction.text import TfidfVectorizer
import pytest


FieldOnType = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/__init__.py",
    ["FieldOnType"],
)
NgramTfIdfFuzzyMatcher, NgramTfIdfRetriever, _get_key = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/eval_tool/ngram_tf_idf_fuzzy_matcher.py",
    ["NgramTfIdfFuzzyMatcher", "NgramTfIdfRetriever", "_get_key"],
)


PROJECTION_STRING_LOWER_CASE_AND_IGNORE = (
    "contains(id, 'X00'), max(components.(id == 'X00').riskScore), components.(id =='X1') == 'X1'"
)
EXAMPLES_LOWER_CASE_AND_IGNORE = [
    (
        PROJECTION_STRING_LOWER_CASE_AND_IGNORE,
        {
            "functions_to_ignore_fuzzy_matching": {"contains"},
            "lower_case_fuzzy_matched_fields": False,
        },
        "contains(id, 'X00'), max(components.(('X0_REPLACED_1' == id)).riskScore), ('X1_replaced_1' == components.(('X1_replaced_1' == id)).id)",
        ["X0_REPLACED_1", "X1_replaced_1"],
    ),
    (
        PROJECTION_STRING_LOWER_CASE_AND_IGNORE,
        {
            "functions_to_ignore_fuzzy_matching": {"=="},
            "lower_case_fuzzy_matched_fields": True,
        },
        "contains(lowerCase(id), 'x00_replaced_1'), max(components.(('X00' == id)).riskScore), ('X1' == components.(('X1' == id)).id)",
        ["X00_REPLACED_1", "X01_replaced_1"],
    ),
]


@pytest.mark.parametrize(
    "projection_string, fuzzy_matching_kwargs, target_new_projection_string, mock_values",
    EXAMPLES_LOWER_CASE_AND_IGNORE,
)
def test_ngram_tf_idf_fuzzy_match_case_sensitivity(
    graph_with_collection_fields, projection_string, fuzzy_matching_kwargs, target_new_projection_string, mock_values
):
    with patch.object(FieldOnType, "return_sample_unique_values", return_value=mock_values):
        fuzzy_matcher = NgramTfIdfFuzzyMatcher(**fuzzy_matching_kwargs)
        new_projection_string = fuzzy_matcher.fuzzy_match_spec_string(
            projection_string, "Genai.Aircraft", graph_with_collection_fields
        )
        assert new_projection_string == target_new_projection_string


@pytest.mark.parametrize(
    "projection_string, fuzzy_matching_kwargs, mock_values",
    [
        (
            PROJECTION_STRING_LOWER_CASE_AND_IGNORE,
            {
                "functions_to_ignore_fuzzy_matching": {"=="},
                "lower_case_fuzzy_matched_fields": True,
            },
            ["X00_REPLACED_1", "X01_replaced_1"],
        )
    ],
)
def test_ngram_tf_idf_fuzzy_match_cache(
    graph_with_collection_fields, projection_string, fuzzy_matching_kwargs, mock_values
):
    with patch.object(FieldOnType, "return_sample_unique_values", return_value=mock_values):
        fuzzy_matcher = NgramTfIdfFuzzyMatcher(data_model_graph=graph_with_collection_fields, **fuzzy_matching_kwargs)

        _ = fuzzy_matcher.fuzzy_match_spec_string(projection_string, "Genai.Aircraft", graph_with_collection_fields)

        assert list(fuzzy_matcher.fields) == ["Genai.Aircraft.id"], f"{list(fuzzy_matcher.fields)}"
        assert list(fuzzy_matcher.field_vector_db[_get_key("Genai.Aircraft.id")].strings_series.index) == mock_values

    with patch.object(FieldOnType, "return_sample_unique_values", return_value=["a", "b", "c"]):
        fuzzy_matcher.refresh_cached_values()
        assert list(fuzzy_matcher.field_vector_db[_get_key("Genai.Aircraft.id")].strings_series.index) == [
            "a",
            "b",
            "c",
        ]

        fuzzy_matcher.remove_entry(list(fuzzy_matcher.fields)[0])
        assert fuzzy_matcher.fields == set()


def test_ngram_tf_idf_fuzzy_match_empty_db(graph_with_collection_fields):
    with patch.object(FieldOnType, "return_sample_unique_values", return_value=[]):
        fuzzy_matcher = NgramTfIdfFuzzyMatcher(data_model_graph=graph_with_collection_fields)
        projection_string = "'foo' == id"
        expected_projection_string = "('foo' == id)"
        new_projection_string = fuzzy_matcher.fuzzy_match_spec_string(
            projection_string, "Genai.Aircraft", graph_with_collection_fields
        )

        assert new_projection_string == expected_projection_string, "Empty db should result in no fuzzy matching"


def random_string(length):
    letters = string.ascii_letters
    result_str = "".join(random.choice(letters) for i in range(length))
    return result_str


@pytest.mark.parametrize(
    "num_strings, string_len",
    [
        (100, 50),
        (1000, 10),
        (10000, 1000),
        (100000, 20),
    ],
)
def test_ngram_tf_idf_retriever_approx_size(num_strings, string_len):
    strings = {random_string(string_len + random.randint(-5, 5)) for _ in range(num_strings)}
    string_mem_size = sum(sys.getsizeof(s) for s in strings)

    retriever = NgramTfIdfRetriever(list(strings))

    vectorizer = TfidfVectorizer(analyzer=retriever.ngrams)
    tf_idf_matrix = vectorizer.fit_transform([s.lower() for s in strings])
    tf_idf_mem_size = tf_idf_matrix.data.nbytes + tf_idf_matrix.indptr.nbytes + tf_idf_matrix.indices.nbytes

    estimated_size = tf_idf_mem_size + string_mem_size
    assert (
        string_mem_size < estimated_size < string_mem_size * 4
    ), "the reasonable size estimate should not be more than 4x the size of the raw data"
    assert (
        estimated_size < retriever.approx_size < estimated_size * 1.3
    ), "the retriever's approx_size should be within 30% of the estimated size"


def _approx_size_for_type(type_name):
    if type_name in {"Genai.Aircraft", "Genai.AircraftStatus"}:
        return 0.5 * 1e6  # 0.5 MB
    elif type_name in {"Genai.AircraftComponent", "Genai.AircraftComponentCode"}:
        return 0.2 * 1e6
    elif type_name == "Genai.AircraftComponentAlert":
        return 1.5 * 1e6
    return 0.25 * 1e6


def _tfidf_retriever_approx_size(*args):
    # args[0] is the retriever
    return _approx_size_for_type(args[0].field.target_type)


def _expected_size_for_fields(fields):
    return sum(_approx_size_for_type(".".join(f.split(".")[:-1])) for f in fields)


def _check_expected_fields(fuzzy_matcher, expected_fields):
    assert (
        set(fuzzy_matcher.fields) == expected_fields
    ), f"Expected fields {expected_fields}, got {fuzzy_matcher.fields}"
    assert fuzzy_matcher.cached_strings_approx_size() == _expected_size_for_fields(
        expected_fields
    ), "Fuzzy matcher should have expected size"


def test_string_cache_size(graph_with_collection_fields):
    # autospec=True passes the member object into the mock function
    with patch.object(NgramTfIdfRetriever, "_approx_size", autospec=True, side_effect=_tfidf_retriever_approx_size):
        fuzzy_matcher = NgramTfIdfFuzzyMatcher(data_model_graph=graph_with_collection_fields, string_cache_size_mb=1)
        expected_fields = set()
        assert fuzzy_matcher.cached_strings_approx_size() == 0, "Empty fuzzy matcher should have 0 size"

        res = fuzzy_matcher.fuzzy_match_spec_string("id == 'foo'", "Genai.Aircraft")
        assert "foo" not in res, "Fuzzy matcher should fuzzy match"
        expected_fields.add("Genai.Aircraft.id")
        _check_expected_fields(fuzzy_matcher, expected_fields)
        prev_size = fuzzy_matcher.cached_strings_approx_size()

        res = fuzzy_matcher.fuzzy_match_spec_string("id == 'bar'", "Genai.Aircraft")
        assert "bar" not in res, "Fuzzy matcher should fuzzy match"
        _check_expected_fields(fuzzy_matcher, expected_fields)
        assert (
            fuzzy_matcher.cached_strings_approx_size() == prev_size
        ), "Adding same field should not increase cache size"

        res = fuzzy_matcher.fuzzy_match_spec_string("id == 'baz'", "Genai.AircraftComponent")
        assert "baz" not in res, "Fuzzy matcher should fuzzy match"
        expected_fields.add("Genai.AircraftComponent.id")
        _check_expected_fields(fuzzy_matcher, expected_fields)

        res = fuzzy_matcher.fuzzy_match_spec_string("id == 'qux'", "Genai.Airport")
        assert "qux" not in res, "Fuzzy matcher should fuzzy match"
        expected_fields.add("Genai.Airport.id")
        _check_expected_fields(fuzzy_matcher, expected_fields)

        res = fuzzy_matcher.fuzzy_match_spec_string("id == 'quux'", "Genai.AircraftStatus")
        assert "quux" not in res, "Fuzzy matcher should fuzzy match"
        expected_fields.add("Genai.AircraftStatus.id")
        expected_fields.remove("Genai.Aircraft.id")  # id field should be evicted since we would have been over limit
        _check_expected_fields(fuzzy_matcher, expected_fields)

        res = fuzzy_matcher.fuzzy_match_spec_string("id == 'corge'", "Genai.Airport")
        assert "corge" not in res, "Fuzzy matcher should fuzzy match"
        # should not have changed since field was loaded, but should update order s.t. Genai.AircraftComponent.id is next to be evicted
        _check_expected_fields(fuzzy_matcher, expected_fields)

        res = fuzzy_matcher.fuzzy_match_spec_string("code == 'grault'", "Genai.AircraftComponent")
        assert "grault" not in res, "Fuzzy matcher should fuzzy match"
        expected_fields.add("Genai.AircraftComponentCode.id")
        expected_fields.remove("Genai.AircraftComponent.id")
        _check_expected_fields(fuzzy_matcher, expected_fields)

        # single field that is over the max size of the fuzzy matcher should not be fuzzy matched or evict other fields
        res = fuzzy_matcher.fuzzy_match_spec_string("id == 'garply'", "Genai.AircraftComponentAlert")
        assert "garply" in res, "Fuzzy matcher should not fuzzy match for single field that is too large to persist"
        _check_expected_fields(fuzzy_matcher, expected_fields)


def test_string_cache_size_unlimited(graph_with_collection_fields):
    # autospec=True passes the member object into the mock function
    with patch.object(NgramTfIdfRetriever, "_approx_size", return_value=50e8):
        fuzzy_matcher = NgramTfIdfFuzzyMatcher(data_model_graph=graph_with_collection_fields, string_cache_size_mb=-1)
        res = fuzzy_matcher.fuzzy_match_spec_string("id == 'bar'", "Genai.Aircraft")
        assert "bar" not in res, "Fuzzy matcher should fuzzy match"

        res = fuzzy_matcher.fuzzy_match_spec_string("id == 'baz'", "Genai.AircraftComponent")
        assert "baz" not in res, "Fuzzy matcher should fuzzy match"

        assert fuzzy_matcher.cached_strings_approx_size() == 100e8, "Unlimited fuzzy matcher should grow unbounded"
        assert set(fuzzy_matcher.fields) == {
            "Genai.Aircraft.id",
            "Genai.AircraftComponent.id",
        }, "All fields should be cached"


TEST_CASES_FUZZY_MATCH_SIMILARITY_THRESHOLD = [
    # Case 1: candidate_to_target - True (all candidate n-grams are in target)
    ("hello world", "hello", {1: 0.9, 2: 0.8}, "candidate_to_target", True),
    # Case 2: candidate_to_target - False (not enough candidate n-grams match target)
    ("hello world", "goodbye", {1: 0.8, 2: 0.7}, "candidate_to_target", False),
    # Case 3: target_to_candidate - True (all target n-grams match candidate)
    ("hello", "hello world", {1: 0.9, 2: 0.8}, "target_to_candidate", True),
    # Case 4: target_to_candidate - False (not enough target n-grams match candidate)
    ("world", "hello", {1: 0.8, 2: 0.7}, "target_to_candidate", False),
    # Case 5: either - True (either candidate_to_target or target_to_candidate passes)
    ("hello world", "hello", {1: 0.8, 2: 0.7}, "either", True),
    # Case 6: either - False (neither candidate_to_target nor target_to_candidate passes)
    ("hello world", "goodbye", {1: 0.8, 2: 0.7}, "either", False),
    # Case 7: n-gram size too large - Skip n-gram size, but still True
    ("hi", "hi", {1: 1.0, 2: 1.0, 3: 1.0}, "candidate_to_target", True),
    # Case 8: Case-insensitive comparison - True
    ("Hello World", "hello", {1: 0.9, 2: 0.8}, "candidate_to_target", True),
    # Case 9: Empty candidate string - Should return False
    ("hello world", "", {1: 0.8, 2: 0.7}, "candidate_to_target", False),
    # Case 10: Empty target string - Should return False
    ("", "hello", {1: 0.8, 2: 0.7}, "candidate_to_target", False),
    # Case 11: Small strings, target_to_candidate direction, True
    ("hi", "h", {1: 0.5}, "target_to_candidate", True),
    # Case 12: Empty thresholds
    ("hi", "h", {}, "target_to_candidate", True),
    # Case 13: Both empty strings
    ("", "", {1: 0.5}, "target_to_candidate", False),
]


@pytest.mark.parametrize(
    "target, candidate, thresholds, direction, expected", TEST_CASES_FUZZY_MATCH_SIMILARITY_THRESHOLD
)
def test_ngram_threshold_check(target, candidate, thresholds, direction, expected):
    assert NgramTfIdfFuzzyMatcher.ngram_threshold_check(target, candidate, thresholds, direction) == expected


@pytest.fixture(scope="module")
def _aircraft_with_missing_name_field():
    original_aircraft = c3.Genai.Aircraft.fetch().objs
    c3.Genai.Aircraft.removeAll({}, True)

    aircraft_with_missing_name = c3.Genai.Aircraft.make({"id": "missing"}).merge()
    yield aircraft_with_missing_name

    aircraft_with_missing_name.remove()
    c3.Genai.Aircraft.upsertBatch(original_aircraft)


def test_fuzzy_match_on_field_with_all_missing_values(graph_with_collection_fields, _aircraft_with_missing_name_field):
    fuzzy_matcher = NgramTfIdfFuzzyMatcher(data_model_graph=graph_with_collection_fields)
    most_similar_vals = fuzzy_matcher.retrieve_n_most_similar("Genai.Aircraft", "name", "abc", 10)
    assert most_similar_vals == []
