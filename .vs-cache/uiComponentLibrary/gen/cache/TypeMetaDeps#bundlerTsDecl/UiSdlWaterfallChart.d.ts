export interface UiSdlWaterfallChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlWaterfallChart;

  readonly id?: string | null;
  withId(id: string | null): UiSdlWaterfallChart;

  readonly name?: string | null;
  withName(name: string | null): UiSdlWaterfallChart;

  readonly dataSpec?: UiSdlWaterfallChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlWaterfallChartDataSpec | null): UiSdlWaterfallChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlWaterfallChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlWaterfallChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlWaterfallChart;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlWaterfallChart;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlWaterfallChart;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlWaterfallChart;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlWaterfallChart;

  readonly data?: any | null;
  withData(data: any | null): UiSdlWaterfallChart;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlWaterfallChart;

  readonly yAxis?: UiSdlWaterfallChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlWaterfallChartYAxisConfig | null): UiSdlWaterfallChart;

  readonly xAxis?: UiSdlWaterfallChartXAxisConfig | null;
  withXAxis(xAxis: IUiSdlWaterfallChartXAxisConfig | null): UiSdlWaterfallChart;

  readonly displayLabel?: boolean;
  withDisplayLabel(displayLabel: boolean): UiSdlWaterfallChart;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlWaterfallChart;

  readonly legendStyle?: string | null;
  withLegendStyle(legendStyle: string | null): UiSdlWaterfallChart;

  readonly tooltip?: UiSdlWaterfallChartTooltip | null;
  withTooltip(tooltip: IUiSdlWaterfallChartTooltip | null): UiSdlWaterfallChart;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlWaterfallChart;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlWaterfallChart;

  readonly gradientSettings?: C3.Array<UiSdlWaterfallChartGradientColorSettings | null>;
  withGradientSettings(gradientSettings: C3.Array<UiSdlWaterfallChartGradientColorSettings | null> | Array<IUiSdlWaterfallChartGradientColorSettings | null>): UiSdlWaterfallChart;

  readonly totalGradientSettings?: C3.Array<UiSdlWaterfallChartGradientColorSettings | null>;
  withTotalGradientSettings(totalGradientSettings: C3.Array<UiSdlWaterfallChartGradientColorSettings | null> | Array<IUiSdlWaterfallChartGradientColorSettings | null>): UiSdlWaterfallChart;
}

