// TypeScript definitions for the C3 type RiskScoreAndContributionRules

/**
 * Functions used by the {@link DataValidationRule rules} for the "Risk Score and Contribution" ruleset.
 *
 * @remarks this represents a value passed to a method that expects an instance of RiskScoreAndContributionRules
 */
declare interface IRiskScoreAndContributionRules {
}

/**
 * Functions used by the {@link DataValidationRule rules} for the "Risk Score and Contribution" ruleset.
 *
 * @remarks this represents a made instance of RiskScoreAndContributionRules
 */
declare class RiskScoreAndContributionRules {

  /**
   * Checks that {@link ReliabilityAssetToRiskModelRelation}s exist for the reliability risk {@link MlProject} and have
   * {@link ReliabilityRiskScoreMlPredictionHeader} and {@link ReliabilityRiskScoreMlContributionHeader}.
   */
  static validateReliabilityRiskScoreMlHeaders(args?: Map_Type<string, any>): Array_Type<DataValidationRuleResult> | null;

  /**
   * Checks {@link ReliabilityRiskScoreMlContributionHeader#name} values to ensure that they match the expectations of {@link MlProject.ReliabilityRisk#getContributionHeaderName}.
   */
  static validateContributionHeaderNames(args?: Map_Type<string, any>): DataValidationRuleResult | null;
}

