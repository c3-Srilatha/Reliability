export interface ContentLengthGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ContentLengthGridCell;

  readonly id?: string | null;
  withId(id: string | null): ContentLengthGridCell;

  readonly name?: string | null;
  withName(name: string | null): ContentLengthGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ContentLengthGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ContentLengthGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ContentLengthGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ContentLengthGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): ContentLengthGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): ContentLengthGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): ContentLengthGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): ContentLengthGridCell;

  readonly defaultValue?: string | null | UiSdlDynamicValueSpec | null | null;
  withDefaultValue(defaultValue: string | null | IUiSdlDynamicValueSpec | null | null): ContentLengthGridCell;
}

