export interface UiSdlGaugeChartHeader {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlGaugeChartHeader;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlGaugeChartHeader;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlGaugeChartHeader;

  readonly redirectLink?: UiSdlLinkTemplate | null;
  withRedirectLink(redirectLink: IUiSdlLinkTemplate | null): UiSdlGaugeChartHeader;
}

