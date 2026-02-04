# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import json
import pytest

# pylint: disable=unused-argument,redefined-outer-name

(
    ReflexionAgentEvalQueryGenerateSpec,
    ReflexionAgentEvalQueryProcessSpec,
    ReflexionAgentEvalQueryUtilProcessSpec,
) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/agents/reflexion_agent.py",
    [
        "ReflexionAgentEvalQueryGenerateSpec",
        "ReflexionAgentEvalQueryProcessSpec",
        "ReflexionAgentEvalQueryUtilProcessSpec",
    ],
)

TEST_FILE_NAME = "test_reflexion_agent_eval_query_tool.py"


@pytest.fixture(scope="module", autouse=True)
def template_prompts():
    spec_gen_prompt = c3.TestApi.upsertDefaultEvalSpecGenerationPrompt()
    spec_correction_prompt = c3.TestApi.upsertDefaultEvalSpecCorrectionPrompt()

    yield spec_gen_prompt, spec_correction_prompt

    spec_gen_prompt.remove()
    spec_correction_prompt.remove()


@pytest.fixture(autouse=True, scope="module")
def set_test_config_params(template_prompts):
    spec_gen_prompt, spec_correction_prompt = template_prompts
    # Save original configs and set the required value
    ## Genai.Agent.Tool.EvalQuery.DefaultConfig
    original_eval_query_tool_default = c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.make().getConfig().evalQueryConfigId
    c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.inst().setConfigValue("evalQueryConfigId", "EvalQuery_default_test")

    ## Genai.Agent.Tool.EvalQuery
    tool_config = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    spec_gen_spec = tool_config.specGenerationModelSpec
    spec_gen_spec = spec_gen_spec.withTemplatePrompt(spec_gen_prompt)
    spec_gen_spec = spec_gen_spec.withPromptTemplateReflexionAgent(spec_correction_prompt)
    tool_config.setConfigValue("specGenerationModelSpec", spec_gen_spec)
    assert tool_config.id == "EvalQuery_default_test"

    c3.TestApi.setMisConfig()

    yield

    c3.Genai.Agent.Tool.EvalQuery.DefaultConfig.inst().setConfigValue(
        "evalQueryConfigId", original_eval_query_tool_default
    )


@pytest.fixture(scope="function")
def in_progress_result():
    query = "Which city is the aircraft with the ID X-00 currently located in?"
    inProgressResult = (
        c3.Genai.Query.Result(
            id=f"test_eval_query_tool_{c3.Str.randomSuffix()}",
            searchQuery=c3.Genai.Query.fromString(query),
        )
        .upsert()
        .get()
    )
    yield inProgressResult

    inProgressResult.remove()


@pytest.fixture(scope="function")
def interim_status(in_progress_result):
    status = c3.Genai.Query.Result.InterimStatusHistory(
        **{
            "parent": {"id": in_progress_result.id},
            "status": "UseEvalQueryTool",
            "sortIndex": 1,
            "id": f"{in_progress_result.id}-UseEvalQueryTool-0",
        }
    ).upsert()

    yield status

    status.remove()


@pytest.fixture(scope="function")
def wrong_spec():
    spec = c3.Genai.StructuredQuery.Spec(
        **{
            "sourceType": "Genai.Aircraft",
            "spec": c3.EvalSpec(
                **{  # There is no such field as "city" in the Genai.Aircraft data type
                    # Only location.city is available
                    "projection": "id, city",
                    "filter": "id == 'X-00'",
                }
            ),
        }
    )

    yield spec


@pytest.fixture(scope="function")
def global_vars():
    config = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    _globals = {
        "CONFIG": c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig(),
        "DATA_MODEL_GRAPH": config.dataModelGraph.toNative(),
        "FUZZY_MATCHER": c3.Genai.Agent.Tool.Util.StringFuzzyMatcher.initialize(
            config.fuzzyMatcherSpec.withDataModelGraph(config.dataModelGraph)
        ),
        "TABLE_ANSWERING_MODEL": c3.Genai.Agent.Tool.Util.TableAnsweringModel(),
        "CONFIG_CACHE_KEY": c3.Genai.ConfigUtil.generateConfigKey(),
        "FORMAT_DATA_PROMPT": config.formatDataPrompt.toString(),
    }
    yield _globals


