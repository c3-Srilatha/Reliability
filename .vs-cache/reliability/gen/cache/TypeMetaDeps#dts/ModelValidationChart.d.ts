// TypeScript definitions for the C3 type ModelValidationChart

/**
 * The UI component that handles showing model validation data in a chart.
 *
 * @remarks this represents a value passed to a method that expects an instance of ModelValidationChart
 */
declare interface IModelValidationChart {

  /**
   * Various system fields.
   */
  meta?: IMeta;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string;

  /**
   * The specification used for retrieving data displayed by the grid.
   */
  dataSpec?: IUiSdlTimeseriesLineBarChartDataSpec;

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
   * A list of hidden series id.
   */
  hiddenSeries?: Array_Type<string> | Array<string>;

  /**
   * A list of default colors.
   * If a series doesn't have specified color it will take color from this list of foundation design tokens in order.
   * slate-50, blue-60, cyan-40, purple-50, plum-70, forest-40, choco-60, cyan-60, plum-30, olive-50, purple-70, forest-70
   */
  defaultColors?: Array_Type<string> | Array<string>;

  /**
   * The background style for the chart.
   */
  backgroundStyle?: string;

  /**
   * The height of the component in pixels.
   */
  height?: number;

  /**
   * Whether to enable tooltips.
   */
  tooltipEnabled?: boolean;

  /**
   * The decimal precision to show on tooltip values.
   */
  tooltipValuesDecimalPrecision?: number;

  /**
   * Whether or not to show units in tooltip
   */
  tooltipUnitEnabled?: boolean;

  tooltipConfig?: IUiSdlTooltipBaseSettings;

  /**
   * Data area zooming. If set to `true`, a zoom icon will be displayed in the
   * toolbox and users will be able to zoom in by dragging within the chart area.
   */
  toolboxDataZoom?: boolean;

  /**
   * Holds the data to display in the grid.
   */
  data?: Array_Type<Obj> | Array<IObj>;

  /**
   * Chart header.
   */
  header?: IUiSdlComponentHeader;

  /**
   * Y-axis config type.
   */
  yAxis?: IUiSdlLineBarChartYAxisConfig;

  /**
   *  Configuration for the grid.
   * Includes left, right, top, bottom padding for the chart
   */
  grid?: IUiSdlChartEChartsGrid;

  /**
   * The chart legend - information for each series.
   */
  legend?: IUiSdlChartLegend;

  /**
   * Whether to allow users to zoom the chart data via a scrubber tool
   * displayed directly below the chart.
   */
  zoomEnabled?: boolean;

  /**
   * The default type of chart to be displayed. This is a fallback value used
   * when a series does not have a specific series type configured.
   */
  defaultChartType?: string;

  /**
   * Show a dropdown menu in the chart header to download the chart.
   * The user can choose to download one of the following file types: .png, .jpeg, .csv
   */
  showDownloadOptions?: boolean;

  /**
   * Show a toggle next to the download options that will display data labels
   */
  showDataLabelsToggle?: boolean;

  /**
   * If `true`, stack all series whose series type is `'bar'`.
   */
  stackBars?: boolean;

  /**
   * The component that handles the empty state.
   * It will appear if the grid has no data.
   */
  emptyState?: IUiSdlComponentRef<UiSdlEmptyState>;

  /**
   * The number of actions to display on the chart header.
   */
  chartActionsCollapseThreshold?: number;

  /**
   * What is used to fill in missing seriesData when exporting to .csv data
   */
  csvMissingDataFiller?: string;

  /**
   * Whether or not to show the timezone label below chart.
   */
  showTimeZoneLabel?: boolean;

  /**
   * The label to display below the chart.
   * By default the label is the time zone configured for the component. But it can be overridden setting a value here.
   */
  timeZoneLabel?: string | IUiSdlDynamicValueSpec;

  /**
   * The format to use for the time zone label.
   * - [longGeneric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#longgeneric): Display the time zone name in long format (e.g. "Pacific Time").
   * - [shortGeneric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#shortgeneric): Display the time zone name in short format (e.g. "PT").
   * Default value is 'longGeneric'.
   */
  timeZoneNameFormat?: string;

  /**
   * The specification used to retrieve event data displayed by this chart.
   */
  eventDataSpec?: IUiSdlTimeseriesLineBarChartEventDataSpec;

  /**
   * Stores the FetchResults retrieved by {@link #eventDataSpec}.
   */
  eventData?: IObj;

  /**
   * The specification used to retrieve data displayed by this chart.
   * Note: evalDataSpec takes priviledge over dataSpec. Developer cannot combine both.
   * If `evalDataSpec` and `dataSpec` are both defined, `evalDataSpec` will be used and `dataSpec` will be ignored.
   */
  evalDataSpec?: IUiSdlTimeseriesLineBarChartEvalDataSpec;

  /**
   * Whether or not to show crosshairs on hovering the chart, these will snap to the nearest point based on both X and Y axis.
   * It will also have a tooltip on the axes to show the date and value.
   */
  showCrosshair?: boolean;

  /**
   * Only timeseries chart will have xAxis component configuration.  Categorical charts will define their
   * X-axis configuration in the dataSpec types.
   */
  xAxis?: IUiSdlTimeseriesLineBarChartXAxisConfig | IUiSdlTimeseriesLineBarChartXAxisStaticConfig;

  /**
   * Whether or not to display the "now" line on the chart.
   */
  showNowLine?: boolean;

  /**
   * Whether or not to enable collapsible xAxis feature.
   * Warning - This is a private, unreleased feature. Use it at your own risk.
   */
  collapseXAxis?: boolean;

