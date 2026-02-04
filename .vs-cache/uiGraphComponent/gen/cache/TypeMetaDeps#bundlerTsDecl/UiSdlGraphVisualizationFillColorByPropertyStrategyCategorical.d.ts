export interface UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical;

  readonly colorMap?: C3.Map<string | null, C3.Array<string | null>>;
  withColorMap(colorMap: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical;
}

