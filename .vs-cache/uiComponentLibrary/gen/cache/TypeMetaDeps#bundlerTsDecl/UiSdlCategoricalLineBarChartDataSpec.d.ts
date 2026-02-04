export interface UiSdlCategoricalLineBarChartDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlCategoricalLineBarChartDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlCategoricalLineBarChartDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlCategoricalLineBarChartDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlCategoricalLineBarChartDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlCategoricalLineBarChartDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlCategoricalLineBarChartDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlCategoricalLineBarChartDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlCategoricalLineBarChartDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCategoricalLineBarChartDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlCategoricalLineBarChartDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlCategoricalLineBarChartDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlCategoricalLineBarChartDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlCategoricalLineBarChartDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlCategoricalLineBarChartDataSpec;

  readonly orderString?: UiSdlCategoricalLineBarChartDataSpecOrderSetting | null;
  withOrderString(orderString: IUiSdlCategoricalLineBarChartDataSpecOrderSetting | null): UiSdlCategoricalLineBarChartDataSpec;

  readonly groupByX?: boolean;
  withGroupByX(groupByX: boolean): UiSdlCategoricalLineBarChartDataSpec;

  readonly xAxisField?: UiSdlCategoricalLineBarChartXAxisDataSpecSetting | null;
  withXAxisField(xAxisField: IUiSdlCategoricalLineBarChartXAxisDataSpecSetting | null): UiSdlCategoricalLineBarChartDataSpec;

  readonly yAxisFields?: C3.Array<UiSdlCategoricalLineBarChartYAxisDataSpecSetting | null>;
  withYAxisFields(yAxisFields: C3.Array<UiSdlCategoricalLineBarChartYAxisDataSpecSetting | null> | Array<IUiSdlCategoricalLineBarChartYAxisDataSpecSetting | null>): UiSdlCategoricalLineBarChartDataSpec;

  readonly orderOnAggregateYAxisFields?: boolean;
  withOrderOnAggregateYAxisFields(orderOnAggregateYAxisFields: boolean): UiSdlCategoricalLineBarChartDataSpec;

  readonly limit?: number | null;
  withLimit(limit: number | null): UiSdlCategoricalLineBarChartDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlCategoricalLineBarChartDataSpec;
}

