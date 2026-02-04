export interface ModelExperimentPreviewChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ModelExperimentPreviewChart;

  readonly id?: string | null;
  withId(id: string | null): ModelExperimentPreviewChart;

  readonly name?: string | null;
  withName(name: string | null): ModelExperimentPreviewChart;

  readonly dataSpec?: UiSdlTimeseriesLineBarChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTimeseriesLineBarChartDataSpec | null): ModelExperimentPreviewChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ModelExperimentPreviewChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ModelExperimentPreviewChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ModelExperimentPreviewChart;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): ModelExperimentPreviewChart;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): ModelExperimentPreviewChart;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): ModelExperimentPreviewChart;

  readonly height?: number | null;
  withHeight(height: number | null): ModelExperimentPreviewChart;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): ModelExperimentPreviewChart;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): ModelExperimentPreviewChart;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): ModelExperimentPreviewChart;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): ModelExperimentPreviewChart;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): ModelExperimentPreviewChart;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): ModelExperimentPreviewChart;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): ModelExperimentPreviewChart;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): ModelExperimentPreviewChart;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): ModelExperimentPreviewChart;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): ModelExperimentPreviewChart;

  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): ModelExperimentPreviewChart;

  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): ModelExperimentPreviewChart;

  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): ModelExperimentPreviewChart;

  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): ModelExperimentPreviewChart;

  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): ModelExperimentPreviewChart;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): ModelExperimentPreviewChart;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): ModelExperimentPreviewChart;

  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): ModelExperimentPreviewChart;

  readonly showTimeZoneLabel?: boolean;
  withShowTimeZoneLabel(showTimeZoneLabel: boolean): ModelExperimentPreviewChart;

  readonly timeZoneLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withTimeZoneLabel(timeZoneLabel: string | null | IUiSdlDynamicValueSpec | null | null): ModelExperimentPreviewChart;

  readonly timeZoneNameFormat?: string | null;
  withTimeZoneNameFormat(timeZoneNameFormat: string | null): ModelExperimentPreviewChart;

  readonly eventDataSpec?: UiSdlTimeseriesLineBarChartEventDataSpec | null;
  withEventDataSpec(eventDataSpec: IUiSdlTimeseriesLineBarChartEventDataSpec | null): ModelExperimentPreviewChart;

  readonly eventData?: Obj | null;
  withEventData(eventData: IObj | null): ModelExperimentPreviewChart;

  readonly evalDataSpec?: UiSdlTimeseriesLineBarChartEvalDataSpec | null;
  withEvalDataSpec(evalDataSpec: IUiSdlTimeseriesLineBarChartEvalDataSpec | null): ModelExperimentPreviewChart;

  readonly showCrosshair?: boolean;
  withShowCrosshair(showCrosshair: boolean): ModelExperimentPreviewChart;

  readonly xAxis?: UiSdlTimeseriesLineBarChartXAxisConfig | null | UiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null;
  withXAxis(xAxis: IUiSdlTimeseriesLineBarChartXAxisConfig | null | IUiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null): ModelExperimentPreviewChart;

  readonly showNowLine?: boolean;
  withShowNowLine(showNowLine: boolean): ModelExperimentPreviewChart;

  readonly collapseXAxis?: boolean;
  withCollapseXAxis(collapseXAxis: boolean): ModelExperimentPreviewChart;

  readonly nowLineConfig?: UiSdlTimeseriesLineBarChartNowLineConfig | null;
  withNowLineConfig(nowLineConfig: IUiSdlTimeseriesLineBarChartNowLineConfig | null): ModelExperimentPreviewChart;

  readonly dateLines?: C3.Array<UiSdlTimeseriesLineBarChartDateLineConfig | null>;
  withDateLines(dateLines: C3.Array<UiSdlTimeseriesLineBarChartDateLineConfig | null> | Array<IUiSdlTimeseriesLineBarChartDateLineConfig | null>): ModelExperimentPreviewChart;

  readonly dateLinesDataSpec?: UiSdlTimeseriesLineBarChartDateLineDataSpec | null;
  withDateLinesDataSpec(dateLinesDataSpec: IUiSdlTimeseriesLineBarChartDateLineDataSpec | null): ModelExperimentPreviewChart;

  readonly hideMissingDataPoints?: boolean;
  withHideMissingDataPoints(hideMissingDataPoints: boolean): ModelExperimentPreviewChart;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): ModelExperimentPreviewChart;

  readonly showAllTimestampInfoOnTooltip?: boolean;
  withShowAllTimestampInfoOnTooltip(showAllTimestampInfoOnTooltip: boolean): ModelExperimentPreviewChart;

  readonly showStartAndEndDate?: boolean;
  withShowStartAndEndDate(showStartAndEndDate: boolean): ModelExperimentPreviewChart;

  readonly displayStartDate?: string | null;
  withDisplayStartDate(displayStartDate: string | null): ModelExperimentPreviewChart;

  readonly displayEndDate?: string | null;
  withDisplayEndDate(displayEndDate: string | null): ModelExperimentPreviewChart;

  readonly markerIdentifiersToCollapse?: C3.Array<string | null>;
  withMarkerIdentifiersToCollapse(markerIdentifiersToCollapse: C3.Array<string | null> | Array<string | null>): ModelExperimentPreviewChart;

  readonly displayInterval?: string | null;
  withDisplayInterval(displayInterval: string | null): ModelExperimentPreviewChart;

  readonly displayIntervalOptions?: C3.Array<string | null>;
  withDisplayIntervalOptions(displayIntervalOptions: C3.Array<string | null> | Array<string | null>): ModelExperimentPreviewChart;

  readonly shouldOverrideUserConfigIdWithDataGeneratedId?: boolean;
  withShouldOverrideUserConfigIdWithDataGeneratedId(shouldOverrideUserConfigIdWithDataGeneratedId: boolean): ModelExperimentPreviewChart;

  readonly dataSelection?: boolean;
  withDataSelection(dataSelection: boolean): ModelExperimentPreviewChart;

  readonly dataSelectionControlsDataZoom?: boolean;
  withDataSelectionControlsDataZoom(dataSelectionControlsDataZoom: boolean): ModelExperimentPreviewChart;

  readonly dataZoomStartValue?: string | null;
  withDataZoomStartValue(dataZoomStartValue: string | null): ModelExperimentPreviewChart;

  readonly dataZoomEndValue?: string | null;
  withDataZoomEndValue(dataZoomEndValue: string | null): ModelExperimentPreviewChart;

  readonly synchronized?: boolean;
  withSynchronized(synchronized: boolean): ModelExperimentPreviewChart;

  readonly suppressOrderSeriesById?: boolean;
  withSuppressOrderSeriesById(suppressOrderSeriesById: boolean): ModelExperimentPreviewChart;

  readonly noDataComponentId?: string | null;
  withNoDataComponentId(noDataComponentId: string | null): ModelExperimentPreviewChart;

  readonly selectedFeatureId?: string | null;
  withSelectedFeatureId(selectedFeatureId: string | null): ModelExperimentPreviewChart;

  readonly zoomRangeStart?: DateTime | null;
  withZoomRangeStart(zoomRangeStart: DateTime | Date | string | null): ModelExperimentPreviewChart;

  readonly zoomRangeEnd?: DateTime | null;
  withZoomRangeEnd(zoomRangeEnd: DateTime | Date | string | null): ModelExperimentPreviewChart;

  readonly riskScoreThreshold?: number | null;
  withRiskScoreThreshold(riskScoreThreshold: number | null): ModelExperimentPreviewChart;

  readonly dataRange?: C3.Map<string | null, DateTime | null>;
  withDataRange(dataRange: C3.Map<string | null, DateTime | null> | {[key: string | null]: DateTime | Date | string | null}): ModelExperimentPreviewChart;

  readonly chartData?: ExperimentalPreviewHelper.ChartData | null;
  withChartData(chartData: IExperimentalPreviewHelper.ChartData | null): ModelExperimentPreviewChart;

  readonly featureOutputData?: EvalMetricsResult | null;
  withFeatureOutputData(featureOutputData: IEvalMetricsResult | null): ModelExperimentPreviewChart;
}

