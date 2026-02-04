export interface UiSdlSegmentedButtonFilterField {

  readonly inputElement?: UiSdlSegmentedButton | null;
  withInputElement(inputElement: IUiSdlSegmentedButton | null): UiSdlSegmentedButtonFilterField;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlSegmentedButtonFilterField;
}

