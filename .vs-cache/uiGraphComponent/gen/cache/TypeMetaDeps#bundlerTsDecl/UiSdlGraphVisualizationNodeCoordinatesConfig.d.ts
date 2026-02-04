export interface UiSdlGraphVisualizationNodeCoordinatesConfig {

  readonly latitude: UiSdlFieldBasedDataSpecSetting;
  withLatitude(latitude: IUiSdlFieldBasedDataSpecSetting): UiSdlGraphVisualizationNodeCoordinatesConfig;

  readonly longitude: UiSdlFieldBasedDataSpecSetting;
  withLongitude(longitude: IUiSdlFieldBasedDataSpecSetting): UiSdlGraphVisualizationNodeCoordinatesConfig;
}

