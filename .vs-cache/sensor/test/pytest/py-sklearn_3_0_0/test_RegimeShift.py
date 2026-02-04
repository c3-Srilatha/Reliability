# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

"""
Copyright 2009-2022 C3 AI (www.c3.ai). All Rights Reserved.
This material, including without limitation any software, is the confidential trade secret and proprietary
information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
This material may be covered by one or more patents or pending patent applications.
"""

import pytest


@pytest.fixture(scope="module", autouse=True)
def ctx(c3):
    filename = "test_RegimeShift"
    context = c3.TestApi.createContext(filename=filename)
    yield context
    c3.TestApi.teardown(context=context)


def test_computeRegimeShift(c3, ctx):
    """
    To conclude that the logic of Sensor.computeRegimeShift(start, end, interval, regimeShiftSpec) is valid, one needs to
    ensure that the result is deterministic implying that the regimeShift field in the Json output matches an exact number
    """
    c3.SensorRegimeShiftTestData.loadData()

    import pandas as pd
    from datetime import timedelta

    assert c3.Sensor.get("SensorRegimeShift_Sensor_1_1")
    monotonic_sensor = c3.Sensor.get("SensorRegimeShift_Sensor_1_1")
    regime_shift_spec = c3.RegimeShiftSpec()
    result = monotonic_sensor.computeRegimeShift(regime_shift_spec, doNotPersist=True)
    assert len(result[monotonic_sensor.id]["regimeShiftTimestamps"]) == 1
    assert pd.to_datetime(result[monotonic_sensor.id]["regimeShiftTimestamps"][0]) < pd.to_datetime("2022-02-01")
    assert pd.to_datetime(result[monotonic_sensor.id]["regimeShiftTimestamps"][0]) > pd.to_datetime("2022-01-30")

    # TEST 2: Check with a known regime shift using Gaussian distribution with missing values.
    # The test will return 2 regime shifts. One at the beginning of the start date of the regime shift spec
    # and the other at the timestamp when the data goes missing for more than 6 months.
    # Assertion checks on timestamps with a condition that any algorithm used will have to fall in the range of
    # c3.RegimeShiftSpec.windowSizeForPeakDetection/ 2 from the regime shift
    # date computed by the current implementation usin Wasserstein Distance.
    missing_with_gaussian_sensor = c3.Sensor.get("SensorRegimeShift_Sensor_1_2")
    regime_shift_spec = c3.RegimeShiftSpec(
        start="2021-07-09",
        end="2022-01-02",
        interval="HOUR",
        windowPast=c3.Duration.fromString("90D"),
        windowFuture=c3.Duration.fromString("50D"),
        windowSizeForPeakDetection=c3.Duration.fromString("60D"),
    )
    result = missing_with_gaussian_sensor.computeRegimeShift(regime_shift_spec)
    assert pd.to_datetime(result[missing_with_gaussian_sensor.id]["regimeShiftTimestamps"][-1]) < pd.to_datetime(
        regime_shift_spec.end
    )
    assert pd.to_datetime(result[missing_with_gaussian_sensor.id]["regimeShiftTimestamps"][-1]) > pd.to_datetime(
        regime_shift_spec.start
    )
    assert pd.to_datetime(result[missing_with_gaussian_sensor.id]["regimeShiftTimestamps"][-1]) < pd.to_datetime(
        "2021-09-22"
    )
    assert pd.to_datetime(result[missing_with_gaussian_sensor.id]["regimeShiftTimestamps"][-1]) > pd.to_datetime(
        "2021-09-21"
    ) - timedelta(days=int(regime_shift_spec.windowSizeForPeakDetection.days()) // 2)

    # TEST 3: Check with a known regime shift using 2 Gaussian distribution separated by a monotonically increasing/decreasing function.
    # Total regime shift timestamps computed will be 2. First regime shift should ideally be captured when
    # the first gaussian ends while the second regime shift should be captured on or before the new gaussian starts.
    # Any algorithm other than the current implementation should capture both
    # regime shifts within c3.RegimeShiftSpec.windowSizeForPeakDetection/2
    # days.
    double_gaussian_sensor = c3.Sensor.get("SensorRegimeShift_Sensor_1_2")
    regime_shift_spec = c3.RegimeShiftSpec(
        start="2020-07-09",
        end="2021-04-02",
        interval="HOUR",
        windowPast=c3.Duration.fromString("3600h"),
        windowFuture=c3.Duration.fromString("1440h"),
        windowSizeForPeakDetection=c3.Duration.fromString("2880h"),
    )
    result = double_gaussian_sensor.computeRegimeShift(regime_shift_spec, doNotPersist=True)
    assert pd.to_datetime(result[double_gaussian_sensor.id]["regimeShiftTimestamps"][0]) < pd.to_datetime("2020-08-22")
    assert pd.to_datetime(result[double_gaussian_sensor.id]["regimeShiftTimestamps"][0]) > pd.to_datetime(
        "2020-08-22"
    ) - timedelta(days=int(regime_shift_spec.windowSizeForPeakDetection.days()) // 2)
    assert pd.to_datetime(result[double_gaussian_sensor.id]["regimeShiftTimestamps"][1]) < pd.to_datetime("2021-01-01")
    assert pd.to_datetime(result[double_gaussian_sensor.id]["regimeShiftTimestamps"][1]) > pd.to_datetime(
        "2020-12-30"
    ) - timedelta(days=int(regime_shift_spec.windowSizeForPeakDetection.days()) // 2)

    c3.SensorRegimeShiftTestData.removeTestData()
