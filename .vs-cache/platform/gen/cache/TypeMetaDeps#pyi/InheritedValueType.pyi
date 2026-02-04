#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.LambdaType import LambdaType
from c3.platform.Pkg import Pkg
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.FunctionParam import FunctionParam
from c3.platform.StreamType import StreamType
from c3.platform.TypesysScope import TypesysScope
from c3.platform.BigIntType import BigIntType
from c3.platform.WithKey import WithKey
from c3.platform.Expr.Compiled import Expr.Compiled
from c3.platform.FieldType import FieldType
from c3.platform.HttpRequest import HttpRequest
from c3.platform.Int32Type import Int32Type
from c3.platform.Typesys.Json import Typesys.Json
from c3.platform.Anonymizer.Model import Anonymizer.Model
from c3.platform.StringType import StringType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.MethodTypeDocumentation import MethodTypeDocumentation
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.PrimitiveType import PrimitiveType
from c3.platform.Action.Engine import Action.Engine
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.AnyType import AnyType
from c3.platform.DateTimeType import DateTimeType
from c3.platform.TypeMeta import TypeMeta
from c3.platform.WithType import WithType
from c3.platform.Int16Type import Int16Type
from c3.platform.SetType import SetType
from c3.platform.Action.Requirement import Action.Requirement
from c3.platform.PushStreamType import PushStreamType
from c3.platform.NumberType import NumberType
from c3.platform.ByteType import ByteType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.VarReferenceType import VarReferenceType
from c3.platform.JsonType import JsonType
from c3.platform.DeclaredReferenceType import DeclaredReferenceType
from c3.platform.MapType import MapType
from c3.platform.SemanticVersion.MajorMinor import SemanticVersion.MajorMinor
from c3.platform.VectorType import VectorType
from c3.platform.Exclude import Exclude
from c3.platform.Typesys.Ref import Typesys.Ref
from c3.platform.FunctionType import FunctionType
from c3.platform.IntType import IntType
from c3.platform.Promise import Promise
from c3.platform.Annotatable import Annotatable
from c3.platform.DocumentationParserSpec import DocumentationParserSpec
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.MethodType import MethodType
from c3.platform.Annotations import Annotations
from c3.platform.Pkg.Path import Pkg.Path
from c3.platform.Documentable import Documentable
from c3.platform.DecimalType import DecimalType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.DoubleType import DoubleType
from c3.platform.Method import Method
from c3.platform.BooleanType import BooleanType
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.BinaryType import BinaryType
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Db.Domain import Db.Domain
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.NativeType import NativeType
from c3.platform.TupleType import TupleType
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.EventStreamType import EventStreamType
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.FieldValue import FieldValue
from c3.platform.Annotation import Annotation
from c3.platform.AnyOfType import AnyOfType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.FloatType import FloatType
from c3.platform.CollectionType import CollectionType
from c3.platform.Expr import Expr
from c3.platform.HttpResponse import HttpResponse

# Python definitions for the C3 type InheritedValueType


