// TypeScript definitions for the C3 type Type

/**
 * Type objects contain information about defined types.  I.e., metadata is used to describe the declared types provided
 * by the platform or defined for an application.
 *
 * Types are declared in C3 DSL files (`*.c3typ`) in much the same way classes are declared in object-oriented
 * languages. A type is a single logical structure that defines a specific part of a "model." For example, a vehicle
 * model might have types corresponding to the chassis, the engine, the wheels, etc.
 *
 * Types can "mix in" other types, including multiple other types. Composition is a key aspect of types and we prefer
 * types to be relatively small with natural groupings separated into logical features that are more naturally
 * reused. For example, the state of having a name is declared by {@link WithType} so any type that wants that same
 * feature can `mixin WithType`. It's also easier for implementations because they don't have to know about every
 * type that happens to have a name, they just need to know about **WithType**.
 *
 * For introspecting the structure of a type, one uses the type's {@link TypeMeta}. This provides information about
 * all aspects of the type declaration. For example, the type's name is accessed with `type.meta().name()`.
 *
 * Type files may also reference and declare inner types:
 * ```type
 * type Bird {
 *   beak: !Bird.Beak
 * }
 * ```
 *
 * ```type
 * type Bird.Beak {
 *   specialization: !string enum Bird.Beak.Specialization
 * }
 * ```
 *
 * ```type
 * enum type Bird.Beak.Specialization { INSECTS, SEEDS, MEAT, GENERAL }
 * ```
 *
 * These three files create three types, globally accessible through their full paths:
 *  - Bird
 *  - Bird.Beak
 *  - Bird.Beak.Specialization
 *
 * What's more important is that this organization helps keep the global namespace uncluttered.
 *
 * Types can be modified in various ways:
 *  - {@link TypeMeta#declaredAbstract abstract} - this type itself cannot be instantiated
 *  - {@link TypeMeta#declaredPrivate private} - type should not be used outside its declaring package
 *  - {@link TypeMeta#declaredFinal final} - none of the fields or methods on this type may be changed by mixins
 *  - {@link TypeMeta#declaredNotMixable not mixable} - type may not be used as a mixin
 *  - {@link TypeMeta#declaredNotRemixable not remixable} - type may not be remixed
 *  - {@link TypeMeta#declaredEntity entity} - type may be persisted using standard mechanisms
 *  - {@link TypeMeta#declaredExtendable extendable} - types that `extend` this one are stored in same DB tables
 *  - {@link TypeMeta#declaredNotExtendable not extendable} - type may not be further extended
 *  - {@link TypeMeta#declaredRemix remix} - type adds to a type declared in a dependent package
 *  - {@link TypeMeta#declaredEnum enum} - type defines a set of constant values (an enumeration)
 *  - {@link TypeMeta#declaredDuck duck} - type defines additional behavior when its mixins are used together
 *  - {@link TypeMeta#declaredUnionAlts union} - type is an alias for two or more other value types
 *
 * @see TypeMeta
 *
 * @remarks this represents a value passed to a method that expects an instance of Type
 */
declare interface IType {
}

/**
 * Type objects contain information about defined types.  I.e., metadata is used to describe the declared types provided
 * by the platform or defined for an application.
 *
 * Types are declared in C3 DSL files (`*.c3typ`) in much the same way classes are declared in object-oriented
 * languages. A type is a single logical structure that defines a specific part of a "model." For example, a vehicle
 * model might have types corresponding to the chassis, the engine, the wheels, etc.
 *
 * Types can "mix in" other types, including multiple other types. Composition is a key aspect of types and we prefer
 * types to be relatively small with natural groupings separated into logical features that are more naturally
 * reused. For example, the state of having a name is declared by {@link WithType} so any type that wants that same
 * feature can `mixin WithType`. It's also easier for implementations because they don't have to know about every
 * type that happens to have a name, they just need to know about **WithType**.
 *
 * For introspecting the structure of a type, one uses the type's {@link TypeMeta}. This provides information about
 * all aspects of the type declaration. For example, the type's name is accessed with `type.meta().name()`.
 *
 * Type files may also reference and declare inner types:
 * ```type
 * type Bird {
 *   beak: !Bird.Beak
 * }
 * ```
 *
 * ```type
 * type Bird.Beak {
 *   specialization: !string enum Bird.Beak.Specialization
 * }
 * ```
 *
 * ```type
 * enum type Bird.Beak.Specialization { INSECTS, SEEDS, MEAT, GENERAL }
 * ```
 *
 * These three files create three types, globally accessible through their full paths:
 *  - Bird
 *  - Bird.Beak
 *  - Bird.Beak.Specialization
 *
 * What's more important is that this organization helps keep the global namespace uncluttered.
 *
 * Types can be modified in various ways:
 *  - {@link TypeMeta#declaredAbstract abstract} - this type itself cannot be instantiated
 *  - {@link TypeMeta#declaredPrivate private} - type should not be used outside its declaring package
 *  - {@link TypeMeta#declaredFinal final} - none of the fields or methods on this type may be changed by mixins
 *  - {@link TypeMeta#declaredNotMixable not mixable} - type may not be used as a mixin
 *  - {@link TypeMeta#declaredNotRemixable not remixable} - type may not be remixed
 *  - {@link TypeMeta#declaredEntity entity} - type may be persisted using standard mechanisms
 *  - {@link TypeMeta#declaredExtendable extendable} - types that `extend` this one are stored in same DB tables
 *  - {@link TypeMeta#declaredNotExtendable not extendable} - type may not be further extended
 *  - {@link TypeMeta#declaredRemix remix} - type adds to a type declared in a dependent package
 *  - {@link TypeMeta#declaredEnum enum} - type defines a set of constant values (an enumeration)
 *  - {@link TypeMeta#declaredDuck duck} - type defines additional behavior when its mixins are used together
 *  - {@link TypeMeta#declaredUnionAlts union} - type is an alias for two or more other value types
 *
 * @see TypeMeta
 *
 * @remarks this represents a made instance of Type
 */
