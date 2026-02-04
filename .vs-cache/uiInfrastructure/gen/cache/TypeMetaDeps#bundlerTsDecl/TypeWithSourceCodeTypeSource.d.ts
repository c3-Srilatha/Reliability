export interface TypeWithSourceCodeTypeSource {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TypeWithSourceCodeTypeSource;

  readonly id?: string | null;
  withId(id: string | null): TypeWithSourceCodeTypeSource;

  readonly name?: string | null;
  withName(name: string | null): TypeWithSourceCodeTypeSource;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): TypeWithSourceCodeTypeSource;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TypeWithSourceCodeTypeSource;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TypeWithSourceCodeTypeSource;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TypeWithSourceCodeTypeSource;
}

