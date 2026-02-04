// TypeScript definitions for the C3 type TimedGraph

/**
 * @remarks this represents a value passed to a method that expects an instance of TimedGraph
 */
declare interface ITimedGraph<V, E> {
}

/**
 * @remarks this represents a made instance of TimedGraph
 */
declare class TimedGraph<V, E> {

  /**
   * API to return instance of graph at timestamp 'timestamp'
   * @param this_
   *          Current instance of Timed Graph
   * @param ts
   *          Graph representation at time instant ts
   * @return The graph at instant timestamp
   */
  static at(this_: TimedGraph<V, E>, timestamp: DateTime): Graph<V, E> | null;

  /**
   * API to return Graph states at various instants in time
   * @param this_
   *            Instance of TimedGraph
   * @param timestamps
   *            Various instants of time
   * @return Graph states at various instants in time
   */
  static atBatch(this_: TimedGraph<V, E>, timestamps: C3.Array<DateTime | null> | null): C3.Map<DateTime | null, Graph<V, E> | null>;

  /**
   * Create an instance of in memory timed graph
   * @param source
   *              The source graph from which the timed graph should be created
   * @param vertexTraversabilityChanges
   *              The traversability changes for the source graph and their toggle times
   * @return An instance of in memory timed graph
   */
  static makeGraph(source?: Graph<V, E> | null, vertexTraversabilityChanges?: C3.Map<string | null, C3.Array<DateTime | null>>): InMemoryTimedGraph<V, E> | null;
}

