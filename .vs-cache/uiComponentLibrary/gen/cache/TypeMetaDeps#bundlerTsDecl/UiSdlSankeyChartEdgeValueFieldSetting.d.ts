export interface UiSdlSankeyChartEdgeValueFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlSankeyChartEdgeValueFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlSankeyChartEdgeValueFieldSetting;

  readonly tooltipDecimalPrecision?: number | null;
  withTooltipDecimalPrecision(tooltipDecimalPrecision: number | null): UiSdlSankeyChartEdgeValueFieldSetting;
}

