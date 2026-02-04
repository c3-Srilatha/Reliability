export interface UiSdlFieldSetFilterFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlFieldSetFilterFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFieldSetFilterFieldSetting;

  readonly label: string;
  withLabel(label: string): UiSdlFieldSetFilterFieldSetting;

  readonly hintText?: string | null;
  withHintText(hintText: string | null): UiSdlFieldSetFilterFieldSetting;

  readonly updateOnDataHandleWithContextVar?: boolean;
  withUpdateOnDataHandleWithContextVar(updateOnDataHandleWithContextVar: boolean): UiSdlFieldSetFilterFieldSetting;

  readonly filterElement?: UiSdlFieldSetFilterField<any> | null | UiSdlRadioButtonGroupFilterField | null | UiSdlTextInputFilterField | null | UiSdlTextAreaInputFilterField | null | UiSdlSelectInputFilterField | null | UiSdlIconSelectInputFilterField | null | UiSdlSingleSearchFilterField | null | UiSdlMultipleSearchFilterField | null | UiSdlSegmentedButtonFilterField | null | UiSdlToggleFilterField | null | UiSdlCheckboxTreeFilterField | null | UiSdlDateTimeInputFilterField | null | UiSdlNumberComparatorFilterField | null | UiSdlNumberRangeInputFilterField | null | UiSdlDateTimeRangeInputFilterField | null | UiSdlRadioButtonWithInputValueGroupFilterField | null | null;
  withFilterElement(filterElement: IUiSdlFieldSetFilterField<any> | null | IUiSdlRadioButtonGroupFilterField | null | IUiSdlTextInputFilterField | null | IUiSdlTextAreaInputFilterField | null | IUiSdlSelectInputFilterField | null | IUiSdlIconSelectInputFilterField | null | IUiSdlSingleSearchFilterField | null | IUiSdlMultipleSearchFilterField | null | IUiSdlSegmentedButtonFilterField | null | IUiSdlToggleFilterField | null | IUiSdlCheckboxTreeFilterField | null | IUiSdlDateTimeInputFilterField | null | IUiSdlNumberComparatorFilterField | null | IUiSdlNumberRangeInputFilterField | null | IUiSdlDateTimeRangeInputFilterField | null | IUiSdlRadioButtonWithInputValueGroupFilterField | null | null): UiSdlFieldSetFilterFieldSetting;

  readonly conditionalFilter?: UiSdlFieldSetFilterFieldConditionalFilter | null;
  withConditionalFilter(conditionalFilter: IUiSdlFieldSetFilterFieldConditionalFilter | null): UiSdlFieldSetFilterFieldSetting;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlFieldSetFilterFieldSetting;

  readonly componentsToFilterMapping?: UiSdlFieldSetFilterFieldComponentToFilterMapping | null;
  withComponentsToFilterMapping(componentsToFilterMapping: IUiSdlFieldSetFilterFieldComponentToFilterMapping | null): UiSdlFieldSetFilterFieldSetting;
}

