# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=redefined-outer-name

# NOTE: Most of the functionality of Tool.C3MemberMethod is inherited from Tool.C3Method and therefore
# tested in test_tool_c3method.py. This file only tests the additional functionality of C3MemberMethod.

# NOTE 2: Obviously the test case is pretty 'artificial' (in terms of using other instantiation methods for an entity)
# but it's just to show the functionality of the tool/that it 'obeys' the instantiation method.

import pytest

INSTANCE_NAME = "fido"
METHOD_NAME = "repeatName"
METHOD_TYPE = c3.GenaiCore.Tool.C3Method.TestType.meta().method(METHOD_NAME).overloads()[0]


@pytest.fixture()
def instance():
    inst = c3.GenaiCore.Tool.C3Method.TestType(name=INSTANCE_NAME).create()
    yield inst
    inst.remove()


@pytest.mark.parametrize(
    "instantiation_method, expected",
    [
        (None, INSTANCE_NAME * 3),
        ("forId", INSTANCE_NAME * 3),
        ("forName", f"not {INSTANCE_NAME}" * 3),
        ("make", "foo" * 3),  # see below
    ],
)
def test_creation_and_invocation(instance, instantiation_method, expected):
    if instantiation_method is None:
        spec = {}
    else:
        spec = {"instantiationMethod": instantiation_method}
    spec = c3.GenaiCore.Tool.C3MemberMethod.Spec(**spec)
    tool = c3.GenaiCore.Tool.C3MemberMethod.createFromObjAndMethodName(
        instance=instance, methodName=METHOD_NAME, spec=spec
    )

    assert tool is not None
    assert tool.id.startswith(f"{METHOD_TYPE.parentType()}_{METHOD_TYPE.name}_{METHOD_TYPE.ordinal()}")
    assert tool.name == METHOD_TYPE.name
    assert tool.instance.id == instance.id
    assert tool.instantiationMethod == (instantiation_method if instantiation_method is not None else "forId")
    assert tool.methodType == METHOD_TYPE.toRef()

    if instantiation_method == "make":
        # want to show that we are not retrieving the instance from the db
        tool.withInstance(instance.withName("foo")).merge(mergeInclude="instance")
        assert tool.get("instance").instance.name == "foo"
        assert instance.get("name").name == INSTANCE_NAME

    assert tool.call(3) == expected
    assert tool.func(3) == expected
    assert tool.call(**{"n": 3}) == expected

    new_globals = {"c3": c3}
    exec(tool.standalonePyFuncCode, new_globals)  # pylint: disable=exec-used
    if instantiation_method == "make":
        # standalonePyFuncCode is set when the tool is created, so it won't have the updated name
        assert (
            new_globals[METHOD_NAME](3) == INSTANCE_NAME * 3
        ), f"Expected standalone func for {METHOD_NAME}(3) to be {expected}"
    else:
        assert (
            new_globals[METHOD_NAME](3) == expected
        ), f"Expected standalone func for {METHOD_NAME}(3) to be {expected}"

    # call/func should be cached and should not re-retrieve the instance
    tool.get().withInstance(instance.withName("bar").withId("blah")).merge(mergeInclude="instance")
    instance.remove()
    assert tool.call(3) == expected
    assert tool.func(3) == expected
