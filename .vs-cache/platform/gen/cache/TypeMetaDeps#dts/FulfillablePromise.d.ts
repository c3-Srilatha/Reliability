// TypeScript definitions for the C3 type FulfillablePromise

/**
 * An empty promise that can be fulfilled or rejected in the future.
 *
 * Note that may not be implemented of runtime language does not have a support for it
 *
 * @see Promise#make
 *
 * @remarks this represents a value passed to a method that expects an instance of FulfillablePromise
 */
declare interface IFulfillablePromise<V> {
}

/**
 * An empty promise that can be fulfilled or rejected in the future.
 *
 * Note that may not be implemented of runtime language does not have a support for it
 *
 * @see Promise#make
 *
 * @remarks this represents a made instance of FulfillablePromise
 */
declare class FulfillablePromise<V> {

  /**
   * Call provided handler once promised value is available or call error handler on failure.
   */
  then(onFulfill: λConsumer<V | null>, onReject?: λConsumer<C3.Error> | null): void;

  /**
   * Call provided handler once promised value is available or call error handler on failure. Return value of the
   * onFulfill consumer will be passed down to promise returned by #then method. Similarly Error returned by onReject
   * handler will be passed down to the same promise.
   */
  thenChain(onFulfill: λFunction<V | null, R | null>, onReject?: λFunction<C3.Error, C3.Error> | null): Promise<R> | null;

  /**
   * Call provided handler once promised value is available or call error handler on failure. Returned promise of the
   * onFulfill consumer will be passed down to caller of #then method. Similarly Error returned by onReject handler
   * will be passed down to the same promise.
   */
  thenPromise(onFulfill: λFunction<V | null, Promise<R> | null>, onReject?: λFunction<C3.Error, C3.Error> | null): Promise<R> | null;

  /**
   * Call error handler on failure.
   */
  catch(onReject: λConsumer<C3.Error>): void;

  /**
   * Call error handler on failure.
   */
  catchChain(onReject: λFunction<C3.Error, C3.Error>): Promise<V> | null;

  /**
   * Call the callback once promise is settled.
   */
  finally(onFinally: λConsumer<Promise<V>>): void;

  /**
   * Call the callback once promise is settled.
   */
  finallyChain(onFinally: λConsumer<Promise<V>>): Promise<V> | null;

  /**
   * @return future result; note that may not be implemented of runtime language does not have a support for it
   */
  future(): Future<V>;

  /**
   * Awaits for promise fulfillment.
   *
   * @returns `true` if done or `false` if timeout expired
   */
  await(timeout?: Duration | null): boolean;

  /**
   * Creates a new promise by asynchronously invoking provided fulfiller
   */
  static make(fulfiller: λSupplier<R | null>): Promise<R> | null;

  /**
   * Creates a new promise by asynchronously invoking provided action
   */
  static make(action: λBiConsumer<λConsumer<R | null>, λConsumer<C3.Error | null>>): Promise<R> | null;

  /**
   * Creates an empty promise that can be fulfilled or rejected in the future
   */
  static make(): FulfillablePromise<R> | null;

  /**
   * Fulfills the promise with result of application of provided lambda; note that promise can be fulfilled or rejected
   * once
   */
  fulfill(res: λSupplier<V | null>): void;

  /**
   * Fulfills the promise; note that promise can be fulfilled or rejected once
   */
  fulfill(res: V | null): void;

  /**
   * Reject the promise; note that promise can be fulfilled or rejected once
   */
  reject(err: C3.Error): void;

  /**
   * Reject the promise; note that promise can be fulfilled or rejected once
   */
  reject(err: any): void;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}

interface λSupplier<R> {
  (): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
