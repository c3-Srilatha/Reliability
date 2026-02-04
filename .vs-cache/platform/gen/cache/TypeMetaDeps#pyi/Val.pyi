#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.LambdaType import LambdaType
from c3.platform.Pkg import Pkg
from c3.platform.Include import Include
from c3.platform.MethodType import MethodType
from c3.platform.Triple import Triple
from c3.platform.EventStream import EventStream
from c3.platform.TupleFieldType import TupleFieldType
from c3.platform.Collection import Collection
from c3.platform.Method import Method
from c3.platform.Primitive import Primitive
from c3.platform.ReferenceType import ReferenceType
from c3.platform.AggSpec import AggSpec
from c3.platform.FieldType import FieldType
from c3.platform.ValueMergeSpec import ValueMergeSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.HyperLogLog import HyperLogLog
from c3.platform.Pair import Pair
from c3.platform.PrimitiveType import PrimitiveType
from c3.platform.Iterator import Iterator
from c3.platform.TypeMeta import TypeMeta
from c3.platform.Value import Value
from c3.platform.WithType import WithType
from c3.platform.OpSpec import OpSpec
from c3.platform.Iterable import Iterable
from c3.platform.Tuple import Tuple

# Python definitions for the C3 type Val


class Val(Value):
    """
    @remarks this represents a made instance of Val
    """
    def __init__(self) -> None: ...

    @classmethod
    def invalidAggMsg(cls, aggOp: str, vt: ValueType) -> Union[str]:
        ...
    @classmethod
    def invalidBinaryOpMsg(cls, binaryOp: str, left: ValueType, right: ValueType) -> Union[str]:
        ...
    @overload
    @classmethod
    def myType(cls) -> Union[Type]:
        ...
    @overload
    @classmethod
    def myType(cls, pkg: Pkg) -> Union[Type]:
        ...
    @classmethod
    def allowsNull(cls, ft: FieldType) -> bool:
    """
    @return if the field could be null.
    """
        ...
    @classmethod
    def approximateDistinctCount(cls, hlls: Array[Map[int, HyperLogLog]]=None) -> Union[Map[int, int]]:
        ...
    @classmethod
    def at(cls, bindings: Map[str, Any], path: str) -> Union[Any]:
        ...
    @classmethod
    def binop(cls, op: str, lhs: Any, rhs: Any) -> Union[Any]:
    """
    Runtime simulation of numeric binary operator logic. This handles string concatenation for the plus operator
    or a NaN value if either side is not a numeric value for other operators as would JavaScript.
    
    If both operands are integers, the return value is an integer, except for division and exponentiation which
    always return a double. The same goes for BigDecimal values. Otherwise, if both operands are numbers double
    values are returned. Note that `null` values are treated as `0` for this purpose.
    
    If either operand is not a number the return value is `NaN`, except for addition where the return value is the
    string concatenation and the inequalities where the return value is boolean.
    
    
    The standard JavaScript arithmetic operators are supported: `+`, `-`, `*`, `/`, `%` and `**` as well as the
    bitwise operators `|`, `&`, `<<`, `>>` and `>>>` and logical operators `==`, `===`, `!=`, `!==`, `<`, `<=',
    '>' and '>='.
    """
        ...
    @classmethod
    def collect(cls, elements: Iterator[Any]) -> Union[Array[Any]]:
        ...
    @classmethod
    def batch(cls, any: Any, batchSize: int) -> Union[Any]:
        ...
    @classmethod
    def commonMixin(cls, types: Array[TypeMeta]=None) -> Union[TypeMeta]:
    """
    @return most generic common mixin between provided types
    """
        ...
    @overload
    @classmethod
    def compare(cls, v1: float, v2: float) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: bool=None, v2: bool=None) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: int, v2: int) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: any, v2: any) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: datetime, v2: datetime) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: float, v2: float) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: float, v2: float) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: int, v2: int) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: any, v2: any) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: int, v2: int) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: float, v2: float) -> int:
        ...
    @overload
    @classmethod
    def compare(cls, v1: str, v2: str) -> int:
        ...
    @classmethod
    def compareIterables(cls, v1: Iterable[Any], v2: Iterable[Any]) -> int:
        ...
    @overload
    @classmethod
    def compareValues(cls, one: Any, two: Any) -> int:
    """
    Compare any two values for sorting purposes. If these values are of the same type, and that type is comparable,
    this produces a natural sorting order. If the values are not comparable, an arbitrary but consistent ordering is
    returned. Nulls sort less than non-null values.
    
    @return 1 if one is greater, -1 if two is greater, and 0 if equal
    """
        ...
    @overload
    @classmethod
    def compareValues(cls, one: Any, two: Any, nullIsGreater: bool=None) -> int:
    """
    Compare any two values for sorting purposes. If these values are of the same type, and that type is comparable,
    this produces a natural sorting order. If the values are not comparable, an arbitrary but consistent ordering is
    returned. Nulls sort less than non-null values, unless the third argument is true.
    
    @param nullIsGreater
           treat null values as greater
    @return 1 if one is greater, -1 if two is greater, and 0 if equal
    """
        ...
    @overload
    @classmethod
    def compareValues(cls, v1: Any, v2: Any, rt: ValueType, spec: OpSpec, primCompare: Callable[[Union[Any], Union[Any]], bool], comparator: Any) -> Union[Any]:
        ...
    @classmethod
    def compareWithNullLogic(cls, v1: Any, v2: Any, comparator: Any) -> int:
    """
    @return result of the given comparator with null values being < then non null values
    """
        ...
    @classmethod
    def concatBinary(cls, b1: any, b2: any) -> Union[any]:
    """
    @return a new binary value that is the concatentation of the two specified values
    """
        ...
    @overload
    @classmethod
    def consumeFieldValue(cls, obj: Obj, ft: FieldType, v: Any, action: Callable[[FieldType, Union[Any]]]=None) -> None:
        ...
    @overload
    @classmethod
    def consumeFieldValue(cls, obj: Obj, ft: FieldType, v: Any, spec: ValueSpec, action: Callable[[FieldType, Union[Any]]]=None) -> None:
        ...
    @overload
    @classmethod
    def consumeFieldValue(cls, obj: Obj, ft: FieldType, v: Any, vt: ValueType, isEmptyValue: bool, spec: ValueSpec, action: Callable[[FieldType, Union[Any]]]=None) -> None:
        ...
    @overload
    @classmethod
    def consumeFieldValue(cls, ft: TupleFieldType, v: Any, spec: ValueSpec, action: Callable[[TupleFieldType, Union[Any]]]=None) -> None:
        ...
    @overload
    @classmethod
    def consumeFieldValue(cls, obj: Obj, field: str, action: Callable[[Union[FieldType], Union[Any]]]) -> None:
        ...
    @overload
    @classmethod
    def count(cls, hlls: Array[Map[int, HyperLogLog]]=None) -> Union[Map[int, int]]:
        ...
    @overload
    @classmethod
    def count(cls, a: Any, b: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def count(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
    """
    @return count of two values;
            It is different from add such that the two arguments are of the same type
    """
        ...
    @classmethod
    def enumFieldType(cls, enumDeclaredDefault: str, pkg: Pkg) -> Union[ValueType]:
    """
    @return enum field value type based on declared default value
    """
        ...
    @classmethod
    def defaultValue(cls, expr: Any, valueType: ValueType, obj: Obj, context: Callable[[], Union[str]]) -> Union[Any]:
    """
    @return default value from default expression
    """
        ...
    @overload
    @classmethod
    def dflt(cls, v: Any=None, dflt: Callable[[], Union[Any]]=None) -> Union[Any]:
    """
    @return given value or application of `dflt` lambda if value is null. e.g. dflt(user, () -> C3.user())
    """
        ...
    @overload
    @classmethod
    def dflt(cls, v: Any=None, dflt: Callable[[], Union[Any]]=None, failIfMissing: bool=None) -> Union[Any]:
    """
    @return given value or application of `dflt` lambda if value is null; and optionally checks that final value is
            not missing. e.g. dflt(user, () -> C3.user(), true)
    """
        ...
    @overload
    @classmethod
    def dflt(cls, v: Any=None, dflt: Callable[[], Union[Any]]=None, failIfMissing: bool=None, what: str=None, val: str=None) -> Union[Any]:
    """
    @return given value or application of `dflt` lambda if value is null; and optionally checks that final value is
            not missing. e.g. dflt(user, () -> C3.user(), "User", C3.userId())
    """
        ...
    @overload
    @classmethod
    def ensureBoxed(cls, v: Any) -> Union[WithType]:
    """
    @return boxed C3 value i.e. subtype of Obj or Boxed
    """
        ...
    @overload
    @classmethod
    def ensureBoxed(cls, v: Any, vt: ValueType) -> Union[WithType]:
    """
    @return boxed C3 value i.e. subtype of Obj or Boxed
    """
        ...
    @classmethod
    def shouldBoxReturnValue(cls, rt: ValueType) -> bool:
        ...
    @classmethod
    def equals(cls, v1: Any, v2: Any) -> bool:
    """
    Determine if two objects are "exactly the same value", handling `null`. Null is equal to itself
    and not equal to anything else. Different Objs are _not_ equal, even if of the same type and with the same
    fields, and the same goes for collections.
    
    @return true if the two values are exactly the same
    @see #logicallyEquals
    """
        ...
    @classmethod
    def logicallyEquals(cls, v1: Any, v2: Any) -> bool:
    """
    Determine if two objects are "logically the same value":
    
     - `null` is equal to itself and not equal to anything else,
     - strings with the same content are equal,
     - numbers with the same numeric value (ignoring type) are equal,
     - datetime values with the same instant and time zone are equal,
     - JSON values that serialize exactly the same are equal,
     - binary values that have the same bytes are equal.
    
    Different Objs are _not_ equal, even if of the same type and with the same fields, and the same goes for
    collections. There is one special case for {@link Identified}: two instances of the same type that have the same
    `id` value are the same (since they are stored using the same key in the database).
    
    Roughly speaking: for primitive types, the same logical value and for complex objects the same pointer.
    
    Note in general we use language-specific comparisons for faster behavior, such as {@link Collection#contains};
    this method should only be called when the extra logical equality logic is needed.
    Here's how the behavior of this method compares to the language-native equality:
    
    
    | language | number | datetime | binary | json |
    |----------|--------|----------|--------|------|
    | Python | same | instant | same | same |
    | JavaScript | same | instant | content | stringify |
    | Java | ignore type | same | same | same |
    
    @return true if the two values are logically the same
    @see #equals
    """
        ...
    @classmethod
    def isPolyLooseEqual(cls, actual: Any, expected: Any) -> bool:
    """
    Determine whether two objects are "loosely equal". This implements the double equal (==) logic in poly tests.
    
    The left-hand side (actual) must have the same contents as the right, but not exactly the same type. The
    comparison depends on the right-hand side (expected) value and the left-hand side may be converted for comparison.
    This allows language native objects in expectations.
    
    
    For made objects on the right-hand side, the actual value must be isA that type. For non-made objects, the actual
    value must just have the same contents.
    """
        ...
    @classmethod
    def isPolyStrictEqual(cls, actual: Any, expected: Any) -> bool:
    """
    Determine whether two objects are "strictly equal". This implements the triple equal (===) logic in poly tests.
    
    
    Both sides must have the same type _and_ value. This only works with made objects on both sides and is
    commutative as there is no coercion for comparison purposes.
    """
        ...
    @overload
    @classmethod
    def extractFieldValue(cls, type: TypeMeta, fieldType: FieldType, fields: Map[FieldType, Any]=None) -> Union[Any]:
        ...
    @overload
    @classmethod
    def extractFieldValue(cls, type: Type, fieldType: FieldType, fields: Map[FieldType, Any]=None) -> Union[Any]:
        ...
    @overload
    @classmethod
    def extractFieldValue(cls, type: TypeMeta, fieldType: FieldType, fields: Any=None) -> Union[Any]:
        ...
    @overload
    @classmethod
    def extractFieldValue(cls, type: Type, fieldType: FieldType, fields: Any=None) -> Union[Any]:
        ...
    @overload
    @classmethod
    def extractAnyFieldValue(cls, type: TypeMeta, fieldType: FieldType, fields: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def extractAnyFieldValue(cls, type: Type, fieldType: FieldType, fields: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def objFieldsByFieldType(cls, type: Type, fields: Any=None) -> Union[Map[FieldType, Any]]:
    """
    Converts the input fields (which should be positioned by FieldType's ordinal) into a Map
    """
        ...
    @overload
    @classmethod
    def objFieldsByFieldType(cls, type: TypeMeta, fields: Any=None) -> Union[Map[FieldType, Any]]:
    """
    Converts the input fields (which should be positioned by FieldType's ordinal) into a Map
    """
        ...
    @classmethod
    def field(cls, obj: Obj, field: str) -> Union[Any]:
    """
    @return value of the field for the given name; safe to pass nulls.
    """
        ...
    @overload
    @classmethod
    def fieldValue(cls, json: any, field: str, pkg: Pkg) -> Union[Any]:
        ...
    @overload
    @classmethod
    def fieldValue(cls, map: Map[Any, Any], field: str) -> Union[Any]:
        ...
    @overload
    @classmethod
    def fieldValue(cls, obj: Obj, field: str) -> Union[Any]:
        ...
    @overload
    @classmethod
    def fieldValue(cls, val: Any, field: str, pkg: Pkg) -> Union[Any]:
        ...
    @overload
    @classmethod
    def firstNotNull(cls, *actions: Array[Callable[[], Union[Any]]]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def firstNotNull(cls, *values: Array[Any]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def ge(cls, v1: Any, v2: Any) -> bool:
        ...
    @overload
    @classmethod
    def ge(cls, v1: Any, v2: Any, rt: ValueType, spec: OpSpec, primCompare: Callable[[Union[Any], Union[Any]], bool]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def gt(cls, v1: Any, v2: Any) -> bool:
        ...
    @overload
    @classmethod
    def gt(cls, v1: Any, v2: Any, rt: ValueType, spec: OpSpec, primCompare: Callable[[Union[Any], Union[Any]], bool]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def lt(cls, v1: Any, v2: Any, rt: ValueType, spec: OpSpec, primCompare: Callable[[Union[Any], Union[Any]], bool]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def lt(cls, v1: Any, v2: Any) -> bool:
        ...
    @overload
    @classmethod
    def le(cls, v1: Any, v2: Any, rt: ValueType, spec: OpSpec, primCompare: Callable[[Union[Any], Union[Any]], bool]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def le(cls, v1: Any, v2: Any) -> bool:
        ...
    @classmethod
    def eq(cls, v1: Any, v2: Any, rt: ValueType, spec: OpSpec, primCompare: Callable[[Union[Any], Union[Any]], bool]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def neq(cls, v1: Any, v2: Any, rt: ValueType, spec: OpSpec, primCompare: Callable[[Union[Any], Union[Any]], bool]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def neq(cls, v1: Any, v2: Any) -> bool:
        ...
    @classmethod
    def hasElements(cls, map: Map[str, Any]=None, elements: Map[str, Any]=None) -> bool:
    """
    @return true of given map contains same elements as input
    """
        ...
    @overload
    @classmethod
    def hasFields(cls, json: any, fields: Map[str, Any]=None) -> bool:
    """
    @return true of given json contains same fields as input
    """
        ...
    @overload
    @classmethod
    def hasFields(cls, o: Obj, fields: Map[str, Any]=None) -> bool:
    """
    @return true of given Obj contains same fields as input
    """
        ...
    @overload
    @classmethod
    def hasFields(cls, value: Any, fields: Map[str, Any]=None) -> bool:
    """
    @return true of given value contains same fields or elements if its it a map as input
    """
        ...
    @classmethod
    def hyperLogLogForCsv(cls, iter: Any) -> Union[Map[int, HyperLogLog]]:
        ...
    @classmethod
    def isA(cls, vt1: ValueType, vt2: ValueType) -> bool:
        ...
    @classmethod
    def isArray(cls, v: Any) -> bool:
    """
    Return whether or not this value is a made Array.
    """
        ...
    @classmethod
    def isCollection(cls, value: Any) -> bool:
    """
    Return whether or not this value is a made Collection.
    """
        ...
    @classmethod
    def isData(cls, value: Any) -> bool:
    """
    Return whether or not this value is a Data
    """
        ...
    @classmethod
    def isMap(cls, value: Any) -> bool:
    """
    Return whether or not this value is a made Map.
    """
        ...
    @classmethod
    def isNamedTuple(cls, value: Any) -> bool:
    """
    Return whether or not this value is a made named Tuple
    """
        ...
    @classmethod
    def isUnnamedTuple(cls, value: Any) -> bool:
    """
    Return whether or not this value is a made unnamed Tuple
    """
        ...
    @classmethod
    def isTuple(cls, value: Any) -> bool:
    """
    Return whether or not this value is a made Tuple
    """
        ...
    @classmethod
    def isSet(cls, value: Any) -> bool:
    """
    Return whether or not this value is a made Set.
    """
        ...
    @classmethod
    def isStream(cls, value: Any) -> bool:
    """
    Return whether or not this value is a made Stream.
    """
        ...
    @classmethod
    def isInstance(cls, value: Any) -> bool:
    """
    Return whether or not this value is an instance of a declared Type, including ones that don't mixin
    Obj (or even WithType). Note that this includes collections and many other non-Obj values.
    """
        ...
    @classmethod
    def isInstanceOf(cls, value: Any, type: Type) -> bool:
    """
    Return whether or not this value is an instance of the specified Type, including ones that don't mixin
    Obj (or even WithType).
    """
        ...
    @classmethod
    def isObj(cls, value: Any) -> bool:
    """
    Return whether or not this value is a made Obj (instance of a type that mixes in Obj).
    """
        ...
    @classmethod
    def isType(cls, value: Any) -> bool:
    """
    Return whether or not this value is a Type instance.
    """
        ...
    @classmethod
    def isWithType(cls, value: Any) -> bool:
    """
    Return whether or not this value is a WithType instance (instance of a type that mixes in WithType).
    Note that this includes collections and many other non-Obj values.
    """
        ...
    @classmethod
    def isMissing(cls, value: Any) -> bool:
    """
    @param value
    @return true if value is null or NaN.
    """
        ...
    @classmethod
    def isValueMissing(cls, value: Any, rt: ValueType) -> Union[Any]:
    """
    @param value
    @return true if value is null or NaN.
    """
        ...
    @classmethod
    def isEmpty(cls, value: Any) -> bool:
    """
    @return is the value effectively empty i.e. null, empty string, empty collection etc.
    """
        ...
    @classmethod
    def allowsEmpty(cls, value: Any) -> bool:
    """
    @return if empty values should be allowed through
    """
        ...
    @classmethod
    def isNotEmpty(cls, value: Any) -> bool:
    """
    @return opposite of isEmpty
    """
        ...
    @overload
    @classmethod
    def isSame(cls, c1: Iterable[Any], c2: Iterable[Any]) -> bool:
    """
    @return true if provided arrays are same based on element comparison
    """
        ...
    @overload
    @classmethod
    def isSame(cls, s1: Set[Any], s2: Set[Any], comparator: Callable[[Union[Any], Union[Any]], bool]) -> bool:
    """
    @return true if provided sets have the same elements (order independent)
    """
        ...
    @overload
    @classmethod
    def isSame(cls, m1: Map[Any, Any], m2: Map[Any, Any], comparator: Callable[[Union[Any], Union[Any]], bool]) -> bool:
    """
    @return true if provided map collections are same based on key/value comparison, identical keys
    """
        ...
    @overload
    @classmethod
    def isSame(cls, m1: Map[Any, Any], m2: Map[Any, Any], keyComparator: Callable[[Union[Any], Union[Any]], bool], valueComparator: Callable[[Union[Any], Union[Any]], bool]) -> bool:
    """
    @return true if provided map collections are same based on key/value comparison, with key comparator
    """
        ...
    @overload
    @classmethod
    def isSame(cls, c1: Collection[Any], c2: Collection[Any], comparator: Callable[[Union[Any], Union[Any]], bool]) -> bool:
    """
    @return true if provided collections are same based element comparison
    """
        ...
    @overload
    @classmethod
    def isSame(cls, c1: Iterable[Any], c2: Iterable[Any], comparator: Callable[[Union[Any], Union[Any]], bool]) -> bool:
    """
    @return true if provided arrays are same based on element comparison
    """
        ...
    @overload
    @classmethod
    def isSame(cls, o1: Obj, o2: Obj, comparator: Callable[[Union[Any], Union[Any]], bool]) -> bool:
    """
    @return true if provided Objs are same based on field equality
    """
        ...
    @overload
    @classmethod
    def isSame(cls, t1: Tuple, t2: Tuple) -> bool:
    """
    @return true if provided tuples are the same based on field equality
    """
        ...
    @overload
    @classmethod
    def isSame(cls, t1: Tuple, t2: Tuple, comparator: Callable[[Union[Any], Union[Any]], bool]) -> bool:
    """
    @return true if provided tuples are the same based on field equality
    """
        ...
    @overload
    @classmethod
    def isSame(cls, v1: Any, v2: Any) -> bool:
    """
    @return true if provided values are the same
    """
        ...
    @overload
    @classmethod
    def isSame(cls, e: Any, eType: ValueType, other: Any) -> bool:
        ...
    @classmethod
    def isSameObject(cls, a: Any, b: Any) -> bool:
    """
    This method is used in poly tests to check that the values are the exact same instance (pointer). It corresponds
    the Java `==` operator, the JavaScript `===` operator and the Python `is` operator.
    
    
    Note that this is mostly meant for objects, not primitives, but can be used in poly tests for the most strict
    form of equality of primitive values. For example, in languages other than JavaScript, different numeric types
    will compare logical values, but for this method they will take into account the numeric type. For example,
    integer `0` and float `0.0` in Python will _not_ be isSameObject.
    """
        ...
    @classmethod
    def iterator(cls, *elements: Array[Any]) -> Union[Iterator[Any]]:
        ...
    @classmethod
    def key(cls, value: Value) -> Union[str]:
    """
    Extract string key from a provided C3 type instance.
    """
        ...
    @classmethod
    def eventStreams(cls, value: Any) -> Union[Array[EventStream[Any]]]:
    """
    @param value
           any C3 value.
    @return all EventStreams from C3 value, recursively looking up fields.
    """
        ...
    @classmethod
    def logKey(cls, value: Value) -> Union[str]:
    """
    Extract string representation of provided C3 type instance useful for logging / debugging.
    """
        ...
    @overload
    @classmethod
    def max(cls, v1: Any, v2: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def max(cls, v1: Any, v2: Any, spec: OpSpec) -> Union[Any]:
    """
    @return return max of 2 values
    """
        ...
    @overload
    @classmethod
    def merge(cls, v1: Any, v2: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def merge(cls, v1: Any, v2: Any, merge: Callable[[Union[Any], Union[Any]], Union[Any]]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def merge(cls, v1: Any, v2: Any, ft: FieldType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def mergeObjs(cls, o1: Any, o2: Any) -> Union[Any]:
    """
    @return merged Obj instance.
    """
        ...
    @overload
    @classmethod
    def mergeObjs(cls, o1: Any, o2: Any, spec: ValueMergeSpec) -> Union[Any]:
    """
    @return merged Obj instance with ValueMergeSpec
    """
        ...
    @classmethod
    def toClass(cls, o1: Type) -> Union[Any]:
    """
    @return class of object
    @param o1
    """
        ...
    @overload
    @classmethod
    def min(cls, v1: Any, v2: Any) -> Union[Any]:
    """
    @return return min of 2 values
    """
        ...
    @overload
    @classmethod
    def min(cls, v1: Any, v2: Any, spec: OpSpec) -> Union[Any]:
    """
    @return return min of 2 values
    """
        ...
    @classmethod
    def pick(cls, target: Any, other: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def quote(cls, v: Any) -> Union[str]:
    """
    @return quoted value - i.e. if value is not a `null`, boolean or number then converts to string and wraps in
            double quotes and escapes special characters.
    """
        ...
    @overload
    @classmethod
    def quote(cls, v: Any, quoteChar: int) -> Union[str]:
    """
    @return quoted value - i.e. if value is not a `null`, boolean or number then converts to string and wraps in
            the specified quotes and escapes special characters.
    """
        ...
    @classmethod
    def require(cls, obj: Obj, whatRequiresValue: str, fieldThatIsRequired: str) -> None:
        ...
    @classmethod
    def safeSpec(cls, spec: Any, type: Type) -> Union[Any]:
        ...
    @overload
    @classmethod
    def setFieldValue(cls, elem: Any, fieldName: str, value: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def setFieldValue(cls, elem: Any, fieldNames: Array[str]=None, values: Array[Any]=None) -> Union[Any]:
        ...
    @classmethod
    def sortKeyComparatror(cls, descending: bool, srcValueType: ValueType, sortKey: Callable[[Union[Any]], Union[Any]]) -> Union[Callable[[Union[Any], Union[Any]], Union[int]]]:
    """
    @param
           source Java class
    @param descending
           if true use opposite of natural order
    @param srcValueType
           value type of the source that is passed to sortKey lambda
    @param sortKey
           lambda to extract sort key value
    @return comparator of source keys.
    """
        ...
    @overload
    @classmethod
    def sum(cls, a: Any, b: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def sum(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
    """
    @return sum of two values;
            It is different from add such that the two arguments are of the same type
    """
        ...
    @classmethod
    def avgPrimitiveFields(cls, a: Stream[Any], sumRt: ValueType, countRt: ValueType) -> Union[Pair[Any, Any]]:
    """
    Optimized avg implementation when return type is a reference and only contains primitive fields
    """
        ...
    @classmethod
    def sumPrimitiveFields(cls, a: Stream[Any], sumRt: ValueType) -> Union[Any]:
    """
    Optimized sum implementation when return type is a reference and only contains primitive fields
    """
        ...
    @overload
    @classmethod
    def sumFingerprint(cls, f1: int, f2: int) -> int:
    """
    Produce a cumulative hash fingerprint by adding the specified prior fingerprint to the 64-bit hash fingerprint
    of the specified value.
    """
        ...
    @overload
    @classmethod
    def sumFingerprint(cls, f: int, v: Any, allIdentifiedRefFields: bool, trackRecursiveRefs: bool, traversedRefs: SetBuilder[Obj]) -> int:
    """
    Produce a cumulative hash fingerprint by adding the specified prior fingerprint to the 64-bit hash fingerprint
    of the specified value.
    
    @param f
           prior fingerprint
    @param allIdentifiedRefFields
           whether to include reference field values present in memory
    @param trackRecursiveRefs
           whether to track references to avoid infinite recursion on cyclic structures
    @param traversedRefs
           previously traversed references
    @return cumulative fingerprint
    """
        ...
    @overload
    @classmethod
    def sumFingerprint(cls, f: int, hcf: Any, v: Any, allIdentifiedRefFields: bool, trackRecursiveRefs: bool, traversedRefs: SetBuilder[Obj]) -> int:
        ...
    @classmethod
    def toAnyFunc(cls, value: Any, type: LambdaType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def toBinary(cls, bytes: Array[int]=None) -> Union[any]:
        ...
    @overload
    @classmethod
    def toBinary(cls, value: str) -> Union[any]:
        ...
    @classmethod
    def toBool(cls, value: Any) -> bool:
        ...
    @classmethod
    def toDbl(cls, elementType: ValueType, n: Any, failIfInvalid: bool=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def toJavaRuntime(cls, vt: ValueType, v: Any, failIfInvalid: bool=None) -> Union[Any]:
    """
    Convert a c3 object to java runtime class
    
    @param vt
           value type of object.
    @param v
           c3 object to convert.
    @param failIfInvalid
           whether to throw error if the conversion fails.
    @see {@link Ann.Java#runtimeClassName}
    """
        ...
    @overload
    @classmethod
    def toJavaRuntime(cls, vt: ValueType, v: Any, converter: Any, failIfInvalid: bool=None) -> Union[Any]:
        ...
    @classmethod
    def toJson(cls, value: Any) -> Union[any]:
        ...
    @classmethod
    def toTypedJson(cls, value: Any, actionRequirement: str) -> Union[any]:
    """
    Return the JSON that provides the canonical serialization of the specified C3 value.
    """
        ...
    @classmethod
    def toJsonString(cls, value: Any) -> Union[str]:
    """
    @return value converted to a single line json string
    """
        ...
    @classmethod
    def toJsRuntime(cls, vt: ValueType, v: Any) -> Union[Any]:
    """
    Convert a c3 value to Rhino Java Script runtime class
    """
        ...
    @classmethod
    def toJsString(cls, vt: ValueType, v: Any) -> Union[str]:
    """
    Convert a primitive value to JavaScript literal syntax.
    """
        ...
    @classmethod
    def toPyString(cls, vt: ValueType, v: Any) -> Union[str]:
    """
    Convert a primitive value to Python literal syntax.
    """
        ...
    @overload
    @classmethod
    def toNative(cls, value: Any) -> Union[Any]:
    """
    Convert any value into its native equivalent. If this is an instance that mixes **WithToNative**, that
    method is called, otherwise the existing value is returned.
    """
        ...
    @overload
    @classmethod
    def toNative(cls, value: Any, doNotCopy: bool=None) -> Union[Any]:
    """
    Convert any value into its native equivalent. If this is an instance that mixes **WithToNative**, that
    method is called, otherwise the existing value is returned.
    
    In addition, instances of Obj are converted to plain JavaScript objects and Python dicts, containing only the
    set field values.
    
    
    In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
    access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
    exposed, copying if necessary.
    """
        ...
    @overload
    @classmethod
    def toNumber(cls, value: Any) -> Union[float]:
    """
    Convert any value into a number. If the conversion is not possible, return `NaN` (double).
    """
        ...
    @overload
    @classmethod
    def toNumber(cls, value: Any, failIfInvalid: bool=None) -> Union[float]:
    """
    Convert any value into a number. If the conversion is not possible, throw an exception if failIfInvalid is true
    or return `NaN` (double) otherwise.
    """
        ...
    @overload
    @classmethod
    def toObj(cls, value: Any, ths: ReferenceType, convertValue: bool=None, failIfInvalid: bool=None, for_: str=None) -> Union[Obj]:
        ...
    @overload
    @classmethod
    def toObj(cls, value: Any, ths: ReferenceType, convertValue: bool=None, failIfInvalid: bool=None, for_: str=None, invalidFieldHandler: Callable[[Union[Any], Union[ObjBuilder[Obj]]]]=None) -> Union[Obj]:
        ...
    @classmethod
    def toPrettyJsonSTring(cls, v: Any) -> Union[str]:
    """
    @return value converted to a potentially multi-line json string with "pretty" indentation
    """
        ...
    @classmethod
    def toPrimitive(cls, v: Any, ths: PrimitiveType, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
        ...
    @overload
    @classmethod
    def valueToString(cls, other: ValueType) -> Union[str]:
        ...
    @overload
    @classmethod
    def valueToString(cls, value: Any) -> Union[str]:
    """
    Converts a value to its string representation. Returns "null" for null values.
    
    @see #formatValue(Object) for display-friendly formatting with number formatting
    """
        ...
    @classmethod
    def formatValue(cls, value: Any) -> Union[str]:
    """
    Formats a value for display. Returns empty string for null values.
    Numbers are formatted with locale-specific grouping (e.g., "1,234,567").
    
    @see #valueToString(Object) for raw string conversion (returns "null" for null)
    """
        ...
    @overload
    @classmethod
    def unboxValue(cls, value: Any, failIfNone: bool=None) -> Union[Any]:
        ...
    @overload
    @classmethod
    def unboxValue(cls, value: Obj, failIfNone: bool=None) -> Union[Any]:
        ...
    @classmethod
    def unquote(cls, v: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def validateThisArg(cls, thisArg: Any, method: Method, overload: int) -> Union[Any]:
        ...
    @overload
    @classmethod
    def validateThisArg(cls, thisArg: Any, mt: MethodType) -> Union[Any]:
        ...
    @classmethod
    def validateArg(cls, arg: Any, paramIndex: int) -> Union[Any]:
        ...
    @classmethod
    def validateSpec(cls, spec: Any, dflt: Callable[[], Union[Any]]) -> Union[Any]:
        ...
    @classmethod
    def valuesToString(cls, prefix: str, separator: str, suffix: str, *values: Array[Any]) -> Union[str]:
    """
    Prints provided values by prepending string with `prefix` and appending with `suffix` and by using `separator`
    string to split the value text.
    """
        ...
    @classmethod
    def visitPrimitive(cls, value: Any, visitor: Primitive) -> Union[Any]:
        ...
    @classmethod
    def visitValue(cls, value: Any, visitor: Any) -> Union[Any]:
        ...
    @classmethod
    def comparator(cls) -> Union[Any]:
        ...
    @classmethod
    def abs(cls, a: Any) -> Union[Any]:
        ...
    @classmethod
    def neg(cls, a: Any) -> Union[Any]:
        ...
    @classmethod
    def invert(cls, a: Any) -> Union[Any]:
        ...
    @classmethod
    def sumCount(cls, a: Any, b: Any, spec: OpSpec) -> Union[Any]:
    """
    @return sum of values while incrementing the count of values encountered
    """
        ...
    @classmethod
    def all(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def and(cls, a: Any, b: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def and(cls, a: Any, b: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def and(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec, primFunc: Callable[[Union[Any], Union[Any], Union[ValueType]], Union[Any]]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def or(cls, a: Any, b: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def or(cls, a: Any, b: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def or(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec, primFunc: Callable[[Union[Any], Union[Any], Union[ValueType]], Union[Any]]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def add(cls, a: Any, b: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def add(cls, a: Any, b: Any, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def add(cls, a: Any, b: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def add(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def add(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec, primFunc: Callable[[Union[Any], Union[Any], Union[ValueType]], Union[Any]]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def sub(cls, a: Any, b: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def sub(cls, a: Any, b: Any, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def sub(cls, a: Any, b: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def sub(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def sub(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec, primFunc: Callable[[Union[Any], Union[Any], Union[ValueType]], Union[Any]]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def floorDiv(cls, a: Any, b: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def floorDiv(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def floorDiv(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec, primFunc: Callable[[Union[Any], Union[Any], Union[ValueType]], Union[Any]]) -> Union[Any]:
    """
    @return generic floor division between numeric, Collection, and Obj types.
    """
        ...
    @overload
    @classmethod
    def mod(cls, a: Any, b: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def mod(cls, a: Any, b: Any, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def mod(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def mod(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec, primFunc: Callable[[Union[Any], Union[Any], Union[ValueType]], Union[Any]]) -> Union[Any]:
    """
    @return generic modulo for numeric, Collection, and Obj types.
    """
        ...
    @classmethod
    def round(cls, a: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def div(cls, a: Any, b: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def div(cls, a: Any, b: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def div(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def div(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec, primFunc: Callable[[Union[Any], Union[Any], Union[ValueType]], Union[Any]]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def div(cls, a: Any, b: int) -> Union[Any]:
    """
    This is different from the default implementation of `div` such that `null` is returned when `a` is null/empty.
    It is kept like that to correctly implement the higher order functions which uses div() internally.
    The default implementation, although fast, gives incorrect results for `null / b`.
    """
        ...
    @classmethod
    def fieldCount(cls, v: Any) -> int:
    """
    @return "field count" of a provided value: primitives have 1 field, Obj has data fields and collection elements
            are considered fields.
    """
        ...
    @classmethod
    def collectionFieldCount(cls, c: Iterable[Any]) -> int:
    """
    @return "field count" of a provided collection: primitives have 1 field, Obj has data fields and collection
            elements
            are considered fields. Returns number of unique fields in the entire collection.
    """
        ...
    @classmethod
    def fieldAt(cls, v: Any, fieldIndex: int) -> Union[Any]:
    """
    @return field count at index in the provided value: primitives have only 1 field, Obj has data fields and
            collection elements are considered fields.
    """
        ...
    @overload
    @classmethod
    def mul(cls, a: Any, b: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def mul(cls, a: Any, b: Any, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def mul(cls, a: Any, b: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def mul(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def mul(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec, primFunc: Callable[[Union[Any], Union[Any], Union[ValueType]], Union[Any]]) -> Union[Any]:
        ...
    @overload
    @classmethod
    def pow(cls, a: Any, b: Any) -> Union[Any]:
        ...
    @overload
    @classmethod
    def pow(cls, a: Any, b: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def pow(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
        ...
    @overload
    @classmethod
    def pow(cls, a: Any, b: Any, rt: ValueType, spec: OpSpec, primFunc: Callable[[Union[Any], Union[Any], Union[ValueType]], Union[Any]]) -> Union[Any]:
    """
    @return generic power(x, y) for numeric, Collection, and Obj types.
    """
        ...
    @classmethod
    def isNum(cls, value: Any) -> bool:
        ...
    @classmethod
    def isBinary(cls, value: Any) -> bool:
        ...
    @classmethod
    def isString(cls, value: Any) -> bool:
        ...
    @classmethod
    def isBool(cls, value: Any) -> bool:
        ...
    @classmethod
    def isDateTime(cls, value: Any) -> bool:
        ...
    @classmethod
    def isInt(cls, value: Any) -> bool:
        ...
    @classmethod
    def opUnaryFunction(cls, unaryOp: str, spec: OpSpec) -> Union[Callable[[Union[Any]], Union[Any]]]:
    """
    @return function for computing given UnaryOp
    """
        ...
    @classmethod
    def opAggFunction(cls, aggOp: str, spec: OpSpec, rt: ValueType) -> Union[Callable[[Union[Any], Union[Any]], Union[Any]]]:
    """
    @return function for computing given AggOp
    """
        ...
    @classmethod
    def opAggReturnType(cls, avt: ValueType, aggOp: str, spec: AggSpec) -> Union[ValueType]:
    """
    @return return type of given aggregation operator to given operand types
    """
        ...
    @classmethod
    def refTypeHasOnlyPrimitiveFields(cls, rt: ValueType) -> bool:
    """
    @return true if the value type is a reference type and all fields are primitives or fkey refs for optimizations
            for flat tables
    """
        ...
    @classmethod
    def opBinaryFunction(cls, binaryOp: str, rt: ValueType, spec: OpSpec) -> Union[Callable[[Union[Any], Union[Any]], Union[Any]]]:
    """
    @return function for computing given BinaryOp
    """
        ...
    @classmethod
    def opFlattenReturnTypeRecursive(cls, include: Include, vt: ValueType, columnNamePrefix: str, depth: int, fieldnamesToValueType: MapBuilder[str, ValueType]) -> None:
    """
    Recursively construct a map of column names to Value Type that represents the flatten
    view of the provided Include Path and depth arguments.
    
    @param include
           The Include child currently being processed.
    @param vt
           valueType of the current Field being traversed,
    @param columnNamePrefix
           The current column name prefix at this level of traversal
    @param depth
           The current depth value of the traversal
    @param fieldnamesToValueType
           A mapping of column names to value type that will represent the final object flattened view
    """
        ...
    @classmethod
    def opFlattenReturnType(cls, avt: ValueType, includeFields: str, depth: int) -> Union[ValueType]:
        ...
    @classmethod
    def mergeFlattenResults(cls, arr: Array[Any]=None) -> Union[Array[Map[str, Any]]]:
    """
    Apply cartesian product to the input Array and merge the inner map Objects.
    ex: child 1 is a collection, stores all returned value in a single row
    child1 : [ [ map ] , [ map1 ] , [ map1 ] ]
    child2 : [ [ map ] ]
    do cartesian product
    [ [ map , map ] ],
    [ map , map ] ],
    [ map , map ] ]
    ]
    merge each row as one map
    [ map, ,
    map, ,
    mapm
    ]
    
    @param arr
           An Array of Array each containing a map of fieldNames to field Content
    @return an Array of Map each being a merger of all maps grouped together after the
            cartesian product
    """
        ...
    @classmethod
    def opFlattenTraverseValues(cls, include: Include, vt: ValueType, fieldName: str, e: Obj, columnNamePrefix: str, depth: int) -> Union[Array[Map[str, Any]]]:
    """
    The main data traversal function that will extract the data from each element recursively
    and do the explode/flatten at every level. At each recursive step it returns an Array of
    Map of field Name to Field Object value that contains new rows generated by the lower levels,
    each flattened to match the object type created in opFlattenReturnType.
    
    @param include:
           The Include object currently being processed
    @param vt:
           valueType of the current Field being traversed
    @param fieldName:
           Field Name Being Traversed
    @param e:
           Value of the FieldName with value type vt
    @param columnNamePrefix:
           The current column name prefix at this level of traversal
    @param depth
           The current depth value of the traversal
    @return
    """
        ...
    @classmethod
    def opFlattenReturnValue(cls, et: ValueType, rt: ValueType, e: Obj, includeFields: str, depth: int) -> Union[Array[Obj]]:
        ...
    @classmethod
    def opBinaryReturnType(cls, avt: ValueType, bvt: ValueType, spec: OpSpec, binaryOp: str) -> Union[ValueType]:
    """
    @return return type of given binary operator application to given operand types
    """
        ...
    @classmethod
    def replace(cls, element: Any, mask: Any, other: Any) -> Union[Any]:
    """
    @return new object that has value(s) replaced based on mask
    """
        ...
    @overload
    @classmethod
    def fillMissing(cls, element: Any, value: Any, rt: ValueType) -> Union[Any]:
        ...
    @overload
    @classmethod
    def fillMissing(cls, element: Any, value: Any, rt: ValueType, spec: OpSpec) -> Union[Any]:
    """
    @return new object that has value(s) replaced based on mask
    """
        ...
    @classmethod
    def primaryKey(cls, v: Any) -> Union[Any]:
    """
    @return primary key of a given value
    """
        ...
    @classmethod
    def isTrue(cls, v: Any) -> bool:
    """
    @return true if provided value is "truthy"
    """
        ...
    @classmethod
    def replaceType(cls, v: Any, old: Type, new_: Type) -> Union[Any]:
    """
    Return new instance of value with all references to old type replaced by new
    """
        ...
    @classmethod
    def sliceArgs(cls, pkg: Pkg, fromPos: int, toPos: int, stride: int, size: Callable[[], Union[int]]) -> Union[Triple[int, int, int]]:
    """
    Helper function for resolving final arguments of {@link Collection#slice(long, Long, Long)}.
    
    @param size
           a lambda that retrieves the size of the Collection to be operated on
    """
        ...
    @classmethod
    def isBoxed(cls, v: Any) -> bool:
    """
    @return `true` if value is Boxed
    """
        ...
    @classmethod
    def unboxReturn(cls, v: Any, returnType: ValueType) -> Union[Any]:
    """
    @return unboxed return type
    """
        ...
    @classmethod
    def toTypeMeta(cls, t: Any, pkg: Pkg, restriction: TypeMeta) -> Union[TypeMeta]:
    """
    @return TypeMeta for a provided java value
    """
        ...
    @overload
    @classmethod
    def toDouble(cls, v: Any) -> float:
        ...
    @overload
    @classmethod
    def toDouble(cls, v: Any, dflt: float) -> float:
        ...
    @overload
    @classmethod
    def toFloat(cls, v: Any) -> float:
        ...
    @overload
    @classmethod
    def toFloat(cls, v: Any, dflt: float) -> float:
        ...
    @overload
    @classmethod
    def toInt(cls, v: Any) -> int:
        ...
    @overload
    @classmethod
    def toInt(cls, v: Any, dflt: int) -> int:
        ...
    @overload
    @classmethod
    def toInt32(cls, v: Any) -> int:
        ...
    @overload
    @classmethod
    def toInt32(cls, v: Any, dflt: int) -> int:
        ...
    @overload
    @classmethod
    def toInt16(cls, v: Any) -> int:
        ...
    @overload
    @classmethod
    def toInt16(cls, v: Any, dflt: int) -> int:
        ...
    @overload
    @classmethod
    def toByte(cls, v: Any) -> int:
        ...
    @overload
    @classmethod
    def toByte(cls, v: Any, dflt: int) -> int:
        ...
    @classmethod
    def toDateTime(cls, v: Any) -> Union[datetime]:
        ...
    @classmethod
    def inRange(cls, value: Any, minInclusive: Any, maxExclusive: Any) -> bool:
        ...
    @classmethod
    def versionIncMinor(cls, versionStr: str, inc: int) -> Union[str]:
        ...
    @classmethod
    def makeNative(cls, seed: int) -> Union[Any]:
    """
    Return a native object in the current runtime that cannot be remoted. It should always have a different pointer
    and not be natively equal to any other object. It must not be a valid value for any value type (other than
    `native`). Its string representation should be the seed value.
    """
        ...
    @classmethod
    def eachValueRecursive(cls, obj: Obj, action: Callable[[Union[ValueType], Union[Any]]]) -> None:
        ...

