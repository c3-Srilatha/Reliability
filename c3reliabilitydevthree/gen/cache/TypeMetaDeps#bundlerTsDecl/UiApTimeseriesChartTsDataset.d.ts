export interface UiApTimeseriesChartTsDataset {

  readonly data?: any | null;
  withData(data: any | null): UiApTimeseriesChartTsDataset;

  readonly unitMap?: C3.Map<string | null, Unit | null>;
  withUnitMap(unitMap: C3.Map<string | null, Unit | null> | {[key: string | null]: IUnit | null}): UiApTimeseriesChartTsDataset;

  readonly labelMap?: C3.Map<string | null, string | null>;
  withLabelMap(labelMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiApTimeseriesChartTsDataset;
}

