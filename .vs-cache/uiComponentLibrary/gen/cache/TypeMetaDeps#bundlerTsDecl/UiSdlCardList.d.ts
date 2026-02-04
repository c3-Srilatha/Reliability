export interface UiSdlCardList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCardList;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCardList;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCardList;

  readonly dataSpec?: UiSdlCardListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCardListDataSpec | null): UiSdlCardList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCardList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCardList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCardList;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlCardList;

  readonly primaryActionButton?: UiSdlAction | null;
  withPrimaryActionButton(primaryActionButton: IUiSdlAction | null): UiSdlCardList;

  readonly secondaryActionButton?: UiSdlAction | null;
  withSecondaryActionButton(secondaryActionButton: IUiSdlAction | null): UiSdlCardList;

  readonly containerHeaderLink?: UiSdlCardListHeaderLinkAction | null | UiSdlLinkTemplate | null | null;
  withContainerHeaderLink(containerHeaderLink: IUiSdlCardListHeaderLinkAction | null | IUiSdlLinkTemplate | null | null): UiSdlCardList;

  readonly containerHeaderText?: string | null;
  withContainerHeaderText(containerHeaderText: string | null): UiSdlCardList;

  readonly infoTooltipText?: string | null;
  withInfoTooltipText(infoTooltipText: string | null): UiSdlCardList;

  readonly containerSubtitleText?: string | null;
  withContainerSubtitleText(containerSubtitleText: string | null): UiSdlCardList;

  readonly emptyState?: UiSdlEmptyState | null;
  withEmptyState(emptyState: IUiSdlEmptyState | null): UiSdlCardList;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlCardList;
}

