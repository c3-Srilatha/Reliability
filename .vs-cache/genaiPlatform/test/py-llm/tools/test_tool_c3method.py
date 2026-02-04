# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=redefined-outer-name, too-many-arguments, too-many-positional-arguments

import json
import re

import pytest

TEST_TYPE = c3.GenaiCore.Tool.C3Method.TestType
TEST_TYPE_META = TEST_TYPE.meta()


@pytest.fixture(scope="module", autouse=True)
def cleanup():
    ids_before = c3.GenAiPlatformTestApi.preTestEntityIdsForTypes([c3.GenaiCore.Tool.C3Method, c3.GenaiCore.Toolkit])
    yield
    c3.GenAiPlatformTestApi.removeNewEntitiesForTypes(ids_before)


def test_validateMethodType_validMethods():
    for method_name in [
        "validMethod",
        "validMethodOneOverload",
        "validMethodCollections",
        "validMethodJson",
        "validMethodSimpleReference",
        "calculate",
    ]:
        method = TEST_TYPE_META.method(method_name)
        for overload in method.overloads():
            c3.GenaiCore.Tool.C3Method.validateMethodType(overload)


def test_validateMethodType_non_primitives():
    for method_name in ["invalidMethod", "invalidMethodComplexReference"]:
        method = TEST_TYPE_META.method(method_name)
        for overload in method.overloads():
            with pytest.raises(ValueError, match=f"Method type {method_name} has un-supported params:"):
                c3.GenaiCore.Tool.C3Method.validateMethodType(overload)


def test_validateMethodType_memberMethod():
    method_name = "repeatName"
    method = TEST_TYPE_META.method(method_name)
    with pytest.raises(ValueError, match="Member methods are only supported for DefaultInstance types"):
        c3.GenaiCore.Tool.C3Method.validateMethodType(method.overloads()[0])


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
        c3.GenaiCore.Tool.C3Method.validateMethodType(overload)


@pytest.mark.parametrize(
    "method_name, overload, error_substring",
    [
        ("foo", None, "Method 'foo' not found on type"),
        ("validMethod", -1, "Overload index -1 is invalid"),
        ("validMethod", 3, "Overload index 3 is invalid for 'validMethod' which has 3 overloads (0-based)"),
        (
            "validMethod",
            None,
            "Method 'validMethod' has multiple overloads. Please use spec#overload to specify which to use",
        ),
    ],
)
def test_createFromMethodName_errors(method_name, overload, error_substring):
    with pytest.raises(ValueError, match=re.escape(error_substring)):
        c3.GenaiCore.Tool.C3Method.createFromMethodName(
            c3.GenaiCore.Tool.C3Method.TestType, method_name, overload=overload
        )


@pytest.mark.parametrize(
    "method_name, expected_response",
    [
        ("getClusters", {"id": "c1", "name": "Mock Cluster One"}),
        ("getClustersJS", {"id": "c2", "name": "Mock Cluster Two"}),
    ],
)
def test_createFromMethodName_without_input(method_name, expected_response):
    c3_test_tool = c3.GenaiCore.Tool.C3Method.createFromMethodName(TEST_TYPE, method_name)
    response = c3_test_tool.call()
    assert response == expected_response


ALL_RANDOM_SUFFIXES = set()


def _check_id(tool, method_name, overload, id_override):
    overload = overload if overload is not None else 0
    if id_override:
        assert tool.id == id_override, f"Expected id to be {id_override}"
    else:
        expected_id_prefix = f"GenaiCore.Tool.C3Method.TestType_{method_name}_{overload}_"
        assert tool.id.startswith(expected_id_prefix), f"Expected id to start with {expected_id_prefix}"
        # We add Uuid.create()[:5] as the suffix when the user does not provide one
        assert len(tool.id) == len(expected_id_prefix) + 5, "Expected id to have a 5-character suffix"
        assert tool.id[-5:] not in ALL_RANDOM_SUFFIXES, "Expected id suffix to be unique"
        ALL_RANDOM_SUFFIXES.add(tool.id[-5:])


