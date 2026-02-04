// TypeScript definitions for the C3 type Op

/**
 * Enumeration of all supported operations
 *
 * @remarks this represents a value passed to a method that expects an instance of Op
 */
declare interface IOp {

  /**
   * Adds other value to elements.
   */
  readonly ADD: "ADD";

  /**
   * Subtracts other value from elements.
   */
  readonly SUB: "SUB";

  /**
   * Multiples other value to elements.
   */
  readonly MUL: "MUL";

  /**
   * Alias for TRUEDIV.
   */
  readonly DIV: "DIV";

  /**
   * Floating point division of elements by other value.
   */
  readonly TRUEDIV: "TRUEDIV";

  /**
   * Floor division of elements by other value.
   */
  readonly FLOORDIV: "FLOORDIV";

  /**
   * Modulos elements by other value.
   */
  readonly MOD: "MOD";

  /**
   * Raises elements to the power of other value.
   */
  readonly POW: "POW";

  readonly RADD: "RADD";

  readonly RSUB: "RSUB";

  readonly RMUL: "RMUL";

  readonly RDIV: "RDIV";

  readonly RTRUEDIV: "RTRUEDIV";

  readonly RFLOORDIV: "RFLOORDIV";

  readonly RMOD: "RMOD";

  readonly RPOW: "RPOW";

  /**
   * Elementwise equality comparison of elements with other value.
   */
  readonly EQ: "EQ";

  /**
   *  Elementwise greater than comparison. Comparison with a null operand will always produce false.
   *  When comparing values of DateTime with String/Number, String/Number value will be converted, if possible,
   *  to Datetime, and then a comparison is performed.
   *  Collection<int> > scalar:
   * ```
   *  [[1, 2, 3]           [[false, false, true]
   *   [4, null, 6]  > 2 =  [true, false, true]
   *   [7, 8, 9]]           [true, true, true]]
   * ```
   *
   *  Collection<int> > Collection<int>:
   * ```
   *  [[1, 1, 3]                   [[false, false, true]
   *   [1, 1, 3]  > [null, 2, 1] =  [false, false, true]
   *   [1, 1, 3]]                   [false, false, true]]
   * ```
   *  Collections with different shapes
   *  Collection<int> > Collection<int>:
   * ```
   *  [[1, 1, 3]    [[0, 2],      [[true, false, false]
   *   [1, 1, 3]  >  [null, 2], =  [false, false, false]
   *   [1, 1, 3]]    [4, 0]]       [false, true, false]]
   * ```
   *
   *  Collection<Obj> > scalar:
   * ```
   *  [{a: 1, b: 1}        [{a: false, b: false}
   *   {a: 2, b: 2}  > 2 =  {a: false, b: false}
   *   {a: 3, b: 3}]        {a: true, b: true}]
   * ```
   *
   *  Collection<Obj> > Collection<Obj>:
   * ```
   *  [{a: 1, b: 1}                      [{a: false, b: false}
   *   {a: 2, b: 2}  + [{a: 2, b: 1}] =   {a: false, b: true}
   *   {a: 3, b: 3}]                      {a: true, b: true}]
   * ```
   */
  readonly GT: "GT";

  /**
   * Elementwise greater than or equal to comparison of elements with other value.
   */
  readonly GE: "GE";

  /**
   * Elementwise less than comparison of elements with other value.
   */
  readonly LT: "LT";

  /**
   * Elementwise less than or equal to comparison of elements with other value.
   */
  readonly LE: "LE";

  /**
   * Elementwise not equals comparison of elements with other value.
   */
  readonly NE: "NE";

  /**
   * Datapoints will be AND'ed based on their values. The following rules will be followed
   *          0 & 0 = 0
   *          0 & 1 = 0
   *          1 & 0 = 0
   *          1 & 1 = 1
   *
   *   Aggregation: The data points will be AND'ed within the interval
   *
   *       E.g.
   *               1,1   0,0   1,0             1     0     0
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *   Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *       E.g.
   *                     1                     1     1     1
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  readonly AND: "AND";

  /**
   * Datapoints will be OR'ed based on their values. The following rules will be followed
   *          0 || 0 = 0
   *          0 || 1 = 1
   *          1 || 0 = 1
   *          1 || 1 = 1
   *
   *   Aggregation: The data points will be OR'ed within the interval
   *
   *       E.g.
   *               1,1   0,0   1,0             1     0     1
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *   Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *       E.g.
   *                     1                     1     1     1
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  readonly OR: "OR";

  readonly ABS: "ABS";

  readonly NEG: "NEG";

  readonly INVERT: "INVERT";

  /**
   * Aggregation: The latest occurring point in the interval will be used as value in that interval and will continue to be the value till we see the next point.
   *
   *     E.g.
   *              1,2   3,4                   2     4     4
   *            |-----|-----|-----| ====>  |-----|-----|-----|
   *           t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *       			 10                    10    10    10
   *            |-----------------| =====> |-----|-----|-----|
   *            t1               t4        t1    t2    t3    t4
   */
  readonly PREVIOUS: "PREVIOUS";

