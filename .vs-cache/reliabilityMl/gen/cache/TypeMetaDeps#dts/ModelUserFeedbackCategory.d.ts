// TypeScript definitions for the C3 type ModelUserFeedbackCategory

/**
 * Possible values for the model user feedback category.
 *
 * @remarks this represents a value passed to a method that expects an instance of ModelUserFeedbackCategory
 */
declare interface IModelUserFeedbackCategory {

  /**
   * The model is producing an abnormally high risk score.
   */
  HIGH_RISK_SCORE?: string;

  /**
   * The model is producing an abnormally low risk score.
   */
  LOW_RISK_SCORE?: string;

  /**
   * The model has a bad training period.
   */
  BAD_TRAINING_PERIOD?: string;

  /**
   * The model has incorrect features.
   */
  INCORRECT_FEATURES?: string;

  /**
   * The alert raised by the model is irrelevant.
   */
  IRRELEVANT_ALERT?: string;

  /**
   * The model missed an event.
   */
  MISSED_EVENT?: string;

  /**
   * Any other feedback no covered by the categories.
   */
  OTHER?: string;

  /**
   * The model has a poor reconstruction.
   */
  POOR_RECONSTRUCTION?: string;
}

/**
 * Possible values for the model user feedback category.
 *
 * @remarks this represents a made instance of ModelUserFeedbackCategory
 */
declare class ModelUserFeedbackCategory {

  /**
   * The model is producing an abnormally high risk score.
   */
  readonly HIGH_RISK_SCORE?: string;
  withHIGH_RISK_SCORE(HIGH_RISK_SCORE: string | null): ModelUserFeedbackCategory;

  /**
   * The model is producing an abnormally low risk score.
   */
  readonly LOW_RISK_SCORE?: string;
  withLOW_RISK_SCORE(LOW_RISK_SCORE: string | null): ModelUserFeedbackCategory;

  /**
   * The model has a bad training period.
   */
  readonly BAD_TRAINING_PERIOD?: string;
  withBAD_TRAINING_PERIOD(BAD_TRAINING_PERIOD: string | null): ModelUserFeedbackCategory;

  /**
   * The model has incorrect features.
   */
  readonly INCORRECT_FEATURES?: string;
  withINCORRECT_FEATURES(INCORRECT_FEATURES: string | null): ModelUserFeedbackCategory;

  /**
   * The alert raised by the model is irrelevant.
   */
  readonly IRRELEVANT_ALERT?: string;
  withIRRELEVANT_ALERT(IRRELEVANT_ALERT: string | null): ModelUserFeedbackCategory;

  /**
   * The model missed an event.
   */
  readonly MISSED_EVENT?: string;
  withMISSED_EVENT(MISSED_EVENT: string | null): ModelUserFeedbackCategory;

  /**
   * Any other feedback no covered by the categories.
   */
  readonly OTHER?: string;
  withOTHER(OTHER: string | null): ModelUserFeedbackCategory;

  /**
   * The model has a poor reconstruction.
   */
  readonly POOR_RECONSTRUCTION?: string;
  withPOOR_RECONSTRUCTION(POOR_RECONSTRUCTION: string | null): ModelUserFeedbackCategory;

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
