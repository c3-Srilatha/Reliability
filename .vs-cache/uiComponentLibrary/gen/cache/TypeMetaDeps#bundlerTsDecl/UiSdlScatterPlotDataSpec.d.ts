export interface UiSdlScatterPlotDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlScatterPlotDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlScatterPlotDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlScatterPlotDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlScatterPlotDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlScatterPlotDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlScatterPlotDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlScatterPlotDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlScatterPlotDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlScatterPlotDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlScatterPlotDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlScatterPlotDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlScatterPlotDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlScatterPlotDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlScatterPlotDataSpec;

  readonly xAxisField?: UiSdlScatterPlotDataSpecFieldSetting | null;
  withXAxisField(xAxisField: IUiSdlScatterPlotDataSpecFieldSetting | null): UiSdlScatterPlotDataSpec;

  readonly yAxisField?: UiSdlScatterPlotDataSpecFieldSetting | null;
  withYAxisField(yAxisField: IUiSdlScatterPlotDataSpecFieldSetting | null): UiSdlScatterPlotDataSpec;

  readonly size?: UiSdlScatterPlotSizeSetting | null;
  withSize(size: IUiSdlScatterPlotSizeSetting | null): UiSdlScatterPlotDataSpec;

  readonly tooltipHeader?: UiSdlScatterPlotDataSpecFieldSetting | null;
  withTooltipHeader(tooltipHeader: IUiSdlScatterPlotDataSpecFieldSetting | null): UiSdlScatterPlotDataSpec;

  readonly category?: UiSdlScatterPlotCategoryFieldSetting | null;
  withCategory(category: IUiSdlScatterPlotCategoryFieldSetting | null): UiSdlScatterPlotDataSpec;

  readonly tooltipAdditionalFields?: C3.Array<UiSdlScatterPlotDataSpecFieldSetting | null>;
  withTooltipAdditionalFields(tooltipAdditionalFields: C3.Array<UiSdlScatterPlotDataSpecFieldSetting | null> | Array<IUiSdlScatterPlotDataSpecFieldSetting | null>): UiSdlScatterPlotDataSpec;
}

