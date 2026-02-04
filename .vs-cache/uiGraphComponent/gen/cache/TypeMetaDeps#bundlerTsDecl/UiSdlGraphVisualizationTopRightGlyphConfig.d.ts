export interface UiSdlGraphVisualizationTopRightGlyphConfig {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationTopRightGlyphConfig;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationTopRightGlyphConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationTopRightGlyphConfig;

  readonly outlineColor?: string | null;
  withOutlineColor(outlineColor: string | null): UiSdlGraphVisualizationTopRightGlyphConfig;

  readonly size?: number | null;
  withSize(size: number | null): UiSdlGraphVisualizationTopRightGlyphConfig;

  readonly glyphType: string;
  withGlyphType(glyphType: string): UiSdlGraphVisualizationTopRightGlyphConfig;

  readonly position?: string | null;
  withPosition(position: string | null): UiSdlGraphVisualizationTopRightGlyphConfig;
}

