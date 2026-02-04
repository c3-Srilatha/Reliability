#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.GeomPolygon import GeomPolygon
from c3.platform.GeomPoint3DWithMeasure import GeomPoint3DWithMeasure
from c3.platform.Expr.DistanceSpec import Expr.DistanceSpec
from c3.platform.Geo import Geo
from c3.platform.Obj import Obj
from c3.platform.Timeseries import Timeseries
from c3.platform.GeomPoint import GeomPoint
from c3.platform.GeomPointWithMeasure import GeomPointWithMeasure
from c3.platform.User import User
from c3.platform.GeomLineString import GeomLineString
from c3.platform.StringPatternMatch import StringPatternMatch
from c3.platform.GeomPolygon3D import GeomPolygon3D
from c3.platform.Dimension import Dimension
from c3.platform.Geom import Geom
from c3.platform.GeomPoint3D import GeomPoint3D
from c3.platform.TimeRange import TimeRange

# Python definitions for the C3 type ReliabilityExpressionEngineFunction


class ReliabilityExpressionEngineFunction(MetricFunctionLibrary, ExpressionEngineFunction):
    """
    A library of custom defined expresion engine functions that can be used across the application
    including, but not limited to read calcs, stored calcs, Expr.eval etc.
    
    @remarks this represents a made instance of ReliabilityExpressionEngineFunction
    """
    def __init__(self) -> None: ...

    @overload
    @classmethod
    def abs(cls, value: float=None) -> Union[float]:
    """
    Returns the absolute value of the input.
    
    Example:
    
    `>>> abs(-0.453)`
    
    `0.453`
    
    @param value
           Input value.
    @return Absolute value of the input value.
    """
        ...
    @overload
    @classmethod
    def abs(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns the dimension with the sign dropped from its value field.
    
    Example:
    
    `>>> abs({value: -1, unit: unit})`
    
    `{value: 1, unit: unit}`
    
    @param dimension
           Dimension input.
    @return Dimension with the sign dropped from its value field.
    """
        ...
    @overload
    @classmethod
    def abs(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns the input time series with the sign dropped from its values.
    
    Example:
    
    TS.data:
    ```
         1       -4.5      9         0
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    `abs(TS)`:
    ```
         1       4.5       9         0
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    Examples:
    
    `>>> abs(TS)`
    
    `([1, 4.5, 9, 0])`
    
    @param timeseries
           Time series input
    @return The input time series with sign dropped from its values.
    """
        ...
    @overload
    @classmethod
    def acos(cls, value: float=None) -> Union[float]:
    """
    Returns the arc cosine function value of the input value. The input value is treated as radians.
    
    Example:
    
    `>>> acos(0.66)`
    
    `0.8499`
    
    @param value
           Input value
    @return The arc cosine function value of the input. Input value is assumed to be in radians.
    """
        ...
    @overload
    @classmethod
    def acos(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns a dimension by applying arc cosine function to the input value field. The input value is assumed to be in radians.
    
    Example:
    
    `>>> acos({value: 0.24, unit: unit})`
    
    `{value: 1.328, unit: unit}`
    
    @param dimension
           Dimension input.
    @return A dimension with arc cosine function applied to the input value field. The input value is assumed to be in radians.
    """
        ...
    @overload
    @classmethod
    def acos(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series with arc cosine function applied to values in the input time series. The input values are assumed to be in radians.
    
    Example:
    
    TS.data:
    ```
       -0.4      0.93      0.2    -0.1
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    `acos(TS)`:
    ```
       1.9823   0.3764   1.3694   1.6709
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    Example:
    
    `>>> acos([-0.4, 0.93, 0.2, -0.1])`
    
    `[1.9823, 0.3764, 1.3694, 1.6709]`
    
    @param timeseries
           Time series input.
    @return A time series with the arc cosine function values of the corresponding input values. The input values are assumed to be in radians.
    """
        ...
    @classmethod
    def aggregate(cls, timeseries: Timeseries[Any], aggregationFunction: str, prorate: bool=None) -> Timeseries[Any]:
    """
    Aggregates a time series into an {@link identity} time series. The scalar value in the resulting {@link identity} time series is generated using the specified aggregation function in the input.
    
    If `prorate` flag is specified, then the aggregated value is scaled for the missing data.
    
    For example:
    
    - The aggregate value is 80 for 8 months of available data in a year.
    - The `prorate` flag set, and query spans a year.
    - Then the final, scaled aggregate value returned will be scaled for 4 months of missing data ==> `80 * 12 / (12 - 4) = 120`.
    
    Example:
    
    TS.data:
    ```
         1       2.9      333      35
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    For `aggregate(TS, 'SUM')`, `aggregationFunction` is set to `SUM` and `prorate` flag is not set:
    
    
    ```
       371.9    371.9    371.9    371.9
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    For `aggregate(TS, 'AVG')`, `aggregationFunction` is set to `AVG` and `prorate` flag is not set:
    
    
    ```
       92.975   92.975   92.975   92.975
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    
    For `aggregate(TS, 'MIN')`,  `aggregationFunction` is set to `MIN` and `prorate` flag is not set:
    
    
    ```
         1         1       1         1
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    For `aggregate(TS, 'MAX')`,  `aggregationFunction` is set to `MAX` and `prorate` flag is not set:
    
    
    ```
        332     332      332       332
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    
    Examples:
    
    `aggregate(sum(normalized.data.quantity), 'SUM')`
    
    `aggregate(sum(normalized.data.quantity), 'SUM', `false`)`
    
    @param timeseries
           Time series input.
    @param aggregationFunction
           One of SUM|AVG|MIN|MAX.
    @param prorate
           Default `false`. The aggregate value is scaled if this is set to `true`.
    @return The {@link identity} time series with the scalar value obtained by aggregating all points of the input time series according to `aggregateFunction` input parameter.
    """
        ...
    @classmethod
    def and(cls, timeseriesArry: Array[Timeseries[Any]]) -> Timeseries[Any]:
    """
     Returns a boolean time series where every value is obtained by element-wise ANDing the input TS. The resultant value for every point is 0 (`false`) or 1 (`true`). If the input time series are numeric, then the value 0 is treated as `false`, and every other value is treated as `true`.
    
     Example:
    
     TS1.data:
     ```
          3       2       0         2
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS2.data:
     ```
         3        0       7.5       3
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS3.data:
     ```
        3.21       2       3         2
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     `and([TS1, TS2, TS3])`:
     ```
        1         0        0        1
     |--------|--------|--------|--------|
    
     t1       t2       t4       t4       t5
    ```
    
     Example: `and(sum(someArryField.normalized.data.quantity))`
    
     @param timeseriesArry
            An array of input time series objects.
     @return A new time series with point-wise boolean AND of all time series in the input array.
    """
        ...
    @overload
    @classmethod
    def asin(cls, value: float=None) -> Union[float]:
    """
    Returns arc sine function applied to input value. The input is assumed to be in radians.
    
    Example:
    
    `>>> asin(0.45)`
    
    `0.4667`
    
    @param value
           Input value.
    @return The arc sine function applied to input value. Input is assumed to be in radians.
    """
        ...
    @overload
    @classmethod
    def asin(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns a dimension with arc sine function applied to input value. The input value is assumed to be in radians.
    
    Example:
    
    `>>> asin({value: 0.67, unit: unit})`
    
    `{value: 0.7342, unit: unit}`
    
    @param dimension
           Dimension input.
    @return A dimension with arc sine function applied to input value. Input is expected in radians.
    """
        ...
    @overload
    @classmethod
    def asin(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series with arc sine function applied to input values. Input values are expected in radians.
    
    Example:
    
    TS.data:
    
    ```
       -0.9   0.453     9
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    `asin(TS)`:
    
    ```
      -1.1197 0.4701  0.5586
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    @param timeseries
           Time series input.
    @return A time series with arc sine function applied to input values. Input values are expected in radians.
    """
        ...
    @overload
    @classmethod
    def atan(cls, value: float=None) -> Union[float]:
    """
    Returns arc tangent function applied to input value. Input value is expected in radians.
    
    Example:
    
    `>>> atan(0.45)`
    
    `0.4228`
    
    @param value
           Input value.
    @return The arc tangent function applied to input value. Input value is expected in radians.
    """
        ...
    @overload
    @classmethod
    def atan(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns a dimesion with arc tangent function applied to input value. The input value is assumed to be in radians.
    
    Example:
    
    `>>> atan({value: 0.67, unit: unit})`
    
    `{value: 0.5903, unit: unit}`
    
    @param dimension
           Dimension Input.
    @return A dimension with arc tangent function applied to input value. The input value is expected in radians.
    """
        ...
    @overload
    @classmethod
    def atan(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series with arc tangent function applied to input values. The input values are expected in radians.
    
    Example:
    
    TS.data:
    
    ```
       -0.9   0.453   0.53
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    `atan(TS)`:
    
    ```
     -0.7328  0.4253  0.4873
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    Example:
    
    `>>> atan([-0.9, 0.453, 0.53])`
    
    `[-0.7328, 0.4253, 0.4873]`
    
    @param timeseries
           Time series input.
    @return A time series with arc tangent function applied to input values. The input values are expected in radians.
    """
        ...
    @overload
    @classmethod
    def avg(cls, value: Array[float]=None) -> Union[float]:
    """
    Returns the average value of all input double values. For example, the function `avg(arryField)` returns the AVG of all values in arryField.
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    Example:
    
    `>>> avg([1, 2, 3])`
    
    `2`
    
    @param value
           A field, Arry or Collection of values in data type double.
    return The averaged value of all values in input.
    """
        ...
    @overload
    @classmethod
    def avg(cls, dimension: Array[Dimension]=None) -> Union[Dimension]:
    """
    Returns a dimension with average value of all dimensions' value in the input, with the unit as the first dimension's unit in the Collection argument.
    
    Example:
    
    `>>> avg({value: 1, unit: unit1},
             {value: 2, unit: unit2},
             {value: 3, unit: unit3})`
    
    `{value: 2, unit: unit}`
    
    @param dimension
           A field, Arry or Collection of dimension values.
    return A dimension with value of all dimensions' value in the input.
    """
        ...
    @overload
    @classmethod
    def avg(cls, timeserieses: Array[Timeseries[Any]]=None) -> Union[Timeseries[Any]]:
    """
    Returns point-wise average of all the time series in the input array.
    
    Example:
    
    TS1.data:
    ```
         3       2       4         2
    |--------|--------|--------|--------|
    
    t1      t2        t3       t4       t5
    ```
    
    TS2.data:
    ```
         2       1       1         6
    |--------|--------|--------|--------|
    
    t1      t2        t3       t4       t5
    ```
    
    TS3.data:
    ```
         2       2       3         4
    |--------|--------|--------|--------|
    
    t1      t2        t3       t4       t5
    ```
    
    `avg([TS1, TS2, TS3])`:
    ```
       2.3333   1.6666   2.6666     4
    |--------|--------|--------|--------|
    
    t1       t2       t4       t4       t5
    ```
    
    Example:
    
    `avg(sum(someArryField.normalized.data.quantity))`
    
    `avg(sum([TS1, TS2, TS3])`
    
    @param timeserieses
           An input array of time series.
    return The point-wise average of all time serieses in input array.
    """
        ...
    @classmethod
    def bit(cls, timeseries: Timeseries[Any], bitIndex: int) -> Timeseries[Any]:
    """
    Converts to integer and returns the nth bit. Bit-index addressing is zero-based. The rightmost bit is index 0 and the one to its left is index 1 and so on. If input is number, then the output is 0 or 1. If input is a time series, then the output is time series of 0 or 1.
    
    Example:
    
    TS.data:
    
    ```
       23      20     20.4
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    `bit(TS, 1)`:
    
    ```
       1       0       0
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    Examples:
    
    `>>> bit(23, 1)`
    
    `1`
    
    `>>> bit(20, 1)`
    
    `0`
    
    `>>> bit(20.4, 1)`
    
    `0`
    
    
    @param timeseries
           The time series input.
    @param bitIndex
           The bit index (starting with 0 and increasing towards MSB).
    @returns The time series of bits (0 or 1).
    """
        ...
    @overload
    @classmethod
    def bool(cls, input: int=None) -> bool:
    """
    Converts the input integer to a boolean. Input 0 or '0' will produce `false`. Input 1 or '1' will produce `true`.
    
    Examples:
    
    `>>> bool(0)`
    
    `false`
    
    `>>> bool('0')`
    
    `false`
    
    `>>> bool(1)`
    
    `true`
    
    `>>> bool('1')`
    
    `true`
    
    @param input
           Integer input. Could also be 0 or 1.
    @return Boolean result.
    """
        ...
    @overload
    @classmethod
    def bool(cls, input: str=None) -> bool:
    """
    Converts a string to a boolean. Input 'false' will produce `false`. Input 'true' will produce `true`. The check for strings 'false' or 'true' is case insensitive.
    
    Example:
    
    `>> bool('false')`
    
    `false`
    
    `>> bool('true')`
    
    `true `
    
    @param input
           String input. Could also be 'false' or 'true'.
    @return The boolean result of the input.
    """
        ...
    @overload
    @classmethod
    def ceil(cls, value: Union[float]=None, scale: int=None) -> Union[float]:
    """
    Rounds the input towards positive infinity. The second argument, `scale`, is to indicate the nth decimal place where rounding should happen.
    Examples:
    
    `>>> ceil(10.57, 1)`
    
    `10.6`
    
    `>>> ceil(-10.57, 1)`
    
    `-10.5`
    
    `>>> ceil(10.655, 2)`
    
    `10.66`
    
    `>>> ceil(3, 3)`
    
    `3`
    
    @param value
           The value input. The valueType for this field should not be a `decimal` number type if a `double` output is expected.
    @param scale
           An optional n input indicating the nth decimal place where rounding should happen. Default value is 0.
    @return The input value that is rounded towards positive infinity.
    """
        ...
    @overload
    @classmethod
    def ceil(cls, value: float=None) -> Union[int]:
    """
    Rounds the input towards positive infinity.
    
    Examples:
    
    `>>> ceil(10.5)`
    
    `11`
    
    `>>> ceil(decimal(10.5))`
    
    `11`
    
    @param value
           Input value
    @return The input value that is rounded towards positive infinity.
    """
        ...
    @overload
    @classmethod
    def ceil(cls, value: float=None, scale: int=None) -> Union[float]:
    """
    Rounds the input towards positive infinity. The second argument, `scale` is to indicate the nth decimal place where rounding should happen.
    
    Examples:
    
    `>>> ceil(decimal(10.57), 1)`
    
    `10.6`
    
    `>>> ceil(decimal(-10.57), 1)`
    
    `-10.5`
    
    `>>> ceil(decimal(10.655), 2)`
    
    `10.66`
    
    `>>> ceil(decimal(3), 3)`
    
    `3`
    
    @param value
           Input of the data type decimal.
    @param scale
           input indicating the nth decimal place where rounding should happen.
    @return The input value that is rounded towards positive infinity.
    """
        ...
    @overload
    @classmethod
    def ceil(cls, dimension: Dimension=None, scale: int=None) -> Union[Dimension]:
    """
    Rounds the value in the dimension field towards positive infinity. The second argument, `scale`, is optional, and is to indicate the nth decimal place where rounding should happen. Default is 0.
    
    Examples:
    
    `>>> ceil({value: 10.5, unit: unit})`
    
    `{value: 11, unit: unit}`
    
    `>>> ceil({value: 10.57, unit: unit}, 1)`
    
    `{value: 10.6, unit: unit}`
    
    `>>> ceil({value: -10.57, unit: unit}, 1)`
    
    `{value: -10.5, unit: unit}`
    
    `>>> ceil({value: 10.655, unit: unit}, 2)`
    
    `{value: 10.66, unit: unit}`
    
    `>>> ceil({value: 3, unit: unit}, 3)`
    
    `{value: 3, unit: unit}`
    
    @param dimension
           The dimension input.
    @param scale
           An optional input indicating the nth decimal place to where rounding should happen. Default value is 0.
    @return The dimension with its value rounded toward positive infinity.
    """
        ...
    @overload
    @classmethod
    def ceil(cls, timeseries: Timeseries[Any]=None, scale: int=None) -> Union[Timeseries[Any]]:
    """
    Rounds the values in the time series towards positive infinity. The second argument, `scale` is optional, and is to indicate the nth decimal place where rounding should happen. Default is 0.
    
    Example:
    
    TS.data:
    
    ```
       0.5      0    -0.445
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    `ceil(TS)`:
    
    ```
       1       0      -0.4
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    Examples:
    
    `>>> ceil(TS)`
    
    `[1, 0, -0.4]`
    
    `>>> ceil([0.5, 111.1, -0.445])`
    
    `[1, 112, 0]`
    
    `>>> ceil([0.5, 111.1, -0.445], 1)`
    
    `[0.5, 111.1, -0.4]`
    
    `>>> ceil([0.5, 111.1, -0.445], 2)`
    
    `[0.5, 111.1, -0.44]`
    
    `>>> ceil([10.57, 10.52, -11.236, -11.234], 2)`
    
    `[10.57, 10.52, -11.23, -11.23]`
    
    @param timeseries
           The time series input.
    @param scale
           An optional input indicating the nth decimal place to which rounding should happen. Default value is 0.
    @return The time series whose values are rounded toward positive infinity.
    """
        ...
    @classmethod
    def compareTo(cls, obj1: Union[str,int,float,float,float,datetime], obj2: Union[str,int,float,float,float,datetime]) -> int:
    """
    Compares the object **obj1** to object **obj2**, where **obj1** and **obj2** are of the same type.
    
    **Strings:**
    
    Compares two strings lexicographically. Returns the following:
    
    - Negative integer if **string1** appears before **string2** alphabetically, and a positive integer if **string1** appears after **string2**, with a magnitude equal to the alphabetical difference between the differing characters.
    - Zero if **string1** and **string2** are identical.
    - If both strings begin with the same characters but one string contains extra characters, then the magnitude represents number of extra characters.
    
    Examples:
    
    `>>> compareTo("abc", "zyx")`
    
    `-25`
    
    `>>> compareTo("abc", "bcd")`
    
    `-1`
    
    `>>> compareTo("abcdefgh", "abcd")`
    
    `4`
    
    
    **Numbers:**
    
    Compares two numbers and:
    
    - Returns -1 if **number1** is less than **number2**,
    - Returns 1 if **number1** is greater than **number2**, and
    - Returns 0 if they are equivalent.
    
    Examples:
    
    `>>> compareTo(1, 2)`
    
    `-1`
    
    `>>> compareTo(3, 17.3)`
    
    `-1`
    
    `>>> compareTo(9.6, 9.6)`
    
    `0`
    
    `>>> compareTo(21.0, 7)`
    
    `1`
    
    **DateTimes:**
    
    Compares two datetime objects and:
    
    - Returns -1 if **datetime1** is an earlier time than **datetime2**.
    - Returns 1 if **datetime1** is after **datetime2**, and
    - Returns 0 if the datetimes are equivalents.
    
    Examples:
    
    `>>> compareTo(dateTime('2011-02-01T00:00:00.000Z'), dateTime('2011-01-01T00:00:00.000Z'))`
    
    `-1`
    
    `>>> compareTo(dateTime('2011-01-01T00:00:00.000Z'), dateTime('2011-01-01T00:00:00.000+09:00'))`
    
    `1`
    
    `>>> compareTo(dateTime('2011-01-01T00:00:00.000Z'), dateTime('2011-01-01))`
    
    `0`
    
    @param obj1
           The first input to be compared.
    @param obj2
           The second input to be compared against `obj1`.
    @return Result of `obj1` comparedTo `obj2`.
    """
        ...
    @overload
    @classmethod
    def concat(cls, strs: Array[str]=None) -> Union[str]:
    """
    Concatenates all elements of the input string (toString).
    
    Example:
    
    `>>> concat("Regional", "Facility", "Report")`
    
    `"RegionalFacilityReport"`
    
    @param strs
               An string array.
    @return The concatenated string.
    """
        ...
    @overload
    @classmethod
    def concat(cls, objs: Array[Any]=None) -> Union[Array[Obj]]:
    """
    Concatenates all elements in an array.
    
    Example:
    
    `>>> concat(obj, objArry, otherObj)`
    
    `[obj, objArryElem1, objArryElemN, otherObj]`
    
    @param objs
               An object array.
    @return The concatenated array.
    """
        ...
    @classmethod
    def contains(cls, str1: str=None, str2: str=None) -> bool:
    """
    Performs the standard string operation `contains` on the input.
    Checks if `str1` contains `str2`.
    
    Example:
    
    `>>> contains("regional facility", "facility")`
    
    returns
    
    `true.`
    
    @param str1
           The string container.
    @param str2
           The string to be checked if contained by `str1`.
    @return Boolean - if `str1` contains `str2`.
    """
        ...
    @classmethod
    def containsIgnoreCase(cls, str1: str=None, str2: str=None) -> bool:
    """
    Performs the standard string operation `contains` on the input, ignoring the case. Checks if `str1` contains `str2`.
    
    Example:
    
    `>>> containsIgnoreCase("regional facility", "Facility")`
    
    returns
    
    `true`
    
    @param str1
           The string container.
    @param str2
           The string to be checked if contained by `str1`.
    @return Boolean - if `str1` contains `str2`.
    """
        ...
    @overload
    @classmethod
    def cos(cls, value: float=None) -> Union[float]:
    """
    Returns the cosine function applied to original input value. The input value is expected in radians.
    
    Example:
    
    `>>> cos(0.45)`
    
    `0.9004`
    
    @param value
           Input of the data type double.
    @return The cosine function applied to input value. The input value is expected in radians.
    """
        ...
    @overload
    @classmethod
    def cos(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns the dimesnion with cosine function applied to input value. The input value is expected in radians.
    
    Example:
    
    `>>> asin({value: 0.67, unit: unit})`
    
    `{value: 0.7838, unit: unit}`
    
    @param dimension
           Dimension type input.
    @return The dimension with cosine function applied to input value. The input value is expected in radians.
    """
        ...
    @overload
    @classmethod
    def cos(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series with cosine function applied to input values. The input values are expected in radians.
    
    Example:
    
    TS.data:
    
    ```
      -0.9    0.453   0.53
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    `asin(TS)`:
    
    ```
     0.6216  0.8991  0.8628
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    @param timeseries
           Time series input
    @return The time series with cosine function applied to input values. The input values are expected in radians.
    """
        ...
    @overload
    @classmethod
    def count(cls, obj: Array[Any]=None) -> Union[int]:
    """
    Counts the number of elements.
    
    Example: `count(system.inputs)`
    
    @param obj
           A Field, Arry, or Collection of any type
    @return The number of elements.
    """
        ...
    @overload
    @classmethod
    def count(cls, timeserieses: Array[Timeseries[Any]]=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series where every value is 0 if that datapoint's missing percentage is equal to 0, and 1 otherwise.
    
    Example:
    
    TS.data:
    
    ```
       1,1   5,5
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    `count(TS)`:
    
    ```
       2     2     0
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    Example: `count(sum(normalized.data.quantity))`
    
    @param timeserieses
           An array of time series input.
    @return A time series where every value is 0 if that datapoint's missing percentage is equal to 0, and 1 otherwise.
    """
        ...
    @overload
    @classmethod
    def cuberoot(cls, value: float=None) -> Union[float]:
    """
    Returns the cube root of the input number.
    
    Example:
    
    `>>> cuberoot(27)`
    
    `3`
    
    @param value
           The input value.
    @return The cube root of input value.
    """
        ...
    @overload
    @classmethod
    def cuberoot(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns the cube root of the dimension input.
    
    Example:
    
    `>>> cuberoot({value: 27, unit: unit})`
    
    `{value: 3, unit: unit}`
    
    @param dimension
           The dimension input.
    @return A dimension with cuberoot value of original value.
    """
        ...
    @overload
    @classmethod
    def cuberoot(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns the cube root of time series input.
    
    Example:
    
    TS.data:
    
    ```
      -27    8    33
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    `cuberoot(TS)`:
    
    ```
      -3     2   3.2075
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    Example:
    
    `>>> cuberoot([27, 8, 33])`
    
    `[3, 2, 3.2075]`
    
    @param timeseries
           The time series input.
    @return A time series in which all values are cuberoot of original values.
    """
        ...
    @classmethod
    def cusumDiffScore(cls, measurements: Timeseries[Any], reconstructions: Timeseries[Any], k: float, cusumH: float=None, memoryLength: int=None, ignoreMask: Timeseries[Any]=None, resetMask: Timeseries[Any]=None, resetOnResidualDirectionChange: bool=None, resetOnResidualDirectionChangeThreshold: float=None, percentResetOnResidualDirectionChange: float=None) -> Union[Timeseries[Any]]:
    """
    CUSUM change detection algorithm for monitoring sensor drift and generating
    anomaly detection risk scores which are robust to short-term fluctuations
    in sensor data.
    
    @param measurements
           Actual sensor measurements.
    @param reconstructions
           Estimated sensor measurements.
    @param k
           Tolerance parameter signifying acceptable deviation between measurement
           and reconstruction. Should be in the same units as measurements. e.g. A typical
           value for k is 5 - 10 percent of nominal value of sensor, which means if
           reconstruction is within 5 - 10 percent of sensor value, it is ignored.
    @param cusumH
           Maximum acceptable deviation between measurement and reconstruction
           (i.e. the saturation point). Any deviation greater than cusumH gets clipped to
           cusumH in CUSUM risk score calculation. If not provided by user,  by default
          the max value of the residuals is used.
    @param memoryLength
           Number of previous data points to consider in CUSUM risk score calculation.
           If unspecified, the whole series length is used.
    @param ignoreMask
           A timeseries of indicator (0/1) variable - 1 if data point should be masked
           (not considered in CUSUM calculation), 0 otherwise.
    @param resetMask
           A timeseries of indicator (0/1) variable - 1 if CUSUM risk score should be
           reset to 0 (no longer accumulate error from previous points), 0 otherwise.
    @param resetOnResidualDirectionChange
           If true and the current residual changes direction (sign) from the previous residual
           and has a magnitude of at least resetOnResidualDirectionChangeThreshold, reset CUSUM risk
           score to percentResetOnResidualDirectionChange percent of the previous CUSUM risk score.
    @param resetOnResidualDirectionChangeThreshold
           See resetOnResidualDirectionChange for details. Useful for enforcing a threshold which the
           residual magnitude must exceed in order to trigger a reset.
    @param percentResetOnResidualDirectionChange
           See resetOnResidualDirectionChange for details. Useful for a partial reset of risk score
           upon direction change in the residual. The default value 0 resets the risk score completely to 0.
    
    @return CUSUM risk score (0 - 1) to measure the difference between measurements and reconstructions over time.
    """
        ...
    @classmethod
    def data(cls, obj: Any) -> str:
    """
    Returns the string representation of the input.
    
    Example:
    
    `>>> data(25)`
    
    `"25"`
    
    @param obj
           The input value.
    @return The string representation of the input.
    """
        ...
    @overload
    @classmethod
    def dateTime(cls, time: str, format: str=None) -> Union[datetime]:
    """
    Returns a datetime object. The default format is ISO 8601.
    Allows specifying an optional format for parsing the input. The format must be {@link DateTimeFormat} compatible.
    
    Examples:
    
    `dateTime("2010-10-10T12:00:00-08:00")`
    
    `dateTime("2007-05-24 00:00-06:00", "yyyy-MM-dd HH:mmZ")`
    
    @param time
           A string input of time in ISOdatetimeFormat.
    @param format
           The datetimeFormat.
    @return A datetime object.
    """
        ...
    @overload
    @classmethod
    def dateTime(cls, timeMillis: int) -> Union[datetime]:
    """
    Returns a datetime object. The default format is ISO 8601.
    
    Examples:
    
    `dateTime(1745518170000)`
    
    @param timeMillis
           milliseconds since epoch (UTC)
    @return A datetime object.
    """
        ...
    @classmethod
    def inferDateTimeFormat(cls, str: str) -> Union[str]:
    """
    Returns a string serialized DateTimeFormat from a datetime string.
    Example:
       input: "13-07-29 06:35:40"
       output: "yy-MM-dd HH:mm:ss"
    @param str
           a datetime string
    @return a string serialized DateTimeFormat.
    """
        ...
    @classmethod
    def day(cls, datetime: datetime) -> int:
    """
    Returns the day of the month from the given datetime.
    
    Example: `day(dateTime('2011-02-01T03:00:01+08'))`
    
    @param datetime
           The datetime input.
    @return The day of the month from the given datetime.
    """
        ...
    @classmethod
    def dayOfWeek(cls, datetime: datetime) -> int:
    """
    Returns the day of the week from the given datetime.
    
    Example: `dayOfWeek(dateTime('2011-02-01T03:00:01+08'))`
    
    @param datetime
           The datetime input.
    @return The day of the week from the given datetime.
    """
        ...
    @classmethod
    def daysInYear(cls, datetime: datetime) -> int:
    """
    Returns the number of days in the given year.
    
    Example: `daysInYear(dateTime('2011-02-01T03:00:01+08'))`
    
    @param datetime
           The datetime input.
    @return The number of days in the given year.
    """
        ...
    @classmethod
    def decimal(cls, v: Any) -> Union[float]:
    """
    Returns the decimal representation of the input.
    
    Example:
    
    `>>> decimal(25)`
    
    `25.0`
    
    @param object
           The object input.
    @return The decimal representation of the input.
    """
        ...
    @classmethod
    def temporalDistance(cls, period: str, dt1: datetime, dt2: datetime) -> float:
    """
    Returns the number of {@link Period} in between the two dates as a double
    
    Example1: `temporalDistance('1d', dateTime('2011-02-01T00:00:00'), dateTime('2011-02-02T00:00:00'))` => 1
    Example2: `temporalDistance('1h', dateTime('2023-01-01T00:00:00'), dateTime('2023-01-01T00:30:00'))` => 0.5
    Example3: `temporalDistance('2y', dateTime('2023-01-01T00:00:00'), dateTime('2025-01-01T00:00:00'))` => 1.0013698630136987
    
    @param period
           string representation of {@link Period}
    @param dt1
           The start date
    @param dt2
           The end date
    @return The number of {@link Period} in between the two dates as a double
    """
        ...
    @classmethod
    def nextTimePoint(cls, interval: str, datetime: datetime, n: int, align: bool=None) -> datetime:
    """
    Computes n'th next time point from the given datetime. If align is true, the time point is aligned to the start of the next interval
    
    Example1: `nextTimePoint('DAY', dateTime('2011-02-01T00:00:00'), 1)` => 2011-02-02T00:00:00
    Example2: `nextTimePoint('HOUR', dateTime('2011-02-01T03:05:00'), 2)` => 2011-02-01T05:05:00
    Example2: `nextTimePoint('HOUR', dateTime('2011-02-01T03:05:00-07:00'), 2)` => 2011-02-01T05:05:00-07:00
    Example2: `nextTimePoint('HOUR', dateTime('2011-02-01T03:05:00'), 2, true)` => 2011-02-01T06:00:00
    
    @param interval
           The interval to shift the date by
    @param datetime
           The datetime input that needs to be shifted
    @param n
           The number of intervals to shift the date by
    @param align
           If true, the time point is aligned to the start of the next interval
    @return The n'th next time point from the given datetime. If align is true, the time point is aligned to the start of the next interval
    """
        ...
    @classmethod
    def prevTimePoint(cls, interval: str, datetime: datetime, n: int, align: bool=None) -> datetime:
    """
    Computes n'th previous time point from the given datetime. If align is true, the time point is aligned to the start of the previous interval
    
    Example1: `prevTimePoint('DAY', dateTime('2011-02-01T00:00:00'), 1)` => 2010-12-31T00:00:00
    Example2: `prevTimePoint('HOUR', dateTime('2011-02-01T03:05:00'), 2)` => 2011-02-01T01:05:00
    Example2: `prevTimePoint('HOUR', dateTime('2011-02-01T03:05:00-07:00'), 2)` => 2011-02-01T01:05:00-07:00
    Example2: `prevTimePoint('HOUR', dateTime('2011-02-01T03:05:00'), 2, true)` => 2011-02-01T01:00:00
    
    @param interval
           The interval to shift the date by
    @param datetime
           The datetime input that needs to be shifted
    @param n
           The number of intervals to shift the date by
    @param align
           If true, the time point is aligned to the start of the previous interval
    @return The n'th previous time point from the given datetime. If align is true, the time point is aligned to the start of the previous interval
    """
        ...
    @classmethod
    def dimensionCreator(cls, dimensionType: str, value: float, unitId: str) -> Dimension:
    """
    Returns a new dimension based on input arguments.
    
    Example
    
    `>>> dimensionCreator("Dimension", 0.23, unit1)`
    
    `{value: 0.23, unit: unit1}`
    
    @param dimensionType
           Name of the dimension type (Dimension or ExactDimension).
    @param value
           The dimension value.
    @param unit
           The dimension unit.
    @return A new dimension based on arguments.
    """
        ...
    @overload
    @classmethod
    def distance(cls, geographyA: Geo, geographyB: Geo) -> Union[float]:
    """
    Returns the distance between two geographies. It is passed down to the DB (PostGIS) as ST_DISTANCE function.
    
    Example:
    
    `>>> distance(GeoPoint(-1,1), GeoPoint(1,1))`
    
    `2`
    
    @param geographyA
           Geography Type representing any of the supported geographic Types: {@link Geo}, {@link GeoPoint}, {@link GeoPolygon}.
    @param geographyB
           Geography Type representing any of the supported geographic Types: {@link Geo}, {@link GeoPoint}, {@link GeoPolygon}.
    @return The distance between the two input geographies.
    """
        ...
    @overload
    @classmethod
    def distance(cls, geometryA: Geom, geometryB: Geom) -> Union[float]:
    """
    Returns the distance between two input 2D geometries.
    It is passed down to the DB (PostGIS) as ST_DISTANCE function.
    
    Example:
    
    `>>> distance(GeomPoint(-1,1), GeomPoint(1,1))`
    
    `2`
    
    @param geometryA
           Geometry Type representing any of the supported 2D geometric Types: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}.
    @param geometryB
           Geometry Type representing any of the supported 2D geometric Types: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}.
    @return The distance between the two input 2D geometries.
    """
        ...
    @classmethod
    def binaryQuantize(cls, vector: str, dimension: int=None) -> str:
    """
    Returns the binary quantized input vector.
    
    Example:
    `>>> binaryQuantize("[1.0, 2.0, 4.0]", 3)`
    
    @param vector
       The vector to binary quantize.
    @param dimension
       The dimension of the binary quantized vector.
    @return The binary quantized input vector.
    """
        ...
    @classmethod
    def vectorDistance(cls, vectorA: str, vectorB: str, spec: Expr.DistanceSpec=None) -> float:
    """
    Returns the distance between the provided vectors.
    
    Example:
    `>>> vectorDistance(emb, "[1.0, 2.0, 4.0]", {})`
    
    @param vectorA
       The vector to compute the distance from.
    @param vectorB
       The vector to compute the distance to.
    @param spec
       Optional specification to update the default parameters used in computing the distance between the provided vectors.
    
    @return The distance between the provided vectors.
    """
        ...
    @classmethod
    def similarity(cls, field: str, text: str, spec: str=None) -> float:
    """
    Returns The distance between the provided texts.
    
    Example:
    `>>> similarity(textField, "dogs")`
    
    @param field
       The text source field to compute the distance from.
    @param text
       The text to compute the distance to.
    @param spec
       Optional specification to update the default parameters used in computing the distance between the provided texts.
    
    @return The distance between the provided texts.
    """
        ...
    @classmethod
    def dotProduct(cls, timeseries1: Timeseries[Any], timeseries2: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns a time series whose data vector is obtained by computing the Hadamard product of input time series data vectors.
    
    Example:
    
    TS1.data:
    ```
         1         5       2.7
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    TS2.data:
    ```
         2         2       0
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    `dotProduct(TS1, TS2)`:
    
    ```
         2         10       0
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    Example: `dotProduct(sum(normalized.data.quantity)`
    
    @param timeseries1
           First time series input.
    @param timeseries2
           Second time series input.
    @return A time series whose data vector is obtained by computing the Hadamard product of data vectors of the input time series.
    """
        ...
    @overload
    @classmethod
    def earliest(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns an {@link identity} time series with the datetime of the first available data value in the input time series, for the query period. To return the time series with the data value itself, use {@see earliestValue}.
    
    Examples:
    
    `earliest(normalized.data.quantity)`
    
    `earliest(sum(normalized.data.quantity))`
    
    @param timeseries
           Time series input
    @return An {@link identity} time series with the datetime of the first available data value in the input time series, for the query period.
    """
        ...
    @overload
    @classmethod
    def earliest(cls, dates: Array[datetime]) -> datetime:
    """
    Sorts and returns the earliest datetime in the array of datetime.
    
    Example:
    
    `>>> dates = ["2010-01-01", "2009-01-01", "2012-01-01"]`
    
    `>>> earliest(dates)`
    
    `"2009-01-01"`
    
    @param dates
           Input array of datetime.
    @return The earliest datetime in the array of datetime.
    """
        ...
    @classmethod
    def empty(cls, obj: Any=None) -> bool:
    """
    Return `true` if `foo`'s string representation is of length 0.
    
    Example: `empty(foo)`
    
    @param obj
           Input object.
    @return `true` if `foo`'s string representation is of length 0.
    """
        ...
    @classmethod
    def embedding(cls, text: str, embedder: str) -> Array[float]:
    """
    Returns the embedding vector of the input text using the specified embedder.
    
    Example: `embedding("Hello World!", "all-MiniLM-L6-v2")`
    
    @param text
           Input text.
    @param embedder
           Desired embedder to be used.
    @return embedding vector.
    """
        ...
    @classmethod
    def embeddingDimension(cls, embedder: str) -> int:
    """
    Returns the dimension for the embedding vector used by the specified embedder.
    
    Example: `embeddingDimension("all-MiniLM-L6-v2")`
    
    @param embedder
           Desired embedder to be used.
    @return the dimension of embeddings.
    """
        ...
    @classmethod
    def endsWith(cls, str1: str, str2: str) -> bool:
    """
    Performs the standard string operation `endsWith` on the input.
    Checks if str1 ends with str2.
    
    Examples:
    
    `>>> endsWith("Helloaaa", "bbbb")`
    
    `false'
    
    `>>> endsWith("Helloaaaa", "aa")`
    
     `true`
    
    @param str1
           The string that will be checked if it ends with `str2`.
    @param str2
           The string to be checked if it appears at the end of `str1`.
    @return `true` if `str1` ends with` str2`.
    """
        ...
    @classmethod
    def endsWithIgnoreCase(cls, str1: str, str2: str) -> bool:
    """
    Performs the standard string operation `endsWith` but ignoring the case, on the input. Ignores the case and checks if str1 ends with str2.
    
    Examples:
    
    `>>> endsWithIgnoreCase("Helloaaa", "bbbb")`
    
    `false`
    
    `>>> endsWithIgnoreCase("Helloaaaa", "aA")`
    
    `true`
    
    @param str1
           The string to be checked if ends with `str2`.
    @param str2
           The string to be checked if it appears at the end of `str1`.
    @return `true` if `str1` ends with `str2` when checked ignoring the case.
    """
        ...
    @classmethod
    def trim(cls, str: str) -> str:
    """
    Performs the standard string operation `trim` on the input.
    Removes white spaces from the beginning and the end of a string, and returns the trimmed string.
    
    Examples:
    
    `>>> trim("  Helloaaa    ")`
    
    `"Helloaaa"`
    
    `>>> trim("  Helloaaa")`
    
    `"Helloaaa"`
    
    `>>> trim("Helloaaa  ")`
    
    `"Helloaaa"`
    
    `>>> trim("  ")`
    
    `""`
    
    `>>> trim("Hello")`
    
    `"Hello"`
    
    @param str
           The string to be trimmed.
    @return The trimmed string.
    """
        ...
    @classmethod
    def lTrim(cls, str: str) -> str:
    """
    Performs the standard string operation `trim` on the input. Removes white spaces from the beginning of a string and returns the trimmed string.
    
    Examples:
    
    `>>> lTrim("  Helloaaa    ")`
    
    `"Helloaaa    "`
    
    `>>> lTrim("  Helloaaa")`
    
    `"Helloaaa"`
    
    `>>> lTrim("Helloaaa  ")`
    
    `"Helloaaa  "`
    
    `>>> lTrim("  ")`
    
    `""`
    
    `>>> lTrim("Hello")`
    
    `"Hello"`
    
    @param str
           A string to be trimmed.
    @return The trimmed string.
    """
        ...
    @classmethod
    def rTrim(cls, str: str) -> str:
    """
    Performs the standard string operation `trim` on the input. Removes white spaces from the end of a string and returns the trimmed string.
    
    Examples:
    
    `>>> rTrim("  Helloaaa    ")`
    
    `"  Helloaaa"`
    
    `>>> rTrim("  Helloaaa")`
    
    `"  Helloaaa"`
    
    `>>> rTrim("Helloaaa  ")`
    
    `"Helloaaa"`
    
    `>>> rTrim("  ")`
    
    `""`
    
    `>>> rTrim("Hello")`
    
    `"Hello"`
    
    @param str
           A string to be trimmed.
    @return The trimmed string.
    """
        ...
    @classmethod
    def eval(cls, aggregationFunction: str, interval: str, timeseries: Timeseries[Any], start: Any=None, end: Any=None) -> Timeseries[Any]:
    """
    Forces the evaluation of input expression at a specified grain. If the result is a time series, then prior to executing this function `eval`, the time series is rolled up from the specified grain to query grain using the `aggregationFunction` specified. The `start` and `end` are the dates from and to which this function `eval` will be executed.
    
    Example: `eval('SUM', 'DAY', sum(normalized.data.quantity) * 42)`
    
    @param aggregationFunction
           The name of the aggregationFunction. Allowed values are: SUM/AVG/MIN/MAX/AND/OR/SUBTRACT/MEAN/MEDIAN/VARIANCE/STDDEV.
    @param interval
           The evaluation interval.
    @param timeseries
           The time series input.
    @param start
           The start of evaluation (datetime/Timeseries).
    @param end
           The end of evaluation (datetime/Timeseries).
    @return The result of the evaluation. The return type is input dependent.
    """
        ...
    @classmethod
    def exists(cls, obj: Any=None) -> bool:
    """
    Returns `true` if `foo` is not null.
    
    Example: `exists(foo)`
    
    @param obj
           The object input.
    @return `true` if `foo` is not null.
    """
        ...
    @overload
    @classmethod
    def isInfinityOrNaN(cls, x: Union[float,Dimension]=None) -> bool:
    """
    Returns `true` if the input is Not-a-Number or Infinity.
    
    Examples:
    
    `>>> isInfinityOrNaN(0/0)`
    
    `true`
    
    @param x
           The object input.
    @return `true` if input is Not-a-Number or Infinity.
    """
        ...
    @overload
    @classmethod
    def isInfinityOrNaN(cls, ts: Timeseries[Any]=None) -> Timeseries[Any]:
    """
    Returns a boolean time series with `true` at index where the value is Not-a-Number or infinity.
    
    Examples:
    
    `>>> isInfinityOrNaN(TS)`
    
    `[0,0,0,1,0...]`
    
    @param ts
           The timeseries input.
    @return A boolean time series with `true` at index where value is Not-a-Number or infinity.
    """
        ...
    @overload
    @classmethod
    def exp(cls, value: float=None) -> Union[float]:
    """
    Returns `e` (Euler's number ~ 2.718) raised to input.
    
    Example:
    
    `>>> exp(3)`
    
    `20.0855`
    
    @param value
           A double input.
    @return The quantity `e` (Euler's number ~ 2.718) raised to the input value.
    """
        ...
    @overload
    @classmethod
    def exp(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns `e` (Euler's number ~ 2.718) raised to value in the dimension input.
    
    Example:
    
    `>>> exp({value: 3, unit: unit})`
    
    `{value: 20.0855, unit: unit}`
    
    @param dimension
           The dimension input.
    @return The number `e` (Euler's number ~ 2.718) raised to the value in the dimension input.
    """
        ...
    @overload
    @classmethod
    def exp(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series with values that are `e` (Euler's number ~ 2.718) raised to the values in input time series.
    
    Example:
    
    TS.data:
    
    ```
        0         4.6      -132.3
    |---------|---------|---------|
    t1        t2        t3        t4
    ```
    
    `exp(TS)`:
    
    ```
        1       90.0171    3.4901
    |---------|---------|---------|
    t1        t2        t3        t4
    ```
    
    Example:
    
    `>>> exp([3, 4.5, -132.3])`
    
    `[20.0855, 90.0171, 3.4901]`
    
    @param timeseries
           A time series input.
    @return A time series with values that are `e` (Euler's number ~ 2.718) raised to the values in input time series.
    """
        ...
    @classmethod
    def exponentialDecay(cls, timeseries: Timeseries[Any], reset: Timeseries[Any], width: int, decay: float) -> Timeseries[Any]:
    """
    Returns time series where every point represents the exponentially decayed value.
    
    Example: `exponentialDecay(TS, TS, 50, 0.1)`
    
    @param timeseries
           The time series input.
    @param reset
           The reset time series for flushing the value of the running sum. If set, from that point onwards the running sum will be reset to 0.
    @param width
           Integer input. The number of intervals before the reduction in value will be equal to `decay`.
    @param decay
           A double input. After an interval of `width` the reduction in value will be equal to this `decay`.
    @return The time series where every point represents the exponentially decayed value.
    """
        ...
    @overload
    @classmethod
    def fillMissing(cls, timeseries: Timeseries[Any]=None, fillerValue: float=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series that has the missing values filled with the specified value, and scaled based on missing percentage. The resultant time series is fully available.
    
    Example:
    
    TS.data:
    
    ```
       1       2       3       4
    |-------|-------|-------|------|
    t1      t2      t3      t4     t5
    ```
    
    TS.missing:
    
    ```
       0       50      10      20
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    `fillMissing(TS, 3.2)`:
    
    ```
        1      3.6     6.2    10.4
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    The above `fillMissing(TS, 3.2)` is calculated as follows:
    
    `[1 + 3.2 * 0, 2 + 3.2 * 0.5, 3 + 3.2 * 1, 4 + 3.2 * 2]` and the resultant TS.missing is `[0, 0, 0, 0]`.
    
    Example:
    
    The above example with the TS.missing of ``[0, 0.5, 1, 2]` would be calculated as follows:
    
    `[1 + 3.2 * 0, 2 + 3.2 * 0.5, 3 + 3.2 * 1, 4 + 3.2 * 2]` and the resultant TS.missing is `[0, 0, 0, 0]`.
    
    @param timeseries
           The time series input.
    @param fillerValue
           The value to be used for filling in missing values.
    @return A time series that has missing values filled with the specified value, and scaled based on missing percentage. The resultant time series is fully available.
    """
        ...
    @overload
    @classmethod
    def fillMissing(cls, timeseries: Timeseries[Any]=None, fillerValue: Any=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series that has missing values filled with the specified value, scaled based on missing percentage. The resultant time series is fully available.
    
    Example:
    
    TS.data:
    
    ```
       obj1    obj2     obj3   obj4
    |-------|-------|-------|------|
    t1      t2      t3     t4      t5
    ```
    
    TS.missing:
    
    ```
        0       50      10      0
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    `fillMissing(TS, fillerObj)`:
    
    ```
        obj1   fillerObj fillerObj   obj4
    |---------|---------|---------|---------|
    t1        t2        t3        t4        t5
    ```
    
    The above fillMissing(TS, fillerObj) will result in missing `[0, 0, 0, 0]`.
    
    Example:
    
    `fillMissing([obj1, obj2, obj3, obj4], fillerObj)` with missing `[0, 0.5, 1, 0]` will result in `[obj1, fillerObj, fillerObj, obj4]` with the resultant missing `[0, 0, 0, 0]`.
    
    @param timeseries
           The time series input.
    @param fillerValue
           The value to be used for filling in missing values.
    @return The time series that has missing values filled with the specified value, scaled based on missing percentage). The resultant time series is fully available.
    """
        ...
    @overload
    @classmethod
    def withMissing(cls, timeseries: Timeseries[Any], fillerValue: float=None) -> Timeseries[Any]:
    """
    Returns time series with missing value replaced on the input {@link timeseries} with the specified {@link fillerValue}.
    @param timeseries
           The time series input on which the missing array needs to be replaced
    @param fillerValue
           The value to replace the missing value in the input {@link timeseries}.
           The output is a time series with missing value replaced with the specified number for all the intervals.
           If the data of the missing time series is a double array, then it will be converted
           to boolean array by applying the formula, missing true: if value is >= 100 else missing is false
    @return Returns time series with missing value replaced on the input {@link timeseries} with the specified {@link fillerValue}
    """
        ...
    @overload
    @classmethod
    def withMissing(cls, timeseries: Timeseries[Any], fillerValue: Timeseries[Any]=None) -> Timeseries[Any]:
    """
    Returns time series with missing value replaced on the input {@link timeseries} with the specified {@link fillerValue}.
    @param timeseries
           The time series input on which the missing array needs to be replaced
    @param fillerValue
           The value to replace the missing value in the input {@link timeseries}.
           The output is a time series with missing array replaced with the data of the missing timeseries.
           If the data of the missing time series is a double array, then it will be converted
           to boolean array by applying the formula, missing true: if value is >= 100 else missing is false
    @return Returns time series with missing value replaced on the input {@link timeseries} with the specified {@link fillerValue}
    """
        ...
    @classmethod
    def fixDstOffset(cls, datetime: datetime, datetimeZone: str) -> Union[datetime]:
    """
    Replaces timeZone on input datetime/time series with the specified timeZone.
    
    Example:
    
    `>> fixDstOffset(dateTime('2010-01-01T00:00:00+08:00'), 'Z')`
    
    `2010-01-01T00:00:00Z`
    
    @param datetime
           The datetime/time series input.
    @param datetimeZone
           The time zone which will replace timezone of datetime.
    return A time series with the timeZone on input datetime/time series replaced with new specified datetimeZone.
    """
        ...
    @overload
    @classmethod
    def floor(cls, value: Union[float]=None, scale: int=None) -> Union[float]:
    """
    Rounds towards negative infinity. The second argument, `scale` is to indicate the nth decimal place to which the rounding should happen.
    
    Examples:
    
    `>>> floor(10.57, 1)`
    
    `10.5`
    
    `>>> floor(-10.57, 1)`
    
    `-10.6`
    
    `>>> floor(10.655, 2)`
    
    `10.65`
    
    `>>> floor(3, 3)`
    
    `3`
    
    @param value
           The value input. The valueType for this field should not be a `decimal` number type if a `double` output is expected.
    @param scale
           An optional input n indicating the nth decimal place to which the rounding should happen. Default value is 0.
    @return The input value rounded towards negative infinity.
    """
        ...
    @overload
    @classmethod
    def floor(cls, value: float=None) -> Union[int]:
    """
    Rounds the input towards negative infinity.
    
    Examples:
    
    `>>> floor(10.5)`
    
    `10`
    
    `>>> floor(decimal(10.5))`
    
    `10`
    
    @param value
           Input value
    @return The input value that is rounded towards negative infinity.
    """
        ...
    @overload
    @classmethod
    def floor(cls, value: float=None, scale: int=None) -> Union[float]:
    """
    Rounds the input towards negative infinity. The second argument, `scale` is to indicate the nth decimal place where rounding should happen.
    
    Examples:
    
    `>>> floor(decimal(10.57), 1)`
    
    `10.5`
    
    `>>> floor(decimal(-10.57), 1)`
    
    `-10.6`
    
    `>>> floor(decimal(10.655), 2)`
    
    `10.65`
    
    `>>> floor(decimal(3), 3)`
    
    `3`
    
    @param value
           Input of the data type decimal.
    @param scale
           input indicating the nth decimal place where rounding should happen.
    @return The input value that is rounded towards negative infinity.
    """
        ...
    @overload
    @classmethod
    def floor(cls, dimension: Dimension=None, scale: int=None) -> Union[Dimension]:
    """
    Rounds the value in the dimension field towards negative infinity. The second argument, `scale`, is optional and is to indicate the nth decimal place to which rounding should happen. Default is 0.
    
    Examples:
    
    `>>> floor({value: 10.5, unit: unit})`
    
    `{value: 10, unit: unit}`
    
    `>>> floor({value: 10.57, unit: unit}, 1)`
    
    `{value: 10.5, unit: unit}`
    
    `>>> floor({value: -10.57, unit: unit}, 1)`
    
    `{value: -10.6, unit: unit}`
    
    `>>> floor({value: 10.655, unit: unit}, 2)`
    
    `{value: 10.65, unit: unit}`
    
    `>>> floor({value: 3, unit: unit}, 3)`
    
    `{value: 3, unit: unit}`
    
    @param dimension
           The dimension input.
    @param scale
           An optional input n to indicate the nth decimal place to which the rounding should happen. Default value is 0.
    @return The dimension with its value rounded toward negative infinity.
    """
        ...
    @overload
    @classmethod
    def floor(cls, timeseries: Timeseries[Any]=None, scale: int=None) -> Union[Timeseries[Any]]:
    """
    Rounds the values in the time series towards negative infinity. The second argument, `scale`, is optional and is to indicate the nth decimal place where rounding should happen. Default is 0.
    
    Example:
    
    TS.data:
    
    ```
       -4.5      10.4      11.3
    |---------|---------|---------|
    t1        t2        t3        t4
    ```
    
    `floor(TS)`:
    
    ```
        -5        10        11
    |---------|---------|---------|
    t1        t2        t3        t4
    ```
    
    Examples:
    
    `>>> floor([-4.5, 10.4, 11.33])`
    
    `[-5, 10, 11]`
    
    `>>> floor([10.57, 10.52, -11.236], 1)`
    
    `[10.6, 10.5, -11.3]`
    
    `>>> floor([10.57, 10.52, -11.236, -11.234], 2)`
    
    `[10.57, 10.52, -11.24, -11.24]`
    
    @param timeseries
           The time series input.
    @param scale
           A optional input n to indicate the nth decimal place to which the rounding should happen. Default value is 0.
    @return The time series rounded toward negative infinity.
    """
        ...
    @classmethod
    def geogFromText(cls, geographicWKT: str) -> Union[Geo]:
    """
    Returns a Geographic {@link Geo} Type from the OGC Well-Known text (WKT) representation. It is passed down to the DB (PostGIS) as ST_GeogFromText function.
    
    Example:
    
    `>>> geogFromText('POINT(-71.064544 42.28787)')`
    
    `GeoPoint(-71.064544 42.28787)`
    
    @param geographicWKT
           A WKT representation of a Geographic Type.
    @return A {@link Geo} object from the WKT string.
    """
        ...
    @overload
    @classmethod
    def geomBuffer(cls, geometry: Geom=None, bufferRadius: float=None) -> Union[Geom]:
    """
    Returns a Geometric Type that represents all points whose distance from the input Geom is less than or equal to buffer radius. It can be applied on any Geometric Type such as {@link GeomPoint}, {@link GeomPolygon}, and is passed down to the DB (PostGIS) as ST_BUFFER function.
    
    Example:
    
    `>>> geomBuffer(GeomPoint3D(0,0,0), 0.01)`
    
    `GeomMultiPoint3D((0.01, 0, 0), (0, 0.01, 0), (0, 0, 0.01), ..)`
    
    @param geom
           A Geometry Type representing any of the supported Geometric Types: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}, {@link GeomPoint3D}.
    @return A Geometric type representing all points whose distance from the input Geom is less than or equal to buffer radius.
    """
        ...
    @overload
    @classmethod
    def geomBuffer(cls, geography: Geo=None, bufferRadius: float=None) -> Union[Geo]:
    """
    Returns a Geographic Type that represents all points whose distance from the input *Geo* is less than or equal to buffer radius. It can be applied on any Geographic Type such as {@link GeoPoint}, {@link GeoPolygon}, and is passed down to the DB (PostGIS) as ST_BUFFER function.
    
    Example:
    
    `>>> geomBuffer(GeoPoint(0,0), 0.01)`
    
    `GeoMultiPoint((0.01, 0), (0, 0.01), ..)`
    
    @param geography
           Geographic Type representing any of the supported Geographic  Types: {@link Geog}, {@link GeoPoint}, {@link GeoPolygon}, {@link GeoPoint3D}.
    
    @return A Geographic Type representing all points whose distance from the input Geo is less than or equal to buffer radius.
    """
        ...
    @classmethod
    def geomClosestPoint(cls, geometryA: Geom=None, geometryB: Geom=None) -> bool:
    """
    Returns the 2-dimensional point on geometryA that is closest to geometryB. This is the first point of the shortest line. Both the parameters are Geometric Types such as {@link GeomPoint}, {@link GeomPolygon}, and this function is passed down to the DB (PostGIS) as ST_CLOSEST_POINTs function.
    
    Example:
    
    `>>> geomClosestPoint(GeomLineString((-1,1), (1,1)), GeomPoint(0,0))`
    
    `GeomPoint(0,1)`
    
    @param geometryA
           Geometry Type representing any of the supported Geometric Types such as: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}.
    @param geometryB
           Geometry Type representing any of the supported Geometric Types such as: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}.
    
    @return The 2-dimensional point on geometryA that is closest to geometryB. This is the first point of the shortest line.
    """
        ...
    @classmethod
    def geomContains(cls, geometryA: Geom=None, geometryB: Geom=None) -> bool:
    """
    Returns `true` if geometry B is completely inside geometry A. The following applies:
    - if A == B ==> `true`
    - if B is completely inside A ==> `true`
    - if any part of B is "on the perimeter" of A or outside ==> `false`.
    
    Both the parameters are Geometric Types such as {@link GeomPoint}, {@link GeomPolygon}, and this function is passed down to the DB (PostGIS) as ST_CONTAINS function.
    
    Example:
    
    `>>> geomContains(GeomPolygon((-1,-1), (-1,1), (1,1), (1,-1)), GeomPoint(0,0))`
    
    `true`
    
    @param geometryA
           Geometry Type representing any of the supported geometric types such as: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}, {@link GeomPoint3D}.
    @param geometryB
           Geometry Type representing any of the supported geometric types such as: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}, {@link GeomPoint3D}.
    @return A boolean result.
    """
        ...
    @classmethod
    def geomExteriorRing(cls, polygon: Union[GeomPolygon,GeomPolygon3D]) -> bool:
    """
    Returns a line string representing the exterior ring of the POLYGON geometry. It is passed down to the DB (PostGIS) as ST_EXTERIOR_RING function.
    
    @param polygon
           Geometry representing a polygon such as {@link GeomPolygon}, {@link GeomPolygon3D}.
    
    Example:
    
    `>>> geomExteriorRing(GeomPolygon3D((0 0 1, 1 1 1, 1 2 1, 1 1 1, 0 0 1)))`
    
    `GeomLineString3D(0 0 1,1 1 1,1 2 1,1 1 1,0 0 1)`
    
    @return A {@link GeomLineString} or {@link GeomLineString3D} representing the exterior ring of the POLYGON geometry.
    """
        ...
    @overload
    @classmethod
    def geomAsText(cls, geog: Geo) -> Union[str]:
    """
    Returns a WKT (Well Known Text) representing the geographic object, which may be useful to transport the info across evaluate or fetch operations to be used as filters or projections. It is passed down to the DB (PostGIS) as ST_AsText function.
    
    Example:
    
    `>>> geomAsText(GeoPoint(-71.064544 42.28787))`
    
    `POINT(-71.064544 42.28787)`
    
    @param geog
           Geography representing any of the supported geographic types, such as: {@link Geo}, {@link GeoPoint}, {@link GeoPolygon}, {@link GeoPoint3D}.
    @return A WKT string from the {@link Geo} object.
    """
        ...
    @overload
    @classmethod
    def geomAsText(cls, geom: Geom) -> Union[str]:
    """
    Returns a Geometric WKT (Well Known Text) representing the geometric object, which may be useful to transport the info across evaluate or fetch operations to be used as filters or projections. It is passed down to the DB (PostGIS) as ST_AsText function.
    
    Example:
    
    `>>> geomAsText(GeomPoint(-71.064544 42.28787))`
    
    `POINT(-71.064544 42.28787)`
    
    @param geom
           Geometry Type representing any of the supported geometric types such as {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}, {@link GeomPoint3D}.
    @return A WKT string from the {@link Geom} object.
    """
        ...
    @classmethod
    def geomFromText(cls, geometricWKT: str) -> Union[Geom]:
    """
    Returns a Geometric {@link Geom} Type from the OGC Well-Known text (WKT) representation. It is passed down to the DB (PostGIS) as ST_GeomFromText function.
    
    Example:
    
    `>>> geomFromText('POINT(-71.064544 42.28787)')`
    
    `GeomPoint(-71.064544 42.28787)`
    
    @param geometricWKT
           A WKT representation of a geometric type.
    @return A {@link Geom} object from the WKT string.
    """
        ...
    @overload
    @classmethod
    def geomIntersects(cls, geographyA: Geo=None, geographyB: Geo=None) -> bool:
    """
    Returns a boolean value indicating whether the given two geometries intersect. It is passed down to the DB (PostGIS) as ST_INTERSECTS function.
    
    For geography, the tolerance is 0.00001 meters. Hence any points that are close are considered to intersect.
    
    Example:
    
    `>>> geomIntersects(GeoLineString((-1,1), (1,1)), GeoLineString((0,0), (0,2)))`
    
    `true` `// as these lines intersects at GeoPoint(0,1)`
    
    @param geographyA
           Geography representing any of the supported geographic types such as {@link Geo}, {@link GeoPoint}, {@link GeoPolygon}, {@link GeoPoint3D}.
    @param geographyB
           Geography representing any of the supported geographic types such as {@link Geo}, {@link GeoPoint}, {@link GeoPolygon}, {@link GeoPoint3D}.
    @return A boolean indicating whether two geographic objects intersects.
    """
        ...
    @overload
    @classmethod
    def geomIntersects(cls, geometryA: Geom=None, geometryB: Geom=None) -> bool:
    """
    Returns a boolean value indicating whether the given two geometries intersects. It is then passed down to the DB (PostGIS) as ST_INTERSECTS function.
    
    Example:
    
    `>>> geomIntersects(GeomLineString((-1,1), (1,1)), GeomLineString((0,0), (0,2)))`
    
    `true` `// as these lines intersects at GeomPoint(0,1)`
    
    @param geometryA
           Geometry Type representing any of the supported geometric types such as {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}, {@link GeomPoint3D}.
    @param geometryB
           Geometry Type representing any of the supported geometric types such as {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}, {@link GeomPoint3D}.
    @return A boolean indicating whether the two geometric objects intersect.
    """
        ...
    @classmethod
    def geomUnion(cls, geometry: Geom=None) -> Union[Geom]:
    """
    Gives the union of all Geometric types such as {@link GeomPoint}, {@link GeomPolygon}, as another Geometric type. It is an *aggregate* function and is passed down to the DB (PostGIS) as ST_UNION function.
    
    Example:
    
    `>>> geomUnion(GeomPoint(1,2), GeomPoint(2,3))`
    
    `Geom(((1,2), (2,3)))`
    
    @param geom
           Geometry Type representing any of the supported geometric types such as {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}, {@link GeomPoint3D}.
    @return A Geometric type representing the union of the geometry field on a type.
    """
        ...
    @classmethod
    def geomX(cls, geomPoint: GeomPoint=None) -> Union[float]:
    """
    Gives the X coordinate of the Geometric Point. It is a passed down to the DB (PostGIS) as ST_X.
    
    Example:
    
    `>>> geomX(GeomPoint3D(1,2,3)`
    
    `1`
    
    @param geomPoint
           Geometric point representing the 2D {@link GeomPoint} or 3D point {@link GeomPoint3D}.
    @return The time X coordinate of the given point.
    """
        ...
    @classmethod
    def geomY(cls, geomPoint: GeomPoint=None) -> Union[float]:
    """
    Gives the Y coordinate of the Geometric Point. It is a passed down to the DB (PostGIS) as ST_Y.
    
    Example:
    
    `>>> geomX(GeomPoint3D(1,2,3)`
    
    `2`
    
    @param geomPoint
           Geometric point representing the 2D {@link GeomPoint} or 3D point {@link GeomPoint3D}.
    @return The time Y coordinate of the given point.
    """
        ...
    @classmethod
    def geomZ(cls, geomPoint: GeomPoint=None) -> Union[float]:
    """
    Gives the Z coordinate of the Geometric Point. It is a passed down to the DB (PostGIS) as ST_Z.
    
    Example:
    
    `>>> geomX(GeomPoint3D(1,2,3)`
    
    `3`
    
    @param geomPoint
           Geometric point representing the 2D {@link GeomPoint} or 3D point {@link GeomPoint3D}.
    @return The time Z coordinate of the given point.
    """
        ...
    @classmethod
    def grain(cls) -> Union[str]:
    """
    Returns the time grain for the current context.
    
    Example: `grain()`
    
    @return The time grain for the current context.
    """
        ...
    @classmethod
    def haversineDistance(cls, xLat: Timeseries[Any], xLong: Timeseries[Any], yLat: Timeseries[Any], yLong: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns great-circle distances between two points on a sphere from their longitudes and latitudes (haversine Distance) of the input time series.
    
    @param xLat
           Timestamp representing xLat co-ordinates.
    @param xLong
           Timestamp representing xLong co-ordinates.
    @param yLat
           Timestamp representing yLat co-ordinates.
    @param yLong
           Timestamp representing yLong co-ordinates.
    @return Haversine Distance of the input time series.
    """
        ...
    @classmethod
    def correlation(cls, kind: str, ts1: Timeseries[Any], ts2: Timeseries[Any]) -> Timeseries[Any]:
    """
    This function computes the correlation. That is, how similar two time series are.
    
    **Note on ML applications**
    
    Redundant information used as features can potentially harm downstream ML modes. Understanding how correlated two time series are can help weed out unnecessary ones from feature generation.
    
    Example: `correlation('PEARSON', ts1, ts2)` results in an {@link identity} time series with the pearson coefficient.
    
    @param kind
           Kind of correlation technique to use {@link CorrelationKind}.
    @param ts1
           Time series for which correlation should be computed.
    @param ts2
           Time series against which correlation needs to be computed.
    @return The pearson correlation (identity) in between the two inputs `ts1` and `ts2`.
    """
        ...
    @classmethod
    def hour(cls, datetime: datetime) -> int:
    """
    Returns the hour of the day from the given datetime.
    
    Example: `hour(dateTime('2011-02-01T03:00:01+08'))`
    
    @param datetime
           The datetime input.
    @return The hour of the day from the given datetime.
    """
        ...
    @classmethod
    def id(cls) -> Union[Array[str]]:
    """
    If objects within the evaluation context are objects of a stored type, it returns the ID of every object.
    
    Example: `devices.id()`
    
    @return Collection of IDs of the object.
    """
        ...
    @classmethod
    def intersects(cls, collection1: Any, collections: Array[Any]) -> bool:
    """
    Check if first argument (object or arry) is present within remaining arguments.
    
    Examples:
    
    `intersects(arryField, ['a','b','c'])`
    
    `intersects('p', 'a', 'b', 'c')`
    
    @param collection1
           Collection input1 to be examined if it is presented in the remaining arguments.
    @param collections
           Collection inputs to be examined if contains collection1.
    @return `true` if first argument is present within remaining arguments.
    """
        ...
    @classmethod
    def join(cls, strs: Array[str]) -> str:
    """
    Joins all elements with the specified delimiter.
    
    Example:
    
    `>>> join("Regional ", "Facility ", "Report", "-")`
    
    `"Regional-Facility-Report"`
    
    @param strs
           String inputs to be joined, the last input string will be used as a join delimiter.
    @return The joined string.
    """
        ...
    @overload
    @classmethod
    def latest(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns an {@link identity} time series with the datetime of the final available data value in the input time series, for the query period. To return the time series with the data value itself, use {@link latestValue}.
    
    Example`:
    
    `latest(normalized.data.quantity)`
    
    `latest(sum(normalized.data.quantity))`
    
    @param timeseries
           Time series input.
    @return An {@link identity} time series with the datetime of the final available data value in the input time series, for the query period.
    """
        ...
    @overload
    @classmethod
    def latest(cls, dates: Array[datetime]) -> datetime:
    """
    Sorts and returns the latest datetime in the array of datetime.
    
    Example:
    
    `dates = ["2010-01-01", "2009-01-01", "2012-01-01"]`
    
    `>>> latest(dates)`
    
    `"2012-01-01"`
    
    @param dates
           Input array of datetime.
    @return The latest datetime in the array of datetime.
    """
        ...
    @classmethod
    def length(cls, str: str) -> int:
    """
    Performs the standard string operation `length` on the input.
    
    Example:
    
    `>>> length("Hello")`
    
    `5`
    
    @param str
           The string input.
    @return The length of the input string.
    """
        ...
    @classmethod
    def registerReadInterpolator(cls, ts: Timeseries[Any], resetOper: str, resetThreshold: float, rolloverMax: float=None) -> Timeseries[Any]:
    """
    Function to interpolate the time series, specifically for data that is monotonically increasing, for example, register reads.
    
    Value will be interpolated based on the value of the next non-zero data point. Zero values before the first non-zero data point will all be interpolated as 0s. Similarly, the data points after the last non-zero data point will be interpolated as 0s.
    
    Example:
    
    TS.data:
    
    ```
                                                  (10)   (10)
                                                    x      x
                             (3)
              (2)             x
               x
    
       |-------|------|-------|-------|------|------|------|-------|
       0       1      2       3       4      5      6      7       8
    
    ```
    
    `registerReadInterpolator(TS)`:
    
    ```
                                 (10-3)/3 = 2.33
                               ---------------------
                              |                     |
                              |                     |
                              |                     |
                (3-2)/2 = 0.5 |                     |
               ---------------                      |
         (0)                                        |  (0)    (0)
       |-------|------|-------|-------|------|------|------|-------|
       0       1      2       3       4      5      6      7       8
     ```
    
    @param ts
             Input time series on which a rolling difference will be applied.
    @param resetValue
             A reset drop threshold value based on the operation above. For example, reset the value to current value when:
             1. PERCENT value of drop is 5%
             2. Value of drop is Greater than Equal (GTE) to: 0
             3. Value of drop is Greater than (GT): 0
    @param resetOper
             The reset operation that should be applied on the interpolated value. Should be one of PERCENT / GTE, GT
    @param rolloverMax
             Maximum value allowed for the time series after which it rolls over. The following formula will be used when a rollover after this value happens: `nextValue = (rolloverMax - currentValue) + nextValue`
    @return A time series which has values interpolated for the input time series that is monotonically increasing.
    """
        ...
    @classmethod
    def interpolate(cls, ts: Timeseries[Any], interpolatorType: str=None, performOn: str=None) -> Timeseries[Any]:
    """
    Function to interpolate data within the given time series. This function supports the following forms of interpolation techniques:
    1. ZERO: interpolate 0 values in place of data/missing - DEFAULT
    2. LINEAR: linearly interpolate values in place of data/missing
    3. PREVIOUS: interpolate immediate previous value that is not 0 (for DATA) / and available (for MISSING)
    4. NEXT: interpolate immediate next value that is not 0 (for DATA) / and available (for MISSING)
    
    Note: Values are only interpolated when each value in the interval is either 0 (when performOn is DATA) or missing (when performOn is MISSING). If they are partially available, values will not be interpolated for those
    intervals.
    
    Also note that the input time series missing percentages are unchanged during interpolation. See the {@link ExpressionEngineFunction#fillMissing} function to modify the actual missing data values.
    
    Interpolation can be performed on:
    1. MISSING - only interpolates values that are missing
    2. DATA - only interpolates values where the value of the interval is 0
    
    @param interpolatorType The kind of interpolation technique to apply. Should be one of LINEAR/ ZERO/ PREVIOUS/ NEXT
    @param performOn the kind of data interpolation should be applied on. Should be one of DATA/MISSING
    @return a time series where required values are interpolated according to interpolator type specified
    """
        ...
    @classmethod
    def lerp(cls, oldValue: Timeseries[Any], to: Timeseries[Any], scale: Timeseries[Any]) -> Timeseries[Any]:
    """
    For each interval, this function linearly interpolates value of time series 'obj' towards value of time series 'to' based on value of time series 'scale'.
    If a data point is completely missing (fully missing), then this function does not use that data point for calculations. Its scaled value is always 'oldValue'.
    
    Example:
    
    oldValueTS:
    
    ```
        1         2          3
    |---------|---------|---------|
    t1        t2        t3        t4
    ```
    
    toTS:
    
    ```
       134        20       33
    |---------|---------|---------|
    t1        t2        t3        t4
    ```
    
    scaleTS:
    
    ```
        0.1       0.8      0.4
    |---------|---------|---------|
    t1        t2        t3        t4
    ```
    
    `lerp(oldValueTs, toTS, scaleTS)`:
    
    ```
       14.3      16.4      0.42
    |---------|---------|---------|
    t1        t2        t3        t4
    ```
    
    The above example is calculated as follows:
    
    `lerp(oldValueTS, toTS, scaleTS)` ==> `(newValue = (1-scale) * oldValue + scale * to) ==> [14.3, 16.4, .42]`
    
    `lerp([1, 2, 3], [134, 20, 33], [0.1, 0.8, 0.4]) (newValue = (1-scale) * oldValue + scale * to) ==> [14.3, 16.4, .42]`
    
    @param oldValue
           Time series oldValue.
    @param to
           Time series towards which to linearly interpolate (`lerp`).
    @param scale
           Time series representing scale (values have to be between 0 and 1)
    @return Time series with values linearly interpolated.
    """
        ...
    @classmethod
    def linearDecay(cls, timeseries: Timeseries[Any], width: int) -> Timeseries[Any]:
    """
    Returns time series where every point represents the linearly decayed value.
    
    Example:
    
    TS.data:
    
    ```
       1     2     3     4     5     6     7
    |-----|-----|-----|-----|-----|-----|-----|
    t1    t2    t3    t4    t5   t6     t7   t8
    ```
    
    `linearDecay(TS, 4)`:
    
    ```
       0     2    4.5   7.25  9.5  11.75   14
    |-----|-----|-----|-----|-----|-----|-----|
    t1   t2   t3   t4   t4   t5   t6   t7     t8
    ```
    
    @param timeseries
           Time series input.
    @param width
           Number of intervals before gamma = decay.
    @return Time series where every point represents the linearly decayed value.
    """
        ...
    @overload
    @classmethod
    def log(cls, value: float=None) -> Union[float]:
    """
    Returns natural logarithm of input value.
    
    Example:
    
    `>>> log(234) `
    
    `5.45532`
    
    @param value
           A double input.
    @return The natural logarithm of input value.
    """
        ...
    @overload
    @classmethod
    def log(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns dimension with natural logarithm of original value.
    
    Example:
    
    `>>> log({value: 234, unit: unit})`
    
    `{value: 5.45532, unit: unit}`
    
    @param dimension
           The dimension input.
    @return The dimension with natural logarithm of original value.
    """
        ...
    @overload
    @classmethod
    def log(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns time series with natural logarithm of all original values.
    
    Example:
    
    TS.data:
    
    ```
       2       3      223     -30
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    `log(TS)`:
    
    ```
      0.6931  1.099   5.407    NaN
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    Example:
    
    `>>> log([2, 3, 223, 1032])`
    
    `[0.6931, 1.099, 5.407, 6.939]`
    
    @param timeseries
           Time series input.
    @return Time series with natural logarithm of all original values.
    """
        ...
    @overload
    @classmethod
    def log10(cls, value: float=None) -> Union[float]:
    """
    Returns base-10 logarithm of input value.
    
    Example:
    
    `>>> log10(234)`
    
    `3.0136`
    
    @param value
           A double input.
    @return The base-10 logarithm of input value.
    """
        ...
    @overload
    @classmethod
    def log10(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns the dimension with base-10 logarithm of original value.
    
    Example:
    
    `>>> log10({value: 234, unit: unit})`
    
    `{value: 2.369, unit: unit}`
    
    @param dimension
           The dimension input.
    @return The base-10 logarithm of dimension input.
    """
        ...
    @overload
    @classmethod
    def log10(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series with base-10 logarithm of all original values.
    
    Example:
    
    TS.data:
    
    ```
       2       1      223     -20
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    `log(TS)`:
    
    ```
      0.3010     0    2.3483    NaN
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    
    Example:
    
    `>>> log10([2, 3, 223, 1032])`
    
    `[0.3010, 0.4771, 2.3483, 3.0136]`
    
    @param timeseries
           Time series input.
    @return Time series with base-10 logarithm of all original values.
    """
        ...
    @classmethod
    def lowerCase(cls, str: str=None) -> Union[str]:
    """
    Performs the standard string operation `lowerCase` on the input.
    
    Example:
    
    `>>> lowerCase("HeLLO")`
    
    `"hello"`
    
    @param str
           A string input.
    @return The input string in lower case..
    """
        ...
    @classmethod
    def makeLineString(cls, points: Array[GeomPoint]) -> Union[GeomLineString]:
    """
    Returns a GeomLineString by combining the input points.
    It is passed down to the DB (PostGIS) as ST_MakeLine function.
    
    Example:
    
    `>>> makeLineString([GeomPoint(1,1), GeomPoint(2,2)])`
    
    `GeomLineString(((1,1), (2,2)))`
    
    @param points
           Array of points passed to create a GeometricLineString {@link GeomLineString}.
    @return A GeometricLineString {@link GeomLineString} from the points passed in the function.
    """
        ...
    @classmethod
    def makePoint(cls, x: float, y: float, z: float=None, m: float=None) -> Union[Union[GeomPoint,GeomPoint3D,GeomPoint3DWithMeasure]]:
    """
    Returns a 2D GeomPoint or a 3D GeomPoint with or without measure (m).
    It is passed down to the DB (PostGIS) as ST_MAKEPOINT function.
    
    Example:
    
    `>>> makePoint(2,3,5,3)`
    
    `GeomPoint3DWithMeasure(2,3,5,3)`
    
    @param x
           x coordinate of the point.
    @param y
           y coordinate of the point.
    @param z
           z coordinate of the 3D point.
    @param m
           Measure of the 3D point.
    @return Any of the geometric points representing points: ({@link GeomPoint}, {@link GeomPoint3D}, {@link GeomPoint3DWithMeasure}.
    """
        ...
    @classmethod
    def makePointM(cls, x: float, y: float, m: float) -> Union[GeomPointWithMeasure]:
    """
    Returns a 2D GeomPoint with measure (m). It is passed down to the DB (PostGIS) as ST_MAKEPOINTM function.
    
    Example:
    
    `>>> makePointM(2,3,3)`
    
    `GeomPointWithMeasure(2,33)`
    
    @param x
           x coordinate of the point.
    @param y
           y coordinate of the point.
    @param m
           measure of the point.
    @return A the GeomPoint (2D) with measure: {@link GeomPointWithMeasure}.
    """
        ...
    @classmethod
    def map(cls, lambdaField: Callable[[Any], Union[Any]]) -> Union[Array[Any]]:
    """
    This function performs the `map` transformation commonly used in functional programming. For every element in the collection on which `map` is applied, the input-lambda is evaluated each object at-a-time.
    
    Example:
    
    `>>> fruits.map(price * 100)`
    
    `// Returns a collection of fruit prices, each value being 100 times the input price`
    
    @param objs
           The lambda transformation.
    @return Collection of results of `map` transformation applied on each element. Individual results are NOT 'flattened'.
    """
        ...
    @classmethod
    def matchCount(cls, str: str, regex: str) -> int:
    """
    Performs the standard string operation `matchCount` on the input.
    
    Example:
    
    `>>> matchCount("HelloxxxHelloxxHello", "Hello")`
    
    `3`
    
    @param str
           A string input to be matched against.
    @param regex
           A regex input.
    @return The number of times the substring in `str` matches `regex`.
    """
        ...
    @classmethod
    def matches(cls, str: str, regex: str) -> bool:
    """
    Performs the standard string operation `matches` on the input.
    
    Example: `matches(field, "[0-9-F-a-f]+")`
    
    @param str
           String input to be matched.
    @param regex
           Regex input.
    @return `true` if `str` matches the `regex`.
    """
        ...
    @classmethod
    def matchesRegex(cls, str: str, regex: str) -> bool:
    """
    This function checks if the input string matches provided regex pattern.
    
    Example: `matchesRegex(field, "[0-9-F-a-f]+")`
    
    @see #regexMatch
    @see RegexPattern
    
    @param str
           String input to be matched.
    @param regex
           Regex pattern.
    @return `true` if `str` matches the `regex`.
    """
        ...
    @classmethod
    def matchesGlob(cls, str: str, glob: str) -> bool:
    """
    This function checks if input string matches provided glob pattern.
    
    Example: `matchesGlob(url, "*abc/Test*.java")`
    
    @see #globMatch
    @see GlobPattern
    
    @param str
           String input to be matched.
    @param glob
           The glob pattern.
    @return `true` if str matches the glob.
    """
        ...
    @classmethod
    def matchesCamelCase(cls, str: str, camelCase: str, allowLowerCamelCase: bool=None) -> bool:
    """
    This function checks if the input string matches provided CamelCase pattern.
    
    Examples:
    
    `>>> matchesCamelCase("AnotherBasicClass", "ABC")`
    
    `true`
    
    `>>> matchesCamelCase("AnotherBasicClass", "xyz")`
    
    `false`
    
    @see #camelCaseMatch
    @see CamelCasePattern
    
    @param str
           String input that should be matched.
    @param camelCase
           CamelCase pattern.
    @param allowLowerCamelCase
           Input flag to indicate if this function should match the strings that start with lower case.
    @return `true` if `str` matches the `CamelCase` pattern.
    """
        ...
    @classmethod
    def regexMatch(cls, str: str, regex: str) -> StringPatternMatch:
    """
    This function computes match between input string and regex pattern.
    
    @see #matchesRegex
    @see RegexPattern
    
    @param str
           String input to be matched.
    @param regex
           Regex pattern.
    @return The match details.
    """
        ...
    @classmethod
    def globMatch(cls, str: str, glob: str) -> StringPatternMatch:
    """
    This function computes match between input string and glob pattern.
    
    @see #matchesGlob
    @see GlobPattern
    
    @param str
           String input to be matched.
    @param glob
           The glob pattern.
    @return The match details.
    """
        ...
    @classmethod
    def camelCaseMatch(cls, str: str, camelCase: str, allowLowerCamelCase: bool=None) -> StringPatternMatch:
    """
    This function computes match between input string and CamelCase pattern.
    
    @see #matchesCamelCase
    @see CamelCasePattern
    
    @param str
           String input to be matched.
    @param camelCase
           CamelCase input
    @param allowLowerCamelCase
           Flag indicating whether to match strings that start with lower case.
    @return String patterns (groups) in `str` that match `camelCase` input.
    """
        ...
    @classmethod
    def findAll(cls, str: str, regex: str) -> Union[Array[str]]:
    """
    This function finds all the substrings that match the regex.
    
    Example :
    
    `>>> findAll('Vowels are aeiou', '[a-f]+')`
    
    `[e, a, e, ae]`
    
    @param str
            String input to be searched.
    @param regex
            Regex pattern that should be searched in the given `str`.
    @return A list of all the substrings that match the given `regex`.
    """
        ...
    @overload
    @classmethod
    def max(cls, timeserieses: Array[Timeseries[Any]]=None) -> Union[Timeseries[Any]]:
    """
     Returns a time series where each interval has a value that is the maximum of the values for the corresponding interval across all input time serieses.
    
     Example:
    
     TS1.data:
     ```
         3        2         4        2
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS2.data:
     ```
         2        1         1       6
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS3.data:
     ```
         2        2         3       4
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     `max([TS1, TS2, TS3])`:
    
     ```
          3       2         4       6
     |--------|--------|--------|--------|
    
     t1       t2       t4       t4       t5
    ```
    
     Examples:
    
     `max(sum(someArryField.normalized.data.quantity))
    
     `max(sum([TS1, TS2, TS3])`
    
     @param timeserieses
            An array of time series input.
     @return A time series where each interval has a value that is the maximum of the values for the corresponding interval across all time serieses input.
    """
        ...
    @overload
    @classmethod
    def max(cls, numbers: Array[float]=None) -> Union[float]:
    """
    Returns the maximum of all values in arryField.
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    Examples:
    
    `>>> max([1, 2, -423.442, 234.234])
    
    `234.234`
    
    `>>> max([1, null, 2, 3])`
    
    `3.0`
    
    `>>> max([])`
    
    `null`
    
    `>>> max(null)`
    
    `null`
    
    @param numbers
           An arryField of input numbers.
    @return Maximum value of the arryField numbers.
    """
        ...
    @classmethod
    def md5(cls, str: str) -> str:
    """
    Performs the standard string operation `md5` on the input.
    
    Example: `md5('ABC') ==> 902fbdd2b1df0c4f70b4a5d23525e932
    
    @param str
           string input
    @return MD5 of the input string.
    """
        ...
    @classmethod
    def md5HashKey(cls, str: str) -> int:
    """
    Returns integer equivalent of first 7 HEX characters of `md5` on the input.
    
    Example:
    
    `>>> md5HashKey('ABC')`
    
    `151190493`
    
    @param str
           A string input.
    @return The integer equivalent of first 7 HEX characters of `md5` on the input.
    """
        ...
    @overload
    @classmethod
    def mean(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns mean of values of normalized datapoints that fall within the query period.
    
    Example:
    
    TS.data:
    
    ```
      1,2   3,4
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    `mean(TS)`:
    
    ```
      1.5   3.5    0
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    Example: `mean(sum(normalized.data.quantity))`
    
    @param timeseries
           Time series input.
    @return Mean of values of normalized datapoints that fall within the query period.
    """
        ...
    @overload
    @classmethod
    def mean(cls, input: Array[float]=None) -> Union[float]:
    """
    Returns mean of values.
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    Example:
    
    `>>> mean([1,2,3,4,5])`
    
    `3.0`
    
    @param input
           A number array input.
    @return The mean of the input values.
    """
        ...
    @overload
    @classmethod
    def median(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns an {@link identity} time series with a value that is: the median of values of normalized datapoints in the input time series that fall within the query period.
    
    Example:
    
    TS.data:
    
    ```
      53   -114   0.5
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    `median(TS)`:
    
    ```
      0.5   0.5   0.5
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    Example:
    
    `median(sum(normalized.data.quantity))`
    
    `>>> median(sum(TS))`
    
    `identity(0.5)`
    
    `median(sum(normalized.data.quantity))`
    
    @param timeseries
           Time series input.
    @return An {@link identity} time series with a value that is: the median of values of normalized datapoints in the input time series that fall within the query period.
    """
        ...
    @overload
    @classmethod
    def median(cls, input: Array[float]=None) -> Union[float]:
    """
    Returns the median of input values.
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    Example:
    
    `>>> median([1,2,3,4,5])`
    
    `3.0`
    
    @param input
           The number array input.
    @return The median of the input values.
    """
        ...
    @overload
    @classmethod
    def min(cls, timeseries: Array[Timeseries[Any]]=None) -> Union[Timeseries[Any]]:
    """
     Returns a time series where each interval value is the minimum of the values in corresponding intervals across all time series inputs.
    
     Example:
    
     TS1.data:
     ```
          3       2       0         2
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS2.data:
     ```
         3        0       7.5       3
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS3.data:
     ```
        3.21       2        3       2
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     `min([TS1, TS2, TS3])`:
    
     ```
          3       0         0       2
     |--------|--------|--------|--------|
    
     t1       t2       t4       t4       t5
    ```
    
     Examples:
    
     `min(sum(someArryField.normalized.data.quantity))`
    
     `min(sum([TS1, TS2, TS3])`
    
     @param timeseries
            An input array of time series.
     @return A time series where each interval value is the minimum of the values in corresponding intervals across all time series inputs.
    """
        ...
    @overload
    @classmethod
    def min(cls, numbers: Array[float]=None) -> Union[float]:
    """
    Returns the minimum of all values in the arryField.
    
    Examples:
    
    `>>> min([1, -434.09, 43, 3324])`
    
    `-434.09`
    
    `>>> min([1, null, 2, 3])`
    
    `1.0`
    
    `>>> min([])`
    
    `null`
    
    `>>> min(null)`
    
    `null`
    
    @param numbers
           An arryField of numbers.
    @return Minimum value in the arryField numbers.
    """
        ...
    @classmethod
    def minute(cls, datetime: datetime) -> int:
    """
    Returns the minute of the hour from the input datetime.
    
    Example: `minute(dateTime('2011-02-01T03:00:01+08'))`
    
    @param datetime
           The datetime input.
    @return The minute of the hour from the input datetime.
    """
        ...
    @classmethod
    def modalValue(cls, objs: Array[Any]) -> Union[Any]:
    """
    Returns the most frequently occurring item in the input array.
    
    Examples:
    
    `modalValue([1,2,3,3])`
    
    `modalValue(['a', 'b', 'a'])`
    
    @param objs
           Collection of any type.
    @return The most frequently occurring item in the input array.
    """
        ...
    @classmethod
    def month(cls, datetime: datetime) -> int:
    """
    Returns the month of the year from the input datetime.
    
    Example: `month(dateTime('2011-02-01T03:00:01+08'))`
    
    @param datetime
           The datetime input.
    @return The month of the year from the input datetime.
    """
        ...
    @classmethod
    def not(cls, obj: Any) -> bool:
    """
    Returns `true` if `foo` is null or empty string.
    
    Example: `not(foo)`
    
    @param obj
           Input of any type.
    return `true` if the input is null or empty string.
    """
        ...
    @classmethod
    def now(cls) -> datetime:
    """
    Returns the current date time on the server.
    
    Example: `now()`
    
    @return The current date time on the server.
    """
        ...
    @overload
    @classmethod
    def nthroot(cls, value: float=None, nthRoot: int=None) -> Union[float]:
    """
    Returns the nth root of the input value.
    
    Example:
    
    `>>> nthroot(243, 4)`
    
    `3.9482`
    
    @param value
           The input value.
    @param nthRoot
           The interger n input for the nth root.
    @return The nth root of input value.
    """
        ...
    @overload
    @classmethod
    def nthroot(cls, dimension: Dimension=None, nthRoot: int=None) -> Union[Dimension]:
    """
    Returns a dimension with the nth root value of original value.
    
    Example:
    
    `>>> nthroot({value: 243, unit: unit}, 4)`
    
    `{value: 3.9482, unit: unit}`
    
    @param dimension
           The dimension input.
    @param nthRoot
           The integer n for the nth root.
    @return The dimension with nth root value of original value.
    """
        ...
    @overload
    @classmethod
    def nthroot(cls, input: Timeseries[Any]=None, nthRoot: int=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series in which each new value is nth root of original value.
    
    Example:
    
    TS.data:
    
    ```
       4      994     234     552
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    `nthroot(TS, 4)`:
    
    ```
     1.4142   5.6149  3.9111 4.8471
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    Example:
    
    `>>> nthroot(TS, 4)`
    
    `[1.4142, 5.6149, 3.9111, 4.8471]`
    
    
    `>>> nthroot([4, 994, 234, 552], 4)`
    
    `[1.4142, 5.6149, 3.9111, 4.8471]`
    
    @param input
           The time series input.
    @param nthRoot
           Integer n input for the nth root.
    @return The Nth root of input with the same type as input.
    """
        ...
    @overload
    @classmethod
    def number(cls, str: str=None) -> Union[float]:
    """
    Returns a number parsed from input string.
    
    Example:
    
    `>>> number("25")`
    
    `25`
    
    @param str
           The string input.
    @return A number parsed from input string.
    """
        ...
    @overload
    @classmethod
    def number(cls, dimension: Dimension=None) -> Union[float]:
    """
    Returns a number parsed from the dimension input.
    
    Example:
    
    `>>> number({value: 25, unit: unit})`
    
    `25`
    
    @param dimension
           The dimension input.
    @return A number parsed from dimension input.
    """
        ...
    @classmethod
    def or(cls, timeserieses: Array[Timeseries[Any]]) -> Timeseries[Any]:
    """
     Returns a boolean time series where every value is obtained by element-wise ORing the input TS. The resultant value for every point is 0 (`false`) or 1 (`true`). If the input time series are numeric, then value 0 is treated as `false`, and every other value is treated as `true`.
    
    
     Example:
    
     TS1.data:
    
     ```
         3        2       0         2
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS2.data:
    
     ```
         3        0       7.5       3
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS3.data:
    
     ```
        3.21      2       3         2
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     `or([TS1, TS2, TS3])`:
    
     ```
        1         1        1        1
     |--------|--------|--------|--------|
    
     t1       t2       t4       t4       t5
    ```
    
     Example: `or(sum(someArryField.normalized.data.quantity))`
    
     @param timeserieses
            The time series to be OR'ed.
     @return A time series with element-wise boolean OR of all input timeseries.
    """
        ...
    @overload
    @classmethod
    def percentile(cls, timeseries: Timeseries[Any], n: float) -> Timeseries[Any]:
    """
    Returns a percentile for the values of normalized datapoints that fall within the query period.
    
    Example: `percentile(sum(normalized.data.quantity), 20)`
    
    @param timeseries
           The time series input.
    @param n
           An optional input for the percentile calculation.
    @return The computed statistic value as identity timeseries.
    """
        ...
    @overload
    @classmethod
    def percentile(cls, input: Array[float], n: float) -> Union[float]:
    """
    Returns the specified percentile for the input values.
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    Example:
    
    `>>> percentile([1,2,3,4,5], 50)`
    
    `3.0 // 50th percentile for the input values [1,2,3,4,5]`
    
    @param input
           The number array input.
    @param n
           The percentile requested for the input values.
    @return The percentile for the input values.
    """
        ...
    @classmethod
    def period(cls, number: int, grain: str) -> int:
    """
    This function identifies the number of milliseconds that span a period of N grains starting from the dateTime context, and returns the number of milliseconds in that period. It assumes 24 hours a day. It does not
    account for changes due to Daylight Savings Time. It assumes the number of days in a month is 30, and the number of days in the year is 365. Use `plusDays`, `plusMonths`, or `plusYears` if these factors are to be considered.
    
    Example: `period(3, 'DAY')`
    
    @param number
           The number input.
    @param grain
           The grain input.
    @return The milliseconds in the period.
    """
        ...
    @classmethod
    def plusDays(cls, dateTime: datetime, num: int) -> datetime:
    """
    Returns the new DateTime after adding the number of days to the input DateTime.
    
    Example:
    
    `>>> plusDays(DateTime('2018-01-01T00:00:00'), 2)`
    
    returns
    
    `DateTime('2018-01-03T00:00:00')`
    
    @param dateTime
           DateTime input.
    @param num
           Integer input for the number of days.
    @return Milliseconds in the period.
    """
        ...
    @classmethod
    def plusMonths(cls, dateTime: datetime, num: int) -> datetime:
    """
    Returns the new DateTime after adding the number of months to the input DateTime.
    
    Example:
    
    `>>> plusMonths(DateTime('2018-01-01T00:00:00'), 2)`
    
    returns
    
    `DateTime('2018-03-01T00:00:00')`
    
    @param dateTime
           DateTime input.
    @param num
           Integer input for the number of months.
    @return Milliseconds in the period.
    """
        ...
    @classmethod
    def plusYears(cls, dateTime: datetime, num: int) -> datetime:
    """
    Returns the new DateTime after adding the number of years to the input DateTime.
    
    Example:
    
    `>>> plusYears(DateTime('2018-01-01T00:00:00'), 2)`
    
    returns
    
    `DateTime('2020-01-01T00:00:00')`
    
    @param dateTime
           DateTime input.
    @param num
           Integer input for the number of years.
    @return Returns milliseconds in the period.
    """
        ...
    @classmethod
    def pointInsideCircle(cls, geomPoint: GeomPoint, center_x: float=None, center_y: float=None, radius: float=None) -> bool:
    """
    Returns a `true` or a `false`, indicating if the given point is inside a circle with specified center and radius. This function is passed down to the DB (PostGIS) as ST_Point_Inside_Circle function.
    
    Example:
    
    `>>> pointInsideCircle(GeomPoint(0,0), 2, 3, 3)`
    
    `true`
    
    @param geomPoint
           A geometry Type representing a point (2D).
    
    @return `true` if the input point (`geomPoint`) is inside a circle with specified center (center_x, center_y) and radius.
    """
        ...
    @classmethod
    def pos(cls) -> int:
    """
    Returns the object's position in a Collection.
    
    Example: `source.producerMappings.(pos()==0)`
    
    @return The position of the object in a Collection.
    """
        ...
    @overload
    @classmethod
    def pow(cls, value: float=None, power: int=None) -> Union[float]:
    """
    Returns a value that is input raised to the power N.
    
    Example:
    
    `>>> pow(3.4, 4)`
    
    `133.6336`
    
    @param value
           The input value.
    @param power
           The number N of the power.
    @return The input raised to the power N.
    """
        ...
    @overload
    @classmethod
    def pow(cls, dimension: Dimension=None, power: int=None) -> Union[Dimension]:
    """
    Returns the dimension with its value raised to the power N.
    
    Example:
    
    `>>> power({value: 3.4, unit: unit}, 4)`
    
    `{value: 133.6336, unit: unit}`
    
    @param dimension
           The dimension input.
    @param power
           The number N of the power.
    @return The dimension with value raised to the power N.
    """
        ...
    @overload
    @classmethod
    def pow(cls, timeseries: Timeseries[Any]=None, power: int=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series with all values raised to the power N.
    
    Example:
    
    TS.data:
    
    ```
       0     2.3   -1     9
    |-----|-----|-----|-----|
    t1    t2    t3    t4    t5
    ```
    
    `pow(TS,4)`:
    
    ```
      0   27.9841  1    6561
    |-----|-----|-----|-----|
    t1    t2    t3    t4    t5
    ```
    
    `>>> pow([34, 23, -1, 9], 4)`
    
    `{1336336, 279841, 1, 6561}`
    
    @param timeseries
           The input time series.
    @param power
           The number N of the power.
    @return A time series with all values raised to the power N.
    """
        ...
    @classmethod
    def quote(cls, str: str) -> str:
    """
    Perform the standard string operation `quote` on the input input.
    The expression `\\\"` in the string input will be replaced by `\\\\"`
    
    Example:
    
    `>>> quote("Hello")`
    
    `"Hello"`
    
    @param str
           The input string.
    @return The quoted string.
    """
        ...
    @classmethod
    def random(cls, start: int=None, end: int=None) -> int:
    """
    This function returns a random number in [0, 1) if no arguments are supplied, or in the specified interval.
    
    Examples:
    
    `random()`
    
    `random(5, 7)`
    
    @param start
           The start point of random range.
    @param end
           The end point of random range.
    @return A random number between `start` and `end`.
    """
        ...
    @classmethod
    def replace(cls, str: str, replaced: str, replacement: str) -> str:
    """
    This function replaces all the occurrences of the `replaced` string with the `replacement` string in the input `str`.
    
    Example:
    
    `>>> replace('regional facility', 'facility', 'location')
    
    `regional location`
    
    @param str
           The original string input.
    @param replaced
           A regex expression for the string to be replaced.
    @param replacement
           The replacement string input.
    @return The modified string.
    """
        ...
    @classmethod
    def rolling(cls, aggregationFunction: str, timeseries: Timeseries[Any], resetOn: Any=None, resetTo: Any=None, resetAfter: int=None) -> Timeseries[Any]:
    """
    Returns a time series where every value is computed by aggregating with a rolling value obtained from previous points encountered. It has 3 optional arguments :
    
    1. `resetOn`: This function supports 2 types of values for this parameter:
    
       When the `resetOn` is a number, this function resets when the incoming value is equal to N, where N is value of `resetOn`, and resets to `resetTo` if specified, else 0.
    
       When the `resetOn` is a timeseries, this function resets when the corresponding point in the specified `resetOn` time series is `true` (value not equal to 0).
    
    1. `resetTo`: Reset to the value of `resetTo` instead of 0. Two kinds of values are supported for this field also: either a number or a time series.
    
    1. `resetAfter`: Reset after every N points, where N is value obtained from `resetAfter`. Reset it to value of `resetTo` if specified, else 0.
    
    Examples:
    
    `rolling('SUM', sum(normalized.data.quantity), 3, 0)`
    
    `rolling('SUM', sum(normalized.data.quantity), null, 10, 3)`
    
    @param aggregationFunction
           Name of the aggregation function to be applied when rolling. Supported values for `aggregationFunction` are SUM|AVG|MIN|MAX|MEDIAN|VARIANCE|STDDEV.
    @param timeseries
           The input time series.
    @param resetOn
           - If this parameter is timeseries, it is used as a resetting trigger: reset if the point's value is `true` (not-zero).
    
           - If this parameter is a double value, then it is used as the value of reset rolling value on seeing a point whose value is equal to this parameter.
    @param resetTo
           Reset to this value instead of 0.
    @param resetAfter
           Reset rolling integer value after every N points where N is this parameter.
    @return A time series where every value is computed by aggregating with a rolling value obtained from the previous points encountered.
    """
        ...
    @classmethod
    def rollingDiff(cls, timeseries: Timeseries[Any], resetDropThreshold: float, rollOverThreshold: bool=None) -> Timeseries[Any]:
    """
    This function returns a time series in which every value is computed by taking the difference between current and previous point. The `resetDropThreshold` is an optional argument and it works like this:
    
     - If the difference between current and previous point is negative (that is, if it is a drop) and if the magnitude (absolute value) of this difference is greater than or equal to `resetDropThreshold`, then the value for that point in the output time series is not the difference but the value itself.
     - For example, if `resetDropThreshold` is 10000, and the time series has a data point 10003 followed by 1, then the resultant value in the output time series will be 1 and not -10002. On the other hand, if the time series had a data point 10003 followed by 4, then the resultant value in the output time series will be -9999.
    
    Examples:
    
    `rollingDiff(sum(normalized.data.quantity))`
    
    `rollingDiff(sum(normalized.data.quantity), 10000)`
    
    @param timeseries
           The input time series.
    @param resetDropThreshold
           A reset drop threshold. When specified, if the absolute difference between current and previous point is less than this threshold, then the resultant value in the output time series is the current point, else resultant value in the output time series is is set to the difference between current and previous point.
    @param rollOverThreshold
           Default value is `false`. If `true`, the value after drop is roll over distance from previous point. If `false`, the value after drop is the point's value.
    @return A time series that represents the rolling difference of the input time series.
    """
        ...
    @classmethod
    def rollup(cls, timeserieses: Array[Timeseries[Any]], aggregationFunction: str=None, nthPercentileValue: float=None) -> Timeseries[Any]:
    """
    Returns a time series in which every datapoint represents a rollup of all the data points corresponding to the time slice. The optional `percentileValue` must be: 0 <= value <= 100.
    
    Examples:
    
    `rollup('PERCENTILE', 50, TS1, TS2)`
    
    `rollup('STDDEV', TS1, TS2)`
    
    @param aggregationFunction
           Name of the aggregation function. Supported values for `aggregationFunction` are: SUM|AVG|MEAN|MIN|MAX|MEDIAN|VARIANCE|STDDEV|PERCENTILE|OR|AND
    @param nthPercentileValue
           Input for the percentile calculation.
    @param timeserieses
           The time series inputs.
    @return The time series where every datapoint represents a rollup of all the data points corresponding to the time slice.
    """
        ...
    @overload
    @classmethod
    def round(cls, value: Union[float]=None, scale: int=None) -> Union[float]:
    """
    The function rounds the input value towards "nearest neighbor". If both the neighbors are equidistant, then the function rounds up. The second argument indicates the nth decimal place to which the rounding should happen.
    The IEEE double format has a significand precision of 53 bits and occupies 64 bits overall. Precision cannot be achieved with double return type for values that cannot be exactly represented in binary floating-point format.
    
    Examples:
    
    `>>> round(10.57, 1)`
    
    `10.6`
    
    `>>> round(-10.57, 1)`
    
    `-10.6`
    
    `>>> round(10.655, 2)`
    
    `10.66`
    
    `>>> round(3, 3)`
    
    `3`
    
    @param value
           The value input. The valueType for this field should not be a `decimal` number type if a `double` output is expected.
    @param scale
           The input indicating the nth decimal place to which the rounding should happen.
    @return A value rounded towards the "nearest neighbor".
    """
        ...
    @overload
    @classmethod
    def round(cls, value: float=None) -> Union[int]:
    """
    The function rounds the input value towards "nearest neighbor". If both the neighbors are equidistant, then the function rounds up.
    
    Examples:
    
    `>>> round(10.5)`
    
    `11`
    
    `>>> round(decimal(10.5))`
    
    `11`
    
    @param value
           The value input.
    @return A value rounded towards the "nearest neighbor".
    """
        ...
    @overload
    @classmethod
    def round(cls, value: float=None, scale: int=None) -> Union[float]:
    """
    The function rounds the input value towards "nearest neighbor". If both the neighbors are equidistant, then the function rounds up. The second argument indicates the nth decimal place to which the rounding should happen.
    This version of round would ensure that precision is retained.
    
    Examples:
    
    `>>> round(decimal(10.57), 1)`
    
    `10.6`
    
    `>>> round(decimal(-10.57), 1)`
    
    `-10.6`
    
    `>>> round(decimal(10.655), 2)`
    
    `10.66`
    
    `>>> round(decimal(3), 3)`
    
    `3`
    
    @param value
           The value input.
    @param scale
           The input indicating the nth decimal place to which the rounding should happen.
    @return A value rounded towards the "nearest neighbor".
    """
        ...
    @overload
    @classmethod
    def round(cls, dimension: Dimension=None, scale: int=None) -> Union[Dimension]:
    """
    The function rounds the value field in the dimention input towards "nearest neighbor". If both the neighbors are equidistant, then the function rounds up. The second argument is optional, and indicates the nth decimal place to which the rounding should happen. Default is 0.
    
    Examples:
    
    `>>> round({value: 10.5, unit: unit})`
    
    `{value: 11, unit: unit}`
    
    `>>> round({value: 10.57, unit: unit}, 1)`
    
    `{value: 10.6, unit: unit}`
    
    `>>> round({value: -10.57, unit: unit}, 1)`
    
    `{value: -10.6, unit: unit}`
    
    `>>> round({value: 10.655, unit: unit}, 2)`
    
    `{value: 10.66, unit: unit}`
    
    `>>> round({value: 3, unit: unit}, 3)`
    
    `{value: 3, unit: unit}`
    
    @param dimension
           The dimension input.
    @param scale
           An optional input indicating the nth decimal place to which the  rounding should happen. Default value is 0.
    @return The dimension with the value rounded towards the "nearest neighbor".
    """
        ...
    @overload
    @classmethod
    def round(cls, timeseries: Timeseries[Any]=None, scale: int=None) -> Union[Timeseries[Any]]:
    """
    The function rounds all the values in the input time series towards "nearest neighbor". If both the neighbors are equidistant, then the function rounds up. The second argument is optional, and indicates the nth decimal place to which the rounding should happen. Default is 0.
    
    Example:
    
    ```
      10.5   0   -5.2
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    `round(TS)`:
    
    ```
       11    0     -5
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    Examples:
    
    `>>> round(TS)`
    
    `[11, 0, -5]`
    
    `>>>round([10.57, 10.5], 1)`
    
    `[10.6, 10.5]`
    
    `>>> round([10.5, 10.2, -5.2])`
    
    `[11, 10, -5]`
    
    `>>> round([10.57, 10.52, -11.236], 1)`
    
    `[10.6, 10.5, -11.2]`
    
    `>>> round([10.57, 10.52, -11.236, -11.234], 2)`
    
    `[10.57, 10.52, -11.24, -11.23]`
    
    @param timeseries
           The input time series.
    @param scale
           An optional input indicating the nth decimal place to which rounding should happen. Default value is 0.
    @return The time series with all values rounded towards the "nearest neighbor".
    """
        ...
    @overload
    @classmethod
    def roundHalfToEven(cls, value: float=None) -> Union[float]:
    """
    This funciton rounds the input value towards the "nearest neighbor". If both the neighbors are equidistant, then it rounds towards the even neighbor.
    
    Example:
    
    `>>> roundHalfToEven(10.5)`
    
    `10`
    
    @param value
           The input value.
    @return The rounded input value.
    """
        ...
    @overload
    @classmethod
    def roundHalfToEven(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    This function rounds the value field in the dimension input towards the "nearest neighbor". If both the neighbors are equidistant, then it rounds towards the even neighbor.
    
    Example:
    
    `>>> roundHalfToEven({value: 10.5, unit: unit})`
    
    `{value: 10, unit: unit}`
    
    @param dimension
           The dimension input.
    @return The rounded value in the dimension input.
    """
        ...
    @overload
    @classmethod
    def roundHalfToEven(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    This function rounds all the values in the input time series towards the "nearest neighbor." If both the neighbors are equidistant, then it rounds towards the even neighbor.
    
    Example:
    
    TS.data:
    
    ```
      10.5  11.5  -42.1
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    `roundHalfToEven(TS)`:
    
    ```
      10    12    -42
    |-----|-----|-----|
    t1    t2    t3    t4
    ```
    
    Example:
    
    `>>> roundHalfToEven(TS)`
    
    `[10, 12, -42]`
    
    
    `>>> roundHalfToEven([10.5, 11.5, -42.1])`
    
    `[10, 10, -42]`
    
    @param timeseries
           The input time series.
    @return A modified time series with rounded values.
    """
        ...
    @classmethod
    def scaleMinMax(cls, timeseries: Timeseries[Any], min: float=None, max: float=None) -> Timeseries[Any]:
    """
    If no minimum and maximum values are specified, this function first finds minimum (`min`) and maximum (`max`) of the input time series. It then scales every value to a number between 0 and 1 proportionally based on these minimum and maximum values as follows:
    
    `newValue = (oldValue - min) / (max - min)`
    
    If a data point is fully missing then its scaled value is always 0.
    
    Example:
    
    TS.data:
    ```
         -5      -2.2      3.4       5
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    TS.missing:
    ```
         100      20       0         45
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    `scaleMinMax(TS, -5, 5)`:
    
    ```
          0      0.28     0.84      1
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    
    Example: `scaleMinMax(sum(normalized.data.quantity), -5, 5)`
    
    @param timeseries
           The input time series.
    @param min
           The minimum (min) value to be used.
    @param max
           The maximum (max) value to be used.
    @return A time series with values between 0 and 1.
    """
        ...
    @classmethod
    def scaleStandard(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    This function first finds the mean and standard deviation of the input time series. Assuming normal distribution, it then scales every value to its normal value based on `mean` and `stddev` values, as follows:
    
    `newValue = (oldValue - mean) / stddev`
    
    If a data point is fully missing then its scaled value is always 'mean'.
    
    Example: `scaleMinMax(sum(normalized.data.quantity), -5, 5)`
    
    @param timeseries
           Input time series.
    @return A time series with values normally distributed based on mean and stddev.
    """
        ...
    @classmethod
    def setSrid(cls, geomPoint: GeomPoint=None, srid: int=None) -> Union[GeomPoint]:
    """
    Sets the SRID on a GeomPoint to a particular integer value. Useful in constructing bounding boxes for queries, and is passed down to the DB (PostGIS) as ST_SetSRID function.
    
    @param geomPoint
           The geometry Type instance representing any of the supported geometric Type instances: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}, {@link GeomPoint3D}.
    
    Example:
    
    `>>> setSrid(GeomPoint(0,0), 4326)`
    
    `GeomPoint((0, 0)) with Srid 4326`
    
    @return A Geometric Type instance representing the point with the updated SRID value.
    """
        ...
    @classmethod
    def second(cls, datetime: datetime) -> Union[int]:
    """
    Returns the second of the minute from the input datetime.
    
    Example: `second(dateTime('2011-02-01T03:00:01+08'))`
    
    @param datetime
           The datetime input.
    @return The second of the minute from the input datetime.
    """
        ...
    @overload
    @classmethod
    def sin(cls, value: float=None) -> Union[float]:
    """
    Returns a double value result after arc sine function is applied to the input value.
    
    Example:
    
    `>>> sin(2)`
    
    `0.909297`
    
    @param value
           input value
    @return A double value result after arc sine function is applied to the input value.
    """
        ...
    @overload
    @classmethod
    def sin(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns the dimesnion with sine function applied to input value. The input value is assumed to be in radians.
    
    Example:
    
    `>>> sin({value: 2, unit: unit})`
    
    `{value: 0.03489, unit: unit}`
    
    @param dimension
           The dimension input.
    @return The dimension with sine function applied to input value. The input value is assumed to be in radians.
    """
        ...
    @overload
    @classmethod
    def sin(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns time series with a sine function applied to input values. The input values are assumed to be in radians.
    
    Example:
    
    TS.data:
    
    ```
       1       -32     0.53
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    `sin(TS)`:
    
    ```
     0.8414  -0.5514  0.5055
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    Example:
    
    `>>> sin(TS)`
    
    `[0.8414, -0.5514, 0.5055]`
    
    `>>> sin([1, -32, 0.53])`
    
    `[0.01745, -0.5299, 0.0092]`
    
    @param timeseries
           The time series input.
    @return The time series with sine function applied to input values. The input values are assumed to be in radians.
    """
        ...
    @classmethod
    def skipIfMissing(cls, timeseries: Timeseries[Any], equalityOperator: str, percent: int) -> Timeseries[Any]:
    """
    For each point in the time series, if the percent missing satisfies the specified equality operator condition, then this function makes that point fully missing in the resulting time series.
    
    Example:
    
    TS.data:
    ```
         10      -2.2    33.4        0
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS.missing:
    ```
         20      45        70       100
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    
    `>> skipIfMissing(TS, '>=', 50)`
    
    TS.data:
    ```
         10      -2.2      0         0
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS.missing:
    ```
         20      45        100      100
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    Example: `skipIfMissing(TS, '>=', 50)`
    `skipIfMissing(TS, '<=', 90)`
    
    @param timeseries
           The time series input.
    @param equalityOperator
           The operator to be applied. Permissible values are:  `<`,`<=`,`>`,`>=`,`==`,`!=`.
    @param percent
           The percent value (0 <= value <= 100). Example: `skipIfMissing(TS, '<=' 90)`
    @return The resulting time series after the following: For each point in the input time series, if the percent missing satisfies the specified equality operator condition, then that point is fully missing in the resulting time series.
    """
        ...
    @overload
    @classmethod
    def sqrt(cls, value: float=None) -> Union[float]:
    """
    Returns the square root of input.
    
    Example:
    
    `>>> sqrt(9)`
    
    `3`
    
    @param value
           The input value.
    @return The square root of the input value.
    """
        ...
    @overload
    @classmethod
    def sqrt(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns the dimension with the square root of input value.
    
    Example:
    
    `>>> sqrt({value: 46, unit: unit})`
    
    `{value: 6.7823, unit: unit}`
    
    @param dimension
           The dimension input.
    @return The dimension with square root of input value.
    """
        ...
    @overload
    @classmethod
    def sqrt(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns a time series where all the values are square root of the corresponding values in the input time series.
    
    Example:
    
    TS.data:
    ```
         10      6.8    -99
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    `sqrt(TS)`:
    
    ```
       3.1622   2.6076    NaN
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    Example:
    
    `>>> sqrt(TS)`
    
    `[3.1622, 2.6076, NaN]`
    
    `>>> sqrt([10, 68, 99])`
    
    `[3.1622, 8.2462, 9.9498]`
    
    @param timeseries
           The time series input.
    @return The time series with all values that are square root of the corresponding input time series values.
    """
        ...
    @classmethod
    def startsWith(cls, str1: str, str2: str) -> bool:
    """
    Performs the standard string operation `startsWith` (checks if `str1` starts with `str2`) on the input.
    
    
    Example:
    
    `>>> startsWith("Hello", "He")`
    
    `true`
    
    @param str1
           The string input that will be checked if it starts with `str2`.
    @param str2
           The string input that will be checked if it is present at the start of `str1`.
    @return `true` if str1 starts with str2.
    """
        ...
    @classmethod
    def startsWithIgnoreCase(cls, str1: str, str2: str) -> bool:
    """
    Performs the standard string operation `startsWith` (checks if `str1` starts with `str2`) on the input, ignoring the case.
    
    Example:
    
    `>>> startsWithIgnoreCase("Hello", "he")`
    
    `true`
    
    @param str1
           The string input that will be checked if it starts with `str2`.
    @param str2
           The string input that will be checked if it is present at the start of `str1`.
    @return `true` if `str1` starts with `str2`.
    """
        ...
    @overload
    @classmethod
    def stddev(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns the standard deviation of values of normalized datapoints that fall within the query period.
    
    Example: `stddev(sum(normalized.data.quantity))`
    
    @param timeseries
           The time series input.
    @return The standard deviation of values of normalized datapoints that fall within the query period.
    """
        ...
    @overload
    @classmethod
    def stddev(cls, input: Array[float]=None) -> Union[float]:
    """
    Returns the standard deviation of input values.
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    Example:
    
    `>>> stddev([1,2,3,4,5])`
    
    `1.5811388300841898`
    
    @param input
           The number array input.
    @return The standard deviation of the input values.
    """
        ...
    @classmethod
    def string(cls, obj: Any) -> Union[str]:
    """
    Returns the string representation of the input.
    
    Example:
    
    `>>> string(25)`
    
    `"25"`
    
    @param object
           The object input.
    @return The string representation of the input.
    """
        ...
    @classmethod
    def substring(cls, str: str, start: int, end: int) -> Union[str]:
    """
    Returns a substring of `str` from index `start` to `end`. The character at the index `start` is included while the character at the index `end` is excluded.
    
    Example:
    
    `>>> substring("regional facility", 0, 8)`
    
    `"regional"`
    
    @param str
           The string input.
    @param start
           The start index (inclusive).
    @param end
           The end index (exclusive).
    @return A substring of `str` from `start` index to `end` index.
    """
        ...
    @overload
    @classmethod
    def sum(cls, values: Array[float]=None) -> Union[float]:
    """
    Returns the sum of all the values in arryField
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    
    Examples:
    
    `>>> sum([2, 1.3, -1])`
    
    `2.3`
    
    `>>> sum([1, null, 2, 3])`
    
    `6.0`
    
    `>>> sum([])`
    
    `null`
    
    `>>> sum(null)`
    
    `null`
    
    @param values
           An array of input values, of data type double, to be summed.
    @return The sum of all values in arryField.
    """
        ...
    @overload
    @classmethod
    def sum(cls, dimension: Array[Dimension]=None) -> Union[Dimension]:
    """
    Returns a dimension with the sum function applied to all values of the dimension. If the unit of each dimension in the input collection is not consistent, then the first dimension's unit will be applied to the returned dimension.
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    Example:
    
    `>>> sum([{value: 1, unit: unit1}, {value: 2, unit: unit2}, {value: 3, unit: unit3}])`
    
    `{value: 6, unit: unit1}`
    
    @param dimension
           An array of dimensions to be summed.
    @return Dimension with sum function applied to all values of the dimension.
    """
        ...
    @overload
    @classmethod
    def sum(cls, timeserieses: Array[Timeseries[Any]]=None) -> Union[Timeseries[Any]]:
    """
     Returns a time series whose values are element-wise sum of all input timeseries.
    
    
     Example:
    
    
     TS1.data:
     ```
         3        2         4       2
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS2.data:
     ```
         2        1         1       6
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     TS3.data:
     ```
         2        2         3       4
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
     `sum([TS1, TS2, TS3]`:
     ```
         7        5        8        12
     |--------|--------|--------|--------|
    
     t1       t2       t4       t4       t5
    ```
    
     Examples:
    
     `sum(sum(someArryField.normalized.data.quantity))`
    
     `sum([TS1, TS2, TS3])`
    
     @param timeserieses
               An array of timeserieses to be summed.
     @return A time series whose values are element-wise sum of all input timeseries.
    """
        ...
    @overload
    @classmethod
    def tan(cls, value: float=None) -> Union[float]:
    """
    Returns a double value resulting after a tangent function is applied to the input value.
    
    Example:
    
    `>>> tan(2.3)`
    
    `0.04016`
    
    @param value
           The input value.
    @return A double value result when a tangent function is applied to the  input value.
    """
        ...
    @overload
    @classmethod
    def tan(cls, dimension: Dimension=None) -> Union[Dimension]:
    """
    Returns the dimesion with tangent function applied to input value. The input value is assumed to be in radians.
    
    Example:
    
    `>>> tan({value: 2.3, unit: unit})`
    
    `{value: 0.04016, unit: unit}`
    
    @param dimension
           The dimension input.
    @return The dimension with tangent function applied to input value. The input value is assumed to be in radians.
    """
        ...
    @overload
    @classmethod
    def tan(cls, timeseries: Timeseries[Any]=None) -> Union[Timeseries[Any]]:
    """
    Returns time series with the tangent function applied to input values. The input values are assumed to be in radians.
    
    Example:
    
    
    TS.data:
    ```
        2.3       -12     54.32
    |--------|--------|--------|
    
    t1      t2        t3       t4
    ```
    
    `tan(TS)`:
    ```
      0.04016 -0.21255  1.3926
    |--------|--------|--------|
    
    t1      t2        t3       t4
    ```
    
    Examples:
    
    `>>> tan(TS)`
    
    `[0.04016, -0.21255, 1.3926]`
    
    `>>> tan([2.3, -12, 54.32])`
    
    `[0.04016, -0.21255, 1.3926]`
    
    @param timeseries
           The time series input.
    @return The time series with tangent function applied to input values. The input values are assumed to be in radians.
    """
        ...
    @classmethod
    def timeComponent(cls, timeComponent: str, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns a time series where every value is obtained by extracting the specified time component from the start of the corresponding interval.
    
    TimeComponents supported: YEAR|MONTH|DAY|HOUR|MINUTE|SECOND|DAYOFYEAR|DAYOFWEEK.
    
    Example: `timeComponent('DAY', start())`
    
    @param timeComponent
           The string input. One of: YEAR|MONTH|DAY|HOUR|MINUTE|SECOND|DAYOFYEAR|DAYOFWEEK.
    @param timeseries
           The time series input.
    @return A time series where every value is obtained by extracting the specified time component (`timeComponent`) from the start of the corresponding interval.
    """
        ...
    @classmethod
    def toDegrees(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns the degree value of the input. The input is assumed to be in radians.
    
    Example:
    
    TS.data:
    
    ```
      -20       2       3
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    `toDegrees(TS)`:
    
    ```
     -1145.9155  114.5915  171.8873
    |---------|---------|---------|
    t1        t2        t3        t4
    ```
    
    Examples:
    
    `>>> toDegrees(TS)`
    
    `[-1145.9155, 114.5915, 171.8873]`
    
    `>>> toDegrees([1, 2, 3])`
    
    `[57.2957, 114.5915, 171.8873]`
    
    @param timeseries
           The time series input.
    @return The time series with values converted to an approximately equivalent angle in degrees.
    """
        ...
    @classmethod
    def toMillis(cls, datetime: datetime) -> int:
    """
    Returns the UTC milliseconds of the input datetime.
    
    Example: `toMillis(dateTime('2011-02-01T03:00:01+08'))`
    
    @param datetime
           The datetime input.
    @return The UTC milliseconds of the input datetime.
    """
        ...
    @classmethod
    def toRadians(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns the radian value of the input. The input is assumed to be  in degrees.
    
    Example:
    
    TS.data:
    
    ```
      -165      2      33
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    `toRadians(TS)`:
    
    ```
     -2.8797 0.03490  0.5759
    |-------|-------|-------|
    t1      t2      t3      t4
    ```
    
    Example:
    
    `>>> toRadians(TS)`
    
    `[-2.8797, 0.03490, 0.5759]`
    
    `>>> toRadians([1, 2, 3])`
    
    `[0.01745, 0.03490, 0.05235]`
    
    @param timeseries
           The time series input.
    @return The time series with values converted to an approximately equivalent angle in radians.
    """
        ...
    @classmethod
    def transformGeom(cls, geom: Geom, srid: int=None) -> Union[Geom]:
    """
    Returns a new geometry Type instance with the input geometry Type instance coordinates transformed to a different spatial reference system. The destination spatial reference `to_srid` may be identified by a valid SRID integer parameter. This function is passed down to the DB (PostGIS) as ST_Transform function.
    
    Example:
    
    `>>> transformGeom(GeomPoint((0,0), 0), 4326)`
    
    `GeomPoint((0, 0), 4326))`
    
    Note: The `setSrid()` simply assigns the SRID to a point, whereas this function transforms the Geometry using the SRID.
    
    @param geom
           The geometry Type instance representing any of the supported geometric Types: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}, {@link GeomPoint3D}.
    
    @return A Geometric Type instance representing the geometric input converted to the input SRID.
    """
        ...
    @classmethod
    def union(cls, collection1: Array[Any], collection2: Array[Any]) -> Union[Array[Any]]:
    """
    Returns the union collection of the input collections. Note that duplicates will not be removed.
    
    Examples:
    
    `union(['a','b','c'], ['1','2','3'])`
    
    `union(3, 4)`
    
    @param collection1
           Collection1 input.
    @param collection2
           Collection2 input.
    @return The union collection of the input collections. Note that duplicates will not be removed.
    """
        ...
    @classmethod
    def unique(cls, collection: Array[Any]) -> Union[Array[Any]]:
    """
    Returns a collection of unique elements. This function determines as follows:
    
     - The unique objects based on ID
     - The numbers based on value, and
     - The datetime string based on `toString`.
    
    Example: `unique(devices.servicePoints)`, `unique(someArryField)`
    
    @param collection
           The collection input.
    @return A collection of unique elements.
    """
        ...
    @classmethod
    def upperCase(cls, str: str=None) -> Union[str]:
    """
    Performs the standard string operation `upperCase` on the input.
    
    Example:
    
    `>>> upperCase("hello")`
    
    `"HELLO"`
    
    @param str
           The string input.
    @return The string in upper case.
    """
        ...
    @overload
    @classmethod
    def variance(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns the variance of values of normalized datapoints that fall within the query period.
    
    Example: `variance(sum(normalized.data.quantity))`
    
    @param timeseries
           The time series input.
    @return The variance of values of normalized datapoints that fall within the query period.
    """
        ...
    @overload
    @classmethod
    def variance(cls, input: Array[float]=None) -> Union[float]:
    """
    Returns the variance of the input values.
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    Example:
    
    `>>> variance([1,2,3,4,5])`
    
    `2.0`
    
    @param input
           The number array input.
    @return The variance of the input values.
    """
        ...
    @classmethod
    def sumOfSquares(cls, input: Array[float]=None) -> Union[float]:
    """
    Returns the sum of squares of input values.
    In case the input array is nested, the aggregation is computed after flattening (recursively) the input array
    Example:
    
    `>>> sumOfSquares([1,2,3,4,5])`
    
    `55.0`
    
    @param input
           The number array input.
    @return The sum of squares of the input values.
    """
        ...
    @classmethod
    def weatherIndependentTimeseries(cls, timeseries: Timeseries[Any], weatherTimeseries: Timeseries[Any], heatingCoolingCoeffs: Array[float]=None, missingThreshold: int=None) -> Timeseries[Any]:
    """
    Returns a time series whose values are weather normalized.
    
    Example:
    
    Input time series:
    
    TS1.data:
    ```
         231     2123      311     431
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    Input weather time series:
    
    ```
         53      24        36      69
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    Heating cooling coefficients: [7.6 6.3 6.3 2.4]
    
    `>>> WeatherIndependentTimeseries(TS, weatherTS, heatingCoolingCoeff, null)`
    
    ```
        139.8   1811.4    90.60      0
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    
    Example:
    
    `>>> weatherIndependentTimeseries([231, 2123, 311, 431], [53, 24, 36, 69], [7.6, 6.3, 6.3, 2.4], null)`
    
    `[139.8, 1811.4, 90.60000, 0]`
    
    @param timeseries
           The time series input.
    @param weatherTimeseries
           The weather time series that should be used to remove the weather component from input timeseries.
    @param heatingCoolingCoeffs
           The heating and cooling coefficients calculated as a part of model generation for the input timeseries. There should be four elements in the input array: [heatWork, heatNonWork, coolWork, coolNonWork]. Default value for all elements is 0.
    @param missingThreshold
           Used to return the input time series if the missing are greater than this threshold. Default is 20.
    @return A time series whose values are weather normalized.
    """
        ...
    @classmethod
    def window(cls, aggFunc: str, timeseries: Timeseries[Any], inputOffset: int, inputSpan: int, inputStep: int=None) -> Timeseries[Any]:
    """
    Returns a time series where the value of every datapoint is computed by summing up every "step'th" point in the window starting at `inputOffset` and spanning `inputSpan` datapoints.
    
    Example: `window('AVG', sum(normalized.data.quantity), -20, 21, 3)`
    
    See [Understanding window](metrics-window.c3doc) for more information.
    
    @param aggFunc
           The name of the aggregation function. Supported values for `aggFunc` are: SUM|AVG|MIN|MAX|MEDIAN|VARIANCE|STDDEV.
    @param timeseries
           The time series input.
    @param inputOffset
           The start point in the window.
    @param inputSpan
           The range to cover in the window.
    @param inputStep
           The step of the window.
    @return A time series where the value of every datapoint is computed by summing up every "step'th" point in the window starting at `inputOffset` and spanning `inputSpan` datapoints.
    """
        ...
    @classmethod
    def operationalWindow(cls, aggFunc: str, dataTs: Timeseries[Any], operationalTs: Timeseries[Any], operationalOffset: int, operationalSpan: int=None) -> Timeseries[Any]:
    """
    Returns a time series where the value of every window is computed by aggregating every data point in the window,
    starting at `operationalOffset` and spanning `operationalSpan` datapoints. This expression differs from the
    {@link window} expression. This expression takes two time series as inputs, one representing the data to perform
    the aggregation on, and the other representing the intervals (on the same timeline) the data is considered operational.
    
    Example: `operationalWindow('AVG', sum(normalized.data.quantity), squareWave('DAYOFWEEK', 1, 6), -20, 21)`
    
    See [Understanding `operationalWindow`](expression-operational-window.c3doc) for more.
    
    @param aggFunc
           The name of the aggregation function. Supported values for `aggFunc` are SUM|AVG|MIN|MAX|MEDIAN.
    @param dataTs
           Time series representing the data over which the aggregation is performed.
    @param operationalTs
           Time series indicating which intervals the underlying mechanism is operational.
    @param operationalOffset
           The offset, in operational time periods, from the current window on which to begin aggregation.
    @param operationalSpan
           The span of operational time on which to aggregate data. This  operationalSpan parameter is optional only
           for negative offsets.
    @return A time series where the value of every datapoint is computed by summing up every "step'th" point in the
            window starting at `operationalOffset` and spanning `operationalSpan` datapoints.
    """
        ...
    @overload
    @classmethod
    def withinDistance(cls, geographyA: Geo, geographyB: Geo, distance: float, unit: str=None) -> bool:
    """
    Returns `true` if the given geographic Type instances are within the given distance of each other. This function is passed down to the DB (PostGIS) as ST_DWITHIN function.
    
    Example:
    
    `>>> withinDistance(GeoPoint(10.0, 20.0), GeoPoint(-10.0,-24.0), 5 * 1609)`
    
    `false`
    
    @param geographyA
          The geography Type instance representing any of the supported geographic Types: {@link Geo}, {@link GeoPoint}, {@link GeoPolygon}.
    @param geographyB
          The geography Type instance representing any of the supported geographic Types: {@link Geo}, {@link GeoPoint}, {@link GeoPolygon}.
    @param distance
          The distance between the two geographies (all distances are in *meters*).
    @param unit
          The unit of the distance. Allowed values are in [feet, miles, meters, kilometers].
    @return `true` if the the two geographies are within the given distance from each other.
    """
        ...
    @overload
    @classmethod
    def withinDistance(cls, geometryA: Geom, geometryB: Geom, distance: float) -> bool:
    """
    Returns `true` if the given geometric Type instances are within the given distance of each other. This function is passed down to the DB (PostGIS) as ST_DWITHIN function.
    
    Example:
    
    `>>> withinDistance(GeomPoint(10.0, 20.0), GeomPoint(-10.0,-24.0), 5)`
    
    `false`
    
    @param geometryA
          The geometry Type instance representing any of the supported 2D geometric Types: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}.
    @param geometryB
          The geometry Type instance representing any of the supported 2D geometric Types: {@link Geom}, {@link GeomPoint}, {@link GeomPolygon}.
    @param distance
          The distance between the two geographies (all distances are in geometrical *unit*).
    
    @return `true` if the two geometries are within the given distance from each other.
    """
        ...
    @overload
    @classmethod
    def withinDistance(cls, latA: float, longA: float, latB: float, longB: float, distance: float, unit: str) -> bool:
    """
    Returns `true` if the given geographic points are within the given distance of each other. A majority of the computation occurs on the C3.ai nodes (worker/master) and a minimal addition and comparision operations are passed down to the database (DB).
    
    @param latA
          The latitude of point A.
    @param longA
          The longitude of point A.
    @param latB
          The latitude of point B.
    @param longB
          The longitude of point B.
    @param distance
          The distance. The two points A and B are checked to see if they are within this distance of each other.
    @param unit
          The unit of the distance. Allowed values are in [feet, miles, meters, kilometers].
    
    @return `true` if the the two points A and B are within the given distance from each other
    """
        ...
    @classmethod
    def year(cls, dateTime: datetime) -> int:
    """
    Returns the year from the given datetime.
    
    Example:
    
    `>>> year(dateTime('2011-02-01T03:00:01+08'))`
    
    `2011`
    
    @param dateTime
           The datetime input.
    @return The year from the given datetime.
    """
        ...
    @classmethod
    def available(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns a time series where every value is between 0 and 100. This value represents the percentage of available data for that interval in the input timeseries. The available value is computed as follows:
    
    `available = 100 - missing`
    
    Example:
    
    TS.data:
    ```
         10      -2.2    33.4       0
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    TS.missing:
    ```
         20      45        70      100
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    `available(TS)`:
    ```
         80      55        30        0
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    @param timeseries
           Time series input.
    @return A time series where every value is between 0 and 100. This value represents the percentage of available data in the input timeseries, for that interval.
    """
        ...
    @classmethod
    def convertToUnit(cls, UnitId: str, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Converts every value of input time series into the supplied unit. If the time series' data is not convertible to the supplied unit, the operation fails.
    
    Example: `convertToUnit('KWH',sum(normalized.data.quantity) * 23)`
    
    @param UnitId
           The ID of the unit into which the input time series should be converted.
    @param timeseries
           The input timeseries.
    @return A time series whose value are all converted into the supplied unit.
    """
        ...
    @classmethod
    def end(cls) -> Timeseries[Any]:
    """
    Returns a time series where the value of every datapoint is the number of milliseconds from UNIX epoch, based on that datapoint's END date.
    
    Example: `end()`
    
    @return A time series where the value of every datapoint is the number of milliseconds from UNIX epoch, based on that datapoint's END date.
    """
        ...
    @classmethod
    def identity(cls, number: int, unitId: str=None) -> Timeseries[Any]:
    """
    Transforms the input scalar number into a time series where every value is equal to the input number.
    
    Examples:
    
    `identity(3)`
    
    `identity(3, 'kwh')`
    
    TS.data:
    ```
         3         3        3        3
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    @param number
           Input value.
    @param unitId
           Unit of dimension.
    
    @return A time series where every value is equal to the input number or is a dimension. The value and the unit of the dimension are the same as the input.
    """
        ...
    @classmethod
    def interval(cls) -> Union[str]:
    """
    Returns the interval of the evaluation.
    
    Example: `interval()`
    
    @return The interval of the evaluation.
    """
        ...
    @classmethod
    def linearRecurrenceTimeseries(cls, initialValues: Array[float], doubleArray: Array[Array[float]]) -> Timeseries[Any]:
    """
    The function will generate a time series recursively, using a minimum of 2 double arrays and initial values(s).
    
    The data points in the time series is generate as follows:
    
     `x_(n) = Array1[n] + Array2[n] * x_(n-1) + Array3[n] * x_(n-2) + ... `
    
    The first point generated will be `x_(0)``, and it requires the initial values `x_(-1)`, `x_(-2)`, `...`.
    
    Examples:
    
    `>>> linearRecurrence([0], Array1, Array2)`
    
    `x_(n) = Array1[n] + Array2[n] * x_(n-1) with x_(-1) = 0.`
    
    `>>> linearRecurrence([0, 1], Array1, Array2, Array3)`
    
    `x_(n) = Array1[n] + Array2[n] * x_(n-1) + Array3[n]*x_(n-2), with x_(-2) = 0, x_(-1) = 1.`
    
    `>>> linearRecurrence([0, 1, 2], Array1, Array2, Array3, Array4)`
    
    `x_(n) = Array1[n] + Array2[n] * x_(n-1) + Array3[n]*x_(n-2) + Array4[n]*x_(n-3), with x_(-3) = 0, x_(-2) = 1, x_(-1) = 2.`
    
    @param initialValues
           The initial value array input.
    @param doubleArray
           Input matrix.
    @return A new time series.
    """
        ...
    @classmethod
    def missing(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns a time series where every value is either 0 or 100, representing whether the specific interval that
    we are looking at has no data (100) or not (0). Even if single point is available then the value would be 0.
    
    Example:
    
    TS.data:
    ```
         10      -2.2      33.4      0
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    TS.missing:
    ```
         0        0         0      100
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    `>>> TS.missing()`
    
    ```
          0        0        0      100
     |--------|--------|--------|--------|
    
     t1      t2        t3       t4       t5
     ```
    
    Example: `missing(normalized.data.quantity)`, `missing(SOME_METRIC)`
    
    To get exact percentages of missing data for specific time intervals, use the expression
    `"eval('AVG', <INTERVAL>, missing(normalized.data.quantity))"`.
    
    This aggregates the missing values over the specified INTERVAL and returns exact percentage values.
    The INTERVAL should be equal to or finer (more granular) than the raw data's natural interval.
    For example, if the raw data contains 4 data points per day, then using DAY as the INTERVAL would be ideal.
    Using a coarser interval (like WEEK for daily data) may result in less accurate percentages.
    
    @param timeseries
           Input time series.
    @return A time series where every value is between 0 and 100, representing the percentage of missing data for that interval.
    """
        ...
    @classmethod
    def randomTimeseries(cls, origin: float=None, bound: float=None) -> Timeseries[Any]:
    """
    Generates a time series with random values. The range, from which the random values are derived, is specified as input arguments to the function.
    
    Example:
    
    `>>> randomTimeseries(-5, 40)`
    
    TS.data:
    
    ```
       10      -2.2    33.4    0
    |-------|-------|-------|------|
    t1      t2      t3      t4     t5
    ```
    
    Examples:
    
    `>>> randomTimeseries()`
    
    ` // Time series with random values between 0(inclusive) and 1(exclusive).`
    
    `>>> randomTimeseries(15.2, 16.3)`
    
    ` // Time series with random values between 15.2(inclusive) and 16.3(exclusive).`
    
    @param origin
              The lower bound for the random value (inclusive).
    @param bound
              The upper bound for the random value (exclusive).
    @return The time series with values uniformly distributed between the lower and upper limits.
    """
        ...
    @classmethod
    def sineWave(cls, waveStart: datetime=None, amplitude: float=None, frequency: float=None, phase: float=None) -> Timeseries[Any]:
    """
    Returns a sine-wave time series using the specified parameters.
    
    Example: `sineWave(dateTime('2011-01-01T00:00:00Z'), 1, 1, 0)`
    
    @param waveStart
              The timestamp of the wave start, that is, where the wave is at the first 0 value.
    @param amplitude
              The peak deviation of the value from zero.
    @param frequency
              Frequency in oscillations (cycles) per second.
    @param phase
              Phase, in radians, at time t = 0.
    @return A time series representing a sine wave.
    """
        ...
    @classmethod
    def squareWave(cls, timeComponent: str=None, pulseStart: int=None, pulseEnd: int=None) -> Timeseries[Any]:
    """
    Generates a square-wave time series using the specified start (`pulseStart`) and end (`pulseEnd`). Grain is determined based on the specified `timeComponent`. A point's value is 1 if that point's datetime falls within the specified range, 0 otherwise.
    
    The following are the supported values:
    
    Allowed values for `timeComponent` are: 'HOUR'|'DAYOFWEEK'|'DAYOFYEAR'.
    
    Allowed values for `pulseStart` and `pulseEnd` are as follows:
    
    - For the `HOUR` value of `timeComponent`, `pulseStart` and `pulseEnd` can be: 0 to 23.
    
    - For the `DAYOFWEEK` value of `timeComponent`, `pulseStart` and `pulseEnd` can be: 1 to 7.
    
    - For the `DAYOFYEAR` value of `timeComponent`, `pulseStart` and `pulseEnd` can be: 1 to 365/366.
    
    Example:
    
    `>>> squareWave('HOUR', 9, 17)`
    
    `[9, 17) // Business hours 9 to 5 (exclusive)`
    
    `>>> squareWave('DAYOFWEEK', 1, 6)`
    
    `[1, 6) // Business week Mon to Sat (exclusive)`
    
    `>>> squareWave('DAYOFYEAR', 1, 32)`
    
    `[1, 32) // Month of January`
    
    @param timeComponent
              The string to be used for determining the grain of the resulting time series. Allowed values are: 'HOUR'|'DAYOFWEEK'|'DAYOFYEAR'.
    @param pulseStart
              Index inclusive.
    @param pulseEnd
              Index exclusive.
    @return A time series representing a square pulse signal based on the given parameters.
    """
        ...
    @classmethod
    def start(cls) -> Union[Timeseries[Any]]:
    """
    Returns a time series where the value of every datapoint is the number of milliseconds from UNIX epoch, based on that datapoint's START date.
    
    Example: `start()`
    
    @return A time series where the value of every datapoint is the number of milliseconds from UNIX epoch, based on that datapoint's START date.
    """
        ...
    @classmethod
    def treatAsUnit(cls, unitId: str, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    On every value of the input time series, replaces the unit with the supplied unit. Data array remains unchanged.
    
    Example: `treatAsUnit('KWH',sum(normalized.data.quantity) * 23)`
    
    @param unitId
           ID of the unit.
    @param timeseries
           Input time series.
    @@return A time series whose all unit values were pasted by supplied unit. Data array remains unchanged.
    """
        ...
    @overload
    @classmethod
    def ascending(cls, objs: Array[Any]=None) -> Union[Array[Any]]:
    """
    Returns a list sorted in ascending order.
    
    Example:
    
    `>>> ascending([5, 4, 2])`
    
    `[2,4,5]`
    
    @param objs
             A list of any primitive C3 data type.
    @return The list sorted in ascending order.
    """
        ...
    @overload
    @classmethod
    def ascending(cls, objs: Array[Any]=None, path: str=None) -> Union[Array[Any]]:
    """
    Returns a list of objects sorted in ascending order.
    
    Example: `ascending(objs, fieldToUseToSort)`
    
    @param objs
             A list of C3 objects.
    @param path
             Field at path from the object type, to use for sorting.
    @return The sorted list of objects in ascending order.
    """
        ...
    @overload
    @classmethod
    def descending(cls, arry: Array[Any]=None) -> Union[Array[Any]]:
    """
    Returns a list sorted in descending order.
    
    Example:
    
    `>>> descending([2, 5, 4])`
    
    `[5,4,2]`
    
    @param arry
             A list of any primitive C3 data type.
    @return The list sorted in descending order.
    """
        ...
    @overload
    @classmethod
    def descending(cls, objs: Array[Any]=None, path: str=None) -> Union[Array[Any]]:
    """
    Returns a list of objects sorted in descending order.
    
    Example: `descending(objs, fieldToUseToSort)`
    
    @param objs
             A list of C3 objects.
    @param path
             Field at path from the object type, to use in order to sort.
    @return The list of objects sorted in descending order.
    """
        ...
    @classmethod
    def split(cls, delimiter: str, str: str=None) -> Union[Array[str]]:
    """
    Splits the given string based on the delimiter.
    
    Examples:
    
    `>>> split('test1;test2', ';')`
    
    `["test1", "test2"]`
    
    `>>> split(null,';')`
    
    `null`
    
    `>>> split("test1;test2", null)`
    
    `["test1;test2"]`
    
    `>>> split("test1.test2", '\\\\\\\\.')`
    
    `["test1", "test2"]`
    
    @param str
           String to split.
    @param delimiter
           Regex-based delimiter to use, to split the string.
    @return An array of the split string.
    """
        ...
    @classmethod
    def removeOutliers(cls, timeseries: Timeseries[Any], span: int=None, threshold: float=None) -> Timeseries[Any]:
    """
    Function to remove outliers from the given time series.
    
    By applying a moving median window and a moving median absolute deviation, this function defines a moving upper and lower outlier bounds. Data points that are outside of these outlier bounds are considered as outliers that need to be cleaned.
    
    Default values:
    
    - For span: 30
    - For threshold: 3
    
    Logic:
    
    `TS >= window(‘MEDIAN’, TS, -span, span, 1) - threshold * 1.48 * window(‘MEDIAN’, abs(TS - window(‘MEDIAN’, TS, -span, span, 1)), -span, span, 1) ? (TS <= window(‘MEDIAN’, TS, -span, span, 1) + threshold*1.48 * window(‘MEDIAN’, abs(TS - window(‘MEDIAN’, TS, -span, span, 1)), -span, span, 1) ? time series: 0) : 0`
    
    Example: `removeOutliers(TS, 30, 3)`
    
    @param timeseries
            Input time series from which the outliers should be removed.
    @param span
            Number of intervals for the moving window.
    @param threshold
            Threshold for the standard deviation.
    @return The time series with outliers removed.
    """
        ...
    @overload
    @classmethod
    def earliestValue(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns an {@link identity} time series with the earliest available value from the input time series. If the original time series is missing then returns a fully missing time series.
    
    Example:
    
    TS.data:
    ```
          0        5       2.7
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    TS.missing:
    ```
         100       0         0
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    `earliestValue(TS)` returns {@link identity} TS:
    ```
          5        5         5
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    
    Examples:
    
    `earliestValue(normalized.data.quantity)`
    
    `earliestValue(sum(normalized.data.quantity))`
    
    @param timeseries
            Input time series.
    @return An {@link identity} time series with the earliest available value from the input time series, with unit if any.
    """
        ...
    @overload
    @classmethod
    def earliestValue(cls, array: Array[Any]) -> Any:
    """
    Returns the first element of the input array.
    
    Example:
    
    `array = [10,12,3,4,5]`
    
    `>>> earliestValue(array)`
    
    `10`
    
    @param array
            Input array.
    @return The first element of the array.
    """
        ...
    @overload
    @classmethod
    def latestValue(cls, timeseries: Timeseries[Any]) -> Timeseries[Any]:
    """
    Returns an {@link identity} time series with the latest available value from the input time series. If the original time series is missing, then returns a fully missing time series.
    
    Example:
    
    TS.data:
    ```
          0        5       2.7
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    TS.missing:
    ```
         100       0         0
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    `latestValue(TS)` returns {@link identity} TS:
    ```
          2.7     2.7      2.7
     |--------|--------|--------|
    
     t1      t2        t3       t4
     ```
    
    Examples:
    
    `latestValue(normalized.data.quantity)`
    
    `latestValue(sum(normalized.data.quantity))`
    
    @param timeseries
            Input time series.
    @return An {@link identity} time series with the latest available value from the input time series, with unit if any.
    """
        ...
    @overload
    @classmethod
    def latestValue(cls, array: Array[Any]) -> Any:
    """
    Returns the last element of the input array.
    
    Example:
    
    `array = [10,12,3,4,5]`
    
    `>>> latestValue(array)`
    
    `5`
    
    @param array
            Input array.
    @return The last element of the array.
    """
        ...
    @classmethod
    def makeMissing(cls, missingPercent: int, value: float, unitId: str) -> Timeseries[Any]:
    """
    API to create a time series with a specified value and unit, and with the missing of a given percentage between 0 and 100. Missing values will be snapped to the right of the time period.
    
    Example:
    
    `>>> makeMissing(50, 10, 'kilowatt_hour')`
    
    @param missingPercent
                   Percentage of missing that is desired in the result. Value between 0 and 100.
    @param value
                  Value of the data point while keeping missing. Values will be same in all intervals.
    @param unitId
                  Unit for the values.
    @return A time series with the above-mentioned specification.
    """
        ...
    @classmethod
    def makeEstimates(cls, estimatePercent: int, value: float, unitId: str) -> Timeseries[Any]:
    """
    API to create a time series with a specified value and unit, and with a specified estimate (expressed in percentage). Estimate values will be snapped to the right of the time period.
    
    Example:
    
    `>>> makeEstimates(50, 10, 'kilowatt_hour')`
    
    @param estimatePercent
               Percentage of estimate that is desired in the result. Value between 0 and 100.
    @param value
               Value of the data point while maintaining the estimate. Values will be same in all intervals.
    @param unitId
               Unit for the values.
    @return A time series with the above-mentioned specification.
    """
        ...
    @classmethod
    def safeId(cls, id: str) -> str:
    """
    Returns a value that is unique with a very high probability, and that is safe to be used as {@link Persistable#id} value, for an arbitrary input.
    
    @return A unique value (with a very high probability) that is safe to be used as {@link Persistable#id} value, for arbitrary input.
    """
        ...
    @classmethod
    def convertToTimeZone(cls, timeZone: str, dt: datetime) -> Union[datetime]:
    """
    Convert the input into a specific time zone.
    
    @param timeZone
               Desired time zone {@link TimeZone}.
    @param dt
               Date that should be converted.
    @return Object converted so that it is in the desired time zone.
    """
        ...
    @classmethod
    def treatAsTimeZone(cls, timeZone: str, dt: datetime) -> Union[datetime]:
    """
     Treats the input as being in a specific time zone. The function will drop any current time zone that is present in the input date.
    
     Examples:
    
     `>>> treatAsTimeZone('UTC', dateTime('2010-01-01T00:00:00'))`
    
     `"2010-01-01T00:00:00Z"`
    
     `>>> treatAsTimeZone('America/Los_Angeles', dateTime('2010-01-01T00:00:00Z'))`
    
    `"2010-01-01T00:00:00-08:00"`
    
     @param timeZone
                Desired time zone {@link TimeZone}.
     @param dt
                Date that should be treated as in the desired time zone.
     @return Object cast in the desired time zone.
    """
        ...
    @classmethod
    def arrayAgg(cls, expr: str) -> Union[Array[Any]]:
    """
    IMPORTANT: This function can only be used as a projection in a call to {@link Persistable#evaluate}.  It is not
    valid for filtering or any other evaluation (e.g. stored calc fields).  It is also only supported when the db
    engine performs the evaluate and the backing datastore is a Postgres database.
    
    Returns an array of values in a cell for a projection for the specified `expr`.
    
    @param expr
           The expression to return the array for.  If the evaluate  is grouped then this expression MUST NOT
           traverse any collections and MUST evaluate to a scalar value (e.g. field path to a primitive field or
           entity type reference field)  and the cell for the projection in each tuple will contain an array of
           values evaluated for the group.
    
           If the evaluate is not grouped then the expression should be a field path for an entity collection field
           or a primitive or entity type reference field in a collection.  Nested collections are not supported.
           In this case the cell for the projection in each tuple will contain an array of the values in the
           collection for each row.
    
    @return An arry as the value for a cell for a projection in a tuple returned from {@link Persistable#evaluate}.
            The cell will actually contain an Obj with a field called `data` that contains the C3 array.
    """
        ...
    @classmethod
    def arrayAggAsString(cls, expr: str, delimiter: str=None) -> Union[str]:
    """
    IMPORTANT: This function can only be used as a projection in a call to {@link Persistable#evaluate}.  It is not
    valid for filtering or any other evaluation (e.g. stored calc fields).  It is also only supported when the db
    engine performs the evaluate and the backing datastore is a Postgres database.
    
    Similar to {@link arrayAgg} but returns a concatenated string representation in a cell for a projection of
    an array of values for the specified `expr`.
    
    @param expr
           The expression to return the concatenated string representation of an array for.  If the evaluate
           is grouped then this expression MUST NOT traverse any collections and MUST evaluate to a scalar value
           (e.g. field path to a primitive field or entity type reference field) and the cell for the projection
           in each tuple will contain the concatenated string for the group.  If the expression is an entity
           reference field, the value of each entry in the concatenated string will be the obj's id.
    
           If the evaluate is not grouped then the expression should be a field path for an entity collection field
           or a primitive or entity type reference field in a collection.  Nested collections are not supported.
           In this case the cell for the projection in each tuple will contain the concatenated string of the
           values in the collection for each row.
    
    @param delimiter:
           Optional delimiter to separate the values in the concatenated string.  The default if not specified is
           ",".
    
    @return A concatenated string representation of an arry as the value for a cell for a projection in a tuple
            returned from {@link Persistable#evaluate}.
    """
        ...
    @classmethod
    def compact(cls, array: Array[Any]=None) -> Union[Array[Any]]:
    """
    Drops any null elements from the input array
    E.g.
    `compact([1,2,3]) => [1,2,3]`
    `compact([1,2,null]) => [1,2]`
    `compact([null]) => []`
    `compact([]) => []`
    `compact([null, null]) => []`
    
    @param array
           Input array to be compacted. It may contain null elements.
    @return A new array with all null elements removed.
    """
        ...
    @classmethod
    def flatten(cls, array: Array[Array[Any]]=None, shallow: bool=None) -> Union[Array[Any]]:
    """
    Flattens the input array. If the input is a 2D array, it will be flattened to a 1D array.
    E.g.
    `flatten([[1,2],[3,4]]) => [1,2,3,4]`
    `flatten([[1,2],[3,[4]]]) => [1,2,3,4]`
    `flatten([1,2,3]) => [1,2,3]`
    `flatten([1,[2,[3]]], true) => [1,2,[3]]`
    `flatten([1,[2,[3]]], false) => [1,2,3]`
    
    @param array
           Input array to be flattened. It may contain nested arrays.
    @param shallow
           If true, only flattens one level deep. If false, flattens all levels.
    @return A new array with all nested arrays flattened.
    """
        ...
    @classmethod
    def userInformation(cls, userId: str) -> Union[User]:
    """
    Initialize the createdByUser field from {@link UserInformation}
    
    @param userId
           The ID of the user to get information for.
    @return The User object for the given ID.
    """
        ...
    @classmethod
    def parseJobErrorMessage(cls, jobRunErrorDetailId: str, modelConfigTag: bool='false') -> Union[str]:
    """
    Used to parse the error message of a {@link JobRunErrorDetail} linked to a Job type in case of workflow failure.
    Recieves a {@link JobRunErrorDetail}'s id which was created after the Workflow.Run failed.
    In the case the triggered error comes from a ModelConfigRun, it will recieve a `modelConfigTag` with a true value.
    This flag disntiction is important as the ModelConfigRun can fail in different stages, from Model Creation to Model Training.
    The function returns a string with the parsed error message, if it's a known, user readable error (Application side),
    it'll populate it accordingly, in case its unknown, or non readable (Internal/Server/Compiler Error), it will fallback to a default message.
    
    @param jobRunErrorDetailId
           The ID of the JobRunErrorDetail to parse.
    @param modelConfigTag
           Flag indicating if the error comes from a ModelConfigRun.
    @return The parsed error message.
    """
        ...
    @classmethod
    def getConfigValue(cls, configTypeName: str, fieldName: str) -> Union[Any]:
    """
    Used to fetch values from {@link Config} types in expressions
    
    @param configTypeName
           The name of the config type.
    @param fieldName
           The name of the field to get the value for.
    @return The value of the config field.
    """
        ...
    @classmethod
    def evalMetricOnExpectedSensor(cls, metricName: str, expectedSensorId: str, srcId: str=None, interval: str=None, range: TimeRange=None) -> Union[Timeseries[Any]]:
    """
    Used in metric expressions on {@link ReliabilityAsset} to evaluate metrics defined on the
    {@link Sensor} type, according to a given {@link ExpectedSensor} in the context of the
    {@link ReliabilityAsset} being evaluated on.
    
    Primarily intended for complex metrics representing ML features such as the Quantity metric,
    to avoid metric evaluations on {@link ReliabilityAsset} which use bindings.
    
    @param metricName
           The name of the metric to evaluate.
    @param expectedSensorId
           The ID of the expected sensor.
    @param srcId
           The source ID.
    @param interval
           The interval for the metric.
    @param range
           The time range for the metric.
    @return The timeseries data for the metric.
    """
        ...
    @classmethod
    def expectedSensor(cls, sensorId: str, assetId: str, interval: str=None, range: TimeRange=None) -> Timeseries[Any]:
    """
    Used in metric expressions on {@link ReliabilityAsset} to evaluate masks expressions for {@link ExpectedSensor}
    
    @param sensorId
           The ID of the sensor.
    @param assetId
           The ID of the asset.
    @param interval
           The interval for the sensor data.
    @param range
           The time range for the sensor data.
    @return The timeseries data for the sensor.
    """
        ...
    @classmethod
    def sensor(cls, sensorId: str, assetId: str, interval: str=None, range: TimeRange=None) -> Timeseries[Any]:
    """
    Used in metric expressions on {@link ReliabilityAsset} to evaluate masks expressions for {@link Sensor}
    
    @param sensorId
           The ID of the sensor.
    @param assetId
           The ID of the asset.
    @param interval
           The interval for the sensor data.
    @param range
           The time range for the sensor data.
    @return The timeseries data for the sensor.
    """
        ...
    @classmethod
    def evalSensorForAnyAsset(cls, sensorId: str, interval: str=None, range: TimeRange=None) -> Union[Timeseries[Any]]:
    """
    Used in metric expressions on {@link ReliabilityAsset} to evaluate sensor expressions for any asset.
    This expressions focus is to create sensor flexibility in generating features for {@link ReliabilityAsset}s
    that do not have a direct relationship with the sensor.
    
    @param sensorId
           The ID of the sensor.
    @param interval
           The interval for the sensor data.
    @param range
           The time range for the sensor data.
    @return The timeseries data for the sensor.
    """
        ...
    @classmethod
    def getAssetImportanceName(cls, translationMap: any=None, fallback: str=None) -> Union[str]:
    """
    Used to get the display name for the specific {@link ReliabilityAssetImportance} level for a particular {@link ReliabilityAsset}.
    Takes translationMap from {@link ReliabilityAssetImportance} for a specific entity.
    @param translationMap
            It contains locale as keys and the corresponding translations as values.
             Ex: { en: 'EnglishTranslation', es: 'SpanishTranslation',...}.
    @param fallback
            name of the assetImportanceLevel
            This will be fallback param if the translation is not found for the current locale.
    @return The value for the current locale key in the translationMap if not found returns the fallback.
    """
        ...