@pytest.fixture(scope="function")
def global_vars_no_retry_spec_processor():
    config = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    spec_processor_spec = config.specProcessorSpec
    # Set the retryMax to 0
    spec_processor_spec = spec_processor_spec.withRetryMax(0)
    config.setConfigValue("specProcessorSpec", spec_processor_spec)
    _globals = {
        "CONFIG": c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig(),
        "DATA_MODEL_GRAPH": config.dataModelGraph.toNative(),
        "FUZZY_MATCHER": c3.Genai.Agent.Tool.Util.StringFuzzyMatcher.initialize(
            config.fuzzyMatcherSpec.withDataModelGraph(config.dataModelGraph)
        ),
        "TABLE_ANSWERING_MODEL": c3.Genai.Agent.Tool.Util.TableAnsweringModel(),
        "CONFIG_CACHE_KEY": c3.Genai.ConfigUtil.generateConfigKey(),
        "FORMAT_DATA_PROMPT": config.formatDataPrompt.toString(),
    }

    yield _globals

    config = c3.Genai.Agent.Tool.EvalQuery.Config.inst().getConfig()
    spec_processor_spec = config.specProcessorSpec
    # Set the retryMax back to 1
    spec_processor_spec = spec_processor_spec.withRetryMax(1)
    config.setConfigValue("specProcessorSpec", spec_processor_spec)


@pytest.fixture(scope="module")
def eval_query_tool():
    eval_query_tool_obj = c3.Genai.Agent.Tool.EvalQuery()
    eval_query_tool_obj.initialize(forceReload=True)
    yield eval_query_tool_obj


@pytest.fixture(scope="function")
def func_kwargs_generate_spec(in_progress_result, interim_status, global_vars, wrong_spec):
    config = global_vars["CONFIG"]
    spec_gen_spec = config.specGenerationModelSpec
    # Override the spec to ensure it hits an error
    spec_gen_spec = spec_gen_spec.withOverrideSpec(wrong_spec)
    config.setConfigValue("specGenerationModelSpec", spec_gen_spec)
    global_vars["CONFIG"] = config.getConfig()
    func_kwargs = {
        "input": in_progress_result.searchQuery.standaloneQuery,
        "inProgressResult": in_progress_result,
        "interimStatus": interim_status,
        "specGenerationType": "Genai.Agent.Tool.Util.EvalQuery.SpecGenerationModel",
        "pyGlobals": global_vars,
        "doNotFailOnError": True,
    }
    yield func_kwargs


@pytest.fixture(scope="function")
def generate_spec_output():
    output = c3.Genai.StructuredQuery.Spec(
        **{
            "sourceType": "Genai.Aircraft",
            "spec": c3.EvaluateSpec(
                **{
                    # It should be "location"
                    "projection": "id, LOCATIOn",
                    "filter": "id == 'X00'",
                }
            ),
        }
    )
    yield output


@pytest.fixture(scope="function")
def func_kwargs_process_spec(in_progress_result, generate_spec_output, global_vars):
    config = global_vars["CONFIG"]
    func_kwargs = {
        "structuredQuerySpec": generate_spec_output,
        "inProgressResult": in_progress_result,
        "dataModelGraph": config.dataModelGraph,
        "nativeDataModelGraph": global_vars["DATA_MODEL_GRAPH"],
        "specProcessorSpec": config.specProcessorSpec,
        "tableAnsweringModelSpec": config.tableAnsweringModelSpec,
        "specProcessorType": "Genai.Agent.Tool.Util.EvalQuery.SpecProcessor",
        "doNotUseLlm": False,
    }

    yield func_kwargs


@pytest.fixture(scope="function")
def invalid_spec():
    spec = c3.Genai.StructuredQuery.Spec(
        **{
            "sourceType": "Genai.Aircraft",
            "spec": c3.EvalSpec(
                **{
                    "projection": "id, location.city, invalid",
                    "group": "sham",
                    "order": "mash",
                    "filter": "id == 'X-00'",
                }
            ),
        }
    )
    yield spec


@pytest.fixture(scope="function")
def func_kwargs_util_process_spec_invalid_spec(in_progress_result, invalid_spec, global_vars):
    config = global_vars["CONFIG"]
    process_spec = c3.Genai.Agent.Tool.Util.ProcessSpec(
        input=in_progress_result.getMissing({"include": "searchQuery"}).searchQuery.standaloneQuery,
        specProcessorType="Genai.Agent.Tool.Util.EvalQuery.SpecProcessor",
        structuredQuerySpec=invalid_spec,
        dataModelGraph=config.dataModelGraph,
        specProcessorSpec=config.specProcessorSpec,
        doNotAnswer=True,
        toolId="test_eval_query_tool",
    )
    func_kwargs = {"spec": process_spec}
    yield func_kwargs


