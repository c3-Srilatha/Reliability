#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.uiComponentLibrary.UiSdlLineBarChartYAxisMarkerLineSpec import UiSdlLineBarChartYAxisMarkerLineSpec
from c3.uiInfrastructure.UiSdlDynamicValueSpec import UiSdlDynamicValueSpec
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.reliability.ExperimentalPreviewHelper.ChartData import ExperimentalPreviewHelper.ChartData
from c3.uiComponentLibrary.UiSdlTooltipBaseSettings import UiSdlTooltipBaseSettings
from c3.uiComponentLibrary.UiSdlDisplayDateUpdateAction import UiSdlDisplayDateUpdateAction
from c3.platform.Promise import Promise
from c3.platform.Meta import Meta
from c3.platform.ReactComponentPropsSpec import ReactComponentPropsSpec
from c3.uiComponentLibrary.UiSdlHistogramXAxisConfig import UiSdlHistogramXAxisConfig
from c3.platform.WithKey import WithKey
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.uiComponentLibrary.UiSdlUpdateYAxisAction import UiSdlUpdateYAxisAction
from c3.platform.Filter import Filter
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.UiSdlComponentRef import UiSdlComponentRef
from c3.platform.UiSdlRegisterTriggersAction import UiSdlRegisterTriggersAction
from c3.platform.UiSdlReduxState import UiSdlReduxState
from c3.platform.ValueType import ValueType
from c3.uiComponentLibrary.UiSdlChartClickAction import UiSdlChartClickAction
from c3.platform.ValueSpec import ValueSpec
from c3.uiComponentLibrary.UiSdlLineBarChartXAxisConfig import UiSdlLineBarChartXAxisConfig
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.uiComponentLibrary.UiSdlLineBarChartAddYAxisMarkerAction import UiSdlLineBarChartAddYAxisMarkerAction
from c3.uiComponentLibrary.UiSdlTimeseriesLineBarChartXAxisConfig import UiSdlTimeseriesLineBarChartXAxisConfig
from c3.platform.SetType import SetType
from c3.uiComponentLibrary.UiSdlTimeseriesLineBarChartEvalDataSpec import UiSdlTimeseriesLineBarChartEvalDataSpec
from c3.uiComponentLibrary.UiSdlTimeseriesLineBarChartDataSpec import UiSdlTimeseriesLineBarChartDataSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.uiComponentLibrary.UiSdlTitleUpdateAction import UiSdlTitleUpdateAction
from c3.platform.Exclude import Exclude
from c3.platform.ScanStats import ScanStats
from c3.uiComponentLibrary.UiSdlTimeseriesLineBarChartNowLineConfig import UiSdlTimeseriesLineBarChartNowLineConfig
from c3.platform.MapBuilder import MapBuilder
from c3.uiComponentLibrary.UiSdlTimeseriesLineBarChartDateLineConfig import UiSdlTimeseriesLineBarChartDateLineConfig
from c3.uiComponentLibrary.UiSdlHideChartSeriesHiddenSeriesUpdateAction import UiSdlHideChartSeriesHiddenSeriesUpdateAction
from c3.uiComponentLibrary.UiSdlChartGridUpdateAction import UiSdlChartGridUpdateAction
from c3.uiComponentLibrary.UiSdlUpdateXAxisAction import UiSdlUpdateXAxisAction
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.uiComponentLibrary.UiSdlLineBarChartYAxisConfig import UiSdlLineBarChartYAxisConfig
from c3.uiComponentLibrary.UiSdlXAxisShadingAddAction import UiSdlXAxisShadingAddAction
from c3.uiComponentLibrary.UiSdlTimeseriesLineBarChartDateLineDataSpec import UiSdlTimeseriesLineBarChartDateLineDataSpec
from c3.uiInfrastructure.UiSdlComponentHeader import UiSdlComponentHeader
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.uiInfrastructure.UiSdlActionsObservable import UiSdlActionsObservable
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.uiComponentLibrary.UiSdlChartLegend import UiSdlChartLegend
from c3.platform.Stream import Stream
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Promise import Promise
from c3.platform.MetadataDeps import MetadataDeps
from c3.platform.Obj import Obj
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.uiComponentLibrary.UiSdlChartXAxisAreaCollapseAction import UiSdlChartXAxisAreaCollapseAction
from c3.platform.UiSdlInitialRenderAction import UiSdlInitialRenderAction
from c3.uiComponentLibrary.UiSdlTimeZoneLabelVisibilityAction import UiSdlTimeZoneLabelVisibilityAction
from c3.platform.EvalMetricsResult import EvalMetricsResult
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.uiComponentLibrary.UiSdlChartEChartsGrid import UiSdlChartEChartsGrid
from c3.uiComponentLibrary.UiSdlTimeseriesLineBarChartEventDataSpec import UiSdlTimeseriesLineBarChartEventDataSpec
from c3.platform.FieldValue import FieldValue
from c3.uiComponentLibrary.UiSdlDataSourcesClearAction import UiSdlDataSourcesClearAction
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ScanSpec import ScanSpec
from c3.uiInfrastructure.UiSdlStatesObservable import UiSdlStatesObservable
from c3.uiComponentLibrary.UiSdlChartSynchronizedModeChangeAction import UiSdlChartSynchronizedModeChangeAction
from c3.platform.MapBuilder import MapBuilder
from c3.uiComponentLibrary.UiSdlTimeseriesLineBarChartXAxisStaticConfig import UiSdlTimeseriesLineBarChartXAxisStaticConfig
from c3.uiComponentLibrary.UiSdlDataFilterUpdateAction import UiSdlDataFilterUpdateAction
from c3.uiComponentLibrary.UiSdlHistogramYAxisConfig import UiSdlHistogramYAxisConfig
from c3.platform.ExistsSpec import ExistsSpec
from c3.platform.FetchResult import FetchResult
from c3.platform.ObjBuilder import ObjBuilder