class InheritedValueType(MethodType, DateTimeType, StringType, PrimitiveType):
    """
    Value type for `~` i.e. value type for inherited and overridden field types. This is temporary structure during type
    creation; no fields or methods of constructed types will have this value type. This is an amalagam of the value
    types which can appear in override declarations:
     - field types
     - method overrides
     - method return value overrides
     - method parameter overrides
     - method modifier and implementation overrides
    
    @remarks this represents a made instance of InheritedValueType
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

    doc: Optional[str]=None
    """
    The raw textual documentation associated with this piece of metadata. This will have the original comment
    characters removed, but otherwise be a simple block of text with the original formatting retained. Only
    documentation comments (starting with `/**`) will be used for this purpose and only when immediately
    preceding the structure they document.
    """

    docSingleLine: Optional[bool]=None

    name: Optional[str]
    """
    Method types are bound to a type (as a method) and so always have a name.
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

    varBindings: Optional[Map[str, ValueType]]=None
    """
    The map of variable bindings applied.
    
    It is possible to have bind variable re-named. I.e. to have varBinding that itself is a variable of different name.
    """

    genericVars: Optional[Array[VarReferenceType]]=None
    """
    The list of variable declarations and any restrictions on them.
    """

    params: Optional[Array[FunctionParam]]=None
    """
    The formal parameters accepted by this function.
    """

    returnType: Optional[ValueType]=None
    """
    The return type of the function.
    """

    stateful: Optional[bool]=None
    """
    If this method is not a "pure" function of its arguments and the instance if a member, it should be marked as
    such. A stateful method return value cannot be cached. For example it is not valid to call it using HTTP GET.
    By default, it is assumed all methods are pure (state and side-effect free).
    
    @see #cached
    """

    private: Optional[bool]=None
    """
    True if this method is declared private. This means that it may not be used outside its declaring package.
    Note that data fields can also be private, so this field also appears on {@link FieldType}. Different overloads
    of a method may have different access.
    
    @see Type#private
    @see FieldType#private
    """

    cached: Optional[bool]=None
    """
    Whether this method's return value should be cached between calls to the same object. This is only appropriate
    for expensive calculations that result in a small result object and only for "pure" functions.
    
    @see #cachedKey
    @see #cachedFailIfMissing
    @see #cachedReturnNullIfNotCached
    @see #stateful
    """

    abstract: Optional[bool]=None
    """
    True if this method is declared abstract. This means it is not implemented by the declaring type, but must be
    implemented by a type that mixes it in.
    
    Note that this is _not_ inherited from types that mix it in. If such a type is also abstract, it must be separately
    marked if not implemented by a type that mixes an abstract method.
    ```
    doStuff: abstract ~
    ```
    
    @see Type#abstract
    @see FieldType#abstract
    """

    optional: Optional[bool]=None
    """
    True if this method is declared optional. This means it is not implemented by the declaring type, but may be
    implemented by a type that mixes it in.
    
    Note that this is inherited from types that mix it in. If a type wants to implement an optional method, it must
    declare that with a stub redeclaration of the method:
    ```
    moreStuff: ~
    ```
    
    @see Type#abstract
    @see Method#abstract
    """

    final: Optional[bool]=None
    """
    True if this method is declared final. This mans that it may not be overridden by types that mix it in. Note that
    the type itself may also be final, which implies all methods are final.
    
    @see Type#final
    @see FieldType#final
    """

    inline: Optional[bool]=None
    """
    True if this type's methods are all inline. This means that it will be called with as little overhead as possible.
    If the implementation is in the same language as the call, this may mean direct calling within the language without
    any sort of argument conversion, which means the callee is responsible for handling spec and default parameters
    when no arguments are passed.
    
    To keep the invocation of a method in the same {@link Action.Engine} without affecting its other behavior
    or dispatching, @see Ann.Call#stayInEngine.
    
    @see Type#inline
    """

    member: Optional[bool]=None
    """
    True if this method is declared as a member method. A member method is one called with an instance of the
    declaring type as its first argument, and the argument is always named "this". Language bindings arrange to
    make the method callable from an instance of the object in the natural way.
    """

    property: Optional[bool]=None
    """
    True if this method is declared as a property, meaning that it will be accessed using property syntax instead of function call syntax in the scripting languages.
    This can only be used for non-overloaded nullary methods.
    
    ```type
    epsilon: property(): !double
    ```
    
    For the above example, the `epsilon` method will be called without the parentheses in Python and JavaScript.
    In Java, it will still be a method call.
    
    Note that properties are different from constants: properties are always on the instance (member functions) and
    are not constant.
    
    Property methods have some restrictions:
     - Only have an affect in languages where fields are accessed as properties
     - Only read-only properties are supported; property methods cannot be set.
     - Property methods are automatically #member methods.
     - Property methods must not declare parameters.
     - Property methods must not be overloaded.
     - Property methods must specify a return type.
    
    @see FieldType#isConstant
    """

    inheritFrom: Optional[str]=None
    """
    A method override may reference a specific mixin, which indicates which mixin's implementation should be used.
    This is useful in case the same method name is defined in multiple mixin types, making the inherited implementation
    ambiguous:
    
    ```type
    type X mixes A, B {
      f: ~ from A
    }
    ```
    
    Note that the `from super` syntax is also supported to allow referencing a method for modification without
    being expected to provide an implementation:
    
    ```type
    type X mixes A {
      @ann(v="abc")
      f: ~ from super
    }
    ```
    """

    actionRequirementNames: Optional[Array[str]]=None
    """
    The complete name of the requirement combines the language (required) and optionally {@link ImplLanguage.Runtime},
    {@link ImplLanguage.RuntimeLocation}, and/or {@link ImplLanguage.Executor}.
    A function marked as implemented with the py-sklearn runtime on the server will require a runtime declaration of
    "py-sklearn-server".
    
    ```type
    x: function() py-sklearn-server
    ```
    """

    serializedType: Optional[ValueType]=None
    """
    This declares the type which is represented by this primitive. For example a type that wants to manage URLs as
    strings might use:
    ```type
    type Endpoint {
      url: !string serialized Url
    }
    ```
    
    What this means is that the field value is a `string`, but it must conform to the {@link StringSerializable}
    contract of {@link Url#toString} / fromString.
    
    In addition to providing documentation on the format of the string as well as a means to validate this, for
    fields a method is synthesized that parses the string and returns the resulting instance:
    ```js
    endpoint.parsedUrl().host
    ```
    
    The most common use of this is reference type, to a type that mixes {@link StringSerializable} for `string` or
    {@link Serializable} for `json`. However, it is also possible to use other types which have built-in serialization
    support. For example, `string serialized json` would indicate that `string` value, which would always be in JSON
    format and the "parsed" method (see above) would return `json`.
    
    @see StringSerializable
    @see #dereferenceSerialized
    """

    enumRefType: Optional[ReferenceType]=None
    """
    This declares that the values are constrained to those defined on the named enum type. The fields of the enum
    type must have the same type as the primitive type which is constrained by them.
    
    ```type
    enum type Interval { SECOND MINUTE HOUR }
    
    type X {
      interval: string enum Interval
    }
    ```
    
    @see Enum
    """

    declaredEnumValues: Optional[Array[str]]=None
    """
    This declares that the values are constrained to a specific set of values for a single declaration only.
    Each of the values in the array must be the same type as the primitive type.
    
    ```type
    when: string enum('weekday', 'weekend')
    ```
    
    It is generally better to create an enum type, and always better if it is used in more than one declaration.
    
    Note that this field and enumType are exclusive (and both are optional).
    
    @see #enumType
    """

    forceUtc: Optional[bool]=None
    """
    For datetime fields, forces input values to be converted/persisted in UTC only, losing any time zone offset
    information that was present.
    """

    noTimeZone: Optional[bool]=None
    """
    For datetime fields, ignores any timezone offset information present.
    """

    noTime: Optional[bool]=None
    """
    For datetime values, ignores any time information and persists only the date portion of any input value.
    """

    withMillis: Optional[bool]=None
    """
    For datetime values, saves the milliseconds in the time, creating a time with higher precision than the default
    of seconds.
    """

    withMicros: Optional[bool]=None
    """
    For datetime values, saves the microseconds in the time, creating a time with higher precision than the default
    of seconds.
    """

    withNanos: Optional[bool]=None
    """
    For datetime values, save the nanoseconds in the time, creating a time with higher precision than the default
    of seconds. This may reduce to a coarser granularity of storage of the underlying database does not have support
    for nanoseconds.
    """

    paramOverride: Optional[bool]=None
    """
    If true, this inherited method type declares a (possibly empty) overridden parameter list.
    """
    def __init__(self, declaredPkgPath: Optional[str]=None, declaredSrcLine: Optional[int]=None, declaredSrcCharInLine: Optional[int]=None, pkg: Optional[Pkg]=None, json: Optional[Any]=None, annotationsJson: Optional[any]=None, doc: Optional[str]=None, docSingleLine: Optional[bool]=None, name: Optional[str]=None, modifier: Optional[str]=None, varBindings: Optional[Map[str, ValueType]]=None, genericVars: Optional[Array[VarReferenceType]]=None, params: Optional[Array[FunctionParam]]=None, returnType: Optional[ValueType]=None, stateful: Optional[bool]=None, private: Optional[bool]=None, cached: Optional[bool]=None, abstract: Optional[bool]=None, optional: Optional[bool]=None, final: Optional[bool]=None, inline: Optional[bool]=None, member: Optional[bool]=None, property: Optional[bool]=None, inheritFrom: Optional[str]=None, actionRequirementNames: Optional[Array[str]]=None, serializedType: Optional[ValueType]=None, enumRefType: Optional[ReferenceType]=None, declaredEnumValues: Optional[Array[str]]=None, forceUtc: Optional[bool]=None, noTimeZone: Optional[bool]=None, noTime: Optional[bool]=None, withMillis: Optional[bool]=None, withMicros: Optional[bool]=None, withNanos: Optional[bool]=None, paramOverride: Optional[bool]=None) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> InheritedValueType:
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
    def fromJson(cls, json: any) -> Union[InheritedValueType]:
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
    def fromJsonString(cls, json: str) -> Union[InheritedValueType]:
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
    def fromXmlString(cls, xml: str) -> Union[InheritedValueType]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[InheritedValueType]:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InheritedValueType:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InheritedValueType:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InheritedValueType]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InheritedValueType]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InheritedValueType:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InheritedValueType:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InheritedValueType:
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
    def validateObj(self) -> InheritedValueType:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InheritedValueType:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InheritedValueType:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InheritedValueType:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InheritedValueType:
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
    def withoutFieldAtPath(self, path: str) -> InheritedValueType:
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
    def withoutField(self, field: str) -> InheritedValueType:
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
    def withoutField(self, field: FieldType) -> InheritedValueType:
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
    def withoutFields(self, fields: Array[str]) -> InheritedValueType:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> InheritedValueType:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> InheritedValueType:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InheritedValueType:
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
    def defaultField(self, field: str) -> InheritedValueType:
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
    def defaultField(self, field: FieldType) -> InheritedValueType:
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
    def unsetField(self, field: str) -> InheritedValueType:
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
    def unsetField(self, field: FieldType) -> InheritedValueType:
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
    def removeField(self, field: str) -> InheritedValueType:
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
    def removeField(self, field: FieldType) -> InheritedValueType:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InheritedValueType:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InheritedValueType:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InheritedValueType:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InheritedValueType:
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
    def mergeJson(self, json: any) -> InheritedValueType:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InheritedValueType:
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
    def sumObj(self, other: Obj, deep: bool=None) -> InheritedValueType:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[InheritedValueType]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[InheritedValueType]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[InheritedValueType]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[InheritedValueType]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[InheritedValueType]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, InheritedValueType]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InheritedValueType]]:
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
    def toBuilder(self) -> ObjBuilder[InheritedValueType]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[InheritedValueType]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InheritedValueType:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InheritedValueType:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InheritedValueType:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> InheritedValueType:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InheritedValueType:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> InheritedValueType:
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
    def make(cls, s: str) -> Union[InheritedValueType]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InheritedValueType:
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
    def afterMake(self) -> InheritedValueType:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> InheritedValueType:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InheritedValueType]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> InheritedValueType:
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
    def withoutDeclaredSrcPos(self, recursive: bool=None) -> InheritedValueType:
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
    def withAnnotation(self, ann: Annotation) -> InheritedValueType:
    """
    Add an annotation to the given metadata
    """
        ...
    @overload
    def withAnnotation(self, ann: str, annField: str=None, value: Any=None) -> InheritedValueType:
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
    def renderer(self) -> Union[HtmlRenderer]:
    """
    Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
    null may be returned. The implementation must be available within the browser (typically `js-client`).
    """
        ...
    def docParsed(self, spec: DocumentationParserSpec=None) -> MethodTypeDocumentation:
    """
    Documentation parsing will produce a structured documentation object from the attributes of the metadata along
    with the contents of the documentation comment. This can be examined and also rendered for display to the user
    using {@link DocumentationRenderer}.
    
    If this is not one of the known metadata types, nor has any documentation associated, the method returns null.
    Otherwise, it will build an object that contains as much as is possible to assemble about the piece of
    structure, both from the metadata itself and from the text in #docText.
    
    @return parsed documentation object
    
    @see DocumentationParser
    """
        ...
    def docMarkdown(self) -> Union[str]:
    """
    Rendered markdown document for the Documentable instance.
    """
        ...
    def docText(self) -> Union[str]:
    """
    Rendered plain text for the Documentable instance.
    """
        ...
    @classmethod
    def haveSameDoc(cls, d1: Documentable, d2: Documentable) -> bool:
    """
    Whether the specified instances have same documentation.
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
    def cachedFingerprint(self) -> int:
        ...
    def identifier(self, lang: str=None) -> str:
    """
    @return identifier that can safely be used in the code for provided language
    """
        ...
    def toString(self) -> Union[str]:
    """
    ValueType instance serialize will make the DSL declaration.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[InheritedValueType]:
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
    def guessType(cls, value: Any, failIfNone: bool=None) -> Union[PrimitiveType]:
    """
    Guess which primitive type a value fits most closely. For null values or when no primitive type matches, return
    null.
    
    @param value value to examine
    @return matched primitive type or null
    
    @see guessTypeRestrictions
    """
        ...
    @classmethod
    def guessTypeFromJavaClass(cls, value: Any, failIfNone: bool=None) -> Union[PrimitiveType]:
    """
    Guess the corresponding C3 PrimitiveType from Java class (i.e. Long.class -> PrimitiveType.ofInt())
    """
        ...
    @classmethod
    def guessTypeFromPythonClass(cls, value: Any, failIfNone: bool=None) -> Union[PrimitiveType]:
    """
    Guess the corresponding C3 PrimitiveType from Python class
    """
        ...
    @classmethod
    def guessConvertibleType(cls, value: Any, testContent: bool=None, failIfNone: bool=None) -> Union[PrimitiveType]:
    """
    Guess which primitive type a value fits most closely. For null values or when no primitive type matches, return
    null.
    
    The conventions of the language binding affect the result. Java's rich set of types mean that values are highly
    descriptive, while JavaScript has only "number" for all numeric values. Python falls in between with distinct
    integer and floating point types.
    
    If the parameter testContent is false, values are **not** inspected inside to determine if they could be converted.
    For example, guessType with the string `"4.0"` will return String
    (even though the value when parsed could be a Double or even an Int).
    See #convertValue for explicit conversion.
    
    
    | value       | result      |
    |-------------|-------------|
    | `4`         | Int         |
    | `3.9`       | Double      |
    | `"four"`    | String      |
    | `"4.0"`     | String      |
    | `true`      | Boolean     |
    | `null`      | `null`      |
    
    If the parameter testContent is true and the type is determined to be a string,
    the string will be parsed to attempt to extract the (narrowest) type it could be converted to.
    That type will then be returned.
    For example, guessConvertibleType("12", testContent=true) will return ByteType.
    As an exception, FloatType is not considered (for efficiency); all parsable decimals will return DoubleType.
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
    @return true if this primitive type has an enum type (`string enum Interval`) or an explicit list of enumerated
    values (`string enum('one', 'two')`).
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
    Throws Err.UnsupportedOperation as we can't build inherited value type without base value type.
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
    @return the factory method name for this primitive type (e.g., "ofInt", "ofStr", "ofDbl", "ofBool").
    """
        ...
    def factoryMethodExpr(self) -> str:
    """
    @return a code expression that instantiates this value type (e.g., "PrimitiveType.ofInt()", "ArrayType.ofStr()").
            can be used by code generators and tests.
    """
        ...
    def isGeneric(self) -> bool:
    """
    Whether or not there are any unbound generic variables in this instance.
    """
        ...
    def isNarrowed(self) -> bool:
    """
    Whether or not this type has a generic prototype from which it was narrowed i.e. if all its generic variables are
    bound. Note that when it has neither unbound nor bound variables it is neither generic nor narrowed.
    """
        ...
    def isNarrowedToAny(self) -> bool:
    """
    Whether or not all variables are bound to `any` or to the variable's restriction.
    
    @see #bindAll
    """
        ...
    def prototype(self) -> MethodType:
    """
    If parent type is narrowed generic type then corresponding method overload from it - otherwise this.
    """
        ...
    def vars(self) -> Union[Array[VarReferenceType]]:
    """
    The list of unbound variables and any restrictions on them.
    """
        ...
    def varsByName(self) -> Union[Map[str, VarReferenceType]]:
    """
    The map of unbound variables by name.
    """
        ...
    def var(self, var: str, failIfMissing: bool=None) -> Union[VarReferenceType]:
    """
    Get a single unbound variable reference by name.
    """
        ...
    def varAt(self, var: int, failIfMissing: bool=None) -> Union[VarReferenceType]:
    """
    Get a single unbound variable reference at index.
    """
        ...
    def varIndex(self, var: str, failIfMissing: bool=None) -> int:
    """
    Get a single unbound variable index in the #vars array.
    """
        ...
    def isVar(self, var: str) -> bool:
    """
    Whether or not the provided variable name is an unbound generic variable.
    """
        ...
    def hasVarBinding(self, var: str) -> bool:
    """
    Return whether or not given generic variable has a binding.
    
    @see #bindVar
    """
        ...
    def hasVarBindings(self) -> bool:
    """
    Return whether or not any generic variables have bindings.
    
    @see #bindVar
    """
        ...
    @overload
    def varBinding(self, var: str, failIfUnbound: bool=None) -> Union[ValueType]:
    """
    Get a single variable binding value. Note that the value may be null if unbound or may not be fully bound if
    given variable was bound to another generic variable.
    
    @param var name of the generic variable
    """
        ...
    @overload
    def varBinding(self, indx: int, failIfUnbound: bool=None) -> Union[ValueType]:
    """
    Get a single variable binding value at provided index in declared variables array. Note that the value may be null
    if unbound or if variable at index was bound to another generic variable.
    
    @param index of a generic variable
    """
        ...
    @overload
    def bindVar(self, var: str, binding: ValueType) -> InheritedValueType:
    """
    Bind a single variable to the specified value type and return a new instance. The result may still be generic if
    there are remaining unbound variables.
    """
        ...
    @overload
    def bindVar(self, binding: ValueType, *bindings: Array[ValueType]) -> InheritedValueType:
    """
    Bind a first variable to the specified value type and return a new instance. The result may still be generic if
    there are remaining unbound variables.
    """
        ...
    @overload
    def bindVar(self, serializedBinding: str) -> InheritedValueType:
        ...
    def bindVars(self, bindings: Array[ValueType]) -> InheritedValueType:
    """
    Bind all variables to the specified value types and return a new instance. Bindings are applied in the declaration
    / mixin order
    """
        ...
    def bindAll(self) -> InheritedValueType:
    """
    Bind all variables to `any` or to variable restriction
    """
        ...
    def buildName(self) -> str:
    """
    @return name if this generic based on structure of it
    """
        ...
    def prototypeNameWithBindings(self) -> str:
    """
    @return prototype name with bindings
    """
        ...
    def paramNames(self) -> Union[Array[str]]:
    """
    An ordered list of parameter names.
    """
        ...
    def param(self, param: str, failIfMissing: bool=None) -> Union[FunctionParam]:
    """
    Get the single formal parameter by name.
    
    @param name parameter name
    """
        ...
    def hasParam(self, param: str) -> bool:
    """
    Whether the function has the named formal parameter.
    
    @param name parameter name
    """
        ...
    def paramAt(self, paramIndex: int, failIfMissing: bool=None) -> Union[FunctionParam]:
    """
    Get the single formal parameter by index.
    
    @param i parameter index
    """
        ...
    def paramCount(self) -> int:
    """
    Get the canonical number of arguments. Note that varargs functions may accept more arguments than this, but they
    will be collected into the last argument array.
    
    @return number of parameters
    """
        ...
    def nonOptionalParamCount(self) -> int:
    """
    Get the minimum number of arguments for a valid call. This counts parameters with modifier `!` or `!?` and no
    default value.
    
    @return number of non-optional parameters
    """
        ...
    @overload
    def paramIndex(self, param: str, failIfMissing: bool=None) -> int:
    """
    Get the index of the specified parameter by name. If not found, this returns -1, unless the failIfMissing
    argument is specified.
    
    @param param parameter name to find
    @param failIfMissing throw error instead of returning -1 if not found
    @return 0-based index of parameter
    """
        ...
    @overload
    def paramIndex(self, param: FunctionParam, failIfMissing: bool=None) -> int:
    """
    Get the index of the specified parameter instance. If not found, this returns -1, unless the failIfMissing
    argument is specified.
    
    @param param parameter instance to find
    @param failIfMissing throw error instead of returning -1 if not found
    @return 0-based index of parameter
    """
        ...
    def kwargsParamIndex(self) -> Union[int]:
    """
    @return index of the only kwargs parameter, typically a Spec.
    """
        ...
    def paramType(self, param: str, failIfMissing: bool=None) -> Union[ValueType]:
    """
    Get the type of a single parameter value by name.
    @param name parameter name
    @return parameter value type
    """
        ...
    def paramTypeAt(self, paramIndex: int, failIfMissing: bool=None) -> Union[ValueType]:
    """
    Get the type of a single parameter value type by index.
    @param name parameter name
    @return parameter value type
    """
        ...
    def paramTypes(self) -> Union[Array[ValueType]]:
    """
    @return list of parameter value types in the declaration order
    """
        ...
    def hasStreamableParam(self) -> bool:
    """
    @return true if the function has a streamable parameter; this is typically only parameter that can stream values
    """
        ...
    def convertArg(self, param: str, v: Any=None, failIfInvalid: bool=None, withoutDefault: bool=None) -> Union[T]:
    """
    @param withoutDefault whether to apply default for parameter {@link FunctionParam#convertAndValidateArg}
    @return converted value based on parameter type
    """
        ...
    def convertArgAt(self, paramIndex: int, v: Any=None, failIfInvalid: bool=None, withoutDefault: bool=None) -> Union[T]:
    """
    @param withoutDefault whether to apply default for parameter {@link FunctionParam#convertAndValidateArg}
    @return converted value based on parameter type
    """
        ...
    def convertArgs(self, args: Array[Any]=None, kwargs: Map[str, Any]=None, failIfInvalid: bool=None) -> Union[Array[Any]]:
    """
    @return converted values based on parameter types; note if value is not convertible replaces it to `null`
    """
        ...
    @overload
    def paramDefaultValue(self, paramName: str) -> Union[Any]:
    """
    @return default value of the parameter
    """
        ...
    @overload
    def paramDefaultValue(self, paramIndex: int) -> Union[Any]:
    """
    @return default value of the parameter
    """
        ...
    def paramHasDefault(self, param: str) -> bool:
    """
    Whether the provided parameter has a default value.
    
    @param name parameter name
    @return has default or not
    """
        ...
    def paramIsNonEmpty(self, param: str) -> bool:
    """
    Whether the parameter with the provided name is non empty.
    
    @param name name of the argument
    """
        ...
    def paramIsOptional(self, param: str) -> bool:
    """
    Whether the parameter can be omitted. Note that param may not be non empty but may be not be optional either. i.e.
    declared using `!?`.  Also if parameter has a default value then it is always optional.
    
    @param name name of the argument
    """
        ...
    def nonEmptyParams(self) -> Union[Array[FunctionParam]]:
    """
    Produces the list of non empty arguments on this method.
    
    @return list of non empty arguments
    """
        ...
    def nonEmptyParamNames(self) -> Union[Array[str]]:
    """
    Produces the list of names non empty arguments on this method.
    
    @return list of non empty parameter names
    """
        ...
    def returnsVoid(self) -> bool:
    """
    Whether or not the function has no return value.
    @return true if void function
    """
        ...
    def returnIsNonEmpty(self) -> bool:
    """
    Whether a return value will always be non empty.
    """
        ...
    def returnIsStreamable(self) -> bool:
    """
    @return true if the function returns a stream of values
    """
        ...
    def isVarArgs(self) -> bool:
    """
    Whether the last argument allows multiple values.
    """
        ...
    def isAnySignature(self) -> bool:
    """
    Whether or not this is a match-anything function signature: `function(args: any ...): any`.
    """
        ...
    @overload
    def argTypesDistance(self, argTypes: Array[ValueType]) -> int:
    """
    Calculates "distance" between parameters of this function and provided argument types:
    * 0 - means exact match as far as number of and value types of arguments vs parameters
    * _positive integer_ - means that it is possible to convert all arguments - lower number means fewer conversions
    * -1 - means totally incompatible call
    
    @see argsDistance
    @see ValueType#distance
    @see ValueType#valueDistance
    """
        ...
    @overload
    def argTypesDistance(self, argTypes: Map[str, ValueType]) -> int:
    """
    Calculates "distance" between parameters of this function and provided argument types:
    * 0 - means exact match as far as number of and value types of arguments vs parameters
    * _positive integer_ - means that it is possible to convert all arguments - lower number means fewer conversions
    * -1 - means totally incompatible call
    
    @see argsDistance
    @see ValueType#distance
    @see ValueType#valueDistance
    """
        ...
    @overload
    def argsDistance(self, args: Array[Any]) -> int:
    """
    Calculates "distance" between parameters of this function and provided argument values:
    * 0 - means exact match as far as number of and value types of arguments vs parameters
    * _positive integer_ - means that it is possible to convert all arguments - lower number means fewer conversions
    * -1 - means totally incompatible call
    
    @see argTypesDistance
    @see ValueType#distance
    @see ValueType#valueDistance
    """
        ...
    @overload
    def argsDistance(self, args: Map[str, Any]) -> int:
    """
    Calculates "distance" between parameters of this function and provided argument values:
    * 0 - means exact match as far as number of and value types of arguments vs parameters
    * _positive integer_ - means that it is possible to convert all arguments - lower number means fewer conversions
    * -1 - means totally incompatible call
    
    @see argTypesDistance
    @see ValueType#distance
    @see ValueType#valueDistance
    """
        ...
    @overload
    def argsDistance(self, args: Array[Any], kwargs: Map[str, Any]) -> int:
    """
    Calculates "distance" between parameters of this function and provided argument values:
    * 0 - means exact match as far as number of and value types of arguments vs parameters
    * _positive integer_ - means that it is possible to convert all arguments - lower number means fewer conversions
    * -1 - means totally incompatible call
    
    @see argTypesDistance
    @see ValueType#distance
    @see ValueType#valueDistance
    """
        ...
    def argsMapToArray(self, args: Map[str, Any], failOnExtra: bool=None) -> Union[Array[Union[Any]]]:
    """
    Converts map of arguments to array of arguments where position of arg in result matches position of the
    corresponding parameter. If input contains key that does not match any parameter then returns `null` or throws
    exception based on `failOnExtra`. If input is missing a parameter put `null` at corresponding index i.e. resulting
    array size always matches parameter count.
    
    @return null if extra arguments otherwise positionally mapped array of arguments
    """
        ...
    def argTypesMapToArray(self, args: Map[str, ValueType]) -> Union[Array[Union[ValueType]]]:
    """
    Converts map of argument types to array of argument types where position of arg in result matches position of the
    corresponding parameter. If input contains key that does not match any parameter then returns `null` or throws
    exception based on `failOnExtra`. If input is missing a parameter put `null` at corresponding index i.e. resulting
    array size always matches parameter count.
    """
        ...
    def mergeArgs(self, args: Array[Any], kwargs: Map[str, Any], failOnExtra: bool=None) -> Union[Array[Union[Any]]]:
    """
    Combines positional args and keyword args into a single array of arguments in which the position of arg in result
    matches position of the corresponding keyword args and the relative order of positional args. Note that if there's
    any parameter that can be passed as kwargs param, the fields for that kwargs param will be rolled up into one
    object and passed as one argument.
    If input contains key that does not match any parameter or conflicts with the positional args, then returns `null`
    or throws exception based on `failOnExtra`. If input is missing a parameter put `null` at corresponding index i.e.
    resulting array size always matches parameter count.
    """
        ...
    def shadows(self, other: FunctionType) -> bool:
    """
    Checks if this function shadows i.e. has same parameters not considering all optional ones as provided function.
    """
        ...
    def mergeFunctionType(self, other: FunctionType) -> FunctionType:
    """
    Merge other function type into this one by merging params and return type.
    """
        ...
    @classmethod
    def extractSignature(cls, value: Any, failIfNot: bool=None) -> Union[FunctionType]:
    """
    Determine the function signature of the specified functional value. If the value is not a lambda or other
    callable instance, null is returned.
    
    @param failIfNot if true, throw an exception instead of returning null
    """
        ...
    def isSameParamTypes(self, other: FunctionType) -> bool:
    """
    Determine whether the specified function has exactly the same parameter value types as this one. It does not
    consider parameter names, nor does it consider the return type. This is useful when matching calling signatures
    for overload references, but not the same as callability matching such as {@link Method#findOverloadForArgTypes}.
    """
        ...
    def paramJavaJTypes(self, spec: Any=None) -> Union[Array[Any]]:
    """
    Uses {@link ValueType#javaJType} along with the provided spec to return an array of native JavaTypes corresponding
    to this FunctionType's parameters. This is used when code-genning types to ensure that no overloads of a method
    will have a signature clash; see TypeCodeInterface.java
    """
        ...
    def toRef(self) -> Typesys.Ref:
    """
    Reference value of this instance.
    """
        ...
    def toRefString(self) -> str:
    """
    Reference string serialized value of the reference to this instance.
    """
        ...
    @classmethod
    def fromRef(cls, ref: Obj, failIfMissing: bool=None) -> InheritedValueType:
    """
    Construct instance from a reference.
    """
        ...
    @classmethod
    def refType(cls) -> Union[Type]:
    """
    C3 type for the reference value.
    """
        ...
    def actionRequirements(self) -> Union[Array[Action.Requirement]]:
    """
    The {@link Action.Requirement action requirements} for this MethodType.
    """
        ...
    def engines(self) -> Union[Array[Action.Engine]]:
    """
    The set of all action engines for this MethodType
    """
        ...
    def serName(self) -> str:
    """
    @return serialization name of this method type.
    
    @see Amm.Ser#name
    """
        ...
    def ordinal(self) -> int:
    """
    0 based index of this overload in Method
    """
        ...
    def mixins(self) -> Union[Array[MethodType]]:
    """
    Corresponding mixin type method overloads if this is an override.
    """
        ...
    def cachedKey(self) -> Union[str]:
    """
    If this is a cached method, on what is the value keyed. If this method returns null, this means the value is
    cached once per instance, otherwise it is cached on the specified value:
     - `arg` the cache key is the first argument
    
    For the cache key, primitive values and Objs that mixin StringSerializable are converted to strings. Other Obj
    values must be identifiably keyed by strings (mixing in {@link WithCacheKey} or {@link WithKey}).
    
    @see #cached
    @see #cachedKeys
    """
        ...
    def failIfMissing(self) -> bool:
    """
    Determine if this method has a "failIfMissing" parameter.
    """
        ...
    def cachedFailIfMissing(self) -> bool:
    """
    Determine if this cached method has a "failIfMissing" parameter which needs local support when generating code
    for a cached method.
    
    @see #cached
    """
        ...
    def cachedReturnNullIfNotCached(self) -> bool:
    """
    Determine if this cached method has a "returnNullIfNotCached" parameter which needs local support when generating
    code for a cached method.
    
    @see #cached
    """
        ...
    def hasSinglePrecomputedResult(self) -> bool:
    """
    @return `true` if this method can only have one precomputed result. This typically means method has no parameters.
    """
        ...
    def hasDefaultPrecomputationKeys(self) -> bool:
    """
    @return `true` if this method's pre-computation keys are known. I.e. call to TypeMeta#precompute will not fail
            without keys.
    """
        ...
    def precomputationKeys(self, thisArg: Any) -> Union[Array[K]]:
    """
    All possible key values for precomputed results of this method application.
    
    @see #hasSinglePrecomputationResult
    @see TypeMeta#precompute
    @see Ann.Value#possibles
    @see #cached
    """
        ...
    def precomputationKeysExpr(self) -> Union[Expr.Compiled[Any, Any]]:
    """
    @return cached compiled expression for @value(possibles) annotation for a computation key parameter
    """
        ...
    def precomputationKeyParam(self) -> Union[FunctionParam]:
    """
    @return parameter declaration that is used for key values during pre-computation of this method call
    """
        ...
    def isAbstract(self) -> bool:
    """
    Whether this is declared, but not implemented method, on its type.
    """
        ...
    def isOptional(self) -> bool:
    """
    Whether this method does not have to be implemented by non abstract sub-type.
    """
        ...
    def isFinal(self) -> bool:
    """
    Whether this method may not be re-declared on a type that mixes its type.
    """
        ...
    def isInline(self) -> bool:
    """
    Whether this is should be called with minimal dispatching. If possible, it will execute within the context of the
    caller.
    
    @see TypeMeta#declaredInline
    @see TypeMeta#isInline
    """
        ...
    def isMember(self) -> bool:
    """
    Whether this method must be called on an instance.
    Member functions have a implicit "this" argument, which will be available in the execution context in the natural
    way.
    """
        ...
    def isStatic(self) -> bool:
    """
    Whether this method should be called on a type instead of instance.
    """
        ...
    def isCached(self) -> bool:
    """
    Whether this is a cached method. Cached methods are only called once per instance and results cached on an
    instance.
    """
        ...
    def isImplemented(self) -> bool:
    """
    Whether this method has implementation.
    
    @see #isImplementedIn
    @see #isImplementedOn
    """
        ...
    def isImplementedIn(self, language: str) -> bool:
    """
    Whether this method is claimed for the specified language
    
    @see #isImplementedOn
    """
        ...
    def isImplementedOn(self, type: Type, actionEngine: str) -> bool:
    """
    Whether this method has an implementation for a specific mixin type and {@Link Action.Engine}.
    
    @see #isImplementedIn
    """
        ...
    def isDefaultClaim(self) -> bool:
    """
    Whether this method is implemented by parent types' {@link DefaultClaim} mixin.
    """
        ...
    def isDispatcher(self) -> bool:
    """
    Whether this method is implementing a dispatcher logic.
    
    @see Ann.Call#dispatcher
    """
        ...
    def convertPositionalAndKeywordArgs(self, pargs: Array[Any]=None, kwargs: Map[str, Any]=None, failIfInvalid: bool=None) -> Union[Array[Any]]:
    """
    Merge and convert positional args and keyword args into an array of arguments with correct value type.
    """
        ...
    def isReClaim(self) -> bool:
    """
    Whether this method is implemented by parent {@link ReClaim#_exec}.
    """
        ...
    def isReClaimedIn(self, actionEngine: str=None) -> bool:
    """
    Whether this method is implemented by parent {@link ReClaim#_exec} in target {@link Action.Engine}.
    """
        ...
    def isJava(self) -> bool:
    """
    Whether this method has implementation in Java.
    """
        ...
    def isJs(self) -> bool:
    """
    Whether this method has implementation in JavaScript.
    """
        ...
    def isPy(self) -> bool:
    """
    Whether this method has implementation in Python.
    """
        ...
    def isInherited(self) -> bool:
    """
    Whether this method is inherited from one of the mixins.
    """
        ...
    def isAuthzAlways(self) -> bool:
    """
    Whether this method should always be authorized even when invoked as a child method.
    """
        ...
    def authzActionGroups(self) -> Union[Array[str]]:
    """
    `@authz(actionGroup)`s defined on this method or it's parent type.
    """
        ...
    def authzSecurityLevel(self) -> Union[int]:
    """
    Authorization Security Level derived from `@authz(actionGroup)`s defined on this method or it's parent type.
    """
        ...
    def hasJavaThreadAffinity(self) -> bool:
    """
    `true` if this method should be executed in the same java thread for a given JVM of C3 Node
    
    @see Ann.Call#javaThreadAfinity
    """
        ...
    def inheritedFrom(self) -> Union[Type]:
    """
    If this an inherited method then mixin where it is inherited from.
    """
        ...
    def inheritedFromMeta(self) -> Union[TypeMeta]:
        ...
    def inheritedMethodType(self) -> Union[MethodType]:
    """
    If this an inherited method then mixin's method type.
    """
        ...
    def implementedMethodType(self) -> Union[MethodType]:
    """
    The `MethodType`, if any, that corresponds to the implementation of this declared method
    """
        ...
    @overload
    def implementedOn(self) -> Union[Type]:
    """
    Get the type (parent type or the closest mixin of parent type) on which this method overload of this method is
    implemented. If no such overload is declared in the hierarchy (or
    only an unimplemented method is declared), return null.
    
    ```type
    type X {
      doit: abstract member function()
    }
    
    type Y mixes X {
      doit: ~: boolean
    }
    
    type Z mixes X
    ```
    
    In the example above, calling from type *X#doit* `implementedOn()` returns null because there is no
    implementation (the declaration in X is marked `abstract`). Calling from type *Y#doit* returns Y because it is
    explicitly declared to be implemented there. Note that calling on type Z also returns Z because the abstract
    expires without a re-declaration in Z.
    """
        ...
    @overload
    def implementedOn(self, actionEngine: str) -> Union[Type]:
    """
    Get the type (this one or the closest mixin) on which the specified overload of this method is declared with
    provided {@Link Action.Engine}. Abstract and optional declarations not included. If no such overload is
    declared in the hierarchy (or only an unimplemented method is declared), return null.
    
    @see implementedOn()
    """
        ...
    @overload
    def implementedOnMeta(self) -> Union[TypeMeta]:
        ...
    @overload
    def implementedOnMeta(self, actionEngine: str) -> Union[TypeMeta]:
        ...
    def firstDeclaredOn(self) -> Type:
    """
    Get the type on which this method overload is first declared.
    """
        ...
    def firstDeclaredOnMeta(self) -> TypeMeta:
        ...
    def firstDeclaredMethodType(self) -> MethodType:
    """
    Original declaration of this method overload from first declaring type.
    """
        ...
    def withFirstDeclaredParams(self) -> MethodType:
    """
    This method type but with parameters from original declaration.
    """
        ...
    def parentMethod(self) -> Method:
    """
    Parent method this overload belongs to.
    """
        ...
    def parentType(self) -> Type:
    """
    Parent type this method belongs to.
    """
        ...
    def parentTypeMeta(self) -> TypeMeta:
        ...
    @overload
    def paramPossibleValues(self, paramName: str) -> Union[Array[Any]]:
    """
    @return possible value of the parameter
    """
        ...
    @overload
    def paramPossibleValues(self, paramIndex: int) -> Union[Array[Any]]:
    """
    @return possible value of the parameter
    """
        ...
    def thisParam(self) -> Union[FunctionParam]:
    """
    @return implicit `this` parameter for member methods.
    """
        ...
    def callThunk(self, appId: str) -> Union[Any]:
    """
    @return cached Java thunk for calling corresponding C3 MethodType.
    """
        ...
    def superCallThunk(self, callingType: Type, mixin: Type=None) -> Union[Any]:
    """
    @param callingType
           the Type by which `super()` was originally called in this `super()` call chain
    @param mixin
           if specified, the Type specified in the call to `super(mixin)`
    
    @see WithType#super
    @see Type#super
    
    @return cached Java thunk for calling corresponding C3 MethodType in a super chain.
    """
        ...
    def shouldStayInEngine(self, actionEngine: str) -> bool:
    """
    Get whether or not the overload can be executed in the given {@Link Action.Engine} based on the action claims. If only
    an unimplemented method is declared, return false.
    
    @see Ann.Call#stayInEngine
    """
        ...
    def callStackKey(self) -> str:
    """
    @return a string key in the format of '<type proto name>#<method name>'
    """
        ...
    def dbDomain(self) -> Union[Db.Domain]:
    """
    @return {@link Db.Domain} if this function's parent entity type belongs to a specific Dd.Domain
    
    @see Ann.Db#domain
    """
        ...
    def dbDomainCallAppInLocalJvm(self) -> bool:
    """
    Returns true if this method should execute locally using {@link C3#callInLocalJvmApp}
    instead of being remoted to the target app.
    
    This is determined by the {@link Db.Domain.Config#callAppInLocalJvm} setting on the
    method's {@link #dbDomain}. When enabled, method calls perform a lightweight context
    switch to the target app within the same JVM, avoiding network overhead.
    
    This is appropriate for Single-Node Environments (SNE) or co-located microservices
    where apps share the same JVM and database.
    
    @return true if callAppInLocalJvm is enabled for this method's db domain
    @see Db.Domain.Config#callAppInLocalJvm
    @see C3#callInLocalJvmApp
    """
        ...
    def targetAppIdFunc(self) -> Union[Callable[[Union[Map[str, Any]]], str]]:
    """
    @return lambda to calculate target app id for this function call with provided arguments
    
    @see Ann.Call#app
    @see Ann.Db#domain
    """
        ...
    def targetNodeRolesFunc(self) -> Union[Callable[[Union[Map[str, Any]]], Array[str]]]:
    """
    @return lambda to calculate target server roles for this function call with provided arguments
    
    @see Ann.Call#sererRole
    """
        ...
    def targetNodePoolsFunc(self) -> Union[Callable[[Union[Map[str, Any]]], Array[str]]]:
    """
    @return lambda to calculate target server node pools for this function call with provided arguments
    
    @see Ann.Call#nodePool
    """
        ...
    def targetNodeFunc(self) -> Union[Callable[[Union[Map[str, Any]]], str]]:
    """
    @return lambda to calculate target server node for this function call with provided arguments
    
    @see Ann.Call#node
    """
        ...
    def targetThreadPoolFunc(self) -> Union[Callable[[Union[Map[str, Any]]], str]]:
    """
    @return lambda to calculate target thread pool for this function call with provided arguments
    
    @see Ann.Call#threadPool
    """
        ...
    def hasAnyTargetFunc(self) -> bool:
    """
    @return true if has any of #targetAppIdFunc, #targetNodeRolesFunc, #targetNodePoolsFunc or #targetNodeFunc
    """
        ...
    def serRefType(self) -> Union[ReferenceType]:
    """
    If #serializedType is a reference type (the most common case), return that value type. This is a convenience for
    `serializedType().asReferenceType()` plus the null checks. In addition, any unbound generic variables on the
    reference type are bound to `any`.
    
    @see #serializedType
    """
        ...
    @classmethod
    def ofBinary(cls) -> BinaryType:
    """
    @return `binary` primitive type
    """
        ...
    @classmethod
    def ofBool(cls) -> BooleanType:
    """
    @return `boolean` primitive type
    """
        ...
    @classmethod
    def ofByte(cls) -> ByteType:
    """
    @return `byte` primitive type
    """
        ...
    @classmethod
    def ofDateTime(cls) -> DateTimeType:
    """
    @return `datetime` primitive type
    """
        ...
    @classmethod
    def ofDateOnly(cls) -> DateTimeType:
    """
    @return `date` primitive type
    """
        ...
    @classmethod
    def ofDateTimeNanos(cls) -> DateTimeType:
    """
    @return `datetime` primitive type with nanosecond precision
    """
        ...
    @classmethod
    def ofDateTimeMillis(cls) -> DateTimeType:
    """
    @return `datetime` primitive type with millisecond precision
    """
        ...
    @classmethod
    def ofDateTimeMicros(cls) -> DateTimeType:
    """
    @return `datetime` primitive type with microsecond precision
    """
        ...
    @classmethod
    def ofDecimal(cls) -> DecimalType:
    """
    @return `decimal` primitive type
    """
        ...
    @classmethod
    def ofDbl(cls) -> DoubleType:
    """
    @return `double` primitive type
    """
        ...
    @classmethod
    def ofFloat(cls) -> FloatType:
    """
    @return `float` primitive type
    """
        ...
    @classmethod
    def ofInt(cls) -> IntType:
    """
    @return `int` primitive type
    """
        ...
    @classmethod
    def ofInt32(cls) -> Int32Type:
    """
    @return `int32` primitive type
    """
        ...
    @classmethod
    def ofInt16(cls) -> Int16Type:
    """
    @return `int16` primitive type
    """
        ...
    @classmethod
    def ofBigInt(cls) -> BigIntType:
    """
    @return `bigint` primitive type
    """
        ...
    @classmethod
    def ofJson(cls) -> JsonType:
    """
    @return untyped `json` primitive type
    """
        ...
    @classmethod
    def ofUntypedJson(cls) -> JsonType:
    """
    @return untyped `json` primitive type
    """
        ...
    @classmethod
    def ofTypedJson(cls) -> JsonType:
    """
    @return typed `json` primitive type
    """
        ...
    @classmethod
    def ofNum(cls) -> NumberType:
    """
    @return `number` primitive type
    """
        ...
    @classmethod
    def ofStr(cls) -> StringType:
    """
    @return `string` primitive type
    """
        ...
    def assignableFromTypes(self) -> Union[Array[PrimitiveType]]:
    """
    Return a list of primitive types whose values can be assigned into this type.
    
    For example, `long.assignableTypes()` return an array including `int` because can be safely be assigned to `long`.
    
    @see #isAssignableFrom
    """
        ...
    def boxedTypeName(self) -> str:
    """
    Get the type name of the boxed type for this primitive type.
    
    @see ValueType#isBoxedPrimitive
    @see ValueType#unboxType
    """
        ...
    def minValue(self) -> Union[Any]:
    """
    Get the smallest (negative for signed values) value representable by this fixed-size numeric type. For non-numeric
    types, it is null.
     - `int`: -2⁶³ (-9,223,372,036,854,775,808)
     - `int32`: -2³¹ (-2,147,483,648)
     - `byte`: -2⁷ (-128)
     - `char`: 0
     - `double`: -1.8 × 10³⁰⁸
     - `float`: -3.4 × 10³⁸
     - `datetime`: Jan. 1, 1583 (earlier values can be created, but are outside the ISO 8601 spec)
    
    Note that this is only relevant for fixed-size numeric types; `decimal` has no a priori limit.
    """
        ...
    def maxValue(self) -> Union[Any]:
    """
    Get the largest value representable by this fixed-size numeric type. For non-numeric types, it is null.
     - `int`: 2⁶³-1 (9,223,372,036,854,775,807)
     - `int32`: 2³¹-1 (2,147,483,647)
     - `byte`: 2⁷-1 (127)
     - `char`: U+10FFFF
     - `double`: 1.8 × 10³⁰⁸
     - `float`: 3.4 × 10³⁸
     - `datetime`: Dec. 31, 9999 (later values can be created, but are outside the ISO 8601 spec)
    
    Note that this is only relevant for fixed-size numeric types; `decimal` has no a priori limit.
    """
        ...
    @classmethod
    def guessTypeRestrictions(cls, value: Any=None, restrictions: Array[ValueType]=None) -> Union[PrimitiveType]:
    """
    Guess which primitive type from the restriction list a value fits most closely.
    For null values or when no primitive type matches, return null.
    
    Values in the restriction list should be primitive types or boxed primitive (reference) types.
    Other types are skipped. If there are no appropriate types in the list, null is returned.
    
    If the natural type of the value (using #guessType) appears in the list, that one is returned.
    Otherwise, matching (using #isAssignable) is attempted to each of the types in the list
    and the first one that succeeds is returned.
    
    This makes the order of types significant in cases where values can be accepted by
    multiple types, in particular the numeric types in JavaScript.
    
    @param value value to examine
    @param restrictions list of value types to match against
    @return matched primitive type or null
    
    @see guessType
    @see isAssignable
    """
        ...
    def serType(self) -> Union[Type]:
    """
    @return serialization type which is represented by this primitive.
    
    @see #serializedType
    """
        ...
    def enumType(self) -> Union[Type]:
    """
    @return enum type that declares the values that are constraints for values of this primitive type.
    
    @see Enum
    """
        ...
    @classmethod
    def all(cls) -> Union[Array[PrimitiveType]]:
    """
    Return a list of all the canonical primitive types.
    """
        ...
    @classmethod
    def forName(cls, name: str, failIfMissing: bool=None) -> Union[PrimitiveType]:
    """
    Get the primitive type that corresponds to the specified string. The canonical name is matched, along with a few
    natural aliases (such as "integer" for "int").
    
    @see name
    """
        ...
    def visitPrimitive(self, visitor: Any) -> Union[T]:
    """
    Calls specific method on primitive visitor based on instance of this primitive type.
    """
        ...
    def keyword(self) -> Union[str]:
    """
    @return null because {@link InheritedValueType} does not have a keyword
    """
        ...
    def isWild(self, baseDeclaration: ValueType=None, usage: str=None) -> bool:
    """
    Determines whether this primitive value type should be defined wild when translated java in the context it is defined.
    """
        ...
    def anonymize(self, input: E, model: Anonymizer.Model) -> Union[E]:
    """
    @return an anonymized value based on the provided {@link Anonymizer.Model} and input. The input may or may not be
    used in the anonymization. Also, see {@link Anonymizer.anonymize} and {@link Collection.anonymize} to anonymize
    different kinds of data in C3 Type System. Internally, {@link Anonymizer.Model.anonFunc} is used to anonymize the
    value.
    
    @see Anonymizer.anonymize
    @see Collection.anonymize
    @see Anonymizer.Model.anonFunc
    """
        ...
    def dereferenceSerialized(self) -> Union[Type]:
    """
    If this primitive represents the serialization of a type, return that type.
    
    @see #serializedType
    """
        ...
    def subSecondPrecision(self) -> int:
    """
    The inherent sub-second precision of this DateTime instance as decimal digits. For example, 0 indicates only
    seconds and 3 indicates milliseconds.
    """
        ...
    def isArbitraryZone(self) -> bool:
    """
    If this DateTimeType can represent an arbitrary time zone.
    """
        ...

