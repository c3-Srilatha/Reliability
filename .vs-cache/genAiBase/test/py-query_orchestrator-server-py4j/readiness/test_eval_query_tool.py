# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import json
from copy import deepcopy
from unittest.mock import patch
import pandas as pd
import pytest

# pylint: disable=unused-argument,redefined-outer-name, unused-variable

EvalSpecHandler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/eval_spec_handler.py",
    ["EvalSpecHandler"],
)

FieldOnType = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/__init__.py",
    ["FieldOnType"],
)

TEST_FILE_NAME = "test_eval_query_tool.py"


TARGET_SPEC = {
    "sourceType": "Genai.Aircraft",
    "spec": {
        "filter": "'San Francisco' == location.city",
        "order": "",
        "projection": "count()",
        "group": "",
        "interval": "DAY",
        "timeZone": {"name": "NONE"},
    },
}


FUZZY_MATCHER_SPEC = {"techniqueKwargs": {"lower_case_fuzzy_matched_fields": False}}


@pytest.fixture(scope="function")
def in_progress_result():
    query = "How many Aircrafts are there in San Francisco?"
    inProgressResult = (
        c3.Genai.Query.Result(
            id=f"test_eval_query_tool_{c3.Str.randomSuffix()}",
            searchQuery=c3.Genai.Query.fromString(
                query,
            ),
        )
        .upsert()
        .get()
    )
    yield inProgressResult

    results_to_remove = list(inProgressResult.get("childResults").childResults)
    results_to_remove.append(inProgressResult)
    c3.Genai.Query.Result.removeBatch(results_to_remove)


@pytest.fixture(scope="module", autouse=True)
def template_prompt():
    prompt = c3.TestApi.upsertDefaultEvalSpecGenerationPrompt()

    yield prompt

    prompt.remove()


@pytest.fixture(scope="module", autouse=True)
def data_model_graph():
    yield c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig().dataModelGraph


@pytest.fixture(autouse=True, scope="module")
def set_test_config_params():
    # Save original configs and set the required value
    ## Genai.Agent.Tool.EvalQuery.DefaultConfig
    original_eval_query_tool_default = c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.make().getConfig().evalQueryConfigId
    c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.inst().setConfigValue("evalQueryConfigId", "EvalQuery_default_test")

    ## Genai.Agent.Tool.EvalQuery
    tool_config = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    assert tool_config.id == "EvalQuery_default_test"
    original_tool_config_params = tool_config.getConfig().toJson()

    tool_config.setConfigValues(original_tool_config_params)
    c3.TestApi.setMisConfig()

    yield

    c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.inst().setConfigValue(
        "evalQueryConfigId", original_eval_query_tool_default
    )


@pytest.fixture
def fuzzy_matcher_spec():
    spec = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig().fuzzyMatcherSpec
    yield spec
    c3.Genai.Agent.Tool.EvalQuery.Config.inst().setConfigValue("fuzzyMatcherSpec", spec)


def _check_eval_spec(actual_eval_spec, expected_eval_spec, native_graph):
    output_spec = EvalSpecHandler.from_spec(
        spec=actual_eval_spec["spec"], source_type=actual_eval_spec["sourceType"], graph=native_graph
    )
    target_spec = EvalSpecHandler.from_spec(
        spec=expected_eval_spec["spec"], source_type=expected_eval_spec["sourceType"], graph=native_graph
    )
    assert output_spec == target_spec, f"Expected {str(output_spec)=} to be {str(target_spec)=}."


def _check_structured_source(in_progress_result, target_spec, native_graph):
    structured_source_relations = in_progress_result.get("sourceRelations.this").sourceRelations
    assert (
        len(structured_source_relations) == 1
    ), f"Expected 1 source relation but got {len(structured_source_relations)}"
    relation = structured_source_relations[0]
    spec_from_relation = relation.get("to.structuredQuerySpec").to.structuredQuerySpec
    _check_eval_spec(spec_from_relation.toJson(), target_spec, native_graph)
    return relation


