export interface UiSdlFieldSetInputFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlFieldSetInputFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFieldSetInputFieldSetting;

  readonly label: string;
  withLabel(label: string): UiSdlFieldSetInputFieldSetting;

  readonly hintText?: string | null;
  withHintText(hintText: string | null): UiSdlFieldSetInputFieldSetting;

  readonly updateOnDataHandleWithContextVar?: boolean;
  withUpdateOnDataHandleWithContextVar(updateOnDataHandleWithContextVar: boolean): UiSdlFieldSetInputFieldSetting;

  readonly inputElement?: UiSdlCustomInputBase | null | UiSdlTextInput | null | UiSdlTextAreaInput | null | UiSdlSelectInput | null | UiSdlIconSelectInput | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | UiSdlSegmentedButton | null | UiSdlToggle | null | UiSdlCheckboxTree | null | UiSdlDateTimeInput | null | UiSdlNumberComparator | null | UiSdlNumberRangeInput | null | UiSdlDateTimeRangeInput | null | UiSdlRadioButtonGroup | null | null;
  withInputElement(inputElement: IUiSdlCustomInputBase | null | IUiSdlTextInput | null | IUiSdlTextAreaInput | null | IUiSdlSelectInput | null | IUiSdlIconSelectInput | null | IUiSdlSingleSearch | null | IUiSdlMultipleSearch | null | IUiSdlSegmentedButton | null | IUiSdlToggle | null | IUiSdlCheckboxTree | null | IUiSdlDateTimeInput | null | IUiSdlNumberComparator | null | IUiSdlNumberRangeInput | null | IUiSdlDateTimeRangeInput | null | IUiSdlRadioButtonGroup | null | null): UiSdlFieldSetInputFieldSetting;

  readonly metricBasedComponentsToInputMapping?: UiSdlFieldSetInputFieldComponentToInputMapping | null;
  withMetricBasedComponentsToInputMapping(metricBasedComponentsToInputMapping: IUiSdlFieldSetInputFieldComponentToInputMapping | null): UiSdlFieldSetInputFieldSetting;
}

