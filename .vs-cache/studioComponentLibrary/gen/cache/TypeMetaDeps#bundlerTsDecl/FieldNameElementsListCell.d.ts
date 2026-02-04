export interface FieldNameElementsListCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FieldNameElementsListCell;

  readonly id?: string | null;
  withId(id: string | null): FieldNameElementsListCell;

  readonly name?: string | null;
  withName(name: string | null): FieldNameElementsListCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FieldNameElementsListCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FieldNameElementsListCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FieldNameElementsListCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FieldNameElementsListCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): FieldNameElementsListCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): FieldNameElementsListCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): FieldNameElementsListCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): FieldNameElementsListCell;

  readonly valueFieldName?: string | null;
  withValueFieldName(valueFieldName: string | null): FieldNameElementsListCell;

  readonly emptyConfig?: UiSdlAction | null;
  withEmptyConfig(emptyConfig: IUiSdlAction | null): FieldNameElementsListCell;

  readonly concatenate?: boolean;
  withConcatenate(concatenate: boolean): FieldNameElementsListCell;
}

