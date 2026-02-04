export interface SelfServiceDISourceTypeEditCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDISourceTypeEditCell;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDISourceTypeEditCell;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDISourceTypeEditCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDISourceTypeEditCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDISourceTypeEditCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDISourceTypeEditCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDISourceTypeEditCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): SelfServiceDISourceTypeEditCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): SelfServiceDISourceTypeEditCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): SelfServiceDISourceTypeEditCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): SelfServiceDISourceTypeEditCell;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): SelfServiceDISourceTypeEditCell;

  readonly placeholder?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholder(placeholder: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDISourceTypeEditCell;
}

