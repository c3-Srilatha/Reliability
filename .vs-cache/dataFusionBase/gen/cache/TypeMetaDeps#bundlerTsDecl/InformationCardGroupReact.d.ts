export interface InformationCardGroupReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InformationCardGroupReact;

  readonly id?: string | null;
  withId(id: string | null): InformationCardGroupReact;

  readonly name?: string | null;
  withName(name: string | null): InformationCardGroupReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): InformationCardGroupReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InformationCardGroupReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InformationCardGroupReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InformationCardGroupReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): InformationCardGroupReact;

  readonly informationCardItems?: C3.Array<InformationCard | null>;
  withInformationCardItems(informationCardItems: C3.Array<InformationCard | null> | Array<IInformationCard | null>): InformationCardGroupReact;

  readonly selectedCardId?: string | null;
  withSelectedCardId(selectedCardId: string | null): InformationCardGroupReact;
}

