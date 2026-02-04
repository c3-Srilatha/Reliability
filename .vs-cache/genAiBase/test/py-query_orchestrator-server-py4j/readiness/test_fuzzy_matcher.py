# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from typing import Optional, List, Dict
from collections import Counter
import pytest

# pylint: disable=missing-class-docstring


FILE_NAME = "test_fuzzy_matcher.py"
logger = c3.Logger.for_(FILE_NAME.split(".", maxsplit=1)[0])

FilterHandler, FieldOnType = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/__init__.py",
    ["FilterHandler", "FieldOnType"],
)
FuzzyMatcher = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/eval_tool/fuzzy_matcher.py",
    ["FuzzyMatcher"],
)

ProjectionHandler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/projection_handler.py",
    ["ProjectionHandler"],
)

NgramTfIdfFuzzyMatcher = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/eval_tool/ngram_tf_idf_fuzzy_matcher.py",
    ["NgramTfIdfFuzzyMatcher"],
)


class DummyFuzzyMatcher(FuzzyMatcher):
    def __init__(
        self,
        functions_to_ignore_fuzzy_matching: Optional[set] = None,
        lower_case_fuzzy_matched_fields: Optional[bool] = False,
    ):
        super().__init__(
            functions_to_ignore_fuzzy_matching=functions_to_ignore_fuzzy_matching,
            lower_case_fuzzy_matched_fields=lower_case_fuzzy_matched_fields,
        )
        self.count_literal = Counter()

    def do_match_most_similar(self, field: FieldOnType, literals: List[str]) -> Dict[str, str]:
        """
        Dummy implementation of match_most_similar for testing.
        Replaces the literals with an added counter suffix, each time the same literal is replaced
        an the counter is increased. E.g. 'string' -> replaced -> 'string_replaced_1'.
        """
        to_replace = {}
        for literal in literals:
            self.count_literal[literal] += 1
            to_replace[literal] = literal + f"_replaced_{self.count_literal[literal]}"
        return to_replace

    def evict_types(self, types):
        pass

    def evict_fields(self, fields):
        pass

    def do_load_fields_for_type(self, type_name, fields):
        pass

    def cached_strings_approx_size(self):
        return 0


class BrokenFuzzyMatcher(DummyFuzzyMatcher):
    def do_match_most_similar(self, field: FieldOnType, literals: List[str]) -> Dict[str, str]:
        raise RuntimeError("BrokenFuzzyMatcher")


class CallCountFuzzyMatcher(NgramTfIdfFuzzyMatcher):
    def __init__(
        self,
        functions_to_ignore_fuzzy_matching: Optional[set] = None,
        lower_case_fuzzy_matched_fields: Optional[bool] = False,
        match_most_similar_cache_limit: int = 3,
        fuzzy_match_spec_string_cache_limit: int = 2,
    ):
        super().__init__(
            functions_to_ignore_fuzzy_matching,
            lower_case_fuzzy_matched_fields,
            match_most_similar_cache_limit=match_most_similar_cache_limit,
            fuzzy_match_spec_string_cache_limit=fuzzy_match_spec_string_cache_limit,
        )
        self.match_most_similar_count = 0
        self.do_match_most_similar_count = 0

    def do_match_most_similar(self, field: FieldOnType, literals: List[str]) -> Dict[str, str]:
        self.do_match_most_similar_count += 1
        return super().do_match_most_similar(field, literals)

    def match_most_similar(self, field: FieldOnType, literals: List[str]) -> Dict[str, str]:
        self.match_most_similar_count += 1
        return super().match_most_similar(field, literals)

    def evict_types(self, types):
        pass

    def evict_fields(self, fields):
        pass

    def do_load_fields_for_type(self, type_name, fields):
        pass


@pytest.fixture()
def graph_with_collection_stored_calc_and_enum():
    dmg = c3.Genai.StructuredData.DataModelGraph(
        **{
            "id": "test_stored_calc",
            "name": "test_stored_calc",
            "whitelistedDataModel": {
                "Genai.Aircraft": {
                    "fields": [
                        "id",
                        "componentCodesDescription",
                        "componentCodesDescriptionAsSet",
                        "usage",
                        "engineType",
                    ]
                }
            },
            "includeCollectionFields": True,
        }
    ).upsert()
    yield dmg.toNative()
    dmg.remove()


EXAMPLES_FIND_LITERAL_FIELD_PAIRS = [
    # Example 1 string field 1 string literal
    ("id == 'X00'", "Genai.Aircraft.id", {"X00"}),
    # Example 1 string field multiple string literals
    (
        "intersects(components, ['X00', 'X11'])",
        "Genai.AircraftComponent.id",
        {"X11", "X00"},
    ),
    # Examples no string fields or literals
    ("riskScore > 1", None, set()),
    ("components.alerts.triggeredTimestamp > '2020-01-01 00:00:00'", None, set()),
    # Examples more than 1 string field
    ("intersects(components, components.alerts)", None, set()),
    ("intersects(components, ['X00', components.alerts])", None, set()),
]


