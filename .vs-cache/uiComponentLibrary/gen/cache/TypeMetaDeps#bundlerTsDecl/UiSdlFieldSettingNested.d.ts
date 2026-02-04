export interface UiSdlFieldSettingNested {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlFieldSettingNested;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFieldSettingNested;

  readonly value?: any;
  withValue(value: any): UiSdlFieldSettingNested;

  readonly defaultValue?: any;
  withDefaultValue(defaultValue: any): UiSdlFieldSettingNested;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlFieldSettingNested;

  readonly dataPropSpecs?: C3.Array<UiSdlFormDataToPropSpec | null>;
  withDataPropSpecs(dataPropSpecs: C3.Array<UiSdlFormDataToPropSpec | null> | Array<IUiSdlFormDataToPropSpec | null>): UiSdlFieldSettingNested;

  readonly inputElement?: UiSdlTextInput | null | UiSdlTextAreaInput | null | UiSdlDateTimeInput | null | UiSdlToggle | null | UiSdlNumberInput | null | UiSdlNumberRangeInput | null | UiSdlDateTimeRangeInput | null | UiSdlSelectInput | null | UiSdlIconSelectInput | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | UiSdlSegmentedButton | null | UiSdlCheckboxTree | null | UiSdlSlider | null | UiSdlPassword | null | UiSdlFieldGroup | null | UiSdlRadioButtonGroup | null | null;
  withInputElement(inputElement: IUiSdlTextInput | null | IUiSdlTextAreaInput | null | IUiSdlDateTimeInput | null | IUiSdlToggle | null | IUiSdlNumberInput | null | IUiSdlNumberRangeInput | null | IUiSdlDateTimeRangeInput | null | IUiSdlSelectInput | null | IUiSdlIconSelectInput | null | IUiSdlSingleSearch | null | IUiSdlMultipleSearch | null | IUiSdlSegmentedButton | null | IUiSdlCheckboxTree | null | IUiSdlSlider | null | IUiSdlPassword | null | IUiSdlFieldGroup | null | IUiSdlRadioButtonGroup | null | null): UiSdlFieldSettingNested;
}

