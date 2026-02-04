#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DateTime import DateTime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.SetBuilder import SetBuilder
from c3.jarvis.Jarvis.Step import Jarvis.Step
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.CodeCoverageConfig import CodeCoverageConfig
from c3.jarvis.Jarvis.Build import Jarvis.Build
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Pair import Pair
from c3.platform.Error import Error
from c3.platform.Microservice.Content import Microservice.Content
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FieldType import FieldType
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.jarvis.Jarvis.Lambda import Jarvis.Lambda
from c3.jarvis.Jarvis.Branch import Jarvis.Branch
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Content import Content
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.jarvis.Jarvis.Report import Jarvis.Report
from c3.platform.ValueSpec import ValueSpec
from c3.jarvis.Jarvis.BranchGroup import Jarvis.BranchGroup
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FieldValue import FieldValue
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.Promise import Promise
from c3.platform.SourceControlRestApi import SourceControlRestApi
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.jarvis.Jarvis.Step.Result import Jarvis.Step.Result

# Python definitions for the C3 type JarvisIface


class JarvisIface(Microservice.Content.Iface, Microservice.Iface, Singleton):
    """
    Interface to J.A.R.V.I.S.
    
    @remarks this represents a made instance of JarvisIface
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
    def fromJson(cls, json: any) -> Union[JarvisIface]:
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
    def fromJsonString(cls, json: str) -> Union[JarvisIface]:
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
    def fromXmlString(cls, xml: str) -> Union[JarvisIface]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[JarvisIface]:
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
    def replaceType(self, old: Type, new: Type) -> JarvisIface:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> JarvisIface:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> JarvisIface:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[JarvisIface]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[JarvisIface]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> JarvisIface:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> JarvisIface:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> JarvisIface:
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
    def validateObj(self) -> JarvisIface:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> JarvisIface:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> JarvisIface:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> JarvisIface:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> JarvisIface:
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
    def withoutFieldAtPath(self, path: str) -> JarvisIface:
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
    def withoutField(self, field: str) -> JarvisIface:
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
    def withoutField(self, field: FieldType) -> JarvisIface:
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
    def withoutFields(self, fields: Array[str]) -> JarvisIface:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> JarvisIface:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> JarvisIface:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> JarvisIface:
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
    def defaultField(self, field: str) -> JarvisIface:
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
    def defaultField(self, field: FieldType) -> JarvisIface:
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
    def unsetField(self, field: str) -> JarvisIface:
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
    def unsetField(self, field: FieldType) -> JarvisIface:
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
    def removeField(self, field: str) -> JarvisIface:
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
    def removeField(self, field: FieldType) -> JarvisIface:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> JarvisIface:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> JarvisIface:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> JarvisIface:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> JarvisIface:
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
    def mergeJson(self, json: any) -> JarvisIface:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> JarvisIface:
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
    def sumObj(self, other: Obj, deep: bool=None) -> JarvisIface:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[JarvisIface]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[JarvisIface]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[JarvisIface]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[JarvisIface]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[JarvisIface]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, JarvisIface]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, JarvisIface]]:
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
    def toBuilder(self) -> ObjBuilder[JarvisIface]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[JarvisIface]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> JarvisIface:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> JarvisIface:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> JarvisIface:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> JarvisIface:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> JarvisIface:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> JarvisIface:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> JarvisIface:
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
    def afterMake(self) -> JarvisIface:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> JarvisIface:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[JarvisIface]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> JarvisIface:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @classmethod
    def ifacePackageAndVersion(cls) -> Pair[str, str]:
    """
    @return package and version in which this interface is defined.
    """
        ...
    @classmethod
    def updateContentMetadata(cls, content: Microservice.Content) -> Microservice.Content:
    """
    Return the latest metadata for a {@link Microservice.Content} to the client.
    This method is called automatically after updating content to ensure the client has the latest metadata.
    """
        ...
    @classmethod
    def contentFor(cls, content: Microservice.Content) -> Content:
    """
    @inheritdoc Microservice.Content.Iface
    
    NOTE: Jarvis utilizes only the {@link Jarvis.Content#name} field to retrieve the backing content.
    """
        ...
    @classmethod
    def inst(cls) -> JarvisIface:
    """
    @return the one and only instance to be used when member functions are called on this type.
    """
        ...
    @classmethod
    def cachedInst(cls) -> Union[JarvisIface]:
    """
    @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
    """
        ...
    @classmethod
    def buildArtifactsMount(cls) -> Union[str]:
    """
    Where to service is currently configured to store build artifacts, ex: logs, screenshots.
    This is NOT the same as the generated artifacts that are managed by {@link ArtifactHub}.
    Build artifacts will be stored by {@link JarvisService.Build#id} and {@link JarvisService.Step#id}.
    """
        ...
    @classmethod
    def buildForId(cls, id: str, failIfMissing: bool=None) -> Union[Jarvis.Build]:
    """
    @return build for provided id
    """
        ...
    @classmethod
    def stepForId(cls, id: str, failIfMissing: bool=None) -> Union[Jarvis.Step]:
    """
    @return step for provided id
    """
        ...
    @classmethod
    def stepArtifactsForId(cls, id: str) -> Union[Content]:
    """
    @return content containing step artifacts for provided id
    """
        ...
    @classmethod
    def relatedSemanticVersions(cls, semanticVersions: Array[str]=None) -> Union[Array[str]]:
    """
    Fetch related semantic versions for the given semantic versions. This includes semantic versions that are
    used for production, testing, coverage, and root source.
    """
        ...
    @classmethod
    def buildPipelineUrl(cls, buildId: str) -> Union[str]:
    """
    Triggers build for a given branch with null build config value.
    @param branch
              The branch to build
    @param forceRefresh
              Whether or not the latest commit sha should be force refreshed
    @return the build instance.
    @return Build pipeline url.
    @param buildId The build id to generate the pipeline url for.
    """
        ...
    @overload
    @classmethod
    def triggerBuild(cls, branch: Jarvis.Branch, forceRefresh: bool=None) -> Union[Jarvis.Build]:
    """
    Triggers build for a given branch with null build config value.
    @param branch
              The branch to build
    @param forceRefresh
              Whether or not the latest commit sha should be force refreshed
    @return the build instance.
    """
        ...
    @overload
    @classmethod
    def triggerBuild(cls, branch: Jarvis.Branch, config: any=None, forceRefresh: bool=None) -> Union[Jarvis.Build]:
    """
    Triggers build for a given branch. Does not impose any limits on starting a build.
    @param branch
              The branch to build
    @param config
              The build config for this {@link Jarvis.Build}.
              This config will take precedence over config file from {@link Jarvis.Build#jarvisFilePath}.
    @param forceRefresh
              Whether or not the latest commit sha should be force refreshed
    @return the build instance.
    """
        ...
    @classmethod
    def abort(cls, build: Jarvis.Build) -> None:
    """
    Asynchronously aborts a running build.
    """
        ...
    @classmethod
    def addSteps(cls, steps: Array[Jarvis.Step], inheritEdges: bool=None) -> Union[Array[Jarvis.Step]]:
    """
    Adds a step to current pipeline; will perform basic validation.
    @param steps
          The steps to add
    @param inheritEdges
          If true, the new steps will inherit the calling step's edges - meaning it will block the same steps.
    @return identifiable instances of added Jarvis.Steps
    """
        ...
    @classmethod
    def resetStepsParent(cls, steps: Array[Jarvis.Step]=None, newParent: Jarvis.Step=None) -> None:
    """
    Re-directs the parent of the given steps to the new parent step.
    Note that this might change the order of operations of the steps, since step execution order
    is partially determined by the parent-child relationship.
    
    Pipeline authors should be aware of the implications of this method and use it with caution.
    """
        ...
    @classmethod
    def setStepsBlockedBy(cls, steps: Array[Jarvis.Step]=None, blockedBy: Jarvis.Step=None) -> None:
    """
    Sets a list of steps to be blocked by the specified step.
    """
        ...
    @classmethod
    def addPlaceholderSteps(cls, steps: Array[Jarvis.Step]) -> Union[Array[Jarvis.Step]]:
    """
    Adds placeholder steps to current pipeline; will perform basic validation. The steps will automatically be marked
    as DONE with SUCCESS results.
    @return identifiable instances of added Jarvis.Steps
    """
        ...
    @classmethod
    def lockStep(cls) -> Union[Jarvis.Step]:
    """
    Lock the next step for calling executor; if `null` then no more steps left to execute
    
    @see #completeStep
    """
        ...
    @classmethod
    def completeStep(cls, result: Jarvis.Step.Result=None) -> None:
    """
    Completes and unlocks locked step for calling executor; note that #result parameter is optional and if not provided
    then will either create a new empty result or will change status of existing result to
    {@link Jarvis.Step.Status.SUCCESS}
    """
        ...
    @classmethod
    def failStep(cls, err: Error) -> None:
    """
    Fail the locked step for calling executor
    """
        ...
    @classmethod
    def setStepRunning(cls, actionId: str) -> Union[Jarvis.Step]:
    """
    Notify Jarvis that a step has begun execution and the actionId associated with that execution.
    """
        ...
    @classmethod
    def sourceControlRestApi(cls) -> SourceControlRestApi[Any]:
    """
    Return a {@link SourceControlRestApi} for the build that the calling executor is currently running a step for.
    """
        ...
    @classmethod
    def finalStepResultsFor(cls, filter: str=None, include: str=None) -> Union[Array[Jarvis.Step.Result]]:
    """
    Returns the step results that match the given filter but removes all results for steps that that were retried.
    Effectively returns the step results that should be considered for any status evaluation.
    @param filter
             Filter to apply on the Jarvis.Step.Result before calculating the final results to return
    @param include
             Include statement for the returned {@link Jarvis.Step.Result}
    """
        ...
    @classmethod
    def accessData(cls, typeName: str, actionName: str, spec: Any=None) -> Union[any]:
        ...
    @classmethod
    def buildConfigKeyValues(cls, buildId: str) -> Union[Map[str, str]]:
        ...
    @classmethod
    def buildSecretKeys(cls, buildId: str) -> Union[Array[str]]:
        ...
    @classmethod
    def serviceConfigKeyValues(cls) -> Union[Map[str, str]]:
        ...
    @classmethod
    def setServiceConfigValue(cls, key: str, value: str=None) -> None:
    """
    Set the service level config.
    """
        ...
    @classmethod
    def branchGroupConfigKeyValues(cls, branchGroupId: str) -> Union[Map[str, str]]:
        ...
    @classmethod
    def branchGroupSecretKeys(cls, branchGroupId: str) -> Union[Array[str]]:
        ...
    @overload
    @classmethod
    def branchGroupConfigValue(cls, key: str) -> Union[str]:
    """
    Return a {@link Jarvis.BranchGroup} config value for the current {@link Jarvis.Step}.
    Should only be used from Jarvis Executor.
    """
        ...
    @overload
    @classmethod
    def branchGroupConfigValue(cls, branchGroupId: str, key: str) -> Union[str]:
    """
    Return a {@link Jarvis.BranchGroup} config value for the current {@link Jarvis.Step}.
    Should only be used from Studio UI.
    """
        ...
    @overload
    @classmethod
    def branchGroupSecretValue(cls, key: str) -> Union[str]:
    """
    Return a {@link Jarvis.BranchGroup} secret config value for the current {@link Jarvis.Step}.
    Should only be used from Jarvis Executor.
    """
        ...
    @overload
    @classmethod
    def branchGroupSecretValue(cls, branchGroupId: str, key: str) -> Union[str]:
    """
    Return a {@link Jarvis.BranchGroup} secret config value for the current {@link Jarvis.Step}.
    Should only be used from Studio UI.
    """
        ...
    @classmethod
    def setBranchGroupConfigValue(cls, branchGroupId: str, key: str, value: str) -> None:
    """
    Set a branch group config value for {@link Jarvis.BranchGroup}.
    Should only be used from Studio UI.
    """
        ...
    @classmethod
    def setBranchGroupSecretValue(cls, branchGroupId: str, key: str, secret: str) -> None:
    """
    Set a secret branch group config value for {@link Jarvis.BranchGroup}.
    Should only be used from Studio UI
    """
        ...
    @classmethod
    def clearBranchGroupConfigValue(cls, branchGroupId: str, key: str) -> None:
    """
    Clear a specified branch group config value from a {@link Jarvis.BranchGroup}
    Should only be used from Studio UI.
    """
        ...
    @classmethod
    def clearBranchGroupConfigValues(cls, branchGroupId: str, keys: Array[str]) -> None:
    """
    Clear a list of specified branch group config values from a {@link Jarvis.BranchGroup}
    Should only be used from Studio UI.
    """
        ...
    @classmethod
    def clearBranchGroupSecretValue(cls, branchGroupId: str, key: str) -> None:
    """
    Clear a specified branch group secret config value from a {@link Jarvis.BranchGroup}
    Should only be used from Studio UI.
    """
        ...
    @classmethod
    def clearBranchGroupSecretValues(cls, branchGroupId: str, keys: Array[str]) -> None:
    """
    Clear a list of specified branch group secret config values from a {@link Jarvis.BranchGroup}
    Should only be used from Studio UI.
    """
        ...
    @classmethod
    def clearBranchGroupConfigAndSecret(cls, branchGroupId: str) -> None:
    """
    Clear all the branch group config values and secret values for a specific branch group.
    @param branchGroupId
           The id of the branch group whose config values are to be cleared.
    """
        ...
    @overload
    @classmethod
    def buildConfigValue(cls, buildId: str, key: str) -> Union[str]:
    """
    Fetch build config value from a config with a specific build id.
    Should only be used from Studio UI.
    @param buildId
           The id of the build.
    @param key
           The key of the config whose value is to be fetched.
    """
        ...
    @overload
    @classmethod
    def buildConfigValue(cls, key: str) -> Union[str]:
    """
    Fetch build config value with a specific key from the current build.
    Should only be used from Jarvis Executor.
    """
        ...
    @overload
    @classmethod
    def buildSecretValue(cls, buildId: str, key: str) -> Union[str]:
    """
    Fetch build secret value from a config with a specific build id.
    Should only be used from Studio UI.
    @param buildId
           The id of the build.
    @param key
           The key of the config whose value is to be fetched.
    """
        ...
    @overload
    @classmethod
    def buildSecretValue(cls, key: str) -> Union[str]:
    """
    Fetch build secret value with a specific key from the current build.
    Should only be used from Jarvis Executor.
    """
        ...
    @classmethod
    def setBuildConfigValue(cls, key: str, value: str) -> None:
    """
    Set config value for the current {@link Jarvis.Build}.
    Should only be used in Jarvis Executor.
    @param key
           The key of the config whose value is to be added/changed.
    @param value
           The value of the new key in the config.
    """
        ...
    @classmethod
    def setBuildSecretValue(cls, key: str, secret: str) -> None:
    """
    Set config value for the current {@link Jarvis.Build}.
    Should only be used in Jarvis Executor.
    @param key
           The key of the config whose value is to be added/changed.
    @param value
           The value of the new key in the config.
    """
        ...
    @classmethod
    def clearBuildConfigValue(cls, key: str) -> None:
    """
    Clear config value with a specified key for the current {@link Jarvis.Build}.
    Should only be used in Jarvis Executor.
    @param key
           The key of the config whose value is to be added/changed.
    """
        ...
    @classmethod
    def clearBuildSecretValue(cls, key: str) -> None:
    """
    Clear secret value with a specified key for the current {@link Jarvis.Build}.
    Should only be used in Jarvis Executor.
    @param key
           The key of the config whose value is to be added/changed.
    """
        ...
    @classmethod
    def clearBuildConfigAndSecret(cls) -> None:
    """
    Clear all config/secret values for the current {@link Jarvis.Build}.
    Should only be used in Jarvis Executor.
    """
        ...
    @overload
    @classmethod
    def setBuildConfig(cls, buildId: str=None, configValues: Map[str, str]=None, secretValues: Map[str, str]=None, overwrite: bool=None) -> None:
    """
    Create and set a new {@link JarvisService.BuildConfig} for the current {@link Jarvis.Build}.
    @param buildId
           The id of the build whose config values are to be set.
    @param configValues
           The config values of build config.
    @param secretValues
           The secret values of build config.
    @param overwrite
           Whether the values with the same keys that already exist be overwritten.
    """
        ...
    @overload
    @classmethod
    def setBuildConfig(cls, buildId: str=None, jsSource: str=None, overwrite: bool=None) -> None:
    """
    Create and set a new {@link JarvisService.BuildConfig} for the current {@link Jarvis.Build}.
    @param buildId
           The id of the build whose config values are to be set.
    @param jsSource
           The js source of build config, read from source content.
    """
        ...
    @overload
    @classmethod
    def registerBranchGroup(cls, branchGroup: Jarvis.BranchGroup, token: str=None) -> Union[Jarvis.BranchGroup]:
    """
    Register a {@link Jarvis.BranchGroup} in service. It will trigger a refresh of all {@link Jarvis.Branch}es for
    the given branchGroup's repository
    
    @param branchGroup
              The group to register. If the repository of the group does not exist, will also create the repo
    @param token
              An auth token that can be used to access the {@link Jarvis.BranchGroup#repository}.
              If given, it will update the {@link Jarvis.BranchGroup#repository} to use the token moving forward.
              If none is given, it will try to use an existing token for the repo.
    @return the registered branch group
    """
        ...
    @overload
    @classmethod
    def registerBranchGroup(cls, branchGroup: Jarvis.BranchGroup, token: str=None, configValues: Map[str, str]=None, secretValues: Map[str, str]=None) -> Union[Jarvis.BranchGroup]:
    """
    Register a {@link Jarvis.BranchGroup} in service. It will trigger a refresh of all {@link Jarvis.Branch}es for
    the given branchGroup's repository
    
    @param branchGroup
              The group to register. If the repository of the group does not exist, will also create the repo
    @param token
              An auth token that can be used to access the {@link Jarvis.BranchGroup#repository}.
              If given, it will update the {@link Jarvis.BranchGroup#repository} to use the token moving forward.
              If none is given, it will try to use an existing token for the repo.
    @param configValues
           The config values of branchGroup config.
    @param secretValues
           The secret values of branchGroup config.
    @return the registered branch group
    """
        ...
    @classmethod
    def unregisterBranchGroup(cls, branchGroupId: str) -> None:
    """
    Unregister a {@link Jarvis.BranchGroup} in service. It will trigger a refresh of all {@link Jarvis.Branch}es for
    the given branchGroup's repository
    
    @param branchGroup
              The group to remove.
    """
        ...
    @classmethod
    def deactivateBranch(cls, branch: Jarvis.Branch) -> None:
    """
    De-activate a {@link Jarvis.Branch}
    """
        ...
    @classmethod
    def reactivateBranch(cls, branch: Jarvis.Branch) -> None:
    """
    Re-activate a {@link Jarvis.Branch}
    """
        ...
    @classmethod
    def updateBuildExpiration(cls, buildId: str, expiration: DateTime=None, keepForever: bool='false') -> None:
    """
    Update expiration settings for a {@link Jarvis.Build}, and subsequently its corresponding {@link ArtifactHub.Artifact}s.
    """
        ...
    @classmethod
    def getCoverageConfig(cls) -> Union[CodeCoverageConfig]:
    """
    Get config {@link CodeCoverageConfig} for the current build
    """
        ...
    @classmethod
    def registerBuildLambdas(cls, lambdas: Array[Jarvis.Lambda]=None) -> None:
    """
    Persist all custom {@link Jarvis.Lambda}s to the Jarvis database.
    @param lambdas
           The list of custom lambdas to register.
    """
        ...
    @overload
    @classmethod
    def reportForId(cls, reportId: str) -> Union[Jarvis.Report]:
    """
    Retrieves updated {@link Jarvis.Report} from the service. Child reports should be aggregated
    by cronjob {@link JarvisService#aggregateChildReports}
    """
        ...
    @overload
    @classmethod
    def reportForId(cls, reportId: str, failIfMissing: bool=None) -> Union[Jarvis.Report]:
    """
    Retrieves updated {@link Jarvis.Report} from the service if exists or throws an error if desired.
    """
        ...
    @classmethod
    def accessReports(cls, actionName: str, spec: FetchSpec=None) -> Union[any]:
    """
    Retrieves data for {@link Jarvis.Report}. Ensures that the reports are up to date.
    """
        ...
    @classmethod
    def fileReports(cls, reports: Array[Jarvis.Report]=None) -> None:
    """
    Updates the supplied reports on the service. A combination of {@link Jarvis.Report} subtypes can be given at once.
    """
        ...
    @classmethod
    def removeReports(cls, reportIds: Array[str]=None) -> None:
    """
    Removes the {@link Jarvis.Report} with the given ids from the service. Generally, this should be used when a {@link Jarvis.Step}
    processes child reports "manually" instead of relying on {@link Jarvis.Report#amend} to be called asynchronously.
    """
        ...
    @classmethod
    def terminateExecutors(cls, executorIds: Array[str]=None) -> Union[int]:
    """
    Terminate executors by setting their state to ABORTING.
    """
        ...
    @classmethod
    def forceTerminateAllExecutors(cls, confirm: bool=None) -> None:
    """
    Terminates all the executor that are NOT in DONE state.
    """
        ...
    @classmethod
    def fetchPerformanceMetrics(cls) -> Union[any]:
    """
    Fetch all metrics related to builds, executors, and steps.
    """
        ...

