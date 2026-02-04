#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.DataImpl.Lazy import DataImpl.Lazy
from c3.platform.ToPySrcSpec import ToPySrcSpec
from c3.platform.Include import Include
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data.UInt64Index import Data.UInt64Index
from c3.platform.FieldPath import FieldPath
from c3.platform.PkgInference import PkgInference
from c3.platform.StreamType import StreamType
from c3.platform.Mutable import Mutable
from c3.platform.Promise import Promise
from c3.platform.Data.Visitor import Data.Visitor
from c3.platform.Map import Map
from c3.platform.PyAst.Module import PyAst.Module
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data.Series import Data.Series
from c3.platform.Dataset import Dataset
from c3.platform.FieldType import FieldType
from c3.platform.Data.IndexBase.Ref import Data.IndexBase.Ref
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Data.IntervalIndex import Data.IntervalIndex
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.Data.RangeIndex import Data.RangeIndex
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Iterator import Iterator
from c3.platform.DataToWorkflowSpec import DataToWorkflowSpec
from c3.platform.Data.IndexBase import Data.IndexBase
from c3.platform.SetType import SetType
from c3.platform.DataToPyAstVisitorCtx import DataToPyAstVisitorCtx
from c3.platform.AnySlice import AnySlice
from c3.platform.MapType import MapType
from c3.platform.Data.Flow import Data.Flow
from c3.platform.DataImpl import DataImpl
from c3.platform.Exclude import Exclude
from c3.platform.Data.DatetimeIndex import Data.DatetimeIndex
from c3.platform.Data.IndexBase.Pandas import Data.IndexBase.Pandas
from c3.platform.Action import Action
from c3.platform.Data.TimedeltaIndex import Data.TimedeltaIndex
from c3.platform.Data.Index import Data.Index
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.Data.CategoricalIndex import Data.CategoricalIndex
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Data.Float64Index import Data.Float64Index
from c3.platform.Data.Int64Index import Data.Int64Index
from c3.platform.Data.PeriodIndex import Data.PeriodIndex
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.DataToFlowSpec import DataToFlowSpec
from c3.platform.Workflow import Workflow
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Data.CheckEqualsSpec import Data.CheckEqualsSpec
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.Data.MultiIndex import Data.MultiIndex

# Python definitions for the C3 type Data.TimedeltaIndex.Ref


