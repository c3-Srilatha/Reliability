export interface UiSdlGraphVisualization {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualization;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualization;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualization;

  readonly dataSpec?: UiSdlGraphVisualizationDataSpec | null;
  withDataSpec(dataSpec: IUiSdlGraphVisualizationDataSpec | null): UiSdlGraphVisualization;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualization;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualization;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualization;

  readonly hiddenRegions?: C3.Array<string | null>;
  withHiddenRegions(hiddenRegions: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualization;

  readonly activeNodePopover?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withActiveNodePopover(activeNodePopover: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlGraphVisualization;

  readonly activeTooltip?: UiSdlGraphVisualizationTooltipData | null;
  withActiveTooltip(activeTooltip: IUiSdlGraphVisualizationTooltipData | null): UiSdlGraphVisualization;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphVisualization;

  readonly cacheKey?: string | null;
  withCacheKey(cacheKey: string | null): UiSdlGraphVisualization;

  readonly clearable?: boolean;
  withClearable(clearable: boolean): UiSdlGraphVisualization;

  readonly isClearingCanvasItems?: boolean;
  withIsClearingCanvasItems(isClearingCanvasItems: boolean): UiSdlGraphVisualization;

  readonly combineConfig?: UiSdlGraphVisualizationCombineConfig | null;
  withCombineConfig(combineConfig: IUiSdlGraphVisualizationCombineConfig | null): UiSdlGraphVisualization;

  readonly dispatchRealtimeTimebarAction?: boolean;
  withDispatchRealtimeTimebarAction(dispatchRealtimeTimebarAction: boolean): UiSdlGraphVisualization;

  readonly mapboxStyle?: string | null;
  withMapboxStyle(mapboxStyle: string | null): UiSdlGraphVisualization;

  readonly mapboxVersion?: string | null;
  withMapboxVersion(mapboxVersion: string | null): UiSdlGraphVisualization;

  readonly draw?: UiSdlGraphVisualizationDrawConfig | null;
  withDraw(draw: IUiSdlGraphVisualizationDrawConfig | null): UiSdlGraphVisualization;

  readonly data?: UiSdlGraphVisualizationData | null;
  withData(data: IUiSdlGraphVisualizationData | null): UiSdlGraphVisualization;

  readonly canvasItems?: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null>;
  withCanvasItems(canvasItems: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null> | {[key: string | null]: IUiSdlGraphVisualizationDataNode | null | IUiSdlGraphVisualizationDataEdge | null | null}): UiSdlGraphVisualization;

  readonly forceCanvasItemsInitialization?: boolean;
  withForceCanvasItemsInitialization(forceCanvasItemsInitialization: boolean): UiSdlGraphVisualization;

  readonly defaultFitOptionOnSelect?: string | null;
  withDefaultFitOptionOnSelect(defaultFitOptionOnSelect: string | null): UiSdlGraphVisualization;

  readonly fitOption?: string | null;
  withFitOption(fitOption: string | null): UiSdlGraphVisualization;

  readonly defaultEdgeColors?: C3.Array<string | null>;
  withDefaultEdgeColors(defaultEdgeColors: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualization;

  readonly defaultNodeColors?: C3.Array<string | null>;
  withDefaultNodeColors(defaultNodeColors: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualization;

  readonly disableMergedEdges?: boolean;
  withDisableMergedEdges(disableMergedEdges: boolean): UiSdlGraphVisualization;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlGraphVisualization;

  readonly endSpacing?: string | null;
  withEndSpacing(endSpacing: string | null): UiSdlGraphVisualization;

  readonly geoJsonDataSpec?: UiSdlGraphVisualizationGeoJsonDataSpec | null;
  withGeoJsonDataSpec(geoJsonDataSpec: IUiSdlGraphVisualizationGeoJsonDataSpec | null): UiSdlGraphVisualization;

  readonly geoJsonData?: any | null;
  withGeoJsonData(geoJsonData: any | null): UiSdlGraphVisualization;

  readonly shapeData?: any | null;
  withShapeData(shapeData: any | null): UiSdlGraphVisualization;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlGraphVisualization;

  readonly highlightedItemIds?: C3.Array<string | null>;
  withHighlightedItemIds(highlightedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualization;

  readonly hoverConfig?: UiSdlGraphVisualizationHoverConfig | null;
  withHoverConfig(hoverConfig: IUiSdlGraphVisualizationHoverConfig | null): UiSdlGraphVisualization;

  readonly hoveredEdgeId?: string | null;
  withHoveredEdgeId(hoveredEdgeId: string | null): UiSdlGraphVisualization;

  readonly hoveredNodeId?: string | null;
  withHoveredNodeId(hoveredNodeId: string | null): UiSdlGraphVisualization;

  readonly layout?: UiSdlGraphVisualizationLayout | null;
  withLayout(layout: IUiSdlGraphVisualizationLayout | null): UiSdlGraphVisualization;

  readonly animation?: UiSdlGraphVisualizationAnimation | null;
  withAnimation(animation: IUiSdlGraphVisualizationAnimation | null): UiSdlGraphVisualization;

  readonly legendConfig?: UiSdlGraphVisualizationCanvasLegendConfig | null;
  withLegendConfig(legendConfig: IUiSdlGraphVisualizationCanvasLegendConfig | null): UiSdlGraphVisualization;

  readonly mergedEdgeConfig?: UiSdlGraphVisualizationMergedEdgeConfig | null;
  withMergedEdgeConfig(mergedEdgeConfig: IUiSdlGraphVisualizationMergedEdgeConfig | null): UiSdlGraphVisualization;

  readonly mergedEdgeMapping?: C3.Map<string | null, string | null>;
  withMergedEdgeMapping(mergedEdgeMapping: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphVisualization;

  readonly pingConfig?: UiSdlGraphVisualizationPingConfig | null;
  withPingConfig(pingConfig: IUiSdlGraphVisualizationPingConfig | null): UiSdlGraphVisualization;

  readonly pingItems?: C3.Array<string | null>;
  withPingItems(pingItems: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualization;

  readonly resettable?: boolean;
  withResettable(resettable: boolean): UiSdlGraphVisualization;

  readonly selectedItems?: C3.Map<string | null, boolean>;
  withSelectedItems(selectedItems: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlGraphVisualization;

  readonly selectedNodeIds?: C3.Array<string | null>;
  withSelectedNodeIds(selectedNodeIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualization;

  readonly selectedEdgeIds?: C3.Array<string | null>;
  withSelectedEdgeIds(selectedEdgeIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualization;

  readonly selectionConfig?: UiSdlGraphVisualizationSelectionConfig | null;
  withSelectionConfig(selectionConfig: IUiSdlGraphVisualizationSelectionConfig | null): UiSdlGraphVisualization;

  readonly selectedRegion?: string | null;
  withSelectedRegion(selectedRegion: string | null): UiSdlGraphVisualization;

  readonly showMap?: boolean;
  withShowMap(showMap: boolean): UiSdlGraphVisualization;

  readonly showEdgesOnMap?: boolean;
  withShowEdgesOnMap(showEdgesOnMap: boolean): UiSdlGraphVisualization;

  readonly showLegend?: boolean;
  withShowLegend(showLegend: boolean): UiSdlGraphVisualization;

  readonly timeBarConfig?: UiSdlGraphVisualizationTimeBarConfig | null;
  withTimeBarConfig(timeBarConfig: IUiSdlGraphVisualizationTimeBarConfig | null): UiSdlGraphVisualization;

  readonly timeBarInRangeItems?: C3.Array<string | null>;
  withTimeBarInRangeItems(timeBarInRangeItems: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualization;

  readonly showZoomControls?: boolean;
  withShowZoomControls(showZoomControls: boolean): UiSdlGraphVisualization;

  readonly zoomConfiguration?: UiSdlGraphVisualizationChartZoomConfig | null | UiSdlGraphVisualizationMapZoomConfig | null | null;
  withZoomConfiguration(zoomConfiguration: IUiSdlGraphVisualizationChartZoomConfig | null | IUiSdlGraphVisualizationMapZoomConfig | null | null): UiSdlGraphVisualization;

  readonly zoomToRegionOnClick?: boolean;
  withZoomToRegionOnClick(zoomToRegionOnClick: boolean): UiSdlGraphVisualization;

  readonly allowNodeAnnotations?: boolean;
  withAllowNodeAnnotations(allowNodeAnnotations: boolean): UiSdlGraphVisualization;

  readonly exportGraph?: boolean;
  withExportGraph(exportGraph: boolean): UiSdlGraphVisualization;

  readonly hiddenNodes?: C3.Array<string | null>;
  withHiddenNodes(hiddenNodes: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualization;

  readonly exportFileName?: string | null | UiSdlDynamicValueSpec | null | null;
  withExportFileName(exportFileName: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlGraphVisualization;
}

