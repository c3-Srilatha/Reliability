// TypeScript definitions for the C3 type Num

/**
 * Helper functions for manipulating numeric values implemented in various numeric types in Java (sub-classes of
 * `Number`), `Number` in JavaScript and `int` and `float` in Python.
 *
 * @remarks this represents a value passed to a method that expects an instance of Num
 */
declare interface INum {

  /**
   * BigInteger representations of minimum and maximum values for all C3 Integer types. Used for ease of comparison,
   * eg. determining a more fine-grained data type for a BigInteger
   */
  BI_MAX_BYTE?: number | null;

  BI_MIN_BYTE?: number | null;

  BI_MAX_INT16?: number | null;

  BI_MIN_INT16?: number | null;

  BI_MAX_INT32?: number | null;

  BI_MIN_INT32?: number | null;

  BI_MAX_INT?: number | null;

  BI_MIN_INT?: number | null;

  BD_ZERO?: number | null;

  /**
   * the number of bytes in a C3 double (precision) value *
   */
  BYTES_IN_DBL: number;

  /**
   * the number of bytes in a C3 float (single precision) value *
   */
  BYTES_IN_FLOAT: number;

  /**
   * the number of bytes in a C3 int (64-bit) value *
   */
  BYTES_IN_INT: number;

  /**
   * the number of bytes in a C3 int16 (16-bit) value *
   */
  BYTES_IN_INT16: number;

  /**
   * the number of bytes in a C3 int32 (32-bit) value *
   */
  BYTES_IN_INT32: number;

  /**
   * the number of bytes in a (base 2) gibibyte: GiB
   */
  GI_BYTES: number;

  /**
   * the number of bytes in a (base 2) kibibyte: KiB
   */
  KI_BYTES: number;

  /**
   * the maximum number of decimal digits representable in a C3 int (2⁶³ ≈ 10¹⁹)
   */
  MAX_DIGITS_IN_INT: number;

  /**
   * the number of bytes in a (base 2) mebibyte: MiB
   */
  MI_BYTES: number;

  /**
   * the number of bytes in a (base 2) pebibyte: PiB
   */
  PI_BYTES: number;

  /**
   * the number of bytes in a (base 2) tebibyte: TiB
   */
  TI_BYTES: number;
}

/**
 * Helper functions for manipulating numeric values implemented in various numeric types in Java (sub-classes of
 * `Number`), `Number` in JavaScript and `int` and `float` in Python.
 *
 * @remarks this represents a made instance of Num
 */
declare class Num {

  /**
   * BigInteger representations of minimum and maximum values for all C3 Integer types. Used for ease of comparison,
   * eg. determining a more fine-grained data type for a BigInteger
   */
  readonly BI_MAX_BYTE?: number | null;
  withBI_MAX_BYTE(BI_MAX_BYTE: number | null): Num;

  readonly BI_MIN_BYTE?: number | null;
  withBI_MIN_BYTE(BI_MIN_BYTE: number | null): Num;

  readonly BI_MAX_INT16?: number | null;
  withBI_MAX_INT16(BI_MAX_INT16: number | null): Num;

  readonly BI_MIN_INT16?: number | null;
  withBI_MIN_INT16(BI_MIN_INT16: number | null): Num;

  readonly BI_MAX_INT32?: number | null;
  withBI_MAX_INT32(BI_MAX_INT32: number | null): Num;

  readonly BI_MIN_INT32?: number | null;
  withBI_MIN_INT32(BI_MIN_INT32: number | null): Num;

  readonly BI_MAX_INT?: number | null;
  withBI_MAX_INT(BI_MAX_INT: number | null): Num;

  readonly BI_MIN_INT?: number | null;
  withBI_MIN_INT(BI_MIN_INT: number | null): Num;

  readonly BD_ZERO?: number | null;
  withBD_ZERO(BD_ZERO: number | null): Num;

  /**
   * the number of bytes in a C3 double (precision) value *
   */
  readonly BYTES_IN_DBL: number;
  withBYTES_IN_DBL(BYTES_IN_DBL: number): Num;

  /**
   * the number of bytes in a C3 float (single precision) value *
   */
  readonly BYTES_IN_FLOAT: number;
  withBYTES_IN_FLOAT(BYTES_IN_FLOAT: number): Num;

