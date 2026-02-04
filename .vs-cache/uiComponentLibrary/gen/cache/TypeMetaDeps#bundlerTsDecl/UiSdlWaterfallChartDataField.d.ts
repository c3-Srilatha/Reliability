export interface UiSdlWaterfallChartDataField {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlWaterfallChartDataField;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlWaterfallChartDataField;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlWaterfallChartDataField;

  readonly aggregationSelector?: string | null;
  withAggregationSelector(aggregationSelector: string | null): UiSdlWaterfallChartDataField;
}

