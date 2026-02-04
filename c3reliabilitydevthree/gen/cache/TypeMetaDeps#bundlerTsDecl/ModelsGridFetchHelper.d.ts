export interface ModelsGridFetchHelper {

  readonly id?: string | null;
  withId(id: string | null): ModelsGridFetchHelper;

  readonly name?: string | null;
  withName(name: string | null): ModelsGridFetchHelper;

  readonly status?: MlModel.Route.Status | null;
  withStatus(status: IMlModel.Route.Status | null): ModelsGridFetchHelper;

  readonly validationStatus?: string | null;
  withValidationStatus(validationStatus: string | null): ModelsGridFetchHelper;

  readonly numFeatures?: number | null;
  withNumFeatures(numFeatures: number | null): ModelsGridFetchHelper;

  readonly numAlerts?: number | null;
  withNumAlerts(numAlerts: number | null): ModelsGridFetchHelper;

  readonly numClosedAlerts?: number | null;
  withNumClosedAlerts(numClosedAlerts: number | null): ModelsGridFetchHelper;

  readonly numCases?: number | null;
  withNumCases(numCases: number | null): ModelsGridFetchHelper;

  readonly numFeedback?: number | null;
  withNumFeedback(numFeedback: number | null): ModelsGridFetchHelper;

  readonly trainingPeriod?: string | null;
  withTrainingPeriod(trainingPeriod: string | null): ModelsGridFetchHelper;

  readonly trainingScores?: C3.Map<string | null, number | null>;
  withTrainingScores(trainingScores: C3.Map<string | null, number | null> | {[key: string | null]: number | null}): ModelsGridFetchHelper;

  readonly daysDeployed?: number | null;
  withDaysDeployed(daysDeployed: number | null): ModelsGridFetchHelper;

  readonly deploymentDate?: DateTime | null;
  withDeploymentDate(deploymentDate: DateTime | Date | string | null): ModelsGridFetchHelper;

  readonly maskExpression?: string | null;
  withMaskExpression(maskExpression: string | null): ModelsGridFetchHelper;

  readonly subject?: ReliabilityAsset | null;
  withSubject(subject: IReliabilityAsset | null): ModelsGridFetchHelper;

  readonly project?: MlProject | null;
  withProject(project: IMlProject | null): ModelsGridFetchHelper;
}

