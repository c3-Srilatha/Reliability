export interface UiSdlMetricTileDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlMetricTileDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlMetricTileDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlMetricTileDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlMetricTileDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlMetricTileDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlMetricTileDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlMetricTileDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlMetricTileDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMetricTileDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlMetricTileDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlMetricTileDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlMetricTileDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlMetricTileDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlMetricTileDataSpec;

  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): UiSdlMetricTileDataSpec;

  readonly notation?: string | null;
  withNotation(notation: string | null): UiSdlMetricTileDataSpec;

  readonly mainValue?: UiSdlMetricTileDataSpecMainValueSetting | null;
  withMainValue(mainValue: IUiSdlMetricTileDataSpecMainValueSetting | null): UiSdlMetricTileDataSpec;

  readonly kpiTrendComparison?: UiSdlMetricTileDataSpecKPITrendComparisonSetting | null;
  withKpiTrendComparison(kpiTrendComparison: IUiSdlMetricTileDataSpecKPITrendComparisonSetting | null): UiSdlMetricTileDataSpec;

  readonly historicSparkline?: UiSdlMetricTileDataSpecHistoricalSparklineSetting | null;
  withHistoricSparkline(historicSparkline: IUiSdlMetricTileDataSpecHistoricalSparklineSetting | null): UiSdlMetricTileDataSpec;

  readonly forecastSparkline?: UiSdlMetricTileDataSpecForecastSparklineSetting | null;
  withForecastSparkline(forecastSparkline: IUiSdlMetricTileDataSpecForecastSparklineSetting | null): UiSdlMetricTileDataSpec;

  readonly planSparkline?: UiSdlMetricTileDataSpecPlanSparklineSetting | null;
  withPlanSparkline(planSparkline: IUiSdlMetricTileDataSpecPlanSparklineSetting | null): UiSdlMetricTileDataSpec;
}

