// TypeScript definitions for the C3 type LogProfiler

/**
 * Extract data on action calls for performance analysis.
 *
 * @remarks this represents a value passed to a method that expects an instance of LogProfiler
 */
declare interface ILogProfiler {
}

/**
 * Extract data on action calls for performance analysis.
 *
 * @remarks this represents a made instance of LogProfiler
 */
declare class LogProfiler {

  /**
   * Quick and dirty Action Profiler based on local log file. e.g. usage:
   * ```js
   * c3Table(LogProfiler.profile({duration:'5m', order:'time', rid:c3Context().lastAction.id}))
   * ```
   */
  static profile(spec?: LogProfileSpec | null): C3.Array<LogActionStat | null>;

  /**
   * Use the #profile function above to query the log and reconstruct call stack "trees" using parent and root action
   * ids. Note that each element in the return value is a root action and all the actions it calls are in the tree
   * structure below it.
   *
   * ```js
   * c3Viz(SvgChart.stacks(LogProfiler.stacks({duration:'5m', limit:-1, rid:c3Context().lastAction.id})))
   * ```
   */
  static stacks(spec?: LogProfileStacksSpec | null): C3.Array<ActionStackTree | null>;
}

