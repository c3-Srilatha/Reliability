export interface InjectableUserManagementCssComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InjectableUserManagementCssComponentReact;

  readonly id?: string | null;
  withId(id: string | null): InjectableUserManagementCssComponentReact;

  readonly name?: string | null;
  withName(name: string | null): InjectableUserManagementCssComponentReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): InjectableUserManagementCssComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InjectableUserManagementCssComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InjectableUserManagementCssComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InjectableUserManagementCssComponentReact;
}

