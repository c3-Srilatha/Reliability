// TypeScript definitions for the C3 type DataGrid.NumberStyle

/**
 * Values for {@link DataGrid.FormatSpec#numberStyle}.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataGrid.NumberStyle
 */
declare namespace DataGrid {
  export interface INumberStyle {

    /**
     * number of significant digits (regardless of decimal point)
     */
    readonly SIGNIFICANT: "SIGNIFICANT";

    /**
     * fixed number of digits after the decimal point
     */
    readonly FIXED: "FIXED";

    /**
     * use exponential notation with fixed precision
     */
    readonly EXPONENTIAL: "EXPONENTIAL";

    /**
     * platform native representation (no thousands separators)
     */
    readonly NATURAL: "NATURAL";
  }
}

/**
 * Values for {@link DataGrid.FormatSpec#numberStyle}.
 *
 * @remarks this represents a made instance of DataGrid.NumberStyle
 */
declare namespace DataGrid {
  export class NumberStyle {

    /**
     * number of significant digits (regardless of decimal point)
     */
    static readonly SIGNIFICANT: "SIGNIFICANT";

    /**
     * fixed number of digits after the decimal point
     */
    static readonly FIXED: "FIXED";

    /**
     * use exponential notation with fixed precision
     */
    static readonly EXPONENTIAL: "EXPONENTIAL";

    /**
     * platform native representation (no thousands separators)
     */
    static readonly NATURAL: "NATURAL";

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
}


interface λConsumer<T> {
  (t: T): void
}
