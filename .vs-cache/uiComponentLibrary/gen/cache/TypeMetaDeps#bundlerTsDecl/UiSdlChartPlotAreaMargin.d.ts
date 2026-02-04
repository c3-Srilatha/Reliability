export interface UiSdlChartPlotAreaMargin {

  readonly left?: number | null;
  withLeft(left: number | null): UiSdlChartPlotAreaMargin;

  readonly right?: number | null;
  withRight(right: number | null): UiSdlChartPlotAreaMargin;

  readonly top?: number | null;
  withTop(top: number | null): UiSdlChartPlotAreaMargin;

  readonly bottom?: number | null;
  withBottom(bottom: number | null): UiSdlChartPlotAreaMargin;

  readonly containLabel?: boolean;
  withContainLabel(containLabel: boolean): UiSdlChartPlotAreaMargin;
}

