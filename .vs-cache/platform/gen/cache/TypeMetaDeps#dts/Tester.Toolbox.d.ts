// TypeScript definitions for the C3 type Tester.Toolbox

/**
 * This type standardises various functions that are used frequently among various tests.
 * The functions provided target the implementation of various components. When the design or implementation changes,
 * the tools provided by the toolbox should change as well.
 *
 * @remarks this represents a value passed to a method that expects an instance of Tester.Toolbox
 */
declare namespace Tester {
  export interface IToolbox {
  }
}

/**
 * This type standardises various functions that are used frequently among various tests.
 * The functions provided target the implementation of various components. When the design or implementation changes,
 * the tools provided by the toolbox should change as well.
 *
 * @remarks this represents a made instance of Tester.Toolbox
 */
declare namespace Tester {
  export class Toolbox {

    /**
     * Wrapper to facilitate retrying an action multiple times.
     * @param action
     *        A supplier denoting the action to continually retake and the T to eventually return.
     * @param earlyExit
     *        A predicate denoting the caller's expected result from the action, used to resolve early if expectations
     *        from `action` are met.
     * @param totalRetries
     *        The amount of retries of `action` to take before giving up.
     * @param timeBetween
     *        The amount of time in milliseconds in between each retry.
     * @return An awaitable Promise of the T supplied by `action` and accepted by `earlyExit`, OR the last thing `action`
     *        was able to retrieve before exhausting all retries. The Promise will resolve and never reject.
     */
    static retryAction(action: λSupplier<T | null>, earlyExit: λPredicate<T | null>, totalRetries?: number | null, timeBetween?: number | null): Promise<T> | null;

    /**
     * Wrapper to capture all events sent from `eventStream` after taking an action.
     * @param action
     *        A lambda that puts something into motion, causing `eventStream` to send events.
     * @param eventStream
     *        The EventStream to listen to
     * @param timeout
     *        How long in milliseconds to listen for.
     * @return {@link TestToolbox.ObservedEvents} all events captured from `eventStream` and the time taken for the last
     *        captured event to arrive during the listening period specified by `timeout`.
     */
    static observeEvents(action: λSupplier<any>, eventStream: EventStream<any>, timeout?: number | null): C3.Promise<Tester.Toolbox.ObservedEvents | null> | null;

    /**
     * Returns true if there exists an event E in `existsIn` such that the fields of `event` is a subset of E.
     * This loose matching allows for omission of `sequenceNum` and `kind` in `event`, and `targetFiles` will be an
     * unordered subarray check.
     *
     * Currently ignores any `targetFileFingerprints`.
     */
    static eventExists(event?: Pkg.File.Event | null, existsIn?: C3.Array<Pkg.File.Event | null>): boolean;

    /**
     * Returns a readable string of all {@link Pkg.File.Event}s of the following form:
     *        "[{sequenceNum: nth, kind: INFO, targetFiles: [meta://mypackage/package.json]}, ...]"
     */
    static readablePkgFileEvents(events?: C3.Array<Pkg.File.Event | null>): string | null;
  }
}


interface λSupplier<R> {
  (): R
}

interface λPredicate<T> {
  (t: T): boolean
}
