export interface UiSdlGraphVisualizationEdgeGlyphConfig {

  readonly start?: UiSdlGraphVisualizationBaseGlyphConfig | null;
  withStart(start: IUiSdlGraphVisualizationBaseGlyphConfig | null): UiSdlGraphVisualizationEdgeGlyphConfig;

  readonly center?: UiSdlGraphVisualizationBaseGlyphConfig | null;
  withCenter(center: IUiSdlGraphVisualizationBaseGlyphConfig | null): UiSdlGraphVisualizationEdgeGlyphConfig;

  readonly end?: UiSdlGraphVisualizationBaseGlyphConfig | null;
  withEnd(end: IUiSdlGraphVisualizationBaseGlyphConfig | null): UiSdlGraphVisualizationEdgeGlyphConfig;
}

