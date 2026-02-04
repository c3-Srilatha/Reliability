#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.reliabilityCapability.DataPrepPreviewChartData import DataPrepPreviewChartData
from c3.reliabilityCapability.DataPrepPreviewChartSpec import DataPrepPreviewChartSpec
from c3.platform.TimeRange import TimeRange

# Python definitions for the C3 type DataPrepPreviewChart


class DataPrepPreviewChart(Value):
    """
    Chart helper providing a preview of {@link Sensor} data and mask configuration for
    the Dataset Preparation workflow.
    
    @remarks this represents a made instance of DataPrepPreviewChart
    """
    def __init__(self) -> None: ...

    @classmethod
    def getStartAndEndDate(cls, spec: DataPrepPreviewChartSpec) -> Union[TimeRange]:
    """
    Returns the time range to plot on the chart.
    
    If {@link DataPrepPreviewChartSpec#showAllSensorData} is true, will use earliest and latest normalized
    timestamps on related {@link PointPhysicalMeasurementSeries}.
    @param spec
              The data preparation preview chart specification.
    @return A {@link TimeRange} object representing the start and end dates for the chart.
    """
        ...
    @classmethod
    def getChartData(cls, spec: DataPrepPreviewChartSpec) -> Union[DataPrepPreviewChartData]:
    """
    Based on the spec, get the right sensor and mask data.
    
    Will ignore masks/events and return an empty chart configuration if spec.sensors is empty
    so that the chart can render an empty state.
    
    Used by the chart's `advancedDataSpec`.
    @param spec
              The data preparation preview chart specification.
    @return A {@link DataPrepPreviewChartData} object containing the chart data.
    """
        ...

