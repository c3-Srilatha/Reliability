# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=line-too-long, unused-argument, wrong-import-position
from typing import Tuple
import re
import pytest

c3.Genai.PyUtil.setC3()
from c3agents.components import PromptTemplate

from c3agents.plan_and_execute.components.steps.python_agent_steps import PythonAgentStep, PythonAgentCallStep
from c3agents.plan_and_execute.components.trajectory.python_agent_trajectory import PythonAgentTrajectory
from c3agents.plan_and_execute.components.chat_manager.python_agent_chat_manager import PythonAgentChatManager
from c3agents.plan_and_execute.agents.python_agent import PythonAgent, PythonAgentOnStepCallbacksSpec, SYSTEM_PROMPT
from c3agents.plan_and_execute.components.toolkit.python_agent_toolkit import PythonAgentToolkit
from c3agents.plan_and_execute.components.object_reference import ObjectReferenceManager
from c3agents.plan_and_execute.formatting_and_parsing.formatting_utils import split_on_tags, process_function_calls
from c3agents.plan_and_execute.components.steps.abstract import StepStatus

FewShotManager = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/plan_and_execute/fewshot/python_agent_fewshot.py",
    ["FewShotManager"],
)

RETURN_ERROR = """
<execute>
print(var)
output = 1/var
print(output)
</execute>
"""
RETURN_VAR = """
<execute>
output = var
print(output)
</execute>
"""


def dummy_llm_execution_flow(query, counter=[0]):
    counter[0] += 1
    if counter[0] == 1:
        return RETURN_ERROR
    return RETURN_VAR


def test_execution_flow():
    agent = PythonAgent(llm=dummy_llm_execution_flow)
    trajectory = agent.run_step(
        query="Show me a graph of the average time taken by step",
        input_vars={"var": 0},
        max_steps=2,
    )

    # First call step should contain Errored and Completed in that order. Call step status should be completed.
    assert trajectory.final_step.status == StepStatus.COMPLETED.value
    for step_id, target_status in enumerate([StepStatus.ERRORED.value, StepStatus.COMPLETED.value]):
        assert (
            trajectory.final_step.steps[str(step_id)].status == target_status
        ), f"Expected {trajectory.final_step.steps[str(step_id)].status=} to be {target_status=}. For {step_id=}"

    # Test the trajectory is correctly formatted
    target_filled_prompt = (
        c3.Pkg.file("meta://genAiBase/test/resource/pythonAgent/python_agent_chat.txt").readString().strip()
    )  # We strip, since the linter forces a newline to be introduced (in the test case file)
    # however, it should not be there.
    filled_prompt = (
        PythonAgentChatManager(system_prompt=PromptTemplate.from_string(SYSTEM_PROMPT))
        .format_conversation_history(query="user query", trajectory=trajectory)
        .context
    )

    # Remove the line numbers and file paths ending with "python_code_executor.py" in one step.
    pattern = r"line \d+|[^\s]*python_code_executor\.py"
    filled_prompt = re.sub(pattern, "", filled_prompt)
    target_filled_prompt = re.sub(pattern, "", target_filled_prompt)
    assert filled_prompt == target_filled_prompt, f"Expected {filled_prompt=} to be {target_filled_prompt=}."


RETURN_VAR = """
<execute>
output = var
print(output)
</execute>
"""

MISSING_OUTPUT = """
<execute>
a = 3
</execute>
"""

INVALID_CODE = """
<execute>
print(a)
</execute>
"""
TEST_CASE_RETRY = [
    (RETURN_VAR, "Stdout:0"),
    (
        MISSING_OUTPUT,
        "ValueError: \nNo relevant output was produced by the previous answer. To ensure visibility of results, the generated code\nmust include at least one of the following:\n- `print(relevant_var)` to display relevant variables or output.\n- `plt.show()` to render and display any plots or graphs.\n",
    ),
    (INVALID_CODE, "NameError: name 'a' is not defined"),
]


