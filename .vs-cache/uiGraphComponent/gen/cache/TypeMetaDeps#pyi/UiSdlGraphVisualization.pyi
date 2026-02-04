#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.uiGraphComponent.UiSdlGraphVisualizationDrawConfig import UiSdlGraphVisualizationDrawConfig
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiInfrastructure.UiSdlDynamicValueSpec import UiSdlDynamicValueSpec
from c3.platform.Include import Include
from c3.platform.FetchResult import FetchResult
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.WithKey import WithKey
from c3.platform.MapBuilder import MapBuilder
from c3.uiGraphComponent.UiSdlGraphVisualizationNodePosition import UiSdlGraphVisualizationNodePosition
from c3.platform.SetBuilder import SetBuilder
from c3.platform.UiSdlComponentRef import UiSdlComponentRef
from c3.platform.UiSdlReduxState import UiSdlReduxState
from c3.platform.ValueSpec import ValueSpec
from c3.uiGraphComponent.UiSdlGraphVisualizationCombineConfig import UiSdlGraphVisualizationCombineConfig
from c3.platform.Data import Data
from c3.platform.Promise import Promise
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiGraphComponent.UiSdlGraphVisualizationDataSpec import UiSdlGraphVisualizationDataSpec
from c3.uiGraphComponent.UiSdlGraphVisualizationLayout import UiSdlGraphVisualizationLayout
from c3.uiGraphComponent.UiSdSetAnimationGraphVisualizationAction import UiSdSetAnimationGraphVisualizationAction
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.uiGraphComponent.UiSdlGraphVisualizationClickLegendActionPayload import UiSdlGraphVisualizationClickLegendActionPayload
from c3.platform.ScanStats import ScanStats
from c3.uiGraphComponent.UiSdlGraphVisualizationMapZoomConfig import UiSdlGraphVisualizationMapZoomConfig
from c3.uiGraphComponent.UiSdlGraphVisualizationDataEdge import UiSdlGraphVisualizationDataEdge
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.UiSdlComponentRef import UiSdlComponentRef
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.Stream import Stream
from c3.uiComponentLibrary.UiSdlWarningModalCloseAction import UiSdlWarningModalCloseAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiGraphComponent.UiSdlGraphVisualizationData import UiSdlGraphVisualizationData
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiGraphComponent.UiSdlGraphVisualizationHoverConfig import UiSdlGraphVisualizationHoverConfig
from c3.platform.UiSdlInitialRenderAction import UiSdlInitialRenderAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiInfrastructure.UiSdlStatesObservable import UiSdlStatesObservable
from c3.uiGraphComponent.UiSdlGraphVisualizationGeoJsonDataSpec import UiSdlGraphVisualizationGeoJsonDataSpec
from c3.uiGraphComponent.UiSdlGraphVisualizationCanvasLegendConfig import UiSdlGraphVisualizationCanvasLegendConfig
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.uiGraphComponent.UiSdlGraphVisualizationSelectionConfig import UiSdlGraphVisualizationSelectionConfig
from c3.uiGraphComponent.UiSdlGraphVisualizationTimeBarConfig import UiSdlGraphVisualizationTimeBarConfig
from c3.platform.Meta import Meta
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.Filter import Filter
from c3.platform.Type import Type
from c3.platform.MapBuilder import MapBuilder
from c3.platform.UiSdlRegisterTriggersAction import UiSdlRegisterTriggersAction
from c3.platform.ValueType import ValueType
from c3.uiGraphComponent.UiSdlGraphVisualizationChartZoomConfig import UiSdlGraphVisualizationChartZoomConfig
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetType import SetType
from c3.uiGraphComponent.UiSdlGraphVisualizationTooltipData import UiSdlGraphVisualizationTooltipData
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.Exclude import Exclude
from c3.uiGraphComponent.UiSdlGraphVisualizationGraphView import UiSdlGraphVisualizationGraphView
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiComponentLibrary.UiSdlAction import UiSdlAction
from c3.platform.ArrayType import ArrayType
from c3.uiGraphComponent.UiSdlGraphVisualizationShowHideRegionsAction import UiSdlGraphVisualizationShowHideRegionsAction
from c3.uiInfrastructure.UiSdlActionsObservable import UiSdlActionsObservable
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiComponentLibrary.UiSdlWarningModalOpenAction import UiSdlWarningModalOpenAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiGraphComponent.UiSdlGraphVisualizationAnimation import UiSdlGraphVisualizationAnimation
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.ScanSpec import ScanSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiGraphComponent.UiSdlGraphVisualizationPingConfig import UiSdlGraphVisualizationPingConfig
from c3.platform.MetadataDeps import MetadataDeps
from c3.uiGraphComponent.UiSdlGraphVisualizationBaseGlyphConfig import UiSdlGraphVisualizationBaseGlyphConfig
from c3.uiGraphComponent.UiSdlGraphVisualizationMergedEdgeConfig import UiSdlGraphVisualizationMergedEdgeConfig
from c3.platform.ExistsSpec import ExistsSpec
from c3.uiGraphComponent.UiSdlGraphVisualizationDataNode import UiSdlGraphVisualizationDataNode

# Python definitions for the C3 type UiSdlGraphVisualization


