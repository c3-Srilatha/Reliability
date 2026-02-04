export interface CollectionCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CollectionCellReact;

  readonly id?: string | null;
  withId(id: string | null): CollectionCellReact;

  readonly name?: string | null;
  withName(name: string | null): CollectionCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CollectionCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CollectionCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CollectionCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CollectionCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): CollectionCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): CollectionCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): CollectionCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): CollectionCellReact;

  readonly collectionsField?: string | null;
  withCollectionsField(collectionsField: string | null): CollectionCellReact;

  readonly asLinks?: boolean;
  withAsLinks(asLinks: boolean): CollectionCellReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): CollectionCellReact;
}

