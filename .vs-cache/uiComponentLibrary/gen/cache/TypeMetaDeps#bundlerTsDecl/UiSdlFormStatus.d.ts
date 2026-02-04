export interface UiSdlFormStatus {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFormStatus;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlFormStatus;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlFormStatus;
}

