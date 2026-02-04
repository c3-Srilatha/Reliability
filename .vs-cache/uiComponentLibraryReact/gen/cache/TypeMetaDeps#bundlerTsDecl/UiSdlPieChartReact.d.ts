export interface UiSdlPieChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPieChartReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPieChartReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPieChartReact;

  readonly dataSpec?: UiSdlPieChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlPieChartDataSpec | null): UiSdlPieChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPieChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPieChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPieChartReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlPieChartReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlPieChartReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlPieChartReact;

  readonly legendConfig?: UiSdlChartLegend | null;
  withLegendConfig(legendConfig: IUiSdlChartLegend | null): UiSdlPieChartReact;

  readonly chartType?: string | null;
  withChartType(chartType: string | null): UiSdlPieChartReact;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlPieChartReact;

  readonly tooltip?: boolean;
  withTooltip(tooltip: boolean): UiSdlPieChartReact;

  readonly showLabel?: boolean;
  withShowLabel(showLabel: boolean): UiSdlPieChartReact;

  readonly data?: any | null;
  withData(data: any | null): UiSdlPieChartReact;

  readonly breakpoints?: C3.Array<number | null>;
  withBreakpoints(breakpoints: C3.Array<number | null> | Array<number | null>): UiSdlPieChartReact;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlPieChartReact;
}

