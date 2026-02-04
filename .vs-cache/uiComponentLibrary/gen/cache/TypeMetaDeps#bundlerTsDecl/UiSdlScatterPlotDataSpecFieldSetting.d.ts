export interface UiSdlScatterPlotDataSpecFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlScatterPlotDataSpecFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlScatterPlotDataSpecFieldSetting;

  readonly label: string;
  withLabel(label: string): UiSdlScatterPlotDataSpecFieldSetting;

  readonly labelIcon?: string | null;
  withLabelIcon(labelIcon: string | null): UiSdlScatterPlotDataSpecFieldSetting;
}

