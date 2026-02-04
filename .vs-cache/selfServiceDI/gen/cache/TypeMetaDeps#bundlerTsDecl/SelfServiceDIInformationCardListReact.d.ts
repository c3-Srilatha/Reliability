export interface SelfServiceDIInformationCardListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIInformationCardListReact;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIInformationCardListReact;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIInformationCardListReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIInformationCardListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIInformationCardListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIInformationCardListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIInformationCardListReact;

  readonly componentNotifications?: C3.Array<UiSdlInlineNotification | null>;
  withComponentNotifications(componentNotifications: C3.Array<UiSdlInlineNotification | null> | Array<IUiSdlInlineNotification | null>): SelfServiceDIInformationCardListReact;

  readonly title?: string | null;
  withTitle(title: string | null): SelfServiceDIInformationCardListReact;

  readonly informationCardList?: C3.Array<InformationCardFields | null>;
  withInformationCardList(informationCardList: C3.Array<InformationCardFields | null> | Array<IInformationCardFields | null>): SelfServiceDIInformationCardListReact;

  readonly selectedInformationCard?: InformationCardFields | null;
  withSelectedInformationCard(selectedInformationCard: IInformationCardFields | null): SelfServiceDIInformationCardListReact;

  readonly showInfoSidePanel?: boolean;
  withShowInfoSidePanel(showInfoSidePanel: boolean): SelfServiceDIInformationCardListReact;
}

