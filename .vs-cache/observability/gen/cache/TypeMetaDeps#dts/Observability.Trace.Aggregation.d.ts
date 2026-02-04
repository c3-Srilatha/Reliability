// TypeScript definitions for the C3 type Observability.Trace.Aggregation

/**
 * Enum specifying the types of aggregation supported for populating fields of
 * {@link Observability.Trace} from the values of {@link Observability.Span#attributes} of spans within the trace.
 * Aggregations are calulated incrementally as each new span is added.
 *
 * @See Observability.Trace#aggregationMapper for additional details.
 *
 * @remarks this represents a value passed to a method that expects an instance of Observability.Trace.Aggregation
 */
declare namespace Observability.Trace {
  export interface IAggregation {

    /**
     * Trace field will be populated using minimum of span attribute values recorded so far.
     * This operation is applicable to primitive numeric attribute values only.
     */
    MIN?: string;

    /**
     * Trace field will be populated using maximum of span attribute values recorded so far.
     * This operation is applicable to primitive numeric attribute values only.
     */
    MAX?: string;

    /**
     * Trace field will be populated using summation of span attribute values recorded so far.
     * This operation is applicable to primitive numeric attribute values only.
     */
    SUM?: string;

    /**
     * Trace field will be populated by counting the existence of a span attribute key recorded so far.
     * This operation is applicable to any span attribute key, irrespective of its value.
     */
    COUNT?: string;

    /**
     * Trace field will be populated using "OR" of span attribute values recorded so far.
     * This operation is applicable to boolean attribute values only.
     */
    ANY?: string;

    /**
     * Trace field will be populated using "AND" of span attribute values recorded so far.
     * This operation is applicable to boolean attribute values only.
     */
    ALL?: string;

    /**
     * Trace field will be populated by appending span attribute values recorded so far.
     * To use this feature, trace field type must be a list or array. This aggregation will be applied on root spans only
     * to propagate attribute values from root spans to trace.
     * Root {@link Observability.Span}s are spans whose {@link Observability.Span#parentSpanId} is null.
     */
    APPEND?: string;
  }
}

/**
 * Enum specifying the types of aggregation supported for populating fields of
 * {@link Observability.Trace} from the values of {@link Observability.Span#attributes} of spans within the trace.
 * Aggregations are calulated incrementally as each new span is added.
 *
 * @See Observability.Trace#aggregationMapper for additional details.
 *
 * @remarks this represents a made instance of Observability.Trace.Aggregation
 */
declare namespace Observability.Trace {
  export class Aggregation {

    /**
     * Trace field will be populated using minimum of span attribute values recorded so far.
     * This operation is applicable to primitive numeric attribute values only.
     */
    readonly MIN?: string;
    withMIN(MIN: string | null): Observability.Trace.Aggregation;

    /**
     * Trace field will be populated using maximum of span attribute values recorded so far.
     * This operation is applicable to primitive numeric attribute values only.
     */
    readonly MAX?: string;
    withMAX(MAX: string | null): Observability.Trace.Aggregation;

    /**
     * Trace field will be populated using summation of span attribute values recorded so far.
     * This operation is applicable to primitive numeric attribute values only.
     */
    readonly SUM?: string;
    withSUM(SUM: string | null): Observability.Trace.Aggregation;

    /**
     * Trace field will be populated by counting the existence of a span attribute key recorded so far.
     * This operation is applicable to any span attribute key, irrespective of its value.
     */
    readonly COUNT?: string;
    withCOUNT(COUNT: string | null): Observability.Trace.Aggregation;

    /**
     * Trace field will be populated using "OR" of span attribute values recorded so far.
     * This operation is applicable to boolean attribute values only.
     */
    readonly ANY?: string;
    withANY(ANY: string | null): Observability.Trace.Aggregation;

    /**
     * Trace field will be populated using "AND" of span attribute values recorded so far.
     * This operation is applicable to boolean attribute values only.
     */
    readonly ALL?: string;
    withALL(ALL: string | null): Observability.Trace.Aggregation;

    /**
     * Trace field will be populated by appending span attribute values recorded so far.
     * To use this feature, trace field type must be a list or array. This aggregation will be applied on root spans only
     * to propagate attribute values from root spans to trace.
     * Root {@link Observability.Span}s are spans whose {@link Observability.Span#parentSpanId} is null.
     */
    readonly APPEND?: string;
    withAPPEND(APPEND: string | null): Observability.Trace.Aggregation;

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
