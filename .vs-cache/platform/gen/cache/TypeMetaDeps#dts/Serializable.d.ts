// TypeScript definitions for the C3 type Serializable

/**
 * Base type for serializable values. This serialization uses {@link https://www.json.org/json-en.html JSON} format.
 *
 * Serialization must include enough information to deserialize the value as the correct type. For example,
 * {@link Obj} serialization includes the type name as "type" in the JSON object and `any` and `anyof` values are
 * serialized by boxing using the {@link Boxed} instance.
 *
 * @see StringSerializable
 * @see WithToString
 * @see serdeser.c3doc
 *
 * @remarks this represents a value passed to a method that expects an instance of Serializable
 */
declare interface ISerializable {
}

/**
 * Base type for serializable values. This serialization uses {@link https://www.json.org/json-en.html JSON} format.
 *
 * Serialization must include enough information to deserialize the value as the correct type. For example,
 * {@link Obj} serialization includes the type name as "type" in the JSON object and `any` and `anyof` values are
 * serialized by boxing using the {@link Boxed} instance.
 *
 * @see StringSerializable
 * @see WithToString
 * @see serdeser.c3doc
 *
 * @remarks this represents a made instance of Serializable
 */
declare class Serializable {

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
   * Convert the internal object representation to an _untyped_ serialized JSON string. This is the equivalent of
   * `toJson().serialize()`.
   *
   * @return JSON object as string
   */
  toJsonString(): string;

  /**
   * Convert the internal object representation to a _typed_ serialized JSON string. This is the equivalent of
   * `toTypedJson().serialize()`.
   *
   * @return JSON object as string
   */
  toTypedJsonString(): string;

  /**
   * Convert the internal object representation to a serialized JavaScript object literal.
   *
   * @return JavaScript object literal string
   */
  toJsString(): string;

  /**
   * Convert the internal object representation to a serialized XML string.
   *
   * @return XML element as string
   *
   * @see #fromXmlString
   */
  toXmlString(): string;

  /**
   * Convert the internal object representation to a string serialized representation of the object.
   *
   * @return string serialized object representation
   */
  serialize(contentType: string, toUntyped?: boolean): string | null;

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
  static fromJson(json: any | null): Serializable | null;

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
  static fromJsonString(json: string | null): Serializable | null;

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
  static fromXmlString(xml: string | null): Serializable | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Serializable | null;
}

