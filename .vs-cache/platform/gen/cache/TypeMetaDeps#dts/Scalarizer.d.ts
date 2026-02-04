// TypeScript definitions for the C3 type Scalarizer

/**
 * Utility to produce one or more scalar values for a value. This allows complex values to be treated as scalars,
 * possible in multiple dimensions. This makes it possible to use machine learning techniques to analyze and generate
 * arbitrary values, operating only with matrices of doubles.
 *
 * Note that some values of theoretically unbounded range will be scalarized to match a "reasonable" range. For example,
 * `decimal` values are represented as two doubles, the value (15 digits of precision) and the scale.
 *
 * Some non-numeric values can be scalarized; `boolean` and `char` have natural single double representations and
 * the `datetime` variants can be represented as 3-7 doubles (taking each component as a dimension). Any enum value
 * can be represented as a single double.
 *
 * Notable primitive types that cannot be scalarized are `string` and `binary`. Other techniques can be used to
 * learn them (Markov chains, LSTMs), but those are not reducible to a small number of dimensions so are not covered
 * here.
 *
 * @remarks this represents a value passed to a method that expects an instance of Scalarizer
 */
declare interface IScalarizer {
}

/**
 * Utility to produce one or more scalar values for a value. This allows complex values to be treated as scalars,
 * possible in multiple dimensions. This makes it possible to use machine learning techniques to analyze and generate
 * arbitrary values, operating only with matrices of doubles.
 *
 * Note that some values of theoretically unbounded range will be scalarized to match a "reasonable" range. For example,
 * `decimal` values are represented as two doubles, the value (15 digits of precision) and the scale.
 *
 * Some non-numeric values can be scalarized; `boolean` and `char` have natural single double representations and
 * the `datetime` variants can be represented as 3-7 doubles (taking each component as a dimension). Any enum value
 * can be represented as a single double.
 *
 * Notable primitive types that cannot be scalarized are `string` and `binary`. Other techniques can be used to
 * learn them (Markov chains, LSTMs), but those are not reducible to a small number of dimensions so are not covered
 * here.
 *
 * @remarks this represents a made instance of Scalarizer
 */
declare class Scalarizer {

  /**
   * Return true if this value type is a primitive value that is naturally a scalar. Numbers are naturally scalars.
   * Numeric values that are enums are _not_ naturally scalars, since they are made of discrete values.
   *
   * Even a type that is naturally a scalar may be represented as multiple values (dimensions). Notably `long int` and
   * `decimal` can't be fully captured by a single double.
   */
  static isNaturalScalar(type: ValueType): boolean;

  /**
   * Return true if this value type is a value that can be scalarized. Natural scalars of course qualify, as well as
   * Objs with fields that are purely natural scalars and enumerated values.
   */
  static isScalarizable(type: ValueType): boolean;

  /**
   * Return the number of dimensions into which the type will be scalarized. If this type is not scalarizable, the
   * return value is zero.
   */
  static scalarizedDimensions(type: ValueType): number;

  /**
   * Return the scalarized dimensions for a value. If the type is not scalarizable, the returned array is empty.
   */
  static scalarize(type: ValueType, value: any): C3.Array<number | null>;

  /**
   * Reconstruct a valid value of the specified type given the array of scalars, as returned by a call to #scalarize.
   * If the dimensions are wrong or the type is not scalarizable, an error is thrown. If any of the dimensions are out
   * of range, the nearest valid value are used.
   */
  static reconstruct(type: ValueType, scalars: C3.Array<number | null>): any;
}

