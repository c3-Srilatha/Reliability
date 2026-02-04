export interface UiSdlTimeseriesLineBarChartEvalDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlTimeseriesLineBarChartEvalDataSpec;

  readonly yAxisFields?: C3.Array<UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting | null>;
  withYAxisFields(yAxisFields: C3.Array<UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting | null> | Array<IUiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting | null>): UiSdlTimeseriesLineBarChartEvalDataSpec;
}

