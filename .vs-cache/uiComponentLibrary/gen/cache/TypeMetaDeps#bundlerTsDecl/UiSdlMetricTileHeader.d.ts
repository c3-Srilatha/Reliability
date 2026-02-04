export interface UiSdlMetricTileHeader {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMetricTileHeader;

  readonly redirectLink?: UiSdlLinkTemplate | null;
  withRedirectLink(redirectLink: IUiSdlLinkTemplate | null): UiSdlMetricTileHeader;

  readonly iconConfig?: UiSdlMetricTileHeaderIconConfig | null;
  withIconConfig(iconConfig: IUiSdlMetricTileHeaderIconConfig | null): UiSdlMetricTileHeader;
}

