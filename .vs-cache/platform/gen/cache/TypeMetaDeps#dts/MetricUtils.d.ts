// TypeScript definitions for the C3 type MetricUtils

/**
 * @remarks this represents a value passed to a method that expects an instance of MetricUtils
 */
declare interface IMetricUtils {
}

/**
 * @remarks this represents a made instance of MetricUtils
 */
declare class MetricUtils {

  /**
   * Given a string expression, identify variables in it.
   * Variable names are returned in alphabetically sorted order.
   * eg: pow(a,2) - 2 * a * b + 3 * pow(b,2) ==> [a,b]
   * @param expression
   */
  static identifyVariables(expression: string): C3.Array<string | null>;

  /**
   * API to return the list of compound metric objects where the given metric is directly used
   * @param metric
   *            The metric for which usages need to be found
   * @return the list of compound metrics where the metric is used directly.
   */
  static findDirectUsages(metric?: Metric | null): C3.Array<CompoundMetric | null>;

  /**
   * API to return the list of compound metric objects where the given metric is used, directly or indirectly
   * @param metric
   *            The metric for which usages need to be found
   * @return the list of compound metrics where the metric is used. This includes all metrics till the root of the tree
   */
  static findUsages(metric?: Metric | null): C3.Array<CompoundMetric | null>;

  /**
   * API to return the list of compound metric objects for all the given metrics
   * @param metrics
   *            List of metrics for which usages need to be found
   * @return the list of compound metrics per metric. This includes all metrics till the root of the tree
   */
  static findUsagesForMultipleMetrics(metrics?: C3.Array<Metric | null>): C3.Map<string | null, C3.Array<CompoundMetric | null>>;

  /**
   * API to return the list of compound metric objects for all the given metrics
   * @param metrics
   *            List of metrics for which usages need to be found
   * @return the list of compound metrics where the metrics is used. This includes all metrics till the root of the tree
   */
  static findCompoundMetrics(metrics?: C3.Array<Metric | null>): C3.Array<CompoundMetric | null>;

  /**
   * API to return list of all compound and simple metric objects that use TSDecl and satisfies the provided filter
   * @param filter
   *            Additional filter to be applied on the SimpleMetric type
   * @return the list of simple and compound metric objects that contain tsDecl based metrics and satisfies the filter
   */
  static listTSDeclMetrics(filter?: string | null): C3.Array<Obj | null>;

  /**
   * API to return list of all compound and simple metric objects that use ActionDecl and satisfies the provided filter
   * @param filter
   *            Additional filter to be applied on the SimpleMetric type
   * @return the list of simple and compound metric objects that contain actionDecl based metrics and satisfies the filter
   */
  static listActionDeclMetrics(filter?: string | null): C3.Array<Obj | null>;

  /**
   * Gets a list of all metrics affected by a field. A metric is affected by a field if it is referenced anywhere in
   * the metric path or expression.
   * Note that only metrics that participate in automatic invalidation will be returned. This means that only metrics
   * such as the following:
   * 1. Metrics whose path leads to a timeseries header type and expression is the expression on that header type that
   * gets the data point values.
   * 2. AsTimeseries metrics.
   * Also note that metrics such as the following will not be returned:
   * 1. Metrics that don't participate in any analytics (as determined by ACE).
   * 2. Metrics that specify an action
   * @param typeRef
   *            Type of which the field lives
   * @param field
   *            Name of the field
   * @return list of simple and compound metrics that uses the field on the type
   */
  static listMetricsForField(typeRef?: Type | null, field?: string | null): C3.Array<Obj | null>;

  /**
   * Gets a list of all metrics affected by a type. A metric is affected by a type if it appears as either the source
   * type, or is referenced anywhere in the metric path or expression.
   * Note that only metrics that participate in automatic invalidation will be returned. This means that only metrics
   * such as the following:
   * 1. Metrics whose path leads to a timeseries header type and expression is the expression on that header type that
   * gets the data point values.
   * 2. AsTimeseries metrics.
   * Also note that metrics such as the following will not be returned:
   * 1. Metrics that don't participate in any analytics (as determined by ACE).
   * 2. Metrics that specify an action
   * @param typeRef
   *            Type which is used in the path
   * @return list of simple and compound metrics that uses the type
   */
  static listMetricsForType(typeRef?: Type | null): C3.Array<Obj | null>;

  /**
   * Check if the expression is a valid metric expression
   * @param expression
   *                Expression that needs to be validated
   * @param sourceType (Optional)
   *                Source type for which this expression needs to check validity for
   * @return a boolean true if the expression is valid else throws an error
   */
  static isExpressionValid(expression: string, sourceType?: Type | null): boolean;

  /**
   * Deep merge Objs Arry
   * @param objs
   *            An array of objs to merge
   * @return Deep merged objs
   */
  static deepmergeObjs(objs?: C3.Array<Obj | null>): C3.Array<Obj | null>;
}

