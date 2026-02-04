#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.Timeseries.RandomSpec import Timeseries.RandomSpec
from c3.platform.Timeseries import Timeseries
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.Data.Column import Data.Column
from c3.platform.CollectionStdLib import CollectionStdLib
from c3.platform.Timeseries import Timeseries
from c3.platform.SampleSpec import SampleSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.TimeseriesSourceInfo import TimeseriesSourceInfo
from c3.platform.Timeseries import Timeseries
from c3.platform.Period import Period
from c3.platform.TimeseriesSpecBase import TimeseriesSpecBase
from c3.platform.TimeseriesBase import TimeseriesBase
from c3.platform.Collection import Collection
from c3.platform.DigestSpec import DigestSpec
from c3.platform.FieldType import FieldType
from c3.platform.HistogramSpec import HistogramSpec
from c3.platform.TSDataFlowEvent import TSDataFlowEvent
from c3.platform.DataGrid.HtmlSpec import DataGrid.HtmlSpec
from c3.platform.Timeseries import Timeseries
from c3.platform.LeastSquaresResult import LeastSquaresResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.TimeseriesFieldSpec import TimeseriesFieldSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjsFromTsSpec import ObjsFromTsSpec
from c3.platform.SetType import SetType
from c3.platform.Collection import Collection
from c3.platform.MapType import MapType
from c3.platform.CollectionRolling import CollectionRolling
from c3.platform.Exclude import Exclude
from c3.platform.DataGrid.LoadSpec import DataGrid.LoadSpec
from c3.platform.Timeseries import Timeseries
from c3.platform.FillMissingSpec import FillMissingSpec
from c3.platform.TimeseriesFromCollectionSpec import TimeseriesFromCollectionSpec
from c3.platform.WindowSpec import WindowSpec
from c3.platform.TimeseriesInfo import TimeseriesInfo
from c3.platform.Collection import Collection
from c3.platform.CollectionStdLib import CollectionStdLib
from c3.platform.DataGrid import DataGrid
from c3.platform.ReferenceType import ReferenceType
from c3.platform.AggSpec import AggSpec
from c3.platform.ArrayType import ArrayType
from c3.platform.Iterator import Iterator
from c3.platform.Promise import Promise
from c3.platform.Timeseries import Timeseries
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.CountMinSketchSpec import CountMinSketchSpec
from c3.platform.Promise import Promise
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.DataTimeseriesSpec import DataTimeseriesSpec
from c3.platform.Obj import Obj
from c3.platform.Collection import Collection
from c3.platform.Unit import Unit
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.CollectionStdLib import CollectionStdLib
from c3.platform.DownsampleSpec import DownsampleSpec
from c3.platform.EvalTimeseriesSpec import EvalTimeseriesSpec
from c3.platform.FieldValue import FieldValue
from c3.platform.TimeInfo import TimeInfo
from c3.platform.TimeseriesRenderer import TimeseriesRenderer
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.Histogram import Histogram
from c3.platform.TimeZone import TimeZone
from c3.platform.TimeseriesSpec import TimeseriesSpec
from c3.platform.Digest import Digest
from c3.platform.TimeRange import TimeRange

# Python definitions for the C3 type TSDataFlowEvent

ST = TypeVar('ST')

