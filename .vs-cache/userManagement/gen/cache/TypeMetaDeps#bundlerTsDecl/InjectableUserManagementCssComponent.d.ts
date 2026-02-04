export interface InjectableUserManagementCssComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InjectableUserManagementCssComponent;

  readonly id?: string | null;
  withId(id: string | null): InjectableUserManagementCssComponent;

  readonly name?: string | null;
  withName(name: string | null): InjectableUserManagementCssComponent;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): InjectableUserManagementCssComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InjectableUserManagementCssComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InjectableUserManagementCssComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InjectableUserManagementCssComponent;
}

