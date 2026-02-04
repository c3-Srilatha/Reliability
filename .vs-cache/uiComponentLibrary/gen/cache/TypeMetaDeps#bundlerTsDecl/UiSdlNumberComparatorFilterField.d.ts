export interface UiSdlNumberComparatorFilterField {

  readonly inputElement?: UiSdlNumberComparator | null;
  withInputElement(inputElement: IUiSdlNumberComparator | null): UiSdlNumberComparatorFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlNumberComparatorFilterField;
}

