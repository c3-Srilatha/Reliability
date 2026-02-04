export interface UiSdlDateTimeRangeInputFilterField {

  readonly inputElement?: UiSdlDateTimeRangeInput | null;
  withInputElement(inputElement: IUiSdlDateTimeRangeInput | null): UiSdlDateTimeRangeInputFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlDateTimeRangeInputFilterField;
}

