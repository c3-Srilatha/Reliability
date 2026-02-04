export interface SelfServiceDIInformationCardList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIInformationCardList;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIInformationCardList;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIInformationCardList;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIInformationCardList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIInformationCardList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIInformationCardList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIInformationCardList;

  readonly componentNotifications?: C3.Array<UiSdlInlineNotification | null>;
  withComponentNotifications(componentNotifications: C3.Array<UiSdlInlineNotification | null> | Array<IUiSdlInlineNotification | null>): SelfServiceDIInformationCardList;

  readonly title?: string | null;
  withTitle(title: string | null): SelfServiceDIInformationCardList;

  readonly informationCardList?: C3.Array<InformationCardFields | null>;
  withInformationCardList(informationCardList: C3.Array<InformationCardFields | null> | Array<IInformationCardFields | null>): SelfServiceDIInformationCardList;

  readonly selectedInformationCard?: InformationCardFields | null;
  withSelectedInformationCard(selectedInformationCard: IInformationCardFields | null): SelfServiceDIInformationCardList;

  readonly showInfoSidePanel?: boolean;
  withShowInfoSidePanel(showInfoSidePanel: boolean): SelfServiceDIInformationCardList;
}

