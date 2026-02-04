export interface UiSdlNavMenuItem {

  readonly id: string;
  withId(id: string): UiSdlNavMenuItem;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlNavMenuItem;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): UiSdlNavMenuItem;

  readonly subMenu?: UiSdlNavSubMenu | null;
  withSubMenu(subMenu: IUiSdlNavSubMenu | null): UiSdlNavMenuItem;

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlNavMenuItem;

  readonly redirectRoute?: UiSdlRoute | null;
  withRedirectRoute(redirectRoute: IUiSdlRoute | null): UiSdlNavMenuItem;

  readonly hoveredSubMenu?: UiSdlNavSubMenu | null;
  withHoveredSubMenu(hoveredSubMenu: IUiSdlNavSubMenu | null): UiSdlNavMenuItem;
}

