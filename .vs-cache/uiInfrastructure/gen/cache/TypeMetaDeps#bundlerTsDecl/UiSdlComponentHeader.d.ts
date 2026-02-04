export interface UiSdlComponentHeader {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlComponentHeader;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlComponentHeader;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlComponentHeader;

  readonly redirectLink?: UiSdlLinkTemplate | null;
  withRedirectLink(redirectLink: IUiSdlLinkTemplate | null): UiSdlComponentHeader;

  readonly hoverDescription?: string | null;
  withHoverDescription(hoverDescription: string | null): UiSdlComponentHeader;
}

