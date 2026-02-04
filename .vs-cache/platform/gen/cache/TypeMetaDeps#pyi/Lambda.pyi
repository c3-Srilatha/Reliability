#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.LambdaType import LambdaType
from c3.platform.Include import Include
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Mutable import Mutable
from c3.platform.WithKey import WithKey
from c3.platform.CallableProtocol import CallableProtocol
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Type import Type
from c3.platform.Lambda.Compiled import Lambda.Compiled
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Content import Content
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Type import Type
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Engine.DeploySpec import Engine.DeploySpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapType import MapType
from c3.platform.Config import Config
from c3.platform.App.Node.ThreadPool import App.Node.ThreadPool
from c3.platform.FunctionType import FunctionType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.LibraryManager import LibraryManager
from c3.platform.Engine.Summary import Engine.Summary
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.App.Node.ThreadPool.Spec import App.Node.ThreadPool.Spec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ExecutionEnvironment import ExecutionEnvironment
from c3.platform.Lambda import Lambda
from c3.platform.WaitableSpec import WaitableSpec
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.Pair import Pair
from c3.platform.File import File
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ImplLanguage import ImplLanguage
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.WaitSpec import WaitSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Promise import Promise
from c3.platform.FieldType import FieldType
from c3.platform.HttpRequest import HttpRequest
from c3.platform.App.NodePool import App.NodePool
from c3.platform.Engine.StopSpec import Engine.StopSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Type import Type
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValueType import ValueType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Lambda import Lambda
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetType import SetType
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Lambda import Lambda
from c3.platform.Exclude import Exclude
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MethodType import MethodType
from c3.platform.Lambda.Compiled.Java import Lambda.Compiled.Java
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayType import ArrayType
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.App.Node import App.Node
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ImplLanguage.ResolvedRuntime import ImplLanguage.ResolvedRuntime
from c3.platform.ImplLanguage.Runtime import ImplLanguage.Runtime
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder

# Python definitions for the C3 type Lambda

F = TypeVar('F')

