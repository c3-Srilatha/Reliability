export interface VectorStoreCreateForm {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): VectorStoreCreateForm;

  readonly id?: string | null;
  withId(id: string | null): VectorStoreCreateForm;

  readonly name?: string | null;
  withName(name: string | null): VectorStoreCreateForm;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): VectorStoreCreateForm;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): VectorStoreCreateForm;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): VectorStoreCreateForm;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): VectorStoreCreateForm;

  readonly entityTypeOptions?: C3.Array<TypeMeta | null>;
  withEntityTypeOptions(entityTypeOptions: C3.Array<TypeMeta | null> | Array<ITypeMeta | null>): VectorStoreCreateForm;
}

