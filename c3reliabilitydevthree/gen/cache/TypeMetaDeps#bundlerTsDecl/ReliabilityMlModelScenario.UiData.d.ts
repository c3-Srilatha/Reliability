declare namespace ReliabilityMlModelScenario {
  export interface UiData {

    readonly alertData?: FetchResultWithTotalCount<any | null> | null;
    withAlertData(alertData: IFetchResultWithTotalCount<any | null> | null): ReliabilityMlModelScenario.UiData;

    readonly chartData?: UiApTimeseriesChartDataConfig | null;
    withChartData(chartData: IUiApTimeseriesChartDataConfig | null): ReliabilityMlModelScenario.UiData;
  }
}

