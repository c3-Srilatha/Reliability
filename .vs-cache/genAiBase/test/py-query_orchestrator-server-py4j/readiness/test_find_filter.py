# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import re
from datetime import datetime, timedelta
import pytest

# pylint: disable=line-too-long, use-maxsplit-arg, unused-argument, disable=too-many-lines

find_filter, DATETIME_FORMAT = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/find_filter.py",
    ["find_filter", "DATETIME_FORMAT"],
)
add_find_filter_tool_to_visual_debugging_graph = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/visual_debugging/find_filter.py",
    ["add_find_filter_tool_to_visual_debugging_graph"],
)

# Import utility functions for testing
(
    _retrieve_most_similar_valid_projections,
    _combine_filter_conditions_and_remove_irrelevant,
    _extract_elements_of_filter,
    _str2datetime,
    _str2num,
    _convert_filter_value_type,
    _find_field_and_target_type,
    _choose_filter_candidates,
) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/find_filter.py",
    [
        "_retrieve_most_similar_valid_projections",
        "_combine_filter_conditions_and_remove_irrelevant",
        "_extract_elements_of_filter",
        "_str2datetime",
        "_str2num",
        "_convert_filter_value_type",
        "_find_field_and_target_type",
        "_choose_filter_candidates",
    ],
)

FILE_NAME = "test_find_filter.py"
logger = c3.Logger.for_(FILE_NAME.split(".")[0])
c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")


QUERY = "What is the risk score and id of the aircraft component with the lowest risk score, belonging to aircraft X-97 and having an id of X67-BB586?"
CURRENT_DATETIME_IN_FILTER_CANDIDATE_PROMPT = re.compile(
    """Assume the current date and time is "([0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2})"""
)

####################################################################
# Shared Mock Classes
####################################################################


class MockDocument:
    """Mock document for testing."""

    def __init__(self, metadata):
        self.sourcePassage = type("obj", (object,), {"metadata": metadata})()


class MockVectorStore:
    """Mock vector store for testing."""

    def __init__(self, passage_count=10, similarity_search_results=None):
        self.passage_count = passage_count
        self._similarity_search_results = similarity_search_results or []

    def passageCount(self):
        return self.passage_count

    def similaritySearch(self, query_dict):
        if self._similarity_search_results:
            return self._similarity_search_results

        # Default behavior for tests that don't specify custom results
        return [
            MockDocument({"projection_type": "Genai.AircraftComponent.id"}),
            MockDocument({"projection_type": "Genai.AircraftComponent.status"}),
        ]


####################################################################
# Test Helper Functions
####################################################################


def create_expected_llm_outputs(
    choose_filter_candidates_output,
    combine_filter_conditions_output,
    find_unique_value_outputs=None,
    filled_prompt_placeholder="filled_prompt_placeholder",
):
    """Create a standardized expected_llm_outputs dictionary for tests."""
    expected_llm_outputs = {
        "_choose_filter_candidates": (
            choose_filter_candidates_output,
            filled_prompt_placeholder,
        ),
        "_combine_filter_conditions_and_remove_irrelevant": (
            combine_filter_conditions_output,
            {"used_expected_llm_outputs": True},
        ),
    }

    if find_unique_value_outputs:
        expected_llm_outputs["find_unique_value"] = find_unique_value_outputs

    return expected_llm_outputs


def create_find_unique_value_entry(
    source_type,
    field_name,
    value,
    operator,
    target_field,
    field_type,
    converted_value,
    exact_match=True,
    semantic_filter=False,
):
    """Create a standardized find_unique_value entry for expected_llm_outputs."""
    key = (source_type, field_name, value, operator, target_field, field_type)
    metadata = {"exact_match": exact_match}
    if semantic_filter:
        metadata["semantic_filter"] = True

    return key, (converted_value, metadata, target_field)


