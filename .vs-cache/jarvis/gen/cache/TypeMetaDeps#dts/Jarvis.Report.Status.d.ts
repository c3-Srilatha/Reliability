// TypeScript definitions for the C3 type Jarvis.Report.Status

/**
 * Represents the status of a {@link Jarvis.Report}. For simplicity, reports can mix state and status.
 *
 * @remarks this represents a value passed to a method that expects an instance of Jarvis.Report.Status
 */
declare namespace Jarvis.Report {
  export interface IStatus {

    /**
     * Scheduled but has not yet picked up by Jarvis Executor
     */
    readonly PENDING: "PENDING";

    /**
     * Used exclusively for executors. Describes an executor that is having infrastructure brought up or is being
     * configured.
     */
    readonly INITIALIZING: "INITIALIZING";

    /**
     * Used exclusively for {@link Jarvis.Step}. The step is assigned to an executor but it has yet to be
     * begin its execution.
     */
    readonly ASSIGNED: "ASSIGNED";

    /**
     * Being executed on one of Jarvis Executors; note, intermediate result can be produced during execution
     */
    readonly RUNNING: "RUNNING";

    /**
     * The execution is being terminated because it has timed out. When the termination is complete a corresponding
     * status of {@link Jarvis.Status#TIMED_OUT} will be set on the respective result.
     */
    readonly TIMING_OUT: "TIMING_OUT";

    /**
     * The execution is in the process of being aborted. When the abortion is complete, the state will transition
     * to DONE and a corresponding Result object with status ABORTED will be created.
     */
    readonly ABORTING: "ABORTING";

    /**
     * At this point, this build or step will not be picked up by an executor. It does not indicate a successful or
     * failed run.
     */
    readonly DONE: "DONE";

    /**
     * The execution was successful
     */
    readonly SUCCESS: "SUCCESS";

    /**
     * The execution completed, but has non fatal errors.
     */
    readonly NON_FATAL_ERROR: "NON_FATAL_ERROR";

    /**
     * An error was thrown in the execution.
     */
    readonly ERROR: "ERROR";

    /**
     * None retryable error thrown in the execution.
     */
    readonly NON_RETRYABLE_ERROR: "NON_RETRYABLE_ERROR";

    /**
     * The execution did not complete in allocated time so it was canceled by Jarvis.
     */
    readonly TIMED_OUT: "TIMED_OUT";

    /**
     * The execution did not complete because it was aborted.
     */
    readonly ABORTED: "ABORTED";
  }
}

/**
 * Represents the status of a {@link Jarvis.Report}. For simplicity, reports can mix state and status.
 *
 * @remarks this represents a made instance of Jarvis.Report.Status
 */
declare namespace Jarvis.Report {
  export class Status {

    /**
     * Scheduled but has not yet picked up by Jarvis Executor
     */
    static readonly PENDING: "PENDING";

    /**
     * Used exclusively for executors. Describes an executor that is having infrastructure brought up or is being
     * configured.
     */
    static readonly INITIALIZING: "INITIALIZING";

    /**
     * Used exclusively for {@link Jarvis.Step}. The step is assigned to an executor but it has yet to be
     * begin its execution.
     */
    static readonly ASSIGNED: "ASSIGNED";

    /**
     * Being executed on one of Jarvis Executors; note, intermediate result can be produced during execution
     */
    static readonly RUNNING: "RUNNING";

    /**
     * The execution is being terminated because it has timed out. When the termination is complete a corresponding
     * status of {@link Jarvis.Status#TIMED_OUT} will be set on the respective result.
     */
    static readonly TIMING_OUT: "TIMING_OUT";

    /**
     * The execution is in the process of being aborted. When the abortion is complete, the state will transition
     * to DONE and a corresponding Result object with status ABORTED will be created.
     */
    static readonly ABORTING: "ABORTING";

    /**
     * At this point, this build or step will not be picked up by an executor. It does not indicate a successful or
     * failed run.
     */
    static readonly DONE: "DONE";

    /**
     * The execution was successful
     */
    static readonly SUCCESS: "SUCCESS";

    /**
     * The execution completed, but has non fatal errors.
     */
    static readonly NON_FATAL_ERROR: "NON_FATAL_ERROR";

    /**
     * An error was thrown in the execution.
     */
    static readonly ERROR: "ERROR";

    /**
     * None retryable error thrown in the execution.
     */
    static readonly NON_RETRYABLE_ERROR: "NON_RETRYABLE_ERROR";

    /**
     * The execution did not complete in allocated time so it was canceled by Jarvis.
     */
    static readonly TIMED_OUT: "TIMED_OUT";

    /**
     * The execution did not complete because it was aborted.
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

    /**
     * Determines whether or not this state is in the process of terminating.
     */
    static isTerminating(state?: string | null): boolean;

    /**
     * Determines whether or not this state can be terminated.
     */
    static isTerminable(state?: string | null): boolean;
  }
}


interface λConsumer<T> {
  (t: T): void
}
