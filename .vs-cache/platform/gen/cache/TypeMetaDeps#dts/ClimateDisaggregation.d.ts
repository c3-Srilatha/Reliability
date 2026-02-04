// TypeScript definitions for the C3 type ClimateDisaggregation

/**
 * @remarks this represents a value passed to a method that expects an instance of ClimateDisaggregation
 */
declare interface IClimateDisaggregation {
}

/**
 * @remarks this represents a made instance of ClimateDisaggregation
 */
declare class ClimateDisaggregation {

  static disaggregateTimeseries(usage?: EvaluateResult | null, weather?: TimedDataHeader<TimedDataPoint | null> | null, config?: DisaggregationConfig | null): ClimateResult | null;

  static disaggregate(usage?: C3.Array<DisaggregationUsage | null>, weather?: TimedDataHeader<TimedDataPoint | null> | null, config?: DisaggregationConfig | null): ClimateResult | null;
}