def run_find_filter_test(
    query, source_type, data_model_graph, guide, expected_filter_str=None, expected_llm_outputs=None, **kwargs
):
    """Run a standardized find_filter test with common parameters."""
    filter_prediction, generated_outputs = find_filter(
        query=query,
        source_type=source_type,
        graph=data_model_graph,
        guidance=guide,
        expected_llm_outputs=expected_llm_outputs,
        **kwargs,
    )

    if expected_filter_str:
        assert (
            expected_filter_str == filter_prediction
        ), f"Expected {filter_prediction=} to be equal to {expected_filter_str=}. Where {query=} and {generated_outputs=}."

    return filter_prediction, generated_outputs


def assert_filter_contains_conditions(filter_prediction, *conditions):
    """Assert that filter_prediction contains all specified conditions."""
    for condition in conditions:
        assert condition in filter_prediction, f"Expected '{condition}' to be in filter_prediction: {filter_prediction}"


def assert_filter_excludes_conditions(filter_prediction, *conditions):
    """Assert that filter_prediction excludes all specified conditions."""
    for condition in conditions:
        assert (
            condition not in filter_prediction
        ), f"Expected '{condition}' to not be in filter_prediction: {filter_prediction}"


####################################################################
# Tests
####################################################################


@pytest.mark.skip(reason="TODO GEN-10620: Update this to use gpt4o")
def test_approximate_match_retrieved(data_model_graph, guide):
    query = QUERY
    source_type = "Genai.AircraftComponent"
    targets = ["lowerCase('x97')", "lowerCase('x67_bb586')"]

    filter_prediction, generated_outputs = find_filter(
        query=query,
        source_type=source_type,
        graph=data_model_graph,
        guidance=guide,
    )

    for target in targets:
        assert (
            target in filter_prediction
        ), f"Expected {target=} to be in {filter_prediction=}. Where {query=} and {generated_outputs=}."


def test_default_filter(data_model_graph, dummy_guidance):
    query = QUERY

    default_filter_by_type = {"Genai.Aircraft": "2==2", "Genai.AircraftComponent": "3==3"}
    for source_type, def_filter in default_filter_by_type.items():
        for use_global_default_filter in [True, False]:
            if use_global_default_filter:
                default_filter_to_pass = {}
                target = "1==1"
            else:
                default_filter_to_pass = default_filter_by_type
                target = def_filter

            filter_prediction, generated_outputs = find_filter(
                query=query,
                source_type=source_type,
                graph=data_model_graph,
                default_filter_by_type=default_filter_to_pass,
                # Dummy guidance will cause an error when building the filter, leading to the default filter being used.
                guidance=dummy_guidance,
            )

            assert (
                target == filter_prediction
            ), f"Expected {filter_prediction=} to be equal to {target=}. Where {default_filter_to_pass=}, {query=} and {generated_outputs=}."


def test_time_offset(data_model_graph, dummy_guidance):
    # Create a deterministic test using the todays_date parameter
    fixed_time = datetime(2024, 1, 15, 10, 0, 0)
    fixed_time_str = fixed_time.strftime(DATETIME_FORMAT)

    for offset_hours in [-8, 0, 8]:
        offset = {"hours": offset_hours}
        expected_time = fixed_time + timedelta(**offset)

        _, generated_outputs = find_filter(
            query=QUERY,
            source_type="Genai.AircraftComponent",
            graph=data_model_graph,
            guidance=dummy_guidance,
            default_timezone_offset=offset,
            todays_date=fixed_time_str,  # Use the parameter to control the time
        )

        # Extract time from prompt
        filled_prompt = generated_outputs["choose_filter_candidates"]["filled_choose_filter_candidates_prompt"]
        match = re.search(CURRENT_DATETIME_IN_FILTER_CANDIDATE_PROMPT, filled_prompt)
        if match:
            # Use the real datetime.strptime for parsing
            now_in_prompt = datetime.strptime(match.group(1), DATETIME_FORMAT)
            # Now we can do exact comparison since time is controlled
            assert (
                now_in_prompt == expected_time
            ), f"Expected {expected_time}, got {now_in_prompt} for offset {offset_hours} hours"


