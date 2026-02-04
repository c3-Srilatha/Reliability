#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.FetchSpec import FetchSpec
from c3.platform.SetBuilder import SetBuilder
from c3.reliabilityMl.ReliabilityMlDatasetPreparationJob import ReliabilityMlDatasetPreparationJob
from c3.platform.FetchResult import FetchResult
from c3.reliabilityMl.ReliabilityMlTargetPreparationSpec import ReliabilityMlTargetPreparationSpec
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.reliabilityDataModel.ReliabilityAsset import ReliabilityAsset
from c3.platform.MapReduceOptions import MapReduceOptions
from c3.reliabilityMl.ReliabilityMlDatasetPreparationSpec import ReliabilityMlDatasetPreparationSpec
from c3.reliabilityDataModel.ReliabilityAssetSensorRelation import ReliabilityAssetSensorRelation
from c3.reliabilityMl.ReliabilityMlMaskPreparationSpec import ReliabilityMlMaskPreparationSpec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.reliabilityDataModel.FetchResultWithTotalCount import FetchResultWithTotalCount
from c3.reliabilityMl.ReliabilityMlTrainValSplitSpec import ReliabilityMlTrainValSplitSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FieldType import FieldType
from c3.reliabilityMl.ReliabilityMl.Project import ReliabilityMl.Project
from c3.platform.Promise import Promise
from c3.platform.StrPair import StrPair
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Feature.Set import Feature.Set
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.reliabilityMl.ReliabilityMlDatasetPreparationRun import ReliabilityMlDatasetPreparationRun
from c3.platform.FieldValue import FieldValue
from c3.reliabilityMl.AlgorithmicallyComputedTrainingMaskTechnique import AlgorithmicallyComputedTrainingMaskTechnique
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.MapType import MapType
from c3.reliabilityMl.ReliabilityMlFeaturePreparationSpec import ReliabilityMlFeaturePreparationSpec
from c3.platform.Exclude import Exclude
from c3.platform.TimeRange import TimeRange
from c3.platform.Feature import Feature

# Python definitions for the C3 type ReliabilityMlDatasetPreparationHelper


