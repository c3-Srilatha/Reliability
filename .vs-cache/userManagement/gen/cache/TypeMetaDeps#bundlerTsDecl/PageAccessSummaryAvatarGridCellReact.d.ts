export interface PageAccessSummaryAvatarGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PageAccessSummaryAvatarGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): PageAccessSummaryAvatarGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): PageAccessSummaryAvatarGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): PageAccessSummaryAvatarGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PageAccessSummaryAvatarGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PageAccessSummaryAvatarGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PageAccessSummaryAvatarGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): PageAccessSummaryAvatarGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): PageAccessSummaryAvatarGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): PageAccessSummaryAvatarGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): PageAccessSummaryAvatarGridCellReact;
}

