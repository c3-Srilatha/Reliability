export interface UiSdlCollapsibleNavigationHeader {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCollapsibleNavigationHeader;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlCollapsibleNavigationHeader;

  readonly titleIcon?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitleIcon(titleIcon: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCollapsibleNavigationHeader;

  readonly description?: string | null | UiSdlDynamicValueSpec | null | null;
  withDescription(description: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCollapsibleNavigationHeader;
}