# Python definitions for the C3 type ModelExperimentPreviewChartReact


class ModelExperimentPreviewChartReact(ReactFunction, ModelExperimentPreviewChart):
    """
    React renderer for {@link ModelExperimentPreviewChart}
    
    @remarks this represents a made instance of ModelExperimentPreviewChartReact
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

    dataSpec: Optional[UiSdlTimeseriesLineBarChartDataSpec]=None
    """
    The specification used for retrieving data displayed by the grid.
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

    hiddenSeries: Optional[Array[str]]=None
    """
    A list of hidden series id.
    """

    defaultColors: Optional[Array[str]]=None
    """
    A list of default colors.
    If a series doesn't have specified color it will take color from this list of foundation design tokens in order.
    slate-50, blue-60, cyan-40, purple-50, plum-70, forest-40, choco-60, cyan-60, plum-30, olive-50, purple-70, forest-70
    """

    backgroundStyle: Optional[str]=None
    """
    The background style for the chart.
    """

    height: Optional[int]=None
    """
    The height of the component in pixels.
    """

    tooltipEnabled: Optional[bool]=None
    """
    Whether to enable tooltips.
    """

    tooltipValuesDecimalPrecision: Optional[int]=None
    """
    The decimal precision to show on tooltip values.
    """

    tooltipUnitEnabled: Optional[bool]=None
    """
    Whether or not to show units in tooltip
    """

    tooltipConfig: Optional[UiSdlTooltipBaseSettings]=None

    toolboxDataZoom: Optional[bool]=None
    """
    Data area zooming. If set to `true`, a zoom icon will be displayed in the
    toolbox and users will be able to zoom in by dragging within the chart area.
    """

    data: Optional[Array[Obj]]=None
    """
    Holds the data to display in the grid.
    """

    header: Optional[UiSdlComponentHeader]=None
    """
    Chart header.
    """

    yAxis: Optional[UiSdlLineBarChartYAxisConfig]=None
    """
    Y-axis config type.
    """

    grid: Optional[UiSdlChartEChartsGrid]=None
    """
     Configuration for the grid.
    Includes left, right, top, bottom padding for the chart
    """

    legend: Optional[UiSdlChartLegend]=None
    """
    The chart legend - information for each series.
    """

    zoomEnabled: Optional[bool]=None
    """
    Whether to allow users to zoom the chart data via a scrubber tool
    displayed directly below the chart.
    """

    defaultChartType: Optional[str]=None
    """
    The default type of chart to be displayed. This is a fallback value used
    when a series does not have a specific series type configured.
    """

    showDownloadOptions: Optional[bool]=None
    """
    Show a dropdown menu in the chart header to download the chart.
    The user can choose to download one of the following file types: .png, .jpeg, .csv
    """

    showDataLabelsToggle: Optional[bool]=None
    """
    Show a toggle next to the download options that will display data labels
    """

    stackBars: Optional[bool]=None
    """
    If `true`, stack all series whose series type is `'bar'`.
    """

    emptyState: Optional[UiSdlComponentRef[UiSdlEmptyState]]=None
    """
    The component that handles the empty state.
    It will appear if the grid has no data.
    """

    chartActionsCollapseThreshold: Optional[int]=None
    """
    The number of actions to display on the chart header.
    """

    csvMissingDataFiller: Optional[str]=None
    """
    What is used to fill in missing seriesData when exporting to .csv data
    """

    showTimeZoneLabel: Optional[bool]=None
    """
    Whether or not to show the timezone label below chart.
    """

    timeZoneLabel: Optional[Union[str,UiSdlDynamicValueSpec]]=None
    """
    The label to display below the chart.
    By default the label is the time zone configured for the component. But it can be overridden setting a value here.
    """

    timeZoneNameFormat: Optional[str]=None
    """
    The format to use for the time zone label.
    - [longGeneric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#longgeneric): Display the time zone name in long format (e.g. "Pacific Time").
    - [shortGeneric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#shortgeneric): Display the time zone name in short format (e.g. "PT").
    Default value is 'longGeneric'.
    """

    eventDataSpec: Optional[UiSdlTimeseriesLineBarChartEventDataSpec]=None
    """
    The specification used to retrieve event data displayed by this chart.
    """

    eventData: Optional[Obj]=None
    """
    Stores the FetchResults retrieved by {@link #eventDataSpec}.
    """

    evalDataSpec: Optional[UiSdlTimeseriesLineBarChartEvalDataSpec]=None
    """
    The specification used to retrieve data displayed by this chart.
    Note: evalDataSpec takes priviledge over dataSpec. Developer cannot combine both.
    If `evalDataSpec` and `dataSpec` are both defined, `evalDataSpec` will be used and `dataSpec` will be ignored.
    """

    showCrosshair: Optional[bool]=None
    """
    Whether or not to show crosshairs on hovering the chart, these will snap to the nearest point based on both X and Y axis.
    It will also have a tooltip on the axes to show the date and value.
    """

    xAxis: Optional[Union[UiSdlTimeseriesLineBarChartXAxisConfig,UiSdlTimeseriesLineBarChartXAxisStaticConfig]]=None
    """
    Only timeseries chart will have xAxis component configuration.  Categorical charts will define their
    X-axis configuration in the dataSpec types.
    """

    showNowLine: Optional[bool]=None
    """
    Whether or not to display the "now" line on the chart.
    """

    collapseXAxis: Optional[bool]=None
    """
    Whether or not to enable collapsible xAxis feature.
    Warning - This is a private, unreleased feature. Use it at your own risk.
    """

    nowLineConfig: Optional[UiSdlTimeseriesLineBarChartNowLineConfig]=None
    """
    Style configurations of vertical line at the "now" point of time according to the interval of data being plotted.
    """

    dateLines: Optional[Array[UiSdlTimeseriesLineBarChartDateLineConfig]]=None
    """
    Configuration to add vertical line at any date on the graph.
    """

    dateLinesDataSpec: Optional[UiSdlTimeseriesLineBarChartDateLineDataSpec]=None
    """
    Configurations to add vertical line at any date on the graph requiring a fetch call.
    """

    hideMissingDataPoints: Optional[bool]=None
    """
    Whether or not to plot and show data at timestamps where there are 100% missing values.
    """

    noTimeZoneConversion: Optional[bool]=None
    """
    Timezone configuration for displayed data.
    E.g. if an event happened at 1am EST, we will show the event as happened at 1am to browsers in any timezone.
    """

    showAllTimestampInfoOnTooltip: Optional[bool]=None
    """
    Whether to show all information of timestamp on tooltip when hovering over on a chart.
    This configuration will show all information of a timestamp regardless of the
    display interval.
    
    E.g. if INTERVAL = 'YEAR' and timestamp = 2023-01-01T00:00:00
    if `false`, tooltip will show 2023
    if `true`, tooltip will show Jan 1, 2023 12:00:00 AM
    """

    showStartAndEndDate: Optional[bool]=None
    """
    Whether or not to show the start date of the chart.
    """

    displayStartDate: Optional[str]=None
    """
    Start date displayed in the chart shown only when dataSelection is enabled.
    """

    displayEndDate: Optional[str]=None
    """
    End date displayed in the chart shown only when dataSelection is enabled.
    """

    markerIdentifiersToCollapse: Optional[Array[str]]=None

    displayInterval: Optional[str]=None
    """
    Interval display value in the chart shown only when dataSelection is enabled.
    Internal use only.
    """

    displayIntervalOptions: Optional[Array[str]]=None
    """
    Interval display options in the chart shown only when dataSelection is enabled.
    """

    shouldOverrideUserConfigIdWithDataGeneratedId: Optional[bool]=None
    """
    Whether or not to override user config ID with data generated ID.
    """

    dataSelection: Optional[bool]=None
    """
    Whether or not to show the data selector. For example, the date range and interval selectors.
    """

    dataSelectionControlsDataZoom: Optional[bool]=None
    """
    when this boolean turns true, it means we use the data selection inputs to control the data zoom
    it changes the chart range but does not make a new API call.
    """

    dataZoomStartValue: Optional[str]=None
    """
    Start value used in the datazoom to filter a certain range of chart.
    """

    dataZoomEndValue: Optional[str]=None
    """
    End value used in the datazoom to filter a certain range of chart.
    """

    synchronized: Optional[bool]=None
    """
    If true, displays each chart series on a separate chart grid, while sychronizing the ability to view
    information such as x-axis value and tooltip across series.
    """

    suppressOrderSeriesById: Optional[bool]=None
    """
    If true, order the series in whatever order they are returned from the server. By default, the series
    will be ordered alphanumerically by ID.
    """

    noDataComponentId: Optional[str]=None
    """
    The id of the component to show when there is no data.
    """

    selectedFeatureId: Optional[str]=None
    """
    The ids of the series that are currently plotted on the chart.
    """

    zoomRangeStart: Optional[datetime]=None
    """
    The start of the zoom range.
    """

    zoomRangeEnd: Optional[datetime]=None
    """
    The end of the zoom range.
    """

    riskScoreThreshold: Optional[float]=None
    """
    The risk score threshold to plot.
    """

    dataRange: Optional[Map[str, datetime]]=None
    """
    The range of data that the `data` field contains.
    Has two keys, start and end.
    """

    chartData: Optional[ExperimentalPreviewHelper.ChartData]=None
    """
    The chart data to display.
    """

    featureOutputData: Optional[EvalMetricsResult]=None
    """
    The feature output data to display when a feature is selected from the grid.
    """
    def __init__(self, meta: Optional[Meta]=None, id: Optional[str]=None, name: Optional[str]=None, dataSpec: Optional[UiSdlTimeseriesLineBarChartDataSpec]=None, disableDataRequestOnFirstRender: Optional[bool]=None, triggersRegistered: Optional[bool]=None, wrapWithMetadataId: Optional[bool]=None, hiddenSeries: Optional[Array[str]]=None, defaultColors: Optional[Array[str]]=None, backgroundStyle: Optional[str]=None, height: Optional[int]=None, tooltipEnabled: Optional[bool]=None, tooltipValuesDecimalPrecision: Optional[int]=None, tooltipUnitEnabled: Optional[bool]=None, tooltipConfig: Optional[UiSdlTooltipBaseSettings]=None, toolboxDataZoom: Optional[bool]=None, data: Optional[Array[Obj]]=None, header: Optional[UiSdlComponentHeader]=None, yAxis: Optional[UiSdlLineBarChartYAxisConfig]=None, grid: Optional[UiSdlChartEChartsGrid]=None, legend: Optional[UiSdlChartLegend]=None, zoomEnabled: Optional[bool]=None, defaultChartType: Optional[str]=None, showDownloadOptions: Optional[bool]=None, showDataLabelsToggle: Optional[bool]=None, stackBars: Optional[bool]=None, emptyState: Optional[UiSdlComponentRef[UiSdlEmptyState]]=None, chartActionsCollapseThreshold: Optional[int]=None, csvMissingDataFiller: Optional[str]=None, showTimeZoneLabel: Optional[bool]=None, timeZoneLabel: Optional[Union[str,UiSdlDynamicValueSpec]]=None, timeZoneNameFormat: Optional[str]=None, eventDataSpec: Optional[UiSdlTimeseriesLineBarChartEventDataSpec]=None, eventData: Optional[Obj]=None, evalDataSpec: Optional[UiSdlTimeseriesLineBarChartEvalDataSpec]=None, showCrosshair: Optional[bool]=None, xAxis: Optional[Union[UiSdlTimeseriesLineBarChartXAxisConfig,UiSdlTimeseriesLineBarChartXAxisStaticConfig]]=None, showNowLine: Optional[bool]=None, collapseXAxis: Optional[bool]=None, nowLineConfig: Optional[UiSdlTimeseriesLineBarChartNowLineConfig]=None, dateLines: Optional[Array[UiSdlTimeseriesLineBarChartDateLineConfig]]=None, dateLinesDataSpec: Optional[UiSdlTimeseriesLineBarChartDateLineDataSpec]=None, hideMissingDataPoints: Optional[bool]=None, noTimeZoneConversion: Optional[bool]=None, showAllTimestampInfoOnTooltip: Optional[bool]=None, showStartAndEndDate: Optional[bool]=None, displayStartDate: Optional[str]=None, displayEndDate: Optional[str]=None, markerIdentifiersToCollapse: Optional[Array[str]]=None, displayInterval: Optional[str]=None, displayIntervalOptions: Optional[Array[str]]=None, shouldOverrideUserConfigIdWithDataGeneratedId: Optional[bool]=None, dataSelection: Optional[bool]=None, dataSelectionControlsDataZoom: Optional[bool]=None, dataZoomStartValue: Optional[str]=None, dataZoomEndValue: Optional[str]=None, synchronized: Optional[bool]=None, suppressOrderSeriesById: Optional[bool]=None, noDataComponentId: Optional[str]=None, selectedFeatureId: Optional[str]=None, zoomRangeStart: Optional[datetime]=None, zoomRangeEnd: Optional[datetime]=None, riskScoreThreshold: Optional[float]=None, dataRange: Optional[Map[str, datetime]]=None, chartData: Optional[ExperimentalPreviewHelper.ChartData]=None, featureOutputData: Optional[EvalMetricsResult]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[ModelExperimentPreviewChartReact]:
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
    def fromJsonString(cls, json: str) -> Union[ModelExperimentPreviewChartReact]:
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
    def fromXmlString(cls, xml: str) -> Union[ModelExperimentPreviewChartReact]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[ModelExperimentPreviewChartReact]:
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
    def replaceType(self, old: Type, new: Type) -> ModelExperimentPreviewChartReact:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ModelExperimentPreviewChartReact:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ModelExperimentPreviewChartReact:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ModelExperimentPreviewChartReact]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ModelExperimentPreviewChartReact]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> ModelExperimentPreviewChartReact:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ModelExperimentPreviewChartReact:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ModelExperimentPreviewChartReact:
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
    def validateObj(self) -> ModelExperimentPreviewChartReact:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> ModelExperimentPreviewChartReact:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> ModelExperimentPreviewChartReact:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> ModelExperimentPreviewChartReact:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> ModelExperimentPreviewChartReact:
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
    def withoutFieldAtPath(self, path: str) -> ModelExperimentPreviewChartReact:
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
    def withoutField(self, field: str) -> ModelExperimentPreviewChartReact:
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
    def withoutField(self, field: FieldType) -> ModelExperimentPreviewChartReact:
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
    def withoutFields(self, fields: Array[str]) -> ModelExperimentPreviewChartReact:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> ModelExperimentPreviewChartReact:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> ModelExperimentPreviewChartReact:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> ModelExperimentPreviewChartReact:
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
    def defaultField(self, field: str) -> ModelExperimentPreviewChartReact:
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
    def defaultField(self, field: FieldType) -> ModelExperimentPreviewChartReact:
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
    def unsetField(self, field: str) -> ModelExperimentPreviewChartReact:
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
    def unsetField(self, field: FieldType) -> ModelExperimentPreviewChartReact:
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
    def removeField(self, field: str) -> ModelExperimentPreviewChartReact:
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
    def removeField(self, field: FieldType) -> ModelExperimentPreviewChartReact:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> ModelExperimentPreviewChartReact:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> ModelExperimentPreviewChartReact:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> ModelExperimentPreviewChartReact:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> ModelExperimentPreviewChartReact:
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
    def mergeJson(self, json: any) -> ModelExperimentPreviewChartReact:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> ModelExperimentPreviewChartReact:
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
    def sumObj(self, other: Obj, deep: bool=None) -> ModelExperimentPreviewChartReact:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[ModelExperimentPreviewChartReact]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[ModelExperimentPreviewChartReact]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[ModelExperimentPreviewChartReact]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[ModelExperimentPreviewChartReact]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[ModelExperimentPreviewChartReact]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, ModelExperimentPreviewChartReact]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, ModelExperimentPreviewChartReact]]:
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
    def toBuilder(self) -> ObjBuilder[ModelExperimentPreviewChartReact]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[ModelExperimentPreviewChartReact]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> ModelExperimentPreviewChartReact:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> ModelExperimentPreviewChartReact:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> ModelExperimentPreviewChartReact:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> ModelExperimentPreviewChartReact:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> ModelExperimentPreviewChartReact:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> ModelExperimentPreviewChartReact:
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
    def make(cls, s: str) -> Union[ModelExperimentPreviewChartReact]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> ModelExperimentPreviewChartReact:
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
    def afterMake(self) -> ModelExperimentPreviewChartReact:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> ModelExperimentPreviewChartReact:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[ModelExperimentPreviewChartReact]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> ModelExperimentPreviewChartReact:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @classmethod
    def tsx(cls) -> Union[str]:
    """
    Produce the complete TSX file, including the declaration of the interface for the "props" based on the data
    fields defined on the component type. This interface is always named with the type name plus "Props" and appended
    to the existing source file.
    """
        ...
    @classmethod
    def buildProps(cls, type: Type, spec: ReactComponentPropsSpec=None) -> Union[str]:
    """
    Produce the "props" interface for an arbitrary type. This will produce a TypeScript interface declaration that
    includes all the data fields of the specified type, and the public data fields of types it mixes in. The details
    can be controlled through the spec argument, but the defaults are what gets used by #tsx.
    
    @param type the type to examine
    @param spec options for interface generation
    @return TypeScript interface declaration
    """
        ...
    @classmethod
    def tsxPath(cls) -> Union[str]:
    """
    The React component's tsx file path from root folder "/ui". i.e 'common/UiImg.tsx'
    """
        ...
    @classmethod
    def importedModule(cls) -> Union[Any]:
    """
    If it has been imported, returns the imported module to render the UiComponent - the module at the tsxPath()
    """
        ...
    @classmethod
    def render(cls, props: ModelExperimentPreviewChartReact=None) -> None:
    """
    The render function must be implemented as the function the TSX implementation exports.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[ModelExperimentPreviewChartReact]:
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
    def fetch(cls, filter: Filter) -> FetchResult[ModelExperimentPreviewChartReact]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[ModelExperimentPreviewChartReact]]:
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
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[ModelExperimentPreviewChartReact]]]:
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
    def dependencies(self) -> MetadataDeps[ModelExperimentPreviewChartReact]:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> ModelExperimentPreviewChartReact:
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
    def update(self, srcObj: ModelExperimentPreviewChartReact=None, spec: UpsertSpec=None) -> Union[ModelExperimentPreviewChartReact]:
        ...
    def upsert(self, srcObj: ModelExperimentPreviewChartReact=None, spec: UpsertSpec=None) -> Union[ModelExperimentPreviewChartReact]:
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
    def fromString(cls, s: str) -> Union[ModelExperimentPreviewChartReact]:
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
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[ModelExperimentPreviewChartReact]:
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
    def doDataMerge(cls, componentId: str, dataSpecFieldName: str, dataDestinationFieldName: str, props: ModelExperimentPreviewChartReact, state: UiSdlReduxState) -> Union[ModelExperimentPreviewChartReact]:
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
    def updateHiddenSeriesAction(cls, name: str, id: str=None) -> Union[UiSdlHideChartSeriesHiddenSeriesUpdateAction]:
    """
    Triggered to update chart hidden series.
    
    @param id
               Id of the component.
    @param name
               The name of the series to hide.
    
    @return A `HIDDEN_SERIES_UPDATE` action for this instance with the following properties:
    - payload {string} The name of the series.
    """
        ...
    @classmethod
    def hiddenSeriesUpdateEffect(cls, state: UiSdlReduxState=None, action: UiSdlHideChartSeriesHiddenSeriesUpdateAction=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `HIDDEN_SERIES_UPDATE` and updates internal field {@link hiddenSeries}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    
    @returns A new Redux state.
    """
        ...
    @classmethod
    def generateFilterString(cls, fieldValues: Map[str, Any]=None) -> Union[str]:
    """
    Private helper function to generate a filter expression from {@link fieldValues}.
    
    @param filterValues
            A mapping of field names to values.
    
    @return string
            The filter string representing the {@link fieldValues}.
    """
        ...
    @classmethod
    def getRelevantFieldValues(cls, fieldValues: Map[str, Any], typeName: str=None, componentId: str=None) -> Union[Map[str, Any]]:
    """
    Private helper function to get relevant field values for this specific component from raw field values.
    Every component at this page should call this helper function to get the relevant field values.
    What it does is loop over raw field values and only look at the fields that have the same data type at
    `dataMappings` field as the data type used in data spec.  Also if applicable, it will transform the fieldNames
    as specified in the {@link UiSdlFieldSetFilterFieldSetting#componentsToFilterMapping} or
    {@link UiSdlFieldSetInputFieldSetting#metricBasedComponentsToInputMapping} value.
    
    @param fieldValues
              A mapping of field names to values.
    @param typeName
              The name of the type to get relevant fields for.
    @param componentId
              Optional componentId; this will be used when checking if there are any component field bindings; if so,
              the fieldName will be transformed to that which is specified in the
              {@link UiSdlFieldSetFilterFieldSetting#componentsToFilterMapping} or
              {@link UiSdlFieldSetInputFieldSetting#metricBasedComponentsToInputMapping} value.
    
    @return Only relevant field values.
    """
        ...
    @classmethod
    def generateFilterStringElem(cls, item: Any=None, field: str=None) -> Union[str]:
    """
    Generate each filter string element of final filter string.
    
    @param item
             Json config of one field to filter on.
    @param field
             Field path on type.
    """
        ...
    @classmethod
    def transformFieldNameForComponentBinding(cls, fieldName: str, fieldValue: Map[str, Any], componentId: str) -> str:
    """
    Transform fieldName for this specific component based on the field bindings.
    Will determine which field value applies to the current component and what field to assign that value to.
    
    @param fieldName
              The fieldName which may be transformed.
    @param fieldValue
              The fieldValue associated with the fieldName.
    @param componentId
              The componentId for the component to be filtered.
    
    @return Only relevant field values.
    """
        ...
    @classmethod
    def filterSubmitEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Triggers `FILTER_SUBMIT` action.
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    
    @returns An Observable action stream.
    """
        ...
    @classmethod
    def advancedFilterSubmitEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Triggers `ADVANCED_FILTER_SUBMIT` action.
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    
    @returns An Observable action stream.
    """
        ...
    @classmethod
    def updateTitleAction(cls, id: str, title: str) -> Union[UiSdlTitleUpdateAction]:
    """
    Action to update the title for the time series line bar chart.
    
    @param id
              Id of the component.
    @param title
              Title to update
    
    @returns a `TITLE_UPDATE` action for this instance with the following properties:
    - payload {
         header: {
           titles: string
         },
         componentId: string
      }
    """
        ...
    @classmethod
    def updateTitleReducer(cls, state: UiSdlReduxState=None, action: UiSdlTitleUpdateAction=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type 'TITLE_UPDATE' and updates the title
    
    @param state
              Redux state.
    @param action
              Redux action.
    @returns A new Redux state.
    """
        ...
    @classmethod
    def updateXAxisAction(cls, id: str, xAxis: Union[UiSdlLineBarChartXAxisConfig,UiSdlHistogramXAxisConfig]) -> Union[UiSdlUpdateXAxisAction]:
    """
    Action to update the xAxis configuration for the time series.
    
    @param id
              Id of the component.
    @param xAxis
              xAxis configuration to update
    
    @returns a `X_AXIS_UPDATE` action for this instance with the following properties:
    - payload {
         xAxis: UiSdlLineBarChartXAxisConfig,
         componentId: string
      }
    """
        ...
    @classmethod
    def updateXAxisReducer(cls, state: UiSdlReduxState=None, action: UiSdlUpdateXAxisAction=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type 'X_AXIS_UPDATE' and updates the xAxis configuration
    
    @param state
              Redux state.
    @param action
              Redux action.
    @returns A new Redux state.
    """
        ...
    @classmethod
    def updateYAxisAction(cls, id: str, yAxis: Union[UiSdlLineBarChartYAxisConfig,UiSdlHistogramYAxisConfig]) -> Union[UiSdlUpdateYAxisAction]:
    """
    Action to update the yAxis configuration for the time series.
    
    @param id
              Id of the component.
    @param yAxis
              yAxis configuration to update
    
    @returns a `Y_AXIS_UPDATE` action for this instance with the following properties:
    - payload {
         yAxis: UiSdlLineBarChartYAxisConfig,
         componentId: string
      }
    """
        ...
    @classmethod
    def updateYAxisReducer(cls, state: UiSdlReduxState=None, action: UiSdlUpdateYAxisAction=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type 'Y_AXIS_UPDATE' and updates the yAxis configuration
    
    @param state
              Redux state.
    @param action
              Redux action.
    @returns A new Redux state.
    """
        ...
    @classmethod
    def generateSpec(cls, relevantFields: Map[str, Any]=None, componentId: str=None, typeName: str=None) -> Union[Map[str, Any]]:
    """
    Generates the spec that is merged into the chart's data source in {@link UiSdlLineBarChart#filterSubmitEpic}.
    
    @param relevantFields
              A mapping of relevant field names to values.
    @param componentId
              The componentId that the generated spec applies to.
    @param typeName
              The type applying to the component.
    
    @returns A spec.
    """
        ...
    @classmethod
    def clickChartAction(cls, id: str=None, point: Obj=None) -> Union[UiSdlChartClickAction]:
    """
    Triggered when a point on the chart is clicked.
    
    @param id
               Id of the component.
    @param point
              An object which represents data for the point that was clicked
              with the following shape:
        {
            data: an array with x and y values
            dataIndex: the index in the series of the point clicked
            name: the point label (what appears on the x axis)
            seriesIndex: the index of the series that was clicked (among all series on the chart)
            seriesName: the series label
            type: the type of event, e.g. "click", "hover" etc.
            value: an array of x and y values
        }
    @return A `CHART_CLICK` action with the passed in series array as the payload.
    """
        ...
    @classmethod
    def addYAxisMarkerAction(cls, id: str=None, markerSpec: UiSdlLineBarChartYAxisMarkerLineSpec=None) -> Union[UiSdlLineBarChartAddYAxisMarkerAction]:
    """
    Triggered to add a Y axis marker to the chart that is related to an specific metric.
    
    @param id
              Id of the component.
    @param markerSpec
              The marker spec to add.
    """
        ...
    @classmethod
    def yAxisMarkerAddReducer(cls, state: UiSdlReduxState=None, action: UiSdlLineBarChartAddYAxisMarkerAction=None) -> Union[UiSdlReduxState]:
    """
    Adds a Y axis marker to the chart from redux state of the component.
    """
        ...
    @classmethod
    def updateChartGridAction(cls, id: str=None, grid: UiSdlChartEChartsGrid=None) -> Union[UiSdlChartGridUpdateAction]:
    """
    Triggered to update the grid value.
    
    @param id
              Id of the component.
    @param grid
              New grid value.
    """
        ...
    @classmethod
    def chartGridUpdateReducer(cls, state: UiSdlReduxState=None, action: UiSdlChartGridUpdateAction=None) -> Union[UiSdlReduxState]:
    """
    Updates the chart grid from redux state of the component.
    """
        ...
    @classmethod
    def addXAxisShadingAction(cls, id: str=None, markerIdentifier: str=None, fromDate: datetime=None, toDate: datetime=None, areaLabel: str=None) -> Union[UiSdlXAxisShadingAddAction]:
        ...
    @classmethod
    def xAxisShadingAddReducer(cls, state: UiSdlReduxState=None, action: UiSdlXAxisShadingAddAction=None) -> Union[UiSdlReduxState]:
        ...
    @classmethod
    def changeLabelVisibilityAction(cls, showLabel: bool, id: str=None) -> UiSdlTimeZoneLabelVisibilityAction:
    """
    Triggered when time zone label visibility needs to be changed.
    
    @param id
              Id of the component.
    @param showLabel
              Whether or not to show the timezone label below chart.
    
    @returns An `TZ_LABEL_VISIBILITY_CHANGE` action for this instance.
      - payload {string} The id of the component where timeZone label is rendered.
    """
        ...
    @classmethod
    def labelVisibilityChangeReducer(cls, state: UiSdlReduxState, action: UiSdlTimeZoneLabelVisibilityAction=None) -> UiSdlReduxState:
    """
    Listens for actions of type `TZ_LABEL_VISIBILITY_CHANGE`, then updates {@link showTimeZoneLabel} flag.
    
    @param state
              Redux state.
    @param action
              Redux action.
    
    @returns A new Redux state.
    """
        ...
    @classmethod
    def getIndexedEventDataSourceIds(cls, componentId: str=None, state: UiSdlReduxState=None) -> Union[Map[int, str]]:
    """
    Creates a mapping from event specification indices in {@link #eventDataSpec}
    to data source ids. Used by {@link #doDataMerge} to merge data into the props
    in a way that's easy to match with the corresponding configuration.
    """
        ...
    @classmethod
    def getEventDataSourceIndex(cls, dataSourceId: str=None) -> Union[int]:
    """
    Given a data source id, return the index of the corresponding {@link UiSdlTimeseriesLineBarChartEventSeriesDataSpec}
    in {@link UiSdlTimeseriesLineBarChartEventDataSpec#events}.
    If the data source id is not for an event, returns `null`.
    """
        ...
    @classmethod
    def updateDataFilterAction(cls, id: str=None, start: str=None, end: str=None, interval: str=None) -> Union[UiSdlDataFilterUpdateAction]:
    """
    Triggered to update the filter for the time series.
    
    @param id
              Id of the component.
    @param start
              Start date for the filter spec {@link EvalMetricSpec}.
    @param end
              End date for the filter spec.
    @param interval
              interval for the filter spec.
    
    @return A `HIDDEN_SERIES_UPDATE` action for this instance with the following properties:
    - payload {string} The name of the series.
    """
        ...
    @classmethod
    def dataFilterUpdateEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions when users update the filter and index of the data source is null.
    Otherwise triggers `DATA_CONFIG_UPDATE` and `DATA_REQUEST` actions.
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    
    @returns An Observable action stream.
    """
        ...
    @classmethod
    def updateDataZoomStartValueAction(cls, id: str=None, newDateString: str=None) -> Union[UiSdlDisplayDateUpdateAction]:
    """
    Triggered to update the dataZoom start value.
    
    @param id
              Id of the component.
    @param newDateString
              Start date for the dataZoom.
    """
        ...
    @classmethod
    def dataZoomStartValueUpdateReducer(cls, state: UiSdlReduxState=None, action: UiSdlDataSourcesClearAction=None) -> Union[UiSdlReduxState]:
    """
    Updates the dataZoomStartValue from redux state of the component.
    """
        ...
    @classmethod
    def changeSynchronizedModeAction(cls, id: str=None, synchronized: bool=None) -> Union[UiSdlChartSynchronizedModeChangeAction]:
    """
    Triggered to update the synchronized value.
    
    @param id
              Id of the component.
    @param synchronized
              New synchronized value.
    """
        ...
    @classmethod
    def synchronizedModeChangeReducer(cls, state: UiSdlReduxState=None, action: UiSdlChartSynchronizedModeChangeAction=None) -> Union[UiSdlReduxState]:
    """
    Updates the synchronized from redux state of the component.
    """
        ...
    @classmethod
    def collapseXAxisAreaAction(cls, id: str=None, markerIdentifiersToCollapse: Any=None) -> Union[UiSdlChartXAxisAreaCollapseAction]:
    """
    Triggered to collapse certain xAxis areas.
    
    @param id
              Id of the component.
    @param markerIdentifiersToCollapse
              marker areas to get collapsed
    """
        ...
    @classmethod
    def xAxisAreaCollapseReducer(cls, state: UiSdlReduxState=None, action: UiSdlChartXAxisAreaCollapseAction=None) -> Union[UiSdlReduxState]:
    """
    Updates the collapsed xaxis area from redux state of the component.
    """
        ...
    @classmethod
    def updateDataZoomEndValueAction(cls, id: str=None, newDateString: str=None) -> Union[UiSdlDisplayDateUpdateAction]:
    """
    Triggered to update the dataZoom end value.
    
     @param id
               Id of the component.
     @param newDateString
               Start date for the dataZoom.
    """
        ...
    @classmethod
    def dataZoomEndValueUpdateReducer(cls, state: UiSdlReduxState=None, action: UiSdlDataSourcesClearAction=None) -> Union[UiSdlReduxState]:
    """
    Updates the dataZoomEndValue from redux state of the component.
    """
        ...
    @classmethod
    def updateDisplayDateAction(cls, id: str=None, start: str=None, end: str=None, interval: str=None) -> Union[UiSdlDisplayDateUpdateAction]:
    """
    Triggered to update the interval selector in the chart.
    
    @param id
              Id of the component.
    @param start
              Start date for the filter spec {@link EvalMetricSpec}.
    @param end
              End date for the filter spec.
    @param interval
              interval for the filter spec.
    """
        ...
    @classmethod
    def displayDateUpdateReducer(cls, state: UiSdlReduxState=None, action: UiSdlDisplayDateUpdateAction=None) -> Union[UiSdlReduxState]:
    """
    Updates the date selector and interval values in the redux state of the component.
    """
        ...
    @classmethod
    def lineBarChartInitialRenderEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Triggers `DISPLAY_DATE_UPDATE` action when the chart renders the first time.
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    
    @returns An Observable action stream.
    """
        ...
    @classmethod
    def clearDataSourcesAction(cls, id: str=None) -> Union[UiSdlDataSourcesClearAction]:
    """
    Triggered to clear all data sources associated with this chart.
    @param id
               Id of the component.
    """
        ...
    @classmethod
    def dataSourcesClearReducer(cls, state: UiSdlReduxState=None, action: UiSdlDataSourcesClearAction=None) -> Union[UiSdlReduxState]:
    """
    Clears all data sources associated with this chart.
    """
        ...
    @classmethod
    def getDataAction(cls, componentId: str, modelId: str=None) -> UiSdlReduxAction[Any]:
    """
    Fetches the data to display on the chart.
    
    @param componentId
           The id of the component to affect.
    @param modelId
           The id of the model to fetch data for.
    """
        ...
    @classmethod
    def getDataEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    When the `GET_DATA` action is triggered, this epic will check if the request is from the chart component's `INITIAL_RENDER` action,
    then it will read the date from the state, {@link ModelExperimentApplicationState}, and will set the `data` field.
    Else it will set the `data` field with the returned data from {@link ExperimentalPreviewHelper#getData}.
    It will also set the `plottedSeries` field to show the training.
    """
        ...
    @classmethod
    def plotFeatureAction(cls, componentId: str, featureId: str) -> UiSdlReduxAction[Any]:
    """
    Plots the feature with the given featureId on the chart.
    
    @param componentId
           The id of the component to affect.
    @param featureId
           The id of the features to plot.
    """
        ...
    @classmethod
    def plotFeatureReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    When the `PLOT_FEATURE` action is triggered, this reducer will add the the series with the ids
    "<featureId>-actual" and "<featureId>-reconstruction" to `plottedSeries`.
    """
        ...
    @classmethod
    def getFeatureOutputDataEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    When the `PLOT_FEATURE` action is triggered, this epic will fetch the feature output data from
    {@link ExperimentalPreviewHelper#getFeatureOutputData} and set it in the `featureOutputData` field.
    
    @param actionStream
           The stream of actions.
    @param stateStream
           The stream of states.
    """
        ...
    @classmethod
    def resetChartAction(cls, componentId: str) -> UiSdlReduxAction[Any]:
    """
    Resets the chart to its state after `GET_DATA` action w as called.
    @param componentId
           The id of the component to affect.
    """
        ...
    @classmethod
    def resetChartReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    When the `RESET_CHART` action is triggered, this reducer will reset the chart to its state after
    `GET_DATA` action was called.
    """
        ...
    @classmethod
    def clearChartAction(cls, componentId: str) -> UiSdlReduxAction[Any]:
    """
    Clears the chart of all data.
    @param componentId
           The id of the component to affect.
    """
        ...
    @classmethod
    def clearChartReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    When the `CLEAR_CHART` action is triggered, this reducer will clear the chart of all data.
    """
        ...
    @classmethod
    def setFieldsAction(cls, componentId: str, pathToValue: Map[str, Any]=None) -> UiSdlReduxAction[Any]:
    """
    @param componentId
           The id of the component to affect.
    @param pathToValue
           Map of path in component that should be set, to value that should be set.
    """
        ...
    @classmethod
    def setFieldsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    When the `SET_FIELDS` action is triggered, this reducer will update the state by setting the specified fields in the component.
    """
        ...
    @classmethod
    def getDataFromIntervalChangeAction(cls, id: str=None, start: str=None, end: str=None, interval: str=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered to update the filter for the time series and get the data.
    
    @param id
              Id of the component.
    @param start
              Start date for the filter spec {@link EvalMetricSpec}.
    @param end
              End date for the filter spec.
    @param interval
              interval for the filter spec.
    """
        ...

