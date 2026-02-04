export interface UiSdlSankeyChartNodeValueFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlSankeyChartNodeValueFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlSankeyChartNodeValueFieldSetting;

  readonly labelDecimalPrecision?: number | null;
  withLabelDecimalPrecision(labelDecimalPrecision: number | null): UiSdlSankeyChartNodeValueFieldSetting;
}

