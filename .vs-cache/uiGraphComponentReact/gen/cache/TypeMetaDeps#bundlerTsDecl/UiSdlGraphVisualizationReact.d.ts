export interface UiSdlGraphVisualizationReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationReact;

  readonly dataSpec?: UiSdlGraphVisualizationDataSpec | null;
  withDataSpec(dataSpec: IUiSdlGraphVisualizationDataSpec | null): UiSdlGraphVisualizationReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationReact;

  readonly hiddenRegions?: C3.Array<string | null>;
  withHiddenRegions(hiddenRegions: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  readonly activeNodePopover?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withActiveNodePopover(activeNodePopover: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlGraphVisualizationReact;

  readonly activeTooltip?: UiSdlGraphVisualizationTooltipData | null;
  withActiveTooltip(activeTooltip: IUiSdlGraphVisualizationTooltipData | null): UiSdlGraphVisualizationReact;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphVisualizationReact;

  readonly cacheKey?: string | null;
  withCacheKey(cacheKey: string | null): UiSdlGraphVisualizationReact;

  readonly clearable?: boolean;
  withClearable(clearable: boolean): UiSdlGraphVisualizationReact;

  readonly isClearingCanvasItems?: boolean;
  withIsClearingCanvasItems(isClearingCanvasItems: boolean): UiSdlGraphVisualizationReact;

  readonly combineConfig?: UiSdlGraphVisualizationCombineConfig | null;
  withCombineConfig(combineConfig: IUiSdlGraphVisualizationCombineConfig | null): UiSdlGraphVisualizationReact;

  readonly dispatchRealtimeTimebarAction?: boolean;
  withDispatchRealtimeTimebarAction(dispatchRealtimeTimebarAction: boolean): UiSdlGraphVisualizationReact;

  readonly mapboxStyle?: string | null;
  withMapboxStyle(mapboxStyle: string | null): UiSdlGraphVisualizationReact;

  readonly mapboxVersion?: string | null;
  withMapboxVersion(mapboxVersion: string | null): UiSdlGraphVisualizationReact;

  readonly draw?: UiSdlGraphVisualizationDrawConfig | null;
  withDraw(draw: IUiSdlGraphVisualizationDrawConfig | null): UiSdlGraphVisualizationReact;

  readonly data?: UiSdlGraphVisualizationData | null;
  withData(data: IUiSdlGraphVisualizationData | null): UiSdlGraphVisualizationReact;

  readonly canvasItems?: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null>;
  withCanvasItems(canvasItems: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null> | {[key: string | null]: IUiSdlGraphVisualizationDataNode | null | IUiSdlGraphVisualizationDataEdge | null | null}): UiSdlGraphVisualizationReact;

  readonly forceCanvasItemsInitialization?: boolean;
  withForceCanvasItemsInitialization(forceCanvasItemsInitialization: boolean): UiSdlGraphVisualizationReact;

  readonly defaultFitOptionOnSelect?: string | null;
  withDefaultFitOptionOnSelect(defaultFitOptionOnSelect: string | null): UiSdlGraphVisualizationReact;

  readonly fitOption?: string | null;
  withFitOption(fitOption: string | null): UiSdlGraphVisualizationReact;

  readonly defaultEdgeColors?: C3.Array<string | null>;
  withDefaultEdgeColors(defaultEdgeColors: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  readonly defaultNodeColors?: C3.Array<string | null>;
  withDefaultNodeColors(defaultNodeColors: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  readonly disableMergedEdges?: boolean;
  withDisableMergedEdges(disableMergedEdges: boolean): UiSdlGraphVisualizationReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlGraphVisualizationReact;

  readonly endSpacing?: string | null;
  withEndSpacing(endSpacing: string | null): UiSdlGraphVisualizationReact;

  readonly geoJsonDataSpec?: UiSdlGraphVisualizationGeoJsonDataSpec | null;
  withGeoJsonDataSpec(geoJsonDataSpec: IUiSdlGraphVisualizationGeoJsonDataSpec | null): UiSdlGraphVisualizationReact;

  readonly geoJsonData?: any | null;
  withGeoJsonData(geoJsonData: any | null): UiSdlGraphVisualizationReact;

  readonly shapeData?: any | null;
  withShapeData(shapeData: any | null): UiSdlGraphVisualizationReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlGraphVisualizationReact;

  readonly highlightedItemIds?: C3.Array<string | null>;
  withHighlightedItemIds(highlightedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  readonly hoverConfig?: UiSdlGraphVisualizationHoverConfig | null;
  withHoverConfig(hoverConfig: IUiSdlGraphVisualizationHoverConfig | null): UiSdlGraphVisualizationReact;

  readonly hoveredEdgeId?: string | null;
  withHoveredEdgeId(hoveredEdgeId: string | null): UiSdlGraphVisualizationReact;

  readonly hoveredNodeId?: string | null;
  withHoveredNodeId(hoveredNodeId: string | null): UiSdlGraphVisualizationReact;

  readonly layout?: UiSdlGraphVisualizationLayout | null;
  withLayout(layout: IUiSdlGraphVisualizationLayout | null): UiSdlGraphVisualizationReact;

  readonly animation?: UiSdlGraphVisualizationAnimation | null;
  withAnimation(animation: IUiSdlGraphVisualizationAnimation | null): UiSdlGraphVisualizationReact;

  readonly legendConfig?: UiSdlGraphVisualizationCanvasLegendConfig | null;
  withLegendConfig(legendConfig: IUiSdlGraphVisualizationCanvasLegendConfig | null): UiSdlGraphVisualizationReact;

  readonly mergedEdgeConfig?: UiSdlGraphVisualizationMergedEdgeConfig | null;
  withMergedEdgeConfig(mergedEdgeConfig: IUiSdlGraphVisualizationMergedEdgeConfig | null): UiSdlGraphVisualizationReact;

  readonly mergedEdgeMapping?: C3.Map<string | null, string | null>;
  withMergedEdgeMapping(mergedEdgeMapping: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphVisualizationReact;

  readonly pingConfig?: UiSdlGraphVisualizationPingConfig | null;
  withPingConfig(pingConfig: IUiSdlGraphVisualizationPingConfig | null): UiSdlGraphVisualizationReact;

  readonly pingItems?: C3.Array<string | null>;
  withPingItems(pingItems: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  readonly resettable?: boolean;
  withResettable(resettable: boolean): UiSdlGraphVisualizationReact;

  readonly selectedItems?: C3.Map<string | null, boolean>;
  withSelectedItems(selectedItems: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlGraphVisualizationReact;

  readonly selectedNodeIds?: C3.Array<string | null>;
  withSelectedNodeIds(selectedNodeIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  readonly selectedEdgeIds?: C3.Array<string | null>;
  withSelectedEdgeIds(selectedEdgeIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  readonly selectionConfig?: UiSdlGraphVisualizationSelectionConfig | null;
  withSelectionConfig(selectionConfig: IUiSdlGraphVisualizationSelectionConfig | null): UiSdlGraphVisualizationReact;

  readonly selectedRegion?: string | null;
  withSelectedRegion(selectedRegion: string | null): UiSdlGraphVisualizationReact;

  readonly showMap?: boolean;
  withShowMap(showMap: boolean): UiSdlGraphVisualizationReact;

  readonly showEdgesOnMap?: boolean;
  withShowEdgesOnMap(showEdgesOnMap: boolean): UiSdlGraphVisualizationReact;

  readonly showLegend?: boolean;
  withShowLegend(showLegend: boolean): UiSdlGraphVisualizationReact;

  readonly timeBarConfig?: UiSdlGraphVisualizationTimeBarConfig | null;
  withTimeBarConfig(timeBarConfig: IUiSdlGraphVisualizationTimeBarConfig | null): UiSdlGraphVisualizationReact;

  readonly timeBarInRangeItems?: C3.Array<string | null>;
  withTimeBarInRangeItems(timeBarInRangeItems: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  readonly showZoomControls?: boolean;
  withShowZoomControls(showZoomControls: boolean): UiSdlGraphVisualizationReact;

  readonly zoomConfiguration?: UiSdlGraphVisualizationChartZoomConfig | null | UiSdlGraphVisualizationMapZoomConfig | null | null;
  withZoomConfiguration(zoomConfiguration: IUiSdlGraphVisualizationChartZoomConfig | null | IUiSdlGraphVisualizationMapZoomConfig | null | null): UiSdlGraphVisualizationReact;

  readonly zoomToRegionOnClick?: boolean;
  withZoomToRegionOnClick(zoomToRegionOnClick: boolean): UiSdlGraphVisualizationReact;

  readonly allowNodeAnnotations?: boolean;
  withAllowNodeAnnotations(allowNodeAnnotations: boolean): UiSdlGraphVisualizationReact;

  readonly exportGraph?: boolean;
  withExportGraph(exportGraph: boolean): UiSdlGraphVisualizationReact;

  readonly hiddenNodes?: C3.Array<string | null>;
  withHiddenNodes(hiddenNodes: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  readonly exportFileName?: string | null | UiSdlDynamicValueSpec | null | null;
  withExportFileName(exportFileName: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlGraphVisualizationReact;
}

