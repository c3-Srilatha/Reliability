# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = line-too-long
import pytest

SyntheticEvalQuery = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/synthetic_data_generation/automatic_spec_generation/synthetic_eval_spec.py",
    ["SyntheticEvalQuery"],
)


# pylint: disable=redefined-outer-name
@pytest.fixture(scope="module")
def synthetic_eval_query():
    yield SyntheticEvalQuery(
        query="First query",
        spec="""{"sourceType": "Genai.Aircraft", "projection":"riskScore", "filter": "id == 'ABC'"}""",
    )


def test_create_new_version(synthetic_eval_query):
    """
    Test that a new version of the query is created correctly.
    """
    base_query = synthetic_eval_query.query
    base_expec = synthetic_eval_query.spec
    synthetic_eval_query.create_new_version(
        query=base_query.replace("First", "Second"), spec=base_expec.replace("ABC", "XYZ")
    )

    assert synthetic_eval_query.query == "Second query"
    assert (
        synthetic_eval_query.spec
        == """{"sourceType": "Genai.Aircraft", "projection":"riskScore", "filter": "id == 'XYZ'"}"""
    )
    assert len(synthetic_eval_query.history) == 1
    assert synthetic_eval_query.history[0]["query"] == base_query
    assert synthetic_eval_query.history[0]["spec"] == base_expec


def test_json_functions(synthetic_eval_query):
    """
    Test that the JSON functions work correctly.
    """
    json_dict = synthetic_eval_query.to_json()
    assert isinstance(json_dict, dict)

    new_query = SyntheticEvalQuery.from_json(json_dict)
    assert new_query.query == synthetic_eval_query.query
    assert new_query.spec == synthetic_eval_query.spec
