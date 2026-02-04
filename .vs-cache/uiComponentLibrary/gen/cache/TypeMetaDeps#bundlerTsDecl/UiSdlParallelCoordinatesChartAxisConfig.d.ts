export interface UiSdlParallelCoordinatesChartAxisConfig {

  readonly id?: string | null;
  withId(id: string | null): UiSdlParallelCoordinatesChartAxisConfig;

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlParallelCoordinatesChartAxisConfig;

  readonly parallelAxisType?: string | null;
  withParallelAxisType(parallelAxisType: string | null): UiSdlParallelCoordinatesChartAxisConfig;

  readonly values?: C3.Array<string | null>;
  withValues(values: C3.Array<string | null> | Array<string | null>): UiSdlParallelCoordinatesChartAxisConfig;
}