def test_semantic_filter(data_model_graph, guide):
    query = "How many aircraft component alerts are related to too old?"
    source_type = "Genai.AircraftComponentAlert"
    metadataPath = "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/find_filter.py"

    variables = {
        metadataPath: {
            "guidance_output": "[(Genai.AircraftComponentAlert.details, contains, too old)]",
            "final_filter": "",
        }
    }

    # Override globals
    c3.Genai.PyUtil.setGlobalVariables(variables)
    filter_prediction, generated_outputs = find_filter(
        query=query,
        source_type=source_type,
        graph=data_model_graph,
        guidance=guide,
        k_field_value_vector_store=100,
        score_threshold_field_value_vector_store=0.57,
        whitelisted_fields_for_embedding_values={"Genai.AircraftComponentAlert": ["details"]},
        operator_among_semantic_filters="&&",
        operator_between_semantic_filters_and_others="&&",
    )

    # Since the removal of the ColBERT field_value_vector_store, this tests is of limited value.
    assert (
        filter_prediction is not None
    ), f"Expected {filter_prediction=} to be non-empty. Where {query=} and {generated_outputs=}."
    c3.Genai.PyUtil.clearGlobalVariables()


def test_field_comparison(data_model_graph, guide):
    query = (
        "Which aircrafts have the latest alert triggered timstamp that is ealier than the latest case created timstamp?"
    )
    expected_filter_str = "latestAlert.triggeredTimestamp <= latestCase.createdTimestamp"
    source_type = "Genai.Aircraft"
    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.Aircraft.latestAlert.triggeredTimestamp, <=, Genai.Aircraft.latestCase.createdTimestamp)]",
        "latestAlert.triggeredTimestamp <= latestCase.createdTimestamp",
        filled_prompt_placeholder="filled_choose_filter_candidates_prompt_placeholder",
    )

    run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        expected_filter_str=expected_filter_str,
        expected_llm_outputs=expected_llm_outputs,
    )


def test_find_filter(metric_agent_intermediate_results):
    graph = add_find_filter_tool_to_visual_debugging_graph(
        intermediate_results=metric_agent_intermediate_results["create_eval_metrics_dict"]["filter"],
    )
    assert any([f"{hash('no_candidates')}" in n.get_name() for n in graph.get_nodes()])


def test_error_handling_paths(data_model_graph, dummy_guidance):
    query = "Test query"
    source_type = "Genai.AircraftComponent"

    filter_prediction, generated_outputs = find_filter(
        query=query,
        source_type=source_type,
        graph=data_model_graph,
        guidance=dummy_guidance,
        use_all_valid_projections=False,
        type_projection_vector_store=None,
    )

    assert filter_prediction == "1==1"


