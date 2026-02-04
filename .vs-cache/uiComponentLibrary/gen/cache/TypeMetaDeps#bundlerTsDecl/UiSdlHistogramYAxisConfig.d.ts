export interface UiSdlHistogramYAxisConfig {

  readonly min?: number | null;
  withMin(min: number | null): UiSdlHistogramYAxisConfig;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlHistogramYAxisConfig;

  readonly scale?: boolean;
  withScale(scale: boolean): UiSdlHistogramYAxisConfig;

  readonly decimalPrecision?: number | null;
  withDecimalPrecision(decimalPrecision: number | null): UiSdlHistogramYAxisConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlHistogramYAxisConfig;

  readonly nameLocation?: string | null;
  withNameLocation(nameLocation: string | null): UiSdlHistogramYAxisConfig;

  readonly nameRotate?: number | null;
  withNameRotate(nameRotate: number | null): UiSdlHistogramYAxisConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlHistogramYAxisConfig;

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlHistogramYAxisConfig;

  readonly logBase?: number | null;
  withLogBase(logBase: number | null): UiSdlHistogramYAxisConfig;

  readonly splitNumber?: number | null;
  withSplitNumber(splitNumber: number | null): UiSdlHistogramYAxisConfig;

  readonly minInterval?: number | null;
  withMinInterval(minInterval: number | null): UiSdlHistogramYAxisConfig;

  readonly maxInterval?: number | null;
  withMaxInterval(maxInterval: number | null): UiSdlHistogramYAxisConfig;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlHistogramYAxisConfig;

  readonly hideLabels?: boolean;
  withHideLabels(hideLabels: boolean): UiSdlHistogramYAxisConfig;
}

