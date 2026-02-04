export interface UiSdlGraphVisualizationClickEdgeGlyphActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationClickEdgeGlyphActionPayload;

  readonly edgeId?: string | null;
  withEdgeId(edgeId: string | null): UiSdlGraphVisualizationClickEdgeGlyphActionPayload;

  readonly glyph?: UiSdlGraphVisualizationBaseGlyphConfig | null;
  withGlyph(glyph: IUiSdlGraphVisualizationBaseGlyphConfig | null): UiSdlGraphVisualizationClickEdgeGlyphActionPayload;
}

