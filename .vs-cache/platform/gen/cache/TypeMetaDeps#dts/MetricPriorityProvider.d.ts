// TypeScript definitions for the C3 type MetricPriorityProvider

/**
 * Base type for computing metric priorities for.  Implementers will mixin this type and specify the metric source type as the parameter.
 *
 * Use `@dependency(include)` annotation to indicate the include spec to use for the mapReduce job that is used to
 * compute the priorities.
 *
 * @remarks this represents a value passed to a method that expects an instance of MetricPriorityProvider
 */
declare interface IMetricPriorityProvider<SRCTYPE> {
}

/**
 * Base type for computing metric priorities for.  Implementers will mixin this type and specify the metric source type as the parameter.
 *
 * Use `@dependency(include)` annotation to indicate the include spec to use for the mapReduce job that is used to
 * compute the priorities.
 *
 * @remarks this represents a made instance of MetricPriorityProvider
 */
declare class MetricPriorityProvider<SRCTYPE> {

  /**
   * Computes the priorities for a list of objs of type <SRCTYPE>.  Implementors must return an arry of ints the same size
   * as the input objs arry.  Valid priorities are 0 (highest priority) <= priority <= maxInt (lowest priority).
   *
   * This function is called by the MetricPriorityJob.computeProperties function.  It will be called once per set of objs for each metric group that contains metrics
   * for the parametric type and once for each metric of the parametric type and a {@link MetricsListener} for it.
   *
   * @param objs
   *           List of objs to compute priorities for.  To have specific fields include in the input objs, types that mixin this type should
   *           specify `@dependency(include = "your include spec")`.  If no include is specified, only the id will be present in the input objs.
   *
   * @param metricGroupOrName
   *           Either a metric group (for the analytics queue), or a metric name (for the metrics queue).  The implementor should determine which and
   *           return the appropriate priorities.
   */
  static priority(objs: C3.Array<SRCTYPE | null> | null, metricGroupOrName: string): C3.Array<number | null>;
}

