export interface UiSdlHistogramReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlHistogramReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlHistogramReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlHistogramReact;

  readonly dataSpec?: UiSdlHistogramDataSpec | null;
  withDataSpec(dataSpec: IUiSdlHistogramDataSpec | null): UiSdlHistogramReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlHistogramReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlHistogramReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlHistogramReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlHistogramReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlHistogramReact;

  readonly data?: UiSdlChartEChartConfig | null;
  withData(data: IUiSdlChartEChartConfig | null): UiSdlHistogramReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlHistogramReact;

  readonly xAxis?: UiSdlHistogramXAxisConfig | null;
  withXAxis(xAxis: IUiSdlHistogramXAxisConfig | null): UiSdlHistogramReact;

  readonly yAxis?: UiSdlHistogramYAxisConfig | null;
  withYAxis(yAxis: IUiSdlHistogramYAxisConfig | null): UiSdlHistogramReact;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlHistogramReact;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlHistogramReact;

  readonly histogramLayout?: string | null;
  withHistogramLayout(histogramLayout: string | null): UiSdlHistogramReact;

  readonly zoomDisabled?: boolean;
  withZoomDisabled(zoomDisabled: boolean): UiSdlHistogramReact;

  readonly yAxisDataZoomDisabled?: boolean;
  withYAxisDataZoomDisabled(yAxisDataZoomDisabled: boolean): UiSdlHistogramReact;

  readonly tooltipDisabled?: boolean;
  withTooltipDisabled(tooltipDisabled: boolean): UiSdlHistogramReact;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlHistogramReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlHistogramReact;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlHistogramReact;
}

