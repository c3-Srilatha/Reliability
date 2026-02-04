// TypeScript definitions for the C3 type DataValidationRunHelper

/**
 * Helper type for Reliability data validation functionality.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataValidationRunHelper
 */
declare interface IDataValidationRunHelper {
}

/**
 * Helper type for Reliability data validation functionality.
 *
 * @remarks this represents a made instance of DataValidationRunHelper
 */
declare class DataValidationRunHelper {

  /**
   * Generate data validation run for a {@link DataValidationRuleset}.
   */
  static generateDataValidationRun(rootRuleset: DataValidationRuleset, parentAsset?: ReliabilityAsset): DataValidationRun;
}

