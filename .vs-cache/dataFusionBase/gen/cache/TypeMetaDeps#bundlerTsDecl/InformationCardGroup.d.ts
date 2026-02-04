export interface InformationCardGroup {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InformationCardGroup;

  readonly id?: string | null;
  withId(id: string | null): InformationCardGroup;

  readonly name?: string | null;
  withName(name: string | null): InformationCardGroup;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): InformationCardGroup;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InformationCardGroup;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InformationCardGroup;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InformationCardGroup;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): InformationCardGroup;

  readonly informationCardItems?: C3.Array<InformationCard | null>;
  withInformationCardItems(informationCardItems: C3.Array<InformationCard | null> | Array<IInformationCard | null>): InformationCardGroup;

  readonly selectedCardId?: string | null;
  withSelectedCardId(selectedCardId: string | null): InformationCardGroup;
}

