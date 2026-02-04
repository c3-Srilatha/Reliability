export interface UiSdlGraphVisualizationBottomRightGlyphConfig {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationBottomRightGlyphConfig;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationBottomRightGlyphConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationBottomRightGlyphConfig;

  readonly outlineColor?: string | null;
  withOutlineColor(outlineColor: string | null): UiSdlGraphVisualizationBottomRightGlyphConfig;

  readonly size?: number | null;
  withSize(size: number | null): UiSdlGraphVisualizationBottomRightGlyphConfig;

  readonly glyphType: string;
  withGlyphType(glyphType: string): UiSdlGraphVisualizationBottomRightGlyphConfig;

  readonly position?: string | null;
  withPosition(position: string | null): UiSdlGraphVisualizationBottomRightGlyphConfig;
}