@pytest.mark.parametrize("filter_string, target_field, target_literals", EXAMPLES_FIND_LITERAL_FIELD_PAIRS)
def test_find_all_field_literal_pairs_for_fuzzy_matching(
    graph_with_collection_fields, filter_string, target_field, target_literals
):
    fuzzy_matcher = DummyFuzzyMatcher()
    filter_ = FilterHandler(filter_string, "Genai.Aircraft", graph_with_collection_fields)
    logical_expression = list(filter_.all_logical_expression_components.values())[0]
    field, literals = fuzzy_matcher.find_all_field_literal_pairs_for_fuzzy_matching(logical_expression)

    assert field == target_field, f"Expected {field=} to be {target_field=} for {filter_string=}"
    assert set(literals) == target_literals, f"Expected {set(literals)=} to be {target_literals=} for {filter_string=}"


EXAMPLES_FUZZY_MATCHING = [
    # No fuzzy matching
    ("model.id", "model.id"),
    # Single logical expression single literal
    ("model.id == 'X123'", "'X123_replaced_1' == model.id"),
    # single logical expression multiple literals
    (
        "intersects(components, ['PIKACHU', 'CHARIZARD'])",
        "intersects(components.id, ['CHARIZARD_replaced_1', 'PIKACHU_replaced_1'])",
    ),
    # Multiple logical expressions
    (
        "model.id == 'X123' || model.id == 'X321'",
        "'X123_replaced_1' == model.id || 'X321_replaced_1' == model.id",
    ),
    # Multiple expressions
    (
        "model.id == 'X123', intersects(components, ['mash', 'sham'])",
        "'X123_replaced_1' == model.id, intersects(components.id, ['mash_replaced_1', 'sham_replaced_1'])",
    ),
    # Duplicate literals on different fields
    (
        "model.id == 'mash', intersects(component.id, ['mash'])",
        "'mash_replaced_1' == model.id, intersects(component.id, ['mash_replaced_2'])",
    ),
    # Substrings, ensure that we don't replace strings with their substring
    (
        "model.id == 'mash', intersects(component.id, ['some_string', 'some_string_substring'])",
        "'mash_replaced_1' == model.id, intersects(component.id,"
        " ['some_string_replaced_1', 'some_string_substring_replaced_1'])",
    ),
    # Intersects
    (
        "intersects(components, ['PIKACHU', 'CHARIZARD'])",
        "intersects(components.id, ['CHARIZARD_replaced_1', 'PIKACHU_replaced_1'])",
    ),
    # Has filter in traversal and is a filter
    (
        "components.(id == 'X03') == 'SHAM'",
        "'SHAM_replaced_1' == components.('X03_replaced_1' == id).id",
    ),
    # Has filter in traversal and is a field
    ("components.(id == 'X123')", "components.('X123_replaced_1' == id).id"),
    # Has same string in both traversal as well as outer filter
    (
        "components.(id == 'X03').alerts == 'X03'",
        "'X03_replaced_1' == components.('X03_replaced_2' == id).alerts.id",
    ),
    # Math expression as projection
    (
        "components.(id == 'X00').riskScore + components.(code == 'X01').riskScore ",
        "(components.(('X01_replaced_1' == code.id)).riskScore + components.(('X00_replaced_1' == id)).riskScore)",
    ),
    # Math expression as filter
    (
        "(components.(id == 'X00').riskScore + components.(id == 'X01').riskScore) >3 ",
        "3 < (components.('X00_replaced_1' == id).riskScore + components.('X01_replaced_1' == id).riskScore)",
    ),
    # Unary operators
    (
        "!contains(lowerCase(id), 'some') && contains(lowerCase(id), 'other')",
        "contains(lowerCase(id), 'other_replaced_1') && !contains(lowerCase(id), 'some_replaced_1')",
    ),
]


@pytest.mark.parametrize("projection_string, target_new_projection_string", EXAMPLES_FUZZY_MATCHING)
def test_fuzzy_match_spec_string(graph_with_collection_fields, projection_string, target_new_projection_string):
    fuzzy_matcher = DummyFuzzyMatcher(functions_to_ignore_fuzzy_matching=set(), lower_case_fuzzy_matched_fields=False)
    new_projection_string = fuzzy_matcher.fuzzy_match_spec_string(
        projection_string, "Genai.Aircraft", graph_with_collection_fields
    )
    assert ProjectionHandler.from_string(
        new_projection_string, "Genai.Aircraft", graph_with_collection_fields
    ) == ProjectionHandler.from_string(
        target_new_projection_string, "Genai.Aircraft", graph_with_collection_fields
    ), f"Expected {new_projection_string=} to be {target_new_projection_string=}."


