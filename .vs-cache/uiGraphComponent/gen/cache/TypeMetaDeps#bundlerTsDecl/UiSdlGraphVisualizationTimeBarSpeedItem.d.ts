export interface UiSdlGraphVisualizationTimeBarSpeedItem {

  readonly text?: string | null;
  withText(text: string | null): UiSdlGraphVisualizationTimeBarSpeedItem;

  readonly value?: number | null;
  withValue(value: number | null): UiSdlGraphVisualizationTimeBarSpeedItem;
}

