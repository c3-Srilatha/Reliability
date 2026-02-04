export interface UiSdlGraphVisualizationTimeBarStackStyleConfig {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationTimeBarStackStyleConfig;

  readonly hoverColor?: string | null;
  withHoverColor(hoverColor: string | null): UiSdlGraphVisualizationTimeBarStackStyleConfig;
}

