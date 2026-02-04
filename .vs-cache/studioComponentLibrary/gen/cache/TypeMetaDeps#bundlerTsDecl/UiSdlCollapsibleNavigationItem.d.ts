export interface UiSdlCollapsibleNavigationItem {

  readonly id?: string | UiSdlFieldBasedDataSpecSetting | null | null;
  withId(id: string | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlCollapsibleNavigationItem;

  readonly label?: string | UiSdlFieldBasedDataSpecSetting | null | null;
  withLabel(label: string | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlCollapsibleNavigationItem;

  readonly icon?: string | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withIcon(icon: string | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlCollapsibleNavigationItem;

  readonly subItems?: C3.Array<UiSdlCollapsibleNavigationItem | null>;
  withSubItems(subItems: C3.Array<UiSdlCollapsibleNavigationItem | null> | Array<IUiSdlCollapsibleNavigationItem | null>): UiSdlCollapsibleNavigationItem;

  readonly active?: boolean | UiSdlFieldBasedDataSpecSetting | null | null;
  withActive(active: boolean | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlCollapsibleNavigationItem;

  readonly expanded?: boolean | UiSdlFieldBasedDataSpecSetting | null | null;
  withExpanded(expanded: boolean | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlCollapsibleNavigationItem;

  readonly redirectLink?: UiSdlRoute | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withRedirectLink(redirectLink: IUiSdlRoute | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlCollapsibleNavigationItem;

  readonly disabledReason?: any | null;
  withDisabledReason(disabledReason: any | null): UiSdlCollapsibleNavigationItem;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlCollapsibleNavigationItem;
}

