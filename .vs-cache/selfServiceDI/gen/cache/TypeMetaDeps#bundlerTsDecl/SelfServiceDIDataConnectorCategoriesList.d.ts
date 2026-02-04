export interface SelfServiceDIDataConnectorCategoriesList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIDataConnectorCategoriesList;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIDataConnectorCategoriesList;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIDataConnectorCategoriesList;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIDataConnectorCategoriesList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIDataConnectorCategoriesList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIDataConnectorCategoriesList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIDataConnectorCategoriesList;

  readonly componentNotifications?: C3.Array<UiSdlInlineNotification | null>;
  withComponentNotifications(componentNotifications: C3.Array<UiSdlInlineNotification | null> | Array<IUiSdlInlineNotification | null>): SelfServiceDIDataConnectorCategoriesList;

  readonly dataConnectorCategories?: C3.Array<SelfServiceDI.Ui.DataConnectorCategory | null>;
  withDataConnectorCategories(dataConnectorCategories: C3.Array<SelfServiceDI.Ui.DataConnectorCategory | null> | Array<ISelfServiceDI.Ui.DataConnectorCategory | null>): SelfServiceDIDataConnectorCategoriesList;

  readonly dataConnectors?: C3.Array<SelfServiceDI.Ui.DataConnector | null>;
  withDataConnectors(dataConnectors: C3.Array<SelfServiceDI.Ui.DataConnector | null> | Array<ISelfServiceDI.Ui.DataConnector | null>): SelfServiceDIDataConnectorCategoriesList;

  readonly selectedDataConnector?: SelfServiceDI.Ui.DataConnector | null;
  withSelectedDataConnector(selectedDataConnector: ISelfServiceDI.Ui.DataConnector | null): SelfServiceDIDataConnectorCategoriesList;

  readonly filterString?: string | null;
  withFilterString(filterString: string | null): SelfServiceDIDataConnectorCategoriesList;

  readonly showInfoSidePanel?: boolean;
  withShowInfoSidePanel(showInfoSidePanel: boolean): SelfServiceDIDataConnectorCategoriesList;

  readonly showAddNewCard?: boolean;
  withShowAddNewCard(showAddNewCard: boolean): SelfServiceDIDataConnectorCategoriesList;
}

