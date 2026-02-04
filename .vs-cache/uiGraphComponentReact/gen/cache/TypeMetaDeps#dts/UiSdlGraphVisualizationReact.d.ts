// TypeScript definitions for the C3 type UiSdlGraphVisualizationReact

/**
 * The react component type of {@link UiSdlGraphVisualization}.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlGraphVisualizationReact
 */
declare interface IUiSdlGraphVisualizationReact {

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string | null;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string | null;

  /**
   * The specification used for retrieving data displayed by the graph.
   */
  dataSpec?: IUiSdlGraphVisualizationDataSpec | null;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  disableDataRequestOnFirstRender?: boolean;

  /**
   * Whether the effect triggers and epics have been registered
   */
  triggersRegistered?: boolean;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  wrapWithMetadataId?: boolean;

  /**
   * A list of hidden region ids.
   */
  hiddenRegions?: C3.Array<string | null> | Array<string | null>;

  /**
   * The component that is rendered when a node is clicked.
   */
  activeNodePopover?: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;

  /**
   * Holds the data to be displayed in the graph's tooltip.
   */
  activeTooltip?: IUiSdlGraphVisualizationTooltipData | null;

  /**
   * The background color of the chart canvas. Defaults to {@link UiSdlThemeTemplate#componentBackgroundColor}.
   */
  backgroundColor?: string | null;

  /**
   * The cache key of the whole in-memory graph. See {@link InMemoryGraph#m_cacheKey}.
   */
  cacheKey?: string | null;

  /**
   * Whether or not graph should be clearable.
   * If set to true, a button is rendered on the canvas that the user can click to clear the graph.
   */
  clearable?: boolean;

  /**
   * Whether the clearing of canvas items is in progress.
   * This field is used to determine whether the clear graph warning modal component should show up.
   * See usage of this field in `SDLGraphVisualization.jsx` for more details.
   */
  isClearingCanvasItems?: boolean;

  /**
   * The config for controlling when the nodes should combine into groups.
   */
  combineConfig?: IUiSdlGraphVisualizationCombineConfig | null;

  /**
   * Boolean to config if timebar should dispatch setTimeBarInRangeItemsAction or not for each change.
   * Default is true, meaning each time timebar moves, it will dispatch the action.
   * When false, no action will dispatch during timebar play,
   * and one action will dispatch to update redux when timebar finishes animation.
   *
   * Usage: Developer should leave this as is if no performance slowdown with timebar animation.
   * If animating large dataset with timebar shows lagging, turn this off to improve animation performance.
   * WARNING: turn this boolean off WILL cause redux store to go out of sync with component during animation.
   */
  dispatchRealtimeTimebarAction?: boolean;

  /**
   * Mapbox Style that will be used to call the API and get a styled map
   */
  mapboxStyle?: string | null;

  /**
   * Mapbox API version that's used with the style label to be able to retrieve the proper styles.
   */
  mapboxVersion?: string | null;

  /**
   * The configuration for draw toolbar.
   */
  draw?: IUiSdlGraphVisualizationDrawConfig | null;

  /**
   * Holds the data to display in the graph.
   */
  data?: IUiSdlGraphVisualizationData | null;

  /**
   * Holds the data that appears on the canvas.  Cloned from props.data.  This is the state that will be updated when
   * the graph on the canvas changes, for example, hovering or selecting a node.
   */
  canvasItems?: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null> | {[key: string | null]: IUiSdlGraphVisualizationDataNode | null | IUiSdlGraphVisualizationDataEdge | null | null};

  /**
   * Flag to force initialization of `canvasItems`.
   */
  forceCanvasItemsInitialization?: boolean;

  /**
   * The default fit option for the graph when an item is selected.
   */
  defaultFitOptionOnSelect?: string | null;

  /**
   * The default fit option for the graph when data load.
   */
  fitOption?: string | null;

  /**
   * A list of default colors used to color edges.
   *
   * If {@link UiSdlGraphVisualizationEdgeStyleConfig#fillColorByProperty} is of type
   * {@link UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical}, the component will assign a color to each
   * category from here in order.
   *
   * The colors have to belong to {@link UiSdlGraphVisualizationFillColorOption}.
   */
  defaultEdgeColors?: C3.Array<string | null> | Array<string | null>;

  /**
   * A list of default colors used to color nodes.
   *
   * If {@link UiSdlGraphVisualizationNodeStyleConfig#fillColorByProperty} is of type
   * {@link UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical}, the component will assign a color to each
   * category from here in order.
   *
   * The colors have to belong to {@link UiSdlGraphVisualizationFillColorOption}.
   */
  defaultNodeColors?: C3.Array<string | null> | Array<string | null>;

  /**
   * By default, all edges between two nodes are merged into a single edge.
   * Set this to true to disable merged edges.
   */
  disableMergedEdges?: boolean;

  /**
   * The component that handles the empty state.
   * It will appear if the grid has no data.
   * Empty state is only availible if {@link showMap} is false
   */
  emptyState?: IUiSdlComponentRef<UiSdlEmptyState | null> | null;

  /**
   * Defaults to tight, loose will put a little space between the node and the edge.
   */
  endSpacing?: string | null;

  /**
   * The specification used for retrieving GeoJSON data passed on to Leaflet to be rendered in the tile layer.
   */
  geoJsonDataSpec?: IUiSdlGraphVisualizationGeoJsonDataSpec | null;

  /**
   * Holds the data passed to Leaflet to display on the tile layer on the map. Needs to be in the GeoJSON format:
   * https://leafletjs.com/examples/geojson/
   */
  geoJsonData?: any | null;

  /**
   * Holds draw shape data created by user using the drawing tool
   * structured as geoJsonData
   */
  shapeData?: any | null;

  /**
   * The height in pixels of the graph.  This will be reflected in the height of the container div; the graph
   * element itself will then take up 100% of the container's height.
   */
  height?: number | null;

  /**
   * The list of highlighted item ids when an item is hovered on or selected. This field is only set if
   * {@link UiSdlGraphVisualizationHoverConfig#highlightNeighborsOnHover} or
   * {@link UiSdlGraphVisualizationSelectionConfig#highlightNeighborsOnSelect} is true.
   */
  highlightedItemIds?: C3.Array<string | null> | Array<string | null>;

  /**
   * The configuration to control the appearance and behavior of hovered items.
   */
  hoverConfig?: IUiSdlGraphVisualizationHoverConfig | null;

  /**
   * The id of the currently hovered edge.
   */
  hoveredEdgeId?: string | null;

  /**
   * The id of the currently hovered node.
   */
  hoveredNodeId?: string | null;

  /**
   * The layout configuration to use.
   */
  layout?: IUiSdlGraphVisualizationLayout | null;

  /**
   * Controls animations on the graph.
   */
  animation?: IUiSdlGraphVisualizationAnimation | null;

