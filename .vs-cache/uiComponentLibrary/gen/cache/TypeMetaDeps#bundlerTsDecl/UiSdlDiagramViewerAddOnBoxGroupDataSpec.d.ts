export interface UiSdlDiagramViewerAddOnBoxGroupDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly xPos: UiSdlFieldBasedDataSpecSetting;
  withXPos(xPos: IUiSdlFieldBasedDataSpecSetting): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly yPos: UiSdlFieldBasedDataSpecSetting;
  withYPos(yPos: IUiSdlFieldBasedDataSpecSetting): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null | string | null | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null | string | null | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly tooltip?: UiSdlDiagramViewerTooltip | null;
  withTooltip(tooltip: IUiSdlDiagramViewerTooltip | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly height?: UiSdlFieldBasedDataSpecSetting | null;
  withHeight(height: IUiSdlFieldBasedDataSpecSetting | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly width?: UiSdlFieldBasedDataSpecSetting | null;
  withWidth(width: IUiSdlFieldBasedDataSpecSetting | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;

  readonly borderColor?: UiSdlFieldBasedDataSpecSetting | null | string | null | null;
  withBorderColor(borderColor: IUiSdlFieldBasedDataSpecSetting | null | string | null | null): UiSdlDiagramViewerAddOnBoxGroupDataSpec;
}

