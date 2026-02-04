export interface UiSdlCollapsibleComponentDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlCollapsibleComponentDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlCollapsibleComponentDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlCollapsibleComponentDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlCollapsibleComponentDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlCollapsibleComponentDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlCollapsibleComponentDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlCollapsibleComponentDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlCollapsibleComponentDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCollapsibleComponentDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlCollapsibleComponentDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlCollapsibleComponentDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlCollapsibleComponentDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlCollapsibleComponentDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlCollapsibleComponentDataSpec;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlCollapsibleComponentDataSpec;

  readonly title?: UiSdlFieldBasedDataSpecSetting | null;
  withTitle(title: IUiSdlFieldBasedDataSpecSetting | null): UiSdlCollapsibleComponentDataSpec;

  readonly subtitle?: UiSdlFieldBasedDataSpecSetting | null;
  withSubtitle(subtitle: IUiSdlFieldBasedDataSpecSetting | null): UiSdlCollapsibleComponentDataSpec;

  readonly secondaryTitle?: UiSdlFieldBasedDataSpecSetting | null;
  withSecondaryTitle(secondaryTitle: IUiSdlFieldBasedDataSpecSetting | null): UiSdlCollapsibleComponentDataSpec;

  readonly secondaryTitleType?: string | null;
  withSecondaryTitleType(secondaryTitleType: string | null): UiSdlCollapsibleComponentDataSpec;
}

