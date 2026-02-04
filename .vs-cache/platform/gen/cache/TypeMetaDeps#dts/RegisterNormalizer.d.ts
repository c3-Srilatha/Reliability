// TypeScript definitions for the C3 type RegisterNormalizer

/**
 * Normalizer for register reads.
 *
 * @remarks this represents a value passed to a method that expects an instance of RegisterNormalizer
 */
declare interface IRegisterNormalizer {
}

/**
 * Normalizer for register reads.
 *
 * @remarks this represents a made instance of RegisterNormalizer
 */
declare class RegisterNormalizer {

  /**
   * Normalize register read data points specifically for data that is monotonically increasing (e.g.register reads)
   * Values will be interpolated based on values of the next non-zero data point.
   * Zero values before the first non zero data point will all be kept as 0s. Similarly points after the last non-zero
   * data points will be kept as 0s.
   * Example:
   *                                            (10) x     x
   *
   *                      (3) x
   *        (2) x
   *
   *    |-------|------|-------|-------|------|------|------|-------|
   *    0       1      2       3       4      5      6      7       8
   *
   *                      results into
   *                                    (7-3)/3
   *                            ---------------------
   *                           |                     |
   *                           |                     |
   *                           |                     |
   *             (3-2)/2=0.5d  |                     |
   *            ---------------                      |
   *      (0)                                        |
   *    |-------|------|-------|-------|------|------|------|-------|
   *    0       1      2       3       4      5      6      7       8
   *
   * @param objs
   *          input data points sorted by start
   * @param spec
   *         Normalization spec containing details about how these data points need to be normalized
   * Register Read Properties
   * resetValue:
   *          reset drop threshold value based on the operation above.
   *          e.g. reset the value to current value when
   *          1. PERCENT value of drop is 5%
   *          2. value of drop is Greater than Equal to (GTE) 0
   *          3. value of drop is Greater than (GT) 0
   * resetOper:
   *          reset operation to be applied on the value. Should be one of PERCENT / GTE, GT
   * rolloverMax:
   *          max value allowed for the timeseries after which it rolls over. The following formula will be used
   *          when a rollover after this value happens:
   *          nextValue = (rolloverMax - currentValue) + nextValue
   * @return a timeseries which has values interpolated for monotonically increasing timeseries
   */
  static normalize(objs?: Stream<TSDataPoint | null>, spec?: TSNormalizationSpec | null): C3.Array<Timeseries<any> | null>;
}

