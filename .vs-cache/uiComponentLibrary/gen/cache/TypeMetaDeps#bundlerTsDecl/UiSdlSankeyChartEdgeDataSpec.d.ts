export interface UiSdlSankeyChartEdgeDataSpec {

  readonly source: UiSdlFieldBasedDataSpecSetting;
  withSource(source: IUiSdlFieldBasedDataSpecSetting): UiSdlSankeyChartEdgeDataSpec;

  readonly target: UiSdlFieldBasedDataSpecSetting;
  withTarget(target: IUiSdlFieldBasedDataSpecSetting): UiSdlSankeyChartEdgeDataSpec;

  readonly value: UiSdlSankeyChartEdgeValueFieldSetting;
  withValue(value: IUiSdlSankeyChartEdgeValueFieldSetting): UiSdlSankeyChartEdgeDataSpec;

  readonly unit?: UiSdlFieldBasedDataSpecSetting | null;
  withUnit(unit: IUiSdlFieldBasedDataSpecSetting | null): UiSdlSankeyChartEdgeDataSpec;

  readonly color?: UiSdlSankeyColorFieldSetting | null;
  withColor(color: IUiSdlSankeyColorFieldSetting | null): UiSdlSankeyChartEdgeDataSpec;

  readonly defaultOpacity?: UiSdlFieldBasedDataSpecSetting | null;
  withDefaultOpacity(defaultOpacity: IUiSdlFieldBasedDataSpecSetting | null): UiSdlSankeyChartEdgeDataSpec;
}

