// TypeScript definitions for the C3 type ValueTypeUsage

/**
 * List of places where the ValueType usage occurs
 *
 * @remarks this represents a value passed to a method that expects an instance of ValueTypeUsage
 */
declare interface IValueTypeUsage {

  /**
   * usage is at action return type
   * E.g. function(arg: Digest<V>) : int
   *                                  |
   */
  readonly RETURN_TYPE: "RETURN_TYPE";

  /**
   * usage is an argument to a method
   * E.g. function(arg: Digest<V>)
   *                       |
   */
  readonly FUNC_ARG: "FUNC_ARG";

  /**
   * usage is an var binding in a function argument
   * E.g. function(arg: Digest<V>)
   *                           |
   */
  readonly VAR_BINDING_IN_FUNC_ARG: "VAR_BINDING_IN_FUNC_ARG";

  /**
   * usage is at action return type
   * E.g. function(arg: Digest<V>) : Digest<V>
   *                                        |
   */
  readonly VAR_BINDING_IN_RETURN_TYPE: "VAR_BINDING_IN_RETURN_TYPE";

  /**
   * usage is on the field
   * E.g. Digest<V> obj;
   *         |
   */
  readonly FIELD: "FIELD";

  /**
   * usage is on the var binding of the field's value type
   * E.g. Digest<V> obj;
   *             |
   */
  readonly VAR_BINDING_IN_FIELD: "VAR_BINDING_IN_FIELD";
}

/**
 * List of places where the ValueType usage occurs
 *
 * @remarks this represents a made instance of ValueTypeUsage
 */
declare class ValueTypeUsage {

  /**
   * usage is at action return type
   * E.g. function(arg: Digest<V>) : int
   *                                  |
   */
  static readonly RETURN_TYPE: "RETURN_TYPE";

  /**
   * usage is an argument to a method
   * E.g. function(arg: Digest<V>)
   *                       |
   */
  static readonly FUNC_ARG: "FUNC_ARG";

  /**
   * usage is an var binding in a function argument
   * E.g. function(arg: Digest<V>)
   *                           |
   */
  static readonly VAR_BINDING_IN_FUNC_ARG: "VAR_BINDING_IN_FUNC_ARG";

  /**
   * usage is at action return type
   * E.g. function(arg: Digest<V>) : Digest<V>
   *                                        |
   */
  static readonly VAR_BINDING_IN_RETURN_TYPE: "VAR_BINDING_IN_RETURN_TYPE";

  /**
   * usage is on the field
   * E.g. Digest<V> obj;
   *         |
   */
  static readonly FIELD: "FIELD";

  /**
   * usage is on the var binding of the field's value type
   * E.g. Digest<V> obj;
   *             |
   */
  static readonly VAR_BINDING_IN_FIELD: "VAR_BINDING_IN_FIELD";

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

  /**
   * @return true if ValueTypeUsage is in action return type
   */
  static isInReturnType(usage: string | null): boolean;

  /**
   * @return true if ValueTypeUsage is in action argument
   */
  static isInFunc(usage: string | null): boolean;

  /**
   * @return true if ValueTypeUsage is in a var binding
   */
  static isInVarBinding(usage: string | null): boolean;
}


interface λConsumer<T> {
  (t: T): void
}
