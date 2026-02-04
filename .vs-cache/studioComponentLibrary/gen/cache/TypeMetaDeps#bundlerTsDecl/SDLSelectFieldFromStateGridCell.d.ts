export interface SDLSelectFieldFromStateGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SDLSelectFieldFromStateGridCell;

  readonly id?: string | null;
  withId(id: string | null): SDLSelectFieldFromStateGridCell;

  readonly name?: string | null;
  withName(name: string | null): SDLSelectFieldFromStateGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SDLSelectFieldFromStateGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SDLSelectFieldFromStateGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SDLSelectFieldFromStateGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SDLSelectFieldFromStateGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): SDLSelectFieldFromStateGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): SDLSelectFieldFromStateGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): SDLSelectFieldFromStateGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): SDLSelectFieldFromStateGridCell;

  readonly clear?: boolean;
  withClear(clear: boolean): SDLSelectFieldFromStateGridCell;

  readonly content?: UiSdlDynamicValueSpecParam | null;
  withContent(content: IUiSdlDynamicValueSpecParam | null): SDLSelectFieldFromStateGridCell;

  readonly disabledMap?: UiSdlDynamicValueSpecParam | null;
  withDisabledMap(disabledMap: IUiSdlDynamicValueSpecParam | null): SDLSelectFieldFromStateGridCell;

  readonly valueToshow?: string | null;
  withValueToshow(valueToshow: string | null): SDLSelectFieldFromStateGridCell;

  readonly placeHolderText?: string | null;
  withPlaceHolderText(placeHolderText: string | null): SDLSelectFieldFromStateGridCell;
}

