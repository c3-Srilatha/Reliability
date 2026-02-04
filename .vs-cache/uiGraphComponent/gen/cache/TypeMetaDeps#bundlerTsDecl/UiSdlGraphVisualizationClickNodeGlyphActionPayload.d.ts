export interface UiSdlGraphVisualizationClickNodeGlyphActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationClickNodeGlyphActionPayload;

  readonly nodeId?: string | null;
  withNodeId(nodeId: string | null): UiSdlGraphVisualizationClickNodeGlyphActionPayload;

  readonly glyph?: UiSdlGraphVisualizationBaseGlyphConfig | null;
  withGlyph(glyph: IUiSdlGraphVisualizationBaseGlyphConfig | null): UiSdlGraphVisualizationClickNodeGlyphActionPayload;
}

