export interface UiSdlGraphVisualizationBottomLeftGlyphConfig {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationBottomLeftGlyphConfig;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationBottomLeftGlyphConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationBottomLeftGlyphConfig;

  readonly outlineColor?: string | null;
  withOutlineColor(outlineColor: string | null): UiSdlGraphVisualizationBottomLeftGlyphConfig;

  readonly size?: number | null;
  withSize(size: number | null): UiSdlGraphVisualizationBottomLeftGlyphConfig;

  readonly glyphType: string;
  withGlyphType(glyphType: string): UiSdlGraphVisualizationBottomLeftGlyphConfig;

  readonly position?: string | null;
  withPosition(position: string | null): UiSdlGraphVisualizationBottomLeftGlyphConfig;
}

