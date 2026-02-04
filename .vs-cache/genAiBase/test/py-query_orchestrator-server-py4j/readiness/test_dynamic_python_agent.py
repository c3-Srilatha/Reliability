# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=line-too-long, unused-argument, wrong-import-position
import re
import json
import pytest
from PIL import Image
import numpy as np

# Wokaround for https://c3energy.atlassian.net/browse/PLAT-39737
c3.Genai.PyUtil.setC3()
from c3agents.components import PromptTemplate
from c3agents.plan_and_execute.components.steps.python_agent_steps import (
    PythonAgentStep,
    PythonAgentCallStep,
    PythonAgentStepType,
)
from c3agents.plan_and_execute.components.trajectory.python_agent_trajectory import PythonAgentTrajectory
from c3agents.plan_and_execute.components.chat_manager.python_agent_chat_manager import PythonAgentChatManager
from c3agents.plan_and_execute.agents.dynamic_python_agent import DynamicPythonAgent, SYSTEM_PROMPT
from c3agents.plan_and_execute.components.toolkit.python_agent_toolkit import PythonAgentToolkit
from c3agents.plan_and_execute.agents.python_agent import PythonAgentOnStepCallbacksSpec
from c3agents.plan_and_execute.components.code_executor.callbacks.callbacks_validator import CallbackValidator
from c3agents.plan_and_execute.components.steps.abstract import StepStatus

RETURN_ERROR = """
<execute>
print(var)
output = 1/var
print(output)
"""

SOLUTION = """
<solution>
solution
"""

RETURN_VAR_DISPLAY = """
<execute>
output = var
display(output)
"""


def dummy_llm_execution_flow(query, counter=[0]):
    counter[0] += 1
    if counter[0] % 3 == 1:
        return RETURN_ERROR
    if counter[0] % 3 == 2:
        return RETURN_VAR_DISPLAY
    return SOLUTION


def dummy_tool(arg: dict) -> str:
    """some dummy tool"""
    return "dummy"


TOOLKIT = PythonAgentToolkit.from_function_list([dummy_tool])


def test_execution_flow():
    agent = DynamicPythonAgent(llm=dummy_llm_execution_flow, toolkit=TOOLKIT)
    trajectory = agent.run_step(
        query="Show me a graph of the average time taken by step",
        input_vars={"var": 0},
        max_steps=4,
    )

    # First call step should contain Errored and Completed in that order. Call step status should be completed.
    assert trajectory.final_step.status == StepStatus.COMPLETED.value
    for step_id, target_status in enumerate([StepStatus.ERRORED.value, StepStatus.COMPLETED.value]):
        assert (
            trajectory.final_step.steps[str(step_id)].status == target_status
        ), f"Expected {trajectory.final_step.steps[str(step_id)].status=} to be {target_status=}. For {step_id=}"

    # Test the trajectory is correctly formatted
    target_filled_prompt = (
        c3.Pkg.file("meta://genAiBase/test/resource/pythonAgent/dynamic_python_agent_chat.txt").readString().strip()
    )  # We strip, since the linter forces a newline to be introduced (in the test case file)
    # however, it should not be there.
    filled_prompt = (
        agent.prompt_generator.format_conversation_history(query="user query", trajectory=trajectory).context
    ).strip()

    # Remove the line numbers and file paths ending with "python_code_executor.py" in one step.
    pattern = r"line \d+|[^\s]*python_code_executor\.py"
    filled_prompt = re.sub(pattern, "", filled_prompt)
    target_filled_prompt = re.sub(pattern, "", target_filled_prompt)
    assert target_filled_prompt in filled_prompt, f"Expected {target_filled_prompt=} to be in {filled_prompt=}."


RETURN_VAR = """
<execute>
output = var
print(output)
"""

MISSING_CODE = """
print("no code")
"""

MISSING_OUTPUT = """
<execute>
a = 3
"""

INVALID_CODE = """
<execute>
print(a)
"""

TEST_CASE_RETRY = [
    (RETURN_VAR, "Stdout:0"),
    (
        MISSING_CODE,
        "The previously generated output is not parsable.\nPlease generate some output between the relevant tags.\n\nYou must write your output as follows:\n<tag_type>\nContent here\n</tag_type>",
    ),
    (
        MISSING_OUTPUT,
        "ValueError: \nNo relevant output was produced by the previous answer. To ensure visibility of results, the generated code\nmust include at least one of the following:\n- `print(relevant_var)` to display relevant variables or output.\n- `plt.show()` to render and display any plots or graphs.\n",
    ),
    (INVALID_CODE, "NameError: name 'a' is not defined"),
]


