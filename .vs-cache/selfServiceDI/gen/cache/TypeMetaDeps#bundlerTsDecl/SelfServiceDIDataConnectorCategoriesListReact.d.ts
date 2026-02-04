export interface SelfServiceDIDataConnectorCategoriesListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIDataConnectorCategoriesListReact;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIDataConnectorCategoriesListReact;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIDataConnectorCategoriesListReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIDataConnectorCategoriesListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIDataConnectorCategoriesListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIDataConnectorCategoriesListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIDataConnectorCategoriesListReact;

  readonly componentNotifications?: C3.Array<UiSdlInlineNotification | null>;
  withComponentNotifications(componentNotifications: C3.Array<UiSdlInlineNotification | null> | Array<IUiSdlInlineNotification | null>): SelfServiceDIDataConnectorCategoriesListReact;

  readonly dataConnectorCategories?: C3.Array<SelfServiceDI.Ui.DataConnectorCategory | null>;
  withDataConnectorCategories(dataConnectorCategories: C3.Array<SelfServiceDI.Ui.DataConnectorCategory | null> | Array<ISelfServiceDI.Ui.DataConnectorCategory | null>): SelfServiceDIDataConnectorCategoriesListReact;

  readonly dataConnectors?: C3.Array<SelfServiceDI.Ui.DataConnector | null>;
  withDataConnectors(dataConnectors: C3.Array<SelfServiceDI.Ui.DataConnector | null> | Array<ISelfServiceDI.Ui.DataConnector | null>): SelfServiceDIDataConnectorCategoriesListReact;

  readonly selectedDataConnector?: SelfServiceDI.Ui.DataConnector | null;
  withSelectedDataConnector(selectedDataConnector: ISelfServiceDI.Ui.DataConnector | null): SelfServiceDIDataConnectorCategoriesListReact;

  readonly filterString?: string | null;
  withFilterString(filterString: string | null): SelfServiceDIDataConnectorCategoriesListReact;

  readonly showInfoSidePanel?: boolean;
  withShowInfoSidePanel(showInfoSidePanel: boolean): SelfServiceDIDataConnectorCategoriesListReact;

  readonly showAddNewCard?: boolean;
  withShowAddNewCard(showAddNewCard: boolean): SelfServiceDIDataConnectorCategoriesListReact;
}

