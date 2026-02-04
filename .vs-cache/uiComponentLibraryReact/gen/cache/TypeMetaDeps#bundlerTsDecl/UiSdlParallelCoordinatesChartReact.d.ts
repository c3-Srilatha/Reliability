export interface UiSdlParallelCoordinatesChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlParallelCoordinatesChartReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlParallelCoordinatesChartReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlParallelCoordinatesChartReact;

  readonly dataSpec?: UiSdlParallelCoordinatesChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlParallelCoordinatesChartDataSpec | null): UiSdlParallelCoordinatesChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlParallelCoordinatesChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlParallelCoordinatesChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlParallelCoordinatesChartReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlParallelCoordinatesChartReact;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlParallelCoordinatesChartReact;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlParallelCoordinatesChartReact;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlParallelCoordinatesChartReact;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlParallelCoordinatesChartReact;

  readonly axesDataSpec?: UiSdlParallelCoordinatesAxesDataSpec | null;
  withAxesDataSpec(axesDataSpec: IUiSdlParallelCoordinatesAxesDataSpec | null): UiSdlParallelCoordinatesChartReact;

  readonly axes?: C3.Array<string | null>;
  withAxes(axes: C3.Array<string | null> | Array<string | null>): UiSdlParallelCoordinatesChartReact;

  readonly smoothLine?: boolean;
  withSmoothLine(smoothLine: boolean): UiSdlParallelCoordinatesChartReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlParallelCoordinatesChartReact;

  readonly enableAxesDropdownList?: boolean;
  withEnableAxesDropdownList(enableAxesDropdownList: boolean): UiSdlParallelCoordinatesChartReact;

  readonly parallelAxes?: C3.Array<UiSdlParallelCoordinatesChartAxisConfig | null>;
  withParallelAxes(parallelAxes: C3.Array<UiSdlParallelCoordinatesChartAxisConfig | null> | Array<IUiSdlParallelCoordinatesChartAxisConfig | null>): UiSdlParallelCoordinatesChartReact;

  readonly invertedAxes?: C3.Array<number | null>;
  withInvertedAxes(invertedAxes: C3.Array<number | null> | Array<number | null>): UiSdlParallelCoordinatesChartReact;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlParallelCoordinatesChartReact;

  readonly colors?: C3.Array<string | null>;
  withColors(colors: C3.Array<string | null> | Array<string | null>): UiSdlParallelCoordinatesChartReact;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlParallelCoordinatesChartReact;
}

