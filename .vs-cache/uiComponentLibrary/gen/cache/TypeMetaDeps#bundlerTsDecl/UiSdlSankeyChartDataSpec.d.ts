export interface UiSdlSankeyChartDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlSankeyChartDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlSankeyChartDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlSankeyChartDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlSankeyChartDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlSankeyChartDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlSankeyChartDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlSankeyChartDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlSankeyChartDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSankeyChartDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlSankeyChartDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlSankeyChartDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlSankeyChartDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlSankeyChartDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlSankeyChartDataSpec;

  readonly actionArgs?: C3.Map<string | null, any>;
  withActionArgs(actionArgs: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSankeyChartDataSpec;

  readonly nodeDataSpec?: UiSdlSankeyChartNodeDataSpec | null;
  withNodeDataSpec(nodeDataSpec: IUiSdlSankeyChartNodeDataSpec | null): UiSdlSankeyChartDataSpec;

  readonly edgeDataSpec?: UiSdlSankeyChartEdgeDataSpec | null;
  withEdgeDataSpec(edgeDataSpec: IUiSdlSankeyChartEdgeDataSpec | null): UiSdlSankeyChartDataSpec;
}