  /**
   * the number of bytes in a C3 int (64-bit) value *
   */
  readonly BYTES_IN_INT: number;
  withBYTES_IN_INT(BYTES_IN_INT: number): Num;

  /**
   * the number of bytes in a C3 int16 (16-bit) value *
   */
  readonly BYTES_IN_INT16: number;
  withBYTES_IN_INT16(BYTES_IN_INT16: number): Num;

  /**
   * the number of bytes in a C3 int32 (32-bit) value *
   */
  readonly BYTES_IN_INT32: number;
  withBYTES_IN_INT32(BYTES_IN_INT32: number): Num;

  /**
   * the number of bytes in a (base 2) gibibyte: GiB
   */
  readonly GI_BYTES: number;
  withGI_BYTES(GI_BYTES: number): Num;

  /**
   * the number of bytes in a (base 2) kibibyte: KiB
   */
  readonly KI_BYTES: number;
  withKI_BYTES(KI_BYTES: number): Num;

  /**
   * the maximum number of decimal digits representable in a C3 int (2⁶³ ≈ 10¹⁹)
   */
  readonly MAX_DIGITS_IN_INT: number;
  withMAX_DIGITS_IN_INT(MAX_DIGITS_IN_INT: number): Num;

  /**
   * the number of bytes in a (base 2) mebibyte: MiB
   */
  readonly MI_BYTES: number;
  withMI_BYTES(MI_BYTES: number): Num;

  /**
   * the number of bytes in a (base 2) pebibyte: PiB
   */
  readonly PI_BYTES: number;
  withPI_BYTES(PI_BYTES: number): Num;

  /**
   * the number of bytes in a (base 2) tebibyte: TiB
   */
  readonly TI_BYTES: number;
  withTI_BYTES(TI_BYTES: number): Num;

  static myType(): Type | null;

  static myType(pkg: Pkg | null): Type | null;

  /**
   * Sum two double values, handling null values. If both operands are null, the result is null.
   */
  static addDbl(a: number | null, b: number | null): number | null;

  /**
   * Perform a binary operation on pairs of numbers of similar types. Depending on the type of the operands,
   * call one of three lambdas:
   *
   *  - `double` operands are of mixed numeric types
   *  - `long` operands are of mixed integer types
   *  - `BigDecimal` both operands are BigDecimal
   *
   *
   *
   * @param lhs
   *        left-hand-side value
   * @param rhs
   *        right-hand-side value
   * @param dbl
   *        called for mixed numeric values
   * @param lng
   *        called for mixed integer values
   * @param bdc
   *        called only for BigDecimal values
   * @return result of operation, as natural type for operands
   */
  static binop(lhs: number | null, rhs: number | null, dbl: any, lng: any, bdc: λBiFunction<number | null, number | null, number | null> | null): number | null;

  /**
   * Perform a binary operation on pairs of numbers of similar types. Depending on the type of the operands,
   * call one of two lambdas:
   *
   *  - `double` operands are of mixed numeric types
   *  - `long` operands are of mixed integer types
   *
   *
   *
   * @param lhs
   *        left-hand-side value
   * @param rhs
   *        right-hand-side value
   * @param dbl
   *        called for mixed numeric values
   * @param lng
   *        called for mixed integer values
   * @return result of operation, as natural type for operands
   */
  static binop(lhs: number | null, rhs: number | null, dbl: any, lng: any): number | null;

  /**
   * Compare to integer values.
   */
  static compare(a: number, b: number): number;

  /**
   * Compare two numeric values, handling nulls. (Nulls sort before non-null values.)
   *
   * @return 1 if a is bigger, -1 if b is bigger, and 0 if a and b are equal
   */
  static compare(a: number | null, b: number | null): number;

  /**
   * Compare two numeric values, handling nulls. (Nulls sort before non-null values.)
   *
   * @param nullIsGreater
   *        treat null values as greater
   * @return 1 if a is bigger, -1 if b is bigger, and 0 if a and b are equal
   */
  static compare(a: number | null, b: number | null, nullIsGreater?: boolean): number;

  /**
   * Produce the divisor of a double value, handling null.
   */
  static div(v: number | null, d: number): number | null;

  /**
   * Produce the divisor of a Number value with long and handling null to return a `null`.
   */
  static div(v: any, d: number): any;

  /**
   * Produce the divisor of a long value, handling null.
   */
  static div(v: number | null, d: number): number | null;

