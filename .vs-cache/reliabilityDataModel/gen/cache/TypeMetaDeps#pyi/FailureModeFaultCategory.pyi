#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type FailureModeFaultCategory


class FailureModeFaultCategory():
    """
    Enum representing the categories of failure modes for faults.
    
    The `FailureModeFaultCategory` enum is used to classify faults based on their root cause and type.
    Each category represents a different area of the system where faults can occur.
    Understanding the category helps in diagnosing and addressing the fault more efficiently.
    
    The categories are:
    
    - Electrical: Faults related to electrical components or circuitry. This may include issues like power supply failure, short circuits, or component damage.
    - Mechanical: Faults related to mechanical components such as motors, gears, and bearings. Mechanical failures can be caused by wear and tear, lack of lubrication, or physical damage.
    - Instrumentation: Faults in sensors, gauges, or any devices used to monitor and measure system performance. Issues could stem from calibration errors, sensor malfunctions, or improper readings.
    - Performance: Faults that affect the overall performance of the system but may not fall under the specific categories of electrical, mechanical, or instrumentation failures. These could involve software-related issues, misconfigurations, or suboptimal operation.
    
    @remarks this represents a made instance of FailureModeFaultCategory
    """
    
    Electrical: Optional[str]=None
    """
    Faults related to electrical components
    """

    Mechanical: Optional[str]=None
    """
    Faults related to mechanical components
    """

    Instrumentation: Optional[str]=None
    """
    Faults related to measurement or monitoring devices
    """

    Performance: Optional[str]=None
    """
    Faults affecting the performance of the system
    """
    def __init__(self, Electrical: Optional[str]=None, Mechanical: Optional[str]=None, Instrumentation: Optional[str]=None, Performance: Optional[str]=None) -> None: ...

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

