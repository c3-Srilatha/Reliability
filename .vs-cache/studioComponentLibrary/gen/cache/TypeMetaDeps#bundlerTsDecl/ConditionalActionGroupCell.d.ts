export interface ConditionalActionGroupCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ConditionalActionGroupCell;

  readonly id?: string | null;
  withId(id: string | null): ConditionalActionGroupCell;

  readonly name?: string | null;
  withName(name: string | null): ConditionalActionGroupCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ConditionalActionGroupCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ConditionalActionGroupCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ConditionalActionGroupCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ConditionalActionGroupCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): ConditionalActionGroupCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): ConditionalActionGroupCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): ConditionalActionGroupCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): ConditionalActionGroupCell;

  readonly actions?: C3.Array<ConditionalAction | null>;
  withActions(actions: C3.Array<ConditionalAction | null> | Array<IConditionalAction | null>): ConditionalActionGroupCell;
}

