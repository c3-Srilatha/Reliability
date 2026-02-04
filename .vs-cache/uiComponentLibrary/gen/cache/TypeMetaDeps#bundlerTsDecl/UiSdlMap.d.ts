export interface UiSdlMap {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMap;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMap;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMap;

  readonly dataSpec?: UiSdlMapDataSpec | null;
  withDataSpec(dataSpec: IUiSdlMapDataSpec | null): UiSdlMap;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMap;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMap;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMap;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMap;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlMap;

  readonly markerData?: FetchResult<Obj | null> | null;
  withMarkerData(markerData: IFetchResult<Obj | null> | null): UiSdlMap;

  readonly layers?: C3.Array<UiSdlMapLayer | null>;
  withLayers(layers: C3.Array<UiSdlMapLayer | null> | Array<IUiSdlMapLayer | null>): UiSdlMap;

  readonly defaultMarkerColor?: string | null;
  withDefaultMarkerColor(defaultMarkerColor: string | null): UiSdlMap;

  readonly defaultMarkerShape?: string | null;
  withDefaultMarkerShape(defaultMarkerShape: string | null): UiSdlMap;

  readonly mapStyle?: string | null;
  withMapStyle(mapStyle: string | null): UiSdlMap;

  readonly hideControls?: boolean;
  withHideControls(hideControls: boolean): UiSdlMap;

  readonly legend?: UiSdlMapLegend | null;
  withLegend(legend: IUiSdlMapLegend | null): UiSdlMap;

  readonly centering?: UiSdlMapFixedCentering | null;
  withCentering(centering: IUiSdlMapFixedCentering | null): UiSdlMap;

  readonly zoom?: UiSdlMapAutoZoom | null | UiSdlMapFixedZoom | null | null;
  withZoom(zoom: IUiSdlMapAutoZoom | null | IUiSdlMapFixedZoom | null | null): UiSdlMap;

  readonly transitionDuration?: number | null;
  withTransitionDuration(transitionDuration: number | null): UiSdlMap;
}

