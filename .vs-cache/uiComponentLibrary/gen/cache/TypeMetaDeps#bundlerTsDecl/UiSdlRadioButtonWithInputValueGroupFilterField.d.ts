export interface UiSdlRadioButtonWithInputValueGroupFilterField {

  readonly inputElement?: UiSdlRadioButtonWithInputValueGroup | null;
  withInputElement(inputElement: IUiSdlRadioButtonWithInputValueGroup | null): UiSdlRadioButtonWithInputValueGroupFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlRadioButtonWithInputValueGroupFilterField;
}

