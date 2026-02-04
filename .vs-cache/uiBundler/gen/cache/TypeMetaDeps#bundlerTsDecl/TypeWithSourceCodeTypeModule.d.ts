export interface TypeWithSourceCodeTypeModule {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TypeWithSourceCodeTypeModule;

  readonly id?: string | null;
  withId(id: string | null): TypeWithSourceCodeTypeModule;

  readonly name?: string | null;
  withName(name: string | null): TypeWithSourceCodeTypeModule;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): TypeWithSourceCodeTypeModule;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TypeWithSourceCodeTypeModule;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TypeWithSourceCodeTypeModule;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TypeWithSourceCodeTypeModule;
}

