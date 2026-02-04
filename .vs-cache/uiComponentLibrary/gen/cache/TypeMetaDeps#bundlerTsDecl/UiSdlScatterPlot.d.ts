export interface UiSdlScatterPlot {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlScatterPlot;

  readonly id?: string | null;
  withId(id: string | null): UiSdlScatterPlot;

  readonly name?: string | null;
  withName(name: string | null): UiSdlScatterPlot;

  readonly dataSpec?: UiSdlScatterPlotDataSpec | null;
  withDataSpec(dataSpec: IUiSdlScatterPlotDataSpec | null): UiSdlScatterPlot;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlScatterPlot;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlScatterPlot;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlScatterPlot;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlScatterPlot;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlScatterPlot;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlScatterPlot;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlScatterPlot;

  readonly data?: any | null;
  withData(data: any | null): UiSdlScatterPlot;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlScatterPlot;

  readonly xAxisConfig?: UiSdlScatterPlotAxisConfig | null;
  withXAxisConfig(xAxisConfig: IUiSdlScatterPlotAxisConfig | null): UiSdlScatterPlot;

  readonly yAxisConfig?: UiSdlScatterPlotAxisConfig | null;
  withYAxisConfig(yAxisConfig: IUiSdlScatterPlotAxisConfig | null): UiSdlScatterPlot;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlScatterPlot;

  readonly legendConfig?: UiSdlChartLegend | null;
  withLegendConfig(legendConfig: IUiSdlChartLegend | null): UiSdlScatterPlot;

  readonly visualMapConfig?: UiSdlChartEChartVisualMapConfig | null;
  withVisualMapConfig(visualMapConfig: IUiSdlChartEChartVisualMapConfig | null): UiSdlScatterPlot;

  readonly dragToZoom?: boolean;
  withDragToZoom(dragToZoom: boolean): UiSdlScatterPlot;

  readonly exportSelectedData?: boolean;
  withExportSelectedData(exportSelectedData: boolean): UiSdlScatterPlot;

  readonly tooltipConfig?: UiSdlScatterPlotTooltipConfig | null;
  withTooltipConfig(tooltipConfig: IUiSdlScatterPlotTooltipConfig | null): UiSdlScatterPlot;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlScatterPlot;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlScatterPlot;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlScatterPlot;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlScatterPlot;
}

