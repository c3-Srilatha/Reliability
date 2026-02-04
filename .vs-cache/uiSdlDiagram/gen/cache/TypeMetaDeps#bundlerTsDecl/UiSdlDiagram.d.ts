export interface UiSdlDiagram {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagram;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagram;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagram;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagram;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagram;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagram;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagram;

  readonly shapeRenderData?: C3.Map<string | null, UiSdlDiagramShapeRenderData | null>;
  withShapeRenderData(shapeRenderData: C3.Map<string | null, UiSdlDiagramShapeRenderData | null> | {[key: string | null]: IUiSdlDiagramShapeRenderData | null}): UiSdlDiagram;

  readonly shapeMap?: C3.Map<string | null, UiSdlDiagramShape | null>;
  withShapeMap(shapeMap: C3.Map<string | null, UiSdlDiagramShape | null> | {[key: string | null]: IUiSdlDiagramShape | null}): UiSdlDiagram;

  readonly renderUpdateQueue?: C3.Array<UiSdlDiagramUpdate | null>;
  withRenderUpdateQueue(renderUpdateQueue: C3.Array<UiSdlDiagramUpdate | null> | Array<IUiSdlDiagramUpdate | null>): UiSdlDiagram;

  readonly selectedShapeId?: string | null;
  withSelectedShapeId(selectedShapeId: string | null): UiSdlDiagram;

  readonly zoomScale?: number | null;
  withZoomScale(zoomScale: number | null): UiSdlDiagram;

  readonly layout?: UiSdlDiagramLayout | null;
  withLayout(layout: IUiSdlDiagramLayout | null): UiSdlDiagram;

  readonly legend?: UiSdlComponentRef<UiSdlDiagramLegend | null> | null;
  withLegend(legend: IUiSdlComponentRef<UiSdlDiagramLegend | null> | null): UiSdlDiagram;

  readonly toolbar?: UiSdlComponentRef<UiSdlDiagramToolbar | null> | null;
  withToolbar(toolbar: IUiSdlComponentRef<UiSdlDiagramToolbar | null> | null): UiSdlDiagram;

  readonly lastScrollPosition?: Pair<number | null, number | null> | null;
  withLastScrollPosition(lastScrollPosition: IPair<number | null, number | null> | null): UiSdlDiagram;

  readonly styleConfig?: UiSdlDiagramStyleConfig | null;
  withStyleConfig(styleConfig: IUiSdlDiagramStyleConfig | null): UiSdlDiagram;
}

