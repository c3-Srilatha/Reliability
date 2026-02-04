export interface UiSdlCategoricalLineBarChartMarkLineDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlCategoricalLineBarChartMarkLineDataSpec;

  readonly markLinesConfig: C3.Array<UiSdlLineBarChartMarkLinesConfig | null>;
  withMarkLinesConfig(markLinesConfig: C3.Array<UiSdlLineBarChartMarkLinesConfig | null> | Array<IUiSdlLineBarChartMarkLinesConfig | null>): UiSdlCategoricalLineBarChartMarkLineDataSpec;
}