PROJECTION_STRING_LOWER_CASE_AND_IGNORE = (
    "contains(id, 'X00'), max(components.(id == 'X00').riskScore), components.(id =='X01') == 'X1'"
)
EXAMPLES_LOWER_CASE_AND_IGNORE = [
    (
        PROJECTION_STRING_LOWER_CASE_AND_IGNORE,
        {
            "functions_to_ignore_fuzzy_matching": {"contains"},
            "lower_case_fuzzy_matched_fields": False,
        },
        "contains(id, 'X00'), max(components.('X00_replaced_1' == id).riskScore),"
        " 'X1_replaced_1' == components.('X01_replaced_1' == id).id",
    ),
    (
        PROJECTION_STRING_LOWER_CASE_AND_IGNORE,
        {
            "functions_to_ignore_fuzzy_matching": {"=="},
            "lower_case_fuzzy_matched_fields": False,
        },
        "contains(id, 'X00_replaced_1'), max(components.('X00' == id).riskScore), 'X1' == components.('X01' == id).id",
    ),
    (
        PROJECTION_STRING_LOWER_CASE_AND_IGNORE,
        {
            "functions_to_ignore_fuzzy_matching": {"contains"},
            "lower_case_fuzzy_matched_fields": True,
        },
        "contains(id, 'X00'), max(components.('x00_replaced_1' == lowerCase(id)).riskScore),"
        " 'x1_replaced_1' == lowerCase(components.('x01_replaced_1' == lowerCase(id)).id)",
    ),
    (
        PROJECTION_STRING_LOWER_CASE_AND_IGNORE,
        {
            "functions_to_ignore_fuzzy_matching": {"=="},
            "lower_case_fuzzy_matched_fields": True,
        },
        "contains(lowerCase(id), 'x00_replaced_1'), max(components.('X00' == id).riskScore),"
        " 'X1' == components.('X01' == id).id",
    ),
]


@pytest.mark.parametrize(
    "projection_string, fuzzy_matching_kwargs, target_new_projection_string", EXAMPLES_LOWER_CASE_AND_IGNORE
)
def test_fuzzy_match_non_traversal_filters(
    graph_with_collection_fields,
    projection_string,
    fuzzy_matching_kwargs,
    target_new_projection_string,
):
    fuzzy_matcher = DummyFuzzyMatcher(**fuzzy_matching_kwargs)
    new_projection_string = fuzzy_matcher.fuzzy_match_spec_string(
        projection_string, "Genai.Aircraft", graph_with_collection_fields
    )
    assert ProjectionHandler.from_string(
        new_projection_string, "Genai.Aircraft", graph_with_collection_fields
    ) == ProjectionHandler.from_string(
        target_new_projection_string, "Genai.Aircraft", graph_with_collection_fields
    ), f"Expected {new_projection_string=} to be {target_new_projection_string=}."


TEST_CASE_WITH_COLLECTION_STORED_CALC_AND_ENUM = [
    (
        "componentCodesDescription == 'Actuator' || componentCodesDescription == 'Valve'",
        "('VALVE AUX RAM AIR' == componentCodesDescription) || ('ACTUATOR' == componentCodesDescription)",
    ),
    (
        "componentCodesDescriptionAsSet == 'Actuator' || componentCodesDescriptionAsSet == 'Valve'",
        "('VALVE AUX RAM AIR' == componentCodesDescriptionAsSet) || ('ACTUATOR' == componentCodesDescriptionAsSet)",
    ),
    ("'Comm3ercial' == usage", "'Commercial' == usage"),
    ("engineType == 'j3t'", "engineType == 'Jet'"),
]


@pytest.mark.parametrize("input_string, target_projection_string", TEST_CASE_WITH_COLLECTION_STORED_CALC_AND_ENUM)
def test_graph_with_collection_stored_calc_and_enum(
    input_string, target_projection_string, graph_with_collection_stored_calc_and_enum
):
    fuzzy_matcher = CallCountFuzzyMatcher(
        functions_to_ignore_fuzzy_matching=set(), lower_case_fuzzy_matched_fields=False
    )
    new_projection_string = fuzzy_matcher.fuzzy_match_spec_string(
        input_string, "Genai.Aircraft", graph_with_collection_stored_calc_and_enum
    )

    assert ProjectionHandler.from_string(
        new_projection_string, "Genai.Aircraft", graph_with_collection_stored_calc_and_enum
    ) == ProjectionHandler.from_string(
        target_projection_string, "Genai.Aircraft", graph_with_collection_stored_calc_and_enum
    ), f"Expected {new_projection_string=} to be {target_projection_string=}."


