#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Data.ManualOpSpecs.ReadCsvGlobSpec import Data.ManualOpSpecs.ReadCsvGlobSpec
from c3.platform.ToPySrcSpec import ToPySrcSpec
from c3.platform.Include import Include
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Data.Resample import Data.Resample
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Timeseries import Timeseries
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data.Series import Data.Series
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.EvalSpec import EvalSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Metric import Metric
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Data.IntervalIndex import Data.IntervalIndex
from c3.platform.Formula import Formula
from c3.platform.Data import Data
from c3.platform.Data.RangeIndex import Data.RangeIndex
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data.PushStream import Data.PushStream
from c3.platform.Iterator import Iterator
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.DataToPyAstVisitorCtx import DataToPyAstVisitorCtx
from c3.platform.Collection import Collection
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapType import MapType
from c3.platform.Config import Config
from c3.platform.Data.Flow import Data.Flow
from c3.platform.Data.GroupBy import Data.GroupBy
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Data.DatetimeIndex import Data.DatetimeIndex
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.Data.TimedeltaIndex import Data.TimedeltaIndex
from c3.platform.Data.Index import Data.Index
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.DataIlocIndexer import DataIlocIndexer
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.Type import Type
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Data.CategoricalIndex import Data.CategoricalIndex
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Data.Float64Index import Data.Float64Index
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Data.Int64Index import Data.Int64Index
from c3.platform.Data.Pandas import Data.Pandas
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Data.Stream import Data.Stream
from c3.platform.ContentValue import ContentValue
from c3.platform.TupleType import TupleType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.EvalMetricsResult import EvalMetricsResult
from c3.platform.LegacyMetric import LegacyMetric
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Data.Lazy import Data.Lazy
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Pair import Pair
from c3.platform.File import File
from c3.platform.Data.StreamSpec import Data.StreamSpec
from c3.platform.Promise import Promise
from c3.platform.Type import Type
from c3.platform.DataImpl.Lazy import DataImpl.Lazy
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Promise import Promise
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Data.UInt64Index import Data.UInt64Index
from c3.platform.FieldPath import FieldPath
from c3.platform.PkgInference import PkgInference
from c3.platform.StreamType import StreamType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data.Visitor import Data.Visitor
from c3.platform.Map import Map
from c3.platform.PyAst.Module import PyAst.Module
from c3.platform.SetBuilder import SetBuilder
from c3.platform.DataConfig import DataConfig
from c3.platform.Dataset import Dataset
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.Iterable import Iterable
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data.SourceSpec import Data.SourceSpec
from c3.platform.DataGrid.HtmlSpec import DataGrid.HtmlSpec
from c3.platform.Type import Type
from c3.platform.Data.PushStreamSpec import Data.PushStreamSpec
from c3.platform.ValueType import ValueType
from c3.platform.DataRef import DataRef
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data.ManualOpSpecs.ReadCsvSpec import Data.ManualOpSpecs.ReadCsvSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.DataToWorkflowSpec import DataToWorkflowSpec
from c3.platform.SetType import SetType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.OpSpec import OpSpec
from c3.platform.DataImpl import DataImpl
from c3.platform.Tuple import Tuple
from c3.platform.Feature.Store.WriteMetadata import Feature.Store.WriteMetadata
from c3.platform.Exclude import Exclude
from c3.platform.DataGrid.LoadSpec import DataGrid.LoadSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Action import Action
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.MethodType import MethodType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.DataGrid import DataGrid
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data.Rolling import Data.Rolling
from c3.platform.ArrayType import ArrayType
from c3.platform.Data.Spec import Data.Spec
from c3.platform.Collection import Collection
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Iterable import Iterable
from c3.platform.Data.PeriodIndex import Data.PeriodIndex
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Data.SliceSpec import Data.SliceSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.DataToFlowSpec import DataToFlowSpec
from c3.platform.DataLocIndexer import DataLocIndexer
from c3.platform.Workflow import Workflow
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Data.CheckEqualsSpec import Data.CheckEqualsSpec
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.IdTimeRangeFilterSpec import IdTimeRangeFilterSpec
from c3.platform.Promise import Promise
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data.MultiIndex import Data.MultiIndex
from c3.platform.Promise import Promise

# Python definitions for the C3 type Data.Persisted


