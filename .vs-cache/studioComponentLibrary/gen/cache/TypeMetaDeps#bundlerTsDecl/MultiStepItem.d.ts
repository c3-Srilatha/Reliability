export interface MultiStepItem {

  readonly step: number;
  withStep(step: number): MultiStepItem;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): MultiStepItem;
}

