# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = line-too-long, redefined-outer-name, too-many-arguments
import pytest
import pandas as pd


EvalSpecHandler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/eval_spec_handler.py",
    ["EvalSpecHandler"],
)


def _check_eval_spec(actual_eval_spec, expected_eval_spec, native_graph):
    output_spec = EvalSpecHandler.from_spec(
        spec=actual_eval_spec["spec"], source_type=actual_eval_spec["sourceType"], graph=native_graph
    )
    target_spec = EvalSpecHandler.from_spec(
        spec=expected_eval_spec["spec"], source_type=expected_eval_spec["sourceType"], graph=native_graph
    )
    assert output_spec == target_spec, f"Expected {str(output_spec)=} to be {str(target_spec)=}."


@pytest.fixture(scope="function")
def override_doc_on_data_model_graph():
    override_doc = {
        "Genai.Aircraft": {
            "doc": (
                "Represents an aircraft. An aircraft is a vehicle that is able to fly by gaining support from the air."
            ),
            "fields": {
                "engineType": ("The engine type of the aircraft."),
            },
        },
        "Genai.GpsCoordinates": {
            "doc": ("Represents a GPS coordinate."),
            "fields": {"name": "The name of the GPS coordinate."},
        },
    }
    yield override_doc


@pytest.fixture(scope="function")
def data_model_graph(override_doc_on_data_model_graph):
    dmg = (
        c3.Genai.StructuredData.DataModelGraph.make(
            {
                "name": "readinessTestDummy",
                "includeCollectionFields": True,
                "whitelistedDataModel": {
                    "Genai.Aircraft": {
                        "fields": [
                            "id",
                            "componentCodesDescription",
                            "componentCodesDescriptionAsSet",
                            "engineType",
                            "location",
                            "name",
                            "riskScore" "usage",
                        ]
                    },
                    "Genai.Airport": {"fields": ["city", "state", "country", "latitude", "longitude", "id"]},
                    "Genai.GpsCoordinates": {"fields": ["id", "name"]},
                },
            }
        )
        .upsert()
        .get()
    )
    dmg_withDoc = dmg.withOverrideDocumentation(override_doc_on_data_model_graph).upsert()
    yield dmg_withDoc
    dmg_withDoc.remove()


@pytest.fixture(scope="function")
def fuzzy_matcher_spec(data_model_graph):
    spec = c3.Genai.Agent.Tool.Util.StringFuzzyMatcher.InitializationSpec().withDefaults()
    spec = spec.withField("dataModelGraph", data_model_graph.get())
    yield spec


@pytest.fixture(scope="module")
def tool_config():
    c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.setConfigValue("evalQueryConfigId", "EvalQuery_default_test")
    default_eval_tool_config = c3.Genai.Agent.Tool.EvalQuery.Config.getConfig()
    c3.TestApi.setMisConfig()

    yield default_eval_tool_config

    c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.setConfigValue("evalQueryConfigId", "EvalQuery_default")


@pytest.fixture(scope="function")
def updated_tool_config(data_model_graph, fuzzy_matcher_spec, tool_config):
    tool_config = tool_config.getConfig()
    original_data_model_graph = tool_config.dataModelGraph
    original_fuzzy_matcher_spec = tool_config.fuzzyMatcherSpec
    tool_config.setConfigValue("dataModelGraph", data_model_graph)
    tool_config.setConfigValue("fuzzyMatcherSpec", fuzzy_matcher_spec)
    yield tool_config
    tool_config.setConfigValue("dataModelGraph", original_data_model_graph)
    tool_config.setConfigValue("fuzzyMatcherSpec", original_fuzzy_matcher_spec)


@pytest.fixture(scope="function")
def sample_query():
    query = "What's the location of aircraft 00?"
    yield query


@pytest.fixture(scope="function")
def in_progress_result(sample_query):
    search_query = c3.Genai.Query.fromString(sample_query)
    in_progress_result = c3.Genai.Query.Result(id="test_eval_query_tool", searchQuery=search_query).upsert().get()
    yield in_progress_result
    in_progress_result.remove()