  /**
   * Style configurations of vertical line at the "now" point of time according to the interval of data being plotted.
   */
  nowLineConfig?: IUiSdlTimeseriesLineBarChartNowLineConfig;

  /**
   * Configuration to add vertical line at any date on the graph.
   */
  dateLines?: Array_Type<UiSdlTimeseriesLineBarChartDateLineConfig> | Array<IUiSdlTimeseriesLineBarChartDateLineConfig>;

  /**
   * Configurations to add vertical line at any date on the graph requiring a fetch call.
   */
  dateLinesDataSpec?: IUiSdlTimeseriesLineBarChartDateLineDataSpec;

  /**
   * Whether or not to plot and show data at timestamps where there are 100% missing values.
   */
  hideMissingDataPoints?: boolean;

  /**
   * Timezone configuration for displayed data.
   * E.g. if an event happened at 1am EST, we will show the event as happened at 1am to browsers in any timezone.
   */
  noTimeZoneConversion?: boolean;

  /**
   * Whether to show all information of timestamp on tooltip when hovering over on a chart.
   * This configuration will show all information of a timestamp regardless of the
   * display interval.
   *
   * E.g. if INTERVAL = 'YEAR' and timestamp = 2023-01-01T00:00:00
   * if `false`, tooltip will show 2023
   * if `true`, tooltip will show Jan 1, 2023 12:00:00 AM
   */
  showAllTimestampInfoOnTooltip?: boolean;

  /**
   * Whether or not to show the start date of the chart.
   */
  showStartAndEndDate?: boolean;

  /**
   * Start date displayed in the chart shown only when dataSelection is enabled.
   */
  displayStartDate?: string;

  /**
   * End date displayed in the chart shown only when dataSelection is enabled.
   */
  displayEndDate?: string;

  markerIdentifiersToCollapse?: Array_Type<string> | Array<string>;

  /**
   * Interval display value in the chart shown only when dataSelection is enabled.
   * Internal use only.
   */
  displayInterval?: string;

  /**
   * Interval display options in the chart shown only when dataSelection is enabled.
   */
  displayIntervalOptions?: Array_Type<string> | Array<string>;

  /**
   * Whether or not to override user config ID with data generated ID.
   */
  shouldOverrideUserConfigIdWithDataGeneratedId?: boolean;

  /**
   * Whether or not to show the data selector. For example, the date range and interval selectors.
   */
  dataSelection?: boolean;

  /**
   * when this boolean turns true, it means we use the data selection inputs to control the data zoom
   * it changes the chart range but does not make a new API call.
   */
  dataSelectionControlsDataZoom?: boolean;

  /**
   * Start value used in the datazoom to filter a certain range of chart.
   */
  dataZoomStartValue?: string;

  /**
   * End value used in the datazoom to filter a certain range of chart.
   */
  dataZoomEndValue?: string;

  /**
   * If true, displays each chart series on a separate chart grid, while sychronizing the ability to view
   * information such as x-axis value and tooltip across series.
   */
  synchronized?: boolean;

  /**
   * If true, order the series in whatever order they are returned from the server. By default, the series
   * will be ordered alphanumerically by ID.
   */
  suppressOrderSeriesById?: boolean;

  /**
   * The id of the component to show when there is no data.
   */
  noDataComponentId?: string;

  /**
   * The ids of the series that are currently plotted on the chart.
   */
  selectedFeatureId?: string;

  /**
   * The start of the zoom range.
   */
  zoomRangeStart?: DateTime | Date | string;

  /**
   * The end of the zoom range.
   */
  zoomRangeEnd?: DateTime | Date | string;

  /**
   * The risk score threshold to plot.
   */
  riskScoreThreshold?: number;

  /**
   * The range of data that the `data` field contains.
   * Has two keys, start and end.
   */
  dataRange?: Map_Type<string, DateTime> | {[key: string]: DateTime | Date | string};

  /**
   * The chart data to display.
   */
  chartData?: IModelValidationChartData;
}

/**
 * The UI component that handles showing model validation data in a chart.
 *
 * @remarks this represents a made instance of ModelValidationChart
 */
declare class ModelValidationChart extends Obj  {

  /**
   * Various system fields.
   */
  readonly meta?: Meta;
  withMeta(meta: IMeta | null): ModelValidationChart;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string;
  withId(id: string | null): ModelValidationChart;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string;
  withName(name: string | null): ModelValidationChart;

  /**
   * The specification used for retrieving data displayed by the grid.
   */
  readonly dataSpec?: UiSdlTimeseriesLineBarChartDataSpec;
  withDataSpec(dataSpec: IUiSdlTimeseriesLineBarChartDataSpec | null): ModelValidationChart;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ModelValidationChart;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ModelValidationChart;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ModelValidationChart;

  /**
   * A list of hidden series id.
   */
  readonly hiddenSeries?: Array_Type<string>;
  withHiddenSeries(hiddenSeries: Array_Type<string> | Array<string> | null): ModelValidationChart;

  /**
   * A list of default colors.
   * If a series doesn't have specified color it will take color from this list of foundation design tokens in order.
   * slate-50, blue-60, cyan-40, purple-50, plum-70, forest-40, choco-60, cyan-60, plum-30, olive-50, purple-70, forest-70
   */
  readonly defaultColors?: Array_Type<string>;
  withDefaultColors(defaultColors: Array_Type<string> | Array<string> | null): ModelValidationChart;

  /**
   * The background style for the chart.
   */
  readonly backgroundStyle?: string;
  withBackgroundStyle(backgroundStyle: string | null): ModelValidationChart;

