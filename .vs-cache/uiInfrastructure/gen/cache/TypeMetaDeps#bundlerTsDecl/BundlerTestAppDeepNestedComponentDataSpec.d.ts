export interface BundlerTestAppDeepNestedComponentDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): BundlerTestAppDeepNestedComponentDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): BundlerTestAppDeepNestedComponentDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): BundlerTestAppDeepNestedComponentDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): BundlerTestAppDeepNestedComponentDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): BundlerTestAppDeepNestedComponentDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): BundlerTestAppDeepNestedComponentDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): BundlerTestAppDeepNestedComponentDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): BundlerTestAppDeepNestedComponentDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppDeepNestedComponentDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): BundlerTestAppDeepNestedComponentDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): BundlerTestAppDeepNestedComponentDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): BundlerTestAppDeepNestedComponentDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): BundlerTestAppDeepNestedComponentDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): BundlerTestAppDeepNestedComponentDataSpec;

  readonly titleFieldName?: string | null;
  withTitleFieldName(titleFieldName: string | null): BundlerTestAppDeepNestedComponentDataSpec;

  readonly fieldSets?: C3.Array<BundlerTestAppFieldSet | null> | C3.Array<C3.Array<BundlerTestAppFieldSet | null>> | null;
  withFieldSets(fieldSets: C3.Array<BundlerTestAppFieldSet | null> | Array<IBundlerTestAppFieldSet | null> | C3.Array<C3.Array<BundlerTestAppFieldSet | null>> | Array<C3.Array<BundlerTestAppFieldSet | null> | Array<IBundlerTestAppFieldSet | null>> | null): BundlerTestAppDeepNestedComponentDataSpec;

  readonly fieldComponentArray?: any | null;
  withFieldComponentArray(fieldComponentArray: any | null): BundlerTestAppDeepNestedComponentDataSpec;
}