@pytest.fixture(scope="module")
def few_shot_examples():
    examples = [
        {
            "id": "EvalQueryTutorialTest1",
            "query": "Which location has the most aircraft?",
            "spec": c3.Genai.StructuredQuery.Spec.make(
                {
                    "sourceType": "Genai.Aircraft",
                    "spec": {
                        "group": "location",
                        "projection": "location, count(location)",
                        "order": "descending(count(location))",
                        "limit": "1",
                    },
                }
            ),
        },
        {
            "id": "EvalQueryTutorialTest2",
            "query": "What is the maximum risk score of an aircraft?",
            "spec": c3.Genai.StructuredQuery.Spec.make(
                {
                    "sourceType": "Genai.Aircraft",
                    "spec": {
                        "projection": "max(riskScore)",
                        "limit": "1",
                    },
                }
            ),
        },
        {
            "id": "EvalQueryTutorialTest3",
            "query": "What's the location of aircraft 00?",
            "spec": c3.Genai.StructuredQuery.Spec.make(
                {
                    "sourceType": "Genai.Aircraft",
                    "spec": {
                        "filter": "('00' == name)",
                        "projection": "location",
                        "interval": "DAY",
                        "timeZone": {"name": "NONE"},
                        "limit": 1,
                    },
                }
            ),
        },
    ]
    c3.Genai.FewShotExample.StructuredQuery.EvalQuery.upsertBatch(examples)
    yield
    c3.Genai.FewShotExample.StructuredQuery.EvalQuery.removeBatch(examples)


@pytest.fixture(scope="function")
def eval_spec_generation_model():
    yield c3.Genai.Agent.Tool.Util.EvalQuery.SpecGenerationModel()


@pytest.fixture(scope="function")
def fuzzy_matcher(fuzzy_matcher_spec):
    fuzzy_matcher = c3.Genai.Agent.Tool.Util.StringFuzzyMatcher.initialize(fuzzy_matcher_spec)
    yield fuzzy_matcher
    fuzzy_matcher.stop()


@pytest.fixture(scope="function")
def eval_spec_processor():
    yield c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor()


@pytest.fixture(scope="function")
def table_answering_model():
    yield c3.Genai.Agent.Tool.Util.TableAnsweringModel()


@pytest.fixture(scope="function")
def eval_spec_generation_model_spec(tool_config, few_shot_examples):
    spec = tool_config.getConfig().specGenerationModelSpec
    yield spec


@pytest.fixture(scope="module")
def spec_processor_spec(tool_config):
    original_spec = tool_config.getConfig().specProcessorSpec

    eval_spec_processor_spec = c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec.make(
        {"preProcessLambdaArgs": {"default_projection_dict": {"Genai.Aircraft": ["location"]}}},
    )
    tool_config.setConfigValue("specProcessorSpec", eval_spec_processor_spec)
    yield eval_spec_processor_spec
    tool_config.setConfigValue("specProcessorSpec", original_spec)


@pytest.fixture(scope="function")
def spec_processor_spec_with_lambda():
    def post_processor(table, sourceType, graph, args) -> c3.Genai.StructuredQuery.Spec:
        import pandas as pd

        table = pd.DataFrame(0, columns=table.columns, index=table.index)
        return table

    yield c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec(postProcessLambda=c3.Lambda.fromPyFunc(post_processor))


@pytest.fixture(scope="function")
def table_answering_model_spec(tool_config):
    spec = tool_config.getConfig().tableAnsweringModelSpec
    yield spec


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
        "preProcessLambdaArgs": {"default_projection_dict": {"Genai.Aircraft": ["location", "engineType"]}},
    }


def test_data_model_graph_override_doc(data_model_graph, override_doc_on_data_model_graph):
    assert (
        data_model_graph.get("overrideDocumentation").overrideDocumentation["Genai.Aircraft"]["doc"]
        == override_doc_on_data_model_graph["Genai.Aircraft"]["doc"]
    ), "Override documentation should be set on the data model graph."


