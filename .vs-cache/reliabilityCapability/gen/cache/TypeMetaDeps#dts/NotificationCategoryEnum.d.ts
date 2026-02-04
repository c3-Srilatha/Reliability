// TypeScript definitions for the C3 type NotificationCategoryEnum

/**
 * Possible values for the notification category preference.
 *
 * @remarks this represents a value passed to a method that expects an instance of NotificationCategoryEnum
 */
declare interface INotificationCategoryEnum {

  /**
   * Represents notifications related to comments on cases.
   */
  CaseComment?: string;

  /**
   * Represents notifications for alerts.
   */
  ALERTS?: string;

  /**
   * Represents notifications for assigned cases.
   */
  ASSIGNED_CASES?: string;

  /**
   * Represents notifications related to machine learning model training updates.
   */
  ML_MODEL_TRAINING?: string;

  /**
   * The purpose of this category is to summarize status updates for DS and SME which are sent at the end of each day to
   * user belonging to the defined user groups. Configuration can be found in
   * {@link ReliabilityEmailUpdateNotificationConfig}.
   */
  RELIABILITY_EMAIL_UPDATE?: string;
}

/**
 * Possible values for the notification category preference.
 *
 * @remarks this represents a made instance of NotificationCategoryEnum
 */
declare class NotificationCategoryEnum {

  /**
   * Represents notifications related to comments on cases.
   */
  readonly CaseComment?: string;
  withCaseComment(CaseComment: string | null): NotificationCategoryEnum;

  /**
   * Represents notifications for alerts.
   */
  readonly ALERTS?: string;
  withALERTS(ALERTS: string | null): NotificationCategoryEnum;

  /**
   * Represents notifications for assigned cases.
   */
  readonly ASSIGNED_CASES?: string;
  withASSIGNED_CASES(ASSIGNED_CASES: string | null): NotificationCategoryEnum;

  /**
   * Represents notifications related to machine learning model training updates.
   */
  readonly ML_MODEL_TRAINING?: string;
  withML_MODEL_TRAINING(ML_MODEL_TRAINING: string | null): NotificationCategoryEnum;

  /**
   * The purpose of this category is to summarize status updates for DS and SME which are sent at the end of each day to
   * user belonging to the defined user groups. Configuration can be found in
   * {@link ReliabilityEmailUpdateNotificationConfig}.
   */
  readonly RELIABILITY_EMAIL_UPDATE?: string;
  withRELIABILITY_EMAIL_UPDATE(RELIABILITY_EMAIL_UPDATE: string | null): NotificationCategoryEnum;

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
