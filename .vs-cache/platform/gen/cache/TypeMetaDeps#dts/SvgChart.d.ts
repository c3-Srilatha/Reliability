// TypeScript definitions for the C3 type SvgChart

/**
 * All functions produce SVG images (`image/svg+xml`).
 *
 * @remarks this represents a value passed to a method that expects an instance of SvgChart
 */
declare interface ISvgChart {
}

/**
 * All functions produce SVG images (`image/svg+xml`).
 *
 * @remarks this represents a made instance of SvgChart
 */
declare class SvgChart {

  /**
   * Produce a line chart from the series of values. If a plain array of numbers is used, the unit should be specified
   * in the spec if tooltips are to be generated.
   *
   * @param data two or more data points, either as bare numbers or as ChartPoint instances
   * @return chart or null if there is not enough data
   */
  static line(data: C3.Array<number | null> | C3.Array<ChartPoint | null>, spec?: ChartSpec | null): Content | null;

  /**
   * Produce a simple line chart with no ornamentation from a simple series of values. Only the width and height should
   * be provided in the spec.
   *
   * @param data two or more data points, either as bare numbers or as ChartPoint instances
   * @return chart or null if there is not enough data
   */
  static sparkline(data: C3.Array<number | null>, spec?: ChartSpec | null): Content | null;

  /**
   * Produce a column chart (vertical bars) from the series of values.
   *
   * @param data one or more data points, either as bare numbers or as ChartPoint instances
   * @return chart or null if there is not enough data
   */
  static column(data?: C3.Array<number | null> | C3.Array<ChartPoint | null> | null, spec?: ChartSpec | null): Content | null;

  /**
   * Produce a horizontal bar chart from the series of values.
   *
   * @param data one or more data points, either as bare numbers or as ChartPoint instances
   * @return chart or null if there is not enough data
   */
  static bar(data?: C3.Array<number | null> | C3.Array<ChartPoint | null> | null, spec?: ChartSpec | null): Content | null;

  /**
   * Produce a scatter plot from a series of values.
   *
   * @see LogProfiler
   */
  static scatter(data?: C3.Array<number | null> | C3.Array<ChartPoint | null> | C3.Array<ChartPoint2d | null> | null, spec?: ChartSpec | null): Content | null;

  /**
   * Produce a pie chart from the series of values.
   *
   * @param data one or more data points, either as bare numbers or as ChartPoint instances
   * @return chart or null if there is not enough data
   */
  static pie(data?: C3.Array<number | null> | C3.Array<ChartPoint | null> | null, spec?: ChartSpec | null): Content | null;

  /**
   * Produce a flame/icicle graph from a set of stack trees.
   *
   * @see LogProfiler
   */
  static stacks(trees: C3.Array<StackTree | null>, spec?: ProfileChartSpec | null): Content | null;

  /**
   * Extract a value from the data array, which should be either a number or a ChartPoint.
   */
  static value(data: C3.Array<number | null> | C3.Array<ChartPoint | null> | C3.Array<ChartPoint2d | null>, i: number): number | null;

  /**
   * Get the X index from the data array. If the value is a {@link ChartPoint2d} this will be the explicit `x` value,
   * otherwise the specified index.
   */
  static valueX(data: C3.Array<number | null> | C3.Array<ChartPoint | null> | C3.Array<ChartPoint2d | null>, i: number): number | null;

  /**
   * Format a numeric value with an optional unit, possibly with HTML entities.
   */
  static formatValue(n: number | null, unit?: Unit | null): string | null;

  /**
   * Fit a simple linear regression to the values to be charted.
   */
  static fitLine(data: C3.Array<number | null> | C3.Array<ChartPoint | null> | C3.Array<ChartPoint2d | null>): LeastSquaresResult | null;

  /**
   * Format a trend (slope) value, possibly with HTML entities.
   */
  static formatTrend(m: number): string | null;
}

