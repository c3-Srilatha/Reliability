export interface UiSdlCategoricalLineBarChartYAxisDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly yAxisTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withYAxisTitle(yAxisTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly yAxisStyleOverride?: UiSdlLineBarChartYAxisConfigOverride | null;
  withYAxisStyleOverride(yAxisStyleOverride: IUiSdlLineBarChartYAxisConfigOverride | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly legendDescription?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendDescription(legendDescription: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly legendIcon?: string | null;
  withLegendIcon(legendIcon: string | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly colorConfigurationStrategy?: UiSdlGradientColorSetting | null;
  withColorConfigurationStrategy(colorConfigurationStrategy: IUiSdlGradientColorSetting | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly visualizationType?: UiSdlLineBarChartBarVisualization | null | UiSdlLineBarChartPointVisualization | null | UiSdlCategoricalLineBarChartLineVisualization | null | null;
  withVisualizationType(visualizationType: IUiSdlLineBarChartBarVisualization | null | IUiSdlLineBarChartPointVisualization | null | IUiSdlCategoricalLineBarChartLineVisualization | null | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;

  readonly aggregationMap?: any | null;
  withAggregationMap(aggregationMap: any | null): UiSdlCategoricalLineBarChartYAxisDataSpecSetting;
}

