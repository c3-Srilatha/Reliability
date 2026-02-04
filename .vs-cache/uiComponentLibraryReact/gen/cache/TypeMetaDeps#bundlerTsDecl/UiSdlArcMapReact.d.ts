export interface UiSdlArcMapReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlArcMapReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlArcMapReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlArcMapReact;

  readonly dataSpec?: UiSdlArcMapDataSpec | null;
  withDataSpec(dataSpec: IUiSdlArcMapDataSpec | null): UiSdlArcMapReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlArcMapReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlArcMapReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlArcMapReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlArcMapReact;

  readonly arcData?: FetchResult<Obj | null> | null;
  withArcData(arcData: IFetchResult<Obj | null> | null): UiSdlArcMapReact;

  readonly arcWidth?: number | null;
  withArcWidth(arcWidth: number | null): UiSdlArcMapReact;

  readonly shortestPath?: boolean;
  withShortestPath(shortestPath: boolean): UiSdlArcMapReact;

  readonly mapStyle?: string | null;
  withMapStyle(mapStyle: string | null): UiSdlArcMapReact;

  readonly legend?: UiSdlMapLegend | null;
  withLegend(legend: IUiSdlMapLegend | null): UiSdlArcMapReact;

  readonly defaultArcColor?: string | null;
  withDefaultArcColor(defaultArcColor: string | null): UiSdlArcMapReact;
}

