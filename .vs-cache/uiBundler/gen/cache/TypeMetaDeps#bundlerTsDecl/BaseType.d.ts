export interface BaseType {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BaseType;

  readonly id?: string | null;
  withId(id: string | null): BaseType;

  readonly name?: string | null;
  withName(name: string | null): BaseType;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BaseType;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BaseType;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BaseType;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BaseType;
}

