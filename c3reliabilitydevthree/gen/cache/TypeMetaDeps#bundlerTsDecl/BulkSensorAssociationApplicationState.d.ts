export interface BulkSensorAssociationApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BulkSensorAssociationApplicationState;

  readonly id?: string | null;
  withId(id: string | null): BulkSensorAssociationApplicationState;

  readonly name?: string | null;
  withName(name: string | null): BulkSensorAssociationApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BulkSensorAssociationApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BulkSensorAssociationApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BulkSensorAssociationApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BulkSensorAssociationApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): BulkSensorAssociationApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): BulkSensorAssociationApplicationState;

  readonly settings?: BulkSensorAssociationUiSettings | null;
  withSettings(settings: IBulkSensorAssociationUiSettings | null): BulkSensorAssociationApplicationState;

  readonly checkingSensorAssociationValidity?: boolean;
  withCheckingSensorAssociationValidity(checkingSensorAssociationValidity: boolean): BulkSensorAssociationApplicationState;

  readonly currentlyOpenSensorAssociationJob?: ReliabilityAssetSensorAssociationJob | null;
  withCurrentlyOpenSensorAssociationJob(currentlyOpenSensorAssociationJob: IReliabilityAssetSensorAssociationJob | null): BulkSensorAssociationApplicationState;

  readonly sensorAssociationWorkflowInProgress?: boolean;
  withSensorAssociationWorkflowInProgress(sensorAssociationWorkflowInProgress: boolean): BulkSensorAssociationApplicationState;

  readonly numCompletedJobs?: number | null;
  withNumCompletedJobs(numCompletedJobs: number | null): BulkSensorAssociationApplicationState;

  readonly targetTagId?: string | null;
  withTargetTagId(targetTagId: string | null): BulkSensorAssociationApplicationState;

  readonly errorInfo?: any | null;
  withErrorInfo(errorInfo: any | null): BulkSensorAssociationApplicationState;
}

