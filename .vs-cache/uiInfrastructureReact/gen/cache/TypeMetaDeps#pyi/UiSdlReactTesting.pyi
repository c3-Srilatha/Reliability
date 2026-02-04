#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ObjBuilder import ObjBuilder
from c3.uiInfrastructure.UiSdlObservable import UiSdlObservable
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.FieldType import FieldType
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.UiSdlReduxState import UiSdlReduxState
from c3.platform.ValueType import ValueType
from c3.platform.Promise import Promise
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Promise import Promise
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Promise import Promise
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.uiInfrastructureReact.UiSdlSpySpec import UiSdlSpySpec
from c3.platform.MapType import MapType
from c3.uiInfrastructureReact.UiSdlExpectObservableSpec import UiSdlExpectObservableSpec
from c3.platform.Exclude import Exclude

# Python definitions for the C3 type UiSdlReactTesting


class UiSdlReactTesting(UiSdlSpecHelper):
    """
    @remarks this represents a made instance of UiSdlReactTesting
    """
    def __init__(self) -> None: ...

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
    def fromJson(cls, json: any) -> Union[UiSdlReactTesting]:
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
    def fromJsonString(cls, json: str) -> Union[UiSdlReactTesting]:
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
    def fromXmlString(cls, xml: str) -> Union[UiSdlReactTesting]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[UiSdlReactTesting]:
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
    def replaceType(self, old: Type, new: Type) -> UiSdlReactTesting:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlReactTesting:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlReactTesting:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlReactTesting]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlReactTesting]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> UiSdlReactTesting:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlReactTesting:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlReactTesting:
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
    def validateObj(self) -> UiSdlReactTesting:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> UiSdlReactTesting:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> UiSdlReactTesting:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> UiSdlReactTesting:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> UiSdlReactTesting:
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
    def withoutFieldAtPath(self, path: str) -> UiSdlReactTesting:
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
    def withoutField(self, field: str) -> UiSdlReactTesting:
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
    def withoutField(self, field: FieldType) -> UiSdlReactTesting:
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
    def withoutFields(self, fields: Array[str]) -> UiSdlReactTesting:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> UiSdlReactTesting:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> UiSdlReactTesting:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> UiSdlReactTesting:
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
    def defaultField(self, field: str) -> UiSdlReactTesting:
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
    def defaultField(self, field: FieldType) -> UiSdlReactTesting:
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
    def unsetField(self, field: str) -> UiSdlReactTesting:
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
    def unsetField(self, field: FieldType) -> UiSdlReactTesting:
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
    def removeField(self, field: str) -> UiSdlReactTesting:
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
    def removeField(self, field: FieldType) -> UiSdlReactTesting:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> UiSdlReactTesting:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> UiSdlReactTesting:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> UiSdlReactTesting:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> UiSdlReactTesting:
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
    def mergeJson(self, json: any) -> UiSdlReactTesting:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> UiSdlReactTesting:
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
    def sumObj(self, other: Obj, deep: bool=None) -> UiSdlReactTesting:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[UiSdlReactTesting]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[UiSdlReactTesting]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[UiSdlReactTesting]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[UiSdlReactTesting]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[UiSdlReactTesting]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, UiSdlReactTesting]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, UiSdlReactTesting]]:
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
    def toBuilder(self) -> ObjBuilder[UiSdlReactTesting]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[UiSdlReactTesting]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> UiSdlReactTesting:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> UiSdlReactTesting:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> UiSdlReactTesting:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> UiSdlReactTesting:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> UiSdlReactTesting:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> UiSdlReactTesting:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> UiSdlReactTesting:
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
    def afterMake(self) -> UiSdlReactTesting:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> UiSdlReactTesting:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[UiSdlReactTesting]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> UiSdlReactTesting:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @classmethod
    def importType(cls, typeName: str=None) -> Union[Promise[Any]]:
    """
    Async function that imports the given type through a federated import.
    @param typeName
              The name of the type to be imported
    @returns The type imported
    """
        ...
    @classmethod
    def importComponent(cls, metadataId: str=None) -> Union[Promise[Any]]:
    """
    Async function that imports the given component type through a federated import.
    @param metadataId
              The id of the component's metadata
    @returns The component imported
    """
        ...
    @overload
    @classmethod
    def createSpy(cls, componentType: str=None, functionName: str=None, spec: UiSdlSpySpec=None) -> Union[Promise[Any]]:
    """
    Async function that creates a spy for the input functionName on the componentType federated module.
    
    To create a spy on an imported method used in a different file, use:
    `SpecHelper.createSpy(fileName,methodName,spec)`
    
    IMPORTANT: In order for spies to work, the calling code must be imported with
    SpecHelper.importType and the spy has to be created on the calling code.
    
    Example: If you are spying on a function "helperFunction" called by
    "MyTypeA.typeAFunction", and your test will call "typeAFunction", then you have
    to import "MyTypeA.typeAFunction" with SpecHelper.importType and spy with
    SpecHelper.createSpy('MyTypeA', 'helperFunction').
    
    NOTE 1: Even though "helperFunction" might not originally be defined in MyTypeA,
    it has to be spied on that type, specially if MyTypeA statically imports "helperFunction",
    otherwise you might create a spy on a separate federated module and it will never fire.
    
    Note 2: If all imports are done dynamically through federated imports, then you can
    create the spies directly in the type that defines the function you want to spy on, in the
    previous example, that could be: SpecHelper.createSpy('HelperType', 'helperFunction').
    
    Note 3: The intention of this function is to aid in unit testing, where you know the internals
    of a type and want to shallowly spy on its dependencies, this is not intended to be used
    to spy on deep dependencies, where you don't know how they were imported.
    
    @param componentType
              Name of the component to import functions from
    @param functionName
              Name of the function to create spy for
    @param spec
              The implementation spec
    @return The spy instance that will get called whenever the `functionName` is called
    """
        ...
    @overload
    @classmethod
    def createSpy(cls, componentType: str=None, functionName: str=None, moduleWithRewire: Any=None, spec: UiSdlSpySpec=None) -> Union[Promise[Any]]:
    """
    Async function that creates a spy for the input functionName on the componentType federated module.
    
    To create a spy on an imported method used in a different file, use:
    `ReactTesting.createSpy(fileName,methodName, module, spec)`
    
    Example: If you are spying on a function "helperFunction" called by
    "MyTypeA.typeAFunction", and your test will call "typeAFunction", then you have
    to import "MyTypeA" with import * as myTypeA from '@c3/ui/MyTypeA' and then
    ReactTesting.createSpy('MyTypeA', 'helperFunction', myTypeA).
    
    Example 2: If is a function that is being called within a module you want to test,
    you can create a spy for that funciton by doing:
    
    ReactTesting.createSpy('UiSdlCanaryRenderCondition', 'useConfig', UiSdlCanaryRenderConditionModule, {
     returnValue: 'Hello World'
    });
    
    which will create a spy for the 'useConfig' function within the 'UiSdlCanaryRenderConditionModule' module.
    
    NOTE 1: Even though "helperFunction" might not originally be defined in MyTypeA,
    it has to be spied on that type, specially if MyTypeA statically imports "helperFunction",
    otherwise you might create a spy on a separate federated module and it will never fire.
    
    Note 2: If all imports are done dynamically through federated imports, then you can
    create the spies directly in the type that defines the function you want to spy on, in the
    previous example, that could be: ReactTesting.createSpy('HelperType', 'helperFunction', helperTypeModule).
    
    Note 3: The intention of this function is to aid in unit testing, where you know the internals
    of a type and want to shallowly spy on its dependencies, this is not intended to be used
    to spy on deep dependencies, where you don't know how they were imported.
    
    @param componentType
              Name of the component to import functions from
    @param functionName
              Name of the function to create spy for
    @param moduleWithRewire
              Module for the componentType found by importing via `import * as Module from '@c3/ui/FileName';`
    @param spec
              The implementation spec
    @return The spy instance that will get called whenever the `functionName` is called
    """
        ...
    @classmethod
    def mockImportedObject(cls, componentType: str=None, importedObjectName: str=None, mockedObject: Any=None) -> Union[Promise[]]:
    """
    Async function that mocks an imported module with a different object. Useful when you need to mock, for example,
    a `uiSdlPluggable` type's function
    Use case:
    In the file 'MyCoolComponent.ts':
    import allTheUiPluggableTypes from '@c3/ui/types/pluggables/myPluggableNamespace'
    
    Then:
    SpecHelper.mockImportedObject(
      'MyCoolComponent',
      'allTheUiPluggableTypes',
      {
        MyPluggableType: {
          someFunction: () => { doSomeStuff; }
        }
      }
    );
    
    
    @param componentType
              The file under test, or the file that contains the import to be mocked
    @param importedObjectName
              The name of the imported object you wish to mock
    @param mockedObject
              The object to swap in place of the original imported object
    """
        ...
    @classmethod
    def mock(cls, componentObject: Any=None, importedObjectName: str=None, mockedObject: Any=None) -> None:
    """
    Function similar to mockImportedObject, but takes a component instead of just the name of a component to be
    imported. Example usage: importing custom `useTranslate` React hook
    
    
    @param componentObject
              The object to be mocked
    @param importedObjectName
              The name of the imported object you wish to mock
    @param mockedObject
              The object to swap in place of the original imported object
    """
        ...
    @classmethod
    def spyOnEffect(cls, effectType: str=None, functionName: str=None, callThrough: bool=None) -> Union[Promise[Any]]:
    """
    Spies on the action stream that an UiSdlEpic listens for.
    Can be used to determine if certain action(s) has been received by the async effect.
    @example
    var spy = spyOnEffect(MyTestEffect);
    // ...
    expect(spy).toHaveBeenCalledWith({
     type: 'Test.Action',
     payload: 'Test Message',
    });
    
    @param effectType
              The name of the UiSdlEpic type to be spied on.
    @param functionName
              The name of the UiSdlEpic method corresponding to the epic.
    @param callThrough
              Whether to call through the original effect
    @return The spy instance that will get called whenever the effect receives an action
    """
        ...
    @classmethod
    def spyOnReduxAction(cls, actionType: str=None) -> Union[Promise[Any]]:
    """
    Spies on redux actions of a given action type.
    Can be used to determine whether a redux action has been dispatched.
    
    EXAMPLE NEEDED!!!
    
    @param actionType
              The type of the action (UiSdlReduxAction.actionType)
    @return A jasmine spy that listens for actions of the target action type
    """
        ...
    @classmethod
    def freezeProps(cls, props: Obj=None) -> Union[Obj]:
    """
    Recursively freezes the given props object. This is useful for testing that
    components do not inadvertently mutate their props. React props are intended
    to be read-only.
    
    @param props
              The props to freeze.
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
    """
        ...
    @classmethod
    def removeDependencies(cls, componentType: str=None, functionName: str=None) -> Union[Promise[]]:
    """
    Async function that removes the mock of the function
    @param componentType
              Name of the component to import functions from
    @param functionName
              Name of the function to remove the mock of
    """
        ...
    @classmethod
    def removeMock(cls, moduleToRemoveRewire: Any=None, functionName: str=None) -> None:
    """
    Removes the mock created by the mock function
    
    @param moduleToRemoveRewire
              Module object with the function we want to remove the mock of
    @param functionName
              Name of the function to remove the mock of
    """
        ...
    @classmethod
    def renderByMetadataId(cls, metadataId: str=None) -> Union[Promise[]]:
    """
    Async function that renders a component given its metadataId
    @param metadataId
              Id of the component of which to render
    """
        ...
    @classmethod
    def clearRenderedContent(cls) -> None:
    """
    Clear the rendered UI/Component from test page
    """
        ...
    @classmethod
    def expectObservable(cls, done: Callable[[]]=None, spec: UiSdlExpectObservableSpec=None, stateStream: UiSdlObservable=None) -> Union[Promise[Any]]:
    """
    If an async function or Promise is used inside an epic, you shouldn't be using expectObservable.
    Instead you should be testing it as so:
    
    Separate your epic into two different functions:
    
    For example, if your epic was originally
    
    export async function itemsLoadEpic(actionStream, stateStream) {
      return actionStream.pipe(
        flatMap(async function (action) {
          const state = stateStream.value;
          // async epic logic
        });
      );
    
    separate the logic into two functions with the format
    
    export function itemsLoadEpic(actionStream, stateStream) {
      return actionStream.pipe(
        flatMap(async function (action) {
          const state = stateStream.value;
          return await loadItemsObservable(action, state);
        });
      );
    
    export async function loadItemsObservable(action, state) {
      // epic logic
    }
    
    The reason this is done is because expectObservable is not designed to test epics that use async functions/promise.
    It is better to test the async function separately rather than the epic as a whole if this is the case. To test an async function, you
    can do so with the format
    
    describe('::loadItemsObservable', function () {
      beforeEach(function () {
        this.state = SpecHelper.getState();
        // state setup logic
        this.expectedResult = // expected result of this observable
        this.action = loadItemsAction(...action parameters);
        this.observable = loadItemsObservable(this.action, this.state);
      });
    
      it('loads items correctly', function () {
        observable.subscribe(
          function (result) {
            expect(result).toEqual(this.expectedResult);
          },
          function (error) {
            fail(error);
          }
        );
      });
    });
    
    Creates expectations for a given observableStream and a particular async effect.
    @see https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/testing/marble-testing.md
    
    @param done
              The function to call when all the expectations are completed
    @param spec
              The expectation options
    @param stateStream
              Optional initial state as passed from redux observable
    """
        ...
    @classmethod
    def waitUntil(cls, func: Callable[[], bool]=None, scope: Any=None, timeout: int=None, message: str=None, interval: int=None) -> Union[Promise[]]:
    """
    Wait until certain condition satisfies.
    @param func
              The function that validates if the target condition has been reached
    @param scope
              The scope (thisArg) to call the validator function
    @param timeout
              The maximum wait time in milliseconds
    @param message
              The error message to reject with when it times out
    @param interval
              The interval for polling the validator function
    @return A promise that resolves when the target condition is reached within the time
            constraint, and rejects otherwise.
    """
        ...
    @classmethod
    def initComponent(cls, componentId: str=None, metadata: Map[str, Any]=None, initialMetadata: Map[str, Any]=None, render: bool=None) -> Union[Promise[Any]]:
    """
    Async function that initializes a component with redux store and state
    @param componentId
              Id of the component of which to get the state of
    @param metadata
              The metadata to mock in the Redux state
    @param initialMetadata
              The initialMetadata to mock in the Redux state
    @param render
              Boolean to render the component;
    @return the redux store
    """
        ...
    @classmethod
    def getState(cls, componentId: str=None, metadata: Map[str, Any]=None, initialMetadata: Map[str, Any]=None) -> Union[UiSdlReduxState]:
    """
    Returns the Redux slice of the component
    @param componentId
              Id of the component of which to get the state of
    @param metadata
               The metadata to mock in the Redux state
    @param initialMetadata
              The initialMetadata to mock in the Redux state
    @return The state for the component.
    """
        ...
    @classmethod
    def dispatch(cls, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Dispatches an action through the redux store
    
    @param action
              The action to dispatch.
    @returns the action that was dispatched
    """
        ...
    @classmethod
    def destroyStore(cls) -> None:
    """
    Helper function to destroy the store in between specs
    """
        ...
    @classmethod
    def shallowWithIntl(cls, node: Any=None, options: Any=None, translations: Map[str, str]=None) -> Union[Any]:
    """
    Shallow renders the given element in a wrapper with an IntlProvider and the given translations.
    Use this to test a React component with translations while rendering a partial React tree.
    
    @param node
              The React element to shallow render.
    @param options
              Mount renderer props. See enzyme.shallow.
    @param translations
              A map of translations to include in the Intl context.
    @returns A React wrapper of the shallow rendered element.
    """
        ...
    @classmethod
    def mountWithIntl(cls, node: Any=None, options: Any=None, translations: Map[str, str]=None) -> Union[Any]:
    """
    Mounts the given element in a wrapper with an IntlProvider and the given translations.
    Use this to test a React component with translations while rendering the full React tree.
    
    @param node
              The React element to mount.
    @param options
              Mount renderer props. See enzyme.mount.
    @param translations
              A map of translations to include in the Intl context.
    @returns A React wrapper of the mounted element.
    """
        ...
    @overload
    @classmethod
    def isComponentRendered(cls, wrapper: Any=None, selector: str=None, timeout: float=None) -> Union[Promise[bool]]:
    """
    Checks if a component is rendered. It is useful when a dynamic component is asynchronously rendered,
    and test should wait for a given `timeout` for successful rendering before proceeding with an assertion block.
    If a component is rendered successfully during the given `timeout`, the function returns a {Promise} that resolves
    to `true`. Otherwise the function returns a {Promise} that resolves to `false`.
    
    @param {ReactWrapper} wrapper
           The wrapper instance around the rendered component.
    @param {string} selector
            The selector to check if a component is rendered.
    @param {number} timeout
            The timeout (in seconds) during which performed a check if a component is rendered.
    @returns {Promise} The {Promise} that resolves to `true` in case of successful rendering, and to `false` otherwise.
    """
        ...
    @overload
    @classmethod
    def isComponentRendered(cls, selector: str=None, timeout: float=None, container: Any=None) -> Union[Promise[bool]]:
    """
     Checks if a component is rendered. It is useful when a dynamic component is asynchronously rendered,
     and test should wait for a given `timeout` for successful rendering before proceeding with an assertion block.
     If a component is rendered successfully during the given `timeout`, the function returns a {Promise} that resolves
     to `true`. Otherwise the function returns a {Promise} that resolves to `false`.
    
     @param {string} selector
    The selector to check if a component is rendered.
     @param {number} timeout
    The timeout (in seconds) during which performed a check if a component is rendered.
     @param {HTMLElement} container
    The container around the rendered component.
     @returns {Promise} The {Promise} that resolves to `true` in case of successful rendering, and to `false` otherwise.
    """
        ...
    @classmethod
    def detectCurrentTag(cls, tenant: str=None) -> Union[Promise[str]]:
    """
    Async function that given a tenant name, it returns the name of its default tag.
    @param tenant
              The tenant name
    @returns The name of the tenant's default tag
    """
        ...
    @classmethod
    def renderWithIntl(cls, node: Any=None, additionalTranslations: Map[str, str]=None) -> Union[Any]:
    """
    Renders the given element in a wrapper with an IntlProvider and the application's `en.json` translations.
    Consumers can provide an additional `translations` map to supplement or override the application's translations.
    Use this to test a React component with translations while rendering the full React tree.
    
    @param node
              The React element to mount.
    @param additionalTranslations
              A map of translations to supplement or override the application's `en` translations in the Intl context.
    @returns A [render result](https://testing-library.com/docs/react-testing-library/api/#render-result)
    """
        ...
    @classmethod
    def renderWithState(cls, node: Any=None, initialState: UiSdlReduxState=None, connected: bool='false') -> Union[Any]:
    """
    Renders the given element in a wrapper with a ReactReduxProvider.
    Use this to test a React component which leverages Redux directly (i.e. via ReactReduxContext or useSelector).
    
    @param node
              The React element to mount.
    @param initialState
              The initialState to initialize with the Redux store.
    @param connected
              If true, initializes a Redux store with the UI framework's rootReducer and epic middleware for rendering connected components.
    @returns A [render result](https://testing-library.com/docs/react-testing-library/api/#render-result)
    """
        ...
    @classmethod
    def renderWithStateAndIntl(cls, node: Any=None, initialState: UiSdlReduxState=None, connected: bool='false', additionalTranslations: Map[str, str]=None, container: Any=None) -> Union[Any]:
    """
    Renders the given element in a wrapper with a ReactReduxProvider and an IntlProvider.
    Consumers can provide an additional `translations` map to supplement or override the application's translations.
    Use this to test a React component with translations while rendering the full React tree.
    
    @param node
              The React element to mount.
    @param initialState
              The initialState to initialize with the Redux store.
    @param connected
              If true, initializes a Redux store with the UI framework's rootReducer and epic middleware for rendering connected components.
    @param additionalTranslations
              A map of translations to supplement or override the application's `en` translations in the Intl context.
    @param container
             The container around the rendered component.
    @returns A [render result](https://testing-library.com/docs/react-testing-library/api/#render-result)
    """
        ...
    @classmethod
    def spyOnEpic(cls, epicType: str=None, epicWithRewire: Any=None, functionName: str=None, callThrough: bool=None) -> Union[Promise[Any]]:
    """
    Spies on the action stream that an UiSdlEpic listens for.
    Can be used to determine if certain action(s) has been received by the async epic.
    @example
    var spy = spyOnEpic(MyTestEpic);
    // ...
    expect(spy).toHaveBeenCalledWith({
     type: 'Test.Action',
     payload: 'Test Message',
    });
    
    @param epicType
              The name of the UiSdlEpic type to be spied on.
    @param epicWithRewire
              The module of the UiSdlEpic type to be spied on.
    @param functionName
              The name of the UiSdlEpic method corresponding to the epic.
    @param callThrough
              Whether to call through the original epic
    @return The spy instance that will get called whenever the epic receives an action
    """
        ...
    @classmethod
    def waitForRole(cls, role: str=None, waitForOptions: Any=None, options: Any=None) -> Union[Promise[Any]]:
    """
     Checks if an element with the given role is rendered. Useful when the element will be rendered asynchronously, and
     the test needs to wait for the assertion block. It will throw an error if it fails to find the element in time.
    
     @param {string} role
    The role to check if an element is rendered.
     @param {waitForOptions} waitForOptions
    The options for React Testing Library's waitFor. See [here](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor).
     @param {any} options
    The options for React Testing Library's queryAllByRole. See [here](https://testing-library.com/docs/queries/byrole#api).
     @returns {Promise} The {Promise} that throws an error if the element never renders.
    """
        ...
    @classmethod
    def waitForText(cls, text: str=None, waitForOptions: Any=None, options: Any=None) -> Union[Promise[Any]]:
    """
     Checks if an element with the given text is rendered. Useful when the element will be rendered asynchronously, and
     the test needs to wait for the assertion block. It will throw an error if it fails to find the element in time.
    
     @param {string} text
    The text to check if an element is rendered.
     @param {waitForOptions} waitForOptions
    The options for React Testing Library's waitFor. See [here](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor).
     @param {any} options
    The options for React Testing Library's queryAllByText. See [here](https://testing-library.com/docs/queries/bytext#api).
     @returns {Promise} The {Promise} that throws an error if the element never renders.
    """
        ...
    @classmethod
    def waitForTestId(cls, id: str=None, waitForOptions: Any=None, options: Any=None) -> Union[Promise[Any]]:
    """
     Checks if an element with the given test id is rendered. Useful when the element will be rendered asynchronously, and
     the test needs to wait for the assertion block. It will throw an error if it fails to find the element in time.
    
     @param {string} id
    The id to check if an element is rendered.
     @param {waitForOptions} waitForOptions
    The options for React Testing Library's waitFor. See [here](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor).
     @param {any} options
    The options for React Testing Library's queryAllByTestId. See [here](https://testing-library.com/docs/queries/bytestid#api).
     @returns {Promise} The {Promise} that throws an error if the element never renders.
    """
        ...
    @classmethod
    def waitForSpyCall(cls, spy: Any=None, calls: float=None, waitForOptions: Any=None) -> Union[Promise[Any]]:
    """
     Checks if a spy has been called a certain number of times. Useful when the spy call will happen asynchronously, and
     the test needs to wait for the assertion block. It will throw an error if the spy does not have the correct number of calls in time.
    
     @param {jasmine.Spy} spy
    The spy to check if it has been called
     @param {number} calls
    The number of times we expect the spy to have been called.
     @param {waitForOptions} waitForOptions
    The options for React Testing Library's waitFor. See [here](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor).
     @returns {Promise} The {Promise} that throws an error if the element never renders.
    """
        ...