class TSDataFlowEvent(Generic[ST], DataFlowEvent[ST], Timeseries[double]):
    """
    A DFE may be constructed in various ways, but the most common type is loaded from a system
    metric {@link SimpleMetic}/{@link CompoundMetric} or produced by a transform.
    These DFEs have a single time series directly embedded.
    e.g
    ```
       @dfe(period="24HOUR", interval="HOUR", metric="Temperature")
       type SmartBulbTemperature mixes TSDataFlowEvent<SmartBulb>
    ```
    
    @remarks this represents a made instance of TSDataFlowEvent
    """
    
    source: Optional[ST]=None
    """
    the source of the data for this event
    """

    tsInfo: Optional[TimeseriesInfo]=None
    """
    time / meta information about timeseries
    """

    unit: Optional[Unit]=None
    """
    Unit of the data in this timeseries
    
    @return The Unit of the data in the timeseries
    """

    _data: Optional[Array[float]]=None
    """
    Internal representation of data points for this time series
    """

    _kind: Optional[str]=None
    """
    Internal representation to indicate the cardinality of the Timeseries
    """
    def __init__(self, source: Optional[ST]=None, tsInfo: Optional[TimeseriesInfo]=None, unit: Optional[Unit]=None, _data: Optional[Array[float]]=None, _kind: Optional[str]=None) -> None: ...

    @overload
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object.
    
    @return JSON object representation
    
    @see #fromJson
    """
        ...
    @overload
    def toJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
    """
    Convert the internal object representation to a _typed_ JSON object.
    @param omitTopLevelType
           Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
           the outer level of the produced json.
    @param runtime
           If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
           performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
    
    
    @return JSON object representation
    
    @see #fromJson
    @see #toJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    @overload
    def toTypedJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toJsonString(self) -> str:
        ...
    @overload
    def toJsonString(self, pretty: bool) -> str:
    """
    Convert the internal object representation to a serialized JSON string.
    
    @return JSON object as string
    """
        ...
    @overload
    def toTypedJsonString(self) -> str:
        ...
    @overload
    def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
        ...
    @overload
    def toJsString(self) -> str:
        ...
    @overload
    def toJsString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    @overload
    def toXmlString(self) -> str:
        ...
    @overload
    def toXmlString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized XML string.
    
    @return XML element as string
    
    @see #fromXmlString
    """
        ...
    def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
    """
    Convert the internal object representation to a string serialized representation of the object.
    
    @return string serialized object representation
    """
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[TSDataFlowEvent[ST]]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[TSDataFlowEvent[ST]]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[TSDataFlowEvent[ST]]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
    may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
    isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
    will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[TSDataFlowEvent[ST]]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
    """
    Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
    there is a slight possibility that two objects with the same fingerprint will actually differ.
    
    The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
    {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
    unless the allIdentifiedRefFields option is specified.
    
    If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
    However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
    
    @param allIdentifiedRefFields
              if `true`, fingerprint individual fields of persistable references, not just the `id`
    @param trackRecursiveRefs
              if `true`, a set of referenced objects is maintained to avoid infinite recursion
    @param traversedRefs
              only considered together with trackRecursiveRefs and if provided then all traversed references are
              checked against and added to it
    @return integer fingerprint
    
    @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
    """
        ...
    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
    """
    Measures retained memory by this instance.
    
    @param deep
           if true and this instance contains references to other objects also measures memory retained by those
    @param allMeasured
           if set then will skip instances that are in the set and will add instances that where measured by this call
    @return retained memory in bytes for this instances
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> TSDataFlowEvent[ST]:
    """
    Returns new instance with all references to old type, including result of #type, replaced with new type. If new
    type does not contain fields from old or field value types are not convertable then drops the field.
    
    This method is used during live metadata update
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
     Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
     useful for redispatching **member** methods reimplemented on this type to a parent implementation:
     ```js
     function toString() {
       return this.super().toString() + ', x=' + this.x;
     }
     ```
    
     ```py
     def toString(this):
        return this.super().toString() + ', x=' + this.x
    ```
    
     To redispatch **static** methods, see {@link Type#super}.
    
     Note that this not the same as the language-specific `super` keyword because it works through the type system and
     supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
     globally.
    
     If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
     This can be used to create a local implementation "around" the server implementation for additional caching or
     other local state management.
    
     @param mixin if specified, this mixin is used instead or an error is thrown
     @return "super" calling proxy for this object
    
     @see Type.super
    """
        ...
    @overload
    def instanceOf(self, typeName: str) -> bool:
    """
    Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    """
        ...
    @overload
    def instanceOf(self, type: Type) -> bool:
    """
    Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    
    @see ValueType#isA
    """
        ...
    def isEmptyObj(self) -> bool:
    """
    Whether all the fields of this instance are empty.
    """
        ...
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isFieldSet(self, field: str) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldSet(self, field: FieldType) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldMissing(self, field: str) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def isFieldMissing(self, field: FieldType) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    """
        ...
    @overload
    def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
    the obj.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    @return value for the given field
    """
        ...
    def fieldValues(self) -> Union[Array[FieldValue]]:
    """
    Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
    """
    Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
    Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
    #dataFieldTypes
    """
        ...
    def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
    """
    Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
    """
    Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Returns all data field names including those whose values are empty. Array is ordered by
    field ordinal.
    """
        ...
    def unsetFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
    field ordinal.
    """
        ...
    def missingFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
    field ordinal.
    """
        ...
    @overload
    def at(self, ordinal: int) -> Union[T]:
    """
    Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
    
    @param ordinal
            Integer ordinal of the field in the parent type
    @return value of field at ordinal
    """
        ...
    @overload
    def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
    """
    Return value for the given serialized expression
    
    @param expr
            Serialized expression to obtain the value in the given Obj
    @param failIfNotValid
            If set, fails if not a valid expression
    @return value obtained as a result of expression evaluation
    """
        ...
    @overload
    def at(self, index: int) -> Union[float]:
        ...
    def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
    """
    Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
    `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
    that it also handles `null`. If path contains any collections then only first element will be traversed,
    unless the collection index is specified in the path.
    
    If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return the field or null
    """
        ...
    def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
    """
    Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
    traversals, unless the collection index is specified in the path.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return fields as a flat list
    
    @see #fieldValueAtPath
    """
        ...
    @overload
    def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object.
    
    @param action
              lambda to apply
    """
        ...
    @overload
    def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply
    """
        ...
    def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
    """
    Perform an action for each {@link isFieldSet set} field of this object.
    
    @param action
              lambda to apply
    """
        ...
    def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
    """
    Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
    on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply; stop if this `action` returns `false
    @return `true` if iteration was not aborted by lambda i.e. it saw all field values
    """
        ...
    @overload
    def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    @overload
    def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type while processing action returns
    `true`.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance; stops processing if return `false`
    @return `true` if iteration was not aborted by lambda i.e. it saw all refs
    """
        ...
    def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
    """
        ...
    def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
    processing action returns `true`.
    """
        ...
    @overload
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> TSDataFlowEvent[ST]:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> TSDataFlowEvent[ST]:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[TSDataFlowEvent[ST]]:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the asynchronous `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that fields
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[TSDataFlowEvent[ST]]:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    asynchronous `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> TSDataFlowEvent[ST]:
    """
    Result of this function call is a copy of current instance with specified field value replaced based on result of
    the `mapper` invocation.
    @param field
              field being mapped
    @param includeEmpty
              if set, invokes mapper for fields with empty value
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> TSDataFlowEvent[ST]:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> TSDataFlowEvent[ST]:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param mapper
              function to be executed for each pair of field type and Obj instance for producing new reference value
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` will be `null`.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
    result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
    """
    Evaluates given projection expression over this instance.
    """
        ...
    @overload
    def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
    """
    Evaluates given projection over this instance and returns results as json.
    """
        ...
    @overload
    def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
    """
    Evaluates given projection over this instance and returns results as instance of the new Obj.
    """
        ...
    @overload
    def validateObj(self) -> TSDataFlowEvent[ST]:
    """
    Populates all missing default values and throws error if any constraint is violated.
    """
        ...
    @overload
    def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
    """
    Validate that the Obj fields are set according to all the required rules.
    """
        ...
    @overload
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              name of the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    @overload
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
    defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
    
    @param fields
              map of field names/values
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @return new Obj
    """
        ...
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
    If you would like to #unsetField, you should call #withoutFieldAtPath instead.
    
    Immutable objects may return the same instance if the field being set does not actually represent a
    change to the existing object.
    
    @param path
              path to set value at
    @param value
              value to set
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @param doNotCreateIfMissing
              true indicates that any empty reference along the path will not set the value
    @return new Obj
    """
        ...
    def withoutFieldAtPath(self, path: str) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj without the specified path field.
    
    Immutable objects may return the same instance if the field being removed does not actually represent a
    change to the existing object.
    
    @param path
              path for field to remove
    @return new Obj
    
    @see #withFieldAtPath
    @see #withoutField
    """
        ...
    @overload
    def withoutField(self, field: str) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj, removing the field with the provided name.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    @overload
    def withoutField(self, field: FieldType) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj, removing the field with the provided field type.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    def withoutFields(self, fields: Array[str]) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> TSDataFlowEvent[ST]:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
    calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
    {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
    fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
    fields that have already been set.
    
    {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
    As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
    
    @param includeEmptyRefsWithDefaults
              it `true` then missing / empty child references that have fields with defaults will also be instantiated
    @param defaultFields
              If not empty, a list of default field paths to populate.  Any default fields not specified in the
              array will be ignored.
    @return new Obj
    
    @see #defaultField
    @see FieldType#defaultValueConst
    @see FieldType#defaultValue
    """
        ...
    @overload
    def defaultField(self, field: str) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            name of the field to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def defaultField(self, field: FieldType) -> TSDataFlowEvent[ST]:
    """
    Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            field type to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def unsetField(self, field: str) -> TSDataFlowEvent[ST]:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            name of the field to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def unsetField(self, field: FieldType) -> TSDataFlowEvent[ST]:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            field type to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def removeField(self, field: str) -> TSDataFlowEvent[ST]:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            name of the field to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def removeField(self, field: FieldType) -> TSDataFlowEvent[ST]:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            field type to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> TSDataFlowEvent[ST]:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
    
    @param other
              object
    @param fieldPathMergeSpec
              mapping of fields of the object to the respective merge annotations
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> TSDataFlowEvent[ST]:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence.
    
    @param other
              object
    @param otherFieldsFilter
              only fields of otherFieldsFilter type from other are merged into this obj.
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> TSDataFlowEvent[ST]:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> TSDataFlowEvent[ST]:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
    traverse child reference and collection fields.
    """
        ...
    def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
    """
    Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
    Fields that non null in only one of this and other will be in the resulting Obj without change.
    """
        ...
    def mergeJson(self, json: any) -> TSDataFlowEvent[ST]:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> TSDataFlowEvent[ST]:
    """
    Merge the obj references within the current obj
    @param deep
           If set, traverses the reference fields within the obj as well for a deep merge
    @param objKey
           lambda specifying how to obtain the key for the Obj while determining which Objs to merge
    @param filter
           Field paths that need to be filtered from this merge
    @return Obj with child references merged
    """
        ...
    def sumObj(self, other: Obj, deep: bool=None) -> TSDataFlowEvent[ST]:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[TSDataFlowEvent[ST]]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[TSDataFlowEvent[ST]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[TSDataFlowEvent[ST]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[TSDataFlowEvent[ST]]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[TSDataFlowEvent[ST]]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, TSDataFlowEvent[ST]]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, TSDataFlowEvent[ST]]]:
    """
    Create a map with the given key type and elements of this type.
    """
        ...
    @classmethod
    def myReferenceType(cls) -> ReferenceType:
        ...
    @classmethod
    def myMapTypeOf(cls, keyType: ValueType) -> MapType:
        ...
    @classmethod
    def myMapType(cls) -> MapType:
        ...
    @classmethod
    def myArrayType(cls) -> ArrayType:
        ...
    @classmethod
    def mySetType(cls) -> SetType:
        ...
    @classmethod
    def myStreamType(cls) -> StreamType:
        ...
    def toBuilder(self) -> ObjBuilder[TSDataFlowEvent[ST]]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[TSDataFlowEvent[ST]]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> TSDataFlowEvent[ST]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> TSDataFlowEvent[ST]:
    """
    Construct an instance of this type from provided fields
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> TSDataFlowEvent[ST]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> TSDataFlowEvent[ST]:
    """
    Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
               populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> TSDataFlowEvent[ST]:
    """
    Construct an instance from provided fields
    @param fields
               Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
               field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
               to Panda.make()
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
               -> 0) populated. Passing an empty value for a field will result in the initial value being set if
               the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
    
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Any, withDefaults: bool=None) -> TSDataFlowEvent[ST]:
    """
    Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
    
    ```js
    User.make({
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    
    Obj.make({
      type: 'User',
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    ```
    
    ```py
    c3.User.make({
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.Obj.make({
      "type": 'User',
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.User(email='joe@smith.com', realName='Joe Smith')
    
    c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
    ```
    
    Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
    specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
    such as {@link Ann.Ser} do not apply.
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> TSDataFlowEvent[ST]:
    """
    Construct an instance of this type from provided instance of a subtype or a "duck type".
    """
        ...
    def remakeAs(self, type: Type) -> O:
    """
    Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
    converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
    could be costly if types have different value types for same fields.
    
    @param type
            Type of new obj to return
    @return new obj of the requested type with all fields present in the original obj that are defined in the new type
            converted and copied to it
    """
        ...
    @classmethod
    def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
    """
    Optional override that will be called every time instance of this type is created.
    
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    def afterMake(self) -> TSDataFlowEvent[ST]:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> TSDataFlowEvent[ST]:
    """
    Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
    every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
    Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
    
    @see ValueType#defaultEmptyValue
    """
        ...
    def toData(self) -> Union[Data]:
    """
    Returns instance of Data from current Timeseries instance
    """
        ...
    @classmethod
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[TSDataFlowEvent[ST]]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> TSDataFlowEvent[ST]:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def renderer(self) -> Union[TimeseriesRenderer]:
    """
    Render timeseries as a chart.
    """
        ...
    def _repr_(self) -> Union[str]:
    """
    Summary of timeseries range.
    
    @see #toString
    """
        ...
    def _reprHtml_(self) -> Union[str]:
    """
    SVG chart.
    """
        ...
    def toDataGrid(self, spec: DataGrid.LoadSpec=None) -> Union[DataGrid]:
    """
    Build a data grid from the underlying data. If the current value is not appropriate for a grid, null should be
    returned.
    """
        ...
    @classmethod
    def setDefaultSpec(cls, spec: DataGrid.HtmlSpec=None) -> None:
    """
    Since there is no good way to pass in the spec when using the automatic visualization, it's possible to statically
    set the default values in the local (client) environment. This spec will be used for the #_reprHtml method where
    no spec may be passed.
    """
        ...
    @classmethod
    def defaultSpec(cls) -> Union[DataGrid.HtmlSpec]:
    """
    Get the default spec for the local (client) environment. Note that there may be a default value with values
    extracted from the current environment. For example in Jupyter, display settings are taken from the current
    [pandas](https://pandas.pydata.org/) settings.
    
    @see #setDefaultSpec
    """
        ...
    def toString(self) -> Union[str]:
    """
    String-based representation of instance of this type.
    """
        ...
    def size(self) -> int:
    """
    The number of data points in this time series
    """
        ...
    def start(self) -> datetime:
        ...
    def end(self) -> datetime:
        ...
    def sourceInfo(self) -> Union[TimeseriesSourceInfo]:
        ...
    def valueAt(self, index: int) -> Union[float]:
    """
    Returns the value at the provided index from the data
    """
        ...
    def timestampAt(self, index: int) -> datetime:
    """
    Returns the timestamp for the provided index relative to the data of the timeseries
    """
        ...
    def dataPointType(self) -> Union[ValueType]:
    """
    @return return value type for data points.
    """
        ...
    def expandedData(self) -> Union[Array[float]]:
    """
    @inheritDoc
    NOTE: only to be used when accessing data within a for loop for which we don't want to check isEmpty, isIdentity
    or regular every time
    """
        ...
    def doubleData(self) -> Union[Array[float]]:
    """
    @inheritDoc
    NOTE: only to be used when accessing data within a for loop for which we don't want to check isEmpty, isIdentity
    or regular every time
    """
        ...
    def dates(self) -> Array[datetime]:
    """
    @return dates for points of timeseries.
    """
        ...
    def toPeriod(self, period: str, aggOp: str) -> Union[TimeseriesBase[Any, TimeseriesBase.Info]]:
    """
     Convert timeseries to a period up / down specified by aggregation function
     If the input period is an existing {@link Interval}, return {@link Timeseries}
    
    For aggregation, all the data points in the period will be aggregated with the agg functions specified,
    but for disaggregation, **the values are prorated depending on the data points in the interval** (in the below examples its the days in the interval)
    ```js
    ti = TimeInfo.from(DateTime.fromString("2023-04-01"), DateTime.fromString("2023-07-01"), Interval.DAY, TimeZone.NONE)
    let arr = new Array(91);
    arr.fill(1, 0, 30);
    arr.fill(2, 30, 60);
    arr.fill(3, 60, 91);
    ts = Timeseries.fromValues(ti, arr).toDoubleTimeseries();
    ts.toInterval('MONTH', 'SUM').toPeriod('W@2','SUM'))
    ```
    
     ```
     ----------------------------
        timestamp   |    value
        2023-03-28  |    3
        2023-04-04  |    7
            *       |    *
            *       |    *
        2023-04-25  |    8.03226
            *       |    *
            *       |    *
        2023-06-27  |    12
     ----------------------------
     ```
    In the above example, the first data point will be for 2023-03-28, with value 3 as we only have 3 days of this week in the first month (30/30 * 3) = 3.
    Week starting from 2023-04-25 has 6 days in the first month and 1 day in the next month, where the values are prorated depending on the days in the interval. (30/30 * 6) + (63/31 * 1) = 8.03226.
    Week starting from 2023-06-27 only has 4 days in the interval with 4*(90/30) = 12
    
     @param period Period to which timeseries has to be converted
     @param AggOp one of SUM|AVG|MIN|MAX|MEAN|PREVIOUS
     @return {@link Timeseries.Raw} or {@link Timeseries} up/down converted to specified period using specified AggOp
    """
        ...
    def iter(self) -> Union[Iterator[float]]:
        ...
    def _iter_(self) -> Union[Any]:
        ...
    def _length_(self) -> int:
        ...
    def isEmpty(self) -> bool:
    """
    Computes emptiness based on both gaps and unavailable information.
    
    @return true if its an empty timeseries.
    """
        ...
    def collect(self, limit: int=None) -> Union[Array[float]]:
        ...
    def collectArrays(self, limit: int=None) -> Union[Array[Array[T]]]:
        ...
    def abs(self) -> Timeseries[float]:
    """
    @return timeseries with values absoluted (sign dropped)
    """
        ...
    @overload
    def aggImplementation(self, spec: AggSpec, op: str) -> Union[R]:
        ...
    @overload
    def aggImplementation(self, spec: AggSpec, aggregator: Callable[[Union[R], Union[float]], Union[R]]) -> Union[R]:
        ...
    @overload
    def aggImplementation(self, spec: AggSpec, folder: Callable[[Union[T], Union[float]], Union[T]], aggregator: Callable[[Union[R], Union[T]], Union[R]]) -> Union[R]:
        ...
    def sumDbl(self) -> float:
        ...
    def sumDiff(self, absoluteValues: bool=None) -> float:
        ...
    def cusum(self, threshold: float='1', drift: float='0') -> Union[Array[int]]:
        ...
    def normalize(self) -> Union[Timeseries[float]]:
        ...
    def pluck(self, fieldPath: str, vtOverride: ValueType=None) -> Union[Timeseries[T]]:
        ...
    @overload
    def first(self) -> Union[float]:
        ...
    @overload
    def first(self, n: int) -> Union[Timeseries[float]]:
        ...
    @overload
    def first(self, test: Callable[[Union[float]], bool]) -> Union[float]:
        ...
    @overload
    def firstNotNull(self) -> Union[float]:
        ...
    @overload
    def firstNotNull(self, mapper: Callable[[Union[float]], Union[T]]) -> Union[T]:
        ...
    @overload
    def firstNotEmpty(self) -> float:
        ...
    @overload
    def firstNotEmpty(self, mapper: Callable[[Union[float]], Union[T]]) -> T:
        ...
    @overload
    def last(self) -> Union[float]:
        ...
    @overload
    def last(self, n: int) -> Union[Timeseries[float]]:
        ...
    @overload
    def last(self, test: Callable[[Union[float]], bool]) -> Union[float]:
        ...
    @overload
    def lastNotNull(self) -> Union[float]:
        ...
    @overload
    def lastNotNull(self, mapper: Callable[[Union[float]], Union[T]]) -> Union[T]:
        ...
    @overload
    def lastNotEmpty(self) -> float:
        ...
    @overload
    def lastNotEmpty(self, mapper: Callable[[Union[float]], Union[T]]) -> T:
        ...
    @overload
    def minImplementation(self, spec: AggSpec=None) -> Union[float]:
        ...
    @overload
    def minImplementation(self, comparator: Callable[[Union[float], Union[float]], Union[int]]) -> Union[float]:
        ...
    def minBy(self, value: Callable[[Union[float]], Union[Any]]) -> Union[float]:
        ...
    @overload
    def maxImplementation(self, spec: AggSpec=None) -> Union[float]:
        ...
    @overload
    def maxImplementation(self, comparator: Callable[[Union[float], Union[float]], Union[int]]) -> Union[float]:
        ...
    def maxBy(self, value: Callable[[Union[float]], Union[Any]]) -> Union[float]:
        ...
    def count(self, spec: AggSpec=None) -> Union[R]:
    """
    Total number of points between start and end
    
    @return The number of points in the timeseries
    """
        ...
    def sumImplementation(self, spec: AggSpec=None) -> Union[R]:
        ...
    def allImplementation(self, spec: AggSpec=None) -> Union[R]:
        ...
    def prod(self, spec: AggSpec=None) -> Union[R]:
        ...
    @overload
    def avg(self) -> Union[R]:
        ...
    @overload
    def avg(self, timeseries: Array[Timeseries[float]]) -> Timeseries[float]:
    """
    Average of all the values per grain of the input timeseries including the current timeseries
    
    @param timeseries All the timeseries that need to be added to the current timeseries
    @return The handle to a Timeseries<E> which is an addition of all the input timeseries
    """
        ...
    @overload
    def avg(self, timeseries: Timeseries[float]) -> Timeseries[float]:
        ...
    def avgDbl(self) -> float:
        ...
    def median(self) -> Union[R]:
        ...
    def medianDbl(self) -> float:
        ...
    def percentile(self, percentile: float) -> Union[R]:
        ...
    def percentileDbl(self, percentile: float) -> float:
        ...
    def stddev(self) -> Union[R]:
        ...
    def stddevDbl(self) -> float:
        ...
    def variance(self) -> Union[R]:
        ...
    def varianceDbl(self) -> float:
        ...
    def aggDbl(self, aggFunc: str, percentile: float=None) -> float:
        ...
    @overload
    def round(self, decimals: int=None) -> Union[Timeseries[float]]:
        ...
    @overload
    def round(self, roundFunction: str=None, scale: int=None) -> Timeseries[float]:
    """
    CEIL -> Round towards positive infinity
    FLOOR -> Round towards negative infinity
    
    
    @param roundingFunction CEIL,FLOOR
    @return timeseries with values rounded based on specified parameter
    """
        ...
    def invert(self) -> Union[Timeseries[float]]:
        ...
    def only(self, failIfNotSingleton: bool=None) -> Union[float]:
        ...
    def contains(self, element: Any) -> bool:
        ...
    @overload
    def containsAll(self, *elements: Array[float]) -> bool:
        ...
    @overload
    def containsAll(self, c: Collection[float]) -> bool:
        ...
    @overload
    def containsAll(self, predicate: Callable[[Union[float]], bool]) -> bool:
        ...
    def containsAny(self, predicate: Callable[[Union[float]], bool]) -> bool:
        ...
    @overload
    def findAny(self, predicate: Callable[[Union[float]], bool]) -> Union[float]:
        ...
    @overload
    def findAny(self, fields: Map[str, Any]) -> Union[float]:
        ...
    @overload
    def anyNotNull(self) -> Union[float]:
        ...
    @overload
    def anyNotNull(self, mapper: Callable[[Union[float]], Union[T]]) -> Union[T]:
        ...
    @overload
    def anyNotEmpty(self) -> float:
        ...
    @overload
    def anyNotEmpty(self, mapper: Callable[[Union[float]], Union[T]]) -> T:
        ...
    def each(self, action: Callable[[Union[float]]]) -> None:
        ...
    def eachWhile(self, action: Callable[[Union[float]], bool]) -> bool:
        ...
    def mapToSame(self, mapper: Callable[[Union[float]], Union[float]]) -> Union[Timeseries[float]]:
        ...
    def map(self, mapper: Callable[[Union[float]], Union[T]]) -> Union[Timeseries[T]]:
        ...
    def mapToStr(self, mapper: Callable[[Union[float]], Union[str]]) -> Union[Timeseries[str]]:
        ...
    def mapTo(self, elementType: ValueType, mapper: Callable[[Union[float]], Union[T]]) -> Union[Timeseries[T]]:
        ...
    def flatMapToSame(self, mapper: Callable[[Union[float]], Union[CollectionStdLib[float]]]) -> Union[Timeseries[float]]:
        ...
    def flatMap(self, mapper: Callable[[Union[float]], Union[CollectionStdLib[T]]]) -> Union[Timeseries[T]]:
        ...
    def flatMapTo(self, elementType: ValueType, mapper: Callable[[Union[float]], Union[CollectionStdLib[T]]]) -> Union[Timeseries[T]]:
        ...
    def flatMapRecursive(self, toInters: Callable[[Union[float]], Union[CollectionStdLib[I]]], fromInter: Callable[[Union[I]], Union[float]]) -> Union[Timeseries[float]]:
        ...
    @overload
    def fold(self, folder: Callable[[Union[float], Union[T]], Union[T]]) -> Union[T]:
        ...
    @overload
    def fold(self, initial: T, folder: Callable[[Union[float], Union[T]], Union[T]]) -> Union[T]:
        ...
    def compact(self) -> Union[Timeseries[float]]:
        ...
    def unique(self) -> Union[Timeseries[float]]:
        ...
    def uniqueBy(self, key: Callable[[Union[float]], Union[Any]]=None) -> Union[Timeseries[float]]:
        ...
    @overload
    def filter(self, predicate: Callable[[Union[float]], bool]) -> Union[Timeseries[float]]:
        ...
    @overload
    def filter(self, filter: str) -> Union[Timeseries[float]]:
        ...
    @overload
    def filter(self, fields: Map[str, Any]) -> Union[Timeseries[float]]:
        ...
    def fillMissingBy(self, method: str='PREVIOUS', spec: FillMissingSpec=None) -> Union[Timeseries[float]]:
        ...
    def fillMissing(self, value: Any, spec: FillMissingSpec=None) -> Union[Timeseries[float]]:
    """
    @param value
           value to be used for filling in missing values (gap or unavailable).
    @param spec
           see {@link FillMissingSpec} for available specifications
    @return timeseries that has missing values (gap or unavailable) filled with the specified value (scaled based on
            gap or unavailable percentage). resultant timeseries is fully available.
    """
        ...
    def fieldValueType(self, field: str) -> Union[ValueType]:
        ...
    def reject(self, predicate: Callable[[Union[float]], bool]) -> Union[Timeseries[float]]:
        ...
    @overload
    def include(self, include: str) -> Union[Timeseries[float]]:
        ...
    @overload
    def include(self, positions: Collection[int]) -> Union[Timeseries[float]]:
        ...
    def exclude(self, exclude: str) -> Union[Timeseries[float]]:
        ...
    def replaceByPredicate(self, e: float, predicate: Callable[[Union[float]], bool]) -> Union[Timeseries[float]]:
        ...
    @overload
    def sorted(self, descending: bool=None) -> Union[Timeseries[float]]:
        ...
    @overload
    def sorted(self, comparator: Callable[[Union[float], Union[float]], Union[int]]) -> Union[Timeseries[float]]:
        ...
    @overload
    def sorted(self, descending: bool, comparator: Callable[[Union[float], Union[float]], Union[int]]) -> Union[Timeseries[float]]:
        ...
    @overload
    def sorted(self, order: str) -> Union[Timeseries[float]]:
        ...
    @overload
    def sortedBy(self, key: Callable[[Union[float]], Union[Any]]) -> Union[Timeseries[float]]:
        ...
    @overload
    def sortedBy(self, descending: bool, key: Callable[[Union[float]], Union[Any]]) -> Union[Timeseries[float]]:
        ...
    @overload
    def sortedIndex(self, element: float, value: Callable[[Union[float]], Union[Any]]) -> int:
        ...
    @overload
    def sortedIndex(self, element: float, fieldName: str) -> int:
        ...
    def batch(self, batchSize: int=None) -> Union[Stream[Timeseries[float]]]:
        ...
    def partition(self, partitioner: Callable[[Union[float]], bool]) -> Union[Map[bool, Array[float]]]:
        ...
    @overload
    def countBy(self, key: Callable[[Union[float]], Union[str]]) -> Union[Map[str, int]]:
        ...
    @overload
    def countBy(self, keyType: ValueType, key: Callable[[Union[float]], Union[T]]) -> Union[Map[T, int]]:
        ...
    def every(self, predicate: Callable[[Union[float]], bool]) -> bool:
        ...
    def elementCartesianProduct(self) -> Union[Array[Array[T]]]:
        ...
    @overload
    def flatten(self, shallow: bool=None) -> Union[Timeseries[T]]:
        ...
    @overload
    def flatten(self, depth: int, include: str=None) -> Union[Timeseries[T]]:
        ...
    def sample(self, spec: SampleSpec=None) -> Union[Timeseries[float]]:
        ...
    @overload
    def slice(self, fromPos: int, toPos: int=None, stride: int=None) -> Union[Timeseries[float]]:
        ...
    @overload
    def slice(self, positions: Collection[int]) -> Union[Timeseries[float]]:
        ...
    @overload
    def slice(self, slicedStart: datetime, slicedEnd: datetime) -> Timeseries[float]:
    """
    Chops timeseries based on a time range.
    @param start
              slice start
    @param end
              slice end
    @return sliced timeseries based on specified start and end
    """
        ...
    @overload
    def sliceByKey(self, keys: Collection[Any]) -> Union[Timeseries[float]]:
        ...
    @overload
    def sliceByKey(self, secondaryIndex: str, keys: Collection[Any]) -> Union[Timeseries[float]]:
        ...
    def summarize(self, spec: DigestSpec=None) -> Digest[Any, Digest, DigestBuilder]:
        ...
    def downsample(self, spec: DownsampleSpec) -> Union[Timeseries[float]]:
        ...
    def leastSquares(self) -> Union[LeastSquaresResult]:
    """
    Generate a linear regression of the time series using Ordinary Least Squares. If there are too few points,
    the return value is null; otherwise it is an object with the intercept (α) and slope (β) as well as other
    meta-information. Note that the _x_ observations are the indexes into the time series, so are independent of the
    interval. Missing points are ignored.
    
    @see https://en.wikipedia.org/wiki/Ordinary_least_squares
    """
        ...
    @overload
    def rollingDiff(self, stride: int='1') -> Union[Timeseries[float]]:
        ...
    @overload
    def rollingDiff(self, resetDropThreshold: float=None, rollOverThreshold: bool=None) -> Timeseries[float]:
    """
    Returns a timeseries where every value is computed by taking the difference between current and previous point.
    
    It has 1 optional argument : resetDropThreshold ==> If the difference ends up being negative (its a drop) and the absolute magnitude of drop is greater than or equal to resetDropThreshold,
    the value for that point is not the diff but the value itself.
    
    For the second example, if resetDropThreshold is 10000 and we had 10003 followed by 1, the value will be 1 and not -10002. If we had 10003 followed by 4,
    the value will be -9999.
    
    Example: `rollingDiff(sum(normalized.data.quantity))`, `rollingDiff(sum(normalized.data.quantity), 10000)`
    
    @param timeseries
           timeseries input
    @param resetDropThreshold
           resetDropThreshold when specified, if absolute difference between current and previous point drops below this parameter's value,
           set new value to current point,else set it to difference between current and previous point
    @param rollOverThreshold
           by default it is false, If true, value after drop is roll over distance from previous point.
           If false, value after drop is the point's value.
    @return timeseries which represents rolling diff of this timeseries based on above parameters.
    """
        ...
    def pctChange(self, stride: int='1') -> Union[Timeseries[float]]:
        ...
    def unaryOp(self, op: str) -> Union[Timeseries[float]]:
        ...
    def shape(self) -> Union[Array[int]]:
        ...
    def toObj(self) -> Union[Obj]:
        ...
    def fetch(self, spec: FetchSpec=None) -> Union[Timeseries[float]]:
        ...
    def largest(self, n: int, comparator: Callable[[Union[float], Union[float]], Union[int]]=None, keep: str=None) -> Union[Array[float]]:
        ...
    def histogram(self, spec: HistogramSpec=None) -> Histogram[Any, Any, HistogramBuilder]:
        ...
    def neg(self) -> Union[Timeseries[float]]:
        ...
    def approxMostFrequent(self, spec: CountMinSketchSpec=None) -> Union[Map[str, int]]:
        ...
    @overload
    def timeseries(self, spec: DataTimeseriesSpec=None) -> Union[Timeseries[R]]:
        ...
    @overload
    def timeseries(self, tsFieldSpec: Map[str, TimeseriesFieldSpec], spec: TimeseriesSpec=None) -> Union[Timeseries[R]]:
        ...
    def elementType(self) -> ValueType:
        ...
    def stream(self) -> Union[Stream[float]]:
        ...
    def available(self) -> Union[Array[bool]]:
    """
    @return available / not available boolean value for every point
            <p>
            available = not(missing)
    """
        ...
    def missingRanges(self) -> Union[Array[TimeRange]]:
    """
    @return unavailability time ranges of timeseries.
    """
        ...
    def earliestAvailable(self) -> Union[datetime]:
    """
    Within the time range of this timeseries, it returns the earliest date for which data is available.
    
    @return earliest date (within this series) for which data is available.
    """
        ...
    def latestAvailable(self) -> Union[datetime]:
    """
    Within the time range of this timeseries, it returns the latest date beyond which data is unavailable.
    
    @return latest date (within this series) beyond which data is unavailable.
    """
        ...
    def percentMissing(self) -> int:
    """
    Computes percentage of missing data using "missing" information.
    
    @return double 0 <= x <= 100
    """
        ...
    def isFullyAvailable(self) -> bool:
    """
    @return true if timeseries is fully available.
    """
        ...
    def isFullyMissing(self) -> bool:
    """
    @return true if timeseries if fully missing
    """
        ...
    def timeInfo(self) -> TimeInfo:
    """
    @return Time information
    """
        ...
    def shift(self, start: datetime=None) -> TSDataFlowEvent[ST]:
    """
    Shifts the timeseries in the time domain to specified start. This shifts start, end, gapRanges, estimateRanges and
    unavailableRanges.
    
    @param start
           datetime to which timeseries has to be shifted.
    """
        ...
    def withAvailability(self, missing: Array[bool]=None) -> TSDataFlowEvent[ST]:
    """
    @return new timeseries info with provided availability.
    """
        ...
    def data(self) -> Union[Array[float]]:
    """
    Only return the minimum number of data points to represent this timeseries. If the time series is an identity
    time series, this will return 1 object in the array. If it is an empty time series, this will return 0 elements
    else if it is a regular time series, this will return the same no of points as {@link Timeseries.data} function
    The responsibility of handling emptiness and single valued behavior is on the user of this function.
    
    If you want the array to contain as many elements as in between start & end at normalized interval use #expandedData
    
    @see expandedData
    """
        ...
    def optimizedData(self) -> Union[Array[float]]:
    """
    Only return the minimum number of data points to represent this timeseries. If the time series is an identity
    time series, this will return 1 object in the array. If it is an empty time series, this will return 0 elements
    else if it is a regular time series, this will return the same no of points as {@link Timeseries.data} function
    The responsibility of handling emptiness and single valued behavior is on the user of this function.
    
    If you want the array to contain as many elements as in between start & end at normalized interval use #expandedData
    
    @see expandedData
    """
        ...
    def missing(self) -> Union[Array[bool]]:
    """
    Calculated value for each data point indicating if the data point is missing or available
    
    @return The array of booleans for each data point indicating if the data point is missing or available
    Will return null if no values are missing to optimize for memory. @see safeMissing for expanded non null array
    """
        ...
    def safeMissing(self) -> Array[bool]:
    """
    Non null missing array
    @see missing
    """
        ...
    def sum(self, timeseries: Array[Timeseries[float]]) -> Timeseries[float]:
    """
    Addition of all the values per grain of the input timeseries with the current timeseries
    
    @param timeseries All the timeseries that need to be added to the current timeseries
    @return The handle to a Timeseries<E> which is an addition of all the input timeseries
    """
        ...
    @overload
    def min(self, timeseries: Array[Timeseries[float]]) -> Timeseries[float]:
    """
    Minimum of all the values per grain of the input timeseries including the current timeseries
    
    @param timeseries All the timeseries that we need to compute the minimum for
    @return The handle to a Timeseries<E> which is has the minimum value per grain against current / input timeseries
    """
        ...
    @overload
    def min(self, timeseries: Timeseries[float]) -> Timeseries[float]:
        ...
    @overload
    def min(self, spec: AggSpec=None) -> Union[float]:
        ...
    @overload
    def min(self, comparator: Callable[[Union[float], Union[float]], Union[int]]) -> Union[float]:
        ...
    @overload
    def max(self, timeseries: Array[Timeseries[float]]) -> Timeseries[float]:
    """
    Maximum of all the values per grain of the input timeseries including the current timeseries
    
    @param timeseries All the timeseries that we need to compute the maximum for
    @return The handle to a Timeseries<E> which is has the maximum value per grain against current / input timeseries
    """
        ...
    @overload
    def max(self, timeseries: Timeseries[float]) -> Timeseries[float]:
        ...
    @overload
    def max(self, spec: AggSpec=None) -> Union[float]:
        ...
    @overload
    def max(self, comparator: Callable[[Union[float], Union[float]], Union[int]]) -> Union[float]:
        ...
    @overload
    def and(self, timeseries: Array[Timeseries[float]]) -> Timeseries[float]:
    """
    AND all the timeseries
    @param timeseries Timeserieses to be and'ed
    @return point-wise boolean AND of all input timeseries
    """
        ...
    @overload
    def and(self, timeseries: Timeseries[float]) -> Timeseries[float]:
        ...
    @overload
    def or(self, timeseries: Array[Timeseries[float]]) -> Timeseries[float]:
    """
    OR all the timeseries
    @param timeseries Timeserieses to be or'ed
    @return point-wise boolean OR of all input timeseries
    """
        ...
    @overload
    def or(self, timeseries: Timeseries[float]) -> Timeseries[float]:
        ...
    def convertToUnit(self, unitId: str) -> Timeseries[float]:
    """
    Convert the timeseries to the desired unit
    
    @param unitId Id of unit to which conversion is desired
    @return timeseries converted to unitId
    """
        ...
    def treatAsUnit(self, unitId: str) -> Timeseries[float]:
    """
    Cast the timeseries to the desired unit without changing magnitude
    
    @param unitId Id of unit to which timeseries has to be casted
    @return timeseries casted to unitId (no change in magnitude)
    """
        ...
    def toInterval(self, interval: str, aggOp: str) -> Timeseries[float]:
    """
    Convert timeseries to an interval up / down specified by aggregation function
    
    @param interval Interval to which timeseries has to be converted
    @param AggOp one of SUM|AVG|MIN|MAX|MEAN|PREVIOUS
    @return timeseries up/down converted to specified interval using specified AggOp
    """
        ...
    def aggregate(self, aggOp: str, prorate: bool=None) -> Timeseries[float]:
    """
    Aggregate all values of a timeseries into scalar
    
    @param AggOp one of SUM|AVG|MIN|MAX
    @param prorate default false. scale value if prorate is true.
    @return identity timeseries (scalar value obtained by aggregating all points of timeseries)
    """
        ...
    def add(self, timeseries: Timeseries[float]) -> Timeseries[float]:
    """
    Point-wise addition of the two timeseries
    
    @param timeseries input timeseries
    @return timeseries whose values are point-wise addition of input with self
    """
        ...
    def subtract(self, timeseries: Timeseries[float]) -> Timeseries[float]:
    """
    Point-wise subtraction of the two timeseries
    
    @param timeseries input timeseries
    @return timeseries whose values are point-wise subtraction of input with self
    """
        ...
    def multiply(self, timeseries: Timeseries[float]) -> Timeseries[float]:
    """
    Point-wise multiplication of the two timeseries
    
    @param timeseries input timeseries
    @return timeseries whose values are point-wise multiplication of input with self
    """
        ...
    def divide(self, timeseries: Timeseries[float]) -> Timeseries[float]:
    """
    Point-wise division of the two timeseries
    
    @param timeseries input timeseries
    @return timeseries whose values are point-wise division of input with self
    """
        ...
    def pow(self, other: Union[Timeseries[float],float]) -> Timeseries[float]:
    """
    Point-wise raise to the power of value from the input.timeseries data points. If input is:
    1) a timeseries, then each point from the timeseries will be used with the current timeseries instance.
    2) a number, then the same will be used with the current timeseries instance.
    """
        ...
    def negate(self) -> Timeseries[float]:
    """
    Point-wise negation of the timeseries
    
    @return timeseries whose values are point-wise negated
    """
        ...
    @overload
    def rolling(self, aggOp: str, resetOnTimeseries: Timeseries[float]=None, resetOnValue: float=None, resetToTs: Timeseries[float]=None, resetToValue: float=None, resetAfter: int=None, resetDropThreshold: float=None, rollOverThreshold: bool=None) -> Timeseries[float]:
    """
    All parameters except the first are optional.
    One amongst parameters 'resetOnTimeseries' and 'resetOnValue' can be provided at any given point
    
    @param AggOp
             Aggregation function to be applied when rolling. one of SUM|AVG|MIN|MAX
    @param resetOnTimeseries
             Timeseries to be used as resetting trigger (reset if point's value is true (not-zero))
    @param resetOnValue
             Reset rolling value on seeing a point whose value is equal to this parameter
    @param resetToTs
             Timeseries to be used to use as the reset value when reset occurs
    @param resetToValue
             When resetting, reset to this parameter's value, if specified
    @param resetAfter
             Reset rolling value after every N points where N is this parameter
    @param resetDropThreshold
           resetDropThreshold when specified, if absolute difference between current and previous point drops below this parameter's value,
           set new value to current point,else set it to difference between current and previous point
    @param rollOverThreshold
           by default it is false, If true, value after drop is roll over distance from previous point.
           If false, value after drop is the point's value.
    @return timeseries which represents rolling aggregation of this timeseries based on above parameters
    """
        ...
    @overload
    def rolling(self, aggOp: str, windowSpec: WindowSpec) -> Timeseries[float]:
    """
    @param AggOp
             Aggregation function to be applied when rolling. one of SUM|AVG|MIN|MAX|DIFF
    @param windowSpec
            {@link WindowSpec} used to create window
    @return timeseries which represents rolling aggregation of this timeseries based on above parameters
    """
        ...
    @overload
    def rolling(self, window: Union[int,Period,WindowSpec], minValues: int=None, spec: DataTimeseriesSpec=None) -> Union[CollectionRolling[float]]:
    """
    Records the first step of selecting the window of a rolling (a.k.a. moving) window operation in an intermediate
    structure that can perform further operations on the values in the window.  Each element field is operated on
    independently of the other fields, rather than operating on each element as a whole (equivalent to calculating
    on each column in a 2D table independently when there are multiple columns).
    
    For a general description and examples of what are rolling window operations, see
    [pandas.DataFrame.rolling](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.rolling.html)
    which is very similar to this method.
    
    @param data
              Input data.
    @param window
              Size of the moving window.  An integer represents a fixed number of non-missing values in the window,
              while a {@link Period} represents the time period of each window, and is only valid for datetime-like
              indices.
    @param minValues
              Minimum number of non-missing values in a window required for the final result of an
              operation on the returned {@link CollectionRolling} to have a value for the window.
              Otherwise, the final result for the window is null or NaN.  "Non-missing value" here refer to an
              individual element field, not the entire element.
              When `window` is a {@link Period}, the default value of this parameter is 1.  Otherwise, this parameter
              defaults to the size of the window.
    @param on
              The name of a datetime-like element field (equivalent to datetime-like column on a 2D table) on which to
              calculate the rolling window, rather than the index.  If this is not the name of a datetime-like element
              field (e.g. an integer element field), this method argument will be ignored.
    @return an intermediate structure that records the rolling operation, for performing subsequent actions.
    """
        ...
    @overload
    def rolling(self, agg: str, offset: int, span: int, step: int=None) -> Union[Timeseries[float]]:
    """
    Returns a timeseries/collection where the value of every data point is computed by aggregating every "step'th"
    point in the window starting at "offset" and spanning "span" data points.
    
    Example: `rolling(AVG, sum(normalized.data.quantity), -20, 21, 3)`
    
    @param agg
              Name of the aggregation function.
    @param data
              Input data.
    @param offset
              Start point in the window.
    @param span
              Number of points to span from the offset.
    @param step
              Step of the window.
    @return a timeseries/collection where the value of every data point is computed by aggregating every "step'th"
            point in the window starting at "offset" and spanning "span" data points.
    """
        ...
    def missingTimeseries(self) -> Timeseries[float]:
    """
    Is a timeseries whose values are missing percentages for every point
    
    @return timeseries whose values are missing percentage for every point
    """
        ...
    def timeComponent(self, timeComponent: str) -> Timeseries[float]:
    """
    @param timeComponent one of YEAR,MONTH,DAY,HOUR,MINUTE,SECOND,DAYOFYEAR,DAYOFWEEK
    @return timeseries whose values are specified timeComponent of point's datetime
    """
        ...
    def stat(self, statsFunction: str, n: float=None) -> Timeseries[Any]:
    """
    Computes the specified statistic across all available points in timeseries
    
    @param statsFunction SUM,MEAN,MIN,MAX,MEDIAN,VARIANCE,STDDEV,PERCENTILE
    @param n optional input for PERCENTILE calculation
    @return computed statistic value
    """
        ...
    def equality(self, ts: Timeseries[float], equalityOperator: str) -> Union[Timeseries[float]]:
    """
    Equality Comparisons. We follow these rules :
    NaN operator X = X operator NaN = FALSE
    Inf operator X = X operator Inf = FALSE
    
    
    @param ts input timeseries with which comparison is desired
    @param equalityOperator EQ,NE,GT,GTE,LT,LTE
    @return timeseries whose values are point-wise equality operator comparison between self and input
    """
        ...
    def exists(self) -> Timeseries[float]:
    """
    @return timeseries whose values are 0(false) if the value is unavailable, 1(true) otherwise
    """
        ...
    def sqrt(self) -> Timeseries[float]:
    """
    @return timeseries with values square rooted
    """
        ...
    def cubeRoot(self) -> Timeseries[float]:
    """
    @return timeseries with values cube rooted
    """
        ...
    def nthRoot(self, n: int) -> Timeseries[float]:
    """
    Computes nth root
    n = 1 is same as self
    n = 2 is same as sqrt
    n = 3 is same as cuberoot
    
    
    @param n desired root value
    @return timeseries with values n'th rooted
    @throws Exception if n == 0
    """
        ...
    def log(self) -> Timeseries[float]:
    """
    @return timeseries with values natural(Base E) log'ed
    """
        ...
    def log10(self) -> Timeseries[float]:
    """
    @return timeseries with values Base 10 log'ed
    """
        ...
    def exp(self) -> Timeseries[float]:
    """
    @return timeseries with new values being 'e to the power old-value'.
    """
        ...
    def sin(self) -> Timeseries[float]:
    """
    @param  input timeseries of angle values in radians
    @return timeseries with trigonometric sine function applied to input values
    """
        ...
    def cos(self) -> Timeseries[float]:
    """
    @param  input timeseries of angle values in radians
    @return timeseries with trigonometric cosine function applied to input values
    """
        ...
    def tan(self) -> Timeseries[float]:
    """
    @param  input timeseries of angle values in radians
    @return timeseries with trigonometric tangent function applied to input values
    """
        ...
    def asin(self) -> Timeseries[float]:
    """
    @param  input timeseries of angle values in radians
    @return timeseries with trigonometric arc sine function applied to input values
    """
        ...
    def acos(self) -> Timeseries[float]:
    """
    @param  input timeseries of angle values in radians
    @return timeseries with trigonometric arc cosine function applied to input values
    """
        ...
    def atan(self) -> Timeseries[float]:
    """
    @param  input timeseries of angle values in radians
    @return timeseries with trigonometric arc tangent function applied to input values
    """
        ...
    def toDegrees(self) -> Timeseries[float]:
    """
    @param  input timeseries of angle values in radians
    @return timeseries with values converted to an approximately equivalent angle measured in degrees
    """
        ...
    def toRadians(self) -> Timeseries[float]:
    """
    @param  input timeseries of angle values in degrees
    @return timeseries with values converted to an approximately equivalent angle measured in radians
    """
        ...
    @classmethod
    def startTimeseries(cls, start: datetime, end: datetime, interval: str) -> Timeseries[float]:
    """
    @param start timeseries start
    @param end timeseries end
    @param grain timeseries grain
    
    @return timeseries whose values are start timestamps of grain-aligned
    points within specified range. It always produces dates in TimeZone NONE
    """
        ...
    @classmethod
    def endTimeseries(cls, start: datetime, end: datetime, interval: str) -> Timeseries[float]:
    """
    @param start timeseries start
    @param end timeseries end
    @param grain timeseries grain
    
    @return timeseries whose values are end timestamps of grain-aligned
    points within specified range. It always produces dates in TimeZone NONE
    """
        ...
    @classmethod
    def fromObjStream(cls, objs: Stream[Obj], spec: EvalTimeseriesSpec) -> Timeseries[Any]:
    """
    Converts the list of objects into a timeseries
    @param objs
               The list of objects to be used to create a timeseries as a stream
    @param tsSpec
               This contains the fields & time range required to take decisions while converting the objects to a timeseries
    @return a normalized timeseries from the given list of objects
    """
        ...
    def scaleMinMax(self, min: float=None, max: float=None) -> Timeseries[float]:
    """
    If no min and max values are specified, it first finds min and max of the timeseries.
    It then scales every value to a number between 0 and 1 proportionally based on min and max values.
    
    newValue = (oldValue - min) / (max - min)
    
    If a data point is completely missing (fully gap, fully unavailable, or part gap part unavailable), we
    do not use him for calculations. Their scaled value is always 0.
    
    @param obj Handle to the timeseries
    @param min optional min value to be used
    @param max optional max value to be used
    
    @return timeseries with values between 0 and 1
    """
        ...
    def scaleStandard(self) -> Timeseries[float]:
    """
    It first finds mean and stddev of the timeseries. Assuming normal distribution,
    it then scales every value to its normal value based on mean and stddev values.
    
    newValue = (oldValue - mean) / stddev
    
    If a data point is completely missing (fully gap, fully unavailable, or part gap part unavailable), we
    do not use him for calculations. Their scaled value is always 'mean'.
    
    @param obj Handle to the timeseries
    
    @return timeseries with values normally distributed based on mean and stddev
    """
        ...
    def lerp(self, to: Timeseries[Any], scale: Timeseries[Any]) -> Timeseries[Any]:
    """
    For each interval, it linearly interpolates value of timeseries 'obj' towards value of timeseries 'to'
    based on value of timeseries 'scale'
    
    newValue = (1-scale) * oldValue + scale * to
    
    If a data point is completely missing (fully gap, fully unavailable, or part gap part unavailable), we
    do not use him for calculations. Their scaled value is always 'oldValue'.
    
    @param obj timeseries to be lerped
    @param to  timeseries towards which we lerp
    @param scale timeseries representing scale (values have to be between 0 and 1)
    
    @return timeseries with values linearly interpolated
    """
        ...
    def extendAndOrChop(self, start: datetime, end: datetime) -> Timeseries[float]:
    """
    Extends and or chops timeseries based on specified parameters.
    
    @param start
           extension start
    @param end
           extension end
    @return extended and or chopped timeseries based on specified start and end
    """
        ...
    def convertToTimeZone(self, timeZone: TimeZone) -> Timeseries[float]:
    """
    Convert the given timeseries into a specific zone.
    @param timeZone
               Desired time zone {@see TimeZone}
    @return series converted in the desired time zone. Note, the number of data points returned per day (at interval finer
    than day) may vary depending on day light saving changes. The expectation is for the user to ensure
    in their expressions that other series (if any) are also in the same time zone while doing time series math
    """
        ...
    def treatAsTimeZone(self, timeZone: TimeZone) -> Timeseries[float]:
    """
    Assume timeseries to have a particular zone. This api will just replace the zone of the current time series to the
    desired zone
    @param timeZone
               Desired time zone {@see TimeZone}
    @return series in the desired time zone. Note this will just change the time zone of the source time series and
    will not perform any additional checks on the day light savings to adjust the number of data points
    """
        ...
    def chunk(self, chunker: Timeseries[float]) -> Union[Array[Timeseries[float]]]:
    """
    Chops timeseries based on chunker timeseries, sections obj into sections where chunker is truthy
    """
        ...
    @classmethod
    def concat(cls, fst: TSDataFlowEvent[ST], othr: TSDataFlowEvent[ST]) -> TSDataFlowEvent[ST]:
    """
    Concat two timeseries
    """
        ...
    @classmethod
    def rollup(cls, tsArry: Array[TSDataFlowEvent[ST]], statName: str=None, n: float=None) -> Timeseries[Any]:
    """
    @param tsArray
           timeseries to be aggregated
    @param statName
           name of the stat to be computed
    @param n
           input for percentile calculation only, ignored for other stats
    @return point-wise 'statName' calculation of all input timeseries
    """
        ...
    def interpolate(self, interpolatorType: str, performOn: str) -> Timeseries[float]:
    """
    Function to interpolate data within the given timeseries. We support various forms of interpolation techniques
    viz.
    1. ZERO - interpolate 0 values in place of data / gaps/ missing/ unavailable - DEFAULT
    2. LINEAR - linearly interpolate values in place of data / gaps/ missing/ unavailable
    3. PREVIOUS - interpolate immediate previous value that is not 0 (data) / not a gap (GAPS) / not unavailable
    (UNAVAILABLE) / available (MISSING)
    4. NEXT - interpolate immediate next value that is not 0 (data) / not a gap (GAPS) / not unavailable (UNAVAILABLE)
    / available (MISSING)
    Please note : Values are only interpolated if the interval is a complete gap / complete unavailable/ complete
    missing / or value 0
    If they are partially available, values will not be interpolated for those intervals
    Interpolation can be performed on
    1. MISSING - only interpolates values that are missing
    2. DATA - only interpolates values where the value of the interval is 0
    
    @param interpolatorType
           The kind of interpolation technique to apply. Should be one of LINEAR/ ZERO/ PREVIOUS/
           NEXT
    @param performOn
           the kind of data interpolation should be applied on. Should be one of DATA/MISSING
    @return a timeseries where required values are interpolated according to interpolator type specified
    """
        ...
    def cusumDates(self, threshold: float='1') -> Union[Array[datetime]]:
    """
    Analyze the time series to detect positive and negative changes using CUSUM (Cumulative Sum). This method uses the
    availability for the the weight (ω). Missing points are ignored.
    
    Sn+1 = max(0, Sn + xn ωn)
    
    Here _xn_ is the difference between two successive timeseries values and _ωn_ is the availability of the point
    in [0..1]. E.g. the deltas are scaled by how confidently the value is known.
    
    @param threshold CUSUM _threshold_ parameter (must be positive)
    @return dates in time series identified as changes
    @see https://en.wikipedia.org/wiki/CUSUM
    """
        ...
    def toDoubleTimeseries(self) -> Union[Timeseries[float]]:
    """
    Convert, if possible to a double timeseries otherwise throws exception
    """
        ...
    def isIdentity(self) -> bool:
    """
    @return true if its an identity timeseries.
    """
        ...
    def identityValue(self) -> Union[float]:
    """
    @return value if this is an identity timeseries.
    """
        ...
    def isConvertibleToDoubleTimeseries(self) -> bool:
    """
    @return if current timeseries can be converted to double timeseries
    """
        ...
    def availableTimeseries(self) -> Timeseries[float]:
    """
    @return timeseries whose values are availability percentage for every point (computed using unavailableRanges and
            gapRanges).
            <p>
            available = ( 1 - unavailable - gap )
    """
        ...
    def withTimeZone(self, timeZone: TimeZone=None) -> Timeseries[float]:
    """
    @return new timeseries with provided time zone
    """
        ...
    def withTimeInfo(self, timeInfo: TimeInfo) -> Timeseries[float]:
    """
    @return new timeseries with provided time info.
            Note: If time info is changed incompatible to the original length of the time series an error will be
            generated
    """
        ...
    def modulo(self, other: Timeseries[float]) -> Timeseries[float]:
    """
    @param other
           input timeseries
    @return timeseries whose values are point-wise remainder from division of input with self
    """
        ...
    def not(self) -> Timeseries[float]:
    """
    if a point is 0 (false), resultant point will be 1 (true)
    if a point is non-zero (true), resultant point will be 0 (false)
    
    @return timeseries with values point-wise not'ted
    """
        ...
    def ternary(self, trueValue: Any, falseValue: Any) -> Timeseries[Any]:
    """
    Applies ternary operator point-wise.
    <p>
    <li>If a point is true, its new value is 'trueValue'.
    <li>If a point is false, its new value is 'falseValue'.
    
    @param trueValue
           new value for a point if its true.
    @param falseValue
           new value for a point if its false.
    @return timeseries of param's data-type.
    """
        ...
    def applyPeriod(self, period: Period, operator: str) -> Timeseries[Any]:
    """
    Based on the specified period and operator, a new timeseries is returned whose points are obtained by applying the
    period to the interval of every point. The application of the period is governed by the operator.
    <p>
    Formula : (point's interval) operator (period)
    <p>
    Example : a yearly point divided by a period of one day would yield 365 for non-leap years (2010-01-01T00:00:00 to
    2011-01-01T00:00:00) / P1D = 365.
    <p>
    If operator is ADD or SUBTRACT, return type is DateTimeTimeseries.
    <p>
    If operator is MULTIPLY, DIVIDE or MODULO, return type is DoubleTimeseries.
    
    @param period
           input Period.
    @param operator
           mathematical operator to be applied. Supported values are ADD,SUBTRACT,MULTIPLY,DIVIDE,MODULO.
    @return
    """
        ...
    def isInfinityOrNaN(self) -> Timeseries[float]:
    """
    @return a boolean timeseries indicating if the value is infinity or nan
    """
        ...
    def extend(self, start: datetime, end: datetime) -> Timeseries[float]:
    """
    Extends timeseries based on specified parameters.
    
    @param start
           extension start
    @param end
           extension end
    @return extended timeseries based on specified start and end
    """
        ...
    def slicedAvailableTimeseries(self) -> Timeseries[float]:
    """
    Slices the time series only to the available range from the beginning and the end
    
    @return sliced time series based on availability
    """
        ...
    def withMissing(self, missing: Any=None) -> Timeseries[float]:
    """
    Returns a time series with the missing information as returned by the missing timeseries. The data part of input timeseries remains the same
    
    Example:
    
    TS.data:
    
    ```
       1       2       3       4
    |-------|-------|-------|------|
    t1      t2      t3      t4     t5
    ```
    
    TS.missing:
    
    ```
      false   false   false   false
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    `withMissing(TS, missing(TS)/2)`:
    
    ```
        1       2       3       4
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    ```
    
    The above `withMissing(TS, missing(TS)/2)` is calculated as follows:
    ```
        0       25      5       10
    |-------|-------|-------|-------|
    t1      t2      t3      t4      t5
    
    @param timeseries
           input time series
    @param missing
           value to be used for missing values (usually Timeseries or identity double value)
    @return A time series that has missing values filled with the missing Timeseries
    """
        ...
    def skipIfMissing(self, percent: int, equality: str=None) -> Timeseries[float]:
    """
    For each point in TS, if percent missing satisfies the specified equality operator condition based on specified
    percent value, it makes that point fully missing.
    
    @param equality
           Operator to be applied. Permissible values are ED,NQ,LT,LTE,GT,GTE.
    @param percent
           percent value (0 <= value <= 100).
    @return new timeseries with skipped (fully not available) data points.
    """
        ...
    def bit(self, bitIndex: int) -> Timeseries[float]:
    """
    For each point in TS, get its integer representation and obtain the "bitIndex" parameter value.
    
    @param bitIndex
           bit index (starting with 0 and increasing towards MSB).
    @return timeseries of bit (0 or 1).
    """
        ...
    def weatherIndependentTimeseries(self, weatherTimeseries: Timeseries[Any], heatingCoolingCoeffs: Array[float]=None, gapThreshold: int=None) -> Timeseries[Any]:
    """
    @param weatherTimeseries
           The weather timeseries that should be used to remove the weather component from input timeseries.
    @param heatingCoolingCoeffs
           The heating and cooling coefficients calculated as a part of model generation for the input timeseries.
    @param gapThreshold
           Is used to return the input timeseries if the gaps are greater than this threshold.
    @return a timeseries whose values are weather normalized
    """
        ...
    @classmethod
    def window(cls, agg: str, ts: Callable[[TimeInfo], Timeseries[Any]]=None, offset: float=None, span: float=None, step: float=None, timeInfo: TimeInfo=None) -> Timeseries[Any]:
        ...
    @classmethod
    def operationalWindow(cls, agg: str, dataTs: Callable[[TimeInfo], Timeseries[Any]]=None, operationalTs: Callable[[TimeInfo], Timeseries[Any]]=None, operationalOffset: float=None, operationalSpace: float=None, timeInfo: TimeInfo=None) -> Timeseries[Any]:
        ...
    @classmethod
    def eval(cls, agg: str, interval: str, ts: Callable[[TimeInfo], Timeseries[Any]]=None, start: Any=None, end: Any=None, timeInfo: TimeInfo=None) -> Timeseries[Any]:
    """
    API to evaluate a timeseries with custom time info
    
    @param agg
           Aggregation function to be used in order to aggregate / dis aggregate resultant data in original period
    @param overrideInterval
           Overridden interval for evaluating ts
    @param ts
           Timeseries to be evaluated
    @param overrideStart
           Overridden start date for evaluating ts
    @param overrideEnd
           Overridden end date for evaluating ts
    @param queryTimeInfo
           Original info to which the result will be converted
    @return TS aggregated / disaggregated to the queryTimeInfo after evaluating it at overriden period
    """
        ...
    @classmethod
    def sineWave(cls, timeInfo: TimeInfo, waveStart: datetime=None, amplitude: float=None, frequency: float=None, phase: float=None) -> Timeseries[Any]:
    """
    Generates a sine wave timeseries using following formula:
    <p>
    y(t) = amplitude * sin(2 * PI * frequency * t + phase )
    
    @param timeInfo
           timeseries time info.
    @param waveStart
           timestamp of the wave start i.r. where it is at first 0 value.
    @param amplitude
           peak deviation of the value from zero.
    @param frequency
           in oscillations (cycles) per second.
    @param phase
           (in radians) where in its cycle the oscillation is at t = 0.
    @return timeseries representing a sine wave.
    """
        ...
    @classmethod
    def squareWave(cls, timeInfo: TimeInfo, timeComponent: str, pulseStart: int, pulseEnd: int) -> Timeseries[Any]:
    """
    Generates a square wave timeseries using specified start and end
    Grain is determined based on specified timeComponent
    A point's value is 1 if that point's datetime falls within the specified range, 0 otherwise
    Here are the supported timeComponent values with allowed values for pulseStart and pulseEnd :
    HOUR - 0 to 23
    DAYOFWEEK - 1 to 7
    DAYOFYEAR - 1 to 365/366
    
    @param start
           timeseries start
    @param end
           timeseries end
    @param timeComponent
           timeComponent value to be used for determining grain of result timeseries
    @param timeZone
           timeZone of result timeseries
    @param pulseStart
           index inclusive
    @param pulseEnd
           index exclusive
    @return timeseries representing a square pulse signal based on above parameters
    """
        ...
    def countTimeseries(self) -> Timeseries[float]:
    """
    @return total number of available points in every interval in the timeseries
    """
        ...
    @overload
    @classmethod
    def randomTimeseries(cls, timeInfo: TimeInfo, origin: float, bound: float) -> Timeseries[Any]:
    """
    Generates a timeseries with random values using specified start and end
    
    @param timeInfo
           the time info of the timeseries (start, end, interval, timezone)
    @param origin
           the lower bound for random value (inclusive)
    @param bound
           the upper bound for random value (exclusive)
    @return timeseries with values uniformly distributed between the lower and upper limits.
    """
        ...
    @overload
    @classmethod
    def randomTimeseries(cls, timeInfo: TimeInfo, spec: Timeseries.RandomSpec=None) -> Timeseries[Any]:
    """
    Generates a timeseries with random values using specified start and end
    
    @param timeInfo
           the time info of the timeseries (start, end, interval, timezone)
    @param spec
           random options
    @return timeseries with values generated as per the spec
    """
        ...
    @classmethod
    def linearRecurrenceTimeseries(cls, ti: TimeInfo=None, initialValues: Array[float]=None, doubleArray: Array[Array[float]]=None) -> Timeseries[Any]:
    """
    The function will generate a Timeseries recursively, using a minimum of 2
    double arrays and initial values(s). The data points in the series is
    generate as x_(n) = Array1[n] + Array2[n] * x_(n-1) + Array3[n] * x_(n-2)
    + ... . The first point generated will be x_(0), and it requires the
    initial values x_(-1), x_(-2), ... .";
    
    @param timeInfo
           the time info for the timeseries
    @param initialValues
    @param doubleArray
    @return
    """
        ...
    @classmethod
    def haversineDistance(cls, xLat: Timeseries[Any]=None, xLong: Timeseries[Any]=None, yLat: Timeseries[Any]=None, yLong: Timeseries[Any]=None) -> Timeseries[Any]:
    """
    @param xLat
           representing xLat co-ordinates
    @param xLong
           representing xLong co-ordinates
    @param yLat
           representing yLat co-ordinates
    @param yLong
           representing yLong co-ordinates
    @return
    """
        ...
    def correlation(self, kind: str, ts: Timeseries[Any]) -> Timeseries[Any]:
    """
    Compute correlation between two time series
    
    @param kind
           Kind of correlation desired {@see CorrelationKind}
    @param y
           Timeseries against which correlation needs to be computed
    @return correlation coefficient between two time series
    """
        ...
    def pearsonCorrelation(self, ts: Timeseries[Any]) -> Timeseries[Any]:
    """
    A Pearson correlation is a number between -1 and 1 that indicates the extent to which two variables are linearly
    related.
    The Pearson correlation is also known as the “product moment correlation coefficient” (PMCC) or simply
    “correlation”.
    
    @param ts
           Timeseries against which correlation needs to be computed
    @return the pearson correlation (identity) in between the given and the input ts
    """
        ...
    def registerReadInterpolator(self, resetOper: str=None, resetThreshold: float=None, rolloverMax: float=None) -> Timeseries[Any]:
    """
    Function to registerReadInterpolator, specifically, for data that is monotonically increasing.
    (e.g.register reads)
    Values will be interpolated based on values of the next non-zero data point.
    Zero values before the first non zero data point will all be kept as 0s. Similarly points after the last non-zero
    data points will be kept as 0s.
    Example:
    (10)                                      x      x
    (3)                  x
    (2)    x
    |------|------|------|------|------|------|------|------|
    0      1      2      3      4      5      6      7      8
    
    results in:
    
    0d    0.5d   0.5d   7/3d   7/3d   7/3d    0d     0d     0d
    |------|------|------|------|------|------|------|------|
    0      1      2      3      4      5      6      7      8
    
    @param ts
           input timeseries on which rolling diff needs to be applied
    @param resetValue
           reset drop threshold value based on the operation above.
           e.g. reset the value to current value when
           1. PERCENT value of drop is 5%
           2. value of drop is Greater than Equal to (GTE) 0
           3. value of drop is Greater than (GT) 0
    @param resetOper
           reset operation to be applied on the value. Should be one of PERCENT / GTE, GT
    @param rolloverMax
           max value allowed for the timeseries after which it rolls over. The following formula will be used
           when a rollover after this value happens:
           nextValue = (rolloverMax - currentValue) + nextValue
    @return a timeseries which has values interpolated for monotonically increasing timeseries
    """
        ...
    def truthValue(self) -> Union[Array[bool]]:
    """
    Compute a single representative truth value based on data
    If all data values are falsy, result is false
    If all data values are truthy, result is true
    Else result is null
    """
        ...
    def exponentialDecay(self, reset: Timeseries[Any]=None, width: int=None, decay: float=None) -> Timeseries[Any]:
    """
    @param resetTimeseries
           Reset timeseries for flushing the value of running sum. If set, from that point onwards the running sum
           will be reset to 0
    @param width
           No of intervals before gamma = decay
    @param decay
           After width interval the reduction in value will be decay
    @return a timeseries where each value is computed as the exponential decay at that point
    """
        ...
    def linearDecay(self, width: int) -> Timeseries[Any]:
    """
    @param width
           No of intervals before gamma = decay
    @return a timeseries where each value is computed as the linear decay at that point
    """
        ...
    def removeOutliers(self, span: int=None, threshold: float=None) -> Timeseries[Any]:
    """
    Function to remove outliers from the given timeseries
    By applying a moving median window and a moving median absolute deviation we define moving upper and lower
    outlier bounds outside of which we consider data points to be outliers that need to be cleaned.
    Default for span is 30 and threshold is 3
    Logic: TS > window(‘MEDIAN’, TS, -span, span, 1) - threshold * 1.48 * window(‘MEDIAN’, abs(TS - window(‘MEDIAN’,
    TS, -span, span, 1)), -span, span, 1) ? (TS < window(‘MEDIAN’, TS, -span, span, 1) + threshold*1.48 *
    window(‘MEDIAN’, abs(TS - window(‘MEDIAN’, TS, -span, span, 1)), -span, span, 1) ? TS : 0) : 0
    
    @param ts
           Input timeseries on which outliers needs to be removed
    @param span
           No of intervals for moving window
    @param threshold
           for standard deviation
    @return Outlier removed timeseries
    """
        ...
    def earliestAvailableValue(self) -> Timeseries[Any]:
    """
    @return the earliest AVAILABLE data. This means that if some part at the beginning of the series is missing
            then we return the first value from the beginning where missing value is non 1.
    """
        ...
    def latestAvailableValue(self) -> Timeseries[Any]:
    """
    @return the latest AVAILABLE data. This means that if some part at the end of the series is missing
            then we return the first value from the end where missing value is non 1.
    """
        ...
    @classmethod
    def stitch(cls, timeserieses: Array[Timeseries[Any]]=None, timeInfo: TimeInfo=None) -> Timeseries[Any]:
    """
    @param timeserieses
           The array of timeseries that need to be stitched
    @param timeInfo
           Time info for the new stitched timeseries
    @return stitched timeseries
    """
        ...
    @classmethod
    def makeMissing(cls, missingPercent: int, value: float, ti: TimeInfo=None, unit: Unit=None) -> Timeseries[Any]:
    """
    API to create a timeseries with unavailable of a given percentage with a specified value and unit
    
    @param ti
           Time information about the timeseries to be created
    @param missingPercent
           Percentage of missing desired in the result, value between 0 & 100
    @param dataValue
           Value of the data point while keeping gaps - Values will be same in all intervals
    @param dataUnitId
           Unit for the values
    @return Timeseries with the above mentioned specs
    """
        ...
    def getDefaultUnavailableValue(self) -> Union[Any]:
    """
    @return default unavailable value
    """
        ...
    def view(self, slicedStart: datetime, slicedEnd: datetime) -> Timeseries[float]:
    """
    API to provide a view on top of the timeseries. This does not create a new timeseries structure but just provides
    a thin view on top of the original timeseries.
    
    @param slicedStart
           Start date of the view (should be more than or equal to start)
    @param slicedEnd
           End date of the view (should be less than or equal to end)
    @return a view of the timeseries
    """
        ...
    def compare(self, other: Timeseries[float]) -> Union[str]:
    """
    Compare two timeseries and output the field that is different. Returns null if all values are the same
    """
        ...
    def asciiChart(self, height: int, events: Array[datetime]=None) -> Union[str]:
    """
    Produce an ASCII chart of the timeseries with the specified overall height, width corresponding to the number
    of X values and with the specified events marked on the X axis.
    """
        ...
    @overload
    @classmethod
    def fromValues(cls, tsInfo: TimeseriesInfo, values: Collection[Any]=None, unit: Unit=None) -> Timeseries[Any]:
    """
    Generates timeseries from specified value(s). Think of it as a packaging method i.e. Constructors
    Values generated as a result of this method will be normalized values i.e. length of the values array should match
    the length of the Timeseries as computed by the input TimeInfo
    
    @param timeInfo
           time information for a timeseries.
    @param value
           optional value.
    @return timeseries based on input value.
    """
        ...
    @overload
    @classmethod
    def fromValues(cls, timeInfo: TimeInfo, values: Collection[Any]=None, unit: Unit=None, missing: Collection[bool]=None) -> Timeseries[Any]:
        ...
    @classmethod
    def fromValue(cls, timeInfo: TimeInfo, value: Any=None, unit: Unit=None) -> Timeseries[Any]:
        ...
    @classmethod
    def fromCollection(cls, values: Collection[Any]=None, spec: TimeseriesFromCollectionSpec=None) -> Timeseries[Any]:
    """
    Returns a Timeseries with TimeInfo constructed via {@link TimeInfo#fromValueCount} based on just the input values
    passed in. For Timeseries<double>, input values containing null will automatically be converted to values with missing
    for downstream computation
    
    E.g.
    ```js
     Let's assume today (now) is 2020-10-10T14:23:12
     Timeseries.fromValues([1,2,null,5])
    =>  {"_data":[1,2,0,5], "tsInfo": { start:"2010-10-06", end:"2010-10-10", interval:"DAY", missing: [false,false,true,false]} }
    ```
    """
        ...
    @classmethod
    def typeToTsDynType(cls, type: Type, startField: str=None, groupField: str=None) -> Type:
    """
    Constructs a dynamic type by converting numeric fields into Timeseries fields and preserving the date time field
    on which Timeseries is constructed. If startField is null, then no date time fields are available on the resultant Type
    If input type is {@link Partitionable} then the partition key field will also be present as a part of the result
    type
    
    E.g. Timeseries.toDynType(AnimalHealthReading, "start")
    ```type
      @db(partitionkeyField="parent")
      type AnimalHealthReading mixes Partitionable<string> {
        start: datetime
        heartRate: double
        wbcCount: int
        parent: string
      }
    
    //=> Resultant type:
     @db(partitionkeyField="parent")
     type Obj_<DynamicTypeSuffix> mixes Partitionable<string> {
        start: datetime
        heartRate: Timeseries<double>
        wbcCount: Timeseries<double>
        parent: string
     }
    ```
    """
        ...
    @classmethod
    def tsDynTypeToType(cls, dynType: Type) -> Type:
    """
    Constructs a flattened type from the existing dynamic type by converting Timeseries fields into numeric fields
    preserving the date time field on which Timesries was constructed. Only numeric fields will be returned if no
    datetime fields are available on the dynamic Timeseries type.
    If input type is {@link Partitionable} then the partition key field will also be present as a part of the result
    type
    """
        ...
    @classmethod
    def tsFieldObjs(cls, dynTsType: Type, rows: Map[Any, Map[str, Timeseries[Any]]]=None) -> Union[Array[Obj]]:
    """
    Converts the input indexed by partitionKey & field name to rows of dynamic Timeseries type @see tsDynTypeToType
    
    If partition key index is null, then it is assumed that the dynTsType is not {@link Partitionable} and the resultant
    object will not contain the field
    
    E.g.
    ```js
    dynTsType=
     @db(partitionkeyField="parent")
     type Obj_<DynamicTypeSuffix> mixes Partitionable<string> {
        start: datetime
        heartRate: Timeseries<double>
        wbcCount: Timeseries<double>
        parent: string
     }
    
    rows = <partition_key1, <heartRate, {_data:[1,2,3], tsInfo: {start:"2010-01-01", end:"2010-01-03", interval:"DAY"}}>>
    
    Timeseries.toTsFieldObjs(dynTsType, rows)
    =>
    [{ "parent": "partition_key1", heartRate: {_data:[1,2,3], tsInfo: {start:"2010-01-01", end:"2010-01-03", interval:"DAY"} }]
    """
        ...
    @classmethod
    def objsFromTsFields(cls, rows: Array[Obj]=None, spec: ObjsFromTsSpec=None) -> Union[Array[Obj]]:
    """
    Converts the input objs with Timeseries fields to rows of dynamic type. If input objs are not objs with Timeseries
    fields, the same Array will be returned
    
    If partition key index is null, then it is assumed that the dynTsType is not {@link Partitionable} and the resultant
    object will not contain the field
    
    User can also provide the targetType, if they already have that information. In absence of it, a dynamic type using
    {@link #tsDynTypeToType} will be created and used.
    E.g.
    ```js
    type=
     @db(partitionkeyField="parent")
     type Obj_<DynamicTypeSuffix> mixes Partitionable<string> {
        start: datetime
        heartRate: double
        wbcCount: double
        parent: string
     }
    
    rows = { parent: "partition_key1", "heartRate" : {_data:[1,2,3], tsInfo: {start:"2010-01-01", end:"2010-01-03", interval:"DAY"} }
    
    Timeseries.objsFromTsFields(rows)
    =>
    [{ "parent": "partition_key1", heartRate: 1, start:"2010-01-01" },
     { "parent": "partition_key1", heartRate: 2, start:"2010-01-02" },
     { "parent": "partition_key1", heartRate: 3, start:"2010-01-03" }]
    """
        ...
    @classmethod
    def tsFieldsFromSpec(cls, data: Collection[Any]=None, tsFieldSpec: Map[str, TimeseriesFieldSpec]=None, spec: TimeseriesSpecBase=None) -> Union[Map[str, Timeseries[Any]]]:
    """
    Converts the `numeric` columns on the given Collection into Timeseries columns. Currently non-numeric columns will be dropped from the
    result
    
    Note: here the data is already assumed to be grouped by Timeseries headers (if there are no header fields, it is
    assumed that the entire Collection is for the same Timeseries)
    
    E.g.
    ```js
    col = [{ "a" : 0.9, "b" : 1, "c": "foo", "d": "2010-01-01", "e": true  },
           { "a" : 1.1, "b" : 2, "c": "bar", "d": "2010-01-02", "e": false  },
           { "a" : 2.1, "b" : 3, "c": "foo", "d": "2010-01-03", "e": false  }]
    
    // fromTsFieldSpec using a period of 1 month on field "d" as the date index of the resulting Timeseries
    r = Timeseries.fromTsFieldSpec(col, {"a": { aggFunc: "SUM" }, "b": { aggFunc: "AVG" }}, { startExpr:"d", interval:"DAY"})
    => [{ "a": {"_data":[0.9,1.1,2.1], "tsInfo": { start:"2010-01-01", end:"2010-01-03", interval:"DAY"} },
          "b": {"_data":[1,2,3], "tsInfo": { start:"2010-01-01", end:"2010-01-03", interval:"DAY"} }]
    
    @param data
               Input Collection from which Timeseries needs to be constructed
    @param tsFieldSpec
               Timeseries field spec for individual fields indicating how to construct the Timeseries
               E.g. {"a": { aggFunc: "SUM" }}
    @param spec
               Timeseries spec determining the time range / date time index common across all ts fields
    @return structure where only numeric columns are converted to Timeseries
    """
        ...
    def convertToMask(self, keep: bool=None) -> Timeseries[float]:
    """
    Generates mask Timeseries from the input Timeseries. If keep is set to true, then mask Timeseries will
    be inverse of the dates / time range passed in the filter. Useful for asOf handling in which case you want to keep
    the values in the range
    """
        ...
    def applyMask(self, cols: Array[str], mask: Timeseries[float]) -> Union[Array[Data.Column]]:
    """
    Apply mask and return Data.Column with timestamp and values
    @param cols
               Columns to return in the result
    @param mask
               Filter to apply Timeseries -> this should be
               Anything that is in this date range will be masked out (removed) from the end result
    @return apply filtering and return the columns
    """
        ...
    def all(self, spec: AggSpec=None) -> Union[R]:
        ...
    @overload
    def agg(self, aggFunc: str, percentile: float=None) -> Union[float]:
        ...
    @overload
    def agg(self, spec: AggSpec, aggregator: Callable[[Union[R], Union[float]], Union[R]]) -> Union[R]:
        ...
    @overload
    def agg(self, spec: AggSpec, op: str) -> Union[R]:
        ...
    @overload
    def agg(self, spec: AggSpec, folder: Callable[[Union[T], Union[float]], Union[T]], aggregator: Callable[[Union[R], Union[T]], Union[R]]) -> Union[R]:
        ...
    def interval(self) -> str:
        ...
    def timeZone(self) -> Union[TimeZone]:
        ...
    @classmethod
    def typeOf(cls, vt: ValueType=None) -> Type:
    """
    Returns a new Timeseries type bound to the given value type
    """
        ...
    def eq(self, other: Any) -> Union[Timeseries[R]]:
        ...
    def gt(self, other: Any) -> Union[Timeseries[R]]:
        ...
    def ge(self, other: Any) -> Union[Timeseries[R]]:
        ...
    def lt(self, other: Any) -> Union[Timeseries[R]]:
        ...
    def le(self, other: Any) -> Union[Timeseries[R]]:
        ...
    def ne(self, other: Any) -> Union[Timeseries[R]]:
        ...