  /**
   * Produce the divisor of a Number value, handling null.
   */
  static div(v: any, d: any): any;

  /**
   * @return formatted number
   */
  static format(num: number): string | null;

  /**
   * @return formatted number
   */
  static format(num: number): string | null;

  /**
   * @see #formatBytes(long, int, String, double)
   */
  static formatBytes(bytes: number): string | null;

  /**
   * @see #formatBytes(long, int, String, double)
   */
  static formatBytes(bytes: number, precision: number): string | null;

  /**
   * @see #formatBytes(long, int, String, double)
   */
  static formatBytes(bytes: number, unit: string | null): string | null;

  /**
   * @see #formatBytes(long, int, String, double)
   */
  static formatBytes(bytes: number, unit: string | null, scale: number): string | null;

  /**
   * @see #formatBytes(long, int, String, double)
   */
  static formatBytes(bytes: number, precision: number, unit: string | null): string | null;

  /**
   * Return a natural representation of a size in bytes with specified unit and rounded to specified precision.
   * For example 123 formats as "123B". Negative values return "-". If unit is not defined, a unit will be chosen
   * appropriate to the value. If precision is not defined, the formatted number will have 3 significant figures.
   *
   * @param bytes
   *        number of bytes
   * @param precision
   *        number of digits after decimal place
   * @param unit
   *        unit for formatting
   * @param scale
   *        multiply original value with this number before formatting
   * @return formatted string
   */
  static formatBytes(bytes: number, precision: number, unit: string | null, scale: number): string | null;

  /**
   * Return a natural representation of a size in bytes with specified unit with 3 significant figures.
   * For example 123 formats as "123B". Negative values return "-". This form takes a Pair structure to
   * describe the desired unit and scale. If unit is null, a unit will be chosen appropriate to the value.
   *
   * @param bytes
   *        number of bytes
   * @param unit
   *        scale and unit for formatting
   * @return formatted string
   */
  static formatBytes(bytes: number, unit: Pair<number | null, string | null> | null): string | null;

  /**
   * Return a natural representation of a size change in bytes with three significant digits.
   *
   * @param delta
   *        change in size
   * @return formatted string
   */
  static formatBytesDelta(delta: number): string | null;

  /**
   * Return a natural representation of a size change in bytes with three significant digits.
   *
   * @param before
   *        initial size
   * @param after
   *        final size
   * @return formatted string
   */
  static formatBytesDelta(before: number, after: number): string | null;

  /**
   * @see #formatCount(long, int, String, double)
   */
  static formatCount(count: number): string | null;

  /**
   * @see #formatCount(long, int, String, double)
   */
  static formatCount(count: number, precision: number): string | null;

  /**
   * @see #formatCount(long, int, String, double)
   */
  static formatCount(count: number, unit: string | null): string | null;

  /**
   * @see #formatCount(long, int, String, double)
   */
  static formatCount(count: number, unit: string | null, scale: number): string | null;

  /**
   * @see #formatCount(long, int, String, double)
   */
  static formatCount(count: number, precision: number, unit: string | null): string | null;

  /**
   * Return a natural representation of a counting number with the specified unit and rounded to
   * the specified precision. If unit is not defined, a unit will be chosen appropriate to the value.
   * If precision is not defined, the formatted number will have 3 significant figures.
   *
   * @param count
   *        value
   * @param precision
   *        number of digits after decimal place
   * @param unit
   *        unit for formatting
   * @param scale
   *        multiply original value with this number before formatting
   * @return formatted string
   * @see #parseCount
   */
  static formatCount(count: number, precision: number, unit: string | null, scale: number): string | null;

  /**
   * Return a natural representation of a counting number with the specified unit and rounded to
   * 3 significant figures. This form takes a Pair structure to describe the desired unit and scale.
   * If unit is null, a unit will be chosen appropriate to the value.
   *
   * @param count
   *        value
   * @param unit
   *        scale and unit for formatting
   * @return formatted string
   */
  static formatCount(count: number, unit: Pair<number | null, string | null> | null): string | null;

  /**
   * Return a natural representation of a counting number with at most 3 significant figures and no tailing zeros
   * in the number. Note that these read the most naturally, but won't line up between similar values.
   */
  static formatCountShort(count: number): string | null;

