// TypeScript definitions for the C3 type ReliabilityActivityCategory

/**
 * Enum of possible categories of {@link CaseActivity}
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityActivityCategory
 */
declare interface IReliabilityActivityCategory {

  /**
   * Activity when some comment {@link CaseComment} is added.
   */
  COMMENT_ADDED?: string;

  /**
   * Activity when state {@link CaseState} is changed to close.
   */
  CLOSED?: string;

  /**
   * Activity when state {@link CaseState} is changed to open.
   */
  OPENED?: string;

  /**
   * Activity when {@link CaseAssigneeHistory} have some entries.
   */
  ASSIGNED?: string;

  /**
   * Activity when some comment {@link CaseComment} is added with a file.
   */
  FILE_UPLOADED?: string;

  /**
   * Activity when {@link CasePriorityHistory} have some entries.
   */
  PRIORITY_CHANGED?: string;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been added to a case by a user.
   */
  ADDED_TO_CASE?: string;

  /**
   * Activity when {@link ReliabilityAssetAlert} status has been changed to 'Case'.
   */
  STATE_CHANGED_TO_CASE?: string;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been automatically added to a case.
   */
  AUTOMATICALLY_ADDED_TO_CASE?: string;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been removed from a case.
   */
  ALERT_REMOVED_FROM_CASE?: string;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been muted.
   */
  MUTED?: string;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been categorized.
   */
  ALERT_CATEGORIZED?: string;
}

/**
 * Enum of possible categories of {@link CaseActivity}
 *
 * @remarks this represents a made instance of ReliabilityActivityCategory
 */
declare class ReliabilityActivityCategory {

  /**
   * Activity when some comment {@link CaseComment} is added.
   */
  readonly COMMENT_ADDED?: string;
  withCOMMENT_ADDED(COMMENT_ADDED: string | null): ReliabilityActivityCategory;

  /**
   * Activity when state {@link CaseState} is changed to close.
   */
  readonly CLOSED?: string;
  withCLOSED(CLOSED: string | null): ReliabilityActivityCategory;

  /**
   * Activity when state {@link CaseState} is changed to open.
   */
  readonly OPENED?: string;
  withOPENED(OPENED: string | null): ReliabilityActivityCategory;

  /**
   * Activity when {@link CaseAssigneeHistory} have some entries.
   */
  readonly ASSIGNED?: string;
  withASSIGNED(ASSIGNED: string | null): ReliabilityActivityCategory;

  /**
   * Activity when some comment {@link CaseComment} is added with a file.
   */
  readonly FILE_UPLOADED?: string;
  withFILE_UPLOADED(FILE_UPLOADED: string | null): ReliabilityActivityCategory;

  /**
   * Activity when {@link CasePriorityHistory} have some entries.
   */
  readonly PRIORITY_CHANGED?: string;
  withPRIORITY_CHANGED(PRIORITY_CHANGED: string | null): ReliabilityActivityCategory;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been added to a case by a user.
   */
  readonly ADDED_TO_CASE?: string;
  withADDED_TO_CASE(ADDED_TO_CASE: string | null): ReliabilityActivityCategory;

  /**
   * Activity when {@link ReliabilityAssetAlert} status has been changed to 'Case'.
   */
  readonly STATE_CHANGED_TO_CASE?: string;
  withSTATE_CHANGED_TO_CASE(STATE_CHANGED_TO_CASE: string | null): ReliabilityActivityCategory;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been automatically added to a case.
   */
  readonly AUTOMATICALLY_ADDED_TO_CASE?: string;
  withAUTOMATICALLY_ADDED_TO_CASE(AUTOMATICALLY_ADDED_TO_CASE: string | null): ReliabilityActivityCategory;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been removed from a case.
   */
  readonly ALERT_REMOVED_FROM_CASE?: string;
  withALERT_REMOVED_FROM_CASE(ALERT_REMOVED_FROM_CASE: string | null): ReliabilityActivityCategory;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been muted.
   */
  readonly MUTED?: string;
  withMUTED(MUTED: string | null): ReliabilityActivityCategory;

  /**
   * Activity when {@link ReliabilityAssetAlert} has been categorized.
   */
  readonly ALERT_CATEGORIZED?: string;
  withALERT_CATEGORIZED(ALERT_CATEGORIZED: string | null): ReliabilityActivityCategory;

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