class Persisted(Data.Lazy, DataPushStreamable):
    """
    Internal instance of {@link Data}, backed by persistence in `Feature.Store`'s Data store. By "persisted",
    we mean the Data instance is non-ephemeral and can be shared across cluster nodes.
    
    @remarks this represents a made instance of Data.Persisted
    """
    
    STATELESS_CACHE: Optional[str]=None
    """
    A dummy string used as cache key when materializing a stateless {@link Data.Lazy}.
    Materializing a stateful {@link DataRef} will use dataset().id() as cache key.
    """

    this: Optional[Any]
    """
    Target type of the static static function returning a DataImpl subtype, or instance of a target type for member function
    returning {@link Data}
    """

    action: Optional[str]
    """
    Target action returning DataImpl
    """

    args: Optional[Map[str, Any]]=None
    """
    Applied arguments
    """

    _inferredOutType: Optional[Map[str, ValueType]]=None
    """
    The inferred output column types of this lazy instance, the key is the name of the column and the value is the c3
    ValueType of that column. This output type can be used to decide what is the correct column type in python. Note that
    this field is populated when creating the lazy instance, there are two cases:
    1. If the lazy instance is a {@link Data.FeatureSet}, this field is derived from the {@link Feature.Set#_columns};
    2. If the lazy instance is from {@link Evaluatable#eval eval}, this field is derived from the {@link EvalSpec}, which
       may not be accurate in certain corner cases, i.e. this inferred output type does not match the actual returned data
       column types exactly. In this case, the data will be returned as it is.
    """

    LOCAL_FOLDER_PREFIX: Optional[str]=None
    """
    Prefix to use for loading files from the client `local` folder
    
    see {@link Data#read_csv}
    """

    DFLT_TABLE_NAME: Optional[str]=None

    DFLT_ROW_COUNT: Optional[int]=None
    def __init__(self, STATELESS_CACHE: Optional[str]=None, this: Optional[Any]=None, action: Optional[str]=None, args: Optional[Map[str, Any]]=None, _inferredOutType: Optional[Map[str, ValueType]]=None, LOCAL_FOLDER_PREFIX: Optional[str]=None, DFLT_TABLE_NAME: Optional[str]=None, DFLT_ROW_COUNT: Optional[int]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[Data.Persisted]:
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
    def fromJsonString(cls, json: str) -> Union[Data.Persisted]:
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
    def fromXmlString(cls, xml: str) -> Union[Data.Persisted]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted]:
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
    def replaceType(self, old: Type, new: Type) -> Data.Persisted:
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
    @overload
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isSame(self, other: Data) -> bool:
    """
    @param other
            data instance to compare based on the reference.
    @return true if other is the same instance as this Data else false.
    @see Data#equal_
    @see Data#equalTo
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
    @overload
    def fieldValues(self) -> Union[Array[FieldValue]]:
    """
    Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    @overload
    def fieldValues(self, names: Array[str]) -> Union[Any]:
    """
    Conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
    @param names
            names associated with the desired attribute values.
    @return the attribute values associated with the given attribute names
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted:
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
    def validateObj(self) -> Data.Persisted:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted:
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
    def withoutFieldAtPath(self, path: str) -> Data.Persisted:
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
    def withoutField(self, field: str) -> Data.Persisted:
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
    def withoutField(self, field: FieldType) -> Data.Persisted:
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
    def withoutFields(self, fields: Array[str]) -> Data.Persisted:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Data.Persisted:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted:
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
    def defaultField(self, field: str) -> Data.Persisted:
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
    def defaultField(self, field: FieldType) -> Data.Persisted:
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
    def unsetField(self, field: str) -> Data.Persisted:
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
    def unsetField(self, field: FieldType) -> Data.Persisted:
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
    def removeField(self, field: str) -> Data.Persisted:
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
    def removeField(self, field: FieldType) -> Data.Persisted:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted:
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
    def mergeJson(self, json: any) -> Data.Persisted:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Data.Persisted]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Data.Persisted]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Data.Persisted]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted]]:
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
    def toBuilder(self) -> ObjBuilder[Data.Persisted]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Data.Persisted]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Data.Persisted:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted:
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
    def afterMake(self) -> Data.Persisted:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Data.Persisted:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
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
    def dereference(self) -> Data:
    """
    @return the `Data` instance referenced by this {@link DataImpl}.
    """
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
    def cache(self, ds: Dataset=None) -> Union[Data]:
    """
    Cache and return a concrete {@link DataImpl} according to this Data's execution mode.
    If a dataset is provided, the resulting {@link DataImpl} will be stateful and belong to that dataset,
    otherwise it will be stateless.
    if `cache` is invoked on a {@link Data.Lazy}, the corresponding concrete {@link DataImpl} will be cached on
    this instance with the dataset id as cache key, or {@link DataImpl.Lazy#STATELESS_CACHE} if
    no dataset is provided. see for example {@link Data.Lazy#_toPandas}.
    """
        ...
    def toDataRef(self, ds: Dataset=None) -> Union[DataRef]:
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
    def fromPySrc(cls, pySrc: str, dfs: Set[DataImpl]=None, vars: Map[str, Any]=None, dataset: Dataset=None) -> Union[Data.Persisted]:
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
    def _jsDataProxy(cls, inst: Any) -> Data.Persisted:
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
    def inferredOutType(self) -> Union[Map[str, ValueType]]:
        ...
    def dataArgs(self) -> Union[Map[str, DataImpl]]:
    """
    Cached helper to retrieve args which are instance of {@link DataImpl}, including "this" arg
    """
        ...
    def isEvaluatableEval(self) -> bool:
    """
    @return true if this is of type Evaluatable & action is eval {@see Evaluatable#eval}
    """
        ...
    def isSourceActionEval(self) -> bool:
    """
    @return true if the source action of this Data.Lazy instance is {@link Evaluatable#eval eval},
    {@link FeatureEvaluatable#evalFeature readFeature}, {@link FeatureEvaluatable#evalFeatures readFeatures} or
    {@link FeatureEvaluatable#evalFeatureSet readFeatureSet}
    """
        ...
    def thsLazy(self) -> DataImpl.Lazy:
    """
    Convenience helper to get {@link DataImpl.Lazy#ths} and cast it as {@link DataImpl.Lazy}. Throws an error if ths
    is not a DataImpl.Lazy
    """
        ...
    def callingType(self) -> Type:
    """
    Convenience helper to retrieve type from which the method represented by this lazy was called, whether static or
    member.
    """
        ...
    def methodType(self) -> MethodType:
    """
    The corresponding {@link MethodType} for this lazy DataImpl
    """
        ...
    @classmethod
    def create(cls, this_: Any, action: str, args: Map[str, Any]=None) -> Data.Persisted:
    """
    Creates a new instance of Data.Lazy with the given fields. All creation of DataImpl.Lazy instances should go
    through this function, as it will also contain special logic for expanding spec arguments.
    
    @param this_
           Type or instance which invoked the action
    @param action
           Name of the action being represented
    @param args
           Map from argument name to value for the action being represented
    """
        ...
    def arg(self, argName: str, failIfMissing: bool=None) -> T:
    """
    Returns argument by name for this DataImpl.Lazy. If argument is not present, return null by default or fail if
    failIfMissing = true.
    """
        ...
    def isStatic(self) -> bool:
    """
    @return whether this DataImpl.Lazy represents a static action, as opposed to member
    """
        ...
    def isNotPandasDispatchable(self) -> bool:
    """
    Whether the action of this lazy can be executed with pandas
    """
        ...
    def compress(self) -> any:
    """
    @return compressed serialized {@link DataImpl.Lazy} which can be persisted more efficiently
    
    @see Feature.compressedData
    """
        ...
    def withIdTimeRangeFilterSpecRecursive(self, spec: Callable[[DataImpl.Lazy, IdTimeRangeFilterSpec], IdTimeRangeFilterSpec]=None) -> DataImpl.Lazy:
    """
    Adds "id","ids","start","end" filter to spec params recursively for the given spec
    e.g. if one of the args is {spec: EvalSpec}, this function with add the provided IdTimeRangeFilterSpec to the
    spec field in EvalSpec
    """
        ...
    def withoutIdTimeRangeFilterSpec(self) -> DataImpl.Lazy:
    """
    Removes "id","ids","start","end" filter from the spec params that are IdFilterSpec or IdTimeRangeFilterSpec,
    and "slice", "sliceByMask", "sliceByLabel" on the subject/id/timestamp Columns. Removal is done in topologicalSort order.
    e.g. if one of the args is {spec: EvalSpec}, this function with remove the above fields from the fields in EvalSpec
    """
        ...
    def toBinary(self) -> any:
    """
    Actualizes the DataImpl.Lazy on the server and then returns the binary representation of df
    """
        ...
    def T(self) -> Union[Data]:
        ...
    def attrs(self) -> Union[Map[Any, Any]]:
        ...
    def axes(self) -> Union[Array[Any]]:
        ...
    def columns(self) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def dtypes(self) -> Union[Data.Series]:
        ...
    def empty(self) -> Union[Any]:
        ...
    def flags(self) -> Union[Any]:
        ...
    def iat(self) -> Union[Any]:
        ...
    def iloc(self) -> Union[DataIlocIndexer]:
    """
    Purely integer-location based indexing for selection by position.
    
    Supports a subset of arguments to [pandas.DataFrame.iloc](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.iloc.html)
    """
        ...
    def index(self) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
        ...
    def loc(self) -> Union[DataLocIndexer]:
    """
    Access a group of rows and columns by label(s) or a boolean array.
    
    Supports a subset of arguments to [pandas.DataFrame.loc](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.loc.html)
    """
        ...
    def ndim(self) -> Union[int]:
        ...
    def shape(self) -> Union[Array[int]]:
        ...
    def size(self) -> Union[int]:
        ...
    def style(self) -> Union[Any]:
        ...
    def values(self) -> Union[Any]:
        ...
    def abs(self) -> Union[Data]:
        ...
    def add(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def add_prefix(self, prefix: str=None) -> Union[Data]:
        ...
    def add_suffix(self, suffix: str=None) -> Union[Data]:
        ...
    def agg(self, func: Any=None, axis: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def aggregate(self, func: Any=None, axis: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def align(self, other: Any=None, join: str=None, axis: Any=None, level: Any=None, copy: Any=None, fill_value: Any=None, method: str=None, limit: Any=None, fill_axis: Any=None, broadcast_axis: Any=None) -> Union[Array[Any]]:
        ...
    def all(self, axis: Any=None, bool_only: Any=None, skipna: Any=None, level: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def any(self, axis: Any=None, bool_only: Any=None, skipna: Any=None, level: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def append(self, other: Any=None, ignore_index: Any=None, verify_integrity: Any=None, sort: Any=None) -> Union[Data]:
        ...
    def applymap(self, func: Any=None, na_action: str=None) -> Union[Data]:
        ...
    def asfreq(self, freq: Any=None, method: Any=None, how: str=None, normalize: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def asof(self, where: Any=None, subset: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def astype(self, dtype: Any=None, copy: Any=None, errors: str=None) -> Union[Data]:
        ...
    def at_time(self, time: Any=None, asof: Any=None, axis: Any=None) -> Union[Data]:
        ...
    def backfill(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
        ...
    def between_time(self, start_time: Any=None, end_time: Any=None, include_start: Any=None, include_end: Any=None, axis: Any=None) -> Union[Data]:
        ...
    def bfill(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
        ...
    def bool(self) -> Union[Any]:
        ...
    def boxplot(self, column: Any=None, by: Any=None, ax: Any=None, fontsize: Any=None, rot: Any=None, grid: Any=None, figsize: Any=None, layout: Any=None, return_type: Any=None, backend: Any=None) -> Union[Any]:
        ...
    def clip(self, lower: Any=None, upper: Any=None, axis: Any=None, inplace: Any=None) -> Union[Data]:
        ...
    def combine(self, other: Data=None, func: Any=None, fill_value: Any=None, overwrite: Any=None) -> Union[Data]:
        ...
    def combine_first(self, other: Data=None) -> Union[Data]:
        ...
    def compare(self, other: Data=None, align_axis: Any=None, keep_shape: Any=None, keep_equal: Any=None) -> Union[Data]:
        ...
    def convert_dtypes(self, infer_objects: Any=None, convert_string: Any=None, convert_integer: Any=None, convert_boolean: Any=None, convert_floating: Any=None) -> Union[Data]:
        ...
    def copy(self, deep: Any=None) -> Union[Data]:
        ...
    def corr(self, method: Union[Callable[[Union[Any], Union[Any]], Union[float]],str]=None, min_periods: int=None) -> Union[Data]:
        ...
    def corrwith(self, other: Any=None, axis: Any=None, drop: Any=None, method: Any=None) -> Union[Data.Series]:
        ...
    def count(self, axis: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def cov(self, min_periods: int=None, ddof: int=None) -> Union[Data]:
        ...
    def cummax(self, axis: Any=None, skipna: Any=None) -> Union[Data]:
        ...
    def cummin(self, axis: Any=None, skipna: Any=None) -> Union[Data]:
        ...
    def cumprod(self, axis: Any=None, skipna: Any=None) -> Union[Data]:
        ...
    def cumsum(self, axis: Any=None, skipna: Any=None) -> Union[Data]:
        ...
    def describe(self, percentiles: Any=None, include: Any=None, exclude: Any=None, datetime_is_numeric: Any=None) -> Union[Data]:
        ...
    def diff(self, periods: int=None, axis: Any=None) -> Union[Data]:
        ...
    def div(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def divide(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def dot(self, other: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def drop(self, labels: Any=None, axis: Any=None, index: Any=None, columns: Any=None, level: Any=None, inplace: Any=None, errors: str=None) -> Union[Data]:
        ...
    def drop_duplicates(self, subset: Any=None, keep: Any=None, inplace: Any=None, ignore_index: Any=None) -> Union[Data]:
        ...
    def droplevel(self, level: Any=None, axis: Any=None) -> Union[Data]:
        ...
    def dropna(self, axis: Any=None, how: str=None, thresh: Any=None, subset: Any=None, inplace: Any=None) -> Union[Data]:
        ...
    def duplicated(self, subset: Any=None, keep: Any=None) -> Union[Data.Series]:
        ...
    def eq(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
        ...
    def eval(self, expr: str=None, inplace: Any=None) -> Union[Any]:
        ...
    def ewm(self, com: float=None, span: float=None, halflife: Any=None, alpha: float=None, min_periods: int=None, adjust: Any=None, ignore_na: Any=None, axis: Any=None, times: Any=None) -> Union[Any]:
        ...
    def expanding(self, min_periods: int=None, center: Any=None, axis: Any=None, method: str=None) -> Union[Any]:
        ...
    def explode(self, column: Any=None, ignore_index: Any=None) -> Union[Data]:
        ...
    def ffill(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
        ...
    def fillna(self, value: Any=None, method: Any=None, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
        ...
    def filter(self, items: Any=None, like: str=None, regex: str=None, axis: Any=None) -> Union[Data]:
        ...
    def first(self, offset: Any=None) -> Union[Data]:
        ...
    def first_valid_index(self) -> Union[Any]:
        ...
    def floordiv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def ge(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
        ...
    def get(self, key: Any=None, default: Any=None) -> Union[Any]:
        ...
    def groupby(self, by: Any=None, axis: Any=None, level: Any=None, as_index: Any=None, sort: Any=None, group_keys: Any=None, squeeze: Any=None, observed: Any=None, dropna: Any=None) -> Union[Data.GroupBy]:
        ...
    def gt(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
        ...
    def head(self, n: int=None) -> Union[Data]:
        ...
    def hist(self, column: Any=None, by: Any=None, grid: Any=None, xlabelsize: int=None, xrot: float=None, ylabelsize: int=None, yrot: float=None, ax: Any=None, sharex: Any=None, sharey: Any=None, figsize: =None, layout: =None, bins: Any=None, backend: str=None, legend: Any=None) -> Union[Any]:
        ...
    def idxmax(self, axis: Any=None, skipna: Any=None) -> Union[Data.Series]:
        ...
    def idxmin(self, axis: Any=None, skipna: Any=None) -> Union[Data.Series]:
        ...
    def infer_objects(self) -> Union[Data]:
        ...
    def info(self, verbose: Any=None, buf: Any=None, max_cols: int=None, memory_usage: Any=None, show_counts: Any=None, null_counts: Any=None) -> Union[Any]:
        ...
    def insert(self, loc: Any=None, column: Any=None, value: Any=None, allow_duplicates: Any=None) -> Union[Data]:
        ...
    def interpolate(self, method: str=None, axis: Any=None, limit: int=None, inplace: Any=None, limit_direction: str=None, limit_area: str=None, downcast: str=None) -> Union[Data]:
        ...
    def isin(self, values: Any=None) -> Union[Data]:
        ...
    def isna(self) -> Union[Data]:
        ...
    def isnull(self) -> Union[Data]:
        ...
    def items(self) -> Union[Any]:
        ...
    def iteritems(self) -> Union[Any]:
        ...
    def iterrows(self) -> Union[Any]:
        ...
    def itertuples(self, index: Any=None, name: str=None) -> Union[Any]:
        ...
    def join(self, other: Any=None, on: Any=None, how: str=None, lsuffix: str=None, rsuffix: str=None, sort: Any=None) -> Union[Data]:
        ...
    def keys(self) -> Union[Any]:
        ...
    def kurt(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def kurtosis(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def last(self, offset: Any=None) -> Union[Data]:
        ...
    def last_valid_index(self) -> Union[Any]:
        ...
    def le(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
        ...
    def lookup(self, row_labels: Any=None, col_labels: Any=None) -> Union[Any]:
        ...
    def lt(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
        ...
    def mad(self, axis: Any=None, skipna: Any=None, level: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def mask(self, cond: Any=None, other: Any=None, inplace: Any=None, axis: Any=None, level: Any=None, errors: Any=None, try_cast: Any=None) -> Union[Data]:
        ...
    def max(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def mean(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def median(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def melt(self, id_vars: Any=None, value_vars: Any=None, var_name: Any=None, value_name: Any=None, col_level: Any=None, ignore_index: Any=None) -> Union[Data]:
        ...
    def memory_usage(self, index: Any=None, deep: Any=None) -> Union[Data.Series]:
        ...
    def merge(self, right: Any=None, how: str=None, on: Any=None, left_on: Any=None, right_on: Any=None, left_index: Any=None, right_index: Any=None, sort: Any=None, suffixes: Any=None, copy: Any=None, indicator: Any=None, validate: str=None) -> Union[Data]:
        ...
    def min(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def mod(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def mode(self, axis: Any=None, numeric_only: Any=None, dropna: Any=None) -> Union[Data]:
        ...
    def mul(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    @overload
    def multiply(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    @overload
    def multiply(self, other: Any) -> Any:
        ...
    def ne(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
        ...
    def nlargest(self, n: int=None, columns: Any=None, keep: str=None) -> Union[Data]:
        ...
    def notna(self) -> Union[Data]:
        ...
    def notnull(self) -> Union[Data]:
        ...
    def nsmallest(self, n: int=None, columns: Any=None, keep: str=None) -> Union[Data]:
        ...
    def nunique(self, axis: Any=None, dropna: Any=None) -> Union[Data.Series]:
        ...
    def pad(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
        ...
    def pct_change(self, periods: int=None, fill_method: Any=None, limit: int=None, freq: Any=None) -> Union[Data]:
        ...
    def pivot(self, index: Any=None, columns: Any=None, values: Any=None) -> Union[Data]:
        ...
    def pivot_table(self, values: Any=None, index: Any=None, columns: Any=None, aggfunc: Any=None, fill_value: Any=None, margins: Any=None, dropna: Any=None, margins_name: Any=None, observed: Any=None, sort: Any=None) -> Union[Data]:
        ...
    def pop(self, item: Any=None) -> Union[Data.Series]:
        ...
    def pow(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def prod(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None, min_count: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def product(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None, min_count: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def quantile(self, q: Any=None, axis: Any=None, numeric_only: Any=None, interpolation: str=None) -> Union[Union[Data,Data.Series]]:
        ...
    def query(self, expr: str=None, inplace: Any=None) -> Union[Data]:
        ...
    def radd(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def rank(self, axis: Any=None, method: str=None, numeric_only: Any=None, na_option: str=None, ascending: Any=None, pct: Any=None) -> Union[Data]:
        ...
    def rdiv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    @overload
    def reindex(self) -> Union[Data]:
        ...
    @overload
    def reindex(self, labels: Any=None, index: Any=None, columns: Any=None, axis: Any=None, method: str=None, copy: Any=None, level: Union[int,str]=None, fill_value: Any=None, limit: Any=None, tolerance: Any=None) -> Union[Data]:
    """
    Implements pandas reindex semantics from pandas version 1.3.4
    """
        ...
    def reindex_like(self, other: Any=None, method: str=None, copy: Any=None, limit: Any=None, tolerance: Any=None) -> Union[Data]:
        ...
    def rename(self, mapper: Any=None, index: Any=None, columns: Any=None, axis: Any=None, copy: Any=None, inplace: Any=None, level: Any=None, errors: str=None) -> Union[Data]:
        ...
    def rename_axis(self, mapper: Any=None) -> Union[Data]:
        ...
    def reorder_levels(self, order: Any=None, axis: Any=None) -> Union[Data]:
        ...
    def replace(self, to_replace: Any=None, value: Any=None, inplace: Any=None, limit: int=None, regex: Any=None, method: str=None) -> Union[Data]:
        ...
    def resample(self, rule: Any=None, axis: Any=None, closed: str=None, label: str=None, convention: str=None, kind: str=None, loffset: Any=None, base: int=None, on: Any=None, level: Any=None, origin: Any=None, offset: Any=None) -> Union[Data.Resample]:
        ...
    def reset_index(self, level: Any=None, drop: Any=None, inplace: Any=None, col_level: Any=None, col_fill: Any=None) -> Union[Data]:
        ...
    def rfloordiv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def rmod(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def rmul(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def rolling(self, window: Any=None, min_periods: int=None, center: Any=None, win_type: str=None, on: str=None, axis: Any=None, closed: str=None, method: str=None) -> Union[Data.Rolling]:
        ...
    def round(self, decimals: Union[Data.Series,int,Map[Any, int]]=None) -> Union[Data]:
        ...
    def rpow(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def rsub(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def rtruediv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def sample(self, n: int=None, frac: float=None, replace: Any=None, weights: Any=None, random_state: int=None, axis: Any=None, ignore_index: Any=None) -> Union[Data]:
        ...
    def select_dtypes(self, include: Any=None, exclude: Any=None) -> Union[Data]:
        ...
    def sem(self, axis: Any=None, skipna: Any=None, level: Any=None, ddof: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def set_axis(self, labels: Any=None, axis: Any=None, inplace: Any=None) -> Union[Data]:
        ...
    def set_flags(self, copy: Any=None, allows_duplicate_labels: Any=None) -> Union[Data]:
        ...
    def set_index(self, keys: Any=None, drop: Any=None, append: Any=None, inplace: Any=None, verify_integrity: Any=None) -> Union[Data]:
        ...
    def shift(self, periods: int=None, freq: Any=None, axis: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def skew(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def slice_shift(self, periods: int=None, axis: Any=None) -> Union[Data]:
        ...
    def sort_index(self, axis: Any=None, level: Any=None, ascending: Any=None, inplace: Any=None, kind: str=None, na_position: str=None, sort_remaining: Any=None, ignore_index: Any=None, key: Any=None) -> Union[Data]:
        ...
    def sort_values(self, by: Any=None, axis: Any=None, ascending: Any=None, inplace: Any=None, kind: str=None, na_position: str=None, ignore_index: Any=None, key: Any=None) -> Union[Data]:
        ...
    def squeeze(self, axis: Any=None) -> Union[Union[Data,Data.Series,int]]:
        ...
    def stack(self, level: Any=None, dropna: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def std(self, axis: Any=None, skipna: Any=None, level: Any=None, ddof: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def sub(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    @overload
    def subtract(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    @overload
    def subtract(self, other: Any) -> Any:
        ...
    def sum(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None, min_count: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def swapaxes(self, axis1: Any=None, axis2: Any=None, copy: Any=None) -> Union[Data]:
        ...
    def swaplevel(self, i: Any=None, j: Any=None, axis: Any=None) -> Union[Data]:
        ...
    def tail(self, n: int=None) -> Union[Data]:
        ...
    def take(self, indices: Any=None, axis: Any=None, is_copy: Any=None) -> Union[Data]:
        ...
    def to_clipboard(self, excel: Any=None, sep: str=None) -> Union[Any]:
        ...
    def to_csv(self, path_or_buf: Any=None, sep: str=None, na_rep: str=None, float_format: str=None, columns: Any=None, header: Any=None, index: Any=None, index_label: Any=None, mode: str=None, encoding: str=None, compression: Any=None, quoting: int=None, quotechar: str=None, line_terminator: str=None, chunksize: int=None, date_format: str=None, doublequote: Any=None, escapechar: str=None, decimal: str=None, errors: str=None, storage_options: Any=None) -> Union[str]:
        ...
    def to_dict(self, orient: str=None, into: Any=None) -> Union[Any]:
        ...
    def to_excel(self, excel_writer: Any=None, sheet_name: str=None, na_rep: str=None, float_format: str=None, columns: Any=None, header: Any=None, index: Any=None, index_label: Any=None, startrow: Any=None, startcol: Any=None, engine: Any=None, merge_cells: Any=None, encoding: Any=None, inf_rep: Any=None, verbose: Any=None, freeze_panes: Any=None, storage_options: Any=None) -> Union[Any]:
        ...
    def to_feather(self, path: Any=None) -> Union[Any]:
        ...
    def to_gbq(self, destination_table: str=None, project_id: str=None, chunksize: int=None, reauth: Any=None, if_exists: str=None, auth_local_webserver: Any=None, table_schema: Array[Map[str, str]]=None, location: str=None, progress_bar: Any=None, credentials: Any=None) -> Union[Any]:
        ...
    def to_hdf(self, path_or_buf: Any=None, key: str=None, mode: str=None, complevel: int=None, complib: str=None, append: Any=None, format: str=None, index: Any=None, min_itemsize: Union[int,Map[str, int]]=None, nan_rep: Any=None, dropna: Any=None, data_columns: Any=None, errors: str=None, encoding: str=None) -> Union[Any]:
        ...
    def to_json(self, path_or_buf: Any=None, orient: str=None, date_format: str=None, double_precision: int=None, force_ascii: Any=None, date_unit: str=None, default_handler: Callable[[Union[Any]], Union[Any]]=None, lines: Any=None, compression: Any=None, index: Any=None, indent: int=None, storage_options: Any=None) -> Union[str]:
        ...
    def to_latex(self, buf: Any=None, columns: Any=None, col_space: Any=None, header: Any=None, index: Any=None, na_rep: Any=None, formatters: Any=None, float_format: Any=None, sparsify: Any=None, index_names: Any=None, bold_rows: Any=None, column_format: Any=None, longtable: Any=None, escape: Any=None, encoding: Any=None, decimal: Any=None, multicolumn: Any=None, multicolumn_format: Any=None, multirow: Any=None, caption: Any=None, label: Any=None, position: Any=None) -> Union[Any]:
        ...
    def to_markdown(self, buf: Any=None, mode: str=None, index: Any=None, storage_options: Any=None) -> Union[str]:
        ...
    def to_parquet(self, path: Any=None, engine: str=None, compression: str=None, index: Any=None, partition_cols: Array[str]=None, storage_options: Any=None) -> Union[Any]:
        ...
    def to_period(self, freq: Any=None, axis: Any=None, copy: Any=None) -> Union[Data]:
        ...
    def to_pickle(self, path: Any=None, compression: Any=None, protocol: int=None, storage_options: Any=None) -> Union[Any]:
        ...
    def to_records(self, index: Any=None, column_dtypes: Any=None, index_dtypes: Any=None) -> Union[Any]:
        ...
    def to_sql(self, name: str=None, con: Any=None, schema: Any=None, if_exists: str=None, index: Any=None, index_label: Any=None, chunksize: Any=None, dtype: Any=None, method: Any=None) -> Union[Any]:
        ...
    def to_stata(self, path: Any=None, convert_dates: Map[Any, str]=None, write_index: Any=None, byteorder: str=None, time_stamp: Any=None, data_label: str=None, variable_labels: Map[Any, str]=None, version: int=None, convert_strl: Any=None, compression: Any=None, storage_options: Any=None) -> Union[Any]:
        ...
    def to_string(self, buf: Any=None, columns: Any=None, col_space: int=None, header: Any=None, index: Any=None, na_rep: str=None, formatters: Any=None, float_format: Any=None, sparsify: Any=None, index_names: Any=None, justify: str=None, max_rows: int=None, min_rows: int=None, max_cols: int=None, show_dimensions: Any=None, decimal: str=None, line_width: int=None, max_colwidth: int=None, encoding: str=None) -> Union[str]:
        ...
    def to_timestamp(self, freq: Any=None, how: str=None, axis: Any=None, copy: Any=None) -> Union[Data]:
        ...
    def to_xarray(self) -> Union[Any]:
        ...
    def to_xml(self, path_or_buffer: Any=None, index: Any=None, root_name: str=None, row_name: str=None, na_rep: str=None, attr_cols: Union[Array[str],str]=None, elem_cols: Union[Array[str],str]=None, namespaces: Map[str, str]=None, prefix: str=None, encoding: str=None, xml_declaration: Any=None, pretty_print: Any=None, parser: str=None, stylesheet: Any=None, compression: Any=None, storage_options: Any=None) -> Union[str]:
        ...
    def transform(self, func: Any=None, axis: Any=None) -> Union[Data]:
        ...
    def transpose(self, copy: Any=None) -> Union[Data]:
        ...
    def truediv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def truncate(self, before: Any=None, after: Any=None, axis: Any=None, copy: Any=None) -> Union[Data]:
        ...
    def tshift(self, periods: int=None, freq: Any=None, axis: Any=None) -> Union[Data]:
        ...
    def tz_convert(self, tz: Any=None, axis: Any=None, level: Any=None, copy: Any=None) -> Union[Data]:
        ...
    def tz_localize(self, tz: Any=None, axis: Any=None, level: Any=None, copy: Any=None, ambiguous: Any=None, nonexistent: str=None) -> Union[Data]:
        ...
    def unstack(self, level: Any=None, fill_value: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def update(self, other: Any=None, join: str=None, overwrite: Any=None, filter_func: Any=None, errors: str=None) -> Union[Any]:
        ...
    def value_counts(self, subset: Any=None, normalize: Any=None, sort: Any=None, ascending: Any=None, dropna: Any=None) -> Union[Data.Series]:
        ...
    def var(self, axis: Any=None, skipna: Any=None, level: Any=None, ddof: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def where(self, cond: Any=None, other: Any=None, inplace: Any=None, axis: Any=None, level: Any=None, errors: Any=None, try_cast: Any=None) -> Union[Data]:
        ...
    def xs(self, key: Any=None, axis: Any=None, level: Any=None, drop_level: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    @classmethod
    def dataFrame(cls, data: Union[Map[str, Any],Array[Any]]=None, index: Any=None, columns: Any=None, dtype: Any=None, copy: bool=None) -> Union[Data]:
    """
    Construct a {@link Data} manually. Corresponds to pd.DataFrame constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def series(cls, data: Any=None, index: Any=None, dtype: Any=None, name: Any=None, copy: bool=None, fastpath: bool=None) -> Union[Data.Series]:
    """
    Construct a {@link Data.Series} manually. Corresponds to pd.Series constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def index_(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, tupleize_cols: Any=None) -> Union[Union[Data.Index,Data.MultiIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Float64Index,Data.Int64Index]]:
    """
    Construct a {@link Data.Index} manually. Corresponds to pd.Index constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def rangeIndex(cls, start: Any=None, stop: int=None, step: int=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.RangeIndex]:
    """
    Construct a {@link Data.RangeIndex} manually. Corresponds to pd.RangeIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def categoricalIndex(cls, data: Any=None, categories: Any=None, ordered: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.CategoricalIndex]:
    """
    Construct a {@link Data.CategoricalIndex} manually. Corresponds to pd.CategoricalIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def multiIndex(cls, levels: Any=None, codes: Any=None, sortorder: int=None, names: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, verify_integrity: Any=None) -> Union[Data.MultiIndex]:
    """
    Construct a {@link Data.MultiIndex} manually. Corresponds to pd.MultiIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def intervalIndex(cls, data: Any=None, closed: str=None, dtype: Any=None, copy: bool=None, name: Any=None, verify_integrity: Any=None) -> Union[Data.IntervalIndex]:
    """
    Construct a {@link Data.IntervalIndex} manually. Corresponds to pd.IntervalIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def datetimeIndex(cls, data: Any=None, freq: Any=None, tz: Any=None, normalize: bool=None, closed: str=None, ambiguous: Any=None, dayfirst: bool=None, yearfirst: bool=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.DatetimeIndex]:
    """
    Construct a {@link Data.DatetimeIndex} manually. Corresponds to pd.DatetimeIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def timedeltaIndex(cls, data: Any=None, unit: Any=None, freq: Any=None, copy: bool=None, name: Any=None) -> Union[Data.TimedeltaIndex]:
    """
    Construct a {@link Data.TimedeltaIndex} manually. Corresponds to pd.TimedeltaIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def periodIndex(cls, data: Any=None, ordinal: Any=None, freq: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, year: Any=None, month: Any=None, quarter: Any=None, day: Any=None, hour: Any=None, minute: Any=None, second: Any=None) -> Union[Data.PeriodIndex]:
    """
    Construct a {@link Data.PeriodIndex} manually. Corresponds to pd.PeriodIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def int64Index(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.Int64Index]:
    """
    Construct a {@link Data.Int64Index} manually. Corresponds to pd.Int64Index constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def uInt64Index(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.UInt64Index]:
    """
    Construct a {@link Data.UInt64Index} manually. Corresponds to pd.UInt64Index constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def float64Index(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.Float64Index]:
    """
    Construct a {@link Data.Float64Index} manually. Corresponds to pd.Float64Index constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def read_csv(cls, filepath_or_buffer: Union[str,ContentValue], spec: Data.ManualOpSpecs.ReadCsvSpec=None) -> Union[Data]:
    """
    Read a comma-separate values file and construct a {@link Data} out of the contents.
    
    Example usage:
    ```py
    Reading an individual csv file.
    >>> dt = c3.Data.read_csv('path-to-your-file/your-file.csv')
    
    Reading multiple csv files with the same schema inside a folder.
    >>> dt = c3.Data.read_csv('path-to-your-folder/')
    
    Reading from client "local" folder. These are files local to the calling (e.g. SDK) process.
    >>> dt = c3.PyDataTable.read_csv('local:///path-to-your-folder/')
    ```
    
    @param path
              c3 file path that contains the data. See {@link Dataset#fromFiles} for specifics on semantics.
    @param parse_dates
              list of names of "columns" in the header to interpret as datetime.
    @return a {@link Data} that contains the data of the file(s).
    """
        ...
    @classmethod
    def read_csv_glob(cls, filepath_or_buffer: str, spec: Data.ManualOpSpecs.ReadCsvGlobSpec=None) -> Union[Data]:
    """
    Simultaneously read data from multiple .csv files.
    `path` should be constructed as a glob. Only implemented for Modin execution mode
    
    Example usage:
    ```py
    >>> dt = c3.Data.read_csv_glob('path-to-your-file/*.csv')
    ```
    
    @param filepath_or_buffer
              c3 file path that contains the data.
    @param parse_dates
              list of names of "columns" in the header to interpret as datetime.
    @return a {@link Data} that contains the data of the file(s).
    """
        ...
    @classmethod
    def _read_sql_query(cls, sql: str, url: str, http_path: str, parse_dates: Any=None) -> Union[Data]:
    """
    Reads SQL query into a DataFrame equivalent.
    
    @param sql
              SQL query string
    @param url
              database connection path for the sql_alchemy engine
    @param http_path
              http_path for the sql_alchemy engine
    @param parse_dates
              list of column names to parse as dates
    """
        ...
    @classmethod
    def merge_asof(cls, left: Data=None, right: Data=None, on: Any=None, left_on: Any=None, right_on: Any=None, left_index: bool='false', right_index: bool='false', by: Any=None, left_by: Any=None, right_by: Any=None, suffixes: Any=None, tolerance: Any=None, allow_exact_matches: Any=None, direction: str='"backward"') -> Union[Data]:
    """
     Perform a merge by key distance.
    
     Both Data must be sorted by the key.
    
     For each row in the left Data:
       - A "backward" search chooses the last row in the right Data whose
         'on' key is less than or equal to the left's key.
       - A "forward" search chooses the first row in the right Data whose
         'on' key is greater than or equal to the left's key.
       - A "nearest" search chooses the row in the right Data whose 'on'
         key is closest to the left's key.
    
     @param left
            Data to merge
     @param right
            Data to merge
     @param on
            Column name to join on, needs to be present in both Data. The column being merged on must be ordered and
    numeric must be a numeric column (integer, float, or datetime). On or left_on/right_on must be provided.
     @param left_on
            Column name to join on in the left Data
     @param right_on
            Column name to join on in the left Data
     @param left_index
            Indicate if the index of the left Data should be used as the join key
     @param right_index
            Indicate if the index of the right Data should be used as the join key
     @param by
            List of column names or a single column name. These columns are matched prior to merging
     @param left_by
            Column name. Columns to match on in the left Data
     @param right_by
            Column name. Columns to match on in the right Data
     @param suffixes
            2-length list or sequence. Suffix applied to overlapping column names in the left and right Data, respectively
     @param tolerance
            int or time delta. Select asof tolerance from this range. The tolerance needs to be compatible with the
            designated merge index
     @param allow_exact_matches
            If True, allow matching with the same ‘on’ value during merge (greater-than-or-equal-to or less-than-or-equal-to)
            If False, don’t match the same ‘on’ value during merge (strictly greater-than or strictly less-than)
     @param direction
            Indicate to look for prior, subsequent, or closest matches during merge
    
     @return a {@link Data} representing the merged Data
    """
        ...
    @classmethod
    def concat(cls, objs: Any=None, axis: Union[int,str]='0', join: str='"outer"', ignore_index: bool='false', keys: Any=None, levels: Any=None, names: Any=None, verify_integrity: bool='false', sort: bool='false', copy: Any=None) -> Union[Data]:
    """
    Concatenate Data along a specified axis with optional logic along the other axis
    @param objs
              Mapping or sequence of Data objects. If a mapping is passed, the sorted keys will be used as the `keys`
              argument, unless it is passed, in which case the values will be selected.
    @param axis
              The axis to concatenate along
    @param join
           How to process indexes on the axis
    @param ignore_index
           When true index values along the concatenation axis are ignored.
    @param keys
           Sequence used to construct hierarchical index
    @param levels
           list of sequences.
           Levels to use for building a Multi-index. If left null, the multi-index will be inferred from keys
    @param names
           Names of each level in the resulting hierarchical index
    @param verify_integrity
           Check if the concatenated axis contains any duplicates
    @param sort
           Sorts the non-concatenation axis when join='outer' and it is not already aligned
    @param copy
           Does not copy data unnecessarily when false   *
    @return a {@link Data} representing the concatenated Data
    """
        ...
    @classmethod
    def json_normalize(cls, data: Any, record_path: Any=None, meta: Any=None, meta_prefix: Any=None, record_prefix: Any=None, errors: str='"raise"', sep: str='"."', max_level: int=None) -> Union[Data]:
    """
    Normalize semi-structured JSON data into a Data
    @param data
              Unserialized JSON objects
    @param record_path
              Path in each object to list of records. If not passed, data will be assumed to be an array of records.
    @param meta
           Fields to use as metadata for each record in resulting table.
    @param meta_prefix
           If True, prefix records with dotted (?) path, e.g. foo.bar.field if meta is [‘foo’, ‘bar’].
    @param record_prefix
           If True, prefix records with dotted (?) path, e.g. foo.bar.field if path to records is [‘foo’, ‘bar’].
    @param errors
           Configures error handling.
           ‘ignore’ : will ignore KeyError if keys listed in meta are not always present.
           ‘raise’ : will raise KeyError if keys listed in meta are not always present.
    @param sep
           Nested records will generate names separated by sep. e.g., for sep=’.’, {‘foo’: {‘bar’: 0}} -> foo.bar.
    @param max_level
           Max number of levels(depth of dict) to normalize. if None, normalizes all levels.
    
    @return a {@link Data} representing the structured JSON data
    """
        ...
    @classmethod
    def from_dict(cls, data: Any=None, orient: Any=None, dtype: Any=None, columns: Any=None) -> Union[Data]:
        ...
    @classmethod
    def from_records(cls, data: Any=None, index: Any=None, exclude: Any=None, columns: Any=None, coerce_float: Any=None, nrows: Any=None) -> Union[Data]:
        ...
    def iter(self) -> Union[Iterator[Any]]:
    """
    Iterate over info axis.
    """
        ...
    def _iter_(self) -> Union[Any]:
    """
    Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
    """
        ...
    def zip(self, spec: OpSpec, other: Iterable[T], merge: Callable[[Union[Any], Union[int], Union[Any], Union[int]], Union[R]], elementType: ValueType=None) -> Iterable[R]:
    """
    Generates a Iterable from the result of applying a binary operator against elements of Iterable.
    The return type of the binary operator must match rt.
    @elementType
           The return value type of the operator/ the element type of the returned Iterable
    @spec
           Configures behavior of this method based on {@link OpSpec#repeatLast}
    @other
           Other Iterable to apply operator on
    @merge
           Binary operator to apply to elements of this and other Iterable at matching positions
    @return the generated Iterable with return type rt.
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
    def _setItem_(self, key: Any, value: Any) -> None:
    """
    Implements the square bracket setter `obj[item] = value`
    @param key
            item associated with the element to set value for.
    @param value
            value to set element to.
    """
        ...
    def _removeItem_(self, key: Any) -> None:
    """
    Implements the `del` or equivalent operator
    @param key
      item associated with the element to remove.
    """
        ...
    def addition(self, other: Any) -> Any:
        ...
    def matrixMultiply(self, other: Any) -> Any:
        ...
    def trueDivision(self, other: Any) -> Any:
        ...
    def floorDivision(self, other: Any) -> Any:
        ...
    def modulo(self, other: Any) -> Any:
        ...
    def power(self, other: Any, modulus: Any=None) -> Any:
        ...
    def reflectedAddition(self, other: Any) -> Any:
        ...
    def reflectedSubtract(self, other: Any) -> Any:
        ...
    def reflectedMultiply(self, other: Any) -> Any:
        ...
    def reflectedMatrixMultiply(self, other: Any) -> Any:
        ...
    def reflectedTrueDivision(self, other: Any) -> Any:
        ...
    def reflectedFloorDivision(self, other: Any) -> Any:
        ...
    def reflectedModulo(self, other: Any) -> Any:
        ...
    def reflectedPower(self, other: Any, modulus: Any=None) -> Any:
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
    def logicalAnd(self, other: Any) -> Any:
        ...
    def logicalOr(self, other: Any) -> Any:
        ...
    def logicalXor(self, other: Any) -> Any:
        ...
    def reflectedLogicalAnd(self, other: Any) -> Any:
        ...
    def reflectedLogicalOr(self, other: Any) -> Any:
        ...
    def reflectedLogicalXor(self, other: Any) -> Any:
        ...
    def _repr_(self) -> Union[str]:
    """
    Base implementation of Python __repr__ protocol to use {@link DataGrid#toString}.
    """
        ...
    def _reprHtml_(self) -> Union[str]:
    """
    Base implementation of Python __reprHtml__ protocol to use {@link DataGrid#toHtml}.
    """
        ...
    def toNegative(self) -> Any:
        ...
    def toPositive(self) -> Any:
        ...
    def toAbsolute(self) -> Any:
        ...
    def toInverted(self) -> Any:
        ...
    def toRounded(self, decimals: int=None) -> Any:
        ...
    def _bool_(self) -> bool:
    """
    Determines if this value is truth or falsy
    """
        ...
    def _this(self) -> Any:
    """
    @return native object with all fields
    """
        ...
    def renderer(self) -> Union[HtmlRenderer]:
    """
    Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
    null may be returned. The implementation must be available within the browser (typically `js-client`).
    """
        ...
    def contains(self, element: Any) -> bool:
    """
    @return `true` if this Data contains provided element.
    """
        ...
    def valueType(self) -> ValueType:
    """
    C3 ValueType of this instance.
    """
        ...
    @classmethod
    def valueTypeOf(cls, type: Type, failIfNot: bool=None) -> Union[ValueType]:
    """
    Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
    considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
    
    @see ValueType#instanceType
    """
        ...
    def _length_(self) -> int:
    """
    Implements the js `.length` property or py `len()` support.
    @return the number of elements in this instance
    """
        ...
    def config(self, secrets: bool=None) -> DataConfig:
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
    def typeConfig(cls) -> DataConfig:
    """
    @return type configuration for the given {@link Configurable} type.
    E.g. {@see REST} & {@see RestConfig}
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
    def _shape(self) -> Union[Array[int]]:
        ...
    def dataType(self) -> TupleType:
    """
    @return {@link TupleType} describing this Data's schema: (name, value) pairs mapping column name to inferred
            {@link ValueType} for each column.
    """
        ...
    def elementType(self) -> ValueType:
    """
    @return {@link ValueType} of elements in this Data as a dynamic Obj reference type
    """
        ...
    @classmethod
    def lazyEvaluationMode(cls) -> bool:
    """
    Returns true if we are in lazy evaluation mode. If false, we evaluate operations on Data eagerly
    """
        ...
    @classmethod
    def setEvaluationMode(cls, lazy: bool) -> None:
    """
    @param lazy
            Sets the evaluation mode to either lazy or eager if specified.
    """
        ...
    @classmethod
    def cprofileEnabled(cls) -> bool:
    """
    If true, the python function annotated by @profile will be profiled by cprofile
    """
        ...
    @classmethod
    def setCprofileEnabled(cls, enabled: bool) -> None:
    """
    Function to enable cprofile on the concrete data type
    """
        ...
    @overload
    def each(self, action: Callable[[Union[Any], Union[int]]]) -> None:
    """
    Execute the specified lambda against each value of the collection. The first lambda argument is the value and the
    second is the index.
    """
        ...
    @overload
    def each(self, action: Callable[[Union[Any]]]) -> None:
    """
    Execute the specified lambda against each value of the collection. The lambda argument is the value.
    """
        ...
    @overload
    def eachWhile(self, action: Callable[[Union[Any], Union[int]], bool]) -> bool:
    """
    Invokes action for each element while given action returns `true`. Returns `true` if provided action did not
    interrupt iteration. The first lambda argument is the value and the second is the index.
    """
        ...
    @overload
    def eachWhile(self, action: Callable[[Union[Any]], bool]) -> bool:
    """
    Invokes action for each element while given action returns `true`. Returns `true` if provided action did not
    interrupt iteration. The lambda argument is the value.
    """
        ...
    @classmethod
    def fromCollection(cls, col: Union[Collection[Obj],Collection[Tuple]], dataset: Dataset=None, include: str=None) -> Union[Data.Persisted]:
    """
    @return an instance of Data from the provided collection of {@link Obj}s or {@link Tuple}s
    @param col
           Collection from which Data needs to be constructed
    Supports all C3 collection types except map
    For instance , for collection<Obj>:
    ```js
    Data.fromCollection(Bear.array(Bear.make().withName("B1")))
    For Collection <Tuple> :
    tupleType = ValueType.fromString("{ key: string, count: int, dim: Dimension }")
    tupleValue = tupleType.makeValue({ key: 'foo', count: 14, dim: { value: 22.33 } })
    Data.fromCollection(C3.Array.of(tupleType, tupleValue))
    ```
    @param dataset
           dataset on which this Data needs to be created
    @param include
           If specified, only those fields provided as part of include will be included on the result Data
    @return an instance of Data from the provided collection of {@link Obj}s or {@link Tuple}s
    """
        ...
    @classmethod
    def fromTuple(cls, tuple: Tuple, dataset: Dataset=None) -> Union[Data.Persisted]:
    """
    @return an instance of Data from the provided tuple with structure of {columnName:[value]}
    For instance, make a tuple of
    {type:{subject: [string], timestamp:[datetime], value:[double]},
    subject:['a','b'], timestamp:[2000-01-01, 2000-01-02]
    value: [1,2]}
    calling Data.fromTuple(tuple) returns :
      subject  timestamp  value
    0       a 2000-01-01    1.0
    1       b 2000-01-02    2.0
    """
        ...
    def toDataPandas(self, ds: Dataset=None) -> Union[Data.Pandas]:
    """
    Converts this data to a {@link Data.Pandas}. If parent dataset is not provided then will use default data set.
    """
        ...
    def apply(self, func: Callable[[Union[Any]], Union[Any]], axis: int=None) -> Union[Data]:
    """
    Apply a function along an axis of the {@link Data}.
    
    Supports a subset of arguments to
    [pandas.DataFrame.apply](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.apply.html)
    
    Example usage:
    ```py
    >>> df = pd.DataFrame({"a" : ["foo", "foo", "baz", "qux"],
    ...                    "b" : [10, 20, 30, 30],
    ...                    "c" : [1, 2, 3, 4]})
    >>> dt = c3.Data.from_pandas(df)
    >>> dt.apply(lambda x: x+2, axis=1)
          a   b  c
    0  foo2  12  3
    1  foo2  22  4
    2  baz2  32  5
    3  qux2  32  6
    
    >>> def add_two(x):
            return x+2
    >>> dt.apply(add_two, axis=1)
          a   b  c
    0  foo2  12  3
    1  foo2  22  4
    2  baz2  32  5
    3  qux2  32  6
    
    @param func
            lambda to apply.
    @param axis
            axis along which the function is applied: 0 applies function to each column, 1 applies to each row.
    @return a {@link Data} that represents the result of applying the given function along the given axis of the original data.
    """
        ...
    def setItem(self, selector: Any, value: Any) -> Union[Data]:
    """
    Mutably sets selected values in this Data.
    @param selector
           Determines criteria for selection. Legal row selectors are:
               - single column label (selects column)
               - array of column label(s) (selects columns)
               - array of booleans (must be same length as this.shape[1], selects rows)
               - single-column Data (Series) of booleans (must be same length as this.shape[1], selects rows)
           Cannot be null. Deos not support slicing.
    @param value
           Value to set for selected item(s). Can be a:
               - value
               - array of values
               - single-column Data (Series) of values
               - Data
               - 2D array
    """
        ...
    def remove(self, selector: Any) -> None:
        ...
    @classmethod
    def profileFolder(cls) -> str:
    """
    Get the profile folder
    """
        ...
    @classmethod
    def setProfileFolder(cls, folder: str) -> None:
    """
    Set the profile folder
    @param folder
           All profile files will be saved in this folder. This folder could be tmp folders, which will be deleted
           after the ttl time specified in {@link TmpFileSpec}
    """
        ...
    @classmethod
    def fromFile(cls, file: File, spec: Data.SourceSpec) -> Union[Data]:
    """
    Create a `Data` instance from a {@link File} with user provided spec
    Example usage:
    ```py
    >>> file = File.fromString("file.csv")
    ```
    
    @param file
              File or the given folder where files are present
    @param Spec
             {@link Data.SourceSpec},Configuration options for reading the data
    @return a {@link Data} that contains the data of the file(s).
    """
        ...
    def equal_(self, other: Data) -> bool:
    """
    Test whether two objects contain the same elements
    """
        ...
    @classmethod
    def fromTuples(cls, tupleFields: Map[str, ValueType], data: Array[Map[str, Any]], dataset: Dataset=None) -> Data:
    """
    @param tupleFields
            (key - field name, value - field type) for the dynamic object element type.
    @param data
            list of elements to be populated into the table, in form of map with keys matching {@link #tupleFields}.
    @param dataset
            Dataset to attach this Data to. If null, use the `default` dataset.
    @return a newly instantiated {@link Data} with dynamic object element type.
    """
        ...
    def repr(self) -> Union[str]:
    """
    {@link Data#_repr_} with a better name
    """
        ...
    def toDataSpec(self) -> Union[Data.Spec]:
    """
    Convert {@link Data} to {@link Data.Spec}
    """
        ...
    @classmethod
    def fromTimeseries(cls, ts: Timeseries[Any]) -> Union[Data]:
    """
    Create instance of Data from Timeseries
    """
        ...
    def getItem(self, fst: Any=None) -> Union[Any]:
    """
    Operation represents using the `_item_` (bracket syntax) protocol on a Pandas DataFrame. E.g. `df[fst]`
    """
        ...
    def getIloc(self, fst: Any=None, snd: Any=None) -> Union[Any]:
    """
    Operation represents using the `_item_` (bracket syntax) protocol on a Pandas iloc Indexer.
    should pass in an empty Slice object if fst value is not provided but the snd value is.
    E.g. `df.iloc[fst]`, or `df.iloc[:, snd]`, or `df.iloc[fst, snd]`
    """
        ...
    def getLoc(self, fst: Any=None, snd: Any=None) -> Union[Any]:
    """
    Operation represents using the `_item_` (bracket syntax) protocol on a Pandas loc Indexer.
    should pass in an empty Slice object if fst value is not provided but the snd value is.
    E.g. `df.loc[fst]`, or `df.loc[:, snd]`, or `df.loc[fst, snd]`
    """
        ...
    def setLoc(self, fst: Any, value: Any, snd: Any=None) -> Union[Data]:
    """
    Mutably sets selected values in this Data.
    @param fst
           Determines criteria for row selection. Legal row selectors are:
               - single row label
               - array of row label(s)
               - {@link Slice} of row labels
               - array of booleans (must be same length as this.shape[0])
               - single-column Data (Series) of booleans (must be same length as this.shape[0])
           Cannot be null. Selecting all rows is represented as an empty Slice (df.loc[:, ...])
    @param snd
           Determines criteria for column selection. Legal column selectors are same as row selectors, replacing "row
           label" with "column name". If null, all columns are selected.
    @param value
           Value to set for selected row/column intersection. Can be a:
               - value
               - array of values
               - single-column Data (Series) of values
               - Data
               - 2D array
    
    @see DataLocIndexer#set
    """
        ...
    def setIloc(self, fst: Any, value: Any, snd: Any=None) -> Union[Data]:
    """
    Mutably sets selected values in this Data.
    @param fst
           Determines criteria for row selection. Legal row selectors are:
               - single row index
               - array of row indices
               - {@link Slice} of row indices
               - array of booleans (must be same length as this.shape[0])
               - single-column Data (Series) of booleans (must be same length as this.shape[0])
           Cannot be null. Selecting all rows is represented as an empty Slice (df.iloc[:, ...])
    @param snd
           Determines criteria for column selection. Legal column selectors are same as row selectors, replacing "row
           label" with "column name". If null, all columns are selected.
    @param value
           Value to set for selected row/column intersection. Can be a:
               - value
               - array of values
               - single-column Data (Series) of values
               - Data
               - 2D array
    
    @see DataIlocIndexer#set
    """
        ...
    @classmethod
    def _new_data_name(cls, prefix: str) -> str:
    """
    Return a unique ID for a new Data
    """
        ...
    @classmethod
    def _numpy_to_pandas_native(cls, ndarray: Any) -> Any:
    """
    Helper function to convert a numpy array into a pandas dataframe, used by {@link #from_numpy}.
    
    @param ndarray
              the numpy array to convert
    @return a pandas dataframe
    """
        ...
    @classmethod
    def fromDataFlow(cls, dataFlow: PkgInference, filter: Callable[[DataImpl.Lazy], DataImpl.Lazy]=None) -> Data:
    """
    Creates a Data from a PkgInference.Populate the Data.Lazy chain by visiting the pkgInference in a
    topologicalSort order.
    Additional operations on Data.Lazy can be added with the filter lambda operations.
    """
        ...
    def toLazy(self) -> Union[Data.Lazy]:
    """
    Removes this Data from its Dataset. Error will be thrown if calling type is not {@link Data.Stateful}.
    """
        ...
    def toPersisted(self, tableName: str=None, id: str=None) -> Data:
    """
    @param tableName
       the table name for this Data.Persisted.
    @param id
       the id for this Data.Persisted.
    @return a persisted instance of this Data or this instance, if this is already persisted. Persistence means that
    the storage backing the instance of Data is non-ephemeral.
    Note that the input Data cannot be empty.
    """
        ...
    def toPersistedLocal(self) -> Data:
    """
    @return a local persisted instance of this Data or this instance, if this is already persisted.
    See {@link Data.Persisted.Local}.
    """
        ...
    @classmethod
    def reflectedOperators(cls) -> Union[Set[str]]:
    """
    Set of reflected operators from Pandas
    """
        ...
    def and(self, other: Any) -> Union[Data]:
    """
    Perform a bitwise "and" operation on the Data with "other"
    """
        ...
    def or(self, other: Any) -> Union[Data]:
    """
    Perform a bitwise "or" operation on the Data  with "other"
    """
        ...
    def assign(self, kwargs: Map[str, Union[Union[Array[Any],Data,Data.Series]]]=None) -> Union[Data]:
    """
    Implements pandas assign semantics from pandas version 1.3.4.
    @param kwargs
           The map or dictionary of new column names to their new values. Can be:
               - list
               - Data.Series
               - Data only if it has 1 column
    @return
           {@link Data} with new column names specified by kwargs
    """
        ...
    @classmethod
    def _valueTypeToPandasDtype(cls, value: ValueType) -> Union[str]:
        ...
    def flatten(self, include: str=None, level: int=None) -> Union[Data,Data.Series]:
    """
     Flatten specified columns. The behavior of flatten is different when:
       column dtype is a list-like: list is flattened, similar to `Data#explode`
       column dtype is a map-like: dict is expanded such that the keys of the dict become new columns in the Data
     Only one of include or level can be specified at a time, otherwise an error will be thrown.
     @param include
            A comma separated set of columns that determine what data to return from this operation, `a.b.c, z.x`
     @param level
            The depth at which to flatten and return all nested data
     @return
            {@link Data} when multiple columns are returned using include or when using level on a {@link Data} with
                         multiple columns
            {@link Data.Series} when a single column is returned using include
    
     Examples:
     ```py
     data = c3.Data.dataFrame({"a": [{"aa": 1, "ab": 1}, {"aa": 2, "ab": 2}], "b": [[{"bb": 1}], [{"bb": 2}]]})
     data.flatten("a") ->
      0 {"aa": 1, "ab": 1}
      1 {"aa": 2, "ab": 2}
    
     data.flatten("a.aa")
    .     "aa"
      0  1
      1  2
    
     data.flatten("b.bb") ->
    .    "bb"
      0  1
      1  2
    
     data.flatten("a.ab, b.bb") ->
    .    "a.ab" "b.bb"
      0  1      1
      1  2      2
    
     data.flatten(level=-1) ->
    .        "a.aa"      "a.ab"    "b.bb"
      0      1           1         1
      1      2           2         2
     ```
    """
        ...
    def _align(self, other: Any=None, join: str=None, axis: Any=None, level: Any=None, copy: Any=None, fill_value: Any=None, method: str=None, limit: Any=None, fill_axis: Any=None, broadcast_axis: Any=None) -> Union[Array[Any]]:
    """
    Align two objects on their axes with the specified join method.
    
    Join method is specified for each axis Index.
    see: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.align.html
    """
        ...
    def columnNames(self) -> Array[str]:
    """
    Returns column names as an array of string
    """
        ...
    def hasColumn(self, colName: Any) -> bool:
    """
    Checks whether this instance has the input column name
    """
        ...
    def hasColumns(self, colNames: Array[Any]) -> bool:
    """
    Checks whether this instance has all the input column names
    """
        ...
    def slice(self, spec: Data.SliceSpec=None) -> Union[Data]:
    """
    @return a sliced {@link Data} instance based on the spec provided. This is used internally in {@link #stream} to
    yield {@link Data} elements in the resulting stream.
    """
        ...
    def stream(self, spec: Data.StreamSpec=None) -> Data.Stream:
    """
    @return a stream of this {@link Data} where each element is a "slice" of data points of the {@link Data}, according
               to the dimensions specified by the caller.
    Usage:
    ```python
    stream_data = this.stream(rowCount=500)
    while stream_data.hasNext():
       df = stream_data.next()
       ...
    stream_data.close()
    ```
    """
        ...
    def isEmpty(self) -> bool:
    """
    @return True if this Data is empty.
    """
        ...
    @overload
    def _first(self) -> Union[Any]:
    """
    @return first element.
    """
        ...
    @overload
    def _first(self, n: int) -> Union[Data]:
    """
    @return first n element.
    """
        ...
    @overload
    def _first(self, test: Callable[[Union[Any]], bool]) -> Union[Any]:
    """
    Finds first element in this collection satisfying provided condition.
    """
        ...
    def fieldValueType(self, field: str) -> Union[ValueType]:
    """
    @return value type of a named field.
    """
        ...
    def neg(self) -> Union[Data]:
    """
    @return the unary arithmetic `-` operations.
    """
        ...
    def invert(self) -> Union[Data]:
    """
    @return the unary arithmetic `~` operations.
    """
        ...
    def toTuplesBinary(self) -> any:
    """
    Convert the Data to a binary value. This can only be done if
    the underlying object backing the Data is a Data.Pandas backed by a tuple.
    For instance, Data created either from `eval` or `evalMetrics` calls.
    """
        ...
    def toArrowIterator(self) -> ArrowIterator:
    """
    Convert the Data to an {@link ArrowIterator} which will be used to iterate through the arrow values. If this Data
    does not have tuple field or if the tuple fields can't be supported by pyarrow, this function returns null.
    """
        ...
    def toEvalMetricsResult(self) -> Union[EvalMetricsResult]:
    """
    @return {@link EvalMetricsResult} from the current instance.
    Please note that this is only supported when the source of the Data instance is {@link Evaluatable#eval} or {@link FeatureEvaluatable#evalFeatureSetBatch}
    and there are no other operations before calling **toEvalMetricsResult**.
    """
        ...
    def isTimeseries(self) -> bool:
    """
    @return true if the #this is instance of Timeseries or #isEvaluatableEval and can return single Timeseries
    """
        ...
    def inferredInterval(self) -> Union[str]:
    """
    @return the inferred {@link Interval}.
    If {@link #ths} is an instance of {@link Timeseries} or {@link #isEvaluatableEval}, then the interval is
    retrieved from the **Timeseries** or the associated {@link EvalSpec} respectively. In other cases, it's inferred
    from the {@link Data.Flow}.
    Please note an empty string may be returned if the Interval could not be inferred.
    """
        ...
    def dataDefaultAgg(self) -> Union[str]:
    """
    @return default aggregation function for this data
    """
        ...
    def sources(self) -> Array[Data]:
    """
    Extracts all depending {@link Data.Lazy} instances that themselves don't depend on any other {@link Data.Lazy}
    """
        ...
    @classmethod
    def fromEvalSpec(cls, subjectType: Type[[MlSubject]], spec: EvalSpec) -> Data.Lazy:
    """
    Creates feature from {@link Evaluatable#eval}
    """
        ...
    @overload
    @classmethod
    def fromMetric(cls, subjectType: Type[[FeatureEvaluatable]], legacy: LegacyMetric) -> Data.Lazy:
    """
    Creates Data.Lazy instance from {@link LegacyMetric}
    """
        ...
    @overload
    @classmethod
    def fromMetric(cls, subjectType: Type[[FeatureEvaluatable]], interval: str, metric: Union[str,Metric]=None) -> Data.Lazy:
    """
    Creates Data.Lazy instance from metric & interval
    """
        ...
    @classmethod
    def fromFormula(cls, subjectType: Type[[FeatureEvaluatable]], formula: Formula) -> Data.Lazy:
    """
    Creates a {@link Data.Lazy} instance from a {@link Formula} instance
    """
        ...
    @classmethod
    def cacheParentMethods(cls) -> Union[Set[str]]:
    """
    Some methods, such as {@link Data#head}, are generally called once without using the result for subsequent
    operations. For these methods, it makes sense to additionally cache the parent operation, as we anticipate the
    immediate results will not be used for further operations, but rather operations will be called on the parent.
    @return a list of the name of all such methods on Data
    """
        ...
    def _toPandas(self, datasetId: str, returnNullIfNotCached: bool=None) -> Union[Data.Pandas]:
        ...
    @classmethod
    def pushStream(cls, spec: Data.PushStreamSpec=None) -> Data.PushStream:
    """
    Return a stream for writing data.
    """
        ...
    def metadata(self) -> Data.Persisted.Metadata:
    """
    Holds Metadata on this {@link Data.Persisted}
    """
        ...
    @classmethod
    def setDefaultsForPushStreamSpec(cls, spec: Data.PushStreamSpec) -> Data.Persisted.PushStreamSpec:
    """
    Sets default values for a {@link Data.Persisted.PushStreamSpec} based on the given spec.
    """
        ...
    @classmethod
    def filenameForIdx(cls, idx: str, ext: str) -> str:
    """
    Returns the filename for the given index and extension.
    """
        ...
    @classmethod
    def combinePersisted(cls, data: Array[Data.Persisted], tableName: str=None, id: str=None, copy: bool=None) -> Union[Data.Persisted]:
    """
    Combine an array of {@link Data.Persisted} into one.
    @param data
       the Data.Persisted to be combined.
    @param tableName
       table name the returned Data.Persisted.
    @param id
       id for the returned Data.Persisted.
    @param copy
       if set, will copy the files to the target Data.Persisted so the sources are preserved.
    @return the combined Data.Persisted
    """
        ...
    @classmethod
    def _setDefaultsForStreamSpec(cls, spec: Data.StreamSpec=None) -> Union[Data.Persisted.StreamSpec]:
        ...
    @classmethod
    def numFilesForBaseDir(cls, baseDir: str) -> int:
    """
    @param baseDir
              the base directory to search for files.
    @return the number of files in the baseDir.
    """
        ...
    def upsertToDb(self, serType: Type[[Persistable]], batchSize: int=None, pyRuntime: str=None, spec: UpsertSpec=None) -> None:
    """
    Upsert the objs into database such that each row corresponds to a single instance of the provided **serType**. Please note that {@link Persistable.createBatch} will be used to create the instances in the db.
    """
        ...
    
    class StreamSpec(Data.StreamSpec):
        """
        Spec that controls behavior of a {@link Data.Persisted.Stream}.
        
        @remarks this represents a made instance of Data.Persisted.StreamSpec
        """
        
        sliceDimension: Optional[Map[str, int]]=None
        """
        Exact specifications of the dimensions on which to slice and how much to slice.
        Each slice will be generated based on the number of entries in these dimensions.
        An unspecified dimension denotes that there is no slicing need for that dimension.
        
        See {@link Data.SliceSpec#slice}
        
        Examples (inspired by {@link Data.FeatureSet}):
        `sliceDimension = {"subject": 10}`
        This would indicate to provide slices of 10 subjects at a time.
        
        `sliceDimension = {"subject": 1, "timestamp": 1000}`
        This would indicate to provide slices 1 subject at a time. Furthermore, within each subject, provide timestamps 1000 at a time.
        """

        rowCount: Optional[int]=None
        """
        A fixed number of rows (this follows an exactly once semantic) must be present in each element of the stream from
        {@link Data#stream}. Only the last element of the stream may have fewer number of rows if the backing content
        is exhausted.
        NOTE: this specification is intended for native (e.g. python) streams to return exact data to interface
        with native generators (e.g. keras)
        """

        outputFormat: Optional[str]=None
        """
        Specifies the output format for {@link Data.Stream#next}.
        NOTE: this specification is intended for native (e.g. python) streams to return data as e.g. `pd.DataFrame`
        """

        maxMemoryBytes: Optional[int]=None
        """
        Max memory in bytes in each slice
        """

        downloadFileLimit: Optional[int]=None

        prefetchFileCount: Optional[int]=None

        local: Optional[bool]=None
        """
        If True, use the local filesystem for streaming. Otherwise, use the remote filesystem.
        """
        def __init__(self, sliceDimension: Optional[Map[str, int]]=None, rowCount: Optional[int]=None, outputFormat: Optional[str]=None, maxMemoryBytes: Optional[int]=None, downloadFileLimit: Optional[int]=None, prefetchFileCount: Optional[int]=None, local: Optional[bool]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Data.Persisted.StreamSpec]:
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
        def fromJsonString(cls, json: str) -> Union[Data.Persisted.StreamSpec]:
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
        def fromXmlString(cls, xml: str) -> Union[Data.Persisted.StreamSpec]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted.StreamSpec]:
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
        def replaceType(self, old: Type, new: Type) -> Data.Persisted.StreamSpec:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.StreamSpec:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.StreamSpec:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.StreamSpec]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.StreamSpec]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted.StreamSpec:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.StreamSpec:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.StreamSpec:
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
        def validateObj(self) -> Data.Persisted.StreamSpec:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted.StreamSpec:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted.StreamSpec:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted.StreamSpec:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted.StreamSpec:
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
        def withoutFieldAtPath(self, path: str) -> Data.Persisted.StreamSpec:
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
        def withoutField(self, field: str) -> Data.Persisted.StreamSpec:
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
        def withoutField(self, field: FieldType) -> Data.Persisted.StreamSpec:
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
        def withoutFields(self, fields: Array[str]) -> Data.Persisted.StreamSpec:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted.StreamSpec:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Data.Persisted.StreamSpec:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted.StreamSpec:
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
        def defaultField(self, field: str) -> Data.Persisted.StreamSpec:
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
        def defaultField(self, field: FieldType) -> Data.Persisted.StreamSpec:
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
        def unsetField(self, field: str) -> Data.Persisted.StreamSpec:
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
        def unsetField(self, field: FieldType) -> Data.Persisted.StreamSpec:
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
        def removeField(self, field: str) -> Data.Persisted.StreamSpec:
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
        def removeField(self, field: FieldType) -> Data.Persisted.StreamSpec:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted.StreamSpec:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted.StreamSpec:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted.StreamSpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted.StreamSpec:
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
        def mergeJson(self, json: any) -> Data.Persisted.StreamSpec:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted.StreamSpec:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted.StreamSpec:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Data.Persisted.StreamSpec]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted.StreamSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted.StreamSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Data.Persisted.StreamSpec]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Data.Persisted.StreamSpec]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted.StreamSpec]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted.StreamSpec]]:
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
        def toBuilder(self) -> ObjBuilder[Data.Persisted.StreamSpec]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Data.Persisted.StreamSpec]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted.StreamSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.StreamSpec:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted.StreamSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Data.Persisted.StreamSpec:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.StreamSpec:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted.StreamSpec:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted.StreamSpec:
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
        def afterMake(self) -> Data.Persisted.StreamSpec:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Data.Persisted.StreamSpec:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted.StreamSpec]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted.StreamSpec:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
    
    class Local(Data.Persisted):
        """
        This type overrides the default behavior of the {@link Data.Persisted} type to use the local filesystem to
        persist/retrieve data to achieve better performance.
        
        @remarks this represents a made instance of Data.Persisted.Local
        """
        
        STATELESS_CACHE: Optional[str]=None
        """
        A dummy string used as cache key when materializing a stateless {@link Data.Lazy}.
        Materializing a stateful {@link DataRef} will use dataset().id() as cache key.
        """

        this: Optional[Any]
        """
        Target type of the static static function returning a DataImpl subtype, or instance of a target type for member function
        returning {@link Data}
        """

        action: Optional[str]
        """
        Target action returning DataImpl
        """

        args: Optional[Map[str, Any]]=None
        """
        Applied arguments
        """

        _inferredOutType: Optional[Map[str, ValueType]]=None
        """
        The inferred output column types of this lazy instance, the key is the name of the column and the value is the c3
        ValueType of that column. This output type can be used to decide what is the correct column type in python. Note that
        this field is populated when creating the lazy instance, there are two cases:
        1. If the lazy instance is a {@link Data.FeatureSet}, this field is derived from the {@link Feature.Set#_columns};
        2. If the lazy instance is from {@link Evaluatable#eval eval}, this field is derived from the {@link EvalSpec}, which
           may not be accurate in certain corner cases, i.e. this inferred output type does not match the actual returned data
           column types exactly. In this case, the data will be returned as it is.
        """

        LOCAL_FOLDER_PREFIX: Optional[str]=None
        """
        Prefix to use for loading files from the client `local` folder
        
        see {@link Data#read_csv}
        """

        DFLT_TABLE_NAME: Optional[str]=None

        DFLT_ROW_COUNT: Optional[int]=None

        DFLT_LOCAL_TABLE_NAME: Optional[str]=None
        def __init__(self, STATELESS_CACHE: Optional[str]=None, this: Optional[Any]=None, action: Optional[str]=None, args: Optional[Map[str, Any]]=None, _inferredOutType: Optional[Map[str, ValueType]]=None, LOCAL_FOLDER_PREFIX: Optional[str]=None, DFLT_TABLE_NAME: Optional[str]=None, DFLT_ROW_COUNT: Optional[int]=None, DFLT_LOCAL_TABLE_NAME: Optional[str]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Data.Persisted.Local]:
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
        def fromJsonString(cls, json: str) -> Union[Data.Persisted.Local]:
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
        def fromXmlString(cls, xml: str) -> Union[Data.Persisted.Local]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted.Local]:
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
        def replaceType(self, old: Type, new: Type) -> Data.Persisted.Local:
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
        @overload
        def isSame(self, other: Obj) -> bool:
        """
        Whether the specified instance represents exactly the same object as this instance.
        """
            ...
        @overload
        def isSame(self, other: Data) -> bool:
        """
        @param other
                data instance to compare based on the reference.
        @return true if other is the same instance as this Data else false.
        @see Data#equal_
        @see Data#equalTo
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
        @overload
        def fieldValues(self) -> Union[Array[FieldValue]]:
        """
        Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        @overload
        def fieldValues(self, names: Array[str]) -> Union[Any]:
        """
        Conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
        @param names
                names associated with the desired attribute values.
        @return the attribute values associated with the given attribute names
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Local:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Local:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Local]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Local]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted.Local:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Local:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Local:
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
        def validateObj(self) -> Data.Persisted.Local:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted.Local:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted.Local:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted.Local:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted.Local:
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
        def withoutFieldAtPath(self, path: str) -> Data.Persisted.Local:
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
        def withoutField(self, field: str) -> Data.Persisted.Local:
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
        def withoutField(self, field: FieldType) -> Data.Persisted.Local:
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
        def withoutFields(self, fields: Array[str]) -> Data.Persisted.Local:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted.Local:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Data.Persisted.Local:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted.Local:
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
        def defaultField(self, field: str) -> Data.Persisted.Local:
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
        def defaultField(self, field: FieldType) -> Data.Persisted.Local:
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
        def unsetField(self, field: str) -> Data.Persisted.Local:
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
        def unsetField(self, field: FieldType) -> Data.Persisted.Local:
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
        def removeField(self, field: str) -> Data.Persisted.Local:
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
        def removeField(self, field: FieldType) -> Data.Persisted.Local:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted.Local:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted.Local:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted.Local:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted.Local:
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
        def mergeJson(self, json: any) -> Data.Persisted.Local:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted.Local:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted.Local:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Data.Persisted.Local]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted.Local]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted.Local]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Data.Persisted.Local]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Data.Persisted.Local]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted.Local]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted.Local]]:
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
        def toBuilder(self) -> ObjBuilder[Data.Persisted.Local]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Data.Persisted.Local]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted.Local:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Local:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted.Local:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Data.Persisted.Local:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Local:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted.Local:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted.Local:
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
        def afterMake(self) -> Data.Persisted.Local:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Data.Persisted.Local:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted.Local]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted.Local:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
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
        def dereference(self) -> Data:
        """
        @return the `Data` instance referenced by this {@link DataImpl}.
        """
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
        def cache(self, ds: Dataset=None) -> Union[Data]:
        """
        Cache and return a concrete {@link DataImpl} according to this Data's execution mode.
        If a dataset is provided, the resulting {@link DataImpl} will be stateful and belong to that dataset,
        otherwise it will be stateless.
        if `cache` is invoked on a {@link Data.Lazy}, the corresponding concrete {@link DataImpl} will be cached on
        this instance with the dataset id as cache key, or {@link DataImpl.Lazy#STATELESS_CACHE} if
        no dataset is provided. see for example {@link Data.Lazy#_toPandas}.
        """
            ...
        def toDataRef(self, ds: Dataset=None) -> Union[DataRef]:
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
        def fromPySrc(cls, pySrc: str, dfs: Set[DataImpl]=None, vars: Map[str, Any]=None, dataset: Dataset=None) -> Union[Data.Persisted.Local]:
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
        def _jsDataProxy(cls, inst: Any) -> Data.Persisted.Local:
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
        def inferredOutType(self) -> Union[Map[str, ValueType]]:
            ...
        def dataArgs(self) -> Union[Map[str, DataImpl]]:
        """
        Cached helper to retrieve args which are instance of {@link DataImpl}, including "this" arg
        """
            ...
        def isEvaluatableEval(self) -> bool:
        """
        @return true if this is of type Evaluatable & action is eval {@see Evaluatable#eval}
        """
            ...
        def isSourceActionEval(self) -> bool:
        """
        @return true if the source action of this Data.Lazy instance is {@link Evaluatable#eval eval},
        {@link FeatureEvaluatable#evalFeature readFeature}, {@link FeatureEvaluatable#evalFeatures readFeatures} or
        {@link FeatureEvaluatable#evalFeatureSet readFeatureSet}
        """
            ...
        def thsLazy(self) -> DataImpl.Lazy:
        """
        Convenience helper to get {@link DataImpl.Lazy#ths} and cast it as {@link DataImpl.Lazy}. Throws an error if ths
        is not a DataImpl.Lazy
        """
            ...
        def callingType(self) -> Type:
        """
        Convenience helper to retrieve type from which the method represented by this lazy was called, whether static or
        member.
        """
            ...
        def methodType(self) -> MethodType:
        """
        The corresponding {@link MethodType} for this lazy DataImpl
        """
            ...
        @classmethod
        def create(cls, this_: Any, action: str, args: Map[str, Any]=None) -> Data.Persisted.Local:
        """
        Creates a new instance of Data.Lazy with the given fields. All creation of DataImpl.Lazy instances should go
        through this function, as it will also contain special logic for expanding spec arguments.
        
        @param this_
               Type or instance which invoked the action
        @param action
               Name of the action being represented
        @param args
               Map from argument name to value for the action being represented
        """
            ...
        def arg(self, argName: str, failIfMissing: bool=None) -> T:
        """
        Returns argument by name for this DataImpl.Lazy. If argument is not present, return null by default or fail if
        failIfMissing = true.
        """
            ...
        def isStatic(self) -> bool:
        """
        @return whether this DataImpl.Lazy represents a static action, as opposed to member
        """
            ...
        def isNotPandasDispatchable(self) -> bool:
        """
        Whether the action of this lazy can be executed with pandas
        """
            ...
        def compress(self) -> any:
        """
        @return compressed serialized {@link DataImpl.Lazy} which can be persisted more efficiently
        
        @see Feature.compressedData
        """
            ...
        def withIdTimeRangeFilterSpecRecursive(self, spec: Callable[[DataImpl.Lazy, IdTimeRangeFilterSpec], IdTimeRangeFilterSpec]=None) -> DataImpl.Lazy:
        """
        Adds "id","ids","start","end" filter to spec params recursively for the given spec
        e.g. if one of the args is {spec: EvalSpec}, this function with add the provided IdTimeRangeFilterSpec to the
        spec field in EvalSpec
        """
            ...
        def withoutIdTimeRangeFilterSpec(self) -> DataImpl.Lazy:
        """
        Removes "id","ids","start","end" filter from the spec params that are IdFilterSpec or IdTimeRangeFilterSpec,
        and "slice", "sliceByMask", "sliceByLabel" on the subject/id/timestamp Columns. Removal is done in topologicalSort order.
        e.g. if one of the args is {spec: EvalSpec}, this function with remove the above fields from the fields in EvalSpec
        """
            ...
        def toBinary(self) -> any:
        """
        Actualizes the DataImpl.Lazy on the server and then returns the binary representation of df
        """
            ...
        def T(self) -> Union[Data]:
            ...
        def attrs(self) -> Union[Map[Any, Any]]:
            ...
        def axes(self) -> Union[Array[Any]]:
            ...
        def columns(self) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
            ...
        def dtypes(self) -> Union[Data.Series]:
            ...
        def empty(self) -> Union[Any]:
            ...
        def flags(self) -> Union[Any]:
            ...
        def iat(self) -> Union[Any]:
            ...
        def iloc(self) -> Union[DataIlocIndexer]:
        """
        Purely integer-location based indexing for selection by position.
        
        Supports a subset of arguments to [pandas.DataFrame.iloc](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.iloc.html)
        """
            ...
        def index(self) -> Union[Union[Data.Index,Data.RangeIndex,Data.MultiIndex,Data.CategoricalIndex,Data.IntervalIndex,Data.PeriodIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Int64Index,Data.UInt64Index,Data.Float64Index]]:
            ...
        def loc(self) -> Union[DataLocIndexer]:
        """
        Access a group of rows and columns by label(s) or a boolean array.
        
        Supports a subset of arguments to [pandas.DataFrame.loc](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.loc.html)
        """
            ...
        def ndim(self) -> Union[int]:
            ...
        def shape(self) -> Union[Array[int]]:
            ...
        def size(self) -> Union[int]:
            ...
        def style(self) -> Union[Any]:
            ...
        def values(self) -> Union[Any]:
            ...
        def abs(self) -> Union[Data]:
            ...
        def add(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def add_prefix(self, prefix: str=None) -> Union[Data]:
            ...
        def add_suffix(self, suffix: str=None) -> Union[Data]:
            ...
        def agg(self, func: Any=None, axis: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def aggregate(self, func: Any=None, axis: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def align(self, other: Any=None, join: str=None, axis: Any=None, level: Any=None, copy: Any=None, fill_value: Any=None, method: str=None, limit: Any=None, fill_axis: Any=None, broadcast_axis: Any=None) -> Union[Array[Any]]:
            ...
        def all(self, axis: Any=None, bool_only: Any=None, skipna: Any=None, level: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def any(self, axis: Any=None, bool_only: Any=None, skipna: Any=None, level: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def append(self, other: Any=None, ignore_index: Any=None, verify_integrity: Any=None, sort: Any=None) -> Union[Data]:
            ...
        def applymap(self, func: Any=None, na_action: str=None) -> Union[Data]:
            ...
        def asfreq(self, freq: Any=None, method: Any=None, how: str=None, normalize: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def asof(self, where: Any=None, subset: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def astype(self, dtype: Any=None, copy: Any=None, errors: str=None) -> Union[Data]:
            ...
        def at_time(self, time: Any=None, asof: Any=None, axis: Any=None) -> Union[Data]:
            ...
        def backfill(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
            ...
        def between_time(self, start_time: Any=None, end_time: Any=None, include_start: Any=None, include_end: Any=None, axis: Any=None) -> Union[Data]:
            ...
        def bfill(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
            ...
        def bool(self) -> Union[Any]:
            ...
        def boxplot(self, column: Any=None, by: Any=None, ax: Any=None, fontsize: Any=None, rot: Any=None, grid: Any=None, figsize: Any=None, layout: Any=None, return_type: Any=None, backend: Any=None) -> Union[Any]:
            ...
        def clip(self, lower: Any=None, upper: Any=None, axis: Any=None, inplace: Any=None) -> Union[Data]:
            ...
        def combine(self, other: Data=None, func: Any=None, fill_value: Any=None, overwrite: Any=None) -> Union[Data]:
            ...
        def combine_first(self, other: Data=None) -> Union[Data]:
            ...
        def compare(self, other: Data=None, align_axis: Any=None, keep_shape: Any=None, keep_equal: Any=None) -> Union[Data]:
            ...
        def convert_dtypes(self, infer_objects: Any=None, convert_string: Any=None, convert_integer: Any=None, convert_boolean: Any=None, convert_floating: Any=None) -> Union[Data]:
            ...
        def copy(self, deep: Any=None) -> Union[Data]:
            ...
        def corr(self, method: Union[Callable[[Union[Any], Union[Any]], Union[float]],str]=None, min_periods: int=None) -> Union[Data]:
            ...
        def corrwith(self, other: Any=None, axis: Any=None, drop: Any=None, method: Any=None) -> Union[Data.Series]:
            ...
        def count(self, axis: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def cov(self, min_periods: int=None, ddof: int=None) -> Union[Data]:
            ...
        def cummax(self, axis: Any=None, skipna: Any=None) -> Union[Data]:
            ...
        def cummin(self, axis: Any=None, skipna: Any=None) -> Union[Data]:
            ...
        def cumprod(self, axis: Any=None, skipna: Any=None) -> Union[Data]:
            ...
        def cumsum(self, axis: Any=None, skipna: Any=None) -> Union[Data]:
            ...
        def describe(self, percentiles: Any=None, include: Any=None, exclude: Any=None, datetime_is_numeric: Any=None) -> Union[Data]:
            ...
        def diff(self, periods: int=None, axis: Any=None) -> Union[Data]:
            ...
        def div(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def divide(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def dot(self, other: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def drop(self, labels: Any=None, axis: Any=None, index: Any=None, columns: Any=None, level: Any=None, inplace: Any=None, errors: str=None) -> Union[Data]:
            ...
        def drop_duplicates(self, subset: Any=None, keep: Any=None, inplace: Any=None, ignore_index: Any=None) -> Union[Data]:
            ...
        def droplevel(self, level: Any=None, axis: Any=None) -> Union[Data]:
            ...
        def dropna(self, axis: Any=None, how: str=None, thresh: Any=None, subset: Any=None, inplace: Any=None) -> Union[Data]:
            ...
        def duplicated(self, subset: Any=None, keep: Any=None) -> Union[Data.Series]:
            ...
        def eq(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
            ...
        def eval(self, expr: str=None, inplace: Any=None) -> Union[Any]:
            ...
        def ewm(self, com: float=None, span: float=None, halflife: Any=None, alpha: float=None, min_periods: int=None, adjust: Any=None, ignore_na: Any=None, axis: Any=None, times: Any=None) -> Union[Any]:
            ...
        def expanding(self, min_periods: int=None, center: Any=None, axis: Any=None, method: str=None) -> Union[Any]:
            ...
        def explode(self, column: Any=None, ignore_index: Any=None) -> Union[Data]:
            ...
        def ffill(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
            ...
        def fillna(self, value: Any=None, method: Any=None, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
            ...
        def filter(self, items: Any=None, like: str=None, regex: str=None, axis: Any=None) -> Union[Data]:
            ...
        def first(self, offset: Any=None) -> Union[Data]:
            ...
        def first_valid_index(self) -> Union[Any]:
            ...
        def floordiv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def ge(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
            ...
        def get(self, key: Any=None, default: Any=None) -> Union[Any]:
            ...
        def groupby(self, by: Any=None, axis: Any=None, level: Any=None, as_index: Any=None, sort: Any=None, group_keys: Any=None, squeeze: Any=None, observed: Any=None, dropna: Any=None) -> Union[Data.GroupBy]:
            ...
        def gt(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
            ...
        def head(self, n: int=None) -> Union[Data]:
            ...
        def hist(self, column: Any=None, by: Any=None, grid: Any=None, xlabelsize: int=None, xrot: float=None, ylabelsize: int=None, yrot: float=None, ax: Any=None, sharex: Any=None, sharey: Any=None, figsize: =None, layout: =None, bins: Any=None, backend: str=None, legend: Any=None) -> Union[Any]:
            ...
        def idxmax(self, axis: Any=None, skipna: Any=None) -> Union[Data.Series]:
            ...
        def idxmin(self, axis: Any=None, skipna: Any=None) -> Union[Data.Series]:
            ...
        def infer_objects(self) -> Union[Data]:
            ...
        def info(self, verbose: Any=None, buf: Any=None, max_cols: int=None, memory_usage: Any=None, show_counts: Any=None, null_counts: Any=None) -> Union[Any]:
            ...
        def insert(self, loc: Any=None, column: Any=None, value: Any=None, allow_duplicates: Any=None) -> Union[Data]:
            ...
        def interpolate(self, method: str=None, axis: Any=None, limit: int=None, inplace: Any=None, limit_direction: str=None, limit_area: str=None, downcast: str=None) -> Union[Data]:
            ...
        def isin(self, values: Any=None) -> Union[Data]:
            ...
        def isna(self) -> Union[Data]:
            ...
        def isnull(self) -> Union[Data]:
            ...
        def items(self) -> Union[Any]:
            ...
        def iteritems(self) -> Union[Any]:
            ...
        def iterrows(self) -> Union[Any]:
            ...
        def itertuples(self, index: Any=None, name: str=None) -> Union[Any]:
            ...
        def join(self, other: Any=None, on: Any=None, how: str=None, lsuffix: str=None, rsuffix: str=None, sort: Any=None) -> Union[Data]:
            ...
        def keys(self) -> Union[Any]:
            ...
        def kurt(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def kurtosis(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def last(self, offset: Any=None) -> Union[Data]:
            ...
        def last_valid_index(self) -> Union[Any]:
            ...
        def le(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
            ...
        def lookup(self, row_labels: Any=None, col_labels: Any=None) -> Union[Any]:
            ...
        def lt(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
            ...
        def mad(self, axis: Any=None, skipna: Any=None, level: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def mask(self, cond: Any=None, other: Any=None, inplace: Any=None, axis: Any=None, level: Any=None, errors: Any=None, try_cast: Any=None) -> Union[Data]:
            ...
        def max(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def mean(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def median(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def melt(self, id_vars: Any=None, value_vars: Any=None, var_name: Any=None, value_name: Any=None, col_level: Any=None, ignore_index: Any=None) -> Union[Data]:
            ...
        def memory_usage(self, index: Any=None, deep: Any=None) -> Union[Data.Series]:
            ...
        def merge(self, right: Any=None, how: str=None, on: Any=None, left_on: Any=None, right_on: Any=None, left_index: Any=None, right_index: Any=None, sort: Any=None, suffixes: Any=None, copy: Any=None, indicator: Any=None, validate: str=None) -> Union[Data]:
            ...
        def min(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def mod(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def mode(self, axis: Any=None, numeric_only: Any=None, dropna: Any=None) -> Union[Data]:
            ...
        def mul(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        @overload
        def multiply(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        @overload
        def multiply(self, other: Any) -> Any:
            ...
        def ne(self, other: Any=None, axis: Any=None, level: Any=None) -> Union[Data]:
            ...
        def nlargest(self, n: int=None, columns: Any=None, keep: str=None) -> Union[Data]:
            ...
        def notna(self) -> Union[Data]:
            ...
        def notnull(self) -> Union[Data]:
            ...
        def nsmallest(self, n: int=None, columns: Any=None, keep: str=None) -> Union[Data]:
            ...
        def nunique(self, axis: Any=None, dropna: Any=None) -> Union[Data.Series]:
            ...
        def pad(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data]:
            ...
        def pct_change(self, periods: int=None, fill_method: Any=None, limit: int=None, freq: Any=None) -> Union[Data]:
            ...
        def pivot(self, index: Any=None, columns: Any=None, values: Any=None) -> Union[Data]:
            ...
        def pivot_table(self, values: Any=None, index: Any=None, columns: Any=None, aggfunc: Any=None, fill_value: Any=None, margins: Any=None, dropna: Any=None, margins_name: Any=None, observed: Any=None, sort: Any=None) -> Union[Data]:
            ...
        def pop(self, item: Any=None) -> Union[Data.Series]:
            ...
        def pow(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def prod(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None, min_count: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def product(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None, min_count: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def quantile(self, q: Any=None, axis: Any=None, numeric_only: Any=None, interpolation: str=None) -> Union[Union[Data,Data.Series]]:
            ...
        def query(self, expr: str=None, inplace: Any=None) -> Union[Data]:
            ...
        def radd(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def rank(self, axis: Any=None, method: str=None, numeric_only: Any=None, na_option: str=None, ascending: Any=None, pct: Any=None) -> Union[Data]:
            ...
        def rdiv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        @overload
        def reindex(self) -> Union[Data]:
            ...
        @overload
        def reindex(self, labels: Any=None, index: Any=None, columns: Any=None, axis: Any=None, method: str=None, copy: Any=None, level: Union[int,str]=None, fill_value: Any=None, limit: Any=None, tolerance: Any=None) -> Union[Data]:
        """
        Implements pandas reindex semantics from pandas version 1.3.4
        """
            ...
        def reindex_like(self, other: Any=None, method: str=None, copy: Any=None, limit: Any=None, tolerance: Any=None) -> Union[Data]:
            ...
        def rename(self, mapper: Any=None, index: Any=None, columns: Any=None, axis: Any=None, copy: Any=None, inplace: Any=None, level: Any=None, errors: str=None) -> Union[Data]:
            ...
        def rename_axis(self, mapper: Any=None) -> Union[Data]:
            ...
        def reorder_levels(self, order: Any=None, axis: Any=None) -> Union[Data]:
            ...
        def replace(self, to_replace: Any=None, value: Any=None, inplace: Any=None, limit: int=None, regex: Any=None, method: str=None) -> Union[Data]:
            ...
        def resample(self, rule: Any=None, axis: Any=None, closed: str=None, label: str=None, convention: str=None, kind: str=None, loffset: Any=None, base: int=None, on: Any=None, level: Any=None, origin: Any=None, offset: Any=None) -> Union[Data.Resample]:
            ...
        def reset_index(self, level: Any=None, drop: Any=None, inplace: Any=None, col_level: Any=None, col_fill: Any=None) -> Union[Data]:
            ...
        def rfloordiv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def rmod(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def rmul(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def rolling(self, window: Any=None, min_periods: int=None, center: Any=None, win_type: str=None, on: str=None, axis: Any=None, closed: str=None, method: str=None) -> Union[Data.Rolling]:
            ...
        def round(self, decimals: Union[Data.Series,int,Map[Any, int]]=None) -> Union[Data]:
            ...
        def rpow(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def rsub(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def rtruediv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def sample(self, n: int=None, frac: float=None, replace: Any=None, weights: Any=None, random_state: int=None, axis: Any=None, ignore_index: Any=None) -> Union[Data]:
            ...
        def select_dtypes(self, include: Any=None, exclude: Any=None) -> Union[Data]:
            ...
        def sem(self, axis: Any=None, skipna: Any=None, level: Any=None, ddof: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def set_axis(self, labels: Any=None, axis: Any=None, inplace: Any=None) -> Union[Data]:
            ...
        def set_flags(self, copy: Any=None, allows_duplicate_labels: Any=None) -> Union[Data]:
            ...
        def set_index(self, keys: Any=None, drop: Any=None, append: Any=None, inplace: Any=None, verify_integrity: Any=None) -> Union[Data]:
            ...
        def shift(self, periods: int=None, freq: Any=None, axis: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def skew(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def slice_shift(self, periods: int=None, axis: Any=None) -> Union[Data]:
            ...
        def sort_index(self, axis: Any=None, level: Any=None, ascending: Any=None, inplace: Any=None, kind: str=None, na_position: str=None, sort_remaining: Any=None, ignore_index: Any=None, key: Any=None) -> Union[Data]:
            ...
        def sort_values(self, by: Any=None, axis: Any=None, ascending: Any=None, inplace: Any=None, kind: str=None, na_position: str=None, ignore_index: Any=None, key: Any=None) -> Union[Data]:
            ...
        def squeeze(self, axis: Any=None) -> Union[Union[Data,Data.Series,int]]:
            ...
        def stack(self, level: Any=None, dropna: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def std(self, axis: Any=None, skipna: Any=None, level: Any=None, ddof: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def sub(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        @overload
        def subtract(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        @overload
        def subtract(self, other: Any) -> Any:
            ...
        def sum(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None, min_count: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def swapaxes(self, axis1: Any=None, axis2: Any=None, copy: Any=None) -> Union[Data]:
            ...
        def swaplevel(self, i: Any=None, j: Any=None, axis: Any=None) -> Union[Data]:
            ...
        def tail(self, n: int=None) -> Union[Data]:
            ...
        def take(self, indices: Any=None, axis: Any=None, is_copy: Any=None) -> Union[Data]:
            ...
        def to_clipboard(self, excel: Any=None, sep: str=None) -> Union[Any]:
            ...
        def to_csv(self, path_or_buf: Any=None, sep: str=None, na_rep: str=None, float_format: str=None, columns: Any=None, header: Any=None, index: Any=None, index_label: Any=None, mode: str=None, encoding: str=None, compression: Any=None, quoting: int=None, quotechar: str=None, line_terminator: str=None, chunksize: int=None, date_format: str=None, doublequote: Any=None, escapechar: str=None, decimal: str=None, errors: str=None, storage_options: Any=None) -> Union[str]:
            ...
        def to_dict(self, orient: str=None, into: Any=None) -> Union[Any]:
            ...
        def to_excel(self, excel_writer: Any=None, sheet_name: str=None, na_rep: str=None, float_format: str=None, columns: Any=None, header: Any=None, index: Any=None, index_label: Any=None, startrow: Any=None, startcol: Any=None, engine: Any=None, merge_cells: Any=None, encoding: Any=None, inf_rep: Any=None, verbose: Any=None, freeze_panes: Any=None, storage_options: Any=None) -> Union[Any]:
            ...
        def to_feather(self, path: Any=None) -> Union[Any]:
            ...
        def to_gbq(self, destination_table: str=None, project_id: str=None, chunksize: int=None, reauth: Any=None, if_exists: str=None, auth_local_webserver: Any=None, table_schema: Array[Map[str, str]]=None, location: str=None, progress_bar: Any=None, credentials: Any=None) -> Union[Any]:
            ...
        def to_hdf(self, path_or_buf: Any=None, key: str=None, mode: str=None, complevel: int=None, complib: str=None, append: Any=None, format: str=None, index: Any=None, min_itemsize: Union[int,Map[str, int]]=None, nan_rep: Any=None, dropna: Any=None, data_columns: Any=None, errors: str=None, encoding: str=None) -> Union[Any]:
            ...
        def to_json(self, path_or_buf: Any=None, orient: str=None, date_format: str=None, double_precision: int=None, force_ascii: Any=None, date_unit: str=None, default_handler: Callable[[Union[Any]], Union[Any]]=None, lines: Any=None, compression: Any=None, index: Any=None, indent: int=None, storage_options: Any=None) -> Union[str]:
            ...
        def to_latex(self, buf: Any=None, columns: Any=None, col_space: Any=None, header: Any=None, index: Any=None, na_rep: Any=None, formatters: Any=None, float_format: Any=None, sparsify: Any=None, index_names: Any=None, bold_rows: Any=None, column_format: Any=None, longtable: Any=None, escape: Any=None, encoding: Any=None, decimal: Any=None, multicolumn: Any=None, multicolumn_format: Any=None, multirow: Any=None, caption: Any=None, label: Any=None, position: Any=None) -> Union[Any]:
            ...
        def to_markdown(self, buf: Any=None, mode: str=None, index: Any=None, storage_options: Any=None) -> Union[str]:
            ...
        def to_parquet(self, path: Any=None, engine: str=None, compression: str=None, index: Any=None, partition_cols: Array[str]=None, storage_options: Any=None) -> Union[Any]:
            ...
        def to_period(self, freq: Any=None, axis: Any=None, copy: Any=None) -> Union[Data]:
            ...
        def to_pickle(self, path: Any=None, compression: Any=None, protocol: int=None, storage_options: Any=None) -> Union[Any]:
            ...
        def to_records(self, index: Any=None, column_dtypes: Any=None, index_dtypes: Any=None) -> Union[Any]:
            ...
        def to_sql(self, name: str=None, con: Any=None, schema: Any=None, if_exists: str=None, index: Any=None, index_label: Any=None, chunksize: Any=None, dtype: Any=None, method: Any=None) -> Union[Any]:
            ...
        def to_stata(self, path: Any=None, convert_dates: Map[Any, str]=None, write_index: Any=None, byteorder: str=None, time_stamp: Any=None, data_label: str=None, variable_labels: Map[Any, str]=None, version: int=None, convert_strl: Any=None, compression: Any=None, storage_options: Any=None) -> Union[Any]:
            ...
        def to_string(self, buf: Any=None, columns: Any=None, col_space: int=None, header: Any=None, index: Any=None, na_rep: str=None, formatters: Any=None, float_format: Any=None, sparsify: Any=None, index_names: Any=None, justify: str=None, max_rows: int=None, min_rows: int=None, max_cols: int=None, show_dimensions: Any=None, decimal: str=None, line_width: int=None, max_colwidth: int=None, encoding: str=None) -> Union[str]:
            ...
        def to_timestamp(self, freq: Any=None, how: str=None, axis: Any=None, copy: Any=None) -> Union[Data]:
            ...
        def to_xarray(self) -> Union[Any]:
            ...
        def to_xml(self, path_or_buffer: Any=None, index: Any=None, root_name: str=None, row_name: str=None, na_rep: str=None, attr_cols: Union[Array[str],str]=None, elem_cols: Union[Array[str],str]=None, namespaces: Map[str, str]=None, prefix: str=None, encoding: str=None, xml_declaration: Any=None, pretty_print: Any=None, parser: str=None, stylesheet: Any=None, compression: Any=None, storage_options: Any=None) -> Union[str]:
            ...
        def transform(self, func: Any=None, axis: Any=None) -> Union[Data]:
            ...
        def transpose(self, copy: Any=None) -> Union[Data]:
            ...
        def truediv(self, other: Any=None, axis: Any=None, level: Any=None, fill_value: Any=None) -> Union[Data]:
            ...
        def truncate(self, before: Any=None, after: Any=None, axis: Any=None, copy: Any=None) -> Union[Data]:
            ...
        def tshift(self, periods: int=None, freq: Any=None, axis: Any=None) -> Union[Data]:
            ...
        def tz_convert(self, tz: Any=None, axis: Any=None, level: Any=None, copy: Any=None) -> Union[Data]:
            ...
        def tz_localize(self, tz: Any=None, axis: Any=None, level: Any=None, copy: Any=None, ambiguous: Any=None, nonexistent: str=None) -> Union[Data]:
            ...
        def unstack(self, level: Any=None, fill_value: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def update(self, other: Any=None, join: str=None, overwrite: Any=None, filter_func: Any=None, errors: str=None) -> Union[Any]:
            ...
        def value_counts(self, subset: Any=None, normalize: Any=None, sort: Any=None, ascending: Any=None, dropna: Any=None) -> Union[Data.Series]:
            ...
        def var(self, axis: Any=None, skipna: Any=None, level: Any=None, ddof: Any=None, numeric_only: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        def where(self, cond: Any=None, other: Any=None, inplace: Any=None, axis: Any=None, level: Any=None, errors: Any=None, try_cast: Any=None) -> Union[Data]:
            ...
        def xs(self, key: Any=None, axis: Any=None, level: Any=None, drop_level: Any=None) -> Union[Union[Data,Data.Series]]:
            ...
        @classmethod
        def dataFrame(cls, data: Union[Map[str, Any],Array[Any]]=None, index: Any=None, columns: Any=None, dtype: Any=None, copy: bool=None) -> Union[Data]:
        """
        Construct a {@link Data} manually. Corresponds to pd.DataFrame constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def series(cls, data: Any=None, index: Any=None, dtype: Any=None, name: Any=None, copy: bool=None, fastpath: bool=None) -> Union[Data.Series]:
        """
        Construct a {@link Data.Series} manually. Corresponds to pd.Series constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def index_(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, tupleize_cols: Any=None) -> Union[Union[Data.Index,Data.MultiIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Float64Index,Data.Int64Index]]:
        """
        Construct a {@link Data.Index} manually. Corresponds to pd.Index constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def rangeIndex(cls, start: Any=None, stop: int=None, step: int=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.RangeIndex]:
        """
        Construct a {@link Data.RangeIndex} manually. Corresponds to pd.RangeIndex constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def categoricalIndex(cls, data: Any=None, categories: Any=None, ordered: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.CategoricalIndex]:
        """
        Construct a {@link Data.CategoricalIndex} manually. Corresponds to pd.CategoricalIndex constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def multiIndex(cls, levels: Any=None, codes: Any=None, sortorder: int=None, names: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, verify_integrity: Any=None) -> Union[Data.MultiIndex]:
        """
        Construct a {@link Data.MultiIndex} manually. Corresponds to pd.MultiIndex constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def intervalIndex(cls, data: Any=None, closed: str=None, dtype: Any=None, copy: bool=None, name: Any=None, verify_integrity: Any=None) -> Union[Data.IntervalIndex]:
        """
        Construct a {@link Data.IntervalIndex} manually. Corresponds to pd.IntervalIndex constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def datetimeIndex(cls, data: Any=None, freq: Any=None, tz: Any=None, normalize: bool=None, closed: str=None, ambiguous: Any=None, dayfirst: bool=None, yearfirst: bool=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.DatetimeIndex]:
        """
        Construct a {@link Data.DatetimeIndex} manually. Corresponds to pd.DatetimeIndex constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def timedeltaIndex(cls, data: Any=None, unit: Any=None, freq: Any=None, copy: bool=None, name: Any=None) -> Union[Data.TimedeltaIndex]:
        """
        Construct a {@link Data.TimedeltaIndex} manually. Corresponds to pd.TimedeltaIndex constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def periodIndex(cls, data: Any=None, ordinal: Any=None, freq: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, year: Any=None, month: Any=None, quarter: Any=None, day: Any=None, hour: Any=None, minute: Any=None, second: Any=None) -> Union[Data.PeriodIndex]:
        """
        Construct a {@link Data.PeriodIndex} manually. Corresponds to pd.PeriodIndex constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def int64Index(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.Int64Index]:
        """
        Construct a {@link Data.Int64Index} manually. Corresponds to pd.Int64Index constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def uInt64Index(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.UInt64Index]:
        """
        Construct a {@link Data.UInt64Index} manually. Corresponds to pd.UInt64Index constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def float64Index(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.Float64Index]:
        """
        Construct a {@link Data.Float64Index} manually. Corresponds to pd.Float64Index constructor from Pandas 1.3.4
        """
            ...
        @classmethod
        def read_csv(cls, filepath_or_buffer: Union[str,ContentValue], spec: Data.ManualOpSpecs.ReadCsvSpec=None) -> Union[Data]:
        """
        Read a comma-separate values file and construct a {@link Data} out of the contents.
        
        Example usage:
        ```py
        Reading an individual csv file.
        >>> dt = c3.Data.read_csv('path-to-your-file/your-file.csv')
        
        Reading multiple csv files with the same schema inside a folder.
        >>> dt = c3.Data.read_csv('path-to-your-folder/')
        
        Reading from client "local" folder. These are files local to the calling (e.g. SDK) process.
        >>> dt = c3.PyDataTable.read_csv('local:///path-to-your-folder/')
        ```
        
        @param path
                  c3 file path that contains the data. See {@link Dataset#fromFiles} for specifics on semantics.
        @param parse_dates
                  list of names of "columns" in the header to interpret as datetime.
        @return a {@link Data} that contains the data of the file(s).
        """
            ...
        @classmethod
        def read_csv_glob(cls, filepath_or_buffer: str, spec: Data.ManualOpSpecs.ReadCsvGlobSpec=None) -> Union[Data]:
        """
        Simultaneously read data from multiple .csv files.
        `path` should be constructed as a glob. Only implemented for Modin execution mode
        
        Example usage:
        ```py
        >>> dt = c3.Data.read_csv_glob('path-to-your-file/*.csv')
        ```
        
        @param filepath_or_buffer
                  c3 file path that contains the data.
        @param parse_dates
                  list of names of "columns" in the header to interpret as datetime.
        @return a {@link Data} that contains the data of the file(s).
        """
            ...
        @classmethod
        def _read_sql_query(cls, sql: str, url: str, http_path: str, parse_dates: Any=None) -> Union[Data]:
        """
        Reads SQL query into a DataFrame equivalent.
        
        @param sql
                  SQL query string
        @param url
                  database connection path for the sql_alchemy engine
        @param http_path
                  http_path for the sql_alchemy engine
        @param parse_dates
                  list of column names to parse as dates
        """
            ...
        @classmethod
        def merge_asof(cls, left: Data=None, right: Data=None, on: Any=None, left_on: Any=None, right_on: Any=None, left_index: bool='false', right_index: bool='false', by: Any=None, left_by: Any=None, right_by: Any=None, suffixes: Any=None, tolerance: Any=None, allow_exact_matches: Any=None, direction: str='"backward"') -> Union[Data]:
        """
         Perform a merge by key distance.
        
         Both Data must be sorted by the key.
        
         For each row in the left Data:
           - A "backward" search chooses the last row in the right Data whose
             'on' key is less than or equal to the left's key.
           - A "forward" search chooses the first row in the right Data whose
             'on' key is greater than or equal to the left's key.
           - A "nearest" search chooses the row in the right Data whose 'on'
             key is closest to the left's key.
        
         @param left
                Data to merge
         @param right
                Data to merge
         @param on
                Column name to join on, needs to be present in both Data. The column being merged on must be ordered and
        numeric must be a numeric column (integer, float, or datetime). On or left_on/right_on must be provided.
         @param left_on
                Column name to join on in the left Data
         @param right_on
                Column name to join on in the left Data
         @param left_index
                Indicate if the index of the left Data should be used as the join key
         @param right_index
                Indicate if the index of the right Data should be used as the join key
         @param by
                List of column names or a single column name. These columns are matched prior to merging
         @param left_by
                Column name. Columns to match on in the left Data
         @param right_by
                Column name. Columns to match on in the right Data
         @param suffixes
                2-length list or sequence. Suffix applied to overlapping column names in the left and right Data, respectively
         @param tolerance
                int or time delta. Select asof tolerance from this range. The tolerance needs to be compatible with the
                designated merge index
         @param allow_exact_matches
                If True, allow matching with the same ‘on’ value during merge (greater-than-or-equal-to or less-than-or-equal-to)
                If False, don’t match the same ‘on’ value during merge (strictly greater-than or strictly less-than)
         @param direction
                Indicate to look for prior, subsequent, or closest matches during merge
        
         @return a {@link Data} representing the merged Data
        """
            ...
        @classmethod
        def concat(cls, objs: Any=None, axis: Union[int,str]='0', join: str='"outer"', ignore_index: bool='false', keys: Any=None, levels: Any=None, names: Any=None, verify_integrity: bool='false', sort: bool='false', copy: Any=None) -> Union[Data]:
        """
        Concatenate Data along a specified axis with optional logic along the other axis
        @param objs
                  Mapping or sequence of Data objects. If a mapping is passed, the sorted keys will be used as the `keys`
                  argument, unless it is passed, in which case the values will be selected.
        @param axis
                  The axis to concatenate along
        @param join
               How to process indexes on the axis
        @param ignore_index
               When true index values along the concatenation axis are ignored.
        @param keys
               Sequence used to construct hierarchical index
        @param levels
               list of sequences.
               Levels to use for building a Multi-index. If left null, the multi-index will be inferred from keys
        @param names
               Names of each level in the resulting hierarchical index
        @param verify_integrity
               Check if the concatenated axis contains any duplicates
        @param sort
               Sorts the non-concatenation axis when join='outer' and it is not already aligned
        @param copy
               Does not copy data unnecessarily when false   *
        @return a {@link Data} representing the concatenated Data
        """
            ...
        @classmethod
        def json_normalize(cls, data: Any, record_path: Any=None, meta: Any=None, meta_prefix: Any=None, record_prefix: Any=None, errors: str='"raise"', sep: str='"."', max_level: int=None) -> Union[Data]:
        """
        Normalize semi-structured JSON data into a Data
        @param data
                  Unserialized JSON objects
        @param record_path
                  Path in each object to list of records. If not passed, data will be assumed to be an array of records.
        @param meta
               Fields to use as metadata for each record in resulting table.
        @param meta_prefix
               If True, prefix records with dotted (?) path, e.g. foo.bar.field if meta is [‘foo’, ‘bar’].
        @param record_prefix
               If True, prefix records with dotted (?) path, e.g. foo.bar.field if path to records is [‘foo’, ‘bar’].
        @param errors
               Configures error handling.
               ‘ignore’ : will ignore KeyError if keys listed in meta are not always present.
               ‘raise’ : will raise KeyError if keys listed in meta are not always present.
        @param sep
               Nested records will generate names separated by sep. e.g., for sep=’.’, {‘foo’: {‘bar’: 0}} -> foo.bar.
        @param max_level
               Max number of levels(depth of dict) to normalize. if None, normalizes all levels.
        
        @return a {@link Data} representing the structured JSON data
        """
            ...
        @classmethod
        def from_dict(cls, data: Any=None, orient: Any=None, dtype: Any=None, columns: Any=None) -> Union[Data]:
            ...
        @classmethod
        def from_records(cls, data: Any=None, index: Any=None, exclude: Any=None, columns: Any=None, coerce_float: Any=None, nrows: Any=None) -> Union[Data]:
            ...
        def iter(self) -> Union[Iterator[Any]]:
        """
        Iterate over info axis.
        """
            ...
        def _iter_(self) -> Union[Any]:
        """
        Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
        """
            ...
        def zip(self, spec: OpSpec, other: Iterable[T], merge: Callable[[Union[Any], Union[int], Union[Any], Union[int]], Union[R]], elementType: ValueType=None) -> Iterable[R]:
        """
        Generates a Iterable from the result of applying a binary operator against elements of Iterable.
        The return type of the binary operator must match rt.
        @elementType
               The return value type of the operator/ the element type of the returned Iterable
        @spec
               Configures behavior of this method based on {@link OpSpec#repeatLast}
        @other
               Other Iterable to apply operator on
        @merge
               Binary operator to apply to elements of this and other Iterable at matching positions
        @return the generated Iterable with return type rt.
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
        def _setItem_(self, key: Any, value: Any) -> None:
        """
        Implements the square bracket setter `obj[item] = value`
        @param key
                item associated with the element to set value for.
        @param value
                value to set element to.
        """
            ...
        def _removeItem_(self, key: Any) -> None:
        """
        Implements the `del` or equivalent operator
        @param key
          item associated with the element to remove.
        """
            ...
        def addition(self, other: Any) -> Any:
            ...
        def matrixMultiply(self, other: Any) -> Any:
            ...
        def trueDivision(self, other: Any) -> Any:
            ...
        def floorDivision(self, other: Any) -> Any:
            ...
        def modulo(self, other: Any) -> Any:
            ...
        def power(self, other: Any, modulus: Any=None) -> Any:
            ...
        def reflectedAddition(self, other: Any) -> Any:
            ...
        def reflectedSubtract(self, other: Any) -> Any:
            ...
        def reflectedMultiply(self, other: Any) -> Any:
            ...
        def reflectedMatrixMultiply(self, other: Any) -> Any:
            ...
        def reflectedTrueDivision(self, other: Any) -> Any:
            ...
        def reflectedFloorDivision(self, other: Any) -> Any:
            ...
        def reflectedModulo(self, other: Any) -> Any:
            ...
        def reflectedPower(self, other: Any, modulus: Any=None) -> Any:
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
        def logicalAnd(self, other: Any) -> Any:
            ...
        def logicalOr(self, other: Any) -> Any:
            ...
        def logicalXor(self, other: Any) -> Any:
            ...
        def reflectedLogicalAnd(self, other: Any) -> Any:
            ...
        def reflectedLogicalOr(self, other: Any) -> Any:
            ...
        def reflectedLogicalXor(self, other: Any) -> Any:
            ...
        def _repr_(self) -> Union[str]:
        """
        Base implementation of Python __repr__ protocol to use {@link DataGrid#toString}.
        """
            ...
        def _reprHtml_(self) -> Union[str]:
        """
        Base implementation of Python __reprHtml__ protocol to use {@link DataGrid#toHtml}.
        """
            ...
        def toNegative(self) -> Any:
            ...
        def toPositive(self) -> Any:
            ...
        def toAbsolute(self) -> Any:
            ...
        def toInverted(self) -> Any:
            ...
        def toRounded(self, decimals: int=None) -> Any:
            ...
        def _bool_(self) -> bool:
        """
        Determines if this value is truth or falsy
        """
            ...
        def _this(self) -> Any:
        """
        @return native object with all fields
        """
            ...
        def renderer(self) -> Union[HtmlRenderer]:
        """
        Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
        null may be returned. The implementation must be available within the browser (typically `js-client`).
        """
            ...
        def contains(self, element: Any) -> bool:
        """
        @return `true` if this Data contains provided element.
        """
            ...
        def valueType(self) -> ValueType:
        """
        C3 ValueType of this instance.
        """
            ...
        @classmethod
        def valueTypeOf(cls, type: Type, failIfNot: bool=None) -> Union[ValueType]:
        """
        Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
        considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
        
        @see ValueType#instanceType
        """
            ...
        def _length_(self) -> int:
        """
        Implements the js `.length` property or py `len()` support.
        @return the number of elements in this instance
        """
            ...
        def config(self, secrets: bool=None) -> DataConfig:
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
        def typeConfig(cls) -> DataConfig:
        """
        @return type configuration for the given {@link Configurable} type.
        E.g. {@see REST} & {@see RestConfig}
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
        def _shape(self) -> Union[Array[int]]:
            ...
        def dataType(self) -> TupleType:
        """
        @return {@link TupleType} describing this Data's schema: (name, value) pairs mapping column name to inferred
                {@link ValueType} for each column.
        """
            ...
        def elementType(self) -> ValueType:
        """
        @return {@link ValueType} of elements in this Data as a dynamic Obj reference type
        """
            ...
        @classmethod
        def lazyEvaluationMode(cls) -> bool:
        """
        Returns true if we are in lazy evaluation mode. If false, we evaluate operations on Data eagerly
        """
            ...
        @classmethod
        def setEvaluationMode(cls, lazy: bool) -> None:
        """
        @param lazy
                Sets the evaluation mode to either lazy or eager if specified.
        """
            ...
        @classmethod
        def cprofileEnabled(cls) -> bool:
        """
        If true, the python function annotated by @profile will be profiled by cprofile
        """
            ...
        @classmethod
        def setCprofileEnabled(cls, enabled: bool) -> None:
        """
        Function to enable cprofile on the concrete data type
        """
            ...
        @overload
        def each(self, action: Callable[[Union[Any], Union[int]]]) -> None:
        """
        Execute the specified lambda against each value of the collection. The first lambda argument is the value and the
        second is the index.
        """
            ...
        @overload
        def each(self, action: Callable[[Union[Any]]]) -> None:
        """
        Execute the specified lambda against each value of the collection. The lambda argument is the value.
        """
            ...
        @overload
        def eachWhile(self, action: Callable[[Union[Any], Union[int]], bool]) -> bool:
        """
        Invokes action for each element while given action returns `true`. Returns `true` if provided action did not
        interrupt iteration. The first lambda argument is the value and the second is the index.
        """
            ...
        @overload
        def eachWhile(self, action: Callable[[Union[Any]], bool]) -> bool:
        """
        Invokes action for each element while given action returns `true`. Returns `true` if provided action did not
        interrupt iteration. The lambda argument is the value.
        """
            ...
        @classmethod
        def fromCollection(cls, col: Union[Collection[Obj],Collection[Tuple]], dataset: Dataset=None, include: str=None) -> Union[Data.Persisted.Local]:
        """
        @return an instance of Data from the provided collection of {@link Obj}s or {@link Tuple}s
        @param col
               Collection from which Data needs to be constructed
        Supports all C3 collection types except map
        For instance , for collection<Obj>:
        ```js
        Data.fromCollection(Bear.array(Bear.make().withName("B1")))
        For Collection <Tuple> :
        tupleType = ValueType.fromString("{ key: string, count: int, dim: Dimension }")
        tupleValue = tupleType.makeValue({ key: 'foo', count: 14, dim: { value: 22.33 } })
        Data.fromCollection(C3.Array.of(tupleType, tupleValue))
        ```
        @param dataset
               dataset on which this Data needs to be created
        @param include
               If specified, only those fields provided as part of include will be included on the result Data
        @return an instance of Data from the provided collection of {@link Obj}s or {@link Tuple}s
        """
            ...
        @classmethod
        def fromTuple(cls, tuple: Tuple, dataset: Dataset=None) -> Union[Data.Persisted.Local]:
        """
        @return an instance of Data from the provided tuple with structure of {columnName:[value]}
        For instance, make a tuple of
        {type:{subject: [string], timestamp:[datetime], value:[double]},
        subject:['a','b'], timestamp:[2000-01-01, 2000-01-02]
        value: [1,2]}
        calling Data.fromTuple(tuple) returns :
          subject  timestamp  value
        0       a 2000-01-01    1.0
        1       b 2000-01-02    2.0
        """
            ...
        def toDataPandas(self, ds: Dataset=None) -> Union[Data.Pandas]:
        """
        Converts this data to a {@link Data.Pandas}. If parent dataset is not provided then will use default data set.
        """
            ...
        def apply(self, func: Callable[[Union[Any]], Union[Any]], axis: int=None) -> Union[Data]:
        """
        Apply a function along an axis of the {@link Data}.
        
        Supports a subset of arguments to
        [pandas.DataFrame.apply](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.apply.html)
        
        Example usage:
        ```py
        >>> df = pd.DataFrame({"a" : ["foo", "foo", "baz", "qux"],
        ...                    "b" : [10, 20, 30, 30],
        ...                    "c" : [1, 2, 3, 4]})
        >>> dt = c3.Data.from_pandas(df)
        >>> dt.apply(lambda x: x+2, axis=1)
              a   b  c
        0  foo2  12  3
        1  foo2  22  4
        2  baz2  32  5
        3  qux2  32  6
        
        >>> def add_two(x):
                return x+2
        >>> dt.apply(add_two, axis=1)
              a   b  c
        0  foo2  12  3
        1  foo2  22  4
        2  baz2  32  5
        3  qux2  32  6
        
        @param func
                lambda to apply.
        @param axis
                axis along which the function is applied: 0 applies function to each column, 1 applies to each row.
        @return a {@link Data} that represents the result of applying the given function along the given axis of the original data.
        """
            ...
        def setItem(self, selector: Any, value: Any) -> Union[Data]:
        """
        Mutably sets selected values in this Data.
        @param selector
               Determines criteria for selection. Legal row selectors are:
                   - single column label (selects column)
                   - array of column label(s) (selects columns)
                   - array of booleans (must be same length as this.shape[1], selects rows)
                   - single-column Data (Series) of booleans (must be same length as this.shape[1], selects rows)
               Cannot be null. Deos not support slicing.
        @param value
               Value to set for selected item(s). Can be a:
                   - value
                   - array of values
                   - single-column Data (Series) of values
                   - Data
                   - 2D array
        """
            ...
        def remove(self, selector: Any) -> None:
            ...
        @classmethod
        def profileFolder(cls) -> str:
        """
        Get the profile folder
        """
            ...
        @classmethod
        def setProfileFolder(cls, folder: str) -> None:
        """
        Set the profile folder
        @param folder
               All profile files will be saved in this folder. This folder could be tmp folders, which will be deleted
               after the ttl time specified in {@link TmpFileSpec}
        """
            ...
        @classmethod
        def fromFile(cls, file: File, spec: Data.SourceSpec) -> Union[Data]:
        """
        Create a `Data` instance from a {@link File} with user provided spec
        Example usage:
        ```py
        >>> file = File.fromString("file.csv")
        ```
        
        @param file
                  File or the given folder where files are present
        @param Spec
                 {@link Data.SourceSpec},Configuration options for reading the data
        @return a {@link Data} that contains the data of the file(s).
        """
            ...
        def equal_(self, other: Data) -> bool:
        """
        Test whether two objects contain the same elements
        """
            ...
        @classmethod
        def fromTuples(cls, tupleFields: Map[str, ValueType], data: Array[Map[str, Any]], dataset: Dataset=None) -> Data:
        """
        @param tupleFields
                (key - field name, value - field type) for the dynamic object element type.
        @param data
                list of elements to be populated into the table, in form of map with keys matching {@link #tupleFields}.
        @param dataset
                Dataset to attach this Data to. If null, use the `default` dataset.
        @return a newly instantiated {@link Data} with dynamic object element type.
        """
            ...
        def repr(self) -> Union[str]:
        """
        {@link Data#_repr_} with a better name
        """
            ...
        def toDataSpec(self) -> Union[Data.Spec]:
        """
        Convert {@link Data} to {@link Data.Spec}
        """
            ...
        @classmethod
        def fromTimeseries(cls, ts: Timeseries[Any]) -> Union[Data]:
        """
        Create instance of Data from Timeseries
        """
            ...
        def getItem(self, fst: Any=None) -> Union[Any]:
        """
        Operation represents using the `_item_` (bracket syntax) protocol on a Pandas DataFrame. E.g. `df[fst]`
        """
            ...
        def getIloc(self, fst: Any=None, snd: Any=None) -> Union[Any]:
        """
        Operation represents using the `_item_` (bracket syntax) protocol on a Pandas iloc Indexer.
        should pass in an empty Slice object if fst value is not provided but the snd value is.
        E.g. `df.iloc[fst]`, or `df.iloc[:, snd]`, or `df.iloc[fst, snd]`
        """
            ...
        def getLoc(self, fst: Any=None, snd: Any=None) -> Union[Any]:
        """
        Operation represents using the `_item_` (bracket syntax) protocol on a Pandas loc Indexer.
        should pass in an empty Slice object if fst value is not provided but the snd value is.
        E.g. `df.loc[fst]`, or `df.loc[:, snd]`, or `df.loc[fst, snd]`
        """
            ...
        def setLoc(self, fst: Any, value: Any, snd: Any=None) -> Union[Data]:
        """
        Mutably sets selected values in this Data.
        @param fst
               Determines criteria for row selection. Legal row selectors are:
                   - single row label
                   - array of row label(s)
                   - {@link Slice} of row labels
                   - array of booleans (must be same length as this.shape[0])
                   - single-column Data (Series) of booleans (must be same length as this.shape[0])
               Cannot be null. Selecting all rows is represented as an empty Slice (df.loc[:, ...])
        @param snd
               Determines criteria for column selection. Legal column selectors are same as row selectors, replacing "row
               label" with "column name". If null, all columns are selected.
        @param value
               Value to set for selected row/column intersection. Can be a:
                   - value
                   - array of values
                   - single-column Data (Series) of values
                   - Data
                   - 2D array
        
        @see DataLocIndexer#set
        """
            ...
        def setIloc(self, fst: Any, value: Any, snd: Any=None) -> Union[Data]:
        """
        Mutably sets selected values in this Data.
        @param fst
               Determines criteria for row selection. Legal row selectors are:
                   - single row index
                   - array of row indices
                   - {@link Slice} of row indices
                   - array of booleans (must be same length as this.shape[0])
                   - single-column Data (Series) of booleans (must be same length as this.shape[0])
               Cannot be null. Selecting all rows is represented as an empty Slice (df.iloc[:, ...])
        @param snd
               Determines criteria for column selection. Legal column selectors are same as row selectors, replacing "row
               label" with "column name". If null, all columns are selected.
        @param value
               Value to set for selected row/column intersection. Can be a:
                   - value
                   - array of values
                   - single-column Data (Series) of values
                   - Data
                   - 2D array
        
        @see DataIlocIndexer#set
        """
            ...
        @classmethod
        def _new_data_name(cls, prefix: str) -> str:
        """
        Return a unique ID for a new Data
        """
            ...
        @classmethod
        def _numpy_to_pandas_native(cls, ndarray: Any) -> Any:
        """
        Helper function to convert a numpy array into a pandas dataframe, used by {@link #from_numpy}.
        
        @param ndarray
                  the numpy array to convert
        @return a pandas dataframe
        """
            ...
        @classmethod
        def fromDataFlow(cls, dataFlow: PkgInference, filter: Callable[[DataImpl.Lazy], DataImpl.Lazy]=None) -> Data:
        """
        Creates a Data from a PkgInference.Populate the Data.Lazy chain by visiting the pkgInference in a
        topologicalSort order.
        Additional operations on Data.Lazy can be added with the filter lambda operations.
        """
            ...
        def toLazy(self) -> Union[Data.Lazy]:
        """
        Removes this Data from its Dataset. Error will be thrown if calling type is not {@link Data.Stateful}.
        """
            ...
        def toPersisted(self, tableName: str=None, id: str=None) -> Data:
        """
        Uploads the local files to remote filesystem and creates an instance of {@link Data.Persisted} from this
        {@link Data.Persisted.Local}.
        @returns The instance of the {@link Data.Persisted} .
        """
            ...
        def toPersistedLocal(self) -> Data:
        """
        @return a local persisted instance of this Data or this instance, if this is already persisted.
        See {@link Data.Persisted.Local}.
        """
            ...
        @classmethod
        def reflectedOperators(cls) -> Union[Set[str]]:
        """
        Set of reflected operators from Pandas
        """
            ...
        def and(self, other: Any) -> Union[Data]:
        """
        Perform a bitwise "and" operation on the Data with "other"
        """
            ...
        def or(self, other: Any) -> Union[Data]:
        """
        Perform a bitwise "or" operation on the Data  with "other"
        """
            ...
        def assign(self, kwargs: Map[str, Union[Union[Array[Any],Data,Data.Series]]]=None) -> Union[Data]:
        """
        Implements pandas assign semantics from pandas version 1.3.4.
        @param kwargs
               The map or dictionary of new column names to their new values. Can be:
                   - list
                   - Data.Series
                   - Data only if it has 1 column
        @return
               {@link Data} with new column names specified by kwargs
        """
            ...
        @classmethod
        def _valueTypeToPandasDtype(cls, value: ValueType) -> Union[str]:
            ...
        def flatten(self, include: str=None, level: int=None) -> Union[Data,Data.Series]:
        """
         Flatten specified columns. The behavior of flatten is different when:
           column dtype is a list-like: list is flattened, similar to `Data#explode`
           column dtype is a map-like: dict is expanded such that the keys of the dict become new columns in the Data
         Only one of include or level can be specified at a time, otherwise an error will be thrown.
         @param include
                A comma separated set of columns that determine what data to return from this operation, `a.b.c, z.x`
         @param level
                The depth at which to flatten and return all nested data
         @return
                {@link Data} when multiple columns are returned using include or when using level on a {@link Data} with
                             multiple columns
                {@link Data.Series} when a single column is returned using include
        
         Examples:
         ```py
         data = c3.Data.dataFrame({"a": [{"aa": 1, "ab": 1}, {"aa": 2, "ab": 2}], "b": [[{"bb": 1}], [{"bb": 2}]]})
         data.flatten("a") ->
          0 {"aa": 1, "ab": 1}
          1 {"aa": 2, "ab": 2}
        
         data.flatten("a.aa")
        .     "aa"
          0  1
          1  2
        
         data.flatten("b.bb") ->
        .    "bb"
          0  1
          1  2
        
         data.flatten("a.ab, b.bb") ->
        .    "a.ab" "b.bb"
          0  1      1
          1  2      2
        
         data.flatten(level=-1) ->
        .        "a.aa"      "a.ab"    "b.bb"
          0      1           1         1
          1      2           2         2
         ```
        """
            ...
        def _align(self, other: Any=None, join: str=None, axis: Any=None, level: Any=None, copy: Any=None, fill_value: Any=None, method: str=None, limit: Any=None, fill_axis: Any=None, broadcast_axis: Any=None) -> Union[Array[Any]]:
        """
        Align two objects on their axes with the specified join method.
        
        Join method is specified for each axis Index.
        see: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.align.html
        """
            ...
        def columnNames(self) -> Array[str]:
        """
        Returns column names as an array of string
        """
            ...
        def hasColumn(self, colName: Any) -> bool:
        """
        Checks whether this instance has the input column name
        """
            ...
        def hasColumns(self, colNames: Array[Any]) -> bool:
        """
        Checks whether this instance has all the input column names
        """
            ...
        def slice(self, spec: Data.SliceSpec=None) -> Union[Data]:
        """
        @return a sliced {@link Data} instance based on the spec provided. This is used internally in {@link #stream} to
        yield {@link Data} elements in the resulting stream.
        """
            ...
        def stream(self, spec: Data.StreamSpec=None) -> Data.Stream:
        """
        @return a stream of this {@link Data} where each element is a "slice" of data points of the {@link Data}, according
                   to the dimensions specified by the caller.
        Usage:
        ```python
        stream_data = this.stream(rowCount=500)
        while stream_data.hasNext():
           df = stream_data.next()
           ...
        stream_data.close()
        ```
        """
            ...
        def isEmpty(self) -> bool:
        """
        @return True if this Data is empty.
        """
            ...
        @overload
        def _first(self) -> Union[Any]:
        """
        @return first element.
        """
            ...
        @overload
        def _first(self, n: int) -> Union[Data]:
        """
        @return first n element.
        """
            ...
        @overload
        def _first(self, test: Callable[[Union[Any]], bool]) -> Union[Any]:
        """
        Finds first element in this collection satisfying provided condition.
        """
            ...
        def fieldValueType(self, field: str) -> Union[ValueType]:
        """
        @return value type of a named field.
        """
            ...
        def neg(self) -> Union[Data]:
        """
        @return the unary arithmetic `-` operations.
        """
            ...
        def invert(self) -> Union[Data]:
        """
        @return the unary arithmetic `~` operations.
        """
            ...
        def toTuplesBinary(self) -> any:
        """
        Convert the Data to a binary value. This can only be done if
        the underlying object backing the Data is a Data.Pandas backed by a tuple.
        For instance, Data created either from `eval` or `evalMetrics` calls.
        """
            ...
        def toArrowIterator(self) -> ArrowIterator:
        """
        Convert the Data to an {@link ArrowIterator} which will be used to iterate through the arrow values. If this Data
        does not have tuple field or if the tuple fields can't be supported by pyarrow, this function returns null.
        """
            ...
        def toEvalMetricsResult(self) -> Union[EvalMetricsResult]:
        """
        @return {@link EvalMetricsResult} from the current instance.
        Please note that this is only supported when the source of the Data instance is {@link Evaluatable#eval} or {@link FeatureEvaluatable#evalFeatureSetBatch}
        and there are no other operations before calling **toEvalMetricsResult**.
        """
            ...
        def isTimeseries(self) -> bool:
        """
        @return true if the #this is instance of Timeseries or #isEvaluatableEval and can return single Timeseries
        """
            ...
        def inferredInterval(self) -> Union[str]:
        """
        @return the inferred {@link Interval}.
        If {@link #ths} is an instance of {@link Timeseries} or {@link #isEvaluatableEval}, then the interval is
        retrieved from the **Timeseries** or the associated {@link EvalSpec} respectively. In other cases, it's inferred
        from the {@link Data.Flow}.
        Please note an empty string may be returned if the Interval could not be inferred.
        """
            ...
        def dataDefaultAgg(self) -> Union[str]:
        """
        @return default aggregation function for this data
        """
            ...
        def sources(self) -> Array[Data]:
        """
        Extracts all depending {@link Data.Lazy} instances that themselves don't depend on any other {@link Data.Lazy}
        """
            ...
        @classmethod
        def fromEvalSpec(cls, subjectType: Type[[MlSubject]], spec: EvalSpec) -> Data.Lazy:
        """
        Creates feature from {@link Evaluatable#eval}
        """
            ...
        @overload
        @classmethod
        def fromMetric(cls, subjectType: Type[[FeatureEvaluatable]], legacy: LegacyMetric) -> Data.Lazy:
        """
        Creates Data.Lazy instance from {@link LegacyMetric}
        """
            ...
        @overload
        @classmethod
        def fromMetric(cls, subjectType: Type[[FeatureEvaluatable]], interval: str, metric: Union[str,Metric]=None) -> Data.Lazy:
        """
        Creates Data.Lazy instance from metric & interval
        """
            ...
        @classmethod
        def fromFormula(cls, subjectType: Type[[FeatureEvaluatable]], formula: Formula) -> Data.Lazy:
        """
        Creates a {@link Data.Lazy} instance from a {@link Formula} instance
        """
            ...
        @classmethod
        def cacheParentMethods(cls) -> Union[Set[str]]:
        """
        Some methods, such as {@link Data#head}, are generally called once without using the result for subsequent
        operations. For these methods, it makes sense to additionally cache the parent operation, as we anticipate the
        immediate results will not be used for further operations, but rather operations will be called on the parent.
        @return a list of the name of all such methods on Data
        """
            ...
        def _toPandas(self, datasetId: str, returnNullIfNotCached: bool=None) -> Union[Data.Pandas]:
            ...
        @classmethod
        def pushStream(cls, spec: Data.PushStreamSpec=None) -> Data.PushStream:
        """
        Return a stream for writing data.
        """
            ...
        def metadata(self) -> Data.Persisted.Metadata:
        """
        Holds Metadata on this {@link Data.Persisted}
        """
            ...
        @classmethod
        def setDefaultsForPushStreamSpec(cls, spec: Data.PushStreamSpec) -> Data.Persisted.PushStreamSpec:
        """
        Sets default values for a {@link Data.Persisted.PushStreamSpec} based on the given spec.
        """
            ...
        @classmethod
        def filenameForIdx(cls, idx: str, ext: str) -> str:
        """
        Returns the filename for the given index and extension.
        """
            ...
        @classmethod
        def combinePersisted(cls, data: Array[Data.Persisted], tableName: str=None, id: str=None, copy: bool=None) -> Union[Data.Persisted]:
        """
        Combine an array of {@link Data.Persisted} into one.
        @param data
           the Data.Persisted to be combined.
        @param tableName
           table name the returned Data.Persisted.
        @param id
           id for the returned Data.Persisted.
        @param copy
           if set, will copy the files to the target Data.Persisted so the sources are preserved.
        @return the combined Data.Persisted
        """
            ...
        @classmethod
        def _setDefaultsForStreamSpec(cls, spec: Data.StreamSpec=None) -> Union[Data.Persisted.StreamSpec]:
            ...
        @classmethod
        def numFilesForBaseDir(cls, baseDir: str) -> int:
        """
        @param baseDir
                  the base directory to search for files.
        @return the number of files in the baseDir.
        """
            ...
        def upsertToDb(self, serType: Type[[Persistable]], batchSize: int=None, pyRuntime: str=None, spec: UpsertSpec=None) -> None:
        """
        Upsert the objs into database such that each row corresponds to a single instance of the provided **serType**. Please note that {@link Persistable.createBatch} will be used to create the instances in the db.
        """
            ...
        @classmethod
        def baseDir(cls, path: str) -> str:
        """
        Adds the prefix of the absolute path to the local directory where the data is persisted.
        @param path
                   partial path.
        @returns The complete absolute path to the local directory where the data is persisted.
        """
            ...
        def localDir(self) -> str:
        """
        @return the absolute path to the local directory that will store the one or more files
                  associated with this {@link Data.Persisted.Local}.
        """
            ...
        @classmethod
        def localBaseDir(cls) -> str:
        """
        @return the parent directory for {@link #localDir}. This is the directory where all
                  {@link Data.Persisted.Local} should be stored.
        """
            ...
        
        class Stream(Data.Persisted.Stream):
            """
            Similar to {@link Data.Persisted.Stream} but using local filesystem instead of remote.
            
            @remarks this represents a made instance of Data.Persisted.Local.Stream
            """
            
            spec: Optional[Data.StreamSpec]=None
            """
            The spec used to instantiate this stream.
            """

            metadata: Optional[Data.Persisted.Metadata]
            """
            Holds metadata of {@link Data.Persisted}.
            """

            localDir: Optional[str]=None
            def __init__(self, spec: Optional[Data.StreamSpec]=None, metadata: Optional[Data.Persisted.Metadata]=None, localDir: Optional[str]=None) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Data.Persisted.Local.Stream]:
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
            def fromJsonString(cls, json: str) -> Union[Data.Persisted.Local.Stream]:
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
            def fromXmlString(cls, xml: str) -> Union[Data.Persisted.Local.Stream]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted.Local.Stream]:
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
            def replaceType(self, old: Type, new: Type) -> Data.Persisted.Local.Stream:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Local.Stream:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Local.Stream:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Local.Stream]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Local.Stream]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted.Local.Stream:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Local.Stream:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Local.Stream:
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
            def validateObj(self) -> Data.Persisted.Local.Stream:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted.Local.Stream:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted.Local.Stream:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted.Local.Stream:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted.Local.Stream:
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
            def withoutFieldAtPath(self, path: str) -> Data.Persisted.Local.Stream:
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
            def withoutField(self, field: str) -> Data.Persisted.Local.Stream:
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
            def withoutField(self, field: FieldType) -> Data.Persisted.Local.Stream:
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
            def withoutFields(self, fields: Array[str]) -> Data.Persisted.Local.Stream:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted.Local.Stream:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Data.Persisted.Local.Stream:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted.Local.Stream:
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
            def defaultField(self, field: str) -> Data.Persisted.Local.Stream:
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
            def defaultField(self, field: FieldType) -> Data.Persisted.Local.Stream:
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
            def unsetField(self, field: str) -> Data.Persisted.Local.Stream:
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
            def unsetField(self, field: FieldType) -> Data.Persisted.Local.Stream:
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
            def removeField(self, field: str) -> Data.Persisted.Local.Stream:
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
            def removeField(self, field: FieldType) -> Data.Persisted.Local.Stream:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted.Local.Stream:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted.Local.Stream:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted.Local.Stream:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted.Local.Stream:
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
            def mergeJson(self, json: any) -> Data.Persisted.Local.Stream:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted.Local.Stream:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted.Local.Stream:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Data.Persisted.Local.Stream]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted.Local.Stream]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted.Local.Stream]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Data.Persisted.Local.Stream]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Data.Persisted.Local.Stream]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted.Local.Stream]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted.Local.Stream]]:
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
            def toBuilder(self) -> ObjBuilder[Data.Persisted.Local.Stream]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Data.Persisted.Local.Stream]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted.Local.Stream:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Local.Stream:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted.Local.Stream:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Data.Persisted.Local.Stream:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Local.Stream:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted.Local.Stream:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted.Local.Stream:
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
            def afterMake(self) -> Data.Persisted.Local.Stream:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Data.Persisted.Local.Stream:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted.Local.Stream]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted.Local.Stream:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
            def hasNext(self) -> bool:
            """
            @return true iff there is at least one more element to be consumed in the stream.
            """
                ...
            def next(self) -> Data:
            """
            @return the next element in the stream. Throws exception if all elements of the stream have been consumed.
            NOTE: the output can be customized upon stream instantiation through {@link Data.StreamSpec#streamOutput}.
            """
                ...
            def close(self) -> None:
            """
            Deallocates any potential resource(s) used in this stream.
            """
                ...
            def reset(self) -> None:
            """
            Reset the current stream, so that it can be iterated over again.
            This API is recommended for users that want to iterate over the full data multiple times, e.g. epoch-based
            machine learning training.
            """
                ...
            def downloadFiles(self) -> Union[int]:
            """
            API for downloading files from the remote system to local file system.
            Returns the number of files downloaded
            """
                ...
        
        class PushStream(Data.Persisted.PushStream):
            """
            Similar to {@link Data.Persisted.PushStream} but using local filesystem instead of remote.
            
            @remarks this represents a made instance of Data.Persisted.Local.PushStream
            """
            
            spec: Optional[Data.Persisted.PushStreamSpec]
            """
            Configurations specific for writing {@link Data.Persisted} in an incremental manner.
            """

            uuid: Optional[str]
            """
            The uuid used for creating the directory under which files should be uploaded.
            """
            def __init__(self, spec: Optional[Data.Persisted.PushStreamSpec]=None, uuid: Optional[str]=None) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Data.Persisted.Local.PushStream]:
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
            def fromJsonString(cls, json: str) -> Union[Data.Persisted.Local.PushStream]:
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
            def fromXmlString(cls, xml: str) -> Union[Data.Persisted.Local.PushStream]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted.Local.PushStream]:
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
            def replaceType(self, old: Type, new: Type) -> Data.Persisted.Local.PushStream:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Local.PushStream:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Local.PushStream:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Local.PushStream]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Local.PushStream]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted.Local.PushStream:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Local.PushStream:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Local.PushStream:
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
            def validateObj(self) -> Data.Persisted.Local.PushStream:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted.Local.PushStream:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted.Local.PushStream:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted.Local.PushStream:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted.Local.PushStream:
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
            def withoutFieldAtPath(self, path: str) -> Data.Persisted.Local.PushStream:
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
            def withoutField(self, field: str) -> Data.Persisted.Local.PushStream:
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
            def withoutField(self, field: FieldType) -> Data.Persisted.Local.PushStream:
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
            def withoutFields(self, fields: Array[str]) -> Data.Persisted.Local.PushStream:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted.Local.PushStream:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Data.Persisted.Local.PushStream:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted.Local.PushStream:
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
            def defaultField(self, field: str) -> Data.Persisted.Local.PushStream:
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
            def defaultField(self, field: FieldType) -> Data.Persisted.Local.PushStream:
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
            def unsetField(self, field: str) -> Data.Persisted.Local.PushStream:
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
            def unsetField(self, field: FieldType) -> Data.Persisted.Local.PushStream:
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
            def removeField(self, field: str) -> Data.Persisted.Local.PushStream:
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
            def removeField(self, field: FieldType) -> Data.Persisted.Local.PushStream:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted.Local.PushStream:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted.Local.PushStream:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted.Local.PushStream:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted.Local.PushStream:
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
            def mergeJson(self, json: any) -> Data.Persisted.Local.PushStream:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted.Local.PushStream:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted.Local.PushStream:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Data.Persisted.Local.PushStream]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted.Local.PushStream]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted.Local.PushStream]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Data.Persisted.Local.PushStream]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Data.Persisted.Local.PushStream]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted.Local.PushStream]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted.Local.PushStream]]:
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
            def toBuilder(self) -> ObjBuilder[Data.Persisted.Local.PushStream]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Data.Persisted.Local.PushStream]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted.Local.PushStream:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Local.PushStream:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted.Local.PushStream:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Data.Persisted.Local.PushStream:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Local.PushStream:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted.Local.PushStream:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted.Local.PushStream:
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
            def afterMake(self) -> Data.Persisted.Local.PushStream:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Data.Persisted.Local.PushStream:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted.Local.PushStream]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted.Local.PushStream:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
            def append(self, data: Any) -> None:
            """
            Add elements to buffer as long as {@link spec.maxBatchSizeMB} is not exceeded. If adding data exceeds batch size,
            flush to disk. This API accepts numpy.ndarray, pandas.DataFrame, or {@link Data} as input.
            Note: The {@link #data} should fit in memory when materialized.
            """
                ...
            def close(self) -> Data:
            """
            Close the stream.
            """
                ...
            def flush(self, lastBufferItem: Any=None) -> Feature.Store.WriteMetadata:
            """
            Writes a new file to disk with data held in {@link buffer}.
            Called in {@link #append} if {@link spec.maxBatchSizeMB} is reached. Also called in {@link #close}.
            """
                ...
        
        class Config(Config):
            """
            Configuration options for {@link Data.Persisted.Local}.
            
            @remarks this represents a made instance of Data.Persisted.Local.Config
            """
            
            configOverride: Optional[str]=None

            secretOverride: Optional[str]=None

            issues: Optional[Array[str]]=None
            """
            Captures any issues that occurred while deserializing from filesystem
            """

            disableAutoCleanUp: Optional[bool]=None
            """
            If true, disables removal of {@link Data.Persisted.Local} that are GC'ed by Java.
            """
            def __init__(self, configOverride: Optional[str]=None, secretOverride: Optional[str]=None, issues: Optional[Array[str]]=None, disableAutoCleanUp: Optional[bool]=None) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Data.Persisted.Local.Config]:
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
            def fromJsonString(cls, json: str) -> Union[Data.Persisted.Local.Config]:
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
            def fromXmlString(cls, xml: str) -> Union[Data.Persisted.Local.Config]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted.Local.Config]:
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
            def replaceType(self, old: Type, new: Type) -> Data.Persisted.Local.Config:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Local.Config:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Local.Config:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Local.Config]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Local.Config]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted.Local.Config:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Local.Config:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Local.Config:
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
            def validateObj(self) -> Data.Persisted.Local.Config:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted.Local.Config:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted.Local.Config:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted.Local.Config:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted.Local.Config:
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
            def withoutFieldAtPath(self, path: str) -> Data.Persisted.Local.Config:
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
            def withoutField(self, field: str) -> Data.Persisted.Local.Config:
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
            def withoutField(self, field: FieldType) -> Data.Persisted.Local.Config:
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
            def withoutFields(self, fields: Array[str]) -> Data.Persisted.Local.Config:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted.Local.Config:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Data.Persisted.Local.Config:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted.Local.Config:
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
            def defaultField(self, field: str) -> Data.Persisted.Local.Config:
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
            def defaultField(self, field: FieldType) -> Data.Persisted.Local.Config:
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
            def unsetField(self, field: str) -> Data.Persisted.Local.Config:
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
            def unsetField(self, field: FieldType) -> Data.Persisted.Local.Config:
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
            def removeField(self, field: str) -> Data.Persisted.Local.Config:
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
            def removeField(self, field: FieldType) -> Data.Persisted.Local.Config:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted.Local.Config:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted.Local.Config:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted.Local.Config:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted.Local.Config:
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
            def mergeJson(self, json: any) -> Data.Persisted.Local.Config:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted.Local.Config:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted.Local.Config:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Data.Persisted.Local.Config]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted.Local.Config]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted.Local.Config]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Data.Persisted.Local.Config]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Data.Persisted.Local.Config]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted.Local.Config]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted.Local.Config]]:
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
            def toBuilder(self) -> ObjBuilder[Data.Persisted.Local.Config]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Data.Persisted.Local.Config]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted.Local.Config:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Local.Config:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted.Local.Config:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Data.Persisted.Local.Config:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Local.Config:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted.Local.Config:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted.Local.Config:
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
            def afterMake(self) -> Data.Persisted.Local.Config:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Data.Persisted.Local.Config:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted.Local.Config]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted.Local.Config:
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
            def allCached(cls, doNotProduceAll: bool=None) -> Union[Stream[Data.Persisted.Local.Config]]:
            """
            @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
                   `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
            @return stream of all available Cached instances.
            """
                ...
            @classmethod
            def find(cls, filter: str=None, doNotProduceAll: bool=None) -> Union[Stream[Data.Persisted.Local.Config]]:
            """
            @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
            @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
                   `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
            @return existing instances of this type that satisfy filter from data cache.
            """
                ...
            @classmethod
            def findBy(cls, field: str, value: Any, doNotProduceAll: bool=None) -> Union[Stream[Data.Persisted.Local.Config]]:
            """
            @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
                   `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
            @return existing instances of this type that satisfy filter from data cache.
            """
                ...
            @classmethod
            def findByCacheKey(cls, key: str) -> Union[Data.Persisted.Local.Config]:
            """
            @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
            
            @see forCacheKey
            @see getCached
            """
                ...
            @classmethod
            def forCacheKey(cls, key: str) -> Union[Data.Persisted.Local.Config]:
            """
            Returns cached instance by key, with secrets removed.
            """
                ...
            def getCached(self) -> Union[Data.Persisted.Local.Config]:
            """
            @return cached instance.
            
            @see forCacheKey
            @see findByCacheKey
            """
                ...
            def refreshCache(self) -> Union[Data.Persisted.Local.Config]:
            """
            @return newly produced cached instance.
            """
                ...
            def cacheKey(self) -> str:
            """
            @return cache key for this instance.
            """
                ...
            @classmethod
            def produce(cls, key: str) -> Union[Data.Persisted.Local.Config]:
            """
            Should produce an entry for the cache key. This method should not be called directly.
            """
                ...
            @classmethod
            def produceAll(cls) -> Union[Map[str, Data.Persisted.Local.Config]]:
            """
            Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
            """
                ...
            @classmethod
            def doProduceAll(cls) -> Union[Map[str, Data.Persisted.Local.Config]]:
            """
            Override for sub-types to produce all values.
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
            def getConfig(self) -> Data.Persisted.Local.Config:
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
            def getSecret(self) -> Data.Persisted.Local.Config:
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
            @classmethod
            def forConfigKey(cls, configKey: str) -> Union[Data.Persisted.Local.Config]:
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
            def listConfigs(cls, parallel: bool=None, filter: Callable[[str], bool]=None) -> Union[Stream[Data.Persisted.Local.Config]]:
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
            def setConfigValues(self, from_: Map[str, Any], override: str=None) -> None:
            """
            Sets multiple field values to those specified in the map. The map keys are the paths.
            @see setConfigValue
            """
                ...
            @overload
            def setConfigValues(self, from_: Data.Persisted.Local.Config, override: str=None) -> None:
            """
            Sets multiple field values to be the same as the passed instance.
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
            @overload
            def setSecretValues(self, from_: Map[str, Any], override: str=None) -> None:
            """
            Sets multiple secret field values to those specified in the map. The map keys are the paths.
            @see setSecretValue
            """
                ...
            @overload
            def setSecretValues(self, from_: Data.Persisted.Local.Config, override: str=None) -> None:
            """
            Sets multiple secret field values to be the same as the passed instance.
            @see setSecretValue
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
            @return config or secret value for the provided config key, field path, and override if set
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
            def loadConfigAndSecret(cls, configKey: str) -> Union[Data.Persisted.Local.Config]:
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
            Minimum configuration override level. Default is {@link ConfigOverride#APP}.
            """
                ...
            @classmethod
            def maxOverride(cls) -> str:
            """
            Maximum configuration override level. Default is {@link ConfigOverride#ROOT}.
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
            @classmethod
            def secretFieldPaths(cls) -> Union[Array[FieldPath]]:
            """
            returns a list of all field paths that are secret
            """
                ...
            def removeSecrets(self) -> Union[Data.Persisted.Local.Config]:
            """
            @return this config without any secret values.
            """
                ...
            def removeNonSecrets(self) -> Union[Data.Persisted.Local.Config]:
            """
            @return this config with only secret values.
            """
                ...
            def validate(self) -> Data.Persisted.Local.Config:
            """
            Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
            validation and setup.
            """
                ...
            @classmethod
            def rawJson(cls, configKey: str) -> Union[any]:
            """
            @return The cached and merged JSON of all defined configuration templates for this instance, including secrets.
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
    
    class PushStream(Data.PushStream):
        """
        Interface to allow writing {@link Data} in a streaming manner.
        
        @remarks this represents a made instance of Data.Persisted.PushStream
        """
        
        spec: Optional[Data.Persisted.PushStreamSpec]
        """
        Configurations specific for writing {@link Data.Persisted} in an incremental manner.
        """

        uuid: Optional[str]
        """
        The uuid used for creating the directory under which files should be uploaded.
        """
        def __init__(self, spec: Optional[Data.Persisted.PushStreamSpec]=None, uuid: Optional[str]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Data.Persisted.PushStream]:
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
        def fromJsonString(cls, json: str) -> Union[Data.Persisted.PushStream]:
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
        def fromXmlString(cls, xml: str) -> Union[Data.Persisted.PushStream]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted.PushStream]:
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
        def replaceType(self, old: Type, new: Type) -> Data.Persisted.PushStream:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.PushStream:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.PushStream:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.PushStream]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.PushStream]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted.PushStream:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.PushStream:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.PushStream:
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
        def validateObj(self) -> Data.Persisted.PushStream:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted.PushStream:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted.PushStream:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted.PushStream:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted.PushStream:
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
        def withoutFieldAtPath(self, path: str) -> Data.Persisted.PushStream:
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
        def withoutField(self, field: str) -> Data.Persisted.PushStream:
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
        def withoutField(self, field: FieldType) -> Data.Persisted.PushStream:
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
        def withoutFields(self, fields: Array[str]) -> Data.Persisted.PushStream:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted.PushStream:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Data.Persisted.PushStream:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted.PushStream:
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
        def defaultField(self, field: str) -> Data.Persisted.PushStream:
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
        def defaultField(self, field: FieldType) -> Data.Persisted.PushStream:
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
        def unsetField(self, field: str) -> Data.Persisted.PushStream:
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
        def unsetField(self, field: FieldType) -> Data.Persisted.PushStream:
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
        def removeField(self, field: str) -> Data.Persisted.PushStream:
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
        def removeField(self, field: FieldType) -> Data.Persisted.PushStream:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted.PushStream:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted.PushStream:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted.PushStream:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted.PushStream:
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
        def mergeJson(self, json: any) -> Data.Persisted.PushStream:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted.PushStream:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted.PushStream:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Data.Persisted.PushStream]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted.PushStream]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted.PushStream]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Data.Persisted.PushStream]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Data.Persisted.PushStream]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted.PushStream]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted.PushStream]]:
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
        def toBuilder(self) -> ObjBuilder[Data.Persisted.PushStream]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Data.Persisted.PushStream]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted.PushStream:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.PushStream:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted.PushStream:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Data.Persisted.PushStream:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.PushStream:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted.PushStream:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted.PushStream:
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
        def afterMake(self) -> Data.Persisted.PushStream:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Data.Persisted.PushStream:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted.PushStream]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted.PushStream:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def append(self, data: Any) -> None:
        """
        Add elements to buffer as long as {@link spec.maxBatchSizeMB} is not exceeded. If adding data exceeds batch size,
        flush to disk. This API accepts numpy.ndarray, pandas.DataFrame, or {@link Data} as input.
        Note: The {@link #data} should fit in memory when materialized.
        """
            ...
        def close(self) -> Data:
        """
        Close the stream.
        """
            ...
        def flush(self, lastBufferItem: Any=None) -> Feature.Store.WriteMetadata:
        """
        Writes a new file to disk with data held in {@link buffer}.
        Called in {@link #append} if {@link spec.maxBatchSizeMB} is reached. Also called in {@link #close}.
        """
            ...
    
    class Stream(Data.Stream):
        """
        Interface to allow reading {@link Data.Persisted} in a streaming manner.
        NOTE: this stream is only implemented to be "in process", which means that passing this stream instance through
        a C3 Action will not result in consistent behavior.
        
        @remarks this represents a made instance of Data.Persisted.Stream
        """
        
        spec: Optional[Data.StreamSpec]=None
        """
        The spec used to instantiate this stream.
        """

        metadata: Optional[Data.Persisted.Metadata]
        """
        Holds metadata of {@link Data.Persisted}.
        """

        localDir: Optional[str]=None
        def __init__(self, spec: Optional[Data.StreamSpec]=None, metadata: Optional[Data.Persisted.Metadata]=None, localDir: Optional[str]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Data.Persisted.Stream]:
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
        def fromJsonString(cls, json: str) -> Union[Data.Persisted.Stream]:
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
        def fromXmlString(cls, xml: str) -> Union[Data.Persisted.Stream]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted.Stream]:
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
        def replaceType(self, old: Type, new: Type) -> Data.Persisted.Stream:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Stream:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Stream:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Stream]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Stream]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted.Stream:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Stream:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Stream:
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
        def validateObj(self) -> Data.Persisted.Stream:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted.Stream:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted.Stream:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted.Stream:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted.Stream:
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
        def withoutFieldAtPath(self, path: str) -> Data.Persisted.Stream:
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
        def withoutField(self, field: str) -> Data.Persisted.Stream:
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
        def withoutField(self, field: FieldType) -> Data.Persisted.Stream:
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
        def withoutFields(self, fields: Array[str]) -> Data.Persisted.Stream:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted.Stream:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Data.Persisted.Stream:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted.Stream:
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
        def defaultField(self, field: str) -> Data.Persisted.Stream:
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
        def defaultField(self, field: FieldType) -> Data.Persisted.Stream:
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
        def unsetField(self, field: str) -> Data.Persisted.Stream:
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
        def unsetField(self, field: FieldType) -> Data.Persisted.Stream:
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
        def removeField(self, field: str) -> Data.Persisted.Stream:
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
        def removeField(self, field: FieldType) -> Data.Persisted.Stream:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted.Stream:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted.Stream:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted.Stream:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted.Stream:
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
        def mergeJson(self, json: any) -> Data.Persisted.Stream:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted.Stream:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted.Stream:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Data.Persisted.Stream]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted.Stream]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted.Stream]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Data.Persisted.Stream]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Data.Persisted.Stream]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted.Stream]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted.Stream]]:
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
        def toBuilder(self) -> ObjBuilder[Data.Persisted.Stream]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Data.Persisted.Stream]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted.Stream:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Stream:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted.Stream:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Data.Persisted.Stream:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Stream:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted.Stream:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted.Stream:
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
        def afterMake(self) -> Data.Persisted.Stream:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Data.Persisted.Stream:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted.Stream]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted.Stream:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def hasNext(self) -> bool:
        """
        @return true iff there is at least one more element to be consumed in the stream.
        """
            ...
        def next(self) -> Data:
        """
        @return the next element in the stream. Throws exception if all elements of the stream have been consumed.
        NOTE: the output can be customized upon stream instantiation through {@link Data.StreamSpec#streamOutput}.
        """
            ...
        def close(self) -> None:
        """
        Deallocates any potential resource(s) used in this stream.
        """
            ...
        def reset(self) -> None:
        """
        Reset the current stream, so that it can be iterated over again.
        This API is recommended for users that want to iterate over the full data multiple times, e.g. epoch-based
        machine learning training.
        """
            ...
        def downloadFiles(self) -> Union[int]:
        """
        API for downloading files from the remote system to local file system.
        Returns the number of files downloaded
        """
            ...
    
    class Metadata():
        """
        Type holding metadata for data persisted.
        
        @remarks this represents a made instance of Data.Persisted.Metadata
        """
        
        numFiles: Optional[int]
        """
        Total number of files for this {@link Data.Persisted}.
        """

        baseDir: Optional[str]
        """
        Base directory in {@link FileSystem} where files are stored.
        """

        format: Optional[str]
        """
        Format of persisted data
        """
        def __init__(self, numFiles: Optional[int]=None, baseDir: Optional[str]=None, format: Optional[str]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Data.Persisted.Metadata]:
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
        def fromJsonString(cls, json: str) -> Union[Data.Persisted.Metadata]:
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
        def fromXmlString(cls, xml: str) -> Union[Data.Persisted.Metadata]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted.Metadata]:
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
        def replaceType(self, old: Type, new: Type) -> Data.Persisted.Metadata:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Metadata:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.Metadata:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Metadata]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.Metadata]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted.Metadata:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Metadata:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.Metadata:
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
        def validateObj(self) -> Data.Persisted.Metadata:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted.Metadata:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted.Metadata:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted.Metadata:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted.Metadata:
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
        def withoutFieldAtPath(self, path: str) -> Data.Persisted.Metadata:
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
        def withoutField(self, field: str) -> Data.Persisted.Metadata:
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
        def withoutField(self, field: FieldType) -> Data.Persisted.Metadata:
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
        def withoutFields(self, fields: Array[str]) -> Data.Persisted.Metadata:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted.Metadata:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Data.Persisted.Metadata:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted.Metadata:
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
        def defaultField(self, field: str) -> Data.Persisted.Metadata:
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
        def defaultField(self, field: FieldType) -> Data.Persisted.Metadata:
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
        def unsetField(self, field: str) -> Data.Persisted.Metadata:
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
        def unsetField(self, field: FieldType) -> Data.Persisted.Metadata:
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
        def removeField(self, field: str) -> Data.Persisted.Metadata:
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
        def removeField(self, field: FieldType) -> Data.Persisted.Metadata:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted.Metadata:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted.Metadata:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted.Metadata:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted.Metadata:
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
        def mergeJson(self, json: any) -> Data.Persisted.Metadata:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted.Metadata:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted.Metadata:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Data.Persisted.Metadata]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted.Metadata]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted.Metadata]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Data.Persisted.Metadata]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Data.Persisted.Metadata]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted.Metadata]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted.Metadata]]:
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
        def toBuilder(self) -> ObjBuilder[Data.Persisted.Metadata]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Data.Persisted.Metadata]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted.Metadata:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Metadata:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted.Metadata:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Data.Persisted.Metadata:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.Metadata:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted.Metadata:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted.Metadata:
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
        def afterMake(self) -> Data.Persisted.Metadata:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Data.Persisted.Metadata:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted.Metadata]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted.Metadata:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
    
    class PushStreamSpec(Data.PushStreamSpec):
        """
        Configurations specific for writing {@link Data.Persisted} in an incremental manner.
        
        @remarks this represents a made instance of Data.Persisted.PushStreamSpec
        """
        
        maxBatchSizeMB: Optional[int]=None
        """
        Max size in memory.
        """

        fileFormat: Optional[str]=None
        """
        Format to write the data in.
        """

        local: Optional[bool]=None
        """
        If True, use the local filesystem for streaming. Otherwise, use the remote filesystem.
        """
        def __init__(self, maxBatchSizeMB: Optional[int]=None, fileFormat: Optional[str]=None, local: Optional[bool]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Data.Persisted.PushStreamSpec]:
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
        def fromJsonString(cls, json: str) -> Union[Data.Persisted.PushStreamSpec]:
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
        def fromXmlString(cls, xml: str) -> Union[Data.Persisted.PushStreamSpec]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Persisted.PushStreamSpec]:
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
        def replaceType(self, old: Type, new: Type) -> Data.Persisted.PushStreamSpec:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.PushStreamSpec]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Persisted.PushStreamSpec]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def validateObj(self) -> Data.Persisted.PushStreamSpec:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def withoutFieldAtPath(self, path: str) -> Data.Persisted.PushStreamSpec:
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
        def withoutField(self, field: str) -> Data.Persisted.PushStreamSpec:
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
        def withoutField(self, field: FieldType) -> Data.Persisted.PushStreamSpec:
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
        def withoutFields(self, fields: Array[str]) -> Data.Persisted.PushStreamSpec:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Persisted.PushStreamSpec:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Data.Persisted.PushStreamSpec:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Persisted.PushStreamSpec:
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
        def defaultField(self, field: str) -> Data.Persisted.PushStreamSpec:
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
        def defaultField(self, field: FieldType) -> Data.Persisted.PushStreamSpec:
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
        def unsetField(self, field: str) -> Data.Persisted.PushStreamSpec:
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
        def unsetField(self, field: FieldType) -> Data.Persisted.PushStreamSpec:
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
        def removeField(self, field: str) -> Data.Persisted.PushStreamSpec:
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
        def removeField(self, field: FieldType) -> Data.Persisted.PushStreamSpec:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Persisted.PushStreamSpec:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Persisted.PushStreamSpec:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Persisted.PushStreamSpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Persisted.PushStreamSpec:
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
        def mergeJson(self, json: any) -> Data.Persisted.PushStreamSpec:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Persisted.PushStreamSpec:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Data.Persisted.PushStreamSpec:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Data.Persisted.PushStreamSpec]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Data.Persisted.PushStreamSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Persisted.PushStreamSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Data.Persisted.PushStreamSpec]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Data.Persisted.PushStreamSpec]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Data.Persisted.PushStreamSpec]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Persisted.PushStreamSpec]]:
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
        def toBuilder(self) -> ObjBuilder[Data.Persisted.PushStreamSpec]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Data.Persisted.PushStreamSpec]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Persisted.PushStreamSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Persisted.PushStreamSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Persisted.PushStreamSpec:
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
        def afterMake(self) -> Data.Persisted.PushStreamSpec:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Data.Persisted.PushStreamSpec:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Persisted.PushStreamSpec]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Persisted.PushStreamSpec:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...

