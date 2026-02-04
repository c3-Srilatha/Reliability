// TypeScript definitions for the C3 type BooleanDigestBuilder

/**
 * @remarks this represents a value passed to a method that expects an instance of BooleanDigestBuilder
 */
declare interface IBooleanDigestBuilder {
}

/**
 * @remarks this represents a made instance of BooleanDigestBuilder
 */
declare class BooleanDigestBuilder {

  /**
   * Construct an instance with initial state.
   */
  static make(): BooleanDigestBuilder;

  /**
   * Instantiates new builder with initial stats
   */
  static make(initial: any): BooleanDigestBuilder | null;

  /**
   * C3 Type of this instance.
   */
  type(): Type;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): BooleanDigestBuilder;

  /**
   * Updates statistics based on a given value
   */
  add(value: any): BooleanDigestBuilder;

  /**
   * Updates statistics based on a given string value
   */
  add(str: string | null): BooleanDigestBuilder;

  /**
   * Updates statistics based on a given datetime value
   */
  add(dt: DateTime | null): BooleanDigestBuilder;

  /**
   * Updates statistics based on a given numeric value
   */
  add(num: number | null): BooleanDigestBuilder;

  /**
   * Updates statistics based on a given boolean value
   */
  add(bool: boolean | null): BooleanDigestBuilder;

  /**
   * Updates statistics based on a given json value
   */
  add(jsn: any | null): BooleanDigestBuilder;

  /**
   * Updates statistics based on a given Obj value
   */
  add(obj: Obj | null): BooleanDigestBuilder;

  /**
   * Updates statistics based on a given Collection value
   */
  add(obj: Collection<any> | null): BooleanDigestBuilder;

  /**
   * Update statistics based on all elements from a given collection
   */
  addAll(e: Collection<any> | null): BooleanDigestBuilder;

  /**
   * Updates statistics based on a null value
   */
  addNull(): BooleanDigestBuilder;

  /**
   * Builds instance of stats based on current state
   */
  build(): BooleanDigest;

  /**
   * Type of stats this builder is constructing
   */
  statsType(): Type;
}

