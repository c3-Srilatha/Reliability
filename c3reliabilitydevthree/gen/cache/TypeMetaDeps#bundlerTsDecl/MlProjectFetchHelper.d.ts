export interface MlProjectFetchHelper {

  readonly id?: string | null;
  withId(id: string | null): MlProjectFetchHelper;

  readonly name?: string | null;
  withName(name: string | null): MlProjectFetchHelper;

  readonly liveModel?: ReliabilityMlModel | null;
  withLiveModel(liveModel: IReliabilityMlModel | null): MlProjectFetchHelper;

  readonly numberOfModels?: number | null;
  withNumberOfModels(numberOfModels: number | null): MlProjectFetchHelper;

  readonly lastUpdated?: DateTime | null;
  withLastUpdated(lastUpdated: DateTime | Date | string | null): MlProjectFetchHelper;

  readonly numberOfDatasets?: number | null;
  withNumberOfDatasets(numberOfDatasets: number | null): MlProjectFetchHelper;

  readonly assetValidationStatus?: string | null;
  withAssetValidationStatus(assetValidationStatus: string | null): MlProjectFetchHelper;

  readonly fetchLimit?: number | null;
  withFetchLimit(fetchLimit: number | null): MlProjectFetchHelper;

  readonly assetId?: string | null;
  withAssetId(assetId: string | null): MlProjectFetchHelper;
}

