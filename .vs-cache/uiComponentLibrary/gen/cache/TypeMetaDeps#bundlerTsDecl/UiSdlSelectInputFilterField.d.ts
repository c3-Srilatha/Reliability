export interface UiSdlSelectInputFilterField {

  readonly inputElement?: UiSdlSelectInputFilter | null;
  withInputElement(inputElement: IUiSdlSelectInputFilter | null): UiSdlSelectInputFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlSelectInputFilterField;
}

