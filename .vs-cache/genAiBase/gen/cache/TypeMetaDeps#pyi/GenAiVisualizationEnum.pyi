#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type GenAiVisualizationEnum


class GenAiVisualizationEnum():
    """
    Enum type to map the short hand component visualization to the name of the C3 Type that will be used to construct
    the visualization.  The values are expected to be a type that mixes {@link GenAiVisualizationBase}.  This should be
    the single source of truth when referring to names of the {@link GenAiVisualizationBase} extensions via string.
    
    @remarks this represents a made instance of GenAiVisualizationEnum
    """
    
    BAR: Optional[str]=None
    """
    Visualization type for a Bar Chart.
    """

    GRID: Optional[str]=None
    """
    Visualization type for a Grid.
    """

    HISTOGRAM: Optional[str]=None
    """
    Visualization type for a Histogram.
    """

    LINE: Optional[str]=None
    """
    Visualization type for a Line Chart.
    """

    MAP: Optional[str]=None
    """
    Visualization type for a Map.
    """

    PIE: Optional[str]=None
    """
    Visualization type for a Pie Chart.
    """

    SCATTER: Optional[str]=None
    """
    Visualization type for a Scatter Plot.
    """
    def __init__(self, BAR: Optional[str]=None, GRID: Optional[str]=None, HISTOGRAM: Optional[str]=None, LINE: Optional[str]=None, MAP: Optional[str]=None, PIE: Optional[str]=None, SCATTER: Optional[str]=None) -> None: ...

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

