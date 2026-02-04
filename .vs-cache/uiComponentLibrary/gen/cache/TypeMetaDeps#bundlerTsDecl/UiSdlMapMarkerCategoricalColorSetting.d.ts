export interface UiSdlMapMarkerCategoricalColorSetting {

  readonly categoryColors: C3.Array<UiSdlMapCategoryColorSetting | null>;
  withCategoryColors(categoryColors: C3.Array<UiSdlMapCategoryColorSetting | null> | Array<IUiSdlMapCategoryColorSetting | null>): UiSdlMapMarkerCategoricalColorSetting;
}

