# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = line-too-long
import pytest

SyntheticEvalQueryValidator = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/synthetic_data_generation/automatic_spec_generation/spec_validation.py",
    ["SyntheticEvalQueryValidator"],
)
SyntheticEvalQuery = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/synthetic_data_generation/automatic_spec_generation/synthetic_eval_spec.py",
    ["SyntheticEvalQuery"],
)


def dummy_generate_text_smart_llm(prompt: str):
    if "riskScore" in prompt:
        if "exists(name)" in prompt:
            return """{"reasoning": "Because I am a dummy function and this matches the dummy condition to fail record validation", "valid_spec": true, "valid_records": false}"""

        return """{"reasoning": "Because I am a dummy function and this matches the dummy condition", "valid_spec": true, "valid_records": true}"""

    return """{"reasoning": "Because I am a dummy function and this does not match the dummy condition", "valid_spec": false, "valid_records": false}"""


@pytest.fixture(scope="module")
def validator():
    graph = c3.TestApi.upsertReadinessDataModelGraph().toNative()
    yield SyntheticEvalQueryValidator(graph, "Data model doc", dummy_generate_text_smart_llm)


# Cannot be parsed
qa_pair_unparsable = SyntheticEvalQuery(query="A query", spec="""An invalid spec that cannot be parsed""")

# Parsable with non valid field literal pair
qa_pair_non_valid_literal_field = SyntheticEvalQuery(
    query="A query",
    spec="""{"sourceType": "Genai.Aircraft", "projection":"riskScore", "filter": "id == 'ABC'"}""",
)

# Parsable with valid field literal pair and executable
qa_pair_valid_field = SyntheticEvalQuery(
    query="A query",
    spec="""{"sourceType": "Genai.Aircraft", "projection":"riskScore", "filter": "id == 'X00'"}""",
)
# Non executable
qa_pair_non_valid_valid_field = SyntheticEvalQuery(
    query="A query",
    spec="""{"sourceType": "Genai.Aircraft", "projection":"someInvalidFunc(riskScore)", "filter": "id == 'X00'"}""",
)
# Fails llm validation
qa_pair_fail_llm_validation = SyntheticEvalQuery(
    query="A query",
    spec="""{"sourceType": "Genai.Aircraft", "projection":"id", "filter": "id == 'X00'"}""",
)

# Fails record validation
qa_pair_fail_record_validation = SyntheticEvalQuery(
    query="A query",
    spec="""{"sourceType": "Genai.Aircraft", "projection":"riskScore, exists(name)", "filter": "id == 'X00'"}""",
)

EXAMPLES_QA_PAIR_VALIDATION = [
    (
        qa_pair_unparsable,
        ["This spec raises an error during parsing. This is most likely a Syntax error."],
    ),
    (
        qa_pair_non_valid_literal_field,
        [
            'This spec has a mismatch between the field, literal pairs that are used to filter.                     The following are incorrect:\n{\n    "Genai.Aircraft.id": [\n        "ABC"\n    ]\n}. You can check the DATA MODEL                         to check what field or literal would best match the filter.'
        ],
    ),
    (
        qa_pair_valid_field,
        ["This spec is correct. There are no errors that need corrected."],
    ),
    (
        qa_pair_non_valid_valid_field,
        [
            "This spec raises an error during execution. The error raised is",
            "Genai.Aircraft#evaluate: someInvalidFunc(riskScore) => Invalid Function call at line 1, column 0 in expression someInvalidFunc(riskScore). Time range [null, null]",
        ],
    ),
    (
        qa_pair_fail_llm_validation,
        [
            "This spec does not make sense. The spec produced does not match the query. This is the rationale Because I am a dummy function and this does not match the dummy condition."
        ],
    ),
    (
        qa_pair_fail_record_validation,
        ["Because I am a dummy function and this matches the dummy condition to fail record validation"],
    ),
]


@pytest.mark.parametrize("qa_pair, target", EXAMPLES_QA_PAIR_VALIDATION)
def test_validate_specs(validator, qa_pair, target):
    validator.validate_specs([qa_pair])
    output = qa_pair.produce_error_rationale()
    for expected_str in target:
        assert expected_str in output, f"Expected {output=} to contain {target=} for {qa_pair.spec=}."