@pytest.mark.parametrize("code_snippet, target_substring", TEST_CASE_RETRY)
def test_retry_options(code_snippet, target_substring):
    agent = PythonAgent(llm=lambda query: code_snippet)
    trajectory = agent.run_step(query="Query", input_vars={"var": 0}, max_steps=2)
    filled_prompt = (
        PythonAgentChatManager(system_prompt=PromptTemplate.from_string(SYSTEM_PROMPT))
        .format_conversation_history(query="user query", trajectory=trajectory)
        .context
    )
    assert target_substring in filled_prompt, f"Expected {target_substring=} to be in {filled_prompt}"


@pytest.fixture(scope="function")
def filled_prompt_test_memories():
    # Add two examples, one with different project, one with different specialization.
    # These should not appear in the prompt
    c3.Genai.FewShotExample.PythonAgent(
        id="testPythonAgent1",
        query="query",
        code="testPythonAgent1",
        project="differentProject",
        specialization="testPythonAgent",
        manuallyAdded=True,
    ).upsert()

    c3.Genai.FewShotExample.PythonAgent(
        id="testPythonAgent2",
        query="query",
        code="testPythonAgent1",
        project="testPythonAgent",
        specialization="differentSpecialization",
        manuallyAdded=True,
    ).upsert()

    target_filled_prompt = (
        c3.Pkg.file("meta://genAiBase/test/resource/pythonAgent/python_agent_with_memory.txt").readString().strip()
    ).strip()

    yield target_filled_prompt

    c3.Genai.FewShotExample.PythonAgent.removeAll(
        {"filter": "'testPythonAgent' == specialization || contains(id, 'testPythonAgent')"}, True
    )


EXECUTABLE_CODE = """
<execute>
print("This is some rewritten code")
</execute>
"""


def test_fewshot_examples(filled_prompt_test_memories):
    target_filled_prompt = filled_prompt_test_memories
    agent = PythonAgent(
        llm=lambda query: EXECUTABLE_CODE,
        project_id="testPythonAgent",
        specialization="testPythonAgent",
        few_shot_manager=FewShotManager(specialization="testPythonAgent", project_id="testPythonAgent"),
    )
    # Run step without memories
    trajectory = agent.run_step(query="Run memory code")
    assert "Examples" not in target_filled_prompt, "Expected 'Examples' to not appear in first trajectory"

    # Add sucessful memories
    agent.add_successful_user_query_as_few_shot(
        query="""Example 1 with appostrophe's"s and no description or subquery""", code='print("Example code 1")'
    )

    agent.add_successful_user_query_as_few_shot(
        query="""Example 2 with description and subquery""",
        code='print("Example code 2")',
        description="This print should be used when...",
        sub_query="Some sub_query",
    )

    # Run step which should retrieve memory
    agent.llm = lambda query: EXECUTABLE_CODE
    trajectory = agent.run_step(query="Run memory code")
    filled_prompt_with_automatic_memory = trajectory.final_step.final_step.logs["filled_prompt"]["context"].strip()
    assert (
        filled_prompt_with_automatic_memory == target_filled_prompt
    ), f"Expected {filled_prompt_with_automatic_memory=} to be {target_filled_prompt=}"


FIRST_DUMMY_STEP = """<execute>
random_location = sample_random_location()
print(random_location)
</execute>"""

SECOND_DUMMY_STEP = """<execute>
coordinates = coordinates_from_location("Spain")
print(coordinates)
</execute>"""

TOOLKIT_SYSTEM_PROMPT = """You are a coding agent.
Your task is to generate python code that answers the user's instructions.

You must write your code in the following format
```python
<Code goes here>
print(relevant_variables)
```
The variables previously defined by the assistant are available;
Do not rewrite previous code.

TOOLKIT
-------
{{toolkit}}
"""