@pytest.mark.parametrize(
    "method_name, overload, id_, skip_validation",
    [
        ("validMethod", 0, None, False),
        ("validMethod", 2, "foo", True),
        ("validMethodOneOverload", None, "fish", False),
        ("noParamsDocMethod", 0, "bar", True),
    ],
)
def test_createFromMethodName(method_name, overload, id_, skip_validation):
    """
    This test case is only to test that createFromMethodName creates and propagates the correct methodType (and spec) to
    createFromMethodType. The validation of createFromMethodType and the resulting tool/config is
    done in test_createFromMethodType
    """
    spec = c3.GenaiCore.Tool.C3Method.Spec(toolId=id_, skipValidation=skip_validation, overload=overload)

    tool = c3.GenaiCore.Tool.C3Method.createFromMethodName(
        type=c3.GenaiCore.Tool.C3Method.TestType, methodName=method_name, spec=spec
    )
    _check_id(tool, method_name, overload, id_)

    expected_overload = overload if overload is not None else 0
    expected_method_type = TEST_TYPE_META.method(method_name).overloads()[expected_overload]
    assert tool.methodType == expected_method_type.toRef(), "Expected tool to have the correct methodType"


@pytest.mark.parametrize(
    "method_name, overload, id_, skip_validation",
    [
        ("validMethod", 0, None, False),
        ("validMethod", 2, "foo", True),
        ("validMethodOneOverload", None, "fish", False),
        ("noParamsDocMethod", 0, "bar", True),
        ("validMethodSimpleReference", 0, None, False),
        ("validMethodCollections", 0, None, False),
    ],
)
def test_createFromMethodType(method_name, overload, id_, skip_validation):
    spec = c3.GenaiCore.Tool.C3Method.Spec(toolId=id_, skipValidation=skip_validation)

    overload = overload if overload is not None else 0
    method_type = TEST_TYPE_META.method(method_name).overloads()[overload]
    tool = c3.GenaiCore.Tool.C3Method.createFromMethodType(method_type.toRef(), spec=spec)
    _check_id(tool, method_name, overload, id_)

    assert tool.methodType == method_type.toRef(), "Expected tool to have the correct methodType"

    c3.GenAiPlatformTestApi.checkToolFields(tool, f"{method_name}{overload or 0}")


def _clear_trace_records():
    c3.Observability.Span.Record.removeAll(confirm=True)
    c3.GenaiCore.Observability.Trace.Record.removeAll(confirm=True)


@pytest.fixture()
def enable_tracing():
    _clear_trace_records()
    cfg = c3.Observability.Tracer.Config()
    old = cfg.getConfig().enableTracing
    cfg.setConfigValue("enableTracing", True, c3.ConfigOverride.APP)
    yield
    cfg.setConfigValue("enableTracing", old, c3.ConfigOverride.APP)
    _clear_trace_records()


@pytest.fixture(scope="module")
def math_tools():
    add_tool = c3.GenaiCore.Tool.C3Method.createFromMethodType(TEST_TYPE_META.method("add").overloads()[0].toRef())
    multiply_tool = c3.GenaiCore.Tool.C3Method.createFromMethodType(
        TEST_TYPE_META.method("multiply").overloads()[0].toRef()
    )
    yield {"add": add_tool, "multiply": multiply_tool}
    add_tool.remove()
    multiply_tool.remove()


