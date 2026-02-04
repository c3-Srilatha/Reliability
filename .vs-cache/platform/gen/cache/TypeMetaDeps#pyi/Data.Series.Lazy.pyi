#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Data.Series.Rolling import Data.Series.Rolling
from c3.platform.DataImpl.Lazy import DataImpl.Lazy
from c3.platform.ToPySrcSpec import ToPySrcSpec
from c3.platform.Include import Include
from c3.platform.Data.UInt64Index import Data.UInt64Index
from c3.platform.FieldPath import FieldPath
from c3.platform.PkgInference import PkgInference
from c3.platform.StreamType import StreamType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data.Visitor import Data.Visitor
from c3.platform.Map import Map
from c3.platform.PyAst.Module import PyAst.Module
from c3.platform.Promise import Promise
from c3.platform.Data.Series import Data.Series
from c3.platform.Data.Series.Ref import Data.Series.Ref
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Dataset import Dataset
from c3.platform.FieldType import FieldType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Data.IntervalIndex import Data.IntervalIndex
from c3.platform.Data.Series.StringMethods import Data.Series.StringMethods
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.Data.RangeIndex import Data.RangeIndex
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Iterator import Iterator
from c3.platform.DataToWorkflowSpec import DataToWorkflowSpec
from c3.platform.SetType import SetType
from c3.platform.DataToPyAstVisitorCtx import DataToPyAstVisitorCtx
from c3.platform.MapType import MapType
from c3.platform.Data.Flow import Data.Flow
from c3.platform.DataImpl import DataImpl
from c3.platform.Exclude import Exclude
from c3.platform.Data.Series.Pandas import Data.Series.Pandas
from c3.platform.Data.DatetimeIndex import Data.DatetimeIndex
from c3.platform.Action import Action
from c3.platform.MethodType import MethodType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Data.TimedeltaIndex import Data.TimedeltaIndex
from c3.platform.Data.Index import Data.Index
from c3.platform.DataIlocIndexer import DataIlocIndexer
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
from c3.platform.SetBuilder import SetBuilder
from c3.platform.DataToFlowSpec import DataToFlowSpec
from c3.platform.DataLocIndexer import DataLocIndexer
from c3.platform.Workflow import Workflow
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Data.CheckEqualsSpec import Data.CheckEqualsSpec
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.IdTimeRangeFilterSpec import IdTimeRangeFilterSpec
from c3.platform.Data.MultiIndex import Data.MultiIndex

# Python definitions for the C3 type Data.Series.Lazy


