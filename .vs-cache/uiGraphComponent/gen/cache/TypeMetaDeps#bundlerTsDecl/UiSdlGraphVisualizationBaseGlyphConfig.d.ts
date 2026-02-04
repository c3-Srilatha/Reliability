export interface UiSdlGraphVisualizationBaseGlyphConfig {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationBaseGlyphConfig;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationBaseGlyphConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationBaseGlyphConfig;

  readonly outlineColor?: string | null;
  withOutlineColor(outlineColor: string | null): UiSdlGraphVisualizationBaseGlyphConfig;

  readonly size?: number | null;
  withSize(size: number | null): UiSdlGraphVisualizationBaseGlyphConfig;

  readonly glyphType: string;
  withGlyphType(glyphType: string): UiSdlGraphVisualizationBaseGlyphConfig;
}

