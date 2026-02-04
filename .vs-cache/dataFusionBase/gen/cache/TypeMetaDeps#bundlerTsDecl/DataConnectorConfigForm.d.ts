export interface DataConnectorConfigForm {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataConnectorConfigForm;

  readonly id?: string | null;
  withId(id: string | null): DataConnectorConfigForm;

  readonly name?: string | null;
  withName(name: string | null): DataConnectorConfigForm;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataConnectorConfigForm;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataConnectorConfigForm;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataConnectorConfigForm;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataConnectorConfigForm;

  readonly properties?: C3.Map<string | null, C3.Map<string | null, any>>;
  withProperties(properties: C3.Map<string | null, C3.Map<string | null, any>> | {[key: string | null]: C3.Map<string | null, any> | {[key: string | null]: any}}): DataConnectorConfigForm;

  readonly jdbcUrlPrefix?: string | null;
  withJdbcUrlPrefix(jdbcUrlPrefix: string | null): DataConnectorConfigForm;

  readonly loading?: boolean;
  withLoading(loading: boolean): DataConnectorConfigForm;

  readonly informationCardProps?: any | null;
  withInformationCardProps(informationCardProps: any | null): DataConnectorConfigForm;

  readonly editMode?: boolean;
  withEditMode(editMode: boolean): DataConnectorConfigForm;

  readonly editedFields?: C3.Map<string | null, string | null>;
  withEditedFields(editedFields: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataConnectorConfigForm;
}