@pytest.fixture(scope="function")
def func_kwargs_util_process_spec_invalid_spec_no_retry(
    in_progress_result, invalid_spec, global_vars_no_retry_spec_processor
):
    config = global_vars_no_retry_spec_processor["CONFIG"]
    process_spec = c3.Genai.Agent.Tool.Util.ProcessSpec(
        input=in_progress_result.getMissing({"include": "searchQuery"}).searchQuery.standaloneQuery,
        specProcessorType="Genai.Agent.Tool.Util.EvalQuery.SpecProcessor",
        structuredQuerySpec=invalid_spec,
        dataModelGraph=config.dataModelGraph,
        specProcessorSpec=config.specProcessorSpec,
        doNotAnswer=True,
        toolId="test_eval_query_tool",
    )
    func_kwargs = {"spec": process_spec}
    yield func_kwargs


def _do_test_generate_spec(eval_query_tool, func_kwargs_generate_spec, retry_max, expect_error):
    config = func_kwargs_generate_spec["pyGlobals"]["CONFIG"]
    reflexion_agent = ReflexionAgentEvalQueryGenerateSpec(
        func=eval_query_tool.generateSpec,
        func_kwargs=func_kwargs_generate_spec,
        data_model_graph=config.dataModelGraph,
        generate_text_config_name=config.specGenerationModelSpec.llmModelNameReflexionAgent,
        prompt_template=config.specGenerationModelSpec.promptTemplateReflexionAgent,
        retry_max=retry_max,
        retry_timeout_sec=config.specGenerationModelSpec.retryTimeoutSec,
    )
    test_retry_max = 3
    test_retry_n = 0
    PASS = False
    while not PASS and test_retry_n < test_retry_max:
        generate_spec_output, in_progress_result = reflexion_agent.execute_with_correction_retry()
        in_progress_result = in_progress_result.get("engineLog, failed")
        engine_log = json.loads(in_progress_result.engineLog)
        if expect_error:
            assert generate_spec_output is None and "error" in engine_log
            PASS = True
        else:
            # To make the test more robust, if the generate_spec_output is None, retry
            if generate_spec_output is None:
                test_retry_n += 1
                continue
            assert generate_spec_output is not None and "error" not in engine_log
            assert not in_progress_result.failed is True
            PASS = True


@pytest.mark.skip(reason="GEN-9022 Change the default Genai.Agent.Tool.EvalQuery.Config to EvalQuery_generic_model")
def test_generate_spec(eval_query_tool, func_kwargs_generate_spec):
    _do_test_generate_spec(eval_query_tool, func_kwargs_generate_spec, retry_max=1, expect_error=False)


@pytest.mark.skip(reason="GEN-9022 Change the default Genai.Agent.Tool.EvalQuery.Config to EvalQuery_generic_model")
def test_generate_spec_no_retry(eval_query_tool, func_kwargs_generate_spec):
    _do_test_generate_spec(eval_query_tool, func_kwargs_generate_spec, retry_max=0, expect_error=True)


def _do_test_process_spec(
    eval_query_tool, func_kwargs_process_spec, retry_max, timeout, expect_error, pass_runtime_kwargs
):
    reflexion_agent = ReflexionAgentEvalQueryProcessSpec(
        func=eval_query_tool.processSpec,
        func_kwargs=None if pass_runtime_kwargs else func_kwargs_process_spec,
        generate_text_config_name=func_kwargs_process_spec["specProcessorSpec"].llmModelNameReflexionAgent,
        data_model_graph=func_kwargs_process_spec["dataModelGraph"],
        prompt_template=func_kwargs_process_spec["specProcessorSpec"].promptTemplateReflexionAgent,
        retry_max=retry_max,
        retry_timeout_sec=timeout,
    )
    if pass_runtime_kwargs:
        process_spec_output = reflexion_agent.execute_with_correction_retry(func_kwargs_process_spec)
    else:
        process_spec_output = reflexion_agent.execute_with_correction_retry()
    engine_log = json.loads(process_spec_output.inProgressResult.get().engineLog)
    if expect_error:
        assert "error" in engine_log
    else:
        assert "error" not in engine_log


@pytest.mark.skip(reason="GEN-9022 Change the default Genai.Agent.Tool.EvalQuery.Config to EvalQuery_generic_model")
def test_process_spec(eval_query_tool, func_kwargs_process_spec):
    _do_test_process_spec(
        eval_query_tool,
        func_kwargs_process_spec,
        1,
        func_kwargs_process_spec["specProcessorSpec"].retryTimeoutSec,
        expect_error=False,
        pass_runtime_kwargs=False,
    )


