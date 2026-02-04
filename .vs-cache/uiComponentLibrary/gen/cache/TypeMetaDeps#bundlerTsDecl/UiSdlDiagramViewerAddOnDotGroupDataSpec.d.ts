export interface UiSdlDiagramViewerAddOnDotGroupDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly xPos: UiSdlFieldBasedDataSpecSetting;
  withXPos(xPos: IUiSdlFieldBasedDataSpecSetting): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly yPos: UiSdlFieldBasedDataSpecSetting;
  withYPos(yPos: IUiSdlFieldBasedDataSpecSetting): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null | string | null | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null | string | null | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly tooltip?: UiSdlDiagramViewerTooltip | null;
  withTooltip(tooltip: IUiSdlDiagramViewerTooltip | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;

  readonly radius?: UiSdlFieldBasedDataSpecSetting | null;
  withRadius(radius: IUiSdlFieldBasedDataSpecSetting | null): UiSdlDiagramViewerAddOnDotGroupDataSpec;
}