  /**
   * Treatment EARLIEST returns the first value in every interval
   *
   *    Aggregation: The earliest occurring point in the interval will be used as value in that interval.
   *
   *      E.g
   *               1,2   3,4                   1     3     0
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *      E.g.
   *        			 10                    10    10    10
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  readonly EARLIEST: "EARLIEST";

  /**
   * Treatment LATEST is very similar to PREVIOUS except the part where the value overflows to the subsequent intervals forward.
   *
   *    Aggregation: The latest occurring point in the interval will be used as value in that interval.
   *
   *      E.g
   *               1,2   3,4                   2     4     0
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *      E.g.
   *        			 10                    10    10    10
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  readonly LATEST: "LATEST";

  /**
   * Value at each interval will be the count of the raw data points in that interval
   *
   * Aggregation: The raw data point will be counted and the resultant count used as the value of the interval
   *
   *     E.g.
   *             1,1   5,5                   2     2     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   1                    1/3   1/3   1/3
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly COUNT: "COUNT";

  /**
   * Value at each interval will be the rolling count from the beginning of the data irrespective of the time range. (Only supported in @see TSDecl)
   *
   * Aggregation: Value at each interval will be the rolling count from the beginning of the data irrespective of the time range.
   *
   *     E.g.
   *             1,1   0,0                   2     4     4
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   1                    1/3   1/3   1/3
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly ROLLINGCOUNT: "ROLLINGCOUNT";

  /**
   * Values at each interval will the summed to the interval / divided equally in each interval
   *
   * Aggregation: Values for each interval will be summed
   *
   *     E.g.
   *             1,2   3,4                   3     7     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   10                  10/3  10/3  10/3
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly INTEGRAL: "INTEGRAL";

  /**
   * Values at each interval will the summed to the interval / divided equally in each interval (same as INTEGRAL, INTEGRAL kept for backward compatibility)
   * When called on boolean values, the values are converted as such before adding:
   * True -> 1, False -> 0
   *
   * Aggregation: Values for each interval will be summed
   *
   *     E.g.
   *             1,2   3,4                   3     7     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   10                  10/3  10/3  10/3
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly SUM: "SUM";

  /**
   * Values at each interval will the multiplied to the interval / divided equally in each interval
   * When called on boolean values, the values are converted as such before multiplying:
   * True -> 1, False -> 0
   *
   * Aggregation: Values for each interval will be multiplied
   *
   *     E.g.
   *             1,2   3,4                   2     12     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   24                    8     8     8
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly PROD: "PROD";

  /**
   * Value at each interval will be the weighted average for that interval, i.e. the rate at which the values
   * measured are is flowing
   * For TimedData (without end date) a simple average instead of weighted average is taken
   * In both cases, the values for the interval are averaged with the most recent preceding value,
   * which could be any amount of time before.
   *
   *   Aggregation: Values for each interval will be averaged (weighted for interval)
   *
   *       E.g.
   *               1,2   3,4                  1.5   3.5    0
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *   Disaggregation:During disaggregation the same point will be repeated for all the sub intervals
   *
   *       E.g.
   *                     10                   10    10    10
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  readonly RATE: "RATE";

  /**
   * Value at each interval will be the weighted average for that interval a.k.a the rate at which the data is flowing (same as RATE, RATE kept for backward compatibility)
   * For TimedData (without end date) a simple average instead of weighted average is taken
   * Aggregation: Values for each interval will be averaged (weighted for interval)
   *
   *     E.g.
   *             1,2   3,4                  1.5   3.5    0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   10                   10    10    10
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly AVG: "AVG";

  /**
   * Minimum value of all the data points will be chosen for the given interval. During aggregation, minimum value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be a MIN of all the values in that interval
   *
   *     E.g.
   *             1,2   3,4                  1     3      0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   10                   10    10    10
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly MIN: "MIN";

  /**
   * Maximum value of all the data points will be chosen for the given interval. During aggregation, maximum value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be a MAX of all the values in that interval
   *
   *     E.g.
   *             1,2   3,4                   2     4     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   10                   10    10    10
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly MAX: "MAX";

  /**
   * Standard deviation of all the data points will be chosen for the given interval.
   * During aggregation, stddev will be computed. During disaggregation, same value repeats for every interval
   *
   * Aggregation: Values for each interval will be the standard deviation of all the values in that interval
   *
   *     E.g.
   *            1,2,3 3,4,5                   1     1     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   1                     1     1     1
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly STDDEV: "STDDEV";

  /**
   * Variance of all the data points will be chosen for the given interval. During aggregation, maximum value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be the variance of all the values in that interval
   *
   *     E.g.
   *            1,2,3 3,4,5                   1     1     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   1                     1     1     1
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly VARIANCE: "VARIANCE";

  /**
   * Xth Percentile of all the data points will be chosen for the given interval. During aggregation, xth percentile value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be the xth percentile of all the values in that interval - lets say percentile is 75th
   *
   *     E.g.
   *            1,2,3,4 3,4,5,6                      3      5      0
   *           |-------|-------|-------| ====>  |-------|-------|-------|
   *          t1       t2     t3      t4        t1     t2      t3      t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   1                     1     1     1
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly PERCENTILE: "PERCENTILE";

  /**
   * Median of all the data points will be chosen for the given interval. During aggregation, median value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be the median of all the values in that interval
   *
   *     E.g.
   *            1,2,3 3,4,5                   2     4     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   1                     1     1     1
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  readonly MEDIAN: "MEDIAN";

  readonly ALL: "ALL";
}

/**
 * Enumeration of all supported operations
 *
 * @remarks this represents a made instance of Op
 */
declare class Op {

