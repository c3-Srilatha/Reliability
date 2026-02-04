export interface JdbcConnectorConfigURL {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): JdbcConnectorConfigURL;

  readonly id?: string | null;
  withId(id: string | null): JdbcConnectorConfigURL;

  readonly name?: string | null;
  withName(name: string | null): JdbcConnectorConfigURL;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): JdbcConnectorConfigURL;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): JdbcConnectorConfigURL;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): JdbcConnectorConfigURL;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): JdbcConnectorConfigURL;

  readonly jdbcUrlPrefix?: string | null;
  withJdbcUrlPrefix(jdbcUrlPrefix: string | null): JdbcConnectorConfigURL;

  readonly properties?: C3.Map<string | null, C3.Map<string | null, any>>;
  withProperties(properties: C3.Map<string | null, C3.Map<string | null, any>> | {[key: string | null]: C3.Map<string | null, any> | {[key: string | null]: any}}): JdbcConnectorConfigURL;

  readonly form?: C3.Map<string | null, string | null>;
  withForm(form: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): JdbcConnectorConfigURL;
}

