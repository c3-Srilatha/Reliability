export interface UiSdlMapCategoryShapeSetting {

  readonly label: string;
  withLabel(label: string): UiSdlMapCategoryShapeSetting;

  readonly shape: string;
  withShape(shape: string): UiSdlMapCategoryShapeSetting;
}

