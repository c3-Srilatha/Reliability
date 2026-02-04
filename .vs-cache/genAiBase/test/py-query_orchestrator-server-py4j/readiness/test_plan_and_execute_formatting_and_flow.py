# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = redefined-outer-name, line-too-long
from typing import List
import json
from datetime import datetime
import pytest
from PIL import Image, PngImagePlugin
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

from c3agents.plan_and_execute.components.toolkit.toolkit import Toolkit
from c3agents.plan_and_execute.components.toolkit.python_agent_toolkit import PythonAgentToolkit
from c3agents.plan_and_execute.components.object_reference import (
    ObjectReferenceManager,
    ObjectReferenceFactory,
    ObjectReferenceConstants,
)

ExecutionGraph = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/plan_and_execute/formatting_and_parsing/execution_graph.py",
    ["ExecutionGraph"],
)
FunctionCallStep, FunctionCallStepSpec = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/plan_and_execute/formatting_and_parsing/function_calling_steps.py",
    ["FunctionCallStep", "FunctionCallStepSpec"],
)

get_mock_stock_prices = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/test/resource/Genai.Agent.Dynamic/test_tool_stock_prices.py",
    ["get_mock_stock_prices"],
)

create_png_image_file = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/test/py-query_orchestrator-server-py4j/readiness/utils.py",
    ["create_png_image_file"],
)


def information_retrieval_tool(query: str) -> dict:
    """
    Retrieves information from multiple sources. E.g. DB query, Unstructured vectorstore, etc..

    Args:
        query (str): User query to get information from

    Returns:
        c3.Genai.Query.Result: The result of the information retrieval query.
    """
    return query


def final_answer(query: str, relevant_information: List[object]) -> str:
    """
    Takes in all the tool outputs and produces an observation.

    Args:
        query (str): User query to get information from.

    Returns:
        str: The final answer to send to the user.
    """
    return {"query": query, "relevant_information": relevant_information}


@pytest.fixture(scope="module", autouse=True)
def test_toolkit():
    toolkit = Toolkit.from_function_list([information_retrieval_tool, final_answer])
    toolkit.register_tools(True)
    yield toolkit


@pytest.fixture(scope="module", autouse=True)
def test_python_toolkit():
    python_toolkit = PythonAgentToolkit.from_function_list([information_retrieval_tool, final_answer])
    python_toolkit.register_tools(True)
    yield python_toolkit


@pytest.fixture(scope="module")
def test_case_trajectory():
    # Load serialized trajectory
    file_path = "/genAiBase/test/resource/planAndExecute/test_serialized_trajectory.json"
    metadata_file = c3.Pkg.file(file_path)
    yield json.loads(metadata_file.readString())


@pytest.fixture(scope="module")
def test_png_encoded_image_urls():
    file_path = "/genAiBase/test/resource/planAndExecute/test_png_encoded_image_urls.json"
    metadata_file = c3.Pkg.file(file_path)
    yield json.loads(metadata_file.readString())


parse_dict = """ Some free text here

```json

{
    "A key": [{"1": ["2"]}]
}

```
"""
parse_list = """ Some free text here

```json
[
    {
        "A key": [{"1": ["2"]}]
    }
]
```
"""
TEST_CASES_PARSE_LLM_SYNTHETIC_DATA = [
    (parse_dict, {"A key": [{"1": ["2"]}]}),
    (parse_list, [{"A key": [{"1": ["2"]}]}]),
]


