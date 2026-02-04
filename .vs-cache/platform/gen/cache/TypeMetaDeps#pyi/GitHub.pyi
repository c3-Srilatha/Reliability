#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.GitHubGitIgnoreTemplate import GitHubGitIgnoreTemplate
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.GitHubUser import GitHubUser
from c3.platform.MapBuilder import MapBuilder
from c3.platform.GitHubCommitStatus import GitHubCommitStatus
from c3.platform.GitHubRateLimit import GitHubRateLimit
from c3.platform.GitHubTreeNode import GitHubTreeNode
from c3.platform.SetBuilder import SetBuilder
from c3.platform.FieldType import FieldType
from c3.platform.RestConfig.OAuth import RestConfig.OAuth
from c3.platform.GitHubContent import GitHubContent
from c3.platform.GitHubReference import GitHubReference
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.GitHubComment import GitHubComment
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.GitHubBranch import GitHubBranch
from c3.platform.SetType import SetType
from c3.platform.GitHubCommitInfo import GitHubCommitInfo
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.platform.Action import Action
from c3.platform.CryptoPrivateKey import CryptoPrivateKey
from c3.platform.Promise import Promise
from c3.platform.GitHubTag import GitHubTag
from c3.platform.GitHubCompareResult import GitHubCompareResult
from c3.platform.GitHubCommit import GitHubCommit
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.GitHubPerson import GitHubPerson
from c3.platform.GitHubRepository import GitHubRepository
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.GitHubContentChange import GitHubContentChange
from c3.platform.GitHubTree import GitHubTree
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.GitHubPullRequestMergeResult import GitHubPullRequestMergeResult
from c3.platform.RestConfig import RestConfig
from c3.platform.GitHubPullRequest import GitHubPullRequest
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FileUrl import FileUrl
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.HttpResponse import HttpResponse
from c3.platform.GitHubRepoCommit import GitHubRepoCommit

# Python definitions for the C3 type GitHub


