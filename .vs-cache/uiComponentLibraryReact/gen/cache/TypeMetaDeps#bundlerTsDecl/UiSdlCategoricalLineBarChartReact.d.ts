export interface UiSdlCategoricalLineBarChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCategoricalLineBarChartReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCategoricalLineBarChartReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCategoricalLineBarChartReact;

  readonly dataSpec?: UiSdlCategoricalLineBarChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCategoricalLineBarChartDataSpec | null): UiSdlCategoricalLineBarChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCategoricalLineBarChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCategoricalLineBarChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCategoricalLineBarChartReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlCategoricalLineBarChartReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlCategoricalLineBarChartReact;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlCategoricalLineBarChartReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlCategoricalLineBarChartReact;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlCategoricalLineBarChartReact;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlCategoricalLineBarChartReact;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlCategoricalLineBarChartReact;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlCategoricalLineBarChartReact;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlCategoricalLineBarChartReact;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlCategoricalLineBarChartReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlCategoricalLineBarChartReact;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): UiSdlCategoricalLineBarChartReact;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlCategoricalLineBarChartReact;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlCategoricalLineBarChartReact;

  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): UiSdlCategoricalLineBarChartReact;

  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): UiSdlCategoricalLineBarChartReact;

  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): UiSdlCategoricalLineBarChartReact;

  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): UiSdlCategoricalLineBarChartReact;

  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): UiSdlCategoricalLineBarChartReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlCategoricalLineBarChartReact;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlCategoricalLineBarChartReact;

  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): UiSdlCategoricalLineBarChartReact;

  readonly chartLayout?: string | null;
  withChartLayout(chartLayout: string | null): UiSdlCategoricalLineBarChartReact;

  readonly xAxis?: UiSdlLineBarChartXAxisConfig | null;
  withXAxis(xAxis: IUiSdlLineBarChartXAxisConfig | null): UiSdlCategoricalLineBarChartReact;

  readonly removeExtraSeries?: boolean;
  withRemoveExtraSeries(removeExtraSeries: boolean): UiSdlCategoricalLineBarChartReact;

  readonly markLinesDataSpec?: UiSdlCategoricalLineBarChartMarkLineDataSpec | null;
  withMarkLinesDataSpec(markLinesDataSpec: IUiSdlCategoricalLineBarChartMarkLineDataSpec | null): UiSdlCategoricalLineBarChartReact;
}

