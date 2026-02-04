// TypeScript definitions for the C3 type ModelOpsHelper

/**
 * Helper type for providing support for Model Ops Functionality
 *
 * @remarks this represents a value passed to a method that expects an instance of ModelOpsHelper
 */
declare interface IModelOpsHelper {
}

/**
 * Helper type for providing support for Model Ops Functionality
 *
 * @remarks this represents a made instance of ModelOpsHelper
 */
declare class ModelOpsHelper {

  /**
   * Change a selected {@link MlModel.Route} status and the current CHAMPION {@link MlModel.Route} status as needed.
   * There can only be one CHAMPION model which implies that if newSelectedRouteStatus is set to 'CHAMPION',
   * newCurrentRouteStatus must be a different label.
   * If newSelectedRouteStatus is not set to 'CHAMPION', the current configuration belonging to the subjectFilter
   * will remain as the CHAMPION route.
   */
  static changeRouteStatus(selectedRoute: MlModel.Route, newSelectedRouteStatus: string, newCurrentRouteStatus?: string): MlModel.Route;

  /**
   * Change a selected {@link MlModel} status and the current CHAMPION {@link MlModel} status as needed.
   * There can only be one CHAMPION model which implies that if newSelectedRouteStatus is set to 'CHAMPION',
   * newCurrentRouteStatus must be a different label.
   * If newSelectedRouteStatus is not set to 'CHAMPION', the current configuration belonging to the subjectFilter
   * will remain as the CHAMPION route.
   */
  static changeModelStatus(selectedModel: MlModel, newSelectedRouteStatus: string, newCurrentRouteStatus?: string): MlModel;
}

