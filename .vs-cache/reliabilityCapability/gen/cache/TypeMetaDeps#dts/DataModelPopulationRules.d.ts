// TypeScript definitions for the C3 type DataModelPopulationRules

/**
 * Functions used by the {@link DataValidationRule rules} for the "Data Model Population" ruleset.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataModelPopulationRules
 */
declare interface IDataModelPopulationRules {
}

/**
 * Functions used by the {@link DataValidationRule rules} for the "Data Model Population" ruleset.
 *
 * @remarks this represents a made instance of DataModelPopulationRules
 */
declare class DataModelPopulationRules {

  /**
   * Checks for the population of fields. `fields` and `referenceFields` arguments are mappings from field names to priority levels if those fields are not populated.
   * @param args
   *           A map containing arguments needed for validation.
   * @param typeName
   *           The name of the type to validate.
   * @param fields
   *           A map from field names to priority levels for field population validation.
   * @param referenceFields
   *           A map from reference field names to priority levels for validation.
   * @param matchingFields
   *           A map from matching field names to priority levels for validation.
   * @return An array of {@link DataValidationRuleResult} objects representing validation results.
   */
  static validateFieldPopulation(args?: Map_Type<string, any>, typeName: string, fields?: Map_Type<string, number>, referenceFields?: Map_Type<string, number>, matchingFields?: Map_Type<string, number>): Array_Type<DataValidationRuleResult> | null;

  /**
   * Checks for {@link Sensor#pointSeries} population.
   * @param args
   *           A map containing arguments needed for validation.
   * @param p1LookbackMonths
   *           If no data exists for this many months before now, a P1 rule violation is raised.
   * @param p2LookbackMonths
   *           If no data exists for this many months before now, a P2 rule violation is raised. Should be less than p1LookbackMonths.
   * @return An array of {@link DataValidationRuleResult} objects representing validation results.
   */
  static validateSensorData(args?: Map_Type<string, any>, p1LookbackMonths?: number = '4', p2LookbackMonths?: number = '1'): Array_Type<DataValidationRuleResult> | null;

  /**
   * Checks that old {@link Sensor#typeIdent} strings do not show up in the {@link PhysicalAsset} table.
   * @param args
   *           A map containing arguments needed for validation.
   * @return A {@link DataValidationRuleResult} object representing the validation result.
   */
  static validateSensorTypeIdent(args?: Map_Type<string, any>): DataValidationRuleResult | null;

  /**
   * Checks for proper hierarchy denormalization and asset hierarchical relations.
   * @param args
   *           A map containing arguments needed for validation.
   * @param connectedAssetsThreshold
   *           The threshold for connected assets validation (default: 0.8).
   * @return An array of {@link DataValidationRuleResult} objects representing validation results.
   */
  static validateReliabilityAssetHierarchy(args?: Map_Type<string, any>, connectedAssetsThreshold?: number = '0.8'): Array_Type<DataValidationRuleResult> | null;

  /**
   * Checks for a healthy frequency of {@link AssetClass} assignment and associated sensor relations.
   * @param args
   *           A map containing arguments needed for validation.
   * @param assetClassAssignmentThreshold
   *           The threshold for asset class assignment validation (default: 0.1).
   * @return An array of {@link DataValidationRuleResult} objects representing validation results.
   */
  static validateAssetClasses(args?: Map_Type<string, any>, assetClassAssignmentThreshold?: number = '0.1'): Array_Type<DataValidationRuleResult> | null;

  /**
   * Checks that each {@link ExpectedSensor} has a simple metric on {@link ReliabilityAsset} with no bindings.
   * @param args
   *           A map containing arguments needed for validation.
   * @return An array of {@link DataValidationRuleResult} objects representing validation results.
   */
  static validateExpectedSensorMetrics(args?: Map_Type<string, any>): Array_Type<DataValidationRuleResult> | null;

  /**
   * Checks that {@link ReliabilityAsset}s with an assigned {@link AssetClass} have associated {@link ReliabilityAssetSensorRelation}s linking to {@link Sensor}s.
   * @param args
   *           A map containing arguments needed for validation.
   * @param p1Coefficient
   *           The P1 coefficient for validation (default: 0).
   * @param p2Coefficient
   *           The P2 coefficient for validation (default: 0.4).
   * @return An array of {@link DataValidationRuleResult} objects representing validation results.
   */
  static validateAssetSensorRelations(args?: Map_Type<string, any>, p1Coefficient?: number = '0', p2Coefficient?: number = '0.4'): Array_Type<DataValidationRuleResult> | null;
}

