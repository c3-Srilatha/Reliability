// TypeScript definitions for the C3 type SecurityLevel

/**
 * Platform security levels
 *
 * @remarks this represents a value passed to a method that expects an instance of SecurityLevel
 */
declare interface ISecurityLevel {

  /**
   * Level of access defined by C3.ClusterAdmin
   */
  readonly ONE: 1;

  /**
   * Level of access defined by C3.EnvAdmin
   */
  readonly TWO: 2;

  /**
   * Level of access defined by C3.AppAdmin
   */
  readonly THREE: 3;

  /**
   * Level of access defined by C3.Developer that is the default role used by background processes
   */
  readonly SEVEN: 7;

  /**
   * Level of access for all non-security level Roles. Equivalent to Java's Integer.MAX_VALUE.
   */
  readonly MAX: 2147483647;
}

/**
 * Platform security levels
 *
 * @remarks this represents a made instance of SecurityLevel
 */
declare class SecurityLevel {

  /**
   * Level of access defined by C3.ClusterAdmin
   */
  static readonly ONE: 1;

  /**
   * Level of access defined by C3.EnvAdmin
   */
  static readonly TWO: 2;

  /**
   * Level of access defined by C3.AppAdmin
   */
  static readonly THREE: 3;

  /**
   * Level of access defined by C3.Developer that is the default role used by background processes
   */
  static readonly SEVEN: 7;

  /**
   * Level of access for all non-security level Roles. Equivalent to Java's Integer.MAX_VALUE.
   */
  static readonly MAX: 2147483647;

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): number | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: number | null, failIfInvalid?: boolean): string | null;

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
  static valueIndex(value: number | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<number | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<number | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, number | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: number): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<number> | null): void;

  /**
   * Returns the security level of the provided action group.
   */
  static forActionGroup(actionGroup: string | null, failIfInvalid?: boolean): number | null;
}


interface λConsumer<T> {
  (t: T): void
}
