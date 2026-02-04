export interface SelfServiceDISourceTypeEditCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDISourceTypeEditCellReact;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDISourceTypeEditCellReact;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDISourceTypeEditCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDISourceTypeEditCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDISourceTypeEditCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDISourceTypeEditCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDISourceTypeEditCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): SelfServiceDISourceTypeEditCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): SelfServiceDISourceTypeEditCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): SelfServiceDISourceTypeEditCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): SelfServiceDISourceTypeEditCellReact;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): SelfServiceDISourceTypeEditCellReact;

  readonly placeholder?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholder(placeholder: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDISourceTypeEditCellReact;
}

