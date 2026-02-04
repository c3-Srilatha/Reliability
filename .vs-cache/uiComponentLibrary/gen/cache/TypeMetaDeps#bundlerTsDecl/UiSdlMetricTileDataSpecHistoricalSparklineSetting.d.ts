export interface UiSdlMetricTileDataSpecHistoricalSparklineSetting {

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly prefix?: string | null;
  withPrefix(prefix: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly timeHorizonLabel?: string | null;
  withTimeHorizonLabel(timeHorizonLabel: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly timeHorizon?: string | null;
  withTimeHorizon(timeHorizon: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly endpoint?: string | null;
  withEndpoint(endpoint: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly dynamicSparklineSetting?: UiSdlMetricTileSparklineDynamicColoring | null;
  withDynamicSparklineSetting(dynamicSparklineSetting: IUiSdlMetricTileSparklineDynamicColoring | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly showUnitAsPrefix?: boolean;
  withShowUnitAsPrefix(showUnitAsPrefix: boolean): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly alertIcon?: boolean;
  withAlertIcon(alertIcon: boolean): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly alertOperator?: string | null;
  withAlertOperator(alertOperator: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly alertThreshold?: number | null;
  withAlertThreshold(alertThreshold: number | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly warningOperator?: string | null;
  withWarningOperator(warningOperator: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly warningThreshold?: number | null;
  withWarningThreshold(warningThreshold: number | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly sparklineThreshold?: UiSdlMetricTileHistoricalSparklineThreshold | null;
  withSparklineThreshold(sparklineThreshold: IUiSdlMetricTileHistoricalSparklineThreshold | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly displayedValue?: string | null;
  withDisplayedValue(displayedValue: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly evaluateAction?: string | null;
  withEvaluateAction(evaluateAction: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlMetricTileDataSpecHistoricalSparklineSetting;
}