class GitHub(REST[RestConfig]):
    """
    This type is the GitHub Rest API proxy
    
    @remarks this represents a made instance of GitHub
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
    def fromJson(cls, json: any) -> Union[GitHub]:
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
    def fromJsonString(cls, json: str) -> Union[GitHub]:
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
    def fromXmlString(cls, xml: str) -> Union[GitHub]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[GitHub]:
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
    def replaceType(self, old: Type, new: Type) -> GitHub:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> GitHub:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> GitHub:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[GitHub]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[GitHub]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> GitHub:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> GitHub:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> GitHub:
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
    def validateObj(self) -> GitHub:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> GitHub:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> GitHub:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> GitHub:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> GitHub:
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
    def withoutFieldAtPath(self, path: str) -> GitHub:
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
    def withoutField(self, field: str) -> GitHub:
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
    def withoutField(self, field: FieldType) -> GitHub:
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
    def withoutFields(self, fields: Array[str]) -> GitHub:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> GitHub:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> GitHub:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> GitHub:
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
    def defaultField(self, field: str) -> GitHub:
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
    def defaultField(self, field: FieldType) -> GitHub:
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
    def unsetField(self, field: str) -> GitHub:
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
    def unsetField(self, field: FieldType) -> GitHub:
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
    def removeField(self, field: str) -> GitHub:
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
    def removeField(self, field: FieldType) -> GitHub:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> GitHub:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> GitHub:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> GitHub:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> GitHub:
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
    def mergeJson(self, json: any) -> GitHub:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> GitHub:
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
    def sumObj(self, other: Obj, deep: bool=None) -> GitHub:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[GitHub]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[GitHub]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[GitHub]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[GitHub]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[GitHub]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, GitHub]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, GitHub]]:
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
    def toBuilder(self) -> ObjBuilder[GitHub]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[GitHub]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> GitHub:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> GitHub:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> GitHub:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> GitHub:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> GitHub:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> GitHub:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> GitHub:
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
    def afterMake(self) -> GitHub:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> GitHub:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[GitHub]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> GitHub:
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
    def repositoryAndTokenInHttpResponse(self, fullRepositoryName: str) -> Union[HttpResponse]:
    """
    Returns repository information for the queried repository plus header containing personal access token scope at X-OAuth-Scopes.
    GitHub URI: `GET /repos/:owner/:repo`.
    Example: `GitHub.repositoryAndTokenInHttpResponse("c3-e/c3server")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    """
        ...
    def user(self, username: str) -> Union[GitHubUser]:
    """
    Returns information about the queried GitHub user.
    GitHub URI: `GET /users/:username`.
    Example: `GitHub.user("dliudliu")`
    
    @param username
                GitHub's user login id. (e.g. `dliudliu`)
    """
        ...
    def myself(self) -> Union[GitHubUser]:
    """
    Returns information about myself.
    GitHub URI: `GET /user`.
    Example: `GitHub.myself()`
    """
        ...
    def rateLimit(self) -> Union[GitHubRateLimit]:
    """
    Retrieves and returns current information about GitHub API's access limit for the account.
    GitHub URI: `GET /rate_limit`.
    Example: `GitHub.rateLimit()`
    """
        ...
    def repositories(self, page: int=None, per_page: int=None) -> Union[Array[GitHubRepository]]:
    """
    Returns all repository information for the account.
    GitHub URI: `GET /user/repos`.
    Example: `GitHub.repositories()`
    
    @param page
                page number, starting from 1
    @param per_page
                number of items to show per page
    """
        ...
    def streamRepositories(self) -> Union[Stream[GitHubRepository]]:
        ...
    def createRepository(self, name: str, description: str=None, homepage: str=None, private: bool=None, auto_init: bool=None) -> Union[GitHubRepository]:
    """
    Create a new repository for the authenticated user. When using
    OAuth, authorizations must include: `public_repo` scope or `repo` scope
    to create a public repository. Or, `repo` scope to create a private repository.
    GitHub URI: `POST /user/repos`.
    Example: `GitHub.createRepository("test-repo")`
    
    @param name
               The name of the repository
    @param description
               A short description of the repository
    @param homepage
               A URL with more information about the repository
    @param private
               Either `true` to create a private repository, or `false` to create a public one. Creating private repositories requires a paid GitHub account. Default: `false`
    @param auto_init
               Pass `true` to create an initial commit with empty README. Default: `false`
    """
        ...
    def deleteRepository(self, fullRepositoryName: str) -> Union[GitHubRepository]:
    """
    Deleting a repository requires admin access. If OAuth is used, the delete_repo scope is required.
    GitHub URI: `DELETE /repos/:owner/:repo`.
    Example: `deleteRepository("c3-e/repo-to-delete")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    """
        ...
    def repository(self, fullRepositoryName: str) -> Union[GitHubRepository]:
    """
    Returns repository information for the queried repository.
    GitHub URI: `GET /repos/:owner/:repo`.
    Example: `GitHub.repository("c3-e/c3server")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    """
        ...
    def branches(self, fullRepositoryName: str, page: int=None, per_page: int=None) -> Union[Array[GitHubBranch]]:
    """
    Returns all branch information under the queried repository.
    
    GitHub URI: `GET /repos/:owner/:repo/branches`.
    Example: `GitHub.branches("c3-e/c3server")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param page
                page number, starting from 1. Default: 1
    @param per_page
                number of items to show per page (max 100). Default: 30
    """
        ...
    def streamBranches(self, fullRepositoryName: str) -> Union[Stream[GitHubBranch]]:
        ...
    def branch(self, fullRepositoryName: str, branch: str) -> Union[GitHubBranch]:
    """
    Returns the branch information for the specified branch.
    GitHub URI: `GET /repos/:owner/:repo/branches/:branch`.
    Example: `GitHub.branch("c3-e/c3server", "master")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param branch
                The name of the branch. (e.g. `master`)
    """
        ...
    def commits(self, fullRepositoryName: str, sha: str=None, path: str=None, author: str=None, since: str=None, until: str=None, page: int=None, per_page: int=None) -> Union[Array[GitHubCommit]]:
    """
    Returns all commit information under the queried repository.
    GitHub URI: `GET /repos/:owner/:repo/commits`.
    Example: `GitHub.commits("c3-e/c3server")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param sha
                SHA or branch to start listing commits from. Default: the repository’s default branch (usually master).
    @param path
                Only commits containing this file path will be returned.
    @param author
                GitHub login or email address by which to filter by commit author.
    @param since
                Only commits after this date will be returned. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
    @param until
                Only commits before this date will be returned. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
    @param page
                page number, starting from 1
    @param per_page
                number of items to show per page
    """
        ...
    def streamCommits(self, fullRepositoryName: str, shaOrBranch: str=None, path: str=None, author: str=None, since: str=None, until: str=None) -> Union[Stream[GitHubCommit]]:
        ...
    def commit(self, fullRepositoryName: str, sha: str) -> Union[GitHubCommitInfo]:
    """
    Returns the git commit information in the queried repository with the given SHA.
    GitHub URI: `GET /repos/:owner/:repo/git/commits/:sha`.
    Example: `GitHub.commit("c3-e/c3server", "b2349d5599f36e27c932a803374a38acaf9de473")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param sha
                SHA of the commit to get.
    """
        ...
    def singleCommit(self, fullRepositoryName: str, sha: str) -> Union[GitHubRepoCommit]:
    """
    Returns the github commit information in the queried repository with the give SHA.
    GitHub URI: `GET /repos/:owner/:repo/commits/:sha`.
    Example: `GitHub.singleCommit("c3-e/c3server", "b2349d5599f36e27c932a803374a38acaf9de473")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param sha
                SHA of the commit to get.
    """
        ...
    def createCommit(self, fullRepositoryName: str, message: str, tree: str, parents: Array[str], name: str=None, email: str=None, date: str=None) -> Union[GitHubCommit]:
    """
    Create a commit in the specified repository.
    GitHub URI: `POST /repos/:owner/:repo/git/commits`.
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param message
                The commit message.
    @param tree
                The SHA of the tree object this commit points to.
    @param parents
                The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.
    @param name
                The name of the author (or committer) of the commit
    @param email
                The email of the author (or committer) of the commit
    @param date
                Indicates when this commit was authored (or committed). This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
    """
        ...
    def commitStatuses(self, fullRepositoryName: str, ref: str) -> Union[Array[GitHubCommitStatus]]:
    """
    Returns the list of commit statuses in the queried repository with the given ref.
    GitHub URI: `GET /repos/:owner/:repo/commits/:ref/statuses`.
    Example: `GitHub.commitStatuses("c3-e/c3server", "b2349d5599f36e27c932a803374a38acaf9de473")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param ref
                Can be a SHA, a branch name, or a tag name.
    """
        ...
    def createCommitStatus(self, fullRepositoryName: str, sha: str, state: str, context: str=None, description: str=None, target_url: str=None) -> Union[GitHubCommitStatus]:
    """
    Create commit status for a given SHA.
    GitHub URI: `POST /repos/:owner/:repo/statuses/:sha`.
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param sha
                SHA of the commit to get.
    @param context
                A string label to differentiate status of different systems.
    @param description
                A short description of the status.
    @param target_url
                The target URL linked from the GitHub UI for users to see the source of the status.
    """
        ...
    def compare(self, fullRepositoryName: str, base: str=None, head: str=None) -> Union[GitHubCompareResult]:
    """
    Compare two commits. Both `base` and `head` must be branch names in the same repository. To compare branches across other repositories in the same network, use the format `<USERNAME>:branch`.
    GitHub URI: `GET /repos/:owner/:repo/compare/:base...:head`.
    Example: `GitHub.compare("c3-e/c3server", "26d3fb1005132a4d6aba4d36ee04c8b453faeb5d", "30292e0e69e89de6651e8a19e6b4f096d9c00c3f")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param base
                The base commit or branch.
    @param head
                The head commit or branch.
    """
        ...
    def merge(self, fullRepositoryName: str, base: str, head: str, commit_message: str=None) -> Union[GitHubCommitInfo]:
    """
    Perform a merge of branches in a repository. This accomplishes essentially the same thing as merging one branch into another in a local repository and then pushing to GitHub.
    The benefit is that the merge is done on the server side and a local repository is not needed.
    GitHub URI: `POST /repos/:owner/:repo/merges`.
    Example: `GitHub.merge("c3-e/c3server", "master", "topic/cool_feature", "Shipped cool_feature!")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param base
                The name of the branch you want your changes to be merged into. This should be an existing branch on the current repository.
    @param head
                The name of the branch (or commit) where your changes are implemented. This can be a branch name or a commit SHA.
    @param commit_message
                Commit message to use for the merge commit. If omitted, a default message will be used.
    """
        ...
    def pullRequests(self, fullRepositoryName: str, page: int=None, per_page: int=None) -> Union[Array[GitHubPullRequest]]:
    """
    Returns all pull-request information under the queried repository.
    GitHub URI: `GET /repos/:owner/:repo/pulls`.
    Example: `GitHub.pullRequests("c3-e/c3server")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param page
                page number, starting from 1
    @param per_page
                number of items to show per page
    """
        ...
    def streamPullRequests(self, fullRepositoryName: str) -> Union[Stream[GitHubPullRequest]]:
        ...
    def pullRequest(self, fullRepositoryName: str, pullRequestNumber: str) -> Union[GitHubPullRequest]:
    """
    Returns a single pull request info under the queried repository.
    GitHub URI: `GET /repos/:owner/:repo/pulls/:number`.
    Example: `GitHub.pullRequest("c3-e/c3server",1)`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param pullRequestNumber
                The number of the pull request.
    """
        ...
    def createPullRequest(self, fullRepositoryName: str, title: str, head: str, base: str, body: str=None) -> Union[GitHubPullRequest]:
    """
    Creates a pull request under the given repository.
    GitHub URI: `POST /repos/:owner/:repo/pulls`.
    Example: `GitHub.createPullRequest("dliudliu/github-integration-test", "PR title", "branch/test", "master", "Test PR body")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param title
                The title of the pull request.
    @param head
                The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace head with a user like this: `username:branch`.
    @param base
                The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
    @param body
                The contents of the pull request.
    """
        ...
    def updatePullRequest(self, fullRepositoryName: str, pullRequestNumber: str, title: str=None, body: str=None, state: str=None) -> Union[GitHubPullRequest]:
    """
    Updates a pull request under the given repository.
    GitHub URI: `PATCH /repos/:owner/:repo/pulls/:number`.
    Example: `GitHub.updatePullRequestUpdate("dliudliu/github-integration-test", 979, "PR title", "PR body", "closed")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param pullRequestNumber
                The number of the pull request.
    @param title
                The title of the pull request.
    @param body
                The contents of the pull request.
    @param state
                State of this Pull Request. Either `open` or `closed`.
    """
        ...
    def mergePullRequest(self, fullRepositoryName: str, pullRequestNumber: str, commit_message: str=None, sha: str=None) -> Union[GitHubPullRequestMergeResult]:
    """
    Merges the given pull-request. Acts like the merge button on GitHub.
    GitHub URI: `PUT /repos/:owner/:repo/pulls/:number/merge`.
    Example: `GitHub.mergePullRequest("dliudliu/github-integration-test",1,"Commit message for the merge","eb753ddfeaff30e417d2fac1f744be1b5e2e6a2e")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param pullRequestNumber
                The number of the pull request.
    @param commit_message
                The message that will be used for the merge commit.
    @param sha
                SHA that pull request head must match to allow merge.
    """
        ...
    def tag(self, fullRepositoryName: str, sha: str) -> Union[GitHubTag]:
    """
    Retrieves the given tag in the given repository.
    GitHub URI: `GET /repos/:owner/:repo/git/tags/:sha`.
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param sha
                The SHA hash of the tag.
    """
        ...
    def createTag(self, fullRepositoryName: str, tag: str, message: str, object: str, type: str, tagger: GitHubPerson=None) -> Union[GitHubTag]:
    """
    Creates a tag in the given repository.
    GitHub URI: `POST /repos/:owner/:repo/git/tags`.
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param tag
                The tag.
    @param message
                The tag message.
    @param object
                The SHA of the git object this is tagging
    @param type
                The type of the object we’re tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
    @param tagger
                An object with information about the individual creating the tag.
    """
        ...
    def gitIgnoreTemplates(self) -> Union[Array[str]]:
    """
    Returns a string array of all .gitignore templates in the account.
    GitHub URI: `GET /gitignore/templates`.
    Example: `GitHub.gitIgnoreTemplates()`
    """
        ...
    def gitIgnoreTemplate(self, templateName: str=None) -> Union[GitHubGitIgnoreTemplate]:
    """
    Returns .gitignore template information for the queried template.
    GitHub URI: `GET /gitignore/templates/C`.
    Example: `GitHub.gitIgnoreTemplate("Ada")`
    """
        ...
    def content(self, fullRepositoryName: str, path: str, ref: str=None) -> Union[GitHubContent]:
    """
    Retrieve content/file information for the given path.
    GitHub URI: `GET /repos/:owner/:repo/contents/:path`.
    Example: `GitHub.content("dliudliu/github-integration-test", "README.md")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param path
                The content path.
    @param ref
                The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
    """
        ...
    def directory(self, fullRepositoryName: str=None, path: str=None, ref: str=None, page: int=None, per_page: int=None) -> Union[Array[GitHubContent]]:
    """
    Retrieve all file information under the given directory.
    GitHub URI: `GET /repos/:owner/:repo/contents/:path`.
    Example: `GitHub.directory("dliudliu/github-integration-test", "/")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param path
                The directory path.
    @param ref
                The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
    @param page
                page number, starting from 1
    @param per_page
                number of items to show per page
    """
        ...
    def createContent(self, fullRepositoryName: str, path: str, message: str, content: str, branch: str=None, committer: GitHubPerson=None, author: GitHubPerson=None) -> Union[GitHubContentChange]:
    """
    Creates a file at the given location. The creation of the file will be a commit itself.
    GitHub URI: `PUT /repos/:owner/:repo/contents/:path`.
    Example: `GitHub.createContent("dliudliu/github-integration-test", "test.log", "Creating a new file test.log", "Q29udGVudCBvZiB0ZXN0LmxvZw==", "master")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param path
                The content path.
    @param message
                The commit message.
    @param content
                The new file content, Base64 encoded.
    @param branch
                The branch name. Default: the repository’s default branch (usually `master`)
    @param committer
                Information about the committer. If the committer information is omitted, the authenticated user’s information is used.
    @param author
                Information about the author. The author section is optional and is filled in with the committer information if omitted.
    """
        ...
    def postCommitStatus(self, fullRepositoryName: str, sha: str, state: str, target_url: str=None, description: str=None, context: str=None) -> None:
    """
    Create commit statuses for a given SHA.
    GitHub URI: `POST /repos/:owner/:repo/statuses/:sha`.
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param sha
                The sha to create statuses for.
    @param state
                The state of the status. Can be one of: error, failure, pending, success
    @param target_url
                The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.
    @param description
                A short description of the status.
    @param context
                A string label to differentiate this status from the status of other systems. This field is case-insensitive.
    """
        ...
    def updateContent(self, fullRepositoryName: str, path: str, message: str, content: str, sha: str, branch: str=None, committer: GitHubPerson=None, author: GitHubPerson=None) -> Union[GitHubContentChange]:
    """
    Updates a file at the given location. The update of the file will be a commit itself.
    GitHub URI: `PUT /repos/:owner/:repo/contents/:path`.
    Example: `GitHub.updateContent("dliudliu/github-integration-test", "test.log", "Updating a new file test.log", "TmV3IGNvbnRlbnQgb2YgdGVzdC5sb2c=", "4f754a912f4698ef4b4e3a35a032e78e35184b44", "master")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param path
                The content path.
    @param message
                The commit message.
    @param content
                The new file content, Base64 encoded.
    @param sha
                The blob SHA of the file being replaced.
    @param branch
                The branch name. Default: the repository’s default branch (usually `master`)
    @param committer
                Information about the committer. If the committer information is omitted, the authenticated user’s information is used.
    @param author
                Information about the author. The author section is optional and is filled in with the committer information if omitted.
    """
        ...
    def upsertContent(self, fullRepositoryName: str, path: str, message: str, content: str, sha: str=None, branch: str=None, committer: GitHubPerson=None, author: GitHubPerson=None) -> Union[GitHubContentChange]:
    """
    Update a file at the given location, if one exists. Otherwise will create a new file. This will be a commit itself.
    
    Example: `GitHub.upsertContent("dliudliu/github-integration-test", "test.log", "Updating a new file test.log", "TmV3IGNvbnRlbnQgb2YgdGVzdC5sb2c=", "4f754a912f4698ef4b4e3a35a032e78e35184b44", "master")`
    
    @param fullRepositoryName
              GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param path
              The content path.
    @param message
              The commit message.
    @param content
              The new file content, Base64 encoded.
    @param sha
              The blob SHA of the file being replaced.
    @param branch
              The branch name. Default: the repository’s default branch (usually `master`)
    @param committer
              Information about the committer. If the committer information is omitted, the authenticated user’s information is used.
    @param author
              Information about the author. The author section is optional and is filled in with the committer information if omitted.
    """
        ...
    def deleteContent(self, fullRepositoryName: str, path: str, message: str, sha: str, branch: str=None, committer: GitHubPerson=None, author: GitHubPerson=None) -> Union[GitHubContentChange]:
    """
    Delete a file at the given location. The deletion of the file will be a commit itself.
    GitHub URI: `DELETE /repos/:owner/:repo/contents/:path`.
    Example: `GitHub.deleteContent("dliudliu/github-integration-test", "test.log", "Deleting a file test.log","f23b562ff86395feaf52ee1332aafb745d6d0219")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param path
                The content path.
    @param message
                The commit message.
    @param sha
                The blob SHA of the file being deleted.
    @param branch
                The branch name. Default: the repository’s default branch (usually `master`)
    @param committer
                Information about the committer. If the committer information is omitted, the authenticated user’s information is used.
    @param author
                Information about the author. The author section is optional and is filled in with the committer information if omitted.
    """
        ...
    def references(self, fullRepositoryName: str, page: int=None, per_page: int=None) -> Union[Array[GitHubReference]]:
    """
    Returns all references in the given repository.
    GitHub URI: `GET /repos/:owner/:repo/git/refs`.
    Example: `GitHub.references("dliudliu/github-integration-test")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param page
                page number, starting from 1
    @param per_page
                number of items to show per page
    """
        ...
    def reference(self, fullRepositoryName: str, ref: str) -> Union[GitHubReference]:
    """
    Retrieves the specified reference in the given repository.
    GitHub URI: `GET /repos/:owner/:repo/git/refs/:ref`.
    Example: `GitHub.reference("dliudliu/github-integration-test","refs/heads/master")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param ref
                The reference name. (e.g. `refs/heads/master`)
    """
        ...
    def createReference(self, fullRepositoryName: str, ref: str, sha: str) -> Union[GitHubReference]:
    """
    Creates a reference in the given repository.
    GitHub URI: `POST /repos/:owner/:repo/git/refs`.
    Example: `GitHub.createReference("dliudliu/github-integration-test","refs/heads/featureA","0d8ffa96f1951a619bc9f4921081e55f455aad15")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param ref
                The reference name. (e.g. `refs/heads/master`)
    @param sha
                The SHA1 value to set this reference to
    """
        ...
    def updateReference(self, fullRepositoryName: str, ref: str, sha: str, force: bool=None) -> Union[GitHubReference]:
    """
    Updates a reference in the given repository.
    GitHub URI: `PATCH /repos/:owner/:repo/git/refs/:ref`.
    Example: `GitHub.updateReference("dliudliu/github-integration-test","refs/heads/featureA","0d8ffa96f1951a619bc9f4921081e55f455aad15")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param ref
                The reference name. (e.g. `refs/heads/master`)
    @param sha
                The SHA1 value to set this reference to
    @param force
                Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to false will make sure you’re not overwriting work. Default: `false`.
    """
        ...
    def deleteReference(self, fullRepositoryName: str, ref: str) -> Union[GitHubReference]:
    """
    Deletes a reference in the given repository.
    GitHub URI: `DELETE /repos/:owner/:repo/git/refs/:ref`.
    Example: `GitHub.deleteReference("dliudliu/github-integration-test","refs/heads/featureA","0d8ffa96f1951a619bc9f4921081e55f455aad15")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param ref
                The reference name. (e.g. `refs/heads/master`)
    """
        ...
    def blob(self, fullRepositoryName: str, sha: str) -> Union[GitHubContent]:
    """
    Get a Blob from the given repository.
    GitHub URI: `GET /repos/:owner/:repo/git/blobs/:sha`.
    Example: `blob("dliudliu/github-integration-test", "6406c11859f42ced4e492b02e599f39459e1a514")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param sha
                The sha of the Blob
    @return with `size`, `content`, `encoding`, `url`, `sha` fields populated
    """
        ...
    def createBlob(self, fullRepositoryName: str, content: str, encoding: str=None) -> Union[GitHubContent]:
    """
    Create a Blob in the given repository.
    GitHub URI: `POST /repos/:owner/:repo/git/blobs`.
    Example: `createBlob("dliudliu/github-integration-test", "QmxvYiBjb250ZW50IC0gVFFZOFVJ", "base64")`, `createBlob("dliudliu/github-integration-test", "Content here.")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param content
                The new blob’s content.
    @param encoding
                The encoding used for content. Currently, "utf-8" and "base64" are supported. Default: "utf-8".
    @return with `url`, `sha` fields populated
    """
        ...
    def tree(self, fullRepositoryName: str, sha: str, recursive: int=None) -> Union[GitHubTree]:
    """
    Get tree from the given repository with the given SHA.
    GitHub URI: `GET /repos/:owner/:repo/git/trees/:sha`.
    Example: `tree("dliudliu/github-integration-test", "6406c11859f42ced4e492b02e599f39459e1a514")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param sha
                The sha of the tree
    @param recursive
                1 if you want to fetch the whole tree recursively
    """
        ...
    def createTree(self, fullRepositoryName: str, tree: Array[GitHubTreeNode], base_tree: str=None) -> Union[GitHubTree]:
    """
    Create tree in the given repository. The tree creation API will
    take nested entries as well. If both a tree and a nested path modifying
    that tree are specified, it will overwrite the contents of that tree with
    the new path contents and write a new tree out.
    GitHub URI: `POST /repos/:owner/:repo/git/trees`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param base_tree
               The SHA1 of the tree you want to update with new data. If you don’t set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted.
    @param tree
               Array of objects (of path, mode, type, and sha) specifying a tree structure
    """
        ...
    def createPullRequestLineComment(self, fullRepositoryName: str, pullRequestNumber: int, body: str, commit_id: str, path: str, line: int, side: str=None) -> Union[GitHubComment]:
    """
    Creates a review comment for a pull request in the pull request diff
    GitHub URI: `POST /repos/:owner/:repo/pulls/:pull_number/comments`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param pullRequestNumber
               The pull request number
    @param body
               The text of the review comment
    @param commit_id
               The SHA of the commit needing a comment
    @param path
               The relative path to the file that necessitates a comment
    @param line
               The line of the blob in the pull request diff that the comment applies to
    @param side
               In a split diff view, the side of the diff that the pull request's changes appear on. Can be LEFT or RIGHT
    """
        ...
    def updatePullRequestLineComment(self, fullRepositoryName: str, comment_id: str, body: str) -> Union[GitHubComment]:
    """
    Edits a review comment for a pull request in the pull request diff
    GitHub URI: `PATCH /repos/:owner/:repo/pulls/comments/:comment_id`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param pullRequestNumber
               The pull request number
    @param comment_id
               The id of the comment to edit
    @param body
               The text of the review comment
    """
        ...
    def deletePullRequestLineComment(self, fullRepositoryName: str, comment_id: str) -> Union[GitHubComment]:
    """
    Deletes a review comment for a pull request in the pull request diff
    GitHub URI: `DELETE /repos/:owner/:repo/pulls/comments/:comment_id`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param pullRequestNumber
               The pull request number
    @param comment_id
               The id of the comment to edit
    """
        ...
    def pullRequestComment(self, fullRepositoryName: str, comment_id: str) -> Union[GitHubComment]:
    """
    Returns the comment object associated with the comment id in a pull request
    GitHub URI: `GET /repos/:owner/:repo/pulls/comments/:comment_id`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param comment_id
               The id of the comment to fetch
    """
        ...
    def pullRequestComments(self, fullRepositoryName: str, pullRequestNumber: int) -> Union[Array[GitHubComment]]:
    """
    List all review comments for a pull request in the pull request diff
    GitHub URI: `GET /repos/:owner/:repo/pulls/:pull_number/comments`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param pullRequestNumber
               The pull request number
    """
        ...
    def createIssueComment(self, fullRepositoryName: str, issueNumber: int, body: str) -> Union[GitHubComment]:
    """
    Creates an issue comment at the provided issue number
    GitHub URI: `POST /repos/:owner/:repo/issues/:issue_number/comments`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param issueNumber
               The id of the issue to post a comment to
    @param body
               The text of the review comment
    """
        ...
    def updateIssueComment(self, fullRepositoryName: str, comment_id: str, body: str) -> Union[GitHubComment]:
    """
    Edits an issue comment
    GitHub URI: `PATCH /repos/:owner/:repo/issues/comments/:comment_id`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param comment_id
               The id of the comment to edit
    @param body
               The text of the review comment
    """
        ...
    def deleteIssueComment(self, fullRepositoryName: str, comment_id: str) -> Union[GitHubComment]:
    """
    Deletes an issue comment
    GitHub URI: `DELETE /repos/:owner/:repo/issues/comments/:comment_id`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param comment_id
               The id of the comment to edit
    """
        ...
    def issueComment(self, fullRepositoryName: str, comment_id: str) -> Union[GitHubComment]:
    """
    Returns the comment object associated with the comment id in an issue
    GitHub URI: `GET /repos/:owner/:repo/issues/comments/:comment_id`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param comment_id
               The id of the comment to fetch
    """
        ...
    def issueComments(self, fullRepositoryName: str, issueNumber: int) -> Union[Array[GitHubComment]]:
    """
    Returns a list of all issue comments in the issue, sorted by ascending ID.
    GitHub URI: `GET /repos/:owner/:repo/issues/:issue_number/comments`.
    
    @param fullRepositoryName
               GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param issueNumber
               The id of the issue to post a comment to
    """
        ...
    def createBranch(self, fullRepositoryName: str, newBranch: str, srcBranch: str) -> Union[GitHubReference]:
    """
    Creates a branch in the given repository, branching off from the given source branch.
    Example: `GitHub.createBranch("dliudliu/github-integration-test", "testBranch", "master")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param newBranch
                The new for the new branch to be created. (e.g. `testBranch`)
    @param srcBranch
                The base branch to be branched-off of. (e.g. `master`)
    """
        ...
    def deleteBranch(self, fullRepositoryName: str, branch: str) -> Union[GitHubReference]:
    """
    Delete a branch in the given repository.
    Example: `GitHub.deleteBranch("dliudliu/github-integration-test", "testBranch")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param branch
                The branch to be deleted. (e.g. `tesetBranch`)
    """
        ...
    def downloadContent(self, fullRepositoryName: str, path: str, ref: str=None) -> Union[GitHubContent]:
    """
    Download file at the given path from GitHub.
    Example: `GitHub.downloadContent("dliudliu/github-integration-test", "README.md")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param path
                The content path.
    @param ref
                The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
    """
        ...
    def moveContent(self, fullRepositoryName: str, pathSrc: str, pathDest: str, message: str, branch: str=None, committer: GitHubPerson=None, author: GitHubPerson=None) -> Union[Array[GitHubContentChange]]:
    """
    Moves a file from one location to another. The move will generate two commits (create & delete).
    Example: `GitHub.moveContent("dliudliu/github-integration-test", "test.log", "test2.log", "Moving a new file test.log", "master")`
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param pathSrc
                The source content path.
    @param pathDest
                The destination content path.
    @param message
                The commit message.
    @param branch
                The branch name. Default: the repository’s default branch (usually `master`)
    @param committer
                Information about the committer. If the committer information is omitted, the authenticated user’s information is used.
    @param author
                Information about the author. The author section is optional and is filled in with the committer information if omitted.
    """
        ...
    def createCommitToBranch(self, fullRepositoryName: str, branch: str, message: str, tree: Array[GitHubTreeNode], name: str=None, email: str=None, date: str=None) -> Union[GitHubCommit]:
    """
    Create a commit to the specified branch in the specified repository. If the branch doesn't
    exist, a new one will be created, branching from master.
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param branch
                The name of the branch to commit to. (e.g. `new-branch`)
    @param message
                The commit message.
    @param tree
                The SHA of the tree object this commit points to.
    @param name
                The name of the author (or committer) of the commit
    @param email
                The email of the author (or committer) of the commit
    @param date
                Indicates when this commit was authored (or committed). This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
    """
        ...
    def ensureBranchExists(self, fullRepositoryName: str, targetBranch: str, sourceBranch: str) -> bool:
    """
    Verify of the given target branch exists on GitHub. If one does not exist, optionally can create
    the targetBranch from sourceBranch when provided,
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param targetBranch
              Name of target branch to be verified.
    @param sourceBranch
              When provided, will create target branch if that does not exist.
    
    @return true if the target branch exists.
    """
        ...
    def reset(self, fullRepositoryName: str, targetBranch: str, sourceBranch: str, force: bool=None) -> Union[GitHubReference]:
    """
    Reset target branch to same sha as source branch.
    
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param targetBranch
              Name of target branch to be updated.
    @param sourceBranch
              Branch whose latest sha will be used for update.
    @param force
              When true, update will overwrite changes on target branch. default false, will do fast-forward update and
              will throw error, if fast-forward is not allowed.
    
    @return the updated branch.
    """
        ...
    def downloadRepository(self, fullRepositoryName: str, fileUrl: FileUrl, ref: str=None) -> Union[FileUrl]:
    """
    Download a repository to the C3 File System by streaming the repository from the GitHub endpoint -
    `GET /repos/{owner}/{repo}/zipball/{ref}`.
    
    @param fullRepositoryName
              GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param fileUrl
              The file to store the downloaded repository zip
    @param ref
              The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
    
    @return the path to the downloaded repository zip.
    """
        ...
    def withBasicAuth(self, username: str, password: str) -> Union[GitHub]:
    """
    Will set auth to generated BasicAuth token for given username and password.
    
    @param username
               Username to access github
    @param password
               password to github access.
    @return this with auth set to Basic authorization token.
    """
        ...
    def withToken(self, token: str) -> Union[GitHub]:
    """
    Will set auth to use GitHub OAuth token.
    
    @param token
               GitHub OAuth Token.
    @return this with auth set to use OAuth token.
    """
        ...

