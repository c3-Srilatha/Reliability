#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type UiSdlGraphVisualizationLayoutName


class UiSdlGraphVisualizationLayoutName():
    """
    Enum type defining layout names.
    
    @remarks this represents a made instance of UiSdlGraphVisualizationLayoutName
    """
    
    ORGANIC: Optional[str]=None
    """
    The organic layout is a force-directed layout making links similar lengths and reducing node and edge overlaps
    as they distribute items evenly across the chart. They are good for any type or size of data, being particularly
    useful for finding patterns and symmetries.
    """

    STANDARD: Optional[str]=None
    """
    The organic standard
    """

    STRUCTURAL: Optional[str]=None
    """
    The structural layout
    """

    LENS: Optional[str]=None
    """
    The lens layout
    """

    RADIAL: Optional[str]=None
    """
     The radial layout arranges nodes in concentric circles around a selected subject in a radial tree. Each
     ‘generation’ of nodes becomes a new ring surrounding the previous generations.  Generally, this layout is the best
     option when dealing with networks with a large number of child nodes compared to the number of parents. The radial
     layout makes good use of any available space and is therefore often clearer than traditional tree display methods.
     When using radial, make sure that each `from` node has a level that is greater than the level of its respective
    `to` node for each edge; otherwise, you will likely encounter an unintuitive display of data.
    """

    SEQUENTIAL: Optional[str]=None
    """
    The sequential layout is useful for displaying data with a clear sequence of links between distinct levels of
    nodes. It takes multiple components into account, minimizing link crossings and making efficient use of the
    available screen space. When using sequential, make sure that each `from` node has a level that is greater than the
    level of its respective `to` node for each edge; otherwise, you will likely encounter an unintuitive display of
    data.
    """

    TWEAK: Optional[str]=None
    """
    The tweak layout
    """
    def __init__(self, ORGANIC: Optional[str]=None, STANDARD: Optional[str]=None, STRUCTURAL: Optional[str]=None, LENS: Optional[str]=None, RADIAL: Optional[str]=None, SEQUENTIAL: Optional[str]=None, TWEAK: Optional[str]=None) -> None: ...

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

