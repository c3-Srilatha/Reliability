export interface ReliabilityFeaturePlotSpec {

  readonly relFeatures?: C3.Array<FeatureFetchBase | null>;
  withRelFeatures(relFeatures: C3.Array<FeatureFetchBase | null> | Array<IFeatureFetchBase | null>): ReliabilityFeaturePlotSpec;

  readonly assetId: string;
  withAssetId(assetId: string): ReliabilityFeaturePlotSpec;

  readonly modelId?: string | null;
  withModelId(modelId: string | null): ReliabilityFeaturePlotSpec;

  readonly plotActualValues?: boolean;
  withPlotActualValues(plotActualValues: boolean): ReliabilityFeaturePlotSpec;

  readonly plotReconstructions?: boolean;
  withPlotReconstructions(plotReconstructions: boolean): ReliabilityFeaturePlotSpec;

  readonly plotContributions?: boolean;
  withPlotContributions(plotContributions: boolean): ReliabilityFeaturePlotSpec;

  readonly scaleContributionsToRiskScore?: boolean;
  withScaleContributionsToRiskScore(scaleContributionsToRiskScore: boolean): ReliabilityFeaturePlotSpec;

  readonly orderYAxisFieldsBasedOnFeature?: boolean;
  withOrderYAxisFieldsBasedOnFeature(orderYAxisFieldsBasedOnFeature: boolean): ReliabilityFeaturePlotSpec;
}

