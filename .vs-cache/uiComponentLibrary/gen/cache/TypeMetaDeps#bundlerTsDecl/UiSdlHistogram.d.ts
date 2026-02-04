export interface UiSdlHistogram {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlHistogram;

  readonly id?: string | null;
  withId(id: string | null): UiSdlHistogram;

  readonly name?: string | null;
  withName(name: string | null): UiSdlHistogram;

  readonly dataSpec?: UiSdlHistogramDataSpec | null;
  withDataSpec(dataSpec: IUiSdlHistogramDataSpec | null): UiSdlHistogram;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlHistogram;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlHistogram;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlHistogram;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlHistogram;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlHistogram;

  readonly data?: UiSdlChartEChartConfig | null;
  withData(data: IUiSdlChartEChartConfig | null): UiSdlHistogram;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlHistogram;

  readonly xAxis?: UiSdlHistogramXAxisConfig | null;
  withXAxis(xAxis: IUiSdlHistogramXAxisConfig | null): UiSdlHistogram;

  readonly yAxis?: UiSdlHistogramYAxisConfig | null;
  withYAxis(yAxis: IUiSdlHistogramYAxisConfig | null): UiSdlHistogram;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlHistogram;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlHistogram;

  readonly histogramLayout?: string | null;
  withHistogramLayout(histogramLayout: string | null): UiSdlHistogram;

  readonly zoomDisabled?: boolean;
  withZoomDisabled(zoomDisabled: boolean): UiSdlHistogram;

  readonly yAxisDataZoomDisabled?: boolean;
  withYAxisDataZoomDisabled(yAxisDataZoomDisabled: boolean): UiSdlHistogram;

  readonly tooltipDisabled?: boolean;
  withTooltipDisabled(tooltipDisabled: boolean): UiSdlHistogram;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlHistogram;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlHistogram;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlHistogram;
}

