export interface CollectionCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CollectionCell;

  readonly id?: string | null;
  withId(id: string | null): CollectionCell;

  readonly name?: string | null;
  withName(name: string | null): CollectionCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CollectionCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CollectionCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CollectionCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CollectionCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): CollectionCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): CollectionCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): CollectionCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): CollectionCell;

  readonly collectionsField?: string | null;
  withCollectionsField(collectionsField: string | null): CollectionCell;

  readonly asLinks?: boolean;
  withAsLinks(asLinks: boolean): CollectionCell;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): CollectionCell;
}

