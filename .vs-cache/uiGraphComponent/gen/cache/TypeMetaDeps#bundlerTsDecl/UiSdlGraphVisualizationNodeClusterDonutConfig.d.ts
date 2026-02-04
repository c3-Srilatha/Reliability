export interface UiSdlGraphVisualizationNodeClusterDonutConfig {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationNodeClusterDonutConfig;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationNodeClusterDonutConfig;

  readonly color: string;
  withColor(color: string): UiSdlGraphVisualizationNodeClusterDonutConfig;

  readonly colorMapping?: C3.Map<string | null, string | null>;
  withColorMapping(colorMapping: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphVisualizationNodeClusterDonutConfig;

  readonly donutType: string;
  withDonutType(donutType: string): UiSdlGraphVisualizationNodeClusterDonutConfig;
}

