#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type BinaryOp


class BinaryOp(BinaryOpArithmetic, BinaryOpComparison):
    """
    Enumeration of all supported binary operators
    
    @remarks this represents a made instance of BinaryOp
    """
    
    ADD: Optional[str]=None
    """
    Adds other value to elements.
    """

    SUB: Optional[str]=None
    """
    Subtracts other value from elements.
    """

    MUL: Optional[str]=None
    """
    Multiples other value to elements.
    """

    DIV: Optional[str]=None
    """
    Alias for TRUEDIV.
    """

    TRUEDIV: Optional[str]=None
    """
    Floating point division of elements by other value.
    """

    FLOORDIV: Optional[str]=None
    """
    Floor division of elements by other value.
    """

    MOD: Optional[str]=None
    """
    Modulos elements by other value.
    """

    POW: Optional[str]=None
    """
    Raises elements to the power of other value.
    """

    RADD: Optional[str]=None

    RSUB: Optional[str]=None

    RMUL: Optional[str]=None

    RDIV: Optional[str]=None

    RTRUEDIV: Optional[str]=None

    RFLOORDIV: Optional[str]=None

    RMOD: Optional[str]=None

    RPOW: Optional[str]=None

    EQ: Optional[str]=None
    """
    Elementwise equality comparison of elements with other value.
    """

    GT: Optional[str]=None
    """
     Elementwise greater than comparison. Comparison with a null operand will always produce false.
     When comparing values of DateTime with String/Number, String/Number value will be converted, if possible,
     to Datetime, and then a comparison is performed.
     Collection<int> > scalar:
    ```
     [[1, 2, 3]           [[false, false, true]
      [4, null, 6]  > 2 =  [true, false, true]
      [7, 8, 9]]           [true, true, true]]
    ```
    
     Collection<int> > Collection<int>:
    ```
     [[1, 1, 3]                   [[false, false, true]
      [1, 1, 3]  > [null, 2, 1] =  [false, false, true]
      [1, 1, 3]]                   [false, false, true]]
    ```
     Collections with different shapes
     Collection<int> > Collection<int>:
    ```
     [[1, 1, 3]    [[0, 2],      [[true, false, false]
      [1, 1, 3]  >  [null, 2], =  [false, false, false]
      [1, 1, 3]]    [4, 0]]       [false, true, false]]
    ```
    
     Collection<Obj> > scalar:
    ```
     [{a: 1, b: 1}        [{a: false, b: false}
      {a: 2, b: 2}  > 2 =  {a: false, b: false}
      {a: 3, b: 3}]        {a: true, b: true}]
    ```
    
     Collection<Obj> > Collection<Obj>:
    ```
     [{a: 1, b: 1}                      [{a: false, b: false}
      {a: 2, b: 2}  + [{a: 2, b: 1}] =   {a: false, b: true}
      {a: 3, b: 3}]                      {a: true, b: true}]
    ```
    """

    GE: Optional[str]=None
    """
    Elementwise greater than or equal to comparison of elements with other value.
    """

    LT: Optional[str]=None
    """
    Elementwise less than comparison of elements with other value.
    """

    LE: Optional[str]=None
    """
    Elementwise less than or equal to comparison of elements with other value.
    """

    NE: Optional[str]=None
    """
    Elementwise not equals comparison of elements with other value.
    """

    AND: Optional[str]=None

    OR: Optional[str]=None
    def __init__(self, ADD: Optional[str]=None, SUB: Optional[str]=None, MUL: Optional[str]=None, DIV: Optional[str]=None, TRUEDIV: Optional[str]=None, FLOORDIV: Optional[str]=None, MOD: Optional[str]=None, POW: Optional[str]=None, RADD: Optional[str]=None, RSUB: Optional[str]=None, RMUL: Optional[str]=None, RDIV: Optional[str]=None, RTRUEDIV: Optional[str]=None, RFLOORDIV: Optional[str]=None, RMOD: Optional[str]=None, RPOW: Optional[str]=None, EQ: Optional[str]=None, GT: Optional[str]=None, GE: Optional[str]=None, LT: Optional[str]=None, LE: Optional[str]=None, NE: Optional[str]=None, AND: Optional[str]=None, OR: Optional[str]=None) -> None: ...

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

