export interface UiSdlNavSubMenu {

  readonly logoImageUrl?: string | null;
  withLogoImageUrl(logoImageUrl: string | null): UiSdlNavSubMenu;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlNavSubMenu;

  readonly subtitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withSubtitle(subtitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlNavSubMenu;

  readonly detail?: string | null | UiSdlDynamicValueSpec | null | null;
  withDetail(detail: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlNavSubMenu;

  readonly items: C3.Array<UiSdlNavMenuItem | null | UiSdlNavMenuSection | null | null>;
  withItems(items: C3.Array<UiSdlNavMenuItem | null | UiSdlNavMenuSection | null | null> | Array<IUiSdlNavMenuItem | null | IUiSdlNavMenuSection | null | null>): UiSdlNavSubMenu;
}

