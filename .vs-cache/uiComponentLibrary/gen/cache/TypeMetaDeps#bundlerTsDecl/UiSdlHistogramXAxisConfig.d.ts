export interface UiSdlHistogramXAxisConfig {

  readonly min?: number | null;
  withMin(min: number | null): UiSdlHistogramXAxisConfig;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlHistogramXAxisConfig;

  readonly scale?: boolean;
  withScale(scale: boolean): UiSdlHistogramXAxisConfig;

  readonly decimalPrecision?: number | null;
  withDecimalPrecision(decimalPrecision: number | null): UiSdlHistogramXAxisConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlHistogramXAxisConfig;

  readonly nameLocation?: string | null;
  withNameLocation(nameLocation: string | null): UiSdlHistogramXAxisConfig;

  readonly nameRotate?: number | null;
  withNameRotate(nameRotate: number | null): UiSdlHistogramXAxisConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlHistogramXAxisConfig;

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlHistogramXAxisConfig;

  readonly logBase?: number | null;
  withLogBase(logBase: number | null): UiSdlHistogramXAxisConfig;

  readonly splitNumber?: number | null;
  withSplitNumber(splitNumber: number | null): UiSdlHistogramXAxisConfig;

  readonly minInterval?: number | null;
  withMinInterval(minInterval: number | null): UiSdlHistogramXAxisConfig;

  readonly maxInterval?: number | null;
  withMaxInterval(maxInterval: number | null): UiSdlHistogramXAxisConfig;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlHistogramXAxisConfig;

  readonly hideLabels?: boolean;
  withHideLabels(hideLabels: boolean): UiSdlHistogramXAxisConfig;

  readonly numBins?: number | null;
  withNumBins(numBins: number | null): UiSdlHistogramXAxisConfig;

  readonly percentage?: boolean;
  withPercentage(percentage: boolean): UiSdlHistogramXAxisConfig;

  readonly onlyRenderMinMaxAxisLabel?: boolean;
  withOnlyRenderMinMaxAxisLabel(onlyRenderMinMaxAxisLabel: boolean): UiSdlHistogramXAxisConfig;
}

