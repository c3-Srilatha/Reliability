// TypeScript definitions for the C3 type ReliabilityRiskAlertGenerationRules

/**
 * Functions used by the {@link DataValidationRule rules} for the "Reliability Risk Alert Generation" ruleset.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityRiskAlertGenerationRules
 */
declare interface IReliabilityRiskAlertGenerationRules {
}

/**
 * Functions used by the {@link DataValidationRule rules} for the "Reliability Risk Alert Generation" ruleset.
 *
 * @remarks this represents a made instance of ReliabilityRiskAlertGenerationRules
 */
declare class ReliabilityRiskAlertGenerationRules {

  /**
   * Checks {@link DataValidationRuleset} values of alert timeseries to ensure that alerts were supposed to be raised.
   */
  static validateAlertPredictionSeries(args?: Map_Type<string, any>): DataValidationRuleResult | null;
}

