export interface UiSdlTreeListIconSetting {

  readonly category: string;
  withCategory(category: string): UiSdlTreeListIconSetting;

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlTreeListIconSetting;

  readonly iconColor?: string | null;
  withIconColor(iconColor: string | null): UiSdlTreeListIconSetting;
}

