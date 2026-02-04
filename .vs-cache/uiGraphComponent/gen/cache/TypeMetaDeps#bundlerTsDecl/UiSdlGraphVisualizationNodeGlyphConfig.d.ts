export interface UiSdlGraphVisualizationNodeGlyphConfig {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationNodeGlyphConfig;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationNodeGlyphConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationNodeGlyphConfig;

  readonly outlineColor?: string | null;
  withOutlineColor(outlineColor: string | null): UiSdlGraphVisualizationNodeGlyphConfig;

  readonly size?: number | null;
  withSize(size: number | null): UiSdlGraphVisualizationNodeGlyphConfig;

  readonly glyphType: string;
  withGlyphType(glyphType: string): UiSdlGraphVisualizationNodeGlyphConfig;

  readonly topLeft?: UiSdlGraphVisualizationTopLeftGlyphConfig | null;
  withTopLeft(topLeft: IUiSdlGraphVisualizationTopLeftGlyphConfig | null): UiSdlGraphVisualizationNodeGlyphConfig;

  readonly topRight?: UiSdlGraphVisualizationTopRightGlyphConfig | null;
  withTopRight(topRight: IUiSdlGraphVisualizationTopRightGlyphConfig | null): UiSdlGraphVisualizationNodeGlyphConfig;

  readonly bottomLeft?: UiSdlGraphVisualizationBottomLeftGlyphConfig | null;
  withBottomLeft(bottomLeft: IUiSdlGraphVisualizationBottomLeftGlyphConfig | null): UiSdlGraphVisualizationNodeGlyphConfig;

  readonly bottomRight?: UiSdlGraphVisualizationBottomRightGlyphConfig | null;
  withBottomRight(bottomRight: IUiSdlGraphVisualizationBottomRightGlyphConfig | null): UiSdlGraphVisualizationNodeGlyphConfig;
}

