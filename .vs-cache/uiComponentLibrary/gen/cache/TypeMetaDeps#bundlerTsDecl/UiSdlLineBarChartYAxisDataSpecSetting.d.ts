export interface UiSdlLineBarChartYAxisDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlLineBarChartYAxisDataSpecSetting;

  readonly yAxisTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withYAxisTitle(yAxisTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlLineBarChartYAxisDataSpecSetting;

  readonly yAxisStyleOverride?: UiSdlLineBarChartYAxisConfigOverride | null;
  withYAxisStyleOverride(yAxisStyleOverride: IUiSdlLineBarChartYAxisConfigOverride | null): UiSdlLineBarChartYAxisDataSpecSetting;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlLineBarChartYAxisDataSpecSetting;

  readonly legendDescription?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendDescription(legendDescription: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlLineBarChartYAxisDataSpecSetting;

  readonly legendIcon?: string | null;
  withLegendIcon(legendIcon: string | null): UiSdlLineBarChartYAxisDataSpecSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlLineBarChartYAxisDataSpecSetting;
}

