export interface UiSdlAreaChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAreaChart;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAreaChart;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAreaChart;

  readonly dataSpec?: UiSdlAreaChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlAreaChartDataSpec | null): UiSdlAreaChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAreaChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAreaChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAreaChart;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlAreaChart;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlAreaChart;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlAreaChart;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlAreaChart;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlAreaChart;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlAreaChart;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlAreaChart;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlAreaChart;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlAreaChart;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlAreaChart;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlAreaChart;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): UiSdlAreaChart;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlAreaChart;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlAreaChart;

  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): UiSdlAreaChart;

  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): UiSdlAreaChart;

  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): UiSdlAreaChart;

  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): UiSdlAreaChart;

  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): UiSdlAreaChart;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlAreaChart;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlAreaChart;

  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): UiSdlAreaChart;

  readonly eventDataSpec?: UiSdlTimeseriesLineBarChartEventDataSpec | null;
  withEventDataSpec(eventDataSpec: IUiSdlTimeseriesLineBarChartEventDataSpec | null): UiSdlAreaChart;

  readonly eventData?: Obj | null;
  withEventData(eventData: IObj | null): UiSdlAreaChart;

  readonly xAxis?: UiSdlTimeseriesLineBarChartXAxisConfig | null | UiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null;
  withXAxis(xAxis: IUiSdlTimeseriesLineBarChartXAxisConfig | null | IUiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null): UiSdlAreaChart;

  readonly showNowLine?: boolean;
  withShowNowLine(showNowLine: boolean): UiSdlAreaChart;

  readonly smooth?: boolean;
  withSmooth(smooth: boolean): UiSdlAreaChart;

  readonly areaOpacity?: number | null;
  withAreaOpacity(areaOpacity: number | null): UiSdlAreaChart;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlAreaChart;

  readonly tooltipTrigger?: string | null;
  withTooltipTrigger(tooltipTrigger: string | null): UiSdlAreaChart;

  readonly hideMissingDataPoints?: boolean;
  withHideMissingDataPoints(hideMissingDataPoints: boolean): UiSdlAreaChart;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlAreaChart;

  readonly displayStartDate?: DateTime | null;
  withDisplayStartDate(displayStartDate: DateTime | Date | string | null): UiSdlAreaChart;

  readonly displayEndDate?: DateTime | null;
  withDisplayEndDate(displayEndDate: DateTime | Date | string | null): UiSdlAreaChart;

  readonly displayInterval?: string | null;
  withDisplayInterval(displayInterval: string | null): UiSdlAreaChart;

  readonly shouldOverrideUserConfigIdWithDataGeneratedId?: boolean;
  withShouldOverrideUserConfigIdWithDataGeneratedId(shouldOverrideUserConfigIdWithDataGeneratedId: boolean): UiSdlAreaChart;

  readonly dataSelection?: boolean;
  withDataSelection(dataSelection: boolean): UiSdlAreaChart;
}