@pytest.mark.parametrize(
    "method_name, a, b, expected",
    [
        ("add", 0, 22, 22),
        ("add", -7, 19, 12),
        ("add", 82343, 6, 82349),
        ("multiply", 0, 22, 0),
        ("multiply", -7, 19, -133),
        ("multiply", 82343, 6, 494058),
    ],
)
def test_invocation(math_tools, method_name, a, b, expected, enable_tracing):
    tool = math_tools[method_name]
    assert getattr(TEST_TYPE, method_name)(a, b) == expected, f"Expected {method_name}({a}, {b}) to be {expected}"
    with c3.GenaiCore.Observability.Tracer.start_as_current_span("test_parent"):
        assert tool.call(a, **{"b": b}) == expected, f"Expected call for {method_name}({a}, {b}) to be {expected}"
        assert tool.call(a, b=b) == expected, f"Expected call for {method_name}({a}, {b}) to be {expected}"
        assert tool.call(**{"a": a, "b": b}) == expected, f"Expected call for {method_name}({a}, {b}) to be {expected}"
        assert tool.func(a, b) == expected, f"Expected func for {method_name}({a}, {b}) to be {expected}"

    new_globals = {"c3": c3}
    exec(tool.standalonePyFuncCode, new_globals)  # pylint: disable=exec-used
    assert (
        new_globals[method_name](a, b) == expected
    ), f"Expected standalone func for {method_name}({a}, {b}) to be {expected}"

    # for now, we only have one trace per root action
    traces = c3.GenaiCore.Observability.Trace.list()
    assert traces[0].name in {"Ide#runTests", "JarvisExecutor#callJsonAsJarvisUser", "TestRunner#run", "py-client"}
    assert len(traces) == 1

    spans = c3.Observability.Span.Record.fetch().objs
    assert len(spans) == 4
    for span in spans:
        if span.name == "test_parent":
            continue
        attrs = dict(span.attributes)
        for key in ["this", "a", "b", "result"]:
            assert key in attrs
        assert attrs["a"] == a
        assert attrs["b"] == b


@pytest.mark.parametrize(
    "model",
    ["GenaiCore.Llm.AzureOpenAi", "GenaiCore.Llm.Bedrock", "GenaiCore.Llm.VertexAi"],
)
def test_tool_completion(model):
    # a single test that the generated schema works for tool calling
    client = c3.GenAiPlatformTestApi.clientForModelType(model)
    tool = c3.GenaiCore.Tool.C3Method.createFromMethodType(TEST_TYPE_META.method("calculate").overloads()[0].toRef())
    tool_func_json = [tool.funcCallJson()]
    messages = [
        {
            "role": "system",
            "content": "You are a helpful assistant. Please answer the user's question using the tools provided. \
                        NEVER attempt to do math by yourself",
        },
        {"role": "user", "content": "What is 1400 - 42"},
    ]
    response = client.completion(messages=messages, options={"tools": tool_func_json})
    assert response is not None
    tool_calls = response.choices[0].message.tool_calls
    assert len(tool_calls) == 1
    args = json.loads(tool_calls[0].function.arguments)
    assert args == {"input": {"operation": "subtract", "a": 1400, "b": 42}}
    expected = c3.GenaiCore.Tool.C3Method.TestType.CalculateOutput(result=1358)
    assert tool.call(**args) == expected
    assert tool.call(args["input"]) == expected

    # check that if an agent framework creates a pydantic model for the tool input, it is correctly converted before use
    input_pydantic_model = tool.argsSchemaPydanticModel.model_fields["input"].annotation
    input_instance = input_pydantic_model(operation="subtract", a=1400, b=42)
    args = {"input": input_instance}
    assert tool.call(**args) == expected
    assert tool.call(args["input"]) == expected


# NOTE: The test below logically belongs in test_tool_and_toolkit, but we use testStrategies to run that test in dev
# mode and Jarvis does not support changing the app mode
@pytest.mark.skipif(not c3.GenAiPlatformTestApi.isRunningInJarvis(), reason="synced SNEs are always in dev mode")
def test_publish_toolkit_not_dev_mode(math_tools):
    # NOTE: This may be non-functional when synced to an SNE because dev mode is always on...
    toolkit = c3.GenaiCore.Toolkit(name="test_toolkit_a_2", tools=[math_tools["add"]]).upsert(
        None, {"returnInclude": "this"}
    )
    with pytest.raises(RuntimeError, match="publish can only be executed when the app/pkg is in 'dev' mode"):
        toolkit.publishToolkit()


def test_args_schema_pydantic_model_with_input():
    from pydantic import BaseModel

    method_name = "multiply"
    multiply_tool = c3.GenaiCore.Tool.C3Method.createFromMethodName(TEST_TYPE, method_name)
    assert issubclass(multiply_tool.argsSchemaPydanticModel, BaseModel)


@pytest.mark.parametrize("method_name", ["getClusters", "getClustersJS"])
def test_args_schema_pydantic_model_without_input(method_name):
    tool_no_input = c3.GenaiCore.Tool.C3Method.createFromMethodName(TEST_TYPE, method_name)
    assert tool_no_input.argsSchemaPydanticModel is None