  /**
   * Adds other value to elements.
   */
  static readonly ADD: "ADD";

  /**
   * Subtracts other value from elements.
   */
  static readonly SUB: "SUB";

  /**
   * Multiples other value to elements.
   */
  static readonly MUL: "MUL";

  /**
   * Alias for TRUEDIV.
   */
  static readonly DIV: "DIV";

  /**
   * Floating point division of elements by other value.
   */
  static readonly TRUEDIV: "TRUEDIV";

  /**
   * Floor division of elements by other value.
   */
  static readonly FLOORDIV: "FLOORDIV";

  /**
   * Modulos elements by other value.
   */
  static readonly MOD: "MOD";

  /**
   * Raises elements to the power of other value.
   */
  static readonly POW: "POW";

  static readonly RADD: "RADD";

  static readonly RSUB: "RSUB";

  static readonly RMUL: "RMUL";

  static readonly RDIV: "RDIV";

  static readonly RTRUEDIV: "RTRUEDIV";

  static readonly RFLOORDIV: "RFLOORDIV";

  static readonly RMOD: "RMOD";

  static readonly RPOW: "RPOW";

  /**
   * Elementwise equality comparison of elements with other value.
   */
  static readonly EQ: "EQ";

  /**
   *  Elementwise greater than comparison. Comparison with a null operand will always produce false.
   *  When comparing values of DateTime with String/Number, String/Number value will be converted, if possible,
   *  to Datetime, and then a comparison is performed.
   *  Collection<int> > scalar:
   * ```
   *  [[1, 2, 3]           [[false, false, true]
   *   [4, null, 6]  > 2 =  [true, false, true]
   *   [7, 8, 9]]           [true, true, true]]
   * ```
   *
   *  Collection<int> > Collection<int>:
   * ```
   *  [[1, 1, 3]                   [[false, false, true]
   *   [1, 1, 3]  > [null, 2, 1] =  [false, false, true]
   *   [1, 1, 3]]                   [false, false, true]]
   * ```
   *  Collections with different shapes
   *  Collection<int> > Collection<int>:
   * ```
   *  [[1, 1, 3]    [[0, 2],      [[true, false, false]
   *   [1, 1, 3]  >  [null, 2], =  [false, false, false]
   *   [1, 1, 3]]    [4, 0]]       [false, true, false]]
   * ```
   *
   *  Collection<Obj> > scalar:
   * ```
   *  [{a: 1, b: 1}        [{a: false, b: false}
   *   {a: 2, b: 2}  > 2 =  {a: false, b: false}
   *   {a: 3, b: 3}]        {a: true, b: true}]
   * ```
   *
   *  Collection<Obj> > Collection<Obj>:
   * ```
   *  [{a: 1, b: 1}                      [{a: false, b: false}
   *   {a: 2, b: 2}  + [{a: 2, b: 1}] =   {a: false, b: true}
   *   {a: 3, b: 3}]                      {a: true, b: true}]
   * ```
   */
  static readonly GT: "GT";

