#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MapBuilder import MapBuilder
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.GitHubComment import BaseCodeAnalyzer.GitHubComment
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FieldType import FieldType
from c3.platform.GitHubRestApi import GitHubRestApi
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetType import SetType
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Result.Processed import BaseCodeAnalysis.Result.Processed
from c3.platform.GitHub import GitHub
from c3.platform.MapType import MapType
from c3.platform.Lambda import Lambda
from c3.platform.Exclude import Exclude
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.GitHubRestApi import BaseCodeAnalyzer.GitHubRestApi
from c3.platform.Promise import Promise
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.SourceControlGadget import BaseCodeAnalyzer.SourceControlGadget
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.SourceControlGadget.Spec import BaseCodeAnalyzer.SourceControlGadget.Spec
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Metric.Message.Processed import BaseCodeAnalysis.Metric.Message.Processed
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.SourceControlGadget.Anchors import BaseCodeAnalyzer.SourceControlGadget.Anchors
from c3.platform.GitHubPullRequest import GitHubPullRequest
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.MapBuilder import MapBuilder
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.SourceControlGadget.CommitResultsSpec import BaseCodeAnalyzer.SourceControlGadget.CommitResultsSpec
from c3.platform.FieldValue import FieldValue
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.SourceControlGadget.FileDiff import BaseCodeAnalyzer.SourceControlGadget.FileDiff
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Promise import Promise

# Python definitions for the C3 type BaseCodeAnalyzer.GitHubGadget


