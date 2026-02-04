export interface UiSdlTabPanelDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlTabPanelDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlTabPanelDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlTabPanelDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlTabPanelDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlTabPanelDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlTabPanelDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlTabPanelDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlTabPanelDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTabPanelDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlTabPanelDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlTabPanelDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlTabPanelDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlTabPanelDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlTabPanelDataSpec;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlTabPanelDataSpec;

  readonly title: UiSdlFieldBasedDataSpecSetting;
  withTitle(title: IUiSdlFieldBasedDataSpecSetting): UiSdlTabPanelDataSpec;

  readonly subTitle?: UiSdlTabPanelDataSpecLinkSetting | null;
  withSubTitle(subTitle: IUiSdlTabPanelDataSpecLinkSetting | null): UiSdlTabPanelDataSpec;

  readonly bodyText?: UiSdlFieldBasedDataSpecSetting | null;
  withBodyText(bodyText: IUiSdlFieldBasedDataSpecSetting | null): UiSdlTabPanelDataSpec;

  readonly bodyParagraph?: C3.Array<TabPanelParagraphDataSpecSetting | null>;
  withBodyParagraph(bodyParagraph: C3.Array<TabPanelParagraphDataSpecSetting | null> | Array<ITabPanelParagraphDataSpecSetting | null>): UiSdlTabPanelDataSpec;
}

