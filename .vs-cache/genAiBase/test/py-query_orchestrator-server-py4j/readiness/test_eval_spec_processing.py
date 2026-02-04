# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

TEST_FILE_NAME = "test_eval_spec_processing.py"


@pytest.fixture(scope="module", autouse=True)
def config():
    c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.inst().setConfigValue("evalQueryConfigId", "EvalQuery_default")
    config = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    original_spec_processor_spec = config.specProcessorSpec
    yield config
    config.setConfigValue("specProcessorSpec", original_spec_processor_spec)


@pytest.fixture(scope="module")
def graph(config):
    graph = config.dataModelGraph
    if not graph:
        graph = c3.TestApi.upsertReadinessDataModelGraph()
    yield graph


@pytest.fixture(scope="function")
def eval_spec_processor_args_with_lambda_default_projection():
    def pre_processor(evalSpec: c3.Genai.StructuredQuery.Spec, args: dict) -> c3.Genai.StructuredQuery.Spec:
        default_projection_dict = args["default_projection_dict"]
        if isinstance(evalSpec.spec, dict):
            spec = evalSpec.spec
        else:
            spec = evalSpec.spec.toJson()
        current_projections = spec["projection"]
        source_type = evalSpec.sourceType
        default_projections = default_projection_dict.get(str(source_type), [])
        modified_projections = [x.strip() for x in current_projections.split(",")]
        modified_projections.extend(default_projections)
        modified_projections = ", ".join(set(modified_projections))
        spec["projection"] = modified_projections
        evalSpec = evalSpec.withSpec(type(evalSpec.spec)(**spec))

        return evalSpec

    yield {
        "preProcessLambda": c3.Lambda.fromPyFunc(pre_processor),
        "preProcessLambdaArgs": {"default_projection_dict": {"Genai.Aircraft": ["model", "location", "status"]}},
    }


@pytest.fixture(scope="function")
def eval_spec_processor_args_with_postProcess_lambda():
    def post_processor(table, sourceType, graph, args) -> c3.Genai.StructuredQuery.Spec:
        import pandas as pd

        table = pd.DataFrame(0, columns=table.columns, index=table.index)
        return table

    yield {
        "postProcessLambda": c3.Lambda.fromPyFunc(post_processor),
    }


BASE_SPEC = {"projection": "riskScore, (location.latitude + location.longitude)"}

EXAMPLES = [
    (BASE_SPEC, BASE_SPEC["projection"].split(", "), "EvalSpec"),
    (
        {**BASE_SPEC, "forceDbEngineEval": True},
        BASE_SPEC["projection"].split(", "),
        "EvaluateSpec",
    ),
    (
        {**BASE_SPEC, "forceExprEval": True},
        BASE_SPEC["projection"].split(", "),
        "EvaluateSpec",
    ),
]
SPEC_PREPROCESS_LAMBDA_TEST_EXAMPLES = [["id", "location.id", "status.id", "model.id"]]


def _table_from_spec(eval_spec_processor_spec, structured_query_spec, graph):
    output = c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.tableFromSpec(
        evalSpecProcessorSpec=eval_spec_processor_spec,
        structuredQuerySpec=structured_query_spec,
        dataModelGraph=graph,
    )

    if output.output.table is None:
        pytest.fail(f"Generated table is None with {str(output.logs)=}")

    return output.output, output.logs


@pytest.mark.parametrize("eval_spec, target, expected_spec_type", EXAMPLES)
def test_validateAndExecute(graph, eval_spec, target, expected_spec_type):
    eval_spec_processor_spec = c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec()
    structured_query_spec = c3.Genai.StructuredQuery.Spec(sourceType="Genai.Aircraft", spec=eval_spec)
    output, logs = _table_from_spec(
        eval_spec_processor_spec,
        structured_query_spec,
        graph,
    )
    assert (
        list(output.table.columns) == target
    ), f"Expected {list(output.table.columns)=} to be {target=}. With {logs=}."

    # TODO PLAT-87902 Consolidate into a single type of spec to simplify logic
    assert expected_spec_type == str(
        output.validatedSpec.spec.type()
    ), f"Expected {expected_spec_type=} to be {str(output.validatedSpec.spec.type())=}"


@pytest.mark.parametrize("expected_fields", SPEC_PREPROCESS_LAMBDA_TEST_EXAMPLES)
def test_preProcessLambda(graph, eval_spec_processor_args_with_lambda_default_projection, expected_fields):
    eval_spec_processor_spec = c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec(
        **eval_spec_processor_args_with_lambda_default_projection
    )
    structured_query_spec = c3.Genai.StructuredQuery.Spec(
        sourceType="Genai.Aircraft", spec=c3.EvalSpec(**{"projection": "id, status"})
    )
    output, _ = _table_from_spec(
        eval_spec_processor_spec,
        structured_query_spec,
        graph,
    )

    assert sorted(expected_fields) == sorted(
        list(output.table.columns)
    ), f"Expect {expected_fields} as projections, got {list(output.table.columns)}"


def test_postProcessTableLambda(graph, eval_spec_processor_args_with_postProcess_lambda):
    eval_spec_processor_spec = c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec(
        **eval_spec_processor_args_with_postProcess_lambda
    )
    structured_query_spec = c3.Genai.StructuredQuery.Spec(
        sourceType="Genai.Aircraft", spec=c3.EvalSpec(**{"projection": "id, status"})
    )
    output, _ = _table_from_spec(
        eval_spec_processor_spec,
        structured_query_spec,
        graph,
    )

    is_all_zero = (output.table == 0).all().all()
    assert is_all_zero, "Output dataframe should have all zeros everywhere."


@pytest.mark.parametrize(
    "rename_columns, expected_columns",
    [
        (False, ["status.id", "id", "location.city"]),
        (True, ["Genai.AircraftStatus.id", "Genai.Aircraft.id", "Genai.Airport.city"]),
    ],
)
def test_postProcessTable_rename_columns(graph, rename_columns, expected_columns):
    eval_spec_processor_spec = c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec(
        postProcessingRenameColumns=rename_columns,
    )
    structured_query_spec = c3.Genai.StructuredQuery.Spec(
        sourceType="Genai.Aircraft", spec=c3.EvalSpec(**{"projection": "id, status, location.city"})
    )

    output, _ = _table_from_spec(
        eval_spec_processor_spec,
        structured_query_spec,
        graph,
    )

    assert sorted(expected_columns) == sorted(
        list(output.table.columns)
    ), f"Expect {expected_columns} as projections, got {list(output.table.columns)}"


@pytest.mark.parametrize(
    "source_type, projection, expected_viz_type",
    [
        ("Genai.Airport", "id, latitude, longitude", "GenAiVisualizationMap"),
        ("Genai.Aircraft", "riskScore, id", "GenAiVisualizationBarChart"),
    ],
)
def test_default_processing_generates_expected_visualizations(graph, source_type, projection, expected_viz_type):
    eval_spec_processor_spec = c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec()
    structured_query_spec = c3.Genai.StructuredQuery.Spec(
        sourceType=source_type, spec=c3.EvalSpec(**{"projection": projection})
    )
    output, _ = _table_from_spec(
        eval_spec_processor_spec,
        structured_query_spec,
        graph,
    )
    viz = c3.GenAiVisualizationBase.forPandas(output.table, structured_query_spec)
    assert expected_viz_type == viz.type().name(), f"Expected {expected_viz_type=} to be {viz.type().name()=}"
