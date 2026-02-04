// TypeScript definitions for the C3 type Logger.Level

/**
 * Logging levels. These correspond to the logging methods in **Logger**. For example {@link Logger#info} produces
 * an entry of level #INFO.
 *
 * @see Logger
 *
 * @remarks this represents a value passed to a method that expects an instance of Logger.Level
 */
declare namespace Logger {
  export interface ILevel {

    readonly ERROR: "ERROR";

    readonly WARN: "WARN";

    readonly INFO: "INFO";

    readonly DEBUG: "DEBUG";

    readonly TRACE: "TRACE";
  }
}

/**
 * Logging levels. These correspond to the logging methods in **Logger**. For example {@link Logger#info} produces
 * an entry of level #INFO.
 *
 * @see Logger
 *
 * @remarks this represents a made instance of Logger.Level
 */
declare namespace Logger {
  export class Level {

    static readonly ERROR: "ERROR";

    static readonly WARN: "WARN";

    static readonly INFO: "INFO";

    static readonly DEBUG: "DEBUG";

    static readonly TRACE: "TRACE";

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
     * Test whether the specified test level is the same or higher than the target level. For example, any (non-null)
     * value will return true for #TRACE, but only `ERROR` will return true for #ERROR.
     */
    static sameOrHigher(test: string | null, target: string): boolean;

    /**
     * Test whether the specified test level is the same or lower than the target level. For example, any (non-null)
     * value will return true for #ERROR, but only `TRACE` will return true for #TRACE.
     */
    static sameOrLower(test: string | null, target: string): boolean;

    /**
     * Get the level from a near match (either lower-case or a natural abbreviation).
     */
    static fromString(s: string | null, failIfInvalid?: boolean): string | null;
  }
}


interface λConsumer<T> {
  (t: T): void
}
