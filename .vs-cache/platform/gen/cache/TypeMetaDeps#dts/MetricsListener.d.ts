// TypeScript definitions for the C3 type MetricsListener

/**
 * Base invalidation listener for the metrics queue.
 *
 * @remarks this represents a value passed to a method that expects an instance of MetricsListener
 */
declare interface IMetricsListener {
}

/**
 * Base invalidation listener for the metrics queue.
 *
 * @remarks this represents a made instance of MetricsListener
 */
declare class MetricsListener {

  /**
   * @return the list of SimpleMetrics that the listener is interested in. The default implementation returns the
   * simple metrics specified in the invalidationDependency of the specified source type (if any).  Override to do
   * something different.
   */
  static dependencies(): C3.Array<string | null>;

  /**
   * Called by MetricsQueue.compute when registered metrics are invalidated.
   */
  static invalidate(specs?: C3.Array<MetricInvalidationSpec | null>): void;

  /**
   * Calls the invalidate function on the appropriate registered MetricListener types
   *
   * @param srcTypeId
   *        Source type id.
   * @param srcs
   *        Sources to invalidate.
   * @param batchSize
   *        Number of specs to process (e.g. call listeners with) in each batch.
   */
  static callListeners(srcTypeId: number, srcs: C3.Array<MetricInvalidationSpec | null>, batchSize: number): void;
}