def test_python_agent_with_toolkit():
    SAMPLE_LOCATION = "Spain"

    def sample_random_location() -> str:
        """
        Retrieves a random location.

        Returns:
            str: Location name.
        """
        return SAMPLE_LOCATION

    SPAIN_COORDINATES = (40.4637, 3.7492)

    def coordinates_from_location(location: str) -> Tuple[float]:
        """
        Returns the coordinates for a location.

        Args:
            location (str): The name of the location

        Returns:
            Tuple[float]: Latitude and longitude coordinates for the location.
        """
        return {SAMPLE_LOCATION: SPAIN_COORDINATES}[location]

    toolkit = PythonAgentToolkit.from_function_list([sample_random_location, coordinates_from_location])
    toolkit.register_tools(True)

    def dummy_llm_execution_flow(query, counter=[0]):
        counter[0] += 1
        if counter[0] == 1:
            return FIRST_DUMMY_STEP
        return SECOND_DUMMY_STEP

    agent = PythonAgent(
        prompt_generator=PythonAgentChatManager(system_prompt=PromptTemplate.from_string(TOOLKIT_SYSTEM_PROMPT)),
        llm=dummy_llm_execution_flow,
        toolkit=toolkit,
    )
    trajectory = agent.run_step(query="Sample a random location.")
    assert trajectory.final_step.final_step.step_variables["random_location"] == SAMPLE_LOCATION
    trajectory = agent.run_step(query="Find the coordinates for that location.")
    assert trajectory.final_step.final_step.step_variables["coordinates"] == SPAIN_COORDINATES
    assert (
        toolkit.format_toolkit() in trajectory.final_step.final_step.logs["filled_prompt"]["context"]
    ), f"Expected {toolkit.format_toolkit()=} to be in {trajectory.final_step.final_step.logs['filled_prompt']['context']=}"


TEST_CASES_SPLIT_ON_TAGS = [
    # Test Case 1: Basic example with all tags present
    (
        "This is a test <execute> with multiple <solution> tags <plan>.",
        [
            ("This is a test", None),
            ("with multiple", "execute"),
            ("tags", "solution"),
            (".", "plan"),
        ],
    ),
    # Test Case 2: No tags in the text
    ("This is a test with no tags.", [("This is a test with no tags.", None)]),
    # Test Case 3: Text with only one relevant tag
    (
        "This is a test <execute> with a single <relevant> tag.",
        [("This is a test", None), ("with a single <relevant> tag.", "execute")],
    ),
    # Test Case 4: Multiple occurrences of the same tag
    (
        "<execute>Start here<execute> and continue <solution> with more.",
        [
            ("Start here", "execute"),
            ("and continue", "execute"),
            ("with more.", "solution"),
        ],
    ),
    # Test Case 5: Different tags with complex text
    (
        "Here is <execute> some complex <plan> text <solution> to test.",
        [
            ("Here is", None),
            ("some complex", "execute"),
            ("text", "plan"),
            ("to test.", "solution"),
        ],
    ),
    # Test Case 6: Empty input text
    ("", [("", None)]),
    # Test Case 7: Text with no spaces between tags and text
    (
        "Text<execute>with<solution>no<plan>spaces.",
        [("Text", None), ("with", "execute"), ("no", "solution"), ("spaces.", "plan")],
    ),
    # Test Case 8: With closing tags
    (
        """None tag here <execute> Execute here </execute> None tag here""",
        [
            ("None tag here", None),
            ("Execute here", "execute"),
            ("None tag here", None),
        ],
    ),
]


@pytest.mark.parametrize("text, expected_output", TEST_CASES_SPLIT_ON_TAGS)
def test_split_on_tags(text, expected_output):
    assert split_on_tags(text) == expected_output


TEST_CODE_PRINT = """
x = 10
y = 20
# Comments stay
print(x)
print('Hello World')
print(3.14)
print(type(1))
print(1==2)
print(1+4)
print(df[0])
print(df[0].tail())
print(df[0].columns)
print(f"{x}{y}")
print([1, 2])
print({"1":2})
print()
"""
TEST_CODE_DISPLAY = """
x = 10
y = 20
# Comments stay
display(x)
display('Hello World')
display(3.14)
display(type(1))
display(1==2)
display(1+4)
display(df[0])
display(df[0].tail())
display(df[0].columns)
display(f"{x}{y}")
display([1, 2])
display({"1":2})
display()
"""

