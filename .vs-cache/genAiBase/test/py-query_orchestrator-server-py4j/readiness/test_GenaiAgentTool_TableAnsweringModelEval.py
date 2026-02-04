# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import json
import pytest
import pandas as pd

# pylint: disable=redefined-outer-name,use-maxsplit-arg,line-too-long

FILE_NAME = "test_GenaiAgentTool_TableAnsweringModelEval.py"
logger = c3.Logger.for_(FILE_NAME.split(".")[0])


@pytest.fixture(scope="module")
def graph():
    yield c3.Genai.StructuredData.DataModelGraph.forName("readiness_test").toNative()


@pytest.fixture(autouse=True, scope="module")
def set_test_config_params():
    # Save original configs and set the required value
    ## Genai.Agent.Tool.EvalQuery.DefaultConfig
    original_eval_query_tool_default = c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.make().getConfig().evalQueryConfigId
    c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.inst().setConfigValue("evalQueryConfigId", "EvalQuery_default_test")

    yield

    # Set config values back to original
    c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.inst().setConfigValue(
        "evalQueryConfigId", original_eval_query_tool_default
    )


@pytest.fixture(scope="module")
def default_test_spec():
    spec = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig().tableAnsweringModelSpec
    yield spec


@pytest.fixture(scope="module")
def changed_spec_statistics_both(default_test_spec):
    # Turn on the statistics summary for both small and big tables and set the config
    spec = default_test_spec.withShowStatistics("both")
    cfg_eval = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    cfg_eval.setConfigValue("tableAnsweringModelSpec", spec)

    yield spec

    # Set the spec back to the original spec
    cfg_eval.setConfigValue("tableAnsweringModelSpec", default_test_spec)


@pytest.fixture(scope="module")
def changed_spec_row_limit(default_test_spec):
    # Change the row limit to 2 and set the config
    spec = default_test_spec.withMaxRowsForLlmAnswer(2)
    cfg_eval = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    cfg_eval.setConfigValue("tableAnsweringModelSpec", spec)

    yield spec

    # Set the spec back to the original spec
    cfg_eval.setConfigValue("tableAnsweringModelSpec", default_test_spec)


@pytest.fixture(scope="module")
def table_answering_model_input(graph):
    table = pd.DataFrame(
        {
            "id": ["X84", "X08", "X39", "X49", "X05"],
            "riskScore": [0.91, 0.88, 0.87, 0.87, 0.87],
        }
    )
    validated_spec = c3.Genai.StructuredQuery.Spec.make(
        {
            "sourceType": "Genai.Aircraft",
            "spec": {
                "projection": "id, riskScore",
                "order": "descending(riskScore)",
                "limit": 5,
            },
        }
    )
    yield c3.Genai.Agent.Tool.Util.TableAnsweringModel.Input.make(
        {
            "table": table,
            "graph": graph,
            "structuredQuerySpec": validated_spec,
            "query": "What are the top 5 riskiest aircrafts",
        }
    )


@pytest.fixture(scope="module")
def statistics_answer():
    yield "The table has 5 rows and 2 columns.\nriskScore has an average of 0.88, ranging from 0.87 to 0.91.\n"


@pytest.fixture(scope="module")
def expected_keywords():
    yield {
        "X84",
        "X08",
        "X39",
        "X49",
        "X05",
        "riskiest",
        "aircrafts",
        "0.91",
        "0.88",
        "0.87",
    }


@pytest.fixture(scope="module")
def table_answering_model_input_zero_rows(graph):
    table = pd.DataFrame(
        {
            "id": [],
            "riskScore": [],
        }
    )
    validated_spec = c3.Genai.StructuredQuery.Spec.make(
        {
            "sourceType": "Genai.Aircraft",
            "spec": {
                "projection": "id, riskScore",
                "filter": "id == 'B1B'",
            },
        }
    )
    yield c3.Genai.Agent.Tool.Util.TableAnsweringModel.Input.make(
        {
            "table": table,
            "graph": graph,
            "structuredQuerySpec": validated_spec,
            "query": "What is the risk score of the aircraft B1B?",
        }
    )


def test_table_answering_model_eval_query(
    table_answering_model_input, statistics_answer, expected_keywords, default_test_spec
):
    """Test whether the Genai.Agent.Tool.Util.TableAnsweringModel can answer a question"""
    TABLE_ANSWERING_MODEL = c3.Genai.Agent.Tool.Util.TableAnsweringModel()
    output = TABLE_ANSWERING_MODEL.textAnswer(
        input=table_answering_model_input,
        spec=default_test_spec,
    )
    answer = output.output

    # Default Genai.Agent.Tool.Util.TableAnsweringModel.Spec#showStatistics is onlyBigTable,
    # so the statistics summary should not be in the answer.
    assert (
        statistics_answer not in answer
    ), f"Expected statistical summary '{statistics_answer}' not in the answer '{answer}' when {default_test_spec.showStatistics=}, {default_test_spec.maxRowsForLlmAnswer=}, and {table_answering_model_input.table.shape=}."

    match_count = sum(keyword in answer for keyword in expected_keywords)
    assert (
        match_count >= 7
    ), f"Expected at least 7 out of 10 keywords from {expected_keywords} in the answer '{answer}'."