def test_format_toolkit(test_toolkit):
    output_toolkit_description = test_toolkit.format_toolkit()
    target_toolkit_description = '{\n    "tools": [\n        {\n            "name": "information_retrieval_tool",\n            "description": "Retrieves information from multiple sources. E.g. DB query, Unstructured vectorstore, etc..\\n\\nArgs:\\n    query (str): User query to get information from\\n\\nReturns:\\n    c3.Genai.Query.Result: The result of the information retrieval query.",\n            "parameters": {\n                "query": {\n                    "type": "str",\n                    "default_value_repr": null\n                }\n            },\n            "return_type": "dict"\n        },\n        {\n            "name": "final_answer",\n            "description": "Takes in all the tool outputs and produces an observation.\\n\\nArgs:\\n    query (str): User query to get information from.\\n\\nReturns:\\n    str: The final answer to send to the user.",\n            "parameters": {\n                "query": {\n                    "type": "str",\n                    "default_value_repr": null\n                },\n                "relevant_information": {\n                    "type": "typing.List[object]",\n                    "default_value_repr": null\n                }\n            },\n            "return_type": "str"\n        }\n    ]\n}'
    assert (
        target_toolkit_description == output_toolkit_description
    ), f"Expected {target_toolkit_description=} to be {output_toolkit_description=}."


TARGET_VERBALIZATION = """We are executing the following plan to answer the query 'example query'

Step: 0
Tool: information_retrieval_tool
Query: Some other query

Step: 1
Tool: information_retrieval_tool
Query: sales and revenue in Q1 of 2023

Step: 2
Tool: table_reasoning_tool
Query: calculate ratio of sales to revenue for Q2 2023

Step: 3
Tool: some_step
Query: What was the ratio of sales to revenue in Q3 of 2023?

Step: 4
Tool: some_other_step
Query: What was the ratio of sales to revenue in Q4 of 2023?

Step: 5
Tool: final_answer
Query: Some other query {$sales_revenue_ratio} and {$sales_revenue_data}."""


def test_plan_and_execute_flow():
    TEST_PLAN = """[
    {
        "step": 0,
        "tool": "information_retrieval_tool",
        "parameters": {
        "query": "Some other query"
        }
    },
    {
        "step": 1,
        "tool": "information_retrieval_tool",
        "parameters": {
        "query": "sales and revenue in Q1 of 2023"
        },
        "output_variable": "sales_revenue_data"
    },
    {
        "step": 2,
        "tool": "table_reasoning_tool",
        "parameters": {
        "query": "calculate ratio of sales to revenue for Q2 2023",
        "tables": {
            "sales_revenue_table": ["$sales_revenue_data"]
        }
        },
        "output_variable": "sales_revenue_ratio"
    },
    {
        "step": 3,
        "tool": "some_step",
        "parameters": {
        "query": "What was the ratio of sales to revenue in Q3 of 2023?",
        "relevant_information": ["$sales_revenue_ratio"]
        }
    },
    {
        "step": 4,
        "tool": "some_other_step",
        "parameters": {
        "query": "What was the ratio of sales to revenue in Q4 of 2023?",
        "relevant_information": "$sales_revenue_ratio"
        }
    },
        {
        "step": 5,
        "tool": "final_answer",
        "parameters": {
        "query": "Some other query {$sales_revenue_ratio} and {$sales_revenue_data}."
        }
        }
    ]"""

    execution_graph = ExecutionGraph(TEST_PLAN)
    target_nodes = ["0", "1", "2", "3", "4", "5"]
    output_nodes = sorted(list(execution_graph.graph.nodes))
    assert output_nodes == target_nodes, f"Expected {output_nodes=} to be {target_nodes=}."

    target_edges = [("1", "2"), ("1", "5"), ("2", "3"), ("2", "4"), ("2", "5")]
    output_edges = sorted(list(execution_graph.graph.edges), key=str)
    assert output_edges == target_edges, f"Expected {output_edges=} to be {target_edges=}."

    target_execution_flow = [["0", "1"], ["2"], ["3", "4", "5"]]
    output_execution_flow = execution_graph.execution_flow()
    assert (
        output_execution_flow == target_execution_flow
    ), f"Expected {output_execution_flow=} to be {target_execution_flow=}."

    output_verbalization = execution_graph.verbalize_plan("example query")
    assert (
        output_verbalization == TARGET_VERBALIZATION
    ), f"Expected {output_verbalization=} to be {TARGET_VERBALIZATION=}"


