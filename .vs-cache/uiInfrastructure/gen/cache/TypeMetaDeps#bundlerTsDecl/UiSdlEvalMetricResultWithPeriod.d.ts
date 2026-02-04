export interface UiSdlEvalMetricResultWithPeriod {

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlEvalMetricResultWithPeriod;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlEvalMetricResultWithPeriod;
}

