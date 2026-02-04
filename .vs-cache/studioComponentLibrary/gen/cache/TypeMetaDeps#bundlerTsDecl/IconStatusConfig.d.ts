export interface IconStatusConfig {

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): IconStatusConfig;

  readonly color?: string | null;
  withColor(color: string | null): IconStatusConfig;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): IconStatusConfig;

  readonly text?: string | null;
  withText(text: string | null): IconStatusConfig;

  readonly size?: string | null;
  withSize(size: string | null): IconStatusConfig;

  readonly graphicType?: string | null;
  withGraphicType(graphicType: string | null): IconStatusConfig;
}

