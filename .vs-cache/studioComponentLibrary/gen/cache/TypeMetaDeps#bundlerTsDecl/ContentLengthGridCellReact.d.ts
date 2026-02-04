export interface ContentLengthGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ContentLengthGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): ContentLengthGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): ContentLengthGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ContentLengthGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ContentLengthGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ContentLengthGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ContentLengthGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): ContentLengthGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): ContentLengthGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): ContentLengthGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): ContentLengthGridCellReact;

  readonly defaultValue?: string | null | UiSdlDynamicValueSpec | null | null;
  withDefaultValue(defaultValue: string | null | IUiSdlDynamicValueSpec | null | null): ContentLengthGridCellReact;
}

