export interface UiSdlChartAxisMarkersRangeValue<VT> {

  readonly from?: VT | null;
  withFrom(from: VT | null): UiSdlChartAxisMarkersRangeValue;

  readonly to?: VT | null;
  withTo(to: VT | null): UiSdlChartAxisMarkersRangeValue;
}

