#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ExMachinaVisualizerChartType


class ExMachinaVisualizerChartType():
    """
    The different chart types available in Ex Machina
    
    @remarks this represents a made instance of ExMachinaVisualizerChartType
    """
    
    line: Optional[str]=None
    """
    Line chart
    """

    pairPlot: Optional[str]=None
    """
    Pair plot
    """

    scatter: Optional[str]=None
    """
    Scatter plot
    """

    scatter3d: Optional[str]=None
    """
    3D Scatter plot
    """

    histogram: Optional[str]=None
    """
    Histogram chart
    """

    correlationMatrix: Optional[str]=None
    """
    Correlation matrix
    """

    autocorrelationPlot: Optional[str]=None
    """
    Autocorrelation plot
    """

    pie: Optional[str]=None
    """
    Pie chart
    """

    box: Optional[str]=None
    """
    Box Plot
    """

    bar: Optional[str]=None
    """
    Bar chart
    """

    calendarHeatMap: Optional[str]=None
    """
    Calendar Heat Map
    """

    normalQQ: Optional[str]=None
    """
    Normal QQ Plot
    """

    table: Optional[str]=None
    """
    Table
    """

    sankey: Optional[str]=None
    """
    Sankey
    """
    def __init__(self, line: Optional[str]=None, pairPlot: Optional[str]=None, scatter: Optional[str]=None, scatter3d: Optional[str]=None, histogram: Optional[str]=None, correlationMatrix: Optional[str]=None, autocorrelationPlot: Optional[str]=None, pie: Optional[str]=None, box: Optional[str]=None, bar: Optional[str]=None, calendarHeatMap: Optional[str]=None, normalQQ: Optional[str]=None, table: Optional[str]=None, sankey: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...

