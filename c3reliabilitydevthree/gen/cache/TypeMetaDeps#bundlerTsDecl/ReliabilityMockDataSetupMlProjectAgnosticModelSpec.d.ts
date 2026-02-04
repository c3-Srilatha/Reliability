export interface ReliabilityMockDataSetupMlProjectAgnosticModelSpec {

  readonly asset?: ReliabilityAsset | null;
  withAsset(asset: IReliabilityAsset | null): ReliabilityMockDataSetupMlProjectAgnosticModelSpec;

  readonly project?: ReliabilityMl.Project | null;
  withProject(project: IReliabilityMl.Project | null): ReliabilityMockDataSetupMlProjectAgnosticModelSpec;

  readonly template?: ModelTemplate | null;
  withTemplate(template: IModelTemplate | null): ReliabilityMockDataSetupMlProjectAgnosticModelSpec;

  readonly datasetStart?: DateTime | null;
  withDatasetStart(datasetStart: DateTime | Date | string | null): ReliabilityMockDataSetupMlProjectAgnosticModelSpec;

  readonly datasetEnd?: DateTime | null;
  withDatasetEnd(datasetEnd: DateTime | Date | string | null): ReliabilityMockDataSetupMlProjectAgnosticModelSpec;

  readonly datasetInterval?: string | null;
  withDatasetInterval(datasetInterval: string | null): ReliabilityMockDataSetupMlProjectAgnosticModelSpec;

  readonly inferenceStart?: DateTime | null;
  withInferenceStart(inferenceStart: DateTime | Date | string | null): ReliabilityMockDataSetupMlProjectAgnosticModelSpec;

  readonly inferenceEnd?: DateTime | null;
  withInferenceEnd(inferenceEnd: DateTime | Date | string | null): ReliabilityMockDataSetupMlProjectAgnosticModelSpec;
}

