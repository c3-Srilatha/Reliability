// TypeScript definitions for the C3 type DataPrepPreviewChart

/**
 * Chart helper providing a preview of {@link Sensor} data and mask configuration for
 * the Dataset Preparation workflow.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataPrepPreviewChart
 */
declare interface IDataPrepPreviewChart {
}

/**
 * Chart helper providing a preview of {@link Sensor} data and mask configuration for
 * the Dataset Preparation workflow.
 *
 * @remarks this represents a made instance of DataPrepPreviewChart
 */
declare class DataPrepPreviewChart {

  /**
   * Returns the time range to plot on the chart.
   *
   * If {@link DataPrepPreviewChartSpec#showAllSensorData} is true, will use earliest and latest normalized
   * timestamps on related {@link PointPhysicalMeasurementSeries}.
   * @param spec
   *           The data preparation preview chart specification.
   * @return A {@link TimeRange} object representing the start and end dates for the chart.
   */
  static getStartAndEndDate(spec: DataPrepPreviewChartSpec): TimeRange | null;

  /**
   * Based on the spec, get the right sensor and mask data.
   *
   * Will ignore masks/events and return an empty chart configuration if spec.sensors is empty
   * so that the chart can render an empty state.
   *
   * Used by the chart's `advancedDataSpec`.
   * @param spec
   *           The data preparation preview chart specification.
   * @return A {@link DataPrepPreviewChartData} object containing the chart data.
   */
  static getChartData(spec: DataPrepPreviewChartSpec): DataPrepPreviewChartData | null;
}