  /**
   * Canvas legend configuration.
   */
  legendConfig?: IUiSdlGraphVisualizationCanvasLegendConfig | null;

  /**
   * The configuration for controlling how to merge multiple links between two nodes.
   */
  mergedEdgeConfig?: IUiSdlGraphVisualizationMergedEdgeConfig | null;

  /**
   * A mapping from an original edge id to its merged edge id.
   */
  mergedEdgeMapping?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * Configuration for a temporary animated halo effect to a node or a link, also known as a ping effect.
   */
  pingConfig?: IUiSdlGraphVisualizationPingConfig | null;

  /**
   * An array of node or edge ids to temporarily animate or ping.
   */
  pingItems?: C3.Array<string | null> | Array<string | null>;

  /**
   * Whether or not graph should be resettable.
   * If set to true, a button is rendered on the canvas that the user can click to reset the graph.
   */
  resettable?: boolean;

  /**
   * A dictionary with a truthy property for each selected item.
   * The keys are the ids of the selected node/edge.
   */
  selectedItems?: C3.Map<string | null, boolean> | {[key: string | null]: boolean};

  /**
   * An array of node ids which represent selected nodes on the graph canvas.
   */
  selectedNodeIds?: C3.Array<string | null> | Array<string | null>;

  /**
   * An array of edge ids which represent selected edges on the graph canvas.
   */
  selectedEdgeIds?: C3.Array<string | null> | Array<string | null>;

  /**
   * The configuration to control the appearance and behavior of selected items.
   */
  selectionConfig?: IUiSdlGraphVisualizationSelectionConfig | null;

  /**
   * The name of the selected GeoJSON region.
   */
  selectedRegion?: string | null;

  /**
   * Set to true to enable map mode.
   */
  showMap?: boolean;

  /**
   * Set to true to show edges between nodes when {@link showMap} is `true`.
   */
  showEdgesOnMap?: boolean;

  /**
   * When true show the canvas legend.
   */
  showLegend?: boolean;

  /**
   * The configuration to control the appearance of the time bar.
   * Must be configured in order for the time bar to be shown.
   * Currently the time bar only supports filtering on edge temporal data or node
   * temporal data. If provided configs for both, it will default to filtering
   * on edges and ignore node temporal data.
   */
  timeBarConfig?: IUiSdlGraphVisualizationTimeBarConfig | null;

  /**
   * The items in the currently visible time bar range.
   */
  timeBarInRangeItems?: C3.Array<string | null> | Array<string | null>;

  /**
   * Whether or not the zoom control buttons should be displayed on this graph.
   * If set to true, a button group is rendered on the canvas that the user can use zoom in,
   * zoom out and re-center the graph.
   * If set to false, the mouse/trackpad gestures still enable the users to zoom in/out.
   */
  showZoomControls?: boolean;

  /**
   * Configuration for the zooming in the graph visualization.
   */
  zoomConfiguration?: IUiSdlGraphVisualizationChartZoomConfig | null | IUiSdlGraphVisualizationMapZoomConfig | null | null;

  /**
   * Whether or not clicking on a geoJson region will select the region.
   * Note, this will only work if {@link showMap} and {@link geoJsonDataSpec#selectable} is true.
   */
  zoomToRegionOnClick?: boolean;

  /**
   * Whether to allow the user to annotate nodes.
   */
  allowNodeAnnotations?: boolean;

  /**
   * Whether or not the graph should be exportable. (Export with geoJson data is not supported)
   * If set to true, a button is rendered on the canvas that the user can click to export the graph as a PDF.
   */
  exportGraph?: boolean;

  /**
   * A list of hidden nodes ids.
   */
  hiddenNodes?: C3.Array<string | null> | Array<string | null>;

  /**
   * The name of the file to be exported when the user clicks the export button.
   */
  exportFileName?: string | null | IUiSdlDynamicValueSpec | null | null;
}

/**
 * The react component type of {@link UiSdlGraphVisualization}.
 *
 * @remarks this represents a made instance of UiSdlGraphVisualizationReact
 */
