// TypeScript definitions for the C3 type DataValidationRuleHelper

/**
 * Type containing potentially useful functions to use in rule implementations.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataValidationRuleHelper
 */
declare interface IDataValidationRuleHelper {
}

/**
 * Type containing potentially useful functions to use in rule implementations.
 *
 * @remarks this represents a made instance of DataValidationRuleHelper
 */
declare class DataValidationRuleHelper {

  /**
   * Finds entities which have unpopulated fields or fields with bad references
   *
   * @param targetType
   *     The type to check entities for.
   * @param fields
   *     Fields which should be populated.
   * @param referenceFields
   *     Fields which should be populated with a valid reference to an existing entity.
   * @param filterString
   *     Additional filter to apply to the target type, limiting the scope of validation.
   * @param limit
   *     Maximum number of entities to return per unpopulated field.
   * @return map<string, [string]>
   *     A map from a field to a list of violating entities' IDs. For reference checks, ".meta.referenceInvalid" will be appended to the field name.
   */
  static getEntitiesWithMissingFields(targetType: Type, fields?: Array_Type<string>, referenceFields?: Array_Type<string>, filterString?: string = '\'1==1\'', limit?: number = '20'): Map_Type<string, Array_Type<string>> | null;

  /**
   * Finds entities which have mismatched field values.
   *
   * @param targetType
   *     The type to check entities for.
   * @param fieldPairs
   *     List of field pairs which should have matching values. Formatted like [['field1', 'field2']] such that field1 should have the same value as field2.
   * @param filterString
   *     Additional filter to apply to the target type, limiting the scope of validation.
   * @return map<string, [string]>
   *     A map from a field to a list of violating entities' IDs. The resultant map will be formatted like { 'field1!=field2': ['entity1'] } if the value of `field1`
   *     does not match the value of `field2` on `entity1`,
   */
  static getEntitiesWithMismatchedFieldValues(targetType: Type, fieldPairs: Array_Type<Array_Type<string>>, filterString?: string = '\'1==1\'', limit?: number = '20'): Map_Type<string, Array_Type<string>> | null;
}

