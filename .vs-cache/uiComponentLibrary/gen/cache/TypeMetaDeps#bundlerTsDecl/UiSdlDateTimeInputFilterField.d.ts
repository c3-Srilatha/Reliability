export interface UiSdlDateTimeInputFilterField {

  readonly inputElement?: UiSdlDateTimeInput | null;
  withInputElement(inputElement: IUiSdlDateTimeInput | null): UiSdlDateTimeInputFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlDateTimeInputFilterField;
}

