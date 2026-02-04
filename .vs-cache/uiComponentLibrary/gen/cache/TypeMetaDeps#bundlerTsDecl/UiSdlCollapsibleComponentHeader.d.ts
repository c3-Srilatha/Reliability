export interface UiSdlCollapsibleComponentHeader {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCollapsibleComponentHeader;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlCollapsibleComponentHeader;

  readonly secondaryTitle?: string | null;
  withSecondaryTitle(secondaryTitle: string | null): UiSdlCollapsibleComponentHeader;

  readonly secondaryTitleType?: string | null;
  withSecondaryTitleType(secondaryTitleType: string | null): UiSdlCollapsibleComponentHeader;
}

