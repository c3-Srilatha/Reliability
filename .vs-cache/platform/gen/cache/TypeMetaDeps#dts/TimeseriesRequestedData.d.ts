// TypeScript definitions for the C3 type TimeseriesRequestedData

/**
 * When a Timeseries is created, different category of data can be requested
 * e.g.
 * 1. actual normalized values for the {@link aggFunc} provided
 * 2. Earliest/Latest value or date time of the underlying series generated
 * 3. what intervals are estimated
 * In order to retrieve non standard (simple aggregated provided via #aggFunc), use this field
 *
 * Data info:
 *                  isTimeRangeAvailable  | canResultHaveGaps
 *
 *
 *     COUNT            YES                      NO
 *
 *     ESTIMATES        YES                      YES
 *
 *     NORMALIZED       YES                      YES
 *
 *     MISSING          YES                      NO
 *
 * @remarks this represents a value passed to a method that expects an instance of TimeseriesRequestedData
 */
declare interface ITimeseriesRequestedData {

  /**
   * Returns data as normalized by the specified {@link AggOp} during the Timeseries generation
   */
  readonly NORMALIZED: "NORMALIZED";

  /**
   * Returns a boolean Timeseries converted double values determining whether the given interval is estimated or not
   */
  readonly ESTIMATES: "ESTIMATES";

  /**
   * Returns count of raw data points in every interval for the returned Timeseries
   */
  readonly COUNT: "COUNT";

  /**
   * Returns a boolean Timeseries converted double values determining whether the given interval is missing or not
   */
  readonly MISSING: "MISSING";

  /**
   * Returns an identity Timeseries with the value of the earliest available datetime
   */
  readonly EARLIEST: "EARLIEST";

  /**
   * Returns an identity Timeseries with the value of the latest available datetime
   */
  readonly LATEST: "LATEST";

  /**
   * Returns an identity Timeseries with the value of the earliest available value
   */
  readonly EARLIEST_VALUE: "EARLIEST_VALUE";

  /**
   * Returns an identity Timeseries with the value of the latest available value
   */
  readonly LATEST_VALUE: "LATEST_VALUE";
}

/**
 * When a Timeseries is created, different category of data can be requested
 * e.g.
 * 1. actual normalized values for the {@link aggFunc} provided
 * 2. Earliest/Latest value or date time of the underlying series generated
 * 3. what intervals are estimated
 * In order to retrieve non standard (simple aggregated provided via #aggFunc), use this field
 *
 * Data info:
 *                  isTimeRangeAvailable  | canResultHaveGaps
 *
 *
 *     COUNT            YES                      NO
 *
 *     ESTIMATES        YES                      YES
 *
 *     NORMALIZED       YES                      YES
 *
 *     MISSING          YES                      NO
 *
 * @remarks this represents a made instance of TimeseriesRequestedData
 */
declare class TimeseriesRequestedData {

  /**
   * Returns data as normalized by the specified {@link AggOp} during the Timeseries generation
   */
  static readonly NORMALIZED: "NORMALIZED";

  /**
   * Returns a boolean Timeseries converted double values determining whether the given interval is estimated or not
   */
  static readonly ESTIMATES: "ESTIMATES";

  /**
   * Returns count of raw data points in every interval for the returned Timeseries
   */
  static readonly COUNT: "COUNT";

  /**
   * Returns a boolean Timeseries converted double values determining whether the given interval is missing or not
   */
  static readonly MISSING: "MISSING";

  /**
   * Returns an identity Timeseries with the value of the earliest available datetime
   */
  static readonly EARLIEST: "EARLIEST";

  /**
   * Returns an identity Timeseries with the value of the latest available datetime
   */
  static readonly LATEST: "LATEST";

  /**
   * Returns an identity Timeseries with the value of the earliest available value
   */
  static readonly EARLIEST_VALUE: "EARLIEST_VALUE";

  /**
   * Returns an identity Timeseries with the value of the latest available value
   */
  static readonly LATEST_VALUE: "LATEST_VALUE";

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
}


interface λConsumer<T> {
  (t: T): void
}
