export interface ModelExperimentApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ModelExperimentApplicationState;

  readonly id?: string | null;
  withId(id: string | null): ModelExperimentApplicationState;

  readonly name?: string | null;
  withName(name: string | null): ModelExperimentApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ModelExperimentApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ModelExperimentApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ModelExperimentApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ModelExperimentApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): ModelExperimentApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): ModelExperimentApplicationState;

  readonly experimentModelStatus?: string | null;
  withExperimentModelStatus(experimentModelStatus: string | null): ModelExperimentApplicationState;

  readonly isDataStoredInState?: boolean;
  withIsDataStoredInState(isDataStoredInState: boolean): ModelExperimentApplicationState;

  readonly experimentModelPreviewData?: ExperimentalPreviewHelper.ChartData | null;
  withExperimentModelPreviewData(experimentModelPreviewData: IExperimentalPreviewHelper.ChartData | null): ModelExperimentApplicationState;

  readonly experimentModelName?: string | null;
  withExperimentModelName(experimentModelName: string | null): ModelExperimentApplicationState;
}