  /**
   * The height of the component in pixels.
   */
  readonly height?: number;
  withHeight(height: number | null): ModelValidationChart;

  /**
   * Whether to enable tooltips.
   */
  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): ModelValidationChart;

  /**
   * The decimal precision to show on tooltip values.
   */
  readonly tooltipValuesDecimalPrecision?: number;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): ModelValidationChart;

  /**
   * Whether or not to show units in tooltip
   */
  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): ModelValidationChart;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): ModelValidationChart;

  /**
   * Data area zooming. If set to `true`, a zoom icon will be displayed in the
   * toolbox and users will be able to zoom in by dragging within the chart area.
   */
  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): ModelValidationChart;

  /**
   * Holds the data to display in the grid.
   */
  readonly data?: Array_Type<Obj>;
  withData(data: Array_Type<Obj> | Array<IObj> | null): ModelValidationChart;

  /**
   * Chart header.
   */
  readonly header?: UiSdlComponentHeader;
  withHeader(header: IUiSdlComponentHeader | null): ModelValidationChart;

  /**
   * Y-axis config type.
   */
  readonly yAxis?: UiSdlLineBarChartYAxisConfig;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): ModelValidationChart;

  /**
   *  Configuration for the grid.
   * Includes left, right, top, bottom padding for the chart
   */
  readonly grid?: UiSdlChartEChartsGrid;
  withGrid(grid: IUiSdlChartEChartsGrid | null): ModelValidationChart;

  /**
   * The chart legend - information for each series.
   */
  readonly legend?: UiSdlChartLegend;
  withLegend(legend: IUiSdlChartLegend | null): ModelValidationChart;

  /**
   * Whether to allow users to zoom the chart data via a scrubber tool
   * displayed directly below the chart.
   */
  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): ModelValidationChart;

  /**
   * The default type of chart to be displayed. This is a fallback value used
   * when a series does not have a specific series type configured.
   */
  readonly defaultChartType?: string;
  withDefaultChartType(defaultChartType: string | null): ModelValidationChart;

  /**
   * Show a dropdown menu in the chart header to download the chart.
   * The user can choose to download one of the following file types: .png, .jpeg, .csv
   */
  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): ModelValidationChart;

  /**
   * Show a toggle next to the download options that will display data labels
   */
  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): ModelValidationChart;

  /**
   * If `true`, stack all series whose series type is `'bar'`.
   */
  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): ModelValidationChart;

  /**
   * The component that handles the empty state.
   * It will appear if the grid has no data.
   */
  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState>;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState> | null): ModelValidationChart;

  /**
   * The number of actions to display on the chart header.
   */
  readonly chartActionsCollapseThreshold?: number;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): ModelValidationChart;

  /**
   * What is used to fill in missing seriesData when exporting to .csv data
   */
  readonly csvMissingDataFiller?: string;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): ModelValidationChart;

  /**
   * Whether or not to show the timezone label below chart.
   */
  readonly showTimeZoneLabel?: boolean;
  withShowTimeZoneLabel(showTimeZoneLabel: boolean): ModelValidationChart;

  /**
   * The label to display below the chart.
   * By default the label is the time zone configured for the component. But it can be overridden setting a value here.
   */
  readonly timeZoneLabel?: string | UiSdlDynamicValueSpec;
  withTimeZoneLabel(timeZoneLabel: string | IUiSdlDynamicValueSpec | null): ModelValidationChart;

  /**
   * The format to use for the time zone label.
   * - [longGeneric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#longgeneric): Display the time zone name in long format (e.g. "Pacific Time").
   * - [shortGeneric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#shortgeneric): Display the time zone name in short format (e.g. "PT").
   * Default value is 'longGeneric'.
   */
  readonly timeZoneNameFormat?: string;
  withTimeZoneNameFormat(timeZoneNameFormat: string | null): ModelValidationChart;

  /**
   * The specification used to retrieve event data displayed by this chart.
   */
  readonly eventDataSpec?: UiSdlTimeseriesLineBarChartEventDataSpec;
  withEventDataSpec(eventDataSpec: IUiSdlTimeseriesLineBarChartEventDataSpec | null): ModelValidationChart;

  /**
   * Stores the FetchResults retrieved by {@link #eventDataSpec}.
   */
  readonly eventData?: Obj;
  withEventData(eventData: IObj | null): ModelValidationChart;

  /**
   * The specification used to retrieve data displayed by this chart.
   * Note: evalDataSpec takes priviledge over dataSpec. Developer cannot combine both.
   * If `evalDataSpec` and `dataSpec` are both defined, `evalDataSpec` will be used and `dataSpec` will be ignored.
   */
  readonly evalDataSpec?: UiSdlTimeseriesLineBarChartEvalDataSpec;
  withEvalDataSpec(evalDataSpec: IUiSdlTimeseriesLineBarChartEvalDataSpec | null): ModelValidationChart;

  /**
   * Whether or not to show crosshairs on hovering the chart, these will snap to the nearest point based on both X and Y axis.
   * It will also have a tooltip on the axes to show the date and value.
   */
  readonly showCrosshair?: boolean;
  withShowCrosshair(showCrosshair: boolean): ModelValidationChart;

  /**
   * Only timeseries chart will have xAxis component configuration.  Categorical charts will define their
   * X-axis configuration in the dataSpec types.
   */
  readonly xAxis?: UiSdlTimeseriesLineBarChartXAxisConfig | UiSdlTimeseriesLineBarChartXAxisStaticConfig;
  withXAxis(xAxis: IUiSdlTimeseriesLineBarChartXAxisConfig | IUiSdlTimeseriesLineBarChartXAxisStaticConfig | null): ModelValidationChart;

  /**
   * Whether or not to display the "now" line on the chart.
   */
  readonly showNowLine?: boolean;
  withShowNowLine(showNowLine: boolean): ModelValidationChart;

  /**
   * Whether or not to enable collapsible xAxis feature.
   * Warning - This is a private, unreleased feature. Use it at your own risk.
   */
  readonly collapseXAxis?: boolean;
  withCollapseXAxis(collapseXAxis: boolean): ModelValidationChart;

  /**
   * Style configurations of vertical line at the "now" point of time according to the interval of data being plotted.
   */
  readonly nowLineConfig?: UiSdlTimeseriesLineBarChartNowLineConfig;
  withNowLineConfig(nowLineConfig: IUiSdlTimeseriesLineBarChartNowLineConfig | null): ModelValidationChart;

  /**
   * Configuration to add vertical line at any date on the graph.
   */
  readonly dateLines?: Array_Type<UiSdlTimeseriesLineBarChartDateLineConfig>;
  withDateLines(dateLines: Array_Type<UiSdlTimeseriesLineBarChartDateLineConfig> | Array<IUiSdlTimeseriesLineBarChartDateLineConfig> | null): ModelValidationChart;

  /**
   * Configurations to add vertical line at any date on the graph requiring a fetch call.
   */
  readonly dateLinesDataSpec?: UiSdlTimeseriesLineBarChartDateLineDataSpec;
  withDateLinesDataSpec(dateLinesDataSpec: IUiSdlTimeseriesLineBarChartDateLineDataSpec | null): ModelValidationChart;

  /**
   * Whether or not to plot and show data at timestamps where there are 100% missing values.
   */
  readonly hideMissingDataPoints?: boolean;
  withHideMissingDataPoints(hideMissingDataPoints: boolean): ModelValidationChart;

  /**
   * Timezone configuration for displayed data.
   * E.g. if an event happened at 1am EST, we will show the event as happened at 1am to browsers in any timezone.
   */
  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): ModelValidationChart;

  /**
   * Whether to show all information of timestamp on tooltip when hovering over on a chart.
   * This configuration will show all information of a timestamp regardless of the
   * display interval.
   *
   * E.g. if INTERVAL = 'YEAR' and timestamp = 2023-01-01T00:00:00
   * if `false`, tooltip will show 2023
   * if `true`, tooltip will show Jan 1, 2023 12:00:00 AM
   */
  readonly showAllTimestampInfoOnTooltip?: boolean;
  withShowAllTimestampInfoOnTooltip(showAllTimestampInfoOnTooltip: boolean): ModelValidationChart;

  /**
   * Whether or not to show the start date of the chart.
   */
  readonly showStartAndEndDate?: boolean;
  withShowStartAndEndDate(showStartAndEndDate: boolean): ModelValidationChart;

  /**
   * Start date displayed in the chart shown only when dataSelection is enabled.
   */
  readonly displayStartDate?: string;
  withDisplayStartDate(displayStartDate: string | null): ModelValidationChart;

  /**
   * End date displayed in the chart shown only when dataSelection is enabled.
   */
  readonly displayEndDate?: string;
  withDisplayEndDate(displayEndDate: string | null): ModelValidationChart;

  readonly markerIdentifiersToCollapse?: Array_Type<string>;
  withMarkerIdentifiersToCollapse(markerIdentifiersToCollapse: Array_Type<string> | Array<string> | null): ModelValidationChart;

  /**
   * Interval display value in the chart shown only when dataSelection is enabled.
   * Internal use only.
   */
  readonly displayInterval?: string;
  withDisplayInterval(displayInterval: string | null): ModelValidationChart;

  /**
   * Interval display options in the chart shown only when dataSelection is enabled.
   */
  readonly displayIntervalOptions?: Array_Type<string>;
  withDisplayIntervalOptions(displayIntervalOptions: Array_Type<string> | Array<string> | null): ModelValidationChart;

  /**
   * Whether or not to override user config ID with data generated ID.
   */
  readonly shouldOverrideUserConfigIdWithDataGeneratedId?: boolean;
  withShouldOverrideUserConfigIdWithDataGeneratedId(shouldOverrideUserConfigIdWithDataGeneratedId: boolean): ModelValidationChart;

  /**
   * Whether or not to show the data selector. For example, the date range and interval selectors.
   */
  readonly dataSelection?: boolean;
  withDataSelection(dataSelection: boolean): ModelValidationChart;

  /**
   * when this boolean turns true, it means we use the data selection inputs to control the data zoom
   * it changes the chart range but does not make a new API call.
   */
  readonly dataSelectionControlsDataZoom?: boolean;
  withDataSelectionControlsDataZoom(dataSelectionControlsDataZoom: boolean): ModelValidationChart;

  /**
   * Start value used in the datazoom to filter a certain range of chart.
   */
  readonly dataZoomStartValue?: string;
  withDataZoomStartValue(dataZoomStartValue: string | null): ModelValidationChart;

  /**
   * End value used in the datazoom to filter a certain range of chart.
   */
  readonly dataZoomEndValue?: string;
  withDataZoomEndValue(dataZoomEndValue: string | null): ModelValidationChart;

  /**
   * If true, displays each chart series on a separate chart grid, while sychronizing the ability to view
   * information such as x-axis value and tooltip across series.
   */
  readonly synchronized?: boolean;
  withSynchronized(synchronized: boolean): ModelValidationChart;

  /**
   * If true, order the series in whatever order they are returned from the server. By default, the series
   * will be ordered alphanumerically by ID.
   */
  readonly suppressOrderSeriesById?: boolean;
  withSuppressOrderSeriesById(suppressOrderSeriesById: boolean): ModelValidationChart;

  /**
   * The id of the component to show when there is no data.
   */
  readonly noDataComponentId?: string;
  withNoDataComponentId(noDataComponentId: string | null): ModelValidationChart;

  /**
   * The ids of the series that are currently plotted on the chart.
   */
  readonly selectedFeatureId?: string;
  withSelectedFeatureId(selectedFeatureId: string | null): ModelValidationChart;

  /**
   * The start of the zoom range.
   */
  readonly zoomRangeStart?: DateTime;
  withZoomRangeStart(zoomRangeStart: DateTime | Date | string | null): ModelValidationChart;

  /**
   * The end of the zoom range.
   */
  readonly zoomRangeEnd?: DateTime;
  withZoomRangeEnd(zoomRangeEnd: DateTime | Date | string | null): ModelValidationChart;

  /**
   * The risk score threshold to plot.
   */
  readonly riskScoreThreshold?: number;
  withRiskScoreThreshold(riskScoreThreshold: number | null): ModelValidationChart;

  /**
   * The range of data that the `data` field contains.
   * Has two keys, start and end.
   */
  readonly dataRange?: Map_Type<string, DateTime>;
  withDataRange(dataRange: Map_Type<string, DateTime> | {[key: string]: DateTime | Date | string} | null): ModelValidationChart;

  /**
   * The chart data to display.
   */
  readonly chartData?: ModelValidationChartData;
  withChartData(chartData: IModelValidationChartData | null): ModelValidationChart;

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
  static fromJson(json: any): ModelValidationChart | null;

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
  static fromJsonString(json: string): ModelValidationChart | null;

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
  static fromXmlString(xml: string): ModelValidationChart | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ModelValidationChart | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ModelValidationChart;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ModelValidationChart;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ModelValidationChart;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ModelValidationChart>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ModelValidationChart>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ModelValidationChart;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ModelValidationChart;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ModelValidationChart;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ModelValidationChart;

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
  withField(field: string, value: any, doNotConvert?: boolean): ModelValidationChart;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ModelValidationChart;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ModelValidationChart;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ModelValidationChart;

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
  withoutFieldAtPath(path: string): ModelValidationChart;

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
  withoutField(field: string): ModelValidationChart;

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
  withoutField(field: FieldType): ModelValidationChart;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ModelValidationChart;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ModelValidationChart;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ModelValidationChart;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ModelValidationChart;

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
  defaultField(field: string): ModelValidationChart;

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
  defaultField(field: FieldType): ModelValidationChart;

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
  unsetField(field: string): ModelValidationChart;

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
  unsetField(field: FieldType): ModelValidationChart;

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
  removeField(field: string): ModelValidationChart;

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
  removeField(field: FieldType): ModelValidationChart;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ModelValidationChart;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ModelValidationChart;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ModelValidationChart;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ModelValidationChart;

  mergeJson(json: any): ModelValidationChart;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ModelValidationChart;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ModelValidationChart;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ModelValidationChart>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ModelValidationChart> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ModelValidationChart> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ModelValidationChart>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ModelValidationChart> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ModelValidationChart> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ModelValidationChart> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ModelValidationChart>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ModelValidationChart>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ModelValidationChart;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ModelValidationChart;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ModelValidationChart;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ModelValidationChart;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ModelValidationChart;

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
  static make(fields: any, withDefaults?: boolean): ModelValidationChart;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string): ModelValidationChart | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ModelValidationChart;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): ModelValidationChart;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ModelValidationChart;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ModelValidationChart> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ModelValidationChart;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec): FetchResult<ModelValidationChart>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<ModelValidationChart>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec): Stream<ModelValidationChart> | null;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<ModelValidationChart>> | null;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec): number;

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
  static fetchCountEstimated(spec?: FetchFilterSpec, updateStatistics?: boolean): number;

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
  static batchIds(spec?: BatchIdsSpec): Stream<string> | null;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec): boolean;

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
  singletonMap(): Map_Type<string, WithKey>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<ModelValidationChart>;

  save(subPath?: string, contentType?: string): ModelValidationChart;

  remove(spec?: UpsertSpec): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string): number;

  update(srcObj?: ModelValidationChart, spec?: UpsertSpec): ModelValidationChart | null;

  upsert(srcObj?: ModelValidationChart, spec?: UpsertSpec): ModelValidationChart | null;

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
  static fromString(s: string): ModelValidationChart | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string, failIfMissing?: boolean): ModelValidationChart | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: ModelValidationChart, state: UiSdlReduxState): ModelValidationChart | null;

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
   * Triggered to update chart hidden series.
   *
   * @param id
   *            Id of the component.
   * @param name
   *            The name of the series to hide.
   *
   * @return A `HIDDEN_SERIES_UPDATE` action for this instance with the following properties:
   * - payload {string} The name of the series.
   */
  static updateHiddenSeriesAction(id?: string, name: string): UiSdlHideChartSeriesHiddenSeriesUpdateAction | null;

  /**
   * Listens for actions of type `HIDDEN_SERIES_UPDATE` and updates internal field {@link hiddenSeries}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static hiddenSeriesUpdateEffect(state?: UiSdlReduxState, action?: UiSdlHideChartSeriesHiddenSeriesUpdateAction): UiSdlReduxState | null;

  /**
   * Private helper function to generate a filter expression from {@link fieldValues}.
   *
   * @param filterValues
   *         A mapping of field names to values.
   *
   * @return string
   *         The filter string representing the {@link fieldValues}.
   */
  static generateFilterString(fieldValues?: Map_Type<string, any>): string | null;

  /**
   * Private helper function to get relevant field values for this specific component from raw field values.
   * Every component at this page should call this helper function to get the relevant field values.
   * What it does is loop over raw field values and only look at the fields that have the same data type at
   * `dataMappings` field as the data type used in data spec.  Also if applicable, it will transform the fieldNames
   * as specified in the {@link UiSdlFieldSetFilterFieldSetting#componentsToFilterMapping} or
   * {@link UiSdlFieldSetInputFieldSetting#metricBasedComponentsToInputMapping} value.
   *
   * @param fieldValues
   *           A mapping of field names to values.
   * @param typeName
   *           The name of the type to get relevant fields for.
   * @param componentId
   *           Optional componentId; this will be used when checking if there are any component field bindings; if so,
   *           the fieldName will be transformed to that which is specified in the
   *           {@link UiSdlFieldSetFilterFieldSetting#componentsToFilterMapping} or
   *           {@link UiSdlFieldSetInputFieldSetting#metricBasedComponentsToInputMapping} value.
   *
   * @return Only relevant field values.
   */
  static getRelevantFieldValues(fieldValues: Map_Type<string, any>, typeName?: string, componentId?: string): Map_Type<string, any> | null;

  /**
   * Generate each filter string element of final filter string.
   *
   * @param item
   *          Json config of one field to filter on.
   * @param field
   *          Field path on type.
   */
  static generateFilterStringElem(item?: any, field?: string): string | null;

  /**
   * Transform fieldName for this specific component based on the field bindings.
   * Will determine which field value applies to the current component and what field to assign that value to.
   *
   * @param fieldName
   *           The fieldName which may be transformed.
   * @param fieldValue
   *           The fieldValue associated with the fieldName.
   * @param componentId
   *           The componentId for the component to be filtered.
   *
   * @return Only relevant field values.
   */
  static transformFieldNameForComponentBinding(fieldName: string, fieldValue: Map_Type<string, any>, componentId: string): string;

  /**
   * Triggers `FILTER_SUBMIT` action.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static filterSubmitEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Triggers `ADVANCED_FILTER_SUBMIT` action.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static advancedFilterSubmitEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Action to update the title for the time series line bar chart.
   *
   * @param id
   *           Id of the component.
   * @param title
   *           Title to update
   *
   * @returns a `TITLE_UPDATE` action for this instance with the following properties:
   * - payload {
   *      header: {
   *        titles: string
   *      },
   *      componentId: string
   *   }
   */
  static updateTitleAction(id: string, title: string): UiSdlTitleUpdateAction | null;

  /**
   * Listens for actions of type 'TITLE_UPDATE' and updates the title
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns A new Redux state.
   */
  static updateTitleReducer(state?: UiSdlReduxState, action?: UiSdlTitleUpdateAction): UiSdlReduxState | null;

  /**
   * Action to update the xAxis configuration for the time series.
   *
   * @param id
   *           Id of the component.
   * @param xAxis
   *           xAxis configuration to update
   *
   * @returns a `X_AXIS_UPDATE` action for this instance with the following properties:
   * - payload {
   *      xAxis: UiSdlLineBarChartXAxisConfig,
   *      componentId: string
   *   }
   */
  static updateXAxisAction(id: string, xAxis: UiSdlLineBarChartXAxisConfig | UiSdlHistogramXAxisConfig): UiSdlUpdateXAxisAction | null;

  /**
   * Listens for actions of type 'X_AXIS_UPDATE' and updates the xAxis configuration
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns A new Redux state.
   */
  static updateXAxisReducer(state?: UiSdlReduxState, action?: UiSdlUpdateXAxisAction): UiSdlReduxState | null;

  /**
   * Action to update the yAxis configuration for the time series.
   *
   * @param id
   *           Id of the component.
   * @param yAxis
   *           yAxis configuration to update
   *
   * @returns a `Y_AXIS_UPDATE` action for this instance with the following properties:
   * - payload {
   *      yAxis: UiSdlLineBarChartYAxisConfig,
   *      componentId: string
   *   }
   */
  static updateYAxisAction(id: string, yAxis: UiSdlLineBarChartYAxisConfig | UiSdlHistogramYAxisConfig): UiSdlUpdateYAxisAction | null;

  /**
   * Listens for actions of type 'Y_AXIS_UPDATE' and updates the yAxis configuration
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns A new Redux state.
   */
  static updateYAxisReducer(state?: UiSdlReduxState, action?: UiSdlUpdateYAxisAction): UiSdlReduxState | null;

  /**
   * Generates the spec that is merged into the chart's data source in {@link UiSdlLineBarChart#filterSubmitEpic}.
   *
   * @param relevantFields
   *           A mapping of relevant field names to values.
   * @param componentId
   *           The componentId that the generated spec applies to.
   * @param typeName
   *           The type applying to the component.
   *
   * @returns A spec.
   */
  static generateSpec(relevantFields?: Map_Type<string, any>, componentId?: string, typeName?: string): Map_Type<string, any> | null;

  /**
   * Triggered when a point on the chart is clicked.
   *
   * @param id
   *            Id of the component.
   * @param point
   *           An object which represents data for the point that was clicked
   *           with the following shape:
   *     {
   *         data: an array with x and y values
   *         dataIndex: the index in the series of the point clicked
   *         name: the point label (what appears on the x axis)
   *         seriesIndex: the index of the series that was clicked (among all series on the chart)
   *         seriesName: the series label
   *         type: the type of event, e.g. "click", "hover" etc.
   *         value: an array of x and y values
   *     }
   * @return A `CHART_CLICK` action with the passed in series array as the payload.
   */
  static clickChartAction(id?: string, point?: Obj): UiSdlChartClickAction | null;

  /**
   * Triggered to add a Y axis marker to the chart that is related to an specific metric.
   *
   * @param id
   *           Id of the component.
   * @param markerSpec
   *           The marker spec to add.
   */
  static addYAxisMarkerAction(id?: string, markerSpec?: UiSdlLineBarChartYAxisMarkerLineSpec): UiSdlLineBarChartAddYAxisMarkerAction | null;

  /**
   * Adds a Y axis marker to the chart from redux state of the component.
   */
  static yAxisMarkerAddReducer(state?: UiSdlReduxState, action?: UiSdlLineBarChartAddYAxisMarkerAction): UiSdlReduxState | null;

  /**
   * Triggered to update the grid value.
   *
   * @param id
   *           Id of the component.
   * @param grid
   *           New grid value.
   */
  static updateChartGridAction(id?: string, grid?: UiSdlChartEChartsGrid): UiSdlChartGridUpdateAction | null;

  /**
   * Updates the chart grid from redux state of the component.
   */
  static chartGridUpdateReducer(state?: UiSdlReduxState, action?: UiSdlChartGridUpdateAction): UiSdlReduxState | null;

  static addXAxisShadingAction(id?: string, markerIdentifier?: string, fromDate?: DateTime, toDate?: DateTime, areaLabel?: string): UiSdlXAxisShadingAddAction | null;

  static xAxisShadingAddReducer(state?: UiSdlReduxState, action?: UiSdlXAxisShadingAddAction): UiSdlReduxState | null;

  /**
   * Triggered when time zone label visibility needs to be changed.
   *
   * @param id
   *           Id of the component.
   * @param showLabel
   *           Whether or not to show the timezone label below chart.
   *
   * @returns An `TZ_LABEL_VISIBILITY_CHANGE` action for this instance.
   *   - payload {string} The id of the component where timeZone label is rendered.
   */
  static changeLabelVisibilityAction(id?: string, showLabel: boolean): UiSdlTimeZoneLabelVisibilityAction;

  /**
   * Listens for actions of type `TZ_LABEL_VISIBILITY_CHANGE`, then updates {@link showTimeZoneLabel} flag.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static labelVisibilityChangeReducer(state: UiSdlReduxState, action?: UiSdlTimeZoneLabelVisibilityAction): UiSdlReduxState;

  /**
   * Creates a mapping from event specification indices in {@link #eventDataSpec}
   * to data source ids. Used by {@link #doDataMerge} to merge data into the props
   * in a way that's easy to match with the corresponding configuration.
   */
  static getIndexedEventDataSourceIds(componentId?: string, state?: UiSdlReduxState): Map_Type<number, string> | null;

  /**
   * Given a data source id, return the index of the corresponding {@link UiSdlTimeseriesLineBarChartEventSeriesDataSpec}
   * in {@link UiSdlTimeseriesLineBarChartEventDataSpec#events}.
   * If the data source id is not for an event, returns `null`.
   */
  static getEventDataSourceIndex(dataSourceId?: string): number | null;

  /**
   * Triggered to update the filter for the time series.
   *
   * @param id
   *           Id of the component.
   * @param start
   *           Start date for the filter spec {@link EvalMetricSpec}.
   * @param end
   *           End date for the filter spec.
   * @param interval
   *           interval for the filter spec.
   *
   * @return A `HIDDEN_SERIES_UPDATE` action for this instance with the following properties:
   * - payload {string} The name of the series.
   */
  static updateDataFilterAction(id?: string, start?: string, end?: string, interval?: string): UiSdlDataFilterUpdateAction | null;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions when users update the filter and index of the data source is null.
   * Otherwise triggers `DATA_CONFIG_UPDATE` and `DATA_REQUEST` actions.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static dataFilterUpdateEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Triggered to update the dataZoom start value.
   *
   * @param id
   *           Id of the component.
   * @param newDateString
   *           Start date for the dataZoom.
   */
  static updateDataZoomStartValueAction(id?: string, newDateString?: string): UiSdlDisplayDateUpdateAction | null;

  /**
   * Updates the dataZoomStartValue from redux state of the component.
   */
  static dataZoomStartValueUpdateReducer(state?: UiSdlReduxState, action?: UiSdlDataSourcesClearAction): UiSdlReduxState | null;

  /**
   * Triggered to update the synchronized value.
   *
   * @param id
   *           Id of the component.
   * @param synchronized
   *           New synchronized value.
   */
  static changeSynchronizedModeAction(id?: string, synchronized?: boolean): UiSdlChartSynchronizedModeChangeAction | null;

  /**
   * Updates the synchronized from redux state of the component.
   */
  static synchronizedModeChangeReducer(state?: UiSdlReduxState, action?: UiSdlChartSynchronizedModeChangeAction): UiSdlReduxState | null;

  /**
   * Triggered to collapse certain xAxis areas.
   *
   * @param id
   *           Id of the component.
   * @param markerIdentifiersToCollapse
   *           marker areas to get collapsed
   */
  static collapseXAxisAreaAction(id?: string, markerIdentifiersToCollapse?: any): UiSdlChartXAxisAreaCollapseAction | null;

  /**
   * Updates the collapsed xaxis area from redux state of the component.
   */
  static xAxisAreaCollapseReducer(state?: UiSdlReduxState, action?: UiSdlChartXAxisAreaCollapseAction): UiSdlReduxState | null;

  /**
   * Triggered to update the dataZoom end value.
   *
   *  @param id
   *            Id of the component.
   *  @param newDateString
   *            Start date for the dataZoom.
   */
  static updateDataZoomEndValueAction(id?: string, newDateString?: string): UiSdlDisplayDateUpdateAction | null;

  /**
   * Updates the dataZoomEndValue from redux state of the component.
   */
  static dataZoomEndValueUpdateReducer(state?: UiSdlReduxState, action?: UiSdlDataSourcesClearAction): UiSdlReduxState | null;

  /**
   * Triggered to update the interval selector in the chart.
   *
   * @param id
   *           Id of the component.
   * @param start
   *           Start date for the filter spec {@link EvalMetricSpec}.
   * @param end
   *           End date for the filter spec.
   * @param interval
   *           interval for the filter spec.
   * @return A display date update action
   */
  static updateDisplayDateAction(id?: string, start?: string, end?: string, interval?: string): UiSdlDisplayDateUpdateAction | null;

  /**
   * Updates the date selector and interval values in the redux state of the component.
   */
  static displayDateUpdateReducer(state?: UiSdlReduxState, action?: UiSdlDisplayDateUpdateAction): UiSdlReduxState | null;

  /**
   * Triggers `DISPLAY_DATE_UPDATE` action when the chart renders the first time.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static lineBarChartInitialRenderEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Triggered to clear all data sources associated with this chart.
   * @param id
   *            Id of the component.
   */
  static clearDataSourcesAction(id?: string): UiSdlDataSourcesClearAction | null;

  /**
   * Clears all data sources associated with this chart.
   */
  static dataSourcesClearReducer(state?: UiSdlReduxState, action?: UiSdlDataSourcesClearAction): UiSdlReduxState | null;

  /**
   * Fetches the data to display on the chart.
   *
   * @param componentId
   *        The id of the component to affect.
   * @param modelId
   *        The Id of the model to fetch data for.
   * @return A Redux action to get data
   */
  static getDataAction(componentId: string, modelId?: string): UiSdlReduxAction<any>;

  /**
   * When the `GET_DATA` action is triggered, this epic will set the `data` field with the returned data from
   * {@link ModelValidationChartDataGetter#getData}. It will also set the `plottedSeries` field to show the training
   * and validation risk score.
   *
   * @param actionStream
   *           The observable stream of UI SDL actions
   * @param stateStream
   *           The observable stream of UI SDL states
   * @return An observable stream of UI SDL actions
   */
  static getDataEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Plots the feature with the given featureId on the chart.
   *
   * @param componentId
   *        The id of the component to affect.
   * @param featureId
   *        The id of the feature to plot.
   * @return A Redux action to plot a feature
   */
  static plotFeatureAction(componentId: string, featureId: string): UiSdlReduxAction<any>;

  /**
   * When the `PLOT_FEATURE` action is triggered, this reducer will add the the series with the ids
   * "<featureId>-actual" and "<featureId>-reconstruction" to `plottedSeries`.
   *
   * @param state
   *           The current Redux state
   * @param action
   *           The Redux action containing feature plotting data
   * @return A new Redux state with updated plotted series
   */
  static plotFeatureReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Resets the chart to its state after `GET_DATA` action w as called.
   * @param componentId
   *        The id of the component to affect.
   * @return A Redux action to reset the chart
   */
  static resetChartAction(componentId: string): UiSdlReduxAction<any>;

  /**
   * When the `RESET_CHART` action is triggered, this reducer will reset the chart to its state after
   * `GET_DATA` action was called.
   *
   * @param state
   *           The current Redux state
   * @param action
   *           The Redux action to reset the chart
   * @return A new Redux state with reset chart data
   */
  static resetChartReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Clears the chart of all data.
   * @param componentId
   *        The id of the component to affect.
   * @return A Redux action to clear the chart
   */
  static clearChartAction(componentId: string): UiSdlReduxAction<any>;

  /**
   * When the `CLEAR_CHART` action is triggered, this reducer will clear the chart of all data.
   *
   * @param state
   *           The current Redux state
   * @param action
   *           The Redux action to clear the chart
   * @return A new Redux state with cleared chart data
   */
  static clearChartReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * @param componentId
   *        The id of the component to affect.
   * @param pathToValue
   *        Map of path in component that should be set, to value that should be set.
   * @return A Redux action to set fields
   */
  static setFieldsAction(componentId: string, pathToValue?: Map_Type<string, any>): UiSdlReduxAction<any>;

  /**
   * When the `SET_FIELDS` action is triggered, this reducer will update the state by setting the specified fields in the component.
   *
   * @param state
   *           The current Redux state
   * @param action
   *           The Redux action containing field updates
   * @return A new Redux state with updated fields
   */
  static setFieldsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered to update the filter for the time series and get the data.
   *
   * @param id
   *           Id of the component.
   * @param start
   *           Start date for the filter spec {@link EvalMetricSpec}.
   * @param end
   *           End date for the filter spec.
   * @param interval
   *           interval for the filter spec.
   * @return A Redux action to get data with updated interval
   */
  static getDataFromIntervalChangeAction(id?: string, start?: string, end?: string, interval?: string): UiSdlReduxAction<any> | null;
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
