export interface UiSdlChartNumericalAxisConfig {

  readonly min?: number | null;
  withMin(min: number | null): UiSdlChartNumericalAxisConfig;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlChartNumericalAxisConfig;

  readonly scale?: boolean;
  withScale(scale: boolean): UiSdlChartNumericalAxisConfig;

  readonly decimalPrecision?: number | null;
  withDecimalPrecision(decimalPrecision: number | null): UiSdlChartNumericalAxisConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlChartNumericalAxisConfig;

  readonly nameLocation?: string | null;
  withNameLocation(nameLocation: string | null): UiSdlChartNumericalAxisConfig;

  readonly nameRotate?: number | null;
  withNameRotate(nameRotate: number | null): UiSdlChartNumericalAxisConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlChartNumericalAxisConfig;

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlChartNumericalAxisConfig;

  readonly logBase?: number | null;
  withLogBase(logBase: number | null): UiSdlChartNumericalAxisConfig;

  readonly splitNumber?: number | null;
  withSplitNumber(splitNumber: number | null): UiSdlChartNumericalAxisConfig;

  readonly minInterval?: number | null;
  withMinInterval(minInterval: number | null): UiSdlChartNumericalAxisConfig;

  readonly maxInterval?: number | null;
  withMaxInterval(maxInterval: number | null): UiSdlChartNumericalAxisConfig;
}

