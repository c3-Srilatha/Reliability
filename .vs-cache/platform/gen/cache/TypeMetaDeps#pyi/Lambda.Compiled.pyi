#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FunctionType import FunctionType
from c3.platform.LambdaType import LambdaType
from c3.platform.Promise import Promise
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.Lambda.Compiled.Java import Lambda.Compiled.Java
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayType import ArrayType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.CallableProtocol import CallableProtocol
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Promise import Promise
from c3.platform.FieldType import FieldType
from c3.platform.HttpRequest import HttpRequest
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Lambda.Compiled import Lambda.Compiled
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Content import Content
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValueSpec import ValueSpec
from c3.platform.ExecutionEnvironment import ExecutionEnvironment
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FieldValue import FieldValue
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapType import MapType
from c3.platform.Lambda import Lambda
from c3.platform.Exclude import Exclude

# Python definitions for the C3 type Lambda.Compiled

F = TypeVar('F')

class Compiled(Generic[F], Lambda[F]):
    """
    Abstract base type for pre-compiled Lambda with efficient invocation.
    
    Subtypes hold language-specific pre-compiled callables that are used directly
    when {@link #apply} or {@link #call} is invoked, avoiding the overhead of re-parsing
    and evaluating the source code on each invocation.
    
    Created via {@link Lambda#compile}.
    
    @see Lambda
    @see Lambda.Compiled.Java
    
    @remarks this represents a made instance of Lambda.Compiled
    """
    
    appliedArgs: Optional[Map[str, Any]]=None
    """
    Partially applied arguments.
    """

    baseSignature: Optional[str]=None
    """
    The original function signature before arguments were partially applied.
    """

    language: Optional[str]
    """
    A "language" of this lambda. I.e. how #implementation should be interpreted. This must be one of the constant
    values from {@link Lambda.Language}.
    """

    implementation: Optional[str]
    """
    An implementation of this this lambda. Depends on #language.
    """

    environment: Optional[Map[str, Any]]=None
    """
    Extra settings to establish in the target execution environment before execution.
    """

    actionRequirement: Optional[str]=None
    """
    The minimal action requirement for this lambda to execute. This should generally be null, to make the lambda as
    widely useful as possible.
    """
    def __init__(self, appliedArgs: Optional[Map[str, Any]]=None, baseSignature: Optional[str]=None, language: Optional[str]=None, implementation: Optional[str]=None, environment: Optional[Map[str, Any]]=None, actionRequirement: Optional[str]=None) -> None: ...

    def toString(self) -> Union[str]:
    """
    Primary serialization is through JSON, but it's also possible to use string serialization. The format is:
    _actionRequirement_ `:` _implementation_. If there is no actionRequirement specified, the default requirement for
    the language is used.
    """
        ...
    def _call_(self, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Any]:
    """
    Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
    `args` and `kwargs` are of `ValueType` `any`.
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
    @overload
    def toNative(self, doNotCopy: bool=None) -> Union[Any]:
    """
    The closest native representation of the value.
    
    In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
    access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
    exposed, copying if necessary.
    
    @param doNotCopy return internal state without copying (unsafe access)
    """
        ...
    @overload
    def toNative(self, type: LambdaType=None, failIfNone: bool=None) -> Union[Any]:
    """
    Return the native instance that is directly callable in the current runtime, or null.
    If the language and runtime, if defined, of the Lambda `toNative` is called on match the runtime in which it is
    called, then the returned value is the native callable that will be executed in that runtime. Otherwise, the
    returned value is simply a wrapper around `call`, and the execution will be handled by the runtime of the Lambda.
    
    If the Lambda instance has any `appliedArgs` AND the runtime in which `toNative` is being executed can execute
    the lambda, then the native callable that is returned will contain logic to handle merging the `appliedArgs`
    with arguments supplied when the native callable is invoked.
    
    @param type the specific lambda desired, needed for strongly-typed languages
    @param failIfNone throw an error instead of returning null if conversion is not possible
    @return native lambda callable
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
    def fromJson(cls, json: any) -> Union[Lambda.Compiled[F]]:
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
    def fromJsonString(cls, json: str) -> Union[Lambda.Compiled[F]]:
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
    def fromXmlString(cls, xml: str) -> Union[Lambda.Compiled[F]]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Lambda.Compiled[F]]:
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
    def replaceType(self, old: Type, new: Type) -> Lambda.Compiled[F]:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Compiled[F]:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Compiled[F]:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Compiled[F]]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Compiled[F]]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Lambda.Compiled[F]:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Compiled[F]:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Compiled[F]:
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
    def validateObj(self) -> Lambda.Compiled[F]:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Lambda.Compiled[F]:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Lambda.Compiled[F]:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Lambda.Compiled[F]:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Lambda.Compiled[F]:
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
    def withoutFieldAtPath(self, path: str) -> Lambda.Compiled[F]:
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
    def withoutField(self, field: str) -> Lambda.Compiled[F]:
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
    def withoutField(self, field: FieldType) -> Lambda.Compiled[F]:
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
    def withoutFields(self, fields: Array[str]) -> Lambda.Compiled[F]:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Lambda.Compiled[F]:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Lambda.Compiled[F]:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Lambda.Compiled[F]:
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
    def defaultField(self, field: str) -> Lambda.Compiled[F]:
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
    def defaultField(self, field: FieldType) -> Lambda.Compiled[F]:
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
    def unsetField(self, field: str) -> Lambda.Compiled[F]:
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
    def unsetField(self, field: FieldType) -> Lambda.Compiled[F]:
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
    def removeField(self, field: str) -> Lambda.Compiled[F]:
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
    def removeField(self, field: FieldType) -> Lambda.Compiled[F]:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Lambda.Compiled[F]:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Lambda.Compiled[F]:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Lambda.Compiled[F]:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Lambda.Compiled[F]:
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
    def mergeJson(self, json: any) -> Lambda.Compiled[F]:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Lambda.Compiled[F]:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Lambda.Compiled[F]:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Lambda.Compiled[F]]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Lambda.Compiled[F]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Lambda.Compiled[F]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Lambda.Compiled[F]]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Lambda.Compiled[F]]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Lambda.Compiled[F]]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Lambda.Compiled[F]]]:
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
    def toBuilder(self) -> ObjBuilder[Lambda.Compiled[F]]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Lambda.Compiled[F]]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Lambda.Compiled[F]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Compiled[F]:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Lambda.Compiled[F]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Lambda.Compiled[F]:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Compiled[F]:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Lambda.Compiled[F]:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Lambda.Compiled[F]:
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
    def afterMake(self) -> Lambda.Compiled[F]:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Lambda.Compiled[F]:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Lambda.Compiled[F]]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Lambda.Compiled[F]:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def apply(self, args: Array[Any]=None) -> Union[Any]:
    """
    Override apply to use the pre-compiled callable.
    """
        ...
    def call(self, *args: Array[Any]) -> Union[Any]:
    """
    Invoke the anonymous function with the specified arguments in the ordinary way.
    The arguments passed must match the signature of the underlying function.
    """
        ...
    def partiallyApply(self, args: Map[str, Any]=None) -> Lambda.Compiled[F]:
    """
    @return a clone of this lambda with partially applied arguments.
    """
        ...
    def partiallyApplyBatch(self, args: Array[Map[str, Any]]) -> Array[Lambda.Compiled[F]]:
    """
    @return an array of clones of this lambda with partially applied arguments (elements of the input array).
    """
        ...
    def partiallyCall(self, *args: Array[Any]) -> Lambda.Compiled[F]:
    """
    @return a clone of this lambda with partially applied arguments. The arguments passed must match the signature of
            the underlying function.
    """
        ...
    def signature(self) -> Union[FunctionType]:
    """
    @return effective signature for this lambda. If it has partially applied arguments then this signature will not
            contain those.
    """
        ...
    def withSignature(self, signature: FunctionType=None) -> Lambda.Compiled[F]:
    """
    @return a lambda with the same implementation and language, but with its signature (and function type binding)
            set. If `signature` is not provided, then it will be inferred from the lambda's source code if it is
            a JavaScript or Python lambda.
    """
        ...
    @classmethod
    def fromAction(cls, type: Type, action: str) -> Lambda.Compiled[F]:
    """
    Create a lambda from the specified action method.
    
    @param type
              type that implements the method
    @param action
              name of the method
    """
        ...
    @classmethod
    def fromJavaMethod(cls, class_: str, method: str, functionType: str=None) -> Lambda.Compiled[F]:
    """
    Create a lambda from the specified Java static method.
    
    @param class
              Java class that implements the method
    @param method
              name of the method
    @param functionType
              the string serialized type of the function invoked by this lambda
    """
        ...
    @classmethod
    def fromJavaSrc(cls, javaCode: str) -> Lambda.Compiled[F]:
    """
    Create a lambda from the specified Java source code.
    
    @param javaCode
              Java code for a class with a single public static method.
    """
        ...
    @classmethod
    def fromJavaSerializableSupplier(cls, javaSerializableSupplier: Callable[[], Union[Any]]) -> Lambda.Compiled[F]:
    """
    Create a lambda from the specified native Java lambda.
    
    @param javaSerializableSupplier
              Java `Serializable & Supplier` functional instance instance.
    """
        ...
    @classmethod
    def fromJavaSerializableFunction(cls, javaSerializableFunction: Callable[[Union[Any]], Union[Any]]) -> Lambda.Compiled[F]:
    """
    Create a lambda from the specified native Java lambda.
    
    @param javaSerializableFunction
              Java `Serializable & Function` functional instance instance.
    """
        ...
    @classmethod
    def fromJavaSerializableBiFunction(cls, javaSerializableBiFunction: Callable[[Union[Any], Union[Any]], Union[Any]]) -> Lambda.Compiled[F]:
    """
    Create a lambda from the specified native Java lambda.
    
    @param javaSerializableBiFunction
              Java `Serializable & BiFunction` functional instance instance.
    """
        ...
    @classmethod
    def fromJavaSerializableRunnable(cls, javaSerializableRunnable: Callable[[]]) -> Lambda.Compiled[F]:
    """
    Create a lambda from the specified native Java lambda.
    
    @param javaSerializableRunnable
              Java `Serializable & Runnable` functional instance instance.
    """
        ...
    @classmethod
    def fromJsSrc(cls, functionCode: str) -> Lambda.Compiled[F]:
    """
    Create a simple lambda from the specified JavaScript function definition. This can either be an anonymous
    function or a lambda. Note that because C3 Lambda may be executed in a different context, the function can't
    have references to global or scope variables.
    
    e.g.
    ```
    Lambda.fromJsSrc("x => 3 + x");
    ```
    @param functionCode
              code that defines a JavaScript function
    
    @see #fromJsFunc
    """
        ...
    @classmethod
    def fromJsFunc(cls, func: Any) -> Lambda.Compiled[F]:
    """
    Create a simple lambda from the specified JavaScript function. Note that because C3 Lambda needs to be fully
    serializable, the provided JS code can't have references to global or scope variables. Also, Function.bind will not
    work and `this` will not be preserved.
    
    e.g.this will not work:
    ```
    var hi = 'Hi!'
    Lambda.fromJsFunc(function() { return hi + ' back!' }).toJson()
    ```
    however this will:
    ```
    Lambda.fromJsFunc(function(hi) { return hi + ' back!' }).partiallyCall('Hi!').toJson()
    ```
    
    @param func
              the native JavaScript function
    
    @see #fromJsSrc
    """
        ...
    @classmethod
    def fromPySrc(cls, functionCode: str, actionRequirement: str=None) -> Lambda.Compiled[F]:
    """
    Create a simple lambda from the specified Python code.
    
    @param functionCode
              A string representing a Python function.
              e.g. `Lambda.fromPySrc('lambda x: x + 1')`)
    @param runtime
              If specified, the @link{ImplLanguage.Runtime} in which the function must run.
              If not specified, it will be `py` which means it should be executable in any python runtime.
    @returns
              Lambda function implemented in python
    """
        ...
    @classmethod
    def fromPyFunc(cls, func: Any, actionRequirement: str=None) -> Lambda.Compiled[F]:
    """
    Create a simple lambda from the specified Python function
    
    @param func
              The native Python function.
              e.g. `f = lambda x: x + 1; Lambda.fromPyFunc(f)`.
    @param actionRequirement
              If specified, the @link{ImplLanguage.Runtime} in which the function must run.
              If not specified, it will be `py` which means it should be executable in any python runtime.
    @returns
              Lambda function implemented in python
    """
        ...
    @overload
    @classmethod
    def fromSrc(cls, signature: FunctionType, src: Content) -> Lambda.Compiled[F]:
    """
    Creates a lambda from the source content. Content should have a content location and/or content type to determine
    the implementation language and optionally action requirement. E.g. file named `action.py-py4j.py` will be
    interpreted as a Python lambda with action requirement of `py-py4j`. Similarly, a content with media type of
    `application/javascript` will be interpreted as a JavaScript lambda. And finally all other content will be
    treated as serialized representation of Lambda.c3typ.
    
    @see #fromJsSrc
    @see #fromPySrc
    """
        ...
    @overload
    @classmethod
    def fromSrc(cls, signature: FunctionType, language: str, impl: str, actionRequirement: str=None) -> Lambda.Compiled[F]:
    """
    Create a simple lambda from the specified function definition. This can either be an anonymous
    function or a lambda. Note that because C3 Lambda may be executed in a different context, the function can't
    have references to global or scope variables.
    
    e.g.
    ```
    Lambda.fromSrc("function(x: !?int): !int", Lambda.Language.JAVASCRIPT, "x => 3 + x");
    ```
    @param signature
              C3 signature of new lambda
    @param language
              language of the code for lambda
    @param impl
              code that defines a logic of this lambda
    @param actionRequirement
              If specified, the @link{ImplLanguage.Runtime} in which the implementation must run
    @see #fromJsFunc
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[Lambda.Compiled[F]]:
    """
    Create a simple lambda from the specified string.
    
    This uses the HTML style with the language, a colon, and the implementation.
    For example: `"javascript:function(s) { ... }"` or `"action:Lambda.fromString"` or:
    ```
    java-code:
    import java.io.*;
    class C3 {
      public static void lambda() { ... }
    }
    ```
    
    Note that this validates only the structure of the string, it does not validate that the lambda code is valid.
    
    @param s
              language and code for the lambda
    """
        ...
    @classmethod
    def convertFromString(cls, s: str, failIfInvalid: bool=None) -> Union[Lambda.Compiled[F]]:
    """
    Create a simple lambda from the specified string, if in the correct format. Note that unlike #fromString,
    it does not throw an error by default, but instead returns null.
    
    @param s
              language and code for the lambda
    @param failIfInvalid
              if true, throw an error instead of returning null
    
    @see #fromString
    """
        ...
    def toHttpRequest(self, env: ExecutionEnvironment=None, auth: str=None) -> HttpRequest:
    """
    @return HttpRequest for REST invocation of this action.
    """
        ...
    def toJavaAnyFunction(self) -> Any:
    """
    @return a Java instance that can produce any of a variety of standard functional interface instances.
    """
        ...
    def toJavaSerializableRunnable(self) -> Union[Any]:
    """
    @return Java native `Serializable & Runnable` instance wrapping calls to this lambda.
    """
        ...
    def toJavaSerializableSupplier(self) -> Union[Any]:
    """
    @return Java native `Serializable & Supplier` instance wrapping calls to this lambda.
    """
        ...
    def supplier(self, returnType: ValueType=None) -> Union[Callable[[], Union[O]]]:
    """
    @return native lambda that calls this one by passing `null` for all potential parameters.
    """
        ...
    def predicate(self) -> Union[Callable[[Union[I]], bool]]:
    """
    @return a lambda that returns boolean value for a provided argument; typical used as predicate for a conditional
            logic.
    """
        ...
    def bipredicate(self) -> Union[Callable[[Union[T1], Union[T2]], bool]]:
    """
    @return a lambda that returns boolean value for a provided arguments; typical used as predicate for a conditional
            logic.
    """
        ...
    def tripredicate(self) -> Union[Callable[[Union[T1], Union[T2], Union[T3]], bool]]:
    """
    @return a lambda that returns boolean value for a provided arguments; typical used as predicate for a conditional
            logic.
    """
        ...
    def quadpredicate(self) -> Union[Callable[[Union[T1], Union[T2], Union[T3], Union[T4]], bool]]:
    """
    @return a lambda that returns boolean value for a provided arguments; typical used as predicate for a conditional
            logic.
    """
        ...
    def consumer(self) -> Union[Callable[[Union[T]]]]:
    """
    @return a lambda that accepts provided argument.
    """
        ...
    def biconsumer(self) -> Union[Callable[[Union[T1], Union[T2]]]]:
    """
    @return a lambda that accepts provided arguments.
    """
        ...
    def triconsumer(self) -> Union[Callable[[Union[T1], Union[T2], Union[T3]]]]:
    """
    @return a lambda that accepts provided arguments.
    """
        ...
    def quadconsumer(self) -> Union[Callable[[Union[T1], Union[T2], Union[T3], Union[T4]]]]:
    """
    @return a lambda that accepts provided arguments.
    """
        ...
    def func(self, returnType: ValueType=None) -> Union[Callable[[Union[T]], Union[O]]]:
    """
    @return native lambda that calls this one by applying first argument and passing `null` for rest.
    """
        ...
    def bifunc(self, returnType: ValueType=None) -> Union[Callable[[Union[T1], Union[T2]], Union[O]]]:
    """
    @return native lambda that calls this one by applying first and second argument and passing `null` for rest.
    """
        ...
    def trifunc(self, returnType: ValueType=None) -> Union[Callable[[Union[T1], Union[T2], Union[T3]], Union[O]]]:
    """
    @return native lambda that calls this one by applying first, second and third argument and passing `null` for rest.
    """
        ...
    def quadfunc(self, returnType: ValueType=None) -> Union[Callable[[Union[T1], Union[T2], Union[T3], Union[T4]], Union[O]]]:
    """
    @return native lambda that calls this one by applying first, second, third and forth argument and passing `null`
            for rest.
    """
        ...
    def applyJs(self, actuals: Array[Any]=None) -> Union[Any]:
    """
    Directly invoke a lambda implemented in JavaScript.
    
    @param actuals
              array of actual parameters to apply. NOTE: Any appliedArgs must have been merged into the actuals
              array before this method is called.
    """
        ...
    def applyPython(self, args: Array[Any]=None) -> Union[Any]:
    """
    Directly invoke a lambda implemented in Python.
    
    @param args
              array of actual parameters to apply NOTE: Any appliedArgs must have been merged into the actuals
              array before this method is called.
    """
        ...
    def completeSignature(self) -> Union[FunctionType]:
    """
    Locate the complete signature for the lambda's implementation. If it has partially applied arguments, the
    signature returned will be the #baseSignature value, otherwise it will be the signature defined by the generic
    variable `F` (see #signature).
    
    @return full signature for this lambda's implementation
    """
        ...
    @classmethod
    def declaredSignature(cls) -> FunctionType:
    """
    @return signature defined by the generic variable `F` in this type
    """
        ...
    def implParamCount(self) -> Union[int]:
    """
    Attempt to determine the declared arity of the method by examining the implementation code. This doesn't always
    work because some languages have tricks to handle varargs which don't show up in the declaration, notably
    JavaScript.
    
    If the method takes a variable number of arguments, the count will not include any of the variable arguments;
    see #isVarArgs.
    """
        ...
    def implVarArgs(self) -> bool:
    """
    Attempt to determine if the method is declared to accept a variable number of arguments by examining the
    implementation code. This doesn't always work because some languages have tricks to handle varargs which don't
    show up in the declaration, notably JavaScript.
    """
        ...
    def toSrc(self, language: str=None) -> Union[str]:
    """
    Retrieve source code of the implementation.
    
    @param language
        Should be one of the language constants in {@link ImplLanguage}, such as {@link ImplLanguage#PYTHON}.
        If omitted, will output the language this `Lambda` was originally written in.
    """
        ...
    def toPySrc(self) -> Union[str]:
    """
    Retrieve source code of the implementation, transpiled to Python if the original implementation language is not
    Python.
    """
        ...
    def toJsSrc(self) -> Union[str]:
    """
    Retrieve source code of the implementation, transpiled to JavaScript if the original implementation language is
    not JavaScript.
    """
        ...
    def compile(self) -> Lambda[FunctionType]:
    """
    Pre-compile this lambda for efficient repeated invocation.
    
    Returns a compiled Lambda that has the same behavior but uses a pre-compiled callable instead of re-parsing
    source each time. If compilation is not supported for this lambda's language, returns the original lambda.
    
    Use this when a lambda will be invoked repeatedly to avoid parsing/evaluation overhead on each call.
    
    @return Compiled lambda with efficient apply/call implementation, or this lambda if compilation not supported
    """
        ...
    def compiledCallable(self) -> CallableProtocol:
    """
    Returns the pre-compiled callable. Implemented by subtypes for language-specific compilation.
    """
        ...
    F = TypeVar('F')

    class Java(Generic[F], Lambda.Compiled[F]):
        """
        Pre-compiled Lambda with efficient Java invocation.
        
        Implements {@link Lambda.Compiled#compiledCallable} to compile JavaScript,
        Java lambdas, or Java method references to an efficient callable.
        
        Created via {@link Lambda#compile}.
        
        @see Lambda.Compiled
        
        @remarks this represents a made instance of Lambda.Compiled.Java
        """
        
        appliedArgs: Optional[Map[str, Any]]=None
        """
        Partially applied arguments.
        """

        baseSignature: Optional[str]=None
        """
        The original function signature before arguments were partially applied.
        """

        language: Optional[str]
        """
        A "language" of this lambda. I.e. how #implementation should be interpreted. This must be one of the constant
        values from {@link Lambda.Language}.
        """

        implementation: Optional[str]
        """
        An implementation of this this lambda. Depends on #language.
        """

        environment: Optional[Map[str, Any]]=None
        """
        Extra settings to establish in the target execution environment before execution.
        """

        actionRequirement: Optional[str]=None
        """
        The minimal action requirement for this lambda to execute. This should generally be null, to make the lambda as
        widely useful as possible.
        """
        def __init__(self, appliedArgs: Optional[Map[str, Any]]=None, baseSignature: Optional[str]=None, language: Optional[str]=None, implementation: Optional[str]=None, environment: Optional[Map[str, Any]]=None, actionRequirement: Optional[str]=None) -> None: ...

        def toString(self) -> Union[str]:
        """
        Primary serialization is through JSON, but it's also possible to use string serialization. The format is:
        _actionRequirement_ `:` _implementation_. If there is no actionRequirement specified, the default requirement for
        the language is used.
        """
            ...
        def _call_(self, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Any]:
        """
        Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
        `args` and `kwargs` are of `ValueType` `any`.
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
        @overload
        def toNative(self, doNotCopy: bool=None) -> Union[Any]:
        """
        The closest native representation of the value.
        
        In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
        access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
        exposed, copying if necessary.
        
        @param doNotCopy return internal state without copying (unsafe access)
        """
            ...
        @overload
        def toNative(self, type: LambdaType=None, failIfNone: bool=None) -> Union[Any]:
        """
        Return the native instance that is directly callable in the current runtime, or null.
        If the language and runtime, if defined, of the Lambda `toNative` is called on match the runtime in which it is
        called, then the returned value is the native callable that will be executed in that runtime. Otherwise, the
        returned value is simply a wrapper around `call`, and the execution will be handled by the runtime of the Lambda.
        
        If the Lambda instance has any `appliedArgs` AND the runtime in which `toNative` is being executed can execute
        the lambda, then the native callable that is returned will contain logic to handle merging the `appliedArgs`
        with arguments supplied when the native callable is invoked.
        
        @param type the specific lambda desired, needed for strongly-typed languages
        @param failIfNone throw an error instead of returning null if conversion is not possible
        @return native lambda callable
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
        def fromJson(cls, json: any) -> Union[Lambda.Compiled.Java[F]]:
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
        def fromJsonString(cls, json: str) -> Union[Lambda.Compiled.Java[F]]:
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
        def fromXmlString(cls, xml: str) -> Union[Lambda.Compiled.Java[F]]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Lambda.Compiled.Java[F]]:
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
        def replaceType(self, old: Type, new: Type) -> Lambda.Compiled.Java[F]:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Compiled.Java[F]:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Compiled.Java[F]:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Compiled.Java[F]]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Compiled.Java[F]]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Lambda.Compiled.Java[F]:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Compiled.Java[F]:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Compiled.Java[F]:
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
        def validateObj(self) -> Lambda.Compiled.Java[F]:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Lambda.Compiled.Java[F]:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Lambda.Compiled.Java[F]:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Lambda.Compiled.Java[F]:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Lambda.Compiled.Java[F]:
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
        def withoutFieldAtPath(self, path: str) -> Lambda.Compiled.Java[F]:
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
        def withoutField(self, field: str) -> Lambda.Compiled.Java[F]:
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
        def withoutField(self, field: FieldType) -> Lambda.Compiled.Java[F]:
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
        def withoutFields(self, fields: Array[str]) -> Lambda.Compiled.Java[F]:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Lambda.Compiled.Java[F]:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Lambda.Compiled.Java[F]:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Lambda.Compiled.Java[F]:
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
        def defaultField(self, field: str) -> Lambda.Compiled.Java[F]:
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
        def defaultField(self, field: FieldType) -> Lambda.Compiled.Java[F]:
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
        def unsetField(self, field: str) -> Lambda.Compiled.Java[F]:
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
        def unsetField(self, field: FieldType) -> Lambda.Compiled.Java[F]:
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
        def removeField(self, field: str) -> Lambda.Compiled.Java[F]:
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
        def removeField(self, field: FieldType) -> Lambda.Compiled.Java[F]:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Lambda.Compiled.Java[F]:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Lambda.Compiled.Java[F]:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Lambda.Compiled.Java[F]:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Lambda.Compiled.Java[F]:
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
        def mergeJson(self, json: any) -> Lambda.Compiled.Java[F]:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Lambda.Compiled.Java[F]:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Lambda.Compiled.Java[F]:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Lambda.Compiled.Java[F]]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Lambda.Compiled.Java[F]]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Lambda.Compiled.Java[F]]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Lambda.Compiled.Java[F]]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Lambda.Compiled.Java[F]]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Lambda.Compiled.Java[F]]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Lambda.Compiled.Java[F]]]:
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
        def toBuilder(self) -> ObjBuilder[Lambda.Compiled.Java[F]]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Lambda.Compiled.Java[F]]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Lambda.Compiled.Java[F]:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Compiled.Java[F]:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Lambda.Compiled.Java[F]:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Lambda.Compiled.Java[F]:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Compiled.Java[F]:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Lambda.Compiled.Java[F]:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Lambda.Compiled.Java[F]:
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
        def afterMake(self) -> Lambda.Compiled.Java[F]:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Lambda.Compiled.Java[F]:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Lambda.Compiled.Java[F]]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Lambda.Compiled.Java[F]:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def apply(self, args: Array[Any]=None) -> Union[Any]:
        """
        Override apply to use the pre-compiled callable.
        """
            ...
        def call(self, *args: Array[Any]) -> Union[Any]:
        """
        Invoke the anonymous function with the specified arguments in the ordinary way.
        The arguments passed must match the signature of the underlying function.
        """
            ...
        def partiallyApply(self, args: Map[str, Any]=None) -> Lambda.Compiled.Java[F]:
        """
        @return a clone of this lambda with partially applied arguments.
        """
            ...
        def partiallyApplyBatch(self, args: Array[Map[str, Any]]) -> Array[Lambda.Compiled.Java[F]]:
        """
        @return an array of clones of this lambda with partially applied arguments (elements of the input array).
        """
            ...
        def partiallyCall(self, *args: Array[Any]) -> Lambda.Compiled.Java[F]:
        """
        @return a clone of this lambda with partially applied arguments. The arguments passed must match the signature of
                the underlying function.
        """
            ...
        def signature(self) -> Union[FunctionType]:
        """
        @return effective signature for this lambda. If it has partially applied arguments then this signature will not
                contain those.
        """
            ...
        def withSignature(self, signature: FunctionType=None) -> Lambda.Compiled.Java[F]:
        """
        @return a lambda with the same implementation and language, but with its signature (and function type binding)
                set. If `signature` is not provided, then it will be inferred from the lambda's source code if it is
                a JavaScript or Python lambda.
        """
            ...
        @classmethod
        def fromAction(cls, type: Type, action: str) -> Lambda.Compiled.Java[F]:
        """
        Create a lambda from the specified action method.
        
        @param type
                  type that implements the method
        @param action
                  name of the method
        """
            ...
        @classmethod
        def fromJavaMethod(cls, class_: str, method: str, functionType: str=None) -> Lambda.Compiled.Java[F]:
        """
        Create a lambda from the specified Java static method.
        
        @param class
                  Java class that implements the method
        @param method
                  name of the method
        @param functionType
                  the string serialized type of the function invoked by this lambda
        """
            ...
        @classmethod
        def fromJavaSrc(cls, javaCode: str) -> Lambda.Compiled.Java[F]:
        """
        Create a lambda from the specified Java source code.
        
        @param javaCode
                  Java code for a class with a single public static method.
        """
            ...
        @classmethod
        def fromJavaSerializableSupplier(cls, javaSerializableSupplier: Callable[[], Union[Any]]) -> Lambda.Compiled.Java[F]:
        """
        Create a lambda from the specified native Java lambda.
        
        @param javaSerializableSupplier
                  Java `Serializable & Supplier` functional instance instance.
        """
            ...
        @classmethod
        def fromJavaSerializableFunction(cls, javaSerializableFunction: Callable[[Union[Any]], Union[Any]]) -> Lambda.Compiled.Java[F]:
        """
        Create a lambda from the specified native Java lambda.
        
        @param javaSerializableFunction
                  Java `Serializable & Function` functional instance instance.
        """
            ...
        @classmethod
        def fromJavaSerializableBiFunction(cls, javaSerializableBiFunction: Callable[[Union[Any], Union[Any]], Union[Any]]) -> Lambda.Compiled.Java[F]:
        """
        Create a lambda from the specified native Java lambda.
        
        @param javaSerializableBiFunction
                  Java `Serializable & BiFunction` functional instance instance.
        """
            ...
        @classmethod
        def fromJavaSerializableRunnable(cls, javaSerializableRunnable: Callable[[]]) -> Lambda.Compiled.Java[F]:
        """
        Create a lambda from the specified native Java lambda.
        
        @param javaSerializableRunnable
                  Java `Serializable & Runnable` functional instance instance.
        """
            ...
        @classmethod
        def fromJsSrc(cls, functionCode: str) -> Lambda.Compiled.Java[F]:
        """
        Create a simple lambda from the specified JavaScript function definition. This can either be an anonymous
        function or a lambda. Note that because C3 Lambda may be executed in a different context, the function can't
        have references to global or scope variables.
        
        e.g.
        ```
        Lambda.fromJsSrc("x => 3 + x");
        ```
        @param functionCode
                  code that defines a JavaScript function
        
        @see #fromJsFunc
        """
            ...
        @classmethod
        def fromJsFunc(cls, func: Any) -> Lambda.Compiled.Java[F]:
        """
        Create a simple lambda from the specified JavaScript function. Note that because C3 Lambda needs to be fully
        serializable, the provided JS code can't have references to global or scope variables. Also, Function.bind will not
        work and `this` will not be preserved.
        
        e.g.this will not work:
        ```
        var hi = 'Hi!'
        Lambda.fromJsFunc(function() { return hi + ' back!' }).toJson()
        ```
        however this will:
        ```
        Lambda.fromJsFunc(function(hi) { return hi + ' back!' }).partiallyCall('Hi!').toJson()
        ```
        
        @param func
                  the native JavaScript function
        
        @see #fromJsSrc
        """
            ...
        @classmethod
        def fromPySrc(cls, functionCode: str, actionRequirement: str=None) -> Lambda.Compiled.Java[F]:
        """
        Create a simple lambda from the specified Python code.
        
        @param functionCode
                  A string representing a Python function.
                  e.g. `Lambda.fromPySrc('lambda x: x + 1')`)
        @param runtime
                  If specified, the @link{ImplLanguage.Runtime} in which the function must run.
                  If not specified, it will be `py` which means it should be executable in any python runtime.
        @returns
                  Lambda function implemented in python
        """
            ...
        @classmethod
        def fromPyFunc(cls, func: Any, actionRequirement: str=None) -> Lambda.Compiled.Java[F]:
        """
        Create a simple lambda from the specified Python function
        
        @param func
                  The native Python function.
                  e.g. `f = lambda x: x + 1; Lambda.fromPyFunc(f)`.
        @param actionRequirement
                  If specified, the @link{ImplLanguage.Runtime} in which the function must run.
                  If not specified, it will be `py` which means it should be executable in any python runtime.
        @returns
                  Lambda function implemented in python
        """
            ...
        @overload
        @classmethod
        def fromSrc(cls, signature: FunctionType, src: Content) -> Lambda.Compiled.Java[F]:
        """
        Creates a lambda from the source content. Content should have a content location and/or content type to determine
        the implementation language and optionally action requirement. E.g. file named `action.py-py4j.py` will be
        interpreted as a Python lambda with action requirement of `py-py4j`. Similarly, a content with media type of
        `application/javascript` will be interpreted as a JavaScript lambda. And finally all other content will be
        treated as serialized representation of Lambda.c3typ.
        
        @see #fromJsSrc
        @see #fromPySrc
        """
            ...
        @overload
        @classmethod
        def fromSrc(cls, signature: FunctionType, language: str, impl: str, actionRequirement: str=None) -> Lambda.Compiled.Java[F]:
        """
        Create a simple lambda from the specified function definition. This can either be an anonymous
        function or a lambda. Note that because C3 Lambda may be executed in a different context, the function can't
        have references to global or scope variables.
        
        e.g.
        ```
        Lambda.fromSrc("function(x: !?int): !int", Lambda.Language.JAVASCRIPT, "x => 3 + x");
        ```
        @param signature
                  C3 signature of new lambda
        @param language
                  language of the code for lambda
        @param impl
                  code that defines a logic of this lambda
        @param actionRequirement
                  If specified, the @link{ImplLanguage.Runtime} in which the implementation must run
        @see #fromJsFunc
        """
            ...
        @classmethod
        def fromString(cls, s: str) -> Union[Lambda.Compiled.Java[F]]:
        """
        Create a simple lambda from the specified string.
        
        This uses the HTML style with the language, a colon, and the implementation.
        For example: `"javascript:function(s) { ... }"` or `"action:Lambda.fromString"` or:
        ```
        java-code:
        import java.io.*;
        class C3 {
          public static void lambda() { ... }
        }
        ```
        
        Note that this validates only the structure of the string, it does not validate that the lambda code is valid.
        
        @param s
                  language and code for the lambda
        """
            ...
        @classmethod
        def convertFromString(cls, s: str, failIfInvalid: bool=None) -> Union[Lambda.Compiled.Java[F]]:
        """
        Create a simple lambda from the specified string, if in the correct format. Note that unlike #fromString,
        it does not throw an error by default, but instead returns null.
        
        @param s
                  language and code for the lambda
        @param failIfInvalid
                  if true, throw an error instead of returning null
        
        @see #fromString
        """
            ...
        def toHttpRequest(self, env: ExecutionEnvironment=None, auth: str=None) -> HttpRequest:
        """
        @return HttpRequest for REST invocation of this action.
        """
            ...
        def toJavaAnyFunction(self) -> Any:
        """
        @return a Java instance that can produce any of a variety of standard functional interface instances.
        """
            ...
        def toJavaSerializableRunnable(self) -> Union[Any]:
        """
        @return Java native `Serializable & Runnable` instance wrapping calls to this lambda.
        """
            ...
        def toJavaSerializableSupplier(self) -> Union[Any]:
        """
        @return Java native `Serializable & Supplier` instance wrapping calls to this lambda.
        """
            ...
        def supplier(self, returnType: ValueType=None) -> Union[Callable[[], Union[O]]]:
        """
        @return native lambda that calls this one by passing `null` for all potential parameters.
        """
            ...
        def predicate(self) -> Union[Callable[[Union[I]], bool]]:
        """
        @return a lambda that returns boolean value for a provided argument; typical used as predicate for a conditional
                logic.
        """
            ...
        def bipredicate(self) -> Union[Callable[[Union[T1], Union[T2]], bool]]:
        """
        @return a lambda that returns boolean value for a provided arguments; typical used as predicate for a conditional
                logic.
        """
            ...
        def tripredicate(self) -> Union[Callable[[Union[T1], Union[T2], Union[T3]], bool]]:
        """
        @return a lambda that returns boolean value for a provided arguments; typical used as predicate for a conditional
                logic.
        """
            ...
        def quadpredicate(self) -> Union[Callable[[Union[T1], Union[T2], Union[T3], Union[T4]], bool]]:
        """
        @return a lambda that returns boolean value for a provided arguments; typical used as predicate for a conditional
                logic.
        """
            ...
        def consumer(self) -> Union[Callable[[Union[T]]]]:
        """
        @return a lambda that accepts provided argument.
        """
            ...
        def biconsumer(self) -> Union[Callable[[Union[T1], Union[T2]]]]:
        """
        @return a lambda that accepts provided arguments.
        """
            ...
        def triconsumer(self) -> Union[Callable[[Union[T1], Union[T2], Union[T3]]]]:
        """
        @return a lambda that accepts provided arguments.
        """
            ...
        def quadconsumer(self) -> Union[Callable[[Union[T1], Union[T2], Union[T3], Union[T4]]]]:
        """
        @return a lambda that accepts provided arguments.
        """
            ...
        def func(self, returnType: ValueType=None) -> Union[Callable[[Union[T]], Union[O]]]:
        """
        @return native lambda that calls this one by applying first argument and passing `null` for rest.
        """
            ...
        def bifunc(self, returnType: ValueType=None) -> Union[Callable[[Union[T1], Union[T2]], Union[O]]]:
        """
        @return native lambda that calls this one by applying first and second argument and passing `null` for rest.
        """
            ...
        def trifunc(self, returnType: ValueType=None) -> Union[Callable[[Union[T1], Union[T2], Union[T3]], Union[O]]]:
        """
        @return native lambda that calls this one by applying first, second and third argument and passing `null` for rest.
        """
            ...
        def quadfunc(self, returnType: ValueType=None) -> Union[Callable[[Union[T1], Union[T2], Union[T3], Union[T4]], Union[O]]]:
        """
        @return native lambda that calls this one by applying first, second, third and forth argument and passing `null`
                for rest.
        """
            ...
        def applyJs(self, actuals: Array[Any]=None) -> Union[Any]:
        """
        Directly invoke a lambda implemented in JavaScript.
        
        @param actuals
                  array of actual parameters to apply. NOTE: Any appliedArgs must have been merged into the actuals
                  array before this method is called.
        """
            ...
        def applyPython(self, args: Array[Any]=None) -> Union[Any]:
        """
        Directly invoke a lambda implemented in Python.
        
        @param args
                  array of actual parameters to apply NOTE: Any appliedArgs must have been merged into the actuals
                  array before this method is called.
        """
            ...
        def completeSignature(self) -> Union[FunctionType]:
        """
        Locate the complete signature for the lambda's implementation. If it has partially applied arguments, the
        signature returned will be the #baseSignature value, otherwise it will be the signature defined by the generic
        variable `F` (see #signature).
        
        @return full signature for this lambda's implementation
        """
            ...
        @classmethod
        def declaredSignature(cls) -> FunctionType:
        """
        @return signature defined by the generic variable `F` in this type
        """
            ...
        def implParamCount(self) -> Union[int]:
        """
        Attempt to determine the declared arity of the method by examining the implementation code. This doesn't always
        work because some languages have tricks to handle varargs which don't show up in the declaration, notably
        JavaScript.
        
        If the method takes a variable number of arguments, the count will not include any of the variable arguments;
        see #isVarArgs.
        """
            ...
        def implVarArgs(self) -> bool:
        """
        Attempt to determine if the method is declared to accept a variable number of arguments by examining the
        implementation code. This doesn't always work because some languages have tricks to handle varargs which don't
        show up in the declaration, notably JavaScript.
        """
            ...
        def toSrc(self, language: str=None) -> Union[str]:
        """
        Retrieve source code of the implementation.
        
        @param language
            Should be one of the language constants in {@link ImplLanguage}, such as {@link ImplLanguage#PYTHON}.
            If omitted, will output the language this `Lambda` was originally written in.
        """
            ...
        def toPySrc(self) -> Union[str]:
        """
        Retrieve source code of the implementation, transpiled to Python if the original implementation language is not
        Python.
        """
            ...
        def toJsSrc(self) -> Union[str]:
        """
        Retrieve source code of the implementation, transpiled to JavaScript if the original implementation language is
        not JavaScript.
        """
            ...
        def compile(self) -> Lambda[FunctionType]:
        """
        Pre-compile this lambda for efficient repeated invocation.
        
        Returns a compiled Lambda that has the same behavior but uses a pre-compiled callable instead of re-parsing
        source each time. If compilation is not supported for this lambda's language, returns the original lambda.
        
        Use this when a lambda will be invoked repeatedly to avoid parsing/evaluation overhead on each call.
        
        @return Compiled lambda with efficient apply/call implementation, or this lambda if compilation not supported
        """
            ...
        def compiledCallable(self) -> CallableProtocol:
        """
        Compiles to a CallableProtocol wrapping the native AnyFunction.
        """
            ...

