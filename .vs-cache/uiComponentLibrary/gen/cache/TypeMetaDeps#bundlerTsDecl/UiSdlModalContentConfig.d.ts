export interface UiSdlModalContentConfig {

  readonly text?: string | null | UiSdlDynamicValueSpec | null | null;
  withText(text: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlModalContentConfig;
}

