// TypeScript definitions for the C3 type CancelableInvalidationQueue

/**
 * @remarks this represents a value passed to a method that expects an instance of CancelableInvalidationQueue
 */
declare interface ICancelableInvalidationQueue {
}

/**
 * @remarks this represents a made instance of CancelableInvalidationQueue
 */
declare class CancelableInvalidationQueue {

  /**
   * Attempts to cancel any currently running actions for the specified queue entries and removes the entries.
   *
   * @param entries
   *        queue entries to remove
   */
  static cancel(entries: C3.Array<CancelableInvalidationQueueEntry<any> | null>): void;
}