TEST_CASES_PROCESS_FUNCTION_CALLS = [
    (
        "no_transform",
        '\nx = 10\ny = 20\n# Comments stay\nprint(x)\nprint(\'Hello World\')\nprint(3.14)\nprint(type(1))\nprint(1==2)\nprint(1+4)\nprint(df[0])\nprint(df[0].tail())\nprint(df[0].columns)\nprint(f"{x}{y}")\nprint([1, 2])\nprint({"1":2})\nprint()\n',
        [("x", "variable"), ("Hello World", "constant"), (3.14, "constant")],
        TEST_CODE_PRINT,
    ),
    (
        "transform_keep_expressions",
        "x = 10\ny = 20\nprint(x)\nprint('Hello World')\nprint(3.14)\noutput_type_1 = type(1)\nprint(output_type_1)\noutput__1_2 = 1 == 2\nprint(output__1_2)\noutput__1_4 = 1 + 4\nprint(output__1_4)\noutput_df_0 = df[0]\nprint(output_df_0)\noutput_df_0_tail = df[0].tail()\nprint(output_df_0_tail)\noutput_df_0_columns = df[0].columns\nprint(output_df_0_columns)\noutput_f_x_y = f'{x}{y}'\nprint(output_f_x_y)\noutput__1_2 = [1, 2]\nprint(output__1_2)\noutput__1_2 = {'1': 2}\nprint(output__1_2)\nprint()",
        [
            ("x", "variable"),
            ("Hello World", "constant"),
            (3.14, "constant"),
            ("type(1)", "expression"),
            ("1 == 2", "expression"),
            ("1 + 4", "expression"),
            ("df[0]", "expression"),
            ("df[0].tail()", "expression"),
            ("df[0].columns", "expression"),
            ("f'{x}{y}'", "expression"),
            ("[1, 2]", "expression"),
            ("{'1': 2}", "expression"),
        ],
        TEST_CODE_PRINT,
    ),
    (
        "transform_replace_expressions",
        "x = 10\ny = 20\nprint(x)\nprint('Hello World')\nprint(3.14)\noutput_type_1 = type(1)\nprint(output_type_1)\noutput__1_2 = 1 == 2\nprint(output__1_2)\noutput__1_4 = 1 + 4\nprint(output__1_4)\noutput_df_0 = df[0]\nprint(output_df_0)\noutput_df_0_tail = df[0].tail()\nprint(output_df_0_tail)\noutput_df_0_columns = df[0].columns\nprint(output_df_0_columns)\noutput_f_x_y = f'{x}{y}'\nprint(output_f_x_y)\noutput__1_2 = [1, 2]\nprint(output__1_2)\noutput__1_2 = {'1': 2}\nprint(output__1_2)\nprint()",
        [
            ("x", "variable"),
            ("Hello World", "constant"),
            (3.14, "constant"),
            ("output_type_1", "variable"),
            ("output__1_2", "variable"),
            ("output__1_4", "variable"),
            ("output_df_0", "variable"),
            ("output_df_0_tail", "variable"),
            ("output_df_0_columns", "variable"),
            ("output_f_x_y", "variable"),
            ("output__1_2", "variable"),
            ("output__1_2", "variable"),
        ],
        TEST_CODE_PRINT,
    ),
    (
        "no_transform",
        '\nx = 10\ny = 20\n# Comments stay\ndisplay(x)\ndisplay(\'Hello World\')\ndisplay(3.14)\ndisplay(type(1))\ndisplay(1==2)\ndisplay(1+4)\ndisplay(df[0])\ndisplay(df[0].tail())\ndisplay(df[0].columns)\ndisplay(f"{x}{y}")\ndisplay([1, 2])\ndisplay({"1":2})\ndisplay()\n',
        [("x", "variable"), ("Hello World", "constant"), (3.14, "constant")],
        TEST_CODE_DISPLAY,
    ),
]


@pytest.mark.parametrize("mode, target_code, target_items, code_input", TEST_CASES_PROCESS_FUNCTION_CALLS)
def test_process_function_calls(mode, target_code, target_items, code_input):
    transformed_code, printed_items = process_function_calls(code_input, mode)
    assert target_code == transformed_code
    assert target_items == printed_items


between_tags = """
<execute>
print(1)
<execute>
"""

between_backticks = """
```python
print(1)
```
"""
between_backticks_between_tags = """
<execute>
```python
print(1)
```
<execute>
"""

