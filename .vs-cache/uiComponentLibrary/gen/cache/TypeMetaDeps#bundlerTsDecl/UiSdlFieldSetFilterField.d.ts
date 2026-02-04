export interface UiSdlFieldSetFilterField<I> {

  readonly inputElement?: I | null;
  withInputElement(inputElement: I | null): UiSdlFieldSetFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlFieldSetFilterField;
}

