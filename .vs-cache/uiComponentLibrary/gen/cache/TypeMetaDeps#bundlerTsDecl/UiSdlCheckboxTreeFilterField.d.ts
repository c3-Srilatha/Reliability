export interface UiSdlCheckboxTreeFilterField {

  readonly inputElement?: UiSdlCheckboxTreeFilter | null;
  withInputElement(inputElement: IUiSdlCheckboxTreeFilter | null): UiSdlCheckboxTreeFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlCheckboxTreeFilterField;
}

