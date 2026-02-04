export interface UiSdlGraphVisualizationTimeBarControlBar {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationTimeBarControlBar;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationTimeBarControlBar;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationTimeBarControlBar;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationTimeBarControlBar;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationTimeBarControlBar;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationTimeBarControlBar;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationTimeBarControlBar;

  readonly backwardIcon?: string | null;
  withBackwardIcon(backwardIcon: string | null): UiSdlGraphVisualizationTimeBarControlBar;

  readonly pauseIcon?: string | null;
  withPauseIcon(pauseIcon: string | null): UiSdlGraphVisualizationTimeBarControlBar;

  readonly playIcon?: string | null;
  withPlayIcon(playIcon: string | null): UiSdlGraphVisualizationTimeBarControlBar;

  readonly forwardIcon?: string | null;
  withForwardIcon(forwardIcon: string | null): UiSdlGraphVisualizationTimeBarControlBar;

  readonly playSpeeds?: C3.Array<UiSdlGraphVisualizationTimeBarSpeedItem | null>;
  withPlaySpeeds(playSpeeds: C3.Array<UiSdlGraphVisualizationTimeBarSpeedItem | null> | Array<IUiSdlGraphVisualizationTimeBarSpeedItem | null>): UiSdlGraphVisualizationTimeBarControlBar;

  readonly defaultSpeed?: number | null;
  withDefaultSpeed(defaultSpeed: number | null): UiSdlGraphVisualizationTimeBarControlBar;
}

