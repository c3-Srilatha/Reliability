// TypeScript definitions for the C3 type BaseCodeAnalysis.Metric.Message.Side

/**
 * Which side of a file diff the [line](BaseCodeAnalysis.Metric.Message#line) and
 * [column](BaseCodeAnalysis.Metric.Message#column) of a {@link BaseCodeAnalysis.Metric.Message}
 * correspond to. This is only relevant for diff-based code analysis.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.Metric.Message.Side
 */
declare namespace BaseCodeAnalysis.Metric.Message {
  export interface ISide {

    /**
     * This message corresponds to a deletion (the left side of a diff).
     */
    LEFT?: string;

    /**
     * This message corresponds to an addition (the right side of a diff).
     */
    RIGHT?: string;
  }
}

/**
 * Which side of a file diff the [line](BaseCodeAnalysis.Metric.Message#line) and
 * [column](BaseCodeAnalysis.Metric.Message#column) of a {@link BaseCodeAnalysis.Metric.Message}
 * correspond to. This is only relevant for diff-based code analysis.
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.Metric.Message.Side
 */
declare namespace BaseCodeAnalysis.Metric.Message {
  export class Side {

    /**
     * This message corresponds to a deletion (the left side of a diff).
     */
    readonly LEFT?: string;
    withLEFT(LEFT: string | null): BaseCodeAnalysis.Metric.Message.Side;

    /**
     * This message corresponds to an addition (the right side of a diff).
     */
    readonly RIGHT?: string;
    withRIGHT(RIGHT: string | null): BaseCodeAnalysis.Metric.Message.Side;

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
}


interface λConsumer<T> {
  (t: T): void
}
