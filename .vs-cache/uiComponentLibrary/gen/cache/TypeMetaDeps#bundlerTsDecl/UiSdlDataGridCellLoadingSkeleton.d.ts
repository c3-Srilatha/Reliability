export interface UiSdlDataGridCellLoadingSkeleton {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDataGridCellLoadingSkeleton;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDataGridCellLoadingSkeleton;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDataGridCellLoadingSkeleton;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDataGridCellLoadingSkeleton;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDataGridCellLoadingSkeleton;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDataGridCellLoadingSkeleton;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDataGridCellLoadingSkeleton;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): UiSdlDataGridCellLoadingSkeleton;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDataGridCellLoadingSkeleton;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): UiSdlDataGridCellLoadingSkeleton;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): UiSdlDataGridCellLoadingSkeleton;
}

