export interface UiSdlDiagramViewerAddOnGroupBaseDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly xPos: UiSdlFieldBasedDataSpecSetting;
  withXPos(xPos: IUiSdlFieldBasedDataSpecSetting): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly yPos: UiSdlFieldBasedDataSpecSetting;
  withYPos(yPos: IUiSdlFieldBasedDataSpecSetting): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null | string | null | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null | string | null | null): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDiagramViewerAddOnGroupBaseDataSpec;

  readonly tooltip?: UiSdlDiagramViewerTooltip | null;
  withTooltip(tooltip: IUiSdlDiagramViewerTooltip | null): UiSdlDiagramViewerAddOnGroupBaseDataSpec;
}

