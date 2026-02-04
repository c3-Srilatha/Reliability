// TypeScript definitions for the C3 type HistogramBuilder

/**
 * Builder of Histogram
 * @var VT type of examined values
 *
 * @remarks this represents a value passed to a method that expects an instance of HistogramBuilder
 */
declare interface IHistogramBuilder<H> {
}

/**
 * Builder of Histogram
 * @var VT type of examined values
 *
 * @remarks this represents a made instance of HistogramBuilder
 */
declare class HistogramBuilder<H> {

  /**
   * Construct an instance with initial state.
   */
  static make(): HistogramBuilder<H>;

  /**
   * Instantiates new builder with initial stats
   */
  static make(initial: any): HistogramBuilder<H> | null;

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
  replaceType(old: Type, new_: Type): HistogramBuilder<H>;

  /**
   * Updates statistics based on a given value
   */
  add(value: any): HistogramBuilder<H>;

  /**
   * Updates statistics based on a given string value
   */
  add(str: string | null): HistogramBuilder<H>;

  /**
   * Updates statistics based on a given datetime value
   */
  add(dt: DateTime | null): HistogramBuilder<H>;

  /**
   * Updates statistics based on a given numeric value
   */
  add(num: number | null): HistogramBuilder<H>;

  /**
   * Updates statistics based on a given boolean value
   */
  add(bool: boolean | null): HistogramBuilder<H>;

  /**
   * Updates statistics based on a given json value
   */
  add(jsn: any | null): HistogramBuilder<H>;

  /**
   * Updates statistics based on a given Obj value
   */
  add(obj: Obj | null): HistogramBuilder<H>;

  /**
   * Updates statistics based on a given Collection value
   */
  add(obj: Collection<any> | null): HistogramBuilder<H>;

  /**
   * Update statistics based on all elements from a given collection
   */
  addAll(e: Collection<any> | null): HistogramBuilder<H>;

  /**
   * Updates statistics based on a null value
   */
  addNull(): HistogramBuilder<H>;

  /**
   * Intelligently builds a Histogram depending on the type of values evaluated
   */
  build(): H;

  /**
   * Type of stats this builder is constructing
   */
  statsType(): Type;

  /**
   * Builds a Histogram with a bin for all unique character evaluated
   */
  buildCharHistogram(): CharHistogram | null;

  /**
   * Builds a Numeric Histogram with bins depending on {@see HistogramSpec}
   */
  buildNumHistogram(): NumericHistogram | null;

  /**
   * Builds a 2 bins histogram that shows the ratio of true to false booleans
   */
  buildBoolHistogram(): BooleanHistogram | null;

  /**
   * @return this HistogramBuilder with the provided HistogramSpec
   */
  spec(spec?: HistogramSpec | null): HistogramBuilder<H> | null;
}