NESTED_DICT = {str(i): ["".join([str(j) for j in range(5)]) for _ in range(5)] for i in range(10)}
NESTED_LIST = [list(range(10)) for i in range(10)]

text = {"id": "1", "object": "hello"}
data_frame = {"id": "2", "object": pd.DataFrame(NESTED_DICT)}
int_ = {"id": "3", "object": 3}
float_ = {"id": "4", "object": 3.3}
list_ = {"id": "5", "object": NESTED_LIST}
dict_ = {"id": "6", "object": NESTED_DICT}
np_array = {"id": "7", "object": np.array(NESTED_LIST)}
# Create a sample figure with both line and scatter plots
fig, ax = plt.subplots()
x = np.linspace(0, 10, 100)
y = np.sin(x)
ax.plot(x, y, label="sin(x)")

ax.set_xlabel("x")
ax.set_ylabel("Value")
ax.set_title("Line and Scatter Plot")
plt_figure = {"id": "8", "object": fig}
image = {"id": "9", "object": Image.new("RGB", (100, 100), color="blue")}
datetime_ = {"id": "10", "object": datetime(2024, 1, 1)}
multi_index_df = {"id": "11", "object": get_mock_stock_prices()}
png_image = create_png_image_file()
png_image_file = {"id": "12", "object": png_image}

TEST_CASES_FORMAT_OBJECTS = [
    (
        [text, data_frame],
        {},
        '{\n    "1": {\n        "object": "hello",\n        "type": "str",\n        "modality": "text"\n    },\n    "2": {\n        "object": "       0      1      2      3      4      5      6      7      8      9\\n0  01234  01234  01234  01234  01234  01234  01234  01234  01234  01234\\n1  01234  01234  01234  01234  01234  01234  01234  01234  01234  01234\\n2  01234  01234  01234  01234  01234  01234  01234  01234  01234  01234\\n3  01234  01234  01234  01234  01234  01234  01234  01234  01234  01234\\n4  01234  01234  01234  01234  01234  01234  01234  01234  01234  01234\\n\\n[5 rows x 10 columns]",\n        "type": "pandas.core.frame.DataFrame",\n        "modality": "table"\n    }\n}',
    ),
    (
        [data_frame],
        {"kwargs": {"PandasTable": {"max_colwidth": 10, "max_rows": 3, "max_cols": 3}}},
        '{\n    "2": {\n        "object": "        0  ...      9\\n0   01234  ...  01234\\n..    ...  ...    ...\\n4   01234  ...  01234\\n\\n[5 rows x 10 columns]",\n        "type": "pandas.core.frame.DataFrame",\n        "modality": "table"\n    }\n}',
    ),
    (
        [int_, float_, list_, dict_, np_array, plt_figure],
        {},
        "{\n    \"3\": {\n        \"object\": \"3\",\n        \"type\": \"int\",\n        \"modality\": \"python_native\"\n    },\n    \"4\": {\n        \"object\": \"3.3\",\n        \"type\": \"float\",\n        \"modality\": \"python_native\"\n    },\n    \"5\": {\n        \"object\": \"[[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]\",\n        \"type\": \"list\",\n        \"modality\": \"python_native\"\n    },\n    \"6\": {\n        \"object\": \"{'0': ['01234', '01234', '01234', '01234', '01234'], '1': ['01234', '01234', '01234', '01234', '01234'], '2': ['01234', '01234', '01234', '01234', '01234'], '3': ['01234', '01234', '01234', '01234', '01234'], '4': ['01234', '01234', '01234', '01234', '01234'], '5': ['01234', '01234', '01234', '01234', '01234'], '6': ['01234', '01234', '01234', '01234', '01234'], '7': ['01234', '01234', '01234', '01234', '01234'], '8': ['01234', '01234', '01234', '01234', '01234'], '9': ['01234', '01234', '01234', '01234', '01234']}\",\n        \"type\": \"dict\",\n        \"modality\": \"python_native\"\n    },\n    \"7\": {\n        \"object\": \"array([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\\n       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\\n       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\\n       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\\n       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\\n       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\\n       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\\n       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\\n       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\\n       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]])\",\n        \"type\": \"np.ndarray\",\n        \"modality\": \"python_native\"\n    },\n    \"8\": {\n        \"object\": \"Matplotlib figure\\nWith title(s): Line and Scatter Plot\\nWith label(s):\\nAxis 0:\\nx-axis: x\\ny-axis: Value\\n...\",\n        \"type\": \"plt.Figure\",\n        \"modality\": \"image\"\n    }\n}",
    ),
    (
        [image],
        {},
        '{\n    "9": {\n        "object": "<PIL.Image.Image image mode=RGB size=100x100',
    ),
    (
        [png_image_file],
        {},
        '{\n    "12": {\n        "object": "<PIL.PngImagePlugin.PngImageFile image mode=RGB size=100x100',
    ),
]


