export interface DataConnectorConfigFormReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataConnectorConfigFormReact;

  readonly id?: string | null;
  withId(id: string | null): DataConnectorConfigFormReact;

  readonly name?: string | null;
  withName(name: string | null): DataConnectorConfigFormReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataConnectorConfigFormReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataConnectorConfigFormReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataConnectorConfigFormReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataConnectorConfigFormReact;

  readonly properties?: C3.Map<string | null, C3.Map<string | null, any>>;
  withProperties(properties: C3.Map<string | null, C3.Map<string | null, any>> | {[key: string | null]: C3.Map<string | null, any> | {[key: string | null]: any}}): DataConnectorConfigFormReact;

  readonly jdbcUrlPrefix?: string | null;
  withJdbcUrlPrefix(jdbcUrlPrefix: string | null): DataConnectorConfigFormReact;

  readonly loading?: boolean;
  withLoading(loading: boolean): DataConnectorConfigFormReact;

  readonly informationCardProps?: any | null;
  withInformationCardProps(informationCardProps: any | null): DataConnectorConfigFormReact;

  readonly editMode?: boolean;
  withEditMode(editMode: boolean): DataConnectorConfigFormReact;

  readonly editedFields?: C3.Map<string | null, string | null>;
  withEditedFields(editedFields: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataConnectorConfigFormReact;
}

