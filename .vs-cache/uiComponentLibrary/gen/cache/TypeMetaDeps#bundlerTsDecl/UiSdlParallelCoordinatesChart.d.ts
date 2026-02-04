export interface UiSdlParallelCoordinatesChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlParallelCoordinatesChart;

  readonly id?: string | null;
  withId(id: string | null): UiSdlParallelCoordinatesChart;

  readonly name?: string | null;
  withName(name: string | null): UiSdlParallelCoordinatesChart;

  readonly dataSpec?: UiSdlParallelCoordinatesChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlParallelCoordinatesChartDataSpec | null): UiSdlParallelCoordinatesChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlParallelCoordinatesChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlParallelCoordinatesChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlParallelCoordinatesChart;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlParallelCoordinatesChart;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlParallelCoordinatesChart;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlParallelCoordinatesChart;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlParallelCoordinatesChart;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlParallelCoordinatesChart;

  readonly axesDataSpec?: UiSdlParallelCoordinatesAxesDataSpec | null;
  withAxesDataSpec(axesDataSpec: IUiSdlParallelCoordinatesAxesDataSpec | null): UiSdlParallelCoordinatesChart;

  readonly axes?: C3.Array<string | null>;
  withAxes(axes: C3.Array<string | null> | Array<string | null>): UiSdlParallelCoordinatesChart;

  readonly smoothLine?: boolean;
  withSmoothLine(smoothLine: boolean): UiSdlParallelCoordinatesChart;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlParallelCoordinatesChart;

  readonly enableAxesDropdownList?: boolean;
  withEnableAxesDropdownList(enableAxesDropdownList: boolean): UiSdlParallelCoordinatesChart;

  readonly parallelAxes?: C3.Array<UiSdlParallelCoordinatesChartAxisConfig | null>;
  withParallelAxes(parallelAxes: C3.Array<UiSdlParallelCoordinatesChartAxisConfig | null> | Array<IUiSdlParallelCoordinatesChartAxisConfig | null>): UiSdlParallelCoordinatesChart;

  readonly invertedAxes?: C3.Array<number | null>;
  withInvertedAxes(invertedAxes: C3.Array<number | null> | Array<number | null>): UiSdlParallelCoordinatesChart;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlParallelCoordinatesChart;

  readonly colors?: C3.Array<string | null>;
  withColors(colors: C3.Array<string | null> | Array<string | null>): UiSdlParallelCoordinatesChart;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlParallelCoordinatesChart;
}

