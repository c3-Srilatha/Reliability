export interface UiSdlDiagramViewerAddOnDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDiagramViewerAddOnDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlDiagramViewerAddOnDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDiagramViewerAddOnDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDiagramViewerAddOnDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlDiagramViewerAddOnDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlDiagramViewerAddOnDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlDiagramViewerAddOnDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlDiagramViewerAddOnDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramViewerAddOnDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlDiagramViewerAddOnDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlDiagramViewerAddOnDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlDiagramViewerAddOnDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlDiagramViewerAddOnDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlDiagramViewerAddOnDataSpec;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlDiagramViewerAddOnDataSpec;

  readonly addOns?: C3.Array<UiSdlDiagramViewerAddOnBoxGroupDataSpec | null | UiSdlDiagramViewerAddOnDotGroupDataSpec | null | UiSdlDiagramViewerAddOnTextGroupDataSpec | null | null>;
  withAddOns(addOns: C3.Array<UiSdlDiagramViewerAddOnBoxGroupDataSpec | null | UiSdlDiagramViewerAddOnDotGroupDataSpec | null | UiSdlDiagramViewerAddOnTextGroupDataSpec | null | null> | Array<IUiSdlDiagramViewerAddOnBoxGroupDataSpec | null | IUiSdlDiagramViewerAddOnDotGroupDataSpec | null | IUiSdlDiagramViewerAddOnTextGroupDataSpec | null | null>): UiSdlDiagramViewerAddOnDataSpec;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlDiagramViewerAddOnDataSpec;

  readonly tooltip?: UiSdlDiagramViewerTooltip | null;
  withTooltip(tooltip: IUiSdlDiagramViewerTooltip | null): UiSdlDiagramViewerAddOnDataSpec;

  readonly tooltipStrategy?: string | null;
  withTooltipStrategy(tooltipStrategy: string | null): UiSdlDiagramViewerAddOnDataSpec;
}

