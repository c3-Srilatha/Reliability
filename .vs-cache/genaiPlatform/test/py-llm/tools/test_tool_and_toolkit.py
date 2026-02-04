# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=redefined-outer-name

import json
import pytest

# NOTE: Tests of tool creation and functionality are in specific test files for the tool subtypes
# This file is for testing the Toolkit type (in how it maintains references to its tools)

TEST_TYPE_META = c3.GenaiCore.Tool.C3Method.TestType.meta()
PKG = c3.pkg()


def _published_tool_file_urls():
    return set(
        f.url for f in PKG.files(package="genaiPlatform", category="seed", isTest=False, pathRegex="Tool")
    ).union(
        f.url
        for f in PKG.files(package="genaiPlatform", category="resource", isTest=False, pathRegex="nativeToolPySrc")
    )


@pytest.fixture(scope="function", autouse=True)
def cleanup():
    pkg_urls_before = _published_tool_file_urls()
    ids_before = c3.GenAiPlatformTestApi.preTestEntityIdsForTypes([c3.GenaiCore.Tool, c3.GenaiCore.Toolkit])
    yield
    c3.GenAiPlatformTestApi.removeNewEntitiesForTypes(ids_before)
    pkg_urls_after = _published_tool_file_urls()
    new_paths = pkg_urls_after - pkg_urls_before
    if new_paths:
        PKG.deleteContents(new_paths, confirm=True)


@pytest.fixture(scope="module")
def tools():
    add_tool = c3.GenaiCore.Tool.C3Method.createFromMethodType(TEST_TYPE_META.method("add").overloads()[0].toRef())
    multiply_tool = c3.GenaiCore.Tool.C3Method.createFromMethodType(
        TEST_TYPE_META.method("multiply").overloads()[0].toRef()
    )
    tool_name = "subtract"
    subtract_tool = c3.GenaiCore.Tool.NativePy.createFromPyFile(
        f"meta://genaiPlatform/test/resource/tool/{tool_name}.py", toolName=tool_name, spec={}
    )
    yield {"add": add_tool, "multiply": multiply_tool, "subtract": subtract_tool}
    c3.GenaiCore.Tool.removeBatch([add_tool, multiply_tool, subtract_tool])


def _check_toolkit(toolkit, expected_name, expected_tools):
    assert toolkit.name == expected_name
    assert set(tool.id for tool in toolkit.allTools()) == set(tool.id for tool in expected_tools)


def test_toolkit(tools):
    toolkit_a = c3.GenaiCore.Toolkit(name="test_toolkit_a", tools=[tools["add"]]).upsert(
        None, {"returnInclude": "this"}
    )
    _check_toolkit(toolkit_a, "test_toolkit_a", [tools["add"]])

    toolkit_b = c3.GenaiCore.Toolkit(name="test_toolkit_b", tools=[tools["multiply"], toolkit_a]).upsert(
        None, {"returnInclude": "this"}
    )
    _check_toolkit(toolkit_b, "test_toolkit_b", [tools["multiply"], tools["add"]])


def test_funcCallJson(tools):
    assert tools["add"].funcCallJson() == {
        "type": "function",
        "function": {
            "name": "add",
            "description": "Add two numbers",
            "parameters": {
                "type": "object",
                "properties": {
                    "a": {"type": "integer", "description": "The first number", "title": "A"},
                    "b": {"type": "integer", "description": "The second number", "title": "B"},
                },
                "required": ["a", "b"],
                "title": "addInput",
            },
        },
    }

    assert tools["subtract"].funcCallJson() == {
        "type": "function",
        "function": {
            "name": "subtract",
            "description": "subtract a from b",
            "parameters": {
                "type": "object",
                "properties": {
                    "a": {"type": "integer", "description": "The subtrahend", "title": "A"},
                    "b": {"type": "integer", "description": "The minuend", "title": "B"},
                },
                "required": ["a", "b"],
                "title": "subtractInput",
            },
        },
    }


# need to figure out how to get this working in Jarvis
CAN_PUBLISH = not c3.GenAiPlatformTestApi.isRunningInJarvis()  # PKG.appMode() == "dev" and PKG.isUpdatable()


