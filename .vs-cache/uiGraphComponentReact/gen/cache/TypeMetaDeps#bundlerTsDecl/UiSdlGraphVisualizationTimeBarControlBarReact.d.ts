export interface UiSdlGraphVisualizationTimeBarControlBarReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly backwardIcon?: string | null;
  withBackwardIcon(backwardIcon: string | null): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly pauseIcon?: string | null;
  withPauseIcon(pauseIcon: string | null): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly playIcon?: string | null;
  withPlayIcon(playIcon: string | null): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly forwardIcon?: string | null;
  withForwardIcon(forwardIcon: string | null): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly playSpeeds?: C3.Array<UiSdlGraphVisualizationTimeBarSpeedItem | null>;
  withPlaySpeeds(playSpeeds: C3.Array<UiSdlGraphVisualizationTimeBarSpeedItem | null> | Array<IUiSdlGraphVisualizationTimeBarSpeedItem | null>): UiSdlGraphVisualizationTimeBarControlBarReact;

  readonly defaultSpeed?: number | null;
  withDefaultSpeed(defaultSpeed: number | null): UiSdlGraphVisualizationTimeBarControlBarReact;
}

