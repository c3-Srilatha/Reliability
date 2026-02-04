# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import re
import pytest


TEST_FILE_NAME = "test_tool_c3method.py"

TEST_TYPE_META = c3.Genai.Agent.Tool.C3Method.TestType.meta()

# pylint: disable=redefined-outer-name


@pytest.fixture(scope="function")
def calculate_insurance_rate_tool():
    tool, tool_config = c3.Genai.Agent.Tool.C3Method.fromMethodName(
        typ=c3.Genai.Agent.Tool.C3Method.TestType,
        methodName="calculateInsuranceRate",
        spec=c3.Genai.Agent.Tool.C3Method.Spec(doNotPersist=True),
    )
    tool_config.setConfig()
    yield tool


def _make_genai_result(ctx, query_string):
    return c3.TestApi.upsertEntity(
        ctx,
        "Genai.Query.Result",
        c3.Genai.Query.Result(
            searchQuery=c3.Genai.Query.fromString(query_string),
        ),
    ).get()


def test_validateMethodType_validMethods():
    for method_name in ["validMethod", "validMethodOneOverload"]:
        method = TEST_TYPE_META.method(method_name)
        for overload in method.overloads():
            c3.Genai.Agent.Tool.C3Method.validateMethodType(overload)


def test_validateMethodType_non_primitives():
    method_name = "invalidMethod"
    method = TEST_TYPE_META.method(method_name)
    assert len(method.overloads()) > 2, f"Expected more than 2 overloads for {method_name}"
    for overload in method.overloads():
        with pytest.raises(ValueError, match=f"Method type {method_name} has non-primitive params: "):
            c3.Genai.Agent.Tool.C3Method.validateMethodType(overload)


@pytest.mark.parametrize(
    "method_name, missing_method_doc, params_missing_docs",
    [
        ("noDocsMethod", True, []),
        ("noParamsDocMethod", False, ["s", "i", "d"]),
        ("notAllParamsDocMethod", False, ["i"]),
    ],
)
def test_validateMethodType_missing_docs(method_name, missing_method_doc, params_missing_docs):
    method = TEST_TYPE_META.method(method_name)
    assert len(method.overloads()) == 1, f"Expected exactly 1 overload for {method_name}"
    overload = method.overloads()[0]
    if missing_method_doc:
        expected_error = f"Method type {method_name} has no documentation"
    else:
        expected_error = f"Method type {method_name} has no documentation for parameters: {params_missing_docs}"
    with pytest.raises(ValueError, match=re.escape(expected_error)):
        c3.Genai.Agent.Tool.C3Method.validateMethodType(overload)


@pytest.mark.parametrize(
    "method_name, overload, error_substring",
    [
        ("foo", None, "Method 'foo' not found on type"),
        ("validMethod", -1, "Overload index -1 is invalid"),
        ("validMethod", 3, "Overload index 3 is invalid for 'validMethod' which has 3 overloads (0-based)"),
        ("validMethod", None, "Method 'validMethod' has multiple overloads. Please specify which overload to use"),
    ],
)
def test_fromMethodName_errors(method_name, overload, error_substring):
    with pytest.raises(ValueError, match=re.escape(error_substring)):
        c3.Genai.Agent.Tool.C3Method.fromMethodName(
            c3.Genai.Agent.Tool.C3Method.TestType, method_name, overload=overload
        )


ALL_RANDOM_SUFFIXES = set("blah")


def _check_id(tool, tool_config, method_name, overload, id_suffix):
    overload = overload if overload is not None else 0
    expected_id_prefix = f"Genai.Agent.Tool.C3Method.TestType_{method_name}_{overload}_"
    assert tool.id.startswith(expected_id_prefix), f"Expected id to start with {expected_id_prefix}"
    if id_suffix:
        assert tool.id.endswith(id_suffix), f"Expected id to end with {id_suffix}"
    else:
        # We add Uuid.create()[:5] as the suffix when the user does not provide one
        assert len(tool.id) == len(expected_id_prefix) + 5, "Expected id to have a 5-character suffix"
        assert len(ALL_RANDOM_SUFFIXES) > 0, "Should have at least one random suffix left"
        assert tool.id[-5:] not in ALL_RANDOM_SUFFIXES, "Expected id suffix to be unique"
        ALL_RANDOM_SUFFIXES.add(tool.id[-5:])
    assert tool.id == tool_config.id, "Expected tool and tool_config to have the same id"


