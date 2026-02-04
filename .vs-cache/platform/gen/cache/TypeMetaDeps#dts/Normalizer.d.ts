// TypeScript definitions for the C3 type Normalizer

/**
 * Type to mixin for writing custom normalization. @see extensions.TimeseriesField
 * User needs to create a type that mixes in `Normalizer` and provide implementation for the function
 * normalize. On annotation {@link TimeseriesField}, 'normalizer' field should be set to the type that mixes in this type
 *
 * @remarks this represents a value passed to a method that expects an instance of Normalizer
 */
declare interface INormalizer {
}

/**
 * Type to mixin for writing custom normalization. @see extensions.TimeseriesField
 * User needs to create a type that mixes in `Normalizer` and provide implementation for the function
 * normalize. On annotation {@link TimeseriesField}, 'normalizer' field should be set to the type that mixes in this type
 *
 * @remarks this represents a made instance of Normalizer
 */
declare class Normalizer {

  /**
   * Function to be overridden for providing custom normalization behavior. Default implementation is provided by
   * the platform, however, there are times when user needs to normalize a timeseries based on rules different
   * than the platform. Output needs to be a series of normalized timeseries 1 per month.
   * E.g. if you have data points occurring at every 15 minutes with gaps / overlaps, you normalize the points
   * based on the rules that you desire and then create a timeseries at interval QUARTER_HOUR spanning 1 month
   * and put that as the first timeseries in the list. Then take the next set of points and create a new timeseries
   * spanning the next month (even if there are 0 data points within that month) and so on.
   * Consider:
   *       1    2    3                                              4            5            6
   *      |--| |--| |---|                                         |---|         |--|        |-----|
   *
   *
   *     |------------------------|---------------------------|------------------------|---------------------------| o/p
   *    Jan                      Feb                         Mar                      Apr                         May
   *
   * Look at the points above, irrespective of the interval of the timeseries, we create Timeseries objects spanning
   * a month and return 4 consecutive Timeseries objects in the above case.
   *
   * Note: It is also possible that the {@link IntervalDataPoint} or {@link TimedDataPoint} type have other ts fields
   * that are loaded and not the one that you might have marked as @ts(normalizer="MyNormalizer")
   * Even in this case, a call will be made to your function with {@TSDataPoint} value field = `null`.
   * This normalizer must handle this scenario and return a null / empty array of Timeseries indicating to the engine
   * that you don't want to participate in the normalization if the value field is null.
   * @param objs
   *          Stream of timeseries data points
   * @param spec
   *          Spec for holding options / properties to be supplied to the normalizer
   * @return a stream of Timeseries which are continuous.
   * Note We have to create 1 Timeseries object per month irrespective of the interval.
   */
  static normalize(objs?: Stream<TSDataPoint | null>, spec?: TSNormalizationSpec | null): C3.Array<Timeseries<any> | null>;
}

