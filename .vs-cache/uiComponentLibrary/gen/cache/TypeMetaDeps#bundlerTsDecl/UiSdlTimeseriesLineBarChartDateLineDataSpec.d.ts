export interface UiSdlTimeseriesLineBarChartDateLineDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlTimeseriesLineBarChartDateLineDataSpec;

  readonly dateLines: C3.Array<UiSdlTimeseriesLineBarChartDateLineDataSpecSetting | null>;
  withDateLines(dateLines: C3.Array<UiSdlTimeseriesLineBarChartDateLineDataSpecSetting | null> | Array<IUiSdlTimeseriesLineBarChartDateLineDataSpecSetting | null>): UiSdlTimeseriesLineBarChartDateLineDataSpec;
}

