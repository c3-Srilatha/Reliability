// TypeScript definitions for the C3 type BinaryOpArithmetic

/**
 * Operator grouping of binary operators which perform elementwise comparison operations. These operators all share the
 * same parameters within each {@link StdLib} subtype.
 * @see Ann.OpGen
 *
 * @remarks this represents a value passed to a method that expects an instance of BinaryOpArithmetic
 */
declare interface IBinaryOpArithmetic {

  /**
   * Adds other value to elements.
   */
  readonly ADD: "ADD";

  /**
   * Subtracts other value from elements.
   */
  readonly SUB: "SUB";

  /**
   * Multiples other value to elements.
   */
  readonly MUL: "MUL";

  /**
   * Alias for TRUEDIV.
   */
  readonly DIV: "DIV";

  /**
   * Floating point division of elements by other value.
   */
  readonly TRUEDIV: "TRUEDIV";

  /**
   * Floor division of elements by other value.
   */
  readonly FLOORDIV: "FLOORDIV";

  /**
   * Modulos elements by other value.
   */
  readonly MOD: "MOD";

  /**
   * Raises elements to the power of other value.
   */
  readonly POW: "POW";

  readonly RADD: "RADD";

  readonly RSUB: "RSUB";

  readonly RMUL: "RMUL";

  readonly RDIV: "RDIV";

  readonly RTRUEDIV: "RTRUEDIV";

  readonly RFLOORDIV: "RFLOORDIV";

  readonly RMOD: "RMOD";

  readonly RPOW: "RPOW";
}

/**
 * Operator grouping of binary operators which perform elementwise comparison operations. These operators all share the
 * same parameters within each {@link StdLib} subtype.
 * @see Ann.OpGen
 *
 * @remarks this represents a made instance of BinaryOpArithmetic
 */
declare class BinaryOpArithmetic {

  /**
   * Adds other value to elements.
   */
  static readonly ADD: "ADD";

  /**
   * Subtracts other value from elements.
   */
  static readonly SUB: "SUB";

  /**
   * Multiples other value to elements.
   */
  static readonly MUL: "MUL";

  /**
   * Alias for TRUEDIV.
   */
  static readonly DIV: "DIV";

  /**
   * Floating point division of elements by other value.
   */
  static readonly TRUEDIV: "TRUEDIV";

  /**
   * Floor division of elements by other value.
   */
  static readonly FLOORDIV: "FLOORDIV";

  /**
   * Modulos elements by other value.
   */
  static readonly MOD: "MOD";

  /**
   * Raises elements to the power of other value.
   */
  static readonly POW: "POW";

  static readonly RADD: "RADD";

  static readonly RSUB: "RSUB";

  static readonly RMUL: "RMUL";

  static readonly RDIV: "RDIV";

  static readonly RTRUEDIV: "RTRUEDIV";

  static readonly RFLOORDIV: "RFLOORDIV";

  static readonly RMOD: "RMOD";

  static readonly RPOW: "RPOW";

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
