export interface UiSdlChartColorConfig {

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlChartColorConfig;
}

