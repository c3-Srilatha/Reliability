export interface JdbcConnectorConfigURLReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): JdbcConnectorConfigURLReact;

  readonly id?: string | null;
  withId(id: string | null): JdbcConnectorConfigURLReact;

  readonly name?: string | null;
  withName(name: string | null): JdbcConnectorConfigURLReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): JdbcConnectorConfigURLReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): JdbcConnectorConfigURLReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): JdbcConnectorConfigURLReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): JdbcConnectorConfigURLReact;

  readonly jdbcUrlPrefix?: string | null;
  withJdbcUrlPrefix(jdbcUrlPrefix: string | null): JdbcConnectorConfigURLReact;

  readonly properties?: C3.Map<string | null, C3.Map<string | null, any>>;
  withProperties(properties: C3.Map<string | null, C3.Map<string | null, any>> | {[key: string | null]: C3.Map<string | null, any> | {[key: string | null]: any}}): JdbcConnectorConfigURLReact;

  readonly form?: C3.Map<string | null, string | null>;
  withForm(form: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): JdbcConnectorConfigURLReact;
}