class GitHubGadget(BaseCodeAnalyzer.SourceControlGadget[BaseCodeAnalyzer.GitHubRestApi, GitHub, BaseCodeAnalyzer.GitHubGadget.Spec]):
    """
    Base Type for {@link BaseCodeAnalyzer} to interact with a GitHub repository through REST.
    This Type is intended to add on additional APIs required for the code analyzer on top of
    what's already provided by the {@link GitHub} Type.
    
    @remarks this represents a made instance of BaseCodeAnalyzer.GitHubGadget
    """
    
    CODE_ANALYZER_COMMIT_STATUS_NAME: Optional[str]=None
    """
    The string to be displayed on the commit status corresponding to the code analysis run.
    """

    CODE_ANALYZER_PENDING_COMMIT_STATUS_MSG: Optional[str]=None
    """
    The description to be displayed on a pending code analysis run commit status.
    """

    CODE_ANALYZER_SUCCESS_COMMIT_STATUS_MSG: Optional[str]=None
    """
    The description to be displayed on a successful code analysis run commit status.
    """

    CODE_ANALYZER_FAILURE_COMMIT_STATUS_MSG: Optional[str]=None
    """
    The description to be displayed on a failure code analysis run commit status.
    """

    CODE_ANALYZER_ERROR_COMMIT_STATUS_MSG: Optional[str]=None
    """
    The description to be displayed on a error code analysis run commit status.
    """

    CODE_ANALYZER_INCOMPLETE_COMMIT_STATUS_MSG: Optional[str]=None
    """
    The description to be displayed on an incomplete code analysis run commit status.
    """

    CODE_ANALYZER_COMPLETION_COMMIT_STATUS_MSG: Optional[str]=None
    """
    The description to be displayed on an completed code analysis run commit status for non-PR commits.
    """

    restInst: Optional[BaseCodeAnalyzer.GitHubRestApi]
    """
    An instance of the REST type created in the `baseCodeAnalyzer` package to add additional source control APIs
    on top of what's provided in {@link platformRestInst}.
    """

    platformRestInst: Optional[GitHub]
    """
    An instance of the C3 AI Platform REST type used to interact with the source control host.
    Example: {@link GitHub}.
    """

    spec: Optional[BaseCodeAnalyzer.GitHubGadget.Spec]
    """
    The spec from which this source control gadget was created.
    """
    def __init__(self, CODE_ANALYZER_COMMIT_STATUS_NAME: Optional[str]=None, CODE_ANALYZER_PENDING_COMMIT_STATUS_MSG: Optional[str]=None, CODE_ANALYZER_SUCCESS_COMMIT_STATUS_MSG: Optional[str]=None, CODE_ANALYZER_FAILURE_COMMIT_STATUS_MSG: Optional[str]=None, CODE_ANALYZER_ERROR_COMMIT_STATUS_MSG: Optional[str]=None, CODE_ANALYZER_INCOMPLETE_COMMIT_STATUS_MSG: Optional[str]=None, CODE_ANALYZER_COMPLETION_COMMIT_STATUS_MSG: Optional[str]=None, restInst: Optional[BaseCodeAnalyzer.GitHubRestApi]=None, platformRestInst: Optional[GitHub]=None, spec: Optional[BaseCodeAnalyzer.GitHubGadget.Spec]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[BaseCodeAnalyzer.GitHubGadget]:
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
    def fromJsonString(cls, json: str) -> Union[BaseCodeAnalyzer.GitHubGadget]:
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
    def fromXmlString(cls, xml: str) -> Union[BaseCodeAnalyzer.GitHubGadget]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[BaseCodeAnalyzer.GitHubGadget]:
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
    def replaceType(self, old: Type, new: Type) -> BaseCodeAnalyzer.GitHubGadget:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalyzer.GitHubGadget]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalyzer.GitHubGadget]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def validateObj(self) -> BaseCodeAnalyzer.GitHubGadget:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def withoutFieldAtPath(self, path: str) -> BaseCodeAnalyzer.GitHubGadget:
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
    def withoutField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget:
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
    def withoutField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget:
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
    def withoutFields(self, fields: Array[str]) -> BaseCodeAnalyzer.GitHubGadget:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> BaseCodeAnalyzer.GitHubGadget:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> BaseCodeAnalyzer.GitHubGadget:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def defaultField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget:
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
    def defaultField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget:
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
    def unsetField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget:
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
    def unsetField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget:
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
    def removeField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget:
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
    def removeField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> BaseCodeAnalyzer.GitHubGadget:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> BaseCodeAnalyzer.GitHubGadget:
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
    def mergeJson(self, json: any) -> BaseCodeAnalyzer.GitHubGadget:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def sumObj(self, other: Obj, deep: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[BaseCodeAnalyzer.GitHubGadget]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[BaseCodeAnalyzer.GitHubGadget]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[BaseCodeAnalyzer.GitHubGadget]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[BaseCodeAnalyzer.GitHubGadget]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[BaseCodeAnalyzer.GitHubGadget]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, BaseCodeAnalyzer.GitHubGadget]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, BaseCodeAnalyzer.GitHubGadget]]:
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
    def toBuilder(self) -> ObjBuilder[BaseCodeAnalyzer.GitHubGadget]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[BaseCodeAnalyzer.GitHubGadget]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> BaseCodeAnalyzer.GitHubGadget:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> BaseCodeAnalyzer.GitHubGadget:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> BaseCodeAnalyzer.GitHubGadget:
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
    def afterMake(self) -> BaseCodeAnalyzer.GitHubGadget:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> BaseCodeAnalyzer.GitHubGadget:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[BaseCodeAnalyzer.GitHubGadget]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> BaseCodeAnalyzer.GitHubGadget:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def getFilePathInSourceControlRepo(self, filePkgPathUrl: str=None) -> str:
    """
    Helper function to get the path of a file in the source control repo based on it's file package path URL.
    
    @param filePkgPathUrl
              The file's package path URL.
    @returns the file's path in the source control repo.
    """
        ...
    @classmethod
    def getGadgetFromSpec(cls, spec: BaseCodeAnalyzer.SourceControlGadget.Spec=None) -> BaseCodeAnalyzer.SourceControlGadget[Any, Any, Any]:
    """
    Helper function to get a {@link BaseCodeAnalyzer.SourceControlGadget} instances based on the provided
    {@link BaseCodeAnalyzer.SourceControlGadget.Spec}.
    
    @param spec
             The spec to create the source control gadget from.
    @returns an instance of a source control gadget.
    """
        ...
    def getBaseBranchName(self) -> Union[str]:
    """
    Helper function to get the base branch name for a function.
    
    @returns the base branch name for the commitSha for which this gadget was built.
    """
        ...
    def postPendingCommitStatus(self) -> None:
    """
    Function to post a 'pending' code analysis status on the commit on which code analysis
    is being performed.
    """
        ...
    def postSuccessCommitStatus(self) -> None:
    """
    Function to post a 'success' code analysis status on the commit on which code analysis
    is being performed.
    """
        ...
    def postFailureCommitStatus(self) -> None:
    """
    Function to post a 'success' code analysis status on the commit on which code analysis
    is being performed.
    """
        ...
    def postIncompleteCommitStatus(self) -> None:
    """
    Function to post a 'error' code analysis status on the commit on which code analysis
    couldn't be completed because there was at least one package that didn't have a dependency
    on `baseToolkit`.
    """
        ...
    def postCompletionCommitStatus(self) -> None:
    """
    Function to post a 'success' code analysis status on non-PR commits for which code analysis was completed.
    """
        ...
    def getPullRequestTitle(self) -> Union[str]:
    """
    Helper function to get the pull request's title. Used to check if the title matches c3 guidelines,
    i.e., starts with the ticket number.
    
    @returns the title of the current pull request.
    """
        ...
    def getModifiedFileDiffs(self, packagesPath: str) -> Union[Map[str, BaseCodeAnalyzer.SourceControlGadget.FileDiff]]:
    """
    Helper function to get an array of {@link BaseCodeAnalysis.FileSpec}s of the files
    that were changed between the commitSha and baseSha.
    
    @param packagesPath
             The packages path where application packages are stored within the repository.
    @returns an map from the file paths of the modified files in the server's filesystem to their
            respective {@link BaseCodeAnalyzer.SourceControlGadget.FileDiff}s.
    """
        ...
    @classmethod
    def parseDiff(cls, filePkgPathUrl: str, filePathInSourceControlRepo: str, diff: str=None) -> Union[BaseCodeAnalyzer.SourceControlGadget.FileDiff]:
    """
    Helper function to parse the diff patch of a file and get the deleted and added lines.
    
    @param filePkgPathUrl
             The path of the file (in the server's filesystem) for which the git diff is being parsed.
    @param filePathInSourceControlRepo
             The path of the file (in the source control repository) for which the git diff is being parsed.
    @param diff
             The git diff patch string to parse.
    
    @returns a {@link BaseCodeAnalyzer.SourceControlGadget.FileDiff} containing two maps corresponding to
            the added and deleted lines, their line numbers and content.
    """
        ...
    def getCommitEncodedAnchor(self, filePkgPathUrl: str=None, line: int=None) -> Union[str]:
    """
    Helper function to get the lne-level anchor for a commit.
    
    @param filePkgPathUrl
             The file path of the file in the server.
    @param line
             The line number to get the encoded anchor for.
    
    @returns the hyperlink to the encoded anchor on a commit.
    """
        ...
    @classmethod
    def getPrEncodedAnchors(cls, prUrl: str=None, messages: Array[BaseCodeAnalysis.Metric.Message.Processed]=None) -> Union[BaseCodeAnalyzer.SourceControlGadget.Anchors]:
    """
    Helper function to get the file- and line-level anchors for a pull request.
    
    @param prUrl
             The pull request URL.
    @param messages
             The list of messages for which to get anchors.
    
    @returns the {@link BaseCodeAnalyzer.SourceControlGadget.Anchors} containing the file- and line-level
             anchors.
    """
        ...
    def updateOrPostCodeReviewComments(self, processedResults: Array[BaseCodeAnalysis.Result.Processed]=None, maxCodeAnalyzerCommentCount: int=None) -> None:
    """
    Helper function to post a code review based on the metric messages raised by the code analysis function.
    
    The C3 AI Code Analyzer only posts a maximum of {@link BaseCodeAnalyzer.NotifyPullRequestSpec#maxCodeAnalyzerCommentCount}
    error messages as inline comments and posts the rest of the messages in the review comment.
    This function determines how many of the error messages were already posted
    and returned the number of previous posted messages, the number of new messages (including warnings) and also
    provides the list of comments to post on the PR (ensuring the total comments posted is at a maximum of `x`).
    
    @param processedResults
             The processed code analysis results from which to post review comments.
    @param maxCodeAnalyzerCommentCount
             The maximum number of code analyzer comments to post as inline comments.
    """
        ...
    def updateOrPostCodeReviewSummary(self, summaryMessage: str=None) -> None:
    """
    Helper function to post a code analysis summary based on the metric results calculated by the
    code analysis function.
    
    @param summaryMessage
             The summary message to be updated/posted.
    """
        ...
    def commitProcessedResults(self, spec: BaseCodeAnalyzer.SourceControlGadget.CommitResultsSpec=None) -> None:
    """
    Helper function to commit the processed results to a centralized repository for analysis.
    
    @param spec
              The spec containing information to push the code analysis results to a centralized repository.
    """
        ...
    def getFileContents(self, filePaths: Array[str]=None) -> Union[Map[str, str]]:
    """
    Helper function to get the file contents of the files in the provided list of file paths.
    
    @param filePaths
              The list of file paths for which to get the file contents.
    @returns a map from the file paths to their respective file contents.
    """
        ...
    def isCommitShaUpToDate(self) -> bool:
    """
    Function to check whether the commit on which this code analysis build is running is up-to-date, i.e.,
    if the SHA of the build is the same as the current SHA of the PR.
    
    @returns true if the sha is up-to-date.
    """
        ...
    def getAuthWithBackupTokens(self) -> Union[Array[str]]:
    """
    Helper function to get a list of auth tokens to be used for authorizing.
    Contains the default auth token with passed in the source control spec along with
    the backup tokens.
    
    @returns the list of GitHub token to be used to authorize GitHub API request.
    """
        ...
    def invokeApiWithBackupTokens(self, url: str, lambda_: Lambda[FunctionType]) -> Union[Any]:
    """
    Wrapper function to execute a lambda with retry logic by trying multiple auth tokens
    until the API request succeeds. All write operations must use this wrapper so to ensure
    there is fault tolerance if any one token hits secondary rate limits.
    
    @param url
              The GitHub API url to use.
    @param lambda
              The request lambda to execute. Must have partially applied args for all parameters
              other than the url and auth with which to execute the lambda. Must accept a url and auth token.
    @returns the response from the GitHub API, if any
    """
        ...
    def pullRequest(self, fullRepositoryName: str, pullRequestNumber: str) -> Union[GitHubPullRequest]:
    """
    Wrapper around the {@link GitHub#pullRequest} function.
    Being used to reliably spy on the `pullRequest` function.
    
    @param fullRepositoryName
              GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param pullRequestNumber
              The number of the pull request.
    @returns the latest pull request information corresponding to the repo and PR number.
    """
        ...
    def pullRequestComments(self) -> Union[Array[BaseCodeAnalyzer.GitHubComment]]:
    """
    Wrapper around the {@link BaseCodeAnalyzer.GitHubRestApi#pullRequestComments} function.
    Being used to reliably spy on the `pullRequestComments` function.
    
    @returns the list of GitHub comments for the PR linked to this gadget.
    """
        ...
    def createPullRequestReview(self, body: str=None, comments: Array[BaseCodeAnalyzer.GitHubComment]=None) -> None:
    """
    Wrapper around the {@link BaseCodeAnalyzer.GitHubRestApi#createPullRequestReview} function.
    Being used to reliably spy on the `createPullRequestReview` function to ensure the
    correct comments are being passed through.
    
    @param body
              The text of the review comment.
    @param comments
              The list of GitHub comments to be posted as part of the pull request review.
    """
        ...
    def createIssueComment(self, summaryMessage: str=None) -> None:
    """
    Wrapper around the {@link GitHub#createIssueComment} function.
    Being used to reliably spy on the `createIssueComment` function to ensure the
    correct summary message is being passed through.
    
    @param summaryMessage
              The summary message to be posted on the PR.
    """
        ...
    def updateIssueComment(self, summaryMessage: str=None, issueCommentId: int=None) -> None:
    """
    Wrapper around the {@link GitHub#updateIssueComment} function.
    Being used to reliably spy on the `updateIssueComment` function to ensure the
    correct summary message is being passed through.
    
    @param summaryMessage
              The summary message to be posted on the PR.
    @param issueCommentId
              The ID of the the issue comment to update.
    """
        ...
    def getExistingSummaryCommentId(self) -> Union[int]:
    """
    Helper function to get the ID of an existing code analysis summary comment, if it exists.
    If there isn't one, returns null.
    
    @returns the ID of the existing summary comment.
    """
        ...
    def convertAndClassifyToGitHubComments(self, messages: Array[]=None, maxCodeAnalyzerCommentCount: int=None) -> Union[any]:
    """
    Helper function to determine the number of comments to post as part of the review.
    
    The C3 AI Code Analyzer only posts a maximum of {@link BaseCodeAnalyzer.NotifyPullRequestSpec#maxCodeAnalyzerCommentCount}
    error messages as inline comments and posts the rest of the messages in the review comment.
    This function determines how many of the error messages were already posted
    and returned the number of previous posted messages, the number of new messages (including warnings) and also
    provides the list of comments to post on the PR (ensuring the total comments posted is at a maximum of `x`).
    
    Returns a JSON object with the following shape:
    
    ```json
    {
      "previouslyPostedMsgsCount": int,
      "newCommentCount": int,
      "commentsToPost": [BaseCodeAnalyzer.GitHubComment]
    }
    ```
    
    @param messages
              The processed metric messages (along with their metric code) to convert and classify.
    @param maxCodeAnalyzerCommentCount
              The maximum number of code analyzer comments to post as inline comments.
    @returns Object with the previously posted message count, new comment count and
             the comments to post.
    """
        ...
    
    class TestHelper():
        """
        Type to store helper functions to test functionality for {@link BaseCodeAnalyzer.GitHubGadget}.
        
        @remarks this represents a made instance of BaseCodeAnalyzer.GitHubGadget.TestHelper
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
        def fromJson(cls, json: any) -> Union[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
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
        def fromJsonString(cls, json: str) -> Union[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
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
        def fromXmlString(cls, xml: str) -> Union[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
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
        def replaceType(self, old: Type, new: Type) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def validateObj(self) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def withoutFieldAtPath(self, path: str) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def withoutField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def withoutField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def withoutFields(self, fields: Array[str]) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def defaultField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def defaultField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def unsetField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def unsetField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def removeField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def removeField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def mergeJson(self, json: any) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def sumObj(self, other: Obj, deep: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[BaseCodeAnalyzer.GitHubGadget.TestHelper]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[BaseCodeAnalyzer.GitHubGadget.TestHelper]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[BaseCodeAnalyzer.GitHubGadget.TestHelper]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, BaseCodeAnalyzer.GitHubGadget.TestHelper]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, BaseCodeAnalyzer.GitHubGadget.TestHelper]]:
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
        def toBuilder(self) -> ObjBuilder[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[BaseCodeAnalyzer.GitHubGadget.TestHelper]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def afterMake(self) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[BaseCodeAnalyzer.GitHubGadget.TestHelper]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> BaseCodeAnalyzer.GitHubGadget.TestHelper:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def getGitHubMockCompareResult(cls) -> Union[any]:
        """
        Function to return a mock compare result for testing {@link BaseCodeAnalyzer.GitHubGadget#getModifiedFileDiffs}.
        """
            ...
        @classmethod
        def getExpectedFileDiff1(cls) -> Union[BaseCodeAnalyzer.SourceControlGadget.FileDiff]:
        """
        Function to get the expected file spec for the first file returned by the
        {@link BaseCodeAnalyzer.GitHubGadget#getModifiedFileDiffs} function.
        """
            ...
        @classmethod
        def getExpectedFileDiff2(cls) -> Union[BaseCodeAnalyzer.SourceControlGadget.FileDiff]:
        """
        Function to get the expected file spec for the second file returned by the
        {@link BaseCodeAnalyzer.GitHubGadget#getModifiedFileDiffs} function.
        """
            ...
    
    class Spec(BaseCodeAnalyzer.SourceControlGadget.Spec):
        """
        Spec to create a {@link BaseCodeAnalyzer.GitHubGadget}.
        
        @remarks this represents a made instance of BaseCodeAnalyzer.GitHubGadget.Spec
        """
        
        auth: Optional[str]
        """
        The auth string to create the REST instance for the source control gadget.
        """

        url: Optional[str]
        """
        The API url for the source control host. Example: 'https://api.github.com'.
        """

        commitSha: Optional[str]
        """
        The commit SHA on which code analysis is being performed.
        """

        restApi: Optional[GitHubRestApi]
        """
        The {@link SourceControlRestApi} to use.
        """

        prUrl: Optional[str]
        """
        The PR url associated with the commit SHA on which code analysis is being performed, if any.
        """

        packagesPath: Optional[str]
        """
        The path in source control which leads to the packages which should be processed by this build.
        """

        branch: Optional[str]
        """
        The branch of which the Jarvis build was triggered.
        """

        repositoryName: Optional[str]
        """
        The name of the repository for which the Jarvis build was triggered.
        """

        organizationName: Optional[str]
        """
        The name of the organization to which #repositoryName belongs.
        """

        sourceControlHost: Optional[str]=None
        """
        The source control host. This field is inferred from the #restApi type.
        """

        backupSourceControlTokens: Optional[Array[str]]=None
        """
        A list of backup source control tokens to use if the primary source control token hits
        secondary rate limits.
        """

        orgWithSrcCtrlRepoName: Optional[str]
        """
        The full repository name. Example: `c3-e/c3base`.
        """

        pullRequest: Optional[any]
        """
        The GitHub pull request associated with the #prUrl.
        """
        def __init__(self, auth: Optional[str]=None, url: Optional[str]=None, commitSha: Optional[str]=None, restApi: Optional[GitHubRestApi]=None, prUrl: Optional[str]=None, packagesPath: Optional[str]=None, branch: Optional[str]=None, repositoryName: Optional[str]=None, organizationName: Optional[str]=None, sourceControlHost: Optional[str]=None, backupSourceControlTokens: Optional[Array[str]]=None, orgWithSrcCtrlRepoName: Optional[str]=None, pullRequest: Optional[any]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[BaseCodeAnalyzer.GitHubGadget.Spec]:
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
        def fromJsonString(cls, json: str) -> Union[BaseCodeAnalyzer.GitHubGadget.Spec]:
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
        def fromXmlString(cls, xml: str) -> Union[BaseCodeAnalyzer.GitHubGadget.Spec]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[BaseCodeAnalyzer.GitHubGadget.Spec]:
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
        def replaceType(self, old: Type, new: Type) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalyzer.GitHubGadget.Spec]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalyzer.GitHubGadget.Spec]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def validateObj(self) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def withoutFieldAtPath(self, path: str) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def withoutField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def withoutField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def withoutFields(self, fields: Array[str]) -> BaseCodeAnalyzer.GitHubGadget.Spec:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> BaseCodeAnalyzer.GitHubGadget.Spec:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> BaseCodeAnalyzer.GitHubGadget.Spec:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def defaultField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def defaultField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def unsetField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def unsetField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def removeField(self, field: str) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def removeField(self, field: FieldType) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def mergeJson(self, json: any) -> BaseCodeAnalyzer.GitHubGadget.Spec:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def sumObj(self, other: Obj, deep: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[BaseCodeAnalyzer.GitHubGadget.Spec]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[BaseCodeAnalyzer.GitHubGadget.Spec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[BaseCodeAnalyzer.GitHubGadget.Spec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[BaseCodeAnalyzer.GitHubGadget.Spec]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[BaseCodeAnalyzer.GitHubGadget.Spec]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, BaseCodeAnalyzer.GitHubGadget.Spec]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, BaseCodeAnalyzer.GitHubGadget.Spec]]:
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
        def toBuilder(self) -> ObjBuilder[BaseCodeAnalyzer.GitHubGadget.Spec]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[BaseCodeAnalyzer.GitHubGadget.Spec]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> BaseCodeAnalyzer.GitHubGadget.Spec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> BaseCodeAnalyzer.GitHubGadget.Spec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def afterMake(self) -> BaseCodeAnalyzer.GitHubGadget.Spec:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> BaseCodeAnalyzer.GitHubGadget.Spec:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[BaseCodeAnalyzer.GitHubGadget.Spec]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> BaseCodeAnalyzer.GitHubGadget.Spec:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...

