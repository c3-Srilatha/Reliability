export interface UiSdlCategoricalLineBarChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCategoricalLineBarChart;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCategoricalLineBarChart;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCategoricalLineBarChart;

  readonly dataSpec?: UiSdlCategoricalLineBarChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCategoricalLineBarChartDataSpec | null): UiSdlCategoricalLineBarChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCategoricalLineBarChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCategoricalLineBarChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCategoricalLineBarChart;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlCategoricalLineBarChart;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlCategoricalLineBarChart;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlCategoricalLineBarChart;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlCategoricalLineBarChart;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlCategoricalLineBarChart;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlCategoricalLineBarChart;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlCategoricalLineBarChart;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlCategoricalLineBarChart;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlCategoricalLineBarChart;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlCategoricalLineBarChart;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlCategoricalLineBarChart;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): UiSdlCategoricalLineBarChart;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlCategoricalLineBarChart;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlCategoricalLineBarChart;

  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): UiSdlCategoricalLineBarChart;

  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): UiSdlCategoricalLineBarChart;

  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): UiSdlCategoricalLineBarChart;

  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): UiSdlCategoricalLineBarChart;

  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): UiSdlCategoricalLineBarChart;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlCategoricalLineBarChart;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlCategoricalLineBarChart;

  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): UiSdlCategoricalLineBarChart;

  readonly chartLayout?: string | null;
  withChartLayout(chartLayout: string | null): UiSdlCategoricalLineBarChart;

  readonly xAxis?: UiSdlLineBarChartXAxisConfig | null;
  withXAxis(xAxis: IUiSdlLineBarChartXAxisConfig | null): UiSdlCategoricalLineBarChart;

  readonly removeExtraSeries?: boolean;
  withRemoveExtraSeries(removeExtraSeries: boolean): UiSdlCategoricalLineBarChart;

  readonly markLinesDataSpec?: UiSdlCategoricalLineBarChartMarkLineDataSpec | null;
  withMarkLinesDataSpec(markLinesDataSpec: IUiSdlCategoricalLineBarChartMarkLineDataSpec | null): UiSdlCategoricalLineBarChart;
}

