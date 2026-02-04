// TypeScript definitions for the C3 type HashCodeFingerprint

/**
 * A hash code fingerprint is a integer value, computed much like a Java hashCode, except using 64 bits.
 *
 * @see https://en.wikipedia.org/wiki/Hash_function
 * @see HashFingerprint
 *
 * @remarks this represents a value passed to a method that expects an instance of HashCodeFingerprint
 */
declare interface IHashCodeFingerprint {

  /**
   * The computed fingerprint value.
   */
  value: number;
}

/**
 * A hash code fingerprint is a integer value, computed much like a Java hashCode, except using 64 bits.
 *
 * @see https://en.wikipedia.org/wiki/Hash_function
 * @see HashFingerprint
 *
 * @remarks this represents a made instance of HashCodeFingerprint
 */
declare class HashCodeFingerprint {

  /**
   * The computed fingerprint value.
   */
  value: number;
  withValue(value: number): HashCodeFingerprint;

  /**
   * Construct an instance with initial state.
   */
  static make(): HashCodeFingerprint;

  /**
   * Returns `int` hash code of the the provided value.
   *
   * @param allIdentifiedRefFields
   *        whether to include reference field values present in memory
   * @param trackRecursiveRefs
   *        whether to track references to avoid infinite recursion on cyclic structures
   * @param traversedRefs
   *        previously traversed references as natural mutable collection
   * @return cumulative fingerprint
   *
   * @see HashCodeFingerprint
   */
  static longHashCode(value: any, allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): number;

  /**
   * Creates a new `int` fingerprint based on typical algorithm used for Java `hashCode()`.
   */
  static longHashCode(): HashCodeFingerprint;

  /**
   * Creates a new {@link MD5} based `string` fingerprint.
   */
  static md5(): HashFingerprint;

  /**
   * Returns `string` hash of the the provided value.
   *
   * @param allIdentifiedRefFields
   *        whether to include reference field values present in memory
   * @param trackRecursiveRefs
   *        whether to track references to avoid infinite recursion on cyclic structures
   * @param traversedRefs
   *        previously traversed references as natural mutable collection
   * @return cumulative fingerprint
   *
   * @see HashFingerprint
   */
  static md5(value: any, allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): string;

  /**
   * Updates (mutates) instance of this fingerprint by adding the provided value.
   */
  add(value: number): HashCodeFingerprint;

  /**
   * Updates (mutates) instance of this fingerprint by adding the provided value.
   */
  add(value: number): HashCodeFingerprint;

  /**
   * Updates (mutates) instance of this fingerprint by adding the provided value.
   */
  add(value: any): HashCodeFingerprint;

  /**
   * Updates (mutates) instance of this fingerprint by adding the provided values.
   */
  addAll(values: C3.Array<any> | null): HashCodeFingerprint;

  /**
   * @returns `int` representation of this fingerprint; may be "weaker" then string representation.
   */
  toInt(): number;

  /**
   * @returns `string` representation of this fingerprint.
   */
  toString(): string | null;

  /**
   * Calculate a fingerprint of any single value.
   *
   * @param allIdentifiedRefFields
   *        whether to include reference field values present in memory
   * @param trackRecursiveRefs
   *        whether to track references to avoid infinite recursion on cyclic structures
   * @param traversedRefs
   *        previously traversed references as natural mutable collection
   * @return cumulative fingerprint
   */
  static fingerprint(v: any, allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): number;

  /**
   * Compute the fingerprint of a binary data value.
   */
  static fingerprint(v: any | null): number;

  /**
   * Compute the fingerprint of a boolean value.
   */
  static fingerprint(v: boolean): number;

  /**
   * Compute the fingerprint of a date/time value.
   */
  static fingerprint(v: DateTime): number;

  /**
   * Compute the fingerprint of a JSON structure.
   */
  static fingerprint(v: any): number;

  /**
   * Compute the fingerprint of a numeric value. For small integer values, this will be that value, but for larger
   * or inexact values, it will be just a bit pattern.
   */
  static fingerprint(v: number): number;

  /**
   * Compute the fingerprint of a string value. For short strings, this will match the Java's `hashCode()`.
   */
  static fingerprint(v: string | null): number;

  /**
   * Compute the fingerprint of two strings concatenated with a separator, without allocating an intermediate string.
   * Equivalent to `fingerprint(prefix + separator + suffix)` but avoids memory allocation.
   * Useful for computing fingerprints of composite keys like "pkgName/filePath".
   *
   * @param prefix
   *          the first string (e.g., package name)
   * @param separator
   *          the separator character (e.g., '/')
   * @param suffix
   *          the second string (e.g., file path)
   * @return the fingerprint of the concatenated string
   */
  static compute(prefix: string | null, separator: number, suffix: string | null): number;

  /**
   * Get the fingerprint of any null value.
   */
  static nullFingerprint(): number;

  /**
   * Accumulate two fingerprint values, "adding" the latter to the former. Note that this may not actually be addition.
   */
  static accumulate(prior: number, add: number): number;

  /**
   * Accumulate three fingerprint values, "adding" them together. Note that this may not actually be addition.
   */
  static accumulate(prior: number, add1: number, add2: number): number;
}

