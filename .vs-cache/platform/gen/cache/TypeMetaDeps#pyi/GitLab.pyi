#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Action import Action
from c3.platform.Include import Include
from c3.platform.CryptoPrivateKey import CryptoPrivateKey
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FieldType import FieldType
from c3.platform.RestConfig.OAuth import RestConfig.OAuth
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.RestConfig import RestConfig
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.FileUrl import FileUrl
from c3.platform.GitLabMergeRequest import GitLabMergeRequest
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.platform.HttpResponse import HttpResponse

# Python definitions for the C3 type GitLab


class GitLab(REST[RestConfig]):
    """
    This type is the GitLab Rest API proxy
    Some APIs return paginated results. Please refer to the documentation at
    https://docs.gitlab.com/ee/api/README.html#offset-based-pagination on how to use offset-based pagination
    
    @remarks this represents a made instance of GitLab
    """
    
    url: Optional[str]=None

    auth: Optional[str]=None
    def __init__(self, url: Optional[str]=None, auth: Optional[str]=None) -> None: ...

    @classmethod
    def _exec(cls, action: Action) -> Union[Any]:
    """
    @return executes given action representing abstract method call on one of this type's sub-type.
    """
        ...
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
    def fromJson(cls, json: any) -> Union[GitLab]:
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
    def fromJsonString(cls, json: str) -> Union[GitLab]:
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
    def fromXmlString(cls, xml: str) -> Union[GitLab]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[GitLab]:
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
    def replaceType(self, old: Type, new: Type) -> GitLab:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> GitLab:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> GitLab:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[GitLab]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[GitLab]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> GitLab:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> GitLab:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> GitLab:
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
    def validateObj(self) -> GitLab:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> GitLab:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> GitLab:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> GitLab:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> GitLab:
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
    def withoutFieldAtPath(self, path: str) -> GitLab:
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
    def withoutField(self, field: str) -> GitLab:
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
    def withoutField(self, field: FieldType) -> GitLab:
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
    def withoutFields(self, fields: Array[str]) -> GitLab:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> GitLab:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> GitLab:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> GitLab:
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
    def defaultField(self, field: str) -> GitLab:
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
    def defaultField(self, field: FieldType) -> GitLab:
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
    def unsetField(self, field: str) -> GitLab:
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
    def unsetField(self, field: FieldType) -> GitLab:
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
    def removeField(self, field: str) -> GitLab:
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
    def removeField(self, field: FieldType) -> GitLab:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> GitLab:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> GitLab:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> GitLab:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> GitLab:
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
    def mergeJson(self, json: any) -> GitLab:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> GitLab:
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
    def sumObj(self, other: Obj, deep: bool=None) -> GitLab:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[GitLab]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[GitLab]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[GitLab]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[GitLab]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[GitLab]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, GitLab]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, GitLab]]:
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
    def toBuilder(self) -> ObjBuilder[GitLab]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[GitLab]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> GitLab:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> GitLab:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> GitLab:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> GitLab:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> GitLab:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> GitLab:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> GitLab:
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
    def afterMake(self) -> GitLab:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> GitLab:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[GitLab]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> GitLab:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def config(self, secrets: bool=None) -> RestConfig:
    """
    Returns cached configuration for instance of this type. See Configurable type documentation for more details.
    
    @param secrets
             if set to `true` and current role has sufficient permissions configuration will contain values of secret
             fields. Otherwise configuration will not have values for secrets.
    @return instance of configuration - never `null`.
    """
        ...
    def configKey(self) -> Union[str]:
    """
    @return configuration key for this instance.
    """
        ...
    def configSingletonKey(self) -> Union[str]:
    """
    @return configuration key for this type assuming it is singleton.
    """
        ...
    @classmethod
    def typeConfig(cls) -> RestConfig:
    """
    @return type configuration for the given {@link Configurable} type.
    E.g. {@see REST} & {@see RestConfig}
    """
        ...
    @classmethod
    def isUrlConfigured(cls) -> bool:
    """
    @return weather or not target URL is configured.
    """
        ...
    def apiUrl(self) -> Union[str]:
    """
    @return URL endpoint for this API.
    """
        ...
    def apiAuth(self) -> Union[str]:
    """
    @return authorization token this API.
    """
        ...
    @classmethod
    def setApiUrlAndAuth(cls, url: str, auth: str=None, configOverride: str=None) -> None:
    """
    sets configuration for Api URL and Auth.
    """
        ...
    def callJson(self, action: str, *args: Array[Any]) -> Union[any]:
    """
    Call an existing action on this type using the provided args
    e.g. {@link Jira#search} may return certain mapped fields but if you want the raw json payload from the api use this
    @param action
               Name of the action to call. e.g. 'search' on {@link Jira} type
    @param args
               Positional args for the action to invoke
    @return raw json response or null (if Content-Type is not application/json) from the api
    """
        ...
    def callJsonApi(self, httpMethod: str, encodedPath: str, request: any=None, httpHeaders: Map[str, str]=None) -> Union[any]:
    """
    Trigger an http call with the given parameters and return response as json
    This is a low level api call that returns the raw json response and helpful when either an api is not mapped or not
    all fields are part of the response and this is useful to get the raw values
    @param httpMethod
               The http method to use (e.g. GET, POST, PUT, DELETE)
    @param encodedPath
               The path to append to the configured url for this Rest type. E.g. if Jira has a configured url, provide the encodedPath to append to it e.g. /issue/TICKET-1234
    @param request
               The http request body
    @param httpHeaders
               The http request headers
    @return raw json response or null (if Content-Type is not application/json) from the api
    """
        ...
    def isOAuthConfigured(self) -> bool:
    """
    Determine if OAuth 2.0 is configured
    """
        ...
    def generateOAuthToken(self, oAuthScope: Array[str]=None) -> Union[str]:
    """
    generate the OAuth 2.0 token for the specified scopes
    """
        ...
    @classmethod
    def setOAuth(cls, url: str, oauth: RestConfig.OAuth, privateKey: CryptoPrivateKey, configOverride: str=None) -> None:
    """
    Set up {@link RestConfig.OAuth} along with the private key.
    """
        ...
    @classmethod
    def apiResponseHandler(cls, apiResponse: any=None) -> Union[any]:
    """
    When there is an error, the GitLab REST API will either return an object with an `error` property or an object
    with only a `message` property. This function will throw an error if an error was given by GitLab.
    Otherwise it will return the received response.
    
    Examples can be viewed here: https://docs.gitlab.com/ee/api/rest/#sudo
    """
        ...
    @classmethod
    def throwError(cls, apiResponse: any=None) -> None:
    """
    Takes an API response provided by GitLab and converts it into a readable error.
    """
        ...
    def branch(self, projectId: str, branch: str) -> Union[any]:
    """
    Returns the branch information for the specified branch.
    Documentation: https://docs.gitlab.com/ee/api/branches.html#get-single-repository-branch
    
    GitLab URI: `GET /projects/:projectId/repository/branches/:branch`.
    Example: `GitLab.branch("c3-e%2Fc3server", "master")`
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param branch
                URL-encoded name of the branch. (e.g. `support%2Fmaster`)
    """
        ...
    def deleteBranch(self, projectId: str, branch: str) -> Union[any]:
    """
    Delete a branch in the given repository.
    Documentation: https://docs.gitlab.com/ee/api/branches.html#delete-repository-branch
    
    Example: `GitLab.deleteBranch("c3-e%2Fc3server", "testBranch")`
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param branch
                The branch to be deleted. (e.g. `tesetBranch`)
    """
        ...
    def createBranch(self, projectId: str, branch: str, ref: str) -> Union[any]:
    """
    Create a branch in the given repository starting from ref specified from nameOrSha.
    Documentation: https://docs.gitlab.com/ee/api/branches.html#create-repository-branch
    
    Example: `GitLab.createBranch("c3-e%2Fc3server", "branchToCreate", "baseBranch")`
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param branch
                The name of the branch to create. (e.g. `testBranch`)
    @param ref
                The base branch or sha. (e.g. `develop`)
    """
        ...
    def commits(self, projectId: str, refName: str=None, path: str=None, since: str=None, until: str=None, all: bool=None, withStats: bool=None, firstParent: bool=None, order: str=None) -> Union[any]:
    """
    Get a list of repository commits in a project.
    Documentation: https://docs.gitlab.com/ee/api/commits.html#list-repository-commits
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param refName
                The name of a repository branch, tag or revision range, or if not given the default branch
    @param path
                The file path
    @param since
                Only commits after or on this date are returned in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ
    @param until
                Only commits before or on this date are returned in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ
    @param all
                Retrieve every commit from the repository
    @param withStats
                Stats about each commit are added to the response
    @param firstParent
                Follow only the first parent commit upon seeing a merge commit. This is useful to only retrieve commits that is actually on the branch instead of external branches that were merged into the current branch. For explanation of what first parent is: https://redfin.engineering/visualize-merge-history-with-git-log-graph-first-parent-and-no-merges-c6a9b5ff109c
    @param order
                List commits in order. Possible values: default, topo. Defaults to default, the commits are shown in reverse chronological order.
    """
        ...
    def commit(self, projectId: str, sha: str, stats: bool=None) -> Union[any]:
    """
    Get the commit detail in a project.
    Documentation: https://docs.gitlab.com/ee/api/commits.html#get-a-single-commit
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param sha
                The commit hash or name of a repository branch or tag
    @param stats
                Include commit stats. Default is true
    """
        ...
    def commitDiffs(self, projectId: str, sha: str) -> Union[any]:
    """
    Get the diff of a commit in a project.
    Documentation: https://docs.gitlab.com/ee/api/commits.html#get-the-diff-of-a-commit
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param sha
                The commit hash or name of a repository branch or tag
    """
        ...
    def content(self, projectId: str, filePath: str, ref: str) -> Union[any]:
    """
    Allows you to receive information about file in repository like name, size, content. Note that file content is Base64 encoded.
    Documentation: https://docs.gitlab.com/ee/api/repository_files.html#get-file-from-repository
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param filePath
                URL encoded full path to new file. Ex. lib%2Fclass%2Erb
    @param ref
                The name of branch, tag or commit
    """
        ...
    def branches(self, projectId: str, search: str=None, page: int=None, per_page: int=None) -> Union[any]:
    """
    Get a list of repository branches from a project, sorted by name alphabetically.
    Documentation: https://docs.gitlab.com/ee/api/branches.html#list-repository-branches
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param search
                Return list of branches containing the search string. You can use ^term and term$ to find branches that begin and end with term respectively.
    """
        ...
    def streamBranches(self, projectId: str) -> Union[Stream[any]]:
        ...
    def createContent(self, projectId: str, filePath: str, branch: str, content: str, commitMessage: str, startBranch: str=None, encoding: str=None, authorEmail: str=None, authorName: str=None) -> Union[any]:
    """
    This allows you to create a single file. For creating multiple files with a single request see the commits API.
    
    Documentation: https://docs.gitlab.com/ee/api/repository_files.html#create-new-file-in-repository
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param filePath
                URL encoded full path to new file. Ex. lib%2Fclass%2Erb
    @param branch
                Name of the branch
    @param content
                File content
    @param commit_message
                Commit message
    @param startBranch
                Name of the branch to start the new commit from
    @param encoding
                Change encoding to base64. Default is text
    @param authorEmail
                Specify the commit author’s email address
    @param authorName
                Specify the commit author’s name
    """
        ...
    def postCommitStatus(self, projectId: str, sha: str, state: str, targetUrl: str=None, description: str=None, context: str=None) -> Union[any]:
    """
    Add or update the pipeline status of a commit. If the commit is associated with a merge request, it must target the commit in the merge request's source branch.
    
    Documentation: https://docs.gitlab.com/ee/api/commits.html#set-the-pipeline-status-of-a-commit
    
    @param projectId
               GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    
    @param sha
               The sha to create statuses for
    
    @param state
               The state of the status. Can be one of the following: pending, running, success, failed, canceled
    
    @param target_url
               The target URL to associate with this status
    
    @param description
               The short description of the status
    
    @param context
               The label to identify the system from which this status originated and differentiate this status from the status of other systems. Default value is default
    """
        ...
    def commitStatuses(self, projectId: str, sha: str, ref: str=None, stage: str=None, name: str=None, all: bool=None) -> Union[any]:
    """
    List the statuses of a commit in a project.
    
    Documentation: https://docs.gitlab.com/ee/api/commits.html#list-the-statuses-of-a-commit
    
    @param projectId
               GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    
    @param sha
               The sha to create statuses for
    
    @param ref
               The name of a repository branch or tag or, if not given, the default branch
    
    @param stage
               Filter by build stage, for example, test
    
    @param name
               Filter by job name, for example, bundler:audit
    
    @param all
               Return all statuses, not only the latest ones
    """
        ...
    def updateContent(self, projectId: str, filePath: str, branch: str, content: str, commitMessage: str, startBranch: str=None, encoding: str=None, authorEmail: str=None, authorName: str=None, lastCommitId: str=None) -> Union[any]:
    """
    This allows you to update a single file. For updating multiple files with a single request see the commits API.
    
    Documentation: https://docs.gitlab.com/ee/api/repository_files.html#update-existing-file-in-repository
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param file_path
                URL encoded full path to new file. Ex. lib%2Fclass%2Erb
    @param branch
                Name of the branch
    @param content
                File content
    @param commit_message
                Commit message
    @param startBranch
                Name of the branch to start the new commit from
    @param encoding
                Change encoding to base64. Default is text
    @param authorEmail
                Specify the commit author’s email address
    @param authorName
                Specify the commit author’s name
    @param last_commit_id
                Last known file commit ID
    """
        ...
    def repositoryTreeInHttpResponse(self, projectId: str, path: str, ref: str, recursive: bool, perPage: int, page: int=None) -> Union[HttpResponse]:
    """
    Get a list of repository files and directories in a project. This endpoint can be accessed without authentication if the repository is publicly accessible.
    Documentation: https://docs.gitlab.com/ee/api/repositories.html#list-repository-tree
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param path
                The path inside repository. Used to get content of subdirectories.
    @param ref
                The name of a repository branch or tag or if not given the default branch.
    @param recursive
                Boolean value used to get a recursive tree (false by default).
    @param per_page
                Number of results to show per page. If not specified, defaults to 20.
    @param page
                Page number in pagination.
    """
        ...
    def user(self) -> Union[any]:
    """
    Return current normal user.
    Documentation: https://docs.gitlab.com/ee/api/users.html#list-current-user-for-normal-users
    """
        ...
    def mergeRequests(self, projectId: str, state: str=None, page: int=None, per_page: int=None) -> Union[Array[GitLabMergeRequest]]:
    """
    Return all merge requests for a project.
    Documentation: https://docs.gitlab.com/ee/api/merge_requests.html#list-project-merge-requests
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param state
                The state of the merge request. It be 'opened', 'closed', 'locked' or 'merged'.
    @param page
                The page number, starting from 1
    @param per_page
                The number of items to show per page
    """
        ...
    def streamMergeRequests(self, projectId: str, state: str=None) -> Union[Stream[GitLabMergeRequest]]:
    """
    Return all merge requests for a project as a stream.
    Documentation: https://docs.gitlab.com/ee/api/merge_requests.html#list-project-merge-requests
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param state
                The state of the merge request. It be 'opened', 'closed', 'locked' or 'merged'.
    """
        ...
    def mergeRequest(self, projectId: str, requestIid: str, renderHtml: bool=None, includeDivergedCommitsCount: bool=None, includeRebaseInProgress: bool=None) -> Union[any]:
    """
    Shows information about a single merge request
    Documentation: https://docs.gitlab.com/ee/api/merge_requests.html#get-single-mr
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param requestIid
                The internal ID of the merge request
    @param renderHtml
                If true response includes rendered HTML for title and description.
    @param includeDivergedCommitsCount
                If true response includes the commits behind the target branch.
    @param includeRebaseInProgress
                If true response includes whether a rebase operation is in progress.
    """
        ...
    def mergeRequestCommits(self, projectId: str, requestIid: str) -> Union[any]:
    """
    Shows commits information about a single merge request
    Documentation: https://docs.gitlab.com/ee/api/merge_requests.html#get-single-mr-commits
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param requestIid
                The internal ID of the merge request
    """
        ...
    def createMergeRequest(self, projectId: str, sourceBranch: str, targetBranch: str, title: str, assigneeId: int=None, assigneeIds: Array[int]=None, reviewerIds: Array[int]=None, description: str=None, targetProjectId: int=None, labels: str=None, milestoneId: int=None, removeSourceBranch: bool=None, allowCollaboration: bool=None, allowMaintainerToPush: bool=None, squash: bool=None) -> Union[any]:
    """
    Creates a new merge request
    Documentation: https://docs.gitlab.com/ee/api/merge_requests.html#create-mr
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param sourceBranch
                The source branch.
    @param targetBranch
                The target branch.
    @param title
                Title of MR.
    @param assigneeId
                Assignee user ID.
    @param assigneeIds
                The ID of the user(s) to assign the MR to. Set to 0 or provide an empty value to unassign all assignees.
    @param reviewerIds
                The ID of the user(s) added as a reviewer to the MR. If set to 0 or left empty, no reviewers are added.
    @param description
                Description of MR. Limited to 1,048,576 characters.
    @param targetProjectId
                The target project (numeric ID).
    @param labels
                Labels for MR as a comma-separated list.
    @param milestoneId
                The global ID of a milestone.
    @param removeSourceBranch
                Flag indicating if a merge request should remove the source branch when merging.
    @param allowCollaboration
                Allow commits from members who can merge to the target branch.
    @param allowMaintainerToPush
                Deprecated, see allow_collaboration.
    @param squash
                Squash commits into a single commit when merging.
    """
        ...
    def mergeMergeRequest(self, projectId: str, mergeRequestIid: str, mergeCommitMessage: str=None, squashCommitMessage: str=None, squash: bool=None, shouldRemoveSourceBranch: bool=None, mergeWhenPipelineSucceeds: bool=None, sha: str=None) -> Union[any]:
    """
    Merge changes submitted with MR using this API.
    Documentation: https://docs.gitlab.com/ee/api/merge_requests.html#accept-mr
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param mergeRequestIid
                The internal ID of the merge request.
    @param mergeCommitMessage
                Custom merge commit message.
    @param squashCommitMessage
                Custom squash commit message.
    @param squash
                If true the commits are squashed into a single commit on merge.
    @param shouldRemoveSourceBranch
                If true removes the source branch.
    @param mergeWhenPipelineSucceeds
                If true the MR is merged when the pipeline succeeds.
    @param sha
                If present, then this SHA must match the HEAD of the source branch, otherwise the merge fails.
    """
        ...
    def updateMergeRequest(self, projectId: str, mergeRequestIid: str, targetBranch: str=None, title: str=None, assigneeId: int=None, assigneeIds: Array[int]=None, reviewerIds: Array[int]=None, milestoneId: int=None, labels: str=None, addLabels: str=None, removeLabels: str=None, description: str=None, stateEvent: str=None, removeSourceBranch: bool=None, squash: bool=None, discussionLocked: bool=None, allowCollaboration: bool=None, allowMaintainerToPush: bool=None) -> Union[any]:
    """
    Update a MR using this API.
    Documentation: https://docs.gitlab.com/ee/api/merge_requests.html#update-mr
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param mergeRequestIid
                The internal ID of the merge request.
    @param targetBranch
                The target branch.
    @param title
                Title of MR.
    @param assigneeId
                The ID of the user to assign the merge request to. Set to 0 or provide an empty value to unassign all assignees.
    @param assigneeIds
                The ID of the user(s) to assign the MR to. Set to 0 or provide an empty value to unassign all assignees.
    @param reviewerIds
                The ID of the user(s) set as a reviewer to the MR. Set the value to 0 or provide an empty value to unset all reviewers.
    @param milestoneId
                The global ID of a milestone to assign the merge request to. Set to 0 or provide an empty value to unassign a milestone.
    @param labels
                Comma-separated label names for a merge request. Set to an empty string to unassign all labels.
    @param addLabels
                Comma-separated label names to add to a merge request.
    @param removeLabels
                Comma-separated label names to remove from a merge request.
    @param description
                Description of MR. Limited to 1,048,576 characters.
    @param stateEvent
                New state (close/reopen).
    @param removeSourceBranch
                Flag indicating if a merge request should remove the source branch when merging.
    @param squash
                Squash commits into a single commit when merging.
    @param discussionLocked
                Flag indicating if the merge request’s discussion is locked. If the discussion is locked only project members can add, edit or resolve comments.
    @param allowCollaboration
                Allow commits from members who can merge to the target branch.
    @param allowMaintainerToPush
                Deprecated, see allow_collaboration.
    """
        ...
    def deleteMergeRequest(self, projectId: str, mergeRequestIid: str) -> Union[any]:
    """
    Deletes single merge request, only available for project owner or admins
    Documentation: https://docs.gitlab.com/ee/api/merge_requests.html#delete-a-merge-request
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param merdRequestIid
                The internal ID of the merge request.
    """
        ...
    def downloadRepository(self, projectId: str, fileUrl: FileUrl, sha: str=None) -> Union[FileUrl]:
    """
    Download a repository to the C3 File System by streaming the repository from the GitLab endpoint
    Documentation: https://docs.gitlab.com/ee/api/repositories.html#get-file-archive
    
    @param projectId
                GitLab's project ID or URL-encoded path of the project owned by the authenticated user. (e.g. `c3-e%2Fc3server`)
    @param fileUrl
                The file url at which to store the downloaded repository. (e.g. `c3fs:///tmp` )
    @param sha
                The commit SHA to download. A tag, branch reference, or SHA can be used. If not specified, defaults to the tip of the default branch.
    """
        ...

