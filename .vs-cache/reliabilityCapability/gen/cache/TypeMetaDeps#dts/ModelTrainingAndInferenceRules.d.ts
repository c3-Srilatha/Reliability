// TypeScript definitions for the C3 type ModelTrainingAndInferenceRules

/**
 * Functions used by the {@link DataValidationRule rules} for the "Model Training and Inference" ruleset.
 *
 * @remarks this represents a value passed to a method that expects an instance of ModelTrainingAndInferenceRules
 */
declare interface IModelTrainingAndInferenceRules {
}

/**
 * Functions used by the {@link DataValidationRule rules} for the "Model Training and Inference" ruleset.
 *
 * @remarks this represents a made instance of ModelTrainingAndInferenceRules
 */
declare class ModelTrainingAndInferenceRules {

  /**
   * Checks that {@link ReliabilityMLConfig#mlProjectTrainingIntervalMap} contains an entry for all {@link MlProject}s.
   */
  static validateTrainingIntervalMap(args?: Map_Type<string, any>): DataValidationRuleResult | null;
}

