// TypeScript definitions for the C3 type SMTransitionLockDoctor

/**
 * Type to debug and recover state machine transition locks.
 *
 * @remarks this represents a value passed to a method that expects an instance of SMTransitionLockDoctor
 */
declare interface ISMTransitionLockDoctor {
}

/**
 * Type to debug and recover state machine transition locks.
 *
 * @remarks this represents a made instance of SMTransitionLockDoctor
 */
declare class SMTransitionLockDoctor {

  /**
   * Supplier function to get a list of recovery states
   */
  static states(): Array_Type<StateMachineTransitionLock> | null;

  /**
   * Function to perform recovery based on the current state. It will be invoked if the {@link states} are invalid
   * or if {@link needsRecovery} failed
   */
  static recover(states: Array_Type<StateMachineTransitionLock>): void;
}

