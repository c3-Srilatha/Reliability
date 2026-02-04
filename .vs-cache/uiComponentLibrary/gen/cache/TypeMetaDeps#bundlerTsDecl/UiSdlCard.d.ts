export interface UiSdlCard {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCard;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCard;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCard;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlCard;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCard;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCard;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCard;

  readonly content?: C3.Array<UiSdlComponentRef<UiSdlComponent | null> | null | UiSdlCard | null | null>;
  withContent(content: C3.Array<UiSdlComponentRef<UiSdlComponent | null> | null | UiSdlCard | null | null> | Array<IUiSdlComponentRef<UiSdlComponent | null> | null | IUiSdlCard | null | null>): UiSdlCard;

  readonly contentDisplay?: string | null;
  withContentDisplay(contentDisplay: string | null): UiSdlCard;

  readonly nestedStyling?: string | null;
  withNestedStyling(nestedStyling: string | null): UiSdlCard;

  readonly topBottomPadding?: boolean;
  withTopBottomPadding(topBottomPadding: boolean): UiSdlCard;

  readonly leftRightPadding?: boolean;
  withLeftRightPadding(leftRightPadding: boolean): UiSdlCard;
}

