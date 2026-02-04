export interface JsonSyntaxHighlighterGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): JsonSyntaxHighlighterGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): JsonSyntaxHighlighterGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): JsonSyntaxHighlighterGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): JsonSyntaxHighlighterGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): JsonSyntaxHighlighterGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): JsonSyntaxHighlighterGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): JsonSyntaxHighlighterGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): JsonSyntaxHighlighterGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): JsonSyntaxHighlighterGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): JsonSyntaxHighlighterGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): JsonSyntaxHighlighterGridCellReact;
}

