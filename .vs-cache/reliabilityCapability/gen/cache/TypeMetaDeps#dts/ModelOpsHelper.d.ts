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

  /**
   * Retrain a list of {@link MlModel}s with a new time horizon and then deploys each new trained model
   * on the same asset as its original template model.
   */
  static retrainAndDeployModels(models: Array_Type<ReliabilityMlModel>, start: DateTime, end: DateTime, timeRanges?: Array_Type<TimeRange> = '[]', jobName?: string): ModelConfigRun | null;

  /**
   * Ensures that the {@link ReliabilityMlModel}s are each deployed on one {@link MlSubject}.
   */
  static validateSingleSubjectModels(models: Array_Type<ReliabilityMlModel>): boolean;

  /**
   * Get the status of the {@link ReliabilityMlModel#latestAdjustModelHyperparamsExperiment latest experiment workflow} if available, returns null otherwise.
   * @param modelId
   * Id of the model where the workflow status is obtained from
   */
  static getLatestExperimentStatus(modelId: string): string | null;

  /**
   * Obtains the hyperparameters details of the model pipeline, and returns each of them in an object with the next information:
   * { pipe, hyperparam, value }
   * @param modelId
   *  Id of the model where the hyperparameters are obtained from
   */
  static fetchHyperparametersDetails(modelId: string): FetchResult<any> | null;

  /**
   * Ensures that the {@link ReliabilityMlModel} is deployed on one {@link MlSubject}.
   */
  static validateSingleSubjectModel(model: ReliabilityMlModel): boolean;
}

