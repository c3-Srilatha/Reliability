export interface UiSdlWaterfallChartYAxisConfig {

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlWaterfallChartYAxisConfig;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly scale?: boolean;
  withScale(scale: boolean): UiSdlWaterfallChartYAxisConfig;

  readonly decimalPrecision?: number | null;
  withDecimalPrecision(decimalPrecision: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly nameLocation?: string | null;
  withNameLocation(nameLocation: string | null): UiSdlWaterfallChartYAxisConfig;

  readonly nameRotate?: number | null;
  withNameRotate(nameRotate: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlWaterfallChartYAxisConfig;

  readonly logBase?: number | null;
  withLogBase(logBase: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly splitNumber?: number | null;
  withSplitNumber(splitNumber: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly minInterval?: number | null;
  withMinInterval(minInterval: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly maxInterval?: number | null;
  withMaxInterval(maxInterval: number | null): UiSdlWaterfallChartYAxisConfig;

  readonly units?: string | null;
  withUnits(units: string | null): UiSdlWaterfallChartYAxisConfig;

  readonly displayAxis?: boolean;
  withDisplayAxis(displayAxis: boolean): UiSdlWaterfallChartYAxisConfig;
}

