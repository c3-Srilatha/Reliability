export interface UiSdlHeatMapDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlHeatMapDataSpecSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlHeatMapDataSpecSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlHeatMapDataSpecSetting;

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlHeatMapDataSpecSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlHeatMapDataSpecSetting;

  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlHeatMapDataSpecSetting;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlHeatMapDataSpecSetting;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlHeatMapDataSpecSetting;

  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlHeatMapDataSpecSetting;

  readonly evaluateAction?: string | null;
  withEvaluateAction(evaluateAction: string | null): UiSdlHeatMapDataSpecSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlHeatMapDataSpecSetting;

  readonly colorStrategy: UiSdlHeatMapColorFieldSetting;
  withColorStrategy(colorStrategy: IUiSdlHeatMapColorFieldSetting): UiSdlHeatMapDataSpecSetting;
}

