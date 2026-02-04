// TypeScript definitions for the C3 type GrainDetector

/**
 * Type to detect grain
 *
 * @remarks this represents a value passed to a method that expects an instance of GrainDetector
 */
declare interface IGrainDetector {
}

/**
 * Type to detect grain
 *
 * @remarks this represents a made instance of GrainDetector
 */
declare class GrainDetector {

  /**
   * Detect grain of the given set of sorted (by start, end) data points
   * @param dataPoints
   *                Sorted set of data points
   * @return detected grain from the given data points
   */
  static detectGrain(dataPoints?: C3.Array<TSDataPoint | null>): string;
}

