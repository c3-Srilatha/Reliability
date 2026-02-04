export interface UiSdlAreaChartYAxisDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlAreaChartYAxisDataSpecSetting;

  readonly yAxisTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withYAxisTitle(yAxisTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly yAxisStyleOverride?: UiSdlLineBarChartYAxisConfigOverride | null;
  withYAxisStyleOverride(yAxisStyleOverride: IUiSdlLineBarChartYAxisConfigOverride | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly legendDescription?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendDescription(legendDescription: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly legendIcon?: string | null;
  withLegendIcon(legendIcon: string | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly evaluateAction?: string | null;
  withEvaluateAction(evaluateAction: string | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly bindingsLegendLabels?: C3.Array<UiSdlDynamicValueSpec | null>;
  withBindingsLegendLabels(bindingsLegendLabels: C3.Array<UiSdlDynamicValueSpec | null> | Array<IUiSdlDynamicValueSpec | null>): UiSdlAreaChartYAxisDataSpecSetting;

  readonly bindingsLegendDescriptions?: C3.Array<string | null>;
  withBindingsLegendDescriptions(bindingsLegendDescriptions: C3.Array<string | null> | Array<string | null>): UiSdlAreaChartYAxisDataSpecSetting;

  readonly bindingsLegendIcons?: C3.Array<string | null>;
  withBindingsLegendIcons(bindingsLegendIcons: C3.Array<string | null> | Array<string | null>): UiSdlAreaChartYAxisDataSpecSetting;

  readonly bindingsSynchronizedGridHeights?: C3.Array<number | null>;
  withBindingsSynchronizedGridHeights(bindingsSynchronizedGridHeights: C3.Array<number | null> | Array<number | null>): UiSdlAreaChartYAxisDataSpecSetting;

  readonly visualizationType?: UiSdlLineBarChartBarVisualization | null | UiSdlLineBarChartPointVisualization | null | UiSdlTimeseriesLineBarChartLineVisualization | null | UiSdlLineBarChartYAxisMarkerLineVisualization | null | UiSdlLineBarChartYAxisMarkerRangeShadingVisualization | null | UiSdlTimeseriesLineBarChartXAxisAreaShadingVisualization | null | UiSdlLineBarChartXAxisMarkerRangeShadingVisualization | null | null;
  withVisualizationType(visualizationType: IUiSdlLineBarChartBarVisualization | null | IUiSdlLineBarChartPointVisualization | null | IUiSdlTimeseriesLineBarChartLineVisualization | null | IUiSdlLineBarChartYAxisMarkerLineVisualization | null | IUiSdlLineBarChartYAxisMarkerRangeShadingVisualization | null | IUiSdlTimeseriesLineBarChartXAxisAreaShadingVisualization | null | IUiSdlLineBarChartXAxisMarkerRangeShadingVisualization | null | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly relatedMarkers?: C3.Array<string | null>;
  withRelatedMarkers(relatedMarkers: C3.Array<string | null> | Array<string | null>): UiSdlAreaChartYAxisDataSpecSetting;

  readonly upperBound?: UiSdlMetricBasedDataSpecSetting | null;
  withUpperBound(upperBound: IUiSdlMetricBasedDataSpecSetting | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly lowerBound?: UiSdlMetricBasedDataSpecSetting | null;
  withLowerBound(lowerBound: IUiSdlMetricBasedDataSpecSetting | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly synchronizationSpec?: UiSdlSynchronizedChartDataSpecSetting | null;
  withSynchronizationSpec(synchronizationSpec: IUiSdlSynchronizedChartDataSpecSetting | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlAreaChartYAxisDataSpecSetting;

  readonly legendGroupLabel?: string | null;
  withLegendGroupLabel(legendGroupLabel: string | null): UiSdlAreaChartYAxisDataSpecSetting;
}

