export interface UiSdlDiagramViewerTooltipHeader {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDiagramViewerTooltipHeader;

  readonly subtitle?: string | null | UiSdlDynamicValueSpec | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withSubtitle(subtitle: string | null | IUiSdlDynamicValueSpec | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDiagramViewerTooltipHeader;

  readonly icon?: string | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withIcon(icon: string | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDiagramViewerTooltipHeader;
}

