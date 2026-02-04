#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Pair import Pair

# Python definitions for the C3 type ChipsCellGroupingOptions


class ChipsCellGroupingOptions(Value):
    """
    Options for how chips should be grouped / styled based on their values, and how
    these groups should be displayed within a single {@link ChipsCell}.
    
    @see ChipsCell#groupingOptions
    
    @remarks this represents a made instance of ChipsCellGroupingOptions
    """
    
    arrangement: Optional[str]=None
    """
    How the chips should be arranged based on #valuesToStyles.
    """

    fieldPath: Optional[str]=None
    """
    _This field is different from_ {@link ChipsCell#fieldPath} but still based on
    the shape of {@link UiSdlDataGridDataItem#obj}.
    
      - If it's an array of {@link Obj}s and grouping options are provided, this
        field must be provided to extract the value to bin each {@link Obj} by (based
        on #valuesToStyles).
      - If it's an array of strings, this field should be empty.
    """

    valuesToStyles: Optional[Array[Pair[Array[str], ChipStyle]]]
    """
    A list of {@link Pair}s defining which chips should use which [styles](ChipStyle).
    The first element of each pair is a collection of values to match against, and the
    second element is the style to apply to chips with those values. If #arrangement is
    [SORT](ChipsCellArrangement#SORT) or [GROUP](ChipsCellArrangement#GROUP), the order
    of the {@link Pair}s represents the sort order for the chips.
    
    @see fieldPath
    """
    def __init__(self, arrangement: Optional[str]=None, fieldPath: Optional[str]=None, valuesToStyles: Optional[Array[Pair[Array[str], ChipStyle]]]=None) -> None: ...


