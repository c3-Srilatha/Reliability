export interface SDLSelectFieldFromStateContainerGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SDLSelectFieldFromStateContainerGridCell;

  readonly id?: string | null;
  withId(id: string | null): SDLSelectFieldFromStateContainerGridCell;

  readonly name?: string | null;
  withName(name: string | null): SDLSelectFieldFromStateContainerGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SDLSelectFieldFromStateContainerGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SDLSelectFieldFromStateContainerGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SDLSelectFieldFromStateContainerGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SDLSelectFieldFromStateContainerGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): SDLSelectFieldFromStateContainerGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): SDLSelectFieldFromStateContainerGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): SDLSelectFieldFromStateContainerGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): SDLSelectFieldFromStateContainerGridCell;

  readonly clear?: boolean;
  withClear(clear: boolean): SDLSelectFieldFromStateContainerGridCell;

  readonly content?: UiSdlDynamicValueSpecParam | null;
  withContent(content: IUiSdlDynamicValueSpecParam | null): SDLSelectFieldFromStateContainerGridCell;

  readonly disabledMap?: UiSdlDynamicValueSpecParam | null;
  withDisabledMap(disabledMap: IUiSdlDynamicValueSpecParam | null): SDLSelectFieldFromStateContainerGridCell;

  readonly valueToshow?: string | null;
  withValueToshow(valueToshow: string | null): SDLSelectFieldFromStateContainerGridCell;

  readonly placeHolderText?: string | null;
  withPlaceHolderText(placeHolderText: string | null): SDLSelectFieldFromStateContainerGridCell;
}

