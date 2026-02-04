export interface UiSdlTimeseriesLineBarChartDateLineDataSpecSetting {

  readonly dateLineConfig: UiSdlTimeseriesLineBarChartDateLineConfig;
  withDateLineConfig(dateLineConfig: IUiSdlTimeseriesLineBarChartDateLineConfig): UiSdlTimeseriesLineBarChartDateLineDataSpecSetting;

  readonly entityId: string;
  withEntityId(entityId: string): UiSdlTimeseriesLineBarChartDateLineDataSpecSetting;

  readonly fieldName: string;
  withFieldName(fieldName: string): UiSdlTimeseriesLineBarChartDateLineDataSpecSetting;
}

