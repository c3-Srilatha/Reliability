export interface UiSdlWaterfallChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlWaterfallChartReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlWaterfallChartReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlWaterfallChartReact;

  readonly dataSpec?: UiSdlWaterfallChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlWaterfallChartDataSpec | null): UiSdlWaterfallChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlWaterfallChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlWaterfallChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlWaterfallChartReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlWaterfallChartReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlWaterfallChartReact;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlWaterfallChartReact;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlWaterfallChartReact;

  readonly data?: any | null;
  withData(data: any | null): UiSdlWaterfallChartReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlWaterfallChartReact;

  readonly yAxis?: UiSdlWaterfallChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlWaterfallChartYAxisConfig | null): UiSdlWaterfallChartReact;

  readonly xAxis?: UiSdlWaterfallChartXAxisConfig | null;
  withXAxis(xAxis: IUiSdlWaterfallChartXAxisConfig | null): UiSdlWaterfallChartReact;

  readonly displayLabel?: boolean;
  withDisplayLabel(displayLabel: boolean): UiSdlWaterfallChartReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlWaterfallChartReact;

  readonly legendStyle?: string | null;
  withLegendStyle(legendStyle: string | null): UiSdlWaterfallChartReact;

  readonly tooltip?: UiSdlWaterfallChartTooltip | null;
  withTooltip(tooltip: IUiSdlWaterfallChartTooltip | null): UiSdlWaterfallChartReact;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlWaterfallChartReact;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlWaterfallChartReact;

  readonly gradientSettings?: C3.Array<UiSdlWaterfallChartGradientColorSettings | null>;
  withGradientSettings(gradientSettings: C3.Array<UiSdlWaterfallChartGradientColorSettings | null> | Array<IUiSdlWaterfallChartGradientColorSettings | null>): UiSdlWaterfallChartReact;

  readonly totalGradientSettings?: C3.Array<UiSdlWaterfallChartGradientColorSettings | null>;
  withTotalGradientSettings(totalGradientSettings: C3.Array<UiSdlWaterfallChartGradientColorSettings | null> | Array<IUiSdlWaterfallChartGradientColorSettings | null>): UiSdlWaterfallChartReact;
}

