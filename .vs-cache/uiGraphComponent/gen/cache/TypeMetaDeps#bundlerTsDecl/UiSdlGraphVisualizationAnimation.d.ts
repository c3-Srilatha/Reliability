export interface UiSdlGraphVisualizationAnimation {

  readonly animate?: boolean;
  withAnimate(animate: boolean): UiSdlGraphVisualizationAnimation;

  readonly time?: number | null;
  withTime(time: number | null): UiSdlGraphVisualizationAnimation;
}