@pytest.mark.skip(reason="GEN-9022 Change the default Genai.Agent.Tool.EvalQuery.Config to EvalQuery_generic_model")
def test_process_spec_runtime_kwargs(eval_query_tool, func_kwargs_process_spec):
    _do_test_process_spec(
        eval_query_tool,
        func_kwargs_process_spec,
        1,
        func_kwargs_process_spec["specProcessorSpec"].retryTimeoutSec,
        expect_error=False,
        pass_runtime_kwargs=True,
    )


@pytest.mark.skip(reason="GEN-9022 Change the default Genai.Agent.Tool.EvalQuery.Config to EvalQuery_generic_model")
def test_process_spec_timeout(eval_query_tool, func_kwargs_process_spec):
    _do_test_process_spec(eval_query_tool, func_kwargs_process_spec, 1, 0, expect_error=True, pass_runtime_kwargs=False)


def _do_test_util_process_spec(config, func_kwargs, retry_max):
    reflexion_agent = ReflexionAgentEvalQueryUtilProcessSpec(
        func=c3.Genai.Agent.Tool.Util.processSpec,
        func_kwargs=func_kwargs,
        data_model_graph=config.dataModelGraph,
        generate_text_config_name=config.specProcessorSpec.llmModelNameReflexionAgent,
        prompt_template=config.specProcessorSpec.promptTemplateReflexionAgent,
        retry_max=retry_max,
        retry_timeout_sec=config.specProcessorSpec.retryTimeoutSec,
    )
    spec_processor_output = reflexion_agent.execute_with_correction_retry()
    engine_log = spec_processor_output.logs
    assert "error" not in engine_log


@pytest.mark.skip(reason="GEN-9022 Change the default Genai.Agent.Tool.EvalQuery.Config to EvalQuery_generic_model")
def test_util_process_spec(func_kwargs_util_process_spec_invalid_spec, global_vars):
    _do_test_util_process_spec(global_vars["CONFIG"], func_kwargs_util_process_spec_invalid_spec, 1)
    # Given an invalid spec, when retry is active, the function remove_invalid_fields_in_projections
    # should not be called. It'd execute retry, and then in the end, the invalid fields would be removed by the function
    # remove_invalid_fields_in_projections as well.


@pytest.mark.skip(reason="GEN-9022 Change the default Genai.Agent.Tool.EvalQuery.Config to EvalQuery_generic_model")
def test_util_process_spec_remove_invalid_fields_no_retry(
    func_kwargs_util_process_spec_invalid_spec_no_retry, global_vars_no_retry_spec_processor
):
    _do_test_util_process_spec(
        global_vars_no_retry_spec_processor["CONFIG"], func_kwargs_util_process_spec_invalid_spec_no_retry, 0
    )
    # Given an invalid spec, even when the retry is not active (i.e., retry_max=0),
    # the function remove_invalid_fields_in_projections should be called and remove the invalid fields


@pytest.fixture
def config_with_override_spec(global_vars, wrong_spec):
    config = global_vars["CONFIG"]
    orig_config = spec_gen_spec = config.specGenerationModelSpec
    # Override the spec to ensure it hits an error
    spec_gen_spec = spec_gen_spec.withOverrideSpec(wrong_spec)
    config.setConfigValue("specGenerationModelSpec", spec_gen_spec)
    yield
    config.setConfigValue("specGenerationModelSpec", orig_config)


@pytest.mark.skip(reason="GEN-9022 Change the default Genai.Agent.Tool.EvalQuery.Config to EvalQuery_generic_model")
@pytest.mark.parametrize("force_reload", [True, False])
def test_eval_query_tool_with_retry(config_with_override_spec, in_progress_result, eval_query_tool, force_reload):
    test_retry_max = 3
    test_retry_n = 0
    PASS = False
    while not PASS and test_retry_n < test_retry_max:
        eval_query_tool.initialize(force_reload)
        tool_output = eval_query_tool.run(in_progress_result.searchQuery.rawQuery, in_progress_result)
        # To make the test more robust, if the tool_output is None, retry
        if tool_output.output is None:
            test_retry_n += 1
            continue
        in_progress_result = tool_output.inProgressResult.get("failed")
        assert "x-00 is currently located in san francisco" in tool_output.output.lower(), f"{tool_output.output=}"
        assert not in_progress_result.failed is True
        PASS = True
