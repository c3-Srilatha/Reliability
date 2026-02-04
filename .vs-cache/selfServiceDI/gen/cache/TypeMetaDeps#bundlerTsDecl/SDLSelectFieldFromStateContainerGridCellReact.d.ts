export interface SDLSelectFieldFromStateContainerGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SDLSelectFieldFromStateContainerGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SDLSelectFieldFromStateContainerGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SDLSelectFieldFromStateContainerGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): SDLSelectFieldFromStateContainerGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly clear?: boolean;
  withClear(clear: boolean): SDLSelectFieldFromStateContainerGridCellReact;

  readonly content?: UiSdlDynamicValueSpecParam | null;
  withContent(content: IUiSdlDynamicValueSpecParam | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly disabledMap?: UiSdlDynamicValueSpecParam | null;
  withDisabledMap(disabledMap: IUiSdlDynamicValueSpecParam | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly valueToshow?: string | null;
  withValueToshow(valueToshow: string | null): SDLSelectFieldFromStateContainerGridCellReact;

  readonly placeHolderText?: string | null;
  withPlaceHolderText(placeHolderText: string | null): SDLSelectFieldFromStateContainerGridCellReact;
}