  /**
   * Return a natural representation of a longer duration in milliseconds. This could be a second with two fractional
   * digits or it could be a compound value such as "3m 38.21s" or even "98d 11h 12m 13.14s". Note that the format
   * always has 100th of a second precision and accommodates arbitrary-sized duration values in a way that can be
   * displayed right-aligned:
   *
   * ```
   * | Thing  |       Elapsed |
   * |--------|---------------|
   * | Rocket |         0.01s |
   * | Plane  |        17.23s |
   * | Car    |     1m 10.45s |
   * | Turtle | 1h 20m  6.12s |
   * ```
   *
   * @param ms
   *        number of milliseconds
   * @return formatted string
   */
  static formatElapsedMs(ms: number): string | null;

  static formatElapsedNano(nano: number): string | null;

  /**
   * Return a natural representation of a longer duration in seconds. This could be a second with two fractional
   * digits or it could be a compound value such as "3m 38.21s" or even "98d 11h 12m 13.14s". Note that the format
   * always has 100th of a second precision and accommodates arbitrary-sized duration values in a way that can be
   * displayed right-aligned:
   *
   * ```
   * | Thing  |       Elapsed |
   * |--------|---------------|
   * | Rocket |         0.01s |
   * | Plane  |        17.23s |
   * | Car    |     1m 10.45s |
   * | Turtle | 1h 20m  6.12s |
   * ```
   *
   * @param secs
   *        number of seconds
   * @return formatted string
   */
  static formatElapsedS(secs: number): string | null;

  /**
   * @return formatted and space-prefixed string of specified length
   */
  static formatPadLeft(num: number, length: number): string | null;

  /**
   * eg. zeroPad(10, 3) = 010
   * zeroPad(-10, 3) = -010
   * zeroPad(10, -1) = 10
   * zeroPad(10, 1) = 10
   *
   * @return pad provided integer using provided pad character until specified length
   */
  static zeroPad(num: number, length: number): string | null;

  /**
   * Return a natural representation of a fractional value as a percentage rounded to 3 significant figures.
   *
   * @param fraction
   *        the number that will be converted to a percentage (e.g. 0.5 -> 50%)
   * @return formatted string
   */
  static formatPercent(fraction: number): string | null;

  /**
   * Return a natural representation of a fractional value as a percentage rounded to the specified precision
   *
   * @param fraction
   *        the number that will be converted to a percentage (e.g. 0.5 -> 50%)
   * @param precision
   *        number of digits after decimal place
   * @return formatted string
   */
  static formatPercent(fraction: number, precision: number): string | null;

  /**
   * Return a natural representation of a multiplier (ratio numerator) with three significant digits.
   *
   * @param times
   *        value
   * @return formatted string
   */
  static formatTimes(times: number): string | null;

  /**
   * Return a natural representation of a multiplier (ratio numerator) with three significant digits.
   *
   *
   * This form takes the units as an argument. If null, a unit will be chosen appropriate to the value.
   *
   * @param times
   *        value
   * @param unit
   *        scale and unit for formatting
   * @return formatted string
   */
  static formatTimes(times: number, unit: Pair<number | null, string | null> | null): string | null;

  /**
   * @see #formatTimingMs(long, int, String, double)
   */
  static formatTimingMs(ms: number): string | null;

  /**
   * @see #formatTimingMs(long, int, String, double)
   */
  static formatTimingMs(ms: number, precision: number): string | null;

  /**
   * @see #formatTimingMs(long, int, String, double)
   */
  static formatTimingMs(ms: number, unit: string | null): string | null;

  /**
   * @see #formatTimingMs(long, int, String, double)
   */
  static formatTimingMs(ms: number, unit: string | null, scale: number): string | null;

  /**
   * @see #formatTimingMs(long, int, String, double)
   */
  static formatTimingMs(ms: number, precision: number, unit: string | null): string | null;

  /**
   * Return a natural representation of a duration in milliseconds with the specified unit and rounded to
   * the specified precision. If unit is not defined, a unit will be chosen appropriate to the value.
   * If precision is not defined, the formatted number will have 3 significant figures.
   *
   * @param ms
   *        number of milliseconds
   * @param precision
   *        number of digits after decimal place
   * @param unit
   *        unit for formatting
   * @param scale
   *        multiply original value with this number before formatting
   * @return formatted string
   */
  static formatTimingMs(ms: number, precision: number, unit: string | null, scale: number): string | null;

