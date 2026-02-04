export interface UiSdlTimeseriesLineBarChartEventSeriesDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly seriesLabel?: string | null;
  withSeriesLabel(seriesLabel: string | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly timestamp: UiSdlFieldBasedDataSpecSetting;
  withTimestamp(timestamp: IUiSdlFieldBasedDataSpecSetting): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly yValue?: UiSdlTimeseriesLineBarChartEventRelativePosition | null | Dimension | null | null;
  withYValue(yValue: IUiSdlTimeseriesLineBarChartEventRelativePosition | null | IDimension | null | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly tooltipAdditionalFields?: C3.Array<UiSdlTimeseriesLineBarChartTooltipAdditionalFieldDataSpecSetting | null>;
  withTooltipAdditionalFields(tooltipAdditionalFields: C3.Array<UiSdlTimeseriesLineBarChartTooltipAdditionalFieldDataSpecSetting | null> | Array<IUiSdlTimeseriesLineBarChartTooltipAdditionalFieldDataSpecSetting | null>): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly symbol?: string | null;
  withSymbol(symbol: string | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly symbolSize?: string | null;
  withSymbolSize(symbolSize: string | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;

  readonly tooltipSize?: string | null;
  withTooltipSize(tooltipSize: string | null): UiSdlTimeseriesLineBarChartEventSeriesDataSpec;
}

