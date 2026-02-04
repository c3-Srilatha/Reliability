export interface UiSdlRadioButtonGroupFilterField {

  readonly inputElement?: UiSdlRadioButtonGroup | null;
  withInputElement(inputElement: IUiSdlRadioButtonGroup | null): UiSdlRadioButtonGroupFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlRadioButtonGroupFilterField;
}

