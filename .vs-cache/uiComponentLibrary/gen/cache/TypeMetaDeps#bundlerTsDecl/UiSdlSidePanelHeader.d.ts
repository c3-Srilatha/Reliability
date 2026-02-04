export interface UiSdlSidePanelHeader {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlSidePanelHeader;

  readonly subtitle?: string | null | UiSdlDynamicValueSpec | null | UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null | null;
  withSubtitle(subtitle: string | null | IUiSdlDynamicValueSpec | null | IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null | null): UiSdlSidePanelHeader;

  readonly actionButton?: UiSdlActionGroup | null;
  withActionButton(actionButton: IUiSdlActionGroup | null): UiSdlSidePanelHeader;

  readonly titleIcon?: string | null;
  withTitleIcon(titleIcon: string | null): UiSdlSidePanelHeader;

  readonly closeIcon?: string | null;
  withCloseIcon(closeIcon: string | null): UiSdlSidePanelHeader;

  readonly openIcon?: string | null;
  withOpenIcon(openIcon: string | null): UiSdlSidePanelHeader;
}

