export interface UiSdlScatterPlotReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlScatterPlotReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlScatterPlotReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlScatterPlotReact;

  readonly dataSpec?: UiSdlScatterPlotDataSpec | null;
  withDataSpec(dataSpec: IUiSdlScatterPlotDataSpec | null): UiSdlScatterPlotReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlScatterPlotReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlScatterPlotReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlScatterPlotReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlScatterPlotReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlScatterPlotReact;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlScatterPlotReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlScatterPlotReact;

  readonly data?: any | null;
  withData(data: any | null): UiSdlScatterPlotReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlScatterPlotReact;

  readonly xAxisConfig?: UiSdlScatterPlotAxisConfig | null;
  withXAxisConfig(xAxisConfig: IUiSdlScatterPlotAxisConfig | null): UiSdlScatterPlotReact;

  readonly yAxisConfig?: UiSdlScatterPlotAxisConfig | null;
  withYAxisConfig(yAxisConfig: IUiSdlScatterPlotAxisConfig | null): UiSdlScatterPlotReact;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlScatterPlotReact;

  readonly legendConfig?: UiSdlChartLegend | null;
  withLegendConfig(legendConfig: IUiSdlChartLegend | null): UiSdlScatterPlotReact;

  readonly visualMapConfig?: UiSdlChartEChartVisualMapConfig | null;
  withVisualMapConfig(visualMapConfig: IUiSdlChartEChartVisualMapConfig | null): UiSdlScatterPlotReact;

  readonly dragToZoom?: boolean;
  withDragToZoom(dragToZoom: boolean): UiSdlScatterPlotReact;

  readonly exportSelectedData?: boolean;
  withExportSelectedData(exportSelectedData: boolean): UiSdlScatterPlotReact;

  readonly tooltipConfig?: UiSdlScatterPlotTooltipConfig | null;
  withTooltipConfig(tooltipConfig: IUiSdlScatterPlotTooltipConfig | null): UiSdlScatterPlotReact;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlScatterPlotReact;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlScatterPlotReact;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlScatterPlotReact;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlScatterPlotReact;
}

