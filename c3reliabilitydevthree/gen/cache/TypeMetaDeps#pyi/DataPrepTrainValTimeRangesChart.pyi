#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.reliability.DataPrepTrainValTimeRangesChartSpec import DataPrepTrainValTimeRangesChartSpec
from c3.reliability.DataPrepTrainValTimeRangesGetChartDataSpec import DataPrepTrainValTimeRangesGetChartDataSpec
from c3.platform.EvalMetricsResult import EvalMetricsResult
from c3.platform.TimeRange import TimeRange

# Python definitions for the C3 type DataPrepTrainValTimeRangesChart


class DataPrepTrainValTimeRangesChart(Value):
    """
    Type to fetch chart config for train and validation splits with multiple time ranges.
    
    @remarks this represents a made instance of DataPrepTrainValTimeRangesChart
    """
    def __init__(self) -> None: ...

    @classmethod
    def getChartConfig(cls, spec: DataPrepTrainValTimeRangesChartSpec) -> Union[any]:
    """
    Function to fetch train and validation time ranges chart config.
    
    @param spec
              The specification for the train and validation time ranges chart
    @return The chart configuration as JSON
    """
        ...
    @classmethod
    def getEmptyStateConfig(cls, spec: DataPrepTrainValTimeRangesChartSpec) -> Union[any]:
    """
    Returns component configuration for when no timeseries are plotted.
    
    @param spec
              The specification for the train and validation time ranges chart
    @return The empty state configuration as JSON
    """
        ...
    @classmethod
    def getStartAndEndDate(cls, spec: DataPrepTrainValTimeRangesChartSpec) -> Union[TimeRange]:
    """
    Returns the time range to plot on the chart.
    
    @param spec
              The specification for the train and validation time ranges chart
    @return The time range to plot
    """
        ...
    @classmethod
    def getDateLines(cls, spec: DataPrepTrainValTimeRangesChartSpec) -> Union[Array[any]]:
    """
    Returns a list of {@link UiSdlTimeseriesLineBarChartDateLineConfig} for displaying vertical lines on
    the chart.
    
    @param spec
              The specification for the train and validation time ranges chart
    @return A list of date line configurations
    """
        ...
    @classmethod
    def getYAxisFields(cls, spec: DataPrepTrainValTimeRangesChartSpec) -> Union[Array[any]]:
    """
    Returns a list of {@link UiSdlTimeseriesLineBarChartYAxisDataSpecSetting} for timeseries evaluation.
    
    @param spec
              The specification for the train and validation time ranges chart
    @return A list of Y-axis field specifications
    """
        ...
    @classmethod
    def getEventDataSpec(cls, spec: DataPrepTrainValTimeRangesChartSpec, filter: str=None) -> Union[Array[any]]:
    """
    Returns a list of {@link UiSdlTimeseriesLineBarChartEventSeriesDataSpec} for event plotting.
    
    @param spec
              The specification for the train and validation time ranges chart
    @param filter
              The filter string for event data
    @return A list of event series data specifications
    """
        ...
    @classmethod
    def getChartData(cls, chartDataSpec: DataPrepTrainValTimeRangesGetChartDataSpec) -> Union[EvalMetricsResult]:
    """
    Based on the spec, evaluate the necessary metrics to retrieve the data used for plotting the time ranges.
    
    @param chartDataSpec
              The specification for getting chart data
    @return The evaluation metrics result containing the data for plotting
    """
        ...

