export interface UiSdlTooltipBaseSettings {

  readonly size?: string | null;
  withSize(size: string | null): UiSdlTooltipBaseSettings;

  readonly truncateTooltipLabel?: boolean;
  withTruncateTooltipLabel(truncateTooltipLabel: boolean): UiSdlTooltipBaseSettings;

  readonly truncateTooltipHeader?: boolean;
  withTruncateTooltipHeader(truncateTooltipHeader: boolean): UiSdlTooltipBaseSettings;
}

