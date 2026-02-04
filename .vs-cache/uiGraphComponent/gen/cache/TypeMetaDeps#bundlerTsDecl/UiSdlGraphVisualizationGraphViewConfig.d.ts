export interface UiSdlGraphVisualizationGraphViewConfig {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlGraphVisualizationGraphViewConfig;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlGraphVisualizationGraphViewConfig;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlGraphVisualizationGraphViewConfig;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationGraphViewConfig;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlGraphVisualizationGraphViewConfig;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlGraphVisualizationGraphViewConfig;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlGraphVisualizationGraphViewConfig;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlGraphVisualizationGraphViewConfig;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationGraphViewConfig;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlGraphVisualizationGraphViewConfig;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlGraphVisualizationGraphViewConfig;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlGraphVisualizationGraphViewConfig;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlGraphVisualizationGraphViewConfig;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlGraphVisualizationGraphViewConfig;

  readonly zoom?: number | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withZoom(zoom: number | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlGraphVisualizationGraphViewConfig;

  readonly offsetX?: number | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withOffsetX(offsetX: number | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlGraphVisualizationGraphViewConfig;

  readonly offsetY?: number | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withOffsetY(offsetY: number | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlGraphVisualizationGraphViewConfig;
}