@pytest.mark.parametrize("code_snippet, target_substring", TEST_CASE_RETRY)
def test_retry_options(code_snippet, target_substring):
    agent = DynamicPythonAgent(llm=lambda query: code_snippet)
    trajectory = agent.run_step(query="Query", input_vars={"var": 0}, max_steps=2)
    filled_prompt = (
        PythonAgentChatManager(system_prompt=PromptTemplate.from_string(SYSTEM_PROMPT))
        .format_conversation_history(query="user query", trajectory=trajectory)
        .context
    )
    assert target_substring in filled_prompt, f"Expected {target_substring=} to be in {filled_prompt}"


def test_max_step_exceeded():
    from functools import partial

    dummy_llm = partial(dummy_llm_execution_flow, counter=[0])
    agent = DynamicPythonAgent(
        llm=dummy_llm,
        toolkit=TOOLKIT,
    )

    # The first two calls do not have solution in dummy_llm_execution_flow().
    # The third call has a solution so the max_steps=2 would force the solution and return a solution.
    trajectory = agent.run_step(
        query="call dummy_tool twice and concatenate the outputs",
        max_steps=2,
    )
    assert (
        trajectory.final_step.final_text_answer == "solution"
    ), f"Expected the final answer to be 'solution' but got {trajectory.final_step.final_text_answer}"
    assert (
        trajectory.final_step.final_step.tag == "solution"
    ), f"Expected the final step to have tag 'solution' but got {trajectory.final_step.tag}"
    assert trajectory.final_step.status == StepStatus.ERRORED.value
    assert "Exceeded max steps." in trajectory.final_step.logs["error"]


RETURN_PLAN = """
<planning>
1. Find best potato type
"""
RETURN_THOUGHT = """
<thought>
I like potatoes I need to find the best form of potato.
"""
RETURN_CODE = """
<code>
potato_feedback = "Tater tots are the superior form of potatoes"
print(potato_feedback)
"""
RETURN_ANSWER = """
<answer>
Tater tots are indeed the superior form of potato making
"""

responses = [RETURN_PLAN, RETURN_THOUGHT, RETURN_CODE, RETURN_THOUGHT, RETURN_CODE, RETURN_ANSWER]


def test_plan_react_tag_flow():
    metadata_file = c3.Pkg.file("/genAiBase/test/resource/pythonAgent/test_multi_step_chat_history.json")
    target_messages = json.loads(metadata_file.readString())

    def dummy_react_plan_llm(query, counter=[-1]):
        counter[0] += 1
        target = target_messages[str(counter[0])]
        output = query.chat_history

        target = json.loads(re.sub(r"0x[a-fA-F0-9]+", "", json.dumps(target)))
        output = json.loads(re.sub(r"0x[a-fA-F0-9]+", "", json.dumps(output)))
        differences_in_chat_history = c3.TestApi.findDictionaryDifferences(target, output)

        assert not differences_in_chat_history, f"Expected no {differences_in_chat_history=}."
        return responses[counter[0]]

    agent = DynamicPythonAgent(
        llm=dummy_react_plan_llm,
        tag_to_step_mapping={
            "planning": "TEXT",
            "thought": "TEXT",
            "code": "EXECUTE",
            "answer": "FINAL_ANSWER",
        },
    )

    trajectory = agent.run_step("What is the best type of potato?")
    sorted_steps = [trajectory.final_step.steps[id_] for id_ in trajectory.final_step.sorted_step_ids()]
    tags = [step.tag for step in sorted_steps]
    assert tags == ["planning", "thought", "code", "thought", "code", "answer"]

    tag_types = [step.tag_type for step in sorted_steps]
    assert tag_types == [
        PythonAgentStepType.TEXT,
        PythonAgentStepType.TEXT,
        PythonAgentStepType.EXECUTE,
        PythonAgentStepType.TEXT,
        PythonAgentStepType.EXECUTE,
        PythonAgentStepType.FINAL_ANSWER,
    ]


