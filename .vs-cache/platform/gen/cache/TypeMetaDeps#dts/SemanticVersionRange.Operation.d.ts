// TypeScript definitions for the C3 type SemanticVersionRange.Operation

/**
 * Defines what operators can be used in a {@link SemanticVersionRange} string.
 * See {@link SemanticVersionRange} for more information.
 *
 * @remarks this represents a value passed to a method that expects an instance of SemanticVersionRange.Operation
 */
declare namespace SemanticVersionRange {
  export interface IOperation {

    readonly EQ: '=';

    readonly GT: '>';

    readonly GTE: '>=';

    readonly LT: '<';

    readonly LTE: '<=';

    readonly TILDE: '~';

    readonly CARET: '^';

    readonly WILDCARD: '*';

    readonly OR: '||';

    readonly AND: ' ';
  }
}

/**
 * Defines what operators can be used in a {@link SemanticVersionRange} string.
 * See {@link SemanticVersionRange} for more information.
 *
 * @remarks this represents a made instance of SemanticVersionRange.Operation
 */
declare namespace SemanticVersionRange {
  export class Operation {

    static readonly EQ: '=';

    static readonly GT: '>';

    static readonly GTE: '>=';

    static readonly LT: '<';

    static readonly LTE: '<=';

    static readonly TILDE: '~';

    static readonly CARET: '^';

    static readonly WILDCARD: '*';

    static readonly OR: '||';

    static readonly AND: ' ';

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
