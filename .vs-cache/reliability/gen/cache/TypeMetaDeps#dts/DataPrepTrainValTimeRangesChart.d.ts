// TypeScript definitions for the C3 type DataPrepTrainValTimeRangesChart

/**
 * Type to fetch chart config for train and validation splits with multiple time ranges.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataPrepTrainValTimeRangesChart
 */
declare interface IDataPrepTrainValTimeRangesChart {
}

/**
 * Type to fetch chart config for train and validation splits with multiple time ranges.
 *
 * @remarks this represents a made instance of DataPrepTrainValTimeRangesChart
 */
declare class DataPrepTrainValTimeRangesChart {

  /**
   * Function to fetch train and validation time ranges chart config.
   *
   * @param spec
   *           The specification for the train and validation time ranges chart
   * @return The chart configuration as JSON
   */
  static getChartConfig(spec: DataPrepTrainValTimeRangesChartSpec): any | null;

  /**
   * Returns component configuration for when no timeseries are plotted.
   *
   * @param spec
   *           The specification for the train and validation time ranges chart
   * @return The empty state configuration as JSON
   */
  static getEmptyStateConfig(spec: DataPrepTrainValTimeRangesChartSpec): any | null;

  /**
   * Returns the time range to plot on the chart.
   *
   * @param spec
   *           The specification for the train and validation time ranges chart
   * @return The time range to plot
   */
  static getStartAndEndDate(spec: DataPrepTrainValTimeRangesChartSpec): TimeRange | null;

  /**
   * Returns a list of {@link UiSdlTimeseriesLineBarChartDateLineConfig} for displaying vertical lines on
   * the chart.
   *
   * @param spec
   *           The specification for the train and validation time ranges chart
   * @return A list of date line configurations
   */
  static getDateLines(spec: DataPrepTrainValTimeRangesChartSpec): Array_Type<any> | null;

  /**
   * Returns a list of {@link UiSdlTimeseriesLineBarChartYAxisDataSpecSetting} for timeseries evaluation.
   *
   * @param spec
   *           The specification for the train and validation time ranges chart
   * @return A list of Y-axis field specifications
   */
  static getYAxisFields(spec: DataPrepTrainValTimeRangesChartSpec): Array_Type<any> | null;

  /**
   * Returns a list of {@link UiSdlTimeseriesLineBarChartEventSeriesDataSpec} for event plotting.
   *
   * @param spec
   *           The specification for the train and validation time ranges chart
   * @param filter
   *           The filter string for event data
   * @return A list of event series data specifications
   */
  static getEventDataSpec(spec: DataPrepTrainValTimeRangesChartSpec, filter?: string): Array_Type<any> | null;

  /**
   * Based on the spec, evaluate the necessary metrics to retrieve the data used for plotting the time ranges.
   *
   * @param chartDataSpec
   *           The specification for getting chart data
   * @return The evaluation metrics result containing the data for plotting
   */
  static getChartData(chartDataSpec: DataPrepTrainValTimeRangesGetChartDataSpec): EvalMetricsResult | null;
}

