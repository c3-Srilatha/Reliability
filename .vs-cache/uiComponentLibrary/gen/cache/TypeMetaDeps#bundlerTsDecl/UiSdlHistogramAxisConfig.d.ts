export interface UiSdlHistogramAxisConfig {

  readonly min?: number | null;
  withMin(min: number | null): UiSdlHistogramAxisConfig;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlHistogramAxisConfig;

  readonly scale?: boolean;
  withScale(scale: boolean): UiSdlHistogramAxisConfig;

  readonly decimalPrecision?: number | null;
  withDecimalPrecision(decimalPrecision: number | null): UiSdlHistogramAxisConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlHistogramAxisConfig;

  readonly nameLocation?: string | null;
  withNameLocation(nameLocation: string | null): UiSdlHistogramAxisConfig;

  readonly nameRotate?: number | null;
  withNameRotate(nameRotate: number | null): UiSdlHistogramAxisConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlHistogramAxisConfig;

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlHistogramAxisConfig;

  readonly logBase?: number | null;
  withLogBase(logBase: number | null): UiSdlHistogramAxisConfig;

  readonly splitNumber?: number | null;
  withSplitNumber(splitNumber: number | null): UiSdlHistogramAxisConfig;

  readonly minInterval?: number | null;
  withMinInterval(minInterval: number | null): UiSdlHistogramAxisConfig;

  readonly maxInterval?: number | null;
  withMaxInterval(maxInterval: number | null): UiSdlHistogramAxisConfig;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlHistogramAxisConfig;

  readonly hideLabels?: boolean;
  withHideLabels(hideLabels: boolean): UiSdlHistogramAxisConfig;
}