class Lambda(Generic[F], WithToString, CallableProtocol, Instance):
    """
    Obj that stores the instance of a lambda data value.  It is parameterized by the function type (signature).
    
    Lambdas may be "partially applied," in which case some of the parameters to the implementation function have defined
    values. This is useful for wrapping a more complex method for use in a simpler case. Note that the partially-applied
    argument values must be serializable, so cannot be objects that reference dynamic state in a particular execution
    environment.
    
    @remarks this represents a made instance of Lambda
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
    def fromJson(cls, json: any) -> Union[Lambda[F]]:
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
    def fromJsonString(cls, json: str) -> Union[Lambda[F]]:
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
    def fromXmlString(cls, xml: str) -> Union[Lambda[F]]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Lambda[F]]:
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
    def replaceType(self, old: Type, new: Type) -> Lambda[F]:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda[F]:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda[F]:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda[F]]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda[F]]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Lambda[F]:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda[F]:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda[F]:
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
    def validateObj(self) -> Lambda[F]:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Lambda[F]:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Lambda[F]:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Lambda[F]:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Lambda[F]:
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
    def withoutFieldAtPath(self, path: str) -> Lambda[F]:
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
    def withoutField(self, field: str) -> Lambda[F]:
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
    def withoutField(self, field: FieldType) -> Lambda[F]:
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
    def withoutFields(self, fields: Array[str]) -> Lambda[F]:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Lambda[F]:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Lambda[F]:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Lambda[F]:
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
    def defaultField(self, field: str) -> Lambda[F]:
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
    def defaultField(self, field: FieldType) -> Lambda[F]:
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
    def unsetField(self, field: str) -> Lambda[F]:
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
    def unsetField(self, field: FieldType) -> Lambda[F]:
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
    def removeField(self, field: str) -> Lambda[F]:
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
    def removeField(self, field: FieldType) -> Lambda[F]:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Lambda[F]:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Lambda[F]:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Lambda[F]:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Lambda[F]:
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
    def mergeJson(self, json: any) -> Lambda[F]:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Lambda[F]:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Lambda[F]:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Lambda[F]]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Lambda[F]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Lambda[F]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Lambda[F]]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Lambda[F]]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Lambda[F]]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Lambda[F]]]:
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
    def toBuilder(self) -> ObjBuilder[Lambda[F]]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Lambda[F]]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Lambda[F]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Lambda[F]:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Lambda[F]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Lambda[F]:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Lambda[F]:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Lambda[F]:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Lambda[F]:
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
    def afterMake(self) -> Lambda[F]:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Lambda[F]:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Lambda[F]]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Lambda[F]:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def apply(self, args: Array[Any]=None) -> Union[Any]:
    """
    Invoke the anonymous function with the specified arguments in an array.
    The elements of the array must match the signature of the underlying function.
    """
        ...
    def call(self, *args: Array[Any]) -> Union[Any]:
    """
    Invoke the anonymous function with the specified arguments in the ordinary way.
    The arguments passed must match the signature of the underlying function.
    """
        ...
    def partiallyApply(self, args: Map[str, Any]=None) -> Lambda:
    """
    @return a clone of this lambda with partially applied arguments.
    """
        ...
    def partiallyApplyBatch(self, args: Array[Map[str, Any]]) -> Array[Lambda]:
    """
    @return an array of clones of this lambda with partially applied arguments (elements of the input array).
    """
        ...
    def partiallyCall(self, *args: Array[Any]) -> Lambda:
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
    def withSignature(self, signature: FunctionType=None) -> Lambda:
    """
    @return a lambda with the same implementation and language, but with its signature (and function type binding)
            set. If `signature` is not provided, then it will be inferred from the lambda's source code if it is
            a JavaScript or Python lambda.
    """
        ...
    @classmethod
    def fromAction(cls, type: Type, action: str) -> Lambda:
    """
    Create a lambda from the specified action method.
    
    @param type
              type that implements the method
    @param action
              name of the method
    """
        ...
    @classmethod
    def fromJavaMethod(cls, class_: str, method: str, functionType: str=None) -> Lambda:
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
    def fromJavaSrc(cls, javaCode: str) -> Lambda:
    """
    Create a lambda from the specified Java source code.
    
    @param javaCode
              Java code for a class with a single public static method.
    """
        ...
    @classmethod
    def fromJavaSerializableSupplier(cls, javaSerializableSupplier: Callable[[], Union[Any]]) -> Lambda:
    """
    Create a lambda from the specified native Java lambda.
    
    @param javaSerializableSupplier
              Java `Serializable & Supplier` functional instance instance.
    """
        ...
    @classmethod
    def fromJavaSerializableFunction(cls, javaSerializableFunction: Callable[[Union[Any]], Union[Any]]) -> Lambda:
    """
    Create a lambda from the specified native Java lambda.
    
    @param javaSerializableFunction
              Java `Serializable & Function` functional instance instance.
    """
        ...
    @classmethod
    def fromJavaSerializableBiFunction(cls, javaSerializableBiFunction: Callable[[Union[Any], Union[Any]], Union[Any]]) -> Lambda:
    """
    Create a lambda from the specified native Java lambda.
    
    @param javaSerializableBiFunction
              Java `Serializable & BiFunction` functional instance instance.
    """
        ...
    @classmethod
    def fromJavaSerializableRunnable(cls, javaSerializableRunnable: Callable[[]]) -> Lambda:
    """
    Create a lambda from the specified native Java lambda.
    
    @param javaSerializableRunnable
              Java `Serializable & Runnable` functional instance instance.
    """
        ...
    @classmethod
    def fromJsSrc(cls, functionCode: str) -> Lambda:
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
    def fromJsFunc(cls, func: Any) -> Lambda:
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
    def fromPySrc(cls, functionCode: str, actionRequirement: str=None) -> Lambda:
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
    def fromPyFunc(cls, func: Any, actionRequirement: str=None) -> Lambda:
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
    def fromSrc(cls, signature: FunctionType, src: Content) -> Lambda:
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
    def fromSrc(cls, signature: FunctionType, language: str, impl: str, actionRequirement: str=None) -> Lambda:
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
    def fromString(cls, s: str) -> Union[Lambda]:
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
    def convertFromString(cls, s: str, failIfInvalid: bool=None) -> Union[Lambda]:
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
    
    class Language(ImplLanguage):
        """
        There are a few extra flavors of lambdas supported for special purposes in addition to the natural formats for each
        supported implementation language.
        
        @remarks this represents a made instance of Lambda.Language
        """
        
        name: Optional[str]
        """
        The unique and required name of this instance.
        """

        JAVA: Optional[str]=None
        """
        Java source.
        @see https://en.wikipedia.org/wiki/Java_(programming_language)
        """

        JAVASCRIPT: Optional[str]=None
        """
        JavaScript source (any ECMAScript version).
        @see https://en.wikipedia.org/wiki/JavaScript
        """

        PYTHON: Optional[str]=None
        """
        Python source.
        @see https://en.wikipedia.org/wiki/Python_(programming_language)
        """

        TYPESCRIPT: Optional[str]=None
        """
        TypeScript source.
        @see https://www.typescriptlang.org/docs/handbook/basic-types.html
        """

        TSX: Optional[str]=None
        """
        TypeScript/React source.
        @see https://www.typescriptlang.org/docs/handbook/jsx.html
        """

        ACTION: Optional[str]=None
        """
        Implementation is the action name as _type_ `#` _method_ ("Duration.fromString"). This can be invoked from any
        environment.
        """

        JAVA_METHOD: Optional[str]=None
        """
        Implementation is a Java method name as _class_ `#` _method_ ("java.lang.Math#abs"). This only works within the
        server environment.
        """

        JAVA_LAMBDA: Optional[str]=None
        """
        Implementation is a Java serialized lambda.
        
        @see https://docs.oracle.com/javase/8/docs/api/java/lang/invoke/SerializedLambda.html
        """
        def __init__(self, name: Optional[str]=None, JAVA: Optional[str]=None, JAVASCRIPT: Optional[str]=None, PYTHON: Optional[str]=None, TYPESCRIPT: Optional[str]=None, TSX: Optional[str]=None, ACTION: Optional[str]=None, JAVA_METHOD: Optional[str]=None, JAVA_LAMBDA: Optional[str]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Lambda.Language]:
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
        def fromJsonString(cls, json: str) -> Union[Lambda.Language]:
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
        def fromXmlString(cls, xml: str) -> Union[Lambda.Language]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Lambda.Language]:
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
        def replaceType(self, old: Type, new: Type) -> Lambda.Language:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Language:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Language:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Language]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Language]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Lambda.Language:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Language:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Language:
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
        def validateObj(self) -> Lambda.Language:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Lambda.Language:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Lambda.Language:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Lambda.Language:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Lambda.Language:
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
        def withoutFieldAtPath(self, path: str) -> Lambda.Language:
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
        def withoutField(self, field: str) -> Lambda.Language:
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
        def withoutField(self, field: FieldType) -> Lambda.Language:
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
        def withoutFields(self, fields: Array[str]) -> Lambda.Language:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Lambda.Language:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Lambda.Language:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Lambda.Language:
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
        def defaultField(self, field: str) -> Lambda.Language:
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
        def defaultField(self, field: FieldType) -> Lambda.Language:
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
        def unsetField(self, field: str) -> Lambda.Language:
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
        def unsetField(self, field: FieldType) -> Lambda.Language:
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
        def removeField(self, field: str) -> Lambda.Language:
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
        def removeField(self, field: FieldType) -> Lambda.Language:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Lambda.Language:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Lambda.Language:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Lambda.Language:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Lambda.Language:
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
        def mergeJson(self, json: any) -> Lambda.Language:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Lambda.Language:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Lambda.Language:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Lambda.Language]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Lambda.Language]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Lambda.Language]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Lambda.Language]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Lambda.Language]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Lambda.Language]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Lambda.Language]]:
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
        def toBuilder(self) -> ObjBuilder[Lambda.Language]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Lambda.Language]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Lambda.Language:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Language:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Lambda.Language:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Lambda.Language:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Language:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Lambda.Language:
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
        def make(cls, s: str) -> Union[Lambda.Language]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Lambda.Language:
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
        def afterMake(self) -> Lambda.Language:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Lambda.Language:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Lambda.Language]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Lambda.Language:
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
        def toString(self) -> Union[str]:
        """
        Build the canonical string representation of this instance. This must be implemented to provide serialization.
        
        If the object has no content, and fromString would properly reproduce it from a null value, toString may return
        null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
        
        @see #fromString
        """
            ...
        @classmethod
        def fromString(cls, s: str) -> Union[Lambda.Language]:
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
        def forName(cls, name: str, failIfMissing: bool=None) -> Union[Lambda.Language]:
        """
        Return the matching ImplLanguage for the specified string or null. This is case-insensitive and handles common
        abbreviations.
        """
            ...
        @classmethod
        def inst(cls) -> Lambda.Language:
        """
        @return the one and only instance to be used when member functions are called on this type.
        """
            ...
        @classmethod
        def cachedInst(cls) -> Union[Lambda.Language]:
        """
        @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
        """
            ...
        def supportsOverloads(self) -> bool:
        """
        @return `true` if underlying language supports overloaded functions
        """
            ...
        def versions(self) -> Array[str]:
        """
        Language versions supported for this language. Note that this is not necessarily a semantic version.
        """
            ...
        @classmethod
        def nameOf(cls, lang: str, failIfInvalid: bool=None) -> Union[str]:
        """
        Return the official name of matching ImplLanguage for the specified string or null. This is case-insensitive and
        handles common abbreviations.
        """
            ...
        def dslName(self) -> Union[str]:
        """
        @return name of this language as used in method declaration (if any)
        """
            ...
        @classmethod
        def dslNameOf(cls, lang: str) -> Union[str]:
        """
        @return name of the specified language as used in method declaration (if any)
        """
            ...
        def fileExt(self) -> str:
        """
        Return the canonical file extension for one of the language enum values.
        
        @return file extension (including dot)
        """
            ...
        @classmethod
        def fileExtOf(cls, lang: str) -> str:
        """
        Return the canonical file extension for the specified language enum value.
        
        @return file extension (including dot)
        """
            ...
        def mediaType(self) -> str:
        """
        Return the canonical content type extension for one of the language enum values.
        
        @return content type
        """
            ...
        def functions(self, source: str, failIfInvalid: bool=None) -> Union[Array[str]]:
        """
        Extract the function names from the script that could implement type methods. This means named top-level
        functions which could match up with type methods names.
        
        Normally a script that cannot be parsed will fail silently, returning an empty list, but passing true to
        failIfInvalid will cause an appropriate error to be thrown instead.
        
        @param source code to parse
        @param failIfInvalid throw an exception the script has a syntax error
        """
            ...
        def keywords(self) -> Union[Array[str]]:
        """
         Return the list of keywords for a given language. This is the list of words used by the implementation of a
         programming language. If the name of a field or method conflicts with one of these keywords, the field or method
         can be accessed by appending "_" to the end of its name. For example:
        
         ```py
            with open("foo.txt", "w") as f: # Note that "with" is a Python keyword
                f.write("bar")
            inst = c3.ArrayType.ofBool().emptyArray()
            # inst = inst.with(True) <- this would fail as "with" is a keyword in Python
            inst = inst.with_(True) # Works!
            c3.Py.keywords().contains("with") # returns True
        ```
        """
            ...
        @classmethod
        def forFileExt(cls, ext: str, failIfNone: bool=None) -> Union[Lambda.Language]:
        """
        Return the matching language for the specified extension.
        
        @param ext extension string to match
        @param failIfNone if true, throw error instead of returning null
        @return matched enum value
        """
            ...
        def isJava(self) -> bool:
        """
        @return `true` if this is Java implementation language
        """
            ...
        def isJs(self) -> bool:
        """
        @return `true` if this is JavaScript implementation language
        """
            ...
        def isPy(self) -> bool:
        """
        @return `true` if this is Python implementation language
        """
            ...
        @classmethod
        def java(cls) -> ImplLanguage:
        """
        @return implementation language for Java
        """
            ...
        @classmethod
        def js(cls) -> ImplLanguage:
        """
        @return implementation language for JavaScript
        """
            ...
        @classmethod
        def py(cls) -> ImplLanguage:
        """
        @return implementation language for Python
        """
            ...
        @classmethod
        def all(cls) -> Array[ImplLanguage]:
        """
        @return all implementation languages.
        """
            ...
        @classmethod
        def allNames(cls) -> Array[str]:
        """
        @return all implementation languages.
        """
            ...
        @classmethod
        def allFileExts(cls) -> Union[Array[str]]:
        """
        @return file extensions for all supported ImplLanguages.
        """
            ...
        @classmethod
        def allScripting(cls) -> Array[ImplLanguage]:
        """
        @return scripting language instances (implementation languages other than Java)
        
        @see #all
        """
            ...
        @classmethod
        def allScriptingNames(cls) -> Array[str]:
        """
        @return scripting language names (implementation languages other than Java)
        
        @see #allNames
        """
            ...
        @classmethod
        def hasJava(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} is for Java
        """
            ...
        @classmethod
        def hasJs(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} is for JavaScript
        """
            ...
        @classmethod
        def hasPy(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} is for Python
        """
            ...
        @classmethod
        def canRunActionRequirements(cls, find: str, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if the provided {@Link Action.Engine} can run any of provided {@Link Action.Requirement actionRequirements}. If the parameter actionRequirements is
        empty we assume it has only one {@Link Action.Requirement} "java".
        """
            ...
        @classmethod
        def hasLang(cls, find: str, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} use the specified language
        """
            ...
        @classmethod
        def isScriptLang(cls, lang: str) -> bool:
        """
        @return `true` if the provided language is a scripting language.
        
        @see #allScripting
        """
            ...
        @classmethod
        def hasScript(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} are a scripting language
        
        @see #allScripting
        """
            ...
        @classmethod
        def filterLang(cls, find: str, actionRequirements: Array[str]) -> Union[Array[str]]:
        """
        @return the requirements from the list that use the specified language
        """
            ...
        def installRuntime(self, runtime: ImplLanguage.ResolvedRuntime) -> None:
        """
        Installs the specified runtime, deleting potentially stale (cache-dirty) installations already present.
        """
            ...
        def resolveRuntime(self, runtime: ImplLanguage.Runtime, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Resolve the specified runtime, {@Link ImplLanguage.RuntimeLocation locations}, and {@Link ImplLanguage.Executor executors} combinations.
        
        @param runtime
                   The runtime to resolve.
        @param location
                   If provided, runtime will be resolved for the specific {@Link ImplLanguage.RuntimeLocation location}. If not
                   provided runtime is resolved against all {@Link ImplLanguage.RuntimeLocation locations}.
        @param executors
                   If provided, the runtime will be resolved only for {@Link ImplLanguage.Executor executors} specified in the parameter executors. If not
                   set runtime is resolved against all {@Link ImplLanguage.Executor executors}.
        @param doNotValidate
                   Runtime resolution typically involves validation to confirm that the resolved runtimes satisfy the
                   runtime. In some cases, it may be desirable or necessary to disable this validation. For
                   example, if one of the packages has an installation name that does not match its 'importable' name.
        @return A named tuple with fields `seededRuntimes` and `errors`. The 'seededRuntimes' field is a map with {@Link Action.Engine} as the key and its {@Link Action.Engine#installedRuntime resolved runtime}
        as the value. The 'errors' field is a map with {@Link Action.Engine} as the key and the error message as value if the runtime resolution failed for that {@Link Action.Engine}.
        """
            ...
        @overload
        def upsertRuntime(self, runtime: ImplLanguage.Runtime, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        The api to upsert a runtime. After a runtime is successfully upserted it can be used as a part of {@Link Action.Requirement}
        in method claims and {@Link Lambda lambdas}.
        
        @param runtime
                   The runtime to upsert. Once a runtime is successfully upserted it is available for use in {@Link Action.Requirement}
                   with any valid combination of {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors} that support
                   custom runtimes. The user can also upsert a runtime for specific locations and executors and then it can be used with only those
                   combination of locations and executors.
        @param location
                   This optional parameter allows user to upsert a runtime for a specific {@Link ImplLanguage.RuntimeLocation location}. If not provided a successfully upserted runtime can be used
                   with any location in an {@Link Action.Requirement}. For instance, calling upsert on a runtime "py-foo" with location set as "server" will allow users to use that runtime only with server.
                   Any method claim like "py-foo-client" will be invalid and throw metadata error.
        @param executor
                   This optional parameter allows user to upsert a runtime for some array of {@Link ImplLanguage.Executor executors}. If not provided a successfully upserted runtime can be used
                   with any {@Link ImplLanguage.Executor executor} that supports custom runtimes. For instance, calling upsert on a runtime "py-foo" with executor
                   set as ["ipython"] will allow users to use that runtime only with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}. A method claim like
                   "py-foo-server" will be invalid and throw metadata error as {@Link ImplLanguage.Executor#IPYTHON ipython} is an executor for client side python. Similarly,
                   the method claim "py-foo-py4j" will be invalid as "py-foo" can only be used with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}.
        @param doNotValidate
                   Upsertion of runtime typically involves validation to confirm that the installed runtimes satisfy the
                   runtime which was to be upserted. In some cases, it may be desirable or necessary to disable this validation. For
                   example, if one of the packages has an installation name that does not match its 'importable' name.
        
        @return A named tuple with fields 'seededRuntimes' and 'errors'. The 'seededRuntimes' field will provide detailed information
                about the the libraries that will be installed when using this runtime with various {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}. It is a map with {@Link Action.Engine} as key and its {@Link Action.Engine#installedRuntime} as value.
                The 'errors' field is a map with {@Link Action.Engine} as key and error message as value if the runtime upsertion failed for that particular {@Link Action.Engine}. To check if upsertion is completely successfully it is enough to check that 'errors' field is an empty map.
                If the upsertion was not successful or partially successful `errors` field will give detailed information about why upsertion failed for all/some
                requested {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}.
        """
            ...
        @overload
        def upsertRuntime(self, runtime: ImplLanguage.Runtime, executors: Array[str]=None, doNotValidate: bool=None) -> :
            ...
        def upsertRuntimes(self, runtimes: Array[ImplLanguage.Runtime], location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Upserts each runtime in {{runtimes}} via {@link upsertRuntime}. Ancestor runtimes will be upserted prior to their
        descendants. If resolution fails for a parent runtime, attempts to resolve any of its descendants will be skipped.
        
        All arguments and return value have the same semantics as {@link upsertRuntime}.
        """
            ...
        def upsertRuntimesAndDependents(self, changedRuntimes: Array[ImplLanguage.Runtime], location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Upserts each runtime in {{changedRuntimes}} via {@link upsertRuntimes}. Also upserts runtimes
        for any runtime which {@link ImplLanguage.Runtime#isDescendantOf is a descendant of} a runtime in
        {{changedRuntimes}}. Ancestor runtimes will be upserted prior to their descendants.
        
        All arguments and return value have the same semantic as {@link upsertRuntime}
        """
            ...
        def upsertPkgRuntimes(self, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Upserts all runtimes declared in the current {@link Pkg} via {@link upsertRuntimes}.
        
        All arguments and return value have the same semantic as {@link upsertRuntime}
        """
            ...
        def uninstallRuntime(self, runtimeName: str) -> None:
        """
        Uninstalls the specified runtime if installed.
        """
            ...
        def libraryManager(self, runtimeName: str=None) -> LibraryManager[LibraryManager.Config, ImplLanguage.ResolvedRuntime]:
        """
        Library manager for this language and provided runtime.
        """
            ...
        def executors(self) -> Union[Array[str]]:
        """
        All valid executors for this language
        """
            ...
        @classmethod
        def regexPattern(cls) -> str:
        """
        Regular expression that matches all supported languages
        """
            ...
    
    class Engine(Engine[Lambda.Engine.Deployment, Lambda.Engine.DeploySpec], Mutable):
        """
        @remarks this represents a made instance of Lambda.Engine
        """
        
        name: Optional[str]
        """
        The unique and required name of this instance.
        """

        id: Optional[str]
        """
        The unique and required id of this instance.
        """

        _deploymentCache: Optional[Any]=None
        """
        Holds {@link Engine.Deployment} object for current instance of {@link Engine}.
        
        For internal use only!
        
        This object may differ from what is stored in the config framework (until it's updated by {@link Engine.Controller}).
        Value in config framework may be missing if the engine is been {@link #terminate terminated}.
        """

        _onStartError: Optional[str]=None
        """
        Errors that are captured during engine start
        """

        context: Optional[MapBuilder[str, Any]]=None
        """
        Current context of this engine
        """
        def __init__(self, name: Optional[str]=None, id: Optional[str]=None, _deploymentCache: Optional[Any]=None, _onStartError: Optional[str]=None, context: Optional[MapBuilder[str, Any]]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Lambda.Engine]:
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
        def fromJsonString(cls, json: str) -> Union[Lambda.Engine]:
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
        def fromXmlString(cls, xml: str) -> Union[Lambda.Engine]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Lambda.Engine]:
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
        def replaceType(self, old: Type, new: Type) -> Lambda.Engine:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Engine:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Engine:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Engine]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Engine]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Lambda.Engine:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Engine:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Engine:
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
        def validateObj(self) -> Lambda.Engine:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Lambda.Engine:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Lambda.Engine:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Lambda.Engine:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Lambda.Engine:
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
        def withoutFieldAtPath(self, path: str) -> Lambda.Engine:
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
        def withoutField(self, field: str) -> Lambda.Engine:
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
        def withoutField(self, field: FieldType) -> Lambda.Engine:
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
        def withoutFields(self, fields: Array[str]) -> Lambda.Engine:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Lambda.Engine:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Lambda.Engine:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Lambda.Engine:
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
        def defaultField(self, field: str) -> Lambda.Engine:
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
        def defaultField(self, field: FieldType) -> Lambda.Engine:
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
        def unsetField(self, field: str) -> Lambda.Engine:
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
        def unsetField(self, field: FieldType) -> Lambda.Engine:
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
        def removeField(self, field: str) -> Lambda.Engine:
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
        def removeField(self, field: FieldType) -> Lambda.Engine:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Lambda.Engine:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Lambda.Engine:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Lambda.Engine:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Lambda.Engine:
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
        def mergeJson(self, json: any) -> Lambda.Engine:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Lambda.Engine:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Lambda.Engine:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Lambda.Engine]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Lambda.Engine]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Lambda.Engine]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Lambda.Engine]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Lambda.Engine]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Lambda.Engine]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Lambda.Engine]]:
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
        def toBuilder(self) -> ObjBuilder[Lambda.Engine]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Lambda.Engine]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Lambda.Engine:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Engine:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Lambda.Engine:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Lambda.Engine:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Engine:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Lambda.Engine:
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
        def make(cls, s: str) -> Union[Lambda.Engine]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @overload
        @classmethod
        def make(cls) -> Lambda.Engine:
        """
        Construct an instance with initial state.
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Lambda.Engine:
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
        def afterMake(self) -> Lambda.Engine:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Lambda.Engine:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Lambda.Engine]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Lambda.Engine:
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
        def toString(self) -> Union[str]:
        """
        Build the canonical string representation of this instance. This must be implemented to provide serialization.
        
        If the object has no content, and fromString would properly reproduce it from a null value, toString may return
        null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
        
        @see #fromString
        """
            ...
        @classmethod
        def fromString(cls, s: str) -> Union[Lambda.Engine]:
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
        def forName(cls, name: str, failIfMissing: bool=None) -> Union[Lambda.Engine]:
        """
        Get the single instance of this Named Type by name.
        @param name
                The unique name of the instance to retrieve.
        @param failIfMissing
                If `true`, an error will be thrown if the instance does not exist. If `false` (default), null will be
                returned.
        @return The single instance of this Named Type by name. Note that if this Type is also Cached then it will
                retrieve instance from cache.
        """
            ...
        @classmethod
        def forId(cls, id: str, failIfMissing: bool=None) -> Union[Lambda.Engine]:
        """
        @return single instance of this Identified type by id.
        """
            ...
        @classmethod
        def targetNodeFunc(cls, methodType: MethodType) -> Union[Callable[[Union[Map[str, Any]]], str]]:
        """
        @return lambda to calculate target {@link Server server node} for {@link Action action} called on this
        {@link Engine}.
        
        Used internally for dispatching.
        @see #targetNode
        """
            ...
        @classmethod
        def targetThreadPoolFunc(cls, methodType: MethodType) -> Union[Callable[[Union[Map[str, Any]]], str]]:
        """
        @return lambda to calculate target {@link App.ThreadPool thread pool} for {@link Action action} called on this
        {@link Engine}.
        
        Used internally for dispatching.
        @see #targetThreadPool
        """
            ...
        @classmethod
        def deploy(cls, spec: Lambda.Engine.DeploySpec) -> Lambda.Engine:
        """
        Deploys new {@link Engine engine} based on spec.
        
        If current node cannot run actions for the {@link Engine engine}, such actions will be routed to
        {@link #targetNodes} for execution.
        
        You can use advanced options to control spinning up of {@link Engine engine} on {@link App.Node nodes}:
        - Use {@link Engine.DeploySpec#autoStart} to control whether {@link Engine engine} should be started
          automatically on all {@link App.Node nodes} that match filter (See {@link Engine.DeploySpec#nodeRole nodeRole},
          {@link Engine.DeploySpec#altNodeRoles}, {@link Engine.DeploySpec#nodePools}).
        - Use {@link Engine.DeploySpec#failActionIfEngineNotReady} to control behavior of {@link Action actions} routed to
          {@link #isHealthy unhealthy} {@link Engine engine}.
        - Use {@link Engine.DeploySpec#initializingNodeAvoidanceDuration} to avoid routing of {@link Action actions} to newly added
          {@link App.Node nodes}. This helps to avoid routing of {@link Action actions} to {@link Engine engines} that
          have not yet finished initialization.
        
        @see activate
        @see deactivate
        @see Engine.Controller
        """
            ...
        def activate(self) -> None:
        """
        Activate deployment of this engine
        
        @see Engine.DeploySpec#inactive
        """
            ...
        def deactivate(self) -> None:
        """
        Deactivate deployment of this engine
        
        @see Engine.DeploySpec#inactive
        """
            ...
        def state(self) -> Union[str]:
        """
        Current state of this engine.
        """
            ...
        @classmethod
        def threadPoolsSummary(cls, engineTypeName: str, id: str) -> Union[Engine.Summary]:
            ...
        def summaryHelper(self) -> Array[Engine.Summary]:
        """
        Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
        """
            ...
        def summary(self) -> Data:
        """
        Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
        """
            ...
        def summarizeInstance(self) -> Engine.Summary:
        """
        Return summary information about current state of this {@link Engine} deployment on current {@link #targetNodes node}.
        """
            ...
        def summarizeThreads(self, node: str) -> Data:
        """
        Return {@link App.Node.Thread.Info} for each {@link App.Node.Thread thread} that are running on given
        {@link App.Node node} and belong to this {@link Engine engine} deployment.
        """
            ...
        def errors(self) -> Union[Array[str]]:
        """
        @return list of errors that this {@link Engine} deployment has.
        """
            ...
        def isRunning(self) -> bool:
        """
        @return true if the {@link Engine} instance is started.
        """
            ...
        @overload
        def isHealthy(self) -> bool:
        """
        @return true if the {@link Engine} instance is ready to serve requests.
        """
            ...
        @overload
        @classmethod
        def isHealthy(cls, engineType: str, name: str) -> bool:
        """
        @return true if the {@link Engine} instance specified by name is ready to serve requests.
        """
            ...
        def isStopped(self) -> bool:
        """
        @return true if the {@link Engine} instance is stopped.
        """
            ...
        def deployment(self) -> Lambda.Engine.Deployment:
        """
        Returns {@link Engine.Deployment} configuration for current {@link Engine}.
        
        If {@link Engine.Deployment} was removed from the config framework will return configuration with which the
        {@link Engine} was deployed.
        """
            ...
        def configuredDeployment(self) -> Lambda.Engine.Deployment:
        """
        Returns {@link Engine.Deployment} configuration for current {@link Engine} based on config value.
        
        May be `null` if {@link Engine} is stopping. Use {@link #deployment} instead.
        """
            ...
        @classmethod
        def deploymentType(cls) -> Type[[Lambda.Engine.Deployment]]:
        """
        @return deployment type for this engine
        """
            ...
        @classmethod
        def deploySpecType(cls) -> Type[[Lambda.Engine.DeploySpec]]:
        """
        @return deployment spec for this engine
        """
            ...
        def restart(self) -> Lambda.Engine:
        """
        Restarts this engine
        """
            ...
        def start(self, waitForReady: bool=None, spec: WaitableSpec=None) -> Union[Lambda.Engine]:
        """
        Starts {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
        
        Automatically called first time any action is called on this {@link Engine} instance or by
        {@link Engine.Controller} if {@link Engine.Deployment#autoStart} is `true`.
        
        Call to method idempotent and will return immediately if engine is {@link Engine.State.RUNNING}.
        
        If called from many threads simultaneously, calls will be blocked until some thread does start {@link Engine}.
        
        If start makes calls to other engines then expectation is that potential calls back from that engine into this one
        will succeed.
        
        @param waitForReady If unset or `false` will return `null` immediately, without waiting for engine to be fully
                  started or ready.
        @param spec
                  Wait specification that will be used in case waitForReady is set to `true`.
        @return `null` if not waiting for ready and ready instance of the {@link Engine} otherwise.
        """
            ...
        def doStart(self) -> Lambda.Engine:
            ...
        def stop(self, spec: Engine.StopSpec=None) -> None:
        """
        Stops {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
        
        Automatically called as part of C3 {@link App.Node} shutdown or by {@link Engine.Controller} if
        {@link Engine.deployment deployment} {@link #terminate terminated} or {@link #deactivate deactivated}.
        
        This is where preparation for shutdown should happen and this is when this Engine should stop initiating any new
        root actions to other Engines. E.g. all monitoring threads started by this Engine should be stopped here.
        
        Note that #stop will be called before #shutdown and expectation is that even after stop other methods of the engine
        still continue to work. E.g. if Db.Engine is stopped it should still continue to process requests (because
        another engine using Db.Engine may still be running).
        
        If stop fails, the graceful shutdown on C3 {@link App.Node} will be aborted.
        """
            ...
        def shutdown(self) -> None:
        """
        Called as part of C3 App Node shutdown. Should free up all allocated resources. This function will not wait to
        drain the queues and will interrupt currently running actions.
        """
            ...
        @classmethod
        def stopEngineOnNode(cls, engineName: str, spec: Engine.StopSpec=None) -> bool:
            ...
        def afterTerminate(self, spec: Engine.StopSpec=None) -> None:
        """
        Optional callback that will be invoked after {@link #terminate}. Allows to do any additional cleanup that is
        required for the engine.
        
        @param spec - spec that was passed to {@link #deploy}
        @return spec that will be used for {@link #deploy}
        """
            ...
        def terminate(self, spec: Engine.StopSpec=None) -> None:
        """
        Terminates the engine. This will remove the {@link Engine.Deployment} and stop all running instances of the
        {@link Engine}.
        
        @see #stop
        """
            ...
        def update(self) -> None:
        """
        Update {@link Engine} instance to match {@link #deployment}.
        
        Will take no effect if {@link #deployment} stays the same. Usually be called from {@link Engine.Controller}.
        
        @see Engine.Controller
        """
            ...
        def call(self, action: Lambda[Callable[[Lambda.Engine], Union[T]]]) -> Union[T]:
        """
        call `action` on a specific engine
        """
            ...
        def onStart(self) -> Lambda.Engine:
        """
        Optional callback that will be invoked every time engine is started on an {@link App.Node}.
        This callback is called outside of engine's dedicated ThreadPool, once per {@link App.Node}.
        
        @return engine with initialized field, or unmodified object.
        
        @see #start
        @see #onEngineThreadStart
        """
            ...
        def onStop(self) -> None:
        """
        Optional callback that will be invoked every time engine is stopped on an {@link App.Node}.
        
        Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
        {@link #deployment} may be already removed from the config framework
        
        @see #stop
        @see #terminate
        @see #onEngineThreadStop
        """
            ...
        def onEngineThreadStart(self) -> None:
        """
        Optional callback that will be invoked from any new thread this Engine is used from.
        
        Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
        
        @see #start
        @see #onStart
        """
            ...
        def onEngineThreadStop(self) -> None:
        """
        Optional callback that will be invoked from thread in which this engine was used when thread terminates.
        
        Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
        
        Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
        {@link #deployment} may be already removed from the config framework
        
        @see #stop
        @see #terminate
        @see #onStop
        """
            ...
        def onUpdate(self, oldDeployment: Lambda.Engine.Deployment) -> None:
        """
        Optional callback that will be invoked from {@link #update} if config changed.
        
        Called once per {@link App.Node}.
        
        @see #update
        """
            ...
        def canRunOnNode(self, nodeId: str) -> bool:
        """
        Returns `true` if engine can be started on provided `nodeId`.
        
        @see #targetNodes.
        """
            ...
        @classmethod
        def beforeDeploy(cls, spec: Lambda.Engine.DeploySpec) -> Lambda.Engine.DeploySpec:
        """
        Optional callback that will be invoked at the beginning of {@link #deploy}. Allows to modify spec before it's used
        for deployment.
        
        @param spec - spec that was passed to {@link #deploy}
        @return spec that will be used for {@link #deploy}
        """
            ...
        @classmethod
        def specToConfigs(cls, spec: Lambda.Engine.DeploySpec) -> Array[Config]:
        """
        If {@link Lambda.Engine.Deployment#exec exec} or {@link Lambda.Engine.Deployment#onThreadStart onThreadStart}
        have an {@link Lambda#actionRequirement action requirement} for Python, a
        {@link App.Node.ThreadPool.Config.Py.Simple simple Python config} will be made to persist those Lambdas' runtimes.
        
        NOTE: The above behavior will not occur if a non {@link App.Node.ThreadPool.Config.Py.Simple simple Python config}
        is already configured on the spec.
        """
            ...
        def targetNode(self) -> Union[App.Node]:
        """
        Internal method that is used to identify target node for calling this {@link Engine}.
        
        THis implementation will try to use current node if it's in list of {@link targetNodes} or will use
        {@link App#availableNode some available} {@link App.Node} from {@link #targetNodes}.
        
        Sub-types can override this logic if customization is needed.
        Method return `null` if no dispatching is needed.
        """
            ...
        def targetNodes(self, excludeMe: bool=None, alwaysConstruct: bool=None) -> Union[Array[App.Node]]:
        """
        Internal method that is used to query all target node for this Engine; effectively all nodes in #targetNodePools.
        
        @param excludeMe
                  If set to `true` list will not include current app node where this action is called from.
        @param alwaysConstruct
                  If set to `true` method returns all {@link App.Node nodes} where this {@link Engine} can be executed
                  even if it can be executed on all {@link App.Node nodes} within the {@link App}.
        @return list of {@link App.Node nodes} in which this {@link Engine} can run. If `alwaysConstruct=false` and engine
                can be executed on all {@link App.Node nodes} within the {@link App}.
        """
            ...
        def targetNodePools(self) -> Union[Array[App.NodePool]]:
        """
        Internal method that is used to identify target node-pools for this Engine; by default it'll use
        Engine.Deployment#nodeRole or Engine.Deployment#nodePools but sub-types can override this logic
        
        Method returns null or empty array if {@link Engine} can run on any {@link App.Node}.
        """
            ...
        def targetThreadPool(self) -> Union[App.Node.ThreadPool]:
        """
        Returns {@link App.Node.ThreadPool} responsible for running actions for this {@link Engine},
        `null` if {@link Engine.Deployment#dedicatedThreadPool} is `false`.
        
        @see Engine.Deployment#dedicatedThreadPool
        """
            ...
        @classmethod
        def list(cls) -> Union[Array[Lambda.Engine]]:
        """
        List {@link Engine engines} {@lik #deploy deployed} in an {@link App}.
        
        @see: #deploy
        @see: #terminate
        """
            ...
        def appId(self) -> str:
        """
        Returns {@link AppId id} of an {@link App} in which this {@link Engine.Deployment} is running.
        """
            ...
        def waitForDeployment(self, waitSpec: WaitSpec=None) -> bool:
        """
        Waits for the deployment to become ready across all nodes. Uses {@link #isReadyOnAllNodes} to make the check.
        
        This wait will complete only if there at least one node assigned to the engine.
        """
            ...
        def isReadyOnAllNodes(self) -> bool:
        """
        Returns true if all running nodes for the engine are healthy.
        
        If no nodes assigned to the engine returns `false`.
        """
            ...
        def validateOnStart(self) -> None:
        """
        Validates that all resources required by the engine are available.
        If the node that runs the engine does not have the required resources, eg: GPUs specified in the HardwareProfile
        of NodePool, the engine will not start and the error will be added to the engine's error list and are available
        via {@link #summary}.
        """
            ...
        @overload
        def setField(self, field: str, value: Any, doNotConvert: bool=None) -> Lambda.Engine:
        """
        Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
        The value must be of the correct type if doNotConvert flag is true.
        
        @param name
                  of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, attempt to convert the value to match the field's type
        @return this Obj
        """
            ...
        @overload
        def setField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Lambda.Engine:
        """
        Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
        The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, attempt to convert the value to match the field's type
        @return this Obj
        """
            ...
        def onChange(self, changed: Array[str]) -> None:
        """
        Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
        field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
        properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
        collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
        key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
        collection field. This has the same appearance as if the collection field were assigned from a previously
        unassigned value.
        
        Example:
        ```type
        type A mixes MutableObj {
          onChange: ~
          b: [string]
          c: map<string, int>
          d: D
        }
        type D mixes MutableObj {
          onChange: ~
          e: string
        }
        ```
        ```js
        var a = A.make({b: ['hello', 'goodbye'], d: {}});
        a.b[1] = 'World'; // 1
        a.c['hello'] = 'world'; // 2
        a.d.e = 'hello' // 3
        a.b.pop(); // 4
        ```
        `A.onChange` should be called four times:
          1. when the field `b` changed - the FieldPath will be "b[1]".
          2. when the field `c` changed - the FieldPath will be "c.hello".
          3. when `d` changed - the FieldPath will be "d.e".
          4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
        
        `D.onChange` should be called once - the FieldPath will be `e`.
        
        Note that if multiple elements of a child collection are changed, you will get multiple field paths.
        
        @param changed paths to fields that changed
        
        @see #onEdit
        """
            ...
        def onEdit(self, edits: Obj) -> None:
        """
        Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
        contains more information about the values which changed, including their prior values. This allows a full
        difference to be calculated if desired. Note that maintaining this state is much more costly than simple
        notification via #onChange and should only be used if truly required.
        
        @param edits a list of what changed and the prior values
        
        @see #onChange
        """
            ...
        def withoutChangeEvent(self, action: Callable[[Union[Mutable]]]) -> None:
        """
        Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
        
        @param action the lambda to invoke that makes changes without notification
        """
            ...
        def exec(self, *args: Array[Any]) -> Union[Any]:
        """
        Executes core logic of this engine
        """
            ...
        def doExec(self, args: Array[Any]=None) -> Union[Any]:
        """
        Implementation of {@link #exec}.
        """
            ...
        def set(self, name: str, value: Any=None) -> Union[T]:
        """
        Sets context variable on this engine
        """
            ...
        def get(self, name: str) -> Union[T]:
        """
        Gets context variable on this engine
        """
            ...
        
        class Deployment(Lambda.Engine.DeployBase, Engine.Deployment[Lambda.Engine]):
            """
            @remarks this represents a made instance of Lambda.Engine.Deployment
            """
            
            name: Optional[str]
            """
            Name of the Engine
            """

            nodeRole: Optional[str]=None
            """
            This {@link Engine} will run on all {@link App.Node app-nodes} in a {@link App.NodePool node-pool} with this role.
            e.g. for {@link Engine Engines} that provide low latency ML Model serving this value can be set to `service`.
            However as a fallback if there are no node-pools with `service` role additionally #altNodeRoles can be set as e.g.
            `[ task, leader ]` to ensure that service can be provided with any C3 App deployment
            
            @see altNodeRoles
            @see nodePools
            """

            altNodeRoles: Optional[Array[str]]=None
            """
            Alternative server role(s) where this {@link Engine} can run. Only relevant if App has no active node-pool with
            #nodeRole. Order in this array is significant and only the first role with an active node pool will be considered.
            
            @see nodeRole
            """

            nodePools: Optional[Array[str]]=None
            """
            All app node-pools that run this {@link Engine}. Note that only one of #nodeRole or #nodePools should be set; but
            neither are required in which case Engine can run any node.
            
            @see nodeRole
            """

            dedicatedThreadPool: Optional[bool]=None
            """
            If set to `true` then this {@link Engine} should be deployed to dedicated {@App.Node.ThreadPool}.
            Otherwise engine actions would be executed in regular threads.
            
            @see App.Node.ThreadPool
            @see Engine#onEngineThreadStart
            @see Engine#onEngineThreadStop
            @see Engine#targetThreadPool
            """

            autoStart: Optional[bool]=None
            """
            If set to `true` then this {@link Engine} will auto start on every node of every target node-pool.
            """

            inactive: Optional[bool]=None
            """
            If `true` then the {@link Engine} is inactive and can not be started.
            
            @see Engine#activate
            @see Engine#deactivate
            """

            failActionIfEngineNotReady: Optional[bool]=None
            """
            If `true` action dispatched to {@link Engine#isHealthy unhealthy} instance of the {@link Engine} will fail
            with an error.
            
            This is useful in cases where the user wants to fail quickly and retry the action rather than waiting for the {@link Engine} to become healthy.
            
            @see Engine#state
            @see Engine#isHealthy
            @see Engine.State#UNHEALTHY
            """

            initializingNodeAvoidanceDuration: Optional[str]=None
            """
            Maximum time to wait for an {@link Engine} to initialize after it has been started.
            
            For example if {@link Engine} loading model for 5 minutes, it's recommended to set this value to 5 minutes to
            avoid dispatching to {@link App.Node} that started less than 5 minutes ago.
            """

            exec: Optional[Lambda[FunctionType]]=None
            """
            Lambda implementing core logic of a Lambda.Engine
            """

            onStart: Optional[Lambda[FunctionType]]=None
            """
            Callback on Lambda.Engine start; will be called on each node where engine runs; this code can use `engine.set` to
            initialize context in the parent app node and later use that context in exec via `engine.get`
            
            @see Lambda.Engine#set
            @see Lambda.Engine#get
            """

            onStop: Optional[Lambda[FunctionType]]=None
            """
            Callback on Lambda.Engine stop; will be called on each node where engine runs
            """

            onUpdate: Optional[Lambda[FunctionType]]=None
            """
            Callback on Lambda.Engine deployment update; will be called on each node where engine runs
            """

            onThreadStart: Optional[Lambda[FunctionType]]=None
            """
            Callback when dedicated thread of this Lambda.Engine start; this code can use `C3.thread().set` to initialize
            thread local context and later retrieve it from `exec` using `C3.thread().get`
            
            @see Engine.DeployBase#threadPool
            @see App.Node.Thread#set
            @see App.Node.Thread#get
            """

            onThreadStop: Optional[Lambda[FunctionType]]=None
            """
            Callback when dedicated thread of this Lambda.Engine is stopped.
            """

            configOverride: Optional[str]=None

            secretOverride: Optional[str]=None

            issues: Optional[Array[str]]=None
            """
            Captures any issues that occurred while deserializing from filesystem
            """
            def __init__(self, name: Optional[str]=None, nodeRole: Optional[str]=None, altNodeRoles: Optional[Array[str]]=None, nodePools: Optional[Array[str]]=None, dedicatedThreadPool: Optional[bool]=None, autoStart: Optional[bool]=None, inactive: Optional[bool]=None, failActionIfEngineNotReady: Optional[bool]=None, initializingNodeAvoidanceDuration: Optional[str]=None, exec: Optional[Lambda[FunctionType]]=None, onStart: Optional[Lambda[FunctionType]]=None, onStop: Optional[Lambda[FunctionType]]=None, onUpdate: Optional[Lambda[FunctionType]]=None, onThreadStart: Optional[Lambda[FunctionType]]=None, onThreadStop: Optional[Lambda[FunctionType]]=None, configOverride: Optional[str]=None, secretOverride: Optional[str]=None, issues: Optional[Array[str]]=None) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Lambda.Engine.Deployment]:
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
            def fromJsonString(cls, json: str) -> Union[Lambda.Engine.Deployment]:
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
            def fromXmlString(cls, xml: str) -> Union[Lambda.Engine.Deployment]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Lambda.Engine.Deployment]:
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
            def replaceType(self, old: Type, new: Type) -> Lambda.Engine.Deployment:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Engine.Deployment:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Engine.Deployment:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Engine.Deployment]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Engine.Deployment]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Lambda.Engine.Deployment:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Engine.Deployment:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Engine.Deployment:
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
            def validateObj(self) -> Lambda.Engine.Deployment:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Lambda.Engine.Deployment:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Lambda.Engine.Deployment:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Lambda.Engine.Deployment:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Lambda.Engine.Deployment:
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
            def withoutFieldAtPath(self, path: str) -> Lambda.Engine.Deployment:
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
            def withoutField(self, field: str) -> Lambda.Engine.Deployment:
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
            def withoutField(self, field: FieldType) -> Lambda.Engine.Deployment:
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
            def withoutFields(self, fields: Array[str]) -> Lambda.Engine.Deployment:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Lambda.Engine.Deployment:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Lambda.Engine.Deployment:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Lambda.Engine.Deployment:
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
            def defaultField(self, field: str) -> Lambda.Engine.Deployment:
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
            def defaultField(self, field: FieldType) -> Lambda.Engine.Deployment:
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
            def unsetField(self, field: str) -> Lambda.Engine.Deployment:
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
            def unsetField(self, field: FieldType) -> Lambda.Engine.Deployment:
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
            def removeField(self, field: str) -> Lambda.Engine.Deployment:
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
            def removeField(self, field: FieldType) -> Lambda.Engine.Deployment:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Lambda.Engine.Deployment:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Lambda.Engine.Deployment:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Lambda.Engine.Deployment:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Lambda.Engine.Deployment:
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
            def mergeJson(self, json: any) -> Lambda.Engine.Deployment:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Lambda.Engine.Deployment:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Lambda.Engine.Deployment:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Lambda.Engine.Deployment]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Lambda.Engine.Deployment]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Lambda.Engine.Deployment]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Lambda.Engine.Deployment]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Lambda.Engine.Deployment]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Lambda.Engine.Deployment]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Lambda.Engine.Deployment]]:
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
            def toBuilder(self) -> ObjBuilder[Lambda.Engine.Deployment]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Lambda.Engine.Deployment]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Lambda.Engine.Deployment:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Engine.Deployment:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Lambda.Engine.Deployment:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Lambda.Engine.Deployment:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Engine.Deployment:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Lambda.Engine.Deployment:
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
            def make(cls, s: str) -> Union[Lambda.Engine.Deployment]:
            """
            Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
            when the argument is a known string.
            
            @see #fromString
            """
                ...
            @classmethod
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Lambda.Engine.Deployment:
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
            def afterMake(self) -> Lambda.Engine.Deployment:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Lambda.Engine.Deployment:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Lambda.Engine.Deployment]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Lambda.Engine.Deployment:
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
            def listNodePools(self, alwaysConstruct: bool=None) -> Union[Array[App.NodePool]]:
            """
            Return all node pools configurable via {@link nodeRole}, {@link altNodeRoles} and {@link nodePools}.
            
            Throws error if any of {@link nodeRole}, {@link altNodeRoles} or {@link nodePools} was set, but no node pool was
            found.
            
            @param alwaysConstruct
                      If set to `true` method returns all {@link App.NodePool NodePools} where this {@link Engine} can be
                      executed. Otherwise empty array can be returned in case if the {@link Engine} can run on any {@link App.NodePool NodePool}.
            @return list of {@link App.NodePool NodePools} in which this {@link Engine} can run. Returns empty list if the
                      {@link Engine} can run on any {@link App.NodePool NodePool} and `alwaysConstruct` is set to `false`.
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
            def fromString(cls, s: str) -> Union[Lambda.Engine.Deployment]:
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
            def forName(cls, name: str, failIfMissing: bool=None) -> Union[Lambda.Engine.Deployment]:
            """
            Get the single instance of this Named Type by name.
            @param name
                    The unique name of the instance to retrieve.
            @param failIfMissing
                    If `true`, an error will be thrown if the instance does not exist. If `false` (default), null will be
                    returned.
            @return The single instance of this Named Type by name. Note that if this Type is also Cached then it will
                    retrieve instance from cache.
            """
                ...
            def isCached(self) -> bool:
            """
            @return whether the cache already contains this instance
            """
                ...
            @classmethod
            def allCached(cls, doNotProduceAll: bool=None) -> Union[Stream[Lambda.Engine.Deployment]]:
            """
            @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
                   `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
            @return stream of all available Cached instances.
            """
                ...
            @classmethod
            def find(cls, filter: str=None, doNotProduceAll: bool=None) -> Union[Stream[Lambda.Engine.Deployment]]:
            """
            @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
            @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
                   `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
            @return existing instances of this type that satisfy filter from data cache.
            """
                ...
            @classmethod
            def findBy(cls, field: str, value: Any, doNotProduceAll: bool=None) -> Union[Stream[Lambda.Engine.Deployment]]:
            """
            @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
                   `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
            @return existing instances of this type that satisfy filter from data cache.
            """
                ...
            @classmethod
            def findByCacheKey(cls, key: str) -> Union[Lambda.Engine.Deployment]:
            """
            @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
            
            @see forCacheKey
            @see getCached
            """
                ...
            @classmethod
            def forCacheKey(cls, key: str) -> Union[Lambda.Engine.Deployment]:
            """
            Returns cached instance by key, with secrets removed.
            """
                ...
            def getCached(self) -> Union[Lambda.Engine.Deployment]:
            """
            @return cached instance.
            
            @see forCacheKey
            @see findByCacheKey
            """
                ...
            def refreshCache(self) -> Union[Lambda.Engine.Deployment]:
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
            def produce(cls, key: str) -> Union[Lambda.Engine.Deployment]:
            """
            Should produce an entry for the cache key. This method should not be called directly.
            """
                ...
            @classmethod
            def produceAll(cls) -> Union[Map[str, Lambda.Engine.Deployment]]:
            """
            Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
            """
                ...
            @classmethod
            def doProduceAll(cls) -> Union[Map[str, Lambda.Engine.Deployment]]:
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
            def getConfig(self) -> Lambda.Engine.Deployment:
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
            def getSecret(self) -> Lambda.Engine.Deployment:
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
            def forConfigKey(cls, configKey: str) -> Union[Lambda.Engine.Deployment]:
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
            def listConfigs(cls, parallel: bool=None, filter: Callable[[str], bool]=None) -> Union[Stream[Lambda.Engine.Deployment]]:
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
            def setConfigValues(self, from_: Lambda.Engine.Deployment, override: str=None) -> None:
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
            def setSecretValues(self, from_: Lambda.Engine.Deployment, override: str=None) -> None:
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
            def loadConfigAndSecret(cls, configKey: str) -> Union[Lambda.Engine.Deployment]:
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
            def removeSecrets(self) -> Union[Lambda.Engine.Deployment]:
            """
            @return this config without any secret values.
            """
                ...
            def removeNonSecrets(self) -> Union[Lambda.Engine.Deployment]:
            """
            @return this config with only secret values.
            """
                ...
            def validate(self) -> Lambda.Engine.Deployment:
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
            def engineType(self) -> Union[Type[[Lambda.Engine]]]:
            """
            Return the subtype of {@link Engine} to which this {@link Engine.Deployment} belongs.
            """
                ...
            @classmethod
            def fromDeploySpec(cls, spec: Engine.DeploySpec) -> Union[Lambda.Engine.Deployment]:
            """
            Default implementation of {@link Engine.Deployment#fromDeploySpec} that translates a {@link Engine.DeploySpec} into an {@link Engine.Deployment}.
            
            Can be overridden by the specific {@link Engine.Deployment} type to provide additional validations or transformations.
            """
                ...
        
        class DeployBase(Engine.DeployBase):
            """
            Lambda.Engine logic
            
            @remarks this represents a made instance of Lambda.Engine.DeployBase
            """
            
            name: Optional[str]
            """
            Name of the Engine
            """

            nodeRole: Optional[str]=None
            """
            This {@link Engine} will run on all {@link App.Node app-nodes} in a {@link App.NodePool node-pool} with this role.
            e.g. for {@link Engine Engines} that provide low latency ML Model serving this value can be set to `service`.
            However as a fallback if there are no node-pools with `service` role additionally #altNodeRoles can be set as e.g.
            `[ task, leader ]` to ensure that service can be provided with any C3 App deployment
            
            @see altNodeRoles
            @see nodePools
            """

            altNodeRoles: Optional[Array[str]]=None
            """
            Alternative server role(s) where this {@link Engine} can run. Only relevant if App has no active node-pool with
            #nodeRole. Order in this array is significant and only the first role with an active node pool will be considered.
            
            @see nodeRole
            """

            nodePools: Optional[Array[str]]=None
            """
            All app node-pools that run this {@link Engine}. Note that only one of #nodeRole or #nodePools should be set; but
            neither are required in which case Engine can run any node.
            
            @see nodeRole
            """

            dedicatedThreadPool: Optional[bool]=None
            """
            If set to `true` then this {@link Engine} should be deployed to dedicated {@App.Node.ThreadPool}.
            Otherwise engine actions would be executed in regular threads.
            
            @see App.Node.ThreadPool
            @see Engine#onEngineThreadStart
            @see Engine#onEngineThreadStop
            @see Engine#targetThreadPool
            """

            autoStart: Optional[bool]=None
            """
            If set to `true` then this {@link Engine} will auto start on every node of every target node-pool.
            """

            inactive: Optional[bool]=None
            """
            If `true` then the {@link Engine} is inactive and can not be started.
            
            @see Engine#activate
            @see Engine#deactivate
            """

            failActionIfEngineNotReady: Optional[bool]=None
            """
            If `true` action dispatched to {@link Engine#isHealthy unhealthy} instance of the {@link Engine} will fail
            with an error.
            
            This is useful in cases where the user wants to fail quickly and retry the action rather than waiting for the {@link Engine} to become healthy.
            
            @see Engine#state
            @see Engine#isHealthy
            @see Engine.State#UNHEALTHY
            """

            initializingNodeAvoidanceDuration: Optional[str]=None
            """
            Maximum time to wait for an {@link Engine} to initialize after it has been started.
            
            For example if {@link Engine} loading model for 5 minutes, it's recommended to set this value to 5 minutes to
            avoid dispatching to {@link App.Node} that started less than 5 minutes ago.
            """

            exec: Optional[Lambda[FunctionType]]=None
            """
            Lambda implementing core logic of a Lambda.Engine
            """

            onStart: Optional[Lambda[FunctionType]]=None
            """
            Callback on Lambda.Engine start; will be called on each node where engine runs; this code can use `engine.set` to
            initialize context in the parent app node and later use that context in exec via `engine.get`
            
            @see Lambda.Engine#set
            @see Lambda.Engine#get
            """

            onStop: Optional[Lambda[FunctionType]]=None
            """
            Callback on Lambda.Engine stop; will be called on each node where engine runs
            """

            onUpdate: Optional[Lambda[FunctionType]]=None
            """
            Callback on Lambda.Engine deployment update; will be called on each node where engine runs
            """

            onThreadStart: Optional[Lambda[FunctionType]]=None
            """
            Callback when dedicated thread of this Lambda.Engine start; this code can use `C3.thread().set` to initialize
            thread local context and later retrieve it from `exec` using `C3.thread().get`
            
            @see Engine.DeployBase#threadPool
            @see App.Node.Thread#set
            @see App.Node.Thread#get
            """

            onThreadStop: Optional[Lambda[FunctionType]]=None
            """
            Callback when dedicated thread of this Lambda.Engine is stopped.
            """
            def __init__(self, name: Optional[str]=None, nodeRole: Optional[str]=None, altNodeRoles: Optional[Array[str]]=None, nodePools: Optional[Array[str]]=None, dedicatedThreadPool: Optional[bool]=None, autoStart: Optional[bool]=None, inactive: Optional[bool]=None, failActionIfEngineNotReady: Optional[bool]=None, initializingNodeAvoidanceDuration: Optional[str]=None, exec: Optional[Lambda[FunctionType]]=None, onStart: Optional[Lambda[FunctionType]]=None, onStop: Optional[Lambda[FunctionType]]=None, onUpdate: Optional[Lambda[FunctionType]]=None, onThreadStart: Optional[Lambda[FunctionType]]=None, onThreadStop: Optional[Lambda[FunctionType]]=None) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Lambda.Engine.DeployBase]:
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
            def fromJsonString(cls, json: str) -> Union[Lambda.Engine.DeployBase]:
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
            def fromXmlString(cls, xml: str) -> Union[Lambda.Engine.DeployBase]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Lambda.Engine.DeployBase]:
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
            def replaceType(self, old: Type, new: Type) -> Lambda.Engine.DeployBase:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Engine.DeployBase:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Engine.DeployBase:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Engine.DeployBase]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Engine.DeployBase]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Lambda.Engine.DeployBase:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Engine.DeployBase:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Engine.DeployBase:
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
            def validateObj(self) -> Lambda.Engine.DeployBase:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Lambda.Engine.DeployBase:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Lambda.Engine.DeployBase:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Lambda.Engine.DeployBase:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Lambda.Engine.DeployBase:
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
            def withoutFieldAtPath(self, path: str) -> Lambda.Engine.DeployBase:
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
            def withoutField(self, field: str) -> Lambda.Engine.DeployBase:
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
            def withoutField(self, field: FieldType) -> Lambda.Engine.DeployBase:
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
            def withoutFields(self, fields: Array[str]) -> Lambda.Engine.DeployBase:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Lambda.Engine.DeployBase:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Lambda.Engine.DeployBase:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Lambda.Engine.DeployBase:
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
            def defaultField(self, field: str) -> Lambda.Engine.DeployBase:
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
            def defaultField(self, field: FieldType) -> Lambda.Engine.DeployBase:
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
            def unsetField(self, field: str) -> Lambda.Engine.DeployBase:
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
            def unsetField(self, field: FieldType) -> Lambda.Engine.DeployBase:
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
            def removeField(self, field: str) -> Lambda.Engine.DeployBase:
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
            def removeField(self, field: FieldType) -> Lambda.Engine.DeployBase:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Lambda.Engine.DeployBase:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Lambda.Engine.DeployBase:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Lambda.Engine.DeployBase:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Lambda.Engine.DeployBase:
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
            def mergeJson(self, json: any) -> Lambda.Engine.DeployBase:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Lambda.Engine.DeployBase:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Lambda.Engine.DeployBase:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Lambda.Engine.DeployBase]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Lambda.Engine.DeployBase]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Lambda.Engine.DeployBase]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Lambda.Engine.DeployBase]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Lambda.Engine.DeployBase]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Lambda.Engine.DeployBase]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Lambda.Engine.DeployBase]]:
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
            def toBuilder(self) -> ObjBuilder[Lambda.Engine.DeployBase]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Lambda.Engine.DeployBase]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Lambda.Engine.DeployBase:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Engine.DeployBase:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Lambda.Engine.DeployBase:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Lambda.Engine.DeployBase:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Engine.DeployBase:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Lambda.Engine.DeployBase:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Lambda.Engine.DeployBase:
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
            def afterMake(self) -> Lambda.Engine.DeployBase:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Lambda.Engine.DeployBase:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Lambda.Engine.DeployBase]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Lambda.Engine.DeployBase:
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
            def listNodePools(self, alwaysConstruct: bool=None) -> Union[Array[App.NodePool]]:
            """
            Return all node pools configurable via {@link nodeRole}, {@link altNodeRoles} and {@link nodePools}.
            
            Throws error if any of {@link nodeRole}, {@link altNodeRoles} or {@link nodePools} was set, but no node pool was
            found.
            
            @param alwaysConstruct
                      If set to `true` method returns all {@link App.NodePool NodePools} where this {@link Engine} can be
                      executed. Otherwise empty array can be returned in case if the {@link Engine} can run on any {@link App.NodePool NodePool}.
            @return list of {@link App.NodePool NodePools} in which this {@link Engine} can run. Returns empty list if the
                      {@link Engine} can run on any {@link App.NodePool NodePool} and `alwaysConstruct` is set to `false`.
            """
                ...
        
        class DeploySpec(Lambda.Engine.DeployBase, Engine.DeploySpec):
            """
            @remarks this represents a made instance of Lambda.Engine.DeploySpec
            """
            
            name: Optional[str]
            """
            Name of the Engine
            """

            nodeRole: Optional[str]=None
            """
            This {@link Engine} will run on all {@link App.Node app-nodes} in a {@link App.NodePool node-pool} with this role.
            e.g. for {@link Engine Engines} that provide low latency ML Model serving this value can be set to `service`.
            However as a fallback if there are no node-pools with `service` role additionally #altNodeRoles can be set as e.g.
            `[ task, leader ]` to ensure that service can be provided with any C3 App deployment
            
            @see altNodeRoles
            @see nodePools
            """

            altNodeRoles: Optional[Array[str]]=None
            """
            Alternative server role(s) where this {@link Engine} can run. Only relevant if App has no active node-pool with
            #nodeRole. Order in this array is significant and only the first role with an active node pool will be considered.
            
            @see nodeRole
            """

            nodePools: Optional[Array[str]]=None
            """
            All app node-pools that run this {@link Engine}. Note that only one of #nodeRole or #nodePools should be set; but
            neither are required in which case Engine can run any node.
            
            @see nodeRole
            """

            dedicatedThreadPool: Optional[bool]=None
            """
            If set to `true` then this {@link Engine} should be deployed to dedicated {@App.Node.ThreadPool}.
            Otherwise engine actions would be executed in regular threads.
            
            @see App.Node.ThreadPool
            @see Engine#onEngineThreadStart
            @see Engine#onEngineThreadStop
            @see Engine#targetThreadPool
            """

            autoStart: Optional[bool]=None
            """
            If set to `true` then this {@link Engine} will auto start on every node of every target node-pool.
            """

            inactive: Optional[bool]=None
            """
            If `true` then the {@link Engine} is inactive and can not be started.
            
            @see Engine#activate
            @see Engine#deactivate
            """

            failActionIfEngineNotReady: Optional[bool]=None
            """
            If `true` action dispatched to {@link Engine#isHealthy unhealthy} instance of the {@link Engine} will fail
            with an error.
            
            This is useful in cases where the user wants to fail quickly and retry the action rather than waiting for the {@link Engine} to become healthy.
            
            @see Engine#state
            @see Engine#isHealthy
            @see Engine.State#UNHEALTHY
            """

            initializingNodeAvoidanceDuration: Optional[str]=None
            """
            Maximum time to wait for an {@link Engine} to initialize after it has been started.
            
            For example if {@link Engine} loading model for 5 minutes, it's recommended to set this value to 5 minutes to
            avoid dispatching to {@link App.Node} that started less than 5 minutes ago.
            """

            exec: Optional[Lambda[FunctionType]]=None
            """
            Lambda implementing core logic of a Lambda.Engine
            """

            onStart: Optional[Lambda[FunctionType]]=None
            """
            Callback on Lambda.Engine start; will be called on each node where engine runs; this code can use `engine.set` to
            initialize context in the parent app node and later use that context in exec via `engine.get`
            
            @see Lambda.Engine#set
            @see Lambda.Engine#get
            """

            onStop: Optional[Lambda[FunctionType]]=None
            """
            Callback on Lambda.Engine stop; will be called on each node where engine runs
            """

            onUpdate: Optional[Lambda[FunctionType]]=None
            """
            Callback on Lambda.Engine deployment update; will be called on each node where engine runs
            """

            onThreadStart: Optional[Lambda[FunctionType]]=None
            """
            Callback when dedicated thread of this Lambda.Engine start; this code can use `C3.thread().set` to initialize
            thread local context and later retrieve it from `exec` using `C3.thread().get`
            
            @see Engine.DeployBase#threadPool
            @see App.Node.Thread#set
            @see App.Node.Thread#get
            """

            onThreadStop: Optional[Lambda[FunctionType]]=None
            """
            Callback when dedicated thread of this Lambda.Engine is stopped.
            """

            threadPool: Optional[App.Node.ThreadPool.Spec]=None
            """
            {@link Spec} describing how to configure dedicated {@link App.Node.ThreadPool}.
            Only applicable if {@link #dedicatedThreadPool} is `true`.
            
            @see App.Node.ThreadPool
            @see Engine.Deployment#dedicatedThreadPool
            """
            def __init__(self, name: Optional[str]=None, nodeRole: Optional[str]=None, altNodeRoles: Optional[Array[str]]=None, nodePools: Optional[Array[str]]=None, dedicatedThreadPool: Optional[bool]=None, autoStart: Optional[bool]=None, inactive: Optional[bool]=None, failActionIfEngineNotReady: Optional[bool]=None, initializingNodeAvoidanceDuration: Optional[str]=None, exec: Optional[Lambda[FunctionType]]=None, onStart: Optional[Lambda[FunctionType]]=None, onStop: Optional[Lambda[FunctionType]]=None, onUpdate: Optional[Lambda[FunctionType]]=None, onThreadStart: Optional[Lambda[FunctionType]]=None, onThreadStop: Optional[Lambda[FunctionType]]=None, threadPool: Optional[App.Node.ThreadPool.Spec]=None) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Lambda.Engine.DeploySpec]:
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
            def fromJsonString(cls, json: str) -> Union[Lambda.Engine.DeploySpec]:
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
            def fromXmlString(cls, xml: str) -> Union[Lambda.Engine.DeploySpec]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Lambda.Engine.DeploySpec]:
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
            def replaceType(self, old: Type, new: Type) -> Lambda.Engine.DeploySpec:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Engine.DeploySpec:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Lambda.Engine.DeploySpec:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Engine.DeploySpec]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Lambda.Engine.DeploySpec]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Lambda.Engine.DeploySpec:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Engine.DeploySpec:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Lambda.Engine.DeploySpec:
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
            def validateObj(self) -> Lambda.Engine.DeploySpec:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Lambda.Engine.DeploySpec:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Lambda.Engine.DeploySpec:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Lambda.Engine.DeploySpec:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Lambda.Engine.DeploySpec:
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
            def withoutFieldAtPath(self, path: str) -> Lambda.Engine.DeploySpec:
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
            def withoutField(self, field: str) -> Lambda.Engine.DeploySpec:
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
            def withoutField(self, field: FieldType) -> Lambda.Engine.DeploySpec:
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
            def withoutFields(self, fields: Array[str]) -> Lambda.Engine.DeploySpec:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Lambda.Engine.DeploySpec:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Lambda.Engine.DeploySpec:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Lambda.Engine.DeploySpec:
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
            def defaultField(self, field: str) -> Lambda.Engine.DeploySpec:
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
            def defaultField(self, field: FieldType) -> Lambda.Engine.DeploySpec:
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
            def unsetField(self, field: str) -> Lambda.Engine.DeploySpec:
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
            def unsetField(self, field: FieldType) -> Lambda.Engine.DeploySpec:
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
            def removeField(self, field: str) -> Lambda.Engine.DeploySpec:
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
            def removeField(self, field: FieldType) -> Lambda.Engine.DeploySpec:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Lambda.Engine.DeploySpec:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Lambda.Engine.DeploySpec:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Lambda.Engine.DeploySpec:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Lambda.Engine.DeploySpec:
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
            def mergeJson(self, json: any) -> Lambda.Engine.DeploySpec:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Lambda.Engine.DeploySpec:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Lambda.Engine.DeploySpec:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Lambda.Engine.DeploySpec]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Lambda.Engine.DeploySpec]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Lambda.Engine.DeploySpec]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Lambda.Engine.DeploySpec]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Lambda.Engine.DeploySpec]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Lambda.Engine.DeploySpec]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Lambda.Engine.DeploySpec]]:
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
            def toBuilder(self) -> ObjBuilder[Lambda.Engine.DeploySpec]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Lambda.Engine.DeploySpec]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Lambda.Engine.DeploySpec:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Engine.DeploySpec:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Lambda.Engine.DeploySpec:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Lambda.Engine.DeploySpec:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Lambda.Engine.DeploySpec:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Lambda.Engine.DeploySpec:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Lambda.Engine.DeploySpec:
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
            def afterMake(self) -> Lambda.Engine.DeploySpec:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Lambda.Engine.DeploySpec:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Lambda.Engine.DeploySpec]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Lambda.Engine.DeploySpec:
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
            def listNodePools(self, alwaysConstruct: bool=None) -> Union[Array[App.NodePool]]:
            """
            Return all node pools configurable via {@link nodeRole}, {@link altNodeRoles} and {@link nodePools}.
            
            Throws error if any of {@link nodeRole}, {@link altNodeRoles} or {@link nodePools} was set, but no node pool was
            found.
            
            @param alwaysConstruct
                      If set to `true` method returns all {@link App.NodePool NodePools} where this {@link Engine} can be
                      executed. Otherwise empty array can be returned in case if the {@link Engine} can run on any {@link App.NodePool NodePool}.
            @return list of {@link App.NodePool NodePools} in which this {@link Engine} can run. Returns empty list if the
                      {@link Engine} can run on any {@link App.NodePool NodePool} and `alwaysConstruct` is set to `false`.
            """
                ...
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

