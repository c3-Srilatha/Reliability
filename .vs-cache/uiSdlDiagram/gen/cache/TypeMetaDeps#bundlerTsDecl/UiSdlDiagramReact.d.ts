export interface UiSdlDiagramReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramReact;

  readonly shapeRenderData?: C3.Map<string | null, UiSdlDiagramShapeRenderData | null>;
  withShapeRenderData(shapeRenderData: C3.Map<string | null, UiSdlDiagramShapeRenderData | null> | {[key: string | null]: IUiSdlDiagramShapeRenderData | null}): UiSdlDiagramReact;

  readonly shapeMap?: C3.Map<string | null, UiSdlDiagramShape | null>;
  withShapeMap(shapeMap: C3.Map<string | null, UiSdlDiagramShape | null> | {[key: string | null]: IUiSdlDiagramShape | null}): UiSdlDiagramReact;

  readonly renderUpdateQueue?: C3.Array<UiSdlDiagramUpdate | null>;
  withRenderUpdateQueue(renderUpdateQueue: C3.Array<UiSdlDiagramUpdate | null> | Array<IUiSdlDiagramUpdate | null>): UiSdlDiagramReact;

  readonly selectedShapeId?: string | null;
  withSelectedShapeId(selectedShapeId: string | null): UiSdlDiagramReact;

  readonly zoomScale?: number | null;
  withZoomScale(zoomScale: number | null): UiSdlDiagramReact;

  readonly layout?: UiSdlDiagramLayout | null;
  withLayout(layout: IUiSdlDiagramLayout | null): UiSdlDiagramReact;

  readonly legend?: UiSdlComponentRef<UiSdlDiagramLegend | null> | null;
  withLegend(legend: IUiSdlComponentRef<UiSdlDiagramLegend | null> | null): UiSdlDiagramReact;

  readonly toolbar?: UiSdlComponentRef<UiSdlDiagramToolbar | null> | null;
  withToolbar(toolbar: IUiSdlComponentRef<UiSdlDiagramToolbar | null> | null): UiSdlDiagramReact;

  readonly lastScrollPosition?: Pair<number | null, number | null> | null;
  withLastScrollPosition(lastScrollPosition: IPair<number | null, number | null> | null): UiSdlDiagramReact;

  readonly styleConfig?: UiSdlDiagramStyleConfig | null;
  withStyleConfig(styleConfig: IUiSdlDiagramStyleConfig | null): UiSdlDiagramReact;
}

