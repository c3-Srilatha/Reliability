export interface UiSdlFormSubmitDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlFormSubmitDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlFormSubmitDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlFormSubmitDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlFormSubmitDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlFormSubmitDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlFormSubmitDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlFormSubmitDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlFormSubmitDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormSubmitDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlFormSubmitDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlFormSubmitDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlFormSubmitDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlFormSubmitDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlFormSubmitDataSpec;

  readonly submitArgument: string;
  withSubmitArgument(submitArgument: string): UiSdlFormSubmitDataSpec;
}

