export interface SelfServiceDIGreyColorTextGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIGreyColorTextGridCell;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIGreyColorTextGridCell;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIGreyColorTextGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIGreyColorTextGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIGreyColorTextGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIGreyColorTextGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIGreyColorTextGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): SelfServiceDIGreyColorTextGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): SelfServiceDIGreyColorTextGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): SelfServiceDIGreyColorTextGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): SelfServiceDIGreyColorTextGridCell;
}

