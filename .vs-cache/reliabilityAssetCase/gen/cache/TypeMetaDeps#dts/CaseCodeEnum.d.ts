// TypeScript definitions for the C3 type CaseCodeEnum

/**
 * Enum representing different types of case codes for {@link ReliabilityAssetCase}.
 * These values are used to categorize the status or reason behind a case.
 *
 * @remarks this represents a value passed to a method that expects an instance of CaseCodeEnum
 */
declare interface ICaseCodeEnum {

  /**
   * Represents a valid and correct identification of an issue.
   * Typically used when an issue is correctly identified and addressed.
   */
  GOOD_CATCH?: string;

  /**
   * Indicates that a detected issue was not actually a problem.
   * Often used in situations where a false positive is reported.
   */
  FALSE_ALARM?: string;

  /**
   * Refers to issues originating from sensor malfunctions or inaccuracies.
   * Used when sensor data is unreliable or corrupted.
   */
  SENSOR_ISSUE?: string;

  /**
   * Represents data issues, such as missing or incorrect data.
   * This can occur when the system encounters faulty or incomplete data inputs.
   */
  DATA_ISSUE?: string;
}

/**
 * Enum representing different types of case codes for {@link ReliabilityAssetCase}.
 * These values are used to categorize the status or reason behind a case.
 *
 * @remarks this represents a made instance of CaseCodeEnum
 */
declare class CaseCodeEnum {

  /**
   * Represents a valid and correct identification of an issue.
   * Typically used when an issue is correctly identified and addressed.
   */
  readonly GOOD_CATCH?: string;
  withGOOD_CATCH(GOOD_CATCH: string | null): CaseCodeEnum;

  /**
   * Indicates that a detected issue was not actually a problem.
   * Often used in situations where a false positive is reported.
   */
  readonly FALSE_ALARM?: string;
  withFALSE_ALARM(FALSE_ALARM: string | null): CaseCodeEnum;

  /**
   * Refers to issues originating from sensor malfunctions or inaccuracies.
   * Used when sensor data is unreliable or corrupted.
   */
  readonly SENSOR_ISSUE?: string;
  withSENSOR_ISSUE(SENSOR_ISSUE: string | null): CaseCodeEnum;

  /**
   * Represents data issues, such as missing or incorrect data.
   * This can occur when the system encounters faulty or incomplete data inputs.
   */
  readonly DATA_ISSUE?: string;
  withDATA_ISSUE(DATA_ISSUE: string | null): CaseCodeEnum;

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
