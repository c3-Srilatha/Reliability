#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.LambdaType import LambdaType
from c3.platform.Pkg import Pkg
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.TypesysScope import TypesysScope
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FieldType import FieldType
from c3.platform.HttpRequest import HttpRequest
from c3.platform.Typesys.Json import Typesys.Json
from c3.platform.StringType import StringType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.PrimitiveType import PrimitiveType
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.AnyType import AnyType
from c3.platform.DateTimeType import DateTimeType
from c3.platform.TypeMeta import TypeMeta
from c3.platform.WithType import WithType
from c3.platform.SetType import SetType
from c3.platform.PushStreamType import PushStreamType
from c3.platform.NumberType import NumberType
from c3.platform.VarReferenceType import VarReferenceType
from c3.platform.DeclaredReferenceType import DeclaredReferenceType
from c3.platform.MapType import MapType
from c3.platform.SemanticVersion.MajorMinor import SemanticVersion.MajorMinor
from c3.platform.VectorType import VectorType
from c3.platform.Exclude import Exclude
from c3.platform.FunctionType import FunctionType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Annotatable import Annotatable
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MethodType import MethodType
from c3.platform.Annotations import Annotations
from c3.platform.Pkg.Path import Pkg.Path
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.Promise import Promise
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.TupleType import TupleType
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.EventStreamType import EventStreamType
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.FieldValue import FieldValue
from c3.platform.Annotation import Annotation
from c3.platform.AnyOfType import AnyOfType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.CollectionType import CollectionType
from c3.platform.Expr import Expr
from c3.platform.HttpResponse import HttpResponse

# Python definitions for the C3 type NativeType


