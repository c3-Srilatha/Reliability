export interface FormattedTimeDataGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FormattedTimeDataGridCell;

  readonly id?: string | null;
  withId(id: string | null): FormattedTimeDataGridCell;

  readonly name?: string | null;
  withName(name: string | null): FormattedTimeDataGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FormattedTimeDataGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FormattedTimeDataGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FormattedTimeDataGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FormattedTimeDataGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): FormattedTimeDataGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): FormattedTimeDataGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): FormattedTimeDataGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): FormattedTimeDataGridCell;

  readonly usage?: string | null;
  withUsage(usage: string | null): FormattedTimeDataGridCell;
}

