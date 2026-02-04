#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.uiInfrastructure.UiSdlTypeWorkerFieldNameFilterSpec import UiSdlTypeWorkerFieldNameFilterSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FieldType import FieldType
from c3.uiInfrastructure.UiSdlWebWorkerMessage import UiSdlWebWorkerMessage
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Promise import Promise
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.uiInfrastructure.UiSdlWebWorker import UiSdlWebWorker
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude

# Python definitions for the C3 type UiSdlTypeWorker


class UiSdlTypeWorker(UiSdlTenantTagAwareWorker):
    """
    A type that wraps the browser WebWorker thread and provides convenient asynchronous request-response handling
    interface based on Promises. One wrapper instance manages one active WebWorker thread.
    
    @remarks this represents a made instance of UiSdlTypeWorker
    """
    
    id: Optional[str]=None
    """
    Id of the web worker
    """

    worker: Optional[Any]=None
    """
    The WebWorker thread the wrapper instance is managing. The script for this worker should import
    script defined in `uiInfrastructureReact/ui/c3/src/webWorkerBase.worker.js`
    """

    status: Optional[str]=None
    """
    The status of the wrapper instance
    """
    def __init__(self, id: Optional[str]=None, worker: Optional[Any]=None, status: Optional[str]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[UiSdlTypeWorker]:
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
    def fromJsonString(cls, json: str) -> Union[UiSdlTypeWorker]:
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
    def fromXmlString(cls, xml: str) -> Union[UiSdlTypeWorker]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[UiSdlTypeWorker]:
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
    def replaceType(self, old: Type, new: Type) -> UiSdlTypeWorker:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlTypeWorker:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlTypeWorker:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlTypeWorker]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlTypeWorker]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> UiSdlTypeWorker:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlTypeWorker:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlTypeWorker:
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
    def validateObj(self) -> UiSdlTypeWorker:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> UiSdlTypeWorker:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> UiSdlTypeWorker:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> UiSdlTypeWorker:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> UiSdlTypeWorker:
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
    def withoutFieldAtPath(self, path: str) -> UiSdlTypeWorker:
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
    def withoutField(self, field: str) -> UiSdlTypeWorker:
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
    def withoutField(self, field: FieldType) -> UiSdlTypeWorker:
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
    def withoutFields(self, fields: Array[str]) -> UiSdlTypeWorker:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> UiSdlTypeWorker:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> UiSdlTypeWorker:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> UiSdlTypeWorker:
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
    def defaultField(self, field: str) -> UiSdlTypeWorker:
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
    def defaultField(self, field: FieldType) -> UiSdlTypeWorker:
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
    def unsetField(self, field: str) -> UiSdlTypeWorker:
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
    def unsetField(self, field: FieldType) -> UiSdlTypeWorker:
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
    def removeField(self, field: str) -> UiSdlTypeWorker:
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
    def removeField(self, field: FieldType) -> UiSdlTypeWorker:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> UiSdlTypeWorker:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> UiSdlTypeWorker:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> UiSdlTypeWorker:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> UiSdlTypeWorker:
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
    def mergeJson(self, json: any) -> UiSdlTypeWorker:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> UiSdlTypeWorker:
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
    def sumObj(self, other: Obj, deep: bool=None) -> UiSdlTypeWorker:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[UiSdlTypeWorker]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[UiSdlTypeWorker]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[UiSdlTypeWorker]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[UiSdlTypeWorker]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[UiSdlTypeWorker]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, UiSdlTypeWorker]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, UiSdlTypeWorker]]:
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
    def toBuilder(self) -> ObjBuilder[UiSdlTypeWorker]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[UiSdlTypeWorker]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> UiSdlTypeWorker:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> UiSdlTypeWorker:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> UiSdlTypeWorker:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> UiSdlTypeWorker:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> UiSdlTypeWorker:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> UiSdlTypeWorker:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> UiSdlTypeWorker:
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
    def afterMake(self) -> UiSdlTypeWorker:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> UiSdlTypeWorker:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[UiSdlTypeWorker]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> UiSdlTypeWorker:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def start(self) -> Union[UiSdlWebWorker]:
    """
    Starts a new WebWorker thread if there is no running one
    @return the Wrapper instance
    """
        ...
    def terminate(self) -> Union[UiSdlWebWorker]:
    """
    Terminates an existing WebWorker thread
    @return the Wrapper instance
    """
        ...
    def postMessage(self, message: UiSdlWebWorkerMessage, timeout: int=None) -> Union[Promise[Any]]:
    """
    Posts a request message to the WebWorker thread and asynchronously receives the response message
    
    @param message
                The message content
    @param timeout
                Timeout in milliseconds. If specified, the request will timeout after the given period of time
    @return A promise of the asynchronous action.
            The response message received from the WebWorker will be passed down the promise chain
    """
        ...
    def switchDomain(self, tunnelConfiguration: Map[str, Any]=None, forceReloadTypes: bool=None, timeout: int=None) -> Union[Promise[Any]]:
    """
    Switch type system domain based on tunnel configuration. It will automatically load types from the target
    domain and uses cached types if possible.
    
    @param tunnelConfiguration
               The tunnel configuration
    @param forceReloadTypes
               Whether to force reload types from server
    @param timeout
               The timeout for the webworker request
    @return a promise to be resolved when the domain is switched
    """
        ...
    def loadTypes(self, timeout: int=None) -> Union[Promise[Any]]:
    """
    Load types from the current type system domain
    
    @param timeout
               The timeout for the webworker request
    @return a promise to be resolved when the types are loaded
    """
        ...
    def getTypes(self, types: Array[str]=None, timeout: int=None) -> Union[Promise[Array[Map[str, Any]]]]:
    """
    Retrieve denormalized info of types for UI to display
    
    @param types
               the type names. If provided, will only return those types, otherwise all types.
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               an array of type info will be passed through the promise chain
    """
        ...
    def getTypesThatMixin(self, mixinTypeName: str, deep: bool=None, typeNameOnly: bool=None, timeout: int=None) -> Union[Promise[Array[Map[str, Any]]]]:
    """
    Retrieve denormalized info of types that mixin a given type.
    
    @param mixinTypeName
               the name of the mixin type to search for.
    @param deep
               if true, return types that mixin other types that mixin the specified type.
    @param typeNameOnly
               if true, return only the type names that mixin other types that mixin the specified type.
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               an array of type info will be passed through the promise chain
    """
        ...
    def getAnnotations(self, appliesTo: Array[str], timeout: int=None) -> Union[Promise[Array[Map[str, Any]]]]:
    """
    Retrieve annotations that apply to the given categories
    
    @param appliesTo
              the categories where the annotations apply
    @param timeout
              the timeout in milliseconds of the WebWorker response
    @return Promise
              an array of annotations with typeName and description will be passed through the promise chain
    """
        ...
    def getAnnotationType(self, typeName: str, fields: Map[str, Any]=None, timeout: int=None) -> Union[Promise[Array[Map[str, Any]]]]:
    """
    Retrieve the specific annotation type with only the specified fields defined.  This will
    remove out all fields that are not explicitly defined.
    
    @param typeName
               The name of the annotation type.  Example: "Ann.DataLoad"
    @param fields
               The key value pairs for the fields.  This is an object with the field names and values.
               Example: { "chunkSize": 20000 }
    @param timeout
               The timeout in milliseconds of the WebWorker response
    @returns Promise
               The annotation type defined with only the specific field values and all other fields removed.
    """
        ...
    def getAnnotationTypeDefaultFields(self, typeNames: Array[str], timeout: int=None) -> Union[Promise[Array[Map[str, Any]]]]:
    """
    Retrieve the default field and values for a specific annotation type.
    
    @param typeName
               The name of the annotation type.  Example: "Ann.DataLoad"
    @param timeout
               The timeout in milliseconds of the WebWorker response
    @returns Promise
               The default field and values on the specified type.
    """
        ...
    def getTransformTypes(self, filterType: str, filterBy: str, timeout: int=None) -> Union[Promise[Array[Map[str, Any]]]]:
    """
    Retrieve transform types by filtering the source or target type
    
    @param filterType
              the type to be filtered with
    @param filterBy
              to filter by source or target of the transform type
    @return Promise
              an array of transform types with typeName, sourceType, targetType and
              number of mappings will be passed through the promise chain
    """
        ...
    def defineTypes(self, types: Array[Map[str, Any]], updateLocalMetadata: bool=None, timeout: int=None) -> Union[Promise[Any]]:
    """
    Define types
    
    @param types
               the type contents to define
    @param updateLocalMetadata
               whether to update local metadata. If true, the types won't be able to rollback from local metadata store
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
    """
        ...
    def removeTypes(self, types: Array[Map[str, Any]], updateLocalMetadata: bool=None, timeout: int=None) -> Union[Promise[Any]]:
    """
    Removes types
    
    @param typeNames
               the types to remove
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
    """
        ...
    def rollbackTypes(self, types: Array[str], timeout: int=None) -> Union[Promise[Any]]:
    """
    Rollback types from the local metadata store
    """
        ...
    def getTypeDetail(self, typeName: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get details of a given type
    
    @param typeName
                 the name of the type
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the type content will be passed through the promise chain
    """
        ...
    def getTypeWorkingCopy(self, typeName: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get the metadata working copy of a type
    
    @param typeName
                 the name of the type
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the type content will be passed through the promise chain
    """
        ...
    def getFieldsAndMethods(self, typeName: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get fields and methods of a given type
    
    @param typeName
                 the name of the type
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the result containing fields and methods will be passed through the promise chain
    """
        ...
    def getFieldNamesWithAnnotation(self, typeName: str, annotation: str, publicOnly: bool=None, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get names of fields in a given type that are annotated with a given annotation
    
    @param typeName
                 the name of the type
    @param annotation
                 the annotation to match
    @param publicOnly
                 whether to get only public fields or both public and private fields
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the result containing fields and methods will be passed through the promise chain
    """
        ...
    def getAnnotationByFieldNameAndTypeName(self, annotationName: str, mixinTypeName: str=None, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Gets mapping of a type name to a mapping of a field name to annotation field and annotation values,
    where a field name has given annotation name, for example:
    ```
    {
      UiSdlLayoutSidePanel: {
        leftSidePanel: {
          includeCategories: ['filter-component']
        },
        rightSidePanel: {
          includeCategories: ['filter-component']
        },
        children: {
          includeCategories: ['data-visual-component', 'container-component']
        }
      }
    }
    
    @param annotationName
                 The annotation name for which needs to get the mapping.
    @param mixinTypeName
                 If provided, only check types that is or mixes in this type.
    
    @param timeout
                 The timeout in milliseconds of the WebWorker response.
    @return Promise
                 The promise containing result mapping.
    """
        ...
    def getTypesWithAnnotationValue(self, typeNames: Array[str], annotation: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get the value of the given annotation on the given types.
    
    @param typeNames
                 the list of types
    @param annotation
                 the annotation to match
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the result containing the annotation values will be passed through the promise chain
    """
        ...
    def getLabelsAndValuesOfEnumTypes(self, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get the labels and values of enum types.
    
    @param timeout
                 the timeout in milliseconds of the WebWorker response.
    @return Promise
                 the Promise containing a mapping of type names to a mapping of their labels and values.
    """
        ...
    def getLabelsAndValuesOfEnumType(self, typeName: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get the labels and values of an enum type.
    
    @param typeName
                 name of enum type
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the result containing a map of labels and their values will be passed through the promise chain
    """
        ...
    def getExprParseDependingFieldPaths(self, fieldInfo: Map[str, Any], timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get the depending field paths of a field within a data spec setting field type's field.
    Only applicable for fields with {@link Ann#Restriction} annotation.
    e.g. {@link UiSdlCategoricalLineBarChartXAxisDataSpecSetting#sortField} has annotation `@restriction(filter="sortedBasedOn=='Y values'")`
    that makes {@link UiSdlCategoricalLineBarChartXAxisDataSpecSetting#sortField} depend on
    {@link UiSdlCategoricalLineBarChartXAxisDataSpecSetting#sortedBasedOn}.
    
    @param fieldInfo
                 Object containing:
                   1. the string representation of {@link FetchFilterSpec} of the restriction annotation
                   2. type name of the data spec setting e.g. `UiSdlCategoricalLineBarChartXAxisDataSpecSetting`
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the result containing an array of field name strings that the current field depends on.
    """
        ...
    def getFieldVisibility(self, filterString: str, bindings: Map[str, Any]=None, timeout: int=None) -> Union[Promise[bool]]:
    """
    Get the visibility of a field by evaluating a condition/filter string against given bindings.
    
    @param filterString
                 Condition to evaluate
    @param bindings
                 Current bindings values
    @return Promise
                 Boolean whether the given condition evaluates to true/false against the given bindings.
    """
        ...
    def getMetricList(self, typeName: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get a list of metrics that are defined on the given type
    
    @param typeName
                 the name of the type
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the result containing fields and methods will be passed through the promise chain
    """
        ...
    def getTypesWithAnnotation(self, annotationName: str, annotationField: str=None, declaredOnly: bool=None, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Fetch all types with a specific annotation defined on the type.
    @param annotationName
                The name of the annotation to search for on the type.
    @param annotationField
                The name of the field on the annotation that is set while searching for types.
    @param declaredOnly
                If true, return types where the given annotation has been declared on the type itself.
                If false (default), return types even if the annotation occurs on the mixin types.
    @return Promise
                the result containing type names that have the annotation defined on them will be passed through the promise chain
    """
        ...
    def typeIsA(self, typeA: str, typeB: str, timeout: int=None) -> Union[Promise[bool]]:
    """
    Check if typeA is a typeB
    
    @param typeA
                 the name of typeA
    @param typeB
                 the name of typeB
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the boolean result will be passed through the promise chain
    """
        ...
    def typeExists(self, typeName: str, timeout: int=None) -> Union[Promise[bool]]:
    """
    Check if a type exists
    @param typeName
               the name of the type to check
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               a boolean value indicating whether the type exists
    """
        ...
    def getType(self, typeName: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get a type, given a type name
    @param typeName
              The name of the type
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               resolves to a C3 type
    """
        ...
    def setField(self, typeName: str, field: Map[str, Any], timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Set a field on a type
    @param typeName
               the name of the type to update
    @param field
               the metadata of the field definition
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               the updated type content json
    """
        ...
    def getValueTypeNameOfFieldType(self, typeName: str, fieldName: str, timeout: int=None) -> Union[Promise[str]]:
    """
    Given a type name and a field on that type, return the type of the field
    @param typeName
               the type on which a field is to be searched
    @param fieldName
               the name of the field who value type name is to be returned
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               the value type name of the field
    """
        ...
    def getValueTypeOfFieldType(self, typeName: str, fieldName: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Given a type name and a field on that type, return the JSON representation of the valueType of the field
    @param typeName
               the type on which a field is to be searched
    @param fieldName
               the name of the field who value type name is to be returned
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               C3.type[typeName].fieldType(fieldName).valueType().toJSON()
    """
        ...
    def getParametricVariableInfo(self, typeName: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    If a type is parametric, get the parameters for the type and the allowed
    values for that parameter
    @param typeName
               the type to get the parametric variable info
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               an object of the a parameters and the allowed types for that parameter
    """
        ...
    def isCalcField(self, typeName: str=None, fieldName: str=None, timeout: int=None) -> Union[Promise[bool]]:
    """
    Given a type name and a field on that type, return whether or not that field is a calc field
    @param typeName
               the type on which a field is to be searched
    @param fieldName
               the name of the field to check
    @return boolean True if the field is a calc field
    """
        ...
    def isAdvancedTransform(self, typeName: str, timeout: int=None) -> Union[Promise[bool]]:
    """
    Determine if the type is an advanced transform, i.e code based, by looking for a transform function
    @param typeName
               The name of the type to check
    @return boolean Whether the type has a code based transform
    """
        ...
    def createCanonicalType(self, canonicalTypeName: str, sourceTypeName: str, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Given a source type name it will create a canonical type with the appropriate fields
    @param canonicalTypeName
               the desired name for the new Canonical type
    @param sourceTypeName
               the name of the new canonical's source type
    @return Promise
               resolve contains the generated type content
    """
        ...
    def createTransformType(self, sourceTypeName: str, targetTypeName: str, transformTypeName: str, skipSourceFields: bool=None, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Given a source type name and target type name it will create a transform type with the appropriate fields
    @param sourceTypeName
               the name of the new transform's source type
    @param targetTypeName
               the name of the new transform's mixin type
    @param transformTypeName
               the desired name for the new Transform type
    @return Promise
               resolve contains the generated type content
    """
        ...
    def getTypesForPackage(self, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get types that exist for the current package {@link MetadataPackage#name}
    `UiTagMetadataStore.typesByPackage(UiTagMetadataStore.rootPackage().name)`
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               an array of type info will be passed through the promise chain
    """
        ...
    def getFieldNamesWithFilter(self, typeName: str, filterSpec: UiSdlTypeWorkerFieldNameFilterSpec, timeout: int=None) -> Union[Promise[bool]]:
    """
    Get field names in types with a filter spec.
    @param typeName
                 the name of the type
    @param filterSpec
                 the filters that are applied while searching fields in the type
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    @return Promise
                 the result containing fields and methods will be passed through the promise chain
    """
        ...
    def isComponentReferenceWithBinding(self, valueType: ValueType, bindingType: str, skipBindingCheck: bool=None, timeout: int=None) -> Union[Promise[bool]]:
    """
    Checks if the given value type is a `UiSdlComponentRef` and has the given `bindingType` binding.
    @param valueType
                 the value type to check.
    @param bindingType
                 the binding type.
    @param skipBindingCheck
                 whether to skip the binding check.
    @param timeout
                 the timeout in milliseconds of the WebWorker response.
    @return Promise
                 the result containing whether the type is a `UiSdlComponentRef` and has the given `bindingType` binding.
    """
        ...
    def isFieldReferenceTypeOrArrayOfReferenceType(self, typeName: str, fieldName: str, timeout: int=None) -> Union[Promise[bool]]:
    """
    Given a typeName and a fieldName, determines whether the value type of the field is either a reference type or an
    array of reference types
    
    @param typeName
              The type name
    @param fieldName
              The field name
    @param timeout
              The timeout in ms of the WebWorker response
    @return Promise<boolean>
              A promise that will resolve to true if the value type of the field is either a reference type or an
              array of reference types
    """
        ...
    def getPartiallyAppliedActions(self, typeName: str, fieldConfig: Map[str, Any]=None, componentConfig: Map[str, Any]=None, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Get partially applied actiond for a type.
    @param typeName
                 the name of the type
    @param fieldConfig
                 the field config
    @param componentConfig
                 the component config
    @param timeout
                 the timeout in milliseconds of the WebWorker response
    """
        ...
    def isPageMetadataEqual(self, pageId: str, configurableUiMetadata: Map[str, Any], originalUiMetadata: Map[str, Any], timeout: int=None) -> Union[Promise[bool]]:
    """
    Checks whether the given configurable and original UI metadata are equal on the given page.
    @param pageId
                 The id of a page with metadata.
    @param configurableUiMetadata
                 The configurable UI metadata.
    @param originalUiMetadata
                 The original UI metadata.
    @param timeout
                 The timeout in milliseconds of the WebWorker response.
    @return Promise
                 The promise containing result whether the given configurable and original UI metadata are equal.
    """
        ...
    def callTransformFunction(self, typeName: str, transformFunction: str, value: Any=None, config: Map[str, Any]=None, timeout: int=None) -> Union[Promise[Map[str, Any]]]:
    """
    Calls a transform function in a type.
    @param typeName
                 The name of the type.
    @param transformFunction
                 The name of the transform function.
    @param value
                 The value argument to the transform function.
    @param config
                 The config to be passed to the transform function.
    @param timeout
                 The timeout in milliseconds of the WebWorker response.
    @return Promise
                 The promise containing result from the transform function.
    """
        ...
    def getComponentDataSpecTypeName(self, typeName: str, timeout: int=None) -> Union[Promise[str]]:
    """
    Given a type name, return the component data spec type name.
    @param typeName
               the type whose component data spec type name is to be returned
    @param timeout
               the timeout in milliseconds of the WebWorker response
    @return Promise
               the name of the component data spec type
    """
        ...
    def getComponentsForPage(self, pageId: str, pageVariable: str=None, timeout: int=None) -> Union[Promise[Array[Map[str, Any]]]]:
    """
    Recursively gets all the components for a page. The component objects contain the following fields:
    ```
    {
      id: string
      name: string
      dataField: string
      dataType: string
      isMetricBased: boolean
    }
    
    @param pageId
              The page id of a page containing the components.
    @param pageVariable
              The selected page variable.
    @param timeout
                 The timeout in milliseconds of the WebWorker response.
    @return Promise
               The promise containing an array of component objects.
    """
        ...
    def getMetricBasedComponentsForPage(self, pageId: str, pageVariable: str=None, timeout: int=None) -> Union[Promise[Array[Map[str, Any]]]]:
    """
    Recursively gets all the metric based components for a page from configurable ui metadata
    @param pageId
              The page id of a page containing the metric based components.
    @param pageVariable
              The selected page variable.
    @param timeout
                 The timeout in milliseconds of the WebWorker response.
    @return Promise
               an array of component objects containing name, data type and pageVariableMapping value, if any
    """
        ...

