// TypeScript definitions for the C3 type ReliabilityPriorityEnum

/**
 * Enum representing the priority levels for reliability.
 * The `ReliabilityPriorityEnum` is used to define the levels of priority for reliability issues.
 * Each priority level helps determine how critical an issue is to the overall system's reliability,
 * and how urgently it should be addressed.
 *
 * The enum values are:
 *
 * - **P0**: Highest priority. Issues with P0 should be addressed immediately because they directly affect system reliability.
 * - **P1**: Medium priority. Issues with P1 are important but not as urgent as P0. They should be addressed in a timely manner.
 * - **P2**: Lowest priority. P2 issues are less critical and can be resolved later without immediate impact on system reliability.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityPriorityEnum
 */
declare interface IReliabilityPriorityEnum {

  /**
   * Priority 0 - Highest priority.
   */
  P0?: string;

  /**
   * Priority 1 - Medium priority.
   */
  P1?: string;

  /**
   * Priority 2 - Lowest priority.
   */
  P2?: string;
}

/**
 * Enum representing the priority levels for reliability.
 * The `ReliabilityPriorityEnum` is used to define the levels of priority for reliability issues.
 * Each priority level helps determine how critical an issue is to the overall system's reliability,
 * and how urgently it should be addressed.
 *
 * The enum values are:
 *
 * - **P0**: Highest priority. Issues with P0 should be addressed immediately because they directly affect system reliability.
 * - **P1**: Medium priority. Issues with P1 are important but not as urgent as P0. They should be addressed in a timely manner.
 * - **P2**: Lowest priority. P2 issues are less critical and can be resolved later without immediate impact on system reliability.
 *
 * @remarks this represents a made instance of ReliabilityPriorityEnum
 */
declare class ReliabilityPriorityEnum {

  /**
   * Priority 0 - Highest priority.
   */
  readonly P0?: string;
  withP0(P0: string | null): ReliabilityPriorityEnum;

  /**
   * Priority 1 - Medium priority.
   */
  readonly P1?: string;
  withP1(P1: string | null): ReliabilityPriorityEnum;

  /**
   * Priority 2 - Lowest priority.
   */
  readonly P2?: string;
  withP2(P2: string | null): ReliabilityPriorityEnum;

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
