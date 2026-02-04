export interface ModelScenarioDetailsApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ModelScenarioDetailsApplicationState;

  readonly id?: string | null;
  withId(id: string | null): ModelScenarioDetailsApplicationState;

  readonly name?: string | null;
  withName(name: string | null): ModelScenarioDetailsApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ModelScenarioDetailsApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ModelScenarioDetailsApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ModelScenarioDetailsApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ModelScenarioDetailsApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): ModelScenarioDetailsApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): ModelScenarioDetailsApplicationState;

  readonly actionMap?: C3.Map<string | null, UiApDataStoreAction | null>;
  withActionMap(actionMap: C3.Map<string | null, UiApDataStoreAction | null> | {[key: string | null]: IUiApDataStoreAction | null}): ModelScenarioDetailsApplicationState;

  readonly resolvedActionMap?: C3.Map<string | null, UiApDataStoreAction | null>;
  withResolvedActionMap(resolvedActionMap: C3.Map<string | null, UiApDataStoreAction | null> | {[key: string | null]: IUiApDataStoreAction | null}): ModelScenarioDetailsApplicationState;

  readonly dataMap?: C3.Map<string | null, any>;
  withDataMap(dataMap: C3.Map<string | null, any> | {[key: string | null]: any}): ModelScenarioDetailsApplicationState;

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): ModelScenarioDetailsApplicationState;

  readonly resolvedContextVars?: C3.Map<string | null, any>;
  withResolvedContextVars(resolvedContextVars: C3.Map<string | null, any> | {[key: string | null]: any}): ModelScenarioDetailsApplicationState;

  readonly isLoadingMap?: C3.Map<string | null, boolean>;
  withIsLoadingMap(isLoadingMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): ModelScenarioDetailsApplicationState;

  readonly baseModel?: ReliabilityMlModel | null;
  withBaseModel(baseModel: IReliabilityMlModel | null): ModelScenarioDetailsApplicationState;

  readonly asset?: ReliabilityAsset | null;
  withAsset(asset: IReliabilityAsset | null): ModelScenarioDetailsApplicationState;

  readonly timeRange?: TimeRange | null;
  withTimeRange(timeRange: ITimeRange | null): ModelScenarioDetailsApplicationState;

  readonly status?: string | null;
  withStatus(status: string | null): ModelScenarioDetailsApplicationState;

  readonly chartConfig?: UiApTimeseriesChartConfig | null;
  withChartConfig(chartConfig: IUiApTimeseriesChartConfig | null): ModelScenarioDetailsApplicationState;

  readonly alertData?: C3.Map<string | null, FetchResult<any | null> | null>;
  withAlertData(alertData: C3.Map<string | null, FetchResult<any | null> | null> | {[key: string | null]: IFetchResult<any | null> | null}): ModelScenarioDetailsApplicationState;

  readonly featureData?: C3.Map<string | null, Timeseries<any> | null>;
  withFeatureData(featureData: C3.Map<string | null, Timeseries<any> | null> | {[key: string | null]: ITimeseries<any> | null}): ModelScenarioDetailsApplicationState;

  readonly scenarioTimeRange?: TimeRange | null;
  withScenarioTimeRange(scenarioTimeRange: ITimeRange | null): ModelScenarioDetailsApplicationState;

  readonly dataTimeRange?: TimeRange | null;
  withDataTimeRange(dataTimeRange: ITimeRange | null): ModelScenarioDetailsApplicationState;
}