def test_semantic_filtering_with_vector_store(data_model_graph, guide):
    mock_vector_store = MockVectorStore()

    query = "Find components with high risk scores"
    source_type = "Genai.AircraftComponent"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.AircraftComponent.riskScore, >, high)]",
        "riskScore > 8.5",
        find_unique_value_outputs={
            create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "riskScore",
                "high",
                ">",
                "riskScore",
                "float",
                "8.5",
                exact_match=False,
                semantic_filter=True,
            )[0]: create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "riskScore",
                "high",
                ">",
                "riskScore",
                "float",
                "8.5",
                exact_match=False,
                semantic_filter=True,
            )[
                1
            ]
        },
    )

    filter_prediction, generated_outputs = find_filter(
        query=query,
        source_type=source_type,
        graph=data_model_graph,
        guidance=guide,
        field_value_vector_store=mock_vector_store,
        whitelisted_fields_for_embedding_values={"Genai.AircraftComponent": ["riskScore"]},
        k_field_value_vector_store=5,
        score_threshold_field_value_vector_store=0.5,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert filter_prediction is not None


def test_filter_condition_combinations(data_model_graph, guide):
    query = "Find aircraft with multiple conditions"
    source_type = "Genai.Aircraft"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.Aircraft.id, ==, X001), (Genai.Aircraft.status, ==, active)]",
        "id == 'X001' && status == 'active'",
        find_unique_value_outputs={
            create_find_unique_value_entry("Genai.Aircraft", "id", "X001", "==", "id", "string", "'X001'")[
                0
            ]: create_find_unique_value_entry("Genai.Aircraft", "id", "X001", "==", "id", "string", "'X001'")[1],
            create_find_unique_value_entry("Genai.Aircraft", "status", "active", "==", "status", "string", "'active'")[
                0
            ]: create_find_unique_value_entry(
                "Genai.Aircraft", "status", "active", "==", "status", "string", "'active'"
            )[
                1
            ],
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert_filter_contains_conditions(filter_prediction, "id == 'X001'", "status == 'active'")


def test_type_conversion_edge_cases(data_model_graph, guide):
    query = "Test type conversions"
    source_type = "Genai.AircraftComponent"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.AircraftComponent.riskScore, ==, 5.5), (Genai.AircraftComponent.createdDate, ==, 2023-01-01)]",
        "riskScore == 5.5 && createdDate == '2023-01-01 00:00:00'",
        find_unique_value_outputs={
            create_find_unique_value_entry(
                "Genai.AircraftComponent", "riskScore", "5.5", "==", "riskScore", "float", "5.5"
            )[0]: create_find_unique_value_entry(
                "Genai.AircraftComponent", "riskScore", "5.5", "==", "riskScore", "float", "5.5"
            )[
                1
            ],
            create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "createdDate",
                "2023-01-01",
                "==",
                "createdDate",
                "datetime",
                "'2023-01-01 00:00:00'",
            )[0]: create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "createdDate",
                "2023-01-01",
                "==",
                "createdDate",
                "datetime",
                "'2023-01-01 00:00:00'",
            )[
                1
            ],
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert filter_prediction is not None


def test_field_validation_logic(data_model_graph, guide):
    query = "Test invalid field handling"
    source_type = "Genai.Aircraft"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.Aircraft.invalidField, ==, test), (Genai.Aircraft.validField, ==, test)]",
        "validField == 'test'",
        find_unique_value_outputs={
            create_find_unique_value_entry(
                "Genai.Aircraft", "validField", "test", "==", "validField", "string", "'test'"
            )[0]: create_find_unique_value_entry(
                "Genai.Aircraft", "validField", "test", "==", "validField", "string", "'test'"
            )[
                1
            ],
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert_filter_excludes_conditions(filter_prediction, "invalidField")
    assert_filter_contains_conditions(filter_prediction, "validField")


def test_blacklist_fields_functionality(data_model_graph, guide):
    query = "Test blacklisted fields"
    source_type = "Genai.AircraftComponent"

    blacklist_fields = {"Genai.AircraftComponent": ["Genai.AircraftComponent.riskScore"]}

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.AircraftComponent.riskScore, ==, high), (Genai.AircraftComponent.id, ==, X001)]",
        "id == 'X001'",
        find_unique_value_outputs={
            create_find_unique_value_entry("Genai.AircraftComponent", "id", "X001", "==", "id", "string", "'X001'")[
                0
            ]: create_find_unique_value_entry("Genai.AircraftComponent", "id", "X001", "==", "id", "string", "'X001'")[
                1
            ],
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        blacklist_fields=blacklist_fields,
        expected_llm_outputs=expected_llm_outputs,
    )

    # Should exclude blacklisted fields
    assert_filter_excludes_conditions(filter_prediction, "riskScore")
    assert_filter_contains_conditions(filter_prediction, "id")