FILTER_STRINGS_WITHOUT_THINGS_TO_MATCH = [
    "riskScore > 1",
    "components.alerts.triggeredTimestamp > '2020-01-01 00:00:00'",
    "riskScore > 1 && components.alerts.triggeredTimestamp > '2020-01-01 00:00:00'",
    "isAssignedToPilot == true",
]


def test_match_most_similar_not_called_for_non_string_fields(graph_with_collection_fields):
    fuzzy_matcher = BrokenFuzzyMatcher()
    for filter_ in FILTER_STRINGS_WITHOUT_THINGS_TO_MATCH:
        new_filter = fuzzy_matcher.fuzzy_match_spec_string(filter_, "Genai.Aircraft", graph_with_collection_fields)
        assert ProjectionHandler.from_string(
            new_filter, "Genai.Aircraft", graph_with_collection_fields
        ) == ProjectionHandler.from_string(
            filter_, "Genai.Aircraft", graph_with_collection_fields
        ), f"Expected {new_filter=} to be {filter_=}"

    with pytest.raises(RuntimeError, match="BrokenFuzzyMatcher"):
        fuzzy_matcher.fuzzy_match_spec_string("model.id == 'X123'", "Genai.Aircraft", graph_with_collection_fields)


def _check_expected_call_counts(fuzzy_matcher, expected_call_counts):
    assert (
        fuzzy_matcher.match_most_similar_count == expected_call_counts["match_most_similar"]
    ), f"Expected {fuzzy_matcher.match_most_similar_count=} to be {expected_call_counts['match_most_similar']=}"
    assert (
        fuzzy_matcher.do_match_most_similar_count == expected_call_counts["do_match_most_similar"]
    ), f"Expected {fuzzy_matcher.do_match_most_similar_count=} to be {expected_call_counts['do_match_most_similar']=}"


def test_lru_caching(graph_with_collection_fields):
    fuzzy_matcher = CallCountFuzzyMatcher(match_most_similar_cache_limit=3, fuzzy_match_spec_string_cache_limit=2)
    expected_call_counts = {
        "do_match_most_similar": 0,
        "match_most_similar": 0,
    }
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)

    first_res = fuzzy_matcher.fuzzy_match_spec_string(
        "model.id == 'X123'", "Genai.Aircraft", graph_with_collection_fields
    )
    expected_call_counts["do_match_most_similar"] += 1
    expected_call_counts["match_most_similar"] += 1
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)

    assert (
        fuzzy_matcher.fuzzy_match_spec_string("model.id == 'X123'", "Genai.Aircraft", graph_with_collection_fields)
        == first_res
    )
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)

    # same inner key/literal, but different outer because of extra space
    second_res = fuzzy_matcher.fuzzy_match_spec_string(
        "model.id ==  'X123'", "Genai.Aircraft", graph_with_collection_fields
    )
    assert second_res == first_res
    expected_call_counts["match_most_similar"] += 1
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)

    # new outer key, one of two inner keys is new
    res = fuzzy_matcher.fuzzy_match_spec_string(
        "intersects(model.id, ['X123', 'X-123'])", "Genai.Aircraft", graph_with_collection_fields
    )
    expected_call_counts["do_match_most_similar"] += 1
    expected_call_counts["match_most_similar"] += 1
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)

    # new outer key, neither of two inner keys is new
    fuzzy_matcher.fuzzy_match_spec_string(
        "intersects(model.id, ['X-123', 'X123'])", "Genai.Aircraft", graph_with_collection_fields
    )
    expected_call_counts["match_most_similar"] += 1
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)

    # same outer key as above
    assert (
        fuzzy_matcher.fuzzy_match_spec_string(
            "intersects(model.id, ['X123', 'X-123'])", "Genai.Aircraft", graph_with_collection_fields
        )
        == res
    )
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)

    # same outer key as beginning, but LRU cache should have evicted it. Inner key should be cached
    assert (
        fuzzy_matcher.fuzzy_match_spec_string("model.id == 'X123'", "Genai.Aircraft", graph_with_collection_fields)
        == first_res
    )
    expected_call_counts["match_most_similar"] += 1
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)

    # new target field, should be new cache hits even though target string literal is the same
    assert (
        fuzzy_matcher.fuzzy_match_spec_string("airport.id == 'X123'", "Genai.Aircraft", graph_with_collection_fields)
        != first_res
    )
    expected_call_counts["do_match_most_similar"] += 1
    expected_call_counts["match_most_similar"] += 1
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)

    # another new target field, should be new cache hits even though target string literal is the same
    assert (
        fuzzy_matcher.fuzzy_match_spec_string("airport.id == 'X-123'", "Genai.Aircraft", graph_with_collection_fields)
        != first_res
    )
    expected_call_counts["do_match_most_similar"] += 1
    expected_call_counts["match_most_similar"] += 1
    _check_expected_call_counts(fuzzy_matcher, expected_call_counts)