def _check_tool_config(tool_config, method_type, llm_config_name):
    expected_llm_config_name = llm_config_name if llm_config_name else "default_orchestrator_model"
    expected_tool_name = f"{method_type.parentType()}#{method_type.name}()"
    method_type_desc = method_type.docParsed().description.toText().replace("\n", " ")
    expected_desc = f"{expected_tool_name}: {method_type_desc}"
    expected_ui_desc = (
        f"Use the {method_type.parentType()}#{method_type.name} method with arguments generated "
        + "by an llm to best satisfy your query"
    )
    assert tool_config.toolName == expected_tool_name
    assert tool_config.toolDescription == expected_desc
    assert tool_config.generateArgsLlmConfigName == expected_llm_config_name
    assert tool_config.uiOptions.displayName == f"{method_type.parentType().name()}#{method_type.name}"
    assert tool_config.uiOptions.displayDescription == expected_ui_desc
    assert tool_config.uiOptions.displaySearchPlaceholder == expected_ui_desc
    assert tool_config.uiOptions.icon == "code"

    assert tool_config.generateArgsPrompt == c3.Genai.Agent.Tool.C3Method.promptFromMethodType(method_type.toRef())


@pytest.mark.parametrize(
    "method_name, overload, id_suffix, skip_validation",
    [
        ("validMethod", 0, None, False),
        ("validMethod", 2, "foo", True),
        ("validMethodOneOverload", None, "fish", False),
        ("invalidMethod", 0, "bar", True),
    ],
)
def test_fromMethodName(method_name, overload, id_suffix, skip_validation):
    """
    This test case is only to test that fromMethodName creates and propagates the correct methodType (and spec) to
    fromMethodType. The validation of fromMethodType and the resulting tool/config is done in test_fromMethodType
    """
    spec = c3.Genai.Agent.Tool.C3Method.Spec(
        doNotPersist=True, idSuffix=id_suffix, skipValidation=skip_validation  # cannot upsert metadata in tests :(
    )

    tool, tool_config = c3.Genai.Agent.Tool.C3Method.fromMethodName(
        typ=c3.Genai.Agent.Tool.C3Method.TestType, methodName=method_name, overload=overload, spec=spec
    )
    _check_id(tool, tool_config, method_name, overload, id_suffix)

    expected_overload = overload if overload is not None else 0
    expected_method_type = TEST_TYPE_META.method(method_name).overloads()[expected_overload]
    assert tool.methodType == expected_method_type.toRef(), "Expected tool to have the correct methodType"


@pytest.mark.parametrize(
    "method_name, overload, id_suffix, skip_validation, llm_config_name",
    [
        ("validMethod", 0, None, False, None),
        ("validMethod", 2, "foo", True, "azureGpt4"),
        ("validMethodOneOverload", None, "fish", False, "gemini"),
        ("invalidMethod", 0, "bar", True, None),
    ],
)
def test_fromMethodType(method_name, overload, id_suffix, skip_validation, llm_config_name):
    spec = c3.Genai.Agent.Tool.C3Method.Spec(
        doNotPersist=True,  # cannot upsert metadata in tests :(
        idSuffix=id_suffix,
        skipValidation=skip_validation,
    )
    # if llm_config_name is explicitly set to None, it will prevent withDefaults from populating generateArgsLlmConfigName
    if llm_config_name:
        spec = spec.withField("generateArgsLlmConfigName", llm_config_name)
    overload = overload if overload is not None else 0
    method_type = TEST_TYPE_META.method(method_name).overloads()[overload]
    tool, tool_config = c3.Genai.Agent.Tool.C3Method.fromMethodType(method_type.toRef(), spec=spec)
    _check_id(tool, tool_config, method_name, overload, id_suffix)

    assert tool.methodType == method_type.toRef(), "Expected tool to have the correct methodType"
    _check_tool_config(tool_config, method_type, llm_config_name)


@pytest.mark.parametrize("method_name", ["calculateInsuranceRate", "validMethodOneOverload", "noParamsDocMethod"])
def test_promptFromMethodType(method_name):
    method_type = TEST_TYPE_META.method(method_name).overloads()[0]
    prompt = c3.Genai.Agent.Tool.C3Method.promptFromMethodType(method_type.toRef())
    expected_prompt = c3.Pkg.file(f"/genAiBase/test/resource/c3MethodTool/prompts/{method_name}.txt").readString()
    assert prompt.toString().strip() == expected_prompt.strip()


def _compare_args(generated_args, expected_args):
    for key, expected_value in expected_args.items():
        if expected_value is False:
            assert generated_args.get(key, False) is False, f"Expected {key} to be False or absent in generated args"
        else:
            assert generated_args[key] == expected_value, f"Expected {key} to have value {expected_value}"
    for key, generated_value in generated_args.items():
        if key not in expected_args:
            assert generated_value in set(0, False), f"Non-required arg {key} has 'non-empty' value {generated_value}"


