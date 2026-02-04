export interface UiSdlGraphVisualizationFillColorByPropertyStrategyStepped {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationFillColorByPropertyStrategyStepped;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationFillColorByPropertyStrategyStepped;

  readonly fillColorSteppedValues?: C3.Array<number | null>;
  withFillColorSteppedValues(fillColorSteppedValues: C3.Array<number | null> | Array<number | null>): UiSdlGraphVisualizationFillColorByPropertyStrategyStepped;

  readonly fillColorSteppedColors?: C3.Array<string | null>;
  withFillColorSteppedColors(fillColorSteppedColors: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationFillColorByPropertyStrategyStepped;
}

