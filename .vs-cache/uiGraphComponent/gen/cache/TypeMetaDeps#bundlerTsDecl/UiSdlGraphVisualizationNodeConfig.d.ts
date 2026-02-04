export interface UiSdlGraphVisualizationNodeConfig {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlGraphVisualizationNodeConfig;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlGraphVisualizationNodeConfig;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlGraphVisualizationNodeConfig;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationNodeConfig;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlGraphVisualizationNodeConfig;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlGraphVisualizationNodeConfig;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlGraphVisualizationNodeConfig;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlGraphVisualizationNodeConfig;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationNodeConfig;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlGraphVisualizationNodeConfig;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlGraphVisualizationNodeConfig;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlGraphVisualizationNodeConfig;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlGraphVisualizationNodeConfig;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlGraphVisualizationNodeConfig;

  readonly coordinatesConfig?: UiSdlGraphVisualizationNodeCoordinatesConfig | null;
  withCoordinatesConfig(coordinatesConfig: IUiSdlGraphVisualizationNodeCoordinatesConfig | null): UiSdlGraphVisualizationNodeConfig;

  readonly clusterConfig?: UiSdlGraphVisualizationNodeClusterConfig | null;
  withClusterConfig(clusterConfig: IUiSdlGraphVisualizationNodeClusterConfig | null): UiSdlGraphVisualizationNodeConfig;

  readonly donutConfig?: UiSdlGraphVisualizationNodeSegmentDonutConfig | null | UiSdlGraphVisualizationNodePercentageDonutConfig | null | null;
  withDonutConfig(donutConfig: IUiSdlGraphVisualizationNodeSegmentDonutConfig | null | IUiSdlGraphVisualizationNodePercentageDonutConfig | null | null): UiSdlGraphVisualizationNodeConfig;

  readonly glyphConfig?: UiSdlGraphVisualizationNodeGlyphConfig | null;
  withGlyphConfig(glyphConfig: IUiSdlGraphVisualizationNodeGlyphConfig | null): UiSdlGraphVisualizationNodeConfig;

  readonly tooltipConfig?: UiSdlGraphVisualizationTooltipConfig | null;
  withTooltipConfig(tooltipConfig: IUiSdlGraphVisualizationTooltipConfig | null): UiSdlGraphVisualizationNodeConfig;

  readonly style?: UiSdlGraphVisualizationNodeStyleConfig | null;
  withStyle(style: IUiSdlGraphVisualizationNodeStyleConfig | null): UiSdlGraphVisualizationNodeConfig;

  readonly contextMenuConfig?: C3.Array<UiSdlAction | null>;
  withContextMenuConfig(contextMenuConfig: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlGraphVisualizationNodeConfig;
}

