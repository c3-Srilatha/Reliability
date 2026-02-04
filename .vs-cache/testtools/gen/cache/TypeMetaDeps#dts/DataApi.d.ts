// TypeScript definitions for the C3 type DataApi

/**
 * DataApi is a set of utility functions for generating data.
 *
 * It is primarily intended for tests, as a complement to TestApi, but can also be used in source code.
 *
 * It supports common patterns of numerical and datetime data.
 *
 * It also lets you seed the random number generator, to ensure reproducability in a testing environment.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataApi
 */
declare interface IDataApi {
}

/**
 * DataApi is a set of utility functions for generating data.
 *
 * It is primarily intended for tests, as a complement to TestApi, but can also be used in source code.
 *
 * It supports common patterns of numerical and datetime data.
 *
 * It also lets you seed the random number generator, to ensure reproducability in a testing environment.
 *
 * @remarks this represents a made instance of DataApi
 */
declare class DataApi {

  /**
   * Create a DataApiContext.
   *
   * @param theSeed
   *           Specify a non-negative seed for the random number generator.
   * @return the newly created DataApiContext.
   */
  static createContext(theSeed: number): DataApiContext | null;

  /**
   * Destroy a DataApiContext.
   *
   * @param ctx
   *           The DataApiContext to destroy.
   */
  static destroyContext(ctx: DataApiContext): void;

  /**
   * Generate batches of sample data in a given environment
   *
   * @param sampleDataPatternFileName
   *          The file name for the sample data pattern to use
   *          Sample data pattern file format:
   *            - A JSON file with keys being entity type names and values being arrays of sample objects
   *          Any provided fields in the file would be handled as following:
   *            - Datetime:
   *                Given numerical values are used as offsets against start time (unit is number of days).
   *                e.g. 5.5 would mean 5 and half days from the current offset.
   *            - Numerical:
   *                Given numerical values are used as multiplier against `Math.random()`.
   *            - String:
   *                Given string values are parsed (`{{<number>}}` is used as offset).
   *                e.g. 'test entity {{4}}' would become 'test entity 5' if the current offset is 1.
   *                Reference fields (including {@link Unit}) should be given as string values.
   *            - Boolean:
   *                Given values are simply copied.
   *            - Array:
   *                Same logic as above with recursion.
   *            - Duration:
   *                Given numerical values are used as multiplier against `Math.random()`.
   *                The unit is always in milliseconds for simplicity.
   *            - "Primitive" Dimension-like reference:
   *                Dimension-like fields are processed in a similar fashions as numerical and string fields
   *                Currently supported types: {@link Dimension}, {@link MonetaryValue}, {@link ExactDimension}
   *          Any missing required fields would be handled as following:
   *            - Reference:
   *                Unsupported. Error would be thrown.
   *            - Primitive:
   *                Random values would be filled in.
   * @param dataMultiplier
   *          The number of times the sample data pattern would be repeated
   * @param timeRange
   *          The time range for the final sample data
   * @param dataCtx
   *          The {@link DataApiContext} to use for random value generator
   * @param testCtx
   *          The {@link TestApiContext} to generate the sample data on
   *          If given, all sample data would be generated in this context
   *          If not given, all sample data would be generated on the runtime environment
   * @return the {@link DataApiContext} used in this API
   */
  static generateSampleData(sampleDataPatternFileName: string, dataMultiplier: number, timeRange?: TimedIntervalValue | null, dataCtx?: DataApiContext | null, testCtx?: TestApiContext | null): DataApiContext | null;

  /**
   * Remove all data mentioned in `sampleDataPatternFileName`
   * See {@link #generateSampleData} for details
   */
  static removeSampleData(sampleDataPatternFileName: string, testCtx?: TestApiContext | null): void;

  /**
   * Generate random Boolean values.
   *
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param n
   *           Number of values to generate
   * @param trueBias
   *           Bias the values. The default value is 0.5, meaning it is equally likely to generate
   *           false/true values. Bias > 0.5 favors generating true values, and bias < 0.5 favors false
   * @returns the newly created array of Boolean values
   */
  static rndBool(ctx: DataApiContext, n: number, trueBias?: number | null): C3.Array<boolean>;

  /**
   * Generate random integer values.
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param n
   *           Number of values to generate
   * @param lo
   *           Lower bound
   * @param hi
   *           Upper bound (inclusive)
   * @return the newly created array of integer values.
   */
  static rndInt(ctx: DataApiContext, n: number, lo: number, hi: number): C3.Array<number | null>;

  /**
   * Generate random big integer values.
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param n
   *           Number of values to generate
   * @param lo
   *           Lower bound
   * @param hi
   *           Upper bound (inclusive)
   * @returns the newly created array of big integer values.
   */
  static rndBigInt(ctx: DataApiContext, n: number, lo: number, hi: number): C3.Array<number | null>;

