export interface UiSdlSingleSearchFilterField {

  readonly inputElement?: UiSdlSingleSearchFilter | null;
  withInputElement(inputElement: IUiSdlSingleSearchFilter | null): UiSdlSingleSearchFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlSingleSearchFilterField;
}

