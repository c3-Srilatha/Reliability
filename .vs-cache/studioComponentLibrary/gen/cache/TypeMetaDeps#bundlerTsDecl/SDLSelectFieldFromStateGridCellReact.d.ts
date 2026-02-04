export interface SDLSelectFieldFromStateGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SDLSelectFieldFromStateGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): SDLSelectFieldFromStateGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): SDLSelectFieldFromStateGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SDLSelectFieldFromStateGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SDLSelectFieldFromStateGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SDLSelectFieldFromStateGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SDLSelectFieldFromStateGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): SDLSelectFieldFromStateGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): SDLSelectFieldFromStateGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): SDLSelectFieldFromStateGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): SDLSelectFieldFromStateGridCellReact;

  readonly clear?: boolean;
  withClear(clear: boolean): SDLSelectFieldFromStateGridCellReact;

  readonly content?: UiSdlDynamicValueSpecParam | null;
  withContent(content: IUiSdlDynamicValueSpecParam | null): SDLSelectFieldFromStateGridCellReact;

  readonly disabledMap?: UiSdlDynamicValueSpecParam | null;
  withDisabledMap(disabledMap: IUiSdlDynamicValueSpecParam | null): SDLSelectFieldFromStateGridCellReact;

  readonly valueToshow?: string | null;
  withValueToshow(valueToshow: string | null): SDLSelectFieldFromStateGridCellReact;

  readonly placeHolderText?: string | null;
  withPlaceHolderText(placeHolderText: string | null): SDLSelectFieldFromStateGridCellReact;
}

