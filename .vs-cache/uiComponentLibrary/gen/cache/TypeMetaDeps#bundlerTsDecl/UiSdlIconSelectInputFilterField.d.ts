export interface UiSdlIconSelectInputFilterField {

  readonly inputElement?: UiSdlIconSelectInput | null;
  withInputElement(inputElement: IUiSdlIconSelectInput | null): UiSdlIconSelectInputFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlIconSelectInputFilterField;
}

