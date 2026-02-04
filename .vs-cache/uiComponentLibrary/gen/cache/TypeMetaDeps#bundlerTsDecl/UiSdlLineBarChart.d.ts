export interface UiSdlLineBarChart<DataType> {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLineBarChart;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLineBarChart;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLineBarChart;

  readonly dataSpec?: DataType | null;
  withDataSpec(dataSpec: DataType | null): UiSdlLineBarChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLineBarChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLineBarChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLineBarChart;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlLineBarChart;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlLineBarChart;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlLineBarChart;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlLineBarChart;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlLineBarChart;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlLineBarChart;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlLineBarChart;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlLineBarChart;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlLineBarChart;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlLineBarChart;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlLineBarChart;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): UiSdlLineBarChart;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlLineBarChart;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlLineBarChart;

  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): UiSdlLineBarChart;

  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): UiSdlLineBarChart;

  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): UiSdlLineBarChart;

  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): UiSdlLineBarChart;

  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): UiSdlLineBarChart;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlLineBarChart;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlLineBarChart;

  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): UiSdlLineBarChart;
}