@pytest.mark.parametrize("test_objects, kwargs, target", TEST_CASES_FORMAT_OBJECTS)
def test_object_reference_manager_format_objects_as_string(test_objects, kwargs, target):
    reference_manager = ObjectReferenceManager(test_objects, kwargs)
    output = reference_manager.format_objects_as_string().split(" at ")[
        0
    ]  # Remove the memory address E.g. (' at 0x79592BD2B910>')
    assert output == target, f"Expected {output=} to be {target=}."


TEST_CASE_OBJECT_SERIALIZATION = [
    text,
    data_frame,
    int_,
    float_,
    list_,
    dict_,
    np_array,
    plt_figure,
    datetime_,
    png_image_file,
]


@pytest.mark.parametrize("object_dict", TEST_CASE_OBJECT_SERIALIZATION)
def test_object_serialization(object_dict):
    object_ = ObjectReferenceFactory.create_object_reference(id_=object_dict["id"], obj=object_dict["object"])
    object_type = type(object_)

    object_json = object_.to_json()

    json.dumps(object_json)  # Ensure it is json serializable
    reconstructed_object = object_type.from_json(object_json)

    assert_message = f"Expected {object_dict['id']=} to be the same after reconstruction from json."

    if isinstance(object_.object, pd.DataFrame):
        assert object_.object.equals(reconstructed_object.object), assert_message

    elif isinstance(object_.object, np.ndarray):
        assert (object_.object == reconstructed_object.object).all(), assert_message

    elif isinstance(object_.object, plt.Figure):
        assert object_.format_object_for_llm() == reconstructed_object.format_object_for_llm(), assert_message
    elif isinstance(object_.object, PngImagePlugin.PngImageFile):
        assert reconstructed_object.type == "PIL.Image.Image", assert_message
    else:
        assert object_.object == reconstructed_object.object, assert_message


def test_complex_nested_object_serialization():
    complex_nested_object = {
        "answer": "Some text answer",
        "some_list": [
            {"sub_df": pd.DataFrame([2])},
            "a string",
            [1],
            {"in set"},
            np.array([0]),
            ("tuple"),
        ],
    }
    orm_json = ObjectReferenceManager(
        objects=[{"id": "complex_nested_object", "object": complex_nested_object}],
    ).to_json()

    file = c3.Pkg.File(url="meta://genAiBase/test/resource/planAndExecute/test_complex_orm.json")
    target_serlialized_orm = json.loads(file.readString())
    differences = c3.TestApi.findDictionaryDifferences(target_serlialized_orm, orm_json)
    assert not differences, f"Expected no {differences=}."

    reconstructed_orm = ObjectReferenceManager.from_json(orm_json)
    reconstructed_object = reconstructed_orm.objects["complex_nested_object"].object

    differences_in_reconstructed_object = c3.TestApi.findDictionaryDifferences(
        reconstructed_object, complex_nested_object
    )
    assert not differences_in_reconstructed_object, f"Expected no {differences_in_reconstructed_object=}."


