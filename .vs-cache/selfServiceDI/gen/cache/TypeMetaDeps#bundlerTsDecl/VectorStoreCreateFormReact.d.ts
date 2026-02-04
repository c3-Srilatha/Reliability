export interface VectorStoreCreateFormReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): VectorStoreCreateFormReact;

  readonly id?: string | null;
  withId(id: string | null): VectorStoreCreateFormReact;

  readonly name?: string | null;
  withName(name: string | null): VectorStoreCreateFormReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): VectorStoreCreateFormReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): VectorStoreCreateFormReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): VectorStoreCreateFormReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): VectorStoreCreateFormReact;

  readonly entityTypeOptions?: C3.Array<TypeMeta | null>;
  withEntityTypeOptions(entityTypeOptions: C3.Array<TypeMeta | null> | Array<ITypeMeta | null>): VectorStoreCreateFormReact;
}

