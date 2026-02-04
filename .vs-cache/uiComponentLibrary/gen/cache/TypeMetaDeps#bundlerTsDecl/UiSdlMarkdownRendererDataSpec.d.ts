export interface UiSdlMarkdownRendererDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlMarkdownRendererDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlMarkdownRendererDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlMarkdownRendererDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlMarkdownRendererDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlMarkdownRendererDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlMarkdownRendererDataSpec;

  readonly actionName: string;
  withActionName(actionName: string): UiSdlMarkdownRendererDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlMarkdownRendererDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMarkdownRendererDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlMarkdownRendererDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlMarkdownRendererDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlMarkdownRendererDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlMarkdownRendererDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlMarkdownRendererDataSpec;

  readonly typeName: string;
  withTypeName(typeName: string): UiSdlMarkdownRendererDataSpec;

  readonly actionArgs?: any | null;
  withActionArgs(actionArgs: any | null): UiSdlMarkdownRendererDataSpec;
}

