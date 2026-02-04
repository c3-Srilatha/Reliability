export interface UiSdlRadioButtonWithInputValue {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlRadioButtonWithInputValue;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlRadioButtonWithInputValue;

  readonly value?: any;
  withValue(value: any): UiSdlRadioButtonWithInputValue;

  readonly defaultValue?: any;
  withDefaultValue(defaultValue: any): UiSdlRadioButtonWithInputValue;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlRadioButtonWithInputValue;

  readonly dataPropSpecs?: C3.Array<UiSdlFormDataToPropSpec | null>;
  withDataPropSpecs(dataPropSpecs: C3.Array<UiSdlFormDataToPropSpec | null> | Array<IUiSdlFormDataToPropSpec | null>): UiSdlRadioButtonWithInputValue;

  readonly inputElement?: UiSdlTextInput | null | UiSdlTextAreaInput | null | UiSdlDateTimeInput | null | UiSdlToggle | null | UiSdlNumberInput | null | UiSdlNumberRangeInput | null | UiSdlDateTimeRangeInput | null | UiSdlSelectInput | null | UiSdlIconSelectInput | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | UiSdlSegmentedButton | null | UiSdlCheckboxTree | null | UiSdlSlider | null | UiSdlPassword | null | UiSdlFieldGroup | null | UiSdlRadioButtonGroup | null | null;
  withInputElement(inputElement: IUiSdlTextInput | null | IUiSdlTextAreaInput | null | IUiSdlDateTimeInput | null | IUiSdlToggle | null | IUiSdlNumberInput | null | IUiSdlNumberRangeInput | null | IUiSdlDateTimeRangeInput | null | IUiSdlSelectInput | null | IUiSdlIconSelectInput | null | IUiSdlSingleSearch | null | IUiSdlMultipleSearch | null | IUiSdlSegmentedButton | null | IUiSdlCheckboxTree | null | IUiSdlSlider | null | IUiSdlPassword | null | IUiSdlFieldGroup | null | IUiSdlRadioButtonGroup | null | null): UiSdlRadioButtonWithInputValue;

  readonly label?: string | UiSdlDynamicValueSpec | null | null;
  withLabel(label: string | IUiSdlDynamicValueSpec | null | null): UiSdlRadioButtonWithInputValue;
}