trajectory_example = 'Example 0\nquery:\nWhen did the virtual console system when Japan had 102 games come out?\nplan:\n[\n    {\n        "step": "1",\n        "tool": "information_retrieval_tool",\n        "parameters": {\n            "query": "When was the virtual console system with 102 games released in Japan?"\n        },\n        "output_variable": "release_date_info"\n    },\n    {\n        "step": "2",\n        "tool": "final_answer",\n        "parameters": {\n            "query": "When did the virtual console system when Japan had 102 games come out?",\n            "relevant_information": {\n                "release_date": "$release_date_info"\n            }\n        },\n        "output_variable": null\n    }\n]'
trajectory_example = "Example 0\nquery:\nWhen did the virtual console system when Japan had 102 games come out?\nplan:"
information_retrieval_example = 'Example 0\nspecified parameters\n{\n    "query": {\n        "value": "When was the virtual console system with 102 games released in Japan?",\n        "assignment_type": "direct"\n    }\n}'
final_answer_example = 'Example 0\nspecified parameters\n{\n    "query": {\n        "value": "When did the virtual console system when Japan had 102 games come out?",\n        "assignment_type": "direct"\n    },\n    "relevant_information": {\n        "release_date": {\n            "value": "release_date_info__answer",\n            "assignment_type": "reference"\n        }\n    }\n}'


def test_python_toolkit_format_toolkit(test_python_toolkit):
    target_toolkit_description = 'def final_answer(query: str, relevant_information: typing.List[object]) -> str:\n\t"""Takes in all the tool outputs and produces an observation.\n\n\tArgs:\n\t    query (str): User query to get information from.\n\n\tReturns:\n\t    str: The final answer to send to the user."""\n\ndef information_retrieval_tool(query: str) -> dict:\n\t"""Retrieves information from multiple sources. E.g. DB query, Unstructured vectorstore, etc..\n\n\tArgs:\n\t    query (str): User query to get information from\n\n\tReturns:\n\t    c3.Genai.Query.Result: The result of the information retrieval query."""'
    output_toolkit_description = test_python_toolkit.format_toolkit()
    assert (
        target_toolkit_description == output_toolkit_description
    ), f"Expected {target_toolkit_description=} to be {output_toolkit_description=}."


df = pd.DataFrame([[1], [3], [4]], columns=["col"])
TEST_ORM = ObjectReferenceManager(
    [
        {"id": "string", "object": "some_string"},
        {"id": "df", "object": df},
    ],
)
KWARGS_WITH_NATIVE_DICT = {
    "query": {"value": "some_string", "assignment_type": "direct"},
    "relevant_information": {
        "list_of_strings": [{"value": "string", "assignment_type": "reference"}],
        "referenced_df": {"value": "df", "assignment_type": "reference"},
    },
}
KWARGS_WITH_ASSIGNED_DICT = {
    "query": {"value": "some_string", "assignment_type": "direct"},
    "relevant_information": {
        "value": {
            "list_of_strings": {
                "value": [{"value": "string", "assignment_type": "reference"}],
                "assignment_type": "direct",
            },
            "referenced_df": {"value": "df", "assignment_type": "reference"},
        },
        "assignment_type": "direct",
    },
}
TARGET_CASE1 = {
    "query": "some_string",
    "relevant_information": {"list_of_strings": ["some_string"], "referenced_df": df},
}

TEST_CASES = [
    (KWARGS_WITH_NATIVE_DICT, TARGET_CASE1),
    (KWARGS_WITH_ASSIGNED_DICT, TARGET_CASE1),
]