  /**
   * Elementwise greater than or equal to comparison of elements with other value.
   */
  static readonly GE: "GE";

  /**
   * Elementwise less than comparison of elements with other value.
   */
  static readonly LT: "LT";

  /**
   * Elementwise less than or equal to comparison of elements with other value.
   */
  static readonly LE: "LE";

  /**
   * Elementwise not equals comparison of elements with other value.
   */
  static readonly NE: "NE";

  /**
   * Datapoints will be AND'ed based on their values. The following rules will be followed
   *          0 & 0 = 0
   *          0 & 1 = 0
   *          1 & 0 = 0
   *          1 & 1 = 1
   *
   *   Aggregation: The data points will be AND'ed within the interval
   *
   *       E.g.
   *               1,1   0,0   1,0             1     0     0
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *   Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *       E.g.
   *                     1                     1     1     1
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  static readonly AND: "AND";

  /**
   * Datapoints will be OR'ed based on their values. The following rules will be followed
   *          0 || 0 = 0
   *          0 || 1 = 1
   *          1 || 0 = 1
   *          1 || 1 = 1
   *
   *   Aggregation: The data points will be OR'ed within the interval
   *
   *       E.g.
   *               1,1   0,0   1,0             1     0     1
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *   Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *       E.g.
   *                     1                     1     1     1
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  static readonly OR: "OR";

  static readonly ABS: "ABS";

  static readonly NEG: "NEG";

  static readonly INVERT: "INVERT";

  /**
   * Aggregation: The latest occurring point in the interval will be used as value in that interval and will continue to be the value till we see the next point.
   *
   *     E.g.
   *              1,2   3,4                   2     4     4
   *            |-----|-----|-----| ====>  |-----|-----|-----|
   *           t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *       			 10                    10    10    10
   *            |-----------------| =====> |-----|-----|-----|
   *            t1               t4        t1    t2    t3    t4
   */
  static readonly PREVIOUS: "PREVIOUS";

  /**
   * Treatment EARLIEST returns the first value in every interval
   *
   *    Aggregation: The earliest occurring point in the interval will be used as value in that interval.
   *
   *      E.g
   *               1,2   3,4                   1     3     0
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *      E.g.
   *        			 10                    10    10    10
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  static readonly EARLIEST: "EARLIEST";

  /**
   * Treatment LATEST is very similar to PREVIOUS except the part where the value overflows to the subsequent intervals forward.
   *
   *    Aggregation: The latest occurring point in the interval will be used as value in that interval.
   *
   *      E.g
   *               1,2   3,4                   2     4     0
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *      E.g.
   *        			 10                    10    10    10
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  static readonly LATEST: "LATEST";

  /**
   * Value at each interval will be the count of the raw data points in that interval
   *
   * Aggregation: The raw data point will be counted and the resultant count used as the value of the interval
   *
   *     E.g.
   *             1,1   5,5                   2     2     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   1                    1/3   1/3   1/3
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly COUNT: "COUNT";

  /**
   * Value at each interval will be the rolling count from the beginning of the data irrespective of the time range. (Only supported in @see TSDecl)
   *
   * Aggregation: Value at each interval will be the rolling count from the beginning of the data irrespective of the time range.
   *
   *     E.g.
   *             1,1   0,0                   2     4     4
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   1                    1/3   1/3   1/3
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly ROLLINGCOUNT: "ROLLINGCOUNT";

  /**
   * Values at each interval will the summed to the interval / divided equally in each interval
   *
   * Aggregation: Values for each interval will be summed
   *
   *     E.g.
   *             1,2   3,4                   3     7     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   10                  10/3  10/3  10/3
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly INTEGRAL: "INTEGRAL";

  /**
   * Values at each interval will the summed to the interval / divided equally in each interval (same as INTEGRAL, INTEGRAL kept for backward compatibility)
   * When called on boolean values, the values are converted as such before adding:
   * True -> 1, False -> 0
   *
   * Aggregation: Values for each interval will be summed
   *
   *     E.g.
   *             1,2   3,4                   3     7     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   10                  10/3  10/3  10/3
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly SUM: "SUM";

  /**
   * Values at each interval will the multiplied to the interval / divided equally in each interval
   * When called on boolean values, the values are converted as such before multiplying:
   * True -> 1, False -> 0
   *
   * Aggregation: Values for each interval will be multiplied
   *
   *     E.g.
   *             1,2   3,4                   2     12     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
   *
   *     E.g.
   *                   24                    8     8     8
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly PROD: "PROD";

  /**
   * Value at each interval will be the weighted average for that interval, i.e. the rate at which the values
   * measured are is flowing
   * For TimedData (without end date) a simple average instead of weighted average is taken
   * In both cases, the values for the interval are averaged with the most recent preceding value,
   * which could be any amount of time before.
   *
   *   Aggregation: Values for each interval will be averaged (weighted for interval)
   *
   *       E.g.
   *               1,2   3,4                  1.5   3.5    0
   *             |-----|-----|-----| ====>  |-----|-----|-----|
   *            t1    t2    t3    t4        t1    t2    t3    t4
   *
   *   Disaggregation:During disaggregation the same point will be repeated for all the sub intervals
   *
   *       E.g.
   *                     10                   10    10    10
   *             |-----------------| =====> |-----|-----|-----|
   *             t1               t4        t1    t2    t3    t4
   */
  static readonly RATE: "RATE";

