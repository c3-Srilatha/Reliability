export interface ModelScenarioApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ModelScenarioApplicationState;

  readonly id?: string | null;
  withId(id: string | null): ModelScenarioApplicationState;

  readonly name?: string | null;
  withName(name: string | null): ModelScenarioApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ModelScenarioApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ModelScenarioApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ModelScenarioApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ModelScenarioApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): ModelScenarioApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): ModelScenarioApplicationState;

  readonly actionMap?: C3.Map<string | null, UiApDataStoreAction | null>;
  withActionMap(actionMap: C3.Map<string | null, UiApDataStoreAction | null> | {[key: string | null]: IUiApDataStoreAction | null}): ModelScenarioApplicationState;

  readonly resolvedActionMap?: C3.Map<string | null, UiApDataStoreAction | null>;
  withResolvedActionMap(resolvedActionMap: C3.Map<string | null, UiApDataStoreAction | null> | {[key: string | null]: IUiApDataStoreAction | null}): ModelScenarioApplicationState;

  readonly dataMap?: C3.Map<string | null, any>;
  withDataMap(dataMap: C3.Map<string | null, any> | {[key: string | null]: any}): ModelScenarioApplicationState;

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): ModelScenarioApplicationState;

  readonly resolvedContextVars?: C3.Map<string | null, any>;
  withResolvedContextVars(resolvedContextVars: C3.Map<string | null, any> | {[key: string | null]: any}): ModelScenarioApplicationState;

  readonly isLoadingMap?: C3.Map<string | null, boolean>;
  withIsLoadingMap(isLoadingMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): ModelScenarioApplicationState;

  readonly redirectTo?: string | null;
  withRedirectTo(redirectTo: string | null): ModelScenarioApplicationState;

  readonly jobName?: string | null;
  withJobName(jobName: string | null): ModelScenarioApplicationState;

  readonly lookbackDuration?: string | null;
  withLookbackDuration(lookbackDuration: string | null): ModelScenarioApplicationState;

  readonly asset?: ReliabilityAsset | null;
  withAsset(asset: IReliabilityAsset | null): ModelScenarioApplicationState;

  readonly facility?: Facility | null;
  withFacility(facility: IFacility | null): ModelScenarioApplicationState;

  readonly dataInterval?: string | null;
  withDataInterval(dataInterval: string | null): ModelScenarioApplicationState;

  readonly selectedItems?: C3.Array<string | null>;
  withSelectedItems(selectedItems: C3.Array<string | null> | Array<string | null>): ModelScenarioApplicationState;

  readonly scenarioWindowAtCSVUpload?: C3.Array<DateTime | null>;
  withScenarioWindowAtCSVUpload(scenarioWindowAtCSVUpload: C3.Array<DateTime | null> | Array<IDateTime | null>): ModelScenarioApplicationState;

  readonly lastPlottedTimeRange?: TimeRange | null;
  withLastPlottedTimeRange(lastPlottedTimeRange: ITimeRange | null): ModelScenarioApplicationState;

  readonly overriddenFeatures?: C3.Map<string | null, ReliabilityMlModelScenario.ValueGenerator | null>;
  withOverriddenFeatures(overriddenFeatures: C3.Map<string | null, ReliabilityMlModelScenario.ValueGenerator | null> | {[key: string | null]: IReliabilityMlModelScenario.ValueGenerator | null}): ModelScenarioApplicationState;
}

