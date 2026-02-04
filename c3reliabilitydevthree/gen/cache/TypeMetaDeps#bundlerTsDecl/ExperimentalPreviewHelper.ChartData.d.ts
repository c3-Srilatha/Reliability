declare namespace ExperimentalPreviewHelper {
  export interface ChartData {

    readonly experimentalModel?: ReliabilityMlModel | null;
    withExperimentalModel(experimentalModel: IReliabilityMlModel | null): ExperimentalPreviewHelper.ChartData;

    readonly seriesData?: EvalMetricsResult | null;
    withSeriesData(seriesData: IEvalMetricsResult | null): ExperimentalPreviewHelper.ChartData;

    readonly alertsData?: FetchResultWithTotalCount<ReliabilityMlModelExperiment.AlertData | null> | null;
    withAlertsData(alertsData: IFetchResultWithTotalCount<ReliabilityMlModelExperiment.AlertData | null> | null): ExperimentalPreviewHelper.ChartData;

    readonly baseModelAlertsData?: FetchResultWithTotalCount<ReliabilityMlModelExperiment.AlertData | null> | null;
    withBaseModelAlertsData(baseModelAlertsData: IFetchResultWithTotalCount<ReliabilityMlModelExperiment.AlertData | null> | null): ExperimentalPreviewHelper.ChartData;

    readonly timeRange?: TimeRange | null;
    withTimeRange(timeRange: ITimeRange | null): ExperimentalPreviewHelper.ChartData;

    readonly hyperparameterOverrides?: any | null;
    withHyperparameterOverrides(hyperparameterOverrides: any | null): ExperimentalPreviewHelper.ChartData;

    readonly originalTrainingValidationPeriods?: any | null;
    withOriginalTrainingValidationPeriods(originalTrainingValidationPeriods: any | null): ExperimentalPreviewHelper.ChartData;
  }
}

