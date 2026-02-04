export interface UiSdlWithHeader {

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlWithHeader;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlWithHeader;

  readonly infoTooltipText?: string | null;
  withInfoTooltipText(infoTooltipText: string | null): UiSdlWithHeader;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlWithHeader;

  readonly actionButtonsCollapseThreshold?: number | null;
  withActionButtonsCollapseThreshold(actionButtonsCollapseThreshold: number | null): UiSdlWithHeader;

  readonly actionButtons?: C3.Array<UiSdlAction | null>;
  withActionButtons(actionButtons: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlWithHeader;
}

