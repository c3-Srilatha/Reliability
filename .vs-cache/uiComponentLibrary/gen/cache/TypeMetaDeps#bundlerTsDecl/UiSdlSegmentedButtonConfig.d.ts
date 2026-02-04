export interface UiSdlSegmentedButtonConfig {

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlSegmentedButtonConfig;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlSegmentedButtonConfig;

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlSegmentedButtonConfig;
}