declare class Type {

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): Type | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Type | null;

  /**
   * Convert the internal object representation to a JSON object. By default (i.e. with no arguments) the result will
   * contain no type information.
   *
   * @see #toTypedJson
   * @see serdeser.c3doc
   * @see JsonType
   */
  toJson(): any;

  /**
   * Convert the internal object representation to a _typed_ JSON object.
   * @param omitTopLevelType
   *        Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
   *        the outer level of the produced json.
   * @param runtime
   *        If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
   *        performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
   *
   *
   * @return JSON object representation
   *
   * @see #fromJson
   * @see #toJson
   * @see serdeser.c3doc
   * @see JsonType
   */
  toTypedJson(omitTopLevelType?: boolean, actionRequirement?: string | null): any;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an object of the appropriate type (which may
   * be  a type that mixes in the type on which it is called). This means that the resulting object's type will be isA
   * the called-on type, but perhaps not identical. In particular, `fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): Type | null;

  /**
   * Deserialize a Type within a given {@link Pkg}.
   *
   * @param json
   *    Can either be a JsonObject with field "meta" containing serialized {@link TypeMeta} which represents an
   *    anonymous type or JsonText referring to an existing type in provided pkg by name.
   * @param pkg
   *    {@link Pkg} where all ReferenceTypes will be resolved.
   * @return constructed Type
   */
  static fromJson(json: any | null, pkg?: Pkg | null): Type | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromJsonString` works for any actual
   * type and will return an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): Type | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual
   * type and will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): Type | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Type | null;

  /**
   * The name of this instance.
   */
  cacheKey(): string | null;

  /**
   * Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
   * null may be returned. The implementation must be available within the browser (typically `js-client`).
   */
  renderer(): HtmlRenderer | null;

  /**
   * Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
   * there is a slight possibility that two objects with the same fingerprint will actually differ.
   *
   * The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
   * {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
   * unless the allIdentifiedRefFields option is specified.
   *
   * If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
   * However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
   *
   * @param allIdentifiedRefFields
   *           if `true`, fingerprint individual fields of persistable references, not just the `id`
   * @param trackRecursiveRefs
   *           if `true`, a set of referenced objects is maintained to avoid infinite recursion
   * @param traversedRefs
   *           only considered together with trackRecursiveRefs and if provided then all traversed references are
   *           checked against and added to it
   * @return integer fingerprint
   *
   * @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
   */
  fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): number;

  /**
   * The name of this type. If a generic type was resolved using bindings specified in the name, the name may include
   * those bindings.
   *
   * @see TypeMeta#qname
   * @see TypeMeta#prototypeName
   */
  name(): string | null;

  /**
   * @return metadata for this type
   */
  meta(): TypeMeta;

  /**
   * Produce a calling proxy that represents the content of all this type's mixins, but not the type itself. This is
   * useful for redispatching **static** methods reimplemented on this type to a parent implementation:
   * ```js
   * function sum(a, b) {
   *   return Math.max(0, this.super().sum(a, b));
   * }
   * ```
   * To redispatch **member** methods, see {@link WithType#super}. For static methods, `this` is the type instance.
   *
   * Note that this not the same as the language-specific `super` keyword because it works through the type system and
   * supports multiple mixins. It behaves like the Python `super()` function, except called on the type rather than
   * globally.
   *
   * If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
   * This can be used to create a local implementation "around" the server implementation for additional caching or
   * other local state management.
   *
   * @param mixin if specified, this mixin is used instead or an error is thrown
   * @return "super" calling proxy for this type
   *
   * @see WithType.super
   */
  super(mixin?: Type | null): any;

  /**
   * @return Logger for this type
   */
  get log(): Logger;
}

