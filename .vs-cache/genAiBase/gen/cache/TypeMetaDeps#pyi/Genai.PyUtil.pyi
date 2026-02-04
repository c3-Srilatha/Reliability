#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.genAiBase.Genai.SourcePassage import Genai.SourcePassage
from c3.genAiBase.Genai.SourceFile import Genai.SourceFile
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.genAiBase.Genai.SourceFile.ChunkerSpec import Genai.SourceFile.ChunkerSpec
from c3.platform.Engine import Engine
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FieldType import FieldType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.genAiBase.Genai.Query.Result import Genai.Query.Result
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Promise import Promise
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.platform.File import File

# Python definitions for the C3 type Genai.PyUtil


class PyUtil():
    """
    A python-specific util type.
    
    @remarks this represents a made instance of Genai.PyUtil
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
    def fromJson(cls, json: any) -> Union[Genai.PyUtil]:
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
    def fromJsonString(cls, json: str) -> Union[Genai.PyUtil]:
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
    def fromXmlString(cls, xml: str) -> Union[Genai.PyUtil]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Genai.PyUtil]:
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
    def replaceType(self, old: Type, new: Type) -> Genai.PyUtil:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.PyUtil:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.PyUtil:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.PyUtil]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.PyUtil]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Genai.PyUtil:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.PyUtil:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.PyUtil:
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
    def validateObj(self) -> Genai.PyUtil:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Genai.PyUtil:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Genai.PyUtil:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Genai.PyUtil:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Genai.PyUtil:
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
    def withoutFieldAtPath(self, path: str) -> Genai.PyUtil:
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
    def withoutField(self, field: str) -> Genai.PyUtil:
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
    def withoutField(self, field: FieldType) -> Genai.PyUtil:
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
    def withoutFields(self, fields: Array[str]) -> Genai.PyUtil:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Genai.PyUtil:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Genai.PyUtil:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Genai.PyUtil:
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
    def defaultField(self, field: str) -> Genai.PyUtil:
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
    def defaultField(self, field: FieldType) -> Genai.PyUtil:
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
    def unsetField(self, field: str) -> Genai.PyUtil:
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
    def unsetField(self, field: FieldType) -> Genai.PyUtil:
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
    def removeField(self, field: str) -> Genai.PyUtil:
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
    def removeField(self, field: FieldType) -> Genai.PyUtil:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Genai.PyUtil:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Genai.PyUtil:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Genai.PyUtil:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Genai.PyUtil:
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
    def mergeJson(self, json: any) -> Genai.PyUtil:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Genai.PyUtil:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Genai.PyUtil:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Genai.PyUtil]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Genai.PyUtil]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Genai.PyUtil]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Genai.PyUtil]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Genai.PyUtil]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Genai.PyUtil]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Genai.PyUtil]]:
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
    def toBuilder(self) -> ObjBuilder[Genai.PyUtil]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Genai.PyUtil]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Genai.PyUtil:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Genai.PyUtil:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Genai.PyUtil:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Genai.PyUtil:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Genai.PyUtil:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Genai.PyUtil:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Genai.PyUtil:
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
    def afterMake(self) -> Genai.PyUtil:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Genai.PyUtil:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Genai.PyUtil]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Genai.PyUtil:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @classmethod
    def formatError(cls, error: Any=None) -> str:
    """
    Gets the formatted stack trace from the caught error if possible, else returns the error message.
    @param error
      The error to format.
    @return The formatted stack trace or error message.
    """
        ...
    @classmethod
    def prettyPrintLogs(cls, logs: any, indent: int='4') -> None:
    """
    Function to print a prettified version of the logs from the structured tools, splitting each log entry into a different section.
    @param logs
              The logs to prettify.
    @param indent
              The number of spaces to use for indentation.
    """
        ...
    @classmethod
    def countPromptTokensNaively(cls, prompt: str, tokenLength: int='3') -> Union[int]:
    """
    Function to naively calculates the number of tokens in a prompt. This function estimates tokens by dividing the prompt length by the
    assumed token length. For example, each token is assumed to be 3 characters long.
    @param prompt
              (str): The text whose tokens need to be counted.
    @param tokenLength
              (int, optional): The length of each token. Defaults to 3.
    @return - (int): The approximate number of tokens in the prompt.
    """
        ...
    @classmethod
    def buildPromptTemplateString(cls, prompt: str) -> str:
    """
    Function to convert a string with {single braces} to {{double braces}}.
    @param prompt - (str): The string having single braces.
    @return - (str): Converted string with double braces, which can be utilized by `c3.Genai.Prompt`.
    """
        ...
    @classmethod
    def handleTextByMaxTokenLimit(cls, prompt: str, promptTokenCount: int='0', tokenLength: int='3', maxTokens: int='4096', truncatePrompt: bool=None) -> Union[Array[str],str]:
    """
    Splits or truncates a prompt based on a maximum token limit.
    If `truncate_prompt` is True, the prompt is truncated to
    `max_tokens * token_length` characters and returned as a string.
    Otherwise, the prompt is split into multiple chunks, each chunk not exceeding
    `max_tokens` tokens. For more details on tokens and how to count them, see:
    {@link https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them}
    
    @param prompt
              (str): The text to split or truncate.
    @param promptTokenCount
              (int, optional): The number of tokens in the prompt. If provided, the function will not count the tokens in the prompt. Defaults to 0.
    @param tokenLength
              (int, optional): The length of each token. Defaults to 3.
    @param maxTokens
              (int, optional): The maximum number of tokens in each chunk. Defaults to 4096.
    @param truncatePrompt
              (bool, optional): Whether to truncate the prompt to `max_tokens * token_length` characters if it exceeds the token limit. Defaults to False.
    @return - (Union[List[str], str]): A list of strings if the prompt is split into multiple chunks, or a single string if the prompt is truncated.
    """
        ...
    @classmethod
    def prettyPrintUnstructuredLogs(cls, queryResult: Genai.Query.Result, indent: int='4', chainResultKey: str=None) -> None:
    """
    Function to print a prettified version of the engine logs of a {@link Genai.Query.Result}
    @param queryResult
              The query result to prettify the engine logs from.
    @param indent
              The number of spaces to use for indentation.
    @param chainResultKey
              Key of chainResult component to print.
    """
        ...
    @classmethod
    def parseEngineLogs(cls, queryResult: Genai.Query.Result) -> Any:
    """
    Function to parse the engine logs of a {@link Genai.Query.Result} into a Pandas Series object
    @param queryResult
              The query result to prettify the engine logs from.
    """
        ...
    @classmethod
    def setGlobalVariables(cls, variables: Map[str, Map[str, Any]]) -> None:
    """
    Sets global variables that will be loaded when #importResourceFile is called.
    
    @param variables
           The variables to set based on the metadataPath value in the #importResourceFile call.
           E.g. if we want to load a global variable GLOBAL_VAR = 3, for metadataPath = "some/path.py", then the
           map should be {"/some/path.py": {"GLOBAL_VAR": 3}}.
    """
        ...
    @classmethod
    def clearGlobalVariables(cls) -> None:
    """
    Clears the global variables set by #setGlobalVariables
    """
        ...
    @classmethod
    def importResourceFile(cls, metadataPath: str, namesToImport: Array[str], callerGlobals: Any=None) -> Union[Any]:
    """
    Load the Python code from the specified metadata path into the current interpreter, returning all requested
    names.
    
    To improve performance while experimenting in Jupyter, you can enable a local cache by setting the
    env variable `GENAI_PYUTIL_IMPORT_ROOT` in your notebook/calling process.
    
    ```py
    os.environ['GENAI_PYUTIL_IMPORT_ROOT'] = "/home/c3/jupyter_root_dir/code_cache"
    ```
    
    Example usage:
    
    ```py
    X, Y, Z = c3.Genai.PyUtil.importResourceFile("/genAiBase/resource/code/c3genai/alphabet.py", ["X", "Y", "Z"])
    ```
    
    That call will load the `X`, `Y`, and `Z` globals from `alphabet.py` and assign them to X, Y, and Z. It is
    logically equivalent to `from genAiBase.resource.code.c3genai.alphabet import X, Y, Z`
    
    If only one name is requested, its corresponding value will be returned alone (not in a tuple), so that it does not
    need to be unpacked
    
    ```py
    X = c3.Genai.PyUtil.importResourceFile("/genAiBase/resource/code/c3genai/alphabet.py", ["X"])
    ```
    
    @param metadataPath
           The metadata path (in the current package or one it depends on) to load
    @param namesToImport
           The names to import from the specified file. These must all be declared at the top/outer level of the file.
           That is, all names in `namesToImport` must be global within the file.
    @param callerGlobals
           If you want all of the imported names to be available as globals in the calling scope/file, pass `globals()`
           for this parameter. Otherwise, the loaded names will be returned but not injected into the global scope.
    
    @return a tuple for all of the names in `namesToImport` in the same order. If only one name is requested, its
            corresponding value will be returned alone (not in a tuple), so that it does not need to be unpacked
    """
        ...
    @classmethod
    def purgeLocalResourceCache(cls, paths: Array[str]=None, confirmPurgeAll: bool=None) -> None:
    """
    Purges files cached by #importResourceFile from the GENAI_PYUTIL_IMPORT_ROOT directory.
    
    @param paths
           The list of metadata paths to purge
    @param confirmPurgeAll
           If you want to purge the entire local cache, you should pass `confirmPurgeAll=True`
    """
        ...
    @classmethod
    def loggerDebug(cls, logger: Any, msgGenerator: Any) -> None:
    """
    If the provided C3 logger is enabled for debug-level logging (i.e. `logger.isDebugEnabled()`), then `msgGenerator`
    will be used to generate a message that will be debug logged. Useful to avoid calling potentially expensive
    functions and/or generating very large strings for the log message when the logger is not debug enabled.
    """
        ...
    @classmethod
    def jsonEncoder(cls, useTypedJson: bool=None, maxRowsInDataFrame: int='10') -> Any:
    """
    Returns a json.JSONEncoder that can handle some of the non-json-serializable types that are used Genai code.
    @param useTypedJson
           If true, C3 values will be encoded using toTypedJson instead of toJson. This is useful when saving/restoring
           C3 types/instances and not simply passing those values to a (non-type-aware) library/service.
    @param maxRowsInDataFrame
           Maximum number of rows in dataframe
    """
        ...
    @classmethod
    def prettyPrint(cls, text: str, color: str=None, style: str=None) -> None:
    """
    Prints text in a given color & style. Default is a normal print.
    To print a single line in multiple colors, use #prettify
    
    Examples:
    
    ```py
    pprint = c3.Genai.PyUtil.prettyPrint
    pprint("This text will be green and bold", color="green", style="bold")
    pprint("This text will be red and underscore", color="red", style="underscore")
    ```
    
    @param color
           Color of the text, one of (black, red, green, yellow, blue, magenta, cyan, white)
    @param style
           Style of the text, one of (normal, bold, reversed, underscore)
    """
        ...
    @classmethod
    def prettify(cls, text: str, color: str=None, style: str=None) -> Union[str]:
    """
    Generates new string coloring and styling text using ANSI codes. This can be used to print a single line in multiple colors.
    
    Examples:
    
    ```py
    p = c3.Genai.PyUtil.prettity
    f'{p("Hello", "black")} {p("dear", "red")} {p("friend", "green")}, {p("how", "yellow")} {p("are", "blue")} {p("you", "magenta")} {p("today", "cyan")} {p("?", "white")}'
    >>> \x1b[30mHello\x1b[0m \x1b[31mdear\x1b[0m \x1b[32mfriend\x1b[0m, \x1b[33mhow\x1b[0m \x1b[34mare\x1b[0m \x1b[35myou\x1b[0m \x1b[36mtoday\x1b[0m \x1b[37m?\x1b[0m
    
    f'{p("I", "normal")} {p("am", "bold")} {p("great", "reversed")}, {p("thanks!", "underscore")}'
    >>> I \x1b[1mam\x1b[0m \x1b[7mgreat\x1b[0m, \x1b[4mthanks!\x1b[0m
    ```
    
    @param color
           Color of the text, one of (black, red, green, yellow, blue, magenta, cyan, white)
    @param style
           Style of the text, one of (normal, bold, reversed, underscore)
    
    @return a string with the ANSI codes for colors and styles.
    """
        ...
    @classmethod
    def replaceCodeReference(cls, content: str, codeReferenceMap: Any=None) -> Union[str]:
    """
    Replaces code references with code snippets in the content.
    
    @param content
           String from which code references needs to be replaced.
    @param codeReferenceMap
           Dict contaning the mapping of code reference to code snippet
    
    @return a string with the code references replaced with code snippets.
    """
        ...
    @classmethod
    def logInputOutputWrapper(cls, func: Any, filePath: str) -> Any:
    """
    Returns the provided function in a wrapper that will write all input to and output from the wrapped function to the
    specified file.
    
    @param func
           The function to wrap
    @param filePath
           Where the input/output should be written
    
    @return the wrapped function
    """
        ...
    @classmethod
    def mergeDict(cls, dictionaryA: Map[str, Any]=None, dictionaryB: Map[str, Any]=None) -> Union[Map[str, Any]]:
    """
    Merges dictionary `dictionaryB` into dictionary `dictionaryA` recursively. If there is a conflict (i.e., the same key exists in both dictionaries
    with different values), the values of `dictionaryA` are persisted. If the dictionaryA is empty, the dictionaryB is returned as is. If the dictionaryB is empty, the dictionaryA is returned as is.
    If both dictionaries are empty, an empty dictionary is returned.
    
    @param dictionaryA
           The dictionary to merge into.
    @param  dictionaryB
           The dictionary to merge from.
    
    @return The merged dictionary.
    """
        ...
    @classmethod
    def flattenDict(cls, dictToFlatten: Map[str, Any], depth: int='0') -> Map[str, Any]:
    """
    Recursively flattens a nested dictionary and returns a dictionary where
    keys are tuples representing the path to each original key, and values
    are the corresponding depth of that key in the original dictionary.
    
    @param dictToFlatten
           The dictionary to flatten.
    @param depth
           The current depth of the recursion to flatten the dictionary.
    
    @return A flattened dictionary with tuples as keys and depth as values.
    """
        ...
    @classmethod
    def loadModelTokenizer(cls, srcPath: str, tokenizerOnly: bool='true') -> Any:
    """
    Attempts to load tokenizer file (and optionally a model as well) from a zip on the file system.
    Generally used in airgapped environments where we cannot reach out to Huggingface or other repositories to download over the internet.
    
    @param srcPath
           The file path to the tokenizer/model zip.
    @param tokenizerOnly
           Boolean indicating whether we are only loading the tokenizer and nothing else, or loading tokenizer + model.
    
    @return dictionary containing the instantiated tokenizer class and model
    """
        ...
    @classmethod
    def downloadAndUnzip(cls, zipUrl: str, localRoot: str=None, dataDir: str=None, forceDownload: bool=None, pathPrefix: str=None, keepZip: bool=None) -> Union[str]:
    """
    Downloads from the remote location, unzips the data files
    
    @param zipUrl
              The url where the remote zip is persisted before downloading.
    @param localRoot
              The local directory where the zip file will be downloaded.
              If not passed a tmp location will be created
    @param dataDir
              The local directory into which to unzip the archive from zipUrl.
              If not passed a tmp location will be created
    @param forceDownload
              Flag to specify whether force re-download even if data exist already.
    @param pathPrefix
              If passed a tmp directory will be created with pathPrefix and used instead of localRoot
    @param keepZip
              If true, the zip file will be kept after unzipping, otherwid the zip file will be deleted
              after unzipping.
    @return the path of the directory if the zip was unzipped successfully.
    """
        ...
    @classmethod
    def readSourcePassages(cls, srcFile: File) -> Union[Array[Genai.SourcePassage]]:
    """
    Read and return the source passages from the given file. Used to reduce memory load when reading large files.
    @param srcFile
           The file to read the source passages from
    @return the source passages
    """
        ...
    @classmethod
    def readInstancesFromFile(cls, srcFile: File, instanceType: Type) -> Union[Array[Obj]]:
    """
    Read and return the instances from the given file. Used to reduce memory load when reading large files.
    @param srcFile
           The file to read the instances from
    @param instanceType
           The type of the instances to read
    @return the instances
    """
        ...
    @classmethod
    def appendSourcePassagesToLocalFile(cls, passages: Array[Genai.SourcePassage]=None, localFilePath: str=None) -> str:
    """
    Appends the {@link Genai.SourcePassage}s to the file provided in localFilePath
    If no localFilePath is provided it creates a new file and returns the file path.
    
    @param passages
            {@link Genai.SourcePassage}s to append to the file
    @param localFilePath
            Optional path of the file to append the passages. If none is specified, this will create a local file
    @return the localFilePath containing the passages
    """
        ...
    @classmethod
    def loadNltkTokenizer(cls, srcPath: str=None, tokenizerMethod: str='"sent_tokenize"', forceDownload: bool=None, loadPerceptron: bool=None) -> Any:
    """
    Loads the nltk sentence tokenizer if srcPath is provided. The downloaded file is stored in local file system and for subsequent
    calls the data is returned from local file system.
    Otherwise downloads the tokenizer from the public repository.
    
    @param srcPath
              Path to load the tokenizer from the srcPath. If not provided it will download from public repository i.e. `nltk.download()`
    @param tokenizerMethod
              The name of the tokenizer function
    @param forceDownload
              Flag to specify whether force re-download even if the file exists in local file system.
    @param loadPerceptron
              If true, and the srcPath is not provided, this will also download perceptron from the public repo.
    @return the dictionary containing nltk.data and tokenizer
    """
        ...
    @classmethod
    def sanitizeFileName(cls, fileName: str) -> str:
    """
    Sanitizes the file name.
    
    @param fileName
               the source file name string.
    @return string
               the santized file name after removing special chars.
    """
        ...
    @classmethod
    def getDestinationUrl(cls, srcFile: Genai.SourceFile, srcUrl: str=None) -> str:
    """
    Get the destination url to upload the chunked image or table contents.
    
    @param srcFile
               the source file with the image or table contents.
    @param srcUrl
               the source url of the chunked image or table contents.
    @return string
               the destination url where the contents should be uploaded.
    """
        ...
    @classmethod
    def getTargetUrlFromSourceFile(cls, srcFile: Genai.SourceFile) -> str:
    """
    Get the target url from {@link Genai.SourceFile#collection} if the collection exists otherwise create a file with name
    'sourceFilesWithoutCollection' and return its url.
    
    @param srcFile
               the source file from which the target url should be extracted.
    @return string
               the target url
    """
        ...
    @classmethod
    def uploadChunkedData(cls, srcFile: Genai.SourceFile, srcUrl: str, isImageData: bool=None) -> str:
    """
    Upload the chunked data to the destination url and return the destination url.
    
    @param srcFile
               the source file with the image or table contents.
    @param srcUrl
               the source url of the chunked image or table contents.
    @param isImageData
               a boolean flag to indicate if the data is an image or table.
    @return string
               the destination url where the contents should be uploaded.
    """
        ...
    @classmethod
    def loadSpacyModel(cls, srcPath: str, pathPrefix: str) -> str:
    """
    Loads the spacy model from the zip file and returns the local path.
    @param srcPath
              The url where the remote zip is persisted before downloading.
    @param pathPrefix
              Creates a tmp directory with pathPrefix for the local path
    @return the local path of the extracted zip
    """
        ...
    @classmethod
    def loadNougatModel(cls, modelName: str) -> Any:
    """
    Loads the Nougat model if {@link Genai.App.AirGapConfig#nougatZipPath} is set.
    Otherwise it loads the pretrained model
    @param modelName
              Name of the pretrained model to load
    @return the dictionary containing the `NougatProcessor` and `VisionEncoderDecoderModel`
    """
        ...
    @classmethod
    def loadTiktokenTextSplitterWithAirgap(cls, modelName: str=None, encodingName: str=None, modelPath: str=None) -> Any:
    """
    Loads tiktoken from file if {@link Genai.App.AirGapConfig#tableTextSplitterEncoderPath} is set,
    Otherwise it loads the pretrained model
    @param modelName
              Name of the model for which to generate the tokens
    @param encodingName
              Alternatively, directly specify the tokenizer
    @param modelPath
              The path to the model zip file if loading from file system
    @return the native tiktoken encoder
    """
        ...
    @classmethod
    def getTatrAirgapDownloadPath(cls) -> Union[str]:
    """
    Download and unzip TATR from file if {@link Genai.App.AirGapConfig#tatrZipPath} is set,
    Otherwise returns None indicating that the model is not available locally
    @return the the local path of the TATR model if available, otherwise None
    """
        ...
    @classmethod
    def runLambdaTasksInParallel(cls, tasks: Any, maxWorkers: int='10') -> Union[Any]:
    """
    Runs a series of tasks in parallel, using python multithreading library.
    @param tasks
       dictionary of task id to a tuple of c3.Lambda function and list of its arguments. For example, {"task_01": (lmbda_func, [arg1 ,arg2, ...])}
    @param maxWorkers
       int to pass into max_workers parameter of multithreading executor declaration
    @return a map of the task ID's to the task lambda's return result
    """
        ...
    @classmethod
    def nestedC3TypeToPyObj(cls, obj: Type, classMapping: Any) -> Any:
    """
    Convert the nested c3 type obj into corresponding nested python class instance,
    also convert the c3 camel case fields into py snake cases.
    
    @param obj
              The nested c3 type obj to convert
    @param classMapping
              The c3 type name to corresponding py class names.
    @return the nested python class instance converted from c3 type obj.
    """
        ...
    @classmethod
    def nestedPyObjToC3Type(cls, obj: Any, typeMapping: Any) -> Union[Type]:
    """
    Convert the nested py obj into corresponding nested c3 type instance,
    also convert the py snake cases fields into c3 camel case.
    
    @param obj
              The nested native py obj to convert
    @param typeMapping
              The py class names to corresponding c3 types.
    @return the nested c3 type instance converted from py obj.
    """
        ...
    @classmethod
    def replaceBadChars(cls, content: str, chunkerSpec: Genai.SourceFile.ChunkerSpec=None) -> str:
    """
    Cleanses a string by removing unwanted or problematic characters, including null bytes and unwanted keywords in translation configuration.
    
    @param content
              The input string from which to remove bad characters.
    @param chunkerSpec
               A {@link Genai.SourceFile.ChunkerSpec} used to specify which chunker is used
    """
        ...
    @classmethod
    def populateSourceFilesForName(cls, name: str, metadatas: Array[Any]) -> None:
    """
    From a seeded read-only retriever, fabricate the SourceCollection and SourceFiles
    for the passage metadata.
    
    @param name
      The name of the retriever to fabricate the SourceCollection and SourceFiles for.
    @param metadatas
      The metadata of the passages.
    """
        ...
    @classmethod
    def downloadFilesBatch(cls, files: Array[Genai.SourceFile], dir: str) -> Array[str]:
    """
    Downloads the files from the remote location and returns the local path of the downloaded file.
    
    @param files
              The list of {@link Genai.SourceFile}s to download.
    @param dir
              The local directory where the files should be downloaded.
    @return a list of local paths of the downloaded files.
    """
        ...
    @classmethod
    def downloadFile(cls, file: Genai.SourceFile, dir: str) -> str:
    """
    Downloads the file from the remote location and returns the local path of the downloaded file.
    
    @param file
              The {@link Genai.SourceFile} to download.
    @param dir
              The local directory where the file should be downloaded.
    @return a local path of the downloaded file.
    """
        ...
    @classmethod
    def listAllEngines(cls, allNodes: bool=None) -> Union[Array[Engine[Engine.Deployment, Engine.DeploySpec]]]:
    """
    List all {@link Engine}s on the current node.
    @param allNodes
        If true, list engines on all nodes in the {@link App}.
    """
        ...
    @classmethod
    def restartAllEngines(cls, allNodes: bool=None) -> Union[Array[Engine[Engine.Deployment, Engine.DeploySpec]]]:
    """
    Call {@link Engine#restart} on all running {@link Engine}s on the current node.
    @param allNodes
        If true, restart engines on all nodes in the {@link App}.
    """
        ...
    @classmethod
    def terminateAllEngines(cls, allNodes: bool=None) -> Union[Array[Engine[Engine.Deployment, Engine.DeploySpec]]]:
    """
    Call {@link Engine#terminate} on all running {@link Engine}s on the current node.
    @param allNodes
        If true, only terminate engines on all nodes in the {@link App}.
    """
        ...
    @classmethod
    def archiveHuggingfaceModel(cls, modelName: str, revision: str=None, endpoint: str=None, mountName: str='"datasets"', transformersModuleNames: Array[str]=None) -> Union[str]:
    """
    Download a huggingface model, zip it, and upload it to the specified mount
    in <mountName>/huggingface/models.
    
    @param modelName
        The Huggingface model to persist
    @param revision
        The revision of the model to persist
    @param endpoint
        The endpoint to use for the Huggingface API, if using a mirror
    @param mountName
        The mount in which to upload the model
    @param transformersModuleNames
        The list of transformers class names to initialize for the model before creating the archive.
        This ensures that for cases where we need to call `TableTransformerForObjectDetection.from_pretrained`
        or similar, the files needed for model the model, while `snapshot_download` only downloads the files
        needed for AutoModel.from_pretrained.
    @return where the file was uploaded
    """
        ...
    @classmethod
    def setC3(cls) -> None:
    """
    Adds c3 to the builtin.
    """
        ...

