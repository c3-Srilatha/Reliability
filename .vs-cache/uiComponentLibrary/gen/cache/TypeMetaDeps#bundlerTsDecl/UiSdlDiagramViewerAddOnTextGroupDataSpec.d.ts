export interface UiSdlDiagramViewerAddOnTextGroupDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly xPos: UiSdlFieldBasedDataSpecSetting;
  withXPos(xPos: IUiSdlFieldBasedDataSpecSetting): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly yPos: UiSdlFieldBasedDataSpecSetting;
  withYPos(yPos: IUiSdlFieldBasedDataSpecSetting): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null | string | null | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null | string | null | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly tooltip?: UiSdlDiagramViewerTooltip | null;
  withTooltip(tooltip: IUiSdlDiagramViewerTooltip | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly text: UiSdlFieldBasedDataSpecSetting;
  withText(text: IUiSdlFieldBasedDataSpecSetting): UiSdlDiagramViewerAddOnTextGroupDataSpec;

  readonly textColor?: UiSdlFieldBasedDataSpecSetting | null;
  withTextColor(textColor: IUiSdlFieldBasedDataSpecSetting | null): UiSdlDiagramViewerAddOnTextGroupDataSpec;
}

