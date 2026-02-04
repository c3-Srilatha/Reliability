// TypeScript definitions for the C3 type ModelUserFeedbackSuggestion

/**
 * Possible values for the model user feedback suggestion.
 *
 * @remarks this represents a value passed to a method that expects an instance of ModelUserFeedbackSuggestion
 */
declare interface IModelUserFeedbackSuggestion {

  /**
   * The model needs a new configuration.
   */
  NEW_CONFIG?: string;

  /**
   * The model does not need any action.
   */
  NO_ACTION?: string;

  /**
   * The model needs to be retired.
   */
  RETIRE_MODEL?: string;

  /**
   * The model needs to be retrained.
   */
  RETRAIN?: string;

  /**
   * The model needs to be changed.
   */
  SWITCH_MODEL?: string;
}

/**
 * Possible values for the model user feedback suggestion.
 *
 * @remarks this represents a made instance of ModelUserFeedbackSuggestion
 */
declare class ModelUserFeedbackSuggestion {

  /**
   * The model needs a new configuration.
   */
  readonly NEW_CONFIG?: string;
  withNEW_CONFIG(NEW_CONFIG: string | null): ModelUserFeedbackSuggestion;

  /**
   * The model does not need any action.
   */
  readonly NO_ACTION?: string;
  withNO_ACTION(NO_ACTION: string | null): ModelUserFeedbackSuggestion;

  /**
   * The model needs to be retired.
   */
  readonly RETIRE_MODEL?: string;
  withRETIRE_MODEL(RETIRE_MODEL: string | null): ModelUserFeedbackSuggestion;

  /**
   * The model needs to be retrained.
   */
  readonly RETRAIN?: string;
  withRETRAIN(RETRAIN: string | null): ModelUserFeedbackSuggestion;

  /**
   * The model needs to be changed.
   */
  readonly SWITCH_MODEL?: string;
  withSWITCH_MODEL(SWITCH_MODEL: string | null): ModelUserFeedbackSuggestion;

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
