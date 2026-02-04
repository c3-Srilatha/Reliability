export interface UiSdlSelectedGridItemConfig {

  readonly itemType?: string | null;
  withItemType(itemType: string | null): UiSdlSelectedGridItemConfig;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSelectedGridItemConfig;
}