def test_eval_spec_generation_model(
    eval_spec_generation_model,
    sample_query,
    data_model_graph,
    eval_spec_generation_model_spec,
    request,
):
    # Run without few-shot examples
    eval_spec_generation_model_output = eval_spec_generation_model.generateSpec(
        query=sample_query,
        evalGenerateSpec=eval_spec_generation_model_spec.withField("nExamples", 0),
        dataModelGraph=data_model_graph,
    )

    structured_query_spec = eval_spec_generation_model_output.output.withDefaults().toJson()
    target = {
        "sourceType": "Genai.Aircraft",
        "spec": {
            "filter": "name == '00'",
            "projection": "location",
            "interval": "DAY",
            "timeZone": {"name": "NONE"},
        },
    }
    _check_eval_spec(structured_query_spec, target, data_model_graph.toNative())
    assert eval_spec_generation_model.areGlobalsSet(), "Evalspec model globals should be set."

    eval_spec_generation_model.resetGlobals()
    assert not eval_spec_generation_model.areGlobalsSet(), "Evalspec model globals should be reset."

    query_2 = "Which location has the most aircraft?"
    # Run spec generation with few-shot examples.
    structured_query_spec_example_2 = (
        eval_spec_generation_model.generateSpec(
            query=query_2,
            evalGenerateSpec=eval_spec_generation_model_spec.withField("nExamples", 2),
            dataModelGraph=data_model_graph,
        )
        .output.withDefaults()
        .toJson()
    )
    target_example_2 = {
        "sourceType": "Genai.Aircraft",
        "spec": {
            "order": "descending(count(location))",
            "limit": 1,
            "projection": "location, count(location)",
            "group": "location",
        },
    }
    _check_eval_spec(structured_query_spec_example_2, target_example_2, data_model_graph.toNative())

    request.config.cache.set("structured_query_spec", structured_query_spec)


def test_fuzzy_matcher(fuzzy_matcher, request):
    structured_query_spec = request.config.cache.get("structured_query_spec", None)
    assert structured_query_spec is not None, "Structured query spec should be generated."
    structured_query_spec = c3.Genai.StructuredQuery.Spec.fromJson(structured_query_spec)
    fuzzy_matcher_output = fuzzy_matcher.fuzzyMatchSpec(structuredQuerySpec=structured_query_spec)
    fuzzy_structured_query_spec = fuzzy_matcher_output.output
    assert structured_query_spec.sourceType.name() == "Genai.Aircraft"
    assert fuzzy_matcher.areGlobalsSet(), "Fuzzy matcher globals should be set."
    fuzzy_matcher.resetGlobals()
    assert not fuzzy_matcher.areGlobalsSet(), "Fuzzy matcher globals should be reset."
    request.config.cache.set("fuzzy_structured_query_spec", fuzzy_structured_query_spec.toJson())


