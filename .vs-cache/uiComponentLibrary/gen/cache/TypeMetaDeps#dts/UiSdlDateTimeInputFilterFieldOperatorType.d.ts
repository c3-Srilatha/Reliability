// TypeScript definitions for the C3 type UiSdlDateTimeInputFilterFieldOperatorType

/**
 * @remarks this represents a value passed to a method that expects an instance of UiSdlDateTimeInputFilterFieldOperatorType
 */
declare interface IUiSdlDateTimeInputFilterFieldOperatorType {

  /**
   * Less than.
   */
  readonly LESS_THAN: "LESS_THAN";

  /**
   * Greater than.
   */
  readonly GREATER_THAN: "GREATER_THAN";

  /**
   * Less than or equal to.
   */
  readonly LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO";

  /**
   * Greater than or equal to.
   */
  readonly GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO";

  /**
   * Not equal.
   */
  readonly NOT_EQUAL: "NOT_EQUAL";

  /**
   * Equal.
   */
  readonly EQUAL: "EQUAL";
}

/**
 * @remarks this represents a made instance of UiSdlDateTimeInputFilterFieldOperatorType
 */
declare class UiSdlDateTimeInputFilterFieldOperatorType {

  /**
   * Less than.
   */
  static readonly LESS_THAN: "LESS_THAN";

  /**
   * Greater than.
   */
  static readonly GREATER_THAN: "GREATER_THAN";

  /**
   * Less than or equal to.
   */
  static readonly LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO";

  /**
   * Greater than or equal to.
   */
  static readonly GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO";

  /**
   * Not equal.
   */
  static readonly NOT_EQUAL: "NOT_EQUAL";

  /**
   * Equal.
   */
  static readonly EQUAL: "EQUAL";

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
