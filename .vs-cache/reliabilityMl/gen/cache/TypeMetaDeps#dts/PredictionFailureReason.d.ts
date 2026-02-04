// TypeScript definitions for the C3 type PredictionFailureReason

/**
 * Enum type that stores the error message text for reasons of failure to generate predictions.
 *
 * @remarks this represents a value passed to a method that expects an instance of PredictionFailureReason
 */
declare interface IPredictionFailureReason {

  /**
   * Reason to be shown when predictions are not generated due to invalid specification.
   */
  INVALID_SPEC_ERROR?: string;

  /**
   * Reason to be shown when predictions are not generated due to missing mask data.
   */
  FTR_DATA_NOT_AVAILABLE?: string;

  /**
   * Reason to be shown when predictions are not generated due to error in the ML job.
   */
  MLFLOW_JOB_ERROR?: string;

  /**
   * Reason to be shown when predictions are not generated due to none of an unknow error.
   */
  GENERIC_ERROR?: string;

  /**
   * Reason to be shown when predictions are generated.
   */
  NA?: string;
}

/**
 * Enum type that stores the error message text for reasons of failure to generate predictions.
 *
 * @remarks this represents a made instance of PredictionFailureReason
 */
declare class PredictionFailureReason {

  /**
   * Reason to be shown when predictions are not generated due to invalid specification.
   */
  readonly INVALID_SPEC_ERROR?: string;
  withINVALID_SPEC_ERROR(INVALID_SPEC_ERROR: string | null): PredictionFailureReason;

  /**
   * Reason to be shown when predictions are not generated due to missing mask data.
   */
  readonly FTR_DATA_NOT_AVAILABLE?: string;
  withFTR_DATA_NOT_AVAILABLE(FTR_DATA_NOT_AVAILABLE: string | null): PredictionFailureReason;

  /**
   * Reason to be shown when predictions are not generated due to error in the ML job.
   */
  readonly MLFLOW_JOB_ERROR?: string;
  withMLFLOW_JOB_ERROR(MLFLOW_JOB_ERROR: string | null): PredictionFailureReason;

  /**
   * Reason to be shown when predictions are not generated due to none of an unknow error.
   */
  readonly GENERIC_ERROR?: string;
  withGENERIC_ERROR(GENERIC_ERROR: string | null): PredictionFailureReason;

  /**
   * Reason to be shown when predictions are generated.
   */
  readonly NA?: string;
  withNA(NA: string | null): PredictionFailureReason;

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
