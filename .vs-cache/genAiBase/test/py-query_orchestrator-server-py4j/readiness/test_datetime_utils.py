# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.


DateTimeUtils = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/utils/datetime_utils.py",
    ["DateTimeUtils"],
)


def test_infer_interval():
    examples = [
        # All intervals available
        ("2020-01-01 00:00:00", "2050-01-01 00:00:00", "YEAR"),
        ("2020-01-01 00:00:00", "2025-01-01 00:00:00", "MONTH"),
        ("2020-01-01 00:00:00", "2020-09-01 00:00:00", "DAY"),
        ("2020-01-01 00:00:00", "2020-01-03 00:00:00", "HOUR"),
        ("2020-01-01 00:00:00", "2020-01-01 07:00:00", "HALF_HOUR"),
        ("2020-01-01 00:00:00", "2020-01-01 03:00:00", "QUARTER_HOUR"),
        ("2020-01-01 00:00:00", "2020-01-01 02:00:00", "TEN_MINUTE"),
        ("2020-01-01 00:00:00", "2020-01-01 01:00:00", "FIVE_MINUTE"),
        ("2020-01-01 00:00:00", "2020-01-01 00:15:00", "MINUTE"),
        # All the cases where default is called
        ("2020-01-01 00:00:00", "2020-01-01 00:00:00", None),
        ("2020-01-01 00:00:00", None, None),
        (None, "2020-01-01 00:00:00", None),
        (None, None, None),
    ]

    for start, end, target in examples:
        interval = DateTimeUtils.infer_interval(start, end, default_interval=None)
        assert interval == target, f"Expected {interval=} to be {target=} for {start=} and {end=}."
