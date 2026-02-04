export interface InformationCardReact {

  readonly id?: string | null;
  withId(id: string | null): InformationCardReact;

  readonly image?: string | null;
  withImage(image: string | null): InformationCardReact;

  readonly iconName?: string | null;
  withIconName(iconName: string | null): InformationCardReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): InformationCardReact;

  readonly subtitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withSubtitle(subtitle: string | null | IUiSdlDynamicValueSpec | null | null): InformationCardReact;

  readonly description?: string | null | UiSdlDynamicValueSpec | null | null;
  withDescription(description: string | null | IUiSdlDynamicValueSpec | null | null): InformationCardReact;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InformationCardReact;

  readonly name?: string | null;
  withName(name: string | null): InformationCardReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): InformationCardReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InformationCardReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InformationCardReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InformationCardReact;

  readonly clickInformationCardAction?: λConsumer<string | null> | null;
  withClickInformationCardAction(clickInformationCardAction: λConsumer<string | null> | null): InformationCardReact;

  readonly setSelectedInformationCardAction?: λConsumer<InformationCard | null> | null;
  withSetSelectedInformationCardAction(setSelectedInformationCardAction: λConsumer<InformationCard | null> | null): InformationCardReact;
}


interface λConsumer<T> {
  (t: T): void
}
