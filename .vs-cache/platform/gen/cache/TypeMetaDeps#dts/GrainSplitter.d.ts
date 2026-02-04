// TypeScript definitions for the C3 type GrainSplitter

/**
 * Type to aggregate / dis aggregate data points into calendar aligned dates
 *
 * @remarks this represents a value passed to a method that expects an instance of GrainSplitter
 */
declare interface IGrainSplitter {
}

/**
 * Type to aggregate / dis aggregate data points into calendar aligned dates
 *
 * @remarks this represents a made instance of GrainSplitter
 */
declare class GrainSplitter {

  /**
   * Function to aggregate / dis - aggregate data points into calendar aligned dates
   * @param dataPoints
   *                Data Points that need to be aggregated / disaggregated
   * @param normInterval
   *                Interval at which we need to aggregate / disaggregate these points
   * @param isInterval
   *                Are these datapoints interval data points
   * @param treatment
   *                Treatment to be applied to these data points
   * @return list of calendar aligned agg / disagg data points at normInterval interval
   */
  static align(dataPoints?: C3.Array<TSDataPoint | null>, normInterval?: string | null, isInterval?: boolean, treatment?: string | null): C3.Array<TSDataPoint | null>;
}

