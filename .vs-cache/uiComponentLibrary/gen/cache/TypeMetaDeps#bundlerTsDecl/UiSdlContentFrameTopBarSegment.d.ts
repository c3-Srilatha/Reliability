export interface UiSdlContentFrameTopBarSegment {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlContentFrameTopBarSegment;

  readonly items?: C3.Array<UiSdlComponentContainer | null>;
  withItems(items: C3.Array<UiSdlComponentContainer | null> | Array<IUiSdlComponentContainer | null>): UiSdlContentFrameTopBarSegment;
}

