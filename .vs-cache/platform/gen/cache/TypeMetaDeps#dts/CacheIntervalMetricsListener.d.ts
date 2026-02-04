// TypeScript definitions for the C3 type CacheIntervalMetricsListener

/**
 * MetricsQueue listener for processing cache interval metric invalidation
 *
 * @remarks this represents a value passed to a method that expects an instance of CacheIntervalMetricsListener
 */
declare interface ICacheIntervalMetricsListener {
}

/**
 * MetricsQueue listener for processing cache interval metric invalidation
 *
 * @remarks this represents a made instance of CacheIntervalMetricsListener
 */
declare class CacheIntervalMetricsListener {

  /**
   * Returns all simple metrics that specify a cached interval
   */
  static dependencies(): C3.Array<string | null>;

  /**
   * Calls SimpleMetric.invalidateCache when called by MetricsQueue.compute.
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

