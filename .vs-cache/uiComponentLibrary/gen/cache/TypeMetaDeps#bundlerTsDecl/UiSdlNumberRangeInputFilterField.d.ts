export interface UiSdlNumberRangeInputFilterField {

  readonly inputElement?: UiSdlNumberRangeInput | null;
  withInputElement(inputElement: IUiSdlNumberRangeInput | null): UiSdlNumberRangeInputFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlNumberRangeInputFilterField;
}

