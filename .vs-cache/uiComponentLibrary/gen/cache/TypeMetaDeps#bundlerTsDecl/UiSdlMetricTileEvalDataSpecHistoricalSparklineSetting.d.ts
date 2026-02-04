export interface UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting {

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly prefix?: string | null;
  withPrefix(prefix: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly timeHorizonLabel?: string | null;
  withTimeHorizonLabel(timeHorizonLabel: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly timeHorizon?: string | null;
  withTimeHorizon(timeHorizon: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly endpoint?: string | null;
  withEndpoint(endpoint: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly dynamicSparklineSetting?: UiSdlMetricTileSparklineDynamicColoring | null;
  withDynamicSparklineSetting(dynamicSparklineSetting: IUiSdlMetricTileSparklineDynamicColoring | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly showUnitAsPrefix?: boolean;
  withShowUnitAsPrefix(showUnitAsPrefix: boolean): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly alertIcon?: boolean;
  withAlertIcon(alertIcon: boolean): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly alertOperator?: string | null;
  withAlertOperator(alertOperator: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly alertThreshold?: number | null;
  withAlertThreshold(alertThreshold: number | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly warningOperator?: string | null;
  withWarningOperator(warningOperator: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly warningThreshold?: number | null;
  withWarningThreshold(warningThreshold: number | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly sparklineThreshold?: UiSdlMetricTileHistoricalSparklineThreshold | null;
  withSparklineThreshold(sparklineThreshold: IUiSdlMetricTileHistoricalSparklineThreshold | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly displayedValue?: string | null;
  withDisplayedValue(displayedValue: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;

  readonly subject?: string | null;
  withSubject(subject: string | null): UiSdlMetricTileEvalDataSpecHistoricalSparklineSetting;
}

