export interface UiSdlMetricTileEvalDataSpecForecastSparklineSetting {

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly prefix?: string | null;
  withPrefix(prefix: string | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly timeHorizonLabel?: string | null;
  withTimeHorizonLabel(timeHorizonLabel: string | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly timeHorizon?: string | null;
  withTimeHorizon(timeHorizon: string | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly endpoint?: string | null;
  withEndpoint(endpoint: string | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly dynamicSparklineSetting?: UiSdlMetricTileSparklineDynamicColoring | null;
  withDynamicSparklineSetting(dynamicSparklineSetting: IUiSdlMetricTileSparklineDynamicColoring | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;

  readonly subject?: string | null;
  withSubject(subject: string | null): UiSdlMetricTileEvalDataSpecForecastSparklineSetting;
}

