export interface UiSdlHeatMapReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlHeatMapReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlHeatMapReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlHeatMapReact;

  readonly dataSpec?: UiSdlHeatMapDataSpec | null;
  withDataSpec(dataSpec: IUiSdlHeatMapDataSpec | null): UiSdlHeatMapReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlHeatMapReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlHeatMapReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlHeatMapReact;

  readonly header?: UiSdlComponentTitle | null;
  withHeader(header: IUiSdlComponentTitle | null): UiSdlHeatMapReact;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlHeatMapReact;

  readonly xAxis?: UiSdlHeatMapXAxisConfig | null;
  withXAxis(xAxis: IUiSdlHeatMapXAxisConfig | null): UiSdlHeatMapReact;

  readonly yAxis?: UiSdlHeatMapYAxisConfig | null;
  withYAxis(yAxis: IUiSdlHeatMapYAxisConfig | null): UiSdlHeatMapReact;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlHeatMapReact;

  readonly legend?: UiSdlHeatMapLegend | null;
  withLegend(legend: IUiSdlHeatMapLegend | null): UiSdlHeatMapReact;

  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlHeatMapReact;

  readonly monthInterval?: boolean;
  withMonthInterval(monthInterval: boolean): UiSdlHeatMapReact;

  readonly gradientTheme?: string | null;
  withGradientTheme(gradientTheme: string | null): UiSdlHeatMapReact;

  readonly customGradientTheme?: C3.Array<string | null>;
  withCustomGradientTheme(customGradientTheme: C3.Array<string | null> | Array<string | null>): UiSdlHeatMapReact;

  readonly dataSelection?: boolean;
  withDataSelection(dataSelection: boolean): UiSdlHeatMapReact;
}

