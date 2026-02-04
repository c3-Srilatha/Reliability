export interface UiSdlTimeseriesLineBarChartEventDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlTimeseriesLineBarChartEventDataSpec;

  readonly events?: C3.Array<UiSdlTimeseriesLineBarChartEventSeriesDataSpec | null>;
  withEvents(events: C3.Array<UiSdlTimeseriesLineBarChartEventSeriesDataSpec | null> | Array<IUiSdlTimeseriesLineBarChartEventSeriesDataSpec | null>): UiSdlTimeseriesLineBarChartEventDataSpec;
}

