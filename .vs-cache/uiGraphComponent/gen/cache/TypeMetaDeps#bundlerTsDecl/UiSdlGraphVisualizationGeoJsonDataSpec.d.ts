export interface UiSdlGraphVisualizationGeoJsonDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly actionArgs?: C3.Map<string | null, any>;
  withActionArgs(actionArgs: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly highlightable?: boolean;
  withHighlightable(highlightable: boolean): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly selectable?: boolean;
  withSelectable(selectable: boolean): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly style?: UiSdlGraphVisualizationGeoJsonStyleConfig | null;
  withStyle(style: IUiSdlGraphVisualizationGeoJsonStyleConfig | null): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly tooltipConfig?: UiSdlGraphVisualizationTooltipConfig | null;
  withTooltipConfig(tooltipConfig: IUiSdlGraphVisualizationTooltipConfig | null): UiSdlGraphVisualizationGeoJsonDataSpec;

  readonly showRegionLegend?: boolean;
  withShowRegionLegend(showRegionLegend: boolean): UiSdlGraphVisualizationGeoJsonDataSpec;
}

