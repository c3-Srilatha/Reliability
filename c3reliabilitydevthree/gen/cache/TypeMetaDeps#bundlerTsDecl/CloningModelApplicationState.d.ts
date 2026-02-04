export interface CloningModelApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CloningModelApplicationState;

  readonly id?: string | null;
  withId(id: string | null): CloningModelApplicationState;

  readonly name?: string | null;
  withName(name: string | null): CloningModelApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CloningModelApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CloningModelApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CloningModelApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CloningModelApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): CloningModelApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): CloningModelApplicationState;

  readonly baseModel?: ReliabilityMlModel | null;
  withBaseModel(baseModel: IReliabilityMlModel | null): CloningModelApplicationState;

  readonly asset?: ReliabilityAsset | null;
  withAsset(asset: IReliabilityAsset | null): CloningModelApplicationState;

  readonly usingSensorAssociation?: boolean;
  withUsingSensorAssociation(usingSensorAssociation: boolean): CloningModelApplicationState;

  readonly excludedSensors?: C3.Array<Sensor | null>;
  withExcludedSensors(excludedSensors: C3.Array<Sensor | null> | Array<ISensor | null>): CloningModelApplicationState;

  readonly selectedSensors?: C3.Array<Sensor | null>;
  withSelectedSensors(selectedSensors: C3.Array<Sensor | null> | Array<ISensor | null>): CloningModelApplicationState;

  readonly sensorsPlotted?: C3.Array<string | null>;
  withSensorsPlotted(sensorsPlotted: C3.Array<string | null> | Array<string | null>): CloningModelApplicationState;

  readonly hyperparameterData?: ModelConfigJsonHyperparams | null;
  withHyperparameterData(hyperparameterData: IModelConfigJsonHyperparams | null): CloningModelApplicationState;

  readonly template?: ModelTemplate | null;
  withTemplate(template: IModelTemplate | null): CloningModelApplicationState;

  readonly dataPreparationUiSettings?: ReliabilityDataPreparationUiSettings | null;
  withDataPreparationUiSettings(dataPreparationUiSettings: IReliabilityDataPreparationUiSettings | null): CloningModelApplicationState;

  readonly datasetPreparationRun?: ReliabilityMlDatasetPreparationRun | null;
  withDatasetPreparationRun(datasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): CloningModelApplicationState;

  readonly newModelName?: string | null;
  withNewModelName(newModelName: string | null): CloningModelApplicationState;

  readonly redirectTo?: string | null;
  withRedirectTo(redirectTo: string | null): CloningModelApplicationState;

  readonly cvExclusionsFormFieldValues?: BulkSensorAssociationUiDefaultableFields | null;
  withCvExclusionsFormFieldValues(cvExclusionsFormFieldValues: IBulkSensorAssociationUiDefaultableFields | null): CloningModelApplicationState;

  readonly addToSensorSelectedItemsIds?: C3.Array<string | null>;
  withAddToSensorSelectedItemsIds(addToSensorSelectedItemsIds: C3.Array<string | null> | Array<string | null>): CloningModelApplicationState;

  readonly selectedTemplate?: ModelTemplate | null;
  withSelectedTemplate(selectedTemplate: IModelTemplate | null): CloningModelApplicationState;
}

