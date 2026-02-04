export interface ConditionalActionGroupCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ConditionalActionGroupCellReact;

  readonly id?: string | null;
  withId(id: string | null): ConditionalActionGroupCellReact;

  readonly name?: string | null;
  withName(name: string | null): ConditionalActionGroupCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ConditionalActionGroupCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ConditionalActionGroupCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ConditionalActionGroupCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ConditionalActionGroupCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): ConditionalActionGroupCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): ConditionalActionGroupCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): ConditionalActionGroupCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): ConditionalActionGroupCellReact;

  readonly actions?: C3.Array<ConditionalAction | null>;
  withActions(actions: C3.Array<ConditionalAction | null> | Array<IConditionalAction | null>): ConditionalActionGroupCellReact;
}

