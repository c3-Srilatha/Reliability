// TypeScript definitions for the C3 type TimeseriesDataBase

/**
 * @remarks this represents a value passed to a method that expects an instance of TimeseriesDataBase
 */
declare interface ITimeseriesDataBase {
}

/**
 * @remarks this represents a made instance of TimeseriesDataBase
 */
declare class TimeseriesDataBase {

  /**
   * API to evaluate timeseries that is normalized on the fly
   * @param spec The spec according to which the timeseries should be evaluated
   * @return normalized timeseries based on spec
   */
  static evalTimeseries(spec?: EvalTimeseriesSpecOld | null): Obj | null;

  /**
   * API to normalize timeseries on the fly
   * @param spec The spec according to which the timeseries should be evaluated
   * @return Return normalized timeseries
   */
  static normalizeOnTheFly(spec?: EvalTimeseriesSpecOld | null): Obj | null;

  /**
   * API to normalize timeseries by filtering / grouping/ historical timeseries based on data version
   * @param spec Spec that specifies what kind of data is desired
   * @return that contains the grouping criteria and its corresponding timeseries
   */
  static evalTimeseriesHistorical(spec?: EvalTimeseriesHistoricalSpec | null): C3.Map<string | null, Obj | null>;

  /**
   * API to fetch raw timeseries data points with the LATEST DATA VERSION
   * @param spec Spec that specifies what kind of data is desired
   * @return list of raw data point objs per group
   */
  static fetchTimeseriesHistorical(spec?: FetchTimeseriesHistoricalSpec | null): C3.Map<string | null, C3.Array<Obj | null>>;
}

