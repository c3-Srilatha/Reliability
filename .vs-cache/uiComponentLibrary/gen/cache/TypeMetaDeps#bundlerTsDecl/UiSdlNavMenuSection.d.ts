export interface UiSdlNavMenuSection {

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlNavMenuSection;

  readonly items?: C3.Array<UiSdlNavMenuItem | null>;
  withItems(items: C3.Array<UiSdlNavMenuItem | null> | Array<IUiSdlNavMenuItem | null>): UiSdlNavMenuSection;
}

