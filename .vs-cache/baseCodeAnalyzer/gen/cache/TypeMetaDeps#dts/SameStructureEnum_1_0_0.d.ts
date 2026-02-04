// TypeScript definitions for the C3 type SameStructureEnum_1_0_0

/**
 * This Type is unchanged and is also an {@link Enum} Type.
 *
 * @remarks this represents a value passed to a method that expects an instance of SameStructureEnum_1_0_0
 */
declare interface ISameStructureEnum_1_0_0 {

  /**
   * This field is unchanged and is an enum value for "good".
   */
  GOOD?: string;

  /**
   * This field is unchanged and is an enum value for "bad".
   */
  BAD?: string;

  /**
   * This field is unchanged and is an enum value for "ugly".
   */
  UGLY?: string;
}

/**
 * This Type is unchanged and is also an {@link Enum} Type.
 *
 * @remarks this represents a made instance of SameStructureEnum_1_0_0
 */
declare class SameStructureEnum_1_0_0 {

  /**
   * This field is unchanged and is an enum value for "good".
   */
  readonly GOOD?: string;
  withGOOD(GOOD: string | null): SameStructureEnum_1_0_0;

  /**
   * This field is unchanged and is an enum value for "bad".
   */
  readonly BAD?: string;
  withBAD(BAD: string | null): SameStructureEnum_1_0_0;

  /**
   * This field is unchanged and is an enum value for "ugly".
   */
  readonly UGLY?: string;
  withUGLY(UGLY: string | null): SameStructureEnum_1_0_0;

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
