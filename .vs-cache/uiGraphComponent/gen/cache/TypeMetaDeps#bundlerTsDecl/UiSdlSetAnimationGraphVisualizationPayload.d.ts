export interface UiSdlSetAnimationGraphVisualizationPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSetAnimationGraphVisualizationPayload;

  readonly animation?: UiSdlGraphVisualizationAnimation | null;
  withAnimation(animation: IUiSdlGraphVisualizationAnimation | null): UiSdlSetAnimationGraphVisualizationPayload;
}

