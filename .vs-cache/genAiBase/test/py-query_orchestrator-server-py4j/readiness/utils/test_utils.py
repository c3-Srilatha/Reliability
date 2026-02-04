# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from datetime import datetime
import pytest


DateTimeUtils = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/utils/datetime_utils.py",
    ["DateTimeUtils"],
)


def test_datetime_utils_start_and_end_granularity():
    dt = datetime(2023, 11, 18, 12, 36, 18, 60708)

    granularities = [
        ("seconds", "2023-11-18 12:36:18", "2023-11-18 12:36:19"),
        ("minutes", "2023-11-18 12:36:00", "2023-11-18 12:37:00"),
        ("hours", "2023-11-18 12:00:00", "2023-11-18 13:00:00"),
        ("days", "2023-11-18 00:00:00", "2023-11-19 00:00:00"),
        ("weeks", "2023-11-13 00:00:00", "2023-11-20 00:00:00"),
        ("months", "2023-11-01 00:00:00", "2023-12-01 00:00:00"),
        ("years", "2023-01-01 00:00:00", "2024-01-01 00:00:00"),
    ]
    for granularity, target_start, target_end in granularities:
        start, end = DateTimeUtils.granularity_start_and_end(dt, granularity)

        assert start == target_start, f"Expected {start=} to be {target_start=} for {granularity=} and {dt=}"
        assert end == target_end, f"Expected {end=} to be {target_end=} for {granularity=} and {dt=}"

        start_dt, end_dt = DateTimeUtils.granularity_start_and_end(dt, granularity, return_datetime=True)
        target_start_dt = datetime.strptime(target_start, c3.Genai.DateTimeGranularityFormat.seconds)
        target_end_dt = datetime.strptime(target_end, c3.Genai.DateTimeGranularityFormat.seconds)

        assert (
            start_dt == target_start_dt
        ), f"Expected {start_dt=} to be {target_start_dt=} for {granularity=} and {dt=} and return_datetime=True."
        assert (
            end_dt == target_end_dt
        ), f"Expected {end_dt=} to be {target_end_dt=} for {granularity=} and {dt=} and return_datetime=True."


def test_datetime_utils_granularity_validation():
    invalid_datetime_granularity = "hamster"
    with pytest.raises(
        ValueError,
        match="granularity='hamster' must be Genai.DateTimeGranularityFormat.",
    ):
        DateTimeUtils.validate_granularity_value(invalid_datetime_granularity)