  /**
   * Value at each interval will be the weighted average for that interval a.k.a the rate at which the data is flowing (same as RATE, RATE kept for backward compatibility)
   * For TimedData (without end date) a simple average instead of weighted average is taken
   * Aggregation: Values for each interval will be averaged (weighted for interval)
   *
   *     E.g.
   *             1,2   3,4                  1.5   3.5    0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   10                   10    10    10
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly AVG: "AVG";

  /**
   * Minimum value of all the data points will be chosen for the given interval. During aggregation, minimum value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be a MIN of all the values in that interval
   *
   *     E.g.
   *             1,2   3,4                  1     3      0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   10                   10    10    10
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly MIN: "MIN";

  /**
   * Maximum value of all the data points will be chosen for the given interval. During aggregation, maximum value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be a MAX of all the values in that interval
   *
   *     E.g.
   *             1,2   3,4                   2     4     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   10                   10    10    10
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly MAX: "MAX";

  /**
   * Standard deviation of all the data points will be chosen for the given interval.
   * During aggregation, stddev will be computed. During disaggregation, same value repeats for every interval
   *
   * Aggregation: Values for each interval will be the standard deviation of all the values in that interval
   *
   *     E.g.
   *            1,2,3 3,4,5                   1     1     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   1                     1     1     1
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly STDDEV: "STDDEV";

  /**
   * Variance of all the data points will be chosen for the given interval. During aggregation, maximum value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be the variance of all the values in that interval
   *
   *     E.g.
   *            1,2,3 3,4,5                   1     1     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   1                     1     1     1
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly VARIANCE: "VARIANCE";

  /**
   * Xth Percentile of all the data points will be chosen for the given interval. During aggregation, xth percentile value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be the xth percentile of all the values in that interval - lets say percentile is 75th
   *
   *     E.g.
   *            1,2,3,4 3,4,5,6                      3      5      0
   *           |-------|-------|-------| ====>  |-------|-------|-------|
   *          t1       t2     t3      t4        t1     t2      t3      t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   1                     1     1     1
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly PERCENTILE: "PERCENTILE";

  /**
   * Median of all the data points will be chosen for the given interval. During aggregation, median value will be chosen. During disaggregation, same value repeats for every interval.
   *
   * Aggregation: Values for each interval will be the median of all the values in that interval
   *
   *     E.g.
   *            1,2,3 3,4,5                   2     4     0
   *           |-----|-----|-----| ====>  |-----|-----|-----|
   *          t1    t2    t3    t4        t1    t2    t3    t4
   *
   * Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
   *
   *     E.g.
   *                   1                     1     1     1
   *           |-----------------| =====> |-----|-----|-----|
   *           t1               t4        t1    t2    t3    t4
   */
  static readonly MEDIAN: "MEDIAN";

  static readonly ALL: "ALL";

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string | null, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<string | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<string | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, string | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string> | null): void;

  /**
   * Is an integral function (SUM/INTEGRAL)
   */
  static isIntegral(agg: string): boolean;

  /**
   * Is a rate function (AVG/RATE)
   */
  static isRate(agg: string): boolean;

  /**
   * Is a logical function (AND/OR)
   */
  static isLogicalOperator(agg: string): boolean;

  /**
   * Does function indicate that previous point should be valid until next point is seen
   */
  static pointValidUntilNext(agg: string): boolean;

  /**
   * Converts this aggregation function to a pandas-compatible aggregation function
   * on a {@link Data.Resample}
   */
  static toDataAgg(agg: string): string | null;

  /**
   * Does this aggregation function rely on previous data points. E.g. ROLLINGCOUNT, EARLIEST, LATEST, PREVIOUS
   */
  static reliesOnDataOutOfRange(agg: string): boolean;
}


interface λConsumer<T> {
  (t: T): void
}
