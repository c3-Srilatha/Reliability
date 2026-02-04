// TypeScript definitions for the C3 type StringSerializable

/**
 * Base type for types that implement custom string serialization. This is naturally used with the `serialized`
 * syntax when values are to be stored as strings, but have inner structure that can be represented by a type.
 * For example: `string serialized Url` indicates that a value is passed as a string, but represents a {@link Url}.
 *
 * Note that values declared as `string serialized` aren't necessary canonicalized:
 *  - a serialized value must work with fromString
 *  - it may not be the form produced by toString
 *  - it should not be compared/found _as_ a string
 *
 * @see serdeser.c3doc
 *
 * @remarks this represents a value passed to a method that expects an instance of StringSerializable
 */
declare interface IStringSerializable {
}

/**
 * Base type for types that implement custom string serialization. This is naturally used with the `serialized`
 * syntax when values are to be stored as strings, but have inner structure that can be represented by a type.
 * For example: `string serialized Url` indicates that a value is passed as a string, but represents a {@link Url}.
 *
 * Note that values declared as `string serialized` aren't necessary canonicalized:
 *  - a serialized value must work with fromString
 *  - it may not be the form produced by toString
 *  - it should not be compared/found _as_ a string
 *
 * @see serdeser.c3doc
 *
 * @remarks this represents a made instance of StringSerializable
 */
declare class StringSerializable {

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
  static fromString(s: string | null): StringSerializable | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): StringSerializable | null;
}

