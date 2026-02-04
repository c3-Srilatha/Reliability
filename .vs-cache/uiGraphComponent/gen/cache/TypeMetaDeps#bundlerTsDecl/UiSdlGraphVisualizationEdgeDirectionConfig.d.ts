export interface UiSdlGraphVisualizationEdgeDirectionConfig {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationEdgeDirectionConfig;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationEdgeDirectionConfig;

  readonly unidirectional?: C3.Array<string | null>;
  withUnidirectional(unidirectional: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationEdgeDirectionConfig;

  readonly bidirectional?: C3.Array<string | null>;
  withBidirectional(bidirectional: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationEdgeDirectionConfig;

  readonly reverse?: C3.Array<string | null>;
  withReverse(reverse: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationEdgeDirectionConfig;
}

