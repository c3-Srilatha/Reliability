export interface UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly yAxisTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withYAxisTitle(yAxisTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly yAxisStyleOverride?: UiSdlLineBarChartYAxisConfigOverride | null;
  withYAxisStyleOverride(yAxisStyleOverride: IUiSdlLineBarChartYAxisConfigOverride | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly legendDescription?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendDescription(legendDescription: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly legendIcon?: string | null;
  withLegendIcon(legendIcon: string | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly subject?: string | null;
  withSubject(subject: string | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;

  readonly visualizationType?: UiSdlLineBarChartBarVisualization | null | UiSdlLineBarChartPointVisualization | null | UiSdlTimeseriesLineBarChartLineVisualization | null | null;
  withVisualizationType(visualizationType: IUiSdlLineBarChartBarVisualization | null | IUiSdlLineBarChartPointVisualization | null | IUiSdlTimeseriesLineBarChartLineVisualization | null | null): UiSdlTimeseriesLineBarChartEvalYAxisDataSpecSetting;
}

