export interface UiSdlWaterfallChartXAxisConfig {

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlWaterfallChartXAxisConfig;

  readonly colorScheme?: string | null;
  withColorScheme(colorScheme: string | null): UiSdlWaterfallChartXAxisConfig;

  readonly displayAxis?: boolean;
  withDisplayAxis(displayAxis: boolean): UiSdlWaterfallChartXAxisConfig;
}

