#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.genAiBase.Genai.Query.Result.InterimStatusHistory import Genai.Query.Result.InterimStatusHistory
from c3.genAiBase.Genai.StructuredQuery.Spec import Genai.StructuredQuery.Spec
from c3.platform.Include import Include
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Meta import Meta
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.WithKey import WithKey
from c3.genAiBase.Genai.UnstructuredQuery.Engine.ModelConfig import Genai.UnstructuredQuery.Engine.ModelConfig
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.Promise import Promise
from c3.genAiBase.Genai.Agent.Tool.Output import Genai.Agent.Tool.Output
from c3.platform.Filter import Filter
from c3.genAiBase.Genai.Agent.Tool.DataRetriever.FormatDataSpec import Genai.Agent.Tool.DataRetriever.FormatDataSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.FetchResult import FetchResult
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Promise import Promise
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.genAiBase.Genai.Agent.Tool.Config.UiOptions import Genai.Agent.Tool.Config.UiOptions
from c3.platform.SetType import SetType
from c3.platform.ObjBuilder import ObjBuilder
from c3.genAiBase.Genai.Prompt import Genai.Prompt
from c3.genAiBase.Genai.Agent.Tool.Util.StringFuzzyMatcher.InitializationSpec import Genai.Agent.Tool.Util.StringFuzzyMatcher.InitializationSpec
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.genAiBase.Genai.Agent.Tool.DataRetriever.RetrieveDataSpec import Genai.Agent.Tool.DataRetriever.RetrieveDataSpec
from c3.platform.MapType import MapType
from c3.platform.Config import Config
from c3.platform.Tuple import Tuple
from c3.platform.Exclude import Exclude
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ScanStats import ScanStats
from c3.genAiBase.Genai.Agent.Tool.Example import Genai.Agent.Tool.Example
from c3.genAiBase.Genai.Agent.Tool.Util.EvalQuery.SpecGenerationModel.Spec import Genai.Agent.Tool.Util.EvalQuery.SpecGenerationModel.Spec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.genAiBase.Genai.StructuredData.DataModelGraph import Genai.StructuredData.DataModelGraph
from c3.platform.ArrayType import ArrayType
from c3.genAiBase.Genai.Agent.Tool.Description import Genai.Agent.Tool.Description
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Stream import Stream
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.genAiBase.Genai.Agent.Tool.Util.TableAnsweringModel.Spec import Genai.Agent.Tool.Util.TableAnsweringModel.Spec
from c3.genAiBase.Genai.Query.Result import Genai.Query.Result
from c3.genAiBase.Genai.Agent.Tool import Genai.Agent.Tool
from c3.platform.Promise import Promise
from c3.genAiBase.Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec import Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec
from c3.genAiBase.Genai.Query.Result.InterimStatusEnumMap import Genai.Query.Result.InterimStatusEnumMap
from c3.platform.MetadataDeps import MetadataDeps
from c3.platform.Obj import Obj
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.genAiBase.Genai.Agent.Tool.DataRetriever.Output import Genai.Agent.Tool.DataRetriever.Output
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ScanSpec import ScanSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Pair import Pair
from c3.platform.SetBuilder import SetBuilder
from c3.platform.File import File
from c3.platform.ExistsSpec import ExistsSpec

# Python definitions for the C3 type Genai.Agent.Tool.EvalQuery


