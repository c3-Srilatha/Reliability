export interface UiSdlGraphVisualizationClickLegendActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationClickLegendActionPayload;

  readonly nodeIds: C3.Array<string | null>;
  withNodeIds(nodeIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationClickLegendActionPayload;
}

