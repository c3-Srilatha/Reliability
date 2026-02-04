export interface UiSdlToggleFilterField {

  readonly inputElement?: UiSdlToggle | null;
  withInputElement(inputElement: IUiSdlToggle | null): UiSdlToggleFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlToggleFilterField;
}

