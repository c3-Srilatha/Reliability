export interface UiSdlFormDataGridDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlFormDataGridDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlFormDataGridDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlFormDataGridDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlFormDataGridDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlFormDataGridDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlFormDataGridDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlFormDataGridDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlFormDataGridDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormDataGridDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlFormDataGridDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlFormDataGridDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlFormDataGridDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlFormDataGridDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlFormDataGridDataSpec;

  readonly columnFields?: C3.Array<UiSdlFormDataGridDataSpecColumnFieldSetting | null>;
  withColumnFields(columnFields: C3.Array<UiSdlFormDataGridDataSpecColumnFieldSetting | null> | Array<IUiSdlFormDataGridDataSpecColumnFieldSetting | null>): UiSdlFormDataGridDataSpec;

  readonly actionArgs?: any | null;
  withActionArgs(actionArgs: any | null): UiSdlFormDataGridDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlFormDataGridDataSpec;

  readonly searchable?: boolean;
  withSearchable(searchable: boolean): UiSdlFormDataGridDataSpec;
}