@pytest.fixture(scope="function")
def python_agent_with_on_step_callbacks():
    c3.setVar("test_dynamic_python_agent_global_var", None, True)

    def dummy_llm_execution_flow(query, counter=[0]):
        counter[0] += 1
        if counter[0] == 1:
            return """
<plan>
Make a plan
"""
        if counter[0] == 2:
            return """
<execute>
print(var)
output = 1/var
print(output)
"""
        return """
<solution>
solution
"""

    def on_step_start_dummy_callback(agent: DynamicPythonAgent, step: PythonAgentStep):
        global_var = c3.getVar("test_dynamic_python_agent_global_var") or ""
        global_var += f"on_step_start_with_toolkit_{list(agent.toolkit.tools)}\n"
        c3.setVar("test_dynamic_python_agent_global_var", global_var, True)

    def on_step_end_dummy_callback(agent: DynamicPythonAgent, step: PythonAgentStep):
        global_var = c3.getVar("test_dynamic_python_agent_global_var") or ""
        global_var += f"on_step_{step.step_id}_with_status_{step.status}_with_tag_{step.tag}_end\n"
        c3.setVar("test_dynamic_python_agent_global_var", global_var, True)

    def on_call_step_start_dummy_callback(agent: DynamicPythonAgent, call_step: PythonAgentCallStep):
        global_var = c3.getVar("test_dynamic_python_agent_global_var") or ""
        global_var += f"on_call_step_{call_step.step_id}_start\n"
        c3.setVar("test_dynamic_python_agent_global_var", global_var, True)

    def on_call_step_end_dummy_callback(agent: DynamicPythonAgent, call_step: PythonAgentCallStep):
        global_var = c3.getVar("test_dynamic_python_agent_global_var") or ""
        global_var += f"on_call_step_{call_step.step_id}_end\n"
        c3.setVar("test_dynamic_python_agent_global_var", global_var, True)

    def dummy_tool():
        pass

    toolkit = PythonAgentToolkit.from_function_list([dummy_tool])

    agent = DynamicPythonAgent(
        llm=dummy_llm_execution_flow,
        toolkit=toolkit,
        on_step_callbacks_spec=PythonAgentOnStepCallbacksSpec(
            on_step_start=[on_step_start_dummy_callback],
            on_step_end=[on_step_end_dummy_callback],
            on_call_step_start=[on_call_step_start_dummy_callback],
            on_call_step_end=[on_call_step_end_dummy_callback],
        ),
    )
    yield agent

    c3.setVar("test_python_agent_global_var", None, True)


@pytest.fixture(scope="function")
def python_agent_with_query_processing():
    def dummy_llm_execution_flow(query, counter=[0]):
        counter[0] += 1
        if counter[0] == 1:
            return f"""
<plan>
Make a plan
"""
        if counter[0] == 2:
            return """
<execute>
print("hello")
"""
        if counter[0] == 3:
            return """
<execute>
print("hello again")
"""
        if counter[0] == 4:
            return """
<execute>
print("hello once more")
"""
        return """
<solution>
solution
"""

    def on_call_step_start_preprocessing_callback(agent: DynamicPythonAgent, call_step: PythonAgentCallStep):
        original_query = call_step.query
        call_step.query = f"Successfully processed query: {original_query}"
        call_step.logs["original_query"] = original_query
        call_step.logs["processed_query"] = call_step.query

    def on_step_start_preprocessing_callback(agent: DynamicPythonAgent, step: PythonAgentStep):
        original_query = step.query
        step.query = f"{step.step_id} {original_query}"
        step.logs["original_query"] = original_query
        step.logs["processed_query"] = step.query

    def dummy_tool(query: str):
        pass

    toolkit = PythonAgentToolkit.from_function_list([dummy_tool])

    agent = DynamicPythonAgent(
        llm=dummy_llm_execution_flow,
        toolkit=toolkit,
        on_step_callbacks_spec=PythonAgentOnStepCallbacksSpec(
            on_call_step_start=[on_call_step_start_preprocessing_callback],
            on_step_start=[on_step_start_preprocessing_callback],
        ),
    )
    yield agent


def test_dynamic_python_agent_callbacks(python_agent_with_on_step_callbacks):
    target = """on_call_step_0_start
on_step_start_with_toolkit_['dummy_tool']
on_step_0_with_status_Completed_with_tag_plan_end
on_step_start_with_toolkit_['dummy_tool']
on_step_1_with_status_Errored_with_tag_execute_end
on_step_start_with_toolkit_['dummy_tool']
on_step_2_with_status_Defined_with_tag_solution_end
on_call_step_0_end"""

    python_agent_with_on_step_callbacks.run_step(query="Any")

    output = c3.getVar("test_dynamic_python_agent_global_var")
    assert target == output.strip()


