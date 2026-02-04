export interface UiSdlDataGridCellLoadingSkeletonReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDataGridCellLoadingSkeletonReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDataGridCellLoadingSkeletonReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDataGridCellLoadingSkeletonReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDataGridCellLoadingSkeletonReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDataGridCellLoadingSkeletonReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDataGridCellLoadingSkeletonReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDataGridCellLoadingSkeletonReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): UiSdlDataGridCellLoadingSkeletonReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDataGridCellLoadingSkeletonReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): UiSdlDataGridCellLoadingSkeletonReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): UiSdlDataGridCellLoadingSkeletonReact;
}

