export interface UiSdlLineBarChartXAxisConfig {

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlLineBarChartXAxisConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlLineBarChartXAxisConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlLineBarChartXAxisConfig;
}