def test_query_processing_callbacks(python_agent_with_query_processing):
    result = python_agent_with_query_processing.run_step(query="Hello World").to_json()
    call_step_expected_query = "Successfully processed query: Hello World"

    # Ensure both the original and processed queries are logged at the call step:
    assert result["steps"]["0"]["logs"]["original_query"] == "Hello World"
    assert result["steps"]["0"]["logs"]["processed_query"] == call_step_expected_query

    # Check processing at each step:
    expected_step_outputs = [call_step_expected_query] + [
        " ".join(map(str, ((range(i, -1, -1))))) + f" {call_step_expected_query}" for i in range(5)
    ]

    for i in range(1, 6):
        assert result["steps"]["0"]["steps"][str(i - 1)]["query"] == expected_step_outputs[i]
        assert result["steps"]["0"]["steps"][str(i - 1)]["logs"]["original_query"] == expected_step_outputs[i - 1]
        assert result["steps"]["0"]["steps"][str(i - 1)]["logs"]["processed_query"] == expected_step_outputs[i]


class SomeClass:
    """Some class for testing callbacks"""

    @staticmethod
    def static_method_callback(state, result):
        return None

    @classmethod
    def class_method_callback(cls, state, result):
        return None

    def member_method_callback(self, state, result):
        return None


class_instance = SomeClass()


def function_callback(state, result):
    return None


py_lambda_callback = c3.Lambda.fromPyFunc(func=function_callback, actionRequirement="py")

py_lambda_from_js = c3.Js.exec(
    """Lambda.fromPySrc(`
def function_callback(state, result):
    return None
`);
"""
)

TEST_CALLBACK_TYPES = [
    SomeClass.static_method_callback,
    SomeClass.class_method_callback,
    class_instance.member_method_callback,
    function_callback,
    py_lambda_callback,
    py_lambda_from_js,
]


@pytest.mark.parametrize("callback", TEST_CALLBACK_TYPES)
def test_callback_validator_passes(callback):
    CallbackValidator.validate_callback_kwargs(callback, {"state", "result"})


@pytest.mark.parametrize("callback", TEST_CALLBACK_TYPES)
def test_callback_validator_fails(callback):
    with pytest.raises(ValueError):
        CallbackValidator.validate_callback_kwargs(callback, {"state"})


def return_image() -> Image:
    return pil_image


TOOLKIT_RETURN_IMAGE = PythonAgentToolkit.from_function_list([return_image])

PLOT_IMAGE = """
<execute>
import matplotlib.pyplot as plt
image = return_image()
plt.imshow(image)
plt.show()
"""

SOLUTION_IMAGE = """
<solution>
image was returned
"""
pil_image = Image.new("RGB", (100, 100), color="blue")
numpy_array_image = np.array(pil_image)

TEST_CASES_IMAGE = [("pil_image", pil_image), ("numpy_array_image", numpy_array_image)]

metadata_file = c3.Pkg.file("/genAiBase/test/resource/pythonAgent/test_visual_agent_chat_history.json")
json.loads(metadata_file.readString())
TARGETS = json.loads(metadata_file.readString())


@pytest.mark.parametrize("key, image", TEST_CASES_IMAGE)
def test_visual_agent(key, image):
    def dummy_visual_agent_flow(llm_input, counter=[0]):
        # Remove memory addresses from strings. E.g. 0x79584F3D2190, since these are different every time
        target = json.loads(re.sub(r"0x[a-fA-F0-9]+", "", json.dumps(TARGETS[f"{key}{counter[0]}"])))
        chat_history = json.loads(re.sub(r"0x[a-fA-F0-9]+", "", json.dumps(llm_input.chat_history)))
        differences_in_chat_history = c3.TestApi.findDictionaryDifferences(target, chat_history)
        assert not differences_in_chat_history, f"Expected no {differences_in_chat_history=}."
        # Response for first step
        if counter[0] == 0:
            counter[0] += 1
            return PLOT_IMAGE
        # Response for second step
        return SOLUTION_IMAGE

    agent = DynamicPythonAgent(
        llm=dummy_visual_agent_flow,
        toolkit=TOOLKIT_RETURN_IMAGE,
        prompt_generator=PythonAgentChatManager(
            system_prompt=PromptTemplate.from_string(SYSTEM_PROMPT), include_generated_images=True
        ),
    )
    trajectory = agent.run_step(
        query="Run visual agent",
        input_image_vars={"image": image},
        images=[{"type": "image_url", "image_url": {"url": "data:image/png;base64,fake_url"}}],
        max_steps=4,
    )

    assert (
        len(trajectory.steps["0"].generated_image_objects) == 1
    ), f"Expected image to be captured from code execution step for {pil_image=}."
