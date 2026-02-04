export interface UiSdlMultipleSearchFilterField {

  readonly inputElement?: UiSdlMultipleSearchFilter | null;
  withInputElement(inputElement: IUiSdlMultipleSearchFilter | null): UiSdlMultipleSearchFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlMultipleSearchFilterField;
}