def test_table_answering_model_eval_query_change_config(
    table_answering_model_input, statistics_answer, expected_keywords, changed_spec_statistics_both
):
    """Test whether the Genai.Agent.Tool.Util.TableAnsweringModel can answer a question after changing the config"""
    TABLE_ANSWERING_MODEL = c3.Genai.Agent.Tool.Util.TableAnsweringModel()
    # Turn on the statistics summary for both small and big tables in the spec
    output = TABLE_ANSWERING_MODEL.textAnswer(
        input=table_answering_model_input,
        spec=changed_spec_statistics_both,
    )
    answer = output.output

    # Genai.Agent.Tool.Util.TableAnsweringModel.Spec#showStatistics was set as both,
    # so the statistics summary should exist in the answer.
    assert (
        statistics_answer in answer
    ), f"Expected statistical summary '{statistics_answer}' in the answer '{answer}' when {changed_spec_statistics_both.showStatistics=}, {changed_spec_statistics_both.maxRowsForLlmAnswer=}, and {table_answering_model_input.table.shape=}."

    match_count = sum(keyword in answer for keyword in expected_keywords)
    assert (
        match_count >= 7
    ), f"Expected at least 7 out of 10 keywords from {expected_keywords} in the answer '{answer}'."


def test_table_answering_model_eval_query_zero_row_table(table_answering_model_input_zero_rows, default_test_spec):
    """Test whether the Genai.Agent.Tool.Util.TableAnsweringModel can answer a question"""
    TABLE_ANSWERING_MODEL = c3.Genai.Agent.Tool.Util.TableAnsweringModel()
    output = TABLE_ANSWERING_MODEL.textAnswer(
        input=table_answering_model_input_zero_rows,
        spec=default_test_spec,
    )
    answer = output.output

    # The filter string should be in the answer when the table has zero rows.
    filter_str = table_answering_model_input_zero_rows.structuredQuerySpec.spec["filter"]
    no_row_msg = c3.Translation.getTranslationForLocale("EnterpriseSearch.ErrorMessage.ZeroRowTable", "en")
    assert (
        answer == f"{no_row_msg}{filter_str}."
    ), f"Expected no row table message '{no_row_msg}' and the filter string '{filter_str}' in the answer '{answer}' when {table_answering_model_input.table.shape=}."


@pytest.mark.parametrize("spec", ["default_test_spec", "changed_spec_row_limit"])
def test_table_answering_model_eval_query_log(table_answering_model_input, spec, request):
    """Test whether the Genai.Agent.Tool.Util.TableAnsweringModel can answer a question"""
    # Convert string to fixture value
    spec = request.getfixturevalue(spec)
    TABLE_ANSWERING_MODEL = c3.Genai.Agent.Tool.Util.TableAnsweringModel()
    output = TABLE_ANSWERING_MODEL.textAnswer(input=table_answering_model_input, spec=spec)
    engine_log = output.logs

    processed_table_log = None
    for k, v in engine_log.items():
        if k.startswith("processed_table"):
            # key looks like "processed_table (first N rows)" where N is determined by the row limit
            processed_table_log = v
            break
    assert processed_table_log is not None, f"Expected {processed_table_log=} not to be None"
    if len(table_answering_model_input.table) >= spec.maxRowsForLlmAnswer:
        # When the table is larger than or equal to the row limit, the length of processed table in the log should be the same as the row limit.
        assert (
            len(processed_table_log) == spec.maxRowsForLlmAnswer
        ), f"Expected {len(processed_table_log)=} to be the same as {spec.maxRowsForLlmAnswer=} when {len(table_answering_model_input.table)=} >= {spec.maxRowsForLlmAnswer=}."
    else:
        # When the table is smaller than the row limit, the length of processed table in the log should be the same as the table length.
        assert len(processed_table_log) == len(
            table_answering_model_input.table
        ), f"Expected {len(processed_table_log)=} to be the same as {len(table_answering_model_input.table)=} when {len(table_answering_model_input.table)=} < {spec.maxRowsForLlmAnswer=}."


# TODO: GEN-9847 Made target_rationale not dependent of the llm answer and remove of replace for a regex
TEST_CASES_PREFILTER = [
    (
        "What are the top 5 riskiest aircrafts?",
        "The table has 5 rows and 2 columns.\nriskScore has an average of 0.88, ranging from 0.87 to 0.91.\n\nPlease check the grid for more details.",
        set(
            "The spec and records directly provide the information on the top 5 riskiest aircrafts based on their risk scores, therefore they can be used to answer the query.".lower().split(
                " "
            )
        ),
    ),
    (
        "What does blue raspberry flavour taste like if blue raspberries are not real?",
        "I am unable to answer your question. Please rephrase or add more data.\n\nPlease check the grid for more details.",
        set(
            "The spec and records do not contain any information about blue raspberry flavor, therefore they cannot be used to directly answer the query.".lower().split(
                " "
            )
        ),
    ),
]


@pytest.mark.parametrize("query, target, target_rationale", TEST_CASES_PREFILTER)
def test_pre_filter_big_table_if_irrelevant(
    query, target, target_rationale, table_answering_model_input, default_test_spec
):
    TABLE_ANSWERING_MODEL = c3.Genai.Agent.Tool.Util.TableAnsweringModel()

    output = TABLE_ANSWERING_MODEL.textAnswer(
        input=table_answering_model_input.withField("query", query),
        spec=default_test_spec.withField("maxRowsForLlmAnswer", 2),
    )
    assert output.output == target, f"Expected {output.output=} to be {target=} for {query=}"

    output_rationale = json.loads(output.logs["llm_answer"])["rationale"]
    # TODO: GEN-9847 Made target_rationale not dependent of the llm answer and remove of replace for a regex
    recall_rationale = sum(
        1 for word in target_rationale if word.replace(",", "").replace(".", "") in output_rationale
    ) / len(target_rationale)
    assert recall_rationale > 0.5, f"Expected {recall_rationale=} to be larger than 0.5"