class UiSdlGraphVisualization(UiSdlComponent[UiSdlGraphVisualizationDataSpec], UiSdlGraphVisualizationShowHideRegions):
    """
    A UI node graph component that displays data in a network graph.
    
    @remarks this represents a made instance of UiSdlGraphVisualization
    """
    
    meta: Optional[Meta]=None
    """
    Various system fields.
    """

    id: Optional[str]=None
    """
    Unique identifier for the logical object that instance of this type represents.
    """

    name: Optional[str]=None
    """
    The name of the component. Optional field for informational purposes only.
    """

    dataSpec: Optional[UiSdlGraphVisualizationDataSpec]=None
    """
    The specification used for retrieving data displayed by the graph.
    """

    disableDataRequestOnFirstRender: Optional[bool]=None
    """
    Disable if you want to avoid sending any and all requests for this component on first render.
    """

    triggersRegistered: Optional[bool]=None
    """
    Whether the effect triggers and epics have been registered
    """

    wrapWithMetadataId: Optional[bool]=None
    """
    Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
    """

    hiddenRegions: Optional[Array[str]]=None
    """
    A list of hidden region ids.
    """

    activeNodePopover: Optional[UiSdlComponentRef[UiSdlComponent[UiSdlNoData]]]=None
    """
    The component that is rendered when a node is clicked.
    """

    activeTooltip: Optional[UiSdlGraphVisualizationTooltipData]=None
    """
    Holds the data to be displayed in the graph's tooltip.
    """

    backgroundColor: Optional[str]=None
    """
    The background color of the chart canvas. Defaults to {@link UiSdlThemeTemplate#componentBackgroundColor}.
    """

    cacheKey: Optional[str]=None
    """
    The cache key of the whole in-memory graph. See {@link InMemoryGraph#m_cacheKey}.
    """

    clearable: Optional[bool]=None
    """
    Whether or not graph should be clearable.
    If set to true, a button is rendered on the canvas that the user can click to clear the graph.
    """

    isClearingCanvasItems: Optional[bool]=None
    """
    Whether the clearing of canvas items is in progress.
    This field is used to determine whether the clear graph warning modal component should show up.
    See usage of this field in `SDLGraphVisualization.jsx` for more details.
    """

    combineConfig: Optional[UiSdlGraphVisualizationCombineConfig]=None
    """
    The config for controlling when the nodes should combine into groups.
    """

    dispatchRealtimeTimebarAction: Optional[bool]=None
    """
    Boolean to config if timebar should dispatch setTimeBarInRangeItemsAction or not for each change.
    Default is true, meaning each time timebar moves, it will dispatch the action.
    When false, no action will dispatch during timebar play,
    and one action will dispatch to update redux when timebar finishes animation.
    
    Usage: Developer should leave this as is if no performance slowdown with timebar animation.
    If animating large dataset with timebar shows lagging, turn this off to improve animation performance.
    WARNING: turn this boolean off WILL cause redux store to go out of sync with component during animation.
    """

    mapboxStyle: Optional[str]=None
    """
    Mapbox Style that will be used to call the API and get a styled map
    """

    mapboxVersion: Optional[str]=None
    """
    Mapbox API version that's used with the style label to be able to retrieve the proper styles.
    """

    draw: Optional[UiSdlGraphVisualizationDrawConfig]=None
    """
    The configuration for draw toolbar.
    """

    data: Optional[UiSdlGraphVisualizationData]=None
    """
    Holds the data to display in the graph.
    """

    canvasItems: Optional[Map[str, Union[UiSdlGraphVisualizationDataNode,UiSdlGraphVisualizationDataEdge]]]=None
    """
    Holds the data that appears on the canvas.  Cloned from props.data.  This is the state that will be updated when
    the graph on the canvas changes, for example, hovering or selecting a node.
    """

    forceCanvasItemsInitialization: Optional[bool]=None
    """
    Flag to force initialization of `canvasItems`.
    """

    defaultFitOptionOnSelect: Optional[str]=None
    """
    The default fit option for the graph when an item is selected.
    """

    fitOption: Optional[str]=None
    """
    The default fit option for the graph when data load.
    """

    defaultEdgeColors: Optional[Array[str]]=None
    """
    A list of default colors used to color edges.
    
    If {@link UiSdlGraphVisualizationEdgeStyleConfig#fillColorByProperty} is of type
    {@link UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical}, the component will assign a color to each
    category from here in order.
    
    The colors have to belong to {@link UiSdlGraphVisualizationFillColorOption}.
    """

    defaultNodeColors: Optional[Array[str]]=None
    """
    A list of default colors used to color nodes.
    
    If {@link UiSdlGraphVisualizationNodeStyleConfig#fillColorByProperty} is of type
    {@link UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical}, the component will assign a color to each
    category from here in order.
    
    The colors have to belong to {@link UiSdlGraphVisualizationFillColorOption}.
    """

    disableMergedEdges: Optional[bool]=None
    """
    By default, all edges between two nodes are merged into a single edge.
    Set this to true to disable merged edges.
    """

    emptyState: Optional[UiSdlComponentRef[UiSdlEmptyState]]=None
    """
    The component that handles the empty state.
    It will appear if the grid has no data.
    Empty state is only availible if {@link showMap} is false
    """

    endSpacing: Optional[str]=None
    """
    Defaults to tight, loose will put a little space between the node and the edge.
    """

    geoJsonDataSpec: Optional[UiSdlGraphVisualizationGeoJsonDataSpec]=None
    """
    The specification used for retrieving GeoJSON data passed on to Leaflet to be rendered in the tile layer.
    """

    geoJsonData: Optional[any]=None
    """
    Holds the data passed to Leaflet to display on the tile layer on the map. Needs to be in the GeoJSON format:
    https://leafletjs.com/examples/geojson/
    """

    shapeData: Optional[any]=None
    """
    Holds draw shape data created by user using the drawing tool
    structured as geoJsonData
    """

    height: Optional[int]=None
    """
    The height in pixels of the graph.  This will be reflected in the height of the container div; the graph
    element itself will then take up 100% of the container's height.
    """

    highlightedItemIds: Optional[Array[str]]=None
    """
    The list of highlighted item ids when an item is hovered on or selected. This field is only set if
    {@link UiSdlGraphVisualizationHoverConfig#highlightNeighborsOnHover} or
    {@link UiSdlGraphVisualizationSelectionConfig#highlightNeighborsOnSelect} is true.
    """

    hoverConfig: Optional[UiSdlGraphVisualizationHoverConfig]=None
    """
    The configuration to control the appearance and behavior of hovered items.
    """

    hoveredEdgeId: Optional[str]=None
    """
    The id of the currently hovered edge.
    """

    hoveredNodeId: Optional[str]=None
    """
    The id of the currently hovered node.
    """

    layout: Optional[UiSdlGraphVisualizationLayout]=None
    """
    The layout configuration to use.
    """

    animation: Optional[UiSdlGraphVisualizationAnimation]=None
    """
    Controls animations on the graph.
    """

    legendConfig: Optional[UiSdlGraphVisualizationCanvasLegendConfig]=None
    """
    Canvas legend configuration.
    """

    mergedEdgeConfig: Optional[UiSdlGraphVisualizationMergedEdgeConfig]=None
    """
    The configuration for controlling how to merge multiple links between two nodes.
    """

    mergedEdgeMapping: Optional[Map[str, str]]=None
    """
    A mapping from an original edge id to its merged edge id.
    """

    pingConfig: Optional[UiSdlGraphVisualizationPingConfig]=None
    """
    Configuration for a temporary animated halo effect to a node or a link, also known as a ping effect.
    """

    pingItems: Optional[Array[str]]=None
    """
    An array of node or edge ids to temporarily animate or ping.
    """

    resettable: Optional[bool]=None
    """
    Whether or not graph should be resettable.
    If set to true, a button is rendered on the canvas that the user can click to reset the graph.
    """

    selectedItems: Optional[Map[str, bool]]=None
    """
    A dictionary with a truthy property for each selected item.
    The keys are the ids of the selected node/edge.
    """

    selectedNodeIds: Optional[Array[str]]=None
    """
    An array of node ids which represent selected nodes on the graph canvas.
    """

    selectedEdgeIds: Optional[Array[str]]=None
    """
    An array of edge ids which represent selected edges on the graph canvas.
    """

    selectionConfig: Optional[UiSdlGraphVisualizationSelectionConfig]=None
    """
    The configuration to control the appearance and behavior of selected items.
    """

    selectedRegion: Optional[str]=None
    """
    The name of the selected GeoJSON region.
    """

    showMap: Optional[bool]=None
    """
    Set to true to enable map mode.
    """

    showEdgesOnMap: Optional[bool]=None
    """
    Set to true to show edges between nodes when {@link showMap} is `true`.
    """

    showLegend: Optional[bool]=None
    """
    When true show the canvas legend.
    """

    timeBarConfig: Optional[UiSdlGraphVisualizationTimeBarConfig]=None
    """
    The configuration to control the appearance of the time bar.
    Must be configured in order for the time bar to be shown.
    Currently the time bar only supports filtering on edge temporal data or node
    temporal data. If provided configs for both, it will default to filtering
    on edges and ignore node temporal data.
    """

    timeBarInRangeItems: Optional[Array[str]]=None
    """
    The items in the currently visible time bar range.
    """

    showZoomControls: Optional[bool]=None
    """
    Whether or not the zoom control buttons should be displayed on this graph.
    If set to true, a button group is rendered on the canvas that the user can use zoom in,
    zoom out and re-center the graph.
    If set to false, the mouse/trackpad gestures still enable the users to zoom in/out.
    """

    zoomConfiguration: Optional[Union[UiSdlGraphVisualizationChartZoomConfig,UiSdlGraphVisualizationMapZoomConfig]]=None
    """
    Configuration for the zooming in the graph visualization.
    """

    zoomToRegionOnClick: Optional[bool]=None
    """
    Whether or not clicking on a geoJson region will select the region.
    Note, this will only work if {@link showMap} and {@link geoJsonDataSpec#selectable} is true.
    """

    allowNodeAnnotations: Optional[bool]=None
    """
    Whether to allow the user to annotate nodes.
    """

    exportGraph: Optional[bool]=None
    """
    Whether or not the graph should be exportable. (Export with geoJson data is not supported)
    If set to true, a button is rendered on the canvas that the user can click to export the graph as a PDF.
    """

    hiddenNodes: Optional[Array[str]]=None
    """
    A list of hidden nodes ids.
    """

    exportFileName: Optional[Union[str,UiSdlDynamicValueSpec]]=None
    """
    The name of the file to be exported when the user clicks the export button.
    """
    def __init__(self, meta: Optional[Meta]=None, id: Optional[str]=None, name: Optional[str]=None, dataSpec: Optional[UiSdlGraphVisualizationDataSpec]=None, disableDataRequestOnFirstRender: Optional[bool]=None, triggersRegistered: Optional[bool]=None, wrapWithMetadataId: Optional[bool]=None, hiddenRegions: Optional[Array[str]]=None, activeNodePopover: Optional[UiSdlComponentRef[UiSdlComponent[UiSdlNoData]]]=None, activeTooltip: Optional[UiSdlGraphVisualizationTooltipData]=None, backgroundColor: Optional[str]=None, cacheKey: Optional[str]=None, clearable: Optional[bool]=None, isClearingCanvasItems: Optional[bool]=None, combineConfig: Optional[UiSdlGraphVisualizationCombineConfig]=None, dispatchRealtimeTimebarAction: Optional[bool]=None, mapboxStyle: Optional[str]=None, mapboxVersion: Optional[str]=None, draw: Optional[UiSdlGraphVisualizationDrawConfig]=None, data: Optional[UiSdlGraphVisualizationData]=None, canvasItems: Optional[Map[str, Union[UiSdlGraphVisualizationDataNode,UiSdlGraphVisualizationDataEdge]]]=None, forceCanvasItemsInitialization: Optional[bool]=None, defaultFitOptionOnSelect: Optional[str]=None, fitOption: Optional[str]=None, defaultEdgeColors: Optional[Array[str]]=None, defaultNodeColors: Optional[Array[str]]=None, disableMergedEdges: Optional[bool]=None, emptyState: Optional[UiSdlComponentRef[UiSdlEmptyState]]=None, endSpacing: Optional[str]=None, geoJsonDataSpec: Optional[UiSdlGraphVisualizationGeoJsonDataSpec]=None, geoJsonData: Optional[any]=None, shapeData: Optional[any]=None, height: Optional[int]=None, highlightedItemIds: Optional[Array[str]]=None, hoverConfig: Optional[UiSdlGraphVisualizationHoverConfig]=None, hoveredEdgeId: Optional[str]=None, hoveredNodeId: Optional[str]=None, layout: Optional[UiSdlGraphVisualizationLayout]=None, animation: Optional[UiSdlGraphVisualizationAnimation]=None, legendConfig: Optional[UiSdlGraphVisualizationCanvasLegendConfig]=None, mergedEdgeConfig: Optional[UiSdlGraphVisualizationMergedEdgeConfig]=None, mergedEdgeMapping: Optional[Map[str, str]]=None, pingConfig: Optional[UiSdlGraphVisualizationPingConfig]=None, pingItems: Optional[Array[str]]=None, resettable: Optional[bool]=None, selectedItems: Optional[Map[str, bool]]=None, selectedNodeIds: Optional[Array[str]]=None, selectedEdgeIds: Optional[Array[str]]=None, selectionConfig: Optional[UiSdlGraphVisualizationSelectionConfig]=None, selectedRegion: Optional[str]=None, showMap: Optional[bool]=None, showEdgesOnMap: Optional[bool]=None, showLegend: Optional[bool]=None, timeBarConfig: Optional[UiSdlGraphVisualizationTimeBarConfig]=None, timeBarInRangeItems: Optional[Array[str]]=None, showZoomControls: Optional[bool]=None, zoomConfiguration: Optional[Union[UiSdlGraphVisualizationChartZoomConfig,UiSdlGraphVisualizationMapZoomConfig]]=None, zoomToRegionOnClick: Optional[bool]=None, allowNodeAnnotations: Optional[bool]=None, exportGraph: Optional[bool]=None, hiddenNodes: Optional[Array[str]]=None, exportFileName: Optional[Union[str,UiSdlDynamicValueSpec]]=None) -> None: ...

    @overload
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object.
    
    @return JSON object representation
    
    @see #fromJson
    """
        ...
    @overload
    def toJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
    """
    Convert the internal object representation to a _typed_ JSON object.
    @param omitTopLevelType
           Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
           the outer level of the produced json.
    @param runtime
           If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
           performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
    
    
    @return JSON object representation
    
    @see #fromJson
    @see #toJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    @overload
    def toTypedJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toJsonString(self) -> str:
        ...
    @overload
    def toJsonString(self, pretty: bool) -> str:
    """
    Convert the internal object representation to a serialized JSON string.
    
    @return JSON object as string
    """
        ...
    @overload
    def toTypedJsonString(self) -> str:
        ...
    @overload
    def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
        ...
    @overload
    def toJsString(self) -> str:
        ...
    @overload
    def toJsString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    @overload
    def toXmlString(self) -> str:
        ...
    @overload
    def toXmlString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized XML string.
    
    @return XML element as string
    
    @see #fromXmlString
    """
        ...
    def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
    """
    Convert the internal object representation to a string serialized representation of the object.
    
    @return string serialized object representation
    """
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[UiSdlGraphVisualization]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[UiSdlGraphVisualization]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[UiSdlGraphVisualization]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
    may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
    isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
    will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[UiSdlGraphVisualization]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
    """
    Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
    there is a slight possibility that two objects with the same fingerprint will actually differ.
    
    The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
    {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
    unless the allIdentifiedRefFields option is specified.
    
    If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
    However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
    
    @param allIdentifiedRefFields
              if `true`, fingerprint individual fields of persistable references, not just the `id`
    @param trackRecursiveRefs
              if `true`, a set of referenced objects is maintained to avoid infinite recursion
    @param traversedRefs
              only considered together with trackRecursiveRefs and if provided then all traversed references are
              checked against and added to it
    @return integer fingerprint
    
    @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
    """
        ...
    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
    """
    Measures retained memory by this instance.
    
    @param deep
           if true and this instance contains references to other objects also measures memory retained by those
    @param allMeasured
           if set then will skip instances that are in the set and will add instances that where measured by this call
    @return retained memory in bytes for this instances
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> UiSdlGraphVisualization:
    """
    Returns new instance with all references to old type, including result of #type, replaced with new type. If new
    type does not contain fields from old or field value types are not convertable then drops the field.
    
    This method is used during live metadata update
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
     Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
     useful for redispatching **member** methods reimplemented on this type to a parent implementation:
     ```js
     function toString() {
       return this.super().toString() + ', x=' + this.x;
     }
     ```
    
     ```py
     def toString(this):
        return this.super().toString() + ', x=' + this.x
    ```
    
     To redispatch **static** methods, see {@link Type#super}.
    
     Note that this not the same as the language-specific `super` keyword because it works through the type system and
     supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
     globally.
    
     If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
     This can be used to create a local implementation "around" the server implementation for additional caching or
     other local state management.
    
     @param mixin if specified, this mixin is used instead or an error is thrown
     @return "super" calling proxy for this object
    
     @see Type.super
    """
        ...
    @overload
    def instanceOf(self, typeName: str) -> bool:
    """
    Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    """
        ...
    @overload
    def instanceOf(self, type: Type) -> bool:
    """
    Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    
    @see ValueType#isA
    """
        ...
    def isEmptyObj(self) -> bool:
    """
    Whether all the fields of this instance are empty.
    """
        ...
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isFieldSet(self, field: str) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldSet(self, field: FieldType) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldMissing(self, field: str) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def isFieldMissing(self, field: FieldType) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    """
        ...
    @overload
    def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
    the obj.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    @return value for the given field
    """
        ...
    def fieldValues(self) -> Union[Array[FieldValue]]:
    """
    Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
    """
    Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
    Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
    #dataFieldTypes
    """
        ...
    def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
    """
    Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
    """
    Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Returns all data field names including those whose values are empty. Array is ordered by
    field ordinal.
    """
        ...
    def unsetFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
    field ordinal.
    """
        ...
    def missingFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
    field ordinal.
    """
        ...
    @overload
    def at(self, ordinal: int) -> Union[T]:
    """
    Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
    
    @param ordinal
            Integer ordinal of the field in the parent type
    @return value of field at ordinal
    """
        ...
    @overload
    def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
    """
    Return value for the given serialized expression
    
    @param expr
            Serialized expression to obtain the value in the given Obj
    @param failIfNotValid
            If set, fails if not a valid expression
    @return value obtained as a result of expression evaluation
    """
        ...
    def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
    """
    Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
    `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
    that it also handles `null`. If path contains any collections then only first element will be traversed,
    unless the collection index is specified in the path.
    
    If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return the field or null
    """
        ...
    def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
    """
    Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
    traversals, unless the collection index is specified in the path.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return fields as a flat list
    
    @see #fieldValueAtPath
    """
        ...
    @overload
    def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object.
    
    @param action
              lambda to apply
    """
        ...
    @overload
    def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply
    """
        ...
    def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
    """
    Perform an action for each {@link isFieldSet set} field of this object.
    
    @param action
              lambda to apply
    """
        ...
    def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
    """
    Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
    on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply; stop if this `action` returns `false
    @return `true` if iteration was not aborted by lambda i.e. it saw all field values
    """
        ...
    @overload
    def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    @overload
    def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type while processing action returns
    `true`.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance; stops processing if return `false`
    @return `true` if iteration was not aborted by lambda i.e. it saw all refs
    """
        ...
    def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
    """
        ...
    def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
    processing action returns `true`.
    """
        ...
    @overload
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlGraphVisualization:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlGraphVisualization:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlGraphVisualization]:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the asynchronous `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that fields
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlGraphVisualization]:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    asynchronous `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> UiSdlGraphVisualization:
    """
    Result of this function call is a copy of current instance with specified field value replaced based on result of
    the `mapper` invocation.
    @param field
              field being mapped
    @param includeEmpty
              if set, invokes mapper for fields with empty value
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlGraphVisualization:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlGraphVisualization:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param mapper
              function to be executed for each pair of field type and Obj instance for producing new reference value
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` will be `null`.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
    result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
    """
    Evaluates given projection expression over this instance.
    """
        ...
    @overload
    def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
    """
    Evaluates given projection over this instance and returns results as json.
    """
        ...
    @overload
    def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
    """
    Evaluates given projection over this instance and returns results as instance of the new Obj.
    """
        ...
    @overload
    def validateObj(self) -> UiSdlGraphVisualization:
    """
    Populates all missing default values and throws error if any constraint is violated.
    """
        ...
    @overload
    def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
    """
    Validate that the Obj fields are set according to all the required rules.
    """
        ...
    @overload
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> UiSdlGraphVisualization:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              name of the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    @overload
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> UiSdlGraphVisualization:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> UiSdlGraphVisualization:
    """
    Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
    defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
    
    @param fields
              map of field names/values
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @return new Obj
    """
        ...
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> UiSdlGraphVisualization:
    """
    Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
    If you would like to #unsetField, you should call #withoutFieldAtPath instead.
    
    Immutable objects may return the same instance if the field being set does not actually represent a
    change to the existing object.
    
    @param path
              path to set value at
    @param value
              value to set
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @param doNotCreateIfMissing
              true indicates that any empty reference along the path will not set the value
    @return new Obj
    """
        ...
    def withoutFieldAtPath(self, path: str) -> UiSdlGraphVisualization:
    """
    Builds a new Obj without the specified path field.
    
    Immutable objects may return the same instance if the field being removed does not actually represent a
    change to the existing object.
    
    @param path
              path for field to remove
    @return new Obj
    
    @see #withFieldAtPath
    @see #withoutField
    """
        ...
    @overload
    def withoutField(self, field: str) -> UiSdlGraphVisualization:
    """
    Builds a new Obj, removing the field with the provided name.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    @overload
    def withoutField(self, field: FieldType) -> UiSdlGraphVisualization:
    """
    Builds a new Obj, removing the field with the provided field type.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    def withoutFields(self, fields: Array[str]) -> UiSdlGraphVisualization:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> UiSdlGraphVisualization:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> UiSdlGraphVisualization:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> UiSdlGraphVisualization:
    """
    Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
    calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
    {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
    fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
    fields that have already been set.
    
    {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
    As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
    
    @param includeEmptyRefsWithDefaults
              it `true` then missing / empty child references that have fields with defaults will also be instantiated
    @param defaultFields
              If not empty, a list of default field paths to populate.  Any default fields not specified in the
              array will be ignored.
    @return new Obj
    
    @see #defaultField
    @see FieldType#defaultValueConst
    @see FieldType#defaultValue
    """
        ...
    @overload
    def defaultField(self, field: str) -> UiSdlGraphVisualization:
    """
    Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            name of the field to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def defaultField(self, field: FieldType) -> UiSdlGraphVisualization:
    """
    Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            field type to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def unsetField(self, field: str) -> UiSdlGraphVisualization:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            name of the field to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def unsetField(self, field: FieldType) -> UiSdlGraphVisualization:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            field type to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def removeField(self, field: str) -> UiSdlGraphVisualization:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            name of the field to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def removeField(self, field: FieldType) -> UiSdlGraphVisualization:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            field type to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> UiSdlGraphVisualization:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
    
    @param other
              object
    @param fieldPathMergeSpec
              mapping of fields of the object to the respective merge annotations
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> UiSdlGraphVisualization:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence.
    
    @param other
              object
    @param otherFieldsFilter
              only fields of otherFieldsFilter type from other are merged into this obj.
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> UiSdlGraphVisualization:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> UiSdlGraphVisualization:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
    traverse child reference and collection fields.
    """
        ...
    def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
    """
    Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
    Fields that non null in only one of this and other will be in the resulting Obj without change.
    """
        ...
    def mergeJson(self, json: any) -> UiSdlGraphVisualization:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> UiSdlGraphVisualization:
    """
    Merge the obj references within the current obj
    @param deep
           If set, traverses the reference fields within the obj as well for a deep merge
    @param objKey
           lambda specifying how to obtain the key for the Obj while determining which Objs to merge
    @param filter
           Field paths that need to be filtered from this merge
    @return Obj with child references merged
    """
        ...
    def sumObj(self, other: Obj, deep: bool=None) -> UiSdlGraphVisualization:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[UiSdlGraphVisualization]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[UiSdlGraphVisualization]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[UiSdlGraphVisualization]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[UiSdlGraphVisualization]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[UiSdlGraphVisualization]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, UiSdlGraphVisualization]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, UiSdlGraphVisualization]]:
    """
    Create a map with the given key type and elements of this type.
    """
        ...
    @classmethod
    def myReferenceType(cls) -> ReferenceType:
        ...
    @classmethod
    def myMapTypeOf(cls, keyType: ValueType) -> MapType:
        ...
    @classmethod
    def myMapType(cls) -> MapType:
        ...
    @classmethod
    def myArrayType(cls) -> ArrayType:
        ...
    @classmethod
    def mySetType(cls) -> SetType:
        ...
    @classmethod
    def myStreamType(cls) -> StreamType:
        ...
    def toBuilder(self) -> ObjBuilder[UiSdlGraphVisualization]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[UiSdlGraphVisualization]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> UiSdlGraphVisualization:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> UiSdlGraphVisualization:
    """
    Construct an instance of this type from provided fields
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> UiSdlGraphVisualization:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> UiSdlGraphVisualization:
    """
    Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
               populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> UiSdlGraphVisualization:
    """
    Construct an instance from provided fields
    @param fields
               Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
               field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
               to Panda.make()
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
               -> 0) populated. Passing an empty value for a field will result in the initial value being set if
               the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
    
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Any, withDefaults: bool=None) -> UiSdlGraphVisualization:
    """
    Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
    
    ```js
    User.make({
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    
    Obj.make({
      type: 'User',
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    ```
    
    ```py
    c3.User.make({
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.Obj.make({
      "type": 'User',
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.User(email='joe@smith.com', realName='Joe Smith')
    
    c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
    ```
    
    Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
    specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
    such as {@link Ann.Ser} do not apply.
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, s: str) -> Union[UiSdlGraphVisualization]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> UiSdlGraphVisualization:
    """
    Construct an instance of this type from provided instance of a subtype or a "duck type".
    """
        ...
    def remakeAs(self, type: Type) -> O:
    """
    Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
    converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
    could be costly if types have different value types for same fields.
    
    @param type
            Type of new obj to return
    @return new obj of the requested type with all fields present in the original obj that are defined in the new type
            converted and copied to it
    """
        ...
    @classmethod
    def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
    """
    Optional override that will be called every time instance of this type is created.
    
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    def afterMake(self) -> UiSdlGraphVisualization:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> UiSdlGraphVisualization:
    """
    Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
    every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
    Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
    
    @see ValueType#defaultEmptyValue
    """
        ...
    def toData(self) -> Union[Data]:
    """
    Represent the current obj instance as {@link Data}
    """
        ...
    @classmethod
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[UiSdlGraphVisualization]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> UiSdlGraphVisualization:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[UiSdlGraphVisualization]:
    """
    Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param spec
              Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
              of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, filter: Filter) -> FetchResult[UiSdlGraphVisualization]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[UiSdlGraphVisualization]]:
    """
    Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param spec
              Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
    @return Requested obj stream.
    """
        ...
    @classmethod
    def fetchArrowStream(cls, spec: FetchArrowStreamSpec) -> Stream[Arrow]:
    """
    Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
    specified maximum batch size.
    
    @param spec
              Specification of what data to fetch.
    @return Stream of Arrow batches.
    """
        ...
    @classmethod
    def scanArrow(cls, spec: ScanArrowSpec) -> Union[ArrowIterator]:
    """
    Finds rows matching specification and returns them as iterator of Arrow batches.
    
    @param spec
              Specification of what rows to return.
    @return Iterator of Arrow batches.
    """
        ...
    @classmethod
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[UiSdlGraphVisualization]]]:
    """
    Fetched multiple obj instances in multiple locales based on specification.
    
    @param spec
           Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
           type.
    @return Requested objs where key of map is locale id
    """
        ...
    @classmethod
    def fetchCount(cls, spec: FetchFilterSpec=None) -> int:
    """
    @return The number of entries that match the specification.
    """
        ...
    @classmethod
    def fetchCountEstimated(cls, spec: FetchFilterSpec=None, updateStatistics: bool=None) -> int:
    """
    Gets the estimated count of objs that a fetch on the type with the optional filter will return.
    For non-kv types, The count is obtained from the query explain plan for the fetch.
    For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
    other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
    upper bound for the partition. For more accurate results, perform fillBuckets first.
    
    @param spec
           Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
           explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
           fields.
    @param updateStatistics
           If true, the database statistics for all tables involved in the query will be updated prior to obtaining
           the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
    
    @return The requested estimated count.
    """
        ...
    @classmethod
    def scan(cls, spec: ScanSpec) -> Union[ScanStats]:
    """
    Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
    a callback function for the given batch.
    
    @param spec
              Specification of the scan action.
    @return Statistics of the scan action.
    """
        ...
    @classmethod
    def batchIds(cls, spec: BatchIdsSpec=None) -> Union[Stream[str]]:
    """
    Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
    
    @param spec
           Spec indicating how the operation should work.
    
    IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
                rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
                cause an issue if the results are blindly used to create filters for fetching batches as the last batch
                would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
                other would be specified, depending on whether you are interested in controlling the number of batches
                or batch size.
    
    @return A stream of batch ids based on the input parameters.
    """
        ...
    @overload
    @classmethod
    def exists(cls, spec: ExistsSpec=None) -> bool:
    """
    @return True if there are at least the number of entries matching the filter/count specified in the spec.
    """
        ...
    @overload
    @classmethod
    def exists(cls, filter: Filter) -> bool:
    """
    @return True if there are at least the number of entries matching the filter/count specified in the spec.
    """
        ...
    @classmethod
    def keyFieldType(cls) -> FieldType:
    """
    @return key field type.
    """
        ...
    def keyFieldValue(self) -> Union[str]:
    """
    @return key field value.
    """
        ...
    def singletonMap(self) -> Map[str, WithKey]:
    """
    Build a map of the correct type with a single element which is this instance and key field value as key.
    """
        ...
    def dependencies(self) -> MetadataDeps[UiSdlGraphVisualization]:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> UiSdlGraphVisualization:
        ...
    def remove(self, spec: UpsertSpec=None) -> bool:
        ...
    def removeWithChildren(self) -> bool:
    """
    Remove the metadata instance as well as its associated backward dependencies.
    Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
    """
        ...
    @classmethod
    def removeAll(cls, removeFilter: str=None) -> int:
        ...
    def update(self, srcObj: UiSdlGraphVisualization=None, spec: UpsertSpec=None) -> Union[UiSdlGraphVisualization]:
        ...
    def upsert(self, srcObj: UiSdlGraphVisualization=None, spec: UpsertSpec=None) -> Union[UiSdlGraphVisualization]:
        ...
    @classmethod
    def metadataFolder(cls) -> Union[str]:
    """
    Retrieves folder that holds metadata.
    """
        ...
    @classmethod
    def hasArbitraryFolderHierarchy(cls) -> bool:
    """
    If this Metadata type has arbitrary folder hierarchy.
    """
        ...
    @classmethod
    def isValidMetadataJson(cls, pkg: str, filePath: str) -> bool:
    """
    If metadata path is valid.
    @param pkg
       name of the package
    @param filePath
       path of metadata json file
    """
        ...
    def validateMetadata(self) -> ValidateObjResult:
    """
    Optional member function to enable custom validation logic.
    """
        ...
    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[UiSdlGraphVisualization]:
    """
    Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
    provide deserialization.
    
    fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
    of called-on type, but perhaps not the same type.
    
    E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
    
    @see #toString
    """
        ...
    @classmethod
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[UiSdlGraphVisualization]:
    """
    @return single instance of this Identified type by id.
    """
        ...
    def jsonStringify(self) -> Union[str]:
        ...
    @classmethod
    def jsonify(cls, value: Any=None) -> Union[str]:
        ...
    @classmethod
    def doDataMerge(cls, componentId: str, dataSpecFieldName: str, dataDestinationFieldName: str, props: UiSdlGraphVisualization, state: UiSdlReduxState) -> Union[UiSdlGraphVisualization]:
    """
    A function to perform the setting and merging of keys and values for the dataSpec
    and entity data in the react props. Components that need custom merging of multiple or nested datasources
    should override this function and provide their own custom setting/merging logic.
    
    @param componentId
              The id of the component on which the function is being called
    @param dataSpecFieldName
              The name of the field which is annotated as a dataSpec
    @param dataDestinationFieldName
              Contains field name to store the returned data
    @param props
              The object that will eventually be delivered to the component as react props
    @param state
              The redux state
    @returns props after the data has been set/merged
    """
        ...
    @classmethod
    def renderInitialAction(cls, id: str) -> UiSdlInitialRenderAction:
    """
    Triggered the first time a component renders. Applications should never
    trigger this action manually, as it will be triggered internally by the
    framework. If multiple instances of the same component (i.e. having the
    same id) are present on a single page, the framework _may_ trigger this
    action multiple times—at most once per component instance and at least once
    overall.
    
    @param id
              The id of the component that is rendered.
    @returns an `INITIAL_RENDER` action.
    """
        ...
    @classmethod
    def registerTriggersAction(cls, id: str) -> UiSdlRegisterTriggersAction:
    """
    Triggered the first time a component renders. Component will trigger this action
    when it registers effect triggers
    @param id
              The id of the component that is rendered.
    @returns an `REGISTER_TRIGGERS` action.
    """
        ...
    def triggersRegisterEffect(self, state: UiSdlReduxState, action: UiSdlRegisterTriggersAction) -> UiSdlReduxState:
    """
    Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
    
    @param state
              Redux state
    @param action
              Redux action
    @returns a new Redux state
    """
        ...
    @classmethod
    def showHideRegionsAction(cls, id: str, hiddenRegionIds: Array[str]) -> Union[UiSdlGraphVisualizationShowHideRegionsAction]:
    """
    Triggered to update chart hidden regions.
    
    @param id
               Id of the component.
    @param hiddenRegionIds
               Array of region ids to hide.
    
    @return A `SHOW_HIDE_REGIONS` action for this instance with the following properties:
    - payload {string} The id's of the regions.
    """
        ...
    @classmethod
    def showHideRegionsReducer(cls, state: UiSdlReduxState=None, action: UiSdlGraphVisualizationShowHideRegionsAction=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `SHOW_HIDE_REGIONS` and updates internal field {@link hiddenRegions}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    
    @returns A new Redux state.
    """
        ...
    @classmethod
    def openWarningModalAction(cls, id: str=None, warningModalId: str=None) -> Union[UiSdlWarningModalOpenAction]:
    """
    Triggered after the user clicks the clear graph button.
    
    @param id
              Id of the component.
    @param warningModalId
              Id of the warning modal that will be displayed.
    
    @return a `WARNING_MODAL_OPEN` action for this instance with the following properties:
    - payload.componentId {string} id of the graph visualization instance that originated the clear graph action.
    - payload.warningModalId {string} id of the warning modal.
    """
        ...
    @classmethod
    def closeWarningModalAction(cls, id: str=None, warningModalId: str=None) -> Union[UiSdlWarningModalCloseAction]:
    """
    Triggered after the user exits from the warning modal by clicking its primary button.
    
    @param id
              Id of the component.
    @param warningModalId
              Id of the warning modal that will be closed.
    
    @return a `WARNING_MODAL_CLOSE` action for this instance with the following properties:
    - payload.componentId {string} id of the graph visualization instance that originated the clear graph action.
    - payload.warningModalId {string} id of the warning modal.
    """
        ...
    @classmethod
    def clickEdgeAction(cls, id: str=None, edgeId: str=None) -> UiSdlReduxAction[UiSdlGraphVisualizationClickEdgeActionPayload]:
    """
    Triggered when an edge is clicked.
    
    @param id
              Id of the component.
    @param edgeId
              Id of the edge.
    @return a `EDGE_CLICK` action for this instance.
    """
        ...
    @classmethod
    def clickEdgeGlyphAction(cls, id: str=None, edgeId: str=None, glyph: UiSdlGraphVisualizationBaseGlyphConfig=None) -> UiSdlReduxAction[UiSdlGraphVisualizationClickEdgeGlyphActionPayload]:
    """
    Triggered when an edge glyph is clicked.
    
    @param id
              Id of the component.
    @param edgeId
              Id of the edge that contains the glyph that was clicked.
    @param glyph
              The glyph that was clicked.
    ```
    item.glyphs[glyphIndex]
    ```
    
    @return a `EDGE_GLYPH_CLICK` action for this instance.
    """
        ...
    @classmethod
    def changedNodesPositionsAction(cls, id: str=None, nodes: Map[str, UiSdlGraphVisualizationNodePosition]=None) -> UiSdlReduxAction[UiSdlGraphVisualizationChangedNodesPositionsActionPayload]:
    """
    Triggered when a node or a group of nodes are dragged and dropped.
    This action shows that the nodes have been moved to a new position.
    
    @param id
              Id of the component.
    @param nodes
              A map with node ids as keys and position information as values.
    @return a `NODES_POSITIONS_CHANGED` action for this instance.
    """
        ...
    @classmethod
    def changedGraphViewAction(cls, id: str=None, view: UiSdlGraphVisualizationGraphView=None) -> UiSdlReduxAction[UiSdlGraphVisualizationChangedGraphViewActionPayload]:
    """
    Triggered when a user changes the general graph view parameters. (e.g. zoom, offsetX, offsetY)
    This action shows that the graph view info has been modified.
    
    @param id
              Id of the component
    @param view
              The new graph view parameters.
    @return a `GRAPH_VIEW_CHANGED` action for this instance.
    """
        ...
    @classmethod
    def clickGraphAction(cls, id: str=None, lat: float=None, lng: float=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggered when the graph is clicked.
    
    @param id
              Id of the component.
    @param lat
              Latitude of clicked point
    @param lng
              Longitude of clicked point
    @return a `GRAPH_CLICK` action for this instance.
    """
        ...
    @classmethod
    def clickNodeAction(cls, id: str=None, nodeId: str=None) -> UiSdlReduxAction[UiSdlGraphVisualizationClickNodeActionPayload]:
    """
    Triggered when a node is clicked.
    
    @param id
              Id of the component.
    @param nodeId
              Id of the node.
    @return a `NODE_CLICK` action for this instance.
    """
        ...
    @classmethod
    def clickRegionAction(cls, id: str=None, regionId: str=None) -> UiSdlReduxAction[UiSdlGraphVisualizationClickRegionActionPayload]:
    """
    Triggered when a GeoJSON region is clicked.
    
    @param id
              Id of the component.
    @param regionId
              Id of the region.
    @return a `REGION_CLICK` action for this instance.
    """
        ...
    @classmethod
    def clickNodeGlyphAction(cls, id: str=None, nodeId: str=None, glyph: UiSdlGraphVisualizationBaseGlyphConfig=None) -> UiSdlReduxAction[UiSdlGraphVisualizationClickNodeGlyphActionPayload]:
    """
    Triggered when a node glyph is clicked.
    
    @param id
              Id of the component.
    @param nodeId
              Id of the node that contains the glyph that was clicked.
    @param glyph
              The glyph that was clicked.
    ```
    item.glyphs[glyphIndex]
    ```
    
    @return a `NODE_GLYPH_CLICK` action for this instance.
    """
        ...
    @classmethod
    def updateHiddenNodesAction(cls, id: str, nodeIds: Array[str]) -> UiSdlReduxAction[UiSdlHideGraphVisualizationNodesHiddenNodesUpdatePayload]:
    """
    Triggered to update chart hidden nodes.
    
    @param id
               Id of the component.
    @param nodeIds
               The ids of the nodes to hide.
    
    @return A `HIDDEN_GRAPH_NODES_UPDATE` action for this instance with the following properties:
    - payload {string} The ids of the nodes.
    """
        ...
    @classmethod
    def clickLegendAction(cls, id: str, nodeIds: Array[str]) -> UiSdlReduxAction[UiSdlGraphVisualizationClickLegendActionPayload]:
    """
    Triggered when a legend item is clicked.
    
    @param id
               Id of the component.
    @param nodeIds
               The ids of the nodes associated with the legend item.
    
    @return A `LEGEND_CLICK` action for this instance with the following properties:
    - payload {string} The ids of the nodes associated with the legend item.
    """
        ...
    @classmethod
    def doubleClickNodeAction(cls, id: str=None, nodeId: str=None) -> UiSdlReduxAction[UiSdlGraphVisualizationDoubleClickNodeActionPayload]:
    """
    Triggered when a node is double clicked.
    
    @param id
              Id of the component.
    @param nodeId
              Id of the node.
    @return a `NODE_DOUBLE_CLICK` action for this instance.
    """
        ...
    @classmethod
    def clickClearGraphAction(cls, id: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggered when the `Clear Graph` button is clicked.
    
    @param id
              Id of the component.
    @return a `CLEAR_GRAPH_CLICK` action for this instance.
    """
        ...
    @classmethod
    def setClearingCanvasItemsAction(cls, id: str=None, isClearingCanvasItems: bool=None) -> UiSdlReduxAction[UiSdlGraphVisualizationSetClearingCanvasItemsActionPayload]:
    """
    Dispatched to call reducer to set {@link UiSdlGraphVisualization#isClearingCanvasItems} state.
    
    @param id
              Id of the component.
    @param isClearingCanvasItems
              Whether the clearing of canvas items is in progress.
    @return a `CLEARING_CANVAS_ITEMS_SET` action for this instance.
    """
        ...
    @classmethod
    def setCacheKeyAction(cls, id: str=None, cacheKey: str=None) -> UiSdlReduxAction[UiSdlGraphVisualizationSetCacheKeyActionPayload]:
    """
    Dispatched when the graph is loaded in memory to sets the cache key in the state.
    
    @param id
              Id of the component.
    @param cacheKey
              The cacheKey of the cached graph.
    @return a `CACHE_KEY_SET` action for this instance.
    """
        ...
    @classmethod
    def setDataLoadingAction(cls, id: str=None, isDataLoading: bool=None) -> UiSdlReduxAction[UiSdlGraphVisualizationSetDataLoadingActionPayload]:
    """
    Dispatched to call reducer to set data loading state.
    
    @param id
              Id of the graph component.
    @param isDataLoading
              Whether the data is loading.
    @return a `DATA_LOADING_SET` action for this instance.
    """
        ...
    @classmethod
    def initializeCanvasItemsAction(cls, id: str=None, items: Map[str, Union[UiSdlGraphVisualizationDataNode,UiSdlGraphVisualizationDataEdge]]=None) -> UiSdlReduxAction[UiSdlGraphVisualizationInitializeCanvasItemsActionPayload]:
    """
    Initializes the `canvasItems` state value the first time the component is rendered.
    @param id
              Id of the graph component.
    @param items
              The items to be initialized.
    @return a `CANVAS_ITEMS_INITIALIZE` action for this instance.
    """
        ...
    @classmethod
    def resetGraphAction(cls, id: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Initializes the graphVisualization state to the first time the component is rendered.
    @param id
              Id of the graph component.
    @return a `RESET_GRAPH_TO_INITIAL_STATE` action for this instance.
    """
        ...
    @classmethod
    def setForceCanvasItemsInitializationAction(cls, id: str=None, shouldForceInitialization: bool=None) -> UiSdlReduxAction[UiSdlGraphVisualizationForceInitializeCanvasItemsActionPayload]:
    """
    Sets flag value to force initialization of `canvasItems`.
    @param id
              Id of the graph component.
    @param shouldForceInitialization
              Whether to force {@link canvasItems} initialization.
    @return a `FORCE_CANVAS_ITEMS_INITIALIZATION_SET` action for this instance.
    """
        ...
    @classmethod
    def hoverOnNodeAction(cls, id: str=None, hoveredNodeId: str=None, x: int=None, y: int=None, zoomValue: float=None) -> UiSdlReduxAction[UiSdlGraphVisualizationHoverOnNodeActionPayload]:
    """
    Triggered when a node is hovered.
    
    @param id
              Id of the component.
    @param hoveredNodeId
              Id of the hovered node.
    @param x
              The x location of the pointer in view coordinates.
    @param y
              The y location of the pointer in view coordinates.
    @param zoomValue
              The value that represents the current zoom level of the graph.
    @return a `NODE_HOVER_ON` action for this instance.
    """
        ...
    @classmethod
    def hoverOnEdgeAction(cls, id: str=None, hoveredEdgeId: str=None, x: int=None, y: int=None) -> UiSdlReduxAction[UiSdlGraphVisualizationHoverOnEdgeActionPayload]:
    """
    Triggered when an edge is hovered.
    
    @param id
              Id of the component.
    @param hoveredEdgeId
              The hovered edge id.
    @param x
              The x location of the pointer in view coordinates.
    @param y
              The y location of the pointer in view coordinates.
    @return a `EDGE_HOVER_ON` action for this instance.
    """
        ...
    @classmethod
    def hoverOnMergedEdgeAction(cls, id: str=None, hoveredEdgeIds: Array[str]=None) -> UiSdlReduxAction[UiSdlGraphVisualizationHoverOnMergedEdgeActionPayload]:
    """
    Triggered when a merged edge is hovered.
    
    @param id
              Id of the component.
    @param hoveredEdgeIds
              The ids of edges that are constituents of the merged edge.
    @return a `MERGED_EDGE_HOVER_ON` action for this instance.
    """
        ...
    @classmethod
    def hoverOffNodeAction(cls, id: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggered when a node is no longer hovered.
    
    @param id
              Id of the component.
    @return a `NODE_HOVER_OFF` action for this instance.
    """
        ...
    @classmethod
    def drawShapeAction(cls, id: str=None, drawType: str=None, drawData: any=None, leafletLayerId: int=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggers when user creates a shape using drawing tool
    
    @param id
              Id of the component.
    @param drawType
              The type of draw action it is disaptching
    @param drawData
              The data as GeoJson, of the shape that was drawn.
    @return a `DRAW_SHAPE` action for this instance.
    """
        ...
    @classmethod
    def drawStartAction(cls, id: str=None, actionType: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggers when user start using the drawing tool
    
    @param id
              Id of the component.
    @param drawType
              The type of draw action it is disaptching
    @return a `DRAW_START` action for this instance.
    """
        ...
    @classmethod
    def drawStopAction(cls, id: str=None, actionType: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggers when user stop using the drawing tool
    
    @param id
              Id of the component.
    @param drawType
              The type of draw action it is disaptching
    @return a `DRAW_STOP` action for this instance.
    """
        ...
    @classmethod
    def drawEditStartAction(cls, id: str=None, actionType: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggers when user start edit a shape using the editing tool
    
    @param id
              Id of the component.
    @param drawType
              The type of draw action it is disaptching
    @return a `DRAW_EDIT_START` action for this instance.
    """
        ...
    @classmethod
    def drawEditResizeAction(cls, id: str=None, actionType: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggers when user resizes a shape using the editing tool
    
    @param id
              Id of the component.
    @param drawType
              The type of draw action it is disaptching
    @return a `DRAW_EDIT_RESIZE` action for this instance.
    """
        ...
    @classmethod
    def drawEditVertexAction(cls, id: str=None, actionType: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggers when user edit the vertex of a shape using the editing tool
    
    @param id
              Id of the component.
    @param drawType
              The type of draw action it is disaptching
    @return a `DRAW_EDIT_RESIZE` action for this instance.
    """
        ...
    @classmethod
    def drawEditMoveAction(cls, id: str=None, actionType: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggers when user moves the shape using the editing tool
    
    @param id
              Id of the component.
    @param drawType
              The type of draw action it is disaptching
    @return a `DRAW_EDIT_MOVE` action for this instance.
    """
        ...
    @classmethod
    def drawEditStopAction(cls, id: str=None, actionType: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggers when user stops editing a shape using the editing tool
    
    @param id
              Id of the component.
    @param drawType
              The type of draw action it is disaptching
    @return a `DRAW_EDIT_STOP` action for this instance.
    """
        ...
    @classmethod
    def hoverOffEdgeAction(cls, id: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggered when an edge is no longer hovered.
    
    @param id
              Id of the component.
    @return a `EDGE_HOVER_OFF` action for this instance.
    """
        ...
    @classmethod
    def hoverOffMergedEdgeAction(cls, id: str=None) -> UiSdlReduxAction[UiSdlComponentActionPayload]:
    """
    Triggered when a merged edge is no longer hovered.
    
    @param id
              Id of the component.
    @return a `MERGED_EDGE_HOVER_OFF` action for this instance.
    """
        ...
    @classmethod
    def pingItemsAction(cls, id: str=None, pingItemIds: Array[str]=None) -> UiSdlReduxAction[UiSdlGraphVisualizationPingItemsActionPayload]:
    """
    Dispatched to temporarily animate or ping the given graph items.
    
    @param id
              Id of the component.
    @param pingItemIds
              The node or edge ids to ping in the graph.
    @return a `ITEMS_PING` action for this instance.
    """
        ...
    @classmethod
    def setMergedEdgeMappingAction(cls, id: str=None, mergedEdgeMapping: Map[str, str]=None) -> UiSdlReduxAction[UiSdlGraphVisualizationSetMergedEdgeMappingActionPayload]:
    """
    Dispatched to set merged edge mappings in the graph state.
    
    @param id
              Id of the graph component.
    @param mergedEdgeMapping
              The mapping of edge ids to merged edge ids.
    @return a `MERGED_EDGE_MAPPING_SET` action for this instance.
    """
        ...
    @classmethod
    def setSelectedItemsAction(cls, id: str=None, selectedItemIds: Array[str]=None) -> UiSdlReduxAction[UiSdlGraphVisualizationSetSelectedItemsActionPayload]:
    """
    Dispatched to set selected items in the graph.
    
    @param id
              Id of the graph component.
    @param selectedItemIds
              The list of selected item ids to set.
    @return a `SELECTED_ITEMS_SET` action for this instance.
    """
        ...
    @classmethod
    def setTimeBarInRangeItemsAction(cls, id: str=None, timeBarInRangeItems: Array[str]=None) -> UiSdlReduxAction[UiSdlGraphVisualizationSetTimeBarInRangeItemsActionPayload]:
    """
    Dispatched to set the edges that are included in the current time bar range.
    
    @param id
              Id of the graph component.
    @param timeBarInRangeItems
              The list of in range item ids to set.
    @return a `TIME_BAR_RANGE_SET` action for this instance.
    """
        ...
    @classmethod
    def setLayoutAction(cls, id: str=None, layout: UiSdlGraphVisualizationLayout=None) -> UiSdlReduxAction[UiSdlGraphVisualizationSetLayoutActionPayload]:
    """
    Dispatched to set the layout.
    
    @param id
              Id of the graph component.
    @param layout
              The layout object to set.
    @return a `LAYOUT_SET` action for this instance.
    """
        ...
    @classmethod
    def setAnimationAction(cls, id: str, animation: UiSdlGraphVisualizationAnimation=None) -> UiSdSetAnimationGraphVisualizationAction:
    """
    Dispatched to set the animation.
    
    @param id
              Id of the graph component.
    @param animation
              The animation object to set.
    @return a `ANIMATION_SET` action for this instance.
    """
        ...
    @classmethod
    def clickContextMenuItemAction(cls, id: str=None, itemId: str=None, actionToDispatch: UiSdlAction=None) -> UiSdlReduxAction[UiSdlGraphVisualizationClickContextMenuItemActionPayload]:
    """
    Dispatched when a context menu item is clicked.
    
    @param id
              Id of the graph component.
    @param itemId
              The id of the item that was right-clicked to launch the context menu.
    @param actionToDispatch
              The action that should be dispatched when the item is clicked.
    @return a `CONTEXT_MENU_ITEM_CLICK` action for this instance.
    """
        ...
    @classmethod
    def submitAnnotationAction(cls, id: str=None, annotation: str=None, itemId: str=None, itemType: str=None) -> UiSdlReduxAction[UiSdlGraphVisualizationSubmitAnnotationActionPayload]:
    """
    Action triggered when an annotation is submitted
    @param id
              The id of the component
    @param annotation
              The text of the annotation
    @param itemId
              The id of the item to be annotated
    @param itemType
              The type of the item being annotated (node/edge)
    @return a `ANNOTATION_SUBMIT` action for this instance.
    """
        ...
    @classmethod
    def updateComboItemsAction(cls, id: str=None, item: UiSdlGraphVisualizationDataNode=None, items: Array[UiSdlGraphVisualizationDataNode]=None) -> UiSdlReduxAction[UiSdlGraphVisualizationUpdateComboItemsActionPayload]:
    """
    Dispatched when a combo is changed, either gaining or losing a node.
    
    @param id
              Id of the graph component.
    @param item
              The item that was added to or removed from a combo.
    @param items
              The canvas items after the change.
    @return a `COMBO_ITEMS_UPDATED` action for this instance.
    """
        ...
    @classmethod
    def deleteAnnotationAction(cls, id: str=None, itemId: str=None) -> UiSdlReduxAction[UiSdlGraphVisualizationDeleteAnnotationActionPayload]:
    """
    Dispatched when an annotation is deleted.
    
     @param id
               Id of the graph component.
     @param itemId
               The id of the item that the annotation is associated with.
     @return a `ANNOTATION_DELETE` action for this instance.
    """
        ...
    @classmethod
    def cacheKeySetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `CACHE_KEY_SET` and updates {@link UiSdlGraphVisualization#cacheKey}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def clearGraphClickReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `CLEAR_GRAPH_CLICK` and sets {@link UiSdlGraphVisualization#selectedItems},
    {@link UiSdlGraphVisualization#selectedNodeIds}, {@link UiSdlGraphVisualization#selectedEdgeIds},
    {@link UiSdlGraphVisualization#selectedRegion}, {@link UiSdlGraphVisualization#timeBarInRangeItems},
    and {@link UiSdlGraphVisualization#canvasItems} to empty value.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def clearingCanvasItemsSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `CLEARING_CANVAS_ITEMS_SET` and updates
    {@link UiSdlGraphVisualization#isClearingCanvasItems}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def regionClickReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `REGION_CLICK` and updates {@link UiSdlGraphVisualization#selectedRegion}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def updateHiddenNodesReducer(cls, state: UiSdlReduxState, action: UiSdlGraphVisualizationClickLegendActionPayload) -> UiSdlReduxState:
    """
    Listens for actions of type `HIDDEN_GRAPH_NODES_UPDATE` and updates {@link UiSdlGraphVisualization#hiddenNodes}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def resetGraphReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `RESET_GRAPH_TO_INITIAL_STATE` and updates {@link UiSdlGraphVisualization}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def shapeDrawReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `DRAW_SHAPE` and updates state `shapeData`.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def dataLoadingSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `DATA_LOADING_SET` and sets the loading state.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def canvasItemsInitializeReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `CANVAS_ITEMS_INITIALIZE` and initializes the canvasItems value.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return an Observable action stream.
    """
        ...
    @classmethod
    def forceCanvasItemsInitializationSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `FORCE_CANVAS_ITEMS_INITIALIZATION_SET` and sets the
    {@link UiSdlGraphVisualization#forceCanvasItemsInitialization} value in the state.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return an Observable action stream.
    """
        ...
    @classmethod
    def selectedItemsSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SELECTED_ITEMS_SET` and sets {@link UiSdlGraphVisualization#selectedItems},
    {@link UiSdlGraphVisualization#selectedNodeIds} and {@link UiSdlGraphVisualization#selectedEdgeIds} values in the
    state.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def mergedEdgeMappingSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `MERGED_EDGE_MAPPING_SET` and sets merged edge mapping in the graph state.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def layoutSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `LAYOUT_SET` and sets the layout in the graph state.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def setAnimationReducer(cls, state: UiSdlReduxState, action: UiSdSetAnimationGraphVisualizationAction) -> UiSdlReduxState:
    """
    Listens for actions of type `ANIMATION_SET` and sets the animation in the graph state.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def itemsPingReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `ITEMS_PING` and temporarily animate or ping the given graph items.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def timeBarInRangeItemsSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `TIME_BAR_RANGE_SET` and sets the time bar range and in range ids.
    If {@link UiSdlGraphVisualizationTimeBarConfig#mode} is 'dim', adds a fade to all items that are out of the
    timebar range.
    If {@link UiSdlGraphVisualizationTimeBarConfig#mode} is 'filter', sets the invisible property true on all items
    that are out of the timebar range. The presentational component omits these items from being passed into the
    Chart component.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return a new Redux state.
    """
        ...
    @classmethod
    def openWarningModalEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Listens for actions of type `WARNING_MODAL_OPEN`.
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    @return an Observable action stream.
    """
        ...
    @classmethod
    def closeWarningModalEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Listens for actions of type `WARNING_MODAL_CLOSE`.
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    @return an Observable action stream.
    """
        ...
    @classmethod
    def clickContextMenuItemEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Listens for actions of type `CONTEXT_MENU_ITEM_CLICK`, and dispatches the configured action.
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    @return an Observable action stream.
    """
        ...