class ReliabilityMlDatasetPreparationHelper():
    """
    Helper type to prepare training and inference datasets for a {@link ReliabilityAsset}.
    If the dataset preparation fails, then the user should not proceed to downstream ML
    tasks such as model training. This Type is mixed-in by {@link ReliabilityAsset}.
    
    @remarks this represents a made instance of ReliabilityMlDatasetPreparationHelper
    """
    
    datasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None
    """
    All {@link ReliabilityMlDatasetPreparationRun}s created as a result of
    calling {@link prepareMlDatasets} or {@link prepareMlDatasetsBatch}.
    They are sorted in descending order of created date, i.e. the latest
    {@link ReliabilityMlDatasetPreparationRun} will be the first entry in
    this array.
    """

    latestDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None
    """
    The latest {@link ReliabilityMlDatasetPreparationRun}. Also, the first
    element in the {@link #datasetPreparationRuns} array.
    """

    completeDatasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None
    """
    The {@link #datasetPreparationRuns} that have status `COMPLETE`.
    """

    latestCompleteDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None
    """
    The latest run in {@link #completeDatasetPreparationRuns}.
    """

    completeRiskDatasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None
    """
    The {@link #datasetPreparationRuns} that have status `COMPLETE` project.id 'reliabilityRisk'.
    """

    latestCompleteRiskDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None
    """
    The latest run in {@link #latestCompleteRiskDatasetPreparationRun}.
    """

    countOfCompleteDatasetPreparationRuns: Optional[int]=None
    """
    The count of {@link #completeDatasetPreparationRuns}.
    """

    datasetPreparationStatus: Optional[str]=None
    """
    Represents the current status of data preparation based on the {@link #datasetPreparationRuns}.
    If there is a completed run, the status is COMPLETE. Otherwise, it is the status of the latest run.
    """
    def __init__(self, datasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None, latestDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None, completeDatasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None, latestCompleteDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None, completeRiskDatasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None, latestCompleteRiskDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None, countOfCompleteDatasetPreparationRuns: Optional[int]=None, datasetPreparationStatus: Optional[str]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[ReliabilityMlDatasetPreparationHelper]:
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
    def fromJsonString(cls, json: str) -> Union[ReliabilityMlDatasetPreparationHelper]:
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
    def fromXmlString(cls, xml: str) -> Union[ReliabilityMlDatasetPreparationHelper]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[ReliabilityMlDatasetPreparationHelper]:
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
    def replaceType(self, old: Type, new: Type) -> ReliabilityMlDatasetPreparationHelper:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ReliabilityMlDatasetPreparationHelper]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ReliabilityMlDatasetPreparationHelper]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def validateObj(self) -> ReliabilityMlDatasetPreparationHelper:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def withoutFieldAtPath(self, path: str) -> ReliabilityMlDatasetPreparationHelper:
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
    def withoutField(self, field: str) -> ReliabilityMlDatasetPreparationHelper:
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
    def withoutField(self, field: FieldType) -> ReliabilityMlDatasetPreparationHelper:
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
    def withoutFields(self, fields: Array[str]) -> ReliabilityMlDatasetPreparationHelper:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> ReliabilityMlDatasetPreparationHelper:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> ReliabilityMlDatasetPreparationHelper:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def defaultField(self, field: str) -> ReliabilityMlDatasetPreparationHelper:
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
    def defaultField(self, field: FieldType) -> ReliabilityMlDatasetPreparationHelper:
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
    def unsetField(self, field: str) -> ReliabilityMlDatasetPreparationHelper:
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
    def unsetField(self, field: FieldType) -> ReliabilityMlDatasetPreparationHelper:
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
    def removeField(self, field: str) -> ReliabilityMlDatasetPreparationHelper:
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
    def removeField(self, field: FieldType) -> ReliabilityMlDatasetPreparationHelper:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> ReliabilityMlDatasetPreparationHelper:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> ReliabilityMlDatasetPreparationHelper:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> ReliabilityMlDatasetPreparationHelper:
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
    def mergeJson(self, json: any) -> ReliabilityMlDatasetPreparationHelper:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def sumObj(self, other: Obj, deep: bool=None) -> ReliabilityMlDatasetPreparationHelper:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[ReliabilityMlDatasetPreparationHelper]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[ReliabilityMlDatasetPreparationHelper]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[ReliabilityMlDatasetPreparationHelper]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[ReliabilityMlDatasetPreparationHelper]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[ReliabilityMlDatasetPreparationHelper]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, ReliabilityMlDatasetPreparationHelper]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, ReliabilityMlDatasetPreparationHelper]]:
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
    def toBuilder(self) -> ObjBuilder[ReliabilityMlDatasetPreparationHelper]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[ReliabilityMlDatasetPreparationHelper]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> ReliabilityMlDatasetPreparationHelper:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> ReliabilityMlDatasetPreparationHelper:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> ReliabilityMlDatasetPreparationHelper:
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
    def afterMake(self) -> ReliabilityMlDatasetPreparationHelper:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> ReliabilityMlDatasetPreparationHelper:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[ReliabilityMlDatasetPreparationHelper]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> ReliabilityMlDatasetPreparationHelper:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def assignToProject(self, project: ReliabilityMl.Project=None) -> None:
    """
    Function to mark the current entity as a member of the given project, if needed for bookkeeping.
    By default, this function does nothing, but should be overridden by a type that extends this one.
    For an example of usage, see the {@link ReliabilityAsset} remix in the `reliability` package.
    
    @param project
           The {@link ReliabilityMl.Project} to assign this entity to.
    """
        ...
    def getMlStartEnd(self, start: datetime=None, end: datetime=None) -> Union[StrPair]:
    """
    Used internally during the preparation run to determine the start and end dates
    for the dataset preparation. If the {@link ReliabilityMlDatasetPreparationSpec#materializeStart}
    and {@link ReliabilityMlDatasetPreparationSpec#materializeEnd} are provided, then it defaults to this dates,
    otherwise, it defaults to the start and end of the from the earliest and latest data points from
    the {@link PointPhysicalMeasurementSeries} associated with the {@link ReliabilityAsset}.
    
    @param start
           The start datetime for the dataset preparation.
    @param end
           The end datetime for the dataset preparation.
    @return a {@link StrPair} containing the start and end dates as strings.
    """
        ...
    @classmethod
    def getFlatliningPercentage(cls, flatliningTimeSteps: int=None, df: Any=None) -> Union[Any]:
    """
    Given flatliningTimeSteps and a pandas DataFrame, returns the percentage of data that is flatlining.
    If flatliningTimeSteps is less than 0, function will throw an error.
    Returns float or Series depending on shape of the DataFrame
    
    @param flatliningTimeSteps
           The number of time steps to check for flatlining behavior.
    @param df
           The pandas DataFrame to analyze for flatlining.
    @return a float or Series representing the percentage of data that is flatlining.
    """
        ...
    def createSensorFeatures(self, excludeSensors: Array[str]=None, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR', method: str='BEST', additionalRasrs: Array[ReliabilityAssetSensorRelation]=None) -> Union[Array[Feature]]:
    """
    Create {@link Feature}s for all the {@link Sensor}s associated with this
    {@link ReliabilityAsset} through {@link ReliabilityAssetSensorRelation}s.
    If you want to create featues for {@link ReliabilityAssetSensorRelation}s
    that are not associated with this {@link ReliabilityAsset}, then you can
    provide them in the `additionalRasrs` argument.
    Refer to type documentation on {@link ReliabilityMlFeatureCreationMethod}
    for more information on the different methods to create {@link Feature}s for
    the {@link Sensor}s.
    Exact and full documentation on the {@link Feature} creation process may be
    found in {@link ReliabilityAssetSensorRelation#createSensorFeature}, which this
    function simply calls in a loop for all {@link ReliabilityAssetSensorRelation}s.
    """
        ...
    @classmethod
    def createTimeRangeMaskExpression(cls, timeRanges: Array[TimeRange]=None) -> Union[str]:
    """
    Create a {@link Metric} expression which evalutes to 1 for all intervals whose start lies within
    one of the given {@link TimeRange} objects, and 0 elsewhere.
    
    @param timeRanges
           An array of {@link TimeRange} objects to create the mask expression for.
    @return a string representing the metric expression for the time range mask.
    """
        ...
    def prepareInitialFeatureSet(self, spec: ReliabilityMlFeaturePreparationSpec, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR') -> Union[Feature.Set]:
    """
    The {@link Feature.Set} creation process has two main steps:
    - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
    - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
    This function implements logic for the first part of the {@link Feature.Set} creation
    process.
    NOTE: This function is NOT intended to be used by users. It will be called internally
    by {@link prepareFeatures}, which the user is encouraged to always interact with.
    
    @param spec
           The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
    @param start
           The start datetime for feature preparation.
    @param end
           The end datetime for feature preparation.
    @param interval
           The time interval for feature preparation, defaults to QUARTER_HOUR.
    @return a {@link Feature.Set} containing the initial features.
    """
        ...
    def prepareCleanedFeatureSet(self, featureSet: Feature.Set, spec: ReliabilityMlFeaturePreparationSpec, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', sensorAssociationJobId: str='None') -> Union[Feature.Set]:
    """
    The {@link Feature.Set} creation process has two main steps:
    - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
    - Apply the masks on the initial {@link Feature.Set} corresponding to the provided
    {@link ReliabilityMlDatasetPreparationSpec#masksBeforeCleaning}, if the
    {@link ReliabilityMlDatasetPreparationSpec#approach} is `sequential`.
    - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
    This function implements logic for the second part of the {@link Feature.Set} creation
    process.
    NOTE: This function is NOT intended to be used by users. It will be called internally
    by {@link prepareFeatures}, which the user is encouraged to always interact with.
    
    @param featureSet
           The initial {@link Feature.Set} to be cleaned.
    @param spec
           The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
    @param start
           The start datetime for feature preparation.
    @param end
           The end datetime for feature preparation.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for feature preparation, defaults to QUARTER_HOUR.
    @param sensorAssociationJobId
           Optional job ID for sensor association, defaults to None.
    @return a cleaned {@link Feature.Set}.
    """
        ...
    def prepareFeatures(self, spec: ReliabilityMlFeaturePreparationSpec, maskPreparationSpec: ReliabilityMlMaskPreparationSpec, start: datetime=None, end: datetime=None, masksBeforeCleaning: Array[str]=None, interval: str='QUARTER_HOUR', sensorAssociationJobId: str='None') -> Union[Map[str, Feature.Set]]:
    """
    The {@link Feature.Set} creation process has two main steps:
    - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
    - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
    This function implements logic for both aspects of the {@link Feature.Set} creation
    process. Internally, it first calls {@link prepareInitialFeatureSet}, then calls
    {@link prepareMasks} for the provided masksBeforeCleaning, and passes the
    output of these functions into {@link prepareCleanedFeatureSet}.
    NOTE: In the most common implementation of `reliabilityRisk`, the user need not concern
    themselves with this function. It is suggested that the user use this function ONLY if
    they want to define non-standard {@link Feature}s that don't simply return the time
    series data for all the {@link Sensor}s.
    
    @param spec
           The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
    @param start
           The start datetime for feature preparation.
    @param end
           The end datetime for feature preparation.
    @param masksBeforeCleaning
           An array of mask names to apply before cleaning the feature set.
    @param maskPreparationSpec
           The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
    @param interval
           The time interval for feature preparation, defaults to QUARTER_HOUR.
    @param sensorAssociationJobId
           Optional job ID for sensor association, defaults to None.
    @return a map of feature set names to {@link Feature.Set} objects.
    """
        ...
    @classmethod
    def prepareDefaultAssetEventsMask(cls, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR') -> Union[Feature]:
    """
    Helper function to prepare a default {@link Feature}, representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
    a planned/unplanned downtime event.
    These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
    by default are what the {@link Feature} will be created based on.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @return a {@link Feature} representing the default asset events mask.
    """
        ...
    def prepareAssetEventsMask(self, features: Feature.Set, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
    a planned/unplanned downtime event.
    These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
    by default are what the {@link Feature} will be created based on.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the asset events mask.
    """
        ...
    def preparePreAssetEventsMask(self, features: Feature.Set, preAssetEventsWindow: int=None, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
    anomalous/abnormal behavior in a window of time leading up to an unplanned
    downtime event.
    These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
    by default are what the {@link Feature} will be created based on.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param preAssetEventsWindow
           The number of time steps before an asset event to include in the mask.
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the pre-asset events mask.
    """
        ...
    def preparePostAssetEventsMask(self, features: Feature.Set, postAssetEventsWindow: int=None, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
    transient modes of operation immediately following a planned/unplanned downtime event.
    These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
    by default are what the {@link Feature} will be created based on.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param postAssetEventsWindow
           The number of time steps after an asset event to include in the mask.
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the post-asset events mask.
    """
        ...
    def prepareIsAssetNotOperationalMask(self, features: Feature.Set, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was not
    operational (not including planned/unplanned downtime events).
    Such asset operation is usually infer-able from the values in the time series data
    of one or more {@link Sensor}s, for example, "an asset is not operational if the
    RPM is less than 1000".
    By default, it is assumed that the {@link ReliabilityAsset} is constantly operational
    unless it is undergoing planned/unplanned downtime and, therefore, the default
    {@link Feature} will always evaluate to zero, i.e., "the asset is always operational".
    However, if the user wishes to mask periods of data corresponding to the asset not being operational,
    then they can either provide their own upserted {@link Feature}, with its `name` field populated.
    See {@link ReliabilityMlMaskPreparationSpec} for more details.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the asset not operational mask.
    """
        ...
    def prepareAlgorithmicallyComputedTrainingMask(self, features: Feature.Set, start: datetime=None, end: datetime=None, generateAlgorithmicallyComputedTrainingMask: bool=None, algorithmicallyComputedTrainingMaskTechnique: AlgorithmicallyComputedTrainingMaskTechnique=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR') -> Union[Feature.Set]:
    """
    Helper function to optionally prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} contains
    anomalous training data.
    By default, it is assumed that the other masks used to mask training data for the
    {@link ReliabilityAsset} already cover all the anomalous periods of operation associated with
    the asset, therefore, the default {@link Feature} will by default evaluate to zero.
    However, if the user wishes to still mask out anomalous periods within the training data algorithmically,
    they can do so by setting {@link ReliabilityMlMaskPreparationSpec#generateAlgorithmicallyComputedTrainingMask}
    to true, and specifying the technique to be used in
    {@link ReliabilityMlMaskPreparationSpec#algorithmicallyComputedTrainingMaskTechnique}. If a technique is not
    specified, the code will default to an Isolation Forest based approach to mask out anomalous periods
    in the training data.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param generateAlgorithmicallyComputedTrainingMask
           Boolean flag indicating whether to generate the algorithmically computed training mask.
    @param algorithmicallyComputedTrainingMaskTechnique
           The technique to use for computing the training mask algorithmically.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @return a {@link Feature.Set} representing the algorithmically computed training mask.
    """
        ...
    def prepareAdHocTrainingMask(self, start: datetime=None, end: datetime=None, features: Feature.Set=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', timeRanges: Array[TimeRange]=None, preIsAssetNotOperationalFeatureOverride: Feature=None, postIsAssetNotOperationalFeatureOverride: Feature=None, overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data that cannot otherwise be expressed elegantly
    to remove rows of data from training the {@link MlModel}.
    Usually, such situations arise when it is known that there are certain time ranges
    when there is clearly anomalous asset operation, however, it may not be express-able
    as generic rules. In such cases, users have the option to provide {@link TimeRange}s
    in the `timeRanges` argument. Any data within any of the provided {@link TimeRange}s
    will be ignored while training the {@link MlModel}.
    By default, however, it will be assumed that there are no abnormal operating modes
    of the {@link ReliabilityAsset} unless the user provides `timeRanges`.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param timeRanges
           Optional array of {@link TimeRange} objects to exclude from training.
    @param preIsAssetNotOperationalFeatureOverride
           Optional override {@link Feature} for pre-asset not operational check.
    @param postIsAssetNotOperationalFeatureOverride
           Optional override {@link Feature} for post-asset not operational check.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the ad-hoc training mask.
    """
        ...
    def prepareAdHocInferenceMask(self, start: datetime=None, end: datetime=None, features: Feature.Set=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', postIsAssetNotOperationalFeatureOverride: Feature=None, overrideFeature: Feature=None, timeRanges: Array[TimeRange]=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when an {@link MlModel} should NOT make predictions
    for the {@link ReliabilityAsset}. For example, "when the inlet temperature is less than
    150 degrees Fahrenheit and outlet temperature is greater than 100 degrees Fahrenheit,
    we know that there is something obviously wrong with the asset and, therefore, do not
    want to be alerted to it. Suppress ML model outputs at such times".
    By default, however, no such assumption is made. The {@link MlModel} will always make
    predictions, unless the asset is experiencing a planned/unplanned downtime or if it is
    not operational.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param postIsAssetNotOperationalFeatureOverride
           Optional override {@link Feature} for post-asset not operational check.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @param timeRanges
           Optional array of {@link TimeRange} objects to exclude from inference.
    @return a {@link Feature.Set} representing the ad-hoc inference mask.
    """
        ...
    def prepareMask(self, spec: ReliabilityMlMaskPreparationSpec, start: datetime=None, end: datetime=None, maskToApply: str=None, features: Feature.Set=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR') -> Union[Feature.Set]:
    """
    Helper function that orchestrates the preparation of all the different types of masks.
    Internally, it prepares the mask for the the specified `maskToApply` using the
    provided spec, and returns a {@link Feature.Set}.
    Internally, it calls the following functions to prepare the mask:
    - {@link prepareAssetEventsMask}
    - {@link preparePreAssetEventsMask}
    - {@link preparePostAssetEventsMask}
    - {@link prepareIsAssetNotOperationalMask}
    - {@link prepareAdHocTrainingMask}
    - {@link prepareAdHocInferenceMask}
    - {@link prepareAlgorithmicallyComputedTrainingMask}
    
    All the masks that have been applied before a specific mask is prepared
    are available in the `masks` field. Depending on the `approach`, `masksBeforeCleaning`
    and `masksAfterCleaning` fields of the {@link ReliabilityMlMaskPreparationSpec},
    either the initial {@link Feature.Set} or the cleaned {@link Feature.Set} will be available
    in the `features` field.
    
    @param spec
           The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param maskToApply
           The name of the mask to prepare.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @return a {@link Feature.Set} representing the prepared mask.
    """
        ...
    def prepareMasks(self, spec: ReliabilityMlMaskPreparationSpec, start: datetime=None, end: datetime=None, masksToApply: Array[str]=None, features: Feature.Set=None, masksApplied: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR') -> Union[Map[str, Feature.Set]]:
    """
    Helper function to prepare materialized {@link Feature.Set}s for all the different types
    of masks necessary for robust training and performance of {@link MlModel}s. Internally,
    this function calls {@link prepareMask} for each mask in `masksToApply`. It, then, aggregates
    the {@link Feature.Set}s resulting from calls to all the mask-related functions into a `map` object.
    
    The order in which these functions are called is determined by the `approach`, `masksBeforeCleaning`
    and `masksAfterCleaning` fields of the {@link ReliabilityMlMaskPreparationSpec}.
    
    @param spec
           The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param masksToApply
           An array of mask names to prepare.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masksApplied
           A map of already applied mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @return a map of mask names to {@link Feature.Set} objects.
    """
        ...
    def prepareTarget(self, spec: ReliabilityMlTargetPreparationSpec, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR') -> Union[Map[str, Feature.Set]]:
    """
    Usually, in `reliabilityRisk`, it is not suggested to train and deploy supervised
    {@link MlModel}s. However, sometimes, they perform  better than the default,
    semi-supervised {@link MlModel}s. In such cases, use this function to define the target
    variable according to the {@link ReliabilityMlTargetPreparationSpec}.
    
    @param spec
           The {@link ReliabilityMlTargetPreparationSpec} containing target preparation configuration.
    @param start
           The start datetime for target preparation.
    @param end
           The end datetime for target preparation.
    @param interval
           The time interval for target preparation, defaults to QUARTER_HOUR.
    @return a map of target names to {@link Feature.Set} objects.
    """
        ...
    def prepareAlertContext(self, project: ReliabilityMl.Project=None, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR', overrideFeatures: Array[Feature]=None) -> Union[Map[str, Feature.Set]]:
    """
    Helper function to prepare a {@link Feature.Set}s for alertContext, which is required to generate
    accurate alerts in production. By default, this API prepares a set of features that fetches the
    riskScore, riskScoreNormalized and alert corresponding to the deployed CHAMPION model. This is required
    when {@link ReliabilityMlModel#process} is called for a specified "start:end" period - alertContext
    is used to provide the {@link ReliabilityRiskMl.Pipeline#alertingPipe} with information about previously
    persisted riskScores and alerts, which it uses to accurately determine when a new alert should be generated
    within the "start:end" window.
    
    @param project
           The {@link ReliabilityMl.Project} to prepare alert context for.
    @param start
           The start datetime for alert context preparation.
    @param end
           The end datetime for alert context preparation.
    @param interval
           The time interval for alert context preparation, defaults to QUARTER_HOUR.
    @param overrideFeatures
           Optional array of override {@link Feature} objects to use.
    @return a map of feature names to {@link Feature.Set} objects for alert context.
    """
        ...
    def trainValSplit(self, featureSet: Feature.Set, spec: ReliabilityMlTrainValSplitSpec, start: datetime, end: datetime) -> Union[Map[str, TimeRange]]:
    """
    Once all the {@link Feature.Set}s are defined and materialized, there is one final step
    before one can begin training {@link MlModel}s, i.e., splitting the datasets into
    training and validation. This function will split the datasets according to the
    {@link ReliabilityMlTrainValSplitSpec}.
    NOTE: It is strongly suggested that users NOT call this function directly. This will be
    internally called by {@link prepareMlDatasets}.
    
    @param featureSet
           The {@link Feature.Set} to split into training and validation sets.
    @param spec
           The {@link ReliabilityMlTrainValSplitSpec} containing split configuration.
    @param start
           The start datetime for the split.
    @param end
           The end datetime for the split.
    @return a map of split names to {@link TimeRange} objects.
    """
        ...
    def updateSpecForSensorAssociation(self, spec: ReliabilityMlDatasetPreparationSpec) -> ReliabilityMlDatasetPreparationSpec:
    """
    This function is called from {@link #doPrepareMlDatasets} if the provided {@link ReliabilityMlDatasetPreparationSpec}
    has a `sensorAssociationJobId' provided and its `doNotUpdateSpecForSensorAssociation` is set to `false`,
    to update the fields on the data prep spec, and return
    a new data prep spec with the updated fields.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} to update for sensor association.
    @return the updated {@link ReliabilityMlDatasetPreparationSpec}.
    """
        ...
    @classmethod
    def initializeJobSpec(cls, job: ReliabilityMlDatasetPreparationJob) -> Union[ReliabilityMlDatasetPreparationJob]:
    """
    Updates the {@link ReliabilityMlDatasetPreparationJob} with fields that are required for a dataset preparation job.
    Creates a map of {@link ReliabilityAsset#id}s to {@link ReliabilityMlDatasetPreparationRun}s
    from the given {@link ReliabilityMlDatasetPreparationSpec#targetAssetFilter}, so that we can name
    the dataset preparation runs and link them to the tracking job. The created
    {@link ReliabilityMlDatasetPreparationRun}s are persisted in the database, and the map is
    set in the {@link ReliabilityMlDatasetPreparationSpec#datasetRunMap datasetRunMap} field
    of the {@link ReliabilityMlDatasetPreparationJob#spec}.
    @param job
           The {@link ReliabilityMlDatasetPreparationJob} that will use this map.
    @returns the updated {@link ReliabilityMlDatasetPreparationJob}.
    """
        ...
    def beforePrepareMlDatasets(self, spec: ReliabilityMlDatasetPreparationSpec, job: ReliabilityMlDatasetPreparationJob=None) -> ReliabilityMlDatasetPreparationSpec:
    """
    Any asset-specific modifications that need to be done to the
    {@link ReliabilityMlDatasetPreparationSpec} may be made in this function.
    By default, there is no modification to the spec. This function is useful
    when invoking the dataset preparation job in bulk, i.e., for many assets,
    but there are modifications to be made to the spec such as an
    asset-specific feature creation process to set
    {@link ReliabilityMlFeaturePreparationSpec#overrideFeatures}.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} to modify.
    @param job
           The {@link ReliabilityMlDatasetPreparationJob} associated with this preparation.
    @return the modified {@link ReliabilityMlDatasetPreparationSpec}.
    """
        ...
    def doPrepareMlDatasets(self, spec: ReliabilityMlDatasetPreparationSpec) -> Union[ReliabilityMlDatasetPreparationRun]:
    """
    This function contains the logic of preparing clean datasets for model training.
    Rarely requires modification.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
    @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
    """
        ...
    def afterPrepareMlDatasets(self, spec: ReliabilityMlDatasetPreparationSpec, run: ReliabilityMlDatasetPreparationRun) -> Union[ReliabilityMlDatasetPreparationRun]:
    """
    Post-preparation of datasets for model training, there may be a requirement to
    modify the {@link ReliabilityMlDatasetPreparationRun}, for example. These
    requirements are specific to each deployment. As such, the base function will
    always make no modifications. However, this function may be overridden in a deployment
    to transform the outputs to be specific to that deployment.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} used for preparation.
    @param run
           The {@link ReliabilityMlDatasetPreparationRun} to modify.
    @return the modified {@link ReliabilityMlDatasetPreparationRun}.
    """
        ...
    def prepareMlDatasets(self, spec: ReliabilityMlDatasetPreparationSpec=None, job: ReliabilityMlDatasetPreparationJob=None) -> Union[ReliabilityMlDatasetPreparationRun]:
    """
    Synchronous method to prepare ML Datasets for a given {@link ReliabilityAsset}. It
    is, however, STRONGLY SUGGESTED that users use the safer and distributed version of
    the same function, i.e., {@link prepareMlDatasetsBatch}.
    The order of execution of operations is:
    ```
    1. beforePrepareMlDatasets
       - Users may choose to modify the dataset preparation spec on a per-asset basis, if necessary.
    2. doPrepareMlDatasets
       - This contains the logic for preparing clean datasets for training the machine learning model.
         Most often, this is not modified by deployments.
    3. afterPrepareMlDatasets
       - Post-completion of dataset preparation, there may be some modifications needed to be made, in which case,
         this function may be implemented by the user.
    ```
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
    @param job
           The {@link ReliabilityMlDatasetPreparationJob} associated with this preparation.
    @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
    """
        ...
    @classmethod
    def prepareMlDatasetsBatch(cls, spec: ReliabilityMlDatasetPreparationSpec=None, options: MapReduceOptions=None) -> Union[ReliabilityMlDatasetPreparationJob]:
    """
    Distributed and safer version of {@link prepareMlDatasets}. It is safer because
    it does not block threads on the leader nodes of the {@link App}. Since the task
    nodes will pick up this task, it will not affect the availability and performance
    of the {@link App} for other, more urgent requests.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
    @param options
           The {@link MapReduceOptions} for distributed processing.
    @return a {@link ReliabilityMlDatasetPreparationJob} representing the batch preparation job.
    """
        ...
    @classmethod
    def validateMaskExpression(cls, assetId: str, expressions: Array[str]=None) -> bool:
    """
    Helper method to validate a mask expression when specified. Since this expression will
    be used to create a {@link Feature}, we need to ensure that the user input is valid.
    
    @param assetId
           The ID of the {@link ReliabilityAsset} to validate the expression for.
    @param expressions
           An array of mask expressions to validate.
    @return true if all expressions are valid, false otherwise.
    """
        ...
    @classmethod
    def parseMaskExpression(cls, expression: str=None) -> Union[str]:
    """
    Transform mask expression into a format that can be used in a metric expression
    
    @param expression
           Expression that needs to be transformed
    @return string representing the expression transformed
    """
        ...
    @classmethod
    def prepareMlDatasetsAndSensorDataReports(cls, assets: Array[ReliabilityAsset], spec: ReliabilityMlDatasetPreparationSpec) -> Union[ReliabilityMlDatasetPreparationRun]:
    """
    This function will prepare the {@link ReliabilityMlDatasetPreparationRun} for the
    given {@link ReliabilityAsset}s and {@link ReliabilityMlDatasetPreparationSpec}.
    This will create the {@link Feature.Set}s that can be used for training on the given
    {@link ReliabilityAsset}s.
    
    @param assets
           An array of {@link ReliabilityAsset} objects to prepare datasets for.
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
    @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
    """
        ...
    def prepareSensorDataReports(self, spec: ReliabilityMlDatasetPreparationSpec, overrideTimeRange: TimeRange=None) -> ReliabilityMlDatasetPreparationSpec:
    """
    Prepares {@link SensorDataReport}s for the {@link ReliabilityAsset} based on the provided
    {@link ReliabilityMlDatasetPreparationSpec}. This function is called when preparing ML datasets.
    It validates that the spec contains {@link ReliabilityMlDatasetPreparationSpec#sensorDataReportThresholds},
    {@link ReliabilityMlDatasetPreparationSpec#materializeStart}, and
    {@link ReliabilityMlDatasetPreparationSpec#materializeEnd}, and executes
    {@link ReliabilityAsset#generateSensorDataReport}.
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} that contains the thresholds and time range.
    @param overrideTimeRange
           The time range to use for the sensor data reports, if materializeStart and materializeEnd are not provided
           in the spec.
    @returns
          The updated {@link ReliabilityMlDatasetPreparationSpec} with the sensor data reports prepared. If the
          spec does not contain the required fields, or a time range is not provided, the unmodified spec is returned.
    """
        ...
    def fetchRelevantAssets(self, level: int='1', isAbsolute: bool='false') -> Union[FetchResult[ReliabilityAsset]]:
    """
    Get assets 'relevant' mainly for modeling purposes for the current asset.
    
    What defines the relevance of an asset?
    
    A given asset is relevant to current asset if it is present in vicinity of the current asset. There are two ways to define this vicinity:
    1. Relative level - Use `level` to climb up the hierarchy from the current asset's level and fetch all the descendant assets of the resolved ancestor asset.
    2. Absolute level - Use `level` as the absolute depth to resolve ancestor asset and fetch all it's descendant assets.
    
    
                         {GrandParent}
                          /          \
                    {Parent1}      {Parent2}
                       /   \           \
                      /     \           \
                     /       \           \
             {selectedAsset} {sibling1}  {sibling2}
               /          \
           {child1}      {child2}
    
    For example, considering the above hierarchy for the 'selectedAsset':
    - `fetchRelevantAssets()` with default parameters resolves to assets [sibling1, child1, child2].
    - `fetchRelevantAssets(0, true)` resolves to assets [GrandParent, Parent1, Parent2, sibling1, sibling2, child1, child2].
    
    @param level
             The integer level which will be used to calculate the depth at which ancestor asset will be resolved.
             level has to >=0, negative level results in an error thrown. Defaults to 1.
    @param isAbsolute
              A flag to indicates whether to interpret the level as 'relative' or 'absolute'. Defaults to false.
                - if set to true, ancestor will be resolved at the provided level of the hierarchy.
                - if set to false, provided level will be used to climb up the hierarchy from the current asset.
    
    @returns A {@link FetchResult#of} {@link ReliabilityAsset}s.
    """
        ...
    @classmethod
    def fetchSensorsForSelectedAssets(cls, assets: Array[str], spec: FetchSpec=None, sensorDataReportsFilter: str=None) -> Union[FetchResultWithTotalCount[any]]:
    """
    This function returns a list of objects prepared from {@link ReliabilityAssetSensorRelation}s for a given list of {@link ReliabilityAsset}s.
    The FetchSpec has limited functionality as `offset`, `limit`, and `filter` parameters are respected as is, whereas `include` is not.
    One must practice caution in providing `{@link FetchSpec#filter}` that is compatible with {@link ReliabilityAssetSensorRelation} schema.
    
    @param assets
       List of {@link ReliabilityAsset} ids.
    @param spec
       - A {@link FetchSpec} for the fetch call which will be called on {@link ReliabilityAssetSensorRelation}.
    @param sensorDataReportsFilter (used especially for UI)
       A string filter that can be applied on {@link SensorDataReport} to get all the sensors that have been selected or excluded already in the UI.
    
    @return {@link FetchResultWithTotalCount} with sensor details as json objs in the following format:
        ```json
         sensorObj: {
            id: ...
            from.name: ...
            to.name: ...
            sensorId: ...
            latestValue: ...
          }
        ```
    """
        ...
    def populateJobPreparationSettings(self, job: ReliabilityMlDatasetPreparationJob, spec: ReliabilityMlDatasetPreparationSpec, run: ReliabilityMlDatasetPreparationRun) -> Union[ReliabilityMlDatasetPreparationJob]:
    """
    The purpose of this method is to populate the job.preparationSettings field on dataset runs that are
    created on the backend, such as a Jupyter Notebook or the static console. The preparationSettings will
    be populated with the given {@link ReliabilityMlDatasetPreparationRun run} and {@link ReliabilityMlDatasetPreparationSpec spec}.
    
    @param job
           The {@link ReliabilityMlDatasetPreparationJob job} to attach the preparationSettings
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec spec} to generate the datasets
    @param run
           The {@link ReliabilityMlDatasetPreparationRun dataset preparation run}
    @returns The {@link ReliabilityMlDatasetPreparationJob job} with the preparationSettings field populated
    """
        ...