@pytest.mark.skipif(not CAN_PUBLISH, reason="Publish only works in dev mode")
def test_publish_toolkit_no_name(tools):
    toolkit = c3.GenaiCore.Toolkit(tools=[tools["add"]]).upsert(None, {"returnInclude": "this"})
    with pytest.raises(ValueError, match="Published toolkits must have a name"):
        toolkit.publishToolkit()


@pytest.mark.skipif(not CAN_PUBLISH, reason="Publish only works in dev mode")
def test_publish_toolkit_no_tools(tools):
    toolkit = c3.GenaiCore.Toolkit(name="test_toolkit_a").upsert(None, {"returnInclude": "this"})
    with pytest.raises(ValueError, match="Published toolkits must have at least one tool"):
        toolkit.publishToolkit()


def _expected_url(tool_or_kit):
    return f"meta://{PKG.name()}/seed/{tool_or_kit.type().name()}/{tool_or_kit.id}.json"


def _check_published_toolkit(
    tools, toolkit, pre_publish_tool_urls, expected_tool_names, expected_new_url_count, is_republish=False
):
    published_tools = toolkit.allTools()
    assert len(published_tools) == len(expected_tool_names)
    assert set(tool.name for tool in published_tools) == set(expected_tool_names)
    post_publish_tool_urls = _published_tool_file_urls()
    new_tool_urls = post_publish_tool_urls - pre_publish_tool_urls

    assert len(new_tool_urls) == expected_new_url_count

    assert (_expected_url(toolkit) in new_tool_urls) == (not is_republish)

    for tool in published_tools:
        tool_name = tool.name
        original_tool = tools[tool_name]
        assert tool.id != original_tool.id
        for field_name in ["name", "argsSchema", "description", "descriptionForLlm"]:
            assert getattr(tool, field_name) == getattr(original_tool, field_name)
        assert tool.standalonePyFuncCode == original_tool.standalonePyFuncCode  # property, not field/attribute
        assert tool.call(a=6, b=42) == original_tool.call(a=6, b=42)

        expected_url = _expected_url(tool)
        assert expected_url in new_tool_urls
        instance_json = tool.toTypedJson()
        assert instance_json == json.loads(PKG.file(expected_url).readString())
        assert tool.type().fromJsonString(PKG.file(expected_url).readString()).call(a=6, b=42) == original_tool.call(
            a=6, b=42
        )

        if tool_name == "subtract":  # native py tool
            assert tool.pySrc.url != original_tool.pySrc.url
            assert tool.pySrc.readString() == original_tool.pySrc.readString()
            assert tool.pySrc.url in new_tool_urls


@pytest.mark.skipif(not CAN_PUBLISH, reason="Publish only works in dev mode")
def test_publish_toolkit_flat(tools):
    toolkit = c3.GenaiCore.Toolkit(name="test_toolkit_a", tools=[tools["add"], tools["subtract"]]).upsert(
        None, {"returnInclude": "this"}
    )
    assert toolkit.isPublished is False
    pre_publish_tool_urls = _published_tool_file_urls()
    toolkit = toolkit.publishToolkit()
    assert toolkit.isPublished is True
    published_toolkit = c3.GenaiCore.Toolkit.fromJsonString(PKG.file(_expected_url(toolkit)).readString())
    # 2 tools, 1 src file, toolkit -> 4 new urls
    _check_published_toolkit(
        tools, published_toolkit, pre_publish_tool_urls, ["add", "subtract"], expected_new_url_count=4
    )

    with pytest.raises(RuntimeError, match=f"The toolkit with name '{toolkit.name}' has already been published"):
        toolkit.publishToolkit()

    # republish with different tools
    toolkit = toolkit.withTools([tools["subtract"], tools["multiply"]]).upsert(None, {"returnInclude": "this"})
    assert toolkit.isPublished is True

    with pytest.raises(RuntimeError, match=f"The toolkit with name '{toolkit.name}' has already been published"):
        toolkit.publishToolkit()

    pre_publish_tool_urls = _published_tool_file_urls()
    toolkit.publishToolkit(republish=True)
    published_toolkit = c3.GenaiCore.Toolkit.fromJsonString(PKG.file(_expected_url(toolkit)).readString())
    # 2 tools, 1 src file -> 3 new urls
    _check_published_toolkit(
        tools,
        published_toolkit,
        pre_publish_tool_urls,
        ["subtract", "multiply"],
        expected_new_url_count=3,
        is_republish=True,
    )


