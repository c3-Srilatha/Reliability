// TypeScript definitions for the C3 type Jarvis.Step.Status

/**
 * The status of a {@link Jarvis.Step.Result}
 *
 * The inherited enum ERROR, TIMED_OUT, and ABORT all result in subsequent steps being skipped.
 *
 * TODO: PLAT-46267 - Unable to redefine enum values with ~
 *
 * All the inherited enums are present in this file to define the order of severity of the result.
 *
 * @remarks this represents a value passed to a method that expects an instance of Jarvis.Step.Status
 */
declare namespace Jarvis.Step {
  export interface IStatus {

    /**
     * The step has produced an ignorable result. Steps with this status will not be retried and steps proceeding
     * this step will still be executed.
     * This status will not factor into the calculation of the overall build status and cannot be the only status
     * of steps in a build.
     */
    readonly IGNORABLE: "IGNORABLE";

    /**
     * @inheritdoc
     */
    readonly SUCCESS: "SUCCESS";

    /**
     * The step has produced some results but is still executing. Eventually this status will
     * transition to a final status.
     */
    readonly PARTIAL: "PARTIAL";

    /**
     * @inheritdoc
     * The details of these failures will be in the respective subtypes of {@link Jarvis.Step.Result}.
     * Steps proceeding this step will still be executed.
     */
    readonly NON_FATAL_ERROR: "NON_FATAL_ERROR";

    /**
     * @inheritdoc
     */
    readonly NON_RETRYABLE_ERROR: "NON_RETRYABLE_ERROR";

    /**
     * The step was skipped in the build and will not run in its build lifecycle.
     * Utilized for downstream steps when an upstream step does not complete successfully.
     * SKIPPED steps cannot appear in a successful build.
     */
    readonly SKIPPED: "SKIPPED";

    /**
     * @inheritdoc
     */
    readonly ERROR: "ERROR";

    /**
     * @inheritdoc
     */
    readonly TIMED_OUT: "TIMED_OUT";

    /**
     * @inheritdoc
     */
    readonly ABORTED: "ABORTED";
  }
}

/**
 * The status of a {@link Jarvis.Step.Result}
 *
 * The inherited enum ERROR, TIMED_OUT, and ABORT all result in subsequent steps being skipped.
 *
 * TODO: PLAT-46267 - Unable to redefine enum values with ~
 *
 * All the inherited enums are present in this file to define the order of severity of the result.
 *
 * @remarks this represents a made instance of Jarvis.Step.Status
 */
declare namespace Jarvis.Step {
  export class Status {

    /**
     * The step has produced an ignorable result. Steps with this status will not be retried and steps proceeding
     * this step will still be executed.
     * This status will not factor into the calculation of the overall build status and cannot be the only status
     * of steps in a build.
     */
    static readonly IGNORABLE: "IGNORABLE";

    /**
     * @inheritdoc
     */
    static readonly SUCCESS: "SUCCESS";

    /**
     * The step has produced some results but is still executing. Eventually this status will
     * transition to a final status.
     */
    static readonly PARTIAL: "PARTIAL";

    /**
     * @inheritdoc
     * The details of these failures will be in the respective subtypes of {@link Jarvis.Step.Result}.
     * Steps proceeding this step will still be executed.
     */
    static readonly NON_FATAL_ERROR: "NON_FATAL_ERROR";

    /**
     * @inheritdoc
     */
    static readonly NON_RETRYABLE_ERROR: "NON_RETRYABLE_ERROR";

    /**
     * The step was skipped in the build and will not run in its build lifecycle.
     * Utilized for downstream steps when an upstream step does not complete successfully.
     * SKIPPED steps cannot appear in a successful build.
     */
    static readonly SKIPPED: "SKIPPED";

    /**
     * @inheritdoc
     */
    static readonly ERROR: "ERROR";

    /**
     * @inheritdoc
     */
    static readonly TIMED_OUT: "TIMED_OUT";

    /**
     * @inheritdoc
     */
    static readonly ABORTED: "ABORTED";

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
