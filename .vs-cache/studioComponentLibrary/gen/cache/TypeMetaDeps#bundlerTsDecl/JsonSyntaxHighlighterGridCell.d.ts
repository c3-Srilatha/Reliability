export interface JsonSyntaxHighlighterGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): JsonSyntaxHighlighterGridCell;

  readonly id?: string | null;
  withId(id: string | null): JsonSyntaxHighlighterGridCell;

  readonly name?: string | null;
  withName(name: string | null): JsonSyntaxHighlighterGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): JsonSyntaxHighlighterGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): JsonSyntaxHighlighterGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): JsonSyntaxHighlighterGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): JsonSyntaxHighlighterGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): JsonSyntaxHighlighterGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): JsonSyntaxHighlighterGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): JsonSyntaxHighlighterGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): JsonSyntaxHighlighterGridCell;
}

