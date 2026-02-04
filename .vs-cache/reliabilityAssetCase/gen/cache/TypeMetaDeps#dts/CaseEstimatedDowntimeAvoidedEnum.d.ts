// TypeScript definitions for the C3 type CaseEstimatedDowntimeAvoidedEnum

/**
 * Enum representing different estimated downtime avoided categories for a {@link ReliabilityAssetCase}.
 *
 * @remarks this represents a value passed to a method that expects an instance of CaseEstimatedDowntimeAvoidedEnum
 */
declare interface ICaseEstimatedDowntimeAvoidedEnum {

  /**
   * Represents a case where the downtime avoided is between 0 and 6 hours.
   */
  ZERO_TO_SIX?: string;

  /**
   * Indicates that downtime avoided is between 6 and 12 hours.
   */
  SIX_TO_TWELVE?: string;

  /**
   * Represents downtime avoided between 12 and 48 hours.
   */
  TWELVE_TO_FORTY_EIGHT?: string;

  /**
   * Indicates downtime avoided is greater than 48 hours.
   */
  FORTY_EIGHT_PLUS?: string;
}

/**
 * Enum representing different estimated downtime avoided categories for a {@link ReliabilityAssetCase}.
 *
 * @remarks this represents a made instance of CaseEstimatedDowntimeAvoidedEnum
 */
declare class CaseEstimatedDowntimeAvoidedEnum {

  /**
   * Represents a case where the downtime avoided is between 0 and 6 hours.
   */
  readonly ZERO_TO_SIX?: string;
  withZERO_TO_SIX(ZERO_TO_SIX: string | null): CaseEstimatedDowntimeAvoidedEnum;

  /**
   * Indicates that downtime avoided is between 6 and 12 hours.
   */
  readonly SIX_TO_TWELVE?: string;
  withSIX_TO_TWELVE(SIX_TO_TWELVE: string | null): CaseEstimatedDowntimeAvoidedEnum;

  /**
   * Represents downtime avoided between 12 and 48 hours.
   */
  readonly TWELVE_TO_FORTY_EIGHT?: string;
  withTWELVE_TO_FORTY_EIGHT(TWELVE_TO_FORTY_EIGHT: string | null): CaseEstimatedDowntimeAvoidedEnum;

  /**
   * Indicates downtime avoided is greater than 48 hours.
   */
  readonly FORTY_EIGHT_PLUS?: string;
  withFORTY_EIGHT_PLUS(FORTY_EIGHT_PLUS: string | null): CaseEstimatedDowntimeAvoidedEnum;

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): Array_Type<string> | null;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): Array_Type<string> | null;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): Map_Type<string, string> | null;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): Map_Type<string, string> | null;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string>): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string>): void;
}


interface λConsumer<T> {
  (t: T): void
}