class NativeType(ValueType, DefaultInstance):
    """
    Value type for `native` i.e. value type for private value that has special support in one or more language bindings.
    Note that native values are generally not portable between languages and cannot be persisted so are only useful for
    private transient values.
    
    Values declared as `native` implicitly preserve null values. In other words, a null collection value passed to a
    context expecting `native` will not result in an empty collection being instantiated. In fact, no processing of
    `native` values is done at all; it is up to the consumer to handle any reasonable value or throw an error otherwise.
    
    When appropriate, DSL syntax can specify which class to use per implementation language using language-specific
    annotations such as:
    ```type
      threads: private @java(class="List<java.lang.Thread>") native
      ndarray: private @py(class="numpy.ndarray") native
    ```
    This specifies that in Java compiled code, the `threads` field will use the Java class `List<Thread>` and provides
    documentation that for Python the `ndarray` field will be an instance of the Python class `numpy.ndarray`.
    
    @remarks this represents a made instance of NativeType
    """
    
    declaredPkgPath: Optional[str]=None
    """
    Source file Pkg.Path a C3 Type declaration [.c3typ].
    """

    declaredSrcLine: Optional[int]=None
    """
    Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
    """

    declaredSrcCharInLine: Optional[int]=None
    """
    Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
    element is declared.
    """

    pkg: Optional[Pkg]
    """
    C3 application package this Type System element _belongs_ to; note that this maybe different from the package
    where this type-system element was declared.
    
    @see #package
    """

    json: Optional[Any]=None
    """
    SDK json representing instance of this type
    """

    annotationsJson: Optional[any]=None
    """
    The set of annotations defined on this element of metadata represented as json value.
    """

    modifier: Optional[str]=None
    """
    Value type modifier
    
    Non empty constraint is specified by adding an exclamation mark in front of the ValueType:
    ```type
      where: !Location
    ```
    
    The desire to preserve empty values (such that they can be differentiated from the lack of any value) is specified
    by adding a question mark in front of the ValueType:
    ```type
      approved: ?boolean
    ```
    
    The non optional function parameter constraint is specified by adding `!?` in front of the ValueType:
    ```type
      f: function(url: !?string serialized Url)
    ```
    
    @see #isNonEmpty
    @see #preservesEmpty
    @see #isNonOptionalParam
    @see FunctionParam#isNonOptional
    """
    def __init__(self, declaredPkgPath: Optional[str]=None, declaredSrcLine: Optional[int]=None, declaredSrcCharInLine: Optional[int]=None, pkg: Optional[Pkg]=None, json: Optional[Any]=None, annotationsJson: Optional[any]=None, modifier: Optional[str]=None) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> NativeType:
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
    def fromJson(cls, json: any) -> Union[NativeType]:
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
    def fromJsonString(cls, json: str) -> Union[NativeType]:
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
    def fromXmlString(cls, xml: str) -> Union[NativeType]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[NativeType]:
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
    Value types never count as "empty" because their type is a large part of their state.
    """
        ...
    @overload
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isSame(self, other: ValueType) -> bool:
    """
    Whether the specified value type represents exactly the same values as this value type. This includes annotations
    and any {@link ValueModifier modifier}.
    
    This is the strictest form of compatibility, representing identical declaration.
    
    @see #isSameValue
    @see #isAssignableFrom
    @see #isConvertibleFrom
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> NativeType:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> NativeType:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[NativeType]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[NativeType]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> NativeType:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> NativeType:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> NativeType:
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
    def validateObj(self) -> NativeType:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> NativeType:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> NativeType:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> NativeType:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> NativeType:
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
    def withoutFieldAtPath(self, path: str) -> NativeType:
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
    def withoutField(self, field: str) -> NativeType:
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
    def withoutField(self, field: FieldType) -> NativeType:
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
    def withoutFields(self, fields: Array[str]) -> NativeType:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> NativeType:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> NativeType:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> NativeType:
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
    def defaultField(self, field: str) -> NativeType:
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
    def defaultField(self, field: FieldType) -> NativeType:
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
    def unsetField(self, field: str) -> NativeType:
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
    def unsetField(self, field: FieldType) -> NativeType:
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
    def removeField(self, field: str) -> NativeType:
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
    def removeField(self, field: FieldType) -> NativeType:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> NativeType:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> NativeType:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> NativeType:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> NativeType:
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
    def mergeJson(self, json: any) -> NativeType:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> NativeType:
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
    def sumObj(self, other: Obj, deep: bool=None) -> NativeType:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[NativeType]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[NativeType]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[NativeType]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[NativeType]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[NativeType]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, NativeType]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, NativeType]]:
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
    def toBuilder(self) -> ObjBuilder[NativeType]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[NativeType]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> NativeType:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> NativeType:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> NativeType:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> NativeType:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> NativeType:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> NativeType:
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
    def make(cls, s: str) -> Union[NativeType]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> NativeType:
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
    def afterMake(self) -> NativeType:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> NativeType:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[NativeType]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> NativeType:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def pkgPath(self) -> Pkg.Path:
    """
    The metadata path where the parent type's declaration file is located:
    Format: /<package>/[gen|test]/src/<pkg-sub-path>/<name>.c3typ
    E.g. for the given package folder structure:
    ```
    myRepo
     |
     -  myPkg
         |
         -  src
             |
             - folder1
                 |
                 - folder2
                     |
                     - SomeType1.c3typ
             - SomeType3.c3typ
         -  test
             |
              - src
                 |
                 - SomeType2.c3typ
         -  gen
             |
              - src
                 |
                 - SomeType4.c3typ
    ```
    For SomeType1.c3typ will return -> /myPkg/src/folder1/folder2/SomeType1.c3typ
    For SomeType3.c3typ will return -> /myPkg/src/SomeType3.c3typ
    For SomeType2.c3typ will return -> /myPkg/test/src/SomeType2.c3typ
    For SomeType4.c3typ will return -> /myPkg/gen/src/SomeType4.c3typ
    
    @see #package
    @see #pkgSubPath
    """
        ...
    def package(self) -> str:
    """
    The name of the package where this type was declared.
    
    For example, if package "app", depends on "industry", which depends on "foundation", provisioning app will bring
    in the types in the industry and foundation packages as well. This means that the `package` of the Location
    type will be foundation, even if it gets remixed by industry (or even app).
    
    @see #pkg
    @see #pkgPath
    @see #pkgSubPath
    """
        ...
    def packageVersionMajorMinor(self) -> SemanticVersion.MajorMinor:
    """
    The version of the package where this type was declared.
    """
        ...
    def pkgSubPath(self) -> str:
    """
    Dot (".") separated relative path of the folder where this type's declaration file is located in the package
    E.g. for the given structure
    ```
    myRepo
     |
     -  myPkg
         |
         -  src
             |
             - folder1
                 |
                 - folder2
                     |
                     - SomeType1.c3typ
             - SomeType3.c3typ
         -  test
             |
              - src
                 |
                 - SomeType2.c3typ
         -  gen
             |
              - src
                 |
                 - SomeType4.c3typ
    ```
    For SomeType1.c3typ will return -> folder1/folder2
    For SomeType3.c3typ will return -> "" (empty string)
    For SomeType3.c3typ will return -> "" (empty string)
    For SomeType4.c3typ will return -> "" (empty string)
    
    @see #pkgPath
    @see #package
    """
        ...
    def declaredPkg(self) -> Pkg:
    """
    Pkg where this type was declared, note could be different then #pkg.
    """
        ...
    def metadataPath(self) -> Union[str]:
        ...
    def toTypesysJson(self) -> Typesys.Json:
    """
    Convert the internal object representation of this instance to SdkJson for an efficient loading of type at
    execution time.
    """
        ...
    def typesys(self) -> Pkg:
    """
    @return package for built-in Type System; this could be different from #pkg() when package is loaded from a disk
            for code gen
    """
        ...
    def withoutDeclaredSrcPos(self, recursive: bool=None) -> NativeType:
    """
    @return an instance with the #declaredSrcLine and #declaredSrcCharInLine fields unset.
    """
        ...
    def mergedAnnotationsJson(self) -> Union[any]:
    """
    Override this method to return the merged set of annotations from itself and its hierarchy
    E.g.
    ```type
      @config(folder="x")
      type A {
      }
      @config(secret=true)
      type B mixes A
    ```
    => return config(secret=true, folder="x") for type B
    If not overridden, by default this returns #annotationJson
    """
        ...
    def declaredAnnotations(self) -> Annotations:
    """
    The declared annotations for this metadata element.
    """
        ...
    def annotations(self) -> Annotations:
    """
    The annotations for this metadata element.
    """
        ...
    def hasAnnotations(self) -> bool:
    """
    Whether this metadata element has any annotation.
    """
        ...
    def hasAnnotation(self, ann: str) -> bool:
    """
    Whether this metadata element has annotation with provided name.
    """
        ...
    def hasAnnotationValue(self, ann: str, annField: str) -> bool:
    """
    Whether this metadata element has annotation field value.
    """
        ...
    def annotation(self, ann: str, failIfMissing: bool=None) -> Union[Annotation]:
    """
    @return annotation with provided name
    """
        ...
    def annotationValue(self, ann: str, annField: str) -> Union[Any]:
    """
    @return annotation value for provided annotation name and annotation field
    """
        ...
    @overload
    def withAnnotation(self, ann: Annotation) -> NativeType:
    """
    Add an annotation to the given metadata
    """
        ...
    @overload
    def withAnnotation(self, ann: str, annField: str=None, value: Any=None) -> NativeType:
    """
    Add an annotation to the given metadata
    @param ann
            annotation to add
    @param annField
            which field on the annotation needs to be set
    @param value
            value for the field
    """
        ...
    @classmethod
    def haveSameAnnotations(cls, a1: Annotatable, a2: Annotatable) -> bool:
    """
    Whether the specified instances have same annotations.
    """
        ...
    def inheritableAnnotationsJson(self) -> Union[any]:
    """
    Return the JSON for annotations that can be inherited by children of this element of metadata. Annotations are
    normally inherited, but ones marked with {@link Annotation#noInherit} will not be.
    """
        ...
    def toString(self) -> Union[str]:
    """
    ValueType instance serialize will make the DSL declaration.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[NativeType]:
    """
    ValueType.fromString will make a value type instance from a valid DSL declaration.
    
    @see #toString
    """
        ...
    def cacheKey(self) -> Union[str]:
    """
    The name of this instance.
    """
        ...
    def cachedFingerprint(self) -> int:
        ...
    def allowsEmpty(self) -> bool:
    """
    Whether this value type allows empty values. This is the inverse of {@link #isNonEmpty}.
    
    Returns true for:
    - `type` (no modifier) - can be empty
    - `?type` (PRESERVES_EMPTY) - can be empty, preserves and differentiates empty vs null
    - `!?type` (NON_OPTIONAL_PARAM) - can be empty, must be explicitly provided
    
    Returns false for:
    - `!type` (NON_EMPTY) - cannot be empty
    
    @see #isNonEmpty
    @see #preservesEmpty
    @see ValueModifier
    """
        ...
    def preservesEmpty(self) -> bool:
    """
    If true, value is allowed to be empty. The definition of "empty" expands depending on the value type, but always
    includes null.
    
    In DSL, this is specified by adding a question mark in front of the ValueType:
    ```type
      approved: ?boolean
    ```
    
    Effect on various value types:
    - boolean: when true, it means a tri-state (`true`/`false`/`null`); when false, `false` and `null` are identical.
    - string: when true, whitespace values (including empty string itself) will retain their original value and not
    be treated as `null`; if false, they will be treated as null.
    - collection: when true, `null` will continue to be `null` instead of being auto-converted into empty collections;
    when false, `null` will be auto-converted into empty collections to allow easy traversal but the empty values are
    transient.
    - reference: when true, an empty instance (with no fields) will continue to be an empty instance and not
    auto-converted to `null`; if false, it would be transient and converted to null.
    
    @see #isEmptyValue
    """
        ...
    def isAny(self) -> bool:
    """
    Whether this value type is an explicit "any". This is a singleton representing any of the other types listed
    here (except `native`).
    
    @see AnyType
    """
        ...
    def isPrimitive(self) -> bool:
    """
    Whether this value type is a primitive.
    
    @see PrimitiveType
    """
        ...
    def isArray(self) -> bool:
    """
    Whether this value type is an array.
    
    @see ArrayType
    """
        ...
    def isSet(self) -> bool:
    """
    Whether this value type is a set.
    
    @see SetType
    """
        ...
    def isMap(self) -> bool:
    """
    Whether this value type is a map.
    
    @see MapType
    """
        ...
    def isStream(self) -> bool:
    """
    Whether this value type is a stream.
    
    @see StreamType
    """
        ...
    def isPushStream(self) -> bool:
    """
    Whether this value type is a push stream.
    
    @see PushStreamType
    """
        ...
    def isEventStream(self) -> bool:
    """
    Whether this value type is an event stream.
    
    @see EventStreamType
    """
        ...
    def isStreamable(self) -> bool:
    """
    Whether this value type can be streamed, e.g. over HTTP.
    """
        ...
    def isStreamableArg(self) -> bool:
    """
    Whether this value type can be streamed as C3 action argument, e.g. over HTTP.
    """
        ...
    def isStreamableResult(self) -> bool:
    """
    Whether this value type can be streamed as C3 action result, e.g. over HTTP.
    """
        ...
    def isCollection(self) -> bool:
    """
    Whether this value type is any collection (array, map, set, stream).
    
    @see CollectionType
    """
        ...
    def isReference(self) -> bool:
    """
    Whether this value type is a reference to a type.
    
    @see ReferenceType
    """
        ...
    def isInstanceType(self) -> bool:
    """
    Whether this value type is a reference to an Instance type such as `Array` or `Lambda`.
    
    @see #instanceType
    @see #instanceValueType
    """
        ...
    def isVarReference(self) -> bool:
    """
    Whether this value type is a reference to a type or method generic variable.
    
    @see VarReferenceType
    """
        ...
    def isDeclaredReference(self) -> bool:
    """
    Whether this value type is a declared reference to a type or method generic variable.
    """
        ...
    def isAnyOf(self) -> bool:
    """
    Whether this value type is an "anyof" (or "union type") such as `int | [int]`.
    
    @see AnyOfType
    """
        ...
    def isBinary(self) -> bool:
    """
    Whether this value type is a binary (of any size).
    
    @see BinaryType
    """
        ...
    def isBoolean(self) -> bool:
    """
    Whether this type is a Boolean value.
    
    @see BooleanType
    """
        ...
    def isByte(self) -> bool:
    """
    Whether this type is a byte.
    
    @see ByteType
    """
        ...
    def isInt(self) -> bool:
    """
    Whether this type is a full (64 bit) integer.
    
    @see IntType
    """
        ...
    def isInt32(self) -> bool:
    """
    Whether this type is a half (32 bit) integer.
    
    @see Int32Type
    """
        ...
    def isInt16(self) -> bool:
    """
    Whether this type is a quarter (16 bit) integer.
    
    @see Int16Type
    """
        ...
    def isBigInt(self) -> bool:
    """
    Whether this type is an arbitrary-length integer.
    
    @see BigIntType
    """
        ...
    def isFloat(self) -> bool:
    """
    Whether this type is a IEEE single precision number.
    
    @see FloatType
    """
        ...
    def isDouble(self) -> bool:
    """
    Whether this type is a IEEE double precision number.
    
    @see DoubleType
    """
        ...
    def isDecimal(self) -> bool:
    """
    Whether this type is a arbitrary-precision decimal number.
    
    @see DecimalType
    """
        ...
    def isDateTime(self) -> bool:
    """
    Whether this value type is a date/time value (of any resolution).
    
    @see DateTimeType
    """
        ...
    def isJson(self) -> bool:
    """
    Whether this type is a JavaScript Object Notation object.
    
    @see JsonType
    Whether this type is JavaScript Object Notation object.
    """
        ...
    def isTypedJson(self) -> bool:
    """
    Whether this type is a typed JavaScript Object Notation object.
    """
        ...
    def isUntypedJson(self) -> bool:
    """
    Whether this type is an untyped JavaScript Object Notation object.
    """
        ...
    def isNumber(self) -> bool:
    """
    Whether this type is a number.
    
    @see NumberType
    """
        ...
    def isString(self) -> bool:
    """
    Whether this type is a text string.
    
    @see StringType
    """
        ...
    def isIntegralNumber(self) -> bool:
    """
    Whether this value type is a numeric primitive with an integer type.
    
    @see ByteType
    @see IntType
    @see Int32Type
    @see Int16Type
    @see BigIntType
    """
        ...
    def isRealNumber(self) -> bool:
    """
    Whether this value type is a numeric primitive with a real number type.
    
    @see DoubleType
    @see FloatType
    @see DecimalType
    """
        ...
    def isVector(self) -> bool:
    """
    Whether this value type is a vector.
    
    @see VectorType
    """
        ...
    def isVoid(self) -> bool:
    """
    Whether this value type is an explicit "void". This is a singleton representing no possible value.
    
    @see VoidType
    """
        ...
    def isBoxed(self) -> bool:
    """
    Whether this value type is a {@link Boxed} C3 type reference. Non-specific value types such as `any` and "anyof"
    require boxing during serialization to preserve the type information.
    """
        ...
    def isBoxedForSerialization(self) -> bool:
    """
    Whether this type is a potentially boxed type; i.e. it's instances could be boxed; e.g. will return `true` for
    `any` and of course for any value type that `isBoxed`. This returns true if the value should be boxed for
    serialization.
    """
        ...
    def isBoxedPrimitive(self) -> bool:
    """
    Whether this value type is a reference to a primitive value boxed in an instance of Boxed C3 type.
    """
        ...
    def isBoxedArray(self) -> bool:
    """
    Whether this value type is an array of references to a boxed primitive type.
    
    @see ArrayType
    @see Boxed
    """
        ...
    def isBoxedMap(self) -> bool:
    """
    @return whether this value type is a map whose elements are references to a boxed primitive type.
    
    @see MapType
    @see Boxed
    """
        ...
    def isBoxedSet(self) -> bool:
    """
    @return whether this value type is a set of references to a boxed primitive type.
    
    @see SetType
    @see Boxed
    """
        ...
    def isBoxedCollection(self) -> bool:
    """
    @return whether this value type is a collection of references to a boxed primitive type.
    
    @see CollectionType
    @see Boxed
    """
        ...
    def isRefArray(self) -> bool:
    """
    Whether this value type is an array of references.
    
    @see ArrayType
    @see ReferenceType
    """
        ...
    def isRefMap(self) -> bool:
    """
    Whether this value type is a map whose elements are references.
    
    @see MapType
    @see ReferenceType
    """
        ...
    def isRefSet(self) -> bool:
    """
    Whether this value type is a set of references.
    
    @see SetType
    @see ReferenceType
    """
        ...
    def isRefCollection(self) -> bool:
    """
    Whether this value type is any collection of references.
    
    @see CollectionType
    @see ReferenceType
    """
        ...
    def isNonEmpty(self) -> bool:
    """
    Whether this value type specifies that a _non-empty_ value must be specified. This is normally the
    {@link ValueModifier NON_EMPTY} modifier, but may also consider compound structure of more complex value types.
    """
        ...
    def isNonOptionalParam(self) -> bool:
    """
    Whether this value type specifies that a (possibly empty) value must be passed as an argument. This is either of
    the `NON_OPTIONAL_PARAM` or `NON_EMPTY` {@link ValueModifier modifiers}.
    
    @see #isNonEmpty
    """
        ...
    def isNumCollection(self) -> bool:
    """
    Whether this value type is any collection of numbers.
    
    @see CollectionType
    @see NumberType
    """
        ...
    def isNumArray(self) -> bool:
    """
    Whether this value type is an array of numbers.
    
    @see ArrayType
    @see NumberType
    """
        ...
    def isNumMap(self) -> bool:
    """
    Whether this value type is map whose elements are numbers.
    
    @see MapType
    @see NumberType
    """
        ...
    def isStrCollection(self) -> bool:
    """
    Whether this value type is any collection of string.
    
    @see CollectionType
    @see StringType
    """
        ...
    def isStrArray(self) -> bool:
    """
    Whether this value type is an array of strings.
    
    @see ArrayType
    @see StringType
    """
        ...
    def isStrMap(self) -> bool:
    """
    Whether this value type is map whose elements are strings.
    
    @see ArrayType
    @see StringType
    """
        ...
    def isTimeseries(self) -> bool:
    """
    Whether this value type is a {@link Timeseries}.
    """
        ...
    def isTuple(self) -> bool:
    """
    Whether this value type is a tuple.
    
    @see TupleType
    """
        ...
    def isFunction(self) -> bool:
    """
    Whether this value type is a function.
    
    @see FunctionType
    """
        ...
    def isMethod(self) -> bool:
    """
    Whether this value type is a method that implements a type action.
    
    @see MethodType
    """
        ...
    def isLambda(self) -> bool:
    """
    Whether this value type is a lambda.
    
    @see LambdaType
    """
        ...
    def isNative(self) -> bool:
    """
    Whether this value type represents a native type, directly supported through each language binding. Uses of
    native implicitly include all other value types (since they can be represented in each language).
    
    @see NativeType
    """
        ...
    def isEnumRef(self) -> bool:
    """
    Whether the value type has a reference to an enum.
    
    @see ReferenceType
    @see Enum
    """
        ...
    def isObjRef(self) -> bool:
    """
    Whether this value type is a reference to an {@link Obj}.
    Note that this is *not* the equivalent of {@link #isReference}, since there exists references to {@link Value}.
    
    @see ReferenceType
    @see Obj
    """
        ...
    def isReferenceTo(self, type: Union[Type,str]) -> bool:
    """
    Whether this value type is a reference to the specified type. This is a convenience function that checks for
    a reference type and then that the reference is to the specified type. Note that unlike #isAssignableTo, this
    compares the exact type.
    """
        ...
    def asPrimitiveType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[PrimitiveType]:
    """
    Cast this value type into a primitive type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return primitive type or null
    """
        ...
    def asNumberType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[NumberType]:
    """
    Cast this value type into a number type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return native type or null
    """
        ...
    def asDateTimeType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[DateTimeType]:
    """
    Cast this value type into a datetime type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return native type or null
    """
        ...
    def asStringType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[StringType]:
    """
    Cast this value type into a number type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return native type or null
    """
        ...
    def asReferenceType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[ReferenceType]:
    """
    Cast this value type into a reference type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return reference type or null
    """
        ...
    def asVarReferenceType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[VarReferenceType]:
    """
    Cast this value type into an varReference type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return var reference type or null
    """
        ...
    def asDeclaredReferenceType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[DeclaredReferenceType]:
    """
    Cast this value type into a declared reference type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return declared reference type or null
    """
        ...
    def asCollectionType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[CollectionType]:
    """
    Cast this value type into a collection type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return collection type or null
    """
        ...
    def asArrayType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[ArrayType]:
    """
    Cast this value type into an array type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return array type or null
    """
        ...
    def asSetType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[SetType]:
    """
    Cast this value type into a set type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return set type or null
    """
        ...
    def asMapType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[MapType]:
    """
    Cast this value type into a map type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return map type or null
    """
        ...
    def asStreamType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[StreamType]:
    """
    Cast this value type into a stream type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return stream type or null
    """
        ...
    def asPushStreamType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[PushStreamType]:
    """
    Cast this value type into a push stream type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return push stream type or null
    """
        ...
    def asEventStreamType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[EventStreamType]:
    """
    Cast this value type into a event stream type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return event stream type or null
    """
        ...
    def asTupleType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[TupleType]:
    """
    Cast this value type into a tuple type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return tuple type or null
    """
        ...
    def asFunctionType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[FunctionType]:
    """
    Cast this value type into a function type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return function type or null
    """
        ...
    def asMethodType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[MethodType]:
    """
    Cast this value type into a method type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return method type or null
    """
        ...
    def asAnyOfType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[AnyOfType]:
    """
    Cast this value type into an anyof type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return anyof type or null
    """
        ...
    def asAnyType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[AnyType]:
    """
    Cast this value type into an any type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return any type or null
    """
        ...
    def asNativeType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[NativeType]:
    """
    Cast this value type into a native type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return native type or null
    """
        ...
    def asLambdaType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[LambdaType]:
    """
    Cast this value type into a lambda type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return lambda type or null
    """
        ...
    def asVectorType(self, failIfNot: bool=None, source: Callable[[], Union[str]]=None) -> Union[VectorType]:
    """
    Cast this value type into a vector type.
    
    @param failIfNot if true, throw an error instead of returning null
    @param source if throwing an error, provides more detail in the message
    @return vector type or null
    """
        ...
    def hasAnyMixing(self) -> bool:
    """
    Whether or not there are any `mixing` reference types in this instance.
    
    @see ReferenceType#mixing
    """
        ...
    def hasValidMixing(self, typeName: str) -> bool:
    """
    Returns true if there are no `mixing` reference types or if all `mixing` declarations matches the given type Name
    """
        ...
    def hasPossibleValues(self) -> bool:
    """
    Whether or not this ValueType has any possible values.
    
    @see #possibleValues
    """
        ...
    def hasReference(self) -> bool:
    """
    @return `true` if this type references valid C3 type
    
    @see ReferenceType
    """
        ...
    def hasVarReference(self) -> bool:
    """
    @return `true` if this type references a generic variable
    
    @see VarReferenceType
    """
        ...
    def dereference(self, failIfMissing: bool=None) -> Union[Type]:
    """
    Look up the referenced C3 type and return it. For unbound variables or invalid type references, null is returned.
    
    @param failIfMissing if true, throw an error instead of returning null
    @return loaded type
    
    @see #instanceType
    """
        ...
    def dereferenceMeta(self, failIfMissing: bool=None) -> Union[TypeMeta]:
    """
    Look up the referenced C3 type and return it's {@link TypeMeta}. For unbound variables or invalid type references,
    null is returned.
    
    @param failIfMissing if true, throw an error instead of returning null
    @return loaded type
    
    @see #dereference
    """
        ...
    def instanceType(self, failIfMissing: bool=None) -> Union[Type]:
    """
    Look up the C3 type that represents instance of this value type. Note that is maybe different then a reference to
    a C3 Type from this value type. E.g. in case of `[Dimension]` value type `dereference` -> `Dimension` but
    `instanceType` -> `Array<Dimension>`
    
    @return loaded type
    
    @see #isInstanceType
    @see #dereference
    """
        ...
    def instanceValueType(self, failIfNot: bool=None) -> Union[ValueType]:
    """
    Look up the C3 value type that represents this instance type. E.g. if `instanceType` -> `Array<Dimension>` then
    `instanceValueType` -> `[Dimension]` i.e. corresponding `ArrayType`
    
    @return value type or null if this is not an instance type
    
    @see #isInstanceType
    @see #instanceType
    """
        ...
    def boxType(self) -> Type:
    """
    Return boxed type for the given value type.
    
    @see Boxed
    """
        ...
    def boxTypeRefType(self) -> ReferenceType:
    """
    Return boxed type reference for the given value type.
    
    @see ReferenceType
    @see Boxed
    """
        ...
    def unboxType(self) -> Union[ValueType]:
    """
    Return this value type if a not boxed or value type that was boxed.
    
    @see #boxType
    """
        ...
    def unboxPrimitiveType(self, failIfNot: bool=None) -> Union[PrimitiveType]:
    """
    Returns this value type if a primitive; if a boxed primitive, unboxes the reference; otherwise returns null.
    
    @param failIfNot if true, throw an error instead of returning null
    @return primitive type or null
    """
        ...
    def unboxCollectionType(self, failIfNot: bool=None) -> Union[CollectionType]:
    """
    Returns this value type if a collection; if a boxed collection, unboxes the reference; otherwise returns null.
    
    @param failIfNot if true, throw an error instead of returning null
    @return collection type or null
    """
        ...
    def boxValue(self, value: Any) -> Union[WithType]:
    """
    Box the given value for the value type.
    
    @param value that needs to be boxed
    @return Boxed object
    """
        ...
    def unboxValue(self, obj: Obj) -> Union[Any]:
    """
    Unbox the given value for the value type.
    
    @param Boxed value that needs to be unboxed
    @return unboxed primitive
    """
        ...
    def needsValueBoxing(self) -> bool:
    """
    `true` if this value type needs boxing during serialization even when serialized value type is known. E.g. when
    value is a result of an action call. This check is performed to to ensure strongly typed deserialization. E.g. if
    method return type is `int` then there is no need to box numeric value in json as caller can deserialize it
    correctly. However if method return type is `any` then we need to box integers, numbers, datetime etc to ensure
    strongly typed semantic. Similarly `[any]` will required boxing of elements.
    """
        ...
    @classmethod
    def guessType(cls, value: Any, failIfNone: bool=None) -> Union[ValueType]:
    """
    Infer value type from a C3 value. If the type cannot be determined, null is returned. Only values which are
    assignment compatible will be matched.
    
    Null values can never be guessed and will always return null, or throw an exception if failIfNone is true.
    
    For example:
    | value                                       | result     |
    |---------------------------------------------|------------|
    | '5.5'                                       | string     |
    | [1, 2.5, 3]                                 | json       |
    | JS object: {"name": "foo"}                  | json       |
    | Py dict/JS Map: new Map([['mumble', 55.66]])| null       |
    
    @param value to guess type of
    @param failIfNone if true, throw an exception instead of returning null
    @return guessed type or null if specific type cannot be determined
    """
        ...
    @classmethod
    def guessTypeFromJavaClass(cls, value: Any, failIfNone: bool=None) -> Union[ValueType]:
    """
    Infer value type from a Java class. If the type cannot be determined, null is returned.
    
    Null values can never be guessed and will always return null, or throw an exception if failIfNone is true.
    
    @param value to guess type of
    @param failIfNone if true, throw an exception instead of returning null
    @return guessed type or null if specific type cannot be determined
    """
        ...
    @classmethod
    def guessTypeFromPythonClass(cls, value: Any, failIfNone: bool=None) -> Union[ValueType]:
    """
    Infer value type from a Python class. If the type cannot be determined, null is returned.
    
    Null values can never be guessed and will always return null, or throw an exception if failIfNone is true.
    
    @param Python Class to guess type of
    @param failIfNone if true, throw an exception instead of returning null
    @return guessed type or null if specific type cannot be determined
    """
        ...
    @classmethod
    def guessConvertibleType(cls, value: Any, testContent: bool=None, failIfNone: bool=None) -> Union[ValueType]:
    """
    Infer value type from a C3 or native value. If the type cannot be determined, null is returned. Note that
    the value may need to be converted to the guessed type before assignment.
    
    Null values can never be guessed and will always return null, or throw an exception if failIfNone is true.
    
    If testContent is true, values are examined, and the most natural representation is guessed. For example,
    a string that looks like an integer will return an integer type, whereas if `testContent` were false, StringType
    would be returned. In case of collections, _all_ elements are examined and a convertible type returned. The testing
    is always recursive. _This is an expensive operation._
    
    For example: guessConvertibleType:
    | value                                                                            | testContent | result              |
    |----------------------------------------------------------------------------------|-------------|---------------------|
    | '5.5'                                                                            | false       | string              |
    | '5.5'                                                                            | true        | double              |
    | '3'                                                                              | true        | byte                |
    | '10000000000'                                                                    | true        | int                 |
    | [1, 2.5, 3]                                                                      | false       | [any]               |
    | [1, 2.5, 3]                                                                      | true        | [double]            |
    | JS object: {"name": "foo"}                                                       | false       | json                |
    | JS object: {"name": "foo"}                                                       | true        | json                |
    | Py dict/JS object with "type" or "$type" key: {"type": "Octopus", "name": "foo"} | false       | Octopus             |
    | Py dict/JS object with "type" or "$type" key: {"type": "Octopus", "name": "foo"} | true        | Octopus             |
    | Py dict/JS Map: new Map([['mumble', 55.66]])                                     | false       | map<any, any>       |
    | Py dict/JS Map: new Map([['mumble', 55.66]])                                     | true        | map<string, double> |
    
    @param value to guess type of
    @param testContent if true, recursively attempts to examine value and return a convertible type
    @param failIfNone if true, throw an exception instead of returning null
    @return guessed type or null if specific type cannot be determined
    
    @see #guessType
    """
        ...
    @classmethod
    def guessTypeOrAny(cls, value: Any, testContent: bool=None) -> ValueType:
    """
    Infer value type from a C3 value. If the type cannot be determined, `any` is returned. Only values which are
    assignment compatible will be matched (unless testContent is true).
    
    Null values can never be guessed and will always return `any`.
    
    @param value value to guess type of
    @param testContent if true and the value is a string, attempts to parse string content to determine type
    @return guessed type or `any` if specific type cannot be determined
    
    @see #guessType
    """
        ...
    @classmethod
    def guessTypeName(cls, v: Any) -> str:
    """
    Return a string that represents the type of the value, useful in error messages where a value cannot be handled
    such as conversion. Note that if this isn't a made type or a natural primitive, the native label (such as the
    Java class name) is returned.
    """
        ...
    @classmethod
    def guessSerializableType(cls, value: Any, failIfNone: bool=None) -> Union[ValueType]:
    """
    Infer serializable value type from a C3 or native value. If the type cannot be determined, null is returned.
    
    Null values can never be guessed and will always return null, or throw an exception if failIfNone is true.
    
    @param value to guess the serializable type of
    @param failIfNone if true, throw an exception instead of returning null
    """
        ...
    @classmethod
    def guessSerializableTypeOrAny(cls, value: Any) -> ValueType:
    """
    Infer serializable value type from a C3 or native value. If the type cannot be determined, `any` is returned.
    Only values which are assignment compatible will be matched.
    
    Null values can never be guessed and will always return `any`.
    
    @param value to guess serializable type of
    @return guessed serializable type or `any` if specific type cannot be determined
    
    @see #guessSerializableType
    """
        ...
    def isSameValue(self, value: Any) -> bool:
    """
    Whether the specified value's natural value type is exactly the same values as this value type. This will ignore
    the value modifier for non-empty values so both `!int` and `int` will return true for `7`.
    
    @see #isSame
    """
        ...
    @overload
    def isA(self, other: ValueType) -> bool:
    """
    Whether this value type is the same or a sub-type of the specified value type. This tests the value type
    hierarchy, not the acceptability of value assignment. For the latter, use #isAssignableTo. In addition, this
    tests generic bindings.
    
    For example, {@link IntType} isA {@link NumberType}, but `int` !isA `any` because **IntType** is not a sub-type
    of {@link AnyType}. Also, `[int]` isA `collection<int>` because {@link ArrayType} is a sub-type of
    {@link CollectionType} and they have isA generic bindings (`E: int`).
    
    @see TypeMeta#isA
    @see #isSame
    @deprecated(details="Use `#isAssignableTo` for acceptability of assignment or `TypeMeta#isA` to test type hierarchy.")
    """
        ...
    @overload
    def isA(self, decl: str) -> bool:
    """
    Whether this value type is the same or a sub-type of the specified value type. This tests the value type
    hierarchy, not the acceptability of value assignment. For the latter, use #isAssignableTo. In addition, this
    tests generic bindings.
    
    For example, {@link IntType} isA {@link NumberType}, but `int` !isA `any` because **IntType** is not a sub-type
    of {@link AnyType}. Also, `[int]` isA `collection<int>` because {@link ArrayType} is a sub-type of
    {@link CollectionType} and they have isA generic bindings (`E: int`).
    
    @see TypeMeta#isA
    @see #isSame
    @deprecated(details="Use `#IsAssignableTo` for acceptability of assignment or `TypeMeta#isA` to test type hierarchy.")
    """
        ...
    @overload
    def isAssignableTo(self, other: ValueType) -> bool:
    """
    Whether all values of this type can be directly assigned to a field of the specified type.
    
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    For example all `int` values are assignable to `int`, `number`, `any`, and `int | [int]` values.
    
    Note that this takes into account generic variables for collection types so `[int]` is assignable to
    `collection<int>`, but not `collection<string>` (and not to other collection types).
    
    This is the inverse of #isAssignableFrom (and is implemented using it).
    
    @see #isAssignableFrom
    @see #isSame
    """
        ...
    @overload
    def isAssignableTo(self, decl: str) -> bool:
    """
    Whether all values of this type can be directly assigned to a field of the specified type.
    
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    For example all `int` values are assignable to `int`, `number`, `any` and `int | [int]` values.
    
    Note that this takes into account generic variables for collection types so `[int]` is assignable to
    `collection<int>`, but not `collection<string>` (and not to other collection types).
    
    This is the inverse of #isAssignableFrom (and is implemented using it).
    
    @see #isAssignableFrom
    @see #isSame
    """
        ...
    def isAssignableFrom(self, other: ValueType) -> bool:
    """
    Whether all values of the specified type can be directly assigned to a field of this type.
    
    This is a convenient way to ask "is the other type usable in a context requiring this one?" For example `int`,
    `number`, `any` and `int | [int]` values are all assignable from `int`.
    
    Note that this takes into account generic variables for collection types so `collection<int>` is assignable from
    `[int]`, but not `collection<string>`. (And other collection types with `int` elements.)
    
    @see #isConvertibleFrom
    @see #isAssignableValue
    @see #convertValue
    @see #isAssignableTo
    """
        ...
    def isAssignableValue(self, value: Any) -> bool:
    """
    Whether the specified value can be assigned to this type. This is similar to
    `isAssignableFrom(ValueType.guessType(value))`, except that it handles null and values of unknown type.
    
    @see #isAssignableFrom
    @see #guessType
    """
        ...
    def isConvertibleFrom(self, other: ValueType) -> bool:
    """
    Whether values of the specified type can potentially be converted to this type. This is the weakest form of
    compatibility and only makes sense on values since the types may be generally incompatible (not #isSame nor
    #isAssignableTo).
    
    For example `string.isConvertibleFrom(double)` is true since all double values can be converted to strings.
    However, `double.isConvertibleFrom(string)` is _also_ true, since there exists a conversion from string to double.
    But, not every string is a valid double, so #convertValue may fail at runtime if given a string that is not a
    valid double representation.
    
    @see #isAssignableFrom
    @see #isConvertibleValue
    @see #convertValue
    """
        ...
    def isConvertibleValue(self, value: Any, testContent: bool=None) -> bool:
    """
    Whether specified value can potentially be converted to this type.
    
    @param testContent if set to `true` will effectively perform conversion so with `testContent` set and this method
                       returning `true` it is guaranteed that runtime conversion will also succeed.
    
    @see #isAssignableFrom
    @see #convertValue
    """
        ...
    def distance(self, other: ValueType) -> int:
    """
    Calculates "distance" between this and other value types as defined by integer where:
     - 0 - means that value types are same
     - 1 - means that other is assignable to this value type
     - 2 - means that other is convertible to this value type
     - PrimitiveType.ofInt().maxValue() - means that other is not even convertible to this value type
    """
        ...
    def valueDistance(self, value: Any, testContent: bool=None) -> int:
    """
    Calculates "distance" between this and provided value where:
     -  0 - means that value's natural value type is exactly the same as this value type.
     -  1 - means that value can be assigned to this value type, which is a non-abstract type.
     -  2 - means that value is a "WrappedValue", and the value being wrapped has a `valueDistance` of 0 or 1.
     -  3 - means that value can be assigned to this value type, which is an abstract type.
     -  4 - means that value is a number and the value type is a number type.
     -  5 - means that value is convertible to this value type (without testing content).
     -  6 - means that value is convertible to this value type (with testing content).
     -  7 - means that value is null or any, so technically is convertible to this value type.
     -  8 - means that value is not a string and the value type is a string type,
              or it means that this value type is native, everything can be assign to this value type.
     -  9 - means that value is a "WrappedValue", and the value being wrapped is convertible to the given value type.
     - -1 - means that value is not even convertible to this value type.
    """
        ...
    def convertValue(self, value: Any, failIfInvalid: bool=None) -> Union[Any]:
    """
    Convert the specified value to this value type. If the value cannot be converted, return null. If failIfInvalid
    is true, a non-convertible value will throw an error.
    
    The specifics of conversion depend on the value type, for example PrimitiveType#convertValue.
    
    This is a potentially expensive operation requiring examination of the content and parsing.
    
    Note that null converts without error in all cases. This can be confused with "not convertible" if called with
    failIfInvalid = false.
    
    @param value value to convert
    @param failIfInvalid whether to throw an error if conversion fails
    @return value or null if not convertible
    
    @see #isConvertibleFrom
    """
        ...
    def convertValueWithDflt(self, value: Any, dfltConversion: Callable[[Union[Any]], Union[Any]]) -> Union[Any]:
    """
    Convert the specified value to this value type. If the value cannot be converted or is null [ or empty ] then
    invokes provided callback.
    
    @see #convertValue
    """
        ...
    def convertToJavaRuntime(self, value: Any, failIfInvalid: bool=None) -> Union[T]:
    """
    Convert a c3 object to java runtime class
    @param value
              c3 object to convert.
    @param failIfInvalid
              whether to throw error if the conversion fails.
    
    @see {@link Ann.Java#runtimeClassName}
    """
        ...
    def valueToString(self, value: Any, failIfNone: bool=None) -> Union[str]:
    """
    Produce a string serialization of the value for this type. If the value is null, the produced string is null.
    If this is a primitive type, the natural representation is produced. Otherwise if **StringSerializable**,
    the `toString` method is called. Otherwise, null is returned.
    
    @param value value to serialize as a string
    @param failIfNone throw an error instead of returning null if no string serialization exists
    
    @see StringSerializable#toString
    """
        ...
    def valueFromString(self, s: str, failIfInvalid: bool=None) -> Union[Any]:
    """
    Instantiate a value of this type from the serialized string. If the string is null, the produced value is null.
    If this is a primitive type, the natural representation is parsed. Otherwise if **StringSerializable** the
    `fromString` method is called.
    
    @see StringSerializable#fromString
    """
        ...
    def valueToTypedJson(self, value: Any) -> Union[any]:
    """
    Produce a json serialization of the provided value for this value type. If the value is null, the returned json is
    null.
    
    @param value
           The value to serialize.
    
    @return the json serialization of the value
    """
        ...
    def valueToTypedJsonString(self, value: Any) -> Union[str]:
    """
    Produce a json string serialization of the value for this type.
    """
        ...
    def valueToJson(self, value: Any) -> Union[any]:
    """
    Produce a json serialization of the provided value for this value type. If the value is null, the returned json is
    null. The produced json should not contain any type information or boxing. This is used mostly for ensuring that
    pure json is not converted and to pass C3 value instances to external (non-type-aware) libraries.
    
    @param value
           The value to serialize.
    
    @return the json serialization of the value
    """
        ...
    def valueToJsonString(self, value: Any) -> Union[str]:
    """
    Produce a json string serialization of the value for this type. If the value is null, produces null.
    The produced json should not contain any type information or boxing. This is used mostly for ensuring that
    pure json is not converted and to pass C3 value instances to external (non-type-aware) libraries.
    """
        ...
    def valueFromJson(self, json: any, failIfInvalid: bool=None) -> Union[Any]:
    """
    Instantiate a value of this type from the serialized json. If the json is null, the produced value is null.
    """
        ...
    def valueFromJsonString(self, json: str, failIfInvalid: bool=None) -> Union[Any]:
    """
    Instantiate a value of this type from the serialized json string. If the json string is null, the produced value is
    null.
    """
        ...
    def valueFromJsonWithType(self, json: any, failIfInvalid: bool=None) -> Union[Any]:
    """
    Instantiate a value of this type from a boxed json.
    See {@link documentation-features.c3doc} for the formal documentation for "boxed json".
    """
        ...
    def valueToHttpResponse(self, value: Any, req: HttpRequest) -> HttpResponse:
    """
    Produce a HttpResponse serialization of the provided value for this value type. If this value type is Streamable,
    then should attempt to also stream it in the HttpResponse.
    
    @param value
           The value to serialize as HttpResponse.
    
    @return the HttpResponse serialization of the value
    """
        ...
    def valueFromHttpRequest(self, req: HttpRequest) -> T:
    """
    Produce a value from provided HttpRequest. If value type is Streamable, then should stream directly from
    HttpRequest without immediately reading http request body.
    
    @param value
           The value instantiated from HttpRequest.
    
    @return the value represented by HttpRequest
    """
        ...
    def validateValueWithDefaults(self, value: T, asFunctionArg: bool, forJava: bool, failIfInvalid: bool=None) -> Union[T]:
    """
    Validates the provided value, i.e. populates all defaults and ensures resulting value is valid i.e. #isSameValue
    and satisfies all constraints. Also handles #defaultEmptyValue if this value type #hasDefaultEmptyValue
    and provided value is null.
    
    @param value
         Value that needs to be validated
    @param asFunctionArg
         Apply function argument validation rules
    @param forJava
         Apply validation and conversion rules that are specific to Java
    @param failIfInvalid
         Throw an exception if validation fails
    @return true if provided value is valid i.e. #isSameValue and satisfies all constraints.
    """
        ...
    def validateValue(self, value: Any, failIfInvalid: bool=None) -> bool:
    """
    Validates if the the provided value is valid i.e. #isAssignableValue and satisfies all constraints
    
    @param value
         Value that needs to be validated
    @param failIfInvalid
         Throw an exception if validation fails
    @return true if provided value is valid i.e. #isSameValue and satisfies all constraints.
    """
        ...
    def valueValidator(self) -> Callable[[Union[T]], bool]:
    """
    @return predicate that tests if value is valid i.e. #isAssignableValue and satisfies all constraints.
    """
        ...
    def hasConstraints(self) -> bool:
    """
    @return `true` if this type defines any constraints such as `non empty`
    """
        ...
    def hasValidation(self, asFunctionArg: bool=None) -> bool:
    """
    @return `true` if this type defines any constraints such as `non empty` or has default values or requires any other
            form of validation i.e. reason to use `#validateValueWithDefaults`
    """
        ...
    def compareValues(self, v1: Any, v2: Any) -> int:
    """
    @return 0 if provided values are equal; -1 if v1 < v2 and 1 if v1 > v2. Note that null == null and null > non null
    """
        ...
    @overload
    def valueComparator(self) -> Union[Callable[[Union[T], Union[T]], int]]:
    """
    @return value comparator lambda as described in #compareValues.
    """
        ...
    @overload
    def valueComparator(self, descending: bool) -> Union[Callable[[Union[T], Union[T]], int]]:
    """
    @return value comparator lambda in a descending order as described in #compareValues.
    """
        ...
    def valueConverter(self, valueClass: Any) -> Union[Any]:
    """
    @return the appropriate `ValueConverter` for values of the given class.
    """
        ...
    def isSamePredicate(self, kind: str=None) -> Union[Callable[[Union[T], Union[T]], bool]]:
    """
    @return value comparator lambda returning if the values are same
    """
        ...
    def defaultEmptyValue(self) -> Union[Any]:
    """
    @return default empty value for this value type that is typically not `null`; this is value that on Val.isEmpty
            check returns `true`. However some value types such as `int` or `function` do not have non null empty
            values. E.g. default empty value for boolean is `false` and for collections an empty collection.
    """
        ...
    def hasDefaultEmptyValue(self) -> bool:
    """
    @return `true` if this value type has #defaultEmptyValue that is not null
    """
        ...
    def initialValue(self) -> Union[Any]:
    """
    @return initial value for this value type; this is typically a non null instance but not necessarily same as
            #defaultEmptyValue. E.g. for `int` #initialValue is 0 while #defaultEmptyValue is `null`.
    """
        ...
    def hasEnum(self) -> bool:
    """
    Whether this type has an enumeration of possible values either via `enum(<list of possible values>)` DSL syntax
    or via `enum <enum type>` syntax
    
    @see enumPossibleValues
    """
        ...
    def enumValues(self) -> Union[Array[Any]]:
    """
    If this type has an enumeration of possible values, those possible values.
    
    @see hasEnum
    """
        ...
    def possibleValues(self, scope: Union[,TypeMeta,Obj]=None, failIfUnknown: bool=None) -> Union[Array[Any]]:
    """
    If this value type has an enumeration of possible values, those possible values.
    
    @param scope
            scope for the {@link Ann.Value#possibles `@value(possibles)`} C3 expression. This is basically parent where
            this value type is defined. Such as C3 type or a C3 tuple.
    @param failIfUnknown
            if true, throw an error if the possible values cannot be determined
    @return all possible values if known; e.g. all boolean values or all enum values
    """
        ...
    def possibleValuesExpr(self) -> Union[Expr]:
    """
    @return cached parsed expression for @value(possibles) annotation
    """
        ...
    def isEmptyValue(self, v: Any) -> bool:
    """
    @return true if value for this value type is empty
    """
        ...
    @classmethod
    def mergeValueTypes(cls, *types: Array[ValueType]) -> Union[ValueType]:
    """
    Returns a type which can accommodate all of the passed value types. This is as narrow as necessary, but will be
    expanded so that all passed value types are #isAssignableTo the returned type.
    
    @param types
           one or more types to be merged into a single type
    @return merged value type
    """
        ...
    def arrayType(self) -> ArrayType:
    """
    @return array type with this as element type.
    """
        ...
    def setType(self) -> SetType:
    """
    @return set type with this as element type.
    """
        ...
    def streamType(self) -> StreamType:
    """
    @return stream type with this as element type.
    """
        ...
    def mapType(self) -> MapType:
    """
    @return map type with `string` as key type and this as element type.
    """
        ...
    def mapTypeOf(self, keyType: ValueType) -> MapType:
    """
    @return map type with provided type and this as element type.
    """
        ...
    def hasEventStream(self) -> bool:
    """
    @return `true` if this is a EventStream or references any event streams
    """
        ...
    def toLabel(self) -> str:
    """
    Produce a user-friendly label for this value type. This will be some of what appears in #toString, but will _not_
    be complete and cannot be used for serialization. This is intented to be used in the UI to summarize data being
    displayed.
    """
        ...
    def build(self, scope: TypesysScope, required: bool, context: Callable[[], str]) -> Union[ValueType]:
    """
    @return built instance of this value type; i.e. instance bound to a parent type typically by resolving references
            and generic variable bindings. Note that if this value type is invalid call will still succeed but will set
            appropriate metadata issue on a parent type.
    
    @param scope
           C3 Type-system scope for this value type
    @param required
           if set and this value type is invalid will return generic instance of this value type
    @param context
           description / context to be used when generating MetadataIssue for parent type if this value type is invalid
    
    @see DeclaredReferenceType
    """
        ...
    def isBuilt(self) -> bool:
    """
    @return true if this instance was constructed with #build vs just by parsing DSL.
    """
        ...
    def visit(self, visitor: Any) -> Union[T]:
    """
    Calls specific method on visitor based on instance of this ValueType.
    """
        ...
    def javaClass(self, box: bool) -> Union[Any]:
    """
    @return Java class that can hold instance of this value; if `box` is true will return boxed Java class even if
            primitive is required
    """
        ...
    def pyClass(self) -> Union[Any]:
    """
    @return Python class that can hold instance of this value
    """
        ...
    def javaJType(self, spec: Any=None) -> Union[Any]:
    """
    @return Java Type that can hold instance of this value
    """
        ...
    def cacheKeyPrefix(self) -> Union[str]:
    """
    @return cache key prefix containing modifiers like `!`, '?', '!?'
    """
        ...
    def bindAllGenericVars(self, scope: TypesysScope) -> ValueType:
    """
    @return ValueType with all varBindings bound to `any`, only if refVarBindings weren't "declared" on the "raw"
    c3typ files.
    Uses {@link ReferenceType#hadDeclaredVarBindings} to decide if refVarBindings were declared.
    """
        ...
    def isPersistSerialized(self) -> bool:
    """
    @return True if the value type should be persisted as a serialized value
    """
        ...
    def serializedValueType(self) -> Union[ValueType]:
    """
    @return The serialized value type for this value type if {@link isPersistSerialized} returns true.
    """
        ...
    def dataFieldTypeNames(self) -> Union[Array[str]]:
    """
    Get names of all data (e.g. non-enum, non-const...) fields for this type. Concretely, we have:
    ReferenceType: {@link TypeMeta#dataFieldTypeNames} of {@link ReferenceType#dereferenceMeta}
    CollectionType: {@link ValueType#dataFieldTypeNames} of {@link CollectionType#elementType}
    TupleType (named): {@link TupleFieldType#name}s of {@link TupleType#fieldTypes}
    Everything else: empty list
    
    @return a list of field names.
    """
        ...
    def eachReferencedValueType(self, action: Callable[[Union[ValueType]]]) -> None:
    """
    Execute provided lambda against this ValueType and recursively against all other ValueTypes referenced in the
    declaration of this ValueType.
    e.g., an {@link AnyOfType}'s {@link AnyOfType#restrictions}
          an {@link ArrayType}'s {@link ArrayType#elementType}, etc.
    """
        ...
    def skipJsonObjectConversion(self) -> bool:
    """
    The following value types should json object conversion to extract type / value if json is object structure
    """
        ...
    def makeValue(self, from_: Any) -> Union[Any]:
        ...
    def emptyValue(self) -> Union[Any]:
        ...
    def factoryMethodName(self) -> str:
    """
    @return the factory method name for this value type (e.g., "ofInt", "ofStr", "ofDbl", "ofBool").
            can be used by code generators and tests to construct type instantiation expressions.
            default returns "inst" for types without specific factory methods.
    """
        ...
    def factoryMethodExpr(self) -> str:
    """
    @return a code expression that instantiates this value type (e.g., "PrimitiveType.ofInt()", "ArrayType.ofStr()").
            can be used by code generators and tests.
    """
        ...
    @classmethod
    def inst(cls) -> NativeType:
    """
    @return the default instance to be used when member functions are called on this type. E.g.
            FileSystem.inst() should return a default file system. It is up to implementation to decide if default
            instance is a singleton or not.
    """
        ...
    def className(self, lang: str) -> str:
    """
    Get the class name for the specified language as specified with language-specific annotations:
    
    ```type
    listToArray: function(list: @java(class="java.util.List<String>") native): [string]
    numpyToArray: function(np: @py(class="numpy.ndarray") native): [string]
    ```
    
    If no annotation is specified, default to the most basic type in the language, such as Java's `Object`.
    
    @see Ann.Java#class
    @see Ann.Py#class
    """
        ...

