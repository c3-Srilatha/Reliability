export interface UiSdlChartAxisConfig {

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlChartAxisConfig;
}

