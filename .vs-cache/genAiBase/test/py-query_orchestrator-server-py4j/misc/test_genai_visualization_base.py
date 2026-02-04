# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = line-too-long

import pytest
import pandas as pd


# pylint: disable=redefined-outer-name, unused-argument
@pytest.fixture(scope="module")
def query_result(ctx):
    queryResultStructuredReasoning = c3.TestApi.upsertEntity(
        ctx,
        "Genai.Query.Result",
        {
            "searchQuery": c3.Genai.Query.fromString("test query structured reasoning"),
        },
    )
    yield queryResultStructuredReasoning


@pytest.fixture(scope="module")
def df():
    yield pd.DataFrame(
        {
            "numbers": [1, 2],
            "strings": ["test 1", "test 2"],
        }
    )


@pytest.fixture(scope="module")
def source_relation(query_result, df):
    structuredReasoningOutput = c3.Genai.Agent.Tool.StructuredDataQueryPy.Output.make(
        {
            "inProgressResult": query_result,
            "data": df,
            "structuredQuerySpecs": [
                c3.Genai.StructuredQuery.Spec.make(
                    {
                        "sourceType": c3.Genai.Query.Result,
                        "spec": c3.EvalSpec.make(),
                    }
                )
            ],
        }
    )

    sourceRelation = c3.Genai.Query.Result.Source.StructuredData.PythonAgent.createPyAgentSourceAndRelation(
        structuredReasoningOutput
    )
    yield sourceRelation
    sourceRelation.remove()


def test_getVisualizationDataFromSpec(source_relation):
    visualizationData = c3.GenAiVisualizationBase.getVisualizationDataFromSpec(
        "Genai.Query.Result", c3.EvalSpec.make(), source_relation
    )
    assert sorted(list(visualizationData.columnNames)) == ["numbers", "strings"]
    assert list(visualizationData.data) == [{"numbers": 1, "strings": "test 1"}, {"numbers": 2, "strings": "test 2"}]
