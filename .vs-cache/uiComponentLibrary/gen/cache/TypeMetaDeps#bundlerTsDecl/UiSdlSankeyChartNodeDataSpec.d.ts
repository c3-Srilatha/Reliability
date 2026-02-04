export interface UiSdlSankeyChartNodeDataSpec {

  readonly id: UiSdlFieldBasedDataSpecSetting;
  withId(id: IUiSdlFieldBasedDataSpecSetting): UiSdlSankeyChartNodeDataSpec;

  readonly icon?: UiSdlFieldBasedDataSpecSetting | null;
  withIcon(icon: IUiSdlFieldBasedDataSpecSetting | null): UiSdlSankeyChartNodeDataSpec;

  readonly label: UiSdlFieldBasedDataSpecSetting;
  withLabel(label: IUiSdlFieldBasedDataSpecSetting): UiSdlSankeyChartNodeDataSpec;

  readonly level: UiSdlFieldBasedDataSpecSetting;
  withLevel(level: IUiSdlFieldBasedDataSpecSetting): UiSdlSankeyChartNodeDataSpec;

  readonly value?: UiSdlSankeyChartNodeValueFieldSetting | null;
  withValue(value: IUiSdlSankeyChartNodeValueFieldSetting | null): UiSdlSankeyChartNodeDataSpec;

  readonly unit?: UiSdlFieldBasedDataSpecSetting | null;
  withUnit(unit: IUiSdlFieldBasedDataSpecSetting | null): UiSdlSankeyChartNodeDataSpec;

  readonly color?: UiSdlSankeyColorFieldSetting | null;
  withColor(color: IUiSdlSankeyColorFieldSetting | null): UiSdlSankeyChartNodeDataSpec;

  readonly defaultOpacity?: UiSdlFieldBasedDataSpecSetting | null;
  withDefaultOpacity(defaultOpacity: IUiSdlFieldBasedDataSpecSetting | null): UiSdlSankeyChartNodeDataSpec;
}