declare class UiSdlGraphVisualizationReact extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationReact;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationReact;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationReact;

  /**
   * The specification used for retrieving data displayed by the graph.
   */
  readonly dataSpec?: UiSdlGraphVisualizationDataSpec | null;
  withDataSpec(dataSpec: IUiSdlGraphVisualizationDataSpec | null): UiSdlGraphVisualizationReact;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationReact;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationReact;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationReact;

  /**
   * A list of hidden region ids.
   */
  readonly hiddenRegions?: C3.Array<string | null>;
  withHiddenRegions(hiddenRegions: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * The component that is rendered when a node is clicked.
   */
  readonly activeNodePopover?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withActiveNodePopover(activeNodePopover: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlGraphVisualizationReact;

  /**
   * Holds the data to be displayed in the graph's tooltip.
   */
  readonly activeTooltip?: UiSdlGraphVisualizationTooltipData | null;
  withActiveTooltip(activeTooltip: IUiSdlGraphVisualizationTooltipData | null): UiSdlGraphVisualizationReact;

  /**
   * The background color of the chart canvas. Defaults to {@link UiSdlThemeTemplate#componentBackgroundColor}.
   */
  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphVisualizationReact;

  /**
   * The cache key of the whole in-memory graph. See {@link InMemoryGraph#m_cacheKey}.
   */
  readonly cacheKey?: string | null;
  withCacheKey(cacheKey: string | null): UiSdlGraphVisualizationReact;

  /**
   * Whether or not graph should be clearable.
   * If set to true, a button is rendered on the canvas that the user can click to clear the graph.
   */
  readonly clearable?: boolean;
  withClearable(clearable: boolean): UiSdlGraphVisualizationReact;

  /**
   * Whether the clearing of canvas items is in progress.
   * This field is used to determine whether the clear graph warning modal component should show up.
   * See usage of this field in `SDLGraphVisualization.jsx` for more details.
   */
  readonly isClearingCanvasItems?: boolean;
  withIsClearingCanvasItems(isClearingCanvasItems: boolean): UiSdlGraphVisualizationReact;

  /**
   * The config for controlling when the nodes should combine into groups.
   */
  readonly combineConfig?: UiSdlGraphVisualizationCombineConfig | null;
  withCombineConfig(combineConfig: IUiSdlGraphVisualizationCombineConfig | null): UiSdlGraphVisualizationReact;

  /**
   * Boolean to config if timebar should dispatch setTimeBarInRangeItemsAction or not for each change.
   * Default is true, meaning each time timebar moves, it will dispatch the action.
   * When false, no action will dispatch during timebar play,
   * and one action will dispatch to update redux when timebar finishes animation.
   *
   * Usage: Developer should leave this as is if no performance slowdown with timebar animation.
   * If animating large dataset with timebar shows lagging, turn this off to improve animation performance.
   * WARNING: turn this boolean off WILL cause redux store to go out of sync with component during animation.
   */
  readonly dispatchRealtimeTimebarAction?: boolean;
  withDispatchRealtimeTimebarAction(dispatchRealtimeTimebarAction: boolean): UiSdlGraphVisualizationReact;

  /**
   * Mapbox Style that will be used to call the API and get a styled map
   */
  readonly mapboxStyle?: string | null;
  withMapboxStyle(mapboxStyle: string | null): UiSdlGraphVisualizationReact;

  /**
   * Mapbox API version that's used with the style label to be able to retrieve the proper styles.
   */
  readonly mapboxVersion?: string | null;
  withMapboxVersion(mapboxVersion: string | null): UiSdlGraphVisualizationReact;

  /**
   * The configuration for draw toolbar.
   */
  readonly draw?: UiSdlGraphVisualizationDrawConfig | null;
  withDraw(draw: IUiSdlGraphVisualizationDrawConfig | null): UiSdlGraphVisualizationReact;

  /**
   * Holds the data to display in the graph.
   */
  readonly data?: UiSdlGraphVisualizationData | null;
  withData(data: IUiSdlGraphVisualizationData | null): UiSdlGraphVisualizationReact;

  /**
   * Holds the data that appears on the canvas.  Cloned from props.data.  This is the state that will be updated when
   * the graph on the canvas changes, for example, hovering or selecting a node.
   */
  readonly canvasItems?: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null>;
  withCanvasItems(canvasItems: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null> | {[key: string | null]: IUiSdlGraphVisualizationDataNode | null | IUiSdlGraphVisualizationDataEdge | null | null}): UiSdlGraphVisualizationReact;

  /**
   * Flag to force initialization of `canvasItems`.
   */
  readonly forceCanvasItemsInitialization?: boolean;
  withForceCanvasItemsInitialization(forceCanvasItemsInitialization: boolean): UiSdlGraphVisualizationReact;

  /**
   * The default fit option for the graph when an item is selected.
   */
  readonly defaultFitOptionOnSelect?: string | null;
  withDefaultFitOptionOnSelect(defaultFitOptionOnSelect: string | null): UiSdlGraphVisualizationReact;

  /**
   * The default fit option for the graph when data load.
   */
  readonly fitOption?: string | null;
  withFitOption(fitOption: string | null): UiSdlGraphVisualizationReact;

  /**
   * A list of default colors used to color edges.
   *
   * If {@link UiSdlGraphVisualizationEdgeStyleConfig#fillColorByProperty} is of type
   * {@link UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical}, the component will assign a color to each
   * category from here in order.
   *
   * The colors have to belong to {@link UiSdlGraphVisualizationFillColorOption}.
   */
  readonly defaultEdgeColors?: C3.Array<string | null>;
  withDefaultEdgeColors(defaultEdgeColors: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * A list of default colors used to color nodes.
   *
   * If {@link UiSdlGraphVisualizationNodeStyleConfig#fillColorByProperty} is of type
   * {@link UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical}, the component will assign a color to each
   * category from here in order.
   *
   * The colors have to belong to {@link UiSdlGraphVisualizationFillColorOption}.
   */
  readonly defaultNodeColors?: C3.Array<string | null>;
  withDefaultNodeColors(defaultNodeColors: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * By default, all edges between two nodes are merged into a single edge.
   * Set this to true to disable merged edges.
   */
  readonly disableMergedEdges?: boolean;
  withDisableMergedEdges(disableMergedEdges: boolean): UiSdlGraphVisualizationReact;

  /**
   * The component that handles the empty state.
   * It will appear if the grid has no data.
   * Empty state is only availible if {@link showMap} is false
   */
  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlGraphVisualizationReact;

  /**
   * Defaults to tight, loose will put a little space between the node and the edge.
   */
  readonly endSpacing?: string | null;
  withEndSpacing(endSpacing: string | null): UiSdlGraphVisualizationReact;

  /**
   * The specification used for retrieving GeoJSON data passed on to Leaflet to be rendered in the tile layer.
   */
  readonly geoJsonDataSpec?: UiSdlGraphVisualizationGeoJsonDataSpec | null;
  withGeoJsonDataSpec(geoJsonDataSpec: IUiSdlGraphVisualizationGeoJsonDataSpec | null): UiSdlGraphVisualizationReact;

  /**
   * Holds the data passed to Leaflet to display on the tile layer on the map. Needs to be in the GeoJSON format:
   * https://leafletjs.com/examples/geojson/
   */
  readonly geoJsonData?: any | null;
  withGeoJsonData(geoJsonData: any | null): UiSdlGraphVisualizationReact;

  /**
   * Holds draw shape data created by user using the drawing tool
   * structured as geoJsonData
   */
  readonly shapeData?: any | null;
  withShapeData(shapeData: any | null): UiSdlGraphVisualizationReact;

  /**
   * The height in pixels of the graph.  This will be reflected in the height of the container div; the graph
   * element itself will then take up 100% of the container's height.
   */
  readonly height?: number | null;
  withHeight(height: number | null): UiSdlGraphVisualizationReact;

  /**
   * The list of highlighted item ids when an item is hovered on or selected. This field is only set if
   * {@link UiSdlGraphVisualizationHoverConfig#highlightNeighborsOnHover} or
   * {@link UiSdlGraphVisualizationSelectionConfig#highlightNeighborsOnSelect} is true.
   */
  readonly highlightedItemIds?: C3.Array<string | null>;
  withHighlightedItemIds(highlightedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * The configuration to control the appearance and behavior of hovered items.
   */
  readonly hoverConfig?: UiSdlGraphVisualizationHoverConfig | null;
  withHoverConfig(hoverConfig: IUiSdlGraphVisualizationHoverConfig | null): UiSdlGraphVisualizationReact;

  /**
   * The id of the currently hovered edge.
   */
  readonly hoveredEdgeId?: string | null;
  withHoveredEdgeId(hoveredEdgeId: string | null): UiSdlGraphVisualizationReact;

  /**
   * The id of the currently hovered node.
   */
  readonly hoveredNodeId?: string | null;
  withHoveredNodeId(hoveredNodeId: string | null): UiSdlGraphVisualizationReact;

  /**
   * The layout configuration to use.
   */
  readonly layout?: UiSdlGraphVisualizationLayout | null;
  withLayout(layout: IUiSdlGraphVisualizationLayout | null): UiSdlGraphVisualizationReact;

  /**
   * Controls animations on the graph.
   */
  readonly animation?: UiSdlGraphVisualizationAnimation | null;
  withAnimation(animation: IUiSdlGraphVisualizationAnimation | null): UiSdlGraphVisualizationReact;

  /**
   * Canvas legend configuration.
   */
  readonly legendConfig?: UiSdlGraphVisualizationCanvasLegendConfig | null;
  withLegendConfig(legendConfig: IUiSdlGraphVisualizationCanvasLegendConfig | null): UiSdlGraphVisualizationReact;

  /**
   * The configuration for controlling how to merge multiple links between two nodes.
   */
  readonly mergedEdgeConfig?: UiSdlGraphVisualizationMergedEdgeConfig | null;
  withMergedEdgeConfig(mergedEdgeConfig: IUiSdlGraphVisualizationMergedEdgeConfig | null): UiSdlGraphVisualizationReact;

  /**
   * A mapping from an original edge id to its merged edge id.
   */
  readonly mergedEdgeMapping?: C3.Map<string | null, string | null>;
  withMergedEdgeMapping(mergedEdgeMapping: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphVisualizationReact;

  /**
   * Configuration for a temporary animated halo effect to a node or a link, also known as a ping effect.
   */
  readonly pingConfig?: UiSdlGraphVisualizationPingConfig | null;
  withPingConfig(pingConfig: IUiSdlGraphVisualizationPingConfig | null): UiSdlGraphVisualizationReact;

  /**
   * An array of node or edge ids to temporarily animate or ping.
   */
  readonly pingItems?: C3.Array<string | null>;
  withPingItems(pingItems: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * Whether or not graph should be resettable.
   * If set to true, a button is rendered on the canvas that the user can click to reset the graph.
   */
  readonly resettable?: boolean;
  withResettable(resettable: boolean): UiSdlGraphVisualizationReact;

  /**
   * A dictionary with a truthy property for each selected item.
   * The keys are the ids of the selected node/edge.
   */
  readonly selectedItems?: C3.Map<string | null, boolean>;
  withSelectedItems(selectedItems: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlGraphVisualizationReact;

  /**
   * An array of node ids which represent selected nodes on the graph canvas.
   */
  readonly selectedNodeIds?: C3.Array<string | null>;
  withSelectedNodeIds(selectedNodeIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * An array of edge ids which represent selected edges on the graph canvas.
   */
  readonly selectedEdgeIds?: C3.Array<string | null>;
  withSelectedEdgeIds(selectedEdgeIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * The configuration to control the appearance and behavior of selected items.
   */
  readonly selectionConfig?: UiSdlGraphVisualizationSelectionConfig | null;
  withSelectionConfig(selectionConfig: IUiSdlGraphVisualizationSelectionConfig | null): UiSdlGraphVisualizationReact;

  /**
   * The name of the selected GeoJSON region.
   */
  readonly selectedRegion?: string | null;
  withSelectedRegion(selectedRegion: string | null): UiSdlGraphVisualizationReact;

  /**
   * Set to true to enable map mode.
   */
  readonly showMap?: boolean;
  withShowMap(showMap: boolean): UiSdlGraphVisualizationReact;

  /**
   * Set to true to show edges between nodes when {@link showMap} is `true`.
   */
  readonly showEdgesOnMap?: boolean;
  withShowEdgesOnMap(showEdgesOnMap: boolean): UiSdlGraphVisualizationReact;

  /**
   * When true show the canvas legend.
   */
  readonly showLegend?: boolean;
  withShowLegend(showLegend: boolean): UiSdlGraphVisualizationReact;

  /**
   * The configuration to control the appearance of the time bar.
   * Must be configured in order for the time bar to be shown.
   * Currently the time bar only supports filtering on edge temporal data or node
   * temporal data. If provided configs for both, it will default to filtering
   * on edges and ignore node temporal data.
   */
  readonly timeBarConfig?: UiSdlGraphVisualizationTimeBarConfig | null;
  withTimeBarConfig(timeBarConfig: IUiSdlGraphVisualizationTimeBarConfig | null): UiSdlGraphVisualizationReact;

  /**
   * The items in the currently visible time bar range.
   */
  readonly timeBarInRangeItems?: C3.Array<string | null>;
  withTimeBarInRangeItems(timeBarInRangeItems: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * Whether or not the zoom control buttons should be displayed on this graph.
   * If set to true, a button group is rendered on the canvas that the user can use zoom in,
   * zoom out and re-center the graph.
   * If set to false, the mouse/trackpad gestures still enable the users to zoom in/out.
   */
  readonly showZoomControls?: boolean;
  withShowZoomControls(showZoomControls: boolean): UiSdlGraphVisualizationReact;

  /**
   * Configuration for the zooming in the graph visualization.
   */
  readonly zoomConfiguration?: UiSdlGraphVisualizationChartZoomConfig | null | UiSdlGraphVisualizationMapZoomConfig | null | null;
  withZoomConfiguration(zoomConfiguration: IUiSdlGraphVisualizationChartZoomConfig | null | IUiSdlGraphVisualizationMapZoomConfig | null | null): UiSdlGraphVisualizationReact;

  /**
   * Whether or not clicking on a geoJson region will select the region.
   * Note, this will only work if {@link showMap} and {@link geoJsonDataSpec#selectable} is true.
   */
  readonly zoomToRegionOnClick?: boolean;
  withZoomToRegionOnClick(zoomToRegionOnClick: boolean): UiSdlGraphVisualizationReact;

  /**
   * Whether to allow the user to annotate nodes.
   */
  readonly allowNodeAnnotations?: boolean;
  withAllowNodeAnnotations(allowNodeAnnotations: boolean): UiSdlGraphVisualizationReact;

  /**
   * Whether or not the graph should be exportable. (Export with geoJson data is not supported)
   * If set to true, a button is rendered on the canvas that the user can click to export the graph as a PDF.
   */
  readonly exportGraph?: boolean;
  withExportGraph(exportGraph: boolean): UiSdlGraphVisualizationReact;

  /**
   * A list of hidden nodes ids.
   */
  readonly hiddenNodes?: C3.Array<string | null>;
  withHiddenNodes(hiddenNodes: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * The name of the file to be exported when the user clicks the export button.
   */
  readonly exportFileName?: string | null | UiSdlDynamicValueSpec | null | null;
  withExportFileName(exportFileName: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlGraphVisualizationReact;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): UiSdlGraphVisualizationReact | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): UiSdlGraphVisualizationReact | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): UiSdlGraphVisualizationReact | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlGraphVisualizationReact | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlGraphVisualizationReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlGraphVisualizationReact | null>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlGraphVisualizationReact | null>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string | null): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType | null): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlGraphVisualizationReact;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): UiSdlGraphVisualizationReact;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): UiSdlGraphVisualizationReact;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): UiSdlGraphVisualizationReact;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): UiSdlGraphVisualizationReact;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): UiSdlGraphVisualizationReact;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): UiSdlGraphVisualizationReact;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlGraphVisualizationReact;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlGraphVisualizationReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlGraphVisualizationReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlGraphVisualizationReact;

  mergeJson(json: any | null): UiSdlGraphVisualizationReact;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlGraphVisualizationReact;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlGraphVisualizationReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlGraphVisualizationReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlGraphVisualizationReact | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlGraphVisualizationReact | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlGraphVisualizationReact | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlGraphVisualizationReact | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlGraphVisualizationReact | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlGraphVisualizationReact | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlGraphVisualizationReact | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlGraphVisualizationReact;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlGraphVisualizationReact;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): UiSdlGraphVisualizationReact | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlGraphVisualizationReact;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): UiSdlGraphVisualizationReact;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlGraphVisualizationReact;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlGraphVisualizationReact>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlGraphVisualizationReact;

  /**
   * Produce the complete TSX file, including the declaration of the interface for the "props" based on the data
   * fields defined on the component type. This interface is always named with the type name plus "Props" and appended
   * to the existing source file.
   */
  static tsx(): string | null;

  /**
   * Produce the "props" interface for an arbitrary type. This will produce a TypeScript interface declaration that
   * includes all the data fields of the specified type, and the public data fields of types it mixes in. The details
   * can be controlled through the spec argument, but the defaults are what gets used by #tsx.
   *
   * @param type the type to examine
   * @param spec options for interface generation
   * @return TypeScript interface declaration
   */
  static buildProps(type: Type, spec?: ReactComponentPropsSpec | null): string | null;

  /**
   * The React component's tsx file path from root folder "/ui". i.e 'common/UiImg.tsx'
   */
  static tsxPath(): string | null;

  /**
   * If it has been imported, returns the imported module to render the UiComponent - the module at the tsxPath()
   */
  static importedModule(): any;

  /**
   * The render function must be implemented as the function the TSX implementation exports.
   */
  static render(props?: UiSdlGraphVisualizationReact | null): void;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<UiSdlGraphVisualizationReact | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlGraphVisualizationReact | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<UiSdlGraphVisualizationReact | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<UiSdlGraphVisualizationReact | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<UiSdlGraphVisualizationReact | null>;

  save(subPath?: string | null, contentType?: string | null): UiSdlGraphVisualizationReact;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: UiSdlGraphVisualizationReact | null, spec?: UpsertSpec | null): UiSdlGraphVisualizationReact | null;

  upsert(srcObj?: UiSdlGraphVisualizationReact | null, spec?: UpsertSpec | null): UiSdlGraphVisualizationReact | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): UiSdlGraphVisualizationReact | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): UiSdlGraphVisualizationReact | null;

  jsonStringify(): string | null;

  static jsonify(value?: any): string | null;

  /**
   * A function to perform the setting and merging of keys and values for the dataSpec
   * and entity data in the react props. Components that need custom merging of multiple or nested datasources
   * should override this function and provide their own custom setting/merging logic.
   *
   * @param componentId
   *           The id of the component on which the function is being called
   * @param dataSpecFieldName
   *           The name of the field which is annotated as a dataSpec
   * @param dataDestinationFieldName
   *           Contains field name to store the returned data
   * @param props
   *           The object that will eventually be delivered to the component as react props
   * @param state
   *           The redux state
   * @returns props after the data has been set/merged
   */
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiSdlGraphVisualizationReact, state: UiSdlReduxState): UiSdlGraphVisualizationReact | null;

  /**
   * Triggered the first time a component renders. Applications should never
   * trigger this action manually, as it will be triggered internally by the
   * framework. If multiple instances of the same component (i.e. having the
   * same id) are present on a single page, the framework _may_ trigger this
   * action multiple times—at most once per component instance and at least once
   * overall.
   *
   * @param id
   *           The id of the component that is rendered.
   * @returns an `INITIAL_RENDER` action.
   */
  static renderInitialAction(id: string): UiSdlInitialRenderAction;

  /**
   * Triggered the first time a component renders. Component will trigger this action
   * when it registers effect triggers
   * @param id
   *           The id of the component that is rendered.
   * @returns an `REGISTER_TRIGGERS` action.
   */
  static registerTriggersAction(id: string): UiSdlRegisterTriggersAction;

  /**
   * Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  triggersRegisterEffect(state: UiSdlReduxState, action: UiSdlRegisterTriggersAction): UiSdlReduxState;

  /**
   * Triggered to update chart hidden regions.
   *
   * @param id
   *            Id of the component.
   * @param hiddenRegionIds
   *            Array of region ids to hide.
   *
   * @return A `SHOW_HIDE_REGIONS` action for this instance with the following properties:
   * - payload {string} The id's of the regions.
   */
  static showHideRegionsAction(id: string, hiddenRegionIds: C3.Array<string | null>): UiSdlGraphVisualizationShowHideRegionsAction | null;

  /**
   * Listens for actions of type `SHOW_HIDE_REGIONS` and updates internal field {@link hiddenRegions}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static showHideRegionsReducer(state?: UiSdlReduxState | null, action?: UiSdlGraphVisualizationShowHideRegionsAction | null): UiSdlReduxState | null;

  /**
   * Triggered after the user clicks the clear graph button.
   *
   * @param id
   *           Id of the component.
   * @param warningModalId
   *           Id of the warning modal that will be displayed.
   *
   * @return a `WARNING_MODAL_OPEN` action for this instance with the following properties:
   * - payload.componentId {string} id of the graph visualization instance that originated the clear graph action.
   * - payload.warningModalId {string} id of the warning modal.
   */
  static openWarningModalAction(id?: string | null, warningModalId?: string | null): UiSdlWarningModalOpenAction | null;

  /**
   * Triggered after the user exits from the warning modal by clicking its primary button.
   *
   * @param id
   *           Id of the component.
   * @param warningModalId
   *           Id of the warning modal that will be closed.
   *
   * @return a `WARNING_MODAL_CLOSE` action for this instance with the following properties:
   * - payload.componentId {string} id of the graph visualization instance that originated the clear graph action.
   * - payload.warningModalId {string} id of the warning modal.
   */
  static closeWarningModalAction(id?: string | null, warningModalId?: string | null): UiSdlWarningModalCloseAction | null;

  /**
   * Triggered when an edge is clicked.
   *
   * @param id
   *           Id of the component.
   * @param edgeId
   *           Id of the edge.
   * @return a `EDGE_CLICK` action for this instance.
   */
  static clickEdgeAction(id?: string | null, edgeId?: string | null): UiSdlReduxAction<UiSdlGraphVisualizationClickEdgeActionPayload | null>;

  /**
   * Triggered when an edge glyph is clicked.
   *
   * @param id
   *           Id of the component.
   * @param edgeId
   *           Id of the edge that contains the glyph that was clicked.
   * @param glyph
   *           The glyph that was clicked.
   * ```
   * item.glyphs[glyphIndex]
   * ```
   *
   * @return a `EDGE_GLYPH_CLICK` action for this instance.
   */
  static clickEdgeGlyphAction(id?: string | null, edgeId?: string | null, glyph?: UiSdlGraphVisualizationBaseGlyphConfig | null): UiSdlReduxAction<UiSdlGraphVisualizationClickEdgeGlyphActionPayload | null>;

  /**
   * Triggered when a node or a group of nodes are dragged and dropped.
   * This action shows that the nodes have been moved to a new position.
   *
   * @param id
   *           Id of the component.
   * @param nodes
   *           A map with node ids as keys and position information as values.
   * @return a `NODES_POSITIONS_CHANGED` action for this instance.
   */
  static changedNodesPositionsAction(id?: string | null, nodes?: C3.Map<string | null, UiSdlGraphVisualizationNodePosition | null>): UiSdlReduxAction<UiSdlGraphVisualizationChangedNodesPositionsActionPayload | null>;

  /**
   * Triggered when a user changes the general graph view parameters. (e.g. zoom, offsetX, offsetY)
   * This action shows that the graph view info has been modified.
   *
   * @param id
   *           Id of the component
   * @param view
   *           The new graph view parameters.
   * @return a `GRAPH_VIEW_CHANGED` action for this instance.
   */
  static changedGraphViewAction(id?: string | null, view?: UiSdlGraphVisualizationGraphView | null): UiSdlReduxAction<UiSdlGraphVisualizationChangedGraphViewActionPayload | null>;

  /**
   * Triggered when the graph is clicked.
   *
   * @param id
   *           Id of the component.
   * @param lat
   *           Latitude of clicked point
   * @param lng
   *           Longitude of clicked point
   * @return a `GRAPH_CLICK` action for this instance.
   */
  static clickGraphAction(id?: string | null, lat?: number | null, lng?: number | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggered when a node is clicked.
   *
   * @param id
   *           Id of the component.
   * @param nodeId
   *           Id of the node.
   * @return a `NODE_CLICK` action for this instance.
   */
  static clickNodeAction(id?: string | null, nodeId?: string | null): UiSdlReduxAction<UiSdlGraphVisualizationClickNodeActionPayload | null>;

  /**
   * Triggered when a GeoJSON region is clicked.
   *
   * @param id
   *           Id of the component.
   * @param regionId
   *           Id of the region.
   * @return a `REGION_CLICK` action for this instance.
   */
  static clickRegionAction(id?: string | null, regionId?: string | null): UiSdlReduxAction<UiSdlGraphVisualizationClickRegionActionPayload | null>;

  /**
   * Triggered when a node glyph is clicked.
   *
   * @param id
   *           Id of the component.
   * @param nodeId
   *           Id of the node that contains the glyph that was clicked.
   * @param glyph
   *           The glyph that was clicked.
   * ```
   * item.glyphs[glyphIndex]
   * ```
   *
   * @return a `NODE_GLYPH_CLICK` action for this instance.
   */
  static clickNodeGlyphAction(id?: string | null, nodeId?: string | null, glyph?: UiSdlGraphVisualizationBaseGlyphConfig | null): UiSdlReduxAction<UiSdlGraphVisualizationClickNodeGlyphActionPayload | null>;

  /**
   * Triggered to update chart hidden nodes.
   *
   * @param id
   *            Id of the component.
   * @param nodeIds
   *            The ids of the nodes to hide.
   *
   * @return A `HIDDEN_GRAPH_NODES_UPDATE` action for this instance with the following properties:
   * - payload {string} The ids of the nodes.
   */
  static updateHiddenNodesAction(id: string, nodeIds: C3.Array<string | null>): UiSdlReduxAction<UiSdlHideGraphVisualizationNodesHiddenNodesUpdatePayload | null>;

  /**
   * Triggered when a legend item is clicked.
   *
   * @param id
   *            Id of the component.
   * @param nodeIds
   *            The ids of the nodes associated with the legend item.
   *
   * @return A `LEGEND_CLICK` action for this instance with the following properties:
   * - payload {string} The ids of the nodes associated with the legend item.
   */
  static clickLegendAction(id: string, nodeIds: C3.Array<string | null>): UiSdlReduxAction<UiSdlGraphVisualizationClickLegendActionPayload | null>;

  /**
   * Triggered when a node is double clicked.
   *
   * @param id
   *           Id of the component.
   * @param nodeId
   *           Id of the node.
   * @return a `NODE_DOUBLE_CLICK` action for this instance.
   */
  static doubleClickNodeAction(id?: string | null, nodeId?: string | null): UiSdlReduxAction<UiSdlGraphVisualizationDoubleClickNodeActionPayload | null>;

  /**
   * Triggered when the `Clear Graph` button is clicked.
   *
   * @param id
   *           Id of the component.
   * @return a `CLEAR_GRAPH_CLICK` action for this instance.
   */
  static clickClearGraphAction(id?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Dispatched to call reducer to set {@link UiSdlGraphVisualization#isClearingCanvasItems} state.
   *
   * @param id
   *           Id of the component.
   * @param isClearingCanvasItems
   *           Whether the clearing of canvas items is in progress.
   * @return a `CLEARING_CANVAS_ITEMS_SET` action for this instance.
   */
  static setClearingCanvasItemsAction(id?: string | null, isClearingCanvasItems?: boolean): UiSdlReduxAction<UiSdlGraphVisualizationSetClearingCanvasItemsActionPayload | null>;

  /**
   * Dispatched when the graph is loaded in memory to sets the cache key in the state.
   *
   * @param id
   *           Id of the component.
   * @param cacheKey
   *           The cacheKey of the cached graph.
   * @return a `CACHE_KEY_SET` action for this instance.
   */
  static setCacheKeyAction(id?: string | null, cacheKey?: string | null): UiSdlReduxAction<UiSdlGraphVisualizationSetCacheKeyActionPayload | null>;

  /**
   * Dispatched to call reducer to set data loading state.
   *
   * @param id
   *           Id of the graph component.
   * @param isDataLoading
   *           Whether the data is loading.
   * @return a `DATA_LOADING_SET` action for this instance.
   */
  static setDataLoadingAction(id?: string | null, isDataLoading?: boolean): UiSdlReduxAction<UiSdlGraphVisualizationSetDataLoadingActionPayload | null>;

  /**
   * Initializes the `canvasItems` state value the first time the component is rendered.
   * @param id
   *           Id of the graph component.
   * @param items
   *           The items to be initialized.
   * @return a `CANVAS_ITEMS_INITIALIZE` action for this instance.
   */
  static initializeCanvasItemsAction(id?: string | null, items?: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null>): UiSdlReduxAction<UiSdlGraphVisualizationInitializeCanvasItemsActionPayload | null>;

  /**
   * Initializes the graphVisualization state to the first time the component is rendered.
   * @param id
   *           Id of the graph component.
   * @return a `RESET_GRAPH_TO_INITIAL_STATE` action for this instance.
   */
  static resetGraphAction(id?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Sets flag value to force initialization of `canvasItems`.
   * @param id
   *           Id of the graph component.
   * @param shouldForceInitialization
   *           Whether to force {@link canvasItems} initialization.
   * @return a `FORCE_CANVAS_ITEMS_INITIALIZATION_SET` action for this instance.
   */
  static setForceCanvasItemsInitializationAction(id?: string | null, shouldForceInitialization?: boolean): UiSdlReduxAction<UiSdlGraphVisualizationForceInitializeCanvasItemsActionPayload | null>;

  /**
   * Triggered when a node is hovered.
   *
   * @param id
   *           Id of the component.
   * @param hoveredNodeId
   *           Id of the hovered node.
   * @param x
   *           The x location of the pointer in view coordinates.
   * @param y
   *           The y location of the pointer in view coordinates.
   * @param zoomValue
   *           The value that represents the current zoom level of the graph.
   * @return a `NODE_HOVER_ON` action for this instance.
   */
  static hoverOnNodeAction(id?: string | null, hoveredNodeId?: string | null, x?: number | null, y?: number | null, zoomValue?: number | null): UiSdlReduxAction<UiSdlGraphVisualizationHoverOnNodeActionPayload | null>;

  /**
   * Triggered when an edge is hovered.
   *
   * @param id
   *           Id of the component.
   * @param hoveredEdgeId
   *           The hovered edge id.
   * @param x
   *           The x location of the pointer in view coordinates.
   * @param y
   *           The y location of the pointer in view coordinates.
   * @return a `EDGE_HOVER_ON` action for this instance.
   */
  static hoverOnEdgeAction(id?: string | null, hoveredEdgeId?: string | null, x?: number | null, y?: number | null): UiSdlReduxAction<UiSdlGraphVisualizationHoverOnEdgeActionPayload | null>;

  /**
   * Triggered when a merged edge is hovered.
   *
   * @param id
   *           Id of the component.
   * @param hoveredEdgeIds
   *           The ids of edges that are constituents of the merged edge.
   * @return a `MERGED_EDGE_HOVER_ON` action for this instance.
   */
  static hoverOnMergedEdgeAction(id?: string | null, hoveredEdgeIds?: C3.Array<string | null>): UiSdlReduxAction<UiSdlGraphVisualizationHoverOnMergedEdgeActionPayload | null>;

  /**
   * Triggered when a node is no longer hovered.
   *
   * @param id
   *           Id of the component.
   * @return a `NODE_HOVER_OFF` action for this instance.
   */
  static hoverOffNodeAction(id?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggers when user creates a shape using drawing tool
   *
   * @param id
   *           Id of the component.
   * @param drawType
   *           The type of draw action it is disaptching
   * @param drawData
   *           The data as GeoJson, of the shape that was drawn.
   * @return a `DRAW_SHAPE` action for this instance.
   */
  static drawShapeAction(id?: string | null, drawType?: string | null, drawData?: any | null, leafletLayerId?: number | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggers when user start using the drawing tool
   *
   * @param id
   *           Id of the component.
   * @param drawType
   *           The type of draw action it is disaptching
   * @return a `DRAW_START` action for this instance.
   */
  static drawStartAction(id?: string | null, actionType?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggers when user stop using the drawing tool
   *
   * @param id
   *           Id of the component.
   * @param drawType
   *           The type of draw action it is disaptching
   * @return a `DRAW_STOP` action for this instance.
   */
  static drawStopAction(id?: string | null, actionType?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggers when user start edit a shape using the editing tool
   *
   * @param id
   *           Id of the component.
   * @param drawType
   *           The type of draw action it is disaptching
   * @return a `DRAW_EDIT_START` action for this instance.
   */
  static drawEditStartAction(id?: string | null, actionType?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggers when user resizes a shape using the editing tool
   *
   * @param id
   *           Id of the component.
   * @param drawType
   *           The type of draw action it is disaptching
   * @return a `DRAW_EDIT_RESIZE` action for this instance.
   */
  static drawEditResizeAction(id?: string | null, actionType?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggers when user edit the vertex of a shape using the editing tool
   *
   * @param id
   *           Id of the component.
   * @param drawType
   *           The type of draw action it is disaptching
   * @return a `DRAW_EDIT_RESIZE` action for this instance.
   */
  static drawEditVertexAction(id?: string | null, actionType?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggers when user moves the shape using the editing tool
   *
   * @param id
   *           Id of the component.
   * @param drawType
   *           The type of draw action it is disaptching
   * @return a `DRAW_EDIT_MOVE` action for this instance.
   */
  static drawEditMoveAction(id?: string | null, actionType?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggers when user stops editing a shape using the editing tool
   *
   * @param id
   *           Id of the component.
   * @param drawType
   *           The type of draw action it is disaptching
   * @return a `DRAW_EDIT_STOP` action for this instance.
   */
  static drawEditStopAction(id?: string | null, actionType?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggered when an edge is no longer hovered.
   *
   * @param id
   *           Id of the component.
   * @return a `EDGE_HOVER_OFF` action for this instance.
   */
  static hoverOffEdgeAction(id?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Triggered when a merged edge is no longer hovered.
   *
   * @param id
   *           Id of the component.
   * @return a `MERGED_EDGE_HOVER_OFF` action for this instance.
   */
  static hoverOffMergedEdgeAction(id?: string | null): UiSdlReduxAction<UiSdlComponentActionPayload | null>;

  /**
   * Dispatched to temporarily animate or ping the given graph items.
   *
   * @param id
   *           Id of the component.
   * @param pingItemIds
   *           The node or edge ids to ping in the graph.
   * @return a `ITEMS_PING` action for this instance.
   */
  static pingItemsAction(id?: string | null, pingItemIds?: C3.Array<string | null>): UiSdlReduxAction<UiSdlGraphVisualizationPingItemsActionPayload | null>;

  /**
   * Dispatched to set merged edge mappings in the graph state.
   *
   * @param id
   *           Id of the graph component.
   * @param mergedEdgeMapping
   *           The mapping of edge ids to merged edge ids.
   * @return a `MERGED_EDGE_MAPPING_SET` action for this instance.
   */
  static setMergedEdgeMappingAction(id?: string | null, mergedEdgeMapping?: C3.Map<string | null, string | null>): UiSdlReduxAction<UiSdlGraphVisualizationSetMergedEdgeMappingActionPayload | null>;

  /**
   * Dispatched to set selected items in the graph.
   *
   * @param id
   *           Id of the graph component.
   * @param selectedItemIds
   *           The list of selected item ids to set.
   * @return a `SELECTED_ITEMS_SET` action for this instance.
   */
  static setSelectedItemsAction(id?: string | null, selectedItemIds?: C3.Array<string | null>): UiSdlReduxAction<UiSdlGraphVisualizationSetSelectedItemsActionPayload | null>;

  /**
   * Dispatched to set the edges that are included in the current time bar range.
   *
   * @param id
   *           Id of the graph component.
   * @param timeBarInRangeItems
   *           The list of in range item ids to set.
   * @return a `TIME_BAR_RANGE_SET` action for this instance.
   */
  static setTimeBarInRangeItemsAction(id?: string | null, timeBarInRangeItems?: C3.Array<string | null>): UiSdlReduxAction<UiSdlGraphVisualizationSetTimeBarInRangeItemsActionPayload | null>;

  /**
   * Dispatched to set the layout.
   *
   * @param id
   *           Id of the graph component.
   * @param layout
   *           The layout object to set.
   * @return a `LAYOUT_SET` action for this instance.
   */
  static setLayoutAction(id?: string | null, layout?: UiSdlGraphVisualizationLayout | null): UiSdlReduxAction<UiSdlGraphVisualizationSetLayoutActionPayload | null>;

  /**
   * Dispatched to set the animation.
   *
   * @param id
   *           Id of the graph component.
   * @param animation
   *           The animation object to set.
   * @return a `ANIMATION_SET` action for this instance.
   */
  static setAnimationAction(id: string, animation?: UiSdlGraphVisualizationAnimation | null): UiSdSetAnimationGraphVisualizationAction;

  /**
   * Dispatched when a context menu item is clicked.
   *
   * @param id
   *           Id of the graph component.
   * @param itemId
   *           The id of the item that was right-clicked to launch the context menu.
   * @param actionToDispatch
   *           The action that should be dispatched when the item is clicked.
   * @return a `CONTEXT_MENU_ITEM_CLICK` action for this instance.
   */
  static clickContextMenuItemAction(id?: string | null, itemId?: string | null, actionToDispatch?: UiSdlAction | null): UiSdlReduxAction<UiSdlGraphVisualizationClickContextMenuItemActionPayload | null>;

  /**
   * Action triggered when an annotation is submitted
   * @param id
   *           The id of the component
   * @param annotation
   *           The text of the annotation
   * @param itemId
   *           The id of the item to be annotated
   * @param itemType
   *           The type of the item being annotated (node/edge)
   * @return a `ANNOTATION_SUBMIT` action for this instance.
   */
  static submitAnnotationAction(id?: string | null, annotation?: string | null, itemId?: string | null, itemType?: string | null): UiSdlReduxAction<UiSdlGraphVisualizationSubmitAnnotationActionPayload | null>;

  /**
   * Dispatched when a combo is changed, either gaining or losing a node.
   *
   * @param id
   *           Id of the graph component.
   * @param item
   *           The item that was added to or removed from a combo.
   * @param items
   *           The canvas items after the change.
   * @return a `COMBO_ITEMS_UPDATED` action for this instance.
   */
  static updateComboItemsAction(id?: string | null, item?: UiSdlGraphVisualizationDataNode | null, items?: C3.Array<UiSdlGraphVisualizationDataNode | null>): UiSdlReduxAction<UiSdlGraphVisualizationUpdateComboItemsActionPayload | null>;

  /**
   * Dispatched when an annotation is deleted.
   *
   *  @param id
   *            Id of the graph component.
   *  @param itemId
   *            The id of the item that the annotation is associated with.
   *  @return a `ANNOTATION_DELETE` action for this instance.
   */
  static deleteAnnotationAction(id?: string | null, itemId?: string | null): UiSdlReduxAction<UiSdlGraphVisualizationDeleteAnnotationActionPayload | null>;

  /**
   * Listens for actions of type `CACHE_KEY_SET` and updates {@link UiSdlGraphVisualization#cacheKey}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static cacheKeySetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `CLEAR_GRAPH_CLICK` and sets {@link UiSdlGraphVisualization#selectedItems},
   * {@link UiSdlGraphVisualization#selectedNodeIds}, {@link UiSdlGraphVisualization#selectedEdgeIds},
   * {@link UiSdlGraphVisualization#selectedRegion}, {@link UiSdlGraphVisualization#timeBarInRangeItems},
   * and {@link UiSdlGraphVisualization#canvasItems} to empty value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static clearGraphClickReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `CLEARING_CANVAS_ITEMS_SET` and updates
   * {@link UiSdlGraphVisualization#isClearingCanvasItems}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static clearingCanvasItemsSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `REGION_CLICK` and updates {@link UiSdlGraphVisualization#selectedRegion}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static regionClickReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `HIDDEN_GRAPH_NODES_UPDATE` and updates {@link UiSdlGraphVisualization#hiddenNodes}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static updateHiddenNodesReducer(state: UiSdlReduxState, action: UiSdlGraphVisualizationClickLegendActionPayload): UiSdlReduxState;

  /**
   * Listens for actions of type `RESET_GRAPH_TO_INITIAL_STATE` and updates {@link UiSdlGraphVisualization}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static resetGraphReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `DRAW_SHAPE` and updates state `shapeData`.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static shapeDrawReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `DATA_LOADING_SET` and sets the loading state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static dataLoadingSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `CANVAS_ITEMS_INITIALIZE` and initializes the canvasItems value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return an Observable action stream.
   */
  static canvasItemsInitializeReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `FORCE_CANVAS_ITEMS_INITIALIZATION_SET` and sets the
   * {@link UiSdlGraphVisualization#forceCanvasItemsInitialization} value in the state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return an Observable action stream.
   */
  static forceCanvasItemsInitializationSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `SELECTED_ITEMS_SET` and sets {@link UiSdlGraphVisualization#selectedItems},
   * {@link UiSdlGraphVisualization#selectedNodeIds} and {@link UiSdlGraphVisualization#selectedEdgeIds} values in the
   * state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static selectedItemsSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `MERGED_EDGE_MAPPING_SET` and sets merged edge mapping in the graph state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static mergedEdgeMappingSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `LAYOUT_SET` and sets the layout in the graph state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static layoutSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `ANIMATION_SET` and sets the animation in the graph state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static setAnimationReducer(state: UiSdlReduxState, action: UiSdSetAnimationGraphVisualizationAction): UiSdlReduxState;

  /**
   * Listens for actions of type `ITEMS_PING` and temporarily animate or ping the given graph items.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static itemsPingReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `TIME_BAR_RANGE_SET` and sets the time bar range and in range ids.
   * If {@link UiSdlGraphVisualizationTimeBarConfig#mode} is 'dim', adds a fade to all items that are out of the
   * timebar range.
   * If {@link UiSdlGraphVisualizationTimeBarConfig#mode} is 'filter', sets the invisible property true on all items
   * that are out of the timebar range. The presentational component omits these items from being passed into the
   * Chart component.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return a new Redux state.
   */
  static timeBarInRangeItemsSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `WARNING_MODAL_OPEN`.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   * @return an Observable action stream.
   */
  static openWarningModalEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type `WARNING_MODAL_CLOSE`.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   * @return an Observable action stream.
   */
  static closeWarningModalEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type `CONTEXT_MENU_ITEM_CLICK`, and dispatches the configured action.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   * @return an Observable action stream.
   */
  static clickContextMenuItemEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
