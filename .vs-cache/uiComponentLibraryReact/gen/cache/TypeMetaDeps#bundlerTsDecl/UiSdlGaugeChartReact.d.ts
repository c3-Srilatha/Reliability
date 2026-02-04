export interface UiSdlGaugeChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGaugeChartReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGaugeChartReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGaugeChartReact;

  readonly dataSpec?: UiSdlGaugeChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlGaugeChartDataSpec | null): UiSdlGaugeChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGaugeChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGaugeChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGaugeChartReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlGaugeChartReact;

  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlGaugeChartReact;

  readonly header?: UiSdlGaugeChartHeader | null;
  withHeader(header: IUiSdlGaugeChartHeader | null): UiSdlGaugeChartReact;

  readonly chartStyle?: string | null;
  withChartStyle(chartStyle: string | null): UiSdlGaugeChartReact;

  readonly startAngle?: string | null;
  withStartAngle(startAngle: string | null): UiSdlGaugeChartReact;
}

