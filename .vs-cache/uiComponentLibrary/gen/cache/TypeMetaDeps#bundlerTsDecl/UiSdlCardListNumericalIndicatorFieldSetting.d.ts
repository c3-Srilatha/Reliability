export interface UiSdlCardListNumericalIndicatorFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlCardListNumericalIndicatorFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlCardListNumericalIndicatorFieldSetting;

  readonly minimum?: number | null;
  withMinimum(minimum: number | null): UiSdlCardListNumericalIndicatorFieldSetting;

  readonly maximum?: number | null;
  withMaximum(maximum: number | null): UiSdlCardListNumericalIndicatorFieldSetting;

  readonly gradient?: string | null;
  withGradient(gradient: string | null): UiSdlCardListNumericalIndicatorFieldSetting;

  readonly showNumber?: boolean;
  withShowNumber(showNumber: boolean): UiSdlCardListNumericalIndicatorFieldSetting;
}

