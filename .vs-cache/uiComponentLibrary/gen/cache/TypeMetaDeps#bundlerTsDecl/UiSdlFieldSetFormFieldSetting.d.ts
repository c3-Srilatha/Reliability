export interface UiSdlFieldSetFormFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlFieldSetFormFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFieldSetFormFieldSetting;

  readonly value?: any;
  withValue(value: any): UiSdlFieldSetFormFieldSetting;

  readonly defaultValue?: any;
  withDefaultValue(defaultValue: any): UiSdlFieldSetFormFieldSetting;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlFieldSetFormFieldSetting;

  readonly dataPropSpecs?: C3.Array<UiSdlFormDataToPropSpec | null>;
  withDataPropSpecs(dataPropSpecs: C3.Array<UiSdlFormDataToPropSpec | null> | Array<IUiSdlFormDataToPropSpec | null>): UiSdlFieldSetFormFieldSetting;

  readonly updateOnDataHandleWithContextVar?: boolean;
  withUpdateOnDataHandleWithContextVar(updateOnDataHandleWithContextVar: boolean): UiSdlFieldSetFormFieldSetting;

  readonly componentRef?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withComponentRef(componentRef: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlFieldSetFormFieldSetting;

  readonly label: string | null | UiSdlDynamicValueSpec | null;
  withLabel(label: string | null | IUiSdlDynamicValueSpec | null): UiSdlFieldSetFormFieldSetting;

  readonly hintText?: string | null | UiSdlDynamicValueSpec | null | null;
  withHintText(hintText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFieldSetFormFieldSetting;

  readonly infoTooltipText?: string | null | UiSdlDynamicValueSpec | null | null;
  withInfoTooltipText(infoTooltipText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFieldSetFormFieldSetting;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlFieldSetFormFieldSetting;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlFieldSetFormFieldSetting;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlFieldSetFormFieldSetting;

  readonly inputElement?: UiSdlCustomInputBase | null | UiSdlTextInput | null | UiSdlTextAreaInput | null | UiSdlDateTimeInput | null | UiSdlToggle | null | UiSdlNumberInput | null | UiSdlNumberRangeInput | null | UiSdlDateTimeRangeInput | null | UiSdlDateTimeOpenRangeInput | null | UiSdlSelectInput | null | UiSdlIconSelectInput | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | UiSdlSegmentedButton | null | UiSdlCheckboxTree | null | UiSdlSlider | null | UiSdlPassword | null | UiSdlFieldGroup | null | UiSdlGroupedInput | null | UiSdlRadioButtonGroup | null | UiSdlRadioButtonWithInputValueGroup | null | null;
  withInputElement(inputElement: IUiSdlCustomInputBase | null | IUiSdlTextInput | null | IUiSdlTextAreaInput | null | IUiSdlDateTimeInput | null | IUiSdlToggle | null | IUiSdlNumberInput | null | IUiSdlNumberRangeInput | null | IUiSdlDateTimeRangeInput | null | IUiSdlDateTimeOpenRangeInput | null | IUiSdlSelectInput | null | IUiSdlIconSelectInput | null | IUiSdlSingleSearch | null | IUiSdlMultipleSearch | null | IUiSdlSegmentedButton | null | IUiSdlCheckboxTree | null | IUiSdlSlider | null | IUiSdlPassword | null | IUiSdlFieldGroup | null | IUiSdlGroupedInput | null | IUiSdlRadioButtonGroup | null | IUiSdlRadioButtonWithInputValueGroup | null | null): UiSdlFieldSetFormFieldSetting;

  readonly width?: number | null | number | null | UiSdlFormWidth | null | null;
  withWidth(width: number | null | number | null | IUiSdlFormWidth | null | null): UiSdlFieldSetFormFieldSetting;

  readonly maxWidth?: number | null | number | null | UiSdlFormWidth | null | null;
  withMaxWidth(maxWidth: number | null | number | null | IUiSdlFormWidth | null | null): UiSdlFieldSetFormFieldSetting;
}

