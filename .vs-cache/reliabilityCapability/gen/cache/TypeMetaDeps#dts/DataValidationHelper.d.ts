// TypeScript definitions for the C3 type DataValidationHelper

/**
 * Non-entity helper type used to facilitate various data validation workflows.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataValidationHelper
 */
declare interface IDataValidationHelper {
}

/**
 * Non-entity helper type used to facilitate various data validation workflows.
 *
 * @remarks this represents a made instance of DataValidationHelper
 */
declare class DataValidationHelper {

  /**
   * Returns a filter string for the given type which limits results to those related to the given parent asset.
   */
  static getTypeFilterForParentAsset(targetType: Type, parentAsset?: string): string | null;
}

