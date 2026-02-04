// TypeScript definitions for the C3 type Recoverable

/**
 * This should be used in cases where recovery needs to be performed based on certain state {@see RecoveryState}
 *
 * @remarks this represents a value passed to a method that expects an instance of Recoverable
 */
declare interface IRecoverable<S> {
}

/**
 * This should be used in cases where recovery needs to be performed based on certain state {@see RecoveryState}
 *
 * @remarks this represents a made instance of Recoverable
 */
declare class Recoverable<S> {

  /**
   * Supplier function to get a list of recovery states
   */
  static states(): C3.Array<S | null>;

  /**
   * Function to perform recovery based on the current state. It will be invoked if the {@link states} are invalid
   * or if {@link needsRecovery} failed
   */
  static recover(states: C3.Array<S | null> | null): void;
}