class Ref(Data.IndexBase.Ref, Data.TimedeltaIndex):
    """
    Implementation of {@link DataImpl.Ref} for {@link Data.TimedeltaIndex}
    
    @remarks this represents a made instance of Data.TimedeltaIndex.Ref
    """
    
    ds: Optional[Dataset]
    """
    Dataset which this Data belongs to
    """

    id: Optional[str]
    """
    Id used to reference this Data within the Dataset to which it belongs
    """

    ref: Optional[Union[str,DataImpl.Lazy]]=None
    """
    Pointer to the underlying {@link DataImpl} that this DataImpl.Ref represents. Either an instance of {@link DataImpl.Lazy} or a
    reference to a {@link Data.Stateful} by {@link Data.Stateful#id}. There is never a need for any client or
    downstream platform code to ever directly use this field. Use {@DataImpl#dereference} to follow the pointer if
    required.
    """
    def __init__(self, ds: Optional[Dataset]=None, id: Optional[str]=None, ref: Optional[Union[str,DataImpl.Lazy]]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[Data.TimedeltaIndex.Ref]:
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
    def fromJsonString(cls, json: str) -> Union[Data.TimedeltaIndex.Ref]:
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
    def fromXmlString(cls, xml: str) -> Union[Data.TimedeltaIndex.Ref]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.TimedeltaIndex.Ref]:
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
    def replaceType(self, old: Type, new: Type) -> Data.TimedeltaIndex.Ref:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.TimedeltaIndex.Ref]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.TimedeltaIndex.Ref]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def validateObj(self) -> Data.TimedeltaIndex.Ref:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def withoutFieldAtPath(self, path: str) -> Data.TimedeltaIndex.Ref:
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
    def withoutField(self, field: str) -> Data.TimedeltaIndex.Ref:
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
    def withoutField(self, field: FieldType) -> Data.TimedeltaIndex.Ref:
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
    def withoutFields(self, fields: Array[str]) -> Data.TimedeltaIndex.Ref:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.TimedeltaIndex.Ref:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Data.TimedeltaIndex.Ref:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.TimedeltaIndex.Ref:
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
    def defaultField(self, field: str) -> Data.TimedeltaIndex.Ref:
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
    def defaultField(self, field: FieldType) -> Data.TimedeltaIndex.Ref:
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
    def unsetField(self, field: str) -> Data.TimedeltaIndex.Ref:
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
    def unsetField(self, field: FieldType) -> Data.TimedeltaIndex.Ref:
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
    def removeField(self, field: str) -> Data.TimedeltaIndex.Ref:
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
    def removeField(self, field: FieldType) -> Data.TimedeltaIndex.Ref:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.TimedeltaIndex.Ref:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.TimedeltaIndex.Ref:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.TimedeltaIndex.Ref:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.TimedeltaIndex.Ref:
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
    def mergeJson(self, json: any) -> Data.TimedeltaIndex.Ref:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.TimedeltaIndex.Ref:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Data.TimedeltaIndex.Ref:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Data.TimedeltaIndex.Ref]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @overload
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Data.TimedeltaIndex.Ref]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @overload
    def array(self) -> Union[Array[Any]]:
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Data.TimedeltaIndex.Ref]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Data.TimedeltaIndex.Ref]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Data.TimedeltaIndex.Ref]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Data.TimedeltaIndex.Ref]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.TimedeltaIndex.Ref]]:
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
    def toBuilder(self) -> ObjBuilder[Data.TimedeltaIndex.Ref]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Data.TimedeltaIndex.Ref]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.TimedeltaIndex.Ref:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.TimedeltaIndex.Ref:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Data.TimedeltaIndex.Ref:
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
    @overload
    @classmethod
    def make(cls) -> Data.TimedeltaIndex.Ref:
    """
    Construct an instance with initial state.
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.TimedeltaIndex.Ref:
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
    def afterMake(self) -> Data.TimedeltaIndex.Ref:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Data.TimedeltaIndex.Ref:
    """
    Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
    every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
    Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
    
    @see ValueType#defaultEmptyValue
    """
        ...
    def toData(self) -> Union[Data]:
    """
    Represent the current obj instance as {@link Data}
    """
        ...
    @classmethod
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.TimedeltaIndex.Ref]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.TimedeltaIndex.Ref:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def visit(self, visitor: Data.Visitor[C], ctx: C) -> Union[C]:
    """
    Visits this {@link DataVisitable} instance using provided {@link DataVisitor}
    
    @param visitor
           DataVisitor that implements visitation of this DataVisitable instance
    @param name
           parameter or field name of currently visited {@link DataVisitable} instance
    @param ctx
           state that is passed along with visitor
    """
        ...
    def toString(self) -> Union[str]:
    """
    String-based representation of instance of this type.
    """
        ...
    @classmethod
    def _exec(cls, action: Action) -> Union[Any]:
    """
    Generically handles all static lazy methods.
    """
        ...
    def dataset(self) -> Dataset:
    """
    returns parent dataset if subtype is a {@link Data.Stateful}. Otherwise, throws an error.
    """
        ...
    def sourceName(self) -> str:
    """
    @return name of the {@link Source} type from which the data originates
    """
        ...
    def concreteId(self) -> str:
    """
    @return name used to reference concrete DataImpl for execution
    """
        ...
    def toPyAst(self, spec: ToPySrcSpec=None) -> PyAst.Module:
    """
    Converts this DataImpl to a {@link PyAst.Module} that can be executed by {@link DataImpl#fromPySrc).
    """
        ...
    def toPySrc(self, spec: ToPySrcSpec=None) -> str:
    """
    Converts this DataImpl to Python source code that can be executed by {@link DataImpl#fromPySrc).
    """
        ...
    def toDataToPyAstVisitorCtx(self, spec: ToPySrcSpec=None) -> DataToPyAstVisitorCtx:
    """
    Converts this DataImpl to {@link DataToPyAstVisitorCtx} that can be converted to a python AST.
    Calls the implementation specific to the running execution mode.
    """
        ...
    def dereference(self) -> Union[Data.IndexBase]:
        ...
    def toWorkflow(self, spec: DataToWorkflowSpec=None) -> Union[Workflow]:
    """
    Creates {@link Workflow} representation of this DataImpl. {@link DataImpl.Lazy} instances are represented as
    {@link Workflow.Action} vertices with arguments represented as {@link Workflow.Const} vertices. Concrete Data
    subtypes (e.g. {@link Data.Pandas}) are represented as Workflow.Const vertices.
    """
        ...
    def toDataFlow(self, spec: DataToWorkflowSpec=None) -> Union[PkgInference]:
    """
    Creates Data.Flow representation of this Data. See {@link Data#toWorkflow}
    """
        ...
    def toRealDataFlow(self, spec: DataToFlowSpec=None) -> Union[Data.Flow]:
        ...
    def cache(self, ds: Dataset=None) -> Union[Data.IndexBase]:
    """
    Cache and return a concrete {@link DataImpl} according to this Data's execution mode.
    If a dataset is provided, the resulting {@link DataImpl} will be stateful and belong to that dataset,
    otherwise it will be stateless.
    if `cache` is invoked on a {@link Data.Lazy}, the corresponding concrete {@link DataImpl} will be cached on
    this instance with the dataset id as cache key, or {@link DataImpl.Lazy#STATELESS_CACHE} if
    no dataset is provided. see for example {@link Data.Lazy#_toPandas}.
    """
        ...
    def toDataRef(self, ds: Dataset=None) -> Data.IndexBase.Ref:
    """
    Creates a DataRef in the provided Dataset which points to ths. Overloaded to add Dataset parameter for stateless
    DataImpl. If not provided, dataset will default to Dataset.inst(). If a Dataset is provided to stateful Data, an
    exception will be thrown
    """
        ...
    def isMutable(self) -> bool:
    """
    @return true if the DataImpl is mutable, false otherwise. Currently, only {@link DataImpl.Ref} and its subtypes are
    mutable, others including {@DataImpl.Pandas}, {@DataImpl.Lazy} are immutable.
    """
        ...
    def isCached(self, ds: Dataset=None) -> bool:
    """
    @return true if the DataImpl is cached, false otherwise. Always true for concrete subtypes of DataImpl. For
    {@link DataImpl.Lazy}, checks if the lazy chain has been cached in memory as a concrete subtype.
    Cache is keyed by {@link Dataset#id} if a dataset is provided and otherwise by key meaning the concrete type
    that is in the cache does not belong to a dataset.
    {@link DataImpl.Lazy#STATELESS_CACHE}
    """
        ...
    def supportsMultiNode(self) -> bool:
    """
    @return true iff this instance can be transferred across nodes.
    """
        ...
    @classmethod
    def fromPySrc(cls, pySrc: str, dfs: Set[DataImpl]=None, vars: Map[str, Any]=None, dataset: Dataset=None) -> Union[Data.TimedeltaIndex.Ref]:
    """
    Creates a new DataImpl by executing the string PySrc provided.
    Following are reserved keywords in the provided source:
     * `pd`: will refer to `import pandas as pd`
     * The sourceName of each Data in the `dfs` set
    """
        ...
    @overload
    @classmethod
    def executePySrc(cls, pySrc: str, dfs: Set[DataImpl]=None, doNotConvert: bool=None) -> Union[Any]:
    """
    Execute pySrc code on this DataImpl and return the result without storing it
    Following are reserved keywords in the provided source:
     * `pd`: will refer to `import pandas as pd`
     * The sourceName of each DataImpl in the `dfs` set
     * The result is stored in 'ret'. Ex. 'ret=XXX' in pySrc
    
    @param pySrc
           The python source code that is executed in python
    @param dfs
           The set of DataImpls that are used in the executed python source code
    @param doNotConvert
           Whether to keep as Data/Data.Series or flatten the returned data into a c3 serializable type
    """
        ...
    @overload
    @classmethod
    def executePySrc(cls, pySrc: str, dfs: Map[str, DataImpl]=None, doNotConvert: bool=None) -> Union[Any]:
    """
    Execute pySrc code on this DataImpl and return the result without storing it
    Following are reserved keywords in the provided source:
     * `pd`: will refer to `import pandas as pd`
     * The sourceName of each DataImpl in the `dfs` map
     * The result is stored in 'ret'. Ex. 'ret=XXX' in pySrc
    
    @param pySrc
           The python source code that is executed in python
    @param dfs
           The Map of ConcreteId and corresponding DataImpls that are used in the executed python source code
    @param doNotConvert
           Whether to keep as Data/Data.Series or flatten the returned data into a c3 serializable type
    """
        ...
    def close(self) -> None:
    """
    Releases all resources being used by this {@link DataImpl}.
    For example, for {@link Data.Stateful}, this removes the {@link Data} from its Dataset, thereby freeing up
    the memory.
    For {@link Data.Persisted}, this removes the persisted data.
    """
        ...
    @classmethod
    def isMutableOperator(cls, action: Action) -> bool:
    """
    @return if given method name is mutable on DataImpl
    @see DataImpl.Ref#mutableOperators
    """
        ...
    @classmethod
    def _jsDataProxy(cls, inst: Any) -> Data.TimedeltaIndex.Ref:
    """
    Build a JavaScript **Proxy** that supports the various Data protocols, notably {@Link LengthProtocol} and
    {@link MutableItemProtocol} according to the Pandas model of item access.
    """
        ...
    def asLazy(self) -> DataImpl.Lazy:
    """
    Convenience helper to functionally cast this DataImpl to a {@link DataImpl.Lazy}. Throws an error if this is not
    a {@link DataImpl.Lazy}
    """
        ...
    @classmethod
    def checkEquals(cls, first: DataImpl, second: DataImpl, spec: Data.CheckEqualsSpec=None) -> bool:
    """
    The function is intended to compare two DataImpl objects for use in unit tests. Parameters allow varying the
    strictness of the equality checks performed. This function is a mirror for pandas.testing.assert_frame_equal and:
    pandas.testing.assert_series_equal
    
    @param first
              the first DataImpl to compare
    @param second
              the second DataImpl to compare
    @param spec
              the spec to pass in the arguments for the function
    @return whether the two DataImpls are equal
    """
        ...
    @classmethod
    def getPySrcFromValues(cls, methodName: str, args: Set[DataImpl]=None, keywords: Map[str, Any]=None) -> Union[str]:
    """
    Helper method to create py code using PyAst.Call.fromValues
    
    @param methodName
           The name of the method to be called
    @param args
           The list of DataImpls being passed as arguments to the method
    @param keywords
           The mapping of keyword names to their values. This can be spec.fieldValuesByFieldName().
    """
        ...
    @classmethod
    def getJsSrcFromValues(cls, dataType: str, callerName: str, methodName: str, keywords: Map[str, Any]=None, dataInputNames: Set[str]=None) -> Union[str]:
    """
    Helper method to create js code used for poly test generation
    
    @param dataType
           The DataImpl C3 Type, i.e. "Data" or "Data.Series"
    @param callerName
           The name of the object calling the function
    @param methodName
           The name of the method to be called
    @param keywords
           The mapping of keyword names to their values. This can be spec.fieldValuesByFieldName().
    """
        ...
    @classmethod
    def fromRealDataFlow(cls, dataFlow: Data.Flow) -> DataImpl:
    """
    Re-creates and returns a copy of the {@link DataImpl} used to create the provided {@link Data.Flow}. The returned
    DataImpl instance will represent the only sink of the provided Data.Flow.
    """
        ...
    def collect(self, limit: int=None) -> Union[Array[Any]]:
    """
    Converts the {@link DataImpl} to an array where each entry represents a row
    - If called on a {@link Data.Series}, returns an array of values
    - If called on a {@link Data}, returns an array of tuples where each tuple represents a row and values inside the
      tuple correspond to columns
    - If called on any other Data subtype, throws not implemented error
    
    @param limit
           The number of rows to return
    """
        ...
    def value(self) -> Union[Any]:
    """
    Return content of the Data either as a single value or as a Collection of converted values
    """
        ...
    @overload
    def setField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.TimedeltaIndex.Ref:
    """
    Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
    The value must be of the correct type if doNotConvert flag is true.
    
    @param name
              of the field
    @param value
              of the field
    @param doNotConvert
              if true, attempt to convert the value to match the field's type
    @return this Obj
    """
        ...
    @overload
    def setField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.TimedeltaIndex.Ref:
    """
    Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
    The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              the field
    @param value
              of the field
    @param doNotConvert
              if true, attempt to convert the value to match the field's type
    @return this Obj
    """
        ...
    def onChange(self, changed: Array[str]) -> None:
    """
    Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
    field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
    properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
    collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
    key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
    collection field. This has the same appearance as if the collection field were assigned from a previously
    unassigned value.
    
    Example:
    ```type
    type A mixes MutableObj {
      onChange: ~
      b: [string]
      c: map<string, int>
      d: D
    }
    type D mixes MutableObj {
      onChange: ~
      e: string
    }
    ```
    ```js
    var a = A.make({b: ['hello', 'goodbye'], d: {}});
    a.b[1] = 'World'; // 1
    a.c['hello'] = 'world'; // 2
    a.d.e = 'hello' // 3
    a.b.pop(); // 4
    ```
    `A.onChange` should be called four times:
      1. when the field `b` changed - the FieldPath will be "b[1]".
      2. when the field `c` changed - the FieldPath will be "c.hello".
      3. when `d` changed - the FieldPath will be "d.e".
      4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
    
    `D.onChange` should be called once - the FieldPath will be `e`.
    
    Note that if multiple elements of a child collection are changed, you will get multiple field paths.
    
    @param changed paths to fields that changed
    
    @see #onEdit
    """
        ...
    def onEdit(self, edits: Obj) -> None:
    """
    Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
    contains more information about the values which changed, including their prior values. This allows a full
    difference to be calculated if desired. Note that maintaining this state is much more costly than simple
    notification via #onChange and should only be used if truly required.
    
    @param edits a list of what changed and the prior values
    
    @see #onChange
    """
        ...
    def withoutChangeEvent(self, action: Callable[[Union[Mutable]]]) -> None:
    """
    Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
    
    @param action the lambda to invoke that makes changes without notification
    """
        ...
    def _repr_(self) -> Union[str]:
    """
    Implements Python repr(this)
    """
        ...
    def _item_(self, key: Any) -> Union[Any]:
    """
    Implements the square bracket getter `obj[item]`.
    
    @param key
            item associated with the desired element.
    @return the element associated with the given item
    """
        ...
    def _length_(self) -> int:
    """
    Implements the js `.length` property or py `len()` support.
    @return the number of elements in this instance
    """
        ...
    def iter(self) -> Union[Iterator[Any]]:
    """
    Iterate over the indices.
    """
        ...
    def _iter_(self) -> Union[Any]:
    """
    Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
    """
        ...
    def lessThan(self, other: Any) -> Any:
        ...
    def lessThanEqualTo(self, other: Any) -> Any:
        ...
    def equalTo(self, other: Any) -> Any:
        ...
    def notEqualTo(self, other: Any) -> Any:
        ...
    def greaterThan(self, other: Any) -> Any:
        ...
    def greaterThanEqualTo(self, other: Any) -> Any:
        ...
    def toDataPandas(self, ds: Dataset=None) -> Union[Data.IndexBase.Pandas]:
    """
    Converts this index to a {@link Data.Series.Pandas}.
    If parent dataset is not provided then will use default data set.
    """
        ...
    def getItem(self, fst: Any=None) -> Union[Any]:
        ...
    def repr(self) -> Union[str]:
        ...
    def tolist(self) -> Union[Array[Any]]:
        ...
    def _shape(self) -> Union[Array[Any]]:
        ...
    def shape(self) -> Union[Any]:
    """
    Return a tuple of the shape of the underlying data.
    
    see: https://pandas.pydata.org/docs/reference/api/pandas.Index.shape.html
    """
        ...
    def _join(self, other: Any=None, how: Any=None, level: Any=None, return_indexers: Any=None, sort: Any=None) -> Union[Any]:
        ...
    def join(self, other: Any=None, how: Any=None, level: Any=None, return_indexers: Any=None, sort: Any=None) -> Union[Any]:
    """
    Compute join_index and indexers to conform data structures to the new index.
    
    see: https://pandas.pydata.org/docs/reference/api/pandas.Index.join.html
    """
        ...
    def _sort_values(self, return_indexer: Any=None, ascending: Any=None, na_position: Any=None, key: Callable[[Union[Array[Any]]], Union[Any]]=None) -> Union[Any]:
        ...
    def sort_values(self, return_indexer: Any=None, ascending: Any=None, na_position: Any=None, key: Callable[[Union[Array[Any]]], Union[Any]]=None) -> Union[Any]:
    """
    Return a sorted copy of the index, and optionally return the indices that sorted the index itself.
    
    see: https://pandas.pydata.org/docs/reference/api/pandas.Index.sort_values.html
    """
        ...
    def _factorize(self, sort: Any=None, na_sentinel: int=None) -> Union[Array[Any]]:
        ...
    def factorize(self, sort: Any=None, na_sentinel: int=None) -> Union[Any]:
    """
    Encode the object as an enumerated type or categorical variable.
    
    see: https://pandas.pydata.org/docs/reference/api/pandas.Index.factorize.html
    """
        ...
    def _get_indexer_non_unique(self, target: Any=None) -> Union[Array[Any]]:
        ...
    def get_indexer_non_unique(self, target: Any=None) -> Union[Any]:
    """
    Compute indexer and mask for new index given the current index.
    
    see: https://pandas.pydata.org/docs/reference/api/pandas.Index.get_indexer_non_unique.html
    """
        ...
    def _reindex(self, target: Any=None, method: Any=None, level: Any=None, limit: Any=None, tolerance: Any=None) -> Union[Array[Any]]:
        ...
    def reindex(self, target: Any=None, method: Any=None, level: Any=None, limit: Any=None, tolerance: Any=None) -> Union[Any]:
    """
    Create index with target’s values.
    
    see: https://pandas.pydata.org/docs/reference/api/pandas.Index.reindex.html
    """
        ...
    def _sortlevel(self, level: Any=None, ascending: Any=None, sort_remaining: Any=None) -> Union[Any]:
        ...
    def sortlevel(self, level: Any=None, ascending: Any=None, sort_remaining: Any=None) -> Union[Any]:
    """
    Create index with target’s values.
    
    see: https://pandas.pydata.org/docs/reference/api/pandas.Index.reindex.html
    """
        ...
    def slice_locs(self, start: Any=None, end: Any=None, step: Any=None, kind: Any=None) -> Union[Array[int]]:
    """
    Compute slice locations for input labels.
    see: https://pandas.pydata.org/pandas-docs/version/1.3/reference/api/pandas.Index.slice_locs.html
    """
        ...
    def _slice_locs(self, start: Any=None, end: Any=None, step: Any=None, kind: Any=None) -> Union[Array[int]]:
        ...
    def T(self) -> Union[Data.TimedeltaIndex]:
        ...
    def dtype(self) -> Union[Any]:
        ...
    def empty(self) -> Union[Any]:
        ...
    def has_duplicates(self) -> bool:
        ...
    def hasnans(self) -> Union[Any]:
        ...
    def inferred_type(self) -> Union[str]:
        ...
    def is_all_dates(self) -> Union[Any]:
        ...
    def is_monotonic(self) -> Union[Any]:
        ...
    def is_monotonic_decreasing(self) -> Union[Any]:
        ...
    def is_monotonic_increasing(self) -> Union[Any]:
        ...
    def is_unique(self) -> Union[Any]:
        ...
    def name(self) -> Union[Any]:
        ...
    def names(self) -> Union[Any]:
        ...
    def nbytes(self) -> Union[int]:
        ...
    def ndim(self) -> Union[int]:
        ...
    def nlevels(self) -> Union[int]:
        ...
    def size(self) -> Union[int]:
        ...
    def values(self) -> Union[Any]:
        ...
    def all(self) -> Union[Any]:
        ...
    def any(self) -> Union[Any]:
        ...
    def append(self, other: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def argmax(self, axis: Any=None, skipna: Any=None) -> Union[int]:
        ...
    def argmin(self, axis: Any=None, skipna: Any=None) -> Union[int]:
        ...
    def argsort(self) -> Union[Array[Any]]:
        ...
    def asof(self, label: Any=None) -> Union[Any]:
        ...
    def asof_locs(self, where: Any=None, mask: Any=None) -> Union[Array[Any]]:
        ...
    def astype(self, dtype: Any=None, copy: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def copy(self, name: Any=None, deep: Any=None, dtype: Any=None, names: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def delete(self, loc: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def difference(self, other: Any=None, sort: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def drop(self, labels: Any=None, errors: Any=None) -> Union[Any]:
        ...
    def drop_duplicates(self, keep: Any=None) -> Union[Data.TimedeltaIndex]:
        ...
    def droplevel(self, level: Any=None) -> Union[Union[Data.Index,Data.MultiIndex]]:
        ...
    def dropna(self, how: Any=None) -> Union[Data.TimedeltaIndex]:
        ...
    def duplicated(self, keep: Any=None) -> Union[Array[bool]]:
        ...
    def equals(self, other: Any=None) -> bool:
        ...
    def fillna(self, value: Any=None, downcast: Any=None) -> Union[Any]:
        ...
    def format(self, name: Any=None, formatter: Callable[[Union[Array[Any]]], Union[Any]]=None, na_rep: Any=None) -> Union[Array[str]]:
        ...
    def get_indexer(self, target: Any=None, method: Any=None, limit: int=None, tolerance: Any=None) -> Union[Array[Any]]:
        ...
    def get_indexer_for(self, target: Any=None) -> Union[Array[Any]]:
        ...
    def get_level_values(self, level: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def get_loc(self, key: Any=None, method: Any=None, tolerance: Any=None) -> Union[Array[Any]]:
        ...
    def get_slice_bound(self, label: Any=None, side: Any=None, kind: Any=None) -> Union[int]:
        ...
    def get_value(self, series: Any=None, key: Any=None) -> Union[Any]:
        ...
    def groupby(self, values: Any=None) -> Union[Any]:
        ...
    def holds_integer(self) -> bool:
        ...
    def identical(self, other: Any=None) -> bool:
        ...
    def insert(self, loc: int=None, item: Any=None) -> Union[Any]:
        ...
    def intersection(self, other: Any=None, sort: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def is_(self, other: Any=None) -> bool:
        ...
    def is_boolean(self) -> bool:
        ...
    def is_categorical(self) -> bool:
        ...
    def is_floating(self) -> bool:
        ...
    def is_integer(self) -> bool:
        ...
    def is_interval(self) -> bool:
        ...
    def is_mixed(self) -> bool:
        ...
    def is_numeric(self) -> bool:
        ...
    def is_object(self) -> bool:
        ...
    def is_type_compatible(self, kind: Any=None) -> bool:
        ...
    def isin(self, values: Any=None, level: Any=None) -> Union[Array[Any]]:
        ...
    def isna(self) -> Union[Array[Any]]:
        ...
    def isnull(self) -> Union[Array[Any]]:
        ...
    def item(self) -> Union[Any]:
        ...
    def map(self, mapper: Any=None, na_action: Any=None) -> Union[Union[Data.Index,Data.MultiIndex]]:
        ...
    def max(self, axis: Any=None, skipna: Any=None) -> Union[Any]:
        ...
    def memory_usage(self, deep: Any=None) -> Union[int]:
        ...
    def min(self, axis: Any=None, skipna: Any=None) -> Union[Any]:
        ...
    def notna(self) -> Union[Array[Any]]:
        ...
    def notnull(self) -> Union[Array[Any]]:
        ...
    def nunique(self, dropna: Any=None) -> Union[int]:
        ...
    def putmask(self, mask: Any=None, value: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def ravel(self, order: Any=None) -> Union[Array[Any]]:
        ...
    def rename(self, name: Any=None, inplace: Any=None) -> Union[Data.TimedeltaIndex]:
        ...
    def repeat(self, repeats: Any=None, axis: Any=None) -> Union[Any]:
        ...
    def searchsorted(self, value: Any=None, side: Any=None, sorter: Any=None) -> Union[Any]:
        ...
    def set_names(self, names: Any=None, level: Any=None, inplace: Any=None) -> Union[Data.TimedeltaIndex]:
        ...
    def set_value(self, arr: Any=None, key: Any=None, value: Any=None) -> Union[Any]:
        ...
    def shift(self, periods: Any=None, freq: Any=None) -> Union[Data.TimedeltaIndex]:
        ...
    def slice_indexer(self, start: Any=None, end: Any=None, step: int=None, kind: Any=None) -> Union[AnySlice]:
        ...
    def sort(self) -> Union[Any]:
        ...
    def symmetric_difference(self, other: Any=None, result_name: Any=None, sort: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def take(self, indices: Any=None, axis: int=None, allow_fill: Any=None, fill_value: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def to_flat_index(self) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def to_frame(self, index: Any=None, name: Any=None) -> Union[Data]:
        ...
    def to_list(self) -> Union[Array[Any]]:
        ...
    def to_native_types(self, slicer: Any=None) -> Union[Array[Any]]:
        ...
    def to_series(self, index: Any=None, name: Any=None) -> Union[Data.Series]:
        ...
    def transpose(self) -> Union[Data.TimedeltaIndex]:
        ...
    def union(self, other: Any=None, sort: Any=None) -> Union[Any]:
        ...
    def unique(self, level: Any=None) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def value_counts(self, normalize: Any=None, sort: Any=None, ascending: Any=None, bins: Any=None, dropna: Any=None) -> Union[Data.Series]:
        ...
    def view(self, cls: Any=None) -> Union[Any]:
        ...
    def where(self, cond: Any=None, other: Any=None) -> Union[Data.Index]:
        ...
    def components(self) -> Union[Data]:
        ...
    def days(self) -> Union[Any]:
        ...
    def microseconds(self) -> Union[Any]:
        ...
    def nanoseconds(self) -> Union[Any]:
        ...
    def seconds(self) -> Union[Any]:
        ...
    @overload
    def ceil(self) -> Union[Data.TimedeltaIndex]:
        ...
    @overload
    def ceil(self, freq: Any=None, ambiguous: Any=None, nonexistent: Any=None) -> Union[Union[Data.TimedeltaIndex,Data.Series]]:
        ...
    @overload
    def floor(self) -> Union[Data.TimedeltaIndex]:
        ...
    @overload
    def floor(self, freq: Any=None, ambiguous: Any=None, nonexistent: Any=None) -> Union[Union[Data.TimedeltaIndex,Data.Series]]:
        ...
    def median(self) -> Union[Any]:
        ...
    @overload
    def round(self) -> Union[Data.TimedeltaIndex]:
        ...
    @overload
    def round(self, freq: Any=None, ambiguous: Any=None, nonexistent: Any=None) -> Union[Union[Data.TimedeltaIndex,Data.Series]]:
        ...
    def std(self) -> Union[Any]:
        ...
    def sum(self) -> Union[Any]:
        ...
    def to_pytimedelta(self) -> Union[Array[Any]]:
        ...
    def total_seconds(self) -> Union[Union[Data.Series,Data.Float64Index]]:
        ...
    def mean(self, skipna: Any=None, axis: int=None) -> Union[Any]:
        ...

