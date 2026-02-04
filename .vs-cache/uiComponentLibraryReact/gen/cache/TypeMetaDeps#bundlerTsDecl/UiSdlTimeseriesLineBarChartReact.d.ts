export interface UiSdlTimeseriesLineBarChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTimeseriesLineBarChartReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly dataSpec?: UiSdlTimeseriesLineBarChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTimeseriesLineBarChartDataSpec | null): UiSdlTimeseriesLineBarChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartReact;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlTimeseriesLineBarChartReact;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlTimeseriesLineBarChartReact;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlTimeseriesLineBarChartReact;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlTimeseriesLineBarChartReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlTimeseriesLineBarChartReact;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): UiSdlTimeseriesLineBarChartReact;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlTimeseriesLineBarChartReact;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlTimeseriesLineBarChartReact;

  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlTimeseriesLineBarChartReact;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlTimeseriesLineBarChartReact;

  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly showTimeZoneLabel?: boolean;
  withShowTimeZoneLabel(showTimeZoneLabel: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly timeZoneLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withTimeZoneLabel(timeZoneLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartReact;

  readonly timeZoneNameFormat?: string | null;
  withTimeZoneNameFormat(timeZoneNameFormat: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly eventDataSpec?: UiSdlTimeseriesLineBarChartEventDataSpec | null;
  withEventDataSpec(eventDataSpec: IUiSdlTimeseriesLineBarChartEventDataSpec | null): UiSdlTimeseriesLineBarChartReact;

  readonly eventData?: Obj | null;
  withEventData(eventData: IObj | null): UiSdlTimeseriesLineBarChartReact;

  readonly evalDataSpec?: UiSdlTimeseriesLineBarChartEvalDataSpec | null;
  withEvalDataSpec(evalDataSpec: IUiSdlTimeseriesLineBarChartEvalDataSpec | null): UiSdlTimeseriesLineBarChartReact;

  readonly showCrosshair?: boolean;
  withShowCrosshair(showCrosshair: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly xAxis?: UiSdlTimeseriesLineBarChartXAxisConfig | null | UiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null;
  withXAxis(xAxis: IUiSdlTimeseriesLineBarChartXAxisConfig | null | IUiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null): UiSdlTimeseriesLineBarChartReact;

  readonly showNowLine?: boolean;
  withShowNowLine(showNowLine: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly collapseXAxis?: boolean;
  withCollapseXAxis(collapseXAxis: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly nowLineConfig?: UiSdlTimeseriesLineBarChartNowLineConfig | null;
  withNowLineConfig(nowLineConfig: IUiSdlTimeseriesLineBarChartNowLineConfig | null): UiSdlTimeseriesLineBarChartReact;

  readonly dateLines?: C3.Array<UiSdlTimeseriesLineBarChartDateLineConfig | null>;
  withDateLines(dateLines: C3.Array<UiSdlTimeseriesLineBarChartDateLineConfig | null> | Array<IUiSdlTimeseriesLineBarChartDateLineConfig | null>): UiSdlTimeseriesLineBarChartReact;

  readonly dateLinesDataSpec?: UiSdlTimeseriesLineBarChartDateLineDataSpec | null;
  withDateLinesDataSpec(dateLinesDataSpec: IUiSdlTimeseriesLineBarChartDateLineDataSpec | null): UiSdlTimeseriesLineBarChartReact;

  readonly hideMissingDataPoints?: boolean;
  withHideMissingDataPoints(hideMissingDataPoints: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly showAllTimestampInfoOnTooltip?: boolean;
  withShowAllTimestampInfoOnTooltip(showAllTimestampInfoOnTooltip: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly showStartAndEndDate?: boolean;
  withShowStartAndEndDate(showStartAndEndDate: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly displayStartDate?: string | null;
  withDisplayStartDate(displayStartDate: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly displayEndDate?: string | null;
  withDisplayEndDate(displayEndDate: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly markerIdentifiersToCollapse?: C3.Array<string | null>;
  withMarkerIdentifiersToCollapse(markerIdentifiersToCollapse: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartReact;

  readonly displayInterval?: string | null;
  withDisplayInterval(displayInterval: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly displayIntervalOptions?: C3.Array<string | null>;
  withDisplayIntervalOptions(displayIntervalOptions: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartReact;

  readonly shouldOverrideUserConfigIdWithDataGeneratedId?: boolean;
  withShouldOverrideUserConfigIdWithDataGeneratedId(shouldOverrideUserConfigIdWithDataGeneratedId: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly dataSelection?: boolean;
  withDataSelection(dataSelection: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly dataSelectionControlsDataZoom?: boolean;
  withDataSelectionControlsDataZoom(dataSelectionControlsDataZoom: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly dataZoomStartValue?: string | null;
  withDataZoomStartValue(dataZoomStartValue: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly dataZoomEndValue?: string | null;
  withDataZoomEndValue(dataZoomEndValue: string | null): UiSdlTimeseriesLineBarChartReact;

  readonly synchronized?: boolean;
  withSynchronized(synchronized: boolean): UiSdlTimeseriesLineBarChartReact;

  readonly suppressOrderSeriesById?: boolean;
  withSuppressOrderSeriesById(suppressOrderSeriesById: boolean): UiSdlTimeseriesLineBarChartReact;
}

