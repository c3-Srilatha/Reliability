// TypeScript definitions for the C3 type StatsBuilder

/**
 * Base type for exact or approximate statistics builder.
 *
 * @remarks this represents a value passed to a method that expects an instance of StatsBuilder
 */
declare interface IStatsBuilder<S, B> {
}

/**
 * Base type for exact or approximate statistics builder.
 *
 * @remarks this represents a made instance of StatsBuilder
 */
declare class StatsBuilder<S, B> {

  /**
   * Construct an instance with initial state.
   */
  static make(): StatsBuilder<S, B>;

  /**
   * Instantiates new builder with initial stats
   */
  static make(initial: any): B | null;

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
  replaceType(old: Type, new_: Type): StatsBuilder<S, B>;

  /**
   * Updates statistics based on a given value
   */
  add(value: any): B;

  /**
   * Updates statistics based on a given string value
   */
  add(str: string | null): B;

  /**
   * Updates statistics based on a given datetime value
   */
  add(dt: DateTime | null): B;

  /**
   * Updates statistics based on a given numeric value
   */
  add(num: number | null): B;

  /**
   * Updates statistics based on a given boolean value
   */
  add(bool: boolean | null): B;

  /**
   * Updates statistics based on a given json value
   */
  add(jsn: any | null): B;

  /**
   * Updates statistics based on a given Obj value
   */
  add(obj: Obj | null): B;

  /**
   * Updates statistics based on a given Collection value
   */
  add(obj: Collection<any> | null): B;

  /**
   * Update statistics based on all elements from a given collection
   */
  addAll(e: Collection<any> | null): B;

  /**
   * Updates statistics based on a null value
   */
  addNull(): B;

  /**
   * Builds instance of stats based on current state
   */
  build(): S;

  /**
   * Type of stats this builder is constructing
   */
  statsType(): Type;
}

