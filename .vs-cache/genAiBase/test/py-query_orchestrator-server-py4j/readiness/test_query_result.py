# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

# pylint: disable=redefined-outer-name


@pytest.fixture(scope="function")
def in_progress_result():
    query = "A query result."
    inProgressResult = (
        c3.Genai.Query.Result(id="test_eval_query_result", searchQuery=c3.Genai.Query.fromString(query)).upsert().get()
    )
    yield inProgressResult

    inProgressResult.remove()


EXAMPLES_DUMP_JSON_LOGS = [
    (False, {"SomeEntryKey": "SomeEntryValue"}, '{"testKey": {"SomeEntryKey": "SomeEntryValue"}}'),
    (
        True,
        {"SomeEntryKey": "SomeEntryValue"},
        '{"SomeOtherKey": "SomeEntry", "testKey": {"SomeEntryKey": "SomeEntryValue"}}',
    ),
    (
        False,
        {"SomeEntryKey": "SomeEntryValue", "LongEntry": "Long text" * 1000000},
        # pylint: disable=line-too-long
        "{\"testKey\": {\"log_exceeded_max_length\": \"Unable to add log entries for 'testKey', sub-keys ['SomeEntryKey', 'LongEntry'] because the log has exceeded its max length.\"}}",
        # pylint: enable=line-too-long
    ),
]


@pytest.mark.parametrize("get_instance, to_dump, target", EXAMPLES_DUMP_JSON_LOGS)
def test_add_logs_to_json_dumps_engine_log(get_instance, to_dump, target, in_progress_result):
    in_progress_result.withField("engineLog", '{"SomeOtherKey": "SomeEntry"}').upsert()

    output = in_progress_result.addLogsToJsonDumpsEngineLog("testKey", to_dump, get_instance).engineLog
    assert output == target, f"Expected {output=} to be {target=}."
