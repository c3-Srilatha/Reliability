export interface UiSdlGaugeChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGaugeChart;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGaugeChart;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGaugeChart;

  readonly dataSpec?: UiSdlGaugeChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlGaugeChartDataSpec | null): UiSdlGaugeChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGaugeChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGaugeChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGaugeChart;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlGaugeChart;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlGaugeChart;

  readonly header?: UiSdlGaugeChartHeader | null;
  withHeader(header: IUiSdlGaugeChartHeader | null): UiSdlGaugeChart;

  readonly chartStyle?: string | null;
  withChartStyle(chartStyle: string | null): UiSdlGaugeChart;

  readonly startAngle?: string | null;
  withStartAngle(startAngle: string | null): UiSdlGaugeChart;
}

