export interface UiSdlStyleContextDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlStyleContextDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlStyleContextDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlStyleContextDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlStyleContextDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlStyleContextDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlStyleContextDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlStyleContextDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlStyleContextDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlStyleContextDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlStyleContextDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlStyleContextDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlStyleContextDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlStyleContextDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlStyleContextDataSpec;
}

