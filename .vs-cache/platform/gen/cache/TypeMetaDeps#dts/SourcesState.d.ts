// TypeScript definitions for the C3 type SourcesState

/**
 * State of the Data Integration step
 * state transition:
 * initial ->  (rejected | validated)
 * validated -> scheduled -> processing -> (completed | (failing -> failed))
 * (scheduled | processing) -> stopping -> stopped
 *
 * @remarks this represents a value passed to a method that expects an instance of SourcesState
 */
declare interface ISourcesState {

  /**
   * Sources is synced with the file or the queue to determine source of truth.
   */
  readonly INITIAL: 'initial';

  /**
   * Sources are chunked
   */
  readonly CHUNKED: 'chunked';

  /**
   * Sources metadata has been validated. For example, {@see SourceFile#validated}
   */
  readonly VALIDATED: 'validated';

  /**
   * Sources cannot be processed because of original file parsing errors, or metadata issues.
   */
  readonly REJECTED: 'rejected';

  /**
   * Sources cannot be processed because of original file parsing errors, or metadata issues
   */
  readonly REJECTING: 'rejecting';

  /**
   * Sources is marked and placed in the queue for processing.
   */
  readonly SCHEDULED: 'scheduled';

  /**
   * Sources is picked from a file or a queue for data load
   */
  readonly PROCESSING: 'processing';

  /**
   * Sources has been successfully transformed and loaded into target types
   */
  readonly COMPLETED: 'completed';

  /**
   * Some source objects have failed and other objects are still being processed
   */
  readonly FAILING: 'failing';

  /**
   * Sources have completed processing and at least some sources have failed
   */
  readonly FAILED: 'failed';

  /**
   * Sources is marked for stopping will remain in this state till all the sources(chunk) is drained from the queues.
   */
  readonly STOPPING: 'stopping';

  /**
   * Sources is marked as stopped only after being in stopping state and all the sources(chunks) are drained from
   * the queues.
   */
  readonly STOPPED: 'stopped';
}

/**
 * State of the Data Integration step
 * state transition:
 * initial ->  (rejected | validated)
 * validated -> scheduled -> processing -> (completed | (failing -> failed))
 * (scheduled | processing) -> stopping -> stopped
 *
 * @remarks this represents a made instance of SourcesState
 */
declare class SourcesState {

  /**
   * Sources is synced with the file or the queue to determine source of truth.
   */
  static readonly INITIAL: 'initial';

  /**
   * Sources are chunked
   */
  static readonly CHUNKED: 'chunked';

  /**
   * Sources metadata has been validated. For example, {@see SourceFile#validated}
   */
  static readonly VALIDATED: 'validated';

  /**
   * Sources cannot be processed because of original file parsing errors, or metadata issues.
   */
  static readonly REJECTED: 'rejected';

  /**
   * Sources cannot be processed because of original file parsing errors, or metadata issues
   */
  static readonly REJECTING: 'rejecting';

  /**
   * Sources is marked and placed in the queue for processing.
   */
  static readonly SCHEDULED: 'scheduled';

  /**
   * Sources is picked from a file or a queue for data load
   */
  static readonly PROCESSING: 'processing';

  /**
   * Sources has been successfully transformed and loaded into target types
   */
  static readonly COMPLETED: 'completed';

  /**
   * Some source objects have failed and other objects are still being processed
   */
  static readonly FAILING: 'failing';

  /**
   * Sources have completed processing and at least some sources have failed
   */
  static readonly FAILED: 'failed';

  /**
   * Sources is marked for stopping will remain in this state till all the sources(chunk) is drained from the queues.
   */
  static readonly STOPPING: 'stopping';

  /**
   * Sources is marked as stopped only after being in stopping state and all the sources(chunks) are drained from
   * the queues.
   */
  static readonly STOPPED: 'stopped';

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
   * @return true if status of SourcesState state machine is a final state
   * Final States are : REJECTED, COMPLETED, FAILED
   */
  static isFinal(status: string | null): boolean;

  /**
   * @return true if status of SourcesState state machine is INITIAL
   */
  static isInitial(status: string | null): boolean;

  /**
   * @return true if status of SourcesState state machine is VALIDATED
   */
  static isValidated(status: string | null): boolean;

  /**
   * @return true if status of SourcesState state machine is SCHEDULED
   */
  static isScheduled(status: string | null): boolean;

  /**
   * @return true if status of SourcesState state machine is a stopped state
   * Stopped States are #STOPPING and #STOPPED
   */
  static isStopped(status: string | null): boolean;

  /**
   * @return `true` if the state is "completed"
   */
  static isCompleted(status: string | null): boolean;

  /**
   * @return `true` if the state is "processing"
   */
  static isProcessing(status: string | null): boolean;

  /**
   * @return `true` if the state is "failed"
   */
  static isFailed(status: string | null): boolean;

  /**
   * @return `true` if the state is "rejected"
   */
  static isRejected(status: string | null): boolean;

  /**
   * @return `true` if the state is "failing"
   */
  static isFailing(status: string | null): boolean;

  /**
   * @return `true` if the state is "rejecting"
   */
  static isRejecting(status: string | null): boolean;
}


interface λConsumer<T> {
  (t: T): void
}
