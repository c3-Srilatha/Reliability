// TypeScript definitions for the C3 type Interval

/**
 * The possible value of the standard normalized time intervals used most often for timeseries.
 *
 * Note that these are _values_ in the sense that they are pre-defined periods, but are handy to have pre-defined to
 * avoid the need for specifying the value each time. For example, `QUARTER_HOUR` is equivalent to the {@link Period}
 * `15m` (15 minutes).
 *
 * @see TemporalUnit
 *
 * @remarks this represents a value passed to a method that expects an instance of Interval
 */
declare interface IInterval {

  readonly SECOND: "SECOND";

  readonly MINUTE: "MINUTE";

  readonly FIVE_MINUTE: "FIVE_MINUTE";

  readonly TEN_MINUTE: "TEN_MINUTE";

  readonly QUARTER_HOUR: "QUARTER_HOUR";

  readonly HALF_HOUR: "HALF_HOUR";

  readonly HOUR: "HOUR";

  readonly DAY: "DAY";

  readonly MONTH: "MONTH";

  readonly YEAR: "YEAR";
}

/**
 * The possible value of the standard normalized time intervals used most often for timeseries.
 *
 * Note that these are _values_ in the sense that they are pre-defined periods, but are handy to have pre-defined to
 * avoid the need for specifying the value each time. For example, `QUARTER_HOUR` is equivalent to the {@link Period}
 * `15m` (15 minutes).
 *
 * @see TemporalUnit
 *
 * @remarks this represents a made instance of Interval
 */
declare class Interval {

  static readonly SECOND: "SECOND";

  static readonly MINUTE: "MINUTE";

  static readonly FIVE_MINUTE: "FIVE_MINUTE";

  static readonly TEN_MINUTE: "TEN_MINUTE";

  static readonly QUARTER_HOUR: "QUARTER_HOUR";

  static readonly HALF_HOUR: "HALF_HOUR";

  static readonly HOUR: "HOUR";

  static readonly DAY: "DAY";

  static readonly MONTH: "MONTH";

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
   * Aligns date to the start of the interval.
   */
  static alignDate(date: DateTime, interval: string): DateTime;

  /**
   * Integer distance (complete intervals - not partial) in between to the two dates for a given interval
   */
  static distance(interval: string, start: DateTime, end: DateTime): number | null;

  /**
   * Converts the interval name to a lower-case string.
   */
  static toLowercase(interval: string): string;

  /**
   * Returns a factor by dividing the value interval with the by interval.
   */
  static divide(interval: string, by: string): number | null;

  /**
   * Convert various string values into the official interval enum. For example "d" and "days" are both aliases for DAY.
   * If the value cannot be understood null is returned, unless failIfBad is true in which case an error is thrown.
   *
   * @param str string to parse
   * @param failIfBad if true, throw an error if string is not recognized
   */
  static standardize(s: string | null, failIfBad?: boolean): string | null;

  /**
   * Return the period this interval corresponds to.
   */
  static toPeriod(interval: string): Period;

  /**
   * Return the pandas-compatible frequency string this interval corresponds to
   */
  static toDataPeriod(interval: string): string;

  /**
   * Returns the number of intervals the given start and end cover
   * e.g.
   * ```js
   *    Interval.coverage('DAY', '2020-01-01', '2020-01-03') => 2
   * ```
   * @param start
   *        start timestamp
   * @param end
   *        end timestamp
   * @return the coverage for the given dates in the interval
   */
  static coverage(interval: string, start: DateTime, end: DateTime): number;

  /**
   * @return true if input timestamp aligns with this interval boundary.
   */
  static aligns(interval: string, dt: DateTime): boolean;

  /**
   * @return start of the next interval. Assumes time is aligned.
   */
  static nextTimePoint(interval: string, dt: DateTime): DateTime;

  /**
   * Computes n'th next time point. Assumes time is aligned.
   */
  static nextTimePoint(interval: string, dt: DateTime, n: number): DateTime;

  /**
   * @return start of the previous interval. Assumes time is aligned.
   */
  static prevTimePoint(interval: string, dt: DateTime): DateTime;

  /**
   * Computes n'th previous time point. Assumes time is aligned.
   */
  static prevTimePoint(interval: string, dt: DateTime, n: number): DateTime;

  /**
   * Returns the timestamp obtained by adding the number of intervals passed to the timestamp.
   *
   * @param start
   *        the timestamp.
   * @param n
   *        the number of intervals to add.
   * @return the timestamp corresponding to the result/
   */
  static plus(interval: string, dt: DateTime, n: number): DateTime;

  /**
   * Returns the next time point that aligns with this interval boundary.
   * <p>
   * For example, if the grain is MONTH:
   * <p>
   * <li>nextAligningTimePoint("01-01-2000 00:00:00") returns "02-01-2000 00:00:00"
   * <li>nextAligningTimePoint("01-17-2000 00:00:00") returns "02-01-2000 00:00:00"
   * <li>nextAligningTimePoint("01-01-2000 00:00:01") returns "02-01-2000 00:00:00"
   */
  static nextAligningTimePoint(interval: string, dt: DateTime): DateTime;

