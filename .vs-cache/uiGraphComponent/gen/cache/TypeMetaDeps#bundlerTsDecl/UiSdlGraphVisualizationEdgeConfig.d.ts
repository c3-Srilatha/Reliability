export interface UiSdlGraphVisualizationEdgeConfig {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlGraphVisualizationEdgeConfig;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlGraphVisualizationEdgeConfig;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlGraphVisualizationEdgeConfig;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationEdgeConfig;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlGraphVisualizationEdgeConfig;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlGraphVisualizationEdgeConfig;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlGraphVisualizationEdgeConfig;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlGraphVisualizationEdgeConfig;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationEdgeConfig;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlGraphVisualizationEdgeConfig;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlGraphVisualizationEdgeConfig;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlGraphVisualizationEdgeConfig;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlGraphVisualizationEdgeConfig;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlGraphVisualizationEdgeConfig;

  readonly glyphConfig?: UiSdlGraphVisualizationEdgeGlyphConfig | null;
  withGlyphConfig(glyphConfig: IUiSdlGraphVisualizationEdgeGlyphConfig | null): UiSdlGraphVisualizationEdgeConfig;

  readonly tooltipConfig?: UiSdlGraphVisualizationTooltipConfig | null;
  withTooltipConfig(tooltipConfig: IUiSdlGraphVisualizationTooltipConfig | null): UiSdlGraphVisualizationEdgeConfig;

  readonly style?: UiSdlGraphVisualizationEdgeStyleConfig | null;
  withStyle(style: IUiSdlGraphVisualizationEdgeStyleConfig | null): UiSdlGraphVisualizationEdgeConfig;

  readonly contextMenuConfig?: C3.Array<UiSdlAction | null>;
  withContextMenuConfig(contextMenuConfig: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlGraphVisualizationEdgeConfig;
}

