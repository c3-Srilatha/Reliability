export interface UiSdlMetricTileEvalDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlMetricTileEvalDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlMetricTileEvalDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlMetricTileEvalDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlMetricTileEvalDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlMetricTileEvalDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlMetricTileEvalDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlMetricTileEvalDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlMetricTileEvalDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMetricTileEvalDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlMetricTileEvalDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlMetricTileEvalDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlMetricTileEvalDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlMetricTileEvalDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlMetricTileEvalDataSpec;

  readonly mainValue?: UiSdlMetricTileEvalDataSpecMainValueSetting | null;
  withMainValue(mainValue: IUiSdlMetricTileEvalDataSpecMainValueSetting | null): UiSdlMetricTileEvalDataSpec;

  readonly kpiTrendComparison?: UiSdlMetricTileEvalDataSpecKPITrendComparisonSetting | null;
  withKpiTrendComparison(kpiTrendComparison: IUiSdlMetricTileEvalDataSpecKPITrendComparisonSetting | null): UiSdlMetricTileEvalDataSpec;

  readonly historicSparkline?: UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting | null;
  withHistoricSparkline(historicSparkline: IUiSdlMetricTileEvalDataSpecHistoricalSparklineSetting | null): UiSdlMetricTileEvalDataSpec;

  readonly forecastSparkline?: UiSdlMetricTileEvalDataSpecForecastSparklineSetting | null;
  withForecastSparkline(forecastSparkline: IUiSdlMetricTileEvalDataSpecForecastSparklineSetting | null): UiSdlMetricTileEvalDataSpec;

  readonly planSparkline?: UiSdlMetricTileEvalDataSpecPlanSparklineSetting | null;
  withPlanSparkline(planSparkline: IUiSdlMetricTileEvalDataSpecPlanSparklineSetting | null): UiSdlMetricTileEvalDataSpec;
}