def test_spec_processor(
    eval_spec_processor, data_model_graph, spec_processor_spec, spec_processor_spec_with_lambda, request
):
    fuzzy_structured_query_spec = request.config.cache.get("fuzzy_structured_query_spec", None)
    fuzzy_structured_query_spec = c3.Genai.StructuredQuery.Spec.fromJson(fuzzy_structured_query_spec)
    assert fuzzy_structured_query_spec is not None, "Fuzzy structured query spec should be generated."
    processor_output = eval_spec_processor.tableFromSpec(
        structuredQuerySpec=fuzzy_structured_query_spec,
        dataModelGraph=data_model_graph,
        evalSpecProcessorSpec=spec_processor_spec,
    )
    eval_result_table = processor_output.output.table
    validated_spec = processor_output.output.validatedSpec.withDefaults().toJson()
    target = {
        "sourceType": "Genai.Aircraft",
        "spec": {
            "filter": "('00' == name)",
            "projection": "location.id",
            "interval": "DAY",
            "timeZone": {"name": "NONE"},
        },
    }
    _check_eval_spec(validated_spec, target, data_model_graph.toNative())
    assert len(eval_result_table) > 0, "Eval result table should not be empty"

    eval_result_table_dict = eval_result_table.to_dict(orient="records")

    # Run the spec processor with post process lambda
    processor_output_example2 = eval_spec_processor.tableFromSpec(
        structuredQuerySpec=fuzzy_structured_query_spec,
        dataModelGraph=data_model_graph,
        evalSpecProcessorSpec=spec_processor_spec_with_lambda,
    )
    if processor_output_example2.output.table is None:
        raise Exception(f"Generated table is None with {str(processor_output_example2.logs)=}")

    is_all_zero = (processor_output_example2.output.table == 0).all().all()
    assert is_all_zero, "Output dataframe should have all zeros everywhere."

    request.config.cache.set("eval_result_table_dict", eval_result_table_dict)
    request.config.cache.set("validated_spec", validated_spec)


def test_table_qa(table_answering_model, sample_query, data_model_graph, table_answering_model_spec, request):
    eval_result_table_dict = request.config.cache.get("eval_result_table_dict", None)
    validated_spec = request.config.cache.get("validated_spec", None)
    assert eval_result_table_dict is not None, "Eval result table should be generated."
    assert validated_spec is not None, "Validated spec should be generated."
    eval_result_table = pd.DataFrame.from_dict(eval_result_table_dict)
    validated_spec = c3.Genai.StructuredQuery.Spec.fromJson(validated_spec)
    table_qa_input = c3.Genai.Agent.Tool.Util.TableAnsweringModel.Input.make(
        {
            "table": eval_result_table,
            "graph": data_model_graph.toNative(),
            "structuredQuerySpec": validated_spec,
            "query": sample_query,
        }
    )
    table_answering_output = table_answering_model.textAnswer(input=table_qa_input, spec=table_answering_model_spec)
    answer = table_answering_output.output
    assert answer is not None, "Table QA answer should be generated."


def test_end_to_end(
    sample_query,
    in_progress_result,
    updated_tool_config,
    data_model_graph,
):
    native_graph = data_model_graph.toNative()
    eval_query_tool = c3.Genai.Agent.Tool.EvalQuery.make({"id": "EvalQuery_default_test"})
    eval_query_tool.initialize(forceReload=True)
    output = eval_query_tool.run(sample_query, in_progress_result)
    output_spec = output.structuredQuerySpec.withDefaults().toJson()
    target = {
        "sourceType": "Genai.Aircraft",
        "spec": {
            "filter": "('00' == name)",
            "projection": "location.id",
            "interval": "DAY",
            "timeZone": {"name": "NONE"},
            "limit": 1,
        },
    }
    _check_eval_spec(output_spec, target, native_graph)
    assert output.output is not None, "End-to-end output should not be None. Please check engine log."


def test_preProcessLambda(data_model_graph, eval_spec_processor_args_with_lambda_default_projection):
    eval_spec_processor_spec = c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec(
        **eval_spec_processor_args_with_lambda_default_projection
    )
    structured_query_spec = c3.Genai.StructuredQuery.Spec(
        sourceType="Genai.Aircraft", spec=c3.EvalSpec(**{"projection": "id"})
    )
    expected_fields = ["location.id", "engineType", "id"]

    output = c3.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.tableFromSpec(
        evalSpecProcessorSpec=eval_spec_processor_spec,
        structuredQuerySpec=structured_query_spec,
        dataModelGraph=data_model_graph,
    )
    # raise Exception(f"Generated table is None with {str(output.logs)=}")
    if output.output.table is None:
        raise Exception(f"Generated table is None with {str(output.logs)=}")

    assert sorted(expected_fields) == sorted(
        list(output.output.table.columns)
    ), f"Expect {expected_fields} as projections, got {list(output.output.table.columns)}"
