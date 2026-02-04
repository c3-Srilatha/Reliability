export interface UiSdlArcMap {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlArcMap;

  readonly id?: string | null;
  withId(id: string | null): UiSdlArcMap;

  readonly name?: string | null;
  withName(name: string | null): UiSdlArcMap;

  readonly dataSpec?: UiSdlArcMapDataSpec | null;
  withDataSpec(dataSpec: IUiSdlArcMapDataSpec | null): UiSdlArcMap;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlArcMap;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlArcMap;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlArcMap;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlArcMap;

  readonly arcData?: FetchResult<Obj | null> | null;
  withArcData(arcData: IFetchResult<Obj | null> | null): UiSdlArcMap;

  readonly arcWidth?: number | null;
  withArcWidth(arcWidth: number | null): UiSdlArcMap;

  readonly shortestPath?: boolean;
  withShortestPath(shortestPath: boolean): UiSdlArcMap;

  readonly mapStyle?: string | null;
  withMapStyle(mapStyle: string | null): UiSdlArcMap;

  readonly legend?: UiSdlMapLegend | null;
  withLegend(legend: IUiSdlMapLegend | null): UiSdlArcMap;

  readonly defaultArcColor?: string | null;
  withDefaultArcColor(defaultArcColor: string | null): UiSdlArcMap;
}

