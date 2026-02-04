export interface UiSdlCardReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCardReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCardReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCardReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlCardReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCardReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCardReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCardReact;

  readonly content?: C3.Array<UiSdlComponentRef<UiSdlComponent | null> | null | UiSdlCard | null | null>;
  withContent(content: C3.Array<UiSdlComponentRef<UiSdlComponent | null> | null | UiSdlCard | null | null> | Array<IUiSdlComponentRef<UiSdlComponent | null> | null | IUiSdlCard | null | null>): UiSdlCardReact;

  readonly contentDisplay?: string | null;
  withContentDisplay(contentDisplay: string | null): UiSdlCardReact;

  readonly nestedStyling?: string | null;
  withNestedStyling(nestedStyling: string | null): UiSdlCardReact;

  readonly topBottomPadding?: boolean;
  withTopBottomPadding(topBottomPadding: boolean): UiSdlCardReact;

  readonly leftRightPadding?: boolean;
  withLeftRightPadding(leftRightPadding: boolean): UiSdlCardReact;
}

