export interface UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting {

  readonly comparisonText?: string | null;
  withComparisonText(comparisonText: string | null): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly invertTrendDirectionColor?: boolean;
  withInvertTrendDirectionColor(invertTrendDirectionColor: boolean): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly percentage?: boolean;
  withPercentage(percentage: boolean): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly invalidValueMessage?: string | null | UiSdlDynamicValueSpec | null | null;
  withInvalidValueMessage(invalidValueMessage: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly intervalLength?: number | null;
  withIntervalLength(intervalLength: number | null): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly timeHorizon?: string | null;
  withTimeHorizon(timeHorizon: string | null): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting;
}