TEST_CODE_SNIPPETS = [between_tags, between_backticks, between_backticks_between_tags]


@pytest.mark.parametrize("code_snippet", TEST_CODE_SNIPPETS)
def test_llmoutput_to_content_and_tag(code_snippet):
    content, tag = PythonAgent.llm_output_to_content_and_tag(code_snippet)
    print(code_snippet)
    print(content)
    assert content == "print(1)"
    assert tag == "execute"


@pytest.fixture(scope="function")
def python_agent_with_on_step_callbacks():
    RETURN_ERROR = """
<execute>
a = 1
</execute>
"""
    RETURN_VAR = """
<execute>
print(1)
</execute>
"""
    c3.setVar("test_python_agent_global_var", None, True)

    def dummy_llm_execution_flow(query, counter=[0]):
        counter[0] += 1
        if counter[0] == 1:
            return RETURN_ERROR
        return RETURN_VAR

    def on_step_start_dummy_callback(agent: PythonAgent, step: PythonAgentStep):
        global_var = c3.getVar("test_python_agent_global_var") or ""
        global_var += f"on_step_start_with_toolkit_{list(agent.toolkit.tools)}\n"
        c3.setVar("test_python_agent_global_var", global_var, True)

    def on_step_end_dummy_callback(agent: PythonAgent, step: PythonAgentStep):
        global_var = c3.getVar("test_python_agent_global_var") or ""
        global_var += f"on_step_{step.step_id}_with_status_{step.status}_end\n"
        c3.setVar("test_python_agent_global_var", global_var, True)

    def on_call_step_start_dummy_callback(agent: PythonAgent, call_step: PythonAgentCallStep):
        global_var = c3.getVar("test_python_agent_global_var") or ""
        global_var += f"on_call_step_{call_step.step_id}_start\n"
        c3.setVar("test_python_agent_global_var", global_var, True)

    def on_call_step_end_dummy_callback(agent: PythonAgent, call_step: PythonAgentCallStep):
        global_var = c3.getVar("test_python_agent_global_var") or ""
        global_var += f"on_call_step_{call_step.step_id}_end\n"
        c3.setVar("test_python_agent_global_var", global_var, True)

    def dummy_tool():
        pass

    toolkit = PythonAgentToolkit.from_function_list([dummy_tool])

    agent = PythonAgent(
        llm=dummy_llm_execution_flow,
        toolkit=toolkit,
        prompt_generator=PythonAgentChatManager(system_prompt=PromptTemplate.from_string(TOOLKIT_SYSTEM_PROMPT)),
        on_step_callbacks_spec=PythonAgentOnStepCallbacksSpec(
            on_step_start=[on_step_start_dummy_callback],
            on_step_end=[on_step_end_dummy_callback],
            on_call_step_start=[on_call_step_start_dummy_callback],
            on_call_step_end=[on_call_step_end_dummy_callback],
        ),
    )
    yield agent

    c3.setVar("test_python_agent_global_var", None, True)


def test_python_agent_callbacks(python_agent_with_on_step_callbacks):
    target = """on_call_step_0_start
on_step_start_with_toolkit_['dummy_tool']
on_step_0_with_status_Errored_end
on_step_start_with_toolkit_['dummy_tool']
on_step_1_with_status_Completed_end
on_call_step_0_end"""

    python_agent_with_on_step_callbacks.run_step(query="Any")

    output = c3.getVar("test_python_agent_global_var")
    assert target == output.strip()


def test_agent_step_status():
    # Test valid value when initialized
    some_step = PythonAgentCallStep("id", "query", status=StepStatus.DEFINED)
    assert some_step.status == StepStatus.DEFINED.value

    # Test valid value when set
    some_step.status = StepStatus.COMPLETED
    assert some_step.status == StepStatus.COMPLETED.value

    # Test invalid values, when set
    with pytest.raises(AttributeError, match="""'str' object has no attribute 'value'"""):
        some_step.status = "Some invalid status"

    # Test invalid values, when initialized
    with pytest.raises(AttributeError, match="""'str' object has no attribute 'value'"""):
        some_step = PythonAgentCallStep("id", "query", status="Some invalid status")
