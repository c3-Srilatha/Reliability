// TypeScript definitions for the C3 type Future

/**
 * Result of an asynchronous action.
 *
 * @remarks this represents a value passed to a method that expects an instance of Future
 */
declare interface IFuture<V> {
}

/**
 * Result of an asynchronous action.
 *
 * @remarks this represents a made instance of Future
 */
declare class Future<V> {

  /**
   * @returns true if the action has completed.
   */
  isDone(): boolean;

  /**
   * @return value of this action; note that this is a potentially blocking call if value is not yet available.
   *         Also call will throw exception if action that is suppose to deliver the promise failed.
   */
  get(timeout?: Duration | null): V | null;

  /**
   * @return one of  value or error; note that this is a potentially blocking call if value is not yet available.
   */
  getValueOrError(timeout?: Duration | null): Pair<V, Error> | null;
}

