export interface UiSdlScatterPlotSizeSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlScatterPlotSizeSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlScatterPlotSizeSetting;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlScatterPlotSizeSetting;
}

