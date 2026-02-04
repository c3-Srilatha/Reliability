export interface SelfServiceDIKinesisDataGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIKinesisDataGridCell;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIKinesisDataGridCell;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIKinesisDataGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIKinesisDataGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIKinesisDataGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIKinesisDataGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIKinesisDataGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): SelfServiceDIKinesisDataGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): SelfServiceDIKinesisDataGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): SelfServiceDIKinesisDataGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): SelfServiceDIKinesisDataGridCell;

  readonly truncateCharacterLimit?: number | null;
  withTruncateCharacterLimit(truncateCharacterLimit: number | null): SelfServiceDIKinesisDataGridCell;
}

