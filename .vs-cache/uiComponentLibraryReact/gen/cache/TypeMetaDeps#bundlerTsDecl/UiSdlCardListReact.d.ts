export interface UiSdlCardListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCardListReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCardListReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCardListReact;

  readonly dataSpec?: UiSdlCardListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCardListDataSpec | null): UiSdlCardListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCardListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCardListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCardListReact;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlCardListReact;

  readonly primaryActionButton?: UiSdlAction | null;
  withPrimaryActionButton(primaryActionButton: IUiSdlAction | null): UiSdlCardListReact;

  readonly secondaryActionButton?: UiSdlAction | null;
  withSecondaryActionButton(secondaryActionButton: IUiSdlAction | null): UiSdlCardListReact;

  readonly containerHeaderLink?: UiSdlCardListHeaderLinkAction | null | UiSdlLinkTemplate | null | null;
  withContainerHeaderLink(containerHeaderLink: IUiSdlCardListHeaderLinkAction | null | IUiSdlLinkTemplate | null | null): UiSdlCardListReact;

  readonly containerHeaderText?: string | null;
  withContainerHeaderText(containerHeaderText: string | null): UiSdlCardListReact;

  readonly infoTooltipText?: string | null;
  withInfoTooltipText(infoTooltipText: string | null): UiSdlCardListReact;

  readonly containerSubtitleText?: string | null;
  withContainerSubtitleText(containerSubtitleText: string | null): UiSdlCardListReact;

  readonly emptyState?: UiSdlEmptyState | null;
  withEmptyState(emptyState: IUiSdlEmptyState | null): UiSdlCardListReact;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlCardListReact;
}

