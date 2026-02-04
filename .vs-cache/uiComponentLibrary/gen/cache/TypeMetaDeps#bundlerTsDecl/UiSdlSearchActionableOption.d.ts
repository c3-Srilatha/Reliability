export interface UiSdlSearchActionableOption {

  readonly rawText?: string | null | UiSdlDynamicValueSpec | null | null;
  withRawText(rawText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlSearchActionableOption;

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlSearchActionableOption;
}

