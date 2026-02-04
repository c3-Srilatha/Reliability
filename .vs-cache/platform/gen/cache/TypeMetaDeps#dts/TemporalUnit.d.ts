// TypeScript definitions for the C3 type TemporalUnit

/**
 * The possible units of time measurement. Note that these are logical units, especially ones larger than "hour",
 * because calendar and time zone logic makes them vary in actual length.
 *
 * @remarks this represents a value passed to a method that expects an instance of TemporalUnit
 */
declare interface ITemporalUnit {

  /**
   * One billionth (10⁻⁹) of a second.
   */
  readonly NANOSECOND: "NANOSECOND";

  /**
   * One milionth (10⁻⁶) of a second.
   */
  readonly MICROSECOND: "MICROSECOND";

  /**
   * One thousandth of a second.
   */
  readonly MILLISECOND: "MILLISECOND";

  /**
   * One second.
   */
  readonly SECOND: "SECOND";

  /**
   * One minute (60 seconds).
   */
  readonly MINUTE: "MINUTE";

  /**
   * One hour (60 minutes).
   */
  readonly HOUR: "HOUR";

  /**
   * One day (24 hours except on daylight savings transitions).
   */
  readonly DAY: "DAY";

  /**
   * A 7-day period.
   */
  readonly WEEK: "WEEK";

  /**
   * A calendar month (Gregorian calendar). A logical month is "30 days", but actual months are 28-31 days depending on
   * which month and whether it is a leap year.
   */
  readonly MONTH: "MONTH";

  /**
   * Three months. A logical quarter is 91 days, but actual quarters have slight different lengths depending on which
   * months comprise them.
   */
  readonly QUARTER: "QUARTER";

  /**
   * A calendar year. This is usually 365 days, but 366 on leap years.
   */
  readonly YEAR: "YEAR";
}

/**
 * The possible units of time measurement. Note that these are logical units, especially ones larger than "hour",
 * because calendar and time zone logic makes them vary in actual length.
 *
 * @remarks this represents a made instance of TemporalUnit
 */
declare class TemporalUnit {

  /**
   * One billionth (10⁻⁹) of a second.
   */
  static readonly NANOSECOND: "NANOSECOND";

  /**
   * One milionth (10⁻⁶) of a second.
   */
  static readonly MICROSECOND: "MICROSECOND";

  /**
   * One thousandth of a second.
   */
  static readonly MILLISECOND: "MILLISECOND";

  /**
   * One second.
   */
  static readonly SECOND: "SECOND";

  /**
   * One minute (60 seconds).
   */
  static readonly MINUTE: "MINUTE";

  /**
   * One hour (60 minutes).
   */
  static readonly HOUR: "HOUR";

  /**
   * One day (24 hours except on daylight savings transitions).
   */
  static readonly DAY: "DAY";

  /**
   * A 7-day period.
   */
  static readonly WEEK: "WEEK";

  /**
   * A calendar month (Gregorian calendar). A logical month is "30 days", but actual months are 28-31 days depending on
   * which month and whether it is a leap year.
   */
  static readonly MONTH: "MONTH";

  /**
   * Three months. A logical quarter is 91 days, but actual quarters have slight different lengths depending on which
   * months comprise them.
   */
  static readonly QUARTER: "QUARTER";

  /**
   * A calendar year. This is usually 365 days, but 366 on leap years.
   */
  static readonly YEAR: "YEAR";

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string | null, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<string | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<string | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, string | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string> | null): void;

  /**
   * Return true if the first argument represents a _shorter_ time period than the latter. For example, MILLISECOND is
   * finer than SECOND.
   *
   * @see #isCoarser
   */
  static isFiner(left: string, right: string): boolean;

  /**
   * Return true if the first argument represents a _longer_ time period than the latter. For example, WEEK is coarser
   * than DAY.
   *
   * @see #isFiner
   */
  static isCoarser(left: string, right: string): boolean;

  /**
   * Convert various string values into the official enum value. For example "d" and "days" are both aliases for DAY.
   * If the value cannot be understood null is returned, unless failIfBad is true in which case an error is thrown.
   *
   * Note that units are generally case insensitive, except the abbreviation "m" which indicates MINUTE while the
   * alias "M" indicates MONTH. This also supports the Pandas period aliases and frequencies, such as "A" for YEAR.
   *
   * @param str string to parse
   * @param failIfBad if true, throw an error if string is not recognized
   */
  static standardize(s: string | null, failIfBad?: boolean): string | null;

  /**
   * Return the standard abbreviation for this unit. This will be a short (1- or 2-character) lower-case string:
   *  - "ns" (nanosecond)
   *  - "μs" (microsecond)
   *  - "ms" (millisecond)
   *  - "s" (second)
   *  - "m" (minute)
   *  - "h" (hour)
   *  - "d" (day)
   *  - "w" (week)
   *  - "mo" (month)
   *  - "q" (quarter)
   *  - "y" (year)
   *
   * Note that most abbreviations are 1 letter long, except the sub-second values (for clarity) and MONTH
   * (to distinguish it from MINUTE).
   *
   * @param unit unit value
   * @param failIfBad if true, throw an error if unit is not recognized
   */
  static abbreviate(unit: string | null, failIfBad?: boolean): string | null;
}


interface λConsumer<T> {
  (t: T): void
}
