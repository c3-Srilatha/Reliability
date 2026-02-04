// TypeScript definitions for the C3 type PersistableEvaluatable

/**
 * Type containing functions for all persistable evaluate operations
 *
 * @remarks this represents a value passed to a method that expects an instance of PersistableEvaluatable
 */
declare interface IPersistableEvaluatable {
}

/**
 * Type containing functions for all persistable evaluate operations
 *
 * @remarks this represents a made instance of PersistableEvaluatable
 */
declare class PersistableEvaluatable {

  /**
   * This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
   * Support column alias for evaluate & evalMetrics by passing an ObjNode
   * e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
   * e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
   */
  static eval(spec?: EvalSpec | null): Data | null;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
   * the caller is authorized to fetch will be evaluated.
   *
   * @param spec
   *           Specification of projection expressions to evaluate and what objs to evaluate them on.
   * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
   *         expressions) with the evaluated result.
   */
  static evaluate(spec: EvaluateSpec): EvaluateResult | null;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
   * the caller is authorized to fetch will be evaluated.
   *
   * @param spec
   *           Specification of projection expressions to evaluate and what objs to evaluate them on.
   * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
   *         expressions) with the evaluated result.
   */
  static evaluateTupleStream(spec: EvaluateSpec): Stream<CellTuple | null>;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
   * the caller is authorized to fetch will be evaluated. If type has fields marked with {@link Ann.PII} and type has
   * {@link Ann.PIIAggregation},  PIIAggregation conditions will be evaluated and results will be returned iff
   * conditions are met.
   *
   * @param spec
   *           Specification of projection expressions to evaluate and what objs to evaluate them on.
   * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
   *         expressions) with the evaluated result.
   */
  static evaluatePii(spec: EvaluateSpec): EvaluateResult | null;

  /**
   * Evaluates a single projection expression for timeseries data.
   *
   * Support for timeseries based evaluation is deprecated.  Moving forward {@link MetricEvaluatable.evalMetric}
   * or {@link MetricEvaluatable.evalMetrics} should be used instead.
   *
   * @param spec
   *           Specification of the projection expression and which timeseries to evaluate.
   * @return An instance of Timeseries (as an Obj due to module dependency issues) containing the evaluated result.
   *
   * @see MetricEvaluatable
   */
  static tsEval(spec: TSEvalSpec): Obj | null;

  /**
   * Used internally to evaluate as a stream
   */
  static evaluateOvi(spec?: EvaluateSpec | null): any;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
   * as stream of Arrow batches.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static evaluateArrowStream(spec: EvaluateArrowStreamSpec): Stream<Arrow | null>;
}

