export interface InformationCard {

  readonly id?: string | null;
  withId(id: string | null): InformationCard;

  readonly image?: string | null;
  withImage(image: string | null): InformationCard;

  readonly iconName?: string | null;
  withIconName(iconName: string | null): InformationCard;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): InformationCard;

  readonly subtitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withSubtitle(subtitle: string | null | IUiSdlDynamicValueSpec | null | null): InformationCard;

  readonly description?: string | null | UiSdlDynamicValueSpec | null | null;
  withDescription(description: string | null | IUiSdlDynamicValueSpec | null | null): InformationCard;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InformationCard;

  readonly name?: string | null;
  withName(name: string | null): InformationCard;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): InformationCard;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InformationCard;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InformationCard;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InformationCard;

  readonly clickInformationCardAction?: λConsumer<string | null> | null;
  withClickInformationCardAction(clickInformationCardAction: λConsumer<string | null> | null): InformationCard;

  readonly setSelectedInformationCardAction?: λConsumer<InformationCard | null> | null;
  withSetSelectedInformationCardAction(setSelectedInformationCardAction: λConsumer<InformationCard | null> | null): InformationCard;
}


interface λConsumer<T> {
  (t: T): void
}