def test_use_all_valid_projections(data_model_graph, guide):
    query = "Test all valid projections"
    source_type = "Genai.AircraftComponent"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.AircraftComponent.id, ==, X001)]",
        "id == 'X001'",
        find_unique_value_outputs={
            create_find_unique_value_entry("Genai.AircraftComponent", "id", "X001", "==", "id", "string", "'X001'")[
                0
            ]: create_find_unique_value_entry("Genai.AircraftComponent", "id", "X001", "==", "id", "string", "'X001'")[
                1
            ],
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        use_all_valid_projections=True,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert filter_prediction is not None


def test_empty_filter_conditions(data_model_graph, guide):
    query = "Test empty filter conditions"
    source_type = "Genai.AircraftComponent"

    expected_llm_outputs = {
        "_choose_filter_candidates": (
            "[]",
            "filled_prompt_placeholder",
        ),
    }

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert filter_prediction == "1==1"


def test_semantic_filter_conditions(data_model_graph, guide):
    query = "Test semantic filtering"
    source_type = "Genai.AircraftComponent"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.AircraftComponent.id, in, [X001, X002, X003])]",
        "intersects(id, ['X001', 'X002', 'X003'])",
        find_unique_value_outputs={
            create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "id",
                "X001",
                "in",
                "id",
                "string",
                ["X001", "X002", "X003"],
                exact_match=False,
                semantic_filter=True,
            )[0]: create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "id",
                "X001",
                "in",
                "id",
                "string",
                ["X001", "X002", "X003"],
                exact_match=False,
                semantic_filter=True,
            )[
                1
            ]
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert "intersects(id, [" in filter_prediction


def test_equivalent_filters_handling(data_model_graph, guide):
    query = "Test equivalent filters"
    source_type = "Genai.Aircraft"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.Aircraft.fieldA, <=, Genai.Aircraft.fieldB), (Genai.Aircraft.fieldB, >=, Genai.Aircraft.fieldA)]",
        "fieldA <= fieldB",  # Should only keep one equivalent filter
        find_unique_value_outputs={
            create_find_unique_value_entry("Genai.Aircraft", "fieldA", "fieldB", "<=", "fieldA", "string", "fieldB")[
                0
            ]: create_find_unique_value_entry("Genai.Aircraft", "fieldA", "fieldB", "<=", "fieldA", "string", "fieldB")[
                1
            ],
            create_find_unique_value_entry("Genai.Aircraft", "fieldB", "fieldA", ">=", "fieldB", "string", "fieldA")[
                0
            ]: create_find_unique_value_entry("Genai.Aircraft", "fieldB", "fieldA", ">=", "fieldB", "string", "fieldA")[
                1
            ],
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert filter_prediction.count("fieldA") == 1
    assert filter_prediction.count("fieldB") == 1


def test_contains_operation(data_model_graph, guide):
    query = "Test contains operation"
    source_type = "Genai.AircraftComponent"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.AircraftComponent.description, contains, critical)]",
        "contains(description, 'critical')",
        find_unique_value_outputs={
            create_find_unique_value_entry(
                "Genai.AircraftComponent", "description", "critical", "contains", "description", "string", "'critical'"
            )[0]: create_find_unique_value_entry(
                "Genai.AircraftComponent", "description", "critical", "contains", "description", "string", "'critical'"
            )[
                1
            ]
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert "contains(description, 'critical')" in filter_prediction


def test_custom_operators(data_model_graph, guide):
    query = "Test custom operators"
    source_type = "Genai.AircraftComponent"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.AircraftComponent.id, ==, X001), (Genai.AircraftComponent.status, ==, active)]",
        "id == 'X001' || status == 'active'",
        find_unique_value_outputs={
            create_find_unique_value_entry("Genai.AircraftComponent", "id", "X001", "==", "id", "string", "'X001'")[
                0
            ]: create_find_unique_value_entry("Genai.AircraftComponent", "id", "X001", "==", "id", "string", "'X001'")[
                1
            ],
            create_find_unique_value_entry(
                "Genai.AircraftComponent", "status", "active", "==", "status", "string", "'active'"
            )[0]: create_find_unique_value_entry(
                "Genai.AircraftComponent", "status", "active", "==", "status", "string", "'active'"
            )[
                1
            ],
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        operator_among_semantic_filters="||",
        operator_between_semantic_filters_and_others="||",
        expected_llm_outputs=expected_llm_outputs,
    )

    assert "||" in filter_prediction


def test_todays_date_parameter(data_model_graph, guide):
    query = "Test with specific date"
    source_type = "Genai.AircraftComponent"
    todays_date = "2023-12-01 10:30:00"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.AircraftComponent.createdDate, ==, 2023-12-01)]",
        "createdDate == '2023-12-01 00:00:00'",
        find_unique_value_outputs={
            create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "createdDate",
                "2023-12-01",
                "==",
                "createdDate",
                "datetime",
                "'2023-12-01 00:00:00'",
            )[0]: create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "createdDate",
                "2023-12-01",
                "==",
                "createdDate",
                "datetime",
                "'2023-12-01 00:00:00'",
            )[
                1
            ]
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        todays_date=todays_date,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert filter_prediction is not None


