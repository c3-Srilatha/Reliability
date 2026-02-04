export interface UiSdlMultiStepFormFieldSet {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMultiStepFormFieldSet;

  readonly secondaryText?: string | null | UiSdlDynamicValueSpec | null | null;
  withSecondaryText(secondaryText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMultiStepFormFieldSet;

  readonly fieldSets?: C3.Array<UiSdlFormFieldSet | null>;
  withFieldSets(fieldSets: C3.Array<UiSdlFormFieldSet | null> | Array<IUiSdlFormFieldSet | null>): UiSdlMultiStepFormFieldSet;
}

