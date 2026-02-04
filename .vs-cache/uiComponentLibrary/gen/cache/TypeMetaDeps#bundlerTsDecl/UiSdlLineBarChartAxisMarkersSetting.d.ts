export interface UiSdlLineBarChartAxisMarkersSetting<T> {

  readonly markerAxisValue?: T | null;
  withMarkerAxisValue(markerAxisValue: T | null): UiSdlLineBarChartAxisMarkersSetting;

  readonly markerIdentifier: string;
  withMarkerIdentifier(markerIdentifier: string): UiSdlLineBarChartAxisMarkersSetting;
}

