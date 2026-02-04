export interface UiSdlGraphVisualizationTimeBarStackConfig {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly by?: string | null;
  withBy(by: string | null): UiSdlGraphVisualizationTimeBarStackConfig;

  readonly styles?: C3.Map<string | null, UiSdlGraphVisualizationTimeBarStackStyleConfig | null>;
  withStyles(styles: C3.Map<string | null, UiSdlGraphVisualizationTimeBarStackStyleConfig | null> | {[key: string | null]: IUiSdlGraphVisualizationTimeBarStackStyleConfig | null}): UiSdlGraphVisualizationTimeBarStackConfig;
}

