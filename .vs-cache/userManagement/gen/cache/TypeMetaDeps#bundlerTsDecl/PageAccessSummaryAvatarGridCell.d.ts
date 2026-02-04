export interface PageAccessSummaryAvatarGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PageAccessSummaryAvatarGridCell;

  readonly id?: string | null;
  withId(id: string | null): PageAccessSummaryAvatarGridCell;

  readonly name?: string | null;
  withName(name: string | null): PageAccessSummaryAvatarGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): PageAccessSummaryAvatarGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PageAccessSummaryAvatarGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PageAccessSummaryAvatarGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PageAccessSummaryAvatarGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): PageAccessSummaryAvatarGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): PageAccessSummaryAvatarGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): PageAccessSummaryAvatarGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): PageAccessSummaryAvatarGridCell;
}

