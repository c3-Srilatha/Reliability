// TypeScript definitions for the C3 type Jarvis.Content.Kind

/**
 * Represents the kind of a {@link Jarvis.Content}.
 *
 * @remarks this represents a value passed to a method that expects an instance of Jarvis.Content.Kind
 */
declare namespace Jarvis.Content {
  export interface IKind {

    /**
     * Set when saving the complete record of logs for a {@link Jarvis.Step}.
     */
    readonly LOG: "LOG";

    /**
     * Set when periodically saving logs for a {@link Jarvis.Step}.
     */
    readonly LOG_CHUNK: "LOG_CHUNK";

    /**
     * Set when saving screenshots for failed UI tests.
     */
    readonly SCREENSHOT: "SCREENSHOT";

    /**
     * Set when saving a ZIP of all the artifacts saved for a {@link Jarvis.Step}.
     */
    readonly STEP_ARTIFACTS: "STEP_ARTIFACTS";

    /**
     * Set when saving an individual test error that occurred during a {@link Jarvis.Step}.
     */
    readonly TEST_ERROR: "TEST_ERROR";

    /**
     * Set when saving an individual test failure that occurred during a {@link Jarvis.Step}.
     */
    readonly TEST_FAILURE: "TEST_FAILURE";

    /**
     * Set when saving an aggregation of all the test failures and errors that occurred during a {@link Jarvis.Step}.
     */
    readonly TEST_FAILURES_AND_ERRORS: "TEST_FAILURES_AND_ERRORS";
  }
}

/**
 * Represents the kind of a {@link Jarvis.Content}.
 *
 * @remarks this represents a made instance of Jarvis.Content.Kind
 */
declare namespace Jarvis.Content {
  export class Kind {

    /**
     * Set when saving the complete record of logs for a {@link Jarvis.Step}.
     */
    static readonly LOG: "LOG";

    /**
     * Set when periodically saving logs for a {@link Jarvis.Step}.
     */
    static readonly LOG_CHUNK: "LOG_CHUNK";

    /**
     * Set when saving screenshots for failed UI tests.
     */
    static readonly SCREENSHOT: "SCREENSHOT";

    /**
     * Set when saving a ZIP of all the artifacts saved for a {@link Jarvis.Step}.
     */
    static readonly STEP_ARTIFACTS: "STEP_ARTIFACTS";

    /**
     * Set when saving an individual test error that occurred during a {@link Jarvis.Step}.
     */
    static readonly TEST_ERROR: "TEST_ERROR";

    /**
     * Set when saving an individual test failure that occurred during a {@link Jarvis.Step}.
     */
    static readonly TEST_FAILURE: "TEST_FAILURE";

    /**
     * Set when saving an aggregation of all the test failures and errors that occurred during a {@link Jarvis.Step}.
     */
    static readonly TEST_FAILURES_AND_ERRORS: "TEST_FAILURES_AND_ERRORS";

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
