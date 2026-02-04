export interface UiSdlFormFieldDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlFormFieldDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlFormFieldDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlFormFieldDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlFormFieldDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlFormFieldDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlFormFieldDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlFormFieldDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlFormFieldDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormFieldDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlFormFieldDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlFormFieldDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlFormFieldDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlFormFieldDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlFormFieldDataSpec;

  readonly args?: C3.Map<string | null, any>;
  withArgs(args: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFormFieldDataSpec;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlFormFieldDataSpec;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlFormFieldDataSpec;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlFormFieldDataSpec;

  readonly descriptionField?: string | null;
  withDescriptionField(descriptionField: string | null): UiSdlFormFieldDataSpec;
}

