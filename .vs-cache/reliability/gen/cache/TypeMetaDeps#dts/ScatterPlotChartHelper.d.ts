// TypeScript definitions for the C3 type ScatterPlotChartHelper

/**
 * Type to fetch chart configs for scatter plot.
 *
 * @remarks this represents a value passed to a method that expects an instance of ScatterPlotChartHelper
 */
declare interface IScatterPlotChartHelper {
}

/**
 * Type to fetch chart configs for scatter plot.
 *
 * @remarks this represents a made instance of ScatterPlotChartHelper
 */
declare class ScatterPlotChartHelper {

  /**
   * Retrieves chart config for the global and asset detail scatter plot.
   *
   * @param spec
   *           The scatter plot chart data specification
   * @param isGlobal
   *           Whether this is a global scatter plot
   * @return The chart configuration as JSON
   */
  static getChartConfig(spec?: ScatterPlotChartDataSpec, isGlobal?: boolean): any | null;

  /**
   * Retrieves a configuration specifying how to group, label, and color data points.
   *
   * @param spec
   *           The scatter plot chart data specification
   * @return The color grouping configuration specification
   */
  static getColorGroupingConfig(spec: ScatterPlotChartDataSpec): ScatterPlotChartColorGroupingSpec | null;

  /**
   * Returns whether or not the {@link ScatterPlotChartDataSpec} does not contain all of the fields.
   *
   * @param spec
   *           The scatter plot chart data specification
   * @param fields
   *           The fields to check for
   * @return True if fields are missing, false otherwise
   */
  static isMissingFields(spec: ScatterPlotChartDataSpec, fields: Array_Type<string>): boolean;
}