class EvalQuery(Genai.Agent.Tool.StructuredDataQuery[Genai.Agent.Tool.EvalQuery.Config], Genai.Agent.Tool.StructuredDataQuery.Base):
    """
    New eval query tool, that relies on a fine-tuned LLM to generate and execute {@link EvalSpec} instances from an
    input query.
    
    @remarks this represents a made instance of Genai.Agent.Tool.EvalQuery
    """
    
    meta: Optional[Meta]=None
    """
    Various system fields.
    """

    id: Optional[str]
    """
    The unique and required id of this instance.
    """
    def __init__(self, meta: Optional[Meta]=None, id: Optional[str]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[Genai.Agent.Tool.EvalQuery]:
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
    def fromJsonString(cls, json: str) -> Union[Genai.Agent.Tool.EvalQuery]:
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
    def fromXmlString(cls, xml: str) -> Union[Genai.Agent.Tool.EvalQuery]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Genai.Agent.Tool.EvalQuery]:
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
    def replaceType(self, old: Type, new: Type) -> Genai.Agent.Tool.EvalQuery:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Agent.Tool.EvalQuery]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Agent.Tool.EvalQuery]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def validateObj(self) -> Genai.Agent.Tool.EvalQuery:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def withoutFieldAtPath(self, path: str) -> Genai.Agent.Tool.EvalQuery:
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
    def withoutField(self, field: str) -> Genai.Agent.Tool.EvalQuery:
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
    def withoutField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery:
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
    def withoutFields(self, fields: Array[str]) -> Genai.Agent.Tool.EvalQuery:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Genai.Agent.Tool.EvalQuery:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Genai.Agent.Tool.EvalQuery:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Genai.Agent.Tool.EvalQuery:
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
    def defaultField(self, field: str) -> Genai.Agent.Tool.EvalQuery:
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
    def defaultField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery:
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
    def unsetField(self, field: str) -> Genai.Agent.Tool.EvalQuery:
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
    def unsetField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery:
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
    def removeField(self, field: str) -> Genai.Agent.Tool.EvalQuery:
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
    def removeField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Genai.Agent.Tool.EvalQuery:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Genai.Agent.Tool.EvalQuery:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Genai.Agent.Tool.EvalQuery:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Genai.Agent.Tool.EvalQuery:
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
    def mergeJson(self, json: any) -> Genai.Agent.Tool.EvalQuery:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Genai.Agent.Tool.EvalQuery:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Genai.Agent.Tool.EvalQuery:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Genai.Agent.Tool.EvalQuery]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Genai.Agent.Tool.EvalQuery]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Genai.Agent.Tool.EvalQuery]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Genai.Agent.Tool.EvalQuery]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Genai.Agent.Tool.EvalQuery]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Genai.Agent.Tool.EvalQuery]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Genai.Agent.Tool.EvalQuery]]:
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
    def toBuilder(self) -> ObjBuilder[Genai.Agent.Tool.EvalQuery]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Genai.Agent.Tool.EvalQuery]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Genai.Agent.Tool.EvalQuery:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Genai.Agent.Tool.EvalQuery:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def make(cls, s: str) -> Union[Genai.Agent.Tool.EvalQuery]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Genai.Agent.Tool.EvalQuery:
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
    def afterMake(self) -> Genai.Agent.Tool.EvalQuery:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Genai.Agent.Tool.EvalQuery:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Genai.Agent.Tool.EvalQuery]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Genai.Agent.Tool.EvalQuery:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def config(self, secrets: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
    def typeConfig(cls) -> Genai.Agent.Tool.EvalQuery.Config:
    """
    @return type configuration for the given {@link Configurable} type.
    E.g. {@see REST} & {@see RestConfig}
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[Genai.Agent.Tool.EvalQuery]:
    """
    Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param spec
              Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
              of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, filter: Filter) -> FetchResult[Genai.Agent.Tool.EvalQuery]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[Genai.Agent.Tool.EvalQuery]]:
    """
    Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param spec
              Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
    @return Requested obj stream.
    """
        ...
    @classmethod
    def fetchArrowStream(cls, spec: FetchArrowStreamSpec) -> Stream[Arrow]:
    """
    Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
    specified maximum batch size.
    
    @param spec
              Specification of what data to fetch.
    @return Stream of Arrow batches.
    """
        ...
    @classmethod
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[Genai.Agent.Tool.EvalQuery]]]:
    """
    Fetched multiple obj instances in multiple locales based on specification.
    
    @param spec
           Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
           type.
    @return Requested objs where key of map is locale id
    """
        ...
    @classmethod
    def fetchCount(cls, spec: FetchFilterSpec=None) -> int:
    """
    @return The number of entries that match the specification.
    """
        ...
    @classmethod
    def fetchCountEstimated(cls, spec: FetchFilterSpec=None, updateStatistics: bool=None) -> int:
    """
    Gets the estimated count of objs that a fetch on the type with the optional filter will return.
    For non-kv types, The count is obtained from the query explain plan for the fetch.
    For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
    other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
    upper bound for the partition. For more accurate results, perform fillBuckets first.
    
    @param spec
           Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
           explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
           fields.
    @param updateStatistics
           If true, the database statistics for all tables involved in the query will be updated prior to obtaining
           the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
    
    @return The requested estimated count.
    """
        ...
    @classmethod
    def scan(cls, spec: ScanSpec) -> Union[ScanStats]:
    """
    Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
    a callback function for the given batch.
    
    @param spec
              Specification of the scan action.
    @return Statistics of the scan action.
    """
        ...
    @classmethod
    def batchIds(cls, spec: BatchIdsSpec=None) -> Union[Stream[str]]:
    """
    Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
    
    @param spec
           Spec indicating how the operation should work.
    
    IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
                rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
                cause an issue if the results are blindly used to create filters for fetching batches as the last batch
                would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
                other would be specified, depending on whether you are interested in controlling the number of batches
                or batch size.
    
    @return A stream of batch ids based on the input parameters.
    """
        ...
    @overload
    @classmethod
    def exists(cls, spec: ExistsSpec=None) -> bool:
    """
    @return True if there are at least the number of entries matching the filter/count specified in the spec.
    """
        ...
    @overload
    @classmethod
    def exists(cls, filter: Filter) -> bool:
    """
    @return True if there are at least the number of entries matching the filter/count specified in the spec.
    """
        ...
    @classmethod
    def keyFieldType(cls) -> FieldType:
    """
    @return key field type.
    """
        ...
    def keyFieldValue(self) -> Union[str]:
    """
    @return key field value.
    """
        ...
    def singletonMap(self) -> Map[str, WithKey]:
    """
    Build a map of the correct type with a single element which is this instance and key field value as key.
    """
        ...
    def dependencies(self) -> MetadataDeps[Genai.Agent.Tool.EvalQuery]:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> Genai.Agent.Tool.EvalQuery:
        ...
    def remove(self, spec: UpsertSpec=None) -> bool:
        ...
    def removeWithChildren(self) -> bool:
    """
    Remove the metadata instance as well as its associated backward dependencies.
    Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
    """
        ...
    @classmethod
    def removeAll(cls, removeFilter: str=None) -> int:
        ...
    def update(self, srcObj: Genai.Agent.Tool.EvalQuery=None, spec: UpsertSpec=None) -> Union[Genai.Agent.Tool.EvalQuery]:
        ...
    def upsert(self, srcObj: Genai.Agent.Tool.EvalQuery=None, spec: UpsertSpec=None) -> Union[Genai.Agent.Tool.EvalQuery]:
        ...
    @classmethod
    def metadataFolder(cls) -> Union[str]:
    """
    Retrieves folder that holds metadata.
    """
        ...
    @classmethod
    def hasArbitraryFolderHierarchy(cls) -> bool:
    """
    If this Metadata type has arbitrary folder hierarchy.
    """
        ...
    @classmethod
    def isValidMetadataJson(cls, pkg: str, filePath: str) -> bool:
    """
    If metadata path is valid.
    @param pkg
       name of the package
    @param filePath
       path of metadata json file
    """
        ...
    def validateMetadata(self) -> ValidateObjResult:
    """
    Optional member function to enable custom validation logic.
    """
        ...
    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[Genai.Agent.Tool.EvalQuery]:
    """
    Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
    provide deserialization.
    
    fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
    of called-on type, but perhaps not the same type.
    
    E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
    
    @see #toString
    """
        ...
    @classmethod
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[Genai.Agent.Tool.EvalQuery]:
    """
    @return single instance of this Identified type by id.
    """
        ...
    def initialize(self, forceReload: bool=None) -> Union[Any]:
    """
    Initialize the tool if the tool has any 'expensive' state that can be pre-loaded.
    The default implementation does nothing.
    @param forceReload
              If true, all configs and setup will be re-run (instead of reusing already-loaded values)
    @return a dictionary containing all globals initialized
    """
        ...
    def run(self, input: str, inProgressResult: Genai.Query.Result, streamResponse: bool=None) -> Union[Genai.Agent.Tool.Output]:
    """
    Run the tool on the given input, updating the inProgressResult, and returning a tool output.
    @param input
              The input query. Note that this may not be exactly the same as the user's query, as
              it may have been preprocessed by the {@link Genai.Agent} before being passed to the tool.
    @param inProgressResult
              The {@link Genai.Query.Result} being processed.
    @param streamResponse
              If true, the tool should stream its response to the client
    @return The tool output.
    """
        ...
    def descriptionForAgent(self) -> Genai.Agent.Tool.Description:
    """
    Generate representation of a tool to be given to a {@link Genai.Agent}
    """
        ...
    def rationale(self, input: str, toolOutput: Genai.Agent.Tool.Output) -> Union[str]:
    """
    For tools that do not populate {@link Genai.Query.Result#rationale} as part of run, this method returns an
    optional 'rationale' to be shown to the user. The default implementation only accounts for when toolOutput has its
    structuredQuerySpec populated, in which case it is serialized as the rationale.
    
    NOTE: This should only be called on the tool which produced the output.
    
    @param input
              The input query that was passed to the tool.
    @param toolOutput
              The output that the tool produced.
    
    @return The rationale for the tool's original output (toolOutput output)
    """
        ...
    def textAnswer(self, input: str, toolOutput: Genai.Agent.Tool.Output) -> str:
    """
    For tools whose primary {@link Genai.Agent.Tool.Output#output} is not a string (or string serializable) answer, this method
    returns a text answer given the question and tool's own output.
    @param input
              The input query that was passed to the tool.
    @param toolOutput
              The output that the tool produced.
    
    NOTE: The default implementation of `textAnswer` only handles string serializable (including string).
    When given {@link Data}, it outputs the value for EnterpriseSearch.Tool.DefaultTextAnswer.
    
    NOTE: This should only be called on the tool which produced the output.
    """
        ...
    def textAnswerFromData(self, input: str, outputDataStr: str, prompt: str, llm: Genai.UnstructuredQuery.Engine.ModelConfig=None) -> Union[str]:
    """
    Internal function used to generate the 'human-readable' text output when the answer comes from structured data.
    
    @param input
              The input query.
    @param outputDataStr
              The output data as a string which is passed to the LLM as an observation.
    @param prompt
              Prompt string used by llm to generate the answer.
    @param llm
              {@link Genai.UnstructuredQuery.Engine.ModelConfig} optional override of the tool's configured llm
    
    @return The text answer generated by llm.
    """
        ...
    @classmethod
    def ensureId(cls, tool: Genai.Agent.Tool[Any]) -> Genai.Agent.Tool.EvalQuery:
    """
    Helper function to ensure that the tool has its id set. If the input tool does not have an id,
    the default config for the type is used to set the id on the returned instance.
    NOTE: This only works for tools with a logical default instance (defined by their config mixing DefaultInstance)
    """
        ...
    def retrieveData(self, spec: Genai.Agent.Tool.DataRetriever.RetrieveDataSpec) -> Genai.Agent.Tool.DataRetriever.Output:
    """
    Extracts the data that the tool would use to generate a human-readable answer.
    As part of its execution, retrieveData should create and persist {@link Genai.Query.Result.Source.AbstractSourceType}[sources] and
    corresponding {@link Genai.Query.ResultToSourceRelation}[relations] that refer to the retrieved data.
    @param spec
              A spec containing all relevant parameters for retrieving the data.
    @return The data that the tool would use to generate a human-readable answer.
    """
        ...
    def formatData(self, spec: Genai.Agent.Tool.DataRetriever.FormatDataSpec) -> str:
    """
    Formats an output from this tool's #retrieveData method into a string that could be passed to an llm answer.
    @param spec
              The spec for formatting the data.
    @return A string that could be passed to an llm to answer the user's query.
    """
        ...
    def postProcessQueryResult(self, result: Genai.Query.Result) -> Genai.Query.Result:
    """
    Perform any postprocessing on an {@link Genai.Query.Result} necessary for this tool
    """
        ...
    def getWhitelistedDataModel(self) -> Union[any]:
    """
    Retrieve whiteListedDataModel from the {@link Genai.StructuredData.DataModelGraph} or null if none is available
    @return whiteListedDataModel or null
    """
        ...
    def generateSpec(self, input: str, inProgressResult: Genai.Query.Result, interimStatus: str, specGenerationType: Type, pyGlobals: Any, doNotFailOnError: bool=None) -> Tuple:
    """
    Generates the {@link Genai.StructuredQuery.Spec} for the given input query
    Helper function used in EvalQuery and EvalMetricsQuery tool for spec generation
    
    @param input
              The input query for which the {@link Genai.StructuredQuery.Spec} is processed
    @param inProgressResult
              The {@link Genai.Query.Result} created for the input
    @param interimStatus
              The {@link Genai.Query.Result.InterimStatus} for the inProgressResult
    @param specGenerationType
              The {@link Genai.Agent.Tool.Util.EvalQuery.SpecGenerationModel} used for spec generation
    @param pyGlobals
              The globals defined in `EvalQuery` or `EvalMetricsQuery` tool.
              These include "CONFIG", "FUZZY_MATCHER", "TABLE_ANSWERING_MODEL", "DATA_MODEL_GRAPH", "CONFIG_CACHE_KEY", "PROMPT".
    @param doNotFailOnError
              If not true then {@link Genai.Query.Result#failed} will not be set to true on error
    @return tuple containing the generated {@link Genai.StructuredQuery.Spec} and inProgressResult
    """
        ...
    def processSpec(self, structuredQuerySpec: Genai.StructuredQuery.Spec, inProgressResult: Genai.Query.Result, dataModelGraph: Genai.StructuredData.DataModelGraph, nativeDataModelGraph: Any, specProcessorSpec: Any, tableAnsweringModelSpec: Genai.Agent.Tool.Util.TableAnsweringModel.Spec, specProcessorType: Type, doNotUseLlm: bool=None, streamResponse: bool=None, doNotFailOnError: bool=None) -> Genai.Agent.Tool.Output:
    """
    Processes the {@link Genai.StructuredQuery.Spec} for the given input query. This includes
    executing the spec and generating the answer and visualization.
    Helper function used in EvalQuery and EvalMetricsQuery tool for spec execution
    
    @param structuredQuerySpec
              The {@link Genai.StructuredQuery.Spec} to execute
    @param inProgressResult
              The {@link Genai.Query.Result} created for the input query
    @param dataModelGraph
              The {@link Genai.StructuredData.DataModelGraph} used to process the spec
    @param nativeDataModelGraph
              The native data model graph used to process the spec
    @param specProcessorSpec
              The {@link Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec} used to process the spec
    @param tableAnsweringModelSpec
              The {@link Genai.Agent.Tool.Util.TableAnsweringModel.Spec} used in generating the answer
    @param specProcessorType
              The {@link Genai.Agent.Tool.Util.EvalQuery.SpecProcessor} used to process the spec
    @param doNotUseLlm
              Whether Llm should be used in generating a natural language answer to the input query
    @param streamResponse
               Whether the LLM response should be streamed. Is ignored if doNotUseLlm is True.
    @param doNotFailOnError
              If not true then {@link Genai.Query.Result#failed} will not be set to true on error
    @return the {@link Genai.Agent.Tool.Output} containing the answer and visualization to the user query
    """
        ...
    @classmethod
    def statusEnums(cls) -> Genai.Query.Result.InterimStatusEnumMap:
    """
    Returns a map of all interim statuses used during the execution of a tool.
    """
        ...
    def baseRetrieveData(self, spec: Genai.Agent.Tool.DataRetriever.RetrieveDataSpec, updatedStatus: Genai.Query.Result.InterimStatusHistory, specGenerationType: Type, specProcessorType: Type, actionName: str, pyGlobals: Any=None, toolOutput: Genai.Agent.Tool.Output=None, generateSpecReflexionAgent: Any=None, processSpecReflexionAgent: Any=None) -> Genai.Agent.Tool.DataRetriever.Output:
    """
    Common code used by StructuredDataQuery.Base tools to retrieve data.
    Includes generating a spec, executing/processing it, and generating a visualization
    
    @param spec
              Specification for data retrieval.
    @param updatedStatus
              Updated status.
    @param specGenerationType
              {@link Type} for spec generation.
    @param specProcessorType
              {@link Type} for spec processing.
    @param actionName
              Name of the action performed, E.g. EvalMetricsQuery or EvalQuery.
    @param pyGlobals
              Python globals dictionary.
    @param toolOutput
              The output from {@link Genai.Agent.Tool.Util#checkQueryToolStale}.
    @param generateSpecReflexionAgent
              The reflexion agent to use for generating the spec.
    @param processSpecReflexionAgent
              The reflexion agent to use for processing the spec.
    @ return Output from the data retriever.
    """
        ...
    @classmethod
    def llmCitationId(cls, childResult: Genai.Query.Result) -> str:
    """
    Retrieves the Genai.Query.ResultToStructuredDataSourceRelation#id from the {@link Genai.Query.Result}
    @param childResult
              The {@link Genai.Query.Result} to retrieve the citation from
    @return the id cited by llm in the answer
    """
        ...
    
    class DefaultConfig(Singleton, Config):
        """
        Configuration to specify which {@link Genai.Agent.Tool.EvalQuery.Config} should be used by the application.
        
        @remarks this represents a made instance of Genai.Agent.Tool.EvalQuery.DefaultConfig
        """
        
        configOverride: Optional[str]=None

        secretOverride: Optional[str]=None

        issues: Optional[Array[str]]=None
        """
        Captures any issues that occurred while deserializing from filesystem
        """

        evalQueryConfigId: Optional[str]
        """
        The default id of the {@link Genai.Agent.Tool.EvalQuery.Config} to use.
        """
        def __init__(self, configOverride: Optional[str]=None, secretOverride: Optional[str]=None, issues: Optional[Array[str]]=None, evalQueryConfigId: Optional[str]=None) -> None: ...

        @classmethod
        def inst(cls) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        @return the one and only instance to be used when member functions are called on this type.
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
        def fromJson(cls, json: any) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
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
        def fromJsonString(cls, json: str) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
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
        def fromXmlString(cls, xml: str) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
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
        def replaceType(self, old: Type, new: Type) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def validateObj(self) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def withoutFieldAtPath(self, path: str) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def withoutField(self, field: str) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def withoutField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def withoutFields(self, fields: Array[str]) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def defaultField(self, field: str) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def defaultField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def unsetField(self, field: str) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def unsetField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def removeField(self, field: str) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def removeField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def mergeJson(self, json: any) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
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
        def toBuilder(self) -> ObjBuilder[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def afterMake(self) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def isCached(self) -> bool:
        """
        @return whether the cache already contains this instance
        """
            ...
        @classmethod
        def allCached(cls) -> Union[Stream[Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        @return stream of all available Cached instances.
        """
            ...
        @classmethod
        def find(cls, filter: str=None) -> Union[Stream[Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
                if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
                Otherwise no population will be performed.
        """
            ...
        @classmethod
        def findBy(cls, field: str, value: Any) -> Union[Stream[Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
                if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
                Otherwise no population will be performed.
        """
            ...
        def getCached(self) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        @return cached instance.
        """
            ...
        @classmethod
        def forCacheKey(cls, key: str) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        Returns cached instance by key, with secrets removed.
        """
            ...
        def cacheKey(self) -> str:
        """
        @return cache key for this instance.
        """
            ...
        @classmethod
        def produce(cls, key: str) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        Should produce an entry for the cache key. This method should not be called directly.
        """
            ...
        @classmethod
        def produceAll(cls) -> Union[Map[str, Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        Should produces the entire content for the cached data. Will populate the cache with the produced data.
        """
            ...
        def evictFromCache(self) -> None:
        """
        Evicts this instance from cache on all nodes of this application.
        """
            ...
        def evictFromCacheLocalOnly(self) -> None:
        """
        Evicts this instance from cache of the current node.
        """
            ...
        def evictFromCacheLocalOnlyAllApps(self) -> None:
        """
        Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
        Will not trigger any cache invalidation broadcast.
        see {@link Server#evictFromLocalAppsCaches}
        """
            ...
        @classmethod
        def clearCache(cls) -> None:
        """
        Clears the data cache for this type on all nodes of this application.
        """
            ...
        @classmethod
        def clearCacheLocalOnly(cls) -> None:
        """
        Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
        """
            ...
        @classmethod
        def clearCacheLocalOnlyAllApps(cls) -> None:
        """
        Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
        Will not trigger any cache invalidation broadcast.
        see {@link Server#clearLocalAppsCaches}
        """
            ...
        @classmethod
        def cacheSize(cls) -> Union[int]:
        """
        Returns count of cached instances.
        """
            ...
        @classmethod
        def nativeCache(cls) -> Union[Any]:
        """
        Returns instance of the cache for this type.
        """
            ...
        def getConfig(self) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
        configurations `name` field is required.
        
        Note that typical pattern is to use Configurable#config instead of this method.
        """
            ...
        def configValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
        """
        @return cached config value for the provided field path if set or `null` or error otherwise depending on
                `failIfMissing`; note that will not return secret value.
        """
            ...
        def getSecret(self) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
        is required. For Nameable configurations `name` field is required.
        
        Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
        """
            ...
        def secretValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
        """
        @return cached secret value for the provided field path in this Config object or `null` if not set or error
                depending on `failIfMissing`.
        """
            ...
        def decodedValue(self, path: str, failIfMissing: bool=None) -> Union[str]:
        """
        Reads and url decodes the content at the path.
        Path must represent a string value.
        """
            ...
        def isUserOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.USER level.
        """
            ...
        def isAppOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.APP level.
        """
            ...
        def isClusterOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
        """
            ...
        def isEnvOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.ENV level.
        """
            ...
        def isRootOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
        """
            ...
        def isSeed(self) -> bool:
        """
        @return `true` if this configuration has not been set and comes from seed / defaults.
        """
            ...
        @classmethod
        def isSecret(cls, path: str) -> bool:
        """
        @return `true` if provided path is a secret.
        """
            ...
        def configKey(self) -> Union[str]:
        """
         @return config key for this instance. The config key is a unique identifier for an instance of a config type.
         The config key varies based on whether the config is defined with:
            1. {@link Ann.Config#subfolder}
                In this case, the name of the subfolder will be included.
            2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
                In this case, the ID of the {@link User} will be included.
            3. mixes in {@link Named} or {@link Identified}
        In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
        the name of the config subtype will be used.
        
         The config key includes the above three fields delimited by '/':
            {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
         ```
         | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
         |-------------------|---------------------|-------------------|-----------------------------|
         |       no          |         no          |        no         |           MyConfType        |
         |       yes         |         no          |        no         |       myUserId/MyConfType   |
         |       no          |         yes         |        no         |             abc             |
         |       no          |         no          |        yes        |      folder1/MyConfType     |
         |       no          |         yes         |        yes        |          folder1/abc        |
         |       yes         |         yes         |        no         |          myUserId/abc       |
         |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
         |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
         ```
         Note that the config key is a computed value and is not set-able.
         For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
        """
            ...
        def withConfigKey(self, configKey: str) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
        the computed {@link Config#configKey}.
        Note that configs set at USER level will still have user's Id as part of the config key. Config types with
        @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
        ex. confType has @config(minOverride=ConfigOverride.USER)
            config = confType.withConfigKey("abc")
            config.configKey() => "myUserId/abc"
        ex. confType has @config(subfolder="folder1")
            config = confType.withConfigKey("abc")
            config.configKey() => "folder1/abc"
        """
            ...
        def withoutConfigKey(self) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        @return copy without config key.
        """
            ...
        @classmethod
        def forConfigKey(cls, configKey: str) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        @return return cached config instance for provided config key.
        """
            ...
        @classmethod
        def listConfigKeys(cls) -> Union[Stream[str]]:
        """
        @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
        """
            ...
        @classmethod
        def listConfigs(cls, parallel: bool=None, filter: Callable[[str], bool]=None) -> Union[Stream[Genai.Agent.Tool.EvalQuery.DefaultConfig]]:
        """
        @param
        
        @return stream of all available Config instances for this type.
        """
            ...
        def allConfigValueOverrides(self, path: str) -> Union[Map[str, any]]:
        """
        @return all config template values by override.
        """
            ...
        def allConfigOverrides(self) -> Union[Map[str, any]]:
        """
        @return all config template jsons by override.
        """
            ...
        def allSecretValueOverrides(self, path: str) -> Union[Map[str, any]]:
        """
        @return all secret template values by override.
        """
            ...
        def allSecretOverrides(self) -> Union[Map[str, any]]:
        """
        @return all secret templates by override.
        """
            ...
        def setConfigValue(self, path: str, value: Any, override: str=None, embeddedFileName: str=None) -> None:
        """
        Sets configuration field value at provided path in this Config object. Note will not set secret value.
        If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
        @see clearConfigValue
        """
            ...
        @overload
        def setConfigValues(self, from_: Map[str, Any]=None, override: str=None) -> None:
        """
        Sets multiple field values to those specified in the map. The map keys are the paths.
        
        @see setConfigValue
        """
            ...
        @overload
        def setConfigValues(self, from_: Genai.Agent.Tool.EvalQuery.DefaultConfig, override: str=None) -> None:
        """
        Sets multiple field values to the be the same as the passed instance.
        
        @see setConfigValue
        """
            ...
        def setConfigValueTemplate(self, path: str, valueTemplate: str, override: str=None) -> None:
        """
        Sets configuration field value template at provided path in this Config object. Note will not set secret value.
        If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
        @see clearConfigValue
        """
            ...
        def insertConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
        """
        Adds a single value at the specified index in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def setConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
        """
        Sets a single value at the specified index in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def addConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
        """
        Adds a single value to a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def setConfigMapValue(self, pathToMapField: str, key: Any, value: Any, override: str=None) -> None:
        """
        Sets a key-value pair in specified map at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def removeConfigElementAt(self, pathToCollectionField: str, index: int, override: str=None) -> None:
        """
        Removes a single value at the specified index in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def removeConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
        """
        Removes a single value in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def removeConfigMapKey(self, pathToMapField: str, key: Any, override: str=None) -> None:
        """
        Removes a single key in a map at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def setEncodedValue(self, path: str, value: str, override: str) -> None:
        """
        Url encodes the content at the path and returns new config object with the encoded value.
        Path must represent a string value.
        """
            ...
        def setSecretValue(self, path: str, value: Any, override: str=None) -> None:
        """
        Sets secret field value or secrets within value at provided path in this Config object.
        @see clearSecretValue
        """
            ...
        def setSecretValueTemplate(self, path: str, value: str, override: str=None) -> None:
        """
        Sets secret field value template at provided path in this Config object.
        @see clearSecretValue
        """
            ...
        def clearConfigValue(self, path: str, override: str=None) -> None:
        """
        Clears configuration field value at provided path in this Config object at provided override level. Note will not
        clear secret value.
        """
            ...
        def clearSecretValue(self, path: str, override: str=None) -> None:
        """
        Clears secret field value at provided path in this Config object at provided override level.
        """
            ...
        def clearConfigValueAllOverrides(self, path: str) -> None:
        """
        Clears configuration field value at provided path in this Config object at all override levels. Note will not
        clear secret value.
        """
            ...
        def clearSecretValueAllOverrides(self, path: str) -> None:
        """
        Clears secret field value at provided path in this Config object at all override levels.
        """
            ...
        @classmethod
        def rawConfigOrSecretValue(cls, configKey: str, path: str, override: str=None, failIfMissing: bool=None) -> Union[any]:
        """
        @return cached config or secret value for the provided config key, field path and override if set or `null` or error
                otherwise depending on `failIfMissing`
        """
            ...
        @classmethod
        def setConfigOrSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
        """
        Sets config or secret value for the provided config key, field path and override.
        """
            ...
        @classmethod
        def setConfigAndSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
        """
        Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
        setConfigValue and setSecretValue
        """
            ...
        @classmethod
        def setConfigOrSecretValueTemplate(cls, configKey: str, path: str, valueTemplate: str=None, override: str=None) -> None:
        """
        Sets config or secret value template for the provided config key, field path and override.
        """
            ...
        @classmethod
        def hasSubTypes(cls) -> bool:
        """
        @return `true` if this Config type has other sub types.
        """
            ...
        @classmethod
        def hasSecretField(cls) -> bool:
        """
        @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
        """
            ...
        @classmethod
        def isSingleInstance(cls) -> bool:
        """
        @return `true` if this Config type has only one instance.
        """
            ...
        @classmethod
        def isUserOverridable(cls) -> bool:
        """
        @returns `true` if this Config is user override-able.
        """
            ...
        @classmethod
        def dfltOverride(cls, override: str=None) -> str:
        """
        @return default configuration override level
        """
            ...
        @classmethod
        def loadConfigAndSecret(cls, configKey: str) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
         Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
        true and config does not exist.
         Note that this skips caching and directly fetches config from the config store, and secret from vault.
        """
            ...
        def loadConfigOverride(self, override: str) -> Union[any]:
        """
        Loads config override template json if exists or `null`. Will not include secrets.
        Note that this skips caching and directly fetches config from the config store.
        """
            ...
        def loadSecretOverride(self, override: str) -> Union[any]:
        """
        Loads secret override template json if exists or `null`. Will not include non secrets.
        Note that this skips caching and directly fetches secret from the vault.
        """
            ...
        def embeddedFile(self, embeddedFileName: str, override: str=None) -> File:
        """
        @return file for an embedded config value.
        """
            ...
        @classmethod
        def configFolder(cls) -> str:
        """
        @return config folder name
        """
            ...
        @classmethod
        def configSubFolder(cls) -> str:
        """
        @return config sub folder name for this type
        """
            ...
        @classmethod
        def configFileEncodedPath(cls, configKey: str, userOverride: bool=None) -> str:
        """
        @return config file encoded path for a given key and potentially user under the config dir for this type.
        """
            ...
        def configAndSecretFiles(self, override: str) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret files for a given override; note that will always return instance of
                File even if physical file doesn't exist.
        """
            ...
        def configFilePath(self, override: str) -> Union[str]:
        """
        @return the config file path for a config instance at a given override;
        """
            ...
        def secretFilePath(self, override: str) -> Union[str]:
        """
        @return the secret file path for a config instance at a given override;
        """
            ...
        def configAndSecretFilePair(self, override: str, appId: str) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret files for provided override / appId; note that will always return pair
                of Files even if physical file doesn't exist.
        """
            ...
        def allConfigAndSecretFiles(self) -> Union[Map[str, Pair[File, File]]]:
        """
        @return map of pair of config and secret files by override; note that will always return instance of
                File even if physical file doesn't exist.
        """
            ...
        @classmethod
        def configAndSecretDirs(cls, override: str=None) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret template directories for override
        """
            ...
        @classmethod
        def allConfigAndSecretDirs(cls) -> Union[Map[str, Pair[File, File]]]:
        """
        @return map of pair of config and secret template directories by override; note that will always return instance of
                File even if physical folder doesn't exist.
        """
            ...
        @classmethod
        def configAndSecretOverrideBaseDirs(cls, override: str=None) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret Base directories for the given override
        """
            ...
        @classmethod
        def configKeyForFile(cls, file: File, failIfInvalid: bool=None) -> Union[str]:
        """
        @return config key for a given config or secret file. If file is not a valid config or secret then will return
                `null` or fail based on `failIfInvalid`
        """
            ...
        @classmethod
        def configKeyForFileUrl(cls, fileUrl: str) -> Union[str]:
        """
        @return config key for a given config or secret file url. If file is not a valid config or secret then will return
                `null` or fail based on `failIfInvalid`
        """
            ...
        @classmethod
        def configTypeForDir(cls, dir: str, failIdInvalid: bool=None) -> Union[Type]:
        """
        @return Config sub-type for a config directory name.
        """
            ...
        def setConfig(self, override: str=None) -> None:
        """
        Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
        #setSecret or #setSecretValue for that.
        """
            ...
        def setSecret(self, override: str=None) -> None:
        """
        Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
        #setConfigValue or #setConfig for that.
        """
            ...
        def eachOverride(self, action: Callable[[Config, str]]=None) -> None:
        """
        Executes actions on all config override levels (within a valid range) for a particular instance of config.
        """
            ...
        @classmethod
        def eachOverrideOnType(cls, action: Callable[[str]]=None) -> None:
        """
        Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
        """
            ...
        @classmethod
        def minOverride(cls) -> str:
        """
        @return minimum override for config - default is ConfigOverride#APP.
        """
            ...
        @classmethod
        def maxOverride(cls) -> str:
        """
        @return maximum override for config - default is ConfigOverride#ROOT
        """
            ...
        def clearConfigAndSecretOverride(self, override: str) -> None:
        """
        Clears specified configuration override including secrets for this instance.
        
        @param override
               Specifies the {@link ConfigOverride} level, of this config to clear.
        """
            ...
        def clearConfigAndSecretAllOverrides(self) -> None:
        """
        Clears specified configuration including secrets for this instance on all override levels.
        """
            ...
        @classmethod
        def clearAllConfigAndSecretOverrides(cls, override: str, confirm: bool=None) -> None:
        """
        Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
        override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
        {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
        
        @param override
               Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
               will also be cleared.
        @param confirm
               Confirmation from user that they understand and confirm deletion of this configuration.
        """
            ...
        def removeSecrets(self) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        @return this config without any secret values.
        """
            ...
        def removeNonSecrets(self) -> Union[Genai.Agent.Tool.EvalQuery.DefaultConfig]:
        """
        @return this config with only secret values.
        """
            ...
        def validate(self) -> Genai.Agent.Tool.EvalQuery.DefaultConfig:
        """
        Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
        validation and setup.
        """
            ...
        @classmethod
        def rawJson(cls, configKey: str) -> Union[any]:
        """
        @return merged Json of all defined configuration templates for this instance including secrets.
        """
            ...
        @classmethod
        def setJson(cls, configKey: str, json: any, secret: bool=None, override: str=None) -> File:
        """
        @return sets Json template for a specified override.
        """
            ...
        @classmethod
        def setJsonValue(cls, configKey: str, field: str, json: any, override: str=None) -> File:
        """
        @return sets Json template field for a specified override.
        """
            ...
        @classmethod
        def setJsonField(cls, configKey: str, field: str, json: any, secret: bool=None, override: str=None) -> File:
        """
        @return sets Json template field for a specified override.
        """
            ...
        @classmethod
        def templateBindings(cls, configKey: str) -> Union[any]:
        """
        Returns json containing configuration template bindings for a provided config key. Override this method to provide your
        own list of template bindings
        """
            ...
        @classmethod
        def evalTemplate(cls, template: str, extraBindings: Map[str, str]=None) -> str:
        """
        Evaluate a given template by applying the default config bindings.
        Default config bindings are:
        1. owner - owner of the config
        2. region - abbreviated region in which the cluster is
        3. cluster - current cluster id
        4. env - current env id
        5. app - current app id
        7. user - current user
        8. type - type on which this api is called
        For example, "${owner}--${cluster}-${env}-${app}"
        
        @param template
                   Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
        @param extraBindings
                   Any additional binding params not included in the default config bindings
        @return evaluated template
        """
            ...
        @classmethod
        def rawJsonCacheSize(cls) -> Union[int]:
        """
        Returns count of cached raw Json.
        """
            ...
        @classmethod
        def rawJsonNativeCache(cls) -> Union[Any]:
        """
        Returns instance of the cache for this type for raw Json.
        """
            ...
    
    class Config(DefaultInstance, Identified, Config, Genai.Agent.Tool.ConfigBase, Genai.Agent.Tool.DataRetriever.ConfigBase):
        """
        Config for {@link Genai.Agent.Tool.EvalQuery}
        
        @remarks this represents a made instance of Genai.Agent.Tool.EvalQuery.Config
        """
        
        id: Optional[str]
        """
        The unique and required id of this instance.
        """

        configOverride: Optional[str]=None

        secretOverride: Optional[str]=None

        issues: Optional[Array[str]]=None
        """
        Captures any issues that occurred while deserializing from filesystem
        """

        toolName: Optional[str]
        """
        Semantic name for the tool. Used for agent prompts.
        """

        toolDescription: Optional[str]
        """
        Natural language description for the tool. Used for agent prompts.
        """

        formattingMessage: Optional[str]=None
        """
        Natural language message appended prior to llm generation. Helps prompt the agent to correctly format to tool input.
        Ignored if not provided.
        
        e.g. "\n[SYSTEM MESSAGE: {toolName} requires inputing a start date and end date.]"
        """

        examples: Optional[Array[Genai.Agent.Tool.Example]]=None
        """
        Array of {@link Genai.Agent.Tool.Example}s for this tool.
        """

        uiOptions: Optional[Genai.Agent.Tool.Config.UiOptions]=None
        """
        Configuration for how this will be shown as a UI drop-down option if {@link Genai.Agent.Config}
        uiToolOptions includes this tool.
        """

        overrideRuntimeKwargs: Optional[any]=None
        """
         Runtime keywords arguments passed into the tool. Enables overriding of default behavior such
         as default prompts for specific sub tools.
        
         Format of configs for the {@link Genai.Agent.Tool.UnstructuredDataQuery}:
        ```json
         {
            "find_time_information_kwargs": {
                "default_span": dict,
                "default_interval": str,
                "default_interval_thresholds": dict,
                "default_timezone": dict,
                "default_timezone_offset": dict,
                "find_start_time_information_prompt": str,
                "find_end_time_information_prompt": str,
            }
         }
        ```
        """

        descriptionForMultiTool: Optional[str]=None
        """
        Tool description used by {@link Genai.Agent.Tool.MultiSourceSynthesizer}
        """

        retrievedDataDescription: Optional[Array[str]]=None
        """
        Description for data returned by {@link Genai.Agent.Tool.DataRetriever.Output}
        """

        formatDataPrompt: Optional[Genai.Prompt]=None
        """
        Prompt for {@link Genai.Agent.Tool.DataRetriever#formatData}
        """

        doNotInitialize: Optional[bool]=None
        """
        Whether the {@link Genai.Agent.Tool.EvalQuery}'s modules should be initialized.
        """

        dataModelGraph: Optional[Genai.StructuredData.DataModelGraph]
        """
        The data model graph that the tool should use
        """

        specGenerationModelSpec: Optional[Genai.Agent.Tool.Util.EvalQuery.SpecGenerationModel.Spec]
        """
        Spec containing the relevant arguments for the eval spec generation mode.
        """

        tableAnsweringModelSpec: Optional[Genai.Agent.Tool.Util.TableAnsweringModel.Spec]
        """
        Spec to instantiate the {@link Genai.Agent.Tool.Util.TableAnsweringModel}.
        """

        specProcessorSpec: Optional[Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec]=None
        """
        Spec to instantiate the {@link Genai.Agent.Tool.Util.EvalQuery.SpecProcessor}.
        """

        fuzzyMatcherSpec: Optional[Genai.Agent.Tool.Util.StringFuzzyMatcher.InitializationSpec]=None
        """
        Spec to instantiate the {@link Genai.Agent.Tool.Util.StringFuzzyMatcher}.
        If not set on the config, then fuzzy matching will not be applied.
        
        NOTE: the `dataModelGraph` set on the spec will be ignored in favor of the `dataModelGraph` set on this config since
        they must be consistent.
        """
        def __init__(self, id: Optional[str]=None, configOverride: Optional[str]=None, secretOverride: Optional[str]=None, issues: Optional[Array[str]]=None, toolName: Optional[str]=None, toolDescription: Optional[str]=None, formattingMessage: Optional[str]=None, examples: Optional[Array[Genai.Agent.Tool.Example]]=None, uiOptions: Optional[Genai.Agent.Tool.Config.UiOptions]=None, overrideRuntimeKwargs: Optional[any]=None, descriptionForMultiTool: Optional[str]=None, retrievedDataDescription: Optional[Array[str]]=None, formatDataPrompt: Optional[Genai.Prompt]=None, doNotInitialize: Optional[bool]=None, dataModelGraph: Optional[Genai.StructuredData.DataModelGraph]=None, specGenerationModelSpec: Optional[Genai.Agent.Tool.Util.EvalQuery.SpecGenerationModel.Spec]=None, tableAnsweringModelSpec: Optional[Genai.Agent.Tool.Util.TableAnsweringModel.Spec]=None, specProcessorSpec: Optional[Genai.Agent.Tool.Util.EvalQuery.SpecProcessor.Spec]=None, fuzzyMatcherSpec: Optional[Genai.Agent.Tool.Util.StringFuzzyMatcher.InitializationSpec]=None) -> None: ...

        @classmethod
        def inst(cls) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        @return the default instance to be used when member functions are called on this type. E.g.
                FileSystem.inst() should return a default file system. It is up to implementation to decide if default
                instance is a singleton or not.
        """
            ...
        def toString(self) -> Union[str]:
        """
        Build the canonical string representation of this instance. This must be implemented to provide serialization.
        
        If the object has no content, and fromString would properly reproduce it from a null value, toString may return
        null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
        
        @see #fromString
        """
            ...
        @classmethod
        def fromString(cls, s: str) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
        Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
        provide deserialization.
        
        fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
        of called-on type, but perhaps not the same type.
        
        E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
        
        @see #toString
        """
            ...
        @overload
        @classmethod
        def make(cls, s: str) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def fromJson(cls, json: any) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
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
        def fromJsonString(cls, json: str) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
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
        def fromXmlString(cls, xml: str) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
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
        def replaceType(self, old: Type, new: Type) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Agent.Tool.EvalQuery.Config]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Agent.Tool.EvalQuery.Config]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def validateObj(self) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def withoutFieldAtPath(self, path: str) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def withoutField(self, field: str) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def withoutField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def withoutFields(self, fields: Array[str]) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def defaultField(self, field: str) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def defaultField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def unsetField(self, field: str) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def unsetField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def removeField(self, field: str) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def removeField(self, field: FieldType) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def mergeJson(self, json: any) -> Genai.Agent.Tool.EvalQuery.Config:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Genai.Agent.Tool.EvalQuery.Config]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Genai.Agent.Tool.EvalQuery.Config]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Genai.Agent.Tool.EvalQuery.Config]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Genai.Agent.Tool.EvalQuery.Config]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Genai.Agent.Tool.EvalQuery.Config]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Genai.Agent.Tool.EvalQuery.Config]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Genai.Agent.Tool.EvalQuery.Config]]:
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
        def toBuilder(self) -> ObjBuilder[Genai.Agent.Tool.EvalQuery.Config]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Genai.Agent.Tool.EvalQuery.Config]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def afterMake(self) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Genai.Agent.Tool.EvalQuery.Config:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Genai.Agent.Tool.EvalQuery.Config]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def keyFieldType(cls) -> FieldType:
        """
        @return key field type.
        """
            ...
        def keyFieldValue(self) -> Union[str]:
        """
        @return key field value.
        """
            ...
        def singletonMap(self) -> Map[str, WithKey]:
        """
        Build a map of the correct type with a single element which is this instance and key field value as key.
        """
            ...
        @classmethod
        def forId(cls, id: str, failIfMissing: bool=None) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
        @return single instance of this Identified type by id.
        """
            ...
        def isCached(self) -> bool:
        """
        @return whether the cache already contains this instance
        """
            ...
        @classmethod
        def allCached(cls) -> Union[Stream[Genai.Agent.Tool.EvalQuery.Config]]:
        """
        @return stream of all available Cached instances.
        """
            ...
        @classmethod
        def find(cls, filter: str=None) -> Union[Stream[Genai.Agent.Tool.EvalQuery.Config]]:
        """
        @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
                if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
                Otherwise no population will be performed.
        """
            ...
        @classmethod
        def findBy(cls, field: str, value: Any) -> Union[Stream[Genai.Agent.Tool.EvalQuery.Config]]:
        """
        @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
                if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
                Otherwise no population will be performed.
        """
            ...
        def getCached(self) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
        @return cached instance.
        """
            ...
        @classmethod
        def forCacheKey(cls, key: str) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
        Returns cached instance by key, with secrets removed.
        """
            ...
        def cacheKey(self) -> str:
        """
        @return cache key for this instance.
        """
            ...
        @classmethod
        def produce(cls, key: str) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
        Should produce an entry for the cache key. This method should not be called directly.
        """
            ...
        @classmethod
        def produceAll(cls) -> Union[Map[str, Genai.Agent.Tool.EvalQuery.Config]]:
        """
        Should produces the entire content for the cached data. Will populate the cache with the produced data.
        """
            ...
        def evictFromCache(self) -> None:
        """
        Evicts this instance from cache on all nodes of this application.
        """
            ...
        def evictFromCacheLocalOnly(self) -> None:
        """
        Evicts this instance from cache of the current node.
        """
            ...
        def evictFromCacheLocalOnlyAllApps(self) -> None:
        """
        Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
        Will not trigger any cache invalidation broadcast.
        see {@link Server#evictFromLocalAppsCaches}
        """
            ...
        @classmethod
        def clearCache(cls) -> None:
        """
        Clears the data cache for this type on all nodes of this application.
        """
            ...
        @classmethod
        def clearCacheLocalOnly(cls) -> None:
        """
        Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
        """
            ...
        @classmethod
        def clearCacheLocalOnlyAllApps(cls) -> None:
        """
        Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
        Will not trigger any cache invalidation broadcast.
        see {@link Server#clearLocalAppsCaches}
        """
            ...
        @classmethod
        def cacheSize(cls) -> Union[int]:
        """
        Returns count of cached instances.
        """
            ...
        @classmethod
        def nativeCache(cls) -> Union[Any]:
        """
        Returns instance of the cache for this type.
        """
            ...
        def getConfig(self) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
        configurations `name` field is required.
        
        Note that typical pattern is to use Configurable#config instead of this method.
        """
            ...
        def configValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
        """
        @return cached config value for the provided field path if set or `null` or error otherwise depending on
                `failIfMissing`; note that will not return secret value.
        """
            ...
        def getSecret(self) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
        is required. For Nameable configurations `name` field is required.
        
        Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
        """
            ...
        def secretValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
        """
        @return cached secret value for the provided field path in this Config object or `null` if not set or error
                depending on `failIfMissing`.
        """
            ...
        def decodedValue(self, path: str, failIfMissing: bool=None) -> Union[str]:
        """
        Reads and url decodes the content at the path.
        Path must represent a string value.
        """
            ...
        def isUserOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.USER level.
        """
            ...
        def isAppOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.APP level.
        """
            ...
        def isClusterOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
        """
            ...
        def isEnvOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.ENV level.
        """
            ...
        def isRootOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
        """
            ...
        def isSeed(self) -> bool:
        """
        @return `true` if this configuration has not been set and comes from seed / defaults.
        """
            ...
        @classmethod
        def isSecret(cls, path: str) -> bool:
        """
        @return `true` if provided path is a secret.
        """
            ...
        def configKey(self) -> Union[str]:
        """
         @return config key for this instance. The config key is a unique identifier for an instance of a config type.
         The config key varies based on whether the config is defined with:
            1. {@link Ann.Config#subfolder}
                In this case, the name of the subfolder will be included.
            2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
                In this case, the ID of the {@link User} will be included.
            3. mixes in {@link Named} or {@link Identified}
        In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
        the name of the config subtype will be used.
        
         The config key includes the above three fields delimited by '/':
            {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
         ```
         | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
         |-------------------|---------------------|-------------------|-----------------------------|
         |       no          |         no          |        no         |           MyConfType        |
         |       yes         |         no          |        no         |       myUserId/MyConfType   |
         |       no          |         yes         |        no         |             abc             |
         |       no          |         no          |        yes        |      folder1/MyConfType     |
         |       no          |         yes         |        yes        |          folder1/abc        |
         |       yes         |         yes         |        no         |          myUserId/abc       |
         |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
         |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
         ```
         Note that the config key is a computed value and is not set-able.
         For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
        """
            ...
        def withConfigKey(self, configKey: str) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
        the computed {@link Config#configKey}.
        Note that configs set at USER level will still have user's Id as part of the config key. Config types with
        @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
        ex. confType has @config(minOverride=ConfigOverride.USER)
            config = confType.withConfigKey("abc")
            config.configKey() => "myUserId/abc"
        ex. confType has @config(subfolder="folder1")
            config = confType.withConfigKey("abc")
            config.configKey() => "folder1/abc"
        """
            ...
        def withoutConfigKey(self) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        @return copy without config key.
        """
            ...
        @classmethod
        def forConfigKey(cls, configKey: str) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
        @return return cached config instance for provided config key.
        """
            ...
        @classmethod
        def listConfigKeys(cls) -> Union[Stream[str]]:
        """
        @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
        """
            ...
        @classmethod
        def listConfigs(cls, parallel: bool=None, filter: Callable[[str], bool]=None) -> Union[Stream[Genai.Agent.Tool.EvalQuery.Config]]:
        """
        @param
        
        @return stream of all available Config instances for this type.
        """
            ...
        def allConfigValueOverrides(self, path: str) -> Union[Map[str, any]]:
        """
        @return all config template values by override.
        """
            ...
        def allConfigOverrides(self) -> Union[Map[str, any]]:
        """
        @return all config template jsons by override.
        """
            ...
        def allSecretValueOverrides(self, path: str) -> Union[Map[str, any]]:
        """
        @return all secret template values by override.
        """
            ...
        def allSecretOverrides(self) -> Union[Map[str, any]]:
        """
        @return all secret templates by override.
        """
            ...
        def setConfigValue(self, path: str, value: Any, override: str=None, embeddedFileName: str=None) -> None:
        """
        Sets configuration field value at provided path in this Config object. Note will not set secret value.
        If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
        @see clearConfigValue
        """
            ...
        @overload
        def setConfigValues(self, from_: Map[str, Any]=None, override: str=None) -> None:
        """
        Sets multiple field values to those specified in the map. The map keys are the paths.
        
        @see setConfigValue
        """
            ...
        @overload
        def setConfigValues(self, from_: Genai.Agent.Tool.EvalQuery.Config, override: str=None) -> None:
        """
        Sets multiple field values to the be the same as the passed instance.
        
        @see setConfigValue
        """
            ...
        def setConfigValueTemplate(self, path: str, valueTemplate: str, override: str=None) -> None:
        """
        Sets configuration field value template at provided path in this Config object. Note will not set secret value.
        If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
        @see clearConfigValue
        """
            ...
        def insertConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
        """
        Adds a single value at the specified index in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def setConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
        """
        Sets a single value at the specified index in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def addConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
        """
        Adds a single value to a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def setConfigMapValue(self, pathToMapField: str, key: Any, value: Any, override: str=None) -> None:
        """
        Sets a key-value pair in specified map at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def removeConfigElementAt(self, pathToCollectionField: str, index: int, override: str=None) -> None:
        """
        Removes a single value at the specified index in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def removeConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
        """
        Removes a single value in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def removeConfigMapKey(self, pathToMapField: str, key: Any, override: str=None) -> None:
        """
        Removes a single key in a map at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def setEncodedValue(self, path: str, value: str, override: str) -> None:
        """
        Url encodes the content at the path and returns new config object with the encoded value.
        Path must represent a string value.
        """
            ...
        def setSecretValue(self, path: str, value: Any, override: str=None) -> None:
        """
        Sets secret field value or secrets within value at provided path in this Config object.
        @see clearSecretValue
        """
            ...
        def setSecretValueTemplate(self, path: str, value: str, override: str=None) -> None:
        """
        Sets secret field value template at provided path in this Config object.
        @see clearSecretValue
        """
            ...
        def clearConfigValue(self, path: str, override: str=None) -> None:
        """
        Clears configuration field value at provided path in this Config object at provided override level. Note will not
        clear secret value.
        """
            ...
        def clearSecretValue(self, path: str, override: str=None) -> None:
        """
        Clears secret field value at provided path in this Config object at provided override level.
        """
            ...
        def clearConfigValueAllOverrides(self, path: str) -> None:
        """
        Clears configuration field value at provided path in this Config object at all override levels. Note will not
        clear secret value.
        """
            ...
        def clearSecretValueAllOverrides(self, path: str) -> None:
        """
        Clears secret field value at provided path in this Config object at all override levels.
        """
            ...
        @classmethod
        def rawConfigOrSecretValue(cls, configKey: str, path: str, override: str=None, failIfMissing: bool=None) -> Union[any]:
        """
        @return cached config or secret value for the provided config key, field path and override if set or `null` or error
                otherwise depending on `failIfMissing`
        """
            ...
        @classmethod
        def setConfigOrSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
        """
        Sets config or secret value for the provided config key, field path and override.
        """
            ...
        @classmethod
        def setConfigAndSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
        """
        Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
        setConfigValue and setSecretValue
        """
            ...
        @classmethod
        def setConfigOrSecretValueTemplate(cls, configKey: str, path: str, valueTemplate: str=None, override: str=None) -> None:
        """
        Sets config or secret value template for the provided config key, field path and override.
        """
            ...
        @classmethod
        def hasSubTypes(cls) -> bool:
        """
        @return `true` if this Config type has other sub types.
        """
            ...
        @classmethod
        def hasSecretField(cls) -> bool:
        """
        @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
        """
            ...
        @classmethod
        def isSingleInstance(cls) -> bool:
        """
        @return `true` if this Config type has only one instance.
        """
            ...
        @classmethod
        def isUserOverridable(cls) -> bool:
        """
        @returns `true` if this Config is user override-able.
        """
            ...
        @classmethod
        def dfltOverride(cls, override: str=None) -> str:
        """
        @return default configuration override level
        """
            ...
        @classmethod
        def loadConfigAndSecret(cls, configKey: str) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
         Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
        true and config does not exist.
         Note that this skips caching and directly fetches config from the config store, and secret from vault.
        """
            ...
        def loadConfigOverride(self, override: str) -> Union[any]:
        """
        Loads config override template json if exists or `null`. Will not include secrets.
        Note that this skips caching and directly fetches config from the config store.
        """
            ...
        def loadSecretOverride(self, override: str) -> Union[any]:
        """
        Loads secret override template json if exists or `null`. Will not include non secrets.
        Note that this skips caching and directly fetches secret from the vault.
        """
            ...
        def embeddedFile(self, embeddedFileName: str, override: str=None) -> File:
        """
        @return file for an embedded config value.
        """
            ...
        @classmethod
        def configFolder(cls) -> str:
        """
        @return config folder name
        """
            ...
        @classmethod
        def configSubFolder(cls) -> str:
        """
        @return config sub folder name for this type
        """
            ...
        @classmethod
        def configFileEncodedPath(cls, configKey: str, userOverride: bool=None) -> str:
        """
        @return config file encoded path for a given key and potentially user under the config dir for this type.
        """
            ...
        def configAndSecretFiles(self, override: str) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret files for a given override; note that will always return instance of
                File even if physical file doesn't exist.
        """
            ...
        def configFilePath(self, override: str) -> Union[str]:
        """
        @return the config file path for a config instance at a given override;
        """
            ...
        def secretFilePath(self, override: str) -> Union[str]:
        """
        @return the secret file path for a config instance at a given override;
        """
            ...
        def configAndSecretFilePair(self, override: str, appId: str) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret files for provided override / appId; note that will always return pair
                of Files even if physical file doesn't exist.
        """
            ...
        def allConfigAndSecretFiles(self) -> Union[Map[str, Pair[File, File]]]:
        """
        @return map of pair of config and secret files by override; note that will always return instance of
                File even if physical file doesn't exist.
        """
            ...
        @classmethod
        def configAndSecretDirs(cls, override: str=None) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret template directories for override
        """
            ...
        @classmethod
        def allConfigAndSecretDirs(cls) -> Union[Map[str, Pair[File, File]]]:
        """
        @return map of pair of config and secret template directories by override; note that will always return instance of
                File even if physical folder doesn't exist.
        """
            ...
        @classmethod
        def configAndSecretOverrideBaseDirs(cls, override: str=None) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret Base directories for the given override
        """
            ...
        @classmethod
        def configKeyForFile(cls, file: File, failIfInvalid: bool=None) -> Union[str]:
        """
        @return config key for a given config or secret file. If file is not a valid config or secret then will return
                `null` or fail based on `failIfInvalid`
        """
            ...
        @classmethod
        def configKeyForFileUrl(cls, fileUrl: str) -> Union[str]:
        """
        @return config key for a given config or secret file url. If file is not a valid config or secret then will return
                `null` or fail based on `failIfInvalid`
        """
            ...
        @classmethod
        def configTypeForDir(cls, dir: str, failIdInvalid: bool=None) -> Union[Type]:
        """
        @return Config sub-type for a config directory name.
        """
            ...
        def setConfig(self, override: str=None) -> None:
        """
        Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
        #setSecret or #setSecretValue for that.
        """
            ...
        def setSecret(self, override: str=None) -> None:
        """
        Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
        #setConfigValue or #setConfig for that.
        """
            ...
        def eachOverride(self, action: Callable[[Config, str]]=None) -> None:
        """
        Executes actions on all config override levels (within a valid range) for a particular instance of config.
        """
            ...
        @classmethod
        def eachOverrideOnType(cls, action: Callable[[str]]=None) -> None:
        """
        Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
        """
            ...
        @classmethod
        def minOverride(cls) -> str:
        """
        @return minimum override for config - default is ConfigOverride#APP.
        """
            ...
        @classmethod
        def maxOverride(cls) -> str:
        """
        @return maximum override for config - default is ConfigOverride#ROOT
        """
            ...
        def clearConfigAndSecretOverride(self, override: str) -> None:
        """
        Clears specified configuration override including secrets for this instance.
        
        @param override
               Specifies the {@link ConfigOverride} level, of this config to clear.
        """
            ...
        def clearConfigAndSecretAllOverrides(self) -> None:
        """
        Clears specified configuration including secrets for this instance on all override levels.
        """
            ...
        @classmethod
        def clearAllConfigAndSecretOverrides(cls, override: str, confirm: bool=None) -> None:
        """
        Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
        override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
        {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
        
        @param override
               Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
               will also be cleared.
        @param confirm
               Confirmation from user that they understand and confirm deletion of this configuration.
        """
            ...
        def removeSecrets(self) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
        @return this config without any secret values.
        """
            ...
        def removeNonSecrets(self) -> Union[Genai.Agent.Tool.EvalQuery.Config]:
        """
        @return this config with only secret values.
        """
            ...
        def validate(self) -> Genai.Agent.Tool.EvalQuery.Config:
        """
        Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
        validation and setup.
        """
            ...
        @classmethod
        def rawJson(cls, configKey: str) -> Union[any]:
        """
        @return merged Json of all defined configuration templates for this instance including secrets.
        """
            ...
        @classmethod
        def setJson(cls, configKey: str, json: any, secret: bool=None, override: str=None) -> File:
        """
        @return sets Json template for a specified override.
        """
            ...
        @classmethod
        def setJsonValue(cls, configKey: str, field: str, json: any, override: str=None) -> File:
        """
        @return sets Json template field for a specified override.
        """
            ...
        @classmethod
        def setJsonField(cls, configKey: str, field: str, json: any, secret: bool=None, override: str=None) -> File:
        """
        @return sets Json template field for a specified override.
        """
            ...
        @classmethod
        def templateBindings(cls, configKey: str) -> Union[any]:
        """
        Returns json containing configuration template bindings for a provided config key. Override this method to provide your
        own list of template bindings
        """
            ...
        @classmethod
        def evalTemplate(cls, template: str, extraBindings: Map[str, str]=None) -> str:
        """
        Evaluate a given template by applying the default config bindings.
        Default config bindings are:
        1. owner - owner of the config
        2. region - abbreviated region in which the cluster is
        3. cluster - current cluster id
        4. env - current env id
        5. app - current app id
        7. user - current user
        8. type - type on which this api is called
        For example, "${owner}--${cluster}-${env}-${app}"
        
        @param template
                   Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
        @param extraBindings
                   Any additional binding params not included in the default config bindings
        @return evaluated template
        """
            ...
        @classmethod
        def rawJsonCacheSize(cls) -> Union[int]:
        """
        Returns count of cached raw Json.
        """
            ...
        @classmethod
        def rawJsonNativeCache(cls) -> Union[Any]:
        """
        Returns instance of the cache for this type for raw Json.
        """
            ...
        def updateDataModelGraph(self, whiteListedDataModel: any=None) -> Genai.StructuredData.DataModelGraph:
        """
        In-place modification of this config's #dataModelGraph.
        @param whiteListedDataModel
                  The data model to update the graph with.
        @return The updated data model graph.
        """
            ...

