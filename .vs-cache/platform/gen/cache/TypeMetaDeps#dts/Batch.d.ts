// TypeScript definitions for the C3 type Batch

/**
 * Utility entry points for dynamic batch processing. See {@link invalidation-queues.c3doc Invalidation Queues} for detailed documentation.
 *
 * @remarks this represents a value passed to a method that expects an instance of Batch
 */
declare interface IBatch {
}

/**
 * Utility entry points for dynamic batch processing. See {@link invalidation-queues.c3doc Invalidation Queues} for detailed documentation.
 *
 * @remarks this represents a made instance of Batch
 */
declare class Batch {

  /**
   * Execute an action and process its outputs in zero or more smaller batches.
   *
   * The value returned by last batch's {@link ScanResultSpec#callback} function.
   * If no outputs are returned by the action, the {@link ScanResultSpec#initialContext}
   * value is returned.
   *
   * @return return value from last callback
   */
  static scanResult(spec: ScanResultSpec): any;
}

