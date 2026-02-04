export interface UiApTimeseriesChartDataConfig {

  readonly tsDataset?: UiApTimeseriesChartTsDataset | null;
  withTsDataset(tsDataset: IUiApTimeseriesChartTsDataset | null): UiApTimeseriesChartDataConfig;

  readonly eventDatasets?: C3.Map<string | null, UiApTimeseriesChartEventDataset | null>;
  withEventDatasets(eventDatasets: C3.Map<string | null, UiApTimeseriesChartEventDataset | null> | {[key: string | null]: IUiApTimeseriesChartEventDataset | null}): UiApTimeseriesChartDataConfig;

  readonly tsThresholds?: C3.Map<string | null, C3.Array<UiApTimeseriesChartTsThreshold | null>>;
  withTsThresholds(tsThresholds: C3.Map<string | null, C3.Array<UiApTimeseriesChartTsThreshold | null>> | {[key: string | null]: C3.Array<UiApTimeseriesChartTsThreshold | null> | Array<IUiApTimeseriesChartTsThreshold | null>}): UiApTimeseriesChartDataConfig;

  readonly shadedTimeRanges?: C3.Array<UiApTimeseriesChartShadedTimeRanges | null>;
  withShadedTimeRanges(shadedTimeRanges: C3.Array<UiApTimeseriesChartShadedTimeRanges | null> | Array<IUiApTimeseriesChartShadedTimeRanges | null>): UiApTimeseriesChartDataConfig;

  readonly breakTimeRanges?: C3.Array<UiApTimeseriesChartBreakTimeRanges | null>;
  withBreakTimeRanges(breakTimeRanges: C3.Array<UiApTimeseriesChartBreakTimeRanges | null> | Array<IUiApTimeseriesChartBreakTimeRanges | null>): UiApTimeseriesChartDataConfig;

  readonly queryKeys?: C3.Map<string | null, C3.Array<string | null>>;
  withQueryKeys(queryKeys: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiApTimeseriesChartDataConfig;
}

