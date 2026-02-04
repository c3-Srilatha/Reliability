# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.


import pytest

TEST_PREFIX = "test_GenaiAgentSharedState_"


@pytest.fixture(autouse=True)
def cleanup_shared_states():
    # Before test
    c3.Genai.Agent.SharedState.removeAll({"filter": f'startsWith(stateKey, "{TEST_PREFIX}")'}, True)
    yield
    # After test
    c3.Genai.Agent.SharedState.removeAll({"filter": f'startsWith(stateKey, "{TEST_PREFIX}")'}, True)


@pytest.mark.parametrize("scope", ["user", "global"])
def test_get_shared_state_returns_none_when_not_set(scope):
    key = f"{TEST_PREFIX}nonexistent_{scope}"
    assert c3.Genai.Agent.SharedState.getSharedState(key, scope=scope) is None


@pytest.mark.parametrize("scope", ["user", "global"])
def test_multiple_keys_persist_and_are_isolated_by_id(scope):
    key_value_pairs = {
        f"{TEST_PREFIX}multi_key1_{scope}": "value1",
        f"{TEST_PREFIX}multi_key2_{scope}": {"nested": "value2"},
        f"{TEST_PREFIX}multi_key3_{scope}": [1, 2, 3],
    }

    for key, value in key_value_pairs.items():
        c3.Genai.Agent.SharedState.setSharedState(key, value, scope=scope)

    # Check each value is stored and retrievable
    for key, expected_value in key_value_pairs.items():
        actual_value = c3.Genai.Agent.SharedState.getSharedState(key, scope=scope)
        assert actual_value == expected_value, f"Value mismatch for key '{key}' in scope '{scope}'"

    # Check all keys are listed
    keys_listed = c3.Genai.Agent.SharedState.listSharedStates(limit=10, scope=scope)
    for key in key_value_pairs:
        assert key in keys_listed, f"Key '{key}' not found in list for scope '{scope}'"

    # Ensure uniqueness of IDs
    ids = set(key_value_pairs)
    assert len(ids) == len(key_value_pairs), "Generated IDs are not unique"
