export interface UiSdlChartEChartsGrid {

  readonly left?: number | null;
  withLeft(left: number | null): UiSdlChartEChartsGrid;

  readonly right?: number | null;
  withRight(right: number | null): UiSdlChartEChartsGrid;

  readonly top?: number | null;
  withTop(top: number | null): UiSdlChartEChartsGrid;

  readonly bottom?: number | null;
  withBottom(bottom: number | null): UiSdlChartEChartsGrid;

  readonly containLabel?: boolean;
  withContainLabel(containLabel: boolean): UiSdlChartEChartsGrid;
}

