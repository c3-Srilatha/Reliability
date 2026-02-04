export interface ModelExperimentPreviewChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ModelExperimentPreviewChartReact;

  readonly id?: string | null;
  withId(id: string | null): ModelExperimentPreviewChartReact;

  readonly name?: string | null;
  withName(name: string | null): ModelExperimentPreviewChartReact;

  readonly dataSpec?: UiSdlTimeseriesLineBarChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTimeseriesLineBarChartDataSpec | null): ModelExperimentPreviewChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ModelExperimentPreviewChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ModelExperimentPreviewChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ModelExperimentPreviewChartReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): ModelExperimentPreviewChartReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): ModelExperimentPreviewChartReact;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): ModelExperimentPreviewChartReact;

  readonly height?: number | null;
  withHeight(height: number | null): ModelExperimentPreviewChartReact;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): ModelExperimentPreviewChartReact;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): ModelExperimentPreviewChartReact;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): ModelExperimentPreviewChartReact;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): ModelExperimentPreviewChartReact;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): ModelExperimentPreviewChartReact;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): ModelExperimentPreviewChartReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): ModelExperimentPreviewChartReact;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): ModelExperimentPreviewChartReact;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): ModelExperimentPreviewChartReact;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): ModelExperimentPreviewChartReact;

  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): ModelExperimentPreviewChartReact;

  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): ModelExperimentPreviewChartReact;

  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): ModelExperimentPreviewChartReact;

  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): ModelExperimentPreviewChartReact;

  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): ModelExperimentPreviewChartReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): ModelExperimentPreviewChartReact;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): ModelExperimentPreviewChartReact;

  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): ModelExperimentPreviewChartReact;

  readonly showTimeZoneLabel?: boolean;
  withShowTimeZoneLabel(showTimeZoneLabel: boolean): ModelExperimentPreviewChartReact;

  readonly timeZoneLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withTimeZoneLabel(timeZoneLabel: string | null | IUiSdlDynamicValueSpec | null | null): ModelExperimentPreviewChartReact;

  readonly timeZoneNameFormat?: string | null;
  withTimeZoneNameFormat(timeZoneNameFormat: string | null): ModelExperimentPreviewChartReact;

  readonly eventDataSpec?: UiSdlTimeseriesLineBarChartEventDataSpec | null;
  withEventDataSpec(eventDataSpec: IUiSdlTimeseriesLineBarChartEventDataSpec | null): ModelExperimentPreviewChartReact;

  readonly eventData?: Obj | null;
  withEventData(eventData: IObj | null): ModelExperimentPreviewChartReact;

  readonly evalDataSpec?: UiSdlTimeseriesLineBarChartEvalDataSpec | null;
  withEvalDataSpec(evalDataSpec: IUiSdlTimeseriesLineBarChartEvalDataSpec | null): ModelExperimentPreviewChartReact;

  readonly showCrosshair?: boolean;
  withShowCrosshair(showCrosshair: boolean): ModelExperimentPreviewChartReact;

  readonly xAxis?: UiSdlTimeseriesLineBarChartXAxisConfig | null | UiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null;
  withXAxis(xAxis: IUiSdlTimeseriesLineBarChartXAxisConfig | null | IUiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null): ModelExperimentPreviewChartReact;

  readonly showNowLine?: boolean;
  withShowNowLine(showNowLine: boolean): ModelExperimentPreviewChartReact;

  readonly collapseXAxis?: boolean;
  withCollapseXAxis(collapseXAxis: boolean): ModelExperimentPreviewChartReact;

  readonly nowLineConfig?: UiSdlTimeseriesLineBarChartNowLineConfig | null;
  withNowLineConfig(nowLineConfig: IUiSdlTimeseriesLineBarChartNowLineConfig | null): ModelExperimentPreviewChartReact;

  readonly dateLines?: C3.Array<UiSdlTimeseriesLineBarChartDateLineConfig | null>;
  withDateLines(dateLines: C3.Array<UiSdlTimeseriesLineBarChartDateLineConfig | null> | Array<IUiSdlTimeseriesLineBarChartDateLineConfig | null>): ModelExperimentPreviewChartReact;

  readonly dateLinesDataSpec?: UiSdlTimeseriesLineBarChartDateLineDataSpec | null;
  withDateLinesDataSpec(dateLinesDataSpec: IUiSdlTimeseriesLineBarChartDateLineDataSpec | null): ModelExperimentPreviewChartReact;

  readonly hideMissingDataPoints?: boolean;
  withHideMissingDataPoints(hideMissingDataPoints: boolean): ModelExperimentPreviewChartReact;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): ModelExperimentPreviewChartReact;

  readonly showAllTimestampInfoOnTooltip?: boolean;
  withShowAllTimestampInfoOnTooltip(showAllTimestampInfoOnTooltip: boolean): ModelExperimentPreviewChartReact;

  readonly showStartAndEndDate?: boolean;
  withShowStartAndEndDate(showStartAndEndDate: boolean): ModelExperimentPreviewChartReact;

  readonly displayStartDate?: string | null;
  withDisplayStartDate(displayStartDate: string | null): ModelExperimentPreviewChartReact;

  readonly displayEndDate?: string | null;
  withDisplayEndDate(displayEndDate: string | null): ModelExperimentPreviewChartReact;

  readonly markerIdentifiersToCollapse?: C3.Array<string | null>;
  withMarkerIdentifiersToCollapse(markerIdentifiersToCollapse: C3.Array<string | null> | Array<string | null>): ModelExperimentPreviewChartReact;

  readonly displayInterval?: string | null;
  withDisplayInterval(displayInterval: string | null): ModelExperimentPreviewChartReact;

  readonly displayIntervalOptions?: C3.Array<string | null>;
  withDisplayIntervalOptions(displayIntervalOptions: C3.Array<string | null> | Array<string | null>): ModelExperimentPreviewChartReact;

  readonly shouldOverrideUserConfigIdWithDataGeneratedId?: boolean;
  withShouldOverrideUserConfigIdWithDataGeneratedId(shouldOverrideUserConfigIdWithDataGeneratedId: boolean): ModelExperimentPreviewChartReact;

  readonly dataSelection?: boolean;
  withDataSelection(dataSelection: boolean): ModelExperimentPreviewChartReact;

  readonly dataSelectionControlsDataZoom?: boolean;
  withDataSelectionControlsDataZoom(dataSelectionControlsDataZoom: boolean): ModelExperimentPreviewChartReact;

  readonly dataZoomStartValue?: string | null;
  withDataZoomStartValue(dataZoomStartValue: string | null): ModelExperimentPreviewChartReact;

  readonly dataZoomEndValue?: string | null;
  withDataZoomEndValue(dataZoomEndValue: string | null): ModelExperimentPreviewChartReact;

  readonly synchronized?: boolean;
  withSynchronized(synchronized: boolean): ModelExperimentPreviewChartReact;

  readonly suppressOrderSeriesById?: boolean;
  withSuppressOrderSeriesById(suppressOrderSeriesById: boolean): ModelExperimentPreviewChartReact;

  readonly noDataComponentId?: string | null;
  withNoDataComponentId(noDataComponentId: string | null): ModelExperimentPreviewChartReact;

  readonly selectedFeatureId?: string | null;
  withSelectedFeatureId(selectedFeatureId: string | null): ModelExperimentPreviewChartReact;

  readonly zoomRangeStart?: DateTime | null;
  withZoomRangeStart(zoomRangeStart: DateTime | Date | string | null): ModelExperimentPreviewChartReact;

  readonly zoomRangeEnd?: DateTime | null;
  withZoomRangeEnd(zoomRangeEnd: DateTime | Date | string | null): ModelExperimentPreviewChartReact;

  readonly riskScoreThreshold?: number | null;
  withRiskScoreThreshold(riskScoreThreshold: number | null): ModelExperimentPreviewChartReact;

  readonly dataRange?: C3.Map<string | null, DateTime | null>;
  withDataRange(dataRange: C3.Map<string | null, DateTime | null> | {[key: string | null]: DateTime | Date | string | null}): ModelExperimentPreviewChartReact;

  readonly chartData?: ExperimentalPreviewHelper.ChartData | null;
  withChartData(chartData: IExperimentalPreviewHelper.ChartData | null): ModelExperimentPreviewChartReact;

  readonly featureOutputData?: EvalMetricsResult | null;
  withFeatureOutputData(featureOutputData: IEvalMetricsResult | null): ModelExperimentPreviewChartReact;
}

