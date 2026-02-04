export interface AssetDetailModelsChartSpec {

  readonly relation?: ReliabilityAssetToModelRelation | null;
  withRelation(relation: IReliabilityAssetToModelRelation | null): AssetDetailModelsChartSpec;

  readonly modelOutputs?: C3.Array<string | null>;
  withModelOutputs(modelOutputs: C3.Array<string | null> | Array<string | null>): AssetDetailModelsChartSpec;

  readonly features?: C3.Array<string | null>;
  withFeatures(features: C3.Array<string | null> | Array<string | null>): AssetDetailModelsChartSpec;

  readonly interval?: string | null;
  withInterval(interval: string | null): AssetDetailModelsChartSpec;

  readonly startDate: string;
  withStartDate(startDate: string): AssetDetailModelsChartSpec;

  readonly endDate: string;
  withEndDate(endDate: string): AssetDetailModelsChartSpec;
}

