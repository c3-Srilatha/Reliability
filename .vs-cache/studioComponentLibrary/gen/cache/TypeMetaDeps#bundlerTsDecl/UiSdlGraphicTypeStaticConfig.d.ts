export interface UiSdlGraphicTypeStaticConfig {

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlGraphicTypeStaticConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphicTypeStaticConfig;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphicTypeStaticConfig;

  readonly text?: string | null;
  withText(text: string | null): UiSdlGraphicTypeStaticConfig;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphicTypeStaticConfig;
}

