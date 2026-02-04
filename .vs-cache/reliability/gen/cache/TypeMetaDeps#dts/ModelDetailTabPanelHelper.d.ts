// TypeScript definitions for the C3 type ModelDetailTabPanelHelper

/**
 * Helper type for filling the Model Detail Page Tab Panel info.
 *
 * @remarks this represents a value passed to a method that expects an instance of ModelDetailTabPanelHelper
 */
declare interface IModelDetailTabPanelHelper {
}

/**
 * Helper type for filling the Model Detail Page Tab Panel info.
 *
 * @remarks this represents a made instance of ModelDetailTabPanelHelper
 */
declare class ModelDetailTabPanelHelper {

  /**
   * Function to grab information for {@link ReliabilityMlModel} on Model Detail page.
   * @param id
   *        Id of the {@link ReliabilityMlModel} of which to grab data
   * @return The model information data as JSON
   */
  static get(id?: string): any | null;

  /**
   * Function to update model monitoring classification as the current {@link User}.
   *
   * @param formObject
   *        The form object with the monitoring classification label.
   */
  static updateMonitoringClassificationAsCurrentUser(formObject?: any): void;
}

