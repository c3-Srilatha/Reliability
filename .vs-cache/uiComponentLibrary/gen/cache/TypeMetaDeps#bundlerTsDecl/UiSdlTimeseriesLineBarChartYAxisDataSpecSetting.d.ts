export interface UiSdlTimeseriesLineBarChartYAxisDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly yAxisTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withYAxisTitle(yAxisTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly yAxisStyleOverride?: UiSdlLineBarChartYAxisConfigOverride | null;
  withYAxisStyleOverride(yAxisStyleOverride: IUiSdlLineBarChartYAxisConfigOverride | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly legendDescription?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendDescription(legendDescription: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly legendIcon?: string | null;
  withLegendIcon(legendIcon: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly evaluateAction?: string | null;
  withEvaluateAction(evaluateAction: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly bindingsLegendLabels?: C3.Array<UiSdlDynamicValueSpec | null>;
  withBindingsLegendLabels(bindingsLegendLabels: C3.Array<UiSdlDynamicValueSpec | null> | Array<IUiSdlDynamicValueSpec | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly bindingsLegendDescriptions?: C3.Array<string | null>;
  withBindingsLegendDescriptions(bindingsLegendDescriptions: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly bindingsLegendIcons?: C3.Array<string | null>;
  withBindingsLegendIcons(bindingsLegendIcons: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly bindingsSynchronizedGridHeights?: C3.Array<number | null>;
  withBindingsSynchronizedGridHeights(bindingsSynchronizedGridHeights: C3.Array<number | null> | Array<number | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly visualizationType?: UiSdlLineBarChartBarVisualization | null | UiSdlLineBarChartPointVisualization | null | UiSdlTimeseriesLineBarChartLineVisualization | null | UiSdlLineBarChartYAxisMarkerLineVisualization | null | UiSdlLineBarChartYAxisMarkerRangeShadingVisualization | null | UiSdlTimeseriesLineBarChartXAxisAreaShadingVisualization | null | UiSdlLineBarChartXAxisMarkerRangeShadingVisualization | null | null;
  withVisualizationType(visualizationType: IUiSdlLineBarChartBarVisualization | null | IUiSdlLineBarChartPointVisualization | null | IUiSdlTimeseriesLineBarChartLineVisualization | null | IUiSdlLineBarChartYAxisMarkerLineVisualization | null | IUiSdlLineBarChartYAxisMarkerRangeShadingVisualization | null | IUiSdlTimeseriesLineBarChartXAxisAreaShadingVisualization | null | IUiSdlLineBarChartXAxisMarkerRangeShadingVisualization | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly relatedMarkers?: C3.Array<string | null>;
  withRelatedMarkers(relatedMarkers: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly upperBound?: UiSdlMetricBasedDataSpecSetting | null;
  withUpperBound(upperBound: IUiSdlMetricBasedDataSpecSetting | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly lowerBound?: UiSdlMetricBasedDataSpecSetting | null;
  withLowerBound(lowerBound: IUiSdlMetricBasedDataSpecSetting | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly synchronizationSpec?: UiSdlSynchronizedChartDataSpecSetting | null;
  withSynchronizationSpec(synchronizationSpec: IUiSdlSynchronizedChartDataSpecSetting | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;
}