@pytest.mark.parametrize("do_fuzzy_matching", [True, False])
def test_eval_query_tool(in_progress_result, do_fuzzy_matching, fuzzy_matcher_spec, ctx):
    eval_query_tool = c3.Genai.Agent.Tool.EvalQuery.make({"id": "EvalQuery_default_test"})
    with patch.object(FieldOnType, "return_sample_unique_values") as sample_values_patch:
        assert sample_values_patch.call_count == 0
        sample_values_patch.side_effect = None

        def do_test(in_progress_result, do_fuzzy_matching, initialize_tool=True):
            config = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
            assert (
                len(in_progress_result.allSources()) == 0
            ), f"Should not be any source relations before retrieveData, but got {len(in_progress_result.allSources())}"
            if do_fuzzy_matching:
                config.setConfigValue("fuzzyMatcherSpec", FUZZY_MATCHER_SPEC)
            else:
                config.clearConfigValue("fuzzyMatcherSpec")

            native_graph = config.dataModelGraph.toNative()
            if initialize_tool:
                eval_query_tool.initialize(True)
            pre_run_call_count = sample_values_patch.call_count

            expected_logs_keys = ["SpecProcessor", "TableAnswering", "SpecGenerationModel"]
            if do_fuzzy_matching:
                expected_logs_keys.append("FuzzyMatching")
                in_progress_result = in_progress_result.withSearchQuery(
                    c3.Genai.Query.fromString(
                        in_progress_result.searchQuery.rawQuery.replace("San Francisco", "Sn Frncisco")
                    )
                )

            tool_output = eval_query_tool.run(in_progress_result.searchQuery.rawQuery, in_progress_result)

            # c3.log().info(f"Engine log: {tool_output.inProgressResult.engineLog}")  # un-comment for local debugging
            structured_query_spec = tool_output.structuredQuerySpec.toJson()

            _check_eval_spec(structured_query_spec, TARGET_SPEC, native_graph)
            _check_structured_source(in_progress_result, TARGET_SPEC, native_graph)
            assert "25 aircrafts in san francisco" in tool_output.output.lower(), f"{tool_output.output=}"

            engine_log = json.loads(tool_output.inProgressResult.engineLog)
            assert all(
                key in engine_log.keys() for key in expected_logs_keys
            ), f"Expected all keys in {sorted(expected_logs_keys)=} to be present in {sorted(engine_log.keys())=}"

            if not do_fuzzy_matching:
                # fuzzy matcher's use of return_sample_unique_values is tested in fuzzy matcher tests
                # this is to test usage by the eval query tool itself (and the reflexion_agent used within)
                post_run_call_count = sample_values_patch.call_count
                assert (
                    post_run_call_count == pre_run_call_count
                ), "buildDataModelDocumentation should not be called on subsequent queries."

        do_test(in_progress_result, do_fuzzy_matching)
        new_res = c3.Genai.Query.Result(searchQuery=in_progress_result.searchQuery).upsert().get()
        try:
            do_test(
                new_res,
                do_fuzzy_matching,
                initialize_tool=False,
            )
        finally:
            new_res.remove()


def test_data_model_graph_update():
    tool_config = c3.Genai.Agent.Tool.EvalQuery.Config.inst()
    data_model_graph = tool_config.dataModelGraph.get()

    original_whitelisted_data_model = data_model_graph.whitelistedDataModel
    original_graph_file_url = data_model_graph.graphFile.url
    assert "metrics" in original_whitelisted_data_model["Genai.Aircraft"]

    # Delete one entry from the original whitelist
    target_whitelisted_data_model = deepcopy(original_whitelisted_data_model)
    target_whitelisted_data_model["Genai.Aircraft"].pop("metrics")

    # Update white list
    tool_config.updateDataModelGraph(target_whitelisted_data_model)
    data_model_graph = data_model_graph.get()
    assert data_model_graph.whitelistedDataModel == target_whitelisted_data_model
    assert data_model_graph.graphFile.url == original_graph_file_url

    # Set whitelist back to original values
    tool_config.updateDataModelGraph(original_whitelisted_data_model)
    data_model_graph = data_model_graph.get()
    assert data_model_graph.whitelistedDataModel == original_whitelisted_data_model
    assert data_model_graph.graphFile.url == original_graph_file_url


def test_eval_query_tool_util_process_spec():
    config = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    query = "How many Aircrafts are there in San Francisco?"
    structured_query_spec = TARGET_SPEC
    tool_output = c3.Genai.Agent.Tool.Util.processSpec(
        spec=c3.Genai.Agent.Tool.Util.ProcessSpec(
            input=query,
            specProcessorType="Genai.Agent.Tool.Util.EvalQuery.SpecProcessor",
            structuredQuerySpec=structured_query_spec,
            dataModelGraph=config.dataModelGraph,
            nativeDataModelGraph=config.dataModelGraph.toNative(),
            tableAnsweringModelSpec=config.tableAnsweringModelSpec,
            specProcessorSpec=config.specProcessorSpec,
            doNotUseLlm=False,
            toolId=config.id,
        )
    )

    assert "25 aircrafts in san francisco" in tool_output.output.answer.lower(), f"{tool_output.output.answer=}"


def _compare_structured_query_specs(expected, actual):
    assert (
        expected["sourceType"] == actual["sourceType"]
    ), f"Expected sourceType to be {expected['sourceType']=}. {actual=}"
    assert (
        c3.EvalSpec(**actual["spec"]).withDefaults() == c3.EvalSpec(**expected["spec"]).withDefaults()
    ), f"Expected {actual.spec=} to be {expected['spec']}."


