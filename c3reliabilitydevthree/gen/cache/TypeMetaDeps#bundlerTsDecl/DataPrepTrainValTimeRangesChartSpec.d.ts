export interface DataPrepTrainValTimeRangesChartSpec {

  readonly assets: C3.Array<ReliabilityAsset | null>;
  withAssets(assets: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): DataPrepTrainValTimeRangesChartSpec;

  readonly windowStart: DateTime;
  withWindowStart(windowStart: DateTime | Date | string): DataPrepTrainValTimeRangesChartSpec;

  readonly windowEnd: DateTime;
  withWindowEnd(windowEnd: DateTime | Date | string): DataPrepTrainValTimeRangesChartSpec;

  readonly trainingDatasetTimeRanges: C3.Array<TimeRange | null>;
  withTrainingDatasetTimeRanges(trainingDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPrepTrainValTimeRangesChartSpec;

  readonly validateDatasetTimeRanges: C3.Array<TimeRange | null>;
  withValidateDatasetTimeRanges(validateDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPrepTrainValTimeRangesChartSpec;
}

