export interface UiSdlGraphVisualizationTimeBarConfig {

  readonly edgeTimestampProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withEdgeTimestampProperty(edgeTimestampProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly edgeTimestampsProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withEdgeTimestampsProperty(edgeTimestampsProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly edgeTimeIntervalProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withEdgeTimeIntervalProperty(edgeTimeIntervalProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly edgeTimeIntervalsProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withEdgeTimeIntervalsProperty(edgeTimeIntervalsProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly nodeTimestampProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withNodeTimestampProperty(nodeTimestampProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly nodeTimestampsProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withNodeTimestampsProperty(nodeTimestampsProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly nodeTimeIntervalProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withNodeTimeIntervalProperty(nodeTimeIntervalProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly nodeTimeIntervalsProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withNodeTimeIntervalsProperty(nodeTimeIntervalsProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly showTimeBarControls?: boolean;
  withShowTimeBarControls(showTimeBarControls: boolean): UiSdlGraphVisualizationTimeBarConfig;

  readonly showDisconnectedNodes?: boolean;
  withShowDisconnectedNodes(showDisconnectedNodes: boolean): UiSdlGraphVisualizationTimeBarConfig;

  readonly showNonTemporalData?: boolean;
  withShowNonTemporalData(showNonTemporalData: boolean): UiSdlGraphVisualizationTimeBarConfig;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly hoverColor?: string | null;
  withHoverColor(hoverColor: string | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly isHistogram?: boolean;
  withIsHistogram(isHistogram: boolean): UiSdlGraphVisualizationTimeBarConfig;

  readonly animation?: UiSdlGraphVisualizationAnimation | null;
  withAnimation(animation: IUiSdlGraphVisualizationAnimation | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly mode?: string | null;
  withMode(mode: string | null): UiSdlGraphVisualizationTimeBarConfig;

  readonly controlsConfig?: UiSdlGraphVisualizationTimeBarControlBar | null;
  withControlsConfig(controlsConfig: IUiSdlGraphVisualizationTimeBarControlBar | null): UiSdlGraphVisualizationTimeBarConfig;
}

