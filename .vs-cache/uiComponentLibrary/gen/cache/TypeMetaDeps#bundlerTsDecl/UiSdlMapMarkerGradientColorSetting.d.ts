export interface UiSdlMapMarkerGradientColorSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMapMarkerGradientColorSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlMapMarkerGradientColorSetting;

  readonly minimum?: number | null;
  withMinimum(minimum: number | null): UiSdlMapMarkerGradientColorSetting;

  readonly maximum?: number | null;
  withMaximum(maximum: number | null): UiSdlMapMarkerGradientColorSetting;

  readonly gradient?: string | null;
  withGradient(gradient: string | null): UiSdlMapMarkerGradientColorSetting;
}

