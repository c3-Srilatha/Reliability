export interface UiSdlPieChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPieChart;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPieChart;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPieChart;

  readonly dataSpec?: UiSdlPieChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlPieChartDataSpec | null): UiSdlPieChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPieChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPieChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPieChart;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlPieChart;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlPieChart;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlPieChart;

  readonly legendConfig?: UiSdlChartLegend | null;
  withLegendConfig(legendConfig: IUiSdlChartLegend | null): UiSdlPieChart;

  readonly chartType?: string | null;
  withChartType(chartType: string | null): UiSdlPieChart;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlPieChart;

  readonly tooltip?: boolean;
  withTooltip(tooltip: boolean): UiSdlPieChart;

  readonly showLabel?: boolean;
  withShowLabel(showLabel: boolean): UiSdlPieChart;

  readonly data?: any | null;
  withData(data: any | null): UiSdlPieChart;

  readonly breakpoints?: C3.Array<number | null>;
  withBreakpoints(breakpoints: C3.Array<number | null> | Array<number | null>): UiSdlPieChart;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlPieChart;
}

