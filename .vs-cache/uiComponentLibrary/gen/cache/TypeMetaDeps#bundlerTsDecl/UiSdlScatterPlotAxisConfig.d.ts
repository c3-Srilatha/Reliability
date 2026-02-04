export interface UiSdlScatterPlotAxisConfig {

  readonly min?: number | null;
  withMin(min: number | null): UiSdlScatterPlotAxisConfig;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlScatterPlotAxisConfig;

  readonly scale?: boolean;
  withScale(scale: boolean): UiSdlScatterPlotAxisConfig;

  readonly decimalPrecision?: number | null;
  withDecimalPrecision(decimalPrecision: number | null): UiSdlScatterPlotAxisConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlScatterPlotAxisConfig;

  readonly nameLocation?: string | null;
  withNameLocation(nameLocation: string | null): UiSdlScatterPlotAxisConfig;

  readonly nameRotate?: number | null;
  withNameRotate(nameRotate: number | null): UiSdlScatterPlotAxisConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlScatterPlotAxisConfig;

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlScatterPlotAxisConfig;

  readonly logBase?: number | null;
  withLogBase(logBase: number | null): UiSdlScatterPlotAxisConfig;

  readonly splitNumber?: number | null;
  withSplitNumber(splitNumber: number | null): UiSdlScatterPlotAxisConfig;

  readonly minInterval?: number | null;
  withMinInterval(minInterval: number | null): UiSdlScatterPlotAxisConfig;

  readonly maxInterval?: number | null;
  withMaxInterval(maxInterval: number | null): UiSdlScatterPlotAxisConfig;

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlScatterPlotAxisConfig;
}