def _check_run_result(tool, run_result, filled_prompt, generated_args, method_result, tool_output):
    assert run_result.output == tool_output.output, "Expected run to return the same output as executing step-by-step"
    assert (
        run_result.inProgressResult.withoutFields(["meta", "version", "engineLog"]).toJsonString()
        == tool_output.inProgressResult.withoutFields(["meta", "version", "engineLog"]).toJsonString()
    ), "Expected run to return the input inProgressResult"

    engine_log = run_result.inProgressResult.parseEngineLog().get("parsedEngineLog")
    assert tool.id in engine_log, f"Expected engine log to have an entry for tool {tool.id}"
    log_entry = engine_log[tool.id]
    expected_engine_log = {
        "filledPrompt": filled_prompt if isinstance(filled_prompt, str) else filled_prompt.toJson(),
        "generatedArgs": generated_args,
        "methodResult": method_result,
        "toolOutput": tool_output.withField(
            "inProgressResult", tool_output.inProgressResult.withoutFields(["meta", "version", "engineLog"])
        ).toJson(),
    }
    assert log_entry == expected_engine_log, "Expected engine log entry to match the expected values"


@pytest.mark.parametrize(
    "query_string, expected_params",
    [
        (
            "What is the insurance rate for a 42 year old woman living in Paris who earns $100,000 per year?",
            {"age": 42, "income": 100000, "livesInCity": True},
        ),
        (
            "What is the rate for a 3 year old who earns 12,000,000?",
            {"age": 3, "income": 12000000, "livesInCity": False},
        ),
        (
            "What is the insurance rate for a 36 year old father of 4 living in New York who earns $75,000 per year?",
            {"age": 36, "income": 75000, "livesInCity": True, "numChildren": 4},
        ),
    ],
)
def test_run_end_to_end(query_string, expected_params, calculate_insurance_rate_tool, ctx):
    in_progress_result = _make_genai_result(ctx, query_string)
    filled_prompt = calculate_insurance_rate_tool.fillPrompt(in_progress_result.searchQuery, in_progress_result)
    assert (
        filled_prompt.toString()
        == calculate_insurance_rate_tool.config().generateArgsPrompt.setParam("query", query_string).toString()
    )
    generated_args = calculate_insurance_rate_tool.generateArgs(filled_prompt, in_progress_result)
    _compare_args(generated_args, expected_params)
    result = calculate_insurance_rate_tool.invokeMethod(generated_args, in_progress_result)
    assert result == c3.Genai.Agent.Tool.C3Method.TestType.calculateInsuranceRate(**expected_params)
    tool_output = calculate_insurance_rate_tool.toolOutputFromMethodResult(result, in_progress_result)
    assert tool_output.output == result, "Expected tool output to be the same as the method result"
    assert (
        tool_output.inProgressResult == in_progress_result
    ), "Expected tool output to have the correct inProgressResult"

    run_result = calculate_insurance_rate_tool.run(query_string, in_progress_result)
    _check_run_result(calculate_insurance_rate_tool, run_result, filled_prompt, generated_args, result, tool_output)


def test_override_lambdas(calculate_insurance_rate_tool, ctx):
    query_string = "a query"
    in_progress_result = _make_genai_result(ctx, query_string)
    config = calculate_insurance_rate_tool.config()

    # pylint: disable=unnecessary-lambda-assignment
    fill_prompt_override_lambda = lambda tool, query, inProgressResult: "foo"
    generate_args_override_lambda = lambda tool, prompt, inProgressResult: {"prompt": prompt}
    invoke_method_override_lambda = lambda tool, args, inProgressResult: args.get("prompt", None)
    tool_output_from_method_result_override_lambda = lambda tool, result, inProgressResult: c3.Genai.Agent.Tool.Output(
        inProgressResult=inProgressResult, output=result + "bar"
    )
    config.setConfigValues(
        {
            "fillPromptOverrideLambda": c3.Lambda.fromPyFunc(fill_prompt_override_lambda),
            "generateArgsOverrideLambda": c3.Lambda.fromPyFunc(generate_args_override_lambda),
            "invokeMethodOverrideLambda": c3.Lambda.fromPyFunc(invoke_method_override_lambda),
            "toolOutputFromMethodResultOverrideLambda": c3.Lambda.fromPyFunc(
                tool_output_from_method_result_override_lambda
            ),
        }
    )

    filled_prompt = calculate_insurance_rate_tool.fillPrompt(
        in_progress_result.searchQuery.standaloneQuery, in_progress_result
    )
    assert filled_prompt == "foo"
    generated_args = calculate_insurance_rate_tool.generateArgs(filled_prompt, in_progress_result)
    assert generated_args == {"prompt": filled_prompt}
    result = calculate_insurance_rate_tool.invokeMethod(generated_args, in_progress_result)
    assert result == "foo"
    tool_output = calculate_insurance_rate_tool.toolOutputFromMethodResult(result, in_progress_result)
    assert tool_output.output == "foobar"
    assert (
        tool_output.inProgressResult == in_progress_result
    ), "Expected tool output to have the correct inProgressResult"

    run_result = calculate_insurance_rate_tool.run(query_string, in_progress_result)
    _check_run_result(calculate_insurance_rate_tool, run_result, filled_prompt, generated_args, result, tool_output)
