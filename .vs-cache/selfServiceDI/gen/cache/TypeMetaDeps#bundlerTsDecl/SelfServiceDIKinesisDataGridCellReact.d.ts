export interface SelfServiceDIKinesisDataGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIKinesisDataGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIKinesisDataGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIKinesisDataGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIKinesisDataGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIKinesisDataGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIKinesisDataGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIKinesisDataGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): SelfServiceDIKinesisDataGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): SelfServiceDIKinesisDataGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): SelfServiceDIKinesisDataGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): SelfServiceDIKinesisDataGridCellReact;

  readonly truncateCharacterLimit?: number | null;
  withTruncateCharacterLimit(truncateCharacterLimit: number | null): SelfServiceDIKinesisDataGridCellReact;
}