@pytest.mark.skipif(not CAN_PUBLISH, reason="Publish only works in dev mode")
def test_publish_toolkit_nested(tools):
    toolkit_a = c3.GenaiCore.Toolkit(name="test_toolkit_a", tools=[tools["add"], tools["subtract"]]).upsert(
        None, {"returnInclude": "this"}
    )
    toolkit_b = c3.GenaiCore.Toolkit(name="test_toolkit_b", tools=[tools["multiply"], toolkit_a]).upsert(
        None, {"returnInclude": "this"}
    )
    assert toolkit_a.isPublished is False
    assert toolkit_b.isPublished is False
    pre_publish_tool_urls = _published_tool_file_urls()
    toolkit_b = toolkit_b.publishToolkit()
    toolkit_a = toolkit_b.tools[1].get(include="this")
    # need to reget the instance of toolkit_a
    assert toolkit_a.isPublished is True
    assert toolkit_b.isPublished is True
    toolkit_a = c3.GenaiCore.Toolkit.fromJsonString(PKG.file(_expected_url(toolkit_a)).readString())
    toolkit_b = c3.GenaiCore.Toolkit.fromJsonString(PKG.file(_expected_url(toolkit_b)).readString())
    # 3 tools, 1 src file, 2 toolkits -> 6 new urls
    _check_published_toolkit(tools, toolkit_a, pre_publish_tool_urls, ["add", "subtract"], expected_new_url_count=6)
    _check_published_toolkit(
        tools, toolkit_b, pre_publish_tool_urls, ["add", "subtract", "multiply"], expected_new_url_count=6
    )

    toolkit_b_tool_or_kit_ids = set(tool.id for tool in toolkit_b.tools)
    assert toolkit_a.id in toolkit_b_tool_or_kit_ids
    for tool in toolkit_a.allTools():
        assert tool.id not in toolkit_b_tool_or_kit_ids  # should only be transitively via allTools

    with pytest.raises(RuntimeError, match=f"The toolkit with name '{toolkit_b.name}' has already been published"):
        toolkit_b.publishToolkit()

    with pytest.raises(RuntimeError, match=f"The toolkit with name '{toolkit_a.name}' has already been published"):
        toolkit_a.publishToolkit()


# testing behavior when the inner toolkit is already published
@pytest.mark.skipif(not CAN_PUBLISH, reason="Publish only works in dev mode")
def test_publish_toolkit_nested_2(tools):
    toolkit_a = c3.GenaiCore.Toolkit(name="test_toolkit_a", tools=[tools["add"], tools["subtract"]]).upsert(
        None, {"returnInclude": "this"}
    )
    assert toolkit_a.isPublished is False
    toolkit_a = toolkit_a.publishToolkit()
    assert toolkit_a.isPublished is True
    toolkit_b = c3.GenaiCore.Toolkit(name="test_toolkit_b", tools=[tools["multiply"], toolkit_a]).upsert(
        None, {"returnInclude": "this"}
    )
    with pytest.raises(RuntimeError, match=f"The toolkit with name '{toolkit_a.name}' has already been published"):
        toolkit_b.publishToolkit()

    toolkit_b = toolkit_b.publishToolkit(republish=True)
    assert len(c3.GenaiCore.Toolkit.fromJsonString(PKG.file(_expected_url(toolkit_a)).readString()).tools) == 2

    toolkit_a = toolkit_a.get().withTools([tools["add"]]).upsert(None, {"returnInclude": "this"})
    toolkit_b = toolkit_b.withTools([tools["multiply"], toolkit_a]).upsert(None, {"returnInclude": "this"})

    toolkit_a = c3.GenaiCore.Toolkit.fromJsonString(PKG.file(_expected_url(toolkit_a)).readString())
    toolkit_b = c3.GenaiCore.Toolkit.fromJsonString(PKG.file(_expected_url(toolkit_b)).readString())

    assert [t.name for t in toolkit_a.allTools()] == [
        "add",
        "subtract",
    ]
    assert set(t.name for t in toolkit_b.allTools()) == set(["add", "multiply"])
