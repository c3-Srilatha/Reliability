#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ProfileChartSpec import ProfileChartSpec
from c3.platform.StackTree import StackTree
from c3.platform.ChartSpec import ChartSpec
from c3.platform.ChartPoint2d import ChartPoint2d
from c3.platform.LeastSquaresResult import LeastSquaresResult
from c3.platform.Content import Content
from c3.platform.Unit import Unit
from c3.platform.ChartPoint import ChartPoint

# Python definitions for the C3 type TextChart


class TextChart(ChartBuilder, Value):
    """
    All functions produce simple text (`text/plain`). These should be displayed with a fixed-width font to provide rough
    and ready visualizations. If width and height are unspecified in the spec, charts default to 24 lines of 79 columns
    (or smaller).
    
    @remarks this represents a made instance of TextChart
    """
    def __init__(self) -> None: ...

    @classmethod
    def line(cls, data: Union[Array[float],Array[ChartPoint]], spec: ChartSpec=None) -> Union[Content]:
    """
    Produce a line chart from the series of values. If a plain array of numbers is used, the unit should be specified
    in the spec if tooltips are to be generated.
    
    @param data two or more data points, either as bare numbers or as ChartPoint instances
    @return chart or null if there is not enough data
    """
        ...
    @classmethod
    def sparkline(cls, data: Array[float], spec: ChartSpec=None) -> Union[Content]:
    """
    Produce a simple line chart with no ornamentation from a simple series of values. This chart is always one line
    high, so the height in the spec is ignored. If the data is too long to fit, it will be resampled by an integer
    fraction, if the original data or the resampled values are too short, the line will be shorter than the spec width.
    """
        ...
    @classmethod
    def column(cls, data: Union[Array[float],Array[ChartPoint]]=None, spec: ChartSpec=None) -> Union[Content]:
    """
    Produce a column chart (vertical bars) from the series of values. The chart may be wider than the width from the
    spec if there are too many input values. If there are fewer input values and no legend is requested, the chart may
    be narrower.
    """
        ...
    @classmethod
    def bar(cls, data: Union[Array[float],Array[ChartPoint]]=None, spec: ChartSpec=None) -> Union[Content]:
    """
    Produce a horizontal bar chart from the series of values. This will have one line for each input value, thus the
    height in the spec is ignored.
    """
        ...
    @classmethod
    def scatter(cls, data: Union[Array[float],Array[ChartPoint],Array[ChartPoint2d]]=None, spec: ChartSpec=None) -> Union[Content]:
    """
    Produce a scatter plot from a series of values.
    
    @see LogProfiler
    """
        ...
    @classmethod
    def pie(cls, data: Union[Array[float],Array[ChartPoint]]=None, spec: ChartSpec=None) -> Union[Content]:
    """
    Produce a pie chart from the series of values.
    
    @param data one or more data points, either as bare numbers or as ChartPoint instances
    @return chart or null if there is not enough data
    """
        ...
    @classmethod
    def stacks(cls, trees: Array[StackTree], spec: ProfileChartSpec=None) -> Union[Content]:
    """
    Produce a flame/icicle graph from a set of stack trees.
    
    @see LogProfiler
    """
        ...
    @classmethod
    def value(cls, data: Union[Array[float],Array[ChartPoint],Array[ChartPoint2d]], i: int) -> Union[float]:
    """
    Extract a value from the data array, which should be either a number or a ChartPoint.
    """
        ...
    @classmethod
    def valueX(cls, data: Union[Array[float],Array[ChartPoint],Array[ChartPoint2d]], i: int) -> Union[float]:
    """
    Get the X index from the data array. If the value is a {@link ChartPoint2d} this will be the explicit `x` value,
    otherwise the specified index.
    """
        ...
    @classmethod
    def formatValue(cls, n: float, unit: Unit=None) -> Union[str]:
    """
    Format a numeric value with an optional unit as a plain string.
    """
        ...
    @classmethod
    def fitLine(cls, data: Union[Array[float],Array[ChartPoint],Array[ChartPoint2d]]) -> Union[LeastSquaresResult]:
    """
    Fit a simple linear regression to the values to be charted.
    """
        ...
    @classmethod
    def formatTrend(cls, m: float) -> Union[str]:
    """
    Format a slope as a trend (percentage change) as a plain string.
    """
        ...

