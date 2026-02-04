#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TypeMeta import TypeMeta
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Pkg import Pkg
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.Logger import Logger

# Python definitions for the C3 type Type


class Type(StringSerializable, Serializable, WithCacheKey, HtmlRenderable, Fingerprintable, Value):
    """
    Type objects contain information about defined types.  I.e., metadata is used to describe the declared types provided
    by the platform or defined for an application.
    
    Types are declared in C3 DSL files (`*.c3typ`) in much the same way classes are declared in object-oriented
    languages. A type is a single logical structure that defines a specific part of a "model." For example, a vehicle
    model might have types corresponding to the chassis, the engine, the wheels, etc.
    
    Types can "mix in" other types, including multiple other types. Composition is a key aspect of types and we prefer
    types to be relatively small with natural groupings separated into logical features that are more naturally
    reused. For example, the state of having a name is declared by {@link WithType} so any type that wants that same
    feature can `mixin WithType`. It's also easier for implementations because they don't have to know about every
    type that happens to have a name, they just need to know about **WithType**.
    
    For introspecting the structure of a type, one uses the type's {@link TypeMeta}. This provides information about
    all aspects of the type declaration. For example, the type's name is accessed with `type.meta().name()`.
    
    Type files may also reference and declare inner types:
    ```type
    type Bird {
      beak: !Bird.Beak
    }
    ```
    
    ```type
    type Bird.Beak {
      specialization: !string enum Bird.Beak.Specialization
    }
    ```
    
    ```type
    enum type Bird.Beak.Specialization { INSECTS, SEEDS, MEAT, GENERAL }
    ```
    
    These three files create three types, globally accessible through their full paths:
     - Bird
     - Bird.Beak
     - Bird.Beak.Specialization
    
    What's more important is that this organization helps keep the global namespace uncluttered.
    
    Types can be modified in various ways:
     - {@link TypeMeta#declaredAbstract abstract} - this type itself cannot be instantiated
     - {@link TypeMeta#declaredPrivate private} - type should not be used outside its declaring package
     - {@link TypeMeta#declaredFinal final} - none of the fields or methods on this type may be changed by mixins
     - {@link TypeMeta#declaredNotMixable not mixable} - type may not be used as a mixin
     - {@link TypeMeta#declaredNotRemixable not remixable} - type may not be remixed
     - {@link TypeMeta#declaredEntity entity} - type may be persisted using standard mechanisms
     - {@link TypeMeta#declaredExtendable extendable} - types that `extend` this one are stored in same DB tables
     - {@link TypeMeta#declaredNotExtendable not extendable} - type may not be further extended
     - {@link TypeMeta#declaredRemix remix} - type adds to a type declared in a dependent package
     - {@link TypeMeta#declaredEnum enum} - type defines a set of constant values (an enumeration)
     - {@link TypeMeta#declaredDuck duck} - type defines additional behavior when its mixins are used together
     - {@link TypeMeta#declaredUnionAlts union} - type is an alias for two or more other value types
    
    @see TypeMeta
    
    @remarks this represents a made instance of Type
    """
    def __init__(self) -> None: ...

    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[Type]:
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
    def make(cls, s: str) -> Union[Type]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object. By default (i.e. with no arguments) the result will
    contain no type information.
    
    @see #toTypedJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
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
    def toJsonString(self) -> str:
    """
    Convert the internal object representation to an _untyped_ serialized JSON string. This is the equivalent of
    `toJson().serialize()`.
    
    @return JSON object as string
    """
        ...
    def toTypedJsonString(self) -> str:
    """
    Convert the internal object representation to a _typed_ serialized JSON string. This is the equivalent of
    `toTypedJson().serialize()`.
    
    @return JSON object as string
    """
        ...
    def toJsString(self) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    def toXmlString(self) -> str:
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
    @overload
    @classmethod
    def fromJson(cls, json: any) -> Union[Type]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an object of the appropriate type (which may
    be  a type that mixes in the type on which it is called). This means that the resulting object's type will be isA
    the called-on type, but perhaps not identical. In particular, `fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @overload
    @classmethod
    def fromJson(cls, json: any, pkg: Pkg=None) -> Union[Type]:
    """
    Deserialize a Type within a given {@link Pkg}.
    
    @param json
       Can either be a JsonObject with field "meta" containing serialized {@link TypeMeta} which represents an
       anonymous type or JsonText referring to an existing type in provided pkg by name.
    @param pkg
       {@link Pkg} where all ReferenceTypes will be resolved.
    @return constructed Type
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[Type]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromJsonString` works for any actual
    type and will return an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[Type]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual
    type and will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Type]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    def cacheKey(self) -> Union[str]:
    """
    The name of this instance.
    """
        ...
    def renderer(self) -> Union[HtmlRenderer]:
    """
    Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
    null may be returned. The implementation must be available within the browser (typically `js-client`).
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
    def name(self) -> Union[str]:
    """
    The name of this type. If a generic type was resolved using bindings specified in the name, the name may include
    those bindings.
    
    @see TypeMeta#qname
    @see TypeMeta#prototypeName
    """
        ...
    def meta(self) -> TypeMeta:
    """
    @return metadata for this type
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
    Produce a calling proxy that represents the content of all this type's mixins, but not the type itself. This is
    useful for redispatching **static** methods reimplemented on this type to a parent implementation:
    ```js
    function sum(a, b) {
      return Math.max(0, this.super().sum(a, b));
    }
    ```
    To redispatch **member** methods, see {@link WithType#super}. For static methods, `this` is the type instance.
    
    Note that this not the same as the language-specific `super` keyword because it works through the type system and
    supports multiple mixins. It behaves like the Python `super()` function, except called on the type rather than
    globally.
    
    If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
    This can be used to create a local implementation "around" the server implementation for additional caching or
    other local state management.
    
    @param mixin if specified, this mixin is used instead or an error is thrown
    @return "super" calling proxy for this type
    
    @see WithType.super
    """
        ...
    def log(self) -> Logger:
    """
    @return Logger for this type
    """
        ...