def test_invalid_timezone_offset(data_model_graph, dummy_guidance):
    query = "Test invalid timezone"
    source_type = "Genai.AircraftComponent"

    with pytest.raises(AssertionError):
        find_filter(
            query=query,
            source_type=source_type,
            graph=data_model_graph,
            guidance=dummy_guidance,
            default_timezone_offset={"invalid_key": 1},
        )


def test_duplicate_semantic_filter_values(data_model_graph, guide):
    query = "Test duplicate semantic values"
    source_type = "Genai.AircraftComponent"

    expected_llm_outputs = create_expected_llm_outputs(
        "[(Genai.AircraftComponent.riskScore, ==, high), (Genai.AircraftComponent.riskScore, ==, high)]",
        "riskScore == 8.5",
        find_unique_value_outputs={
            create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "riskScore",
                "high",
                "==",
                "riskScore",
                "float",
                "8.5",
                exact_match=False,
                semantic_filter=True,
            )[0]: create_find_unique_value_entry(
                "Genai.AircraftComponent",
                "riskScore",
                "high",
                "==",
                "riskScore",
                "float",
                "8.5",
                exact_match=False,
                semantic_filter=True,
            )[
                1
            ]
        },
    )

    filter_prediction, _ = run_find_filter_test(
        query=query,
        source_type=source_type,
        data_model_graph=data_model_graph,
        guide=guide,
        expected_llm_outputs=expected_llm_outputs,
    )

    assert filter_prediction is not None


def test_str2num():
    result = _str2num("5", "int")
    assert result == 5

    result = _str2num("5.5", "float")
    assert result == 5.5

    result = _str2num("five", "int")
    assert result == 5

    result = _str2num("invalid", "int")
    assert result == ""

    result = _str2num("test", "string")
    assert result == ""


def test_str2num_exception_handling():
    result = _str2num("invalid_float", "float")
    assert result == ""

    result = _str2num("not_a_number", "float")
    assert result == ""

    result = _str2num("invalid_double", "double")
    assert result == ""

    result = _str2num("invalid_decimal", "decimal")
    assert result == ""


def test_str2datetime_exception_handling():
    result = _str2datetime("invalid_datetime_format")
    assert result == "None"

    result = _str2datetime(None)
    assert result == ""

    result = _str2datetime("")
    assert result == "None"


def test_convert_filter_value_type_exception_handling(data_model_graph):
    field_types = ["datetime"]
    values = ["invalid_datetime"]

    converted_values = _convert_filter_value_type(field_types, values, data_model_graph)
    assert converted_values[0] == "None"

    field_types = ["float"]
    values = ["invalid_number"]

    converted_values = _convert_filter_value_type(field_types, values, data_model_graph)
    assert converted_values[0] == ""


def test_convert_filter_value_type_actual_exception_handling(data_model_graph):
    field_types = ["int"]
    values = ["not_a_number_at_all"]

    converted_values = _convert_filter_value_type(field_types, values, data_model_graph)
    assert converted_values[0] == ""


def test_convert_filter_value_type_field_validation(data_model_graph):
    field_types = ["string"]
    values = ["Genai.InvalidType.invalidField"]

    converted_values = _convert_filter_value_type(field_types, values, data_model_graph)
    assert converted_values[0] == "Genai.InvalidType.invalidField"

    field_types = ["string"]
    values = ["simpleField"]

    converted_values = _convert_filter_value_type(field_types, values, data_model_graph)
    assert converted_values[0] == "simpleField"


