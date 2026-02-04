// TypeScript definitions for the C3 type UiSdlChartEndDate

/**
 * Enumeration of relative end dates to be used for a {@link UiSdlTimeseriesLineBarChart}.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlChartEndDate
 */
declare interface IUiSdlChartEndDate {

  /**
   * Today.
   */
  readonly TODAY: "TODAY";

  /**
   * Next hour.
   */
  readonly NEXT_HOUR: "NEXT_HOUR";

  /**
   * Next day.
   */
  readonly NEXT_DAY: "NEXT_DAY";

  /**
   * Next week.
   */
  readonly NEXT_WEEK: "NEXT_WEEK";

  /**
   * Next month.
   */
  readonly NEXT_MONTH: "NEXT_MONTH";

  /**
   * Next three months.
   */
  readonly NEXT_THREE_MONTHS: "NEXT_THREE_MONTHS";

  /**
   * Next year.
   */
  readonly NEXT_YEAR: "NEXT_YEAR";

  /**
   * Next two years.
   */
  readonly NEXT_TWO_YEARS: "NEXT_TWO_YEARS";
}

/**
 * Enumeration of relative end dates to be used for a {@link UiSdlTimeseriesLineBarChart}.
 *
 * @remarks this represents a made instance of UiSdlChartEndDate
 */
declare class UiSdlChartEndDate {

  /**
   * Today.
   */
  static readonly TODAY: "TODAY";

  /**
   * Next hour.
   */
  static readonly NEXT_HOUR: "NEXT_HOUR";

  /**
   * Next day.
   */
  static readonly NEXT_DAY: "NEXT_DAY";

  /**
   * Next week.
   */
  static readonly NEXT_WEEK: "NEXT_WEEK";

  /**
   * Next month.
   */
  static readonly NEXT_MONTH: "NEXT_MONTH";

  /**
   * Next three months.
   */
  static readonly NEXT_THREE_MONTHS: "NEXT_THREE_MONTHS";

  /**
   * Next year.
   */
  static readonly NEXT_YEAR: "NEXT_YEAR";

  /**
   * Next two years.
   */
  static readonly NEXT_TWO_YEARS: "NEXT_TWO_YEARS";

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
