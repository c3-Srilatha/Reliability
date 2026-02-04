# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
import numpy as np
import pandas as pd


@pytest.fixture(scope="module", autouse=True)
def ctx(c3):
    filename = "test_Sensor"
    context = c3.TestApi.createContext(filename=filename)

    yield context
    c3.TestApi.teardown(context=context)


@pytest.fixture(scope="module", autouse=True)
def time_args(c3):
    time_args = {}
    time_args["start"] = "2012-01-01"
    time_args["end"] = "2012-03-01"

    # For aggregation over time to occur, we create data at a 1H frequency, and will aggregate by Day in Sensor.computeRawVsNormalizedData().
    time_args["interval"] = "DAY"
    yield time_args


@pytest.fixture(scope="module", autouse=True)
def sensor(c3, ctx, time_args):
    """
    To conclude that the logic of Sensor.computeRawVsNormalizedData(start, end, interval) is valid, one only needs
    to ensure that, on data without duplicates & missing data, the raw & normalized data are identical. Here, we therefore upsert
    such data.
    """
    np.random.seed(0)

    sensor = c3.TestApi.upsertEntity(context=ctx, typeName="Sensor")
    start, end = time_args["start"], time_args["end"]

    # For aggregation over time to occur, we define data at a 1H frequency, and will aggregate by Day.
    dates = pd.date_range(start=start, end=end, freq="1H")

    X = np.random.normal(size=(5, len(dates)))

    points = []
    for i, series_ndarray in enumerate(X):
        series_name = f"test_dummySeries_{i}"
        series = c3.TestApi.upsertEntity(
            context=ctx,
            typeName="PointPhysicalMeasurementSeries",
            obj={"name": series_name, "asset": sensor, "unitConstraint": c3.Unit(id="degrees_celsius")},
        )
        for j, measurement in enumerate(series_ndarray):
            points.append(
                {
                    "start": dates[j],
                    "parent": series,
                    "quantity": c3.ExactDimension(value=measurement, unit=c3.Unit(id="degrees_celsius")),
                }
            )

    c3.TestApi.upsertBatchEntity(context=ctx, typeName="PointMeasurement", objs=points)
    yield sensor


def test_computeRawVsNormalizedData(c3, time_args, sensor):
    """
    To conclude that the logic of Sensor.computeRawVsNormalizedData(start, end, interval) is valid, one only needs
    to ensure that, on data without duplicates & missing data, the raw & normalized data are identical.
    """

    map_outputs = sensor.computeRawVsNormalizedData(**time_args)
    rawDataset_ref, normalizedDataset_ref = map_outputs["rawDataset"], map_outputs["normalizedDataset"]

    raw_df = c3.Dataset.toPandas(rawDataset_ref.toStoredInMemory())
    normalized_df = c3.Dataset.toPandas(normalizedDataset_ref.toStoredInMemory())

    # np.allclose is used to account for possible rounding during serialization/deserialization
    assert np.allclose(raw_df.values, normalized_df.values)