@pytest.mark.parametrize("kwargs, target", TEST_CASES)
def test_construct_keyword_argument_variable_assignment(kwargs, target, test_toolkit):
    step = FunctionCallStep(
        step_id="1",
        spec=FunctionCallStepSpec(
            tool=test_toolkit.tools["final_answer"],
            parameters=None,
            inputs=[],
            outputs=[],
            output_variable="final_answer",
        ),
        input_objects=TEST_ORM,
        execution_kwargs=kwargs,
    )
    tool_kwargs = {}
    for parameter_name, value_def in step.execution_kwargs.items():
        tool_kwargs[parameter_name] = step.construct_keyword_argument(value_def)
    differences = c3.TestApi.findDictionaryDifferences(target, tool_kwargs)
    assert not differences, f"Expected no {differences=}."


def test_object_reference_manager_to_ui_():
    # Set the uiDataCreator. Resetting here as one of the test is modifying the uiDataCreator making this test fail.
    uiDataCreator = {
        "default": {"typeName": "Genai.Agent.Dynamic.UiHelpers", "actionName": "defaultForUiHelper"},
        "PandasTable": {"typeName": "Genai.Agent.Dynamic.UiHelpers", "actionName": "pandasForUiHelper"},
        "PILImage": {"typeName": "Genai.Agent.Dynamic.UiHelpers", "actionName": "pilForUiHelper"},
        "MatplotlibFigure": {"typeName": "Genai.Agent.Dynamic.UiHelpers", "actionName": "matplotForUiHelper"},
        "PlotlyFigure": {"typeName": "Genai.Agent.Dynamic.UiHelpers", "actionName": "plotlyForUiHelper"},
        "PngImageFile": {"typeName": "Genai.Agent.Dynamic.UiHelpers", "actionName": "pilForUiHelper"},
    }
    native_helpers = {}
    for class_name, action_ref_desc in uiDataCreator.items():
        action_ref = c3.ActionRef(typeName=action_ref_desc["typeName"], actionName=action_ref_desc["actionName"])
        native_action_method = getattr(action_ref.toType(), action_ref.actionName)
        native_helpers[class_name] = native_action_method
    ObjectReferenceConstants.register_ui_helpers(native_helpers)

    test_objects = [int_, float_, list_, dict_, np_array, data_frame, plt_figure, multi_index_df, png_image_file]
    reference_manager = ObjectReferenceManager(test_objects)
    output = c3.Genai.Agent.ObjectReference.objectReferenceManagerToUi(reference_manager)
    for i, test_obj in enumerate(test_objects):
        test_type = test_obj["object"]
        if isinstance(test_type, pd.DataFrame):
            df = output[i].get_df()
            if isinstance(test_type.columns, pd.MultiIndex) or isinstance(test_type.index, pd.MultiIndex):
                # ensure output df is flatened
                assert not isinstance(df.columns, pd.MultiIndex) and not isinstance(df.index, pd.MultiIndex)
            else:
                assert df.equals(test_type), f"Dataframe not the same for object {i}"
            assert output[i].data.type().meta().isA(c3.GenAiVisualizationBase)
        elif isinstance(test_type, plt.Figure) or isinstance(test_type, PngImagePlugin.PngImageFile):
            assert output[i].data.type().meta().isA(c3.File), f"Failed for object {i}"
            assert c3.File.make(output[i].data.url).readMetadata().contentLength > 0
        else:
            assert isinstance(output[i].data, str), f"Failed for object {i}"


# Make PIL Image
pil_image = Image.new("RGB", (100, 100), color="blue")

# Make pyplot figure
figure, ax = plt.subplots()
ax.imshow(pil_image)
ax.axis("off")

TEST_CASES_PNG_ENCODED_IMAGES_URL = [("pil_image_url", pil_image), ("plt_figure_url", figure)]


@pytest.mark.parametrize("key, image", TEST_CASES_PNG_ENCODED_IMAGES_URL)
def test_encode_images_as_png_urls(key, image, test_png_encoded_image_urls):
    target = test_png_encoded_image_urls[key]
    output = ObjectReferenceConstants.create_object_reference(id="image", obj=image).to_image_url()
    assert output == target
