// TypeScript definitions for the C3 type ReliabilityRawDataValidationDataType

/**
 * Represents the kind of raw data that are validated before deploying the
 * C3 AI Reliability application.
 * 1. `SENSOR_TIME_SERIES` --> This refers to the `CanonicalPointMeasurement` data
 * 2. `PPMS` --> This refers to the `CanonicalPointPhysicalMeasurementSeries` data
 * 3. `EVENTS` --> This refers to the `CanonicalReliabilityAssetEvent` data
 * 4. `ASSET_HIERARCHY_EXCEL` --> This refers to the asset hierarchy excel spreadsheet that
 * contains the relational data representing the asset hierarchy and asset templates (plus failure modes
 * and recommended actions)
 * 5. `CROSS_VALIDATION` --> This is not strictly a data type but it represents the existence of
 * many different kinds of data that need to be cross-referenced with one another to validate all
 * data sources together as opposed to just verifying that one data source contains good data. An example
 * cross-reference would be to check if there are sensor id's that do not have time series data associated
 * with them. This would involve tallying the sensor id's from the `ASSET_HIERARCHY_EXCEL` and
 * `SENSOR_TIME_SERIES`. There are several such checks that need to be performed to completely validate the
 * raw data provided.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityRawDataValidationDataType
 */
declare interface IReliabilityRawDataValidationDataType {

  /**
   * Represents time series sensor data used for validation.
   * This refers to `CanonicalPointMeasurement` data.
   */
  SENSOR_TIME_SERIES?: string;

  /**
   * Represents physical measurement series data used for validation.
   * This refers to `CanonicalPointPhysicalMeasurementSeries` data.
   */
  PPMS?: string;

  /**
   * Represents event data associated with reliability assets.
   * This refers to `CanonicalReliabilityAssetEvent` data.
   */
  EVENTS?: string;

  /**
   * Represents the asset hierarchy spreadsheet used for asset structure validation.
   * This includes relational asset data, failure modes, and recommended actions.
   */
  ASSET_HIERARCHY_EXCEL?: string;

  /**
   * Represents cross-validation across multiple data sources.
   * Ensures consistency, such as verifying sensor IDs exist in both `ASSET_HIERARCHY_EXCEL` and `SENSOR_TIME_SERIES`.
   */
  CROSS_VALIDATION?: string;
}

/**
 * Represents the kind of raw data that are validated before deploying the
 * C3 AI Reliability application.
 * 1. `SENSOR_TIME_SERIES` --> This refers to the `CanonicalPointMeasurement` data
 * 2. `PPMS` --> This refers to the `CanonicalPointPhysicalMeasurementSeries` data
 * 3. `EVENTS` --> This refers to the `CanonicalReliabilityAssetEvent` data
 * 4. `ASSET_HIERARCHY_EXCEL` --> This refers to the asset hierarchy excel spreadsheet that
 * contains the relational data representing the asset hierarchy and asset templates (plus failure modes
 * and recommended actions)
 * 5. `CROSS_VALIDATION` --> This is not strictly a data type but it represents the existence of
 * many different kinds of data that need to be cross-referenced with one another to validate all
 * data sources together as opposed to just verifying that one data source contains good data. An example
 * cross-reference would be to check if there are sensor id's that do not have time series data associated
 * with them. This would involve tallying the sensor id's from the `ASSET_HIERARCHY_EXCEL` and
 * `SENSOR_TIME_SERIES`. There are several such checks that need to be performed to completely validate the
 * raw data provided.
 *
 * @remarks this represents a made instance of ReliabilityRawDataValidationDataType
 */
declare class ReliabilityRawDataValidationDataType {

  /**
   * Represents time series sensor data used for validation.
   * This refers to `CanonicalPointMeasurement` data.
   */
  readonly SENSOR_TIME_SERIES?: string;
  withSENSOR_TIME_SERIES(SENSOR_TIME_SERIES: string | null): ReliabilityRawDataValidationDataType;

  /**
   * Represents physical measurement series data used for validation.
   * This refers to `CanonicalPointPhysicalMeasurementSeries` data.
   */
  readonly PPMS?: string;
  withPPMS(PPMS: string | null): ReliabilityRawDataValidationDataType;

  /**
   * Represents event data associated with reliability assets.
   * This refers to `CanonicalReliabilityAssetEvent` data.
   */
  readonly EVENTS?: string;
  withEVENTS(EVENTS: string | null): ReliabilityRawDataValidationDataType;

  /**
   * Represents the asset hierarchy spreadsheet used for asset structure validation.
   * This includes relational asset data, failure modes, and recommended actions.
   */
  readonly ASSET_HIERARCHY_EXCEL?: string;
  withASSET_HIERARCHY_EXCEL(ASSET_HIERARCHY_EXCEL: string | null): ReliabilityRawDataValidationDataType;

  /**
   * Represents cross-validation across multiple data sources.
   * Ensures consistency, such as verifying sensor IDs exist in both `ASSET_HIERARCHY_EXCEL` and `SENSOR_TIME_SERIES`.
   */
  readonly CROSS_VALIDATION?: string;
  withCROSS_VALIDATION(CROSS_VALIDATION: string | null): ReliabilityRawDataValidationDataType;

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
