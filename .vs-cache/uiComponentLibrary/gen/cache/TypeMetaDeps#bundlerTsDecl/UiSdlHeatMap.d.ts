export interface UiSdlHeatMap {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlHeatMap;

  readonly id?: string | null;
  withId(id: string | null): UiSdlHeatMap;

  readonly name?: string | null;
  withName(name: string | null): UiSdlHeatMap;

  readonly dataSpec?: UiSdlHeatMapDataSpec | null;
  withDataSpec(dataSpec: IUiSdlHeatMapDataSpec | null): UiSdlHeatMap;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlHeatMap;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlHeatMap;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlHeatMap;

  readonly header?: UiSdlComponentTitle | null;
  withHeader(header: IUiSdlComponentTitle | null): UiSdlHeatMap;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlHeatMap;

  readonly xAxis?: UiSdlHeatMapXAxisConfig | null;
  withXAxis(xAxis: IUiSdlHeatMapXAxisConfig | null): UiSdlHeatMap;

  readonly yAxis?: UiSdlHeatMapYAxisConfig | null;
  withYAxis(yAxis: IUiSdlHeatMapYAxisConfig | null): UiSdlHeatMap;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlHeatMap;

  readonly legend?: UiSdlHeatMapLegend | null;
  withLegend(legend: IUiSdlHeatMapLegend | null): UiSdlHeatMap;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlHeatMap;

  readonly monthInterval?: boolean;
  withMonthInterval(monthInterval: boolean): UiSdlHeatMap;

  readonly gradientTheme?: string | null;
  withGradientTheme(gradientTheme: string | null): UiSdlHeatMap;

  readonly customGradientTheme?: C3.Array<string | null>;
  withCustomGradientTheme(customGradientTheme: C3.Array<string | null> | Array<string | null>): UiSdlHeatMap;

  readonly dataSelection?: boolean;
  withDataSelection(dataSelection: boolean): UiSdlHeatMap;
}

