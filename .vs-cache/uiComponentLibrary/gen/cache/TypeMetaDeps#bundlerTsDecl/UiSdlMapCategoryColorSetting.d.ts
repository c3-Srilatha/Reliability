export interface UiSdlMapCategoryColorSetting {

  readonly label: string;
  withLabel(label: string): UiSdlMapCategoryColorSetting;

  readonly color: string;
  withColor(color: string): UiSdlMapCategoryColorSetting;
}

