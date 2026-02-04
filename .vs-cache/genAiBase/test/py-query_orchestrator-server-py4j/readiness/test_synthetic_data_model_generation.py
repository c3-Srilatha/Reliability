# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = line-too-long


SyntheticDataModelGenerator = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/synthetic_data_generation/automatic_data_model_generation/data_model_generator.py",
    ["SyntheticDataModelGenerator"],
)


def test_extract_python_class_names():
    example = """
    ```python
    from dataclasses import dataclass
    from datetime import datetime
    from typing import List

    @dataclass
    class System(SomeInheritedClass):
        systemName: str
        systemType: str
        systemDetails: str

    @dataclass
    class  Vulnerability:
        vulnerabilityName: str
        vulnerabilityDetails: str

    class Recommendation:
        recommendationDetails: str

    class Anomaly:
        anomalyDetails: str
    ```
    """

    target = "1. System\n2. Vulnerability\n3. Recommendation\n4. Anomaly"
    output = SyntheticDataModelGenerator.extract_python_class_names(example)

    assert output == target, f"Expected {output=} to be {target=}."


def test_synthetic_data_model_generation():
    def dummy_model(prompt: str) -> str:
        return prompt

    dummy_generator = SyntheticDataModelGenerator(generate_text_smart_llm=dummy_model, generate_text_c3_llm=dummy_model)
    target_intermediate_steps = set(
        [
            "generate_use_case_functions",
            "generate_data_model_from_functions",
            "identify_missing_references_0",
            "modify_missing_references_0",
            "identify_time_series",
            "translate_time_series",
            "convert_to_c3_types",
        ]
    )

    _, intermediate_steps_output = dummy_generator.generate("A dummy use case")
    assert (
        set(intermediate_steps_output) == target_intermediate_steps
    ), f"Expected {set(intermediate_steps_output)=} to be {target_intermediate_steps=}."
