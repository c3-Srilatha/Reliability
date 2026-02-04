export interface UiSdlAreaChartDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlAreaChartDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlAreaChartDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlAreaChartDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlAreaChartDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlAreaChartDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlAreaChartDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlAreaChartDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlAreaChartDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAreaChartDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlAreaChartDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlAreaChartDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlAreaChartDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlAreaChartDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlAreaChartDataSpec;

  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): UiSdlAreaChartDataSpec;

  readonly yAxisFields?: C3.Array<UiSdlAreaChartYAxisDataSpecSetting | null>;
  withYAxisFields(yAxisFields: C3.Array<UiSdlAreaChartYAxisDataSpecSetting | null> | Array<IUiSdlAreaChartYAxisDataSpecSetting | null>): UiSdlAreaChartDataSpec;

  readonly yAxisProjectionFields?: C3.Array<UiSdlAreaChartYAxisDataSpecSetting | null>;
  withYAxisProjectionFields(yAxisProjectionFields: C3.Array<UiSdlAreaChartYAxisDataSpecSetting | null> | Array<IUiSdlAreaChartYAxisDataSpecSetting | null>): UiSdlAreaChartDataSpec;
}

