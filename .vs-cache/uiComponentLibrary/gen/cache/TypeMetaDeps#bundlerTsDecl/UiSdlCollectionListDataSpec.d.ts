export interface UiSdlCollectionListDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlCollectionListDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlCollectionListDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlCollectionListDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlCollectionListDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlCollectionListDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlCollectionListDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlCollectionListDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlCollectionListDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCollectionListDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlCollectionListDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlCollectionListDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlCollectionListDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlCollectionListDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlCollectionListDataSpec;

  readonly primaryValueField?: UiSdlCollectionListDataSpecSetting | null;
  withPrimaryValueField(primaryValueField: IUiSdlCollectionListDataSpecSetting | null): UiSdlCollectionListDataSpec;

  readonly secondaryValueField?: UiSdlCollectionListDataSpecSetting | null;
  withSecondaryValueField(secondaryValueField: IUiSdlCollectionListDataSpecSetting | null): UiSdlCollectionListDataSpec;

  readonly valueBarConfig?: UiSdlCollectionListDataSpecValueBarSetting | null;
  withValueBarConfig(valueBarConfig: IUiSdlCollectionListDataSpecValueBarSetting | null): UiSdlCollectionListDataSpec;

  readonly iconConfig?: UiSdlCollectionListDataSpecIconSetting | null;
  withIconConfig(iconConfig: IUiSdlCollectionListDataSpecIconSetting | null): UiSdlCollectionListDataSpec;

  readonly limit?: number | null;
  withLimit(limit: number | null): UiSdlCollectionListDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlCollectionListDataSpec;
}