  /**
   * Generate random real values.
   *
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param n
   *           Number of values to generate.
   * @param lo
   *           Lower bound
   * @param hi
   *           Upper bound
   * @returns the newly created array of real values
   */
  static rndReal(ctx: DataApiContext, n: number, lo: number, hi: number): C3.Array<number | null>;

  /**
   * Create a multi-valued pulse of length n.
   * Example:
   *   pulse(12, [{value:10, width:3, slew:1}, {value:20, width:3, slew:4}])
   *     -> [10, 10, 10, 12.5, 15, 17.5, 20, 20, 20, 10, 10, 10]
   *
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param n
   *           Number of values to generate.
   * @param configs
   *           Pulse configuration.
   * @param rndConfig
   *           Optional random configuration.
   * @return newly created multi-valued pulse.
   */
  static pulse(ctx: DataApiContext, n: number, configs: C3.Array<DataPulseConfig | null> | null, rndConfig?: DataRndConfig | null): C3.Array<number | null>;

  /**
   * Create periodic data.
   *
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param n
   *           Number of values to generate.
   * @param configs
   *           Periodic configuration.
   * @param rndConfig
   *           Optional random configuration.
   * @return newly created periodic data.
   */
  static periodic(ctx: DataApiContext, n: number, configs: C3.Array<DataPeriodicConfig | null> | null, rndConfig?: DataRndConfig | null): C3.Array<number | null>;

  /**
   * Add a random offset each element of an array of doubles (double-precision floating point numbers).
   *
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param d
   *           The array of doubles to which we will add randomness.
   * @param rndConfig
   *           Optional random configuration.
   * @return a new array of doubles with the randomness added.
   */
  static addRandomness(ctx: DataApiContext, d: C3.Array<number | null> | null, rndConfig?: DataRndConfig | null): C3.Array<number | null>;

  /**
   * Generate an array of dates at a specific interval.
   *
   * @param start
   *           Start date. The first date in the generated array.
   * @param n
   *           The number of dates to generate.
   * @param interval
   *           Interval. i.e. 'HOUR', 'DAY', 'MONTH', etc.
   * @param multiplier
   *           Interval multiplier. For example, if interval is 'HOUR' and multiplier is 2, the each of the
   *           generated dates will be 2 hours apart.
   * @return the generated array of dates.
   */
  static genDates(start: DateTime, n: number, interval: string, multiplier: number): C3.Array<DateTime | null>;

  /**
   * Generate an array of dates at a specific interval. Like genDates except you specify the end date
   * instead of the number of dates.
   *
   * @param start
   *           Start date. The first date in the generated array.
   * @param end
   *           End date. The date _after_ the last date in the generated array
   * @param interval
   *           Interval. i.e. 'HOUR', 'DAY', 'MONTH', etc.
   * @param multiplier
   *           Interval multiplier. For example, if interval is 'HOUR' and multiplier is 2, the each of the
   *           generated dates will be 2 hours apart.
   * @return the generated array of dates.
   *
   * @see DataApi.genDates
   */
  static genDateRange(start: DateTime, end: DateTime, interval: string, multiplier: number): C3.Array<DateTime | null>;

  /**
   * Randomly generate an array of random decimal numbers within a given range.
   *
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param start
   *           Lower bound on decimal range
   * @param end
   *           Upper bound on decimal range
   * @param numPoints
   *           Number of decimals to generate
   * @return a newly created array of decimals
   */
  static getDecimalsInRange(ctx: DataApiContext, start: number, end: number, numPoints: number): C3.Array<number | null>;

  /**
   * Generate an array of dates randomly selected between a given start date and end date.
   *
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param start
   *           Lower bound on date range
   * @param end
   *           Upper bound on date range
   * @param numPoints
   *           Number of dates to generate
   * @return an array of random dates.
   */
  static getDatesInRange(ctx: DataApiContext, start: DateTime, end: DateTime, numPoints: number): C3.Array<DateTime | null>;

  /**
   * Partition a decimal interval into non-overlapping sub-intervals.
   *
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param start
   *           Lower bound of interval
   * @param end
   *           Upper bound of interval
   * @param numPartitions
   *           Number of sub-ranges (aka, partitions) to generate
   * @param interval
   *           Minimum gap between sub-ranges
   * @return a newly created array non-overlapping sub-intervals.
   */
  static partitionDecimalRange(ctx: DataApiContext, start: number, end: number, numPartitions: number, interval: number): C3.Array<DecimalPair | null>;

  /**
   * Partition a date range into non-overlapping sub-ranges.
   *
   * @param ctx
   *           The DataApiContext to use for generating random values.
   * @param start
   *           Start of the date range to partition.
   * @param end
   *           End of the date range to partition.
   * @param numPartitions
   *           Number of sub-ranges (aka, partitions) to generate
   * @param interval
   *           Minimum gap between dates ranges (in milliseconds)
   * @return a newly created array non-overlapping sub-ranges.
   */
  static partitionDateRange(ctx: DataApiContext, start: DateTime, end: DateTime, numPartitions: number, interval: number): C3.Array<TimeRange | null>;
}

