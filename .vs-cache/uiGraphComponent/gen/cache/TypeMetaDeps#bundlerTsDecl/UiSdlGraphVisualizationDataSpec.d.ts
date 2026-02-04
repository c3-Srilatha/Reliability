export interface UiSdlGraphVisualizationDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlGraphVisualizationDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlGraphVisualizationDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlGraphVisualizationDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlGraphVisualizationDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlGraphVisualizationDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlGraphVisualizationDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlGraphVisualizationDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlGraphVisualizationDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlGraphVisualizationDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlGraphVisualizationDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlGraphVisualizationDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlGraphVisualizationDataSpec;

  readonly actionArgs?: C3.Map<string | null, any>;
  withActionArgs(actionArgs: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGraphVisualizationDataSpec;

  readonly timeBarStackConfig?: UiSdlGraphVisualizationTimeBarStackConfig | null;
  withTimeBarStackConfig(timeBarStackConfig: IUiSdlGraphVisualizationTimeBarStackConfig | null): UiSdlGraphVisualizationDataSpec;

  readonly nodeConfig?: UiSdlGraphVisualizationNodeConfig | null;
  withNodeConfig(nodeConfig: IUiSdlGraphVisualizationNodeConfig | null): UiSdlGraphVisualizationDataSpec;

  readonly edgeConfig?: UiSdlGraphVisualizationEdgeConfig | null;
  withEdgeConfig(edgeConfig: IUiSdlGraphVisualizationEdgeConfig | null): UiSdlGraphVisualizationDataSpec;

  readonly annotationConfig?: UiSdlFieldBasedDataSpecSetting | null;
  withAnnotationConfig(annotationConfig: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationDataSpec;

  readonly graphViewConfig?: UiSdlGraphVisualizationGraphViewConfig | null;
  withGraphViewConfig(graphViewConfig: IUiSdlGraphVisualizationGraphViewConfig | null): UiSdlGraphVisualizationDataSpec;
}

