export interface UiSdlMapReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMapReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMapReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMapReact;

  readonly dataSpec?: UiSdlMapDataSpec | null;
  withDataSpec(dataSpec: IUiSdlMapDataSpec | null): UiSdlMapReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMapReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMapReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMapReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMapReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlMapReact;

  readonly markerData?: FetchResult<Obj | null> | null;
  withMarkerData(markerData: IFetchResult<Obj | null> | null): UiSdlMapReact;

  readonly layers?: C3.Array<UiSdlMapLayer | null>;
  withLayers(layers: C3.Array<UiSdlMapLayer | null> | Array<IUiSdlMapLayer | null>): UiSdlMapReact;

  readonly defaultMarkerColor?: string | null;
  withDefaultMarkerColor(defaultMarkerColor: string | null): UiSdlMapReact;

  readonly defaultMarkerShape?: string | null;
  withDefaultMarkerShape(defaultMarkerShape: string | null): UiSdlMapReact;

  readonly mapStyle?: string | null;
  withMapStyle(mapStyle: string | null): UiSdlMapReact;

  readonly hideControls?: boolean;
  withHideControls(hideControls: boolean): UiSdlMapReact;

  readonly legend?: UiSdlMapLegend | null;
  withLegend(legend: IUiSdlMapLegend | null): UiSdlMapReact;

  readonly centering?: UiSdlMapFixedCentering | null;
  withCentering(centering: IUiSdlMapFixedCentering | null): UiSdlMapReact;

  readonly zoom?: UiSdlMapAutoZoom | null | UiSdlMapFixedZoom | null | null;
  withZoom(zoom: IUiSdlMapAutoZoom | null | IUiSdlMapFixedZoom | null | null): UiSdlMapReact;

  readonly transitionDuration?: number | null;
  withTransitionDuration(transitionDuration: number | null): UiSdlMapReact;
}