def test_find_field_and_target_type_exception_handling(data_model_graph):
    field_name, field_type, target_type = _find_field_and_target_type(data_model_graph, "InvalidType", "field")
    assert field_name is None
    assert field_type is None
    assert target_type is None

    field_name, field_type, target_type = _find_field_and_target_type(
        data_model_graph, "Genai.AircraftComponent", "invalidField.invalidSubField"
    )
    assert field_name is None
    assert field_type is None
    assert target_type is None

    field_name, field_type, target_type = _find_field_and_target_type(
        data_model_graph, "Genai.AircraftComponent", "nonExistentField"
    )
    assert field_name is None
    assert field_type is None
    assert target_type is None


def test_extract_elements_of_filter():
    s = "(Genai.Aircraft.id, ==, X001), (Genai.Aircraft.status, ==, active)"
    filter_paths, filter_operations, filter_values = _extract_elements_of_filter(s)

    assert filter_paths == ["Genai.Aircraft.id", "Genai.Aircraft.status"]
    assert filter_operations == ["==", "=="]
    assert filter_values == ["X001", "active"]

    s = ""
    filter_paths, filter_operations, filter_values = _extract_elements_of_filter(s)

    assert filter_paths == []
    assert filter_operations == []
    assert filter_values == []


def test_convert_filter_value_type(data_model_graph):
    field_types = ["datetime", "int", "float", "string"]
    values = ["2023-12-01 10:30:00", "5", "5.5", "test"]

    converted_values = _convert_filter_value_type(field_types, values, data_model_graph)

    assert len(converted_values) == 4
    assert converted_values[0] == "2023-12-01 10:30:00"
    assert converted_values[1] == 5
    assert converted_values[2] == 5.5
    assert converted_values[3] == "test"

    with pytest.raises(ValueError):
        _convert_filter_value_type(["int"], [1, 2], data_model_graph)


def test_find_field_and_target_type(data_model_graph):
    field_name, field_type, target_type = _find_field_and_target_type(data_model_graph, "Genai.AircraftComponent", "id")

    assert field_name is not None
    assert field_type is not None
    assert target_type is not None

    field_name, field_type, target_type = _find_field_and_target_type(
        data_model_graph, "Genai.AircraftComponent", "invalidField"
    )

    assert field_name is None
    assert field_type is None
    assert target_type is None


def test_combine_filter_conditions_and_remove_irrelevant(guide):
    query = "Test query"
    filter_conditions = ["id == 'X001'", "status == 'active'"]
    source_type = "Genai.Aircraft"
    keep_relevant_filters_prompt = "Test prompt"

    filter_answer, generated_outputs = _combine_filter_conditions_and_remove_irrelevant(
        query=query,
        filter_conditions=filter_conditions,
        source_type=source_type,
        guidance=guide,
        keep_relevant_filters_prompt=keep_relevant_filters_prompt,
    )

    assert filter_answer is not None
    assert generated_outputs is not None


def test_combine_filter_conditions_exception_handling(guide):
    query = "Test query"
    filter_conditions = ["invalid filter syntax"]
    source_type = "Genai.Aircraft"
    keep_relevant_filters_prompt = "Test prompt"

    filter_answer, generated_outputs = _combine_filter_conditions_and_remove_irrelevant(
        query=query,
        filter_conditions=filter_conditions,
        source_type=source_type,
        guidance=guide,
        keep_relevant_filters_prompt=keep_relevant_filters_prompt,
    )

    assert filter_answer == ""


def test_retrieve_most_similar_valid_projections():
    mock_vector_store = MockVectorStore()
    valid_projections = {"Genai.AircraftComponent.id", "Genai.AircraftComponent.status"}

    documents = _retrieve_most_similar_valid_projections(
        query="Test query",
        vectorstore=mock_vector_store,
        valid_projections=valid_projections,
        n_retrieved_projections=2,
    )

    assert len(documents) == 2


def test_retrieve_most_similar_valid_projections_with_list():
    mock_vector_store = MockVectorStore()
    valid_projections = ["Genai.AircraftComponent.id", "Genai.AircraftComponent.status"]
    documents = _retrieve_most_similar_valid_projections(
        query="Test query",
        vectorstore=mock_vector_store,
        valid_projections=valid_projections,
        n_retrieved_projections=2,
    )
    assert len(documents) == 2
