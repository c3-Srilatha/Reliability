export interface UiSdlTimeseriesLineBarChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTimeseriesLineBarChart;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTimeseriesLineBarChart;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTimeseriesLineBarChart;

  readonly dataSpec?: UiSdlTimeseriesLineBarChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTimeseriesLineBarChartDataSpec | null): UiSdlTimeseriesLineBarChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTimeseriesLineBarChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTimeseriesLineBarChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTimeseriesLineBarChart;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChart;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChart;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlTimeseriesLineBarChart;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlTimeseriesLineBarChart;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlTimeseriesLineBarChart;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlTimeseriesLineBarChart;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlTimeseriesLineBarChart;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlTimeseriesLineBarChart;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlTimeseriesLineBarChart;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlTimeseriesLineBarChart;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlTimeseriesLineBarChart;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): UiSdlTimeseriesLineBarChart;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlTimeseriesLineBarChart;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlTimeseriesLineBarChart;

  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): UiSdlTimeseriesLineBarChart;

  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): UiSdlTimeseriesLineBarChart;

  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): UiSdlTimeseriesLineBarChart;

  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): UiSdlTimeseriesLineBarChart;

  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): UiSdlTimeseriesLineBarChart;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlTimeseriesLineBarChart;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlTimeseriesLineBarChart;

  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): UiSdlTimeseriesLineBarChart;

  readonly showTimeZoneLabel?: boolean;
  withShowTimeZoneLabel(showTimeZoneLabel: boolean): UiSdlTimeseriesLineBarChart;

  readonly timeZoneLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withTimeZoneLabel(timeZoneLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChart;

  readonly timeZoneNameFormat?: string | null;
  withTimeZoneNameFormat(timeZoneNameFormat: string | null): UiSdlTimeseriesLineBarChart;

  readonly eventDataSpec?: UiSdlTimeseriesLineBarChartEventDataSpec | null;
  withEventDataSpec(eventDataSpec: IUiSdlTimeseriesLineBarChartEventDataSpec | null): UiSdlTimeseriesLineBarChart;

  readonly eventData?: Obj | null;
  withEventData(eventData: IObj | null): UiSdlTimeseriesLineBarChart;

  readonly evalDataSpec?: UiSdlTimeseriesLineBarChartEvalDataSpec | null;
  withEvalDataSpec(evalDataSpec: IUiSdlTimeseriesLineBarChartEvalDataSpec | null): UiSdlTimeseriesLineBarChart;

  readonly showCrosshair?: boolean;
  withShowCrosshair(showCrosshair: boolean): UiSdlTimeseriesLineBarChart;

  readonly xAxis?: UiSdlTimeseriesLineBarChartXAxisConfig | null | UiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null;
  withXAxis(xAxis: IUiSdlTimeseriesLineBarChartXAxisConfig | null | IUiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null): UiSdlTimeseriesLineBarChart;

  readonly showNowLine?: boolean;
  withShowNowLine(showNowLine: boolean): UiSdlTimeseriesLineBarChart;

  readonly collapseXAxis?: boolean;
  withCollapseXAxis(collapseXAxis: boolean): UiSdlTimeseriesLineBarChart;

  readonly nowLineConfig?: UiSdlTimeseriesLineBarChartNowLineConfig | null;
  withNowLineConfig(nowLineConfig: IUiSdlTimeseriesLineBarChartNowLineConfig | null): UiSdlTimeseriesLineBarChart;

  readonly dateLines?: C3.Array<UiSdlTimeseriesLineBarChartDateLineConfig | null>;
  withDateLines(dateLines: C3.Array<UiSdlTimeseriesLineBarChartDateLineConfig | null> | Array<IUiSdlTimeseriesLineBarChartDateLineConfig | null>): UiSdlTimeseriesLineBarChart;

  readonly dateLinesDataSpec?: UiSdlTimeseriesLineBarChartDateLineDataSpec | null;
  withDateLinesDataSpec(dateLinesDataSpec: IUiSdlTimeseriesLineBarChartDateLineDataSpec | null): UiSdlTimeseriesLineBarChart;

  readonly hideMissingDataPoints?: boolean;
  withHideMissingDataPoints(hideMissingDataPoints: boolean): UiSdlTimeseriesLineBarChart;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlTimeseriesLineBarChart;

  readonly showAllTimestampInfoOnTooltip?: boolean;
  withShowAllTimestampInfoOnTooltip(showAllTimestampInfoOnTooltip: boolean): UiSdlTimeseriesLineBarChart;

  readonly showStartAndEndDate?: boolean;
  withShowStartAndEndDate(showStartAndEndDate: boolean): UiSdlTimeseriesLineBarChart;

  readonly displayStartDate?: string | null;
  withDisplayStartDate(displayStartDate: string | null): UiSdlTimeseriesLineBarChart;

  readonly displayEndDate?: string | null;
  withDisplayEndDate(displayEndDate: string | null): UiSdlTimeseriesLineBarChart;

  readonly markerIdentifiersToCollapse?: C3.Array<string | null>;
  withMarkerIdentifiersToCollapse(markerIdentifiersToCollapse: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChart;

  readonly displayInterval?: string | null;
  withDisplayInterval(displayInterval: string | null): UiSdlTimeseriesLineBarChart;

  readonly displayIntervalOptions?: C3.Array<string | null>;
  withDisplayIntervalOptions(displayIntervalOptions: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChart;

  readonly shouldOverrideUserConfigIdWithDataGeneratedId?: boolean;
  withShouldOverrideUserConfigIdWithDataGeneratedId(shouldOverrideUserConfigIdWithDataGeneratedId: boolean): UiSdlTimeseriesLineBarChart;

  readonly dataSelection?: boolean;
  withDataSelection(dataSelection: boolean): UiSdlTimeseriesLineBarChart;

  readonly dataSelectionControlsDataZoom?: boolean;
  withDataSelectionControlsDataZoom(dataSelectionControlsDataZoom: boolean): UiSdlTimeseriesLineBarChart;

  readonly dataZoomStartValue?: string | null;
  withDataZoomStartValue(dataZoomStartValue: string | null): UiSdlTimeseriesLineBarChart;

  readonly dataZoomEndValue?: string | null;
  withDataZoomEndValue(dataZoomEndValue: string | null): UiSdlTimeseriesLineBarChart;

  readonly synchronized?: boolean;
  withSynchronized(synchronized: boolean): UiSdlTimeseriesLineBarChart;

  readonly suppressOrderSeriesById?: boolean;
  withSuppressOrderSeriesById(suppressOrderSeriesById: boolean): UiSdlTimeseriesLineBarChart;
}