  /**
   * Return a natural representation of a duration in milliseconds with the specified unit and rounded to
   * 3 significant figures. This form takes a Pair structure to describe the desired unit and scale.
   * If unit is null, a unit will be chosen appropriate to the value.
   *
   * @param ms
   *        number of milliseconds
   * @param unit
   *        scale and unit for formatting
   * @return formatted string
   */
  static formatTimingMs(ms: number, unit: Pair<number | null, string | null> | null): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, precision: number): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, unit: string | null): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, unit: string | null, scale: number): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, precision: number, unit: string | null): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, precision: number, unit: string | null, scale: number): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, unit: Pair<number | null, string | null> | null): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, precision: number): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, unit: string | null): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, unit: string | null, scale: number): string | null;

  /**
   * @see #formatTimingNs(long, int, String, double)
   */
  static formatTimingNs(ns: number, precision: number, unit: string | null): string | null;

  /**
   * Return a natural representation of a duration in nanoseconds with the specified unit and rounded to
   * the specified precision. If unit is not defined, a unit will be chosen appropriate to the value.
   * If precision is not defined, the formatted number will have 3 significant figures.
   *
   * @param ns
   *        number of nanoseconds
   * @param precision
   *        number of digits after decimal place
   * @param unit
   *        unit for formatting
   * @param scale
   *        multiply original value with this number before formatting
   * @return formatted string
   */
  static formatTimingNs(ns: number, precision: number, unit: string | null, scale: number): string | null;

  /**
   * Return a natural representation of a duration in nanoseconds with the specified unit and rounded to
   * 3 significant figures. This form takes a Pair structure to describe the desired unit and scale.
   * If unit is null, a unit will be chosen appropriate to the value.
   *
   * @param ns
   *        number of nanoseconds
   * @param unit
   *        scale and unit for formatting
   * @return formatted string
   */
  static formatTimingNs(ns: number, unit: Pair<number | null, string | null> | null): string | null;

  /**
   * @see #formatTimingS(double, int, String, double)
   */
  static formatTimingS(s: number): string | null;

  /**
   * @see #formatTimingS(double, int, String, double)
   */
  static formatTimingS(s: number, precision: number): string | null;

  /**
   * @see #formatTimingS(double, int, String, double)
   */
  static formatTimingS(s: number, unit: string | null): string | null;

  /**
   * @see #formatTimingS(double, int, String, double)
   */
  static formatTimingS(s: number, unit: string | null, scale: number): string | null;

  /**
   * @see #formatTimingS(double, int, String, double)
   */
  static formatTimingS(s: number, precision: number, unit: string | null): string | null;

  /**
   * Return a natural representation of a duration in seconds with an appropriate unit and rounded to the
   * specified precision. If unit is not defined, a unit will be chosen appropriate to the value.
   * If precision is not defined, the formatted number will have 3 significant figures.
   *
   * @param s
   *        number of seconds
   * @param precision
   *        number of digits after decimal place
   * @param unit
   *        unit for formatting
   * @param scale
   *        multiply original value with this number before formatting
   * @return formatted string
   */
  static formatTimingS(s: number, precision: number, unit: string | null, scale: number): string | null;

  /**
   * Return a natural representation of a duration in seconds with the specified unit and rounded to
   * 3 significant figures. This form takes a Pair structure to describe the desired unit and scale.
   * If unit is null, a unit will be chosen appropriate to the value.
   *
   * @param s
   *        number of seconds
   * @param unit
   *        scale and unit for formatting
   * @return formatted string
   */
  static formatTimingS(s: number, unit: Pair<number | null, string | null> | null): string | null;

  /**
   * @return formatted number of seconds with fixed 6 decimal places from nanoseconds
   */
  static formatNano(nano: number): string | null;

  /**
   * Return number of nano seconds given a natural representation of a duration produced by
   * `formatTimingNs`, `formatTimingMs`, or `formatTimingS`.
   *
   * @param s
   *        formatted string. eg. '426.234ms'
   * @return number of nanoseconds. eg. 426234000
   */
  static parseTiming(s: string | null): number | null;

  /**
   * Build an integer value from the data encoded as bytes in MSB-first order.
   */
  static fromBytes(value: any | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  /**
   * Parse a string as a numeric value, preserving the most appropriate Java numeric type. This will be one of:
   * `int`, `long` or `double` depending on the format and scale.
   *
   * If the string cannot be parsed `NaN` is returned.
   */
  static fromString(value: string | null): number | null;

  /**
   * Parse a string as a numeric value, preserving the most appropriate Java numeric type. This will be one of:
   * `int`, `long` or `double` depending on the format and scale.
   *
   * If the string cannot be parsed and failIfInvalid is true an error is thrown, otherwise `NaN` is
   * returned.
   */
  static fromString(value: string | null, failIfInvalid?: boolean): number | null;

  /**
   * Helper function to convert any Java number to a number which JEP can convert from Java to Python
   *
   * @param num:
   *        a number we would like to send to Python
   * @return num as a type which JEP can convert from Java to Python
   */
  static forPython(num: number | null): number | null;

  /**
   * Parse a double representation to determine if it is strictly a double.
   */
  static isDouble(s: string | null): boolean;

  /**
   * Parse an integer representation to determine if it is strictly an integer.
   */
  static isInt(s: string | null): boolean;

  /**
   * Determine if a numeric value is a integer value, in particular if it can be represented by a C3 `int`
   * (Java `long`) and longValue can be called without loss.
   */
  static isInt(v: number | null): boolean;

  /**
   * Determine if a numeric value is a finite number (not, `null`NaN` or
   * ±`Infinity`).
   */
  static isFinite(v: number | null): boolean;

  /**
   * Determine if a numeric value is any size integer value, in particular if it can be represented by a C3
   * `bigint` (Java `BigInteger`).
   */
  static isAnyInt(v: number | null): boolean;

  /**
   * Determine if a numeric value is infinite (`null` or ±`Infinity`).
   */
  static isInfinite(v: number | null): boolean;

  /**
   * Determine if a numeric value is not-a-number (`null` or `NaN`).
   */
  static isNaN(v: number | null): boolean;

  /**
   * Determine if a numeric value is missing (`null`, `NaN` or ±`Infinity`).
   */
  static isMissing(v: number | null): boolean;

  /**
   * Compare the actual value with the expected double value and ensure they have the same numeric value within
   * the specified epsilon.
   *
   *
   * This is not commutative; the comparison is driven by the expected value and the actual is compared to it.
   */
  static isSameNumber(actual: any, expected: number, epsilon: number): boolean;

  /**
   * Compare the actual value with the expected integer value and ensure they have the same numeric value. The
   * expected value must be an integer, within the specified epsilon.
   *
   *
   * This is not commutative; the comparison is driven by the expected value and the actual is compared to it.
   */
  static isSameNumber(actual: any, expected: number, epsilon: number): boolean;

  /**
   * Compare the actual value with the expected value and ensure they have the same numeric value within the
   * specified epsilon. This ignores the exact Java numeric class and only compares numeric values.
   *
   *
   * This is not commutative; the comparison is driven by the expected value and the actual is compared to it.
   */
  static isSameNumber(actual: any, expected: number, epsilon: number): boolean;

  /**
   * Compare the actual value with the expected value and ensure they have the same numeric value within the
   * finest epsilon for the values. This ignores the exact Java numeric class and only compares numeric values.
   *
   *
   * This is not commutative; the comparison is driven by the expected value and the actual is compared to it.
   */
  static isSameNumber(actual: any, expected: number): boolean;

  /**
   * Get the maximum of two Number values, handling nulls.
   */
  static max(a: number | null, b: number | null): number | null;

  /**
   * Get the maximum of two double values, handling nulls.
   */
  static max(a: number | null, b: number | null): number | null;

  /**
   * Get the minimum of two double values, handling nulls.
   */
  static min(a: number | null, b: number | null): number | null;

  /**
   * Get the maximum of two Number values, handling nulls.
   */
  static min(a: number | null, b: number | null): number | null;

  /**
   * Return a Java number format appropriate for formatting numbers to 3 significant digits.
   *
   * @param amount
   *        the value to be formatted
   * @param orig
   *        the unscaled (raw) value
   * @param fixed
   *        always use the same number of digits after the decimal point
   * @return configured NumberFormat instance
   */
  static numberFormat3(amount: number, orig: number, fixed?: boolean): any;

  /**
   * Returns a Java NumberFormat appropriate for formatting numbers to the specified `precision`.
   *
   * @param precision
   *        number of digits after decimal place
   */
  static numberFormatCustom(precision: number): any;

  /**
   * Parse a formatted count string. This includes number and optional unit. For example, parsing "1.2K"
   * returns `1200`.
   *
   * The units supported are:
   *
   *  - "K": 1000 (thousand)
   *  - "M": 10⁶ (million)
   *  - "B": 10⁹ (billion)
   *  - "T": 10¹² (trillion)
   *  - "Q": 10¹⁵ (quadrillion)
   *
   *
   * Units are case insensitive.
   *
   * @see #formatCount(long, int, String, double)
   */
  static parseCount(s: string | null, failIfInvalid?: boolean): number | null;

  /**
   * Parse an double representation into its natural Java form. This will return a `double`.
   * If the string is not an integer value, it will throw an exception.
   */
  static parseDouble(s: string | null): number | null;

  static parseDouble(s: string | null, failIfInvalid?: boolean): number | null;

  /**
   * Parse an integer representation into its natural Java form. This will return a `int`, `long`
   * or `BigInteger`. If the string is not an integer value, it will throw an exception.
   */
  static parseInt(s: string | null): number | null;

  static parseInt(s: string | null, failIfInvalid?: boolean): number | null;

  /**
   * Pick a byte size unit for formatting using base-10 units ("MB")
   *
   * @see #pickBytesUnit(long, int, boolean)
   */
  static pickBytesUnit(bytes: number, scaleDigits: number): string | null;

  /**
   * Pick a byte size unit for formatting.
   *
   * @param bytes
   *        size in bytes
   * @param scaleDigits
   *        adjust the values by 10⁻ⁿ to affect the chosen units
   * @param base2
   *        if true, use base 2 units ("MiB") rather than base 10 ("MB")
   * @return unit for formatting
   */
  static pickBytesUnit(bytes: number, scaleDigits: number, base2?: boolean): string | null;

  /**
   * Given a unit, return the constant to scale the original value so that it can be displayed in terms of unit.
   *
   * @param unit
   *        byte size unit
   * @return scale for formatting
   */
  static pickBytesScale(unit: string | null): number;

  /**
   * Pick a byte size scale and unit for formatting, using base-10 units ("MB").
   *
   * @param bytes
   *        size in bytes
   * @param scaleDigits
   *        adjust the values by 10⁻ⁿ to affect the chosen units
   * @return scale and unit for formatting
   */
  static pickBytesScaleAndUnit(bytes: number, scaleDigits: number): Pair<number | null, string | null> | null;

  /**
   * Pick a byte size scale and unit for formatting.
   *
   * @param bytes
   *        size in bytes
   * @param scaleDigits
   *        adjust the values by 10⁻ⁿ to affect the chosen units
   * @param base2
   *        if true, use base 2 units ("MiB") rather than base 10 ("MB")
   * @return scale and unit for formatting
   */
  static pickBytesScaleAndUnit(bytes: number, scaleDigits: number, base2?: boolean): Pair<number | null, string | null> | null;

  /**
   * Pick a counting number unit for formatting.
   *
   * @param count
   *        value
   * @param scaleDigits
   *        adjust the values by 10⁻ⁿ to affect the chosen units
   * @return unit for formatting
   */
  static pickCountUnit(count: number, scaleDigits: number): string | null;

  /**
   * Given a unit, return the constant to scale the original value so that it can be displayed in terms of unit.
   *
   * @param unit
   *        counting number unit
   * @return scale for formatting
   */
  static pickCountScale(unit: string | null): number;

  /**
   * Pick a counting number scale and unit for formatting.
   *
   * @param count
   *        value
   * @param scaleDigits
   *        adjust the values by 10⁻ⁿ to affect the chosen units
   * @return scale and unit for formatting
   */
  static pickCountScaleAndUnit(count: number, scaleDigits: number): Pair<number | null, string | null> | null;

  /**
   * Pick a multiplier (ratio numerator) scale and unit for formatting.
   *
   * @param times
   *        value
   * @param scaleDigits
   *        adjust the values by 10⁻ⁿ to affect the chosen units
   * @return scale and unit for formatting
   */
  static pickTimesUnit(times: number, scaleDigits: number): Pair<number | null, string | null> | null;

  /**
   * Pick a nanosecond duration unit for formatting.
   *
   * @param ns
   *        duration in nanoseconds
   * @param scaleDigits
   *        adjust the values by 10⁻ⁿ to affect the chosen units
   * @return unit for formatting
   */
  static pickTimingUnitNs(ns: number, scaleDigits: number): string | null;

  /**
   * Given a unit, return the constant to scale the original value so that it can be displayed in terms of unit.
   *
   * @param unit
   *        time duration unit
   * @return scale for formatting
   */
  static pickTimingScaleNs(unit: string | null): number;

  /**
   * Pick a nanosecond duration scale and unit for formatting.
   *
   * @param ns
   *        duration in nanoseconds
   * @param scaleDigits
   *        adjust the values by 10⁻ⁿ to affect the chosen units
   * @return scale and unit for formatting
   */
  static pickTimingScaleAndUnitNs(ns: number, scaleDigits: number): Pair<number | null, string | null> | null;

  /**
   * Pick a second duration scale and unit for formatting.
   *
   * @param s
   *        duration in seconds
   * @param scaleDigits
   *        adjust the values by 10⁻ⁿ to affect the chosen units
   */
  static pickTimingScaleAndUnitS(s: number, scaleDigits: number): Pair<number | null, string | null> | null;

  /**
   * Produce the sum of two double values, handling nulls.
   */
  static sum(a: number | null, b: number | null): number | null;

  /**
   * Produce the sum of two long values, handling nulls.
   */
  static sum(a: number | null, b: number | null): number | null;

  /**
   * Produce the sum and count of two Number values, handling nulls.
   */
  static sumCount(a: Pair<number | null, number | null> | null, b: number | null): Pair<number | null, number | null> | null;

  /**
   * Convert the arbitrary precision value to the most natural form of integer (either int32 or int).
   */
  static toAnyInt(iv: number | null): number | null;

  /**
   * Convert the arbitrary precision value to the most natural form of integer (int32, int or BigInteger).
   */
  static toAnyInt(iv: number | null, boundToLongRange?: boolean, failIfOutOfLongRange?: boolean): number | null;

  static toBigInt(num: number | null): number | null;

  static toBool(num: number | null): boolean;

  static toByte(num: number | null): number | null;

  static toByteArray(value: number): C3.Array<number>;

  static toByteArray(value: number): C3.Array<number>;

  static toByteArray(value: number): C3.Array<number>;

  static toByteArray(value: number): C3.Array<number>;

  static toBytes(value: number, compact?: boolean): any | null;

  static toChar(num: number | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toDateTime(num: number | null, failIfInvalid?: boolean, for_?: string | null): DateTime | null;

  /**
   * {@link java.math.BigDecimal#BigDecimal(String)} is the preferred method of instantiating a BigDecimal. See
   * comments in {@link java.math.BigDecimal#BigDecimal(double)} for an explanation. In short, BigDecimal translates a
   * double using "the exact decimal representation of the {@code double}'s binary floating-point value" which leads to
   * unpredictable results.
   */
  static toDecimal(num: number | null): number | null;

  static toDouble(num: number | null): number | null;

  static toFloat(num: number | null): number | null;

  static toInt(num: number | null): number | null;

  static toInt16(num: number | null): number | null;

  static toInt32(num: number | null): number | null;

  static toValue(v: number | null, vt: ValueType | null, failIfInvalid?: boolean, for_?: string | null): any;

  static visitNumber(value: number | null, visitor: any): any;

  static visitNumber(value: number | null, arg: any, visitor: any): any;

  static visitNumbers(a: number | null, b: number | null, visitor: any): any;

  static clamp(num: number, min: number, max: number): number;

  static clamp(num: number, min: number, max: number): number;

  static toStr(num: number): string | null;

  static add(num: number, e: any): number;

  /**
   * Add two numbers and return result boxed in the first non-null argument from left to right. (a -> b)
   * Return null if both are null.
   */
  static add(a: any, b: any): any;

  /**
   * Add two numbers and return result boxed in the first non-null argument from left to right. (a -> b)
   * Return null if both are null.
   */
  static sub(a: any, b: any): any;

  /**
   * Produce the modulo of a Number value, handling null.
   */
  static mod(v: any, d: any): any;

  /**
   * Produce the floor division of a Number value, handling null.
   */
  static floorDiv(v: any, d: any): any;

  /**
   * Produce the multiplication of a Number value, handling null.
   */
  static mul(v: any, d: any): any;

  /**
   * Produce the power of a Number value, handling null.
   */
  static pow(a: any, b: any): any;

  static abs(a: any): any;

  static neg(a: any): any;

  static round(v: any): any;

  static invert(v: any): any;
}


interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}
