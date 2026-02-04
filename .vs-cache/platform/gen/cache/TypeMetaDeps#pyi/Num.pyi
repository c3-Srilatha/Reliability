#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.Pkg import Pkg
from c3.platform.Pair import Pair
from c3.platform.ValueType import ValueType
from c3.platform.Pair import Pair

# Python definitions for the C3 type Num


class Num(Value):
    """
    Helper functions for manipulating numeric values implemented in various numeric types in Java (sub-classes of
    `Number`), `Number` in JavaScript and `int` and `float` in Python.
    
    @remarks this represents a made instance of Num
    """
    
    BI_MAX_BYTE: Optional[float]=None
    """
    BigInteger representations of minimum and maximum values for all C3 Integer types. Used for ease of comparison,
    eg. determining a more fine-grained data type for a BigInteger
    """

    BI_MIN_BYTE: Optional[float]=None

    BI_MAX_INT16: Optional[float]=None

    BI_MIN_INT16: Optional[float]=None

    BI_MAX_INT32: Optional[float]=None

    BI_MIN_INT32: Optional[float]=None

    BI_MAX_INT: Optional[float]=None

    BI_MIN_INT: Optional[float]=None

    BD_ZERO: Optional[float]=None

    BYTES_IN_DBL: Optional[int]
    """
    the number of bytes in a C3 double (precision) value *
    """

    BYTES_IN_FLOAT: Optional[int]
    """
    the number of bytes in a C3 float (single precision) value *
    """

    BYTES_IN_INT: Optional[int]
    """
    the number of bytes in a C3 int (64-bit) value *
    """

    BYTES_IN_INT16: Optional[int]
    """
    the number of bytes in a C3 int16 (16-bit) value *
    """

    BYTES_IN_INT32: Optional[int]
    """
    the number of bytes in a C3 int32 (32-bit) value *
    """

    GI_BYTES: Optional[int]
    """
    the number of bytes in a (base 2) gibibyte: GiB
    """

    KI_BYTES: Optional[int]
    """
    the number of bytes in a (base 2) kibibyte: KiB
    """

    MAX_DIGITS_IN_INT: Optional[int]
    """
    the maximum number of decimal digits representable in a C3 int (2⁶³ ≈ 10¹⁹)
    """

    MI_BYTES: Optional[int]
    """
    the number of bytes in a (base 2) mebibyte: MiB
    """

    PI_BYTES: Optional[int]
    """
    the number of bytes in a (base 2) pebibyte: PiB
    """

    TI_BYTES: Optional[int]
    """
    the number of bytes in a (base 2) tebibyte: TiB
    """
    def __init__(self, BI_MAX_BYTE: Optional[float]=None, BI_MIN_BYTE: Optional[float]=None, BI_MAX_INT16: Optional[float]=None, BI_MIN_INT16: Optional[float]=None, BI_MAX_INT32: Optional[float]=None, BI_MIN_INT32: Optional[float]=None, BI_MAX_INT: Optional[float]=None, BI_MIN_INT: Optional[float]=None, BD_ZERO: Optional[float]=None, BYTES_IN_DBL: Optional[int]=None, BYTES_IN_FLOAT: Optional[int]=None, BYTES_IN_INT: Optional[int]=None, BYTES_IN_INT16: Optional[int]=None, BYTES_IN_INT32: Optional[int]=None, GI_BYTES: Optional[int]=None, KI_BYTES: Optional[int]=None, MAX_DIGITS_IN_INT: Optional[int]=None, MI_BYTES: Optional[int]=None, PI_BYTES: Optional[int]=None, TI_BYTES: Optional[int]=None) -> None: ...

    @overload
    @classmethod
    def myType(cls) -> Union[Type]:
        ...
    @overload
    @classmethod
    def myType(cls, pkg: Pkg) -> Union[Type]:
        ...
    @classmethod
    def addDbl(cls, a: float, b: float) -> Union[float]:
    """
    Sum two double values, handling null values. If both operands are null, the result is null.
    """
        ...
    @overload
    @classmethod
    def binop(cls, lhs: float, rhs: float, dbl: Any, lng: Any, bdc: Callable[[Union[float], Union[float]], Union[float]]) -> Union[float]:
    """
    Perform a binary operation on pairs of numbers of similar types. Depending on the type of the operands,
    call one of three lambdas:
    
     - `double` operands are of mixed numeric types
     - `long` operands are of mixed integer types
     - `BigDecimal` both operands are BigDecimal
    
    
    
    @param lhs
           left-hand-side value
    @param rhs
           right-hand-side value
    @param dbl
           called for mixed numeric values
    @param lng
           called for mixed integer values
    @param bdc
           called only for BigDecimal values
    @return result of operation, as natural type for operands
    """
        ...
    @overload
    @classmethod
    def binop(cls, lhs: float, rhs: float, dbl: Any, lng: Any) -> Union[float]:
    """
    Perform a binary operation on pairs of numbers of similar types. Depending on the type of the operands,
    call one of two lambdas:
    
     - `double` operands are of mixed numeric types
     - `long` operands are of mixed integer types
    
    
    
    @param lhs
           left-hand-side value
    @param rhs
           right-hand-side value
    @param dbl
           called for mixed numeric values
    @param lng
           called for mixed integer values
    @return result of operation, as natural type for operands
    """
        ...
    @overload
    @classmethod
    def compare(cls, a: int, b: int) -> int:
    """
    Compare to integer values.
    """
        ...
    @overload
    @classmethod
    def compare(cls, a: float, b: float) -> int:
    """
    Compare two numeric values, handling nulls. (Nulls sort before non-null values.)
    
    @return 1 if a is bigger, -1 if b is bigger, and 0 if a and b are equal
    """
        ...
    @overload
    @classmethod
    def compare(cls, a: float, b: float, nullIsGreater: bool=None) -> int:
    """
    Compare two numeric values, handling nulls. (Nulls sort before non-null values.)
    
    @param nullIsGreater
           treat null values as greater
    @return 1 if a is bigger, -1 if b is bigger, and 0 if a and b are equal
    """
        ...
    @overload
    @classmethod
    def div(cls, v: float, d: int) -> Union[float]:
    """
    Produce the divisor of a double value, handling null.
    """
        ...
    @overload
    @classmethod
    def div(cls, v: Any, d: int) -> Union[Any]:
    """
    Produce the divisor of a Number value with long and handling null to return a `null`.
    """
        ...
    @overload
    @classmethod
    def div(cls, v: int, d: int) -> Union[int]:
    """
    Produce the divisor of a long value, handling null.
    """
        ...
    @overload
    @classmethod
    def div(cls, v: Any, d: Any) -> Union[Any]:
    """
    Produce the divisor of a Number value, handling null.
    """
        ...
    @overload
    @classmethod
    def format(cls, num: int) -> Union[str]:
    """
    @return formatted number
    """
        ...
    @overload
    @classmethod
    def format(cls, num: int) -> Union[str]:
    """
    @return formatted number
    """
        ...
    @overload
    @classmethod
    def formatBytes(cls, bytes: int) -> Union[str]:
    """
    @see #formatBytes(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatBytes(cls, bytes: int, precision: int) -> Union[str]:
    """
    @see #formatBytes(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatBytes(cls, bytes: int, unit: str) -> Union[str]:
    """
    @see #formatBytes(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatBytes(cls, bytes: int, unit: str, scale: float) -> Union[str]:
    """
    @see #formatBytes(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatBytes(cls, bytes: int, precision: int, unit: str) -> Union[str]:
    """
    @see #formatBytes(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatBytes(cls, bytes: int, precision: int, unit: str, scale: float) -> Union[str]:
    """
    Return a natural representation of a size in bytes with specified unit and rounded to specified precision.
    For example 123 formats as "123B". Negative values return "-". If unit is not defined, a unit will be chosen
    appropriate to the value. If precision is not defined, the formatted number will have 3 significant figures.
    
    @param bytes
           number of bytes
    @param precision
           number of digits after decimal place
    @param unit
           unit for formatting
    @param scale
           multiply original value with this number before formatting
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatBytes(cls, bytes: int, unit: Pair[float, str]) -> Union[str]:
    """
    Return a natural representation of a size in bytes with specified unit with 3 significant figures.
    For example 123 formats as "123B". Negative values return "-". This form takes a Pair structure to
    describe the desired unit and scale. If unit is null, a unit will be chosen appropriate to the value.
    
    @param bytes
           number of bytes
    @param unit
           scale and unit for formatting
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatBytesDelta(cls, delta: int) -> Union[str]:
    """
    Return a natural representation of a size change in bytes with three significant digits.
    
    @param delta
           change in size
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatBytesDelta(cls, before: int, after: int) -> Union[str]:
    """
    Return a natural representation of a size change in bytes with three significant digits.
    
    @param before
           initial size
    @param after
           final size
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatCount(cls, count: int) -> Union[str]:
    """
    @see #formatCount(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatCount(cls, count: int, precision: int) -> Union[str]:
    """
    @see #formatCount(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatCount(cls, count: int, unit: str) -> Union[str]:
    """
    @see #formatCount(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatCount(cls, count: int, unit: str, scale: float) -> Union[str]:
    """
    @see #formatCount(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatCount(cls, count: int, precision: int, unit: str) -> Union[str]:
    """
    @see #formatCount(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatCount(cls, count: int, precision: int, unit: str, scale: float) -> Union[str]:
    """
    Return a natural representation of a counting number with the specified unit and rounded to
    the specified precision. If unit is not defined, a unit will be chosen appropriate to the value.
    If precision is not defined, the formatted number will have 3 significant figures.
    
    @param count
           value
    @param precision
           number of digits after decimal place
    @param unit
           unit for formatting
    @param scale
           multiply original value with this number before formatting
    @return formatted string
    @see #parseCount
    """
        ...
    @overload
    @classmethod
    def formatCount(cls, count: int, unit: Pair[float, str]) -> Union[str]:
    """
    Return a natural representation of a counting number with the specified unit and rounded to
    3 significant figures. This form takes a Pair structure to describe the desired unit and scale.
    If unit is null, a unit will be chosen appropriate to the value.
    
    @param count
           value
    @param unit
           scale and unit for formatting
    @return formatted string
    """
        ...
    @classmethod
    def formatCountShort(cls, count: int) -> Union[str]:
    """
    Return a natural representation of a counting number with at most 3 significant figures and no tailing zeros
    in the number. Note that these read the most naturally, but won't line up between similar values.
    """
        ...
    @classmethod
    def formatElapsedMs(cls, ms: int) -> Union[str]:
    """
    Return a natural representation of a longer duration in milliseconds. This could be a second with two fractional
    digits or it could be a compound value such as "3m 38.21s" or even "98d 11h 12m 13.14s". Note that the format
    always has 100th of a second precision and accommodates arbitrary-sized duration values in a way that can be
    displayed right-aligned:
    
    ```
    | Thing  |       Elapsed |
    |--------|---------------|
    | Rocket |         0.01s |
    | Plane  |        17.23s |
    | Car    |     1m 10.45s |
    | Turtle | 1h 20m  6.12s |
    ```
    
    @param ms
           number of milliseconds
    @return formatted string
    """
        ...
    @classmethod
    def formatElapsedNano(cls, nano: int) -> Union[str]:
        ...
    @classmethod
    def formatElapsedS(cls, secs: float) -> Union[str]:
    """
    Return a natural representation of a longer duration in seconds. This could be a second with two fractional
    digits or it could be a compound value such as "3m 38.21s" or even "98d 11h 12m 13.14s". Note that the format
    always has 100th of a second precision and accommodates arbitrary-sized duration values in a way that can be
    displayed right-aligned:
    
    ```
    | Thing  |       Elapsed |
    |--------|---------------|
    | Rocket |         0.01s |
    | Plane  |        17.23s |
    | Car    |     1m 10.45s |
    | Turtle | 1h 20m  6.12s |
    ```
    
    @param secs
           number of seconds
    @return formatted string
    """
        ...
    @classmethod
    def formatPadLeft(cls, num: int, length: int) -> Union[str]:
    """
    @return formatted and space-prefixed string of specified length
    """
        ...
    @classmethod
    def zeroPad(cls, num: int, length: int) -> Union[str]:
    """
    eg. zeroPad(10, 3) = 010
    zeroPad(-10, 3) = -010
    zeroPad(10, -1) = 10
    zeroPad(10, 1) = 10
    
    @return pad provided integer using provided pad character until specified length
    """
        ...
    @overload
    @classmethod
    def formatPercent(cls, fraction: float) -> Union[str]:
    """
    Return a natural representation of a fractional value as a percentage rounded to 3 significant figures.
    
    @param fraction
           the number that will be converted to a percentage (e.g. 0.5 -> 50%)
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatPercent(cls, fraction: float, precision: int) -> Union[str]:
    """
    Return a natural representation of a fractional value as a percentage rounded to the specified precision
    
    @param fraction
           the number that will be converted to a percentage (e.g. 0.5 -> 50%)
    @param precision
           number of digits after decimal place
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatTimes(cls, times: float) -> Union[str]:
    """
    Return a natural representation of a multiplier (ratio numerator) with three significant digits.
    
    @param times
           value
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatTimes(cls, times: float, unit: Pair[float, str]) -> Union[str]:
    """
    Return a natural representation of a multiplier (ratio numerator) with three significant digits.
    
    
    This form takes the units as an argument. If null, a unit will be chosen appropriate to the value.
    
    @param times
           value
    @param unit
           scale and unit for formatting
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatTimingMs(cls, ms: int) -> Union[str]:
    """
    @see #formatTimingMs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingMs(cls, ms: int, precision: int) -> Union[str]:
    """
    @see #formatTimingMs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingMs(cls, ms: int, unit: str) -> Union[str]:
    """
    @see #formatTimingMs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingMs(cls, ms: int, unit: str, scale: float) -> Union[str]:
    """
    @see #formatTimingMs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingMs(cls, ms: int, precision: int, unit: str) -> Union[str]:
    """
    @see #formatTimingMs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingMs(cls, ms: int, precision: int, unit: str, scale: float) -> Union[str]:
    """
    Return a natural representation of a duration in milliseconds with the specified unit and rounded to
    the specified precision. If unit is not defined, a unit will be chosen appropriate to the value.
    If precision is not defined, the formatted number will have 3 significant figures.
    
    @param ms
           number of milliseconds
    @param precision
           number of digits after decimal place
    @param unit
           unit for formatting
    @param scale
           multiply original value with this number before formatting
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatTimingMs(cls, ms: int, unit: Pair[float, str]) -> Union[str]:
    """
    Return a natural representation of a duration in milliseconds with the specified unit and rounded to
    3 significant figures. This form takes a Pair structure to describe the desired unit and scale.
    If unit is null, a unit will be chosen appropriate to the value.
    
    @param ms
           number of milliseconds
    @param unit
           scale and unit for formatting
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: float) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: float, precision: int) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: float, unit: str) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: float, unit: str, scale: float) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: float, precision: int, unit: str) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: float, precision: int, unit: str, scale: float) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: float, unit: Pair[float, str]) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: int) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: int, precision: int) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: int, unit: str) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: int, unit: str, scale: float) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: int, precision: int, unit: str) -> Union[str]:
    """
    @see #formatTimingNs(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: int, precision: int, unit: str, scale: float) -> Union[str]:
    """
    Return a natural representation of a duration in nanoseconds with the specified unit and rounded to
    the specified precision. If unit is not defined, a unit will be chosen appropriate to the value.
    If precision is not defined, the formatted number will have 3 significant figures.
    
    @param ns
           number of nanoseconds
    @param precision
           number of digits after decimal place
    @param unit
           unit for formatting
    @param scale
           multiply original value with this number before formatting
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatTimingNs(cls, ns: int, unit: Pair[float, str]) -> Union[str]:
    """
    Return a natural representation of a duration in nanoseconds with the specified unit and rounded to
    3 significant figures. This form takes a Pair structure to describe the desired unit and scale.
    If unit is null, a unit will be chosen appropriate to the value.
    
    @param ns
           number of nanoseconds
    @param unit
           scale and unit for formatting
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatTimingS(cls, s: float) -> Union[str]:
    """
    @see #formatTimingS(double, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingS(cls, s: float, precision: int) -> Union[str]:
    """
    @see #formatTimingS(double, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingS(cls, s: float, unit: str) -> Union[str]:
    """
    @see #formatTimingS(double, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingS(cls, s: float, unit: str, scale: float) -> Union[str]:
    """
    @see #formatTimingS(double, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingS(cls, s: float, precision: int, unit: str) -> Union[str]:
    """
    @see #formatTimingS(double, int, String, double)
    """
        ...
    @overload
    @classmethod
    def formatTimingS(cls, s: float, precision: int, unit: str, scale: float) -> Union[str]:
    """
    Return a natural representation of a duration in seconds with an appropriate unit and rounded to the
    specified precision. If unit is not defined, a unit will be chosen appropriate to the value.
    If precision is not defined, the formatted number will have 3 significant figures.
    
    @param s
           number of seconds
    @param precision
           number of digits after decimal place
    @param unit
           unit for formatting
    @param scale
           multiply original value with this number before formatting
    @return formatted string
    """
        ...
    @overload
    @classmethod
    def formatTimingS(cls, s: float, unit: Pair[float, str]) -> Union[str]:
    """
    Return a natural representation of a duration in seconds with the specified unit and rounded to
    3 significant figures. This form takes a Pair structure to describe the desired unit and scale.
    If unit is null, a unit will be chosen appropriate to the value.
    
    @param s
           number of seconds
    @param unit
           scale and unit for formatting
    @return formatted string
    """
        ...
    @classmethod
    def formatNano(cls, nano: int) -> Union[str]:
    """
    @return formatted number of seconds with fixed 6 decimal places from nanoseconds
    """
        ...
    @classmethod
    def parseTiming(cls, s: str) -> Union[int]:
    """
    Return number of nano seconds given a natural representation of a duration produced by
    `formatTimingNs`, `formatTimingMs`, or `formatTimingS`.
    
    @param s
           formatted string. eg. '426.234ms'
    @return number of nanoseconds. eg. 426234000
    """
        ...
    @classmethod
    def fromBytes(cls, value: any, failIfInvalid: bool=None, for_: str=None) -> Union[int]:
    """
    Build an integer value from the data encoded as bytes in MSB-first order.
    """
        ...
    @overload
    @classmethod
    def fromString(cls, value: str) -> Union[float]:
    """
    Parse a string as a numeric value, preserving the most appropriate Java numeric type. This will be one of:
    `int`, `long` or `double` depending on the format and scale.
    
    If the string cannot be parsed `NaN` is returned.
    """
        ...
    @overload
    @classmethod
    def fromString(cls, value: str, failIfInvalid: bool=None) -> Union[float]:
    """
    Parse a string as a numeric value, preserving the most appropriate Java numeric type. This will be one of:
    `int`, `long` or `double` depending on the format and scale.
    
    If the string cannot be parsed and failIfInvalid is true an error is thrown, otherwise `NaN` is
    returned.
    """
        ...
    @classmethod
    def forPython(cls, num: float) -> Union[float]:
    """
    Helper function to convert any Java number to a number which JEP can convert from Java to Python
    
    @param num:
           a number we would like to send to Python
    @return num as a type which JEP can convert from Java to Python
    """
        ...
    @classmethod
    def isDouble(cls, s: str) -> bool:
    """
    Parse a double representation to determine if it is strictly a double.
    """
        ...
    @overload
    @classmethod
    def isInt(cls, s: str) -> bool:
    """
    Parse an integer representation to determine if it is strictly an integer.
    """
        ...
    @overload
    @classmethod
    def isInt(cls, v: float) -> bool:
    """
    Determine if a numeric value is a integer value, in particular if it can be represented by a C3 `int`
    (Java `long`) and longValue can be called without loss.
    """
        ...
    @classmethod
    def isFinite(cls, v: float) -> bool:
    """
    Determine if a numeric value is a finite number (not, `null`NaN` or
    ±`Infinity`).
    """
        ...
    @classmethod
    def isAnyInt(cls, v: float) -> bool:
    """
    Determine if a numeric value is any size integer value, in particular if it can be represented by a C3
    `bigint` (Java `BigInteger`).
    """
        ...
    @classmethod
    def isInfinite(cls, v: float) -> bool:
    """
    Determine if a numeric value is infinite (`null` or ±`Infinity`).
    """
        ...
    @classmethod
    def isNaN(cls, v: float) -> bool:
    """
    Determine if a numeric value is not-a-number (`null` or `NaN`).
    """
        ...
    @classmethod
    def isMissing(cls, v: float) -> bool:
    """
    Determine if a numeric value is missing (`null`, `NaN` or ±`Infinity`).
    """
        ...
    @overload
    @classmethod
    def isSameNumber(cls, actual: Any, expected: float, epsilon: float) -> bool:
    """
    Compare the actual value with the expected double value and ensure they have the same numeric value within
    the specified epsilon.
    
    
    This is not commutative; the comparison is driven by the expected value and the actual is compared to it.
    """
        ...
    @overload
    @classmethod
    def isSameNumber(cls, actual: Any, expected: int, epsilon: float) -> bool:
    """
    Compare the actual value with the expected integer value and ensure they have the same numeric value. The
    expected value must be an integer, within the specified epsilon.
    
    
    This is not commutative; the comparison is driven by the expected value and the actual is compared to it.
    """
        ...
    @overload
    @classmethod
    def isSameNumber(cls, actual: Any, expected: float, epsilon: float) -> bool:
    """
    Compare the actual value with the expected value and ensure they have the same numeric value within the
    specified epsilon. This ignores the exact Java numeric class and only compares numeric values.
    
    
    This is not commutative; the comparison is driven by the expected value and the actual is compared to it.
    """
        ...
    @overload
    @classmethod
    def isSameNumber(cls, actual: Any, expected: float) -> bool:
    """
    Compare the actual value with the expected value and ensure they have the same numeric value within the
    finest epsilon for the values. This ignores the exact Java numeric class and only compares numeric values.
    
    
    This is not commutative; the comparison is driven by the expected value and the actual is compared to it.
    """
        ...
    @overload
    @classmethod
    def max(cls, a: float, b: float) -> Union[float]:
    """
    Get the maximum of two Number values, handling nulls.
    """
        ...
    @overload
    @classmethod
    def max(cls, a: float, b: float) -> Union[float]:
    """
    Get the maximum of two double values, handling nulls.
    """
        ...
    @overload
    @classmethod
    def min(cls, a: float, b: float) -> Union[float]:
    """
    Get the minimum of two double values, handling nulls.
    """
        ...
    @overload
    @classmethod
    def min(cls, a: float, b: float) -> Union[float]:
    """
    Get the maximum of two Number values, handling nulls.
    """
        ...
    @classmethod
    def numberFormat3(cls, amount: float, orig: float, fixed: bool=None) -> Union[Any]:
    """
    Return a Java number format appropriate for formatting numbers to 3 significant digits.
    
    @param amount
           the value to be formatted
    @param orig
           the unscaled (raw) value
    @param fixed
           always use the same number of digits after the decimal point
    @return configured NumberFormat instance
    """
        ...
    @classmethod
    def numberFormatCustom(cls, precision: int) -> Union[Any]:
    """
    Returns a Java NumberFormat appropriate for formatting numbers to the specified `precision`.
    
    @param precision
           number of digits after decimal place
    """
        ...
    @classmethod
    def parseCount(cls, s: str, failIfInvalid: bool=None) -> Union[int]:
    """
    Parse a formatted count string. This includes number and optional unit. For example, parsing "1.2K"
    returns `1200`.
    
    The units supported are:
    
     - "K": 1000 (thousand)
     - "M": 10⁶ (million)
     - "B": 10⁹ (billion)
     - "T": 10¹² (trillion)
     - "Q": 10¹⁵ (quadrillion)
    
    
    Units are case insensitive.
    
    @see #formatCount(long, int, String, double)
    """
        ...
    @overload
    @classmethod
    def parseDouble(cls, s: str) -> Union[float]:
    """
    Parse an double representation into its natural Java form. This will return a `double`.
    If the string is not an integer value, it will throw an exception.
    """
        ...
    @overload
    @classmethod
    def parseDouble(cls, s: str, failIfInvalid: bool=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def parseInt(cls, s: str) -> Union[float]:
    """
    Parse an integer representation into its natural Java form. This will return a `int`, `long`
    or `BigInteger`. If the string is not an integer value, it will throw an exception.
    """
        ...
    @overload
    @classmethod
    def parseInt(cls, s: str, failIfInvalid: bool=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def pickBytesUnit(cls, bytes: int, scaleDigits: int) -> Union[str]:
    """
    Pick a byte size unit for formatting using base-10 units ("MB")
    
    @see #pickBytesUnit(long, int, boolean)
    """
        ...
    @overload
    @classmethod
    def pickBytesUnit(cls, bytes: int, scaleDigits: int, base2: bool=None) -> Union[str]:
    """
    Pick a byte size unit for formatting.
    
    @param bytes
           size in bytes
    @param scaleDigits
           adjust the values by 10⁻ⁿ to affect the chosen units
    @param base2
           if true, use base 2 units ("MiB") rather than base 10 ("MB")
    @return unit for formatting
    """
        ...
    @classmethod
    def pickBytesScale(cls, unit: str) -> float:
    """
    Given a unit, return the constant to scale the original value so that it can be displayed in terms of unit.
    
    @param unit
           byte size unit
    @return scale for formatting
    """
        ...
    @overload
    @classmethod
    def pickBytesScaleAndUnit(cls, bytes: int, scaleDigits: int) -> Union[Pair[float, str]]:
    """
    Pick a byte size scale and unit for formatting, using base-10 units ("MB").
    
    @param bytes
           size in bytes
    @param scaleDigits
           adjust the values by 10⁻ⁿ to affect the chosen units
    @return scale and unit for formatting
    """
        ...
    @overload
    @classmethod
    def pickBytesScaleAndUnit(cls, bytes: int, scaleDigits: int, base2: bool=None) -> Union[Pair[float, str]]:
    """
    Pick a byte size scale and unit for formatting.
    
    @param bytes
           size in bytes
    @param scaleDigits
           adjust the values by 10⁻ⁿ to affect the chosen units
    @param base2
           if true, use base 2 units ("MiB") rather than base 10 ("MB")
    @return scale and unit for formatting
    """
        ...
    @classmethod
    def pickCountUnit(cls, count: int, scaleDigits: int) -> Union[str]:
    """
    Pick a counting number unit for formatting.
    
    @param count
           value
    @param scaleDigits
           adjust the values by 10⁻ⁿ to affect the chosen units
    @return unit for formatting
    """
        ...
    @classmethod
    def pickCountScale(cls, unit: str) -> float:
    """
    Given a unit, return the constant to scale the original value so that it can be displayed in terms of unit.
    
    @param unit
           counting number unit
    @return scale for formatting
    """
        ...
    @classmethod
    def pickCountScaleAndUnit(cls, count: int, scaleDigits: int) -> Union[Pair[float, str]]:
    """
    Pick a counting number scale and unit for formatting.
    
    @param count
           value
    @param scaleDigits
           adjust the values by 10⁻ⁿ to affect the chosen units
    @return scale and unit for formatting
    """
        ...
    @classmethod
    def pickTimesUnit(cls, times: float, scaleDigits: int) -> Union[Pair[float, str]]:
    """
    Pick a multiplier (ratio numerator) scale and unit for formatting.
    
    @param times
           value
    @param scaleDigits
           adjust the values by 10⁻ⁿ to affect the chosen units
    @return scale and unit for formatting
    """
        ...
    @classmethod
    def pickTimingUnitNs(cls, ns: int, scaleDigits: int) -> Union[str]:
    """
    Pick a nanosecond duration unit for formatting.
    
    @param ns
           duration in nanoseconds
    @param scaleDigits
           adjust the values by 10⁻ⁿ to affect the chosen units
    @return unit for formatting
    """
        ...
    @classmethod
    def pickTimingScaleNs(cls, unit: str) -> float:
    """
    Given a unit, return the constant to scale the original value so that it can be displayed in terms of unit.
    
    @param unit
           time duration unit
    @return scale for formatting
    """
        ...
    @classmethod
    def pickTimingScaleAndUnitNs(cls, ns: int, scaleDigits: int) -> Union[Pair[float, str]]:
    """
    Pick a nanosecond duration scale and unit for formatting.
    
    @param ns
           duration in nanoseconds
    @param scaleDigits
           adjust the values by 10⁻ⁿ to affect the chosen units
    @return scale and unit for formatting
    """
        ...
    @classmethod
    def pickTimingScaleAndUnitS(cls, s: float, scaleDigits: int) -> Union[Pair[float, str]]:
    """
    Pick a second duration scale and unit for formatting.
    
    @param s
           duration in seconds
    @param scaleDigits
           adjust the values by 10⁻ⁿ to affect the chosen units
    """
        ...
    @overload
    @classmethod
    def sum(cls, a: float, b: float) -> Union[float]:
    """
    Produce the sum of two double values, handling nulls.
    """
        ...
    @overload
    @classmethod
    def sum(cls, a: int, b: int) -> Union[int]:
    """
    Produce the sum of two long values, handling nulls.
    """
        ...
    @classmethod
    def sumCount(cls, a: Pair[float, int], b: float) -> Union[Pair[float, int]]:
    """
    Produce the sum and count of two Number values, handling nulls.
    """
        ...
    @overload
    @classmethod
    def toAnyInt(cls, iv: float) -> Union[float]:
    """
    Convert the arbitrary precision value to the most natural form of integer (either int32 or int).
    """
        ...
    @overload
    @classmethod
    def toAnyInt(cls, iv: float, boundToLongRange: bool=None, failIfOutOfLongRange: bool=None) -> Union[float]:
    """
    Convert the arbitrary precision value to the most natural form of integer (int32, int or BigInteger).
    """
        ...
    @classmethod
    def toBigInt(cls, num: float) -> Union[float]:
        ...
    @classmethod
    def toBool(cls, num: float) -> bool:
        ...
    @classmethod
    def toByte(cls, num: float) -> Union[int]:
        ...
    @overload
    @classmethod
    def toByteArray(cls, value: int) -> Union[Array[int]]:
        ...
    @overload
    @classmethod
    def toByteArray(cls, value: int) -> Union[Array[int]]:
        ...
    @overload
    @classmethod
    def toByteArray(cls, value: int) -> Union[Array[int]]:
        ...
    @overload
    @classmethod
    def toByteArray(cls, value: int) -> Union[Array[int]]:
        ...
    @classmethod
    def toBytes(cls, value: int, compact: bool=None) -> Union[any]:
        ...
    @classmethod
    def toChar(cls, num: float, failIfInvalid: bool=None, for_: str=None) -> Union[int]:
        ...
    @classmethod
    def toDateTime(cls, num: float, failIfInvalid: bool=None, for_: str=None) -> Union[datetime]:
        ...
    @classmethod
    def toDecimal(cls, num: float) -> Union[float]:
    """
    {@link java.math.BigDecimal#BigDecimal(String)} is the preferred method of instantiating a BigDecimal. See
    comments in {@link java.math.BigDecimal#BigDecimal(double)} for an explanation. In short, BigDecimal translates a
    double using "the exact decimal representation of the {@code double}'s binary floating-point value" which leads to
    unpredictable results.
    """
        ...
    @classmethod
    def toDouble(cls, num: float) -> Union[float]:
        ...
    @classmethod
    def toFloat(cls, num: float) -> Union[float]:
        ...
    @classmethod
    def toInt(cls, num: float) -> Union[int]:
        ...
    @classmethod
    def toInt16(cls, num: float) -> Union[int]:
        ...
    @classmethod
    def toInt32(cls, num: float) -> Union[int]:
        ...
    @classmethod
    def toValue(cls, v: float, vt: ValueType, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
        ...
    @overload
    @classmethod
    def visitNumber(cls, value: float, visitor: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def visitNumber(cls, value: float, arg: Any, visitor: Any) -> Union[Any]:
        ...
    @classmethod
    def visitNumbers(cls, a: float, b: float, visitor: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def clamp(cls, num: int, min: int, max: int) -> int:
        ...
    @overload
    @classmethod
    def clamp(cls, num: float, min: float, max: float) -> float:
        ...
    @classmethod
    def toStr(cls, num: int) -> Union[str]:
        ...
    @overload
    @classmethod
    def add(cls, num: float, e: Any) -> float:
        ...
    @overload
    @classmethod
    def add(cls, a: Any, b: Any) -> Union[Any]:
    """
    Add two numbers and return result boxed in the first non-null argument from left to right. (a -> b)
    Return null if both are null.
    """
        ...
    @classmethod
    def sub(cls, a: Any, b: Any) -> Union[Any]:
    """
    Add two numbers and return result boxed in the first non-null argument from left to right. (a -> b)
    Return null if both are null.
    """
        ...
    @classmethod
    def mod(cls, v: Any, d: Any) -> Union[Any]:
    """
    Produce the modulo of a Number value, handling null.
    """
        ...
    @classmethod
    def floorDiv(cls, v: Any, d: Any) -> Union[Any]:
    """
    Produce the floor division of a Number value, handling null.
    """
        ...
    @classmethod
    def mul(cls, v: Any, d: Any) -> Union[Any]:
    """
    Produce the multiplication of a Number value, handling null.
    """
        ...
    @classmethod
    def pow(cls, a: Any, b: Any) -> Union[Any]:
    """
    Produce the power of a Number value, handling null.
    """
        ...
    @classmethod
    def abs(cls, a: Any) -> Union[Any]:
        ...
    @classmethod
    def neg(cls, a: Any) -> Union[Any]:
        ...
    @classmethod
    def round(cls, v: Any) -> Union[Any]:
        ...
    @classmethod
    def invert(cls, v: Any) -> Union[Any]:
        ...

