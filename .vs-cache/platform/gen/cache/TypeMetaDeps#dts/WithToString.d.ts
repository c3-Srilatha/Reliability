// TypeScript definitions for the C3 type WithToString

/**
 * Base type for types that implement custom string representation. Note that this is slightly different then
 * "serialization" as there is no guarantee that content can be reconstructed from this string.
 *
 * @see StringSerializable
 * @see Serializable
 *
 * @remarks this represents a value passed to a method that expects an instance of WithToString
 */
declare interface IWithToString {
}

/**
 * Base type for types that implement custom string representation. Note that this is slightly different then
 * "serialization" as there is no guarantee that content can be reconstructed from this string.
 *
 * @see StringSerializable
 * @see Serializable
 *
 * @remarks this represents a made instance of WithToString
 */
declare class WithToString {

  /**
   * String-based representation of instance of this type.
   */
  toString(): string | null;
}

