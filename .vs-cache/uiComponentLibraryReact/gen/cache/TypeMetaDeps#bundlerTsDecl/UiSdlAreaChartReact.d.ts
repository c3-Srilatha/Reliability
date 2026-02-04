export interface UiSdlAreaChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAreaChartReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAreaChartReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAreaChartReact;

  readonly dataSpec?: UiSdlAreaChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlAreaChartDataSpec | null): UiSdlAreaChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAreaChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAreaChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAreaChartReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlAreaChartReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlAreaChartReact;

  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlAreaChartReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlAreaChartReact;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlAreaChartReact;

  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlAreaChartReact;

  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlAreaChartReact;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlAreaChartReact;

  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlAreaChartReact;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlAreaChartReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlAreaChartReact;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): UiSdlAreaChartReact;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlAreaChartReact;

  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlAreaChartReact;

  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): UiSdlAreaChartReact;

  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): UiSdlAreaChartReact;

  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): UiSdlAreaChartReact;

  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): UiSdlAreaChartReact;

  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): UiSdlAreaChartReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlAreaChartReact;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlAreaChartReact;

  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): UiSdlAreaChartReact;

  readonly eventDataSpec?: UiSdlTimeseriesLineBarChartEventDataSpec | null;
  withEventDataSpec(eventDataSpec: IUiSdlTimeseriesLineBarChartEventDataSpec | null): UiSdlAreaChartReact;

  readonly eventData?: Obj | null;
  withEventData(eventData: IObj | null): UiSdlAreaChartReact;

  readonly xAxis?: UiSdlTimeseriesLineBarChartXAxisConfig | null | UiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null;
  withXAxis(xAxis: IUiSdlTimeseriesLineBarChartXAxisConfig | null | IUiSdlTimeseriesLineBarChartXAxisStaticConfig | null | null): UiSdlAreaChartReact;

  readonly showNowLine?: boolean;
  withShowNowLine(showNowLine: boolean): UiSdlAreaChartReact;

  readonly smooth?: boolean;
  withSmooth(smooth: boolean): UiSdlAreaChartReact;

  readonly areaOpacity?: number | null;
  withAreaOpacity(areaOpacity: number | null): UiSdlAreaChartReact;

  readonly chartActions?: C3.Array<UiSdlAction | null>;
  withChartActions(chartActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlAreaChartReact;

  readonly tooltipTrigger?: string | null;
  withTooltipTrigger(tooltipTrigger: string | null): UiSdlAreaChartReact;

  readonly hideMissingDataPoints?: boolean;
  withHideMissingDataPoints(hideMissingDataPoints: boolean): UiSdlAreaChartReact;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlAreaChartReact;

  readonly displayStartDate?: DateTime | null;
  withDisplayStartDate(displayStartDate: DateTime | Date | string | null): UiSdlAreaChartReact;

  readonly displayEndDate?: DateTime | null;
  withDisplayEndDate(displayEndDate: DateTime | Date | string | null): UiSdlAreaChartReact;

  readonly displayInterval?: string | null;
  withDisplayInterval(displayInterval: string | null): UiSdlAreaChartReact;

  readonly shouldOverrideUserConfigIdWithDataGeneratedId?: boolean;
  withShouldOverrideUserConfigIdWithDataGeneratedId(shouldOverrideUserConfigIdWithDataGeneratedId: boolean): UiSdlAreaChartReact;

  readonly dataSelection?: boolean;
  withDataSelection(dataSelection: boolean): UiSdlAreaChartReact;
}

