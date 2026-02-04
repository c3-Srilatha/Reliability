export interface UiSdlTextInputFilterField {

  readonly inputElement?: UiSdlTextInput | null;
  withInputElement(inputElement: IUiSdlTextInput | null): UiSdlTextInputFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlTextInputFilterField;
}