class Lazy(DataImpl.Lazy, Data.Series):
    """
    Internal instance of {@link Data.Series} as partially applied function.
    
    @remarks this represents a made instance of Data.Series.Lazy
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
    def __init__(self, STATELESS_CACHE: Optional[str]=None, this: Optional[Any]=None, action: Optional[str]=None, args: Optional[Map[str, Any]]=None, _inferredOutType: Optional[Map[str, ValueType]]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[Data.Series.Lazy]:
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
    def fromJsonString(cls, json: str) -> Union[Data.Series.Lazy]:
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
    def fromXmlString(cls, xml: str) -> Union[Data.Series.Lazy]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Data.Series.Lazy]:
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
    def replaceType(self, old: Type, new: Type) -> Data.Series.Lazy:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Series.Lazy:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Data.Series.Lazy:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Series.Lazy]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Data.Series.Lazy]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Data.Series.Lazy:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Series.Lazy:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Data.Series.Lazy:
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
    def validateObj(self) -> Data.Series.Lazy:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Data.Series.Lazy:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Data.Series.Lazy:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Data.Series.Lazy:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Data.Series.Lazy:
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
    def withoutFieldAtPath(self, path: str) -> Data.Series.Lazy:
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
    def withoutField(self, field: str) -> Data.Series.Lazy:
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
    def withoutField(self, field: FieldType) -> Data.Series.Lazy:
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
    def withoutFields(self, fields: Array[str]) -> Data.Series.Lazy:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Data.Series.Lazy:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Data.Series.Lazy:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Data.Series.Lazy:
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
    def defaultField(self, field: str) -> Data.Series.Lazy:
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
    def defaultField(self, field: FieldType) -> Data.Series.Lazy:
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
    def unsetField(self, field: str) -> Data.Series.Lazy:
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
    def unsetField(self, field: FieldType) -> Data.Series.Lazy:
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
    def removeField(self, field: str) -> Data.Series.Lazy:
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
    def removeField(self, field: FieldType) -> Data.Series.Lazy:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Data.Series.Lazy:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Data.Series.Lazy:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Data.Series.Lazy:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Data.Series.Lazy:
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
    def mergeJson(self, json: any) -> Data.Series.Lazy:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Data.Series.Lazy:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Data.Series.Lazy:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Data.Series.Lazy]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @overload
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Data.Series.Lazy]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @overload
    def array(self) -> Union[Array[Any]]:
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Data.Series.Lazy]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Data.Series.Lazy]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Data.Series.Lazy]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Data.Series.Lazy]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Data.Series.Lazy]]:
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
    def toBuilder(self) -> ObjBuilder[Data.Series.Lazy]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Data.Series.Lazy]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Data.Series.Lazy:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Data.Series.Lazy:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Data.Series.Lazy:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Data.Series.Lazy:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Data.Series.Lazy:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Data.Series.Lazy:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Data.Series.Lazy:
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
    def afterMake(self) -> Data.Series.Lazy:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Data.Series.Lazy:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Data.Series.Lazy]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Data.Series.Lazy:
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
    def dereference(self) -> Data.Series:
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
    def cache(self, ds: Dataset=None) -> Union[Data.Series]:
    """
    Cache and return a concrete {@link DataImpl} according to this Data's execution mode.
    If a dataset is provided, the resulting {@link DataImpl} will be stateful and belong to that dataset,
    otherwise it will be stateless.
    if `cache` is invoked on a {@link Data.Lazy}, the corresponding concrete {@link DataImpl} will be cached on
    this instance with the dataset id as cache key, or {@link DataImpl.Lazy#STATELESS_CACHE} if
    no dataset is provided. see for example {@link Data.Lazy#_toPandas}.
    """
        ...
    def toDataRef(self, ds: Dataset=None) -> Union[Data.Series.Ref]:
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
    def fromPySrc(cls, pySrc: str, dfs: Set[DataImpl]=None, vars: Map[str, Any]=None, dataset: Dataset=None) -> Union[Data.Series.Lazy]:
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
    def _jsDataProxy(cls, inst: Any) -> Data.Series.Lazy:
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
    def create(cls, this_: Any, action: str, args: Map[str, Any]=None) -> Data.Series.Lazy:
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
    def T(self) -> Union[Data.Series]:
        ...
    def attrs(self) -> Union[Map[Any, Any]]:
        ...
    def axes(self) -> Union[Array[Any]]:
        ...
    def dtype(self) -> Union[Any]:
        ...
    def dtypes(self) -> Union[Any]:
        ...
    def empty(self) -> Union[Any]:
        ...
    def flags(self) -> Union[Any]:
        ...
    def hasnans(self) -> bool:
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
    def is_monotonic(self) -> Union[Any]:
        ...
    def is_monotonic_decreasing(self) -> Union[Any]:
        ...
    def is_monotonic_increasing(self) -> Union[Any]:
        ...
    def is_unique(self) -> Union[Any]:
        ...
    def loc(self) -> Union[DataLocIndexer]:
    """
    Access a group of rows and columns by label(s) or a boolean array.
    
    Supports a subset of arguments to [pandas.DataFrame.loc](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.loc.html)
    """
        ...
    def nbytes(self) -> Union[int]:
        ...
    def ndim(self) -> Union[int]:
        ...
    def shape(self) -> Union[Any]:
        ...
    def size(self) -> Union[int]:
        ...
    def values(self) -> Union[Array[Any]]:
        ...
    def abs(self) -> Union[Data.Series]:
        ...
    def add(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def add_prefix(self, prefix: str=None) -> Union[Data.Series]:
        ...
    def add_suffix(self, suffix: str=None) -> Union[Data.Series]:
        ...
    def agg(self, func: Any=None, axis: Any=None) -> Union[Any]:
        ...
    def aggregate(self, func: Any=None, axis: Any=None) -> Union[Any]:
        ...
    def align(self, other: Any=None, join: Any=None, axis: Any=None, level: Any=None, copy: Any=None, fill_value: Any=None, method: Any=None, limit: Any=None, fill_axis: Any=None, broadcast_axis: Any=None) -> Union[Array[Any]]:
        ...
    def all(self, axis: Any=None, bool_only: Any=None, skipna: Any=None, level: Any=None) -> Union[Any]:
        ...
    def any(self, axis: Any=None, bool_only: Any=None, skipna: Any=None, level: Any=None) -> Union[Any]:
        ...
    def append(self, to_append: Any=None, ignore_index: Any=None, verify_integrity: Any=None) -> Union[Data.Series]:
        ...
    def apply(self, func: Any=None, convert_dtype: Any=None, args: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def argmax(self, axis: Any=None, skipna: Any=None) -> Union[int]:
        ...
    def argmin(self, axis: Any=None, skipna: Any=None) -> Union[int]:
        ...
    def argsort(self, axis: Any=None, kind: Any=None, order: Any=None) -> Union[Data.Series]:
        ...
    def asfreq(self, freq: Any=None, method: Any=None, how: str=None, normalize: Any=None, fill_value: Any=None) -> Union[Data.Series]:
        ...
    def asof(self, where: Any=None, subset: Any=None) -> Union[Any]:
        ...
    def astype(self, dtype: Any=None, copy: Any=None, errors: str=None) -> Union[Data.Series]:
        ...
    def at_time(self, time: Any=None, asof: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def autocorr(self, lag: Any=None) -> Union[float]:
        ...
    def backfill(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data.Series]:
        ...
    def between(self, left: Any=None, right: Any=None, inclusive: Any=None) -> Union[Data.Series]:
        ...
    def between_time(self, start_time: Any=None, end_time: Any=None, include_start: Any=None, include_end: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def bfill(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data.Series]:
        ...
    def bool(self) -> Union[Any]:
        ...
    def clip(self, lower: Any=None, upper: Any=None, axis: Any=None, inplace: Any=None) -> Union[Data.Series]:
        ...
    def combine(self, other: Any=None, func: Any=None, fill_value: Any=None) -> Union[Data.Series]:
        ...
    def combine_first(self, other: Any=None) -> Union[Data.Series]:
        ...
    def compare(self, other: Data.Series=None, align_axis: Any=None, keep_shape: Any=None, keep_equal: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def convert_dtypes(self, infer_objects: Any=None, convert_string: Any=None, convert_integer: Any=None, convert_boolean: Any=None, convert_floating: Any=None) -> Union[Data.Series]:
        ...
    def copy(self, deep: Any=None) -> Union[Data.Series]:
        ...
    def corr(self, other: Any=None, method: Any=None, min_periods: Any=None) -> Union[float]:
        ...
    def count(self, level: Any=None) -> Union[Any]:
        ...
    def cov(self, other: Data.Series=None, min_periods: int=None, ddof: int=None) -> Union[float]:
        ...
    def cummax(self, axis: Any=None, skipna: Any=None) -> Union[Data.Series]:
        ...
    def cummin(self, axis: Any=None, skipna: Any=None) -> Union[Data.Series]:
        ...
    def cumprod(self, axis: Any=None, skipna: Any=None) -> Union[Data.Series]:
        ...
    def cumsum(self, axis: Any=None, skipna: Any=None) -> Union[Data.Series]:
        ...
    def describe(self, percentiles: Any=None, include: Any=None, exclude: Any=None, datetime_is_numeric: Any=None) -> Union[Data.Series]:
        ...
    def diff(self, periods: int=None) -> Union[Data.Series]:
        ...
    def div(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def divide(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def divmod(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Array[Any]]:
        ...
    def dot(self, other: Any=None) -> Union[Any]:
        ...
    def drop(self, labels: Any=None, axis: Any=None, index: Any=None, columns: Any=None, level: Any=None, inplace: Any=None, errors: Any=None) -> Union[Data.Series]:
        ...
    def drop_duplicates(self, keep: Any=None, inplace: Any=None) -> Union[Data.Series]:
        ...
    def droplevel(self, level: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def dropna(self, axis: Any=None, inplace: Any=None, how: Any=None) -> Union[Data.Series]:
        ...
    def duplicated(self, keep: Any=None) -> Union[Data.Series]:
        ...
    def eq(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def equals(self, other: Any=None) -> Union[Any]:
        ...
    def ewm(self, com: float=None, span: float=None, halflife: Any=None, alpha: float=None, min_periods: int=None, adjust: Any=None, ignore_na: Any=None, axis: Any=None, times: Any=None) -> Union[Data.Series]:
        ...
    def expanding(self, min_periods: int=None, center: Any=None, axis: Any=None, method: str=None) -> Union[Any]:
        ...
    def explode(self, ignore_index: Any=None) -> Union[Data.Series]:
        ...
    def factorize(self, sort: Any=None, na_sentinel: int=None) -> Union[Array[Any]]:
        ...
    def ffill(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data.Series]:
        ...
    def fillna(self, value: Any=None, method: Any=None, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data.Series]:
        ...
    def filter(self, items: Any=None, like: str=None, regex: str=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def first(self, offset: Any=None) -> Union[Data.Series]:
        ...
    def first_valid_index(self) -> Union[Any]:
        ...
    def floordiv(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def ge(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def get(self, key: Any=None, default: Any=None) -> Union[Any]:
        ...
    def groupby(self, by: Any=None, axis: Any=None, level: Any=None, as_index: Any=None, sort: Any=None, group_keys: Any=None, squeeze: Any=None, observed: Any=None, dropna: Any=None) -> Union[Any]:
        ...
    def gt(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def head(self, n: int=None) -> Union[Data.Series]:
        ...
    def hist(self, by: Any=None, ax: Any=None, grid: Any=None, xlabelsize: int=None, xrot: float=None, ylabelsize: int=None, yrot: float=None, figsize: =None, bins: Any=None, backend: str=None, legend: Any=None) -> Union[Any]:
        ...
    def idxmax(self, axis: Any=None, skipna: Any=None) -> Union[Any]:
        ...
    def idxmin(self, axis: Any=None, skipna: Any=None) -> Union[Any]:
        ...
    def infer_objects(self) -> Union[Data.Series]:
        ...
    def interpolate(self, method: str=None, axis: Any=None, limit: int=None, inplace: Any=None, limit_direction: str=None, limit_area: str=None, downcast: str=None) -> Union[Data.Series]:
        ...
    def isin(self, values: Any=None) -> Union[Data.Series]:
        ...
    def isna(self) -> Union[Data.Series]:
        ...
    def isnull(self) -> Union[Data.Series]:
        ...
    def item(self) -> Union[Any]:
        ...
    def items(self) -> Union[Any]:
        ...
    def iteritems(self) -> Union[Any]:
        ...
    def keys(self) -> Union[Any]:
        ...
    def kurt(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def kurtosis(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def last(self, offset: Any=None) -> Union[Data.Series]:
        ...
    def last_valid_index(self) -> Union[Any]:
        ...
    def le(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def lt(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def mad(self, axis: Any=None, skipna: Any=None, level: Any=None) -> Union[Any]:
        ...
    def map(self, arg: Any=None, na_action: Any=None) -> Union[Data.Series]:
        ...
    def mask(self, cond: Any=None, other: Any=None, inplace: Any=None, axis: Any=None, level: Any=None, errors: Any=None, try_cast: Any=None) -> Union[Data.Series]:
        ...
    def max(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def mean(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def median(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def memory_usage(self, index: Any=None, deep: Any=None) -> Union[int]:
        ...
    def min(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def mod(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def mode(self, dropna: Any=None) -> Union[Data.Series]:
        ...
    def mul(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    @overload
    def multiply(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    @overload
    def multiply(self, other: Any) -> Any:
        ...
    def ne(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def nlargest(self, n: int=None, keep: Any=None) -> Union[Data.Series]:
        ...
    def notna(self) -> Union[Data.Series]:
        ...
    def notnull(self) -> Union[Data.Series]:
        ...
    def nsmallest(self, n: int=None, keep: str=None) -> Union[Data.Series]:
        ...
    def nunique(self, dropna: Any=None) -> Union[int]:
        ...
    def pad(self, axis: Any=None, inplace: Any=None, limit: int=None, downcast: Any=None) -> Union[Data.Series]:
        ...
    def pct_change(self, periods: int=None, fill_method: Any=None, limit: int=None, freq: Any=None) -> Union[Data.Series]:
        ...
    def pop(self, item: Any=None) -> Union[Any]:
        ...
    def pow(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def prod(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None, min_count: Any=None) -> Union[Any]:
        ...
    def product(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None, min_count: Any=None) -> Union[Any]:
        ...
    def quantile(self, q: Any=None, interpolation: Any=None) -> Union[Any]:
        ...
    def radd(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def rank(self, axis: Any=None, method: str=None, numeric_only: Any=None, na_option: str=None, ascending: Any=None, pct: Any=None) -> Union[Data.Series]:
        ...
    def ravel(self, order: Any=None) -> Union[Array[Any]]:
        ...
    def rdiv(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def rdivmod(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Array[Any]]:
        ...
    @overload
    def reindex(self, index: Any=None) -> Union[Data.Series]:
        ...
    @overload
    def reindex(self, index: Any=None, method: str=None, copy: Any=None, level: Union[int,str]=None, fill_value: Any=None, limit: Any=None, tolerance: Any=None) -> Union[Data.Series]:
    """
    Implements pandas reindex semantics from pandas version 1.3.4 for Data.Series
    """
        ...
    def reindex_like(self, other: Any=None, method: str=None, copy: Any=None, limit: Any=None, tolerance: Any=None) -> Union[Data.Series]:
        ...
    def rename(self, index: Any=None, axis: Any=None, copy: Any=None, inplace: Any=None, level: Any=None, errors: Any=None) -> Union[Data.Series]:
        ...
    def rename_axis(self, mapper: Any=None) -> Union[Data.Series]:
        ...
    def reorder_levels(self, order: Any=None) -> Union[Data.Series]:
        ...
    def repeat(self, repeats: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def replace(self, to_replace: Any=None, value: Any=None, inplace: Any=None, limit: int=None, regex: Any=None, method: Any=None) -> Union[Data.Series]:
        ...
    def resample(self, rule: Any=None, axis: Any=None, closed: str=None, label: str=None, convention: str=None, kind: str=None, loffset: Any=None, base: int=None, on: Any=None, level: Any=None, origin: Any=None, offset: Any=None) -> Union[Any]:
        ...
    def reset_index(self, level: Any=None, drop: Any=None, name: Any=None, inplace: Any=None) -> Union[Union[Data,Data.Series]]:
        ...
    def rfloordiv(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def rmod(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def rmul(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def rolling(self, window: Any=None, min_periods: int=None, center: Any=None, win_type: str=None, on: str=None, axis: Any=None, closed: str=None, method: str=None) -> Union[Data.Series.Rolling]:
        ...
    def round(self, decimals: int=None) -> Union[Data.Series]:
        ...
    def rpow(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def rsub(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def rtruediv(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def sample(self, n: int=None, frac: float=None, replace: Any=None, weights: Any=None, random_state: int=None, axis: Any=None, ignore_index: Any=None) -> Union[Data.Series]:
        ...
    def searchsorted(self, value: Any=None, side: Any=None, sorter: Any=None) -> Union[Union[int,Array[int]]]:
        ...
    def sem(self, axis: Any=None, skipna: Any=None, level: Any=None, ddof: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def set_axis(self, labels: Any=None, axis: Any=None, inplace: Any=None) -> Union[Data.Series]:
        ...
    def set_flags(self, copy: Any=None, allows_duplicate_labels: Any=None) -> Union[Data.Series]:
        ...
    def shift(self, periods: int=None, freq: Any=None, axis: Any=None, fill_value: Any=None) -> Union[Data.Series]:
        ...
    def skew(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def slice_shift(self, periods: int=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def sort_index(self, axis: Any=None, level: Any=None, ascending: Any=None, inplace: Any=None, kind: str=None, na_position: str=None, sort_remaining: Any=None, ignore_index: Any=None, key: Any=None) -> Union[Data.Series]:
        ...
    def sort_values(self, axis: Any=None, ascending: Any=None, inplace: Any=None, kind: str=None, na_position: str=None, ignore_index: Any=None, key: Any=None) -> Union[Data.Series]:
        ...
    def squeeze(self, axis: Any=None) -> Union[Any]:
        ...
    def std(self, axis: Any=None, skipna: Any=None, level: Any=None, ddof: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def sub(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    @overload
    def subtract(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    @overload
    def subtract(self, other: Any) -> Any:
        ...
    def sum(self, axis: Any=None, skipna: Any=None, level: Any=None, numeric_only: Any=None, min_count: Any=None) -> Union[Any]:
        ...
    def swapaxes(self, axis1: Any=None, axis2: Any=None, copy: Any=None) -> Union[Data.Series]:
        ...
    def swaplevel(self, i: Any=None, j: Any=None, copy: Any=None) -> Union[Data.Series]:
        ...
    def tail(self, n: int=None) -> Union[Data.Series]:
        ...
    def take(self, indices: Any=None, axis: Any=None, is_copy: Any=None) -> Union[Data.Series]:
        ...
    def to_clipboard(self, excel: Any=None, sep: str=None) -> Union[Any]:
        ...
    def to_csv(self, path_or_buf: Any=None, sep: str=None, na_rep: str=None, float_format: str=None, columns: Any=None, header: Any=None, index: Any=None, index_label: Any=None, mode: str=None, encoding: str=None, compression: Any=None, quoting: int=None, quotechar: str=None, line_terminator: str=None, chunksize: int=None, date_format: str=None, doublequote: Any=None, escapechar: str=None, decimal: str=None, errors: str=None, storage_options: Any=None) -> Union[str]:
        ...
    def to_dict(self, into: Any=None) -> Union[Map[Any, Any]]:
        ...
    def to_excel(self, excel_writer: Any=None, sheet_name: str=None, na_rep: str=None, float_format: str=None, columns: Any=None, header: Any=None, index: Any=None, index_label: Any=None, startrow: Any=None, startcol: Any=None, engine: Any=None, merge_cells: Any=None, encoding: Any=None, inf_rep: Any=None, verbose: Any=None, freeze_panes: Any=None, storage_options: Any=None) -> Union[Any]:
        ...
    def to_frame(self, name: Any=None) -> Union[Data]:
        ...
    def to_hdf(self, path_or_buf: Any=None, key: str=None, mode: str=None, complevel: int=None, complib: str=None, append: Any=None, format: str=None, index: Any=None, min_itemsize: Union[int,Map[str, int]]=None, nan_rep: Any=None, dropna: Any=None, data_columns: Any=None, errors: str=None, encoding: str=None) -> Union[Any]:
        ...
    def to_json(self, path_or_buf: Any=None, orient: str=None, date_format: str=None, double_precision: int=None, force_ascii: Any=None, date_unit: str=None, default_handler: Callable[[Union[Any]], Union[Any]]=None, lines: Any=None, compression: Any=None, index: Any=None, indent: int=None, storage_options: Any=None) -> Union[str]:
        ...
    def to_latex(self, buf: Any=None, columns: Any=None, col_space: Any=None, header: Any=None, index: Any=None, na_rep: Any=None, formatters: Any=None, float_format: Any=None, sparsify: Any=None, index_names: Any=None, bold_rows: Any=None, column_format: Any=None, longtable: Any=None, escape: Any=None, encoding: Any=None, decimal: Any=None, multicolumn: Any=None, multicolumn_format: Any=None, multirow: Any=None, caption: Any=None, label: Any=None, position: Any=None) -> Union[str]:
        ...
    def to_list(self) -> Union[Array[Any]]:
        ...
    def to_markdown(self, buf: Any=None, mode: str=None, index: Any=None, storage_options: Any=None) -> Union[str]:
        ...
    def to_period(self, freq: Any=None, copy: Any=None) -> Union[Data.Series]:
        ...
    def to_pickle(self, path: Any=None, compression: Any=None, protocol: int=None, storage_options: Any=None) -> Union[Any]:
        ...
    def to_sql(self, name: str=None, con: Any=None, schema: Any=None, if_exists: str=None, index: Any=None, index_label: Any=None, chunksize: Any=None, dtype: Any=None, method: Any=None) -> Union[int]:
        ...
    def to_string(self, buf: Any=None, na_rep: Any=None, float_format: Any=None, header: Any=None, index: Any=None, length: Any=None, dtype: Any=None, name: Any=None, max_rows: Any=None, min_rows: Any=None) -> Union[str]:
        ...
    def to_timestamp(self, freq: Any=None, how: Any=None, copy: Any=None) -> Union[Data.Series]:
        ...
    def to_xarray(self) -> Union[Any]:
        ...
    def tolist(self) -> Union[Any]:
        ...
    def transform(self, func: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def transpose(self) -> Union[Data.Series]:
        ...
    def truediv(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def truncate(self, before: Any=None, after: Any=None, axis: Any=None, copy: Any=None) -> Union[Data.Series]:
        ...
    def tshift(self, periods: int=None, freq: Any=None, axis: Any=None) -> Union[Data.Series]:
        ...
    def tz_convert(self, tz: Any=None, axis: Any=None, level: Any=None, copy: Any=None) -> Union[Data.Series]:
        ...
    def tz_localize(self, tz: Any=None, axis: Any=None, level: Any=None, copy: Any=None, ambiguous: Any=None, nonexistent: str=None) -> Union[Data.Series]:
        ...
    def unique(self) -> Union[Array[Any]]:
        ...
    def unstack(self, level: Any=None, fill_value: Any=None) -> Union[Data]:
        ...
    def update(self, other: Any=None) -> Union[Any]:
        ...
    def value_counts(self, normalize: Any=None, sort: Any=None, ascending: Any=None, bins: int=None, dropna: Any=None) -> Union[Data.Series]:
        ...
    def var(self, axis: Any=None, skipna: Any=None, level: Any=None, ddof: Any=None, numeric_only: Any=None) -> Union[Any]:
        ...
    def view(self, dtype: Any=None) -> Union[Data.Series]:
        ...
    def where(self, cond: Any=None, other: Any=None, inplace: Any=None, axis: Any=None, level: Any=None, errors: Any=None, try_cast: Any=None) -> Union[Data.Series]:
        ...
    def xs(self, key: Any=None, axis: Any=None, level: Any=None, drop_level: Any=None) -> Union[Data.Series]:
        ...
    def _repr_(self) -> Union[str]:
    """
    Implements Python repr(this)
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
    def _length_(self) -> int:
    """
    Implements the js `.length` property or py `len()` support.
    @return the number of elements in this instance
    """
        ...
    def _this(self) -> Any:
    """
    @return native object with all fields
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
    def iter(self) -> Union[Iterator[Any]]:
    """
    Iterate over the values.
    """
        ...
    def _iter_(self) -> Union[Any]:
    """
    Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
    """
        ...
    def toDataPandas(self, ds: Dataset=None) -> Union[Data.Series.Pandas]:
    """
    Converts this series to a {@link Data.Series.Pandas}. If parent dataset is not provided then will use default data set.
    """
        ...
    def repr(self) -> Union[str]:
        ...
    def neg(self) -> Union[Data.Series]:
        ...
    def invert(self) -> Union[Data.Series]:
        ...
    def dataType(self) -> ValueType:
    """
    @return {@link ValueType} describing this Data.Series
    """
        ...
    def and(self, other: Any) -> Union[Union[Data,Data.Series]]:
    """
    Perform a bitwise "and" operation on the Data.Series with "other"
    """
        ...
    def or(self, other: Any) -> Union[Union[Data,Data.Series]]:
    """
    Perform a bitwise "or" operation on the Data.Series with "other"
    """
        ...
    def setItem(self, selector: Any, value: Any) -> Union[Data.Series]:
    """
    Mutably sets selected values in this Data.
    @param selector
           Determines criteria for selection. Legal selectors are:
               - single index label
               - array of index label(s)
               - array of booleans (must be same length as this.shape[0])
               - single-column Data (Series) of booleans (must be same length as this.shape[0])
           Cannot be null. Deos not support slicing.
    @param value
           Value to set for selected item(s). Can be a:
               - value
               - array of values
               - single-column Data (Series) of values
    """
        ...
    def setLoc(self, fst: Any, value: Any) -> Union[Data.Series]:
    """
    Mutably sets selected values in this Data.
    @param fst
           Determines criteria for row selection. Legal selectors are:
               - single index label
               - array of index label(s)
               - {@link Slice} of index labels
               - array of booleans (must be same length as this.shape[0])
               - single-column Data (Series) of booleans (must be same length as this.shape[0])
           Cannot be null.
    @param value
           Value to set for selected item(s). Can be a:
               - value
               - array of values
               - single-column Data (Series) of values
    
    @see DataLocIndexer#set
    """
        ...
    def setIloc(self, fst: Any, value: Any) -> Union[Data.Series]:
    """
    Mutably sets selected values in this Data.
    @param fst
           Determines criteria for row selection. Legal selectors are:
               - single index
               - array of indices
               - {@link Slice} of indices
               - array of booleans (must be same length as this.shape[0])
               - single-column Data (Series) of booleans (must be same length as this.shape[0])
           Cannot be null.
    @param value
           Value to set for selected item(s). Can be a:
               - value
               - array of values
               - single-column Data (Series) of values
    
    @see DataIlocIndexer#set
    """
        ...
    def getItem(self, fst: Any=None) -> Union[Any]:
        ...
    def getIloc(self, fst: Any=None) -> Union[Any]:
    """
    Operation represents using the `_item_` (bracket syntax) protocol on a Pandas iloc Indexer.
    """
        ...
    def getLoc(self, fst: Any=None) -> Union[Any]:
    """
    Operation represents using the `_item_` (bracket syntax) protocol on a Pandas loc Indexer.
    """
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
     data = c3.Data.Series([{"a": [{"aa": 1, "ab": 1}, {"aa": 2, "ab": 2}], "b": [[{"bb": 1}], [{"bb": 2}]]}])
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
    see: https://pandas.pydata.org/docs/reference/api/pandas.Series.align.html
    """
        ...
    def _factorize(self, sort: Any=None, na_sentinel: int=None) -> Union[Array[Any]]:
    """
    Encode the object as an enumerated type or categorical variable.
    
    This method is useful for obtaining a numeric representation of an array when all that matters is identifying
    distinct values. factorize is available as both a top-level function
    
    see: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.Series.factorize.html
    """
        ...
    def _rdivmod(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Array[Any]]:
    """
    Return Integer division and modulo of series and other, element-wise (binary operator rdivmod).
    
    see: https://pandas.pydata.org/docs/reference/api/pandas.Series.rdivmod.html
    """
        ...
    def _divmod(self, other: Any=None, level: Any=None, fill_value: Any=None, axis: Any=None) -> Union[Array[Any]]:
    """
    Return Integer division and modulo of series and other, element-wise (binary operator divmod).
    
    see: https://pandas.pydata.org/docs/reference/api/pandas.Series.divmod.html
    """
        ...
    def _shape(self) -> Union[Array[int]]:
        ...
    def str(self) -> Union[Data.Series.StringMethods]:
    """
    Return an intermediate Data.Series.StringMethods object for the .str operators on Data.Series
    """
        ...
    @classmethod
    def cacheParentMethods(cls) -> Union[Set[str]]:
    """
    Some methods are generally called once without using the result for subsequent
    operations. For these methods, it makes sense to additionally cache the parent operation, as we anticipate the
    immediate results will not be used for further operations, but rather operations will be called on the parent.
    @return a list of the name of all such methods on Data
    """
        ...
    def _toPandas(self, datasetId: str, returnNullIfNotCached: bool=None) -> Union[Data.Series.Pandas]:
        ...

