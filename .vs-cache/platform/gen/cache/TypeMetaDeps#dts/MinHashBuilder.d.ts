// TypeScript definitions for the C3 type MinHashBuilder

/**
 * Builder of a MinHash data structure.
 *
 * @see MinHash
 * @see MinHashSpec
 *
 * @remarks this represents a value passed to a method that expects an instance of MinHashBuilder
 */
declare interface IMinHashBuilder {
}

/**
 * Builder of a MinHash data structure.
 *
 * @see MinHash
 * @see MinHashSpec
 *
 * @remarks this represents a made instance of MinHashBuilder
 */
declare class MinHashBuilder {

  /**
   * Construct an instance with initial state.
   */
  static make(): MinHashBuilder;

  /**
   * Instantiates new builder with initial stats
   */
  static make(initial: any): MinHashBuilder | null;

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
  replaceType(old: Type, new_: Type): MinHashBuilder;

  /**
   * Updates statistics based on a given value
   */
  add(value: any): MinHashBuilder;

  /**
   * Updates statistics based on a given string value
   */
  add(str: string | null): MinHashBuilder;

  /**
   * Updates statistics based on a given datetime value
   */
  add(dt: DateTime | null): MinHashBuilder;

  /**
   * Updates statistics based on a given numeric value
   */
  add(num: number | null): MinHashBuilder;

  /**
   * Updates statistics based on a given boolean value
   */
  add(bool: boolean | null): MinHashBuilder;

  /**
   * Updates statistics based on a given json value
   */
  add(jsn: any | null): MinHashBuilder;

  /**
   * Updates statistics based on a given Obj value
   */
  add(obj: Obj | null): MinHashBuilder;

  /**
   * Updates statistics based on a given Collection value
   */
  add(obj: Collection<any> | null): MinHashBuilder;

  /**
   * Update statistics based on all elements from a given collection
   */
  addAll(e: Collection<any> | null): MinHashBuilder;

  /**
   * Updates statistics based on a null value
   */
  addNull(): MinHashBuilder;

  /**
   * Builds instance of stats based on current state
   */
  build(): MinHash;

  /**
   * Type of stats this builder is constructing
   */
  statsType(): Type;
}

