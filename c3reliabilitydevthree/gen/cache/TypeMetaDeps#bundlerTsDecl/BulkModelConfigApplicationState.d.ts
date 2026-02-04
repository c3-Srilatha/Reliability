export interface BulkModelConfigApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BulkModelConfigApplicationState;

  readonly id?: string | null;
  withId(id: string | null): BulkModelConfigApplicationState;

  readonly name?: string | null;
  withName(name: string | null): BulkModelConfigApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BulkModelConfigApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BulkModelConfigApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BulkModelConfigApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BulkModelConfigApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): BulkModelConfigApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): BulkModelConfigApplicationState;

  readonly settings?: BulkModelConfigUiSettings | null;
  withSettings(settings: IBulkModelConfigUiSettings | null): BulkModelConfigApplicationState;

  readonly numCompletedJobs?: number | null;
  withNumCompletedJobs(numCompletedJobs: number | null): BulkModelConfigApplicationState;

  readonly hyperparameterData?: C3.Map<string | null, any | null>;
  withHyperparameterData(hyperparameterData: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): BulkModelConfigApplicationState;

  readonly inlineNotificationConfig?: any | null;
  withInlineNotificationConfig(inlineNotificationConfig: any | null): BulkModelConfigApplicationState;

  readonly currentlyOpenModelConfigRun?: ModelConfigRun | null;
  withCurrentlyOpenModelConfigRun(currentlyOpenModelConfigRun: IModelConfigRun | null): BulkModelConfigApplicationState;

  readonly selectedAssetIdsWithoutDataset?: C3.Array<ReliabilityAsset | null>;
  withSelectedAssetIdsWithoutDataset(selectedAssetIdsWithoutDataset: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): BulkModelConfigApplicationState;

  readonly selectedAssetIdsWithDataset?: C3.Array<ReliabilityAsset | null>;
  withSelectedAssetIdsWithDataset(selectedAssetIdsWithDataset: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): BulkModelConfigApplicationState;

  readonly templateData?: C3.Array<ModelTemplate | null>;
  withTemplateData(templateData: C3.Array<ModelTemplate | null> | Array<IModelTemplate | null>): BulkModelConfigApplicationState;

  readonly selectedModels?: C3.Array<string | null>;
  withSelectedModels(selectedModels: C3.Array<string | null> | Array<string | null>): BulkModelConfigApplicationState;

  readonly selectedCVs?: C3.Array<string | null>;
  withSelectedCVs(selectedCVs: C3.Array<string | null> | Array<string | null>): BulkModelConfigApplicationState;

  readonly loadingModelConfig?: boolean;
  withLoadingModelConfig(loadingModelConfig: boolean): BulkModelConfigApplicationState;

  readonly usingBulkDataPrep?: boolean;
  withUsingBulkDataPrep(usingBulkDataPrep: boolean): BulkModelConfigApplicationState;

  readonly isSensorAssociationFlow?: boolean;
  withIsSensorAssociationFlow(isSensorAssociationFlow: boolean): BulkModelConfigApplicationState;

  readonly usingBulkSensorAssociation?: boolean;
  withUsingBulkSensorAssociation(usingBulkSensorAssociation: boolean): BulkModelConfigApplicationState;

  readonly sensorAssociationFlowTargetAssetIds?: C3.Array<string | null>;
  withSensorAssociationFlowTargetAssetIds(sensorAssociationFlowTargetAssetIds: C3.Array<string | null> | Array<string | null>): BulkModelConfigApplicationState;

  readonly sensorAssociationFlowErrorAssets?: C3.Array<ReliabilityAsset | null>;
  withSensorAssociationFlowErrorAssets(sensorAssociationFlowErrorAssets: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): BulkModelConfigApplicationState;
}

