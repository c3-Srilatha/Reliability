// TypeScript definitions for the C3 type Promise

/**
 * A promise of delivery of a value [ or failure ] in the future.
 *
 * Note that typically it is implemented natively in the runtime language.
 *
 * For example, a method that is declared to return a promise when called from JavaScript will return a native
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises Promise} instance:
 * ```type
 *   predictCount: member function(): Promise<int>
 * ```
 * ```js
 *   inst.predictCount().then(count => ...);
 * ```
 *
 * Similarly, an asynchronous method implemented in JavaScript should return a native JavaScript Promise.
 * ```js
 *   function predictCount() {
 *     return new Promise((resolve, reject) => {
 *        resolve(performPrediction());
 *     });
 *   }
 * ```
 *
 * @remarks this represents a value passed to a method that expects an instance of Promise
 */
declare namespace C3 {
  export interface IPromise<V> {
  }
}

/**
 * A promise of delivery of a value [ or failure ] in the future.
 *
 * Note that typically it is implemented natively in the runtime language.
 *
 * For example, a method that is declared to return a promise when called from JavaScript will return a native
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises Promise} instance:
 * ```type
 *   predictCount: member function(): Promise<int>
 * ```
 * ```js
 *   inst.predictCount().then(count => ...);
 * ```
 *
 * Similarly, an asynchronous method implemented in JavaScript should return a native JavaScript Promise.
 * ```js
 *   function predictCount() {
 *     return new Promise((resolve, reject) => {
 *        resolve(performPrediction());
 *     });
 *   }
 * ```
 *
 * @remarks this represents a made instance of Promise
 */
declare namespace C3 {
  export class Promise<V> {

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
  }
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
