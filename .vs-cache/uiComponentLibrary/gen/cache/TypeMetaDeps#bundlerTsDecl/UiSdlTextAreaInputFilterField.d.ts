export interface UiSdlTextAreaInputFilterField {

  readonly inputElement?: UiSdlTextAreaInput | null;
  withInputElement(inputElement: IUiSdlTextAreaInput | null): UiSdlTextAreaInputFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlTextAreaInputFilterField;
}

