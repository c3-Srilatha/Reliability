export interface FieldNameElementsListCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FieldNameElementsListCellReact;

  readonly id?: string | null;
  withId(id: string | null): FieldNameElementsListCellReact;

  readonly name?: string | null;
  withName(name: string | null): FieldNameElementsListCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FieldNameElementsListCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FieldNameElementsListCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FieldNameElementsListCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FieldNameElementsListCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): FieldNameElementsListCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): FieldNameElementsListCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): FieldNameElementsListCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): FieldNameElementsListCellReact;

  readonly valueFieldName?: string | null;
  withValueFieldName(valueFieldName: string | null): FieldNameElementsListCellReact;

  readonly emptyConfig?: UiSdlAction | null;
  withEmptyConfig(emptyConfig: IUiSdlAction | null): FieldNameElementsListCellReact;

  readonly concatenate?: boolean;
  withConcatenate(concatenate: boolean): FieldNameElementsListCellReact;
}

