// TypeScript definitions for the C3 type Assert

/**
 * This type contains helper methods for doing assertions.
 *
 * @remarks this represents a value passed to a method that expects an instance of Assert
 */
declare interface IAssert {
}

/**
 * This type contains helper methods for doing assertions.
 *
 * @remarks this represents a made instance of Assert
 */
declare class Assert {

  /**
   * Assert that a condition is eventually true.
   *
   * @param message
   *           Error message if condition is eventually false.
   * @param lambda
   *           Condition to assert on.
   * @param retrySchedule
   *           Optional {@link ExponentialBackoff}, defining number of attempts and wait time.
   *           If not specified, an base-2 exponential schedule with 5 minutes total wait time will be used.
   * @param log
   *           Logger to be used
   * @param throwOnError
   *           if true, throws Exception on error.
   */
  static assertEventualTrue(message: string, lambda: λNullPredicate, retrySchedule?: ExponentialBackoff | null, log?: Logger | null, throwOnError?: boolean): void;

  /**
   * Assert that a condition is eventually true.
   *
   * @param message
   *           Error message if condition is eventually false.
   * @param lambda
   *           Condition to assert on.
   * @param retrySchedule
   *           Optional {@link ExponentialBackoff}, defining number of attempts and wait time.
   *           If not specified, an base-2 exponential schedule with 5 minutes total wait time will be used.
   * @param log
   *           Logger to be used
   * @param throwOnError
   *           if true, throws Exception on error.
   */
  static assertEventualEquals(message: string, expected?: any, lambda: λSupplier<any>, retrySchedule?: ExponentialBackoff | null, log?: Logger | null, throwOnError?: boolean): void;
}


interface λSupplier<R> {
  (): R
}

interface λNullPredicate {
  (): boolean
}