def test_eval_query_tool_util_process_spec_with_invalid_spec():
    config = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    query = "How many Aircrafts are there in San Francisco?"
    structured_query_spec = {
        "sourceType": "Genai.Aircraft",
        "spec": {
            "filter": "'San Francisco' == location.city",
            "order": "",
            "projection": "count(), location",
            "group": "location.city",
            "interval": "DAY",
            "timeZone": {"name": "NONE"},
        },
    }
    tool_output = c3.Genai.Agent.Tool.Util.processSpec(
        spec=c3.Genai.Agent.Tool.Util.ProcessSpec(
            input=query,
            specProcessorType="Genai.Agent.Tool.Util.EvalQuery.SpecProcessor",
            structuredQuerySpec=structured_query_spec,
            dataModelGraph=config.dataModelGraph,
            nativeDataModelGraph=config.dataModelGraph.toNative(),
            tableAnsweringModelSpec=config.tableAnsweringModelSpec,
            specProcessorSpec=config.specProcessorSpec,
            doNotUseLlm=False,
        )
    )

    _compare_structured_query_specs(structured_query_spec, tool_output.output.structuredQuerySpec.toJson())
    assert tool_output.output.answer == c3.Translation.getTranslationForLocale(
        "EnterpriseSearch.Tool.DefaultInvalidQueryAnswer", "en"
    ), f"Tool output answer for invalid spec is not the expected message: {tool_output.output.answer=}"


def test_retrieve_data(in_progress_result, ctx):
    eval_query_tool = c3.Genai.Agent.Tool.EvalQuery.make({"id": "EvalQuery_default_test"})
    config = eval_query_tool.config()
    structured_source_relations = in_progress_result.allSources()
    assert (
        len(structured_source_relations) == 0
    ), f"Should not be any source relations before retrieveData, but got {len(structured_source_relations)}"

    native_graph = config.dataModelGraph.toNative()

    retrieve_data_output = eval_query_tool.retrieveData(
        spec=c3.Genai.Agent.Tool.DataRetriever.RetrieveDataSpec(
            input=in_progress_result.searchQuery.standaloneQuery, inProgressResult=in_progress_result
        )
    )
    assert retrieve_data_output.data is not None, "retrieveData output should not be None"
    data = retrieve_data_output.data
    assert isinstance(
        data.table, pd.DataFrame
    ), f"retrieveData output table should be a DataFrame but was {type(data.table)}"
    assert isinstance(
        data.structuredQuerySpec, c3.Genai.StructuredQuery.Spec
    ), f"retrieveData output structuredQuerySpec \
         should be a StructuredQuery.Spec but was {type(data.structuredQuerySpec)}"

    _check_eval_spec(data.structuredQuerySpec.toJson(), TARGET_SPEC, native_graph)

    _check_structured_source(in_progress_result, TARGET_SPEC, native_graph)


def test_format_data(in_progress_result, fuzzy_matcher_spec, ctx):
    eval_query_tool = c3.Genai.Agent.Tool.EvalQuery.make({"id": "EvalQuery_default_test"})
    config = eval_query_tool.config()
    config.setConfigValue("fuzzyMatcherSpec", FUZZY_MATCHER_SPEC)
    eval_query_tool.initialize(True)

    native_graph = config.dataModelGraph.toNative()

    child_result = in_progress_result.createChildResult(toolId=eval_query_tool.id)
    retrieve_data_output = eval_query_tool.retrieveData(
        spec=c3.Genai.Agent.Tool.DataRetriever.RetrieveDataSpec(
            input=child_result.searchQuery.standaloneQuery, inProgressResult=child_result
        )
    )

    all_source_relations = c3.Genai.Query.Result.Relation.cloneRelationsToParent(in_progress_result)

    formatted_data = eval_query_tool.formatData(
        c3.Genai.Agent.Tool.DataRetriever.FormatDataSpec(
            retrieveDataOutput=retrieve_data_output,
            inProgressResult=child_result,
            input=in_progress_result.searchQuery.standaloneQuery,
        )
    )

    source_relation = _check_structured_source(in_progress_result, TARGET_SPEC, native_graph)

    assert formatted_data is not None and formatted_data.strip(), "formatData output should not be empty"
    assert (
        formatted_data.count(source_relation.llmCitationId) == 3
    ), f"The citation id should appear 3 times in {formatted_data=}"
    assert "25" in formatted_data and "count" in formatted_data, f"the table should be in {formatted_data=}"
    assert TARGET_SPEC["sourceType"] in formatted_data, f"{TARGET_SPEC['sourceType']=} should be in {formatted_data=}"
    assert (
        TARGET_SPEC["spec"]["filter"] in formatted_data
    ), f"{TARGET_SPEC['spec']['filter']=} should be in {formatted_data=}"
    assert (
        "Can be used to answer questions related to aircraft" in formatted_data
    ), f"sourceType type doc should be in {formatted_data=}"


def test_postProcessQueryResult(in_progress_result, ctx):
    eval_query_tool = c3.Genai.Agent.Tool.EvalQuery.make({"id": "EvalQuery_default_test"})
    in_progress_result = eval_query_tool.postProcessQueryResult(in_progress_result).get("statusHistory.status")
    assert len(in_progress_result.statusHistory) == 1
    assert in_progress_result.statusHistory.last().status == c3.Genai.Query.Result.InterimStatusEnum.COMPLETED

    # Ensure additional completed status is not added on second call
    in_progress_result = eval_query_tool.postProcessQueryResult(in_progress_result).get("statusHistory.status")
    assert len(in_progress_result.statusHistory) == 1
    assert in_progress_result.statusHistory.last().status == c3.Genai.Query.Result.InterimStatusEnum.COMPLETED
