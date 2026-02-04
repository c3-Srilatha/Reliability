export interface DataPrepTrainValTimeRangesGetChartDataSpec {

  readonly spec: DataPrepTrainValTimeRangesChartSpec;
  withSpec(spec: IDataPrepTrainValTimeRangesChartSpec): DataPrepTrainValTimeRangesGetChartDataSpec;

  readonly start: DateTime;
  withStart(start: IDateTime): DataPrepTrainValTimeRangesGetChartDataSpec;

  readonly end: DateTime;
  withEnd(end: IDateTime): DataPrepTrainValTimeRangesGetChartDataSpec;

  readonly interval: string;
  withInterval(interval: string): DataPrepTrainValTimeRangesGetChartDataSpec;
}

