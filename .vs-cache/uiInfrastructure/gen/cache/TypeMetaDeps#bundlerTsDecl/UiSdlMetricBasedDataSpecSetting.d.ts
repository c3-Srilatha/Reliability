export interface UiSdlMetricBasedDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMetricBasedDataSpecSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlMetricBasedDataSpecSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlMetricBasedDataSpecSetting;

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlMetricBasedDataSpecSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlMetricBasedDataSpecSetting;

  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlMetricBasedDataSpecSetting;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlMetricBasedDataSpecSetting;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlMetricBasedDataSpecSetting;

  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlMetricBasedDataSpecSetting;
}