  /**
   * If the passed time point aligns with this interval boundary, returns it.
   * <p>
   * If not, it returns the previous time point that aligns with the grain boundary.
   * <p>
   * For example, if the grain is MONTH:
   * <p>
   * <li>previousAligningTimePoint("01-01-2000 00:00:00") returns "01-01-2000 00:00:00"
   * <li>previousAligningTimePoint("01-17-2000 00:00:00") returns "01-01-2000 00:00:00"
   * <li>previousAligningTimePoint("01-31-2000 23:59:59") returns "01-01-2000 00:00:00"
   */
  static previousAligningTimePoint(interval: string, dt: DateTime): DateTime;

  /**
   * Finds the data point number given the earliest and the start of a particular data point.
   */
  static dataPointNumber(interval: string, earliest: DateTime, searchPoint: DateTime): number;

  /**
   * returns the coverage for a single time point
   *
   * @param start
   *        the timestamp
   * @param end
   *        the timestamp
   * @return point's coverage
   */
  static pointCoverage(interval: string, start: DateTime, end: DateTime): number;

  /**
   * returns the nth timeseries data point that starts with start (which may or may not
   * align with the grain boundary) for the given grain.
   * For example: MONTH grain
   * nthTimePoint("2000-01-17 00:00:00", 1) returns "2000-01-17 00:00:00"
   * nthTimePoint("2000-01-17 00:00:00", 2) returns "2000-02-01 00:00:00"
   * nthTimePoint("2000-01-17 00:00:00", 10) returns "2000-10-17 00:00:00"
   * nthTimePoint("2000-01-01 00:00:00", 1) returns "2000-01-01 00:00:00"
   *
   * @param start
   *        the start of the timeseries
   * @param n
   *        the data point number (1 for 1st data point, etc)
   * @return the nth data point
   */
  static nthTimePoint(interval: string, start: DateTime, n: number): DateTime;

  /**
   * Mask all other components of the input date other than the existing interval.
   * E.g. mask(YEAR, '2020-04-03T12:04:12Z') => '2020-01-01T00:00:00Z'
   */
  static mask(interval: string, dt: DateTime): DateTime;

  /**
   * Checks which interval is finer.
   *
   * @return true if this interval is finer (<) than the other.
   */
  static isFiner(first: string, second: string): boolean;

  /**
   * Checks which interval is coarser.
   *
   * @return true if this interval is coarser (>) than the other.
   */
  static isCoarser(first: string, second: string): boolean;

  /**
   * Convert the given interval into a Duration. Note that durations support only up to days natively, so logical
   * intervals like month and year will not have an accurate representation for actual calendar periods.
   */
  static toDuration(interval: string): Duration | null;

  /**
   * Next interval in ascending order after the given interval
   */
  static nextInterval(interval: string): string | null;

  /**
   * Next interval in descending order after the given interval
   */
  static prevInterval(interval: string): string | null;

  /**
   * @return closest matching interval between the provided datetime
   */
  static closestInterval(first: DateTime, second: DateTime): string | null;

  /**
   * @return aligned interval
   */
  static closestAlignedInterval(dateTime: DateTime): string | null;

  /**
   * Pick an interval which is the greatest common divisor of the two intervals. Smaller intervals are generally
   * sub-intervals of larger ones, but not always. For example, gcd(TEN_MINUTES, QUARTER_HOUR) = FIVE_MINUTE.
   */
  static gcd(a: string, b: string): string;

  /**
   * Pick an interval which is the greatest common divisor of the list of intervals. Smaller intervals are generally
   * sub-intervals of larger ones, but not always. For example, gcd(TEN_MINUTES, QUARTER_HOUR) = FIVE_MINUTE.
   */
  static gcd(intervals: C3.Array<string>): string;

  /**
   * Pick an interval which is the lowest common multiple(lcm) of the two intervals. Larger intervals are generally
   * lcm of smaller ones, but not always. For example, lcm(TEN_MINUTES, QUARTER_HOUR) = HALF_HOUR
   */
  static lcm(a: string, b: string): string;

  /**
   * Pick an interval which is the lowest common multiple(lcm) of the list of intervals.Larger intervals are generally
   * lcm of smaller ones, but not always. For example, lcm(TEN_MINUTES, QUARTER_HOUR) = HALF_HOUR
   */
  static lcm(intervals: C3.Array<string>): string;

  /**
   * Number of seconds in an interval
   */
  static seconds(interval: string): number;

  /**
   * Number of milliseconds in an interval
   */
  static milliseconds(interval: string): number;
}


interface λConsumer<T> {
  (t: T): void
}
