#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type App.Metric.Return


class Return():
    """
    @remarks this represents a made instance of App.Metric.Return
    """
    
    VALUE: Optional[str]=None
    """
    Gets the metric value for the series represented by {@link App.Metric}. Evaluates at {@link App.Metric.EvaluatableSpec#end}.
    If not specified, evaluates as current server time.
    Each {@link Timeseries.Raw} returned in {@link EvalMetricsResult} will have a single data point
    at {@link App.Metric.EvaluatableSpec#end}.
    """

    VALUE_RANGE: Optional[str]=None
    """
    Gets the range of values for the series represented by {@link App.Metric} over a period of time.
    Each {@link Timeseries.Raw} returned in {@link EvalMetricsResult} will have timed data points from
    {@link App.Metric.EvaluatableSpec#start} to {@link App.Metric.EvaluatableSpec#end} spaced out by
    {@link App.Metric.EvaluatableSpec#interval} interval.
    """

    TAGS_VALUE_RANGE: Optional[str]=None
    """
    Gets tags and their values for the series represented by {@link App.Metric} over time.
    Each {@link Timeseries.Raw} returned in {@link EvalMetricsResult} will be empty but have
    {@link TimeseriesSourceInfo#tags} populated with the tag values.
    """

    TAG_VALUE_RANGE: Optional[str]=None
    """
    Get all values of a tag for all series represented by {@link App.Meter} over time.
    When specified, the variable defined in {@link App.Metric#sourceTemplate} is used as the tag to evaluate. In this
    scenario, {@link App.Metric#sourceTemplate} must contain 1, and only 1, variable.
    Each {@link Timeseries.Raw} returned in {@link EvalMetricsResult} will be empty but
    have a single entry in {@link TimeseriesSourceInfo#tags} with the tag value {@link Timeseries#source}.
    """
    def __init__(self, VALUE: Optional[str]=None, VALUE_RANGE: Optional[str]=None, TAGS_VALUE_RANGE: Optional[str]=None, TAG_VALUE_RANGE: Optional[str]=None) -> None: ...

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

